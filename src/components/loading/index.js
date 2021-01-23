import React from "react";
import { Spinner, LockBody, RelaseBody, Picture } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleseBody = function LoadingReleaseBody() {
  return <RelaseBody />;
};
