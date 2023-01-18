import loaderLottie from './loaderLottie.json';
import Lottie from 'react-lottie'

const LoaderComponent = ({ height, width }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loaderLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={height ?? 50}
                width={width ?? 50}
            />
        </div>)
}

export default LoaderComponent;
