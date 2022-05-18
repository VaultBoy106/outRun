

// Global Constants


// screen size
const SCREEN_W = 1920;
const SCREEN_H = 1080;

// coordinates of the screen center
const SCREEN_CX = SCREEN_W/2;
const SCREEN_CY = SCREEN_H/2;

// game states
const STATE_INIT = 1;
const STATE_RESTART = 2;
const STATE_PLAY = 3;
const STATE_GAMEOVER = 4;

// sprites
const PLAYER = 0;
const HITBOX = 0

// Global Variables


// current state
var state = STATE_INIT;


// Main Scene


class MainScene extends Phaser.Scene
{
    constructor(){
		super({key: 'SceneMain'});
	}
	
	/**
	* Loads all assets.
	*/
	preload(){
		this.load.image('imgBack', '../assets/img_back.png');
		this.load.image('imgPlayer', '../assets/img_player.png');
		this.load.image('hitbox', '../assets/barrel.png')
	}

	/**
	* Creates all objects.
	*/
	create(){
		// backgrounds
		this.sprBack = this.add.image(SCREEN_CX, SCREEN_CY, 'imgBack');
		
		// array of sprites that will be "manually" drawn on a rendering texture 
		// (that's why they must be invisible after creation)
		this.sprites = [
			this.add.image(0, 0, 'imgPlayer').setVisible(false),
			
			
		]
		
		this.sprites_hit = [	
			this.add.image(0, 0, 'hitbox').setVisible(false)
		]	
		//instances
		this.hitbox = new Hitbox(this)
		this.circuit = new Circuit(this);
		this.player = new Player(this);
		this.camera = new Camera(this);
		this.settings = new Settings(this);
		this.data = new Data(this);

		
		// listener to pause game
		this.input.keyboard.on('keydown-P', function(){
			this.settings.txtPause.text = "[P] Resume";
			let random_num = this.data.random_num
			console.log
			alert(`Fun fact : ${this.data.arr[this.data.get_val()]}`)
			this.scene.pause();
			this.scene.launch('ScenePause');
		}, this);
		let self = this
		this.input.keyboard.on('keydown-D', function() {
			this.player.turnRight()
		}, this)
		this.input.keyboard.on('keydown-A', function() {
			this.player.turnLeft()
		}, this)
	
		// listener on resume event
		this.events.on('resume', function(){
			this.settings.show();
		}, this);
		
	}
	
	/**
	* Main Game Loop
	*/
	update(time, delta){
		switch(state){
			case STATE_INIT:
				this.camera.init();
				this.player.init();
				this.hitbox.init();

				state = STATE_RESTART;
				break;
				
			case STATE_RESTART:
				this.circuit.create();
				this.player.restart();
				this.hitbox.restart();
				state = STATE_PLAY;
				break;
				
			case STATE_PLAY:
				// duration of the time period
				var dt = Math.min(1, delta/1000);
				
				console.log()
				

				this.player.update(dt);
				this.camera.update();
				
				this.circuit.render3D();
				break;
				
			case STATE_GAMEOVER:
				break;
		}
	}
}


// Pause Scene


class PauseScene extends Phaser.Scene
{
    constructor(){
		super({key: 'ScenePause'});
	}
	
	create(){
		// listener to resume game
		this.input.keyboard.on('keydown-P', function(){
			this.scene.resume('SceneMain');
			this.scene.stop();
			
		}, this);	
			
	}
}


// Initializing Phaser Game


// game configuration
var config = {
    type: Phaser.AUTO,
    width: SCREEN_W,
    height: SCREEN_H,
	
	scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
	
    scene: [MainScene, PauseScene]
};

// game instance
var game = new Phaser.Game(config);
