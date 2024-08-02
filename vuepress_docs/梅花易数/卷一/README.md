---
title: 卷一
home: false
order: 0



---


<div>
    <div v-for="(item,key) in menus" >
        <h3>{{item.title}}</h3>
        <div v-for="(item2,key2) in item.children" >
            ---<a :href="item2">{{item2}}</a>
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
    let arr = this.$themeConfig.sidebar_dd['/梅花易数/'];
    arr.map(item=>{
        if(this.$frontmatter.title==item.title){
            this.menus.push(item);
        }
    });
    console.log(this.menus);
  },
  methods: {
      
    }

}
</script>