import React from "react";

import { storiesOf } from "@storybook/react";
import MovieInfo from "./MovieInfo";

storiesOf("Components|MovieInfo", module).add("default", () => {
  return <MovieInfo></MovieInfo>;
});
