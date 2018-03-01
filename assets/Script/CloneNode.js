var Global=require("Global");
var cloneNode;
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {

      },

    start () {

        // setTimeout(() => {
        //     cloneNode.destroy();
        // }, 5000);
        // confirm("Press a button!");
    },

    update (dt) {
        //如果创建出新的node
        if(Global.newNode!=null&&!this.enter){
            cc.log("enter  enter  enter");
            this.enter=true;

            //clone existNode
            var scene=cc.director.getScene();//放到这个scene"CreatNewNodeDynamically"下面
            var cloneNodeTemp =cc.instantiate(Global.newNode);

            //设置克隆出的新node的父物体（非canvas,和canvas是同级的）
            cloneNodeTemp.parent=scene;
            //设置位置
            cloneNodeTemp.setPosition(480,320);

            cc.log(cloneNodeTemp instanceof cc.Node);//是node

            //给克隆的新node添加事件
            cloneNodeTemp.on(cc.Node.EventType.MOUSE_DOWN,function(event){
                cc.log("按下鼠标5秒后销毁");
                setTimeout(() => {
                    cloneNodeTemp.destroy();
                }, (5000));
            },cloneNodeTemp),

            cloneNode=cloneNodeTemp;
            cc.log("clone node "+cloneNode.position);
        };
    },
});
