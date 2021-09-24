<template>
  <div class="list_">
    <ul class="list_gross">
      <li v-for="(item, index) of nav.nav_show" :key="index">
        <span>{{ item.name }}</span
        ><span class="list_r">{{ item.key }}</span>
        <div class="show">
          <ul v-for="(items, index) of item.ul" :key="index">
            <li v-for="(itemss, index) of items.col" :key="index">
              <img :src="itemss.src" />{{ itemss.name }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: {
        nav_show: [
          {
            name: "手机 电话卡",
            key: ">",
            ul: [
              {
                col: [
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1241b5a94ba1739e85f72d46592af0e.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cf44dfe89111cb35e1a2211481ff546.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72bd70039670d29610569421f753fcb6.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0dfda044e0ddcfb3ef63e7e2b87daea3.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69a0df49cff71107977bbe3b48af15fa.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=40&h=40",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0803dc7125ffa3447b04b1ae60f57a2b.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79e2935264bf9247aa7512e330112820.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab956ee82c24bdd83d21bc212aad3eb5.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png?thumb=1&w=40&h=40",
                    name: "xxx",
                  },
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
            ],
          },
          {
            name: "电视 盒子",
            key: ">",
            ul: [
              {
                col: [
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
            ],
          },
          {
            name: "笔记本 显示器",
            key: ">",
            ul: [
              {
                col: [
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
            ],
          },
          {
            name: "家电 插线板",
            key: ">",
            ul: [
              {
                col: [
                  {
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
              {
                col: [
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                  {
                    src: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90",
                    name: "xxx",
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.list_ {
  width: 234px;
  height: 460px;
  .list_gross {
    color: #fff;
    width: 234px;
    height: 460px;
    background-color: rgba(105, 101, 101, 0.6);
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .list_gross li {
    width: 234px;
    height: 42px;
    padding-left: 30px;
    text-align: left;
    line-height: 42px;
    list-style: none;
    background-color: rgba(255, 255, 255, 0);
  }

  .list_gross li:hover {
    background-color: #ff6700;
  }

  .list_gross li:hover .show {
    display: block;
    z-index: 1;
  }

  .list_gross li .show {
    display: none;
    width: 992px;
    height: 460px;
    position: absolute;
    top: 0;
    left: 234px;
    background-color: #fff;
    color: black;
  }

  .list_gross li .show ul {
    width: 248px;
    height: 460px;
    padding: 2px 0;
    float: left;
  }

  .list_gross li .show li {
    padding: 0;
    width: 248px;
    height: 76px;
    font-size: 18px;
    text-align: left;
    line-height: 76px;
  }
  .list_gross li .show li:hover {
    color: #ff6700;
    background-color: #fff;
  }
  .list_gross li .show li img {
    padding: 18px;
    float: left;
  }
  .list_r {
    width: 42px;
    height: 42px;
    display: inline-block;
    position: absolute;
    text-align: center;
    font-size: 24px;
    line-height: 42px;
    left: 192px;
  }
}
</style>