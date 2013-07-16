var PAGES = [

    function(c) {
        c.f(40, Color.blue);
        c.w("自分だけのエフェクト素材を作ろう！");
        c.f(20, Color.black);
        c.w("2013年7月17日 enchant.js 勉強会", W*0.5, H*0.9);
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
        b.onentered = function() {
            timer.removeEventListener("enterframe", timer.walkMotion);
            timer.frame = 5;
        };
        b.onexit = function() {
            timer.on("enterframe", timer.walkMotion);
        };
    },

    function(c, b) {
        c.f(30, Color.red);
        c.w("カッコイイエフェクト素材が欲しい！");
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
        c.w("ここで『加算合成』を使ってみましょう", W*0.5, H*0.2);
        c.prevX = W*0.1;
        c.prevY = H*0.4;
        c.textAlign = "left";
        c.lineHeight = H*0.1;
        c.f(30, Color.green);
        c.w("  // compositeOperationにlighterをセット");
        c.f(30, Color.black);
        c.w("  sprite.compositeOperation = 'lighter';");
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
        c.f(30, Color.blue);
        c.w("『加算合成』とは", W*0.5, H*0.2);
        c.f(40, Color.red);
        c.w("アルファブレンドの一種", W*0.5, H*0.5);
        c.f(30, Color.blue);
        c.w("compositeOperationで設定する", W*0.5, H*0.8);
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("デフォルトは 'source-over'", W*0.5, H*0.2);
        c.f(35, Color.green);
        c.w("C = Csrc * Asrc + Cdst * (1 - Asrc)", W*0.5, H*0.5);
        c.f(30, Color.black);
        c.w("どれだけ重ねても元の色より明るくはならない", W*0.5, H*0.7);
        c.w("半透明の物を表現するのに使う", W*0.5, H*0.8);
    },

    function(c, b) {
        c.f(30, Color.black);
        c.w("半透明！", W*0.5, H*0.1);
        b.image.context.fillStyle = "black";
        b.image.context.fillRect(20, 60, W-40, H-120);
        b.image.context.globalAlpha = 0.3;
        for (var i = 0; i < 10; i++) {
            b.image.draw(core.assets["images/chara1.png"],
                32*(i%2+1), 32*0, 32, 32,
                W*0.5-180+(i*20), H*0.5-100, 200, 200
            );
        }
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("加算合成 'lighter'", W*0.5, H*0.2);
        c.f(35, Color.green);
        c.w("C = Csrc * Asrc + Cdst * 1", W*0.5, H*0.5);
        c.f(30, Color.black);
        c.w("重ねれば重ねるほど明るくなる", W*0.5, H*0.7);
        c.w("エフェクトに使う", W*0.5, H*0.8);
    },

    function(c, b) {
        c.f(30, Color.black);
        c.w("明るく！", W*0.5, H*0.1);
        b.image.context.fillStyle = "black";
        b.image.context.fillRect(20, 60, W-40, H-120);
        b.image.context.globalCompositeOperation = "lighter";
        b.image.context.globalAlpha = 0.5;
        for (var i = 0; i < 10; i++) {
            b.image.draw(core.assets["images/chara1.png"],
                32*(i%2+1), 32*0, 32, 32,
                W*0.5-180+(i*20), H*0.5-100, 200, 200
            );
        }
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("ここでさきほどの例", W*0.5, H*0.2);
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

    function(c, b) {
        c.f(40, Color.red);
        c.w("HTML5で作っちゃおう！");
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("グラデーション", W*0.5, H*0.3);
        c.f(40, Color.blue);
        c.w("createRadialGradient", W*0.5, H*0.5);
        c.w("createLinearGradient", W*0.5, H*0.7);
        demo(c, b, 8);
    },

    function(c, b) {
        c.textAlign = "left";
        c.f(20, Color.black);
        c.prevX = W*0.1;
        c.prevY = 0;
        c.lineHeight = H*0.1;
        c.f(20, Color.green);
        c.w("// (20, 20)を中心に、半径20の円状グラデーション");
        c.f(20, Color.black);
        c.w("var g = context.createRadialGradient(20, 20, 0, 20, 20, 20);");
        c.f(20, Color.green);
        c.w("// 中心が白く外縁が青い");
        c.f(20, Color.black);
        c.w("g.addColorStop(0.0, \"rgba(255,255,255,0.5\");");
        c.w("g.addColorStop(1.0, \"rgba(  0,  0,255,1.0\");");
        c.f(20, Color.green);
        c.w("// 作ったグラデーションを塗りつぶし色としてセット");
        c.f(20, Color.black);
        c.w("context.fillStyle = g;");
        c.f(20, Color.green);
        c.w("// 描画");
        c.f(20, Color.black);
        c.w("context.fillRect(0, 0, 40, 40);");
    },

    function(c, b) {
        c.textAlign = "left";
        c.f(20, Color.black);
        c.prevX = W*0.1;
        c.prevY = H*0.2;
        c.lineHeight = H*0.1;
        c.f(20, Color.green);
        c.w("// スプライトをタッチしたら画像を新しいウィンドウで開く");
        c.f(20, Color.black);
        c.w("sprite.on(\"touchend\", function() {");
        c.w("    window.open(sprite.image.toDataURL());");
        c.w("});");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.prevY = H*0.2;
        c.lineHeight = H*0.2;
        c.w("スプライトに描画した後、");
        c.w("タッチして画像として保存する");
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("応用編１");
    },

    function(c, b) {
        c.f(40, Color.blue);
        c.w("たくさん描いてスプライトシートにする");
        link(c, b, "http://jsrun.it/daishi.hmr/scAh");
    },

    function(c, b) {
        c.textAlign = "left";
        c.f(20, Color.black);
        c.prevX = W*0.05;
        c.prevY = 0;
        c.lineHeight = H*0.08;
        c.f(22, Color.green);
        c.w("// 最終出力用Surface");
        c.f(22, Color.black);
        c.w("var out = new Surface(canvas.width*4, canvas.height*4);");
        c.f(22, Color.black);
        c.w("for (var i = 0; i < 4; i++) {");
        c.f(22, Color.black);
        c.w("    for (var j = 0; j < 4; j++) {");
        c.f(22, Color.green);
        c.w("        // 1フレーム分描画");
        c.f(22, Color.black);
        c.w("        drawEffect(canvas);");
        c.f(22, Color.green);
        c.w("        // outに書き出す");
        c.f(22, Color.black);
        c.w("        out.draw(canvas, canvas.width * j, canvas.height * i);");
        c.f(22, Color.black);
        c.w("    }");
        c.f(22, Color.black);
        c.w("}");
        c.f(22, Color.black);
        c.w("window.open(out.toDataURL());");
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("応用編２");
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("この部分→", W*0.3, H*0.15);
        b.image.draw(core.assets["laser.jpg"], W*0.7-319/2*0.8, H*0.5-425/2*0.8, 319*0.8, 425*0.8);
        demo(c, b, 10);
    },

    function(c, b) {
        c.f(30, Color.blue);
        c.w("こういうトゲトゲの図形を", W*0.5, H*0.2);
        c.w("すこしずつズラしながらたくさん重ねる", W*0.5, H*0.3);
        b.image.draw(core.assets["demo10_1.png"], W*0.5-453/2*0.4, H*0.6-417/2*0.4, 453*0.4, 417*0.4);
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("応用編３");
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("この部分", W*0.5, H*0.15);
        b.image.draw(core.assets["demo9_1.png"], W*0.5-199/2*1.4, H*0.6-177/2*1.4, 199*1.4, 177*1.4);
        demo(c, b, 9);
    },

    function(c, b) {
        c.f(20, Color.blue);
        c.w("一点から放射状にパーティクルを移動させ軌跡を描画", W*0.5, H*0.1);
        c.w("サイズ小→大→小", W*0.5, H*0.2);
        b.image.draw(core.assets["demo9_2.png"], W*0.5-960/2*0.4, H*0.6-720/2*0.4, 960*0.4, 720*0.4);
    },

    function(c, b) {
        c.f(40, Color.red);
        c.w("まとめ");
    },

    function(c, b) {
        c.f(30, Color.blue);
        c.prevY = 0;
        c.lineHeight = H*0.25;
        c.w("1. プログラムで描いて素材を作ろう！");
        c.w("2. 作った素材は加算合成を使って表示しよう！");
        c.w("3. たくさん作ってゲームをカッコよくしよう！");
    },

    function(c, b) {
        c.f(40, Color.green);
        c.w("thank you!");
        b.onentered = function() {
            timer.removeEventListener("enterframe", timer.walkMotion);
            timer.frame = 7;
            timer.tl
                .moveBy(0, -200, 5, enchant.Easing.QUAD_EASEOUT)
                .moveBy(0, +200, 5, enchant.Easing.QUAD_EASEIN)
                .moveBy(0, -200, 5, enchant.Easing.QUAD_EASEOUT)
                .moveBy(0, +200, 5, enchant.Easing.QUAD_EASEIN)
                .moveBy(0, -200, 5, enchant.Easing.QUAD_EASEOUT)
                .moveBy(0, +200, 5, enchant.Easing.QUAD_EASEIN)
            ;
        };
        b.onexit = function() {
            timer.on("enterframe", timer.walkMotion);
        };
    },

];

var demo = function(context, board, index) {
    link(context, board, "demo" + index + ".html");
};

var link = function(context, board, url) {
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.f(14, Color.blue);
    context.w(url, W*0.5, H*0.9, { underline: true });
    board.on("touchend", function(e) {
        if (e.y > H*0.5) window.open(url);
    });
};

var Color = {
    red: "#f33",
    green: "#083",
    blue: "#24f",
    black: "#222",
};

enchant();

var W = 800*0.9;
var H = 450*0.9;
var BOARD_BG;
var core;
var layer0;
var layer1;
var timer;

window.onload = function() {
    core = new Core(800, 450);
    core.preload([
        "hiyoco_nomal_full.png",
        "images/chara1.png",
        "images/effect0.png",
        "images/icon0.png",
        "effect/particle.png",
        "demo9_1.png",
        "demo9_2.png",
        "laser.jpg",
        "demo10_1.png",
    ]);

    BOARD_BG = (function() {
        var surface = new Surface(W, H);
        var gradient = surface.context.createLinearGradient(0, 0, W, H);
        gradient.addColorStop(0.0, "#444");
        gradient.addColorStop(0.3, "#fff");
        gradient.addColorStop(0.7, "#fff");
        gradient.addColorStop(1.0, "#444");
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
            if (boards[1].onexit) boards[1].onexit();
            boards[1].tl.moveBy(-800, 0, 15, enchant.Easing.QUAD_EASEINOUT);
            if (boards[2]) {
                boards[2].tl
                    .moveBy(-800, 0, 15, enchant.Easing.BACK_EASEOUT)
                    .and()
                    .rotateBy(-360, 15, enchant.Easing.BACK_EASEOUT)
                    .then(function() {
                        if (this.onentered) this.onentered();
                    });
            }

            current++;

            boards[0] = boards[1];
            boards[1] = boards[2];
            boards[2] = createNew(current+1, 800);

            location.hash = "#" + current;

            timer.scaleX = -3;
        });

        core.on("leftbuttonup", function() {
            if (current <= 0) return;

            if (boards[2]) layer0.removeChild(boards[2]);
            if (boards[1].onexit) boards[1].onexit();
            boards[1].tl.moveBy(800, 0, 15, enchant.Easing.QUAD_EASEINOUT);
            if (boards[0]) {
                boards[0].tl
                    .moveBy(800, 0, 15, enchant.Easing.BACK_EASEOUT)
                    .and()
                    .rotateBy(360, 15, enchant.Easing.BACK_EASEOUT)
                    .then(function() {
                        if (this.onentered) this.onentered();
                    });
                ;
            }

            current--;

            boards[2] = boards[1];
            boards[1] = boards[0];
            boards[0] = createNew(current-1, -800);

            location.hash = "#" + current;

            timer.scaleX = 3;
        });

        timer = new Sprite(32, 32);
        timer.scale(-3, 3);
        timer.y = 450 - 64;
        timer.image = core.assets["hiyoco_nomal_full.png"];
        timer.on("enterframe", function() {
            this.x = (800-32) * current / PAGES.length;
        });
        timer.walkMotion = function() {
            this.frame = ~~(this.age / 20) % 2 + 1;
            if (Math.random() < 0.001) {
                this.tl
                    .moveBy(0, -360, 10, enchant.Easing.QUAD_EASEOUT)
                    .moveBy(0, +360, 10, enchant.Easing.QUAD_EASEIN)
                ;
            }
        };
        timer.on("enterframe", timer.walkMotion);
        layer1.addChild(timer);
    };
    core.start();
};

var createNew = function(page, x) {
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

    board.rotation = -4 + Math.random() * 4*2;

    layer0.addChild(board);

    board.on("touchend", function(e) {
        if (e.y > H*0.5) return;

        if (e.x < W*0.5) core.dispatchEvent(new Event("leftbuttonup"));
        else             core.dispatchEvent(new Event("rightbuttonup"));
    });

    return board;
};
