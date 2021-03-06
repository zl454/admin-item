//引入mockjs
import Mock from 'mockjs'
import { formatDate } from "@/utils/data.js"
//使用mockjs模拟数据
// Mock.mock('/\/api\/msdk\/proxy\/query_common_credit/', {
//   "ret": 0,
//   "data":
//   {
//     "mtime": "@datetime",//随机生成日期时间
//     "score|1-800": 800,//随机生成1-800的数字
//     "rank|1-100": 100,//随机生成1-100的数字
//     "stars|1-5": 5,//随机生成1-5的数字
//     "nickname": "@cname",//随机生成中文名字
//   }
//   //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
// });

export const dataSource = Mock.mock({
  'dataSource|5': [{
    'key|+1': 1,
    'mockTitle|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
    'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
    'mockAction|1': ['下载', '试听', '喜欢']
  }]
})
export const dataImg = Mock.mock('@dataImage("40x40", "pink")')

function getDataArray(start, days) {
  const arr = []
  for (var i = 0; i < days; i++) {
    let now = new Date(start).getTime() + i * 3600 * 1000 * 24
    arr.push(formatDate(new Date(now), 'yyyy-MM-dd'))
  }
  return arr
}
// const DataArray = getDataArray(15)
// const DataArray = []
// export const DATA_FROM_BACKEND = Mock.mock({
//   columns: ['date', 'orderCount', 'orderAmount'],
//   'rows|15': [
//     { 'date|+1': DataArray, 'orderCount|10-100': 1, 'orderAmount|1-10000': 1 },
//   ]
// });


function getdSource(start, end) {
  let days = Math.round((new Date(end) - new Date(start)) / (3600 * 24 * 1000)) + 1
  const array = getDataArray(start, days)
  const getArray = Mock.mock({
    columns: ['date', 'orderCount', 'orderAmount'],
    'rows|15': [
      { 'date|+1': array, 'orderCount|10-100': 1, 'orderAmount|1-10000': 1 },
    ]
  });
  return getArray
}

console.log(getdSource('2020-10-28 12:00:00', '2020-11-2 2:00:00'));
