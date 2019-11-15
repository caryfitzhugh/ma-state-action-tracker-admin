import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const AgencyPriorityCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label='Agency Priority' source="name" />
            <LongTextInput label="Tooltip Description" source="description" />
        </SimpleForm>
    </Create>
);

export const AgencyPriorityEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Agency Priority" source='name'/>
            <LongTextInput label="Tooltip Description" source="description" />
        </SimpleForm>
    </Edit>
);

export const AgencyPriorityList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="Agency Priority" source="name" />
        </Datagrid>
    </List>
);
