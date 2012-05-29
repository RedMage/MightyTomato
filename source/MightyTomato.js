enyo.kind({
    name:"MightyTomato",
    kind:enyo.VFlexBox,
    seconds: 0,
    minutes: 25,
    components:[
        {kind:enyo.PageHeader, name:"PageHeader", components:[
            {content:"Mighty Tomato"}
        ]},
        {flex:1, kind:enyo.Pane, name:"Pane", components:[
            {flex:1, kind:"Scroller", name:"Scroller", components:[
                //Insert your components here
               {kind:"MainButton", name:"MainButton", ontap:"mainButtonPress"},
               {kind: onyx.Button, name:"TimerButton",showing: false, className:'timer-button', content: "25:00", ontap:"timerButtonPress"}

            ]}
        ]},

        {kind:enyo.Toolbar, name:"Toolbar", components:[

        ]}
    ],

    published:{

    },

    mainButtonPress:function () {
        this.$.MainButton.hide();
        this.$.TimerButton.show();
        window.setInterval("t.decrementTimer()",1000);
    },

    timerButtonPress: function(){

    },
    
    decrementTimer: function(){
       if(this.seconds == 0){
         this.minutes = this.minutes - 1;
         this.seconds = 59;
       }else{
         this.seconds = this.seconds - 1;
       }
       if(this.minutes < 0){
         window.clearInterval();
         this.minutes = 0;
         this.seconds = 0;
       }
       var mins = this.pad(this.minutes,2);
       var secs = this.pad(this.seconds,2);
       this.$.TimerButton.setContent(mins + ":" + secs);
    },

    pad:function (number, length) {

        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
});
