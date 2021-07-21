<template>
  <iframe
    :src="iframeUrl"
    frameborder="0"
    width="800"
    height="600"
    allowtransparency
  ></iframe>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      tableT: this.$store.getters.getTable,
      iframeUrl: "",
    };
  },
  async mounted() {
    await this.load_page();
  },
  methods: {
    async load_page() {
      var jwt = require("jsonwebtoken");

      var METABASE_SITE_URL = "https://52.47.200.119/metabase";
      var METABASE_SECRET_KEY =
        "762e551a9300b5a7dba3169bbee87cc4f76678df9f29fbefc8d61b74f05e15aa";

      var payload = {
        resource: { dashboard: 33 },
        params: {},
        exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
      };
      let token = jwt.sign(payload, METABASE_SECRET_KEY);

      this.iframeUrl =
        METABASE_SITE_URL +
        "/embed/dashboard/" +
        token +
        "#bordered=true&titled=true";
    },

    // await axios
    //   .get('http://localhost:8080/')
    //   .then(response => {console.log(response.data)}
    //
  }
};
</script>


<style>
iframe {
  frameborder: "0";
  /* width:"1400";
    height:"1400"; */
  width: 100%;
}
</style>