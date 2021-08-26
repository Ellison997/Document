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
<br> 合并某分支到当前分支：git merge name
<br> 删除分支: git branch -d name
<br> 查看分支：git branch

<h4>解决冲突</h4>
当master和另一个分支dev都有新的提交的时候。git无法执行“快速合并”,只能试着把各自的修改合并起来，但这种合并就可能有冲突。
<br>使用命令：git merge name（分支名） 进行合并分支
<br>有时候会出现这两句
<br>CONFLICT (content): Merge conflict in readme.txt
<br>Automatic merge failed; fix conflicts and then commit the result.
<br>就说明合并到分支冲突了，必须手动解决冲突后再提交.
<br>这时候我们就可以直接在ide中查看到冲突的内容
<br> 使用 git status 命令也可以告诉我们冲突的文件
<br>Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容
<br>修改之后，再次提交
<br>使用带参数的git log 也可以看到分支合并的情况。。。
<br>git log --graph --pretty=oneline --abbrev-commit 

<h4>分支管理策略</h4>
一般情况下，合并分支的时候，Git会用 Fast forward 模式，但在这种模式下，删除分支后，会丢掉分支信息
<br>
如果要强制禁用 Fast forwart 模式。Git 就会在 merge 时生成一个新的commit，这样，从分支历史上就可以看出分支信息了
<br>
准备合并分支的时候，注意使用 --no-ff参数，表示禁用 Fast forward，本次合并要创建一个新的commit，所以加上-m 参数，把commit的描述写进去
<br> 命令如下：git merge --no-ff -m "merge with no-ff" dev
<h6>分支策略</h6>
在实际开发中，我们应该按照几个基本原则进行分支管理：
<br>
首先，master分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；
<br>
那在哪干活呢？干活都在dev分支上，也就是说，dev分支是不稳定的，到某个时候，比如1.0版本发布时，再把dev分支合并到master上，在master分支发布1.0版本；
<br>
你和你的小伙伴们每个人都在dev分支上干活，每个人都有自己的分支，时不时地往dev分支上合并就可以了。

<h4>Bug分支</h4>
当出现Bug的时候，你要尽快去修复Bug .但是你手头上的工作只进行了一半还没有提交
<br> 这时候就可以用到Git提供的一个'stash'功能，可以把当前的工作现场“储藏”起来，等以后恢复现场继续工作
<br>  储存工作现场命令： git stash
<br> 储藏完工作区 再用 git status 查看工作区，就是干净的。。这时候就可以放心的去创建分支修复bug
<br>首先要确定在哪个分支修复bug,如果在master分支上修复，那就从master创建临时分支
<br>修复完bug之后，继续切换到dev分支上干活，这时候使用 git status查看工作区状态还是干净的
<br>使用命令：git stash list 查看刚才的工作现场
<br>Git 把 stash 内容存放在了某个地方，但是要恢复一下，有两个办法：
<br>使用命令：git stash apply 恢复，但是在恢复后，stash内容并不会删除，需要使用'git stash drop 删除'；另一种方法就是用 git stash pop ,恢复的同时也可以把stash内容也删了
<br>你也可以多次stash ， 恢复的时候，先用 git stash list查看，然后恢复到指定的stash,用命令：git stash apply stash@{0}

<h4>feature分支</h4>
软件开发中，总是有不断地新功能要添加进来，添加一个新功能时，不会希望把主分支搞乱的
<br>所以每添加一个新功能，最好新建一个 'Feature分支' 在这个分支上开发，完成之后再合并，最后删除

<h5>多人协作</h5>
查看远程库的信息： git remote
<br>详细信息： git remote -v
<br>向远程库推送：
<br>
master分支是主分支，因此要时刻与远程同步；
<br>
dev分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
<br>
bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；
<br>
feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。