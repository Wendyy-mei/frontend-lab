## 一、项目体检：我发现了 11 个学习素材

这些不是理论题，是你项目里真实存在的问题：

| #    | 位置                                             | 问题                                  | 对应知识点       |
| :--- | :----------------------------------------------- | :------------------------------------ | :--------------- |
| 1    | `src/utils/index.js:545`                         | 箭头函数里用 `this.base`              | this / ES Module |
| 2    | `src/utils/index.js:140`                         | `setTableRowSpan` 三层循环 O(n³)      | 算法复杂度       |
| 3    | `src/api/http.js:293`                            | `replaceToken` 同步 XHR `async:false` | 事件循环 / 性能  |
| 4    | `src/api/http.js:138`                            | `new Promise` 包 `axios.then` 反模式  | Promise          |
| 5    | `src/store/index.js:158`                         | `!keyArr instanceof Array` 优先级 bug | 运算符优先级     |
| 6    | `src/store/index.js:19`                          | getter 里写 state（副作用）           | Vuex 规范        |
| 7    | `src/api/permission.js:58`                       | `useRouter` 在普通函数里调用          | Vue3 生命周期    |
| 8    | `src/api/permission.js:37`                       | `to401` 方法递归调用自己              | 代码质量         |
| 9    | `src/extension/business/waybill/B_WayBill.js:85` | `JSON.parse(JSON.stringify())` 浅拷贝 | 深拷贝           |
| 10   | `src/extension/business/waybill/B_WayBill.js`    | 3517 行巨石文件                       | 模块拆分         |
| 11   | `src/extension/business/waybill/B_WayBill.js:20` | 模块顶层 `ref({})` 跨页面共享状态     | 响应式作用域     |