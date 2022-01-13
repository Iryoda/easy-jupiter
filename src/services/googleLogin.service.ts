import { IScheduleResponse } from 'jupiter-reader/lib';
import getConfig from 'next/config';
import { createEvents } from 'shared/createEvents';

type CalendarList =
    gapi.client.HttpRequestFulfilled<gapi.client.calendar.CalendarList>;
type Calendar = gapi.client.HttpRequestFulfilled<gapi.client.calendar.Calendar>;

const checkAndDeleteOldEasyJupiterCalender = async (
    calendarList: CalendarList,
): Promise<Calendar> => {
    const hasEasyJupiter = calendarList.result.items.find(
        (calendar) => calendar.summary === 'EasyJupiter',
    );

    if (hasEasyJupiter) {
        await gapi.client.calendar.calendars.delete({
            calendarId: hasEasyJupiter.id,
        });
    }

    const newCalendar = await gapi.client.calendar.calendars.insert({
        summary: 'EasyJupiter',
    });

    return newCalendar;
};

const GoogleLoginRequest = async (
    file: IScheduleResponse[],
    setStep: (value: string) => void,
    setIsLoading: (value: boolean) => void,
) => {
    try {
        const { publicRuntimeConfig } = getConfig();

        const { gapi } = window;

        gapi.load('client:auth2', async () => {
            await gapi.client.init({
                apiKey: `${publicRuntimeConfig.apiKey}`,
                clientId: `${publicRuntimeConfig.clientId}`,
                discoveryDocs: [`${publicRuntimeConfig.discoveryDocs}`],
                scope: `${publicRuntimeConfig.scope}`,
            });

            await gapi.client.load('calendar', 'v3');

            await gapi.auth2.getAuthInstance().signIn();

            setIsLoading(true);

            const getCalendarList =
                await gapi.client.calendar.calendarList.list();

            const newCalendar = await checkAndDeleteOldEasyJupiterCalender(
                getCalendarList,
            );

            const events = createEvents(file);

            const batch = gapi.client.newBatch();

            events.map((item) =>
                batch.add(
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    gapi.client.calendar.events.insert({
                        calendarId: newCalendar.result.id,
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        resource: item,
                    }),
                ),
            );

            await batch;
            setStep('third');
        });
    } catch (e) {
        throw new Error(`Couldn't perform google integrations`);
    }
};
export default GoogleLoginRequest;
