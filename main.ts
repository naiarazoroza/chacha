input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 30)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 30)
    basic.pause(1000)
})
basic.forever(function () {
	
})
