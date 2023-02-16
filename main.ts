namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
info.onLifeZero(function () {
    game.gameOver(false)
})
info.onScore(20, function () {
    sprites.destroy(Paddle)
    sprites.destroy(Ball)
    game.gameOver(true)
    effects.confetti.startScreenEffect()
})
let Bally = 0
let Ballx = 0
let Ball: Sprite = null
let Paddle: Sprite = null
Paddle = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
Paddle.setPosition(80, 110)
Ball = sprites.create(img`
    . . . 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 
    . 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 . . . 
    `, SpriteKind.Enemy)
let Ballvx = 50
let Ballvy = 50
Ball.setPosition(Ballx, Bally)
Ball.setVelocity(Ballvx, Ballvy)
controller.moveSprite(Paddle, 100, 1)
Ball.setBounceOnWall(true)
game.setGameOverMessage(true, "YOU WIN!")
game.setGameOverMessage(false, "GAME OVER")
info.setLife(5)
let timeout = 0
game.onUpdate(function () {
    if (Ball.y >= 115 && game.runtime() > timeout + 1000) {
        timeout = game.runtime()
        console.log("Touch Bottom Wall")
    }
})
