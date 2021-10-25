import { useQuery, UseQueryOptions } from "react-query";
import { AxiosError } from "axios";

import axios from "@/utils/request";

export type GetQuestResponse = Quest;

const getQuest = async (id: number) => {
  const { data } = await axios.get<GetQuestResponse>("/quests", { params: { id } });
  return data;
};

export default function useQuest(
  id: number,
  options?: UseQueryOptions<GetQuestResponse, AxiosError>
) {
  return useQuery<GetQuestResponse, AxiosError>(["quest", { id }], () => getQuest(id), options);
}
