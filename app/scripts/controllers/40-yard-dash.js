app.controller('40YardDashCtrl', [function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-40-yard-dash', { preload: preload, create: create, update: update });
  var text = null;
  var grd;

  var count = 0;

  // left/right foot on keyboard
  var leftFoot;
  var rightFoot;
  var lastFoot;

  function preload() {

    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js', function(data) {
      //  The Google WebFont Loader will look for this object, so create it before loading the script.
      WebFont.load({
        active: function() {
          game.time.events.add(Phaser.Timer.SECOND, createText, this);
        },
        google: {
          families: ['Press Start 2P']
        }
      });
    });

  }

  function create() {

    game.stage.setBackgroundColor(0x2d2d2d);

    game.input.keyboard.addCallbacks(
      this,
      null,
      null,
      function(event) {
        console.log('qqq hello');
      }
    );

    leftFoot = game.input.keyboard.addKey(Phaser.KeyCode.Z);
    leftFoot.onDown.add(function() {
      if (lastFoot !== 'left') {
        console.log('qqq left 2');
        lastFoot = 'left';
      }
    }, this);

    rightFoot = game.input.keyboard.addKey(Phaser.KeyCode.QUESTION_MARK);
    rightFoot.onDown.add(function() {
      if (lastFoot !== 'right') {
        console.log('qqq right 2');
        lastFoot = 'right';
      }
    }, this);

  }

  function update() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.LEFT)) {
      count++;
      updateText(count);
    }
    if (game.input.keyboard.isDown(Phaser.KeyCode.RIGHT)) {
      count++;
      updateText(count);
    }
  }

  function createText() {

      text = game.add.text(15, 15, '40 YARD DASH');
      text.anchor.setTo(0);

      text.font = 'Press Start 2P';
      text.fontSize = 24;

      //  x0, y0 - x1, y1
      grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
      grd.addColorStop(0, '#8ED6FF');
      grd.addColorStop(1, '#004CB3');
      text.fill = grd;

      text.align = 'left';
      text.stroke = '#000000';
      text.strokeThickness = 2;
      text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

      text.inputEnabled = true;
      text.input.enableDrag();

      text.events.onInputOver.add(over, this);
      text.events.onInputOut.add(out, this);

  }

  function updateText(counter) {
    text.setText(`40 YARD DASH\n${counter} keypresses`);
  }

  function out() {

      text.fill = grd;

  }

  function over() {

      text.fill = '#ff00ff';

  }
}]);
