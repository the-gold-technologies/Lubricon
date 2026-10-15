export const getApiBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_CMS_API_URL as string;
};
