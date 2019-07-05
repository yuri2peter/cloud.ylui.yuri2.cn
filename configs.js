YL.static = {
  /** “关于”信息 */
  softwareName: 'YLUI 云桌面', //网站名。请在此处填写您自己的网站名，如王小明的博客。
  version: "1.0.0", // 网站版本号
  iconBtnStart: 'cloud', //主图标
  author: 'yuri2',//作者
  contactInformation: 'yuri2peter@qq.com',//联系方式
  officialWebsite: 'https://ylui.yuri2.cn',//软件官网
  welcome: 'YLUI 云桌面 由 YLUI 强力驱动\n更多信息：//ylui.yuri2.cn',//加载完毕控制台提示信息
  copyrightDetail: 'yuri2 版权所有',//版权详细信息
  otherStatements: '',//其他信息（可留空）

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** YLUI基础设置 */
  lang: 'zh-cn', //语言
  localStorageName: "ylui-storage", //ls存储名
  lockedApps: ['yl-system', 'yl-color-picker', 'ylui-fa', 'yl-browser', 'yl-server', 'yl-server-cloud'], // 锁定的应用（不允许被脚本修改）
  trustedApps: ['yl-server', 'yl-server-cloud'], // 受信任的应用（可以使用敏感API）
  debug: false,//启用更多调试信息
  beforeOnloadEnable: true,//启用关闭前询问（打包app时请关闭防止出错）
  WarningPerformanceInIE: true,//在IE下提示体验不佳信息
  languages: {}, //推荐留空，自动从文件加载
  changeable: true,//存档数据是否可被普通用户修改
  dataCenter: true,//是否展示数据管理中心

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** YLUI注册信息 */
  authorization: 'P2',//授权类型
  serialNumber: 'official usage',//序列号

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** 云服务 */
  cloudHome: 'https://cloud.ylui.yuri2.cn',
  cloudAPI: 'https://now-express.yuri2peter.now.sh/api/oss',
};
