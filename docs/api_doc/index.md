# 获取列表

## 请求方法和地址

	GET http://[HOST]:[PORT]/api/test
	
## 请求体参数

|字段|类型|必传|默认|注释|
|:----:|:-------:|:---:|:---:|:------|
|pageNo  |string|是|	|页码|

- 备注：无

-  【请求样例】

```
{
    "pageNo": "1"
}
```

## 返回结果

|字段|类型|必传|默认|注释|
|:----:|:-------:|:---:|:---:|:------|
|status	  |int|是	|	 |200： 成功， 500 ： 错误|
|Msg	  |string|是	|	 |信息描述|
|data	  |object|是	|	 |返回数据|

data:

|字段|类型|必传|默认|注释|
|:----:|:-------:|:---:|:---:|:------|
|pageNo       |int|是	|	 |页码|
|pageSize     |int|是	|	 |每页条数|
|total        |int|是	|	 |条目总数|
|id           |int|是	|	 |文章id|
|title	  |string|是	|	 |文章标题|
|test_type	  |string|是	|	 |试卷类型|
|like_num	  |string|是	|	 |喜欢数|
|time	  |string|是	|	 |年份|
|type	  |string|是	|	 |主题|
|province	  |string|是	|	 |地区|


-  【返回样例】
```
{
    "status": 200,
    "ErrMsg": "",
    "data": {
        pageNo:1,
        pageSize:12,
        total:100,
        list:[
            {
                "id": 1,
                "title": "xxxxxx",
                "test_type": "xxxxxx",
                "like_num": "xxxxxx",
                "time": "xxxxxx",
                "type": "xxxxxx",
                "province": "xxxxxx",
            }
        ]
    }
}
```

