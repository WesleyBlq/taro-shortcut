import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Icon } from '@tarojs/components'
import { AtButton, AtToast } from 'taro-ui'
import './index.scss'
import '../app.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor() {
    super();
    this.state = {
      collections: []
    }
  }


  componentWillMount() {
    console.log(">>>>>>class list_page func componentWillMount");  
    console.log(this.$router.params["id"]);
    const id = this.$router.params["id"];
    Taro.request({
      url: 'http://localhost:3000/api/v1/categories/' + id,
      header: {
        'content-type': 'application/json'
      }
    }).then(res => {
      console.log(">>>>>>>>taro request success");
      console.log(res.data);
      this.setState({
        collections: res.data
      })
    });
  }

  componentDidShow() {
    console.log(">>>>>>class list_page func componentDidShow");

    // 在页面中定义插屏广告
    let interstitialAd = null
    console.log(wx);
    // 在页面onLoad回调事件中创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-9cda0262a692ee08'
      })
    }

    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
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

    const data_list = this.state.collections.map((data) => {

      // 回传给icon , 方便绑定触发数据
      this.update_icon(data);

      const left_style = "fa fa-" + data["left"]["icon"] + " icon";
      const left_background_color = "background-color:" + data["left"]["color"];

      const right_style = data["right"] ? "fa fa-" + data["right"]["icon"] + " icon" : 'display: hidden';
      const right_background_color = data["right"] ? "background-color:" + data["right"]["color"] : 'display: hidden';

      return <View className='at-row' key={data.id} >
        <View className='at-col at-col-6 item'
          style={left_background_color}
          onClick={this.on_click_event.bind(this, data["left"])} >

          <View className={left_style}  ></View>
          <View className="name" > {data["left"]["name"]} </View>
        </View>
        <View className='at-col at-col-6 item'
          style={right_background_color}
          onClick={this.on_click_event.bind(this, data["right"])} >

          <View className={right_style}  ></View>
          <View className="name" > {data["right"]["name"]} </View>
        </View>
      </View>

    })

    return (
      <View className='classify'>
        <View>
          <Text className="name" >{datas["name"]}</Text>
        </View>

        <View className="detail" >{datas["description"]}</View>
        {data_list}
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

    if (data["type"] == "tap") {
      return;
    }

    const params = "?icon=" + data["icon"] + "&name=" + data["name"] + "&url=" + data["url"] + "&color=" + data["color"]
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