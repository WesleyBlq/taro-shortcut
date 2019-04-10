import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Icon } from '@tarojs/components'
import { AtButton, AtToast } from 'taro-ui'
import './index.scss'
import '../app.scss'
import classify from '../../data/classify'

export default class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }
  componentWillMount() {
    console.log(">>>>>>class list_page func componentWillMount");
  }

  componentDidShow() { 
    console.log(">>>>>>class list_page func componentDidShow");
  }

  get_list_datas() {
    console.log(">>>>>>class list_page func get_list_datas");
    console.log(this.$router.params["arrow"]);
    if (Object.keys(this.$router.params).length === 0) {
      console.log("arrow none");

      const id = 1;
      for (let index in classify.scrollList) {
        if (classify.postList[index]["id"] == parseInt(id)) {
          return classify.scrollList[index];
        }
      }
    }

    // undefined means srcoll items clicked event.
    if (this.$router.params["arrow"] != "scroll") {
      console.log("arrow left right");
      const id = this.$router.params["id"];
      const arrow = this.$router.params["arrow"];
      for (let index in classify.postList) {
        if (classify.postList[index]["id"] == parseInt(id)) {
          return classify.postList[index][arrow];
        }
      }
    }else {
      console.log("arrow scroll");
      const id = this.$router.params["id"];

      console.log("scroll list data");
      
      for (let index in classify.scrollList) {
        if (classify.scrollList[index]["id"] == parseInt(id)) {
          return classify.scrollList[index];
        }
      }
    }
  }

  update_icon(data) {
    
    if (data["left"]["icon"] == "star" || data["left"]["icon"] == "circle") {
      data["left"]["icon"] = random_icon()
    }

    if (data["right"] && (data["right"]["icon"] == "star" || data["right"]["icon"] == "circle")) {
      data["right"]["icon"] = random_icon()
    }
  }

  

  render() {
    console.log(">>>>>>class list_page func render");
    
    let datas = this.get_list_datas();
    console.log("data:")
    console.log(datas);
    
    let collection = datas["collection"];

    const data_list = collection.map((data) => {

      // 回传给icon , 方便绑定触发数据
      this.update_icon(data);

      const left_style = "fa fa-" + data["left"]["icon"] + " icon";
      const left_background_color = "background-color:" + data["left"]["background_color"];
      
      const right_style = data["right"] ? "fa fa-" + data["right"]["icon"] + " icon" : 'display: hidden';
      const right_background_color = data["right"] ? "background-color:" + data["right"]["background_color"] : 'display: hidden';
      
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
    
    return (
      <View className='classify'>
        <View>
          <Text className="title" >{datas["title"]}</Text>
        </View>

        <View className="detail" >{datas["description"]}</View>
        { data_list }
        <View className="line"></View>
        <View className="footer">
          关注公众号浦风科技,获取更多。
        </View>
      </View>
    )
  }

  on_click_event(data) {
    console.log("on_click_event:data  " + data);
    console.log(data);

    if (data["type"] == "tap"){
      return ;
    }
      
    const params = "?icon=" + data["icon"] + "&title=" + data["title"] + "&url=" + data["url"] + "&color=" + data["background_color"]
    Taro.navigateTo({
      url: '/pages/sku_page/index' + params,
    })
  }
}

function random_icon() {
  var collections = ["free-code-camp", "yelp", "vk", "trello", "ra", "ravelry", "star", "circle"];
  var random_num = Math.floor(Math.random() * collections.length);
  return collections[random_num];
}