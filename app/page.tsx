"use client"

import Image from "next/image";
import Tasks from "./components/Tasks/Tasks";
import { useGlobalState } from "./context/GlobalProvider";

export default function Home() {
  const {tasks} = useGlobalState();
  return <Tasks title="All Tasks" tasks={tasks}/>;
}
