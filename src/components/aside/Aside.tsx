import React, { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTopics } from "../../api/topicApi";
import { SidebarContainer, SidebarList, SidebarListItem } from "./AsideStyle";

interface Topic {
  id: number;
  title: string;
}

const Aside: FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchAllTopics = async () => {
      const data = await getTopics();
      setTopics(data);
    };
    fetchAllTopics();
  }, []);

  return (
    <SidebarContainer>
      <SidebarList>
        {topics.map((topic) => (
          <SidebarListItem key={topic.id}>
            <NavLink to={`/topics/${topic.id}`}>{topic.title}</NavLink>
          </SidebarListItem>
        ))}
      </SidebarList>
    </SidebarContainer>
  );
};

export default Aside;
