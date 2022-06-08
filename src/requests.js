export const realTime = async (coin) => {
  const baseUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
  const result = await fetch(baseUrl);
  const data = await result.json();
  const value = data.bitcoin.usd.toFixed(2);
  console.log(value);
  anyTime(coin, "30-12-2017");
  return value;
};

export const anyTime = async (coin, date) => {
  const baseUrl = `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}`;
  const result = await fetch(baseUrl);
  const data = await result.json();
  const value = data["market_data"]["current_price"].usd.toFixed(2);
  console.log(value);
  return value;
};
