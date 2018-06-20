import React, { Component } from 'react';
import { URL } from '../constants';

export default class Sidebar extends Component {

  render() {

    const menuItems = [
      {
        id: 'home',
        text: 'Dashboard',
        icon: 'fa fa-dashboard',
        link: '/',
      },
      {
        id: URL.VIRTUAL_SERVICES,
        text: 'Virtual Services',
        icon: 'fa fa-paper-plane',
        link: `/${URL.VIRTUAL_SERVICES}`,
      },
    ]

    return (
      <div className="nav-pf-vertical nav-pf-vertical-with-sub-menus">
        <ul className="list-group">
          {
            menuItems.map((item) => (
              <li key={item.id} className={this.props.path === item.link ? 'list-group-item active' : 'list-group-item'}>
                <a href={item.link}>
                  <span className={item.icon} data-toggle="tooltip" title={item.text}></span>
                  <span className="list-group-item-value">{item.text}</span>
                </a>
            </li>
            ))
          }
        </ul>

      </div>
    );
  }

}

