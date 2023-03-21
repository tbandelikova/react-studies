import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
      <main>
        <div className="wrapper two-columns">
          <div className="formcontainer">
            <form className="form" action="">
              <div className="form-element">
                <label htmlFor="textInput">Name:</label>
                <input type="text" name="name" id="textInput" />
              </div>
              <div className="form-element">
                <label htmlFor="dateInput">Birthday:</label>
                <input type="date" name="date" id="dateInput" />
              </div>
              <div className="form-element">
                <div className="switch">
                  <input type="radio" id="male" name="sex" value="Male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" id="female" name="sex" value="Female" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="form-element">
                <label className="select" htmlFor="location">
                  Current location:
                  <select>
                    <option value="Belarus">Belarus</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Poland">Poland</option>
                    <option value="Lithuania">Lithuania</option>
                  </select>
                </label>
              </div>
              <div className="form-element">
                <input className="file" type="file" accept="image/*" />
              </div>
              <div className="form-element form-submit">
                <input className="submit" type="submit" value="Send" />
              </div>
            </form>
          </div>
          <div className="form-cards">Card here</div>
        </div>
      </main>
    );
  }
}

export default Forms;
