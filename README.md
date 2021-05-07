### 用于支付宝小程序
组件可以监听页面事件

#### 背景
由于现在的组件无法调用页面的方法，使得组件的功能封装不够完美。
1. 比如有一个 header 组件，需要实现页面滚动的时候动态更新透明度，这个时候就要使用到页面 onPageScroll（页面滚动时触发） 方法来触发更新，这样就使得组件每次调用还要去调用页面的方法绑定事件在更新视图，可用性麻烦。
2. 还比如有一个下拉刷新要监听 onPullDownRefresh 等。
3. 图片、组件懒加载，监听滚动事件是否到可视区，后续操作等。

#### 安装
```
npm install --save applet-page-component
```

```javascript
// 这是所支持的事件
// onLoad，onReady onUnload 
// 这三个暂时不支持,这些方法是在组件挂载之前就执行的，这个时候组件还未挂载，也拿不到this，也无法驱动视图
// 另外组件的didMount可以替代 onLoad、onReady，didUnmount 可以替代 onUnload。
function getEvents() {
  return {
    // onLoad() {

    // },
    // onReady() {
    // 页面onReady
    // },
    // onUnload() {
    // 页面销毁
    // },
    onShow() {
      // 页面显示 组件从其他页面返回来时触发，前提是此页面没有被销毁
    },
    onHide() {
      // 页面隐藏 组件跳转到其他页面时触发
    },
    onShareAppMessage() {
      // 点击右上角分享时触发。
    },
    onTitleClick() {
      // 标题被点击
    },
    onOptionMenuClick() {
      // 点击导航栏额外图标触发
    },
    onPullDownRefresh() {
      // 页面被下拉
    },
    onPullIntercept() {
      // 下拉中断时触发。
    },
    onTabItemTap() {
      // 点击 tabItem 时触发。
    },
    onPageScroll() {
      // 页面滚动时触发。
    },
    onReachBottom() {
      // 页面被拉到底部
    },
  }
}
```

#### api
总共就两个api
```javascript
import { createPublish, createSubscribe } from 'applet-page-component';
```

#### 使用
第一步，需要在页面进行 createPublish 的调用，或者手动写上需要监听的事件，可以是空函数，但是必须有
比如如下这种，小程序需要在编译前就传入需要监听的事件，不然不会触发页面上的事件，导致无法监听

```javascript
import { createPublish } from 'applet-page-component';

// 写法一，这种的内置了一个绑定空方法，请参考 getEvents 支持的方法
Page(createPublish({
  onShow() {
    console.warn('组件被显示');
  },
  onHide() {
    console.warn('组件被隐藏');
  },
}));

// 写法二
Page({
  ...createPublish(),
  onShow() {
    console.warn('组件被显示');
  },
  onHide() {
    console.warn('组件被隐藏');
  },
});

// 写法三，这种的只能监听 onShow onHide
Page({
  onShow() {
    console.warn('组件被显示');
  },
  onHide() {
    console.warn('组件被隐藏');
  },
});
```

第二步，需要在组件定义的地方调用 createSubscribe 方法，传入需要监听的事件即可进行监听。
```javascript
import { createSubscribe } from 'applet-page-component';

// createSubscribe()() 使用
// 这个地方的this指向当前组件。页面地方的this还是指向页面。
// 如果页面没有对应的空方法，会不生效，并且会在控制台提示一个error
Component(createSubscribe({
  // pageResult 为页面方法的返回值，args为方法其他参数
  onShareAppMessage(pageResult, ...args) {
    return {
      title : '分享 View 组件' ,
      desc : 'View 组件很通用' ,
      path : 'page/component/view/view' ,
    };
  },
  // pageResult 为页面方法的返回值
  onShow(pageResult) {
    console.warn('组件被显示', pageResult);
  },
  onHide() {
    console.warn('组件被隐藏');
  },
  onPageScroll() {
    console.warn(...arguments);
  },
  onPullDownRefresh() {
    console.warn('页面被下拉');
  },
  onReachBottom() {
    // 滚动到底部获取数据
    this.fetchReportList({ 
      pageIndex: this.data.pageIndex + 1
    });
  },
})({
  data: {
    list: [],
    pageIndex: 0,
  },
  didMount() {
    this.fetchReportList();
  },
  methods: {
    async fetchReportList({ pageIndex = 1, pageSize = 10 } = {}) {
      // ...实现代码
    },
  },
}));
```
----------------
