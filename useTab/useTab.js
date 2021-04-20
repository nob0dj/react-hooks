import { useState } from "react";

export default function useTab(initialTabIndex, tabs) {
  const [currentTabIndex, setCurrentTabIndex] = useState(initialTabIndex);

  return {
    currentTab: tabs[currentTabIndex],
    setCurrentTabIndex
  };
}
