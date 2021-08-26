##CSS预处理器
css预处理器定义了一种新的语言，其基本思想就是，用一种专门的编程语言，为css增加一些编程的特性，将css作为目标生成文件，然后开发者只要使用这种语言进行编码工作。
##Sass是啥
Sass是最早的CSS预处理语言，有比LESS更为强大的功能，不过其一开始的缩进式语法并不能被大众接受，不过由于其强大的功能和Ruby on Rails的大力推动，还是有很多开发者选择了Sass.   
Sass是采用Ruby语言编写的一款CSS预处理器，他诞生于2007年，是最大的成熟的CSS预处理语言。最初它是为了配合HAML(一种缩进式HTNL预编辑器）而设计的，因此有着和HTML一样的缩进式风格。
##Sass安装（windows）
因为使用Ruby语言编写，说以要想使用Sass就要先安装Ruby语言环境  
到 Ruby 的官网（http://rubyinstaller.org/downloads）下载对应需要的 Ruby 版本.  
安装Sass有很多种方法，我现在使用命令安装Sass
<br>
打开cmd， 输入命令：gem install sass
<br>
检测Sass版本，查看是否安装成功： sass -v
<br> 更新Sass:gem update sass
<br>卸载sass:gem uninstall sass
###SCSS的语法格式
SCSS是Sass的新语法格式，从外形上来判断他和CSS长的几乎一摸一样，代码都包裹在一个大括号里，并且末尾结束处都有一个分号。其文件格式常常以“.scss”结尾
###Sass编译
+ 命令编译
+ GUI工具编译
+ 自动化编译
 
####命令编译
单文件编译：   
sass <要编译Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
<br>
这是对一个单文件进行编译，如果想对整个项目的所有Sass文件编译成CSS文件，可以这样操作：
<br>
sass sass/:css/   
上面的命令表示将项目中“sass”文件夹中所有“.scss”(“.sass”)文件编译成“.css”文件，并且将这些 CSS 文件都放在项目中“css”文件夹中。   
开启"watch"功能，这样只要你的代码进行保存修改，都能自动检测到代码的变化，并且直接编译出来：
  
		sass --watch <要编译的Sass文件路径>/style.css:<要输出CSS文件路径>/style.css		
###不同样式的输出风格
1. 嵌套输出方式 nested 
2. 展开输出方式 expand
3. 紧凑输出方式 compact
4. 压缩输出方式 compressed

