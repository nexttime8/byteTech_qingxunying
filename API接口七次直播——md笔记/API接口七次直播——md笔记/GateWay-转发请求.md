---
title: GateWay 转发请求
categories: 
- API 开放平台
tags: 
- 星球项目
---

# 五、Gateway 转发请求

## 使用到的特性

1. 路由
2. ~~负载均衡（需要用到注册中心）~~
3. 统一鉴权
4. ~~跨域~~
5. 统一业务处理（缓存）
6. 访问控制
7. ~~发布控制~~
8. 流量染色
9. ~~接口保护~~
   1. 限制请求
   2. 信息脱敏
   3. 降级（熔断）
   4. 限流：学习令牌桶算法、学习漏桶算法，学习一下 RedisLimitHandler
   5. 超时时间
10. 统一日志
11. ~~统一文档~~

## 业务逻辑

1. 用户发送请求到 API 网关
2. 请求日志
3. （黑白名单）
4. 用户鉴权（判断 accessKey, secretKey 是否合法）
5. 请求的模拟接口是否存在
6. **请求转发，调用模拟接口**
7. 响应日志
8. 调用成功，次数 + 1
9. 调用失败，返回一个规范的错误码

## 具体实现

### 1.请求转发

使用前缀匹配断言：https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#the-path-route-predicate-factory

所有路径为： /api/** 的请求进行转发，转发到 http://localhost:8123/api/**

比如请求网关： http://localhost:8090/api/name/get/?name=mofeng

转发到：http://localhost:8123/api/name/get/?name=mofeng

配置文件添加内容， application.yml

```yml
spring:
  cloud:
    gateway:
      routes:
        - id: api_route
          uri: http://localhost:8123
          predicates:
            - Path=/api/**
```

### 2.编写业务逻辑

使用了 GlobalFilter （编程式），全局请求拦截处理（类似 AOP）

因为网关项目没引入 MyBatis 等操作数据库的类库，如果该操作较为复杂，可以有 backend 增删改查项目提供接口，直接调用，不需要重复写逻辑。

- HTTP 请求（HTTPClient、 用 RestTemplate、 Feign）
- RPC（Dubbo)

### 存在的问题

预期等模拟接口调用完成，才记录响应日志、统计调用次数

但现实是 chain.filter 方法立即返回了，知道 filter 过滤器 return 后才调用模拟接口

原因是：chain.filter 是一个异步操作，理解为前端的 promise



解决方案：利用 response 装饰者，增强原有 response 的处理能力

参考博客：https://blog.csdn.net/qq_19636353/article/details/126759522

其他参考：

https://blog.csdn.net/zx156955/article/details/121670681

https://blog.csdn.net/weixin_43933728/article/details/121359727?spm=1001.2014.3001.5501

https://blog.csdn.net/qq_39529562/article/details/108911983

