let Word2 = ""
let Word1 = ""
let paragraph = ["a", "b", "c"]
class conjunctionJunction{

and(text1: string, text2: string) {
    return "" + text1 + " and " + text2
}

or(text1: string, text2: string) {
    return "" + text1 + " or " + text2
}


}
let tester = new conjunctionJunction();
let swithcInt = 1
for (let index = 0; index <= 0; index++) {
    Word1 = game.askForString("")
    Word2 = game.askForString("")
    if (swithcInt == 1) {
        paragraph[index] = tester.and(Word1, Word2)
        swithcInt = 2
    } else {
        paragraph[index] = tester.or(Word1, Word2)
        swithcInt = 1
    }
}
for (let value of paragraph) {
    console.log(value)
}
