export class Rng {
    public static seed: number;

    public static rnd(min, max) {
        return (Math.random() * (max - min)) + min;
    }
}