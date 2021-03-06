//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')

var loginUrl = 'http://ask.nyis.com/api/v1/wx';
var questionUrl = 'http://ask.nyis.com/api/v1/q2a/questions';
var newsUrl = 'http://ask.nyis.com/api/v1/q2a/news';
var debugUrl = '?XDEBUG_SESSION_START=16415';
var searchUrl = 'http://ask.nyis.com/api/v1/q2a/search';
var tagsUrl = 'http://ask.nyis.com/api/v1/q2a/tags';

var keyword = '';
var query = '';
var page = 0;

Page({
  data: {
    questions: '',
    news: '',
    tags: '',
    input: '',
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false,
  },

  /**
   * 运行时加载
   */
  onLoad: function () {

    var that = this
    wx.request({
      url: questionUrl,
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({

          news: [{ header: '新闻列表' }].concat(res.data[1])
        })
      }
    })
    this.index = 1



  },




})

