export class CameraService {
    public panSpeed: number = 15;

    public panX: number = 0;
    public panY: number = 0;
    public minX: number = 0;
    public maxX: number = 0;
    public minY: number = 0;
    public maxY: number = 0;

    constructor() {
        this.panX = 0;
        this.panY = 0;
    }

    public pan(x: number, y: number) {
        this.panX += x * this.panSpeed;
        this.panY += y * this.panSpeed;
        this.enforceBounds();
    }

    public panTo(x: number, y: number) {
        this.panX = x - (window.innerWidth / 2);
        this.panY = y - (window.innerHeight / 2);
        this.enforceBounds();
    }

    public center() {
        this.panX = ((this.maxX - this.minX) / 2) + this.minX;
        this.panY = ((this.maxY - this.minY) / 2) + this.minY;
        this.enforceBounds();
    }

    private enforceBounds() {
        this.panX = Math.max(this.minX, this.panX);
        this.panX = Math.min(this.maxX - window.innerWidth, this.panX);
        this.panY = Math.max(this.minY, this.panY);
        this.panY = Math.min(this.maxY - window.innerHeight, this.panY);
    }
}