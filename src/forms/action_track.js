import React from 'react';
import { SelectArrayInput, ReferenceArrayInput, SelectInput, ReferenceInput, DateField, ReferenceField, SingleFieldList, ChipField, List, Create, Edit, SimpleForm, DisabledInput, LongTextInput, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, EditButton } from 'react-admin';


const Form = (props) => (
  <SimpleForm>
    <TextInput label="Title" source='title'/>
    <LongTextInput label="Description" source='description' />
    <DateInput label="Starts On" source='start_on' />
    <DateInput label="Ends On" source='end_on' />

    <ReferenceInput label="Action Status"   source="action_status" reference="action-statuses">
      <SelectInput optionText="status"/>
    </ReferenceInput>

    <ReferenceInput label="Action Type"   source="action_type" reference="action-types">
      <SelectInput optionText="type"/>
    </ReferenceInput>

    <ReferenceInput label="Exec Office"   source="exec_office" reference="exec-offices">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Lead Agency"   source="lead_agency" reference="lead-agencies">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Agency Priority" source="agency_priority" reference="agency-priorities">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Global Action" source="global_action" reference="global-actions">
      <SelectInput optionText="action"/>
    </ReferenceInput>

    <ReferenceArrayInput label='Partners' source="partners" reference="partners">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='Funding Sources' source="funding_sources" reference="funding-sources">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='SHMCAP Goals' source="shmcap_goals" reference="shmcap-goals">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
    <ReferenceArrayInput label='Primary Climate Interactions' source="primary_climate_interactions" reference="primary-climate-interactions">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
  </SimpleForm>
);
/*
  has n, :progress_notes, ProgressNote
*/

export const ActionTrackCreate = (props) => (
<Create {...props}>
  <SimpleForm>
    <TextInput label="Title" source='title'/>
    <LongTextInput label="Description" source='description' />
    <DateInput label="Starts On" source='start_on' />
    <DateInput label="Ends On" source='end_on' />

    <ReferenceInput label="Action Status"   source="action_status" reference="action-statuses">
      <SelectInput optionText="status"/>
    </ReferenceInput>

    <ReferenceInput label="Action Type"   source="action_type" reference="action-types">
      <SelectInput optionText="type"/>
    </ReferenceInput>

    <ReferenceInput label="Exec Office"   source="exec_office" reference="exec-offices">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Lead Agency"   source="lead_agency" reference="lead-agencies">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Agency Priority" source="agency_priority" reference="agency-priorities">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Global Action" source="global_action" reference="global-actions">
      <SelectInput optionText="action"/>
    </ReferenceInput>

    <ReferenceArrayInput label='Partners' source="partners" reference="partners">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='Funding Sources' source="funding_sources" reference="funding-sources">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='SHMCAP Goals' source="shmcap_goals" reference="shmcap-goals">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
    <ReferenceArrayInput label='Primary Climate Interactions' source="primary_climate_interactions" reference="primary-climate-interactions">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
  </SimpleForm>
    </Create>
);

export const ActionTrackEdit = (props) => (
    <Edit {...props}>
      <Form {...props} />
    </Edit>
);

export const ActionTrackList = (props) => (
    <List {...props}>
        <Datagrid rowClick={(id, bp, rec) => 'show'}>
            <TextField label="Title" source="title" />
            <DateField label="Starts" source="starts_on" />
            <DateField label="Ends" source="ends_on" />

        </Datagrid>
    </List>
);
