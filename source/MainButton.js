/**
 * Created by JetBrains RubyMine.
 * User: moriger
 * Date: 4/26/12
 * Time: 5:17 PM
 * To change this template use File | Settings | File Templates.
 */

enyo.kind({
    name:"MainButton",
    kind: onyx.Button,
    components:[
        {kind:enyo.Image, src:"images/tomato.png", name:"tomatoIcon", classes:"centered"}
    ]
});
