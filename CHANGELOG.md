# 历史版本
### 0.2.0 (2018-03-12)

* 删除组件`PSelectGoods`(业务变化太频繁)
* 增加`Paging`中`CheckBox`全选， 写法大改； 

### 0.1.29 (2018-03-08)

* 添加`Upload` showTips控制上传进度弹窗，size控制文件大小（size）

### 0.1.28 (2018-03-05)

* [`DebounceClick: click防抖`](https://github.com/wya-team/wya-rc/tree/master/src/web/debounce-click/)
* [`Calendar: 日历组件`](https://github.com/wya-team/wya-rc/tree/master/src/web/calendar/)
* 修改`PGallery`分页问题

### 0.1.27 (2018-02-27)

* 修改`PGallery` -> `cat_id = 0`,显示全部图片，增加多选功能（默认多选） 
* 修改`PSelectGooods`, `select` ->  `selectArr`, `disableSelect` -> `disableArr`

### 0.1.20 (2018-02-10)

* 添加[`DownCount: 倒计时`](https://github.com/wya-team/wya-rc/tree/master/src/web/down-count/)

### 0.1.19 (2018-02-09)

* 添加[`PSelectGoods`] 增加选择限制`max`

### 0.1.16 (2018-02-05)

* 添加[`PPopup`](https://github.com/wya-team/wya-rc/tree/master/src/web/p-popup/)
* 添加[`PSelectGoods`](https://github.com/wya-team/wya-rc/tree/master/src/web/p-select-goods/)

### 0.1.15 (2018-01-27)

* 修改`Upload`几个参数，针对单个文件
	* `onSuccess` -> `onFileSuccess`
	* `onError` -> `onFileError`
	* `onUploadBefore` -> `onFileBefore`
	* `onUploadStart` -> `onFileStart`
	* `onBegin`
	* `onComplete`
* `AsyncComponent`增加`refName`, `onLoaded`
* 富文本编辑框（图片暂时无法编辑）

### 0.1.11 (2018-01-27)

* 添加 [`AsyncComponent`](https://github.com/wya-team/wya-rc/tree/master/src/web/async-component/) 异步加载组件
* 添加 [`Editor`](https://github.com/wya-team/wya-rc/tree/master/src/web/editor/) 富文本组件

### 0.1.10 (2018-01-26)

* 添加 [`Upload`](https://github.com/wya-team/wya-rc/tree/master/src/web/upload/) 上传

### 0.1.7 (2018-01-24)

* 添加 [`RcIntance`](https://github.com/wya-team/wya-rc/tree/master/src/web/rc-instance/) 单例对象 `配置`
* 添加[`Paging`](https://github.com/wya-team/wya-rc/tree/master/src/web/paging/)
* 添加[`Echarts`](https://github.com/wya-team/wya-rc/tree/master/src/web/echarts/) 按需加载`echart.js`

### 0.1.4 (2018-01-20)

* 添加 `babel-plugin-transform-runtime` 处理支持 `async/await`
* 添加[`Copy`](https://github.com/wya-team/wya-rc/tree/master/src/web/copy/)

### 0.1.3 (2018-01-19)

* 初始化仓库，增加测试用例 `jest`
* 添加 `babel-cli` => `lib`
* 添加第一个组件 [`CreatePrint`](https://github.com/wya-team/wya-rc/tree/master/src/web/create-print/)

### 0.1.0 (2018-01-02)

* 添加仓库
