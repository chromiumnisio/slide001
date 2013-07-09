var PAGES = [

    function(c) {
        c.f(40, Color.blue);
        c.w("自分だけのエフェクト素材を作ろう！");
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
        c.w("    '趣味': [ 'JavaScript', 'ビール', 'STG', 'プリキュア' ],");
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
        demo(c, b, 0);
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
        c.f(40, Color.black);
        c.w("『爆発』", W*0.5, H*0.2);
        b.image.draw(core.assets["images/effect0.png"], W*0.5-80*3, H*0.5-16*3, 80*6, 16*6);
    },

    function(c, b) {
        c.f(40, Color.black);
        c.w("『ビーム』", W*0.5, H*0.2);
        b.image.draw(core.assets["images/icon0.png"], 0, 48, 128, 16, W*0.5-128*4/2, H*0.5-16*4/2, 128*4, 16*4);
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("悪くはない...悪くはないが...");
    },

    function(c, b) {
        c.f(70, Color.red);
        c.w("イマイチ...");
        b.entered = function() {
            kuma.removeEventListener("enterframe", kuma.walkMotion);
            kuma.frame = 3;
        };
    },

    function(c, b) {
        c.f(30, Color.red);
        c.w("カッコイイエフェクト素材が欲しい！");
        b.entered = function() {
            kuma.on("enterframe", kuma.walkMotion);
        };
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("というわけで");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("今日は私のやり方をご紹介");
    },

    function(c, b) {
        c.f(40, Color.green);
        c.w("chapter1. explosion");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("まずはこちらの動きをご覧ください");
        demo(c, b, 1);
    },

    function(c, b) {
        c.f(30, Color.blue);
        c.w("TimeLineを使ったアニメーションですね");
    },

    function(c, b) {
        c.textAlign = "left";
        c.f(20, Color.black);
        c.prevX = W*0.03;
        c.prevY = 0;
        c.lineHeight = H*0.1;
        c.w("sprite.tl");
        c.f(20, Color.green);
        c.w("  // 拡大しながら...");
        c.f(20, Color.black);
        c.w("  .scaleTo(s, s, 30, enchant.Easing.QUAD_EASEOUT)");
        c.w("  .and()");
        c.f(20, Color.green);
        c.w("  // 移動しながら...");
        c.f(20, Color.black);
        c.w("  .moveBy(Math.cos(a)*l, Math.sin(a)*l, 90, enchant.Easing.QUAD_EASEOUT)");
        c.w("  .and()");
        c.f(20, Color.green);
        c.w("  // 消えていく...");
        c.f(20, Color.black);
        c.w("  .fadeOut(70);");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("これがなんなの？");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("増やしてみましょう");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("10個");
        demo(c, b, 2);
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("50個");
        demo(c, b, 3);
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("200個");
        demo(c, b, 4);
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("うーん？");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("ここで『加算合成』を使ってみましょう");
        demo(c, b, 5);
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("爆発っぽくなった！");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("『加算合成』とは？");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("『加算合成』とは", W*0.5, H*0.3);
        c.w("アルファブレンドの一種", W*0.5, H*0.7);
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("デフォルト合成 'source-over'", W*0.5, H*0.2);
        c.f(40, Color.green);
        c.w("C = Cs * As + Cd * (1 - As)", W*0.5, H*0.5);
        c.f(30, Color.black);
        c.w("後に重ねた色が優先", W*0.5, H*0.8);
    },

    function(c, b) {
        c.f(30, Color.black);
        c.w("半透明！", W*0.5, H*0.1);
        b.image.context.fillStyle = "black";
        b.image.context.fillRect(20, 60, W-40, H-120);
        b.image.context.globalAlpha = 0.5;
        b.image.draw(core.assets["images/chara1.png"],
            32*1, 32*0, 32, 32,
            W*0.5-100-20, H*0.5-100, 200, 200
        );
        b.image.draw(core.assets["images/chara1.png"],
            32*1, 32*0, 32, 32,
            W*0.5-100, H*0.5-100, 200, 200
        );
        b.image.draw(core.assets["images/chara1.png"],
            32*1, 32*0, 32, 32,
            W*0.5-100+20, H*0.5-100, 200, 200
        );
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("加算合成 'lighter'", W*0.5, H*0.2);
        c.f(40, Color.green);
        c.w("C = Cs * As + Cd * 1", W*0.5, H*0.5);
        c.f(30, Color.black);
        c.w("重ねれば重ねるほど明るくなる", W*0.5, H*0.8);
    },

    function(c, b) {
        c.f(30, Color.black);
        c.w("明るく！", W*0.5, H*0.1);
        b.image.context.fillStyle = "black";
        b.image.context.fillRect(20, 60, W-40, H-120);
        b.image.context.globalCompositeOperation = "lighter";
        b.image.context.globalAlpha = 0.5;
        b.image.draw(core.assets["images/chara1.png"],
            32*1, 32*0, 32, 32,
            W*0.5-100-20, H*0.5-100, 200, 200
        );
        b.image.draw(core.assets["images/chara1.png"],
            32*1, 32*0, 32, 32,
            W*0.5-100, H*0.5-100, 200, 200
        );
        b.image.draw(core.assets["images/chara1.png"],
            32*1, 32*0, 32, 32,
            W*0.5-100+20, H*0.5-100, 200, 200
        );
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("Sprite#compositeOperationで設定", W*0.5, H*0.2);
        c.textAlign = "left";
        c.f(20, Color.black);
        c.prevX = W*0.2;
        c.prevY = H*0.4;
        c.lineHeight = H*0.1;
        c.f(20, Color.green);
        c.w("  // lighterをセット");
        c.f(20, Color.black);
        c.w("  sprite.compositeOperation = 'lighter';");
        demo(c, b, 6);
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("ここでさきほどの例");
        demo(c, b, 5);
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("これを → これへ", W*0.5, H*0.3);
        b.image.draw(core.assets["images/chara1.png"],
            32*0, 32*0, 32, 20,
            W*0.5-32*6/2-100, H*0.6-20*6/2, 32*6, 20*6
        );
        b.image.draw(core.assets["effect/particle.png"],
            32*0, 32*0, 32, 32,
            W*0.5-32*6/2+100, H*0.6-32*6/2, 32*6, 32*6
        );
        demo(c, b, 7);
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("やったー！　爆発できたよー！");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("でもこれはどうやって作るの？", W*0.5, H*0.3);
        b.image.draw(core.assets["effect/particle.png"],
            32*0, 32*0, 32, 32,
            W*0.5-32*6/2, H*0.6-32*6/2, 32*6, 32*6
        );
    },

    // ポイント1 加算合成
    // ポイント2 グラデーション
    // ポイント3 パクろう
    // 最初はパクリでもいい。むしろ完全再現を目指せ
];

