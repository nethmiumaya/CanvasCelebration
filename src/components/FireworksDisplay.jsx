import {useNavigate} from 'react-router-dom';
import {ArrowLeft} from 'lucide-react';
import FireworksCanvas from './FireworksCanvas';
/**
 * FireworksDisplay component displays the fireworks canvas
 * @returns {JSX.Element}
 */
const FireworksDisplay = () => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <button
                onClick={() => navigate('/')}
                className="absolute top-4 left-4 z-10 flex items-center space-x-2 px-4 py-2
                bg-gray-800 bg-opacity-50 rounded-lg text-white hover:bg-opacity-75 transition-all"
            >
                <ArrowLeft className="w-5 h-5"/>
                <span>Back</span>
            </button>
            <FireworksCanvas/>
        </div>
    );
};

export default FireworksDisplay;