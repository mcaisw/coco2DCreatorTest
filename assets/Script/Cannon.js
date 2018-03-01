var Player=require("Player");
var playerCompo;
cc.Class({
    extends: cc.Component,

    properties: {
       player:{
        default:null,
        type:cc.Node,
       },
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       playerCompo=this.player.getComponent(Player);
    },

    start :function() {
    },

    update (dt) {
        // cc.log(playerCompo.tag);
        // cc.log(playerCompo.GetTag());
        cc.log(playerCompo.nick);
    },
});
