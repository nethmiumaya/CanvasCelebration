/**
 * Firework styles configuration object
 * @property {Object} classic - Classic firework style
 * @property {Object} burst - Burst firework style
 * @property {Object} trail - Trail firework style
 */
export const FIREWORK_STYLES = {
    classic: {
        id: 'classic',
        name: 'Classic',
        particleCount: 120,
        particleSize: 2,
        particleVelocity: 6,
        fadeRate: 0.015,
        gravity: 0.1,
        sparkEffect: false,
        trailEffect: false,
        explosionRadius: 1
    },
    burst: {
        id: 'burst',
        name: 'Burst',
        particleCount: 200,
        particleSize: 1.5,
        particleVelocity: 10,
        fadeRate: 0.03,
        gravity: 0.05,
        sparkEffect: true,
        trailEffect: false,
        explosionRadius: 1.5
    },
    trail: {
        id: 'trail',
        name: 'Trail',
        particleCount: 100,
        particleSize: 2,
        particleVelocity: 5,
        fadeRate: 0.008,
        gravity: 0.12,
        sparkEffect: false,
        trailEffect: true,
        explosionRadius: 0.8
    }
};