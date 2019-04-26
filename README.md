# 说明

工程原意图是建立一个学习typescript的工程，可是在看的了typescript之后，又觉的没什么必要。似乎还是要实战才比较合适。

在看完以后，发现作者推荐ESLint，TSLint做代码语法，规范校验。自己突然想起，似乎vscode本身就可以支持这些。

一直以来对ESLint的使用一直都有抵触情绪，觉的写代码不能随心所欲，被限制的太死，but 经过这段时间的了解，规规矩矩的写代码，老老实实的做规范，还是能避免很多问题的。

因此，就用这个工程将eslint引入进来了。既然要用，那么肯定要最优用。那么决定将代码走查尽量靠前，所以就直接放在编写阶段，也就是利用编辑器插件来实现代码走查和规范管理。

搭建步骤：

- 1.vscode安装eslint插件

- 2.在setting中更改相关配置

```javaScript

"eslint.autoFixOnSave": true,
    "eslint.validate":[
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
"eslint.alwaysShowStatus": true,
"eslint.packageManager": "npm",

```

注意eslint.validate数组里面的元素。

- 3. 安装eslint

    npm install eslint --save-dev

- 4. 生成eslint配置文件

    eslint --init

- 5. 使用包管理工具，添加eslint对typescript支持的插件

    npm install --save-dev @typescript-eslint/eslint-plugin babel-eslint eslint-config-alloy eslint-plugin-typescrip typescript-eslint-parser

- 6. 打开刚生成的eslint配置文件（我生成的是.eslintrc.js） 进行相应调整

```
module.exports = {
    "parser":'typescript-eslint-parser', //更改eslint使用的默认解析引擎
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: [
        'eslint-config-alloy/typescript', //添加使用的插件
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018, //解析标准按照ES2018
    },
    "rules": {
        
    },
};

```

