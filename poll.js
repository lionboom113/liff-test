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
                            "uri": "line://app/1589046222-VkRzQel7/rep.php?ans=no"
                          },
                          {
                            "type": "uri",
                            "label": "いいえ!",
                            "uri": "line://app/1589046222-VkRzQel7rep.php?ans=no"
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