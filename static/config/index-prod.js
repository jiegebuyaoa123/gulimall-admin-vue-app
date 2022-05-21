/**
 * 生产环境
 */
;(function () {
  window.SITE_CONFIG = {}

  // api接口请求地址http://192.168.56.100:31003/api
  window.SITE_CONFIG['baseUrl'] = 'http://demo.open.renren.io/renren-fast-server'

  // cdn地址 = 域名 + 版本号  dtrnmchzhextcbec
  window.SITE_CONFIG['domain'] = './' // 域名
  window.SITE_CONFIG['version'] = ''   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()
