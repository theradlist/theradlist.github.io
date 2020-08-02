Vue.component('list', {
    props: ["view", "filters"],
    data() {
        return {
            data: [],
            list: [],
        }
    },
    methods: {
        shuffle() {
            // http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
            for (var i = 0; i < this.data.length; i++) {
                var j = i + Math.floor(Math.random() * (this.data.length - i));

                var temp = this.data[j];
                this.data[j] = this.data[i];
                this.data[i] = temp;
            }
            this.list = this.data;
        },
        filterList() {
            if (this.filters.type != "All") {
                this.list = this.data.filter((itm) => {
                    if (itm.type == null) {
                        return false
                    }
                    return itm.type.toUpperCase() == this.filters.type.toUpperCase()
                })
            } else {
                this.list = this.data
            }

            if (this.filters.cuisine != "All") {
                this.list = this.list.filter((itm) => {
                    if (itm.cuisine == null) {
                        return false
                    }
                    return itm.cuisine.toUpperCase() == this.filters.cuisine.toUpperCase()
                })
            }

            if (this.filters.region != "All") {
                this.list = this.list.filter((itm) => {
                    if (itm.region == null) {
                        return false
                    }
                    return itm.region.toUpperCase() == this.filters.region.toUpperCase()
                })
            }

            if (this.filters.price != "All") {
                this.list = this.list.filter((itm) => {
                    if (itm.price == null) {
                        return false
                    }
                    return itm.price.toUpperCase() == this.filters.price.toUpperCase()
                })
            }
        }
    },
    async created() {
        fetch('https://v2-api.sheety.co/1d451b7406988a7d18b381d137c82628/theRadList/liveData')
            .then(stream => stream.json())
            .then(data => {
                this.data = data.liveData;
                this.shuffle()
            })
            .catch(error => console.error(error))
    },
    watch: {
        filters(oldVal, newVal) {
            if (this.data) {
                this.filterList()
            }
        }
    },
    template: `<div id="list">
        <div v-for="item in list">
            <item-card :data="item" :expand="view"></item-card>
        </div>
    </div>`
})