import {Moon, Sun} from 'lucide-react';
/**
 * This component displays the theme toggle
 * @returns {JSX.Element} The theme toggle component
 */
const ThemeToggle = () => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-300">Theme</span>
            <button
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                <Moon className="w-4 h-4"/>
                <span>Dark</span>
            </button>
        </div>
    );
};

export default ThemeToggle;