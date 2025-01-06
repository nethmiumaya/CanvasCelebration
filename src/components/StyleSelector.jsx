import {Sparkle, Zap, Flame} from 'lucide-react';
import {useDispatch, useSelector} from "react-redux";
import {FIREWORK_STYLES} from "../constants/FireworkStyles.js";
import {setSelectedStyle} from "../store/FireWorksSlice.js";
/**
 * This component displays the firework style selector
 * @constant STYLE_ICONS - The icons for each firework style
 * @method handleStyleSelect - Handles the style selection
 * @returns {JSX.Element} - The style selector component
 */
const STYLE_ICONS = {
    classic: Sparkle,
    burst: Zap,
    trail: Flame
};

const StyleSelector = () => {
    const dispatch = useDispatch();
    const selectedStyle = useSelector(state => state.fireworks.selectedStyle);
    const isDark = useSelector(state => state.theme.isDark);

    const handleStyleSelect = (styleId) => {
        dispatch(setSelectedStyle(styleId));
    };

    return (
        <div className="space-y-4">
            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Firework Style
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.values(FIREWORK_STYLES).map(({ id, name }) => {
                    const Icon = STYLE_ICONS[id];
                    return (
                        <button
                            key={id}
                            onClick={() => handleStyleSelect(id)}
                            className={`flex items-center justify-center space-x-2 p-4 rounded-lg transition-colors
                                ${selectedStyle === id
                                ? 'bg-purple-600 text-white'
                                : isDark
                                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default StyleSelector;