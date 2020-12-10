import React from 'react';
import PageContainer, { Section } from '../pageContainer/PageContainer';

import './QuestionTwo.css';

const QuestionTwo = () => (
  <PageContainer
    className="question-two"
    title="Have the effects of COVID-19 on the sustainable energy sector impeded North America's ability to satisfy the goals of the Paris Climate Agreement?"
  >
    <Section title="Motivation">
      <p>stuff stuff?</p>
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
          post-2020 climate actions, known as their NDCs."
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
            <td>USA</td>
            <td>2005</td>
            <td>26%</td>
            <td>5,744</td>
            <td>2025</td>
          </tr>
          <tr>
            <td>Canada</td>
            <td>2005</td>
            <td>30%</td>
            <td>523</td>
            <td>2030</td>
          </tr>
          <tr>
            <td>Mexico</td>
            <td>2013</td>
            <td>22%</td>
            <td>763</td>
            <td>2030</td>
          </tr>
        </tbody>
      </table>
    </Section>

    <Section title="Predictions: Pre-COVID"></Section>

    <Section title="Predictions: Post-COVID"></Section>

    <Section title="Conclusion"></Section>
  </PageContainer>
);

export default QuestionTwo;
