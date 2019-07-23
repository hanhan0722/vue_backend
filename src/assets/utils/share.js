/**
 *      param   obj  Object
 *                      link    //分享连接
 *                      appId   //appId
 *                      timestamp  //timestamp
 *                      nonceStr    
 *                      signature  
 * */
import store from '../../vuex/store';

function shareToApp(obj) {
  $.get(store.state.commodityhost + "/v1/commodity/store/" + sessionStorage.getItem('onlischoolCode')).then(data => {
    wx.config({
      debug: false,
      appId: obj.appId,
      timestamp: obj.timestamp,
      nonceStr: obj.nonceStr,
      signature: obj.signature,
      jsApiList: [ // 所有要调用的 API 都要加到这个列表中
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ],
    });
    wx.ready(function () { //必须写在wx.ready里面
      //请求分享数据
      var link = obj.link;
      var imgUrl = data.data.storeLogo||'./static/img/ydkt.jpg';
      var title = data.data.storeName||'';
      var desc = data.data.storeDesc||'';
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl // 分享图标
      });
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
      });
    });
  })
}
export {
  shareToApp
}
