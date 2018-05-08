import React, { Component } from 'react';
import NavigationHammer from '../src/NavigationHammer';
// import '../../../core/stylesheets/normalize.css';

const TABS = [
  {id: 1111, name: "Chrysanthemum"},
  {id: 10125, name: "Ixora"},
  {id: 15423, name: "Wild Sunflower"},
  {id: 15422, name: "Bougainvillaea"},
  {id: 41420, name: "お肌をいたわる、心落ち着く香り"},
  {id: 1421, name: "お肌の調子を整える"}
];

class NavigationHammerEg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: 0,
    };
    this.changeTab = this.changeTab.bind(this);
  }
  // actionChangeItem(item) {
  //   console.log('click item', item);
  // }

//   <li className="tab-item">
//   Abu Dhabi Securities Exchange
//   </li>
// <li className="tab-item">
//   AEX
//   </li>
// <li className="tab-item">
//   Artificial Intelligence
//   </li>
// <li className="tab-item">
//   Australian Securities Exchange
// </li>

  changeTab(index) {
    console.log('change Tab', TABS[index]);
    this.setState(
      {
        tabActive: index,
      }
    )
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', background: '#fff', padding: 10, boxSizing: 'border-box' }}>
        <NavigationHammer>
          {TABS.map((tab, index) => {
            const isActive = TABS[this.state.tabActive].id === tab.id ? 'tab-active' : '';
            const tabClass = `tab-item ${isActive}`;
            return (
              <li
                key={tab.id}
                onClick={(evt) => {
                  if (evt.which === 1) {
                    this.changeTab(index);
                  }
                }}
                className={tabClass}
              >
                {tab.name}
              </li>
            )
          })
        }
        </NavigationHammer>
      </div>
    )
  }
}

export default NavigationHammerEg;