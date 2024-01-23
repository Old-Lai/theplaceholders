export default function scrambleAppearEffect(textToDisplay, interval, duration, setText) {
    const randCharList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()?'\"`~"
    const randCharListLength = randCharList.length

    let numCharDisplay = 1
    let numCharCompleted = 0
    let textlength = textToDisplay.length
    let halfDuration = duration/2
    let durationPerCharDisplay = halfDuration/textlength

    const numCharDisplayInterval = setInterval(() => {
        numCharDisplay < textlength ? numCharDisplay++ : numCharCompleted++
        if(numCharCompleted >= textlength)
            clearInterval(numCharDisplayInterval)
    }, durationPerCharDisplay)

    const textInterval = setInterval(() => {
        const word = textToDisplay.substring(0, numCharDisplay)

        const scrambledWord = word.split("").map((char, index) => {
            return index < numCharCompleted ? char : randCharList[Math.floor(Math.random() * randCharListLength)]
        }).join("")

        setText(scrambledWord)

        if(numCharCompleted >= textlength) 
            clearInterval(textInterval)
    }, interval)
    
}