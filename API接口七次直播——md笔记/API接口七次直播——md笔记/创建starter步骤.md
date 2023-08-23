---
title: 创建 starter 步骤
categories: 
- API 开放平台
tags: 
- 星球项目
---



# 创建starter步骤

1.新建一个 spring boot 初始化项目
![image-20221123081123307](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230811084.png)

2.添加依赖，Lombok, Spring Configuration Processor

Spring Configuration Processor 的作用是自动生成代码提示![image-20221123081227014](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230812657.png)

3.修改 pom 文件的版本号，并删除 build 
![image-20221123081554107](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230816110.png)

​		![image-20221123081718280](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230817635.png)

4.删除原本自动创建的主类，新建一个类, 并添加需要用到的依赖

![image-20221123082308530](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230823121.png)

5.在 resources 目录下新建 META-INF 目录，并创建 spring.factories 文件，并指定配置类的目录

![image-20221123082817937](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230828618.png)

6.install 打包构建在本地的仓库

![image-20221123083107829](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230831488.png)

7.复制 groupId, artifactId, version,可以在其他项目中添加为依赖

![image-20221123083345988](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230833985.png)

![image-20221123083425190](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230834598.png)

8.在配置文件当中就可以引用 starter 当中设置的属性

![image-20221123083608433](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230836055.png)

刚才在 starter 配置类中定义的属性

![image-20221123083825791](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230838324.png)

可以引入 starter 当中的类或者属性

![image-20221123083950711](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202211230839280.png)