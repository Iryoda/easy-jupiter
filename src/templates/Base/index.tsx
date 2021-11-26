import { GlobalContainer } from 'components/GlobalContainer/styles';
import Header from 'components/Header';
import * as S from './styles';

const Base: React.FC = ({ children }) => (
    <GlobalContainer>
        <Header />
        <S.Content>{children}</S.Content>
    </GlobalContainer>
);

export default Base;
