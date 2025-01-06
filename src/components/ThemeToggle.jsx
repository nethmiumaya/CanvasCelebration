import {useDispatch, useSelector} from 'react-redux';
import {Moon, Sun} from 'lucide-react';
import {toggleTheme} from '../store/ThemeSlice';
/**
 * This component displays the theme toggle
 * @returns {JSX.Element} - The theme toggle component
 */
const ThemeToggle = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(state => state.theme.isDark);

    return (
        <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Theme
            </span>
            <button
                onClick={() => dispatch(toggleTheme())}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
                    ${isDark
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                {isDark ? (
                    <>
                        <Moon className="w-4 h-4"/>
                        <span>Dark</span>
                    </>
                ) : (
                    <>
                        <Sun className="w-4 h-4"/>
                        <span>Light</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default ThemeToggle