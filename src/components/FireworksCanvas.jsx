import {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addFireworkData, updateMessageIndex, clearFireworks} from '../store/FireworksSlice';
import {Firework} from '../models/Firework';
import {generateRandomColor} from '../utils/Colors';
import {useWindowDimensions} from '../hooks/useWindowDimensions';
import {getResponsiveConfig} from '../utils/responsive';
/**
 * The FireworksCanvas component is responsible for rendering the fireworks display.
 * @returns {JSX.Element}
 * @method spawnFirework - Spawns a firework at a random position
 * @method animate - Animates the fireworks display
 * @method startFireworks - Starts the fireworks display
 */
const FireworksCanvas = () => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);
    const intervalRef = useRef(null);
    const [, setFireworks] = useState([]);
    const currentMessageIndex = useRef(0); // Track the message index locally
    const {width, height} = useWindowDimensions();
    const config = getResponsiveConfig(width);

    const dispatch = useDispatch();
    const {messages, selectedColor} = useSelector(state => state.fireworks);

    const spawnFirework = () => {
        if (!canvasRef.current || messages.length === 0) return;

        const canvas = canvasRef.current;
        const startX = (canvas.width / 2) - ((messages.length * config.letterSpacing) / 2);
        const y = canvas.height / 2;

        // Use the locally tracked message index to spawn fireworks
        const x = startX + (currentMessageIndex.current * config.letterSpacing);
        const color = selectedColor || generateRandomColor(); // Use selected color if available
        const text = messages[currentMessageIndex.current];

        // Spawn firework and update the message index
        const firework = new Firework(x, y, color, text, config);
        setFireworks(prev => [...prev, firework]);

        dispatch(addFireworkData({x, y, color, text}));
        dispatch(updateMessageIndex());
        // Increment local ref (manually track)
        currentMessageIndex.current = (currentMessageIndex.current + 1) % messages.length;

        // Restart after the entire message has been displayed
        if (currentMessageIndex.current === 0) {
            clearInterval(intervalRef.current);
            setTimeout(startFireworks, 2000);
        }
    };

    const animate = () => {
        if (!canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        setFireworks(prev => prev.filter(firework => {
            firework.draw(ctx);
            return !firework.isComplete();
        }));

        animationFrameRef.current = requestAnimationFrame(animate);
    };

    const startFireworks = () => {
        if (messages.length === 0) return;

        setFireworks([]);
        dispatch(clearFireworks());
        currentMessageIndex.current = 0;
        intervalRef.current = setInterval(spawnFirework, 600);
    };
    /**
     * Resize the canvas when the window dimensions change
     */
    useEffect(() => {
        if (!canvasRef.current) return;

        canvasRef.current.width = width;
        canvasRef.current.height = height;
    }, [width, height]);
    /**
     * Start the fireworks display when the component mounts
     * and clean up when it unmounts
     */
    useEffect(() => {
        startFireworks();
        animate();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [width, messages]); // Added messages as dependency

    return (
        <div className="fixed inset-0 w-full h-full bg-black">
            <canvas
                ref={canvasRef}
                className="block w-full h-full touch-none"
                style={{imageRendering: 'pixelated'}}
            />
        </div>
    );
};

export default FireworksCanvas;