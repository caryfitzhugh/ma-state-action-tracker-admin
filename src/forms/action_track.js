import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { withStyles } from "@material-ui/core/styles";
import { unparse as convertToCSV } from 'papaparse/papaparse.min';
import PostCreateToolbar from './post_create_toolbar.js';

import { BooleanInput, BooleanField, NumberField, downloadCSV, ExportButton, CreateButton, RefreshButton, Filter, DeleteButton, Button, Link, ReferenceArrayField, Show, SimpleShowLayout, SelectArrayInput, ReferenceArrayInput, SelectInput, ReferenceInput, DateField, ReferenceField, SingleFieldList, ChipField, List, Create, Edit, SimpleForm, DisabledInput, LongTextInput, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, EditButton } from 'react-admin';

import FundingSourceQuickCreateButton from "./create_funding_source_button.js";
import PartnerQuickCreateButton from "./create_partner_button.js";
import LeadAgencyQuickCreateButton from "./create_lead_agency_button.js";

export const ActionTrackCreate = ({permissions, ...props}) => (
<Create undoable={false} {...props}>
  <SimpleForm toolbar={<PostCreateToolbar />} >
    <TextInput label="Title" source='title' required={true}/>
    <LongTextInput label="Description" source='description' />
    {props.options.permissions.admin ?  <BooleanInput label="Public" source="public" /> :
      <BooleanField label="Public" source='public'/>}
    <ReferenceInput label="Completion Timeframe"   source="completion_timeframe_id" reference="completion-timeframes">
      <SelectInput optionText="timeframe"/>
    </ReferenceInput>


    <ReferenceInput emptyValue={null} allowEmpty={true} label="Action Status"   source="action_status_id" reference="action-statuses">
      <SelectInput optionText="status"/>
    </ReferenceInput>

    <ReferenceArrayInput label='Action Types' source="action_type_ids" reference="action-types"
      perPage={5000}
      sort={{ field: 'type', order: 'ASC' }}>
      <SelectArrayInput optionText="type" />
    </ReferenceArrayInput>

    <ReferenceInput emptyValue={null} allowEmpty={true} label="Exec Office"   source="exec_office_id" reference="exec-offices"
      perPage={5000}
      sort={{ field: 'name', order: 'ASC' }}>
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput emptyValue={null} allowEmpty={true} label="Lead Agency"   source="lead_agency_id" reference="lead-agencies"
      perPage={5000}
      sort={{ field: 'name', order: 'ASC' }}>
      <SelectInput optionText="name"/>
    </ReferenceInput>
    <LeadAgencyQuickCreateButton/>

    <ReferenceInput emptyValue={null} allowEmpty={true} label="Agency Priority" source="agency_priority_id" reference="agency-priorities"
      perPage={5000}
      sort={{ field: 'name', order: 'ASC' }}>
      <SelectInput optionText="name"/>
    </ReferenceInput>

    <ReferenceInput emptyValue={null} allowEmpty={true} label="Global Action" source="global_action_id" reference="global-actions">
      <SelectInput optionText="action"/>
    </ReferenceInput>

    <ReferenceArrayInput label='Possible Partners' source="partner_ids" reference="partners"
      perPage={5000}
      sort={{ field: 'name', order: 'ASC' }}>
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
    <PartnerQuickCreateButton />

    <ReferenceArrayInput label='Possible Funding Sources' source="funding_source_ids" reference="funding-sources"
      perPage={5000}
      sort={{ field: 'name', order: 'ASC' }}>
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
    <FundingSourceQuickCreateButton />

    <ReferenceArrayInput label='SHMCAP Goals' source="shmcap_goal_ids" reference="shmcap-goals">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>

    <ReferenceArrayInput label='Primary Climate Interactions' source="primary_climate_interaction_ids" reference="primary-climate-interactions"
      perPage={5000}
      sort={{ field: 'name', order: 'ASC' }}>
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
  </SimpleForm>
    </Create>
);

