<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input v-model.number="quantity"
                           type="number"
                           class="form-control"
                           placeholder="Quantity"
                           :class="{danger: insufficientFunds}"
                     >
                </div>
                <div class="pull-right">
                    <button class="btn btn-success"
                            @click="buyStock"
                            :disabled="isDisabled">{{ insufficientFunds ? 'Insufficient funds' : 'Buy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds
            },
            isDisabled() {
                return (this.quantity * this.stock.price > this.funds || this.quantity <= 0 || !Number.isInteger(this.quantity))
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>
