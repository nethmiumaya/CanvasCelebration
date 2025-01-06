import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {ArrowRight, Sparkles} from 'lucide-react';
import ColorPicker from './ColorPicker';
import StyleSelector from './StyleSelector';
import ThemeToggle from './ThemeToggle';
import {setMessages, setSelectedColor} from '../store/FireWorksSlice.js';
/**
 * Home component is the main page of the application where users can enter text and generate fireworks.
 * @returns {JSX.Element} - The Home component
 */
const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [selectedColor, setSelectedColorLocal] = useState('');
    const isDark = useSelector(state => state.theme.isDark);

    const handleColorChange = (color) => {
        setSelectedColorLocal(color);
        dispatch(setSelectedColor(color));
    };

    const handleGenerate = () => {
        if (!text.trim()) return;
        // Convert text to array of characters for fireworks
        const characters = text.split('');
        dispatch(setMessages(characters));
        navigate('/display');
    };

    return (
        <div className={`min-h-screen p-4 md:p-8 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className="max-w-2xl mx-auto space-y-8">
                <header className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Canvas Celebration
                    </h1>
                    <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Create stunning firework displays with your text
                    </p>
                </header>

                <div className={`space-y-6 p-6 rounded-lg shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                    <div>
                        <label htmlFor="text"
                               className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Enter Your Text
                        </label>
                        <input
                            type="text"
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className={`w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                ${isDark
                                ? 'bg-gray-700 border-gray-600'
                                : 'bg-gray-50 border-gray-300'}`}
                            placeholder="Type something..."
                        />
                    </div>

                    <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange}/>
                    <StyleSelector/>
                    <ThemeToggle/>

                    <button
                        onClick={handleGenerate}
                        disabled={!text.trim()}
                        className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r
                        from-purple-500 to-pink-500 rounded-md font-medium text-white transition-all
                        hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Sparkles className="w-5 h-5"/>
                        <span>Generate Fireworks</span>
                        <ArrowRight className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;