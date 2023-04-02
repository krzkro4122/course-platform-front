import "./SideBar.css";
import Card from "./Card";
import { useContext } from "react";
import TitlesContext from "./TitlesContext";

const SideBar = () => {
  const taskTitles = useContext(TitlesContext);
  const titleCards = [...taskTitles, ...taskTitles].map(
    (title: string, index: number) => {
      const link = "#";
      return <Card key={index} link={link} cardTitle={title} />;
    }
  );

  return <div className="sideBar">{titleCards}</div>;
};

export default SideBar;
