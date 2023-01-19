class square {
    constructor(title, subtitle, explanation, position, color)  {
        this.title = title;
        this.subtitle = subtitle;
        this.explanation = explanation;
        this.position = position;
        this.color = color;
    }
}

class numberedSquare extends square {
    constructor(title, subtitle, explanation, position, color, coupon) {
        super(title, subtitle, explanation, position, color);
        this.coupon = coupon;
    }
}