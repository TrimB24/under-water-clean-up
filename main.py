mySprite: Sprite = None
scene.set_background_color(6)
mySprite = sprites.create(assets.image("""Player1"""),
SpriteKind.player)
controller.move_sprite(mySprite)

mySprite = sprites.create(assets.image("""PlasticWaste"""),
SpriteKind.food)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.set_position(randint(0, 160), randint(0, 120))
    info.start_countdown(10)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

game.splash("Under water clean up!", "(Don't try at home)")