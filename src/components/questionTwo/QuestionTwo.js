import React from 'react';
import PageContainer, { Section, Image } from '../pageContainer/PageContainer';

const Reference = ({ id, text }) => (
  <div style={{ paddingBottom: '30px', paddingLeft: '30px' }}>
    <span style={{ marginLeft: '-30px' }}>[{id}]</span>
    <span style={{ paddingLeft: '30px' }}>
      <em>{text}</em>
    </span>
  </div>
);

const QuestionTwo = () => (
  <PageContainer
    className="question-two"
    title="Have the effects of COVID-19 on the sustainable energy sector impeded North America's ability to satisfy the goals of the Paris Climate Agreement?"
  >
    <Section title="Motivation">
      <p>
        We, the researchers, believe that COVID-19 may have impacted the energy sector,
        and in particular, the sustainable energy sector accorss the world. But, we are
        very interested to find out if the effects of COVID-19 have potentially allowed a
        group of countries to hit targets which were previously unoptainable or have the
        effects prevented a group of countries from hitting targets which they previously
        were on track to hit. This information will allow someone to better understand if
        the emissions of a country are reduced by policy or by chance.
      </p>
    </Section>

    <Section title='Defining "North America"'>
      <p>
        For this question, we will define the scope of “North America” to refer to the
        three largest and most impactful greenhouse gas emitting countries within the
        continent, Canada, Mexico, and the United States of America. “North America” is
        typically defined to include around twenty three (23) sovereign states, but since
        most of those states do not contribute a large amount of greenhouse gas emissions,
        we did not investigate those to prevent issues with gathering data for so many
        separate entities.
      </p>
    </Section>

    <Section title="Method">
      <ol>
        <li>
          Collect and summarize the total determined contributions of North American
          countries through their respective NDCs.
        </li>
        <li>
          Collect predictions of greenhouse gas emissions through 2030 for North American
          countries that were made/computed pre-COVID.
        </li>
        <li>
          Collect predictions of greenhouse gas emissions through 2030 for North American
          countries that were made/computed post-COVID.
        </li>
        <li>
          Compare predictions pre- and post-COVID to determine if North American
          countries' ability to reach their respective NDC targets have changed.
        </li>
      </ol>
    </Section>

    <Section title="Data">
      <ul>
        <li>
          Two types of data will be used for this question:
          <ul>
            <li>
              NDCs that define a country's targets regarding greenhouse gas emissions.
            </li>
            <li>
              Predictions of greenhouse gas emissions for the countries in question
              through 2030 from both before and after COVID.
            </li>
          </ul>
        </li>
        <li>Predictions were sourced from Climate Action Tracker.</li>
        <li>NDCs were sourced directly from the UNFCCC database.</li>
      </ul>
    </Section>

    <Section title="Nationally Determined Contributions">
      <p>
        An NDC, or a <strong>N</strong>ationally <strong>D</strong>etermined{' '}
        <strong>C</strong>ontribution, is a document that is submitted by a country to the
        UN in regards to the Paris Climate Agreement that outlines the given countries
        planned contributions to reductions of greenhouse gas emissions. In essence, NDCs
        are the documents that state the target greenhouse gas emissions for a given
        country by a target year.
      </p>

      <blockquote>
        <p>
          "The Paris Agreement requests each country to outline and communicate their
          post-2020 climate actions, known as their NDCs."<sup>[1][2]</sup>
        </p>
      </blockquote>

      <p>
        In particular, the following countries NDCs are of relevence (click on a country
        for the source NDCs):
      </p>
      <ul>
        <li>
          <a href="https://www4.unfccc.int/sites/NDCStaging/Pages/Party.aspx?party=USA">
            United States of America
          </a>
        </li>
        <li>
          <a href="https://www4.unfccc.int/sites/NDCStaging/Pages/Party.aspx?party=CAN">
            Canada
          </a>
        </li>
        <li>
          <a href="https://www4.unfccc.int/sites/NDCStaging/Pages/Party.aspx?party=MEX">
            Mexico
          </a>
        </li>
      </ul>

      <p>
        For our investigation, we need to determine the target amounts and years for each
        of the three countries in question. We use the NDCs above as our source. This
        information has been summarized in the below table:
      </p>
      <table className="ndc-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Baseline Year</th>
            <th>Target (% Reduction)</th>
            <th>Target (Megatonnes CO2 eq.)</th>
            <th>Target Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              USA<sup>[3]</sup>
            </td>
            <td>2005</td>
            <td>26%</td>
            <td>5,744</td>
            <td>2025</td>
          </tr>
          <tr>
            <td>
              Canada<sup>[4]</sup>
            </td>
            <td>2005</td>
            <td>30%</td>
            <td>523</td>
            <td>2030</td>
          </tr>
          <tr>
            <td>
              Mexico<sup>[5]</sup>
            </td>
            <td>2013</td>
            <td>22%</td>
            <td>763</td>
            <td>2030</td>
          </tr>
        </tbody>
      </table>
    </Section>

    <Section title="Predictions: Pre-COVID">
      <p>
        Below, we show the Climate Action Tracker greenhouse gas emissions predictions
        which were computed before COVID-19 for each of the three countries in question.
      </p>
      <p>
        Within these predictions, we are interested in the predicted range (in megatonnes
        CO2 eq.) of greenhouse gas emissions for each country by that country's target
        year.
      </p>

      <h4>
        United States of America's Prediction<sup>[6]</sup>
      </h4>
      <Image src="./images/question-two/CAT_Predictions_USA_2019Sep.PNG" />
      <p>
        Predicted CO2 eq. emissions by 2025 (target year):{' '}
        <strong>6,273&nbsp;Mt&nbsp;-&nbsp;6,373&nbsp;Mt</strong>
      </p>

      <h4>
        Canada's Prediction<sup>[7]</sup>
      </h4>
      <Image src="./images/question-two/CAT_Predictions_Canada_2019Sep.PNG" />
      <p>
        Predicted CO2 eq. emissions by 2030 (target year):{' '}
        <strong>630&nbsp;Mt&nbsp;-&nbsp;763&nbsp;Mt</strong>
      </p>

      <h4>
        Mexico's Prediction<sup>[8]</sup>
      </h4>
      <Image src="./images/question-two/CAT_Predictions_Mexico_2019Sep.PNG" />
      <p>
        Predicted CO2 eq. emissions by 2030 (target year):{' '}
        <strong>803&nbsp;Mt&nbsp;-&nbsp;843&nbsp;Mt</strong>
      </p>
    </Section>

    <Section title="Predictions: Post-COVID">
      <p>
        Below, we show the Climate Action Tracker greenhouse gas emissions predictions
        which were computed after the start of COVID-19 (once some effects were seen) for
        each of the three countries in question.
      </p>
      <p>
        Within these predictions, we are, once again, interested in the predicted range
        (in megatonnes CO2 eq.) of greenhouse gas emissions for each country by that
        country's target year.
      </p>

      <h4>
        United States of America's Prediction<sup>[9]</sup>
      </h4>
      <Image src="./images/question-two/CAT_Predictions_USA_2020Jul.PNG" />
      <p>
        Predicted CO2 eq. emissions by 2025 (target year):{' '}
        <strong>5,744&nbsp;Mt&nbsp;-&nbsp;6,135&nbsp;Mt</strong>
      </p>

      <h4>
        Canada's Prediction<sup>[10]</sup>
      </h4>
      <Image src="./images/question-two/CAT_Predictions_Canada_2020Sep.PNG" />
      <p>
        Predicted CO2 eq. emissions by 2030 (target year):{' '}
        <strong>603&nbsp;Mt&nbsp;-&nbsp;630&nbsp;Mt</strong>
      </p>

      <h4>
        Mexico's Prediction<sup>[11]</sup>
      </h4>
      <Image src="./images/question-two/CAT_Predictions_Mexico_2020Sep.PNG" />
      <p>
        Predicted CO2 eq. emissions by 2030 (target year):{' '}
        <strong>774&nbsp;Mt&nbsp;-&nbsp;852&nbsp;Mt</strong>
      </p>
    </Section>

    <Section title="Calculations & Results">
      <p>
        The below table outlines the predicted megatonnes of C02 eq. emissions pre- and
        post-COVID for each of the countries, and the total for the three countries.
        Additionally, we calculate the percent difference in predicted greenhouse gas
        emissions for each country and for all three countries.
      </p>
      <table>
        <thead>
          <th>Country</th>
          <th>Pre-COVID</th>
          <th>Post-COVID</th>
          <th>Percent Difference</th>
          <th>Target</th>
        </thead>
        <tbody>
          <tr>
            <td>USA</td>
            <td>6,273&nbsp;Mt&nbsp;-&nbsp;6,373&nbsp;Mt</td>
            <td>5,744&nbsp;Mt&nbsp;-&nbsp;6,135&nbsp;Mt</td>
            <td>-8.80%</td>
            <td>5,744&nbsp;Mt</td>
          </tr>
          <tr>
            <td>Canada</td>
            <td>630&nbsp;Mt&nbsp;-&nbsp;763&nbsp;Mt</td>
            <td>603&nbsp;Mt&nbsp;-&nbsp;630&nbsp;Mt</td>
            <td>-4.38%</td>
            <td>523&nbsp;Mt</td>
          </tr>
          <tr>
            <td>Mexico</td>
            <td>803&nbsp;Mt&nbsp;-&nbsp;843&nbsp;Mt</td>
            <td>774&nbsp;Mt&nbsp;-&nbsp;852&nbsp;Mt</td>
            <td>-3.68%</td>
            <td>763&nbsp;Mt</td>
          </tr>
          <tr style={{ fontWeight: 'bold' }}>
            <td>Total</td>
            <td>7,706&nbsp;Mt&nbsp;-&nbsp;7,979&nbsp;Mt</td>
            <td>7,121&nbsp;Mt&nbsp;-&nbsp;7,617&nbsp;Mt</td>
            <td>-7.89%</td>
            <td>7,030&nbsp;Mt</td>
          </tr>
        </tbody>
      </table>
    </Section>

    <Section title="Conclusion">
      <p>
        From the percent difference in predicted CO2 emissions when comparing pre-COVID to
        post-COVID, we can see that the effects of COVID-19 have indeed assisted North
        America in hitting their emissions targets. Despite these effects though, we can
        see from the total predicted greenhouse gas emissions that North America is still
        predicated to be unable to hit their unconditional contributions as laid out in
        their NDCs.
      </p>
    </Section>

    <Section title="References">
      <Reference
        id={1}
        text="United Nations. (n.d.). Nationally Determined Contributions (NDCs). Retrieved November 28, 2020, from https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement/nationally-determined-contributions-ndcs"
      />
      <Reference
        id={2}
        text='The Paris Agreement". United Nations Treaty Collection. (2016, July 8). Retrieved November 28, 2020, from https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement'
      />
      <Reference
        id={3}
        text="USA. (2016, September 2). USA First NDC. Retrieved November 28, 2020, from https://www4.unfccc.int/sites/NDCStaging/Pages/Party.aspx?party=USA"
      />
      <Reference
        id={4}
        text="Canada. (2017, May 10). Canada First NDC (Updated submission) (English). Retrieved November 28, 2020, from https://www4.unfccc.int/sites/NDCStaging/Pages/Party.aspx?party=CAN"
      />
      <Reference
        id={5}
        text="Mexico. (2016, September 20). Mexico First NDC. Retrieved November 28, 2020, from https://www4.unfccc.int/sites/NDCStaging/Pages/Party.aspx?party=MEX​"
      />
      <Reference
        id={6}
        text="Climate Action Tracker. (2019, September 19). Climate Action Tracker | USA. Retrieved November 28, 2020, from https://climateactiontracker.org/countries/usa/2019-09-19/"
      />
      <Reference
        id={7}
        text="Climate Action Tracker. (2019, September 19). Climate Action Tracker | Canada. Retrieved November 28, 2020, from https://climateactiontracker.org/countries/canada/2019-09-19/"
      />
      <Reference
        id={8}
        text="Climate Action Tracker. (2019, September 19). Climate Action Tracker | Mexico. Retrieved November 28, 2020, from https://climateactiontracker.org/countries/mexico/2019-09-19/"
      />
      <Reference
        id={9}
        text="Climate Action Tracker. (2020, July 30). Climate Action Tracker | USA. Retrieved November 28, 2020, from https://climateactiontracker.org/countries/usa/"
      />
      <Reference
        id={10}
        text="Climate Action Tracker. (2020, September 21). Climate Action Tracker | Canada. Retrieved November 28, 2020, from https://climateactiontracker.org/countries/canada/"
      />
      <Reference
        id={11}
        text="Climate Action Tracker. (2020, September 22). Climate Action Tracker | Mexico. Retrieved November 28, 2020, from https://climateactiontracker.org/countries/mexico/"
      />
    </Section>
  </PageContainer>
);

export default QuestionTwo;
