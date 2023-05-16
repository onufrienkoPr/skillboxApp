import axios from "axios";

export interface Topic {
  id: number;
  title: string;
  content: string;
}

export const getTopics = async (): Promise<Topic[]> => {
  const response = await axios.get<Topic[]>("http://localhost:3000/topics");
  return response.data;
};

export const getOneTopic = async (id: number): Promise<Topic> => {
  const response = await axios.get<Topic[]>(
    `http://localhost:3000/topics?id=${id}`
  );
  return response.data[0];
};
