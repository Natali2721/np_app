import { Input } from 'styles/Element.styled';

const SearchInput = () => (
  <Input
    type="text"
    name="TTN"
    pattern="^[0-9]{14}$"
    title="May contain only numbers"
    required
    autoComplete="off"
    autoFocus
    placeholder="Введіть номер ТТН..."
  />
);

export default SearchInput;
