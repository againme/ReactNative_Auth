import React, { Component } from 'react';

// import { Button } from './common/Button';
// import { Card } from './common/Card';
// import { CardSection } from './common/CardSection';

import { Button, Card, CardSection, Input } from './common/';

class LoginForm extends Component {

    state = { email: ''};

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    placeholder="email here!!"
                    label="Email"
                    value={this.state.email}
                    onChangeText={ email => this.setState({ email }) }
                    />
                </CardSection>

                <CardSection/>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
