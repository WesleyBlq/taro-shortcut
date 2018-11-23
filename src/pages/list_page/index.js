import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Icon } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { AtToast } from "taro-ui"
import './index.scss'
import '../app.scss'
import classify from '../../data/classify'

export default class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }

  render() {
    return (
      <View className='classify'>
        <View>
          <Text className="title" >分类</Text>
        </View>

        <View className="detail" >使用这些捷径，让你事半功倍!</View>
        {
          classify.postList.map((data) => {
            let left_style = "fa fa-" + data["left"]["icon"] + " icon";
            let right_style = "fa fa-" + data["right"]["icon"] + " icon";
            return <View className='at-row' key={data.id} >
              <View className='at-col at-col-6 item' style="background-color: rgb(26, 173, 25);" >
                <View className={left_style} style="color: blue;" ></View>
                <View className="name" > {data["left"]["title"]} </View>
              </View>
              <View className='at-col at-col-6 item' style="background-color: gray" >
                <View className={right_style} style="color: blue;" ></View>
                <View className="name" > {data["right"]["title"]} </View>
              </View>
            </View>
          })
        }
      </View>
    )
  }
}