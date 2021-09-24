<template>
  <div class="login">
    <div class="intLogin">
      <form @submit.prevent="Submit">
        <table>
          <tr>
            <th>登&nbsp;录</th>
          </tr>
          <tr>
            <td>
              <label>手机号:</label
              ><el-input v-model="text" placeholder="请输入密码"></el-input>
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
                >登&nbsp;&nbsp;&nbsp;录</el-button
              ><el-button type="primary" @click="im"
                >注&nbsp;&nbsp;&nbsp;册</el-button
              >
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
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
        .post(`	http://pddapi.h5sm.com/index/pdduser/getpddlogin`, {
          username: this.text,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data);
          Cookies.set("data", res.data, { expires: 1 });
          Cookies.set("name", res.data.username, { expires: 1 });
        });
      if (Cookies.get("name")) {
        this.$router.push("/Show/Home/pole");
        this.$router.go();
      } else {
        alert("用户名或密码错误");
      }
    },
    im(){
      this.$router.push('/Show/Signer')
    }
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 1226px;
  height: 659px;
  margin: 30px auto 0;
  .intLogin {
    width: 600px;
    height: 400px;
    margin: 150px auto 0;
    border: 1px solid #fff;
    border-radius: 12px;
    font-family: "宋体";
    position: relative;
    form {
      table {
        width: 100%;
        padding: 50px 40px;
        th {
          width: 100%;
          height: 40px;
          font-size: 32px;
          text-align: center;
          line-height: 40px;
          padding-bottom: 20px;
          color: #fff;
        }
        td {
          width: 350px;
          padding: 30px 0 0;
          text-align: center;
          font-size: 16px;
          label {
            margin-right: 5px;
          }
          .el-input {
            width: 300px;
          }
          .el-button {
            margin: 20px 81px 0;
            font-size: 18px;
          }
        }
      }
    }
    .el-icon-close {
      position: absolute;
      top: 12px;
      right: 12px;
      font-size: 24px;
      color: #fff;
    }
    .el-icon-close:hover {
      color: #87afd6;
    }
  }
}
</style>