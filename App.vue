<template>
	<v-app light>
		<profile></profile>
	</v-app>
</template>

<script>
	import Profile from './components/Profile.vue'

	export default {
		components: {
			profile: Profile
		}
	}
</script>