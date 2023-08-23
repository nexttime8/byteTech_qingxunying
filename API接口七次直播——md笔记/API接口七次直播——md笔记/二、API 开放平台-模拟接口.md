---
title: 二、API 开放平台-模拟接口
categories: 
- API 开放平台
tags: 
- 星球项目

---

# 二、API 开放平台-模拟接口

## 模拟接口项目 mofeng-interface

提供三个模拟接口

1. GET 接口
2. POST 接口（URL 传参）
3. POST 接口 （Restful)

### 调用接口

几种 HTTP 调用方式：

1. HttpClient
2. RestTemplate
3. 第三方库（OKHTTP、Hutool)

Hutool:https://hutool.cn/docs/#/

Http 工具类：https://hutool.cn/docs/#/http/Http%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%B7%A5%E5%85%B7%E7%B1%BB-HttpUtil

### API 签名认证

本质：

1. 签名签发
2. 使用签名（校验签名）

为什么需要签名认证？

1. 保证安全性，不能随便一个人调用
2. 适用于无需保存登录态的场景。只认签名，不关注用户登录态。

### 如何实现 API 签名认证呢？

通过 http request header 头传递参数

- 参数1： accessKey 调用的标识 userA, userB (复杂、无序、无规律)

- 参数2： secretKey 密钥 （复杂、无序、无规律），**该参数不能放在请求头中**

  类似于用户名和密码，区别：accessKey、 secretKey 是无状态的

  密钥一般不用在服务器之间的传递，因为在传递过程中可能被拦截

- 参数3： 用户请求参数

- 参数4： sign

- 参数5：加 none 随机数， 只能用一次（服务端要保存用过的随机数）

- 参数6： 加 timestamp 时间戳， 校验时间戳是否过期

加密方式：对称加密、非对称加密、md5 签名（不可解密）

用户参数 + 密钥 => **签名生成算法(MD5、Hmac、Sha1)** => 不可解密的值

如：abc + abcdefgh => sfasfafffsfsa



如何验证签名？

**服务端用一模一样的参数和算法去生成签名，只要和用户传的一致，就表示一致。**



如果防止重放？

**服务端要保存用过的随机数**



**API 签名认证是一个很灵活的设计，具体要有哪个参数、参数名如何需要根据场景来设计。比如： userId、 appId、version、固定值等**

## 开发一个简单易用的 SDK 

理想状态下：开发者只需要关心调用哪些接口、传递哪些参数、就跟调用自己写的代码一样。

开发 starter 的好处：开发者引入后，可以直接在 application.yml 中写配置，自动创建客户端

**spring-boot-configuration-processor 的作用是自动生成配置的代码提示**

### starter 的开发流程

初始化，环境依赖（一定要移除 build）

```java
	<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-autoconfigure</artifactId>
    </dependency>

    <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
    </dependency>

    <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
	</dependency>
```

编写配置类（启动类）

```java
@Configuration
// 能读取 application 中的配置属性
@ConfigurationProperties("mofeng.client")
@Data
@ComponentScan
public class MofengClientConfig {

    private String accessKey;
    private String secretKey;

    @Bean
    public MofengApiClient mofengApiClient(){
        return new MofengApiClient(accessKey, secretKey);
    }
}
```

注册配置类

resources/META_INF/spring.factories

```java
# starter
org.springframework.boot.autoconfigure.EnableAutoConfiguration=com.mofeng.mofengclientsdk.MofengClientConfig
```

mvn install 打包为本地项目

创建新项目（复用 server 项目）、测试

