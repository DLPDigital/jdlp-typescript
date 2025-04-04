export const getEnvVariable = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
};

export const config = {
  contentful: {
    spaceId: getEnvVariable('CONTENTFUL_SPACE_ID'),
    accessToken: getEnvVariable('CONTENTFUL_ACCESS_TOKEN'),
    mainPageId: getEnvVariable('MAIN_CV_PAGE'),
  },
};