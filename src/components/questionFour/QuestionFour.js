import React from 'react';
import PageContainer, { Section, Image } from '../pageContainer/PageContainer';

const QuestionFour = () => (
  <PageContainer title="Will sustainable energy production realistically replace fossil fuel based energyproduction in the future?">
    <Section>
      <Image src="./images/question-four/1-1.PNG" />
      <Image src="./images/question-four/1-2.PNG" />
      <p>
        <strong>Data Reference:</strong>{' '}
        <a href="https://openei.org/apps/TCDB/">https://openei.org/apps/TCDB/</a>
      </p>
      <p>
        As can be seen, solar and onshore wind are getting cheaper overtime while fossil
        fuel-based methods are static in terms of cost.
      </p>
    </Section>
    <hr />
    <Section>
      <Image src="./images/question-four/2-1.PNG" />
      <Image src="./images/question-four/2-2.PNG" />
      <p>
        <strong>Data Reference:</strong>{' '}
        <a href="https://www.iea.org/data-and-statistics?country=USA&fuel=Energy%20supply&indicator=ElecGenByFuel">
          https://www.iea.org/data-and-statistics?country=USA&fuel=Energy%20supply&indicator=ElecGenByFuel
        </a>
      </p>
      <p>
        The United States has had major growth in their wind and solar energy production,
        while also phasing out coal for natural gas.
      </p>
    </Section>
    <hr />
    <Section>
      <Image src="./images/question-four/3-1.PNG" />
      <Image src="./images/question-four/3-2.PNG" />
      <p>
        <strong>Data Reference:</strong>{' '}
        <a href="https://www.iea.org/data-and-statistics?country=CANADA&fuel=Energy%20supply&indicator=ElecGenByFuel">
          https://www.iea.org/data-and-statistics?country=CANADA&fuel=Energy%20supply&indicator=ElecGenByFuel
        </a>
      </p>
      <p>
        The majority of Canada's energy generation is already from sustainable sources,
        with large proportions coming from hydroelectric and nuclear. The growth rate of
        onshore wind is relatively high with solar growing at a moderate rate. The share
        of coal and natural gas are largely due to Alberta which sources over 90% of their
        energy from coal and natural gas.
      </p>
    </Section>
  </PageContainer>
);

export default QuestionFour;
