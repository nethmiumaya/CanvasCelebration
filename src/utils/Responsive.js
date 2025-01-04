/**
 * @fileOverview Responsive utility functions
 * @BREAKPOINTS {Object} - Responsive breakpoints
 * @getResponsiveConfig {Function} - Get responsive configuration based on screen width
 */
export const BREAKPOINTS = {
    xs: 300,
    sm: 480,
    md: 768,
    lg: 1024
};

export const getResponsiveConfig = (width) => {
    // Default configuration for large screens
    const config = {
        fontSize: 48,
        letterSpacing: 40,
        particleCount: 100,
        particleSize: 2,
        particleVelocity: 6,
        fadeRate: 0.02
    };

    // Adjust configuration based on screen width
    if (width <= BREAKPOINTS.xs) {
        config.fontSize = 24;
        config.letterSpacing = 20;
        config.particleCount = 50;
        config.particleSize = 1;
        config.particleVelocity = 3;
        config.fadeRate = 0.03;
    } else if (width <= BREAKPOINTS.sm) {
        config.fontSize = 32;
        config.letterSpacing = 25;
        config.particleCount = 70;
        config.particleSize = 1.5;
        config.particleVelocity = 4;
        config.fadeRate = 0.025;
    } else if (width <= BREAKPOINTS.md) {
        config.fontSize = 40;
        config.letterSpacing = 30;
        config.particleCount = 85;
        config.particleSize = 1.75;
        config.particleVelocity = 5;
    }

    return config;
};