function stepCounter() {
    let step = 0
    let hasSounded = false
    let stepGoal = 5000 // Beta hard-coded value, will try to add a user-set 

    input.onGesture(Gesture.Shake, function () {
        step++ // Increments step variable
        led.stopAnimation() // Helps performance
    })

    let stepsToGo = stepGoal - step
    basic.showString("Steps: " + step + ".")

    if (step > stepGoal) {
        if (hasSounded = false) {
            hasSounded = true // Will not play all the time while the condition is true
            music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        }
    }

    if (stepsToGo > 0) {
        basic.showString("Steps until goal: " + stepsToGo + ".")
    }
}


function secondFunction() {
    // framework for a second function
    basic.showString("Test")
}

basic.forever(function () {
    let buttonPressed

    if (input.buttonIsPressed(Button.A)) {
        buttonPressed = 1
        /* 
        Stored value, useful because it will now continue executing until the value changes
        */
    }

    if (input.buttonIsPressed(Button.B)) {
        buttonPressed = 2
    }

    switch (buttonPressed) {
        case 1:
            stepCounter()
            break;
        case 2:
            secondFunction()
            break;
        default:
            stepCounter()
    }
})
