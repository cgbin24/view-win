# view-win

<p align="start">
  <a href="https://www.npmjs.com/package/view-win">
    <img src="https://img.shields.io/npm/v/view-win.svg" alt="npm package">
  </a>
  <a href="https://www.npmjs.com/package/view-win">
    <img src="https://img.shields.io/npm/dt/view-win.svg" alt="downloads"/>
  </a>
</p>

> 视窗显示

#### usage
- 第一步，安装 `view-win`
```shell
npm i view-win
```
- 第二步，在指定要使用的文件内导入
```js
import ViewWin from 'view-win'
```
- 第三步，初始化
> 初始化动作必须保证当前 `target` 目标已存在（可访问）
```js
const vw = new ViewWin({
  target: element,
  direction: 'x',
  vmid: true
})
```
- 第四步，销毁事件
```js
vw.rmEvent()
```

- 移除

```shell
npm uninstall view-win
```




#### api

| 参数      | 说明                             | 类型        | 默认值 |
| --------- | -------------------------------- | ----------- | ------ |
| target    | 目标容器                         | HTMLElement | null   |
| direction | 滚动方向                         | `x` ｜ `y`   | `y`    |
| vmid      | 是否开启点击选项居中显示（可选） | boolean     | false  |



#### examples

[demos](https://github.com/cgbin24/view-win/tree/master/examples)

![view-win-example](https://github.com/cgbin24/view-win/blob/master/assets/example.gif)
