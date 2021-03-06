import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import RoleList from "./list";
import RoleSave from "./save";
import RoleAdd from "./add";
// import RoleDetails from "./details";

/**
 * 角色路由
 */
export default class Index extends Component {
    render() {
        return (
            <Switch>
                <Route path='/role/list' component={RoleList} exact/>
                <Route path='/role/add' component={RoleAdd}/>
                <Route path='/role/save' component={RoleSave}/>
                {/*<Route path='/role/details' component={RoleDetails}/>*/}
                <Redirect to='/role/list'/>
            </Switch>
        )
    }
}