var demo = function(context, board, index) {
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.f(14, Color.blue);
    context.w("demo" + index + ".html", W*0.5, H*0.9, { underline: true });
    board.on("touchend", function() {
        window.open("demo" + index + ".html");
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
var core;
var layer0;
var layer1;
var kuma;

window.onload = function() {
    core = new Core(800, 450);
    core.preload([
        "images/chara1.png",
        "images/effect0.png",
        "images/icon0.png",
        "effect/particle.png",
    ]);

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

        core.rootScene.backgroundColor = "black";
        layer0 = new Group();
        layer1 = new Group();
        core.rootScene.addChild(layer0);
        core.rootScene.addChild(layer1);

        var current = ~~location.hash.substring(1);
        var boards = [ createNew(current-1, -800), createNew(current), createNew(current+1, 800) ];

        core.on("rightbuttonup", function() {
            if (current >= PAGES.length-1) return;

            if (boards[0]) layer0.removeChild(boards[0]);
            boards[1].tl.moveBy(-800, 0, 15, enchant.Easing.QUAD_EASEINOUT);
            if (boards[2]) boards[2].tl.moveBy(-800, 0, 15, enchant.Easing.QUAD_EASEINOUT).then(function() {
                if (this.entered) this.entered();
            });

            current++;

            boards[0] = boards[1];
            boards[1] = boards[2];
            boards[2] = createNew(current+1, 800);

            location.hash = "#" + current;

            kuma.scaleX = 3;
        });

        core.on("leftbuttonup", function() {
            if (current <= 0) return;

            if (boards[2]) layer0.removeChild(boards[2]);
            boards[1].tl.moveBy(800, 0, 15, enchant.Easing.QUAD_EASEINOUT);
            if (boards[0]) boards[0].tl.moveBy(800, 0, 15, enchant.Easing.QUAD_EASEINOUT);

            current--;

            boards[2] = boards[1];
            boards[1] = boards[0];
            boards[0] = createNew(current-1, -800);

            location.hash = "#" + current;

            kuma.scaleX = -3;
        });

        kuma = new Sprite(32, 32);
        kuma.scale(3, 3);
        kuma.y = 450 - 70;
        kuma.image = core.assets["images/chara1.png"];
        kuma.on("enterframe", function() {
            this.x = (800-32) * current / PAGES.length;
        });
        kuma.walkMotion = function() {
            this.frame = ~~(this.age / 20) % 2 + 1;
        };
        kuma.on("enterframe", kuma.walkMotion);
        layer1.addChild(kuma);
    };
    core.start();
};

var createNew = function(page, x) {
    console.log("createNew(" + page + ")");

    if (page < 0 || PAGES.length-1 < page) {
        return;
    }

    var board = new Sprite(W, H);
    board.x = (800-W)/2 + ~~x;
    board.y = (450-H)/2;
    board.image = BOARD_BG.clone();
    board.image.context.fillStyle = "black";
    board.image.context.textAlign = "center";
    board.image.context.textBaseline = "middle";
    board.image.context.shadowColor = "rgba(0,0,0,0.4)";
    board.image.context.shadowOffsetX = 5;
    board.image.context.shadowOffsetY = 5;
    board.image.context.shadowBlur = 5;

    board.image.context.f = function(size, color) {
        this.fontSize = size = size || 20;
        color = color || "black";
        this.fillStyle = color;
        this.font = size + "px 'S2G-Uni-font-PRO'";
    };
    board.image.context.prevX = W*0.5;
    board.image.context.prevY = H*0.4;
    board.image.context.lineHeight = H*0.1;
    board.image.context.w = function(text, x, y, option) {
        x = x || this.prevX;
        y = y || this.prevY + this.lineHeight;
        this.fillText(text, x, y);
        this.prevX = x;
        this.prevY = y;

        if (option && option.underline) {
            var metrics = this.measureText(text);
            this.fillRect(x - metrics.width/2-1, y + this.fontSize/2, metrics.width+2, 1);
        }
    };
    PAGES[page](board.image.context, board);

    board.on("enterframe", function() {
        this.rotation = Math.sin(this.age*0.2) * 1.5;
    });

    layer0.addChild(board);

    return board;
};
