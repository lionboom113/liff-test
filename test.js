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
            message : "",
            imageList: ["https://3.bp.blogspot.com/-xLygOwNxVBw/WwJbdSO3ZQI/AAAAAAABMS8/Q9S8Hrf8O8wjjmMEZ3wvpbLUumMEhloaQCLcBGAs/s400/wrist_weight.png",
            "https://3.bp.blogspot.com/-WlsVKwSCdMY/Wn1ZytIJ4YI/AAAAAAABKPU/ghL-n4w4wsw3S_egHQW0sm41Og5AlZ0mQCLcBGAs/s400/juken_sleep_inemuri_man.png",
            "https://1.bp.blogspot.com/-rzffHKcQnEk/WvQH-Z_IHyI/AAAAAAABL_E/LBK5cIqtS2MqiRief4theSsM_xI9MUkrgCLcBGAs/s400/torokko_trolley_rail_businesswoman_out.png",
            "https://1.bp.blogspot.com/-3woIFWz1_Zk/WvQH8sRKO_I/AAAAAAABL-4/tPcqQau8EQQTWxbOA2Y_ZCjii2HGZ85TQCLcBGAs/s400/torokko_trolley_rail_businessman.png"]
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
            name: result.displayName,
            imageList: ["https://3.bp.blogspot.com/-xLygOwNxVBw/WwJbdSO3ZQI/AAAAAAABMS8/Q9S8Hrf8O8wjjmMEZ3wvpbLUumMEhloaQCLcBGAs/s400/wrist_weight.png",
            "https://3.bp.blogspot.com/-WlsVKwSCdMY/Wn1ZytIJ4YI/AAAAAAABKPU/ghL-n4w4wsw3S_egHQW0sm41Og5AlZ0mQCLcBGAs/s400/juken_sleep_inemuri_man.png",
            "https://1.bp.blogspot.com/-rzffHKcQnEk/WvQH-Z_IHyI/AAAAAAABL_E/LBK5cIqtS2MqiRief4theSsM_xI9MUkrgCLcBGAs/s400/torokko_trolley_rail_businesswoman_out.png",
            "https://1.bp.blogspot.com/-3woIFWz1_Zk/WvQH8sRKO_I/AAAAAAABL-4/tPcqQau8EQQTWxbOA2Y_ZCjii2HGZ85TQCLcBGAs/s400/torokko_trolley_rail_businessman.png"]
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
            sendPicture: function sendPic (url) {
                liff.sendMessages([{
                    type: 'image',
                    originalContentUrl: url,
                    previewImageUrl: url
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