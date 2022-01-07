import React, {FC} from "react";
import { Filter } from "./Filter/Filter";
import { Result } from "./Result/Result";

const Main: FC = () => {
	return (
    <>
      <Filter/>
      <Result/>
    </>
  );
};

export {Main};