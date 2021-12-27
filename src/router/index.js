import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/user/User.vue'
import Home from '../views/home/Home.vue'
import BrandClassification from '../views/brandClassification/BrandClassification.vue'
import KnowledgeClassification from '../views/knowledgeClassification/KnowledgeClassification.vue'
import RankList from '../views/rankList/RankList.vue'
import Search from '../views/search/Search.vue'
import Knowledge from '../views/knowledge/Knowledge.vue'
import BrandMerchants from '../views/brandMerchants/BrandMerchants.vue' 
import OnlineStore from '../views/onlineStore/OnlineStore.vue'
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "首页",
      keepAlive: true,
      footer: true,
    },
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      title: "我的",
      keepAlive: true,
      footer: true,
    },
  },
  {
    path: '/brandClassification',
    name: 'BrandClassification',
    component: BrandClassification,
    meta: {
      title: "品牌分类",
      keepAlive: true,
      footer: true,
    },
  },
  {
    path: '/knowledgeClassification',
    name: 'KnowledgeClassification',
    component: KnowledgeClassification,
    meta: {
      title: "知识分类",
      keepAlive: true,
      footer: true,
    },
  },
  
  {
    path: '/rankList',
    name: 'RankList',
    component: RankList,
    meta: {
      title: "排行榜",
      keepAlive: true,
      footer: true,
    },
  },
  
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: "搜索",
      keepAlive: true,
      footer: false,
    },
  },
  {
    path: '/knowledge',
    name: 'Knowledge', 
    component: Knowledge,
    meta: {
      title: "知识", 
      keepAlive: true,
      footer: false,
    },
  },
  {
    path: '/brandMerchants',
    name: 'BrandMerchants', 
    component: BrandMerchants,
    meta: {
      title: "知识", 
      keepAlive: true,
      footer: false,
    },
  },
  {
    path: '/onlineStore',
    name: 'OnlineStore', 
    component: OnlineStore,
    meta: {
      title: "网店", 
      keepAlive: true,
      footer: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
