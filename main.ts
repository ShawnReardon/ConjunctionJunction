class conjunctionJunction{

and(text1: string, text2: string) {
    return "" + text1 + " and " + text2
}

or(text1: string, text2: string) {
    return "" + text1 + " or " + text2
}


}
let tester = new conjunctionJunction();
game.showLongText(tester.and("shawn", "good"), DialogLayout.Bottom)
game.showLongText(tester.or("shawn", "good"), DialogLayout.Bottom)
