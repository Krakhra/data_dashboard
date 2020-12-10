import React from 'react';
import './Growth.css';
import solar1 from './solar_production.png';
import wind1 from './wind_production.png';
import solar2 from './recent_solor.png';
import wind2 from './recent_wind.png'

const Growth = () =>(
  <div className = "Growth">
    <div className = "growthTitleContainer">
      <p className = "growthTitle">Will we see growth in different sustainable energy sectors in terms of energy production?</p>
    </div>

    <div className ="growthHistoryContainer">
      <p>Historical Trends:</p>
    </div>
    <div className = "imageContainer">
      <div className = "image1">  
        <img style={{width:'600px',height:'auto'}}src = {solar1}/>
      </div>
      <div className = "image2">
        <img style={{width:'600px',height:'auto'}}src = {wind1}/>
      </div>
    </div>
    <div className ="growthDescriptionContainer">
      <p>These Graphs show us energy production from 1990 to 2015. We can see for USA and Canada that sustainable energy production is increasing. Although for Canada and Mexico growth was very slow. The fact that we never experienced any downward trends, it shows that sustainable energy was gaining momentum</p>
    </div>

    <div className ="growthHistoryContainer">
      <p >Recent Data:</p>
    </div>

    <div className = "imageContainer">
      <div className = "image1">  
        <img style={{width:'600px',height:'auto'}}src = {solar2}/>
      </div>
      <div className = "image2">
        <img style={{width:'600px',height:'auto'}}src = {wind2}/>
      </div>
    </div>
    <div className ="growthDescriptionContainer">
      <p>These graphs show a more recent picture of energy production in Canada. This is a first time in history where Canada's sustainble energy production has decreased. Because of COVID there are many delays and we are left with an uncertain future.</p>
    </div>

    <div className ="growthHistoryContainer">
      <p >Data Sources:<span style={{color:'rgb(108, 108, 110)'}}>https://www.kaggle.com/vtorreslopez/wind-solar-and-nuclear-energy-production, </span></p>
      <p><span style={{color:'rgb(108, 108, 110)'}}>https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2510001501&pickMembers%5B0%5D=1.1&pickMembers%5B1%5D=2.1&cubeTimeFrame.startMonth=04&<br/>cubeTimeFrame.startYear=2016&cubeTimeFrame.endMonth=08&cubeTimeFrame.endYear=2020&referencePeriods=20160401%2C20200801 </span></p>
    </div>
  </div>
);

export default Growth;