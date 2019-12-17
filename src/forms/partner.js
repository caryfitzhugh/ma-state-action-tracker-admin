import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const PartnerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label='Partner Name' source="name" />
            <TextInput label="URL" type='url' source='href'/>
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Create>
);

export const PartnerEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Partner Name" source='name'/>
            <TextInput label="URL" source='href'/>
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Edit>
);

export const PartnerList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="Partner Name" source="name" />
            <TextField label="URL" source="href" />
        </Datagrid>
    </List>
);
