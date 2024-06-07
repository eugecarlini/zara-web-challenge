import { API_BASE_URL } from "@/utils/constants";
import { generateQueryString } from "@/utils/generateQueryStrings";

export const generateUrl = (
  route: string,
  path: string = "",
  additionalParams: string = ""
): string => {
  return `${API_BASE_URL}${route}${path}${generateQueryString()}${additionalParams}`;
};
