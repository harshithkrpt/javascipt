# D3

## Selections

```js
d3.selectAll("[selector]");
const selector = d3.select('[selector]);

// style
d3.style(key,value)
// dynamic styling
d3.style(key,()=>{ /* CallBack Manipulate the Value */})
// args in callback
d3.style(key,(data,zeroIndex)=>{ return d * i + 'px'})
```
