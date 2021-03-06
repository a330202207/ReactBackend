import React, {Component} from "react";
import {Button, Card, Form, Icon, Input, message, Tree} from 'antd'
import LinkButton                                       from "../../components/linkButton";
import {saveRole}                                       from "../../api";
import menuList from "../../config/menuConfig";


const Item = Form.Item;
const {TreeNode} = Tree;


/**
 * 保存角色
 */
class roleAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roleId: this.props.location.state.id,
            roleName: this.props.location.state.name,
            checkedKeys: this.props.location.state.roleList,
        };
    };

    onCheck = (checkedKeys) => {
        this.setState({
            checkedKeys: checkedKeys
        });
    };

    //提交
    handleSubmit = () => {
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {name} = values;
                const id = this.state.roleId;
                const menu_ids = this.state.checkedKeys;
                const role = {id, name, menu_ids};
                const res = await saveRole(role);
                if (res.code === 200) {
                    message.success('操作成功!');
                    this.props.history.goBack()
                } else {
                    message.error('操作失败!');
                }
            }
        });
    };

    // 组件树形控件 子节点渲染
    renderTreeNodes = data =>
        data.map(item => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode title={item.title} key={item.key}/>;
        });

    render() {
        const {getFieldDecorator} = this.props.form;
        const title = (
            <span>
                <LinkButton>
                  <Icon
                      type='arrow-left'
                      style={{marginRight: 10, fontSize: 20}}
                      onClick={() => this.props.history.goBack()}
                  />
                </LinkButton>
                <span>编辑角色</span>
            </span>
        );

        // 指定Item布局的配置对象
        const formItemLayout = {
            labelCol: {span: 2},  // 左侧label的宽度
            wrapperCol: {span: 8}, // 右侧包裹的宽度
        };

        return (
            <Card title={title}>
                <Form {...formItemLayout}>
                    <Item
                        label="角色名称"
                        name="name"
                    >
                        {
                            getFieldDecorator('name', {
                                initialValue: this.state.roleName,
                                rules: [
                                    {required: true, message: '商品名称必须输入'}
                                ]
                            })(<Input placeholder='请输入角色名称' style={{width: '100%'}}/>)
                        }
                    </Item>
                    <Item
                        label="菜单权限"
                        name="menu_ids"
                    >
                        <Tree
                            checkable
                            defaultExpandAll={true}
                            checkedKeys={this.state.checkedKeys}
                            onCheck={this.onCheck}
                        >
                            {this.renderTreeNodes(menuList)}
                        </Tree>
                    </Item>
                    <Item>
                        <Button type='primary' onClick={this.handleSubmit}>提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}

export default Form.create()(roleAdd);
