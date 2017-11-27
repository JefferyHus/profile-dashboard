<template>
	<v-content>
		<v-container fluid grid-list-md>
			<v-layout row wrap>
				<v-flex xs12 md4>
					<v-card light color="default" class="profile-card custom">
						<v-avatar size="125px">
							<img class="img-circle elevation-7 mb-1" src="https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/lists/1.jpg">
						</v-avatar>
						<v-card-text>
							<p class="title">{{user.name}}</p>
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex xs12 md8>
					<v-card light color="default" class="custom">
						<v-card-text>
							<h2>About us</h2>
							<p>{{user.about}}</p>
						</v-card-text>
						<v-card-actions class="align--center">
							<v-avatar class="teal">
								<v-icon dark>location_on</v-icon>
							</v-avatar>
							<v-text>spain</v-text>
							<v-avatar class="teal">
								<v-icon dark>date_range</v-icon>
							</v-avatar>
							<v-text>{{user.date}}</v-text>
							<v-avatar class="teal">
								<v-icon dark>star</v-icon>
							</v-avatar>
							<v-text>{{user.start}} Stars</v-text>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs12 md8>
					<v-card class="diary--content black--text">
						<v-layout row wrap>
							<v-flex xs8>
								<h2 class="grey--text">Work History and Feedback</h2>
							</v-flex>
							<v-flex xs4>
					            <v-select
					              v-bind:items="options"
					              label="Select"
					              single-line
					              auto
					              hide-details
					              class="with-border border--teal"
					            ></v-select>
							</v-flex>
						</v-layout>
						<v-layout row wrap>
							<v-flex xs12>
						        <v-list two-line>
						          <template v-for="(work, index) in user.works">
						            <v-list-tile avatar ripple v-bind:key="index" @click="" class="custom-template">
						              <v-list-tile-content>
						                <v-list-tile-title class="green--text">{{ work.title }}</v-list-tile-title>
						                <v-list-tile-sub-title class="grey--text text--darken-4">{{ work.headline }}</v-list-tile-sub-title>
						                <v-list-tile-sub-title>{{ work.description }}</v-list-tile-sub-title>
						                <v-list-tile-sub-title class="italic--text">{{ work.status }}</v-list-tile-sub-title>
						              </v-list-tile-content>
						              <v-list-tile-action>
						                <v-list-tile-title class="black--text text--right title">{{ work.rate.time }}</v-list-tile-title>
						                <v-list-tile-sub-title class="grey--text text--right text--darken-4">{{ work.rate.rate }}</v-list-tile-sub-title>
						                <v-list-tile-sub-title class="grey--text text--right text--darken-4">{{ work.rate.earned }}</v-list-tile-sub-title>
						              </v-list-tile-action>
						            </v-list-tile>
						            <v-divider v-if="index + 1 < user.works.length"></v-divider>
						          </template>
						        </v-list>
							</v-flex>
						</v-layout>
					</v-card>
				</v-flex>
				<v-flex xs12 md4>
					<v-card class="diary--content black--text">
						<v-layout row wrap>
							<v-flex xs12>
								<h3>Forum messages</h3>
								<div class="full-demo"></div>
								<v-divider></v-divider>
							</v-flex>
							<v-flex xs12>
								<h3>Langauges</h3>
						        <v-list two-line>
						          <template v-for="langauge in user.languages">
						            <v-list-tile avatar v-bind:key="langauge.title" @click="">
						              <v-list-tile-content>
						                <v-list-tile-title v-html="langauge.title"></v-list-tile-title>
						              </v-list-tile-content>
						            </v-list-tile>
						          </template>
						        </v-list>
							</v-flex>
						</v-layout>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
	export default {
		data() {
			return {
				user: {},
				options: ["Newest first", "Latest first"]
			}
		},
		computed: {
			user() {
				return this.$store.getters.getUser
			}
		},
		methods: {

		},
		mounted: function () {
			this.user = this.$store.getters.getUser
		}
	}
</script>

<style scoped>
	.container.grid-list-md .layout .flex{
		padding: 4px;
	}
	.card.custom{
	    padding: 25px;
	    height: 350px!important;
	}
	.card.profile-card{
		text-align: center;
	    display: flex;
	    flex-wrap: wrap;
	    align-items: center;
	    justify-content: center;
	}
	.with-border{
		border: 1px solid #000;
	}
	.with-border.border--teal{
		border-color: #009688!important;
	}
	.diary--content{
		padding: 15px;
	}
	.full-demo{
		height: 250px;
	}
	.italic--text{
		font-style: italic;
	}
	.custom-template{
		padding: 15px;
	}
	.align--center{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
</style>