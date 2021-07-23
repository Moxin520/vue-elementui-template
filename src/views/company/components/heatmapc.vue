<script>
export default {
  render(h) {
    return h("div", { ref: "heatMap", style: "width:300px;height:300px" });
  },
  mounted() {
    // const red = Object.freeze({
    //   0.05: "#0070C9",
    //   0.1: "#F6C6CF",
    //   0.3: "#EC8096",
    //   0.5: "#ffffff",
    //   0.7: "#E44A69",
    //   0.9: "#E02C50",
    //   1: "#FF200E"
    // });
    const red = {
      // "-0.1": "rgb(220,20,60)",
      "0.1": "rgb(65,105,225)",
      "0.5": "rgb(255,255,255)",
      "0.85": "rgb(220,20,60)"
    };
    this._heatmapInstancep = this.$Heatmap.create({
      container: this.$refs.heatMap,
      gradient: red
    });
    // opacity = value-min/max -min
    let data = {
      max: 1,
      min: 0,
      radius: 1,
      blur: 0.75,
      data: [
        { x: 100, y: 100, value: 1.5 },
        { x: 130, y: 120, value: 0.7 }, //负值全部加最小1
        { x: 160, y: 140, value: 0.1 },
        { x: 200, y: 140, value: 0.1 }
      ]
    };
    this._heatmapInstancep.setData(data);
  }
};
</script>
