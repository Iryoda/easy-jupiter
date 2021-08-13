import { useFile } from 'hooks/useFile'
import { useStep } from 'hooks/useSteps'
import Head from 'next/head'
import React from 'react'
import GoogleLoginRequest from 'services/googleLogin.service'
import * as S from './styles'

const InputLayout = () => {
    const { file } = useFile()
    const { setStep } = useStep()

    const handleCreateEvent = async () => {
        try {
            await GoogleLoginRequest(file, setStep)
        } catch (e) {
            setStep('one')
        }
    }

    return (
        <S.Wrapper>
            <Head>
                <script
                    src="https://apis.google.com/js/api.js"
                    type="text/javascript"
                />
            </Head>
            <h1>
                Tudo em órbita!
                <br /> Agora só precisamos do seu email para adcionarmos suas
                aulas
            </h1>
            <button type="button" onClick={handleCreateEvent}>
                Logar no google
            </button>
        </S.Wrapper>
    )
}

export default InputLayout
