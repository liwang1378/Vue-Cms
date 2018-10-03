# Vue-Cms
```
npm init -y
npm i webpack-dev-server -D
npm i webpack -D
npm i webpack-cli -D
npm i html-webpack-plugin -D
npm i style-loader css-loader -D
npm i less-loader less -D
npm i sass-loader node-sass -D
npm i url-loader file-loader -D
npm i mint-ui -S
npm i vue -S
npm i vue-loader vue-template-compiler -D
npm i vue-router -S
npm i vue-resource -S
npm i moment -S //时间工具
npm i vue-preview -S //图片缩略图

## 通过babel, 将高级语法转换为浏览器识别的低级语法
npm i babel-core babel-loader babel-plugin-transform-runtime -D
npm i babel-preset-env babel-preset-stage-0 -D
npm i babel-plugin-transform-remove-strict-mode -D //webpack移除js严格模式
```
## 制作首页App组件
1. 完成Header区域，使用的是Mint-UI中的Header组件
2. 制作底部的Tabbar区域，使用的是MUI的Tabbar
3. 中间区域放置router-view展示路由匹配的组件

## 改造tabbar为router-link

## 设置路由高亮

## 点击tabbar中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 使用vue-resource

## 改造新闻资讯路由链接

## 新闻资讯页面制作
1. 绘制界面,使用MUI中的media-list.html
2. 使用vue-resource获取数据
3. 渲染数据

## 制作图片顶部滑动条：
1. 借助MUI中的tab-top-webview-main.html
2. 滑动条无法正常触发滑动，因为是JS组件需要初始化
 + 导入mui.js
 + 初始化
```
mui('.mui-scroll-wrapper').scroll({
	deceleration:0.0005 //减速系数，越大速度越慢，滑动距离越小
	});
```

### 制作图片列表区域
1. 图片列表使用懒加载，mint-ui的lazy-load
2. 样式美化

## 实现点击图片跳转到图片详情页面
1. 在改造li为router-link,需要使用tag指定渲染的元素，默认为a

## 实现图片详情中缩略图功能
1. 使用vue-preview缩略图插件
