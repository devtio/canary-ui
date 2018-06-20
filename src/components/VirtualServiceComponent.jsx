import React, { Component } from 'react';

export default class VirtualServiceComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      virtualServices: [],
      namespaces: [],
      selectedNamespace: '',
    };

    this.baseUrl = 'http://localhost:8080';

  }

  componentDidMount() {

    fetch(this.baseUrl + '/namespaces').then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data.items);
      const selectedNamespace = data.items && data.items[0].metadata.name;
      this.setState({ namespaces: data.items, selectedNamespace },
        this.getVirtualServices(selectedNamespace)
      );
    }).catch((err) => {
      console.log(err);
    });
  }

  getVirtualServices = (selectedNamespace) => {
    if (selectedNamespace) {
      console.log("GET: " + this.baseUrl + '/virtual-services/' + selectedNamespace);
      fetch(this.baseUrl + '/virtual-services/' + selectedNamespace).then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data);
        this.setState({ virtualServices: data });
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  setSelectedNamespace = (selectedNamespace) => {
    this.setState({ selectedNamespace });
    this.getVirtualServices(selectedNamespace);
  }

  render() {
    return (
      <div className="col-sm-10">
        <h2>Virtual Services</h2>

        <ul className="nav nav-tabs">
          {
            this.state.namespaces.map((n) => {
              return (
                <li key={n.metadata.name} className={this.state.selectedNamespace === n.metadata.name ? 'active' : ''}>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      this.setSelectedNamespace(n.metadata.name);
                    }}
                  >
                    {n.metadata.name}
                  </a>
                </li>
              )
            })
          }
        </ul>

        <p>
          <button className="btn btn-primary btn-large">Create</button>
        </p>

        <div id="pf-list-simple-expansion" className="list-group list-view-pf list-view-pf-view">
          {
            this.state.virtualServices.map((vs) => {
              return (
                <div className="list-group-item" key={vs.metadata.name}>
                  <div className="list-group-item-header">
                    <div className="list-view-pf-expand">
                      <span className="fa fa-angle-right"></span>
                    </div>
                    {/* <div className="list-view-pf-checkbox">
                  <input type="checkbox">
                </div> */}
                    <div className="list-view-pf-actions">
                      <button className="btn btn-default">Action</button>
                      <div className="dropdown pull-right dropdown-kebab-pf">
                        <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <span className="fa fa-ellipsis-v"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight9">
                          <li><a>Action</a></li>
                          <li><a>Another Action</a></li>
                          <li><a>Something Else Here</a></li>
                          <li role="separator" className="divider"></li>
                          <li><a>Separated Link</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="list-view-pf-main-info">
                      <div className="list-view-pf-left">
                        <span className="fa fa-plane list-view-pf-icon-sm"></span>
                      </div>
                      <div className="list-view-pf-body">
                        <div className="list-view-pf-description">
                          <div className="list-group-item-heading">
                            {vs.metadata.name}
                          </div>
                          <div className="list-group-item-text">
                            {`Created: ${vs.metadata.creationTimestamp}`}
                          </div>
                        </div>
                        <div className="list-view-pf-additional-info">
                          <div className="list-view-pf-additional-info-item">
                            <span className="pficon pficon-screen"></span>
                            <strong>{vs.spec.hosts ? vs.spec.hosts.length : 0}</strong> {vs.spec.hosts && vs.spec.hosts.length === 1 ? 'Host' : 'Hosts'}
                          </div>
                          <div className="list-view-pf-additional-info-item">
                            <span className="pficon pficon-screen"></span>
                            <strong>{vs.spec.gateways ? vs.spec.gateways.length : 0}</strong> {vs.spec.gateways && vs.spec.gateways.length === 1 ? 'Gateway' : 'Gateways'}
                          </div>
                          <div className="list-view-pf-additional-info-item">
                            <span className="pficon pficon-screen"></span>
                            <strong>{vs.spec.http ? vs.spec.http.length : 0}</strong> {vs.spec.http && vs.spec.http.length === 1 ? 'HTTP Rule' : 'HTTP Rules'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item-container container-fluid hidden">
                    <div className="close">
                      <span className="pficon pficon-close"></span>
                    </div>
                    <div className="row">
                      Test
                  </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }

}

