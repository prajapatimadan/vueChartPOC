<template>
  <div id="app">
    <div class="container">
    <!--Navbar-->
    <navbar position="top" className="indigo" name="Your Logo" href="#">
      <navbar-collapse>
        <navbar-nav>
          <navbar-item htef="#" ><router-link to="/" :active="true" style="color:#FFF;">Home</router-link></navbar-item>
         
          <!-- Dropdown -->
          <navbar-item-dropdown label="Charts"> 
          <router-link v-for="citem of chartItems" class="dropdown-item" v-bind:to="citem.url">{{ citem.title }}</router-link>
          </navbar-item-dropdown>
          <!-- </ul> -->
          <!-- Links -->
        </navbar-nav>
          <!-- Search form -->
        <form class="form-inline">
          <input class="form-control mr-auto p-2" type="text" placeholder="Search" aria-label="Search">
        </form>
      </navbar-collapse>
        <!-- Collapsible content -->
    </navbar>
    <!--/.Navbar-->
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import NavbarItem from '@/components/NavbarItem';
import NavbarItemDropdown from '@/components/NavbarItemDropdown';
import NavbarNav from '@/components/NavbarNav';
import NavbarCollapse from '@/components/NavbarCollapse';

export default {
  name: 'App',
  components: {
    Navbar,
    NavbarItem,
    NavbarItemDropdown,
    NavbarNav,
    NavbarCollapse
  },
  data(){
    return {
        chartItems:[{title:'Bar',url:'/barchart'},{title:'Line',url:'/linechart'},{title:'Pie',url:'/piechart'},{title:'Radar',url:'/radarchart'}],
        openPage:(value => {
          console.log('test'+value);
        }) 
    };
  }
 
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
</style>
