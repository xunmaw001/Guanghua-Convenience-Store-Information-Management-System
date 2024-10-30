








const menu = {
    list() {
        return [
    {
        "backMenu":[
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"供应商类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGongyingshang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"所在地区类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGongyingshangSuozaidiqu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"供应商信用等级类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGongyingshangXinyongdengji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGoods"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"供应商信息管理",
                        "menuJump":"列表",
                        "tableName":"gongyingshang"
                    }
                ],
                "menu":"供应商信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品管理",
                        "menuJump":"列表",
                        "tableName":"goods"
                    }
                ],
                "menu":"商品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"采购管理",
                        "menuJump":"列表",
                        "tableName":"goodsChuruInout"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"采购列表管理",
                        "menuJump":"列表",
                        "tableName":"goodsChuruInoutList"
                    }
                ],
                "menu":"采购管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "报表",
                            "新增",
                            "删除"
                        ],
                        "menu":"收银管理",
                        "menuJump":"列表",
                        "tableName":"goodsShouyin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"收银列表管理",
                        "menuJump":"列表",
                        "tableName":"goodsShouyinList"
                    }
                ],
                "menu":"收银管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"供应商信息管理",
                        "menuJump":"列表",
                        "tableName":"gongyingshang"
                    }
                ],
                "menu":"供应商信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"商品管理",
                        "menuJump":"列表",
                        "tableName":"goods"
                    }
                ],
                "menu":"商品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"收银管理",
                        "menuJump":"列表",
                        "tableName":"goodsShouyin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"收银列表管理",
                        "menuJump":"列表",
                        "tableName":"goodsShouyinList"
                    }
                ],
                "menu":"收银管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"员工",
        "tableName":"yuangong"
    }
]
    }
}
export default menu;