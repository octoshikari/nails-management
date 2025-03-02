import type { Component, JSX } from 'solid-js';

export const Root: Component<{ children: JSX.Element }> = (props) => {
  return (
    <div>
      <div>Layout</div>
      <div>{props.children}</div>
    </div>
  );
};