export const ActionTrackEdit = (props) => (
    <Edit undoable={false} {...props}>
      <SimpleForm toolbar={<PostCreateToolbar />} >
        <TextInput label="Title" source='title' required={true}/>
        <LongTextInput label="Description" source='description' />
        {props.options.permissions.admin ?  <BooleanInput label="Public" source="public" /> :
          <BooleanField label="Public" source='public'/>}

        <ReferenceInput emptyValue={null} allowEmpty={true} label="Completion Timeframe"   source="completion_timeframe_id" reference="completion-timeframes">
          <SelectInput optionText="timeframe"/>
        </ReferenceInput>

        <ReferenceInput emptyValue={null} allowEmpty={true} label="Action Status"   source="action_status_id" reference="action-statuses"
          perPage={5000}
          sort={{ field: 'status', order: 'ASC' }}>
          <SelectInput optionText="status"/>
        </ReferenceInput>

        <ReferenceArrayInput label='Action Types' source="action_type_ids" reference="action-types"
          perPage={5000}
          sort={{ field: 'type', order: 'ASC' }}>
          <SelectArrayInput optionText="type" />
        </ReferenceArrayInput>


        <ReferenceInput emptyValue={null} allowEmpty={true} label="Exec Office"   source="exec_office_id" reference="exec-offices"
          perPage={5000}
          sort={{ field: 'name', order: 'ASC' }}>
          <SelectInput optionText="name"/>
        </ReferenceInput>

        <ReferenceInput emptyValue={null} allowEmpty={true} label="Lead Agency"   source="lead_agency_id" reference="lead-agencies"
          perPage={5000}
          sort={{ field: 'name', order: 'ASC' }}>
          <SelectInput optionText="name"/>
        </ReferenceInput>
        <LeadAgencyQuickCreateButton/>

        <ReferenceInput emptyValue={null} allowEmpty={true} label="Agency Priority" source="agency_priority_id" reference="agency-priorities"
          perPage={5000}
          sort={{ field: 'name', order: 'ASC' }}>
          <SelectInput optionText="name"/>
        </ReferenceInput>

        <ReferenceInput emptyValue={null} allowEmpty={true} label="Global Action" source="global_action_id" reference="global-actions"
          perPage={5000}
          sort={{ field: 'action', order: 'ASC' }}>
          <SelectInput optionText="action"/>
        </ReferenceInput>

        <ReferenceArrayInput label='Partners' source="partner_ids" reference="partners"
          perPage={5000}
          sort={{ field: 'name', order: 'ASC' }}>
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <PartnerQuickCreateButton />

        <ReferenceArrayInput label='Possible Funding Sources' source="funding_source_ids" reference="funding-sources"
          perPage={5000}
          sort={{ field: 'name', order: 'ASC' }}>
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <FundingSourceQuickCreateButton />

        <ReferenceArrayInput label='SHMCAP Goals' source="shmcap_goal_ids" reference="shmcap-goals">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>

        <ReferenceArrayInput label='Primary Climate Interactions' source="primary_climate_interaction_ids" reference="primary-climate-interactions"
          perPage={5000}
          sort={{ field: 'name', order: 'ASC' }}>
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
);
const track_filter_styles = {
  form: {
    padding: '10px'
  },
};
const TrackFilter = withStyles(track_filter_styles)(({classes, ...props}) => (
    <Filter {...props} classes={classes}>
      <TextInput label="Search Records" source="query" alwaysOn />
      <BooleanInput label="Public" source='public' />
      <ReferenceInput label="Global Action" source="global_action_id" reference="global-actions">
        <SelectInput optionText="action"/>
      </ReferenceInput>
      <ReferenceArrayInput label="Completion Timeframes" source="completion_timeframe_id" reference="completion-timeframes">
        <SelectArrayInput optionText="timeframe"/>
      </ReferenceArrayInput>
      <ReferenceArrayInput label='Action Types' source="action_type_ids" reference="action-types">
        <SelectArrayInput optionText="type" />
      </ReferenceArrayInput>
      <ReferenceArrayInput label="Action Status"   source="action_status_id" reference="action-statuses">
        <SelectArrayInput optionText="status"/>
      </ReferenceArrayInput>
      <ReferenceArrayInput label="Exec Office"   source="exec_office_id" reference="exec-offices">
        <SelectArrayInput optionText="name"/>
      </ReferenceArrayInput>
      <ReferenceArrayInput label="Lead Agency"   source="lead_agency_id" reference="lead-agencies">
        <SelectArrayInput optionText="name"/>
      </ReferenceArrayInput>
      <ReferenceArrayInput label="Partner"   source="partner_ids" reference="partners">
        <SelectArrayInput optionText="name"/>
      </ReferenceArrayInput>
      <ReferenceInput label='Agency Priority Score' source="agency_priority_id" reference="funding-sources">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceArrayInput label='SHMCAP Goals' source="shmcap_goal_ids" reference="shmcap-goals">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <ReferenceArrayInput label='Possible Funding Source' source="funding_source_ids" reference="funding-sources">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <ReferenceArrayInput label='Primary Climate Interactions' source="primary_climate_interaction_ids" reference="primary-climate-interactions">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </Filter>
));
const action_track_exporter = (records, fetchRelatedRecords) => {
    fetchRelatedRecords(records, 'action_type_ids', 'action-types').then(ats => {
     fetchRelatedRecords(records, 'action_status_id', 'action-statuses').then(ass => {
      fetchRelatedRecords(records, 'completion_timeframe_id', 'completion-timeframes').then(cts => {
       fetchRelatedRecords(records, 'exec_office_id', 'exec-offices').then(eos => {
        fetchRelatedRecords(records, 'lead_agency_id', 'lead-agencies').then(las => {
         fetchRelatedRecords(records, 'agency_priority_id', 'agency-priorities').then(aps => {
          fetchRelatedRecords(records, 'global_action_id', 'global-actions').then(gas => {
           fetchRelatedRecords(records, 'partner_ids', 'partners').then(ps => {
            fetchRelatedRecords(records, 'funding_source_ids', 'funding-sources').then(fss => {
             fetchRelatedRecords(records, 'primary_climate_interaction_ids', 'primary-climate-interactions').then(pcis => {
              fetchRelatedRecords(records, 'progress_note_ids', 'progress-notes').then(pns => {
               fetchRelatedRecords(records, 'shmcap_goal_ids', 'shmcap-goals').then(scgs => {
                  const data = records.map(record => ({
                      title: record.title,
                      description: record.description,
                      action_types: record.action_type_ids.map((ati) => {
                        return ats[ati].type;
                      }).join('\n'),
                      action_status: record.action_status_id ? ass[record.action_status_id].status : "",
                      completion_timeframe: record.completion_timeframe_id ? cts[record.completion_timeframe_id].timeframe : "",
                      exec_office: record.exec_office_id ? eos[record.exec_office_id].name : "",
                      lead_agency: record.lead_agency_id ? las[record.lead_agency_id].name : "",
                      agency_priority: record.agency_priority_id ? aps[record.agency_priority_id].priority : "",
                      global_action: record.global_action_id ? gas[record.global_action_id].action : "",
                      partners: record.partner_ids.map((pi) => {
                        return ps[pi].name;
                      }).join('\n'),
                      possible_funding_sources: record.funding_source_ids.map((fsi) => {
                        return fss[fsi].name;
                      }).join('\n'),
                      primary_climate_interactions: record.primary_climate_interaction_ids.map((pcii) => {
                        return pcis[pcii].name;
                      }).join('\n'),
                      shmcap_goals: record.shmcap_goal_ids.map((sgi) => {
                        return scgs[sgi].name
                      }).join('\n'),
                      progress_notes: record.progress_note_ids.map((pni) => {
                        return pns[pni].note
                      }).join('\n'),
                  }));
                  const csv = convertToCSV({
                      data,
                  });
                  downloadCSV(csv, 'action-tracks');
               });
              });
             });
            });
           });
          });
         });
        });
       });
      });
     });
    });
};

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const TracksActions = ({ resource, filters, displayedFilters, filterValues, basePath, showFilter }) => (
    <CardActions style={cardActionStyle}>
        {filters && React.cloneElement(filters, { resource, showFilter, displayedFilters, filterValues, context: 'button' }) }
        <CreateButton basePath={basePath} />
        <ExportButton onClick={action_track_exporter} maxRecords={10000}/>
        <RefreshButton />
    </CardActions>
);

