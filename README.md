# Node.js: @edwardxyt/gws-components
用于nodejs 常用工具类。
## Installation

```
npm install @edwardxyt/gws-components
```
## Usage

```
const gwsUtils = require('@edwardxyt/gws-components');
```
## Methods

#### 创建临时DOM节点
 
`createTemporaryDOMNode`

```javascript

    import { createTemporaryDOMNode } from '@edwardxyt/gws-components'

    let id = '_this_is_a_global_element',
        node = createTemporaryDOMNode(id);

```

#### 警告弹出框

`showAlert`

```javascript

    import { showAlert } from '@edwardxyt/gws-components'

    showAlert('Test').then(()=> {
        // until user click confirm button, go next step
    })
```

![showAlert](https://raw.githubusercontent.com/edwardxyt/gws-components/master/media/QQ20180111-103139.png)

#### 展示一个警告框
  
* showLoading

* hideLoading
  
* showToast

#### 弹出提示框(2s后自动隐藏)

`showToast`

```javascript

    import { showToast } from '@edwardxyt/gws-components'

    showToast('Test').then(()=> {
        // until toast disappeared go next step
    })
   
```

![showToast](https://raw.githubusercontent.com/edwardxyt/gws-components/master/media/QQ20180111-103056.png)

#### 滑动组图

`BannerGroup`

```javascript

    import { BannerGroup } from '@edwardxyt/gws-components'

    // jsx
    <BannerGroup images={[img1, img2, img3]}/>
   
```

![BannerGroup](https://raw.githubusercontent.com/edwardxyt/gws-components/master/media/QQ20180110-175832.png)

#### 选择省市县

`showAreaSelector`

```javascript

    import { showAreaSelector } from '@edwardxyt/gws-components/assets/area-selector'

    showAreaSelector(['北京', '北京市', '朝阳区'], false)
        .then(data => {
            console.log(...data) // => 辽宁省, 沈阳市, 皇姑区
        })
   
```

showAreaSelector(selected, autoComplete)

* selected : 已选择地区
* autoComplete : 是否在选择完最后一个地区后, 自动完成当前交互并返回结果

![showAreaSelector](https://raw.githubusercontent.com/edwardxyt/gws-components/master/media/QQ20180111-103201.png)

#### 过滤器
  
```javascript

    import { Filter } from '@edwardxyt/gws-components'
    
    // 筛选提交
    handleSearch = form => e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            console.log("Received values of form: ", values);
        });
    };
    
    const filterDate = [
        {
            type: "text",
            label: "姓名",
            name: "name",
            placeholder: "请输入",
            initialValue: "123",
            rules: [
                {
                    required: true,
                    message: "Input something!"
                }
            ]
        },
        // 。。。。更多不在此展示。
    ];

    <Filter data={filterDate} cb={this.handleSearch} />
   
```

![showAreaSelector](https://raw.githubusercontent.com/edwardxyt/gws-components/master/media/WX20190425-181507.png)

#### 按需加载react router4 & 错误页面

`asyncComponent, Error`

```javascript

    import { asyncComponent, Error } from '@edwardxyt/gws-components'
    
    const userRouter = asyncComponent(() =>
    	import("./user/index");
    	.then(module => module.default)
    	.catch(err => {
    		window.console.log(err);
    		return 101;
    	});
    );

    <Switch>
        <Route exact path="/user" component={userRouter} />
        <Route component={Error} />
    </Switch>

```