import {useState} from 'react';
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
/**
 * This component is responsible for rendering the color picker.
 * @param {string} selectedColor - The selected color
 * @param {function} onColorChange - The function to call when the color changes
 * @returns {JSX.Element} - The color picker component
 */
const PRESET_COLORS = [
    {name: 'Purple', value: '147, 51, 234'},
    {name: 'Pink', value: '236, 72, 153'},
    {name: 'Blue', value: '59, 130, 246'},
    {name: 'Green', value: '34, 197, 94'},
    {name: 'Yellow', value: '234, 179, 8'},
    {name: 'Red', value: '239, 68, 68'},
    {name: 'Orange', value: '249, 115, 22'},
    {name: 'Teal', value: '20, 184, 166'},
];

const ColorPicker = ({selectedColor, onColorChange}) => {
    const [customColor, setCustomColor] = useState('#000000');
    const isDark = useSelector(state => state.theme.isDark);

    const handleCustomColorChange = (e) => {
        const color = e.target.value;
        setCustomColor(color);
        // Convert hex to RGB
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        onColorChange(`${r}, ${g}, ${b}`);
    };

    return (
        <div className="space-y-4">
            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Select Color
            </label>

            <div className="grid grid-cols-4 gap-2">
                {PRESET_COLORS.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => onColorChange(color.value)}
                        className={`w-full aspect-square rounded-lg border-2 transition-all ${
                            selectedColor === color.value
                                ? 'border-white scale-110'
                                : 'border-transparent hover:border-gray-600'
                        }`}
                        style={{ backgroundColor: `rgb(${color.value})` }}
                        title={color.name}
                    />
                ))}
            </div>

            <div className="flex items-center space-x-4">
                <label className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Custom Color:
                </label>
                <input
                    type="color"
                    value={customColor}
                    onChange={handleCustomColorChange}
                    className="h-8 w-16 bg-transparent cursor-pointer"
                />
            </div>
        </div>
    );
};

ColorPicker.propTypes = {
    selectedColor: PropTypes.string,
    onColorChange: PropTypes.func,
};

export default ColorPicker;