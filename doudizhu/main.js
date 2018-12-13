





cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.SHOW_ALL);
	cc.view.resizeWithBrowserSize(true);
    //load resources



    cc.LoaderScene.preload(g_resources, function () {




        StringUtil.LoadString(function(){

            cc.director.runScene(new GameMainScene());

        })


    }, this);
};
cc.game.run();