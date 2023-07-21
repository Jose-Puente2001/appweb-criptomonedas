<template>
<q-page class="flex flex-center">
<table>
<thead>
<tr>
    <th>Moneda</th>
    <th>Precio</th>
</tr>
</thead>
<tbody>
    <tr v-for="coin in coins" :key="coin.id">
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
    };
    },
    async mounted(){
     const response =  await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
     const datos = await response.json()
     this.coins = datos;
    },
});
</script>