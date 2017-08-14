.Net数据库迁移命令：
<br>
Add-Migration Rating
Update-Database
<br>
命令行界面（CLI）,从控制台运行
<br/>
dotnet ef migrations add InitialCreate
dotnet ef database update


<h2>Git学习</h2>
<h4>创建版本库</h4>
初始化一个仓库： git init<br>

添加文件到Git 仓库： git add fileName 可以多次使用，添加多个文件
<br>
使用git commit命令提交到git:  git commit
<br>
查看工作区的状态: git status
<br>
如果状态说文件被修改过：  使用 git diff  查看被修改的内容
<br>
<h4>版本回退</h4>
HEAD 指向的版本是当前版本， Git 允许我们在历史版本中穿梭
<br>
查看提交历史：  git log  确定要回退到哪个版本
<br>
查看历史命令：  git reflog  
<br>
跳转版本 :git reset --hard commit_id(提交的id)或者HEAD^(上一个版本
<br>
<h4>工作区和暂存区</h4>
工作区：就是你项目的文件夹
<br>
版本库（Repository)： 工作区中的一个隐藏的文件夹.git 是git的版本库
<br>
暂存区： Git版本库中有很多东西，最重要的就是stage暂存区（或者叫index)的暂存区，还有Git为我们自动创建的第一个分支master,以及指向master的一个指针叫HEAD
<br>
git add 命令实际上是要把提交的所有更改放到了暂存区（Stage)，然后，执行 git commit 就可以一次性的把暂存区的所有修改提交到分支

<h4>管理修改</h4>
每次修改，如果不add到暂存区，那就不会加入到commit中

<h4> 撤销修改</h4>
在还没add到暂存区之前
使用 git checkout --file 可以让这个文件回到最近一次 git commit 或者 git add时的状态
<br>
乱改了工作区的某个文件内容，又添加到了暂存区，想要丢弃更改。要分两部
<br>
第一个命令：git reset HEAD file(文件名)，就把文件从暂存区清除了
<br>  
然后再执行  git checkout -- file 回到。。。。。状态

<h4>删除文件</h4>
在工作区中删除了文件、但是你之前已经提交过文件
<br>
使用 git status命令去查看git的状态，它会告诉你那些文件被删除了
<br>
想要恢复删除的文件?  使用 git checkout -- file 命令，使用版本库的版本替换工作区的版本，无论是删除还是修改，都可以一键还原，，，，（只能恢复到版本库中的最新版本，会丢失最近一次提交后你修改的内容）
<br>
想要彻底删除这个文件？   使用 git rm file(文件名) 再git commit 提交

<h4>远程仓库</h4>
可以使用gitHub ，也可以自己搭建git服务器
<br>
使用githun：创建SSH Key 创建了之后再“用户”主目录下会有一个.ssh的文件夹
<br>
如果没有，使用 Git Bash 创建SSH Key：
<br> ssh-keygen -t rsa -C "chuntain997@gmail.com"  一路回车就行，没啥重要的无需设置密码
<br>
完成之后，在用户主目录中会有有一个 .ssh的文件夹，里面有id_rsa和id_rsa.pub两个文件，id_rsa是私钥，不能泄露 ，id_rsa是共钥，可以谁便说 反正没私钥也没啥用
<br>然后就在gitHub 中添加这个公钥吧。GitHub只有知道了你的工钥才能知道这个文件是你自己推送的

<h4>添加远程仓库</h4>
要关联一个远程库，使用命令：git remote add origin(注释) git@server-name:path/repo-name.git
<br> 
origin:远程库的名字就是origin，这是Git默认的叫法，也可以改成别的
<br>关联远程库之后使用，命令：git push -u origin master  第一次推送master的所有的内容；   -u参数，不但会推送，还会关联master分支
<br>
以后，每次提交后，只要有需要，就可以使用命令：git push origin master 推送最新修改

<h4>从远程库克隆</h4>
1、获得远程库的地址 2、使用git clone 克隆一个本地库
<br>
命令:git clone   git clone git@github.com:Mandy997/Mandy997.github.io.git
<br>  Git不但支持ssh协议,还支持https等其他协议，默认使用git://使用ssh
<br> 使用http不但速度慢 而且每次推送都必须输入口令

<h4>创建与合并分支</h4>
每次提交，Git都把他们串成一条线，这条时间线就是一个分支，一开始有一个指针，就是主分支master,然后你想增加一个分支dev,在这条时间线上就增加了一个指针dev,它指向与master相同的提交，再把HEAD指向dev，就表示当前分支在dev上了
<br>如果在dev的工作完成了，就可以把dev合并到master上，git就会把master指向dev当前的提交，就完成了合并
<br> 创建dev分支命令:git branch dev
<br> 切换分支： git checkout dev
<br> 创建+切换分支命令： git checkout -b dev(分支名字)
<br> 合并某分支到当前分支：git merge <name>
<br> 删除分支: git branch -d <name>
<br> 查看分支：git branch

<h4>解决分支</h4>
你的笑，好不好看呢