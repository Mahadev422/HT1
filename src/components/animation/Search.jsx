import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const App = ({path}) => {
  return (
    <DotLottieReact
      src={`/animations/${path}.lottie`}
      loop
      autoplay
    />
  );
};

export default App;
