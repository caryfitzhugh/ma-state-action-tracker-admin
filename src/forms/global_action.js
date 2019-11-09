
import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const GlobalActionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label='Global Action Name' source="action" />
        </SimpleForm>
    </Create>
);

export const GlobalActionEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Global Action Name" source='action'/>
        </SimpleForm>
    </Edit>
);

export const GlobalActionList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="Global Action Name" source="action" />
        </Datagrid>
    </List>
);
