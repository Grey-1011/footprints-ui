# 开始使用

请先<a href="#/doc/install">安装</a>本组件库。

然后添加如下代码：
```
import { Button, Tabs, Switch, Dialog } from "Footprints-ui"
```
就可以使用该组件了。

## Vue 单文件组件 

代码示例：
```
<template> 
    <Button>按钮</Button> 
</template> 
        
<script> 
    import {Button, Tabs, Switch, Dialog} from "Footprints-ui" 
    export default { 
        components: {Button} 
    } 
</script> 
``` 