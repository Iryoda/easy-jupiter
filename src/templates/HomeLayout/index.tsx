import DropArea from 'components/DropArea'
import { useState } from 'react'
import * as S from './styles'

const HomeLayout = () => {
    const [errorMsg, setErrorMsg] = useState('')

    return (
        <S.Wrapper>
            {errorMsg && <p>{errorMsg}</p>}
            <DropArea setErrorMensage={setErrorMsg} />
        </S.Wrapper>
    )
}

export default HomeLayout
