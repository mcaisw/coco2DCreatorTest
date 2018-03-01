cc.Class({
    extends: cc.Component,

    properties: {
        tag:"小怪物"
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {
        this.nick="monster";
    },

    // update (dt) {},

    GetTag:function(){
        return this.tag;
    },
});
