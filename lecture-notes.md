# 第二节课 前端与 html

## font-end about

1. web 技术栈解决多端图形用户界面交互的工程师
2. 美观、安全、兼容、功能、体验、性能、无障碍
3. nodejs 开发服务器端应用，electron、react native 开发客户端应用，web rtc 进行在线传输实现多人会议，webgl 开发流畅 3D 游戏，web assembly 将 C++、rust 语言代码编译成可以在浏览器运行的代码
4. 前端入门
   1. 编辑器：vscode、vim、webstorm

## html start

1. html 概念，超文本概念，markup language 概念
2. doctype 标记我们当前 html 文件的 html 版本，浏览器据此确定页面渲染模式，没有 doctype 会变成怪异模式
3. html 是根标签，head 标签是元数据，不需要直接呈现的；body 标签是要呈现在页面的
4. dom 树，最上层是 document->html->head/body
5. html 语法
   1. 标签和属性不区分大小写，推荐小写
   2. 空标签可以不闭合，比如 input、meta
   3. 属性值推荐用双引号包裹
   4. 某些属性值可以省略，比如 required、readonly
6. dl-dt-dd，类似于 key-value，descriptionList，dt 和 dd 是多对多关系
7. anchor 锚点-a 标签
8. controls 属性
9. input 标签的多重实现![Alt text](image.png)
   1. range type 滑动框
   2. date type 日期框 min 属性最小日期 xxxx-xx-xx 格式属性值
   3. number type 数字框 min 和 max 属性，上下调整
10. datalist 标签![Alt text](images/image-1.png)
    1. 通过 input 标签的 list 属性和 datalist 标签的 id 属性保持一致，使两者相关联
11. 通过 label 标签的 for 属性和 id 属性保持一致，是两者相绑定

## 语义化标签-文字性内容

1. 引用：
   1. blockquote，块级引用、长引用，直接引用一段话，cite 属性指明引文来源
   2. cite，短引用，作品名字/章节
   3. q，短引用，内容
   4. code，代码，可长可短，等宽字体
   5. pre，包裹 code，多行代码
2. 文本标签-强调
   1. **em，语气强调，重读**
   2. strong，重要严重紧急

## 语义化标签-内容划分

1. header nav main article aside footer
   - **博客内容，每篇博客放在 article 标签里面～**

## what is 语义化

1. html 中的元素、属性和属性值都有含义
2. 遵循语义来编写 html；有序列表/无序列表；**html 标签的 lang 属性指定语言**，chrome 的自动翻译

## why 语义化

1. html 的使用者
   - 开发者 修改 维护；浏览器 展示页面；
   - **搜索引擎 提取关键字、排序**（博客文章权重、SEO？）；
   - 屏幕阅读器 给盲人读页面内容；
   - **无障碍性**：img 标签的 alt 等，按钮大小，页面颜色对比度等等
2. 传达内容，而不是样式

## 如何做到语义化

1. 了解每个标签和属性的含义
   1. 要去通读所有 html 标签
   2. mdn
   3. w3c 标准
2. 思考什么标签最适合描述这个内容
3. 不使用可视化工具生成代码

# 第一节课 前端语言串讲

## css about

1. 层叠样式表
2. 伪元素和伪类选择器
   1. **伪元素选择器 有很多**（元素自身状态）
      - :hover
      - :link **a:link 可以选中所有没有被访问过的超链接标签**
      - :first-child
      - :nth-child(i)
      - :lastchild
   2. 伪类选择器（元素内容）
      - ::first-line
      - ::first-letter
      - ::before
      - ::after
3. **集联使用多个选择器**
   - 空格 大于号 加号 波浪号
4. **[]属性选择器**
   - 选择具有该属性的标签
   - 扩展选择符，^指定开头，$指定结尾，\*模糊匹配

## 浏览器

1. 包含两种引擎，渲染引擎和 js 引擎
2. 流程
   http-构建 dom 树-计算 css 树-排版-渲染合成-绘制
3. v8 引擎工作流程![Alt text](images/image-2.png)
4. script 标签，比较复杂，默认会阻塞
5. dom 事件机制（事件捕获事件目标事件冒泡），js 事件机制（事件循环 micro&macro task queue）![Alt text]images/(images/image-3.png)

## xx in js【好复杂】

1. html in javascript
   1. mustache {{}}模板
   2. react 的 jsx？![react 的 jsx？](images/image-4.png)
   3. vue 的![vue 的](images/image-7.png)，lang="jade"，现在改成了 lang="pug"？使用缩进表示 html 层次结构，之后 css 也是如此
2. css in javascript
   1. inline styles 直接修改，style 属性、setAttribute 等![inline styles](images/image-5.png)
   2. react 的 jsx，这里用的是行内样式，但是可以结合 7 的![第三方库实现](images/image-6.png)
   3. vue 的![vue 的](images/image-7.png)
   4. css module![css module](images/image-8.png)
   5. jss![jss](images/image-9.png) 6.补充：CSSStyleSheet 对象 ![补充：CSSStyleSheet 对象](images/image-21.png)
   6. 补充：第三方库![补充：第三方库](images/image-22.png)

## html(原标题：你不知道的 HTML(5)，很真实，我真的不知道)

1. 基本语法![基本语法](images/image-10.png)
2. 标签分类![标签分类](images/image-11.png)
3. head 里面的标签![head 里面的标签](images/image-12.png)
4. body 里面的标签![body 里面的标签](images/image-13.png)
5. aria![aria](images/image-14.png)
6. h5![h5](images/image-15.png)
7. h5 表单增强![h5 表单增强](images/image-16.png)
8. h5 存储![h5 存储](images/image-17.png)![h5 存储](images/image-18.png)
9. h5 pwa&amp![h5 pwa&](images/image-19.png)![h5 pwa&](images/image-20.png)
   1. 用于改进网页性能和用户体验的技术
   2. PWA 更注重提供离线访问和原生应用体验，而 AMP 更注重快速加载和提供简化的页面结构
10. h5 audio![h5 audio](images/image-23.png)
11. h5 video![h5 video](image.png)
12. h5 二进制![h5 二进制](images2/image-1.png)
13. h5 API![h5 API](images2/image-2.png)
14. h5 web worker![h5 web worker](images2/image-3.png)
15. h5 web socket![h5 web socket](images2/image-4.png)
16. h5 shadow dom![h5 shadow dom](images2/image-5.png)
17. h5 web component![h5 web component](images2/image-6.png)
18. h5 svg&canvas![h5 svg&canvas](images2/image-7.png)
19. webGL&webGPU![webGL&webGPU](images2/image-8.png)![Alt text](images2/image-9.png)
20. h5 webassembly![Alt text](images2/image-10.png)

## 拓展

1. 大前端
2. MVC&MVVM&MVP![MVC&MVVM&MVP](images2/image-11.png)

## 总结

1. 总结![总结](images2/image-12.png)

# 第三节课 深入 css

1. css 优先级
   1. 特异度值 specificity![特异度值specificity](images2/image-13.png)
   2. !important>内联样式即 sytle 属性>ID 选择器>类选择器、属性选择器和伪类选择器>标签选择器、伪元素选择器>通用选择器、组合选择器、子选择器>继承的样式
   3. 什么是组合选择器![常见的组合选择器](images2/image-33.png)
   4. 伪类和伪元素![常见的伪类和伪元素](images2/image-34.png)
2. 显式继承![显式继承](images2/image-14.png)
3. 初始值![初始值](images2/image-15.png) css 中常见属性的初始值![css中常见属性的初始值](images2/image-32.png)
4. CSS 求值过程![CSS求值过程1](images2/image-16.png)![CSS求值过程2](images2/image-17.png)![CSS求值过程3](images2/image-18.png) https://assets.codepen.io/59477/value.svg
5. CSS 属性之间的限制
6. layout 布局![layout布局](images2/image-19.png)
7. 布局相关技术![布局相关技术](images2/image-21.png)
   1. ![常规流](images2/image-41.png)
   2. ![IFC及其排版规则](images2/image-42.png)
   3. ![BFC？](images2/image-43.png)![BFC排版规则](images2/image-44.png)![BFC示例](images2/image-46.png)
      1. 内联元素内部即使有块级元素，对内联元素的背景色和边框也只会包含内联元素的文本，该块级元素并不会被包裹在内
      2. 内联元素![内联元素](images2/image-47.png)
   4. flexbox？![Flex Box是什么](images2/image-45.png)
      1. flex-direction 属性![flex-direction属性](images2/image-48.png) 注意 flex-direction 改变的就是主轴和侧轴的方向！
      2. justify-content 属性来控制元素在主轴上的对齐方式 justify-content 属性![六种取值](images2/image-49.png)
      3. align-items 属性来控制元素在侧轴上的对齐方式![五种取值](images2/image-50.png)
      4. align-self 属性（针对单个元素）![align-self](images2/image-51.png)
      5. order？![order](images2/image-52.png)
      6. flexibility？![flexibility](images2/image-53.png)
      7. flex 属性![flex取值情形](images2/image-54.png)
         1. 是一个复合属性，包含了 flex-grow、flex-shrink 和 flex-basis
   5. Grid 布局![Grid布局与flex-box区别](images2/image-55.png)![display:grid](images2/image-56.png)
      1. grid line 属性
      2. grid area 属性
   6. float 浮动布局
   7. position 属性
      1. ![四种取值](images2/image-57.png)
      2. position:relative![position:relative](images2/image-58.png)
      3. position:absolute![position:absolute](images2/image-59.png)
