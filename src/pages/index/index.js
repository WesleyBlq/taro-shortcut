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
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    // const datas = [];
    // for (var i in classify.postList) {
    //   console.log("######");
    //   console.log(i);  
    //   datas.push(
    //     <View className="fa fa-star icon"  >ss</View>
    //   );
    //   console.log(datas);
    // }
    // classify.postList.forEach(element => {

    //   datas.push(
    //     <View className="fa fa-star icon"  ></View>
    //   );
    // });
    console.log("======");
    // console.log(datas);
    // console.log(classify.postList);

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
            {
              classify.scrollList.map((data) => {
                let background_color = "background-color:" + data["background_color"];
                let icon_style = "fa fa-" + data["icon"] + " icon";
                console.log()
                console.log(data);
                return (
                  <View className="scroll_item" 
                    key={data.id} 
                    style={background_color} 
                    onClick={this.on_click_event.bind(this, data.id)}>
                    <View className={icon_style}  ></View>
                    <View className="name" >{data["title"]}</View>
                  </View>
                )
              })
            }
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
              let left_background_color = "background-color:" + data["left"]["background_color"]
              let right_background_color = "background-color:" + data["right"]["background_color"]
              

              return <View className='at-row' key={data.id} >
                <View className='at-col at-col-6 item' 
                  style={left_background_color}
                  onClick={this.on_click_event.bind(this, data.id, "left")} >

                  <View className={left_style}  ></View>
                  <View className="name" > {data["left"]["title"]} </View>
                </View>
                <View className='at-col at-col-6 item' 
                  style={right_background_color} 
                  onClick={this.on_click_event.bind(this, data.id, "right")} >
                  
                  <View className={right_style}  ></View>
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

  

  on_click_event(classify_id, arrow) {
    console.log("on_click_event:classify_id  " + classify_id);
    let params = "";
    console.log(arrow);
    
    // undefined means ascroll item
    if(arrow == undefined) {  
      params = "?id=" + classify_id;
    }else {
      params = "?id=" + classify_id + "&arrow=" + arrow;
    }
    Taro.navigateTo({
      url: '/pages/list_page/index' + params,
    })
  }
}


