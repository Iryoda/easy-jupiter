import { IScheduleResponse as ISchedule } from 'jupiter-reader';
import IGoogleEvents from 'interfaces';
import { add, formatISO, nextMonday, set, sub } from 'date-fns';
import emojis from './emojis';

interface DateProps {
    lastMonday: Date;
    classDay: number;
    startTime: string;
    endTime: string;
}

type IClassMap = {
    [name: string]: {
        color: number;
        emoji: string;
    };
};

const colorStack: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const classMap: IClassMap = {};

const handleDate = ({
    lastMonday,
    classDay,
    startTime,
    endTime,
}: DateProps): { startDate: string; endDate: string } => {
    const startDate = formatISO(
        add(lastMonday, {
            days: classDay,
            hours: Number(startTime.split(':')[0]),
            minutes: Number(startTime.split(':')[1]),
        }),
    );
    const endDate = formatISO(
        add(lastMonday, {
            days: classDay,
            hours: Number(endTime.split(':')[0]),
            minutes: Number(endTime.split(':')[1]),
        }),
    );

    return {
        startDate,
        endDate,
    };
};

export const createEvents = (
    file: ISchedule[],
    withEmoji?: boolean,
): IGoogleEvents[] => {
    const events: IGoogleEvents[] = [{} as IGoogleEvents];
    const today = new Date();
    const lastMonday = set(sub(nextMonday(today), { days: 7 }), {
        hours: 0,
        minutes: 0,
        milliseconds: 0,
    });

    file.forEach((item) => {
        item.classes.forEach((schedule) => {
            if (!classMap[schedule.name]) {
                const random = Math.floor(Math.random() * emojis.length);

                classMap[schedule.name] = {
                    color: colorStack.pop() || 1,
                    emoji: emojis[random],
                };
            }

            const dates = handleDate({
                lastMonday,
                classDay: schedule.day,
                startTime: item.initTime,
                endTime: item.endTime,
            });

            const event = {
                summary: withEmoji
                    ? `${classMap[schedule.name].emoji} ${schedule.name}`
                    : `${schedule.name}`,
                description: `Aula de ${schedule.name}`,
                creator: 'easyjupiter',
                start: {
                    dateTime: dates.startDate,
                    timeZone: `America/Sao_Paulo`,
                },
                end: {
                    dateTime: dates.endDate,
                    timeZone: `America/Sao_Paulo`,
                },
                colorId: classMap[schedule.name].color,
                attendees: [],
                recurrence: [`RRULE:FREQ=WEEKLY;`],
                reminders: {
                    useDefault: true,
                },
            };
            events.push(event);
        });
    });

    return events;
};
