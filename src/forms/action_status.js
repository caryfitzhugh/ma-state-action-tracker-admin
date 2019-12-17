import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const ActionStatusCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Action Status" source="status" />
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Create>
);

export const ActionStatusEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Action Status" source="status"/>
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Edit>
);
const rowClick = (id, basePath, record) => 'show';

export const ActionStatusList = (props) => (
    <List {...props}>
        <Datagrid rowClick={rowClick}>
            <TextField label="Action Status" source="status" />
        </Datagrid>
    </List>
);
