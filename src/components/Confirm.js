import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
}
back = e => {
    e.preventDefault();
    this.props.prevStep();
}

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = { firstName }
                        />
                        <ListItem
                            primaryText = "Last Name"
                            secondaryText = { lastName }
                        />
                        <ListItem
                            primaryText = "Email Name"
                            secondaryText = { email }
                        />
                        <ListItem
                            primaryText = "Occupation Name"
                            secondaryText = { occupation }
                        />
                        <ListItem
                            primaryText = "City Name"
                            secondaryText = { city }
                        />
                        <ListItem
                            primaryText = "Bio Name"
                            secondaryText = { bio }
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label = "confirm & Continue"
                        primary = { true }
                        style = { styles.button }
                        onClick= { this.continue }
                    />
                    <br/>
                    <RaisedButton
                        label = "Back"
                        primary = { false }
                        style = { styles.button }
                        onClick= { this.back }
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
