webpackJsonp([9],{20:function(t,e){},56:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".content[data-v-3ccd41f3]{bottom:0}.about[data-v-3ccd41f3]{padding:10px;line-height:22px}.about dt[data-v-3ccd41f3]{line-height:28px;font-weight:700}",""])},82:function(t,e,n){var o,c;n(118),o=n(20);var a=n(101);c=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(c=o=o.default),"function"==typeof c&&(c=c.options),c.render=a.render,c.staticRenderFns=a.staticRenderFns,c._scopeId="data-v-3ccd41f3",t.exports=o},101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",[e("v-header",{attrs:{title:"关于"}},[e("div",{staticClass:"item",attrs:{flex:"main:center cross:center"},on:{click:function(e){t.$router.go(-1)}},slot:"left"},[e("i",{staticClass:"iconfont icon-back"})])])," ",e("v-content",{staticClass:"content"},[e("div",{staticClass:"about"},[e("dl",[e("dt",["前言"])," ",e("dd",["\n                    项目灵感的最初来源是来自",e("a",["@shinygang"]),"的Vue-cnodejs，感谢cnodejs社区提供的API。\n                "])," ",e("dt",["技术栈"])," ",e("dd",["\n                    项目基于vue2、vue-router、vuex、flex.css、ES6进行开发，使用了webpack、babel编译。\n                "])," ",e("dt",["感悟"])," ",e("dd",["\n                    在vue-cnode升级vue2的时候，在公司内部已经有两个正式项目使用vue2， 遇到的一个最难的问题，就是如何能在页面后退时还原数据和滚动条位置， 虽然vue2内置了keep-alive组件，vue-router也提供了scrollBehavior方法进行设置，\n                    但是仍然无法满足需求，后来阅读vue-router的源码发现， 每个页面都会自动在history.state对象中存储一个对应的key值， 便利用这个特性实现了页面后退时，数据和滚动条还原， 不过目前只是实现了页面的顶级组件还原，如果需要对顶级组件下的子组件实现数据还原，\n                    可以利用$options._scopeId来实现。哈哈，具体如何实现就要靠大家自己发挥想象力了\n                "])," ",e("dt",["源码"])," ",e("dd",[e("a",{attrs:{href:"https://github.com/lzxb/vue-cnode",target:"_blank"}},["https://github.com/lzxb/vue-cnode"])])," ",e("dt",["反馈"])," ",e("dd",[e("a",{attrs:{href:"https://github.com/lzxb/vue-cnode/issues",target:"_blank"}},["https://github.com/lzxb/vue-cnode"])])," ",e("dt",["版本"])," ",e("dd",["\n                    v2.0 beta\n                "])])])])])},staticRenderFns:[]}},118:function(t,e,n){var o=n(56);"string"==typeof o&&(o=[[t.id,o,""]]),n(2)(o,{}),o.locals&&(t.exports=o.locals)}});