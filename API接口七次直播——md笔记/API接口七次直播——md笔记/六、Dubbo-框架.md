---
title: 六、Dubbo 框架
categories: 
- API 开放平台
tags: 
- 星球项目
---



# 六、Dubbo 框架

## 网关业务逻辑

问题：网关项目比较纯净，没有操作数据库的包、并且还要调用我们之前写过的代码？复制粘贴维护麻烦

解决：直接请求到其他项目的方法

### 如何调用其他项目的方法

1. 复制代码、依赖和环境
2. HTTP 请求（提供一个接口，供其他项目使用）
3. RPC
4. 把公共的代码打包 JAR 包，其他项目引用（客户端 SDK）

### HTTP 请求如何调用？

1. 提供开发一个接口（地址、请求方法、参数、返回值）
2. 调用方使用 HTTP Client 之类的代码包去发送 HTTP 请求

### RPC

**作用：像本地方法一样调用远程方法**

1. 对开发者更透明，减少了很多的沟通 成本
2. RPC 想远程服务器发送请求时，未必要使用 HTTP 请求，比如还可以用 TCP/IP，性能更高（内部服务更适用）

![image-20221227202039865](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com//9963/202212272020718.png)

### Dubbo 框架（RPC 实现）

GRPC、TRPC

阅读官方文档：https://cn.dubbo.apache.org/zh/docs3-v2/java-sdk/quick-start/spring-boot/

两种使用方式：

1. Spring Boot 代码（注解 + 编程式）：写 Java 接口，服务提供者和消费者都去引用这个接口
2. IDL（接口调用语言）：创建一个公共的接口定义文件，服务提供者和消费者都去读取这个文件。优点是跨语言，所有的框架都熟悉。

底层是 Triple 协议：https://cn.dubbo.apache.org/zh/docs3-v2/java-sdk/concepts-and-architecture/triple/

#### 示例学习

zookeeper 注册中心：通过内嵌的方式运行，更方便

最先启动注册中心，先启动服务提供者，在启动服务消费者

### 整合运用

1. backend 项目作为服务提供者，提供 3 个方法：
   1. 实际情况应该是去数据库中查是否已分配给用户
   2. 从数据库中查询模拟接口是否存在，以及请求方法是否匹配（还可以校验请求参数）
   3. 调用成功，接口调用次数 + 1 invokeCount
2. gateway 项目作为服务调用者，调用这 3 个方法

整合 Nacos 注册中心：https://cn.dubbo.apache.org/zh/docs3-v2/java-sdk/reference-manual/registry/nacos/

注意：

1. 服务调用类必须在同一包下，建议是抽象出一个公共项目（放接口、实体类等）
2. 设置注解（比如启动类的 EnableDubbo、接口实现类和 Bean 引用的注解）
3. 添加配置
4. 服务调用项目和提供者项目尽量引入相同的依赖和配置

```java
       <!-- https://mvnrepository.com/artifact/org.apache.dubbo/dubbo -->
        <dependency>
            <groupId>org.apache.dubbo</groupId>
            <artifactId>dubbo</artifactId>
            <version>3.1.3</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba.nacos</groupId>
            <artifactId>nacos-client</artifactId>
            <version>2.1.0</version>
        </dependency>
```

