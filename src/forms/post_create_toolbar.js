import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';


import React from 'react';
import IconCancel from "@material-ui/icons/Cancel";
import { Button, Edit, SimpleForm, SaveButton, Toolbar } from 'react-admin';

const PostCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save"
            redirect="list"
            submitOnEnter={true}
        />
        <Button label='Cancel' onClick={(e) => props.goBack()}>
          <IconCancel/>
        </Button>
    </Toolbar>
);

export default connect(null, {goBack})(PostCreateToolbar);
