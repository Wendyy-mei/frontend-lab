// 任务 1：计数器
// createCounter() 返回一个函数，每次调用返回递增的数字
// 要求：外部无法直接读写内部变量
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// 任务 2：模块模式
// createStore(initial) 返回 { get, set }，内部 state 不可直接访问
function createStore(initial) {
  let state = initial;
  return {
    get: function () {
      return state;
    },
    set: function (newState) {
      state = newState;
    }
  };
}

// 任务 3：for 循环绑定
// 用 var 声明循环变量，让 3 个按钮点击时分别打印 0 / 1 / 2
// 写出 3 种解法（IIFE / setTimeout 第三参数 / let）
for (var i = 0; i < 3; i++) {}
// 解法 1：IIFE（用函数作用域隔离）
// 原理：var 只有函数作用域，所以每次迭代用 IIFE 创建一个函数作用域，把当前的 i 传进去。j 是当次迭代的“快照”，定时器回调捕获的是 j，不是共享的 i
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 0);
  })(i);
}
// 解法 2：setTimeout 第三参数
for (var i = 0; i < 3; i++) {
  setTimeout(j => {
    console.log(j);
  }, 0);
}

// 解法 3：let（块级作用域）
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
