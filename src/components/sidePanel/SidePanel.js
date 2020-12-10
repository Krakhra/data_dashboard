import React from 'react'
import './SidePanel.css'

class SidePanel extends React.Component{
  render(){
    return(
      <div className = "SidePanel">
        <div style= {{marginTop:'50px'}}>
          <a className = "homelink" href = "/">Sustainable Energy</a>
        </div>

        <div style={{marginTop:'100px'}}>
          <p className = "navLinkSpacing"><i className="fas fa-book"></i><a  className = "navLinkStyle" href = "/literature">Literature Reviews</a></p>
          <p className = "navLinkSpacing"><i className="fas fa-book"></i><a  className = "navLinkStyle" href = "/literature">Link 2</a></p>
          <p className = "navLinkSpacing"><i className="fas fa-book"></i><a  className = "navLinkStyle" href = "/literature">Link 3</a></p>
          <p className = "navLinkSpacing"><i className="fas fa-book"></i><a  className = "navLinkStyle" href = "/literature">Link 4</a></p>
          <p className = "navLinkSpacing"><i className="fas fa-book"></i><a  className = "navLinkStyle" href = "/literature">Link 5</a></p>
        </div>
      </div>
    );
  }
}

export default SidePanel;