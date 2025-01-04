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
        this.velocity = {
            x: Math.cos(this.angle) * (Math.random() * config.particleVelocity + 2),
            y: Math.sin(this.angle) * (Math.random() * config.particleVelocity + 2)
        };
        this.opacity = 1;
        this.fadeRate = config.fadeRate;
        this.gravity = 0.1;
    }

    update(ctx) {
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= this.fadeRate;

        if (this.opacity > 0) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.fill();
            ctx.closePath();
        }
    }
}