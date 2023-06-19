// 引用 dotenv 讀取 .env 設定檔
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'
import axios from 'axios'

const bot = linebot({
  channelID: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SERCET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async event => {
  if (event.message.type === 'text') {
    try {
      const { data } = await axios.get('https://odws.hccg.gov.tw/001/Upload/25/opendataback/9059/710/8fcdb49e-1e26-4eca-8221-200a0cc932d8.json')
      for (const info of data) {
        if (info['健走步道地點'] === event.message.text) {
          const flexMessage = {
            type: 'flex',
            altText: '健走步道資訊',
            contents: {
              type: 'bubble',
              header: {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'image',
                        url: 'https://i.ibb.co/4RvZ26G/image.png',
                        size: 'full',
                        flex: 1,
                        gravity: 'center',
                        aspectMode: 'cover'
                      }
                    ]
                  }
                ],
                paddingAll: '0px'
              },
              body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                          {
                            type: 'text',
                            text: info['健走步道地點'],
                            size: 'xl',
                            wrap: true,
                            color: '#ffffff',
                            weight: 'bold'
                          },
                          {
                            type: 'text',
                            text: info['地址'],
                            wrap: true,
                            color: '#ffffffcc',
                            size: 'sm'
                          }
                        ],
                        spacing: 'sm'
                      },
                      {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                          {
                            type: 'box',
                            layout: 'vertical',
                            contents: [
                              {
                                type: 'text',
                                text: info['環境特色'],
                                size: 'sm',
                                wrap: true,
                                margin: 'lg',
                                color: '#ffffffde'
                              }
                            ]
                          }
                        ],
                        paddingAll: '20px',
                        backgroundColor: '#ffffff1A',
                        cornerRadius: '2px',
                        margin: 'xl'
                      },
                      {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                          {
                            type: 'box',
                            layout: 'vertical',
                            contents: [
                              {
                                type: 'text',
                                text: info['交通資訊'],
                                size: 'sm',
                                wrap: true,
                                margin: 'lg',
                                color: '#ffffffde'
                              }
                            ]
                          }
                        ],
                        margin: 'xl',
                        backgroundColor: '#ffffff1A',
                        paddingAll: '20px'
                      }
                    ]
                  }
                ],
                paddingAll: '20px',
                backgroundColor: '#464F69'
              }
            }
          }
          event.reply(flexMessage)
          return
        }
      }
      event.reply('請輸入公園名稱，謝謝')
    } catch (error) {
      console.log(error)
      event.reply('發生錯誤')
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
