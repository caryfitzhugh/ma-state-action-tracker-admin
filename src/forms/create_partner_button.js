import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { change, submit, isSubmitting } from "redux-form";
import {
  fetchEnd,
  fetchStart,
  required,
  showNotification,
  Button,
  SaveButton,
  SimpleForm,
  TextInput,
  LongTextInput,
  withDataProvider,
  CREATE,
  REDUX_FORM_NAME,
} from "react-admin";
import IconContentAdd from "@material-ui/icons/Add";
import IconCancel from "@material-ui/icons/Cancel";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import dataProvider from "../dataProvider";

class PartnerQuickCreateButton extends Component {
  state = {
    error: false,
    showDialog: false,
  };

  handleClick = () => {
    this.setState({ showDialog: true });
  };

  handleCloseClick = () => {
    this.setState({ showDialog: false });
  };

  handleSaveClick = () => {
    const { submit } = this.props;

    // Trigger a submit of our custom quick create form
    // This is needed because our modal action buttons are oustide the form
    submit("partner-quick-create");
  };

  handleSubmit = values => {
    const { dataProvider, change, fetchStart, fetchEnd, record, showNotification} = this.props;

    // Dispatch an action letting react-admin know a API call is ongoing
    fetchStart();

    // As we want to know when the new record has been created in order to close the modal, we use the
    // dataProvider directly
    let res = dataProvider(CREATE, "partners", { data: values });
    res.then(({ data }) => {
        // Update the main react-admin form (in this case, the comments creation form)
        change(REDUX_FORM_NAME, "partner_ids", [data.id].concat(record.partner_ids));
        this.setState({ showDialog: false });
      })
      .catch(error => {
        showNotification(error.message, "error");
      })
      .finally(() => {
        // Dispatch an action letting react-admin know a API call has ended
        fetchEnd();
      });
  };

  render() {
    const { showDialog } = this.state;
    const { isSubmitting } = this.props;

    return (
      <Fragment>
        <Button onClick={this.handleClick} label="ra.action.create">
          <IconContentAdd label="Partner"/>
        </Button>
        <Dialog
          fullWidth
          open={showDialog}
          onClose={this.handleCloseClick}
          aria-label="Create Partner"
        >
          <DialogTitle>Create Partner</DialogTitle>
          <DialogContent>
            <SimpleForm
              // We override the redux-form name to avoid collision with the react-admin main form
              form="partner-quick-create"
              resource="partners"
              // We override the redux-form onSubmit prop to handle the submission ourselves
              onSubmit={this.handleSubmit}
              // We want no toolbar at all as we have our modal actions
              toolbar={null}
            >
              <TextInput source="name" validate={required()} />
              <TextInput source="href" validate={required()} />
              <LongTextInput source="description" />
            </SimpleForm>
          </DialogContent>
          <DialogActions>
            <SaveButton saving={isSubmitting} onClick={this.handleSaveClick} />
            <Button label="ra.action.cancel" onClick={this.handleCloseClick}>
              <IconCancel />
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isSubmitting: isSubmitting("partner-quick-create")(state),
});

const mapDispatchToProps = {
  change,
  fetchEnd,
  fetchStart,
  showNotification,
  submit,
};

export default withDataProvider(connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnerQuickCreateButton));
