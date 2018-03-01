var newNode;
var Global=require("Global");
cc.Class({
    extends: cc.Component,

    properties: {
        sprite:{
            default:null,
            type: cc.SpriteFrame,

        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.time=0;
    }
    ,

    start () {

        //新创建一个node
        var node=new cc.Node("Sprite");
        newNode=node;
        //添加Sprite组件
        var sp=node.addComponent(cc.Sprite);
        //指定图片
        sp.spriteFrame=this.sprite;
        //设置该node的父物体（Canvas）
        node.parent=this.node;
        //设置位置
        node.position=cc.v2(100);
        //导出该节点供外部使用
        Global.newNode=node;

        cc.log(this);
        
    },

    update (dt) {
        this.time+=dt;
        newNode.x=Math.sin(this.time)*50;
        // cc.log(newNode.position+this.node.name);
    },
});
