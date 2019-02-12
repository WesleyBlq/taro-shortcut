// 添加阿拉丁数据统计
const ald = require('./utils/ald-stat.js')
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'
require("taro-ui/dist/weapp/css/index.css")

class App extends Component {

  config = {
    pages: [
      
      'pages/index/index',
      'pages/list_page/index',
      'pages/sku_page/index',
      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
