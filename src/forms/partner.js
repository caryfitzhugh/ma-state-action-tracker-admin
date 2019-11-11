import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const PartnerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label='Partner Name' source="name" />
            <TextInput label="URL Address" type='url' source='href'/>
        </SimpleForm>
    </Create>
);

export const PartnerEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput label="Partner Name" source='name'/>
            <TextInput label="URL Address" source='href'/>
        </SimpleForm>
    </Edit>
);

export const PartnerList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="Partner Name" source="name" />
            <TextField label="URL Address" source="href" />
        </Datagrid>
    </List>
);