export class CameraService {
    public panSpeed: number = 5;

    public panX: number = 0;
    public panY: number = 0;

    constructor() {
        this.panX = -(window.innerWidth / 2);
        this.panY = -(window.innerHeight / 2);
    }

    public pan(x: number, y: number) {
        this.panX += x * this.panSpeed;
        this.panY += y * this.panSpeed;
    }
}