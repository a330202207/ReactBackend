import ajax from "./ajax";
import jsonp from "jsonp";
import {message} from "antd";

// const BASE = 'http://localhost:9003';
const BASE = '';

//登陆
export const login = (username, password) => ajax(BASE + '/login', {username, password}, 'POST');

//添加用户
export const addUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST');

//获取天气

//获取分类列表
export const getCategoryList = (parent_id, page, page_size) => ajax(BASE + '/admin/category/list', {
    parent_id,
    page,
    page_size
});

//添加分类
export const addCategory = ({name, parent_id, order_by}) => ajax(BASE + '/admin/category/add', {
    name,
    parent_id,
    order_by,
}, 'POST');

//删除分类
export const delCategory = (id) => ajax(BASE + '/admin/category/del', {id}, 'POST');

//更新分类
export const updateCategory = ({id, name, parent_id, order_by}) => ajax(BASE + '/admin/category/save', {
    id,
    name,
    parent_id,
    order_by
}, 'POST');

//获取商品列表
export const getProductList = (page, page_size, name, status, startTime, endTime) => ajax(BASE + '/admin/product/list', {
    page,
    page_size,
    name,
    status,
    startTime,
    endTime
});

//添加商品
export const addProduct = ({name, parent_id, order_by}) => ajax(BASE + '/admin/category/add', {
    name,
    parent_id,
    order_by,
}, 'POST');

//删除商品
export const delProduct = (id) => ajax(BASE + '/admin/category/del', {id}, 'POST');

//修改商品
export const updateProduct = ({id, name, parent_id, order_by}) => ajax(BASE + '/admin/category/save', {
    id,
    name,
    parent_id,
    order_by
}, 'POST');

/*
json 请求函数
 */
export const reqWeather = (city) => {
    return new Promise((resolve, reject) => {
        // const url = `https://api.seniverse.com/v3/weather/now.json?key=SxjZBKEAoibnCPLPD&location=${city}`;
        const url = `https://api.seniverse.com/v3/weather/now.json?key=SxjZBKEAoibnCPLPD&location=${city}`;

        jsonp(url, {}, (err, data) => {
            if (!err) {
                const {weather} = '';
                resolve({weather})
            } else {
                message.error("获取天气信息失败!");
            }
        });
    });
};
