## FPM-PLUGIN-TIANYI
用于接中国电信的NBIOT平台的插件

### Install
```bash
npm add fpm-plugin-tianyi --save
```

### Useage

- config
```
{
    "tianyi": {
        "appId": "****",
        "secret": "**",
        "webhook": "http://${****}/webhook/tianyi/notify/datachange"    // http的协议只能用于调试，正式环境还是需要切换成https
    }
}
```

- subscribe

`#tianyi/notify`

- other

相关文档

[开发指南](https://180.101.147.208:8093/assets/docCenter/helpcenter/helpPortal/Portal/helpcenter.html?manualName=UserGuide_CMCC&docSite=CMCC&page=gettingStarted&lang=zh)