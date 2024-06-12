/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect } from 'react';
import { DesignSystem } from '@finos/a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringCategorySelectable } from '../../components/editors/StringCategorySelectable';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import './ImagesMolecule.css';


interface Props {
    designSystem: DesignSystem;
}

export const PieMolecule: React.FC<Props> = ({ designSystem }) => {


    return (
        <div>
            <HeadingSection title="Apply Styles" heading="Images">
                <p>Configure settings that affect the appearance of images.</p>
            </HeadingSection>
            <ExampleSection>
                <div className="row">
                    <div className="col-12">
                        <h4>List Images</h4>
                        <div className="example">
                            <div className="caption">Sample Pie Chart</div>

                        </div>
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
