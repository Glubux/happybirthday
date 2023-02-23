music.onEvent(MusicEvent.MelodyEnded, function () {
    spielen = 0
})
music.onEvent(MusicEvent.MelodyStarted, function () {
    spielen = 1
})
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
let kerze = 0
let spielen = 0
music.setVolume(76)
basic.forever(function () {
    if (spielen == 1) {
        if (kerze == 1) {
            kerze = 0
            basic.showLeds(`
                . # . . .
                . . # . .
                . . # . .
                # # # # #
                # # # # #
                `)
        } else {
            kerze = 1
            basic.showLeds(`
                . . . # .
                . . # . .
                . . # . .
                # # # # #
                # # # # #
                `)
        }
    } else {
        basic.clearScreen()
    }
    basic.pause(randint(20, 100))
})
