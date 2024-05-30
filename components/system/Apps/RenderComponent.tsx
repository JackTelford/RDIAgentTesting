import dynamic from "next/dynamic";
import React, { memo, FC } from "react"; // Ensure FC is imported
import { ErrorBoundary } from "components/pages/ErrorBoundary";
import ComponentError from "components/system/Apps/ComponentError";
import { useMouseClickTracker } from "../../../hooks/EventTracker";

const Window = dynamic(() => import("components/system/Window"));

export type ComponentProcessProps = {
  id: string;
};

type RenderComponentProps = {
  Component: React.ComponentType<ComponentProcessProps>;
  hasWindow?: boolean;
  id: string;
};

const RenderComponent: FC<RenderComponentProps> = ({
  Component,
  hasWindow = true,
  id,
}: RenderComponentProps) => {
  useMouseClickTracker({ logToConsole: true });

  const SafeComponent = (
    <ErrorBoundary FallbackRender={<ComponentError />}>
      <Component id={id} />
    </ErrorBoundary>
  );

  return hasWindow ? <Window id={id}>{SafeComponent}</Window> : SafeComponent;
};

export default memo(RenderComponent);

// path components/system/Apps/RenderComponent.tsx
