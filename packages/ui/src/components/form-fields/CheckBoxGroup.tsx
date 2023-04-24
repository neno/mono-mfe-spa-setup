import { StyledInlineFormList } from '../styled/StyledFormList';
import { CheckBox } from './CheckBox';

export interface CheckBoxGroupProps {
  title: string;
  items: { name: string; value: string | number }[];
}

export const CheckBoxGroup = ({ items, title }: CheckBoxGroupProps) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      <StyledInlineFormList>
        {items.map(({ name, value }) => (
          <li key={name}>
            <CheckBox name={name} value={value} />
          </li>
        ))}
      </StyledInlineFormList>
    </fieldset>
  );
};
