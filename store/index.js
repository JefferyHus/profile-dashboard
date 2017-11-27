import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		user: {
			name: "John Dowe",
			date: "17 Sep 2017",
			stars: 5,
			languages: [
				{title: "Arabic", level: "Fluent"},
				{title: "English", level: "Fluent"},
				{title: "French", level: "Basics"},
				{title: "Italian", level: "native"}
			],
			address: {
				country: "spain",
				city: "valencia",
				postal: "104-2336 A"
			},
			works: [
				{ title: "Demo title, work one", headline: "Jul 27 - Present", description: "lorem ipsum dolor, hajit ipto valar", status: "in progress", rate: { time: "40hrs", rate: "30$/month", earned: "1230$" } },
				{ title: "Demo title, work one", headline: "Jul 27", description: "", status: "in progress", rate: { time: "10hrs", rate: "70$/month", earned: "70$" } }
			],
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac mattis arcu, a luctus nibh. Etiam est risus, porta sed vestibulum vitae, tincidunt in neque. In eu pellentesque lectus. Suspendisse semper orci eu dolor tincidunt, nec rhoncus mi luctus. Aenean hendrerit, urna faucibus accumsan ultricies, felis quam aliquam ligula, sed bibendum risus massa id sem. Sed sollicitudin elit risus, sed bibendum odio gravida vitae. Nam lacinia augue nec commodo gravida. Aliquam lacinia interdum lobortis. Morbi semper vehicula convallis."
		}
	},
	getters,
	mutations,
	actions
})