window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    }, function (e) {
        initializeD(e);
    });
};
function initializeD(data) {
   var app = new Vue({
          el: '#app',
          data: {
            userId: "data.context.userId",
            name: "result.displayName",
            message : ""
          },
          methods: {
            sendTemplate: function (event) {
                liff.sendMessages([{
                    type: 'text',
                    text: this.$data.message
                }]).then(function () {
                    alert("メッセージを送りました。");
                }).catch(function (error) {
                    alert("メッセージ送るを" + error);
                });;
                
            }
          }
    });
}
function initializeApp(data) {
    liff.getProfile().then(function (result) {
        var app = new Vue({
          el: '#app',
          data: {
            language: data.language,
            contextType: data.context.type,
            viewType: data.context.viewType,
            userId: data.context.userId,
            name: result.displayName
          },
          methods: {
            sendTemplate: function (event) {
                liff.sendMessages([{
                    type: 'text',
                    text: this.$data.message
                }]).then(function () {
                    alert("メッセージを送りました。");
                }).catch(function (error) {
                    alert("メッセージ送るを" + error);
                });;
                
            }
          }
        })
    });
}