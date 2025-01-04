import {Sparkle, Zap, Flame} from 'lucide-react';
/**
 * This component displays the firework style selector
 * @returns {JSX.Element} The style selector component
 */
const FIREWORK_STYLES = [
    {id: 'classic', name: 'Classic', icon: Sparkle},
    {id: 'burst', name: 'Burst', icon: Zap},
    {id: 'trail', name: 'Trail', icon: Flame},
];

const StyleSelector = () => {
    return (
        <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
                Firework Style
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {FIREWORK_STYLES.map(({id, name, icon: Icon}) => (
                    <button
                        key={id}
                        className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                        <Icon className="w-5 h-5"/>
                        <span>{name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StyleSelector;