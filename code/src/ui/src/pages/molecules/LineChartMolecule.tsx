/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, Legend, LineElement, LinearScale, PointElement, Title, Tooltip} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DesignSystem } from '@finos/a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringCategorySelectable } from '../../components/editors/StringCategorySelectable';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import './ImagesMolecule.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
    designSystem: DesignSystem;
}

export const LineChartMolecule: React.FC<Props> = ({ designSystem }) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [600, -600, -650, -650, 500, 300, -1000],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [400, -900, -400, -1000, -400, -975, -300],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

    return (
        <div>
            <HeadingSection title="Apply Styles" heading="Line Chart">
                <p>Configure settings that affect the appearance of line charts.</p>
            </HeadingSection>
            <ExampleSection>
                <div className="row">
                    <div className="col-12">
                        <Line data={data} />
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
