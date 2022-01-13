/* eslint-disable jsx-a11y/control-has-associated-label */
import * as S from './styles';

type CheckBoxProps = {
    setChecked: (value: boolean) => void;
    checked: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = ({
    checked,
    children,
    setChecked,
}) => {
    return (
        <S.Wrapper checked={checked}>
            <button type="button" onClick={() => setChecked(!checked)} />
            <p>{children}</p>
        </S.Wrapper>
    );
};

export default CheckBox;
