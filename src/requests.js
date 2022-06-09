export const realTimeRequest = async () => {
  const baseUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`;
  const result = await fetch(baseUrl);
  const data = await result.json();
  const value = data.bitcoin.usd.toFixed(2);
  return value;
};

export const anyTime = async (coin, date, base) => {
  const baseUrl = `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}`;
  const result = await fetch(baseUrl);
  const data = await result.json();
  if (data.error === "invalid date") {
    return undefined;
  }
  const value = data["market_data"]["current_price"][base].toFixed(2);
  return value;
};
