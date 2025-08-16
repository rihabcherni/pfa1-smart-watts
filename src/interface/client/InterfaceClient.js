import React from "react";

import { SidebarClient } from "./components/SidebarClient";
import InterfaceUser from "../Global/InterfaceUser";

export default function InterfaceClient() {


  return (
    <InterfaceUser SidebarUser={SidebarClient} />
  );
}
