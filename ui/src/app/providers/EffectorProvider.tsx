import type { Scope } from 'effector';
import { Provider } from 'effector-solid';
import type { ParentComponent } from 'solid-js';

export const EffectorProvider: ParentComponent<{ scope: Scope }> = ({ children, scope }) => {
  return <Provider value={scope}>{children}</Provider>;
};
