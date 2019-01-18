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

  get_list_datas() {
    console.log("======######");
    console.log("get_list_datas");
    console.log(this.$router.params);

    // undefined means srcoll items clicked event.
    if (this.$router.params["arrow"] != undefined) {
      const id = this.$router.params["id"];
      const arrow = this.$router.params["arrow"];
      for (let index in classify.postList) {
        if (classify.postList[index]["id"] == parseInt(id)) {
          return classify.postList[index][arrow];
        }
      }
    }else {
      const id = this.$router.params["id"];
      console.log("======######");
      console.log(classify.scrollList);
      console.log(id);
      for (let index in classify.scrollList) {
        if (classify.postList[index]["id"] == parseInt(id)) {
          return classify.scrollList[index];
        }
      }
    }
    
  }

  render() {
    let datas = this.get_list_datas();

    console.log(datas);
    let collection = datas["collection"];
    return (
      <View className='classify'>
        <View>
          <Text className="title" >{datas["title"]}</Text>
        </View>

        <View className="detail" >{datas["description"]}</View>
        {
          collection.map((data) => {
            let left_style = "fa fa-" + data["left"]["icon"] + " icon";
            let right_style = "fa fa-" + data["right"]["icon"] + " icon";
            let left_background_color = "background-color:" + data["left"]["background_color"]
            let right_background_color = "background-color:" + data["right"]["background_color"]


            return <View className='at-row' key={data.id} >
              <View className='at-col at-col-6 item'
                style={left_background_color}
                onClick={this.on_click_event.bind(this, data["left"])} >

                <View className={left_style}  ></View>
                <View className="name" > {data["left"]["title"]} </View>
              </View>
              <View className='at-col at-col-6 item'
                style={right_background_color}
                onClick={this.on_click_event.bind(this, data["right"])} >

                <View className={right_style}  ></View>
                <View className="name" > {data["right"]["title"]} </View>
              </View>
            </View>
          })
        }
      </View>
    )
  }

  on_click_event(data) {
    console.log("on_click_event:data  " + data);
    console.log(data);
    const params = "?icon=" + data["icon"] + "&title=" + data["title"] + "&url=" + data["url"] + "&color=" + data["background_color"]
    Taro.navigateTo({
      url: '/pages/sku_page/index' + params,
    })
  }
  
}