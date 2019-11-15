import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const CompletionTimeframeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Completion Timeframe" source="timeframe" />
        </SimpleForm>
    </Create>
);

export const CompletionTimeframeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Completion Timeframe" source="timeframe" />
    </SimpleForm>
  </Edit>
);
const rowClick = (id, basePath, record) => 'show';

export const CompletionTimeframeList = (props) => (
    <List {...props}>
        <Datagrid rowClick={rowClick}>
            <TextField label="Completion Timeframe" source="timeframe" />
        </Datagrid>
    </List>
);
