import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';


import React from 'react';
import IconCancel from "@material-ui/icons/Cancel";
import { Button, Confirm, Edit, SimpleForm, SaveButton, Toolbar } from 'react-admin';

const PostCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save"
            redirect="list"
            submitOnEnter={true}
        />
        <Button label='Cancel' onClick={(e) => {
          if (window.confirm("Cancel and go back?")) {
            props.goBack()
          }
        }}>
          <IconCancel/>
        </Button>
    </Toolbar>
);

export default connect(null, {goBack})(PostCreateToolbar);
