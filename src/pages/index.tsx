import { NextPage } from 'next'
import { GlobalContainer } from 'components/GlobalContainer/styles'
import { useStep } from 'hooks/useSteps'
import Header from 'components/Header'
import HomeLayout from 'templates/HomeLayout'
import InputLayout from 'templates/InputDataLayout'
import FinishLayout from 'templates/FinishLayout'
import * as S from '../styles/Home'

type layoutsProps = {
    [key: string]: JSX.Element
    first: JSX.Element
    second: JSX.Element
    third: JSX.Element
}

const Home: NextPage = () => {
    const { step } = useStep()

    const layouts: layoutsProps = {
        first: <HomeLayout />,
        second: <InputLayout />,
        third: <FinishLayout />
    }

    return (
        <GlobalContainer>
            <Header />
            <S.Content>
                {layouts[step] ? layouts[step] : <h1>Error</h1>}
            </S.Content>
        </GlobalContainer>
    )
}

export default Home
