<template>
  <div class="currency-block container">
    <div class="currency-block-head">
      <h2 class="title">
        Currency
      </h2>
      <div class="filters">
        <div class="filters-item" @click="setFilter('all')" :class="{ active: activeFilter === 'all' }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2135_1658)"><path d="M19 9L20.25 6.25L23 5L20.25 3.75L19 1L17.75 3.75L15 5L17.75 6.25L19 9Z" fill="white" fill-opacity="0.38"/><path d="M19 15L17.75 17.75L15 19L17.75 20.25L19 23L20.25 20.25L23 19L20.25 17.75L19 15Z" fill="white" fill-opacity="0.38"/><path d="M11.5 9.5L9 4L6.5 9.5L1 12L6.5 14.5L9 20L11.5 14.5L17 12L11.5 9.5ZM9.99 12.99L9 15.17L8.01 12.99L5.83 12L8.01 11.01L9 8.83L9.99 11.01L12.17 12L9.99 12.99Z" fill="white" fill-opacity="0.38"/></g><defs><clipPath id="clip0_2135_1658"><rect width="24" height="24" fill="white"/></clipPath></defs>
          </svg>
          <p>
            Popular coins
          </p>
        </div>
        <div class="filters-item" @click="setFilter('up')" :class="{ active: activeFilter === 'up' }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_140_10562)"><path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="white" fill-opacity="0.38"/></g><defs><clipPath id="clip0_140_10562"><rect width="24" height="24" fill="white"/></clipPath></defs>
          </svg>
          <p>
            Trending up
          </p>
        </div>
        <div class="filters-item" @click="setFilter('down')" :class="{ active: activeFilter === 'down' }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_140_10567)"><path d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z" fill="white" fill-opacity="0.38"/></g><defs><clipPath id="clip0_140_10567"><rect width="24" height="24" fill="white"/></clipPath></defs>
          </svg>
          <p>
            Trending down
          </p>
        </div>
      </div>
    </div>
    <div class="currency-block-coins">
      <table class="table">
        <tr>
          <th class="currency">
            <div class="text">Currency</div>
          </th>
          <th class="price">
            <div class="text">Price</div>
          </th>
          <th class="day">
            <div class="text">24H</div>
          </th>
          <th class="volume">
            <div class="text">Volume 24H</div>
          </th>
          <th class="market">
            <div class="text">Market Cap</div>
          </th>
          <th class="week">
            <div class="text">Last 7 days</div>
          </th>
          <th class="button"></th>
        </tr>
        <tr
          v-for="(coin, index) in coins"
          :key="index"
          class="table--item"
        >
          <td class="currency">
            <div class="currency_row">
              <img :src="coin.icon" alt="">
              <div class="column">
                <div class="title">
                  {{ coin.title }}
                </div>
                <div class="desc">
                  {{ coin.name }}
                </div>
              </div>
            </div>
          </td>
          <td class="price">
            <div class="row">
              <span>$</span>
              <div class="title">
                {{ coin.price }}
              </div>
            </div>
          </td>
          <td class="day">
            <div class="row">
              <img :src="coin.dayIcon" alt="">
              <div class="rate_title" :class="coin.dayRate.includes('-') ? 'down' : 'up'">
                {{ coin.dayRate }}
              </div>
            </div>
          </td>
          <td class="volume">
            <div class="row">
              <span>$</span>
              <div class="title">
                {{ coin.volume }}
              </div>
            </div>
          </td>
          <td class="market">
            <div class="column">
              <div class="row">
                <span>$</span>
                <div class="title">
                  {{ coin.marketTop}}
                </div>
              </div>
              <div class="desc">
                {{ coin.marketBottom }}
              </div>
            </div>
          </td>
          <td class="week">
            <div class="week-tracker">
              <img :src="coin.week" alt=""/>
            </div>
          </td>
          <td class="button">
            <div class="button-create">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_140_10421)"><path d="M12 6V9L16 5L12 1V4C7.58 4 4 7.58 4 12C4 13.57 4.46 15.03 5.24 16.26L6.7 14.8C6.25 13.97 6 13.01 6 12C6 8.69 8.69 6 12 6ZM18.76 7.74L17.3 9.2C17.74 10.04 18 10.99 18 12C18 15.31 15.31 18 12 18V15L8 19L12 23V20C16.42 20 20 16.42 20 12C20 10.43 19.54 8.97 18.76 7.74Z" fill="#29282A"/>
                </g><defs><clipPath id="clip0_140_10421"><rect width="24" height="24" fill="white"/></clipPath></defs>
              </svg>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrencyBlock',
  data () {
    return {
      coins: [
        {
          icon: require('@/assets/img/coins/bitcoinIcon.png'),
          title: 'BTC',
          name: 'Bitcoin',
          price: '26,537.056',
          dayIcon: require('@/assets/img/coins/rateUp.svg'),
          dayRate: '21.98%',
          volume: '23,456,537,123',
          marketTop: '440,537,123,759',
          marketBottom: '2 002 456 BTC',
          week: require('@/assets/img/coins/bitcoinTracker.svg')
        },
        {
          icon: require('@/assets/img/coins/ethereumIcon.png'),
          title: 'ETH',
          name: 'Ethereum',
          price: '2,028.456',
          dayIcon: require('@/assets/img/coins/rateUp.svg'),
          dayRate: '0.04%',
          volume: '890,311,089',
          marketTop: '30,078,567,897',
          marketBottom: '9 002 677 ETH',
          week: require('@/assets/img/coins/ethereumTracker.svg')
        },
        {
          icon: require('@/assets/img/coins/tetherIcon.png'),
          title: 'USDT',
          name: 'Tether',
          price: '1.0098',
          dayIcon: require('@/assets/img/coins/rateUp.svg'),
          dayRate: '2.12%',
          volume: '24,080,678',
          marketTop: '66,123,759',
          marketBottom: '2 002 456 USDT',
          week: require('@/assets/img/coins/tetherTracker.svg')
        },
        {
          icon: require('@/assets/img/coins/binanceIcon.png'),
          title: 'BNB',
          name: 'Binance',
          price: '319.0567',
          dayIcon: require('@/assets/img/coins/rateDown.svg'),
          dayRate: '-7.68%',
          volume: '456,537,123',
          marketTop: '1,537,123,759',
          marketBottom: '2 002 456 BNB',
          week: require('@/assets/img/coins/binanceTracker.svg')
        },
        {
          icon: require('@/assets/img/coins/solanaIcon.png'),
          title: 'SOL',
          name: 'Solana',
          price: '26,537.056',
          dayIcon: require('@/assets/img/coins/rateUp.svg'),
          dayRate: '2.1%',
          volume: '56,537,123',
          marketTop: '6,537,123,759',
          marketBottom: '2 002 456 SOL',
          week: require('@/assets/img/coins/solanaTracker.svg')
        },
        {
          icon: require('@/assets/img/coins/xrpIcon.png'),
          title: 'XRP',
          name: 'XRP',
          price: '1.0098',
          dayIcon: require('@/assets/img/coins/rateUp.svg'),
          dayRate: '32%',
          volume: '24,080,678',
          marketTop: '234,123,759',
          marketBottom: '2 002 456 XRP',
          week: require('@/assets/img/coins/xrpTracker.svg')
        },
        {
          icon: require('@/assets/img/coins/usdcIcon.png'),
          title: 'USDC',
          name: 'USDC',
          price: '319.0567',
          dayIcon: require('@/assets/img/coins/rateDown.svg'),
          dayRate: '-7%',
          volume: '6,537,123',
          marketTop: '4,537,123,759',
          marketBottom: '2 002 456 USDC',
          week: require('@/assets/img/coins/usdcTracker.svg')
        },
        {
          icon: require('@/assets/img/coins/cardanoIcon.png'),
          title: 'ADA',
          name: 'Cardano',
          price: '1.0098',
          dayIcon: require('@/assets/img/coins/rateUp.svg'),
          dayRate: '32%',
          volume: '24,080,678',
          marketTop: '234,123,759',
          marketBottom: '2 002 456 ADA',
          week: require('@/assets/img/coins/cardanoTracker.svg')
        },
        {
          icon: require('@/assets/img/coins/avalancheIcon.png'),
          title: 'AVAX',
          name: 'Avalanche',
          price: '319.0567',
          dayIcon: require('@/assets/img/coins/rateDown.svg'),
          dayRate: '-98%',
          volume: '6,537,123',
          marketTop: '4,537,123,759',
          marketBottom: '2 002 456 AVAX',
          week: require('@/assets/img/coins/avalancheTracker.svg')
        },
        {
          icon: require('@/assets/img/coins/dogecoinIcon.png'),
          title: 'DOGE',
          name: 'Dogecoin',
          price: '26,537.056',
          dayIcon: require('@/assets/img/coins/rateUp.svg'),
          dayRate: '239%',
          volume: '56,537,123',
          marketTop: '537,123,759',
          marketBottom: '2 002 456 DOGE',
          week: require('@/assets/img/coins/dogecoinTracker.svg')
        }
      ],
      activeFilter: 'all',
      activeCoins: []
    }
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;

      if (filter === 'all') {
        this.coins = [...this.activeCoins];
      } else {
        this.coins = this.activeCoins.filter(coin => {
          if (filter === 'up') {
            return !coin.dayRate.includes('-');
          } else if (filter === 'down') {
            return coin.dayRate.includes('-');
          }
        })
      }
    }
  },
  created() {
    this.activeCoins = [...this.coins];
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/currency-block";
</style>