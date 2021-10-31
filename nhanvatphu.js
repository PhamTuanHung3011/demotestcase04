class Nhanvatphu {
    img;
    x;
    y;
    speedY;
    w;
    h;
    tennhanvat;

    constructor(img,x,y,speedY,w,h, tennhanvat) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.speedY = speedY;
        this.w = w;
        this.h = h;
        this.tennhanvat = tennhanvat;
    }

    drawNvPhu(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.speedY, this.w, this.h, this.tennhanvat);
    }



}