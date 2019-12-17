import React from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const ShmcapGoalCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label='SHMCAP Goal' source="name" />
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Create>
);

export const ShmcapGoalEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="SHMCAP Goal" source='name'/>
            <LongTextInput label="Tooltip Content" source="description" />
        </SimpleForm>
    </Edit>
);
export const ShmcapGoalList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="SHMCAP Goal" source="name" />
        </Datagrid>
    </List>
);
