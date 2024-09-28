import { TypeAnimation } from 'react-type-animation';
import "../styles/components/textEffect.sass"

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'STUDENT',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'PROGRAMMER',
        1500,
        'CODER',
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="text-effect"
      repeat={Infinity}
    />
  );
};

export default TextEffect;