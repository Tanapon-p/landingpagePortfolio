import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Tanapon Portfolio`;
  });
  return null;
};
