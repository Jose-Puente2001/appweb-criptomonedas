<template>
<div class="search-container">
<input type="text"
 placeholder="Buscar moneda"
 @keyup="searchCoin"
 v-model="textSearch"
 class="search-input"
/>
</div>
<q-page class="flex flex-center">
<table>
<thead>
<tr>
    <th>Moneda</th>
    <th>Precio</th>
</tr>
</thead>
<tbody>
    <tr v-for="coin in filterCoins" :key="coin.id">
     <img :src="coin.image" style="width: 2rem;"/>
      <span>{{ coin.name }}</span>
      <td>${{ coin.current_price }}</td>
    </tr>
</tbody>
</table>
</q-page>
</template>


<script>
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Prueba-Component',
    data() {
    return{
       coins: [],
       filterCoins: [],
       textSearch: '',
    };
    },
    async mounted(){
     const response =  await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
     const datos = await response.json()
     this.coins = datos;
     this.filterCoins = datos;
    },

   methods: {
     searchCoin(){
      this.filterCoins =  this.coins.filter(coin => coin.name.toLowerCase().includes(this.textSearch.toLowerCase()))
     }
   }
});
</script>

<style>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.search-input {
  padding: 10px;
  width: 300px;
  text-align: center;
}
</style>