var data = {
      //云开发环境id
  env: 'cloud-demo-9ak3d',
      //分享配置
      share_title: '生活优',
      share_img: '/image/poster.jpg', //可以是网络地址，本地文件路径要填绝对位置
  share_poster:'https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzA3MzcxMjUxMA==&mid=2247483662&idx=1&sn=606e7f75a9e47a1c043b4a34ee9b621c&send_time=',//必须为网络地址
      //客服联系方式
      kefu: {
            weixin: 'xjk_1723717890',
            qq: '1723717890',
        gzh: 'https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzA3MzcxMjUxMA==&mid=2247483662&idx=1&sn=606e7f75a9e47a1c043b4a34ee9b621c&send_time=', //公众号二维码必须为网络地址
            phone: '' //如果你不设置电话客服，就留空
      },
      //默认启动页背景图，防止请求失败完全空白 
      //可以是网络地址，本地文件路径要填绝对位置
  bgurl: '/image/startBg.jpg',
  
      //区域
      regions: [{
                  name: '广东省',
                  id: 0
            },
            {
                  name: '浙江省',
                  id: 1
            },
            {
                  name: '福建省',
                  id: 2
            },
            {
                  name: '北京市',
                  id: 3
            },
            {
              name: '上海市',
              id: 4
            },
            {
              name: '其它地区',
              id: 5
            },
      ]
     
}
//下面获取时间
function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}