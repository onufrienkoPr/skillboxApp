import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Topic, getOneTopic } from "../../api/topicApi";
import { ContentContainer, ContentText, ContentTitle } from "./ContentStyle";

const Content: FC = () => {
  const { id } = useParams<string>();
  const [topic, setTopic] = useState<Topic | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchOneTopic = async () => {
      if (!isNaN(Number(id))) {
        const data = await getOneTopic(Number(id));
        setTopic(data);
      } else {
        nav("/");
      }
    };
    fetchOneTopic();
  }, [id]);

  if (!topic) {
    return null;
  }

  return (
    <ContentContainer>
      <ContentTitle>{topic.title}</ContentTitle>
      <ContentText>{topic.content}</ContentText>
    </ContentContainer>
  );
};

export default Content;
