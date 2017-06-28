

module.exports = function(RED) {


    function WebSynthSoundNode(config) {
        RED.nodes.createNode(this,config);

        // node specific code here
        // var node = this;
        // node.on('input', function(msg) {
        //     msg.payload = msg.payload.toLowerCase();
        //     node.send(msg);
        // });
        this.on('input', function(msg) {
          // do something with msg
          var msg = { payload: "hi"}
          this.send(msg);
          this.status({fill:"red",shape:"ring",text:"disconnected"});
        })
    }
    RED.nodes.registerType("web-synth-sound",WebSynthSoundNode);
}
