/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MainLayout } from './components/templates/MainLayout';
import { Preview } from './components/Preview';
import { Controls } from './components/Controls';
import { CodeOutput } from './components/CodeOutput';
import { useNeumorphism } from './hooks/useNeumorphism';

export default function App() {
  const { state, updateState, reset, background, boxShadow, cssCode, getNeumorphicStyle } = useNeumorphism();

  return (
    <MainLayout backgroundColor={state.color}>
      <Controls 
        state={state} 
        onUpdate={updateState} 
        onReset={reset}
        getStyle={getNeumorphicStyle} 
      />
      <Preview 
        background={background} 
        boxShadow={boxShadow} 
        radius={state.radius} 
        size={state.size} 
      />
      <div className="lg:col-span-12">
        <CodeOutput cssCode={cssCode} />
      </div>
    </MainLayout>
  );
}


