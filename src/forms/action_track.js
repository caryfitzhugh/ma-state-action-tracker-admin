import React from 'react';
import CardActions from '@material-ui/core/CardActions';

import { ReferenceArrayField, Show, SimpleShowLayout, SelectArrayInput, ReferenceArrayInput, SelectInput, ReferenceInput, DateField, ReferenceField, SingleFieldList, ChipField, List, Create, Edit, SimpleForm, DisabledInput, LongTextInput, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, EditButton } from 'react-admin';


const Form = (props) => (
  <SimpleForm>
    <TextInput label="Title" source='title'/>
    <LongTextInput label="Description" source='description' />
    <DateInput label="Starts On" source='start_on' />
    <DateInput label="Ends On" source='end_on' />

    <ReferenceInput label="Action Status"   source="action_status_id" reference="action-statuses">
      <SelectInput optionText="status"/>
    </ReferenceInput>

    <ReferenceInput label="Action Type"   source="action_type_id" reference="action-types">
      <SelectInput optionText="type"/>
    </ReferenceInput>

    <ReferenceInput label="Exec Office"   source="exec_office_id" reference="exec-offices">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Lead Agency"   source="lead_agency_id" reference="lead-agencies">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Agency Priority" source="agency_priority_id" reference="agency-priorities">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Global Action" source="global_action_id" reference="global-actions">
      <SelectInput optionText="action"/>
    </ReferenceInput>

    <ReferenceArrayInput label='Partners' source="partner_ids" reference="partners">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='Funding Sources' source="funding_source_ids" reference="funding-sources">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='SHMCAP Goals' source="shmcap_goal_ids" reference="shmcap-goals">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
    <ReferenceArrayInput label='Primary Climate Interactions' source="primary_climate_interaction_ids" reference="primary-climate-interactions">
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
    <TextInput label="Title" source='title' required={true}/>
    <LongTextInput label="Description" source='description' />
    <DateInput label="Starts On" source='start_on' />
    <DateInput label="Ends On" source='end_on' />

    <ReferenceInput label="Action Status"   source="action_status_id" reference="action-statuses">
      <SelectInput optionText="status"/>
    </ReferenceInput>

    <ReferenceInput label="Action Type"   source="action_type_id" reference="action-types">
      <SelectInput optionText="type"/>
    </ReferenceInput>

    <ReferenceInput label="Exec Office"   source="exec_office_id" reference="exec-offices">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Lead Agency"   source="lead_agency_id" reference="lead-agencies">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Agency Priority" source="agency_priority_id" reference="agency-priorities">
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput label="Global Action" source="global_action_id" reference="global-actions">
      <SelectInput optionText="action"/>
    </ReferenceInput>

    <ReferenceArrayInput label='Partners' source="partner_ids" reference="partners">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='Funding Sources' source="funding_source_ids" reference="funding-sources">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='SHMCAP Goals' source="shmcap_goal_ids" reference="shmcap-goals">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
    <ReferenceArrayInput label='Primary Climate Interactions' source="primary_climate_interaction_ids" reference="primary-climate-interactions">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
  </SimpleForm>
    </Create>
);

export const ActionTrackEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source='title' required={true}/>
        <LongTextInput label="Description" source='description' />
        <DateInput label="Starts On" source='start_on' />
        <DateInput label="Ends On" source='end_on' />

        <ReferenceInput label="Action Status"   source="action_status_id" reference="action-statuses">
          <SelectInput optionText="status"/>
        </ReferenceInput>

        <ReferenceInput label="Action Type"   source="action_type_id" reference="action-types">
          <SelectInput optionText="type"/>
        </ReferenceInput>

        <ReferenceInput label="Exec Office"   source="exec_office_id" reference="exec-offices">
          <SelectInput optionText="name"/>
        </ReferenceInput>

        <ReferenceInput label="Lead Agency"   source="lead_agency_id" reference="lead-agencies">
          <SelectInput optionText="name"/>
        </ReferenceInput>

        <ReferenceInput label="Agency Priority" source="agency_priority_id" reference="agency-priorities">
          <SelectInput optionText="name"/>
        </ReferenceInput>

        <ReferenceInput label="Global Action" source="global_action_id" reference="global-actions">
          <SelectInput optionText="action"/>
        </ReferenceInput>

        <ReferenceArrayInput label='Partners' source="partner_ids" reference="partners">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>

        <ReferenceArrayInput label='Funding Sources' source="funding_source_ids" reference="funding-sources">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>

        <ReferenceArrayInput label='SHMCAP Goals' source="shmcap_goal_ids" reference="shmcap-goals">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <ReferenceArrayInput label='Primary Climate Interactions' source="primary_climate_interaction_ids" reference="primary-climate-interactions">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
);

export const ActionTrackList = (props) => (
    <List {...props}>
      <Datagrid rowClick={(id, bp, rec) => 'show'}>
        <TextField label="Title" source="title" />
        <DateField label="Starts" source="start_on" />
        <DateField label="Ends" source="end_on" />
      </Datagrid>
    </List>
);

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};
const ShowActions = ({ basePath, data, resource }) => (
  <CardActions style={cardActionStyle}>
    <EditButton basePath={basePath} record={data} />
  </CardActions>
);

export const ActionTrackShow = (props) => (
  <Show actions={<ShowActions/>} {...props}>
    <SimpleShowLayout>
      <TextField label="Title" source='title'/>
      <TextField label="Description" source='description' />
      <DateField label="Starts On" source='start_on' />
      <DateField label="Ends On" source='end_on' />


      <ReferenceField allowEmpty={true} label="Action Status"   source="action_status_id" reference="action-statuses">
        <TextField source="status"/>
      </ReferenceField>

      <ReferenceField allowEmpty={true} label="Action Type"   source="action_type_id" reference="action-types">
        <TextField source="type"/>
      </ReferenceField>

      <ReferenceField allowEmpty={true} label="Exec Office"   source="exec_office_id" reference="exec-offices">
        <TextField source="name"/>
      </ReferenceField>

      <ReferenceField allowEmpty={true} label="Lead Agency"   source="lead_agency_id" reference="lead-agencies">
        <TextField source="name"/>
      </ReferenceField>

      <ReferenceField allowEmpty={true} label="Agency Priority" source="agency_priority_id" reference="agency-priorities">
        <TextField source="name"/>
      </ReferenceField>

      <ReferenceField allowEmpty={true} label="Global Action" source="global_action_id" reference="global-actions">
        <TextField source="action"/>
      </ReferenceField>
      <ReferenceArrayField label='Partners' source="partner_ids" reference="partners">
        <TextField label="name" />
      </ReferenceArrayField>

      <ReferenceArrayField label='Funding Sources' source="funding_source_ids" reference="funding-sources">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>

      <ReferenceArrayField label='SHMCAP Goals' source="shmcap_goal_ids" reference="shmcap-goals">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>

      <ReferenceArrayField label='Primary Climate Interactions' source="primary_climate_interaction_ids" reference="primary-climate-interactions">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);
