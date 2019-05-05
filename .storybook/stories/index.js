import React from "react";
import { storiesOf } from "@storybook/react";
import Login from "../../src/ui/components/welcome/Login";

storiesOf('Login', module)
    .add('Default', () => (
        <Login
            attemptingLogin={ false }
            attemptLogin={() => credentials => {} }
        />
    ))
    .add('Attempting login', () => (
        <Login
            attemptingLogin={ true }
            attemptLogin={() => credentials => {} }
        />
    ))
    .add('On Login successful', () => (
        <Login
            attemptingLogin={ false }
            attemptLogin={() => credentials => {} }
            user={{
                name: 'Andrew Glow'
            }}
        />
    ))
    .add('With error', () => (
        <Login
            attemptingLogin={ false }
            attemptLogin={() => credentials => {} }
            error="No fue posible verificar tus credenciales en este momento"
        />
    ));
