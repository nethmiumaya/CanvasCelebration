/**
 * @class - represents a particle that is emitted from a firework explosion.
 * Particles have a position, velocity, color, and opacity.
 * @property {number} x - The x-coordinate of the particle
 * @property {number} y - The y-coordinate of the particle
 * @property {config} config - The configuration object for the fireworks
 * @method update - Updates the particle's position and opacity
 * @param {object} ctx - The canvas context
 */
export class Particle {
    constructor(x, y, color, config) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * config.particleSize + 0.5;
        this.angle = Math.random() * Math.PI * 2;

        // Apply explosion radius to velocity
        const velocity = Math.random() * config.particleVelocity + 2;
        this.velocity = {
            x: Math.cos(this.angle) * velocity * config.explosionRadius,
            y: Math.sin(this.angle) * velocity * config.explosionRadius
        };

        this.opacity = 1;
        this.fadeRate = config.fadeRate;
        this.gravity = config.gravity;

        // Trail effect properties
        this.trail = config.trailEffect ? [] : null;
        this.trailLength = 8;

        // Spark effect properties
        this.sparkEffect = config.sparkEffect;
        this.sparkTimer = 0;
        this.sparkInterval = Math.random() * 10 + 5;
    }

    update(ctx) {
        // Update position
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Update opacity
        this.opacity -= this.fadeRate;

        if (this.opacity <= 0) return;

        // Trail effect
        if (this.trail) {
            this.trail.unshift({ x: this.x, y: this.y });
            if (this.trail.length > this.trailLength) {
                this.trail.pop();
            }

            // Draw trail
            this.trail.forEach((point, index) => {
                const trailOpacity = (this.opacity * (1 - index / this.trailLength)) * 0.5;
                ctx.beginPath();
                ctx.arc(point.x, point.y, this.radius * 0.8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${trailOpacity})`;
                ctx.fill();
            });
        }

        // Main particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();

        // Spark effect
        if (this.sparkEffect) {
            this.sparkTimer++;
            if (this.sparkTimer >= this.sparkInterval) {
                this.sparkTimer = 0;

                // Draw spark
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
                ctx.fill();
            }
        }
    }
}