import {useNavigate} from 'react-router-dom';
import {ArrowLeft} from 'lucide-react';
import {useSelector} from "react-redux";
import FireworksCanvas from './FireworksCanvas.jsx';
/**
 * FireworksDisplay component displays the fireworks canvas
 * @returns {JSX.Element} - The fireworks display component
 */
const FireworksDisplay = () => {
    const navigate = useNavigate();
    const isDark = useSelector(state => state.theme.isDark);

    return (
        <div className="relative">
            <button
                onClick={() => navigate('/')}
                className={`absolute top-4 left-4 z-10 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                    ${isDark
                    ? 'bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75'
                    : 'bg-gray-200 bg-opacity-50 text-gray-900 hover:bg-opacity-75'}`}
            >
                <ArrowLeft className="w-5 h-5"/>
                <span>Back</span>
            </button>
            <FireworksCanvas/>
        </div>
    );
};

export default FireworksDisplay;