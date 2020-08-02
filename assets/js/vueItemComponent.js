Vue.component('item-card', {
    props: ['data', 'expand'],
    data() {
        return {
            expanded: false
        }
    },
    watch: {
        expand(newVal, oldVal) {
            this.expanded = (newVal == "large")
        }
    },
    template: `<div class="card-item col-xs-12 has-hover" :class="{ 'expanded-card': expanded }">
        <a class="cardlink wrapper" :href="data.mapsLink" target="_blank">
            <div class="rank-column background-theme" style="background-color: var(--red)"></div>
            <div class="info-column">
                <div class="medium-show">
                    <div class="player-main">
                        <h3>{{data.name}}</h3>
                    </div>
                    <div class="player-meta">
                        <div>
                            <div class="medium-column">
                                <div class="ringer-stat">
                                    <span class="label">Cuisine:</span>
                                    <span class="value">{{data.cuisine}}</span>
                                </div>
                                <div>
                                    <span class="label">Price</span>
                                    <span class="value">{{data.price}}</span>
                                </div>
                            </div>
                            <div class="medium-column">
                                <div>
                                    <span class="label">Type</span>
                                    <span class="value">{{data.type}}</span>
                                </div>
                                <div>
                                    <span class="label">Region</span>
                                    <span class="value">{{data.region}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="player-description">
                        <div class="player-headline">{{data.description}}</div>
                    </div>
                </div>
                <div class="player-info">
                    <div class="player-plus-minus">
                        <h6>NOTES</h6>
                        <div>{{data.notes}}</div>
                    </div>
                </div>
            </div>
        </a>`+
        // <div class="toggle-card" @click="expanded = !expanded">
        //     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.5 39.5">
        //         <defs>
        //             <clipPath>
        //                 <rect class="cls-1" width="39.5" height="39.5"></rect>
        //             </clipPath>
        //         </defs>
        //         <title>newarrow</title>
        //         <g class="cls-2">
        //             <path class="arrow-fill"
        //                 d="M19.75,39.5A19.75,19.75,0,1,1,39.5,19.75,19.75,19.75,0,0,1,19.75,39.5Zm0-38A18.25,18.25,0,1,0,38,19.75,18.25,18.25,0,0,0,19.75,1.5Z">
        //             </path>
        //         </g>
        //         <rect class="arrow-fill" x="19" y="11.75" width="1.5" height="15"></rect>
        //         <rect class="arrow-fill" x="18.77" y="22.59" width="8.15" height="1.5"
        //             transform="translate(-9.81 22.99) rotate(-45)"></rect>
        //         <rect class="arrow-fill" x="15.89" y="19.26" width="1.5" height="8.15"
        //             transform="translate(-11.63 18.6) rotate(-45)"></rect>
        //     </svg>
        // </div>
    `</div>`
})