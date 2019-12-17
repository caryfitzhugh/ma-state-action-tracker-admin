import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const LeadAgencyCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label='Lead Agency Name' source="name" />
            <TextInput label="URL" type='url' source='href'/>
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Create>
);

export const LeadAgencyEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput label="Lead Agency Name" source='name'/>
            <TextInput label="URL" source='href'/>
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Edit>
);

export const LeadAgencyList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="Lead Agency Name" source="name" />
            <TextField label="URL" source="href" />
        </Datagrid>
    </List>
);
