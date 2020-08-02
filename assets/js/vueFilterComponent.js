Vue.component("filters", {
  props: ["view", "type", "cuisine", "region", "price"],
  data() {
    return {
      showCuisineList: false,
      showRegionList: false,
      showFilters: false,
      cuisineOptions: null,
      regionOptions: null,
      typeOptions: null,
      priceOptions: null,
    };
  },
  computed: {
    cuisinePlaceholder() {
      return this.cuisine == "All" ? "Search Cuisine..." : this.cuisine;
    },
    regionPlaceholder() {
      return this.region == "All" ? "Search Region..." : this.region;
    },
  },
  async created() {
    fetch(
      "https://v2-api.sheety.co/1d451b7406988a7d18b381d137c82628/theRadList/info"
    )
      .then((stream) => stream.json())
      .then((data) => {
        this.cuisineOptions = data.info
          .map((a) => a.cuisine)
          .filter((a) => a != undefined);
        this.regionOptions = data.info
          .map((a) => a.region)
          .filter((a) => a != undefined);
        this.typeOptions = data.info
          .map((a) => a.types)
          .filter((a) => a != undefined);
        this.priceOptions = data.info
          .map((a) => a.price)
          .filter((a) => a != undefined);
      })
      .catch((error) => console.error(error));
  },
  methods: {
    changeSize(size) {
      this.$emit("filter-the-list", {
        view: size,
        type: this.type,
        cuisine: this.cuisine,
        region: this.region,
        price: this.price,
      });
    },
    filter(option, selection) {
      this.$emit("filter-the-list", {
        view: this.view,
        type: option === "type" ? selection : this.type,
        cuisine: option === "cuisine" ? selection : this.cuisine,
        region: option === "region" ? selection : this.region,
        price: option === "price" ? selection : this.price,
      });
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
    filterOptionsOnType(className) {
      filter = $(`.${className} input`).val().toUpperCase();
      a = $(`.${className} .dropdown-content a`).get();
      for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    },
    getOptions(filter) {
      let html = "";
      this[filter + "Options"].forEach((el) => {
        html += `<a href="#/" :class="{ active: (${filter}=='${el}') }" @click="filter('${filter}','${el}')"><span>${el}</span></a>`;
      });
      return html;
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
                    </div>`+

                    // <div class="nav-actions size-filter">
                    //     <a href="#/" :class="{ active: (view=='medium') }" @click="changeSize('medium')"><span>Peruse</span></a>
                    //     <a href="#/" :class="{ active: (view=='large') }" @click="changeSize('large')"><span>Deep Dive</span></a>
                    // </div>

                    `<div class="nav-actions type-filter">
                        <a v-for="item in typeOptions" href="#/" :class="{ active: (type==item) }" @click="filter('type', item)"><span>{{item}}</span></a>
                    </div>
                    <div class="nav-actions cuisine-filter">
                        <input type="text" 
                            :placeholder="cuisinePlaceholder" 
                            @keyup="filterOptionsOnType('cuisine-filter')"
                            @focus="showCuisineList=true" @focusout="setTimeout(() => { showCuisineList=false }, 250);">
                        <div class="dropdown-content cuisineList" v-show="showCuisineList">
                            <a v-for="item in cuisineOptions" href="#/" :class="{ active: (cuisine==item) }" @click="filter('cuisine', item)"><span>{{item}}</span></a>
                        </div>
                    </div>
                    <div class="nav-actions price-filter">
                        <a v-for="item in priceOptions" href="#/" :class="{ active: (price==item) }" @click="filter('price', item)"><span>{{item}}</span></a>
                    </div>
                    <div class="nav-actions location-filter">
                        <input type="text" :placeholder="regionPlaceholder" @keyup="filterOptionsOnType('location-filter')"
                            @focus="showRegionList=true" @focusout="setTimeout(() => { showRegionList=false }, 250);">
                        <div class="dropdown-content regionList" v-show="showRegionList">
                            <a v-for="item in regionOptions" href="#/" :class="{ active: (region==item) }" @click="filter('region', item)"><span>{{item}}</span></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div id="desktop-filters">`+
            // <div class="size-filter">
            //     <div class="title">How Much Do You
            //         <br> Want to Know?
            //     </div>
            //     <div class="filter-links size-toggle">
            //         <a href="#/" :class="{ active: (view=='medium') }" @click="changeSize('medium')">
            //             <span>Peruse</span>
            //         </a>
            //         <a href="#/" :class="{ active: (view=='large') }" @click="changeSize('large')">
            //             <span>Deep Dive</span>
            //         </a>
            //     </div>
            // </div>
            `<div class="type-filter">
                <div class="title">Sort By Type</div>
                <div class="filter-links type-toggle">
                    <a v-for="item in typeOptions" href="#/" :class="{ active: (type==item) }" @click="filter('type', item)"><span>{{item}}</span></a>
                </div>
            </div>
            <div class="cuisine-filter">
                <div class="title">Sort By Cuisine</div>
                <div class="filter-links cuisine-toggle">
                    <input type="text" 
                        :placeholder="cuisinePlaceholder" 
                        @keyup="filterOptionsOnType('cuisine-toggle')"
                        @focus="showCuisineList=true" @focusout="setTimeout(() => { showCuisineList=false }, 250);">
                    <div class="dropdown-content cuisineList" v-show="showCuisineList">
                        <a v-for="item in cuisineOptions" href="#/" :class="{ active: (cuisine==item) }" @click="filter('cuisine', item)"><span>{{item}}</span></a>
                    </div>
                </div>
            </div>
            <div class="price-filter">
                <div class="title">Sort By Price</div>
                <div class="filter-links price-toggle">
                    <a v-for="item in priceOptions" href="#/" :class="{ active: (price==item) }" @click="filter('price', item)"><span>{{item}}</span></a>
                </div>
            </div>
            <div class="location-filter">
                <div class="title">Sort By Region</div>
                <div class="filter-links location-toggle">
                    <input type="text" 
                        :placeholder="regionPlaceholder" 
                        @keyup="filterOptionsOnType('location-toggle')"
                        @focus="showRegionList=true" @focusout="setTimeout(() => { showRegionList=false }, 250);">
                    <div class="dropdown-content regionList" v-show="showRegionList">
                        <a v-for="item in regionOptions" href="#/" :class="{ active: (region==item) }" @click="filter('region', item)"><span>{{item}}</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
});