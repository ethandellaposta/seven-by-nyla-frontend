export const getImageSrc = (url) =>
  process.env.NODE_ENV == "development"
    ? `${process.env.REACT_APP_BACKEND_URL}${url}`
    : url;
