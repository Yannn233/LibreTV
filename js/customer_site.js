const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '虎牙资源',
    },
    baofeng_backup: {
        api: 'http://by.bfzyapi.com/api.php/provide/vod',
        name: '暴风资源_备份',
    },
    xiami: {
        api: 'http://zy.hls.one',
        name: '虾米资源',
    },
    qilin: {
        api: 'https://www.qilinzyz.com',
        name: '麒麟资源',
    },
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛资源',
    },
    hongniu_backup: {
        api: 'https://www.hongniuzy3.com/api.php/provide/vod',
        name: '红牛资源_备份',
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源',
    },
    jinying: {
        api: 'https://jyzyapi.com/provide/vod',
        name: '金鹰资源',
    },
    feifan: {
        api: 'http://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡资源',
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    modou: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    xiaomianyang: {
        api: 'https://vs.okcdn100.top/api.php/provide/vod',
        name: '小绵羊资源',
    },
    mozhu: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    douban: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}