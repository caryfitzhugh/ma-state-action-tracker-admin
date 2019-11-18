import React from 'react';
import { NumberField, FunctionField, ReferenceField, ReferenceInput, SelectInput, List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

const rowClick = (id, basePath, record) => 'show';

const render_changes = (record) => {
  return record.changes;
};
class RecordChanges extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
console.log(this.props.record.changes);
      let changes = [];
      Object.keys(this.props.record.changes).forEach((k) => {
        changes.push([k, this.props.record.changes[k][0], this.props.record.changes[k][1]]);
      });
      let td_style = {padding: '10px'};
      return <table className='table' style={{padding: "10px", textAlign: "left"}}>
        <tbody>
          {changes.map((c) => {
            return <tr >
                <td style={Object.assign({}, td_style, {fontWeight: 700})} >{c[0]}</td>
                <td style={{ fontStyle: "italic"}} > {c[2]} </td>
              </tr>;
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
          <TextField label="Record Type" source="auditable_type" />
          <NumberField label="Record ID" source="auditable_id" />
          <RecordChanges {...props} />
        </Datagrid>
    </List>
);
