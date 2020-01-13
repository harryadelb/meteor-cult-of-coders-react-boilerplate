import React from 'react';
import { AutoForm, AutoField } from 'uniforms-unstyled';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2'
import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
    myValue: String
});

const bridge = new SimpleSchema2Bridge(schema);

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            number: -1
        }
    }

    getRandomNumber = () => {
        Meteor.call('find.random_number', (err, number) => {
            this.setState({ number })
        });
    };

    submit = (data) => {
        Meteor.call('method.checkString', data.myValue, (err, result) => {
            if (err) {
                return alert(err.details);
            }
            console.log(result);
        });
    };

    render() {
        const { number } = this.state;

        return (
            <div className="home">
                <h1>Cult of Coders Boilerplate - React Version</h1>
            </div>
        )
    }
}