
var GameIndexLayer = cc.Layer.extend({
    ctor: function () {
        // ////////////////////////////
        // 1. super init first
        this._super();

        var originPoint=cc.director.getVisibleOrigin();
        var size=cc.director.getWinSize();
        //背景图片
        var bg=new cc.Sprite("res/index_bg.jpg");
        bg.x=size.width*0.5 ;
        bg.y=size.height*0.5 ;
        this.addChild(bg);

        var w=220.0;
        var h=70.0;
        var x=size.width*0.5-originPoint.x*0.5+300;
        var g=20.0;
        var ttfSize=26.0;



        var labelStart=new cc.LabelTTF(StringUtil.getString("index_start"), "MarkerFelt", ttfSize);

        var btStart=new cc.ControlButton(labelStart, new cc.Scale9Sprite("res/index_button.png"));
        btStart.setBackgroundSpriteForState(new cc.Scale9Sprite("res/index_button_pressed.png"), cc.CONTROL_STATE_HIGHLIGHTED);

        btStart.setPreferredSize(cc.size(w,h));

         btStart.setPosition(cc.p(x, size.height*0.5+(h+g)*1.5));
         btStart.addTargetWithActionForControlEvents(this, this.onTouchStartAction, cc.CONTROL_EVENT_TOUCH_UP_INSIDE);

         this.addChild(btStart);



        var labelSetting=new cc.LabelTTF(StringUtil.getString("index_setting"), "MarkerFelt", ttfSize);
        var btSetting=new cc.ControlButton(labelSetting, new cc.Scale9Sprite("res/index_button.png"));
        btSetting.setBackgroundSpriteForState(new cc.Scale9Sprite("res/index_button_pressed.png"), cc.CONTROL_STATE_HIGHLIGHTED);
        btSetting.setPreferredSize(cc.size(w,h));
        btSetting.setPosition(cc.p(x, size.height*0.5+(h+g)*0.5));
        btSetting.addTargetWithActionForControlEvents(this, this.onTouchSettingAction, cc.CONTROL_EVENT_TOUCH_UP_INSIDE);
        this.addChild( btSetting);

        var labelMore=new cc.LabelTTF(StringUtil.getString("index_more"), "MarkerFelt", ttfSize);
        var btMore=new cc.ControlButton(labelMore, new cc.Scale9Sprite("res/index_button.png"));
        btMore.setBackgroundSpriteForState(new cc.Scale9Sprite("res/index_button_pressed.png"), cc.CONTROL_STATE_HIGHLIGHTED);
        btMore.setPreferredSize(cc.size(w,h));
        btMore.setPosition(cc.p(x, size.height*0.5-(h+g)*0.5));
        btMore.addTargetWithActionForControlEvents(this, this.onTouchMoreAction, cc.CONTROL_EVENT_TOUCH_UP_INSIDE);
        this.addChild( btMore);




        var labelExit=new cc.LabelTTF(StringUtil.getString("index_exit"), "MarkerFelt", ttfSize);
        var btExit=new cc.ControlButton(labelExit, new cc.Scale9Sprite("res/index_button.png"));
        btExit.setBackgroundSpriteForState(new cc.Scale9Sprite("res/index_button_pressed.png"), cc.CONTROL_STATE_HIGHLIGHTED);
        btExit.setPreferredSize(cc.size(w,h));
        btExit.setPosition(cc.p(x, size.height*0.5-(h+g)*1.5));
        btExit.addTargetWithActionForControlEvents(this, this.onTouchExitAction, cc.CONTROL_EVENT_TOUCH_UP_INSIDE);
        this.addChild(btExit);

       //切换声音
        var spriteNormal = new cc.Sprite("res/open_music.png");
        var spriteSelected = new cc.Sprite("res/open_music.png");
        var spriteDisable = new cc.Sprite("res/open_music.png");

        var on = new cc.MenuItemSprite(spriteNormal, spriteSelected, spriteDisable);

        var spriteNormal = new cc.Sprite("res/close_music.png");
        var spriteSelected = new cc.Sprite("res/close_music.png");
        var spriteDisable = new cc.Sprite("res/close_music.png");
        var off=new cc.MenuItemSprite(spriteNormal, spriteSelected, spriteDisable);

        var tgMusic=new cc.MenuItemToggle( on, off, this.togglemenuMusic,this);
        tgMusic.setPosition(cc.p(size.width-originPoint.x-40, size.height-originPoint.y-40));

        if(AudioUtil.getMusicPlay()){
            tgMusic.setSelectedIndex(0);
        }else{
            tgMusic.setSelectedIndex(1);
        }

        //反馈
        var menuImage = new cc.MenuItemImage("res/feedback.png", "res/feedback_pressed.png",null, this.menuFeedBack, this);
        menuImage.setPosition(cc.p(size.width-originPoint.x-100, size.height-originPoint.y-40));


        var menu = new cc.Menu(tgMusic,menuImage);
        menu.setPosition(cc.p(0, 0));
        this.addChild(menu);






    },
    onTouchStartAction:function(){

        cc.director.runScene(new GameMainScene());

    },

    onTouchSettingAction:function(){
     cc.log('设置');
    },
    onTouchExitAction:function(){
     cc.director.end();
    },
    onTouchMoreAction: function () {
      　cc.log("更多游戏");
    },
    togglemenuMusic:function(sender){//音乐关闭
        var temp=sender;
        if (temp.getSelectedIndex()==0)
        {
            AudioUtil.setMusicPlay(true);
        }  else if (temp.getSelectedIndex()==1)
        {
            AudioUtil.setMusicPlay(false);
        }
    },
    menuFeedBack:function(){
        cc.log("反馈");
    }
});

var GameIndexScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
          var layer = new GameIndexLayer();
          this.addChild(layer);
    }
});
