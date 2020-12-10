import React from 'react';
import './LiteratureReview.css';

class LiteratureReview extends React.Component{
  render(){
    return(
      <div className = "LiteratureReview">
        <div className = "titleContainer">
          <p className = "literatureTitle">Literature Review</p>
        </div>

        <div className = "overviewContainer">
          <p className = "overview"> <span style={{fontWeight:'bold'}}>Problem Overview</span>: How has COVID-19 impacted the sustainable energy transition in North America</p>
        </div>

        <div className = "overviewContainer">
          <p className = "review"> The COVID-19 pandemic has impacted almost every aspect of our lives. The pandemic has has caused delays in many renewable energy manufacturing facilities, and supply chains. In return many sustainable energy companies are slowing down which further delays the transition into sustainable energy. For a long time sustainable energy was trending upwards, but due to the economical burden facing many people, the sustainable energy sector is experiencing negative effects. It is still too early to tell how bad these effects will be in the long run, but sustainable energy policies need to be reconsidered.</p>
        </div>

        <div className = "overviewContainer">
          <p className = "cite"> <span style={{fontWeight:'bold'}}>Citation</span>: S. Ehsan Hosseini, An Outlook on the Global Development of Renewable and
            Sustainable Energy at the Time of Covid-19, Energy Research & Social Science (2020), doi: https://doi.org/
            10.1016/j.erss.2020.101633
          </p>
        </div>
      </div>
      
    );
  }
}
export default LiteratureReview;