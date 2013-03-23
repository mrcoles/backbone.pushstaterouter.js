if (Meteor.isClient) {
    Meteor.startup(function () {
        var $msgs = $('#msgs');
        function writeMsg(msg) {
            $msgs.prepend('Routed: ' + _.escape(msg) + '<br>');
        }

        var router = Backbone.PushStateRouter({
            "": function() { writeMsg('root'); },
            ":animal": "animal",
            "posts/:id": "getPost"
        }, {
            animal: function(type) {
                writeMsg('animal "' + type + '"');
            },
            getPost: function(id) {
                writeMsg('post "' + id + '"');
            }
        });
    });
}
