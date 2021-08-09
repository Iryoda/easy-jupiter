import { IScheduleResponse } from 'jupiter-reader/lib'
import getConfig from 'next/config'
import { createEvents } from 'shared/createEvents'

const GoogleLoginRequest = async (
    file: IScheduleResponse[],
    setStep: (value: string) => void
) => {
    try {
        const { publicRuntimeConfig } = getConfig()

        const { gapi } = window

        gapi.load('client:auth2', async () => {
            await gapi.client.init({
                apiKey: `${publicRuntimeConfig.apiKey}`,
                clientId: `${publicRuntimeConfig.clientId}`,
                discoveryDocs: [`${publicRuntimeConfig.discoveryDocs}`],
                scope: `${publicRuntimeConfig.scope}`
            })

            await gapi.client.load('calendar', 'v3')

            await gapi.auth2.getAuthInstance().signIn()
            const events = createEvents(file)

            const batch = gapi.client.newBatch()

            events.map((item) =>
                batch.add(
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    gapi.client.calendar.events.insert({
                        calendarId: 'primary',
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        resource: item
                    })
                )
            )

            await batch
            setStep('third')
        })
    } catch (e) {
        throw new Error(`Couldn't perform google integrations`)
    }
}
export default GoogleLoginRequest
