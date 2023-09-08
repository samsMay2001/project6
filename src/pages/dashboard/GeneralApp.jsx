// import { Cat } from "phosphor-react";
import React, {Suspense,
  // lazy
} from "react";

// Dynamic import 
// const Cat = lazy(()=> import('../../components/Cat'))

const GeneralApp = () => {

  return (
    <>
      <Suspense fallback="loading..">
        {/* <Cat></Cat> */}
      </Suspense>
    </>
  );
};

export default GeneralApp;
