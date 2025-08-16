import React from "react";
import { SidebarAgentMaintenance } from "./components/SidebarAgentMaintenance";
import InterfaceUser from "../Global/InterfaceUser";

export default function InterfaceAgent() {
  return (
    <InterfaceUser SidebarUser={SidebarAgentMaintenance} />
  );
}
