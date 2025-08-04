import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const MessageBack = ({path}) => {
  return (
    <DotLottieReact
      src={`/animations/${path}.lottie`}
      loop
      autoplay
    />
  );
};

export default MessageBack;
