<script setup>
import {onMounted, reactive, toRefs} from "vue";

const props = defineProps(['data']);
const { data } = toRefs(props);

const visibleData = reactive([]);

onMounted(() => {
  getDefaultData();
})

const getDefaultData = () => {
  for (let i = 0; i < data.value.length; i++) {
    visibleData.push({
      name: data.value[i].name,
      id: data.value[i].id,
      isActive: false,
      children: data.value[i].children,
      hierarchyLevel: data.value[i].hierarchyLevel,
    });
  }
}

const openNewRow = (item, indexVisibleData) => {
  visibleData.splice(indexVisibleData + 1, 0, ...item.children)
}

const closeRow = (item, indexVisibleData) => {
  let closeAdditionalRow = 0;

  for (let i = indexVisibleData; i < visibleData.length; i++) {
    if (visibleData[i].isActive) {
      closeAdditionalRow += visibleData[i].children.length;
      visibleData[i].isActive = false

      // тут я еще не разобрался
      // for (let a = 0; a < visibleData[i].children.length; a++) {
      //   if (visibleData[i].children[a].children?.length) {
      //     console.log(closeAdditionalRow);
      //     console.log(visibleData[i].children[a].children.length);
      //     closeAdditionalRow += visibleData[i].children[a].children.length;
      //     visibleData[i].children[a].isActive = false;
      //     break;
      //   }
      // }
    }
  }
  console.log(closeAdditionalRow);
  visibleData.splice(indexVisibleData + 1, item.children.length + closeAdditionalRow)
}

const getDataBranch = (item) => {
  const indexVisibleData = visibleData.findIndex((el) => {
    return el.id === item.id
  });

  if (!item.isActive) {
    item.isActive = true;
    openNewRow(item, indexVisibleData)
  } else {
    item.isActive = false;
    closeRow(item, indexVisibleData)
  }
}

const getHierarchyBasedPadding = (item) => {
  return `${item.hierarchyLevel * 16}px`
}
</script>

<template>
<div>
  <div class="hierarchy">
    <div
        v-for="item in visibleData"
        class="hierarchy__row"
        :style="{'padding-left': getHierarchyBasedPadding(item)}"
    >
      <div
          class="hierarchy__row-icon"
          @click="getDataBranch(item)"
          :class="{ active: item.isActive }"
      >
        <span v-if="item.hierarchyLevel !== 4">
          ->
        </span>
      </div>
      <div class="hierarchy__row-content">
        {{ item.name }}
<!--        {{ item.hierarchyLevel }}-->
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.hierarchy {
  background-color: #ccc;
}

.hierarchy__row {
  display: flex;
}

.hierarchy__row-icon {
  margin-right: 4px;
}
.hierarchy__row-icon.active {
  transform: rotate(90deg);
}
</style>