<template>
  <div class="container py-5">
    <h2>Pip Value Calculator</h2>
    <form id="pip-calc-form">
      <div class="mb-3">
        <label for="accountCurrency" class="form-label">Account Currency</label>
        <select v-model="accountCurrency" id="accountCurrency" class="form-select">
          <option value="" disabled selected>--Select Currency--</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="JPY">JPY</option>
          <option value="NZD">NZD</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="currencyPair" class="form-label">Currency Pair</label>
        <select v-model="selectedPair" id="currencyPair" class="form-select">
          <option value="" disabled selected>--Select Pair--</option>
          <option v-for="pair in majorPairs" :key="pair" :value="pair">{{ pair }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="tradeSize" class="form-label">Trade Size (lots)</label>
        <input v-model="tradeSize" type="number" class="form-control" id="tradeSize" step="0.01" min="0.01" required />
      </div>

      <div class="mb-3">
        <label for="pipAmount" class="form-label">Pip Amount</label>
        <input v-model="pipAmount" type="number" class="form-control" id="pipAmount" step="1" min="1" required />
      </div>

      <button @click="calculatePipValue" type="button" class="btn btn-primary" :disabled="!canCalculate">Calculate Pip Value</button>
    
      <div v-if="pipValue != null" class="mt-3">
        Pip Value: <strong>{{ pipValue.toFixed(4) }}</strong> {{ accountCurrency }}
      </div>
    </form>
  </div>
</template>

<script>
  import { ref, computed, onMounted } from 'vue'
  
  export default {
    setup(){
      
      const majorPairs = ref([
        'AUD/USD',
        'EUR/USD',
        'GBP/USD',
        'USD/JPY',
        'USD/CHF',
        'USD/CAD',
        'NZD/USD',
        'EUR/GBP'
      ])

      // Form data
      const accountCurrency = ref('')
      const selectedPair = ref('')
      const tradeSize = ref(1)
      const pipAmount = ref(1)
      const pipValue = ref(null)

      // Exchange rates storage
      const exchangeRates = ref({})

      // Computed property to enable/disable calculate button
      const canCalculate = computed(() => {
        return accountCurrency.value && selectedPair.value && tradeSize.value > 0 && pipAmount.value > 0
      })

      // Load exchange rates from the API
      const loadExchangeRates = async (currency) => {
        try {
          const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
          const data = await response.json()
          return data[currency.toLowerCase()]
        } catch (error) {
          console.error('Error fetching exchange rates:', error)
          return null
        }
      }

      // Calculate pip value
      const calculatePipValue = async () => {
        if (!canCalculate.value) return

        const [baseCurrency, quoteCurrency] = selectedPair.value.split('/')
        const lotSize = 100000 // Standard lot size
        let pipSize = 0.0001 // Standard pip size

        // JPY pairs have different pip size
        if (quoteCurrency === 'JPY') {
          pipSize = 0.01
        }

        try {
          // Load exchange rates for the account currency
          const rates = await loadExchangeRates(accountCurrency.value)
          
          if (!rates) {
            alert('Error loading exchange rates')
            return
          }

          let conversionRate = 1

          // If account currency is different from quote currency, get conversion rate
          if (accountCurrency.value !== quoteCurrency) {
            const quoteCurrencyKey = quoteCurrency.toLowerCase()
            
            if (rates[quoteCurrencyKey]) {
              conversionRate = 1 / rates[quoteCurrencyKey]
            } else {
              // If direct rate not available, try reverse calculation
              const accountRates = await loadExchangeRates(quoteCurrency)
              if (accountRates && accountRates[accountCurrency.value.toLowerCase()]) {
                conversionRate = accountRates[accountCurrency.value.toLowerCase()]
              } else {
                alert('Unable to find conversion rate for this currency pair')
                return
              }
            }
          }

          // Calculate pip value
          const pipValueInQuoteCurrency = lotSize * tradeSize.value * pipSize * pipAmount.value
          pipValue.value = pipValueInQuoteCurrency * conversionRate

        } catch (error) {
          console.error('Error calculating pip value:', error)
          alert('Error calculating pip value')
        }
      }

      return {
        majorPairs,
        accountCurrency,
        selectedPair,
        tradeSize,
        pipAmount,
        pipValue,
        canCalculate,
        calculatePipValue
      }
    }
  }
</script>

<style></style>