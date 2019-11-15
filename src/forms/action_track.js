import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

import { DeleteButton, Button, Link, ReferenceArrayField, Show, SimpleShowLayout, SelectArrayInput, ReferenceArrayInput, SelectInput, ReferenceInput, DateField, ReferenceField, SingleFieldList, ChipField, List, Create, Edit, SimpleForm, DisabledInput, LongTextInput, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, EditButton } from 'react-admin';


export const ActionTrackCreate = (props) => (
<Create {...props}>
  <SimpleForm>
    <TextInput label="Title" source='title' required={true}/>
    <LongTextInput label="Description" source='description' />
    <ReferenceInput label="Completion Timeframe"   source="completion_timeframe_id" reference="completion-timeframes">
      <SelectInput optionText="timeframe"/>
    </ReferenceInput>


    <ReferenceInput label="Action Status"   source="action_status_id" reference="action-statuses">
      <SelectInput optionText="status"/>
    </ReferenceInput>

    <ReferenceArrayInput label='Action Types' source="action_type_ids" reference="action-types">
      <SelectArrayInput optionText="type" />
    </ReferenceArrayInput>

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

    <ReferenceArrayInput label='Possible Partners' source="partner_ids" reference="partners">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='Possible Funding Sources' source="funding_source_ids" reference="funding-sources">
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

        <ReferenceInput label="Completion Timeframe"   source="completion_timeframe_id" reference="completion-timeframes">
          <SelectInput optionText="timeframe"/>
        </ReferenceInput>

        <ReferenceInput label="Action Status"   source="action_status_id" reference="action-statuses">
          <SelectInput optionText="status"/>
        </ReferenceInput>

        <ReferenceArrayInput label='Action Types' source="action_type_ids" reference="action-types">
          <SelectArrayInput optionText="type" />
        </ReferenceArrayInput>


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
        <ReferenceField allowEmpty={true} label="Completion Timeframe"   source="completion_timeframe_id" reference="completion-timeframes">
          <TextField source="timeframe"/>
        </ReferenceField>
        <ReferenceArrayField label="Action Types"   source="action_type_ids" reference="action-types">
          <SingleFieldList>
            <ChipField source="type"/>
          </SingleFieldList>
        </ReferenceArrayField>
      </Datagrid>
    </List>
);

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};
const AddNewProgressNoteButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: "/progress-notes/create",
      search: `?action_track_id=22`,
     // ${record.id}`,
    }}
    label="Add a progress note"
  >
    <ChatBubbleIcon />
  </Button>
);
const ShowActions = ({ basePath, data, resource }) => (
  <CardActions style={cardActionStyle}>
    <EditButton basePath={basePath} record={data} />
    <DeleteButton basePath={basePath} record={data} resource={resource} />
    <AddNewProgressNoteButton record={data} />
  </CardActions>
);
export const ActionTrackShow = (props) => (
  <Show actions={<ShowActions/>} {...props}>
    <SimpleShowLayout>
      <TextField label="Title" source='title'/>
      <TextField label="Description" source='description' />

      <ReferenceField allowEmpty={true} label="Completion Timeframe"   source="completion_timeframe_id" reference="completion-timeframes">
        <TextField source="timeframe"/>
      </ReferenceField>

      <hr/>

      <AddNewProgressNoteButton record={props.data} />

      <ReferenceArrayField label='Progress Notes' source="progress_note_ids" reference="progress-notes">
        <Datagrid>
          <TextField source="note" />
          <DateField source="created_on"/>
          <DeleteButton undoable={false} resource="progress-notes" basePath="/progress-notes" redirect={false} />
        </Datagrid>
      </ReferenceArrayField>

      <ReferenceField allowEmpty={true} label="Action Status"   source="action_status_id" reference="action-statuses">
        <TextField source="status"/>
      </ReferenceField>

      <ReferenceArrayField allowEmpty={true} label="Action Types"   source="action_type_ids" reference="action-types">
        <SingleFieldList>
          <ChipField source="type"/>
        </SingleFieldList>
      </ReferenceArrayField>

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
