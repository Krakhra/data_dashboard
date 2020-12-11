import React from 'react';
import PageContainer, { Section, Image, Reference } from '../pageContainer/PageContainer';
import './Growth.css';
import solar1 from './solar_production.png';
import wind1 from './wind_production.png';
import solar2 from './recent_solor.png';
import wind2 from './recent_wind.png';

const Growth = () => (
  <PageContainer
    className="growth-page"
    title="Will we see growth in different sustainable energy sectors in terms of energy
  production?"
  >
    <Section title="Historical Trends">
      <Image src={solar1} />
      <Image src={wind1} alt="img not found"/>
      <p>
        These Graphs show us energy production from 1990 to 2015. We can see for USA and
        Canada that sustainable energy production is increasing. Although for Canada and
        Mexico growth was very slow. The fact that we never experienced any downward
        trends, it shows that sustainable energy was gaining momentum
      </p>
    </Section>

    <Section title="Recent Data">
      <Image src={solar2} />
      <Image src={wind2} />
      <p>
        These graphs show a more recent picture of energy production in Canada. This is a
        first time in history where Canada's sustainble energy production has decreased.
        Because of COVID there are many delays and we are left with an uncertain future.
      </p>
    </Section>

    <Section title="Data Sources">
      <Reference
        id={1}
        text="https://www.kaggle.com/vtorreslopez/wind-solar-and-nuclear-energy-production"
      />
      <Reference
        id={2}
        text="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2510001501&pickMembers%5B0%5D=1.1&pickMembers%5B1%5D=2.1&cubeTimeFrame.startMonth=04&cubeTimeFrame.startYear=2016&cubeTimeFrame.endMonth=08&cubeTimeFrame.endYear=2020&referencePeriods=20160401%2C20200801"
      />
    </Section>
  </PageContainer>
);

export default Growth;
