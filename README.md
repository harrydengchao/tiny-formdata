### Install
```javascript
npm install --save tiny-formdata
```

### Use
```javascript
import tinyFormdata from 'tiny-formdata'

// post
tinyFormdata({
  method: 'post',
  url: 'xxx',
  data: {}
})

// get
tinyFormdata({
  method: 'get',
  url: 'xxx',
  params: {}
})
```
