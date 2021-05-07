// 这是所支持的事件
// onLoad，onReady onUnload
// 这三个暂时不支持,这些方法是在组件挂载之前就执行的，这个时候组件还未挂载，也拿不到this，也无法驱动视图
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
  };
}

// 给页面调用，需要在编译前就对options修改，不然无法驱动事件。
function createPublish(options = {}) {
  const events = getEvents();
  for (const key in events) {
    if (Object.hasOwnProperty.call(events, key)) {
      options[key] = options[key] || events[key];
    }
  }
  return options;
}

// 创建监听，给组件调用
function createSubscribe(events = {}) {
  return function (options) {
    const oldDidMount = options.didMount;
    const bindEvents = getEvents();
    options.didMount = function (...didMountArgs) {
      const $page = this.$page;
      const that = this;
      for (const key in bindEvents) {
        if (!Object.hasOwnProperty.call(bindEvents, key)) {
          return;
        }
        const oldEvent = $page[key];
        const oldMyEvent = events[key];
        if (oldMyEvent && (!oldEvent)) {
          console.error(`页面没有添加 ${key} 方法`);
        }
        $page[key] = function (...args) {
          const pageResult = oldEvent && oldEvent.call($page, ...args);
          const componentResult = oldMyEvent && oldMyEvent.call(that, pageResult, ...args);
          return componentResult ? componentResult : pageResult;
        };
      }
      oldDidMount && oldDidMount.call(this, ...didMountArgs);
    };
    return options;
  };
}

module.exports = {
  createPublish,
  createSubscribe,
};
