


/**
 * Created by song on 16/11/17.
 */


/**
 * Created by song on 16/11/28.
 */

var DialogSucceedLayer = cc.Layer.extend({
    ctor: function () {
        this._super();


        var originPoint=cc.director.getVisibleOrigin();
        var size=cc.director.getWinSize();


        //覆盖层，这样可使父亲页面的相关按钮不会触发了，被拦截了
        var bgLayer=new cc.Layer();
        this.addChild(bgLayer);
        cc.eventManager.addListener(
            {event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan:this.ccTouchBegan2}, bgLayer);


        var bg=new cc.Sprite("res/score_bg.png");
        bg.x=size.width*0.5 ;
        bg.y=size.height*0.5 ;
        this.addChild(bg, 0,GAME_SCORE_BG);


        var w=160, h=60;
        var ttfBack=new cc.LabelTTF(StringUtil.getString("main_back"), "MarkerFelt", 25);
        var btBack=new cc.ControlButton(ttfBack, new cc.Scale9Sprite("res/score_button.png"));
        btBack.setBackgroundSpriteForState(new cc.Scale9Sprite("res/score_button_pressed.png"), cc.CONTROL_STATE_HIGHLIGHTED);
        btBack.setPreferredSize(cc.size(w, h));
        btBack.setPosition(cc.p(w*0.5 +90, 40));
        btBack.addTargetWithActionForControlEvents(this, this.onTouchExitAction , cc.CONTROL_EVENT_TOUCH_UP_INSIDE);
        bg.addChild(btBack, 0, GAME_BT_BACK);


        var ttfAgain=new cc.LabelTTF(StringUtil.getString("main_again"), "MarkerFelt", 25);
        var btAgain=new cc.ControlButton(ttfAgain, new cc.Scale9Sprite("res/score_button.png"));
        btAgain.setBackgroundSpriteForState(new cc.Scale9Sprite("res/score_button_pressed.png"), cc.CONTROL_STATE_HIGHLIGHTED);
        btAgain.setPreferredSize(cc.size(w, h));
        btAgain.setPosition(cc.p(bg.getContentSize().width-w*0.5-90, 40));
        btAgain.addTargetWithActionForControlEvents(this, this.cancel,cc.CONTROL_EVENT_TOUCH_UP_INSIDE);
        bg.addChild(btAgain, 0, GAME_BT_AGAIN);




        return true;
    },
    show:function( isBoss,  data, name0,  name1, name2){
    var bg=this.getChildByTag(GAME_SCORE_BG);

    var w=bg.getContentSize().width;
    var h=bg.getContentSize().height;
    var x=80;
    var text;
    //看看是地主胜利还是农民胜利
    if(isBoss){
        var head=new cc.Sprite("res/score_icon0.png");
        head.setPosition(cc.p(bg.getContentSize().width-head.getContentSize().width*0.5
            , bg.getContentSize().height-head.getContentSize().height*0.5 -20));
        bg.addChild(head);

       var text=new cc.Sprite("res/score_text0.png");
        text.setPosition(cc.p(w*0.5
            , bg.getContentSize().height-text.getContentSize().height*0.5-20));
        bg.addChild(text);
    }else{
        var head=new cc.Sprite("res/score_icon1.png");
        head.setPosition(cc.p(bg.getContentSize().width-head.getContentSize().width*0.5
            , bg.getContentSize().height-head.getContentSize().height*0.5 -35));
        bg.addChild(head);

        var text=new cc.Sprite("res/score_text1.png");
        text.setPosition(cc.p(w*0.5
            , bg.getContentSize().height-text.getContentSize().height*0.5-20));
        bg.addChild(text);
    }
        text="总共"+ data[1]+"倍";
    var text0=new cc.LabelTTF(text, "MarkerFelt", 28);
    text0.setColor({r:0,g:0,b:0});
    text0.setPosition(cc.p(x, h-130));
    bg.addChild(text0);

    text="底分："+ data[0];
    var text1=new cc.LabelTTF(text, "MarkerFelt", 23);
    text1.setColor({r:0,g:0,b:0});
    text1.setPosition(cc.p(x, h-180));
    bg.addChild(text1);

        text= "倍数："+ data[1];
    var text2=new cc.LabelTTF(text, "MarkerFelt", 23);
    text2.setColor({r:0,g:0,b:0});
    text2.setPosition(cc.p(x, h-230));
    bg.addChild(text2);

        x+=160;
    var name=new cc.LabelTTF(StringUtil.getString("succeed_name"), "MarkerFelt", 28);
    name.setColor({r:0,g:0,b:0});
    name.setPosition(cc.p(x, h-130));
    bg.addChild(name);


        var person0=new cc.LabelTTF(name0, "MarkerFelt", 23);
    person0.setColor({r:255,g:0,b:0});
    person0.setPosition(cc.p(x, h-180));
    bg.addChild(person0);

    var person1=new cc.LabelTTF(name1, "MarkerFelt", 23);
    person1.setPosition(cc.p(x, h-230));
    person1.setColor({r:0,g:0,b:0});
    bg.addChild(person1);


        var person2=new cc.LabelTTF(name2, "MarkerFelt", 23);
    person2.setPosition(cc.p(x, h-280));
    person2.setColor({r:0,g:0,b:0});
    bg.addChild(person2);


         text="我的总分:"+ data[5];
    var score=new cc.LabelTTF(text, "MarkerFelt", 20);
    score.setColor({r:255,g:0,b:0});
    score.setPosition(cc.p(x, h-330));
    bg.addChild(score);

    x+=160;
    var win=new cc.LabelTTF(StringUtil.getString("succeed_win"), "MarkerFelt", 28);
    win.setColor({r:0,g:0,b:0});
    win.setPosition(cc.p(x, h-130));
    bg.addChild(win);

        if(data[2]>0){
        text= "+"+data[2];
    }else{
            text= data[2]+"";
    }

    var score0=new cc.LabelTTF(text, "MarkerFelt", 23);
    score0.setPosition(cc.p(x, h-180));
    score0.setColor({r:255,g:0,b:0});
    bg.addChild(score0);

        if(data[3]>0){
            text= "+"+data[3];
    }else{
            text= data[3]+"";
    }
    var score1=new cc.LabelTTF(text, "MarkerFelt", 23);
    score1.setPosition(cc.p(x, h-230));
    score1.setColor({r:0,g:0,b:0});
    bg.addChild(score1);

    if(data[4]>0){
        text= "+"+data[4];
    }else{
        text= data[4]+"";
    }
    var score2=new cc.LabelTTF(text, "MarkerFelt", 23);
    score2.setPosition(cc.p(x, h-280));
    score2.setColor({r:0,g:0,b:0});
    bg.addChild(score2);
     bg.setScale(0);
    bg.runAction(new cc.Sequence(new cc.DelayTime(3.0), new cc.ScaleTo(0.5, 1, 1)));

},
onEnter:function(){
     this.parent.pause();//加上他之后，才会停止父亲页面GameMain的鼠标传递,或者下面的方法，或者是在mouseBegan中加入阻止冒泡
    //cc.eventManager.pauseTarget(this.parent);

    if("touches" in cc.sys.capabilities)//如果是终端设备
        cc.eventManager.addListener(
            {event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan:this.ccTouchBegan,onTouchEnded:this.ccTouchEnded, onTouchesMoved: this.ccTouchMoved}, this);
    else if("mouse" in cc.sys.capabilities)//如果是网页
        cc.eventManager.addListener
        ({event: cc.EventListener.MOUSE, onMouseDown:this.ccMouseBegan.bind(this),
                onMouseUp:this.ccMouseEnded.bind(this),onMouseMove:this.ccMouseMoved.bind(this)},
            this);


    this._super();
},

onExit:function(){
    this.parent.resume();
    cc.eventManager.removeListener(this);
    this._super();
},
cancel:function(pSender,  controlEvent){
    var scene=this.getParent();
    scene.fenpai();
    scene.displayPersonPoker();
    scene.selectorDZ();
    AudioUtil.playBackMusic();
    this.removeFromParent();
},
onTouchExitAction:function(pSender,  controlEvent){
    cc.director.runScene(new GameIndexScene());
},
    //鼠标事件
    ccMouseBegan:function(event){
        //cc.log("DIALOGSUCCESS鼠标点击");
        event.stopPropagation();
    },
    ccMouseMoved:function(event){
    },
    ccMouseEnded:function(event){
    },


ccTouchBegan:function(touch, event){

     return false;
},
ccTouchMoved:function(touch,event){

},
ccTouchEnded:function(touch, event){

},
    ccTouchBegan2:function(touch,event){

        event.stopPropagation();
        return false;
    },


});








