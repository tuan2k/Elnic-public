<template>
  <div id="content-block">
    <Header />
    <div class="grey-background">
      <!-- <div class="empty-space col-xs-b40 col-sm-b80"></div> -->
      <div class="container">
        <div class="row">
          <div class="empty-space col-xs-b40 col-sm-b80"></div>
          <router-view />
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header/Header.vue";
import Sidebar from "./sidebar/Sidebar.vue";
export default {
  name: "Layout",
  components: {
    Header,
    Sidebar
  }
};
</script>
