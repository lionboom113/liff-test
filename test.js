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
            sendTemplate: function (sendText) {
                liff.sendMessages([{
                    type: 'text',
                    text: sendText
                }]).then(function () {
                    alert("メッセージを送りました。");
                }).catch(function (error) {
                    alert("メッセージ送るを" + error);
                });;
                
            },
            sendPicture: function sendPic () {
                liff.sendMessages([{
                    type: 'image',
                    originalContentUrl: "https://3.bp.blogspot.com/-xLygOwNxVBw/WwJbdSO3ZQI/AAAAAAABMS8/Q9S8Hrf8O8wjjmMEZ3wvpbLUumMEhloaQCLcBGAs/s400/wrist_weight.png",
                    previewImageUrl: "https://3.bp.blogspot.com/-xLygOwNxVBw/WwJbdSO3ZQI/AAAAAAABMS8/Q9S8Hrf8O8wjjmMEZ3wvpbLUumMEhloaQCLcBGAs/s400/wrist_weight.png"
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
            sendTemplate: function (sendText) {
                liff.sendMessages([{
                    type: 'text',
                    text: sendText
                }]).then(function () {
                    alert("メッセージを送りました。");
                    liff.closeWindow();
                }).catch(function (error) {
                    alert("メッセージ送るを" + error);
                });;
                
            },
            sendPicture: function sendPic () {
                liff.sendMessages([{
                    type: 'image',
                    originalContentUrl: "https://3.bp.blogspot.com/-xLygOwNxVBw/WwJbdSO3ZQI/AAAAAAABMS8/Q9S8Hrf8O8wjjmMEZ3wvpbLUumMEhloaQCLcBGAs/s400/wrist_weight.png",
                    previewImageUrl: "https://3.bp.blogspot.com/-xLygOwNxVBw/WwJbdSO3ZQI/AAAAAAABMS8/Q9S8Hrf8O8wjjmMEZ3wvpbLUumMEhloaQCLcBGAs/s400/wrist_weight.png"
                }]).then(function () {
                    alert("メッセージを送りました。");
                    liff.closeWindow();
                }).catch(function (error) {
                    alert("メッセージ送るを" + error);
                });;
            }
          }
        })
    });
}