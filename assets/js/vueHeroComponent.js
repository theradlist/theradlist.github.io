Vue.component('hero', {
    template: `<div>
        <div class="bg-image">
            <img class="desktop" title="" alt="" src="./assets/images/bg-cropped.png">
            <img class="mobile" title="" alt="" src="./assets/images/bg-cropped-mobile.png">
        </div>

        <img id="logo" src="./assets/images/Logo500.png" />

        <nav id="menu">
            <ul>
                <li><a href="https://github.com/theradlist/theradlist.github.io/" target="_blank">Github</a>
                </li>
                <li><a
                        href="https://docs.google.com/spreadsheets/d/1XmlmM5n6t3kVBSNt9Gq4N346IUaRPfx23JSiw2pJjJc/edit?usp=sharing">Data</a>
                </li>
            </ul>
        </nav>

        <div class="top wrapper">

            <div class="text-container">
                <h1 id="forgoogle" class="big-text">
                    Foodies take note, <br /> Edmonton is <i>poppin'</i>
                </h1>

                <div class="copy">

                    <p>but only for those that look it seems. Here to help you see, TheRADList. Look through Edmonton's
                        most
                        interesting bars, cafe's and restaurants.
                        <!-- <a class="red read-more" href="#/">more</a> -->
                    </p>

                </div>

                <br>
                <p class="signature">Your Friends from Edmonton</p>

            </div>

        </div>
    </div>`
})
