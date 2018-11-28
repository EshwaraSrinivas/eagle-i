import React from "react";
import "./Settings.css";

class Settings extends React.Component {
  state = { appname: "", appurl: "", nonprod: false, prod: false };
  onFormSubmit = event => {
    event.preventDefault();
  };

  onAppNameChange = event => {
    this.setState({ appname: event.target.value });
  };

  onAppUrlChange = event => {
    this.setState({ appurl: event.target.value });
  };

  saveAppData = () => {
      console.log(this.state);
  }

  render() {
    return (
      <div className="settings">
        <div className="ui segment settings-form">
          <div className="form-name">Add Application</div>
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>App name</label>
              <input
                type="text"
                value={this.state.appname}
                onChange={this.onAppNameChange}
              />
            </div>
            <div className="field">
              <label>App url</label>
              <input
                type="text"
                value={this.state.appurl}
                onChange={this.onAppUrlChange}
              />
            </div>
            <div className="field">
              <div className="inline fields">
                <label>Select Environment</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="env"
                      value={this.state.nonprod}
                      onChange={e => {
                        this.setState({prod: false})
                        this.setState({nonprod: this.state.nonprod === false ? true : false})
                      }}
                    />
                    <label>Non prod</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="env"
                      value={this.state.prod}
                      onChange={e => {
                        this.setState({nonprod: false})
                        this.setState({prod: this.state.prod === false ? true : false})
                      }}
                    />
                    <label>prod</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="field button-save">
              <button
                className="ui primary button"
                disabled={this.state.appname === "" || this.state.appurl === "" || (!this.state.nonprod && !this.state.prod)}
                onClick={this.saveAppData}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
