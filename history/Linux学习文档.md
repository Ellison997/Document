<h2>Linux是啥</h2>
Linux内核最初只是由芬兰人李纳斯·托瓦兹（Linus Torvalds）在赫尔辛基大学上学时出于个人爱好而编写的。<br>
Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。<br>
Linux能运行主要的UNIX工具软件、应用程序和网络协议。它支持32位和64位硬件。
<br>
Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统

<h3>Linux系统的启动过程</h3>
Linux系统的启动过程可以分为五个阶段
<ul>
<li>内核的引导</li>
<li>运行init</li>
<li>系统初始化</li>
<li>建立终端</li>
<li>用户登录系统</li>
</ul>
init程序的类型
<br>Upstart:int,ContOS 6 ，配置文件：/ect/inittab,/ect/init/*.conf
<br>Systemd:syatemd,CentOS 7,配置文件:/usr/lib/systemd/system 、/ect/systemd/system

<h3>内核引导</h3>
当计算机打开电源在之后，首先是BIOS自检，按照BIOS中的设置的启动设备（通常是硬盘）来启动。操作系统接管硬件以后，首先读入/boot 目录下的内核文件

<h3>运行init</h3>
init进程是系统所有进程的起点，你可以把它比拟成系统所有进程的老祖宗，没有这个进程，系统中的 任何进程都不会启动。<br>
init程序首先是需要读取配置文件/ect/inittab

<h3>运行级别</h3>
许多程序需要开机启动。他们在windows中叫做服务（service)，在Linux就叫做"守护进程"(daemon).
<br>
init进程的一大任务，就是去运行这些开机启动的程序。
<br>但是，不同的场合需要启动不同的程序，比如用作服务器时，需要启动Apache，用做桌面就不需要
<br>Linux允许为不同的场合，分配不同的开机启动程序，这就叫做“运行级别”（runlevel)。也就是说，启动时根据"运行级别”,确定要运行、哪些程序
<br>
<bean>操作系统=>/boot=>init进程=>运行级别</bean>
<br>
Linux系统有7个运行级别（runlevel)

<h3>系统初始化</h3>
在init的配置文件中有一行： si::sysinit:/ect/rc.d/rc.sysinit,而rc.sysinit是一个bash shell的脚本，它主要是完成一些系统初始化的工作，rc.sysinit是每一个运行级别都要首先运行的重要脚本。<br>
它主要完成的工作有:激活交换分区，检查磁盘，加载硬件模块-以及其他一些需要优先执行的任务
<br>
<bean>操作系统=>/boot=>init进程=>运行级别=>/ect/init.d<bean>

<h3>建立终端</h3>
rc执行完毕后，返回init.这时候基本环境已经设置好了，各种守护经常也已经启动。
<br>init接下来=会打开六个终端，以便用户登陆系统。在inittab中的以下六行就是定义了6个终端：
<ol>
<li>2345:respawn:/sbin/mingetty tty1</li>
<li>2345:respawn:/sbin/mingetty tty2</li>
<li>2345:respawn:/sbin/mingetty tty3</li>
<li>2345:respawn:/sbin/mingetty tty4</li>
<li>2345:respawn:/sbin/mingetty tty5</li>
<li>2345:respawn:/sbin/mingetty tty6</li>
</ol>
从上面可以看出2，3，4，5的运行级别中都将以respwn方式运行mingetty程序，mingetty程序能打开终端、设置模式。
<br>
同时它会显示一个文本登陆界面，这个界面就是我们经常看到的登陆界面，在这个界面中会提示输入用户名，而用户输入的用户将作为参数传给login程序来验证用户的身份

<h3>用户登陆系统</h3>
一般来说，用户的登陆方式有三种：
<ul>
<li>命令行登陆</li>
<li>ssh登陆</li>
<li>图形界面登陆</li>
</ul>
Linux的账号验证程序是login，login会接收mingetty传来的用户名作为用户名参数。
<br>
然后login会对用户名进行分析：如果用户名不是root,且存在/ect/nologin文件，login将输出nologin文件中的内容，然后退出
<br>
<bean>操作系统=>/boot=>init进程=>运行级别=>/ect/init.d=>用户登陆<bean>

<h3>图形模式与文字模式的切换方式</h3>
Linux预设提供了六个命令窗口终端机让我们来登录。<br>
默认我们登录的就是第一个窗口，也就是tty1，这个六个窗口分别为tty1,tty2 … tty6，你可以按下Ctrl + Alt + F1 ~ F6 来切换它们。
<br>
如果你安装了图形界面，默认情况下是进入图形界面的，此时你就可以按Ctrl + Alt + F1 ~ F6来进入其中一个命令窗口界面。
<br>
当你进入命令窗口界面后再返回图形界面只要按下Ctrl + Alt + F7 就回来了。
<br>
如果你用的vmware 虚拟机，命令窗口切换的快捷键为 Alt + Space + F1~F6. 如果你在图形界面下请按Alt + Shift + Ctrl + F1~F6 切换至命令窗口。

<h3>Linux关机</h3>
在linux领域内大多数服务器上，很少遇到关机的操作。
<br>正确的 关机流程为：sync>shutdown>reboot>halt
<br>关机的指令为：shutdown，你可以man shuydown来看一下帮助文档
<ul>
<li>syac 将数据由内存同步到硬盘中。</li>
<li>shutdown 关机指令</li>
<li>shutdown -h 10</li>
<li>shutdown -r now 系统立马重启</li>
<li>shutdown -h 20:25 系统会在几天20：25关机</li>
<li>reboot 就是重启，等同于 shutdown -r now</li>
<li>halt 关闭系统，等同于shutdown -h now 和 poweroff</li>
</ul>
<br>
不管是重启系统还是关闭系统，首先要运行 sync 命令，把内存中的数据写到磁盘中。
关机的命令有 shutdown –h now halt poweroff 和 init 0 , 重启系统的命令有 shutdown –r now reboot init 6。

<h3>Linux文件基本属性</h3>
Linux系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限。为了保护系统的安全性，Linux系统对不同的用户访问同一文件（包括目录文件）的权限做了不同的规定
<br>
可以使用ll或者ls -l命令来显示一个文件的属性以及文件所属的组和用户
<br>
在Linux中第一个字符代表这个文件是目录、文件或链接文件等等
<ul>
<li>d 为目录</li>
<li>- 是文件</li>
<li>l 则表示为链接文档（link file)</li>
<li>b 表示为装置文件里面的可供储存的接口设备(可随机存取装置)；</li>
<li>c 表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。</li>
</ul>
接下来的字符中，以三个为一组，且=均为‘rwx'的三个参数的组合。其中，r代表可读（read)、w 可写（write)、x 可执行（execute).
<br>要注意的是，这三个权限的位置不会改变，如果没有权限，就会出现 - 而已
<br> drwxr-wr-w
<br>第0位确定文件类型，第1-3位确定属主（该文件的所有者）拥有该文件的权限。
<br>
第4-6位确定属组（所有者的同组用户）拥有该文件的权限，第7-9位确定其他用户拥有该文件的权限。

<h4>更改文件属性</h4>
chgrp [-r] 属组名文件名
<br>参数选项： -R:递归更改文件属组，就是在更改某个目录的属组时，如果加上-R的参数，那么该文件夹下的所有文件的属组都会更改
<br>
chown:更改文件属主，也可以同时更改文件属组
<br>语法： chown [-R] 属主名 文件名
<br>chown [-R] 属主名：属组名 文件名

<br>
使用数字来代表各个权限，各权限的分数对照表如下：
<ul>
<li>r:4</li>
<li>w:2</li>
<li>x:1</li>
</ul>
chmod：更改文件9个属性
<br>Linux文件属性有两种设置方法，一种是数字，一种是符号。
<br>Linux文件的基本权限就有九个，分别是owner/group/others三种身份各有自己的read/write/execute权限。
<br> 语法 chmod [-R] xyz(分数累加的结果) 文件或目录名