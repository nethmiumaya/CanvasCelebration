import {Particle} from './Particle.js';
import {FIREWORK_STYLES} from "../constants/FireworkStyles.js";
/**
 * @class - represents a firework that is launched and explodes into particles.
 * Fireworks have a position, color, and text.
 * @property {number} x - The x-coordinate of the firework
 * @property {number} y - The y-coordinate of the firework
 * @property {config} config - The configuration object for the fireworks
 * @method draw - Draws the firework and its particles
 * @method isComplete - Determines if the firework has finished exploding
 */
export class Firework {
    constructor(x, y, color, text = '', config, styleId = 'classic') {
        this.x = x;
        this.y = y;
        this.color = color;
        this.text = text;
        this.particles = [];
        this.textOpacity = 1;
        this.config = config;
        // Get style configuration
        const styleConfig = FIREWORK_STYLES[styleId];
        // Create explosion particles
        for (let i = 0; i < config.particleCount; i++) {
            this.particles.push(
                new Particle(
                    this.x,
                    this.y,
                    this.color,
                    {
                        ...config,
                        ...styleConfig
                    }
                )
            );
        }
    }

    draw(ctx) {
        // Draw explosion particles
        this.particles.forEach(particle => particle.update(ctx));
        // Draw the text
        if (this.text && this.text !== ' ') {
            ctx.save();
            ctx.font = `bold ${this.config.fontSize}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = `rgba(${this.color}, ${this.textOpacity})`;
            ctx.fillText(this.text, this.x, this.y);
            ctx.restore();
        }
    }

    isComplete() {
        return this.particles.every(p => p.opacity <= 0) && this.textOpacity <= 0;
    }
}