import { useQuery, UseQueryOptions } from "react-query";

import axios from "@/utils/request";

export interface GetQuestsResponse {
  quests: Quest[];
}

const getQuests = async () => {
  const { data } = await axios.get<GetQuestsResponse>("/quests");
  return data;
};

export default function useQuests(options?: UseQueryOptions<GetQuestsResponse, Error>) {
  return useQuery<GetQuestsResponse, Error>(["quests"], getQuests, options);
}
