// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"cloud-test-judhg"
})

const db = cloud.database()
const foodCollection = db.collection('food')
const rp = require('request-promise')
const MAX_LIMIT = 1


// 云函数入口函数
exports.main = async (event, context) => {

  // 避免数据重复 
  // const list = await foodCollection.get()
  const countResult = await foodCollection.count()

  const total = countResult.total
  const batchTimes = Math.ceil(total / MAX_LIMIT)
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    foodCollection.skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  let list = {
    data: []
  }
  if (tasks.length > 0) {
    list = (await Promise.all(tasks)).reduce((acc, url) => {
      return {
        data: acc.data.concat(cur.data)
      }
    })
  }


  const food = await rp(URL).then((res) => {
    // return res
    // 字符串转化对象
    return JSON.parse(res).result
  })
  const newData = []
  for (let i = 0, len1 = food.length; i < len1; i++) {
    let flag = true
    for (let j = 0, len2 = list.data.length; i < len2; j++) {
      if (food[i].id === list.data[j].id) {
        flag = false
      }
      break
    }
  }
  if (flag) {
    newData.push(food[i])
  }
  // console.log(food)
  for (let i = 0, len = food.length; i < len; i++) {
    foodCollection.add({
      data: {
        ...food[i],
        createTime: db.serverDate(),
      }

    }).then((res) => {
      console.log('插入成功')
    }).catch((err) => {
      console.log('插入失败')
    })
  }
  return newData.length
}