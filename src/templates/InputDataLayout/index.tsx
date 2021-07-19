import Section from 'components/Section'
import { useFile } from 'hooks/useFile'
import { useStep } from 'hooks/useSteps'
import Head from 'next/head'
import React from 'react'
import { createEvents } from 'shared/createEvents'
import * as S from './styles'

const InputLayout = () => {
    const { file } = useFile()
    const { setStep } = useStep()

    const handleCreateEvent = () => {
        const { gapi } = window

        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: `AIzaSyAXFf_OKMdqPO5qItbeIt7seQ6S7UY388U`,
                clientId: `842129267862-c7pnpkpn90irnhe04q7k9m2g1af6t8og.apps.googleusercontent.com`,
                discoveryDocs: [
                    `https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest`
                ],
                scope: `https://www.googleapis.com/auth/calendar`
            })

            gapi.client.load('calendar', 'v3')

            gapi.auth2
                .getAuthInstance()
                .signIn()
                .then(() => {
                    const events = createEvents(file)

                    console.log(events)

                    const batch = gapi.client.newBatch()
                    events.map((item) =>
                        batch.add(
                            gapi.client.calendar.events.insert({
                                calendarId: 'primary',
                                resource: item
                            })
                        )
                    )

                    batch.then(() => {
                        setStep('third')
                    })
                })
        })
    }

    return (
        <Section>
            <Head>
                <script
                    src="http://apis.google.com/js/api.js"
                    type="text/javascript"
                />
            </Head>
            <S.Wrapper>
                <h1>
                    Tudo em órbita!
                    <br /> Agora só precisamos do seu email para adcionarmos
                    suas aulas
                </h1>
                <button type="button" onClick={handleCreateEvent}>
                    Logar no google
                </button>
            </S.Wrapper>
        </Section>
    )
}

export default InputLayout
