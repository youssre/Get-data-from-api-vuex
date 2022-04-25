<template>
    <h1>Show Data from Store</h1>
    <table align="center" cellspacing="0">
        <tr class="head">
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
        </tr>
        <tr v-for="item in items" :key="item.id" class="data">
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.password}}</td>
        </tr>
    </table>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: "showData",
     mounted () {
        this.$store.dispatch('getCharacters') //call the actions using dispatch
    },
    computed: mapState([  //access to state
        'items'
    ]),
 }
</script>
<style scoped>
*{
    text-align: center;
}
.head{
    background-color: #999;
}
.data{
    background-color: #ddd;
}
td,th{
    padding: 15px 0;
    margin: 0%;
}
table{
    width: 70%;
    border-radius: 10%;
    border: 1px solid #fff;
    
}

</style>