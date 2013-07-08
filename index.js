var PAGES = [

    function(c) {
        c.f(40, Color.blue);
        c.w("自分だけのゲーム素材を作ろう！");
        c.f(20, Color.black);
        c.w("2013年7月7日 enchant.js 勉強会", W*0.5, H*0.9);
    },

    function(c) {
        c.f(40, Color.blue);
        c.w("自己紹介");
    },

    function(c) {
        c.textAlign = "left";
        c.f(25, Color.black);
        c.prevX = W*0.03;
        c.prevY = 0;
        c.lineHeight = H*0.14;
        c.w("var 俺 = {");
        c.w("    '名前': 'Chromium西尾',");
        c.w("    '職業': 'プログラマー',");
        c.w("    '趣味': [ 'STG', 'プリキュア', 'JavaScript', 'ビール' ],");
        c.w("    'enchant.js歴': '2年'");
        c.w("};");
    },

    function(c) {
        c.f(40, Color.blue);
        c.w("今日のテーマ");
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("まずはこいつを見てくれ");
        c.f(16, Color.black);
        c.w("こいつをどう思う？", W*0.8, H*0.6);
        demo(c, b, 0, "demo0.html");
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("すごく……派手です///");
    },

    function(c, b) {
        c.f(35, Color.blue);
        c.w("自分でゲームを作る上で面倒なこと");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("素材集め");
    },

    function(c, b) {
        c.f(20, Color.blue);
        c.w("キャラクター画像・エフェクト・マップチップ・BGM・効果音...");
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("『エフェクト』");
    },

    function(c, b) {
        c.f(35, Color.blue);
        c.lineHeight = H*0.2;
        c.w("公式素材？", W*0.5, H*0.4);
        c.w("フリー素材サイト？");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("でも公式素材のエフェクトって...");
    },

    function(c, b) {

    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("自分だけのゲーム素材が欲しいんだ！");
        b.entered = function() {
            kuma.removeEventListener("enterframe", kuma.walkMotion);
            kuma.frame = 3;
        };
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("というわけで");
        b.entered = function() {
            kuma.on("enterframe", kuma.walkMotion);
        };
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("今日は私のやり方をご紹介");
    },

    // 最初はパクリでもいい。むしろ完全再現を目指せ
];

var demo = function(context, board, index, url) {
    context.f(12, Color.green);
    context.w("demo" + index, W*0.5, H*0.9);
    board.on("touchend", function() {
        window.open(url);
    });
};

var Color = {
    red: "#f33",
    green: "#083",
    blue: "#35f",
    black: "#333",
};

enchant();

var W = 800*0.8;
var H = 450*0.8;
var BOARD_BG;
var kuma;

window.onload = function() {
    var core = new Core(800, 450);
    core.preload("images/chara1.png");

    BOARD_BG = (function() {
        var surface = new Surface(W, H);
        var gradient = surface.context.createLinearGradient(0, 0, W, H);
        gradient.addColorStop(0.0, "#666");
        gradient.addColorStop(0.3, "#fff");
        gradient.addColorStop(0.7, "#fff");
        gradient.addColorStop(1.0, "#666");
        surface.context.fillStyle = gradient;
        surface.context.fillRect(0, 0, W, H);
        return surface;
    })();

    core.onload = function() {
        var scene = core.rootScene;
        scene.backgroundColor = "black";

        var boards = [];
        for (var i = 0; i < PAGES.length; i++) {
            var b = createNew(i);
            scene.addChild(b);
            boards.push(b);
        }

        boards[0].x -= 800;

        var current = 0;

        core.on("rightbuttonup", function() {
            if (current >= PAGES.length-1) return;

            boards[current].tl.moveBy(-800, 0, 15, enchant.Easing.QUAD_EASEINOUT);
            if (boards[current+1]) boards[current+1].tl.moveBy(-800, 0, 15, enchant.Easing.QUAD_EASEINOUT).then(function() {
                if (this.entered) this.entered();
            });

            current += 1;

            kuma.scaleX = 1;
        });

        core.on("leftbuttonup", function() {
            if (current <= 0) return;

            if (boards[current-1]) boards[current-1].tl.moveBy(800, 0, 15, enchant.Easing.QUAD_EASEINOUT);
            boards[current].tl.moveBy(800, 0, 15, enchant.Easing.QUAD_EASEINOUT);
            current -= 1;

            kuma.scaleX = -1;
        });

        kuma = new Sprite(32, 32);
        kuma.y = 5;
        kuma.image = core.assets["images/chara1.png"];
        kuma.on("enterframe", function() {
            this.x = (800-32) * current / PAGES.length;
        });
        kuma.walkMotion = function() {
            this.frame = ~~(this.age / 20) % 2 + 1;
        };
        kuma.on("enterframe", kuma.walkMotion);
        scene.addChild(kuma);
    };
    core.start();
};

var createNew = function(page) {
    var board = new Sprite(W, H);
    board.x = (800-W)/2 + 800;
    board.y = (450-H)/2;
    board.image = BOARD_BG.clone();
    board.image.context.fillStyle = "black";
    board.image.context.textAlign = "center";
    board.image.context.textBaseline = "middle";
    board.image.context.f = function(size, color) {
        size = size || 20;
        color = color || "black";
        this.fillStyle = color;
        this.font = size + "px 'serif'";
    };
    board.image.context.prevX = W*0.5;
    board.image.context.prevY = H*0.4;
    board.image.context.lineHeight = H*0.1;
    board.image.context.w = function(text, x, y) {
        x = x || this.prevX;
        y = y || this.prevY + this.lineHeight;
        this.fillText(text, x, y);
        this.prevX = x;
        this.prevY = y;
    };
    PAGES[page](board.image.context, board);
    return board;
};
