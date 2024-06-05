import { useCallback, useEffect, useState } from "react";

const useCurrency = (currency) => {
  const [data, setData] = useState({});

  const fetchCurrencyData = useCallback(() => {
    if (currency) {
      fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      )
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((error) =>
          console.error("Error fetching currency data:", error)
        );
    }
  }, [currency]);

  useEffect(() => {
    fetchCurrencyData();
  }, [fetchCurrencyData]);

  return data;
};

export default useCurrency;
