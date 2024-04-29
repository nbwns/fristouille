<template>
  <div>
	<!-- Hero introduction -->
    <section>
      <div class="flex flex-col justify-center items-center bg-black-200 dark:bg-white-200">
		<spacer size="xxs"></spacer>
        <div class="flex flex-col md:flex-row layer__xl justify-between items-center h-auto mx-auto">
			<div class="block z-0 items-center h-full max-w-sm text-pretty">
				<big-title :emphasis="$prismic.asText(document.data.hero_title_emphasis)" class="max-w-md">{{$prismic.asText(document.data.hero_title)}}</big-title>
			</div>
			<!-- only displayed on desktop -->
			<div class="hidden md:flex flex-shrink-0 z-50">
				<svg width="390" height="378" viewBox="0 0 471 378" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M91.0291 220.446C91.0291 220.446 78.1687 205.382 86.757 190.121C95.3453 174.859 104.518 174.948 106.577 168.664C106.577 168.664 118.439 179.255 112.89 194.727C107.34 210.199 96.2663 214.583 91.0291 220.446Z" fill="url(#paint0_linear_1921_3174)"/>
					<path d="M79.431 199.387C79.431 199.387 94.1877 200.742 99.4727 188.739C104.758 176.735 100.603 171.098 103.44 167.07C103.44 167.07 91.8032 164.373 85.0337 174.588C78.2643 184.803 80.5948 193.577 79.431 199.387Z" fill="url(#paint1_linear_1921_3174)"/>
					<path d="M84.0803 206.129C84.0803 206.129 96.925 198.649 94.4361 185.751C91.9472 172.852 85.3479 170.658 85.3824 165.711C85.3824 165.711 74.3291 170.276 74.5882 182.575C74.8473 194.874 81.7345 200.697 84.0803 206.129Z" fill="url(#paint2_linear_1921_3174)"/>
					<path d="M85.2225 209.168C90.0798 217.622 90.0798 232.254 91.0513 235.83C92.0228 239.407 93.9657 237.131 93.9657 237.131C93.9657 237.131 90.0798 213.07 90.0798 209.168C90.0798 204.29 85.2225 200.063 81.9843 190.634C78.7461 181.204 81.9843 171.125 76.1555 170.799C70.3267 170.474 68.7076 180.554 71.2982 190.634C73.3706 198.698 80.3652 200.714 85.2225 209.168Z" fill="url(#paint3_linear_1921_3174)"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M32.1191 260.265C24.6541 258.013 19.5856 252.81 20.7982 248.645C22.0108 244.48 29.0454 242.93 36.5103 245.183C43.5159 247.297 48.4109 252.009 47.9847 256.023L61.8051 260.42C62.2433 260.559 62.4914 261.025 62.3625 261.466C62.2336 261.908 61.7754 262.161 61.3332 262.036L47.2549 258.039C45.1207 261.254 38.7918 262.279 32.1191 260.265Z" fill="#FFD69E"/>
					<path d="M85.0524 306.098C87.0336 304.062 88 300.984 88 296.863V265.633H79.3988V296.267C79.3988 297.955 79.1089 299.196 78.4807 300.09C77.8526 300.984 76.7412 301.381 75.05 301.381C74.0835 301.381 73.2138 301.282 72.4889 301.083V308.63C73.9386 308.928 75.4365 309.126 77.0794 309.126C80.4136 309.126 83.0713 308.133 85.0524 306.098Z" fill="#423343"/>
					<path d="M134.67 291.046C135.039 289.149 134.859 287.333 134.198 285.586C133.548 283.909 132.436 282.441 130.913 281.282C129.74 280.39 128.108 279.458 126.123 278.508L99.2555 266.024L95.6756 273.812L122.612 286.287C123.326 286.643 123.98 287.079 124.488 287.466C125.543 288.268 126.108 289.32 126.172 290.551C126.237 291.782 125.851 293.044 124.907 294.316L124.258 295.19L130.858 298.16C131.319 297.703 131.801 297.136 132.273 296.5C133.542 294.791 134.341 292.973 134.67 291.046Z" fill="#423343"/>
					<ellipse cx="38.4794" cy="38.9633" rx="38.4794" ry="38.9633" transform="matrix(-1 0 0 1 128.567 202.204)" fill="url(#paint4_linear_1921_3174)"/>
					<path d="M79.0518 235.127C79.0518 236.613 77.8706 237.845 76.3672 237.845C74.8638 237.845 73.6826 236.649 73.6826 235.127C73.6826 233.641 74.8638 232.408 76.3672 232.408C77.8706 232.408 79.0518 233.641 79.0518 235.127Z" fill="#1D1D1B"/>
					<path d="M100.529 239.053C102.176 239.053 103.512 237.701 103.512 236.033C103.512 234.364 102.176 233.012 100.529 233.012C98.8814 233.012 97.5459 234.364 97.5459 236.033C97.5459 237.701 98.8814 239.053 100.529 239.053Z" fill="#1D1D1B"/>
					<path d="M88.245 245.094C86.248 245.094 84.251 244.385 82.6309 242.966L83.8366 241.469C86.248 243.557 89.7521 243.675 92.2389 241.745L93.3693 243.321C91.8621 244.503 90.0536 245.094 88.245 245.094Z" fill="#1D1D1B"/>
					<path d="M276.096 241.709C276.096 241.709 255.739 218.706 269.334 195.401C282.929 172.096 297.449 172.232 300.708 162.636C300.708 162.636 319.485 178.81 310.7 202.436C301.916 226.062 284.387 232.756 276.096 241.709Z" fill="url(#paint5_linear_1921_3174)"/>
					<path d="M257.737 209.551C257.737 209.551 281.096 211.621 289.462 193.291C297.828 174.961 291.251 166.354 295.742 160.203C295.742 160.203 277.321 156.084 266.606 171.683C255.89 187.282 259.579 200.679 257.737 209.551Z" fill="url(#paint6_linear_1921_3174)"/>
					<path d="M265.097 219.847C265.097 219.847 285.43 208.425 281.49 188.729C277.55 169.032 267.103 165.681 267.158 158.127C267.158 158.127 249.661 165.098 250.071 183.879C250.481 202.66 261.384 211.552 265.097 219.847Z" fill="url(#paint7_linear_1921_3174)"/>
					<path d="M266.905 224.487C274.594 237.396 274.594 259.74 276.132 265.201C277.67 270.663 280.745 267.187 280.745 267.187C280.745 267.187 274.594 230.445 274.594 224.487C274.594 217.039 266.905 210.584 261.779 196.185C256.653 181.786 261.779 166.394 252.552 165.897C243.326 165.401 240.763 180.793 244.863 196.185C248.144 208.499 259.216 211.577 266.905 224.487Z" fill="url(#paint8_linear_1921_3174)"/>
					<path d="M278.714 222.409C278.714 222.409 258.333 220.715 253.779 203.66C249.225 186.605 256.118 180.16 253.143 174.186C253.143 174.186 269.573 173.377 276.54 188.426C283.508 203.476 278.408 214.482 278.714 222.409Z" fill="url(#paint9_linear_1921_3174)"/>
					<path d="M254.971 215.513C254.971 215.513 266.93 206.016 262.254 193.645C257.577 181.274 250.441 180.173 249.663 175.268C249.663 175.268 239.064 181.587 241.352 193.727C243.64 205.867 251.669 210.515 254.971 215.513Z" fill="url(#paint10_linear_1921_3174)"/>
					<path d="M263.27 217.056C263.27 217.056 267.467 202.57 256.361 195.073C245.255 187.575 238.767 190.681 235.244 187.103C235.244 187.103 230.29 198.225 239.306 206.875C248.322 215.524 257.627 214.819 263.27 217.056Z" fill="url(#paint11_linear_1921_3174)"/>
					<path d="M266.301 218.429C275.982 221.054 286.479 231.563 289.768 233.443C293.057 235.322 292.871 232.309 292.871 232.309C292.871 232.309 272.717 217.785 269.917 214.982C266.419 211.479 259.77 211.89 250.594 207.415C241.419 202.94 236.599 193.403 232.026 197.305C227.453 201.207 233.478 209.596 242.638 214.997C249.966 219.318 256.62 215.803 266.301 218.429Z" fill="url(#paint12_linear_1921_3174)"/>
					<ellipse cx="229.448" cy="349.294" rx="94.0295" ry="6.6798" fill="#423343"/>
					<g clip-path="url(#clip0_1921_3174)">
					<path d="M268.478 353.854C265.77 352.578 263.68 350.702 262.132 348.3C260.662 345.973 259.888 343.271 259.888 340.343C259.888 338.091 260.275 335.239 260.971 331.936L270.877 287.575L283.957 290.277L273.973 334.714C273.741 335.915 273.664 337.116 273.664 338.091C273.664 340.118 274.438 341.769 275.908 342.97C277.378 344.171 279.313 344.847 281.79 344.847H283.493L280.939 355.656C279.932 355.806 278.772 355.881 277.533 355.881C274.205 355.881 271.187 355.205 268.478 353.854Z" fill="#423343"/>
					</g>
					<path d="M311.384 347.031C307.748 344.47 305.464 340.097 304.454 333.923L296.807 287.132L310.428 285.008L317.93 330.906C318.343 333.435 319.106 335.223 320.32 336.407C321.533 337.591 323.391 337.911 326.069 337.494C327.599 337.255 328.952 336.892 330.052 336.415L331.9 347.722C329.677 348.526 327.353 349.194 324.752 349.6C319.472 350.423 315.02 349.592 311.384 347.031Z" fill="#423343"/>
					<ellipse cx="288.252" cy="253.097" rx="60.7811" ry="59.3705" fill="url(#paint13_linear_1921_3174)"/>
					<path d="M305.811 222.753C305.811 225.157 307.792 227.15 310.313 227.15C312.834 227.15 314.815 225.215 314.815 222.753C314.815 220.348 312.834 218.355 310.313 218.355C307.792 218.355 305.811 220.348 305.811 222.753Z" fill="#1D1D1B"/>
					<path d="M271.593 228.03C269.107 228.03 267.091 226.061 267.091 223.632C267.091 221.203 269.107 219.234 271.593 219.234C274.08 219.234 276.096 221.203 276.096 223.632C276.096 226.061 274.08 228.03 271.593 228.03Z" fill="#1D1D1B"/>
					<path d="M291.464 246.501C294.645 246.501 297.827 245.468 300.408 243.403L298.487 241.223C294.645 244.263 289.062 244.435 285.1 241.625L283.299 243.919C285.701 245.64 288.582 246.501 291.464 246.501Z" fill="#1D1D1B"/>
					<path d="M332.487 122.516C332.043 114.835 340.863 116.078 345.329 117.66C347.61 116.279 352.878 114.491 355.707 118.389C359.244 123.262 352.101 137.526 349.017 138.225C345.933 138.924 333.042 132.118 332.487 122.516Z" fill="#EE4242"/>
					<path d="M346.686 134.376C343.804 134.251 336.485 128.474 333.186 125.601C334.856 135.112 346.62 139.093 349.276 138.653C351.402 138.301 353.852 132.374 354.812 129.454C353.304 131.147 349.568 134.501 346.686 134.376Z" fill="#9F1616"/>
					<path d="M337.742 117.682C338.632 119.152 343.032 119.78 345.121 119.91C351.009 117.683 350.638 112.661 349.716 110.429L344.989 113.292L343.653 108.241L342.153 115.01L337.424 110.758L339.391 115.427L335.144 113.394L337.742 117.682Z" fill="#117033"/>
					<path d="M413.46 178.563C409.156 163.982 427.199 149.09 440.968 160.135C467.313 158.292 460.936 200.991 444.823 201.298C428.71 201.604 417.765 193.144 413.46 178.563Z" fill="#FAB334"/>
					<path d="M446.588 201.355C432.653 204.953 417.825 194.497 413.933 180.033C444.159 208.943 455.395 182.941 456.972 169.591C460.563 174.175 460.523 197.757 446.588 201.355Z" fill="#ED5D2E"/>
					<path d="M441.145 149.297C438.029 151.977 438.188 158.991 438.657 162.164C439.525 162.735 442.281 163.227 446.363 160.62C450.446 158.013 456.687 149.862 459.298 146.112C454.545 146.057 444.262 146.618 441.145 149.297Z" fill="#117033"/>
					<path d="M380.005 120.223C364.803 120.434 355.331 99.0422 369.682 88.7634C375.015 62.8987 414.411 80.5598 410.358 96.1581C406.306 111.756 395.206 120.013 380.005 120.223Z" fill="#FAB334"/>
					<path d="M410.89 94.4749C410.595 108.864 396.525 120.32 381.548 120.166C417.541 98.861 395.535 81.0262 383.105 75.9049C388.489 73.6842 411.185 80.0861 410.89 94.4749Z" fill="#ED5D2E"/>
					<path d="M359.294 85.6688C361.033 89.3927 367.831 91.1323 371.012 91.5366C371.796 90.8553 373.013 88.334 371.605 83.6995C370.196 79.0651 364.031 70.8558 361.125 67.3305C359.79 71.8916 357.555 81.9448 359.294 85.6688Z" fill="#117033"/>
					<path d="M395.169 2.3703C405.967 -4.09523 421.636 7.28842 415.629 20.6104C422.555 41.3472 387.008 45.0653 383.43 32.2122C379.852 19.359 384.37 8.83584 395.169 2.3703Z" fill="#FAB334"/>
					<path d="M383.748 33.6383C377.983 23.212 383.298 9.16363 394.088 3.05241C377.163 33.2604 400.33 36.8904 411.359 35.3942C408.426 39.2206 389.514 44.0645 383.748 33.6383Z" fill="#ED5D2E"/>
					<path d="M424.354 18.5112C421.562 16.5669 415.971 18.145 413.525 19.1771C413.247 19.9908 413.423 22.3017 416.356 25.0353C419.29 27.769 427.115 31.0865 430.661 32.4036C429.722 28.5829 427.146 20.4554 424.354 18.5112Z" fill="#117033"/>
					<path d="M384 341.626C290.5 350.626 298.455 286.426 282 257.126L463.5 242.126C461.505 281.4 477.5 332.626 384 341.626Z" fill="#524351"/>
					<path d="M376.5 278.126C326.396 280.543 271.5 260.126 288.5 260.126C305.5 260.126 463 246.126 463 246.126C461.027 256.7 426.604 275.71 376.5 278.126Z" fill="#352835"/>
					<path d="M380.334 238.246C384.553 233.846 388.588 239.636 390.078 243.081C392.109 243.66 395.988 245.753 395.251 249.498C394.33 254.178 382.199 257.725 380.13 256.311C378.061 254.898 375.06 243.746 380.334 238.246Z" fill="#EE4242"/>
					<path d="M381.107 252.883C379.625 251.143 379.032 243.779 378.92 240.315C374.3 246.413 378.333 255.388 380.021 256.692C381.372 257.736 386.133 255.962 388.345 254.945C386.55 254.982 382.588 254.623 381.107 252.883Z" fill="#9F1616"/>
					<path d="M385.974 238.689C385.601 239.998 387.609 242.891 388.66 244.173C393.128 246.39 395.842 243.466 396.641 241.728L392.43 240.528L394.641 237.028L389.904 239.808L389.821 234.77L388.172 238.43L387.062 234.869L385.974 238.689Z" fill="#117033"/>
					<defs>
					<linearGradient id="paint0_linear_1921_3174" x1="122.003" y1="185.047" x2="67.9801" y2="205.563" gradientUnits="userSpaceOnUse">
					<stop offset="0.307292" stop-color="#146333"/>
					<stop offset="1" stop-color="#FFD69E"/>
					</linearGradient>
					<linearGradient id="paint1_linear_1921_3174" x1="86.7468" y1="164.706" x2="98.0243" y2="207.287" gradientUnits="userSpaceOnUse">
					<stop offset="0.0572917" stop-color="#00784D"/>
					<stop offset="1" stop-color="#0C9900"/>
					</linearGradient>
					<linearGradient id="paint2_linear_1921_3174" x1="70.3807" y1="173.492" x2="103.952" y2="201.567" gradientUnits="userSpaceOnUse">
					<stop offset="0.0572917" stop-color="#066626"/>
					<stop offset="1" stop-color="#66B04C"/>
					</linearGradient>
					<linearGradient id="paint3_linear_1921_3174" x1="82.0341" y1="170.792" x2="82.0341" y2="237.845" gradientUnits="userSpaceOnUse">
					<stop stop-color="#048432"/>
					<stop offset="1" stop-color="#FFD69E"/>
					</linearGradient>
					<linearGradient id="paint4_linear_1921_3174" x1="38.4794" y1="0" x2="38.2058" y2="85.2621" gradientUnits="userSpaceOnUse">
					<stop stop-color="#DF46E2"/>
					<stop offset="1" stop-color="#FFF0DC"/>
					</linearGradient>
					<linearGradient id="paint5_linear_1921_3174" x1="325.126" y1="187.654" x2="240.407" y2="221.006" gradientUnits="userSpaceOnUse">
					<stop offset="0.307292" stop-color="#146333"/>
					<stop offset="1" stop-color="#FFD69E"/>
					</linearGradient>
					<linearGradient id="paint6_linear_1921_3174" x1="269.317" y1="156.593" x2="286.006" y2="221.913" gradientUnits="userSpaceOnUse">
					<stop offset="0.0572917" stop-color="#00784D"/>
					<stop offset="1" stop-color="#0C9900"/>
					</linearGradient>
					<linearGradient id="paint7_linear_1921_3174" x1="243.411" y1="170.009" x2="294.97" y2="214.706" gradientUnits="userSpaceOnUse">
					<stop offset="0.0572917" stop-color="#066626"/>
					<stop offset="1" stop-color="#66B04C"/>
					</linearGradient>
					<linearGradient id="paint8_linear_1921_3174" x1="261.858" y1="165.886" x2="261.858" y2="268.277" gradientUnits="userSpaceOnUse">
					<stop stop-color="#048432"/>
					<stop offset="1" stop-color="#FFD69E"/>
					</linearGradient>
					<linearGradient id="paint9_linear_1921_3174" x1="276.381" y1="175.008" x2="252.286" y2="228.706" gradientUnits="userSpaceOnUse">
					<stop offset="0.307292" stop-color="#146333"/>
					<stop offset="1" stop-color="#FFD69E"/>
					</linearGradient>
					<linearGradient id="paint10_linear_1921_3174" x1="235.539" y1="185.414" x2="273.847" y2="209.024" gradientUnits="userSpaceOnUse">
					<stop offset="0.0572917" stop-color="#00784D"/>
					<stop offset="1" stop-color="#0C9900"/>
					</linearGradient>
					<linearGradient id="paint11_linear_1921_3174" x1="229.657" y1="203.336" x2="274.821" y2="200.074" gradientUnits="userSpaceOnUse">
					<stop offset="0.0572917" stop-color="#066626"/>
					<stop offset="1" stop-color="#66B04C"/>
					</linearGradient>
					<linearGradient id="paint12_linear_1921_3174" x1="236.397" y1="193.129" x2="283.343" y2="242.39" gradientUnits="userSpaceOnUse">
					<stop stop-color="#048432"/>
					<stop offset="1" stop-color="#FFD69E"/>
					</linearGradient>
					<linearGradient id="paint13_linear_1921_3174" x1="288.252" y1="193.727" x2="287.85" y2="323.646" gradientUnits="userSpaceOnUse">
					<stop stop-color="#DF46E2"/>
					<stop offset="1" stop-color="#FFF0DC"/>
					</linearGradient>
					<clipPath id="clip0_1921_3174">
					<rect width="56.729" height="68.6059" fill="white" transform="translate(259.888 292.238)"/>
					</clipPath>
					</defs>
				</svg>
			</div>
        </div>
      </div>
    </section>

    <!-- search -->
	<!-- only displayed on desktop -->
    <section class="hidden md:flex py-[10vh] mx-10 md:mx-0 mb-10">
      <div class="flex flex-col w-full items-center bg-black-200 dark:bg-white-200 space-y-5">
		<h2 class="text-orange-200">
		Trouver des recettes
		</h2>
        <div class="flex flex-col justify-center layer__xl">
			<!-- search bar -->
			<form class="flex items-center gap-5" action="/Recettes">
				<div class="relative w-full">
					<search-bar value="" placeholder="Que voulez-vous cuisiner ?" required="true"></search-bar>
				</div>
				<submit-button>Rechercher</submit-button>
			</form>

          	<!-- tags -->
			<div class="flex flex-row justify-between items-center my-3 ">
				<div class="flex flex-row gap-4 items-center">
					<!-- seasons tags -->
					<nuxt-link v-for="s in currentSeasons" 
						:key="s" 
						:to="`/Recettes?${getSeasonQuery(s)}`"
						>
						<tag look="primary">{{s}}</tag>
					</nuxt-link>
					<!-- quick search tags -->
					<nuxt-link v-for="(t,index) in quickSearchTags" 
						:key="index" 
						:to="`/Recettes${t.tag_query}`"
						>
						<tag :look="t.tag_class">{{t.tag_title}}</tag>
					</nuxt-link>
				</div>
				<!-- filters -->
				<span><hyper-link path="/Recettes" class="font-labil text-base font-medium text-white-200">+ de filtres</hyper-link></span>
			</div>
        </div>
      </div>
    </section>

	<!-- featured recipes -->
	<featured-recipes v-for="(list, index) in horizontalLists" :key="'r'+index" :title="list.title" :items="list.recipes" :link="list.seeAllQuery" />


	<!-- featured articles -->
	<featured-articles v-for="(list, index) in articlesLists"  :key="'a'+index" :title="list.title" :items="list.items" :link="list.seeAllLink"/>

	<spacer size="md"></spacer>
  </div>
</template>

<script>
import FeaturedRecipes from '~/components/FeaturedRecipes'
import FeaturedArticles from '~/components/FeaturedArticles'
import SearchBar from '~/components/SearchBar.vue'
import SubmitButton from '~/molecules/SubmitButton.vue'
import Tag from '~/molecules/Tag.vue'
import BigTitle from '~/molecules/BigTitle.vue'
import LinkButton from '~/molecules/LinkButton.vue'
import Spacer from '~/molecules/Spacer.vue'
import HyperLink from '~/molecules/HyperLink.vue';



export default {
	components: {
		FeaturedRecipes,
		FeaturedArticles,
		SearchBar,
		SubmitButton,
		Tag,
		BigTitle,
		LinkButton,
		Spacer,
		HyperLink
	},
	data(){
		return {
			query: "",
			featuredQuery: "",
			featuredSeeAllLink: "",
			seasonsAndMonths:{
				winter: {11: "Décembre", 0: "Janvier",1:"Février",2:"Mars"},
				spring: {2: "Mars", 3:"Avril", 4:"Mai", 5:"Juin"},
				summer: {5: "Juin",6: "Juillet",7: "Août",8: "Septembre"},
				autumn: {8: "Septembre", 9: "Octobre", 10: "Novembre",11: "Décembre"}
			}
		}
	},
	computed:{
		currentSeasons(){
			let month= new Date().getMonth();

			let seasons = [];
			if(month in this.seasonsAndMonths.winter){
				seasons.push("hiver");
			}
			if(month in this.seasonsAndMonths.spring){
				seasons.push("printemps");
			}
			if(month in this.seasonsAndMonths.summer){
				seasons.push("été");
			}
			if(month in this.seasonsAndMonths.autumn){
				seasons.push("automne");
			}

			return seasons;
		}
	},
	methods:{
		getSeasonQuery(s){
			let months;
			switch(s){
				case "hiver":
					months = Object.values(this.seasonsAndMonths.winter);
					break;

				case "printemps":
					months = Object.values(this.seasonsAndMonths.spring);
					break;

				case "été":
					months = Object.values(this.seasonsAndMonths.summer);
					break;

				case "automne":
					months = Object.values(this.seasonsAndMonths.autumn);
					break;

			}

			return months.map((m) => `months=${m}`).join('&'); 
		}
	},
	head () {
		return {
			title: this.document.data.meta_title,
			meta: [
					{
						hid: 'description',
						name: 'description',
						content: this.document.data.meta_description
					},
					{
						hid: 'og:title',
						name: 'og:title',
						content: this.document.data.meta_title
					},
					{
						hid: 'og:description',
						name: 'og:description',
						content: this.document.data.meta_description
					},
					{
						hid: 'og:image',
						name: 'og:image',
						content: this.document.data.facebook_image.url
					},
					{
						hid: 'og:url',
						name: 'og:url',
						content: `https://www.fristouille.org${this.document.url}` 
					}
				]
		}
	},
	async asyncData({ $prismic, $axios, $config, params, error }) {
		try{			
			const document =  (await $prismic.api.getSingle('homepage'));
			const page = document.data;
			// console.log("HOMEPAGE");

			let horizontalListsSlices = page.body.filter(s => s.slice_type === 'horizontal_list');
			let featuredContentsSlices = page.body.filter(s => s.slice_type === 'featured_content');
			let quickSearchTagsSlices = page.body.filter(s => s.slice_type === 'quick_search_tags');

			//horizontal lists of recipes
			let horizontalLists = await Promise.all(
				horizontalListsSlices.map(async (hl) => {
					//based on the horizontal list query_filter prop, query the Algolia index to get the featured recipes
					const featuredRecipes = (await $axios.get($config.searchIndexFunction,{
						params: {
							query: hl.primary.query_term,
							filters: hl.primary.query_filters
						}
					}
					)).data;

					return {
						title: hl.primary.list_title,
						seeAllQuery: hl.primary.see_all_querystring,
						recipes: featuredRecipes
					}
				})
			);

			let articlesLists = await Promise.all(
				featuredContentsSlices.map(async (fc) =>{
					//get the documents of the related articles
					let featured_ids = fc.items.map(i =>  i.featured_page.id );
					const featured_documents = (await $prismic.api.query( 
						$prismic.predicates.any('document.id', featured_ids) 
					)).results

					return {
						title: fc.primary.featured_title, 
						seeAllLink: fc.primary.see_all_link.url,
						items: featured_documents
					};
				})
			);

			//return homepage data: the page itself, featured recipes and featured content
			return {
				document: document,
				horizontalLists: horizontalLists,
				articlesLists: articlesLists,
				quickSearchTags: quickSearchTagsSlices[0].items,
			}
		
		} catch (e) {
			// Returns error page
			console.log("error in homepage",e);
			error({ statusCode: 404, message: 'Page not found' })
		}
	}
}
</script>
