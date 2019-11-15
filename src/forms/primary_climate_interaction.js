import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const PrimaryClimateInteractionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label='Climate Interaction Name' source="name" />
            <LongTextInput label="Tooltip Description" source="description" />
        </SimpleForm>
    </Create>
);

export const PrimaryClimateInteractionEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Climate Interaction Name" source='name'/>
            <LongTextInput label="Tooltip Description" source="description" />
        </SimpleForm>
    </Edit>
);

export const PrimaryClimateInteractionList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="Climate Interaction Name" source="name" />
        </Datagrid>
    </List>
);
