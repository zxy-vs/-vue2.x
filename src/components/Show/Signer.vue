<template>
  <div class="Signer">
    <form @submit.prevent="Submit">
      <table>
        <tr>
          <th>注&nbsp;&nbsp;册</th>
        </tr>
        <tr>
          <td>
            <label>用户名:</label
            ><el-input v-model="text" placeholder="请输入用户名"></el-input>
          </td>
        </tr>
        <tr>
          <td>
            <label>密&nbsp;码:</label
            ><el-input
              placeholder="请输入密码"
              v-model="password"
              show-password
            ></el-input>
          </td>
        </tr>
        <tr>
          <td>
            <el-button type="primary" native-type="submit"
              >注&nbsp;&nbsp;&nbsp;册</el-button
            >
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      password: "",
    };
  },
  methods: {
    async Submit() {
      await this.axios
        .post(`	http://pddapi.h5sm.com/index/pdduser/getpddregister`, {
          username: this.text,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          alert(res.data.msg);
          if (res.data.status) {
            this.$router.push("/Show/Login");
          }
        });
    },
  },
};
</script>

<style lang="less" scoped>
.Signer {
  width: 1226px;
  height: 100%;
  margin: 0 auto;
  padding: 0 0 77px 0;
  table {
    border: 1px solid #fff;
    border-radius: 12px;
    width: 600px;
    margin: 150px auto;
    padding: 50px 0;
    font-family: "宋体";
    th {
      font-size: 32px;
      color: #fff;
    }
    td {
      width: 350px;
      padding: 30px 0 0;
      text-align: center;
      font-size: 16px;
      .el-input {
        width: 300px;
      }
    }
  }
}
</style>