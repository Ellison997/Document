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





