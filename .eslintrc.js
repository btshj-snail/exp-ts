module.exports = {
    "parser":'typescript-eslint-parser',
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: [
        'eslint-config-alloy/typescript',
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
    },
    "rules": {
        
    },
};