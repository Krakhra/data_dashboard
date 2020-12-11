import React from 'react';
import './Methods.css';
import PageContainer, { Section, Image} from '../pageContainer/PageContainer';
import graph from './graph.png';
import eqn from './equation.png';
import eqn2 from './equation2.png';
import eqn3 from './equation3.png';
import eqn4 from './equation4.png'

const Methods = () =>(
  <PageContainer 
    className="methods-page"
    title="Methods used to Investigate how COVID-19 Affected the Sustainable Energy Sector"
  >
    <Section title = "List of Methods Used">
      <ol>
        <li>
          Logistic Regression
        </li>
        <li>
          Simple Linear Regression
        </li>
        <li>
          Percent Change, percent change is a percentage used to represent how a value has changed in time  between two separate readings. That is, if you want to see the change between an old and a new value, you can use percentage change to determine that.
        </li>
        <li>
          Visual Trends, data gathered and graphed to visually account for what is happening in the data.
        </li>
      </ol>
    </Section>

    <Section title = "Logistic Regression Analysis">
      <p>
        A logistic regression was used to model the proportion of electricity
        generation coming from wind and solar sources over time. Logistic regression
        uses a logistic function to create a model of binary data. Binary data is usually 
        represented by 1 for a success and 0 for a failure of whatever is being measured. In this case, 
        our binary data uses each kWh generated from solar or wind sources as success and each kWh from 
        any other source as a 0. The resulting model represents the trend of growth for the proportion of 
        electricity coming from solar and wind power generation over time.
      </p>

      <Image src={graph}/>

      <p>
        In comparison to linear regression, the outcome of a logistic regression will model the dependent variable
        (y-axis) between 0 and 1. The logistic regression is more appropriate for modelling binary or proportional 
        data as these values can only exist between 0 and 1, where a linear model generates impossible values that 
        are less than 0 and greater than 1.
      </p>

      <p>
        <strong>The range of predicted values is calculated using this function: </strong>
      </p>
      <Image src={eqn}/>

      <p>
        In our case for predicting wind and solar proportions, we used a 95% prediction interval (α = 0.05), resulting in a range of values that we can expect 95% of the actual future data to fall within. 
      </p>
    </Section>

    <Section title = "Least squares method - simple linear regression">
      <p>
        Often the simplest explanation is the best. Simple linear regression is used when the dependent and independent 
        data trend in a straight line. When simple linear regression is carried out we end up with two parameters that 
        describe the data as a straight line: the intercept of the y-axis (b0) and the slope of the line (b1). To find 
        these parameters we use a method called Least Squares Regression, which will minimize the residuals (distance between 
        a data point and the regression line). Minimizing residuals will give us a regression line that best fits the data, 
        also known as a "line of best fit".
      </p>

      <p>
        To do a Least Squares Regression we must first calculate a few parameters from our dataset:  Σx, Σy, Σx², Σxy and n 
        (Σ means sum of, n is the number of data points). Once we have these parameters we can use them to calculate our parameters 
        for the regression line (b0, b1) using these equations:
      </p>
      <Image src={eqn2}/><br/>
      <Image src={eqn3}/>
      <p>Now just plug b0 and b1 into this equation and you have your line of best fit!</p>
      <Image src={eqn4}/><br/>
    </Section>
  </PageContainer>
);

export default Methods;