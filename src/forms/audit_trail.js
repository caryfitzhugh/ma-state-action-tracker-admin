import React from 'react';
import { ReferenceArrayField, NumberField, FunctionField, ReferenceField, ReferenceInput, SelectInput, List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

const rowClick = (id, basePath, record) => 'show';

const render_changes = (record) => {
  return record.changes;
};
const ChangedValue = (props) => {
 if (props.field === 'title') {
    return <div>
      <label>Title </label>
      <span>{props.value}</span>
     </div>;
 } else if (props.field === 'description') {
    return <div>
      <label>Description</label>
      <span>{props.value}</span>
     </div>;
 } else if (props.field === 'completion_timeframe_id') {
    return <div>
     <label>Completion Timeframe </label>
     <ReferenceField
            basePath='completion-timeframes/'
            label="Completion Timeframe"
            source="value"
            record={props}
            reference="completion-timeframes">
        <TextField source="timeframe"/>
      </ReferenceField>
     </div>
 } else if (props.field === 'action_status_id') {
    return <div>
     <label>Action Status </label>
     <ReferenceField
            basePath='action-statuses/'
            label="Action Status"
            source="value"
            record={props}
            reference="action-statuses">
        <TextField source="status"/>
      </ReferenceField>
     </div>
 } else if (props.field === 'lead_agency_id') {
    return <div>
     <label>Lead Agency </label>
     <ReferenceField
            basePath='lead-agencies/'
            label="Lead Agency"
            source="value"
            record={props}
            reference="lead-agencies">
        <TextField source="name"/>
      </ReferenceField>
     </div>
 } else if (props.field === 'agency_priority_id') {
    return <div>
     <label>Agency Priority</label>
     <ReferenceField
            basePath='agency-priorities//'
            label="Agency Priority"
            source="value"
            record={props}
            reference="agency-priorities">
        <TextField source="name"/>
      </ReferenceField>
     </div>
 } else {
    return <pre>{JSON.stringify(props)}</pre>;
 }
};

class RecordChanges extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      let changes = [];
      Object.keys(this.props.record.changes).forEach((k) => {
        changes.push([k, this.props.record.changes[k]]);
      });

      let td_style = {padding: '10px'};

      return <table className='table' style={{padding: "10px", textAlign: "left"}}>
        <tbody>
          {changes.map((c) => {
            return <ChangedValue field={c[0]} value={c[1][1]} old_value={c[1][0]} />;
          })}
        </tbody>
      </table>;
    }
};

export const AuditTrailList = (props) => (
    <List {...props} bulkActionButtons={false} exporter={false}>
        <Datagrid >
          <ReferenceField allowEmpty={true} label="Who" linkType={false}  source="user_id" reference="users">
            <TextField source="username"/>
          </ReferenceField>
          <DateField showTime={true} label="When" source="created_at" />
          <ReferenceField
            basePath='action-tracks/'
            label='Action Track'
            source="auditable_id"
            record={props}
            reference='action-tracks'>
            <TextField source="title" />
          </ReferenceField>
          <RecordChanges {...props} />
        </Datagrid>
    </List>
);
