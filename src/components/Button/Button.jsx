import { BtnLoad } from './Button.styled';

export function ButtonNext({ getNextPage }) {
  return (
    <BtnLoad
      type="button"
      onClick={() => {
        getNextPage();
      }}
    >
      next
    </BtnLoad>
  );
}
