import React from 'react';

import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  List,
  LongTextInput,
  ReferenceField,
  ReferenceInput,
  Responsive,
  SelectInput,
  ShowButton,
  SimpleForm,
  SimpleList,
  TextField,
  required,
} from 'react-admin';

import { parse } from 'query-string';

const today = new Date();


export const ProgressNoteList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          linkType="show"
          primaryText={record => record.body}
          tertiaryText={record =>
            new Date(record.created_at).toLocaleDateString()
          }
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          <DateField source="created_on" />
          <TextField source="note" />
          <ReferenceField
            resource="progress-notes"
            source="action_track_id"
            reference="action-tracks"
          >
            <TextField source="title" />
          </ReferenceField>
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const ProgressNoteCreate = (props) => {
  // Read the post_id from the location which is injected by React Router and passed to our component by react-admin automatically
  let args = parse(props.location.search);
  let action_track_id = args.action_track_id;
  const redirect = action_track_id ? `/action-tracks/${action_track_id}/show` : false;

  return (
    <Create {...props}>
      <SimpleForm
        defaultValue={{ created_on: new Date()}}
        redirect={redirect}
      >
        <ReferenceField
          source="action_track_id"
          reference="action-tracks"
        >
          <TextField source={"title"}/>
        </ReferenceField>
        <DateInput source="created_on" />
        <LongTextInput source="note" />
      </SimpleForm>
    </Create>
  );
};
