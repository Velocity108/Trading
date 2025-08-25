// TradingView chart
new TradingView.widget({
  container_id: "tradingview_chart",
  symbol: "BINANCE:BTCUSDT",
  interval: "5",
  timezone: "Etc/UTC",
  theme: "dark",
  style: "1",
  locale: "en",
  toolbar_bg: "#0d1117",
  enable_publishing: false,
  allow_symbol_change: true,
  hideideas: true
});

// Place order function
async function placeOrder(side) {
  const symbol = document.getElementById('symbol').value.toUpperCase();
  const amount = document.getElementById('amount').value;
  const margin = document.getElementById('margin').checked; // if you add a margin toggle checkbox

  try {
    const response = await fetch('https://<your-render-backend-url>/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symbol, side, quantity: amount, margin })
    });
    const data = await response.json();
    alert(JSON.stringify(data));
  } catch (error) {
    alert('Error placing order: ' + error.message);
  }
}
