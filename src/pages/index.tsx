import { NextPage } from 'next';
import { useStep } from 'hooks/useSteps';
import HomeLayout from 'templates/HomeLayout';
import InputLayout from 'templates/InputDataLayout';
import FinishLayout from 'templates/FinishLayout';
import Base from 'templates/Base';

type layoutsProps = {
    [key: string]: JSX.Element;
    first: JSX.Element;
    second: JSX.Element;
    third: JSX.Element;
};

const Home: NextPage = () => {
    const { step } = useStep();

    const layouts: layoutsProps = {
        first: <HomeLayout />,
        second: <InputLayout />,
        third: <FinishLayout />,
    };

    return <Base>{layouts[step] ? layouts[step] : <h1>Error</h1>}</Base>;
};

export default Home;
