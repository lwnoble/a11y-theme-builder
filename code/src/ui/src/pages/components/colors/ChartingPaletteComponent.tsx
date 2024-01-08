/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
 import React from 'react';
 import { HeadingSection } from '../../content/HeadingSection';
 import { ComputedColorSwatch } from '../../../components/ComputedColorSwatch';
 import { ExampleSection } from '../../content/ExampleSection';

 interface Props {
 }

 export const ChartingPaletteComponent: React.FC<Props> = ({}) => {

     return (
         <div>
             <HeadingSection title="Colors" heading="Charting Colors" />
             <ExampleSection>
                 <div className="theme-colors">
                     <ComputedColorSwatch
                         className={"c1"}
                         label={"Chart Color 1"}
                     />
                     <ComputedColorSwatch
                         className={"c2"}
                         label={"Chart Color 2"}
                     />
                     <ComputedColorSwatch
                         className={"c3"}
                         label={"Chart Color 3"}
                     />
                     <ComputedColorSwatch
                         className={"c4"}
                         label={"Chart Color 4"}
                     />
                     <ComputedColorSwatch
                         className={"c5"}
                         label={"Chart Color 5"}
                     />
                     <ComputedColorSwatch
                         className={"c6"}
                         label={"Chart Color 6"}
                     />
                     <ComputedColorSwatch
                         className={"c7"}
                         label={"Chart Color 7"}
                     />
                     <ComputedColorSwatch
                         className={"c8"}
                         label={"Chart Color 8"}
                     />
                     <ComputedColorSwatch
                         className={"c9"}
                         label={"Chart Color 9"}
                     />
                     <ComputedColorSwatch
                         className={"c8"}
                         label={"Chart Color 10"}
                     />
                 </div>
             </ExampleSection>
         </div>
     );
 }
