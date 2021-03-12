<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140">
      </el-table-column>
      <el-table-column prop="body" label="内容" width="320">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template #default="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ListArticle",
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch(){
      this.$http.get('/articles').then(res => {
        this.articles = res.data;
      })
    },
    edit(id) {
      this.$router.push(`/articles/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`/articles/${id}`).then(() => {
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        });
        this.fetch();
      });

    },
  }
}
</script>

<style scoped>

</style>