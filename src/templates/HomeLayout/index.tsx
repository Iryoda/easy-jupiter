import DropArea from 'components/DropArea'
import Section from 'components/Section'
import { useState } from 'react'
import * as S from './styles'

const HomeLayout = () => {
    const [errorMsg, setErrorMsg] = useState('')

    return (
        <Section>
            <S.Wrapper>
                <h1>A solução para o maior problema dos estudantes da USP</h1>
                {errorMsg && <p>{errorMsg}</p>}
                <DropArea setErrorMensage={setErrorMsg} />
            </S.Wrapper>
        </Section>
    )
}

export default HomeLayout
