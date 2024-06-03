import { useState } from "react";

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return { loading, setLoading, error, setError };
};
