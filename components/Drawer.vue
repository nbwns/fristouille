<template>
	<div>
		<div class="drawer bg-black-100 w-full flex flex-col justify-start items-center" :style="{
			height: visible ? '87vh' : '0',
			// paddingTop: visible ? '10px' : '0',
		}">
			<slot></slot>
		</div>
		<div class="drawer-mask" :style="{
			height: visible ? '100vh' : '0',
			opacity: visible ? '0.6' : '0',
		}" @click="$emit('close')"></div>
	</div>
</template>

<script>
export default {
	props: {
		visible: Boolean
	}
}
</script>

<style>
.drawer {
	position: fixed;
	/* STEPH: j'ai fait ça pour pas qu'il disparaisse quand on scrolle vers le bas, ou alors il faudrait bloquer le scroll sur le body ? */
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 0;
	/* initially */
	overflow: hidden;
	padding-top: 0;
	/* initially */
	z-index: 200;
	transition: all 0.2s;
	/* for the animation */
}

.drawer-mask {
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 0;
	/* initially */
	background: #000;
	opacity: 0.3;
	z-index: 199;
}
</style>