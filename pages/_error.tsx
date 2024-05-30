import { type ErrorProps } from "next/error";
import React from "react";

const PageError = ({ statusCode = 0 }: ErrorProps): React.ReactElement => (
  <>Error status code: {statusCode}</>
);

export default PageError;
