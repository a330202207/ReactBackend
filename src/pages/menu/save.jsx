import React, {Component} from "react";
import {Form, Input, InputNumber, Select} from "antd";
import PropTypes from "prop-types";

const Item = Form.Item;
const Option = Select.Option;

/**
 * 保存菜单
 */
class saveMenu extends Component {
    constructor(props) {
        super(props);
        this.props.setForm(props.form)
    };

    static propTypes = {
        menuInfo: PropTypes.object.isRequired,
        menuList: PropTypes.array.isRequired, // 一级分类的数组
        setForm: PropTypes.func.isRequired
    };

    render() {
        const {parent_id, name, order_by, menu_router} = this.props.menuInfo;
        const {getFieldDecorator} = this.props.form;
        const menuList = this.props.menuList;

        return (
            <Form>
                <Item
                    label="菜单名称"
                    name="name"
                >
                    {
                        getFieldDecorator('name', {
                            initialValue: name,
                            rules: [
                                {required: true, message: '菜单名称必须输入'}
                            ]
                        })(
                            <Input placeholder='请输入菜单名称'/>
                        )
                    }
                </Item>
                <Item
                    label="上级菜单"
                    name="parent_id"
                >
                    {
                        getFieldDecorator('parent_id', {
                            initialValue: parent_id
                        })(
                            <Select>
                                <Option value={0} disabled={parent_id !== 0}>一级菜单</Option>
                                {
                                    menuList.map(c => <Option key={c.id} value={c.id}>{c.name}</Option>)
                                }
                            </Select>
                        )
                    }
                </Item>
                <Item
                    label="菜单路由"
                    name="router"
                >
                    {
                        getFieldDecorator('menu_router', {
                            initialValue: menu_router
                        })(
                            <Input placeholder='请输入菜单路由'/>
                        )
                    }
                </Item>
                <Item
                    label="菜单排序"
                    name="order_by"
                >
                    {
                        getFieldDecorator('order_by', {
                            initialValue: order_by
                        })(
                            <InputNumber min={0} />
                        )
                    }
                </Item>
            </Form>
        )
    }
}

export default Form.create()(saveMenu);