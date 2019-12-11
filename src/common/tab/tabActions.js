export function selectTab(tabId){
  return {
    type: 'SELECT_TAB',
    payload: tabId
  }
}

export function showTabs(...tabsId){
  let showTabs = {}

  tabsId.forEach(element => { showTabs[element] = true });
  return {
    type: 'SHOW_TABS',
    payload: showTabs
  }
}