---
title: 梅花易数
home: false
sidebar: false
order: 0
---


<div>
    <div v-for="(item,key) in menus" >
        <h3><a :href="item.title">{{item.title}}</a></h3>
        <div v-for="(item2,key2) in item.children" >
            ---<a :href="item.title+'/'+item2">{{item2}}</a>
        </div>
    </div>
</div>

<script>
export default {
  data() {
    return {
        menus:[]
    }
  },
  mounted () {
    this.menus = this.$themeConfig.sidebar_dd['/梅花易数/'];
    console.log(this.$frontmatter);
  },
  methods: {
      
    }

}
</script>