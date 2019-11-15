import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

const rowClick = (id, basePath, record) => 'show';

export const ActionTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Action Type" source="type" />
            <LongTextInput label="Tooltip Description" source="description" />
        </SimpleForm>
    </Create>
);

export const ActionTypeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Action Type" source="type"/>
            <LongTextInput label="Tooltip Description" source="description" />
        </SimpleForm>
    </Edit>
);

export const ActionTypeList = (props) => (
    <List {...props}>
        <Datagrid rowClick={rowClick}>
            <TextField label="Action Type" source="type" />
        </Datagrid>
    </List>
);
