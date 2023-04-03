import "./SideBar.css";
import Card from "./Card";
import { useContext, useState } from "react";
import TitlesContext from "./TitlesContext";

const SideBar = () => {
  const [activeTask, setActiveTask] = useState(0);

  const updateActive = (index: number) => {
    setActiveTask(index);
  };

  const taskTitles = useContext(TitlesContext);
  const titleCards = [...taskTitles, ...taskTitles].map(
    (title: string, index: number) => {
      const link = "#";

      return activeTask == index ? (
        <Card
          key={index}
          onClick={updateActive}
          className={"active"}
          link={link}
          cardTitle={title}
          index={index}
        />
      ) : (
        <Card
          key={index}
          onClick={updateActive}
          link={link}
          cardTitle={title}
          index={index}
        />
      );
    }
  );

  return <div className="sideBar">{titleCards}</div>;
};

export default SideBar;
