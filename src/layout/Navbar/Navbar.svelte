<script lang="ts">
	import { page } from '$app/stores';
	import { isUrlContainPath } from '$lib/utils';

	// @ts-nocheck

	import { onMount } from 'svelte';

	onMount(() => {
		const tabs = document.querySelectorAll('.tab');
		const tabContainer = document.querySelector('.tab-nav-container') as HTMLDivElement;

		function disactiveAllTabs() {
			tabs.forEach((tab) => {
				tab.classList.remove('active');
			});
		}

		function changeTabContainerRadius() {
			if (tabContainer.style.borderTopLeftRadius === '40px') {
				tabContainer.style.borderTopLeftRadius = '10px';
			} else {
				tabContainer.style.borderTopLeftRadius = '40px';
			}
			if (tabContainer.style.borderTopRightRadius === '10px') {
				tabContainer.style.borderTopRightRadius = '40px';
			} else {
				tabContainer.style.borderTopRightRadius = '10px';
			}
			if (tabContainer.style.borderBottomLeftRadius === '10px') {
				tabContainer.style.borderBottomLeftRadius = '40px';
			} else {
				tabContainer.style.borderBottomLeftRadius = '10px';
			}
			if (tabContainer.style.borderBottomRightRadius === '40px') {
				tabContainer.style.borderBottomRightRadius = '10px';
			} else {
				tabContainer.style.borderBottomRightRadius = '40px';
			}
		}

		function activeSelectedTab(e: any) {
			console.log(e.currentTarget);
			if (!e.currentTarget.classList.contains('tab')) {
				return;
			} else {
				// disactiveAllTabs();
				changeTabContainerRadius();
				// e.currentTarget.classList.add("active");
				// setTimeout(() => {window.addEventListener("scroll", changeTheActiveOnScroll)}, 2000)
			}
		}

		const sections = document.querySelectorAll('section');

		changeTheActiveOnScroll();

		function changeTheActiveOnScroll() {
			var current: string | null = '';

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				if (scrollY + 100 >= sectionTop - 60) {
					current = section.getAttribute('id');
				}
			});

			console.log('tab atual: ' + current);
			console.log('scrollY: ' + scrollY);
			tabs.forEach((tab) => {
				if (current !== null) {
					tab.classList.remove('active');
					if (tab.classList.contains(current)) {
						tab.classList.add('active');
					}
				}
			});
		}

		window.addEventListener('scroll', changeTheActiveOnScroll);

		tabs.forEach((tab) => {
			// tab.addEventListener('click', (e) => { window.removeEventListener("scroll", changeTheActiveOnScroll); activeSelectedTab(e); });
			tab.addEventListener('click', activeSelectedTab);
		});
	});
</script>

<header>
	<div class="tab-nav-container text-sm w-[275px] sm:w-[375px] lg:w-[475px] p-[12px] sm:p-[24px]">
		<a href="#Hero" class="tab Hero active purple">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				class="w-[0.8em] h-[0.8em] sm:w-[1.2em] sm:h-[1.2em]"
				version="1.1"
				id="_x32_"
				viewBox="0 0 512 512"
				xml:space="preserve"
			>
				<g>
					<polygon
						points="434.162,293.382 434.162,493.862 308.321,493.862 308.321,368.583 203.682,368.583 203.682,493.862    77.841,493.862 77.841,293.382 256.002,153.862  "
					/>
					<polygon
						points="0,242.682 256,38.93 512,242.682 482.21,285.764 256,105.722 29.79,285.764  "
					/>
					<polygon points="439.853,18.138 439.853,148.538 376.573,98.138 376.573,18.138  " />
				</g>
			</svg>
			<p>Home</p>
		</a>
		<a href="#About" class="tab About pink">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-[1em] h-[1em] sm:w-[1.4em] sm:h-[1.4em]"
				viewBox="0 0 32 32"
				><path
					d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"
				/></svg
			>
			<p>About</p>
		</a>
		<a class="tab Portfolio yellow" href="#Portfolio">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-[0.8em] h-[0.8em] sm:w-[1.2em] sm:h-[1.2em]"
				viewBox="0 0 24 24"
				id="folder-code"
				><path
					d="M20,6H13.41L11,3.59A2,2,0,0,0,9.59,3H4A2,2,0,0,0,2,5V19a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V8A2,2,0,0,0,20,6Zm-9.29,8.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0l-2-2a1,1,0,0,1,0-1.42l2-2a1,1,0,0,1,1.42,1.42L9.41,13Zm6-.58-2,2a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,13l-1.3-1.29a1,1,0,0,1,1.42-1.42l2,2A1,1,0,0,1,16.71,13.71Z"
				/></svg
			>
			<p>Portfolio</p>
		</a>
		<a class="tab Contact teal" href="#Contact">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				class="w-[0.8em] h-[0.8em] sm:w-[1.2em] sm:h-[1.2em]"
				viewBox="0 0 36 36"
				version="1.1"
				preserveAspectRatio="xMidYMid meet"
			>
				<path
					class="clr-i-solid clr-i-solid-path-1"
					d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z"
				/><path
					class="clr-i-solid clr-i-solid-path-2"
					d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"
				/>
			</svg>
			<p>Contact</p>
		</a>
	</div>
</header>

<style>
	header {
		z-index: 10;
		position: fixed;
		left: 50%;
		bottom: 50px;
		transform: translate(-50%, -50%);
	}

	.tab-nav-container {
		display: flex;
		justify-content: space-between;
		background-color: rgb(225, 225, 225);
		border-top-right-radius: 10px;
		border-top-left-radius: 40px;
		border-bottom-right-radius: 40px;
		border-bottom-left-radius: 10px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
		transition: border-radius 0.3s linear;
	}

	.tab {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 15px;
		margin: 0 0px;
		background-color: rgb(225, 225, 225);
		border-radius: 40px;
		cursor: pointer;
		transition: background 0.3s linear;
		transition: color 0.3s linear;
		transition: fill 0.3s linear;
	}

	.tab svg {
		font-size: 1.3em;
	}

	.tab p {
		font-weight: bold;
		overflow: hidden;
		max-width: 0;
		transition-duration: 0.2s;
	}

	.tab.active p {
		max-width: 200px;
		margin-left: 10px;
		transition: max-width 0.2s linear;
	}

	.tab.active.purple {
		background-color: rgba(91, 55, 183, 0.2);
		color: rgba(91, 55, 183, 1);
		fill: rgba(91, 55, 183, 1);
	}

	:global(.tab.active.pink) {
		background-color: rgba(201, 55, 157, 0.2);
		color: rgba(201, 55, 157, 1);
		fill: rgba(201, 55, 157, 1);
	}

	:global(.tab.active.yellow) {
		background-color: rgba(231, 169, 25, 0.2);
		color: rgba(231, 169, 25, 1);
		fill: rgba(231, 169, 25, 1);
	}

	:global(.tab.active.teal) {
		background-color: rgba(28, 150, 162, 0.2);
		color: rgba(28, 150, 162, 1);
		fill: rgba(28, 150, 162, 1);
	}
</style>
