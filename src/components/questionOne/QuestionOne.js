import React from 'react';
import PageContainer, { Section, Image, Reference} from '../pageContainer/PageContainer';
import graph1 from './graph2.png';
import graph2 from './graph1.png';

const QuestionOne = ()=>(
  <PageContainer
    className="QuestionOne"
    title="Has COVID-19 increased or decreased the share of sustainable energy production within the energy sector of North America?"
  >
    <Section title="Share of renewable energy production throughout OECD countries">
      <Image src={graph1}/>
      <p>
        This visualization shows the share of non-renewable and renewable energy production. We can see that renewable energy share is
        increasing over time.
      </p>
    </Section>

    <Section title ="Logistic modelling of wind and solar electricity generation in Canada and USA">
      <Image src={graph2}/>
      <p>
        Using logistic modeling we can predict what solar and wind growth rate would be late in a non-pandemic scenario
        from stats canada we have the first 2 quarters of 2020, represented as the 2 red points
        these quarters produced 25% less than the predicted production, and is possibly due to project delays due to COVID-19
      </p>
    </Section>

    <Section title = "References">
      <Reference
        id={1}
        text="https://www.iea.org/articles/key-electricity-trends-2019"
      />
      <Reference
        id={2}
        text="https://www.iea.org/data-and-statistics?country=WEONAM&fuel=Energy%20supply&indicator=ElecGenByFuel "
      />
      <Reference
        id={3}
        text="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2510001501"
      />
    </Section>
  </PageContainer>
);

export default QuestionOne;