const ActionTrackListActions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter,
    total
}) => (
    <CardActions>
        {bulkActions && React.cloneElement(bulkActions, {
            basePath,
            filterValues,
            resource,
            selectedIds,
            onUnselectItems,
        })}
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath={basePath} label="Create new action"/>
        <ExportButton
            disabled={total === 0}
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
    </CardActions>
);

export const ActionTrackList = (props) => (
    <List {...props} exporter={action_track_exporter}  actions={<ActionTrackListActions />} filters={<TrackFilter/>}>
      <Datagrid rowClick={(id, bp, rec) => 'show'}>
        <NumberField label="ID" source="id" />
        <BooleanField label="Public" source="public" />
        <TextField label="Title" source="title" />
        <ReferenceArrayField sortable={false} emptyValue={null} allowEmpty={true} label="Action Types"   source="action_type_ids" reference="action-types">
          <SingleFieldList>
            <ChipField source="type"/>
          </SingleFieldList>
        </ReferenceArrayField>
        <ReferenceField sortable={false} emptyValue={null} allowEmpty={true} label="Global Action" source="global_action_id" reference="global-actions">
          <TextField source="action"/>
        </ReferenceField>
        <ReferenceField sortable={false} emptyValue={null} allowEmpty={true}  source="completion_timeframe_id" reference="completion-timeframes">
          <TextField source="timeframe"/>
        </ReferenceField>
        <ReferenceField sortable={false} emptyValue={null} allowEmpty={true} label="Exec Office"   source="exec_office_id" reference="exec-offices">
            <TextField source="name"/>
        </ReferenceField>
      <ReferenceArrayField sortable={false} label='Possible Funding Sources' source="funding_source_ids" reference="funding-sources">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
        <ReferenceField sortable={false} emptyValue={null} allowEmpty={true} label="Lead Agency"   source="lead_agency_id" reference="lead-agencies">
          <TextField source="name"/>
        </ReferenceField>
        <ReferenceArrayField sortable={false} emptyValue={null} allowEmpty={true} label='SHMCAP Goals' source="shmcap_goal_ids" reference="shmcap-goals">
          <SingleFieldList>
            <ChipField source="name"/>
          </SingleFieldList>
        </ReferenceArrayField>
      </Datagrid>
    </List>
);

const AddNewProgressNoteButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: "/progress-notes/create",
      search: `?action_track_id=${record && record.id}`,
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
      <NumberField label="ID" source="id" />
      <BooleanField label="Public" source="public" />
      <TextField label="Title" source='title'/>
      <TextField label="Description" source='description' />
      <ReferenceField emptyValue={null} allowEmpty={true} label="Global Action" source="global_action_id" reference="global-actions">
        <TextField source="action"/>
      </ReferenceField>
      <ReferenceField emptyValue={null} allowEmpty={true} label="Completion Timeframe"   source="completion_timeframe_id" reference="completion-timeframes">
        <TextField source="timeframe"/>
      </ReferenceField>
      <ReferenceArrayField emptyValue={null} allowEmpty={true} label="Action Types"   source="action_type_ids" reference="action-types">
        <SingleFieldList>
          <ChipField source="type"/>
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceField emptyValue={null} allowEmpty={true} label="Action Status"   source="action_status_id" reference="action-statuses">
        <TextField source="status"/>
      </ReferenceField>
      <ReferenceField emptyValue={null} allowEmpty={true} label="Exec Office"   source="exec_office_id" reference="exec-offices">
        <TextField source="name"/>
      </ReferenceField>
      <ReferenceField emptyValue={null} allowEmpty={true} label="Lead Agency"   source="lead_agency_id" reference="lead-agencies">
        <TextField source="name"/>
      </ReferenceField>
      <ReferenceArrayField label='Partners' source="partner_ids" reference="partners">
        <TextField label="name" />
      </ReferenceArrayField>
      <ReferenceField emptyValue={null} allowEmpty={true} label="Agency Priority" source="agency_priority_id" reference="agency-priorities">
        <TextField source="name"/>
      </ReferenceField>
      <ReferenceArrayField label='SHMCAP Goals' source="shmcap_goal_ids" reference="shmcap-goals">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceArrayField label='Possible Funding Sources' source="funding_source_ids" reference="funding-sources">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceArrayField label='Primary Climate Interactions' source="primary_climate_interaction_ids" reference="primary-climate-interactions">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <hr/>
      <AddNewProgressNoteButton record={props.data} />
      <ReferenceArrayField label='Progress Notes' source="progress_note_ids" reference="progress-notes">
        <Datagrid>
          <TextField source="note" />
          <DateField source="created_on"/>
          <DeleteButton undoable={false} resource="progress-notes" basePath="/progress-notes" redirect={false} />
        </Datagrid>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);
