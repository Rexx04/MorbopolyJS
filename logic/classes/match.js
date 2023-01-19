class match {
    constructor(players) {
        this.players = players;
    }

    tragedyCoupons = 500;
    disfunctionalFamilyCoupons = 500;
    accidentCoupons = 500;
    traumaCoupons = 500;
    sicknessCoupons = 500;
    badLuckCoupons = 500;

    throwDice(){
        return Math.floor(Math.random()*6);
    }
}