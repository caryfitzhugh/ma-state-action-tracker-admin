import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Admin, Resource, ListGuesser, EditGuesser , CreateGuesser} from 'react-admin';
import { AuditTrailList } from './forms/audit_trail.js';
import { ActionTrackList, ActionTrackShow, ActionTrackEdit, ActionTrackCreate } from './forms/action_track.js';
import { ActionStatusList, ActionStatusEdit, ActionStatusCreate } from './forms/action_status.js';
import { ActionTypeList, ActionTypeEdit, ActionTypeCreate } from './forms/action_type.js';
import { CompletionTimeframeList, CompletionTimeframeEdit, CompletionTimeframeCreate } from './forms/completion_timeframe.js';
import { AgencyPriorityList, AgencyPriorityEdit, AgencyPriorityCreate } from './forms/agency_priority.js';
import { ExecOfficeList, ExecOfficeEdit, ExecOfficeCreate } from './forms/exec_office.js';
import { FundingSourceList, FundingSourceEdit, FundingSourceCreate } from './forms/funding_source.js';
import { GlobalActionList, GlobalActionEdit, GlobalActionCreate } from './forms/global_action.js';
import { LeadAgencyList, LeadAgencyEdit, LeadAgencyCreate } from './forms/lead_agency.js';
import { PartnerList, PartnerEdit, PartnerCreate } from './forms/partner.js';
import { PrimaryClimateInteractionList, PrimaryClimateInteractionEdit, PrimaryClimateInteractionCreate } from './forms/primary_climate_interaction.js';
import { ProgressNoteCreate } from './forms/progress_note.js';
import { ShmcapGoalList, ShmcapGoalEdit, ShmcapGoalCreate } from './forms/shmcap_goal.js';
import Dashboard from './Dashboard';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import endpoint from './endpoint';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});

const App = () =>
    <Admin theme={theme} dataProvider={dataProvider(endpoint)} authProvider={authProvider}>
        <Resource options={{label: "Action Track"}} name='action-tracks'
                  show={ActionTrackShow}
                  list={ActionTrackList} edit={ActionTrackEdit} create={ActionTrackCreate} />
        <hr/>

        <Resource name="progress-notes" create={ProgressNoteCreate}/>
        <Resource name="users" />

        <Resource options={{label: "Action Status"}} name="action-statuses" list={ActionStatusList} edit={ActionStatusEdit} create={ActionStatusCreate}/>
        <Resource options={{label: "Action Type"}} name="action-types" list={ActionTypeList} edit={ActionTypeEdit} create={ActionTypeCreate} />
        <Resource options={{label: "Agency Priority"}} name="agency-priorities" list={AgencyPriorityList} edit={AgencyPriorityEdit} create={AgencyPriorityCreate} />
        <Resource options={{label: "Completion Timeframe"}} name="completion-timeframes" list={CompletionTimeframeList} edit={CompletionTimeframeEdit} create={CompletionTimeframeCreate}  />
        <Resource options={{label: "Exec Office"}} name="exec-offices" list={ExecOfficeList} edit={ExecOfficeEdit} create={ExecOfficeCreate}  />
        <Resource options={{label: "Possible Funding Source"}} name="funding-sources" list={FundingSourceList} edit={FundingSourceEdit} create={FundingSourceCreate} />
        <Resource options={{label: "Global Action"}} name="global-actions" list={GlobalActionList} edit={GlobalActionEdit} create={GlobalActionCreate} />
        <Resource options={{label: "Lead Agency"}} name="lead-agencies" list={LeadAgencyList} edit={LeadAgencyEdit} create={LeadAgencyCreate} />
        <Resource options={{label: "Possible Partner"}} name="partners" list={PartnerList} edit={PartnerEdit} create={PartnerCreate} />
        <Resource options={{label: "Primary Climate Interaction"}} name="primary-climate-interactions" list={PrimaryClimateInteractionList} edit={PrimaryClimateInteractionEdit} create={PrimaryClimateInteractionCreate}/>
        <Resource options={{label: "SHMCAP Goal"}} name="shmcap-goals" list={ShmcapGoalList} edit={ShmcapGoalEdit} create={ShmcapGoalCreate} />
        <Resource options={{label: "Audit Trail"}} name="audit-trails" list={AuditTrailList} edit={false} create={false} show={false} />
    </Admin>

export default App;
