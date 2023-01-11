<template>
  <div id="ent">
    <Firstimg>
      <img src="@/assets/friendsImg.jpg" alt="">
    </Firstimg>
    <FriendList></FriendList>
    <Dynamic></Dynamic>
    <SearchFriends></SearchFriends>
  </div>
</template>

<script>
import FriendList from './FriendList'
import Dynamic from './Dynamic'
import SearchFriends from './SearchFriends'
export default {
 name:'Friends',
 components:{
    FriendList,
    Dynamic,
    SearchFriends,
}
}
</script>

<style scoped>
#ent{
  width: 100%;
  min-width: 1200px;
}
</style>