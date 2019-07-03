/**
 * 读取配置示例文件
 * 修改此文件来实现持久化
 * YL.init(data) 中的data必须是ylui接受的数据格式
 * 开发者可以自行决定从静态文件读取（如basic.json）还是从远程服务器拉取（如ajax请求）
 */

YL.onLoad(function () {
  var token = Yuri2.parseURL().hash;
  if (token) {
    axios.get(YL.static.cloudAPI + '/' + token)
      .then(function (response) {
        const initData = response.data.data;
        if (!initData) {
          alert('无效的桌面ID，请检查URL是否正确');
          location.href = YL.static.cloudHome;
        } else {
          YL.init(response.data);
        }
      })
      .catch(function (error) {
        console.error(error);
        alert('服务暂不可用，请稍后再试');
        location.href = YL.static.cloudHome;
      });
  } else {
    axios.get('./saves/basic.json')
      .then(function (response) {
        YL.init(response.data);
      })
  }
});
