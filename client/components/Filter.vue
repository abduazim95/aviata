<template>
	<v-card class="filter mb-3 elevation-0" color="#f5f5f5">
		<v-card-title class="title">{{ filter.title }}</v-card-title>
		<v-list class="p-0">
      <div v-if="filter.checkAll" class="filter-item" @click="setGroupFilters">
        <div class="checkbox" :class="{'active': isCheckedAll}"/>
        Все
      </div>
			<filter-item
				v-for="item in filter.data"
				:key="item.value"
				:item="item"
				:filter-name="filter.alias"
				@tick="setFilter(item)"
				@untick="unsetFilter(item)"
			>{{item.text}}</filter-item>
		</v-list>
		<div class="reset-filter">
			<reset-icon @click="unsetGroupFilter" v-if="isVisibleReset" />
		</div>
	</v-card>
</template>
<script>
import FilterItem from './FilterItem.vue';
import ResetIcon from '@/static/reset.svg';
import { mapGetters, mapMutations } from 'vuex';

export default {
	props: ['filter'],
	data() {
		return {};
	},
	components: {
		FilterItem,
		ResetIcon
	},
	computed: {
		...mapGetters({
			'$filters': 'filters/filters'
    }),
    isVisibleReset () {
      return this.$filters.some(filter => filter.alias === this.filter.alias)
    },
    isCheckedAll () {
      return this.$filters.filter(filter => filter.alias === this.filter.alias).length === this.filter.data.length
    }
	},
	methods: {
		...mapMutations('filters', [
			'SET_FILTER',
			'SET_GROUP_FILTERS',
			'UNSET_FILTER',
			'UNSET_GROUP_FILTERS'
		]),
		setFilter(item) {
			const payload = { alias: this.filter.alias, value: item.value };
			this.SET_FILTER(payload);
    },
    setGroupFilters() {
      if (!this.isCheckedAll) {
        const payload = this.filter.data.map(filter => ({ alias: this.filter.alias, value: filter.value }))
        this.SET_GROUP_FILTERS(payload)
        return;
      }
      this.UNSET_GROUP_FILTERS({ alias: this.filter.alias })
    },
		unsetFilter(item) {
      const payload = { alias: this.filter.alias, value: item.value }
      this.UNSET_FILTER(payload)
    },
    unsetGroupFilter () {
      this.UNSET_GROUP_FILTERS({ alias: this.filter.alias })
    }
	}
};
</script>