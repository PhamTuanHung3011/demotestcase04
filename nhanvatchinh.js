class NhanVatChinh {
    img;
    x;
    y;
    speedX;
    width;
    height;

    constructor(img, x,y,speedX, width, height) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.width = width;
        this.height = height;
    }

    drawNvChinh(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.speedX, this.width, this.height);
    }

}