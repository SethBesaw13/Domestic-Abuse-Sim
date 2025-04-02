namespace SpriteKind {
    export const Mom = SpriteKind.create()
    export const Dad = SpriteKind.create()
    export const DadFist = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Mom, function (sprite, otherSprite) {
    if (controller.A.isPressed() && M_Block != 1) {
        info.player1.changeLifeBy(-1)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    controller.player2.moveSprite(Dad, 100, 0)
    D_Block = 0
    Dad.setStayInScreen(true)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    controller.player1.moveSprite(Mom, 100, 0)
    M_Block = 0
    Mom.setStayInScreen(true)
})
let D_Block = 0
let M_Block = 0
let Mom: Sprite = null
let Dad: Sprite = null
scene.setBackgroundImage(assets.image`Living room`)
Dad = sprites.create(assets.image`Dad WIP`, SpriteKind.Dad)
Dad.setPosition(25, 60)
info.player2.setLife(10)
Mom = sprites.create(assets.image`Mom WIP`, SpriteKind.Dad)
Mom.setPosition(125, 60)
info.player1.setLife(10)
