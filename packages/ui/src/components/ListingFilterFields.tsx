import { Button, PrimaryButton } from './buttons';
import { CheckBoxGroup } from './form-fields';
import { StyledInlineFormList } from './styled/StyledFormList';
import { StyledInput } from './styled/StyledInput';
import { StyledLabel } from './styled/StyledLabel';
import { StyledVerticalBox } from './styled/StyledVerticalBox';

const sububrs = [
  'Brooklyn',
  'Queens',
  'Manhattan',
  'Williamsburg',
  'East Village',
];

export const ListingFilterFields = () => {
  return (
    <StyledVerticalBox>
      <StyledInlineFormList>
        <li>
          <StyledLabel>
            <span>Price min</span>
            <StyledInput type='number' name='priceMin' />
          </StyledLabel>
        </li>
        <li>
          <StyledLabel>
            <span>Price max</span>
            <StyledInput type='number' name='priceMax' />
          </StyledLabel>
        </li>

        <li>
          <StyledLabel>
            <span>People min</span>
            <StyledInput type='number' name='accomodatesMin' />
          </StyledLabel>
        </li>
        <li>
          <StyledLabel>
            <span>People max</span>
            <StyledInput type='number' name='accomodatesMax' />
          </StyledLabel>
        </li>
      </StyledInlineFormList>
      <CheckBoxGroup
        title='Choose Suburb'
        items={sububrs.map((item) => ({ name: 'suburb', value: item }))}
      />
      <div>
        <PrimaryButton type='submit'>Submit</PrimaryButton>
        <Button type='reset'>Reset</Button>
      </div>
    </StyledVerticalBox>
  );
};
