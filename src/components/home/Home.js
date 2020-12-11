import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer, { Section } from '../pageContainer/PageContainer';

const Home = () => (
  <PageContainer title="CIS4020: Sustainable Energy">
    <Section>
      <p>
        Our team investigated how COVID-19 affected the sustainable energy sector in North
        America. To focus our investigation, 4 questions were chosen to be answered.
      </p>
      <ol>
        <li>
          Has COVID-19 increased or decreased the share of sustainable energy production
          within the energy sector of North America? <Link to="/growth">View here.</Link>
        </li>
        <li>
          Have the effects of COVID-19 on the sustainable energy sector impeded North
          America’s to satisfy the various goals of the Paris Climate Agreement?{' '}
          <Link to="/question-two">View here.</Link>
        </li>
        <li>
          Will we see growth in different sustainable energy sectors in terms of energy
          production? <Link to="/question-three">View here.</Link>
        </li>
        <li>
          Will sustainable energy production realistically replace fossil fuel based
          energy production in the future? <Link to="/question-four">View here.</Link>
        </li>
      </ol>
    </Section>
  </PageContainer>
);

export default Home;
