import SidebarCard from "./SidebarCard";
import { fetchTasks } from "helpers/fetchers";

import "styles/Sidebar.css";

interface ISideBarInfo {
  activeTask: number;
  setActiveTask: (index: number) => void;
}

const Sidebar = ({ activeTask, setActiveTask }: ISideBarInfo) => {
  const updateActive = (index: number) => {
    setActiveTask(index);
  };
  const questions = fetchTasks().map((task) => task.question);
  const questionCards = questions.map((title: string, index: number) => {
    const link = "#";

    return activeTask == index ? (
      <SidebarCard
        key={index}
        onClick={updateActive}
        className={"active"}
        link={link}
        cardTitle={title}
        index={index}
      />
    ) : (
      <SidebarCard
        key={index}
        onClick={updateActive}
        link={link}
        cardTitle={title}
        index={index}
      />
    );
  });

  return <div className="sideBar">{questionCards}</div>;
};

export default Sidebar;
