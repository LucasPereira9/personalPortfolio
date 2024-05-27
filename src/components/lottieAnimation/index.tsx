import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { ILottieProps } from './lottie.structure';

export default function LottieAnimation(props: ILottieProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      const response = await fetch(props.animationPath);
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimationData();
  }, [props.animationPath]);

  if (!animationData) {
    return <h3>...</h3>;
  }

  return <Lottie animationData={animationData} loop={false} />;
};