8. 盒模型
   1. width![width](images2/image-22.png)
   2. height![height](images2/image-23.png)
   3. padding![padding](images2/image-24.png)
   4. border 样式粗细颜色![样式粗细颜色](images2/image-25.png)
      1. 三种属性四个方向（可以组合）![三种属性四个方向](images2/image-26.png)
      2. ![三角形|不同形状](images2/image-27.png) margin![margin](images2/image-28.png)
   5. margin
      1. margin:auto 水平居中（相当于同时设置 margin-left:auto;margin-right:auto;如果只设置 margin-left:auto;会紧贴右侧）![margin水平居中](images2/image-29.png)
      2. margin collapse（如果上下布局的两个元素，上面元素设置 margin-bottom，下面元素设置 margin-top，会合并 margin；水平方向同理）![margin塌陷](images2/image-35.png)
   6. box-sizing 两种方式（content-box 和 border-box-包括 border 和 padding）![box-sizing两种方式](images2/image-37.png)
   7. overflow![Alt text](images2/image-31.png)
9. 块级元素和行级元素![行级元素width和height不适用](images2/image-38.png)![有哪些块级元素&有哪些行级元素](images2/image-39.png)
10. display 属性![有哪些取值](images2/image-40.png) 注意 none 是不参与排版
11. CSS 学习建议![CSS学习建议](images2/image-60.png)

# 第四节课 JavaScript 编码原则（如何写好 JavaScript）

## JavaScript 编码原则之【各司其责】

1. 书籍推荐（很厚）：犀牛书，JavaScript 编程指南；JavaScript 高级程序设计，红宝书；JavaSCript（the good parts）语言精髓
2. 网页深浅色浏览模式切换，实现方法?优化？
   1. 按钮点击切换（文本和背景颜色）![按钮点击切换（文本和背景颜色）](image.png)
   2. 统一更改样式，通过 class name 更改，transition 动画![统一更改样式，通过 class name 更改，transition动画](image-1.png)【结构-表现-行为分离】而不是通过 js 代码行为控制 css 样式
      - 为什么这样实现了优化呢？一方面是更应该通过 css 来控制样式而不是 js 控制；另一方面是通过改变 class 或者 csstext 属性集中改变样式，提高浏览器渲染效率
      - 参考掘金文章https://juejin.cn/post/7013187112849637407 回流和重绘相关（正好看面经的时候看到了）
   3. 实际上，其实是要实现纯样式控制，所以更推荐直接用 css 实现【纯展示类交互寻求零 js 方案】。CSS 高级功能？伪类选择器？checkbox 的 checked 状态？兄弟节点选择器？label 设置属性 for，元素设置 id？
3. css 和 js 都能实现的功能，更推荐用 css 实现，为什么
   - 选择 CSS 或 JavaScript 来实现特定功能往往取决于具体的需求和上下文。然而，如果 CSS 和 JavaScript 都能实现某个功能，通常推荐使用 CSS，原因如下：
   1. **性能：** CSS 在浏览器中通常比 JavaScript 更快，因为 CSS 由浏览器的渲染引擎直接处理，而 JavaScript 则需要通过浏览器的 JavaScript 引擎解析和执行。因此，如果一个功能可以用 CSS 实现，通常会得到更快的加载和执行时间。
   2. **资源使用：** JavaScript 在运行时可能会消耗更多的计算机资源（如内存和 CPU）。如果一个网页上有大量的 JavaScript，这可能会使得网页在低端设备或者网络连接差的情况下运行缓慢。
   3. **渐进增强和优雅降级：** 使用 CSS 可以实现渐进增强（progressive enhancement）和优雅降级（graceful degradation）。这意味着网站可以在所有浏览器上运行，即使某些浏览器不支持某些 CSS 特性，网站也可以退化到一个基础的功能级别。而依赖 JavaScript 的功能可能会在禁用 JavaScript 的情况下完全无法使用。
   4. **可维护性和清晰性：** 通过使用 CSS，可以将样式和行为进行更清晰的分离，使得代码更易于维护和理解。使用 CSS 进行布局和样式定义，而将 JavaScript 留给更复杂的交互和动态内容。
   5. 尽管如此，CSS 和 JavaScript 各有优点和用途，理想情况下，它们应该一起使用，以实现最佳的用户体验和性能。例如，某些复杂的交互或动画效果可能只能通过 JavaScript 实现。

