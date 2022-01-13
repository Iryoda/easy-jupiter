import { useState } from 'react';
import { useFile } from 'hooks/useFile';
import { useStep } from 'hooks/useSteps';

import Image from 'next/image';
import Head from 'next/head';
import CheckBox from 'components/CheckBox';

import GoogleLoginRequest from 'services/googleLogin.service';

import * as S from './styles';

const InputLayout = () => {
    const { file } = useFile();
    const { setStep } = useStep();
    const [isLoading, setIsLoading] = useState(false);
    const [withEmoji, setWithEmoji] = useState(false);

    const handleCreateEvent = async () => {
        try {
            await GoogleLoginRequest(file, setStep, setIsLoading, withEmoji);
        } catch (e) {
            setStep('one');
        }
    };

    return (
        <S.Wrapper>
            <Head>
                <script
                    src="https://apis.google.com/js/api.js"
                    type="text/javascript"
                />
            </Head>
            {isLoading ? (
                <h1>
                    Estamos criando seu calendar! Espere só um pouquinho ...
                </h1>
            ) : (
                <>
                    <h1>
                        Tudo em órbita!
                        <br /> Agora só precisamos do seu email para adcionarmos
                        suas aulas
                    </h1>
                    <button type="button" onClick={handleCreateEvent}>
                        <p> Logar com google</p>
                        <Image
                            src="/assets/google.svg"
                            width={36}
                            height={36}
                            alt="Logo da Google"
                        />
                    </button>
                    <div>
                        <CheckBox checked={withEmoji} setChecked={setWithEmoji}>
                            Ativar emojis aleatórios nos nomes das disciplinas?
                            (Ex: ⚡ PCS0000-0001)
                        </CheckBox>
                    </div>
                </>
            )}
        </S.Wrapper>
    );
};

export default InputLayout;
