import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Icon } from '@tarojs/components'
import './index.scss'
import '../app.scss'

import classify from '../../data/classify'



export default class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }

  componentWillMount () {
    // console.log(classify.postList)
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    const datas = [];
    // for (var i in classify.postList) {
    //   console.log("######");
    //   console.log(i);  
    //   datas.push(
    //     <View className="fa fa-star icon" style="color: blue;" >ss</View>
    //   );
    //   console.log(datas);
    // }
    // classify.postList.forEach(element => {

    //   datas.push(
    //     <View className="fa fa-star icon" style="color: blue;" ></View>
    //   );
    // });
    console.log("======");
    console.log(datas);
    console.log(classify.postList);

    return (
      <View className='index'>
        <View>
          <View>
            <Text className="title" >捷径中心</Text>
          </View>
          <Text className="detail" >使用这些捷径，让你事半功倍！</Text>
          <ScrollView
            className='scrollview'
            scrollX
            scrollWithAnimation
            scrollLeft='0'
          >

            <View className="scroll_item " style="background-color: rgb(26, 173, 25);" >
              <View className="fa fa-star icon" style="color: blue;" ></View>
              <View className="name" >共享效率</View>
            </View>
            <View className="scroll_item " style="background-color: #74CAFF;" >
              <View className="fa fa-star icon" style="color: blue;" ></View>
              <View className="name" >共享效率</View>
            </View>
            <View className="scroll_item " style="background-color: #52B03C;" >
              <View className="fa fa-star icon" style="color: blue;" ></View>
              <View className="name" >共享效率</View>
            </View>
            <View className="scroll_item " style="background-color: rgb(26, 173, 25);" >
              <View className="fa fa-star icon" style="color: blue;" ></View>
              <View className="name" >共享效率</View>
            </View>
          </ScrollView>

        </View>
        
        <View className="line"> </View>

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

        <View className="line"></View>
        <View className="footer">
          投稿联系 254284297@qq.com
        </View>
      </View>
    )
  }
}

