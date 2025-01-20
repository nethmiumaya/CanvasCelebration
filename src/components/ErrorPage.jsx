import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Home, RefreshCcw} from 'lucide-react';
import {useSelector} from 'react-redux';
import {generateRandomColor} from '../utils/Colors.js';
/**
 * This component is responsible for rendering the error page.
 * @returns {JSX.Element} - The error page component
 */
const ErrorPage = () => {
    const navigate = useNavigate();
    const isDark = useSelector(state => state.theme.isDark);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Create initial particles
        const initialParticles = Array.from({length: 20}, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 3 + 1,
            color: generateRandomColor(),
            velocity: {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            }
        }));
        setParticles(initialParticles);

        // Animation loop
        const interval = setInterval(() => {
            setParticles(prevParticles =>
                prevParticles.map(particle => ({
                    ...particle,
                    x: (particle.x + particle.velocity.x + window.innerWidth) % window.innerWidth,
                    y: (particle.y + particle.velocity.y + window.innerHeight) % window.innerHeight
                }))
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`min-h-screen relative overflow-hidden ${
            isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}>
            {/* Animated particles */}
            {particles.map((particle, index) => (
                <div
                    key={index}
                    className="absolute rounded-full animate-pulse"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: `rgb(${particle.color})`,
                        boxShadow: `0 0 10px rgba(${particle.color}, 0.5)`
                    }}
                />
            ))}

            {/* Main content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
                <div className={`text-center max-w-md mx-auto p-8 rounded-2xl ${
                    isDark
                        ? 'bg-gray-800/50 backdrop-blur-sm'
                        : 'bg-white/50 backdrop-blur-sm shadow-xl'
                }`}>
                    {/* Error number animation */}
                    <div className="relative mb-8">
                        <h1 className="text-9xl font-bold opacity-10">404</h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span
                                className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                                404
                            </span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">
                        Oops! The Fireworks Fizzled Out
                    </h2>

                    <p className={`mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Looks like our fireworks display took an unexpected turn.
                        Don&apos;t worry, we&apos;ve got more sparks to show!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => window.location.reload()}
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
                        >
                            <RefreshCcw className="w-5 h-5"/>
                            <span>Try Again</span>
                        </button>

                        <button
                            onClick={() => navigate('/')}
                            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                                isDark
                                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                            }`}
                        >
                            <Home className="w-5 h-5"/>
                            <span>Go Home</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;