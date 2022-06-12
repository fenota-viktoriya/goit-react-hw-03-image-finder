import { SpinnerCircular } from 'spinners-react';
import { LoaderContainer } from './Loader.styled';

export function Loader() {
  return (
    <LoaderContainer>
      <SpinnerCircular
        size={80}
        thickness={121}
        speed={100}
        color="#36ad47"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </LoaderContainer>
  );
}
