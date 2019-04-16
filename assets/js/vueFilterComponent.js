Vue.component('filters', {
    props: ["view", "type", "cuisine", "region", "price"],
    data() {
        return {
            showCuisineList: false,
            showRegionList: false,
            showFilters: false,
        }
    },
    computed: {
        cuisinePlaceholder() {
            return (this.cuisine == 'All') ? 'Search Cuisine...' : this.cuisine
        },
        regionPlaceholder() {
            return (this.region == 'All') ? 'Search Region...' : this.region
        }
    },
    methods: {
        changeSize(size) {
            this.$emit("filter-the-list", {
                view: size,
                type: this.type,
                cuisine: this.cuisine,
                region: this.region,
                price: this.price
            })
        },
        filterType(type) {
            this.$emit("filter-the-list", {
                view: this.view,
                type: type,
                cuisine: this.cuisine,
                region: this.region,
                price: this.price
            })
        },
        filterCuisine(cuisine) {
            this.$emit("filter-the-list", {
                view: this.view,
                type: this.type,
                cuisine: cuisine,
                region: this.region,
                price: this.price
            })
        },
        filterRegion(region) {
            this.$emit("filter-the-list", {
                view: this.view,
                type: this.type,
                cuisine: this.cuisine,
                region: region,
                price: this.price
            })
        },
        filterPrice(price) {
            this.$emit("filter-the-list", {
                view: this.view,
                type: this.type,
                cuisine: this.cuisine,
                region: this.region,
                price: price
            })
        },
        filterCuisineOptions() {
            filter = $(".cuisine-toggle input").val().toUpperCase();
            a = $(".cuisine-toggle .dropdown-content.cuisineList a").get();
            for (i = 0; i < a.length; i++) {
                if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }
        },
        filterRegionOptions() {
            filter = $(".location-toggle input").val().toUpperCase();
            a = $(".location-toggle .dropdown-content.regionList a").get();
            for (i = 0; i < a.length; i++) {
                if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }
        },
    },
    template: `<div id="filters">
        <div id="mobile-filters">
            <div id="sticky-anchor"></div>
            <div id="sticky-phantom">&nbsp; &nbsp;</div>
            <nav id="mobile-nav" :class="{open: showFilters}">
                <div class="toggle-zone" @click="showFilters=!showFilters"></div>
                <div class="toggle-close"></div>
                <div class="filter-logo"><img src="assets/images/ColourWhiteIcon64.png" alt="View"></div>
                <div class="toggle"></div>
                <div class="current-sort">
                    Filter Restaurants
                </div>
                <div class="nav-contents size-filter">
                    <div class="current-sort color-theme">
                        TheRadList
                    </div>

                    <div class="nav-actions size-filter">
                        <a href="#/" :class="{ active: (view=='medium') }" @click="changeSize('medium')"><span>Peruse</span></a>
                        <a href="#/" :class="{ active: (view=='large') }" @click="changeSize('large')"><span>Deep Dive</span></a>
                    </div>

                    <div class="nav-actions type-filter">
                        <a href="#/" :class="{ active: (type=='All') }" @click="filterType('All')"><span>All</span></a>
                        <a href="#/" :class="{ active: (type=='Restaurant') }" @click="filterType('Restaurant')"><span>Restaurant</span></a>
                        <a href="#/" :class="{ active: (type=='Bar') }" @click="filterType('Bar')"><span>Bar</span></a>
                        <a href="#/" :class="{ active: (type=='Cafe') }" @click="filterType('Cafe')"><span>Cafe</span></a>
                        <a href="#/" :class="{ active: (type=='Fast Food') }" @click="filterType('Fast Food')"><span>Fast Food</span></a>
                        <a href="#/" :class="{ active: (type=='Dessert') }" @click="filterType('Dessert')"><span>Dessert</span></a>
                    </div>
                    <div class="nav-actions cuisine-filter">
                        <input type="text" 
                            :placeholder="cuisinePlaceholder" 
                            @keyup="filterCuisineOptions"
                            @focus="showCuisineList=true" @focusout="setTimeout(() => { showCuisineList=false }, 250);">
                        <div class="dropdown-content cuisineList" v-show="showCuisineList">
                            <a href="#/" :class="{active: (cuisine=='All')}" @click="filterCuisine('All')">All</a>
                            <a href="#/" :class="{active: (cuisine=='Asian')}" @click="filterCuisine('Asian')">Asian</a>
                            <a href="#/" :class="{active: (cuisine=='Baked Goods')}" @click="filterCuisine('Baked Goods')">Baked Goods</a>
                            <a href="#/" :class="{active: (cuisine=='Bar Food')}" @click="filterCuisine('Bar Food')">Bar Food</a>
                            <a href="#/" :class="{active: (cuisine=='Breakfast and Brunch')}" @click="filterCuisine('Breakfast and Brunch')">Breakfast and Brunch</a>
                            <a href="#/" :class="{active: (cuisine=='French')}" @click="filterCuisine('French')">French</a>
                            <a href="#/" :class="{active: (cuisine=='Halal')}" @click="filterCuisine('Halal')">Halal</a>
                            <a href="#/" :class="{active: (cuisine=='Indian')}" @click="filterCuisine('Indian')">Indian</a>
                            <a href="#/" :class="{active: (cuisine=='Italian')}" @click="filterCuisine('Italian')">Italian</a>
                            <a href="#/" :class="{active: (cuisine=='Latin American')}" @click="filterCuisine('Latin American')">Latin American</a>
                            <a href="#/" :class="{active: (cuisine=='Mediterranean')}" @click="filterCuisine('Mediterranean')">Mediterranean</a>
                            <a href="#/" :class="{active: (cuisine=='Middle Eastern')}" @click="filterCuisine('Middle Eastern')">Middle Eastern</a>
                        </div>
                    </div>
                    <div class="nav-actions price-filter">
                        <a href="#/" :class="{active:(price=='All')}" @click="filterPrice('All')"><span>All</span></a>
                        <a href="#/" :class="{active:(price=='$')}" @click="filterPrice('$')"><span>$</span></a>
                        <a href="#/" :class="{active:(price=='$$')}" @click="filterPrice('$$')"><span>$$</span></a>
                        <a href="#/" :class="{active:(price=='$$$')}" @click="filterPrice('$$$')"><span>$$$</span></a>
                        <a href="#/" :class="{active:(price=='$$$$')}" @click="filterPrice('$$$$')"><span>$$$$</span></a>
                        <a href="#/" :class="{active:(price=='$$$$$')}" @click="filterPrice('$$$$$')"><span>$$$$$</span></a>
                    </div>
                    <div class="nav-actions location-filter">
                        <input type="text" :placeholder="regionPlaceholder" @keyup="filterRegionOptions"
                            @focus="showRegionList=true" @focusout="setTimeout(() => { showRegionList=false }, 250);">
                        <div class="dropdown-content regionList" v-show="showRegionList">
                            <a href="#/" :class="{active: (region=='All')}" @click="filterRegion('All')">All</a>
                            <a href="#/" :class="{active: (region=='Jasper Ave')}" @click="filterRegion('Jasper Ave')">Jasper Ave</a>
                            <a href="#/" :class="{active: (region=='Whyte Ave')}" @click="filterRegion('Whyte Ave')">Whyte Ave</a>
                            <a href="#/" :class="{active: (region=='Ice District')}" @click="filterRegion('Ice District')">Ice District</a>
                            <a href="#/" :class="{active: (region=='Downtown')}" @click="filterRegion('Downtown')">Downtown</a>
                            <a href="#/" :class="{active: (region=='Windermere')}" @click="filterRegion('Windermere')">Windermere</a>
                            <a href="#/" :class="{active: (region=='SummerSide')}" @click="filterRegion('SummerSide')">SummerSide</a>
                            <a href="#/" :class="{active: (region=='South Gateway')}" @click="filterRegion('South Gateway')">South Gateway</a>
                            <a href="#/" :class="{active: (region=='Belgravia')}" @click="filterRegion('Belgravia')">Belgravia</a>
                            <a href="#/" :class="{active: (region=='Bonnie Doon')}" @click="filterRegion('Bonnie Doon')">Bonnie Doon</a>
                            <a href="#/" :class="{active: (region=='Mill Creek')}" @click="filterRegion('Mill Creek')">Mill Creek</a>
                            <a href="#/" :class="{active: (region=='Mayfield')}" @click="filterRegion('Mayfield')">Mayfield</a>
                            <a href="#/" :class="{active: (region=='Garneau')}" @click="filterRegion('Garneau')">Garneau</a>
                            <a href="#/" :class="{active: (region=='Millwoods')}" @click="filterRegion('Millwoods')">Millwoods</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div id="desktop-filters">
            <div class="size-filter">
                <div class="title">How Much Do You
                    <br> Want to Know?
                </div>
                <div class="filter-links size-toggle">
                    <a href="#/" :class="{ active: (view=='medium') }" @click="changeSize('medium')">
                        <span>Peruse</span>
                    </a>
                    <a href="#/" :class="{ active: (view=='large') }" @click="changeSize('large')">
                        <span>Deep Dive</span>
                    </a>
                </div>
            </div>
            <div class="type-filter">
                <div class="title">Sort By Type</div>
                <div class="filter-links type-toggle">
                    <a href="#/" :class="{ active: (type=='All') }" @click="filterType('All')">
                        <span>All</span>
                    </a>
                    <a href="#/" :class="{ active: (type=='Restaurant') }" @click="filterType('Restaurant')">
                        <span>Restaurant</span>
                    </a>
                    <a href="#/" :class="{ active: (type=='Bar') }" @click="filterType('Bar')">
                        <span>Bar</span>
                    </a>
                    <a href="#/" :class="{ active: (type=='Cafe') }" @click="filterType('Cafe')">
                        <span>Cafe</span>
                    </a>
                    <a href="#/" :class="{ active: (type=='Fast Food') }" @click="filterType('Fast Food')">
                        <span>Fast Food</span>
                    </a>
                    <a href="#/" :class="{ active: (type=='Dessert') }" @click="filterType('Dessert')">
                        <span>Dessert</span>
                    </a>
                </div>
            </div>
            <div class="cuisine-filter">
                <div class="title">Sort By Cuisine</div>
                <div class="filter-links cuisine-toggle">
                    <input type="text" 
                        :placeholder="cuisinePlaceholder" 
                        @keyup="filterCuisineOptions"
                        @focus="showCuisineList=true" @focusout="setTimeout(() => { showCuisineList=false }, 250);">
                    <div class="dropdown-content cuisineList" v-show="showCuisineList">
                        <a href="#/" :class="{active: (cuisine=='All')}" @click="filterCuisine('All')">All</a>
                        <a href="#/" :class="{active: (cuisine=='Asian')}" @click="filterCuisine('Asian')">Asian</a>
                        <a href="#/" :class="{active: (cuisine=='Baked Goods')}" @click="filterCuisine('Baked Goods')">Baked Goods</a>
                        <a href="#/" :class="{active: (cuisine=='Bar Food')}" @click="filterCuisine('Bar Food')">Bar Food</a>
                        <a href="#/" :class="{active: (cuisine=='Breakfast and Brunch')}" @click="filterCuisine('Breakfast and Brunch')">Breakfast and Brunch</a>
                        <a href="#/" :class="{active: (cuisine=='French')}" @click="filterCuisine('French')">French</a>
                        <a href="#/" :class="{active: (cuisine=='Halal')}" @click="filterCuisine('Halal')">Halal</a>
                        <a href="#/" :class="{active: (cuisine=='Indian')}" @click="filterCuisine('Indian')">Indian</a>
                        <a href="#/" :class="{active: (cuisine=='Italian')}" @click="filterCuisine('Italian')">Italian</a>
                        <a href="#/" :class="{active: (cuisine=='Latin American')}" @click="filterCuisine('Latin American')">Latin American</a>
                        <a href="#/" :class="{active: (cuisine=='Mediterranean')}" @click="filterCuisine('Mediterranean')">Mediterranean</a>
                        <a href="#/" :class="{active: (cuisine=='Middle Eastern')}" @click="filterCuisine('Middle Eastern')">Middle Eastern</a>
                    </div>
                </div>
            </div>
            <div class="price-filter">
                <div class="title">Sort By Price</div>
                <div class="filter-links price-toggle">
                    <a href="#/" :class="{active:(price=='All')}" @click="filterPrice('All')">
                        <span>All</span>
                    </a>
                    <a href="#/" :class="{active:(price=='$')}" @click="filterPrice('$')">
                        <span>$</span>
                    </a>
                    <a href="#/" :class="{active:(price=='$$')}" @click="filterPrice('$$')">
                        <span>$$</span>
                    </a>
                    <a href="#/" :class="{active:(price=='$$$')}" @click="filterPrice('$$$')">
                        <span>$$$</span>
                    </a>
                    <a href="#/" :class="{active:(price=='$$$$')}" @click="filterPrice('$$$$')">
                        <span>$$$$</span>
                    </a>
                    <a href="#/" :class="{active:(price=='$$$$$')}" @click="filterPrice('$$$$$')">
                        <span>$$$$$</span>
                    </a>
                </div>
            </div>
            <div class="location-filter">
                <div class="title">Sort By Region</div>
                <div class="filter-links location-toggle">
                    <input type="text" 
                        :placeholder="regionPlaceholder" 
                        @keyup="filterRegionOptions"
                        @focus="showRegionList=true" @focusout="setTimeout(() => { showRegionList=false }, 250);">
                    <div class="dropdown-content regionList" v-show="showRegionList">
                        <a href="#/" :class="{active: (region=='All')}" @click="filterRegion('All')">All</a>
                        <a href="#/" :class="{active: (region=='Jasper Ave')}" @click="filterRegion('Jasper Ave')">Jasper Ave</a>
                        <a href="#/" :class="{active: (region=='Whyte Ave')}" @click="filterRegion('Whyte Ave')">Whyte Ave</a>
                        <a href="#/" :class="{active: (region=='Ice District')}" @click="filterRegion('Ice District')">Ice District</a>
                        <a href="#/" :class="{active: (region=='Downtown')}" @click="filterRegion('Downtown')">Downtown</a>
                        <a href="#/" :class="{active: (region=='Windermere')}" @click="filterRegion('Windermere')">Windermere</a>
                        <a href="#/" :class="{active: (region=='SummerSide')}" @click="filterRegion('SummerSide')">SummerSide</a>
                        <a href="#/" :class="{active: (region=='South Gateway')}" @click="filterRegion('South Gateway')">South Gateway</a>
                        <a href="#/" :class="{active: (region=='Belgravia')}" @click="filterRegion('Belgravia')">Belgravia</a>
                        <a href="#/" :class="{active: (region=='Bonnie Doon')}" @click="filterRegion('Bonnie Doon')">Bonnie Doon</a>
                        <a href="#/" :class="{active: (region=='Mill Creek')}" @click="filterRegion('Mill Creek')">Mill Creek</a>
                        <a href="#/" :class="{active: (region=='Mayfield')}" @click="filterRegion('Mayfield')">Mayfield</a>
                        <a href="#/" :class="{active: (region=='Garneau')}" @click="filterRegion('Garneau')">Garneau</a>
                        <a href="#/" :class="{active: (region=='Millwoods')}" @click="filterRegion('Millwoods')">Millwoods</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})