import { StyledLabel } from '../styled/StyledLabel';

interface CheckBoxProps {
  name: string;
  value: string | number;
}

export const CheckBox = ({ name, value }: CheckBoxProps) => {
  return (
    <StyledLabel>
      <input name={name} type='checkbox' value={value} />
      <span>{value}</span>
    </StyledLabel>
  );
};
