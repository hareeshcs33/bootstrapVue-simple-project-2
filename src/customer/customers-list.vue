<template>
    <b-container>
        <h1 class="text-center">Customers List</h1>
        <router-link to="/customer-data">Add Customer</router-link>
        <b-table striped hover :items="items" :fields="fields">
            <template #cell(view)="row">
                <b-button size="sm" @click="viewItem(row.item.name, row.index)">View</b-button>
            </template>
            <template #cell(edit)="row">
                <b-button size="sm" @click="editItem(row.index)">Edit</b-button>
            </template>
            <template #cell(delete)="row">
                <b-button size="sm" @click="deleteItem(row.index)">Delete</b-button>
            </template>
        </b-table>
        <pre>{{items}}</pre>
    </b-container>
</template>
<script>
export default {
    data(){
        return {
            fields: ['name', 'email', 'food', 'view', 'edit', 'delete'],
        }
    },
    methods: {
        viewItem(name, index){
            console.log("viewItem", name, index);
        },
        editItem(index){
            console.log("editItem", index);
        },
        deleteItem(index){
            this.items.splice(index, 1);
        }
    },
    computed: {
        items(){
            return this.$store.state.customers;
        }
    }
}
</script>