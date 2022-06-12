import PropTypes from 'prop-types';
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

ButtonNext.propTypes = {
  getNextPage: PropTypes.func.isRequired,
};
