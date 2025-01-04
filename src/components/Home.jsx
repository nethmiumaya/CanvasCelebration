import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ArrowRight, Sparkles} from 'lucide-react';
import ColorPicker from './ColorPicker';
import StyleSelector from './StyleSelector';
import ThemeToggle from './ThemeToggle';
import {setMessages, setSelectedColor} from '../store/FireWorksSlice.js';
/**
 * Home component is the main page of the application where users can input text, select colors, and generate fireworks.
 * @returns {JSX.Element}
 */
const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [selectedColor, setSelectedColorLocal] = useState('');

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
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
            <div className="max-w-2xl mx-auto space-y-8">
                <header className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Canvas Celebration
                    </h1>
                    <p className="mt-2 text-gray-400">Create stunning firework displays with your text</p>
                </header>

                <div className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-xl">
                    {/* Text Input */}
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-300 mb-2">
                            Enter Your Text
                        </label>
                        <input
                            type="text"
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Type something..."
                        />
                    </div>

                    {/* Color Selection */}
                    <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange}/>

                    {/* Firework Styles */}
                    <StyleSelector/>

                    {/* Theme Toggle */}
                    <ThemeToggle/>

                    {/* Generate Button */}
                    <button
                        onClick={handleGenerate}
                        disabled={!text.trim()}
                        className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md font-medium transition-all hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
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