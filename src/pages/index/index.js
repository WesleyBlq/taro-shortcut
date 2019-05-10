import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Icon } from '@tarojs/components'
import './index.scss'
import '../app.scss'

// import classify from '../../data/classify'



export default class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor() {
    super();
    this.state = {
      scrollList: [],
      postList: []
    };
  }

  componentWillMount () {
    // console.log(">>>>>>>>class index func componentWillMount");
    Taro.request({
      url: 'http://localhost:3000/api/v1/categories/scroll',
      header: {
        'content-type': 'application/json'
      }
    }).then(res => {
      // console.log(">>>>>>>>taro request success");
      this.setState({
        scrollList: res.data
      })
    });

    Taro.request({
      url: 'http://localhost:3000/api/v1/categories/banner',
      header: {
        'content-type': 'application/json'
      }
    }).then(res => {
      console.log(">>>>>>>>taro request success");
      this.setState({
        postList: res.data
      })
    })
  }

  render () {
    console.log(">>>>>>>>class index func render");
    
    const banner_list = this.state.postList.map((data) => {
      let left_style = "fa fa-" + data["left"]["icon"] + " icon";
      let right_style = "fa fa-" + data["right"]["icon"] + " icon";
      let left_background_color = "background-color:" + data["left"]["color"]
      let right_background_color = "background-color:" + data["right"]["color"]

      return <View className='at-row' key={data.id} >
        <View className='at-col at-col-6 item'
          style={left_background_color}
          onClick={this.on_click_event.bind(this, data["left"].id)} >

          <View className={left_style}  ></View>
          <View className="name" > {data["left"]["name"]} </View>
        </View>
        <View className='at-col at-col-6 item'
          style={right_background_color}
          onClick={this.on_click_event.bind(this, data["right"].id)} >

          <View className={right_style}  ></View>
          <View className="name" > {data["right"]["name"]} </View>
        </View>
      </View>
    })

    return (
      <View className='index'>
        <View>
          <View>
            <Text className="name" >捷径中心</Text>
          </View>
          <Text className="detail" >使用这些捷径，让你事半功倍！</Text>
          <ScrollView
            className='scrollview'
            scrollX
            scrollWithAnimation
            scrollLeft='0'
          >
            {
              this.state.scrollList.map((data) => {
                let background_color = "background-color:" + data["color"];
                let icon_style = "fa fa-" + data["icon"] + " icon";

                console.log("scrol view item data");
                console.log(data);

                return (
                  <View className="scroll_item" 
                    key={data.id} 
                    style={background_color} 
                    onClick={this.on_click_event.bind(this, data.id)}>
                    <View className={icon_style}  ></View>
                    <View className="name" >{data["name"]}</View>
                  </View>
                )
              })
            }
          </ScrollView>

        </View>
        
        <View className="line"> </View>
        <ad unit-id="adunit-4cfce269f7b310b6"></ad>
        <View className='classify'>
          <View>
            <Text className="name" >分类</Text>
          </View>
          
          <View className="detail" >使用这些捷径，让你事半功倍!</View>
          { banner_list }
        </View>

        <View className="line"></View>
        <View className="footer">
          {/* 投稿联系 254284297@qq.com */}
          关注公众号浦风科技,获取更多。
        </View>
      </View>
    )
  }

  on_click_event(classify_id) {
    console.log(">>>>>>>class index func on_click_event")
    console.log("classify_id  " + classify_id);
    let params = "?id=" + classify_id;
    
    Taro.navigateTo({
      url: '/pages/list_page/index' + params,
    })
  }
}


