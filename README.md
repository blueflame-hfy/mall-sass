# 介绍

  * 建议用yarn进行依赖安装
    yarn install

  * react组件库, 配置有 css module, scss样式不相互干扰
  * npm run build 用于编译 src/lib/index.js 用于编译组件库
  * npm run start 用于抛弃本地应用, 可通过引入新编辑组件进行调试
  * npm run publish 用于npm 发布 (npm login 先)

# 环境

  * node v8.15.0
  * npm  v6.4.1
  * yarn v1.19.2


# 版本说明

  * v0.1.0
    1. 完成组件库搭建, 支持css module
  * v0.1.1
    2. 增加docz, 支持文档书写功能，本地运行查看文档  npm run docz:dev #yarn
       访问localhost:3000 进行文档查看