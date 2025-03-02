import type { Scope } from 'effector';
import type { Component } from 'solid-js';
import { EffectorProvider, RouterProvider } from './providers';

export const Root: Component<{ scope: Scope }> = ({ scope }) => {
  return (
    <EffectorProvider scope={scope}>
      <RouterProvider />
    </EffectorProvider>
  );
};
