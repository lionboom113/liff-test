window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    }, function (e) {
        initializeD(e);
    });
};
function initializeD(data) {

}
function initializeApp(data) {
    liff.getProfile().then(function (result) {

        var app = new Vue({
          el: '#app',
          data: {
            pollText: ""
          },
          methods: {
            sendPoll: function sendPic (test) {
              var random = Math.floor(Math.random() * 1000)
                liff.sendMessages([
                // {
                //     type: 'image',
                //     originalContentUrl: url,
                //     previewImageUrl: url
                // },
                {
                  "type": "template",
                  "altText": test,
                  "template": {
                      "type": "buttons",
                      "text": test,
                      "actions": [
                          {
                            "type": "uri",
                            "label": "はい！",
                            "uri": "https://liff-test-tuanhma.herokuapp.com/rep.php?ans=yes&poll=" + random
                          },
                          {
                            "type": "uri",
                            "label": "いいえ!",
                            "uri": "https://liff-test-tuanhma.herokuapp.com/rep.php?ans=no&poll=" + random
                          },
                          {
                            "type": "uri",
                            "label": "結果を見る!",
                            "uri": "https://liff-test-tuanhma.herokuapp.com/rep.php?poll=" + random
                          }
                      ]
                  }
                }
                ]).then(function () {
                    liff.closeWindow();
                }).catch(function (error) {
                    alert("メッセージ送るを" + error);
                });;
            }
          }
        })
    });
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}