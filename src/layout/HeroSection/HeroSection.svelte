<script lang="ts">
	import { HeroSectionCanvas } from '$lib/scripts/HeroSectionCanvas';
	import { onMount } from 'svelte';

	onMount(() => {
		HeroSectionCanvas();
	});
</script>

<section id="Hero" class="hero">
	<div>
		<div id="page" class="site">
			<canvas class="banner_canvas" id="canvas_banner" />
		</div>
		<div class="hero__container">
			<div class="hero__heading">
				<div>
					<h1 class="hero__title text-2xl sm:text-4xl md:text-6xl">Hi, I'm Luan Rabelo</h1>
				</div>
				<div id="bg">
					<h2 class="hero__subtitle font-semibold text-xl sm:text-3xl md:text-5xl">
						Software Developer
					</h2>
				</div>
			</div>
			<div class="mt-6 font-medium flex gap-6 sm:gap-12 md:gap-[140px] justify-center">
				<a
					data-sveltekit-preload-data="tap"
					href="#About"
					class="btn text-base sm:text-xl md:text-2xl">About me</a
				>
				<a
					data-sveltekit-preload-data="tap"
					href="#Contact"
					class="btn text-base sm:text-xl md:text-2xl">Get in touch</a
				>
			</div>
		</div>

		<div class="hero__shadow" />
	</div>
</section>

<style>
	.hero__shadow {
		pointer-events: none;
		z-index: 5;
		position: absolute;
		bottom: 0;
		margin: auto;
		height: 100vh;
		left: 0;
		right: 0;
		box-shadow: inset 0px -45px 20px -10px #000;
	}

	.btn {
		pointer-events: all;
	}

	.hero__container {
		color: white;
		pointer-events: none;
		z-index: 3;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		left: 0;
		right: 0;
		height: fit-content;
		text-align: center;
	}

	#bg {
		width: inherit;
		background: linear-gradient(
			to right,
			#ff0800 0%,
			#ffff00 17%,
			#2aff00 34%,
			#00fff2 51%,
			#004cff 68%,
			#f400fc 85%,
			#ff0800 100%
		);
		background-clip: text;
		animation: slide 5s infinite linear forwards;
		background-size: 700px 150px;
	}

	@keyframes slide {
		0% {
			background-position-x: 0%;
		}
		100% {
			background-position-x: 700px;
		}
	}
	.hero__title {
		color: #ffffff;
		text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9;
	}

	.hero__subtitle {
		-webkit-text-fill-color: transparent;
		text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.1);
	}

	.banner_canvas {
		display: block;
		z-index: 0;
		top: 0;
		left: 0;
		height: 100svh;
		width: 100%;
	}

	a {
		--gradient: #f44, #e74, #cb3, #5c5, #5ca, #78e, #d6d;
		background: linear-gradient(90deg, var(--gradient), var(--gradient), var(--gradient));
		/* It actually scrolls from the second gradient to the third so the left and right edges aren't fkted up */
		background-size: 600%;
		outline: 0;
		padding: 0.2em 0.5em;
		border-radius: 6px;
		border: none;
		color: white;
		position: relative;
		z-index: 2;
		box-sizing: border-box;
		animation: scrollbg linear 6s infinite;
		transition: 0.2s ease;
		filter: saturate(0.8);
		cursor: pointer;
	}
	@keyframes scrollbg {
		0% {
			background-position: 33.333333333333333% 0%;
			/* Second gradient ((600%/3) / 600%) */
		}
		100% {
			background-position: 75% 0%;
			/* Third gradient + half width ((600%/3 * 2 + 50%) / 600%) */
		}
	}

	a:hover {
		transform: scale(1.05);
		filter: saturate(1);
		animation: scrollbg linear 0.5s infinite;
		opacity: 1;
	}
	a:active {
		filter: saturate(1);
		transform: scale(1.1);
		opacity: 1;
	}
	a:before {
		background-color: var(--bgColor);
		content: '';
		position: absolute;
		left: 0.1em;
		top: 0.1em;
		width: calc(100% - 0.2em);
		height: calc(100% - 0.2em);
		border-radius: 0.1em;
		z-index: -1;
	}
	a:active:before {
		opacity: 0.8;
	}
	a:after {
		background: inherit;
		content: '';
		position: absolute;
		left: 0.2em;
		top: 0.2em;
		width: calc(100% - 0.4em);
		height: calc(100% - 0.4em);
		filter: blur(32px);
		opacity: 0;
		border-radius: 0.1em;
		z-index: -2;
	}
	a:hover:after {
		opacity: 1;
	}
	a:active:after {
		opacity: 1;
		filter: blur(48px);
	}
</style>
