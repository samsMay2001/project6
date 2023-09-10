// import { Cat } from "phosphor-react";
import React, 
{
  // Suspense,
  // lazy
} from "react";
import Chats from "./Chat";

// Dynamic import 
// const Cat = lazy(()=> import('../../components/Cat'))

const GeneralApp = () => {

  return (
    <>
      <Chats/>
    </>
  );
};

export default GeneralApp;
