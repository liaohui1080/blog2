
const colors = require('tailwindcss/colors');
// npx tailwindcss -i ./main.css -o ./vuepress_docs/.vuepress/public/css/css.css --watch
//tailwindcss -c ./tailwind.config.js -i ./main.css -o ./vuepress_docs/.vuepress/public/css/css.css --watch
module.exports = {
    darkMode: 'class', //开启深色模式 ,需要配合spaghetti.js 才行
    content: ['./vuepress_docs/.vuepress/**/*.{md,js,vue,jsx,html}'], //只有在 packages文件夹下的 使用的 tailwindcss 类库,才会被编译到 css里面
    // content: ['./vuepress/.vuepress/**/*.{md,js,vue,jsx,html}'], //只有在 packages文件夹下的 使用的 tailwindcss 类库,才会被编译到 css里面

};
