var preload = function(game){};

preload.prototype = {
    preload: function(){
        // game.load.image("loading","assets/sprites/loading.png");
		var loadingBar = this.add.sprite(game.width / 2, game.height / 2, "loading");
		loadingBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(loadingBar);
        game.load.image("background", "assets/sprites/backgrounds1.png");  //preload background iamge for titlescreen
        game.load.image("title", "assets/sprites/jump2.png");  //preload image for titlescreen
        game.load.image("playbutton", "assets/sprites/playbutton2.png"); //preload image for titlescreen
        game.load.image("separator", "assets/sprites/separator.png");
        game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.fnt");

        game.load.image( 'heroUp', 'assets/sprites/frame_right.png' );
        game.load.image( 'heroDown', 'assets/sprites/frameFall.png' );
        game.load.spritesheet('coin', 'assets/sprites/coin_spritesheet.png', 22, 22);

        game.load.image( 'pixel', 'assets/sprites/ground_grass.png' );
        game.load.image( 'form2', 'assets/sprites/spring.png')

        //Gameover Screen
        game.load.image("backgrounds3", "assets/sprites/backgrounds4.png"); //preload background for game over
        game.load.image("replay", "assets/sprites/replay6.png"); //preload replay button

        game.load.image( 'increaseHealth', 'assets/sprites/health3.png' );
        game.load.image( 'jumpHigher', 'assets/sprites/jetpack.png' );
        game.load.image( 'grow', 'assets/sprites/grow4.png' );
        game.load.image( 'coins', 'assets/sprites/coins1.png' );

        game.load.audio('sfxdouble', 'assets/audio/doubleJump.mp3')
        game.load.audio('sfxgameplay', 'assets/audio/gameplay1.mp3')
        game.load.audio('sfxcoin', 'assets/audio/coin.mp3');
        game.load.audio('sfxdie', 'assets/audio/die.mp3');
    },

	create: function(){
		console.log("preload started");
        game.state.start("TitleScreen");
	}
}
