import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lowerCurrency = currency.toLowerCase();
        const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lowerCurrency}.json`);
        const json = await res.json();
        setData(json[lowerCurrency]);
      } catch (err) {
        console.error("Failed to fetch currency data:", err);
        setData({});
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
