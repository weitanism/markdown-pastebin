<template>
  <div class="container">
    <div class="link" v-bind:class="{'hide': !link}">
      <i class="fa fa-link link-icon"></i>
      {{ this.link }}
    </div>
    <div class="share" v-bind:class="{'hide': link}" v-on:click="share">Share</div>
  </div>
</template>

<script>
export default {
  name: "Share",
  props: ["link"],
  methods: {
    share() {
      this.$emit("share");
    }
  }
};
</script>

<style scoped>
.container {
  height: 36px;
}

.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid gray;
  border-radius: 5px;
  height: 100%;
  position: relative;
}

.link.hide {
  display: none;
}

.share {
  user-select: none;
  cursor: pointer;
  border: 2px solid gray;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  font-weight: bold;
  height: 100%;
}

.share.hide {
  display: none;
}

.link-icon {
  margin-right: 4px;
}
</style>
