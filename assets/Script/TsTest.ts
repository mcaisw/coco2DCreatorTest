

const {ccclass, property} = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property
    num: number =10;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.tempFunction();
        var obj=new objectTemp(10);
        obj.tempFunc().anotherFunc();
    }
    // update (dt) {},
    
   tempFunction():void{
        cc.log("hello");
   }
}

class objectTemp{

    ID=10;
    constructor(id){
        this.ID=id;
    }
    //function
    tempFunc(){
        cc.log("i am objectTemp my id is "+this.ID);
        return this;
    }
    anotherFunc(){
        // return "hi ,i am another func";
        cc.log("hi ,i am another func") ;
    }
}
