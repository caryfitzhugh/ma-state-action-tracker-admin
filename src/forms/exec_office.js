import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const ExecOfficeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label='Office Name' source="name" />
            <TextInput label="URL" type='url' source='href'/>
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Create>
);

export const ExecOfficeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Office Name" source='name'/>
            <TextInput label="URL" source='href'/>
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Edit>
);

export const ExecOfficeList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="Office Name" source="name" />
            <TextField label="URL" source="href" />
        </Datagrid>
    </List>
);
