/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { DesignSystem } from '@finos/a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringCategorySelectable } from '../../components/editors/StringCategorySelectable';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import './ImagesMolecule.css';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    designSystem: DesignSystem;
}

export const PieChartMolecule: React.FC<Props> = ({ designSystem }) => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div>
            <HeadingSection title="Apply Styles" heading="Pie Chart">
                <p>Configure settings that affect the appearance of pie charts.</p>
            </HeadingSection>
            <ExampleSection>
                <div className="row">
                    <div className="col-12">
                        <Pie data={data} />
                    </div>
                </div>
                <SettingsSection>
                    <div className="row">
                        <div className="col-12">
                          <div className="formRow">

                          </div>
                          <div className="formRow">

                          </div>
                        </div>
                    </div>
                </SettingsSection>
            </ExampleSection>

        </div >
    )
}