## JavaScript 编码原则之组件封装

1. 好的组件要有：封装性、正确性、扩展性和复用性
2. 原生 JS 实现电商网站轮播图？【组件化理论】
   1. html-无序列表
   2. css-绝对定位实现图片重叠，使用修饰符来进行图片切换，通过 transition 实现切换动画
   3. js-行为 API（保证原子操作，指责单一），获取当前选中元素|获取当前选中元素下标|切换到|切换到上一张|切换到下一张
   4. 自定义事件解耦，实现状态绑定
      - 毫无印象![自定义事件](image-2.png)
   5. 优化？不够灵活？扩展性不强？重构——插件化（毫无印象）
      1. 将控制元素抽取成插件
      2. 插件与组件之间通过**依赖注入**方式建立联系
      3. 降低构造函数复杂度
   6. 重构——模板化
      - render 函数渲染，数据驱动页面展示
   7. 重构——抽象化
      - 将通用的组件模型抽象出来
3. 过程抽象？
   1. 用来处理局部细节控制的一些方法
   2. 函数式编程思想的基础应用
   3. Once：为了能够让"只执行一次"的需求覆盖不同的事件处理，我们可以将这个需求剥离出来。这个过程我们称为过程抽象。
4. 构成抽象举例：操作次数限制
   1. 一些异步交互
   2. 一次性的 HTTP 请求
5. 高阶函数
   1. 以函数作为参数
   2. 以函数作为返回值
   3. 常用于作为函数装饰器
6. 常见高阶函数
   1. once
   2. throttle
   3. debounce
   4. concumer/2
   5. iterative
7. 编程范式（？
   1. 命令式
   2. 声明式
   3. 三态

## 深入浅出 TypeScript

### 为什么学 TS

1. 静态类型、面向对象
2. 强类型语言
3. 编译时发现错误
4. ts vs js![TypeScript vs JavaScript](image-3.png)
5. 推荐相关![ts相关](image-4.png)
6. 优点：类型安全|下一代 JS 特性|完善的工具链（生产力）

### TS 基础

1. 基础类型：boolean number string | enum | any unknown void | never | [] | tuple
2. 函数类型：![函数的定义](image-5.png)
3. 接口 interface （是为了定义对象类型）：![interface](image-6.png)
4. 类![类](image-7.png)

### TS 进阶

1. 高级类型
   1. 联合类型|
   2. 交叉类型&
   3. 类型断言
   4. 类型别名![类型别名](image-8.png)
2. 泛型![泛型定义](image-19.png)，泛型应用场景![泛型应用场景](image-20.png)
3.

### TS 实战

## web 标准和前端开发

### 起源、架构、变迁

1. ![初始web只包括HTML+HTTP+URL](image-9.png)
2. ![技术变迁](image-10.png)

### 前端应用的领域

1. ![领域](image-11.png)
   1. 网站-登录-不同选项-资源-状态
   2. 信息共享
   3. 开发
2. ![浏览器](image-12.png)
3. ![服务器](image-13.png)
4. ![终端和跨端](image-14.png)

### 语言、框架、工具

1. ![webAssembly](image-15.png)
2. ![框架|工具](image-16.png)
3. ![浏览器](image-17.png)
   深入理解现代浏览器：https://github.com/75team/w3c/blob/master/articles/20190603_cncuckoo_%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E7%8E%B0%E4%BB%A3%E6%B5%8F%E8%A7%88%E5%99%A8.md
4. ![网络](image-18.png)
   an overview of HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

### 前端学习路线图

1. https://roadmap.sh/frontend 前端学习路线图
