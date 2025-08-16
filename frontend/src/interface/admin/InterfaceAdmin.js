import React from "react";

import { SidebarAdmin } from "./components/SidebarAdmin";
import InterfaceUser from "../Global/InterfaceUser";

export default function InterfaceAdmin() {


  return (
    <InterfaceUser SidebarUser={SidebarAdmin} />
  );
}
