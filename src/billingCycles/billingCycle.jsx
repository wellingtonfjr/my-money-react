import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTab, showTabs } from '../common/tab/tabActions';

import ContentHeader from '../common/template/contentHeader';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabHeader from '../common/tab/tabHeader';
import TabsContent from '../common/tab/tabsContent';
import TabContent from '../common/tab/tabContent';

import BillingCycleList from './billingCycleList';

class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab('tabList');
    this.props.showTabs('tabList', 'tabCreate', 'tabUpdate', 'tabDelete');
  }
  render() {
    return (
      <div>
        <ContentHeader title="BillingCycle"></ContentHeader>
        <Tabs>
          <TabsHeader> 
            <TabHeader label='Listar' icon='bars' target='tabList' />
            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
          </TabsHeader>
    
          <TabsContent> 
            <TabContent id='tabList'>
              <BillingCycleList />
            </TabContent>
            <TabContent id='tabCreate'>
              Create
            </TabContent>
            <TabContent id='tabUpdate'>
              Update
            </TabContent>
            <TabContent id='tabDelete'>
              Excluir
            </TabContent>
          </TabsContent> 
        </Tabs>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle)