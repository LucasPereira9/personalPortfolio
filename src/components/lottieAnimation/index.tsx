import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function LottieAnimation({ animationPath }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      const response = await fetch(animationPath);
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimationData();
  }, [animationPath]);

  if (!animationData) {
    return <h3>...</h3>;
  }

  return <Lottie animationData={animationData} loop={false} />;
};