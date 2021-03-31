let mySprite : Sprite = null
scene.setBackgroundColor(6)
mySprite = sprites.create(assets.image`Player1`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite = sprites.create(assets.image`PlasticWaste`, SpriteKind.Food)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
game.splash("Under water clean up!", "(Don't try at home)")
