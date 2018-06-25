window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};
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
                liff.sendMessage([{
                    type: 'text',
                    text: "YES!、メッセージを送りました。"
                }]).then(function () {
                    window.alert("メッセージを送りました。");
                }).catch(function (error) {
                    window.alert("メッセージ送るを" + error);
                });;
                
            }
          }
        })
    });
}