import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const FundingSourceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label='Funding Source Name' source="name" />
            <TextInput label="URL Address" type='url' source='href'/>
            <LongTextInput label="Tooltip Description" source="description" />
        </SimpleForm>
    </Create>
);

export const FundingSourceEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Funding Source Name" source='name'/>
            <TextInput label="URL Address" source='href'/>
            <LongTextInput label="Tooltip Description" source="description" />
        </SimpleForm>
    </Edit>
);

export const FundingSourceList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="Funding Source Name" source="name" />
            <TextField label="URL Address" source="href" />
        </Datagrid>
    </List>
);
