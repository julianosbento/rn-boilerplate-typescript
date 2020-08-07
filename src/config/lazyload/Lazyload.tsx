import React from 'react';

export const ReactLazyPreload = (
  importStatement: () => Promise<{ default: React.ComponentType<any> }>
) => {
  const Component = React.lazy(importStatement);
  //@ts-ignore
  Component.preload = importStatement;
  return Component;
};
