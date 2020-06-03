import React, { Component } from 'react';
import Aux from '../Auxilary/Auxo';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawr: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawr: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawr: !prevState.showSideDrawr};
        });
    }


    render() {
        return (
            <Aux>
                <Toolbar  drawerToggleClicked={this.sideDrawerToggleHandler}/>

                <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawr}/>
                
                <main className = {classes.Content}> 
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;