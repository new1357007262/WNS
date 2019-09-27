<template>
  <div class="scholl">
    <div id="map_content" @click="shou"></div>
    <div class="low_content" :style="{top:height*(ee ? 0.2 : 0.8)+'px'}">
      <div class="shang" @click="shang">
        <img v-if="flag" src="../assets/double-down.png" alt />
        <img v-else src="../assets/double-up.png" alt />
      </div>
      <div class="box_content">
        <div class="rongqi" v-for="(i,index) in list" :key="index">
          <div @click="walking(i.lng,i.lat)">
            <span>{{i.name}}</span>
            <img src="../assets/you.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { IndexList, IndexSection, Cell } from "mint-ui";
export default {
  name: "Scholl",
  components: {
    // IndexList,
    // IndexSection,
    // Cell
  },
  data() {
    return {
      flag: false,
      height: 0,
      ee: false,
      map: {},
      localtion: [116.419356, 39.941567],
      list: []
    };
  },
  mounted() {
    this.height = document.documentElement.clientHeight; // 获取浏览器的可见高度
    this.map = new AMap.Map("map_content", {
      // center: this.localtion,
      // zoom: 14,
      resizeEnable: true
    });
    this.getLocation();
    this.$axios.get("http://203.195.219.213:8083/map/FindAll").then(result => {
      this.list = result.data.data;
    });
  },
  methods: {
    shou() {
      this.ee = false;
      this.flag = false;
    },
    shang() {
      this.ee = !this.ee;
      this.flag = !this.flag;
    },
    getLocation() {
      AMap.plugin("AMap.Geolocation", () => {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          // buttonOffset: new AMap.Pixel(10, 20),
          // //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          // //  定位按钮的排放位置,  RB表示右下
          //   buttonPosition: none
          showButton: false
        });
        this.map.addControl(geolocation);
        geolocation.getCurrentPosition();
        // 成功
        AMap.event.addListener(geolocation, "complete", data => {
          console.log(data);
          // console.log(data.position)
          this.localtion = [data.position.lng, data.position.lat];
          console.log(this.localtion);
        });
        // 失败
        AMap.event.addListener(geolocation, "error", data => {
          // 定位出错
          console.log(data);
          alert("定位失败，请查看是否打开定位权限");
          // 失败之后调用这个方法，使用IP定位获取当前城市信息
          //   this.getLngLatLocation();
        });
      });
    },
    walking(lng, lat) {
      this.map.clearMap();
      var walkingOption = {};

      // 步行导航
      var walking = new AMap.Walking(walkingOption);
      console.log(this.localtion);
      console.log([lng, lat]);
      //根据起终点坐标规划步行路线
      // walking.search([this.localtion[0],this.localtion[1]], [lng, lat], (status, result)=>{
        
      walking.search([109.887237, 40.657005], [lng, lat], (status, result) => {
        // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
        if (status === "complete") {
          console.log(result);
          if (result.routes && result.routes.length) {
            this.drawRoute(result.routes[0]);
            this.shou();
            walking.clear();
            log.success("绘制步行路线完成");
          }
        } else {
          console.log(result);
          log.error("超出步行导航距离，请调用高德地图");
          // log.error('步行路线数据查询失败' + result)
        }
      });
    },
    // 整个划线方法
    drawRoute(route) {
      let map = this.map;
      var path = this.parseRouteToPath(route);
      // 设置终点，起点maker
      var startMarker = new AMap.Marker({
        position: path[0],
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/start.png",
        map: map
      });
      var endMarker = new AMap.Marker({
        position: path[path.length - 1],
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/end.png",
        map: map
      });
      // 划线
      var routeLine = new AMap.Polyline({
        path: path,
        isOutline: true,
        outlineColor: "#ffeeee",
        borderWeight: 2,
        strokeWeight: 5,
        strokeColor: "#0091ff",
        lineJoin: "round"
      });

      routeLine.setMap(map);

      // 调整视野达到最佳显示区域
      map.setFitView([startMarker, endMarker, routeLine]);
    },

    // 解析WalkRoute对象，构造成AMap.Polyline的path参数需要的格式
    // WalkRoute对象的结构文档 https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkRoute
    // 加工路线
    parseRouteToPath(route) {
      var path = [];
      for (var i = 0, l = route.steps.length; i < l; i++) {
        var step = route.steps[i];
        for (var j = 0, n = step.path.length; j < n; j++) {
          path.push(step.path[j]);
        }
      }
      return path;
    }
  }
};
</script>
<style lang="scss" >
.scholl {
  width: 100%;
  height: 100%;
  #map_content {
    width: 100%;
    height: 100%;
    /* 强行修改地图下logo */
    .amap-logo {
      display: none !important;
      opacity: 0;
    }
    .amap-copyright {
      display: none !important;
      opacity: 0;
    }
  }
  .low_content {
    height: 80%;
    position: fixed;
    top: 80%;
    left: 0;
    right: 0;
    background-color: rgba(32, 113, 218, 0.9);
    .shang {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: #fff 1px solid;
      background-color: #fff;
      position: relative;
      right: -250px;
      top: -30px;
      z-index: 10;
      img {
        position: relative;
        left: 13px;

        animation: myamin ease 0.5s;
        animation-iteration-count: infinite;
        /* animation-direction:inherit; */
        animation-fill-mode: forwards;
        animation-direction: alternate;
      }
      @keyframes myamin {
        0% {
          top: -49px;
        }
        100% {
          top: -33px;
        }
      }
    }
    .box_content {
      height: 75%;
      width: 100%;
      overflow: auto;
      .rongqi {
        width: 100%;
        overflow: auto;
        div {
          width: 100%;
          line-height: 50px;
          display: flex;
          justify-content: cenetr;
          padding-left: 10px;
          border-bottom: #fff 0.1px solid;
          span {
            color: #fff;
            font-size: 16px;
            text-align: cenetr;
            flex: 1;
          }
          img {
            width: 20px;
            height: 20px;
            position: relative;
            top: 15px;
            text-align: right;
          }
        }
      }
    }
  }

  // height: 100vh;
  // font-size: 16px;
  // .index-list-box {
  //   padding-bottom: 0.7rem;
  // }
}
</style>
