import { NextPage } from 'next'
import { GlobalContainer } from 'components/GlobalContainer/styles'
import { useStep } from 'hooks/useSteps'
import * as S from 'styles/Home/styles'
import Header from 'components/Header'
import HomeLayout from 'templates/HomeLayout'
import InputLayout from 'templates/InputDataLayout'
import FinishLayout from 'templates/FinishLayout'

const Home: NextPage = () => {
    const { step } = useStep()

    const layouts: any = {
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
