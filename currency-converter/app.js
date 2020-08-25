const dateIndicator = document.querySelector('#date');
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const endpoint = 'https://api.exchangeratesapi.io/latest';

const form = document.querySelector('.app form');

// This is going to store all the rates
const ratesByBase = {};

function getDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

// dateIndicator.textContent = getDate();

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value=""${currencyCode}>${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}

const optionsHTML = generateOptions(currencies);

// Populate the options (Run the function ONCE and store it in a variable)
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

async function fetchRates(base = 'USD') {
  const response = await fetch(`${endpoint}?base=${base}`);
  const rates = await response.json();
  return rates;
}

async function convert(amount, from, to) {
  // We could fetch the rates each time but
  // First check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `Oh no... We don't have ${from} to convert to ${to}. So gets go get it.`
    );
    const rates = await fetchRates(from);
    console.log(rates);
    // Store them for next time
    ratesByBase[from] = rates;
  }

  // Convert the amount that they passed in.
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

async function handleInput(event) {
  console.log(`test ${fromInput.value}, ${fromSelect.value}, ${toSelect.value}
    `);
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  console.log(rawAmount);
}

form.addEventListener('input', handleInput);
