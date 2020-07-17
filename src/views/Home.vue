<!--
 * @Author: ymy
 * @Date: 2020-07-17 10:15:17
 * @LastEditors: ymy
 * @LastEditTime: 2020-07-17 14:32:20
-->
<template>
  <el-container class="container">
    <el-header class="header">
      <home-header></home-header>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <el-menu
          :default-active="activepath"
          ref="bigmenu"
          text-color="#fff"
          background-color="#454545"
          class="menu"
          unique-opened
          router
        >
          <template v-for="(item,index) in routes">
            <el-submenu
              :index="index+''"
              v-if="!item.single"
              :key="index+''+'subm'"
            >
              <template slot="title"><i :class="item.meta.icon"></i>{{item.meta.title}}</template>
              <div
                v-for="child in item.children"
                :key="item.path +'/'+ child.path"
              >
                <el-menu-item
                  @click="addRouter(child, item.path +'/'+ child.path)"
                  :index="item.path +'/'+ child.path"
                  v-if="!child.hidden"
                >{{child.meta.title}}
                </el-menu-item>
              </div>
            </el-submenu>
            <el-menu-item
              :index="item.path+'/'+item.children[0].path"
              v-if="item.single"
              @click="addRouter(item.children[0],item.path+'/'+item.children[0].path)"
              :key="index+''+'subi'"
            >
              <template slot="title"><i :class="item.meta.icon"></i>{{item.meta.title}}</template>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
export default {
  name: 'Home',
  components: {
    HomeHeader
  },
  data () {
    return {
      array: []
    }
  },
  computed: {
    routes () {
      /** 将来菜单级权限也在这里 */
      return this.$router.options.routes.filter(route => !route.hidden)
    },
    activepath () {
      return this.$route.path
    }
  },
  methods: {
    // 往tab页添加router
    addRouter (data, path) {
      // const obj = Object.assign({}, data)
      // obj.path = path
      // let add = true
      // for (let i = 0; i < this.array.length; i++) {
      //   if (this.array[i].path === obj.path) {
      //     add = false
      //   }
      // }
      // if (add) {
      //   this.array.push(obj)
      // }
      // add = true
      // sessionStorage.setItem('tabData', JSON.stringify(this.array))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/them.scss';
.container {
  // background-color: #efefef;
}
.aside {
  background-color: $asideBgColor;
  height: 100vh;
  width: 13.438vw !important;
  .system-name {
    color: #ffffff;
    font-weight: 600;
    padding: 20px 0;
  }
  .el-menu {
    height: 100%;
    width: 13.438vw;
  }
}
.menu.el-menu {
  background-color: $asideBgColor;
}
.header {
  background-color: #ffffff;
}
</style>
