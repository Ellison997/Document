### 图片命名

图片命名建议以以下顺序命名：

**（mod_）图片功能类别（必选）+ 图片模块名称（可选） + 图片精度（可选）**

* 图片功能类别：

	- mod_：是否公共，可选
	- icon：模块类固化的图标
	- logo：LOGO类
	- spr：单页面各种元素合并集合
	- btn：按钮
	- bg：可平铺或者大背景
	- ...

	
* 图片模块名称：

	- bandlist：频段列表 
	- bandinfo：频段详情
	- userava	tar：用户头像
	- ...
	
	
* 图片精度：

	- 普清：@1x
	- Retina：@2x | @3x
	- ...

	
如下面例子：

	公共模块：
	mod_btn_bandlist@2x.png
	mod_btn_bandinfo.png
	
	非公共模块：
	btn_bandinfo@2x.png
	btn_bandinfo.png
