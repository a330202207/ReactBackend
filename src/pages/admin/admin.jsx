import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import AdminList from "./list";
import AdminSave from "./save";

/**
 * 菜单路由
 */
export default class Admin extends Component {
    render() {
        return (
            <Switch>
                <Route path='/admin/list' component={AdminList} exact/>
                <Route path='/admin/save' component={AdminSave}/>
                <Redirect to='/admin/list'/>
            </Switch>

        )
    }
}