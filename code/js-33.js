// 超链接

var koe_33_style = document.createElement('style');
koe_33_style.innerText =
  'a { cursor: url("https://pic.downk.cc/item/5efaae8614195aa5947151f4.png"), auto } ';
document.head.appendChild(koe_33_style);


// 美冴

document.body.style.overflow = 'hidden';
var koe_33_a = document.querySelector('.content');
koe_33_a.href = 'javascript:void(0);';
koe_33_a.removeAttribute('target');
koe_33_a.onclick = koe_33_20;
var koe_33_cursor = document.createElement('img');
koe_33_cursor.src = 'https://pic.downk.cc/item/5efab8bb14195aa5947473b4.png';
koe_33_cursor.setAttribute('style', 'position: absolute; display: none;');
koe_33_a.addEventListener('mouseover', function () {
  koe_33_cursor.style.display = 'block';
});
koe_33_a.addEventListener('mouseout', function () {
  koe_33_cursor.style.display = 'none';
});
document.body.appendChild(koe_33_cursor);
document.body.addEventListener('mousemove', function (e) {
  koe_33_cursor.style.top = e.pageY + 1 + 'px';
  koe_33_cursor.style.left = e.pageX + 1 + 'px';
});
var koe_33_img = document.createElement('img');
koe_33_img.src = 'https://pic.downk.cc/item/5efab94b14195aa59474a110.png';
koe_33_img.setAttribute(
  'style',
  'position: absolute; top: 24px; left: 67px; width: 40px; transform: rotate(45deg); display: none;'
);
koe_33_a.appendChild(koe_33_img);

function koe_33_20() {
  // 判断 背景 没被创建
  if (document.querySelector('#koe_20_background') === null) {
    // 选取所有 video 和 audio 标签
    var koe_20_videos = document.querySelectorAll('video,audio');

    // 创建 背景 div
    var koe_20_background = document.createElement('div');
    // 设置 背景 id
    koe_20_background.setAttribute('id', 'koe_20_background');
    // 设置 背景 style，覆盖这个网页、黑色背景、最顶层、不显示
    koe_20_background.setAttribute(
      'style',
      'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; z-index: 9999999; display: none;'
    );

    // 创建 video 标签
    var koe_20_video = document.createElement('video');

    // 设置 自动播放、name、style
    koe_20_video.setAttribute('autoplay', '');
    koe_20_video.setAttribute('name', 'media');
    koe_20_video.setAttribute(
      'style',
      'position: fixed; top: 0; left: 0; width: 100%; height: 100%;'
    );

    // 监听视频播放结束 删除 背景
    koe_20_video.addEventListener('ended', function () {
      koe_33_img.style.display = 'block';
      document.body.removeChild(koe_20_background);
    });

    // 监听视频加载完成 让背景显示、让页面的 video 和 audio 暂停播放
    koe_20_video.addEventListener('canplaythrough', function () {
      koe_20_background.style.display = 'block';
      koe_20_videos.forEach(function (element) {
        element.pause();
      });
    });

    // 添加资源
    var koe_20_source = document.createElement('source');
    // 视频地址
    koe_20_source.setAttribute(
      'src',
      'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBcDVHUVdqS1ViZm5nLW9IZklDRkRSYl9kYVJydnc/ZT1vQnZIRXY=.mp4'
    );
    // 设置格式
    koe_20_source.setAttribute('type', 'video/mp4');
    // 将 资源 添加至 视频标签 中
    koe_20_video.appendChild(koe_20_source);
    // 将 视频 添加至 背景 中
    koe_20_background.appendChild(koe_20_video);
    // 将 背景 添加至 body 中
    document.body.appendChild(koe_20_background);
  }
}


// 魔改一下核弹，换地方停弹

if (typeof Nuclear === 'undefined') {
  function Nuclear() {
    // setup
    this.baseSetup = {
      is_ready: false,
      is_launched: false,
      select_target: {
        x: 0,
        y: 0,
      },
      position: {
        top: 50,
        left: 50,
        bottom: 0,
        right: -100,
      },
      timeout: {
        open_silo: 1580,
        close_silo: 800,
        nuclear_ready: 2000,
        nuclear_down: 5800,
        smoke_1: 1200,
        smoke_2: 1500,
        boom_before: 1000,
        boom: 1700,
        end: 1000,
      },
      nuclear_style: document.createElement('style'),
      progress_style: document.createElement('style'),
      select_target_mouseover: function () {},
      select_target_mouseout: function () {},
    };
    // 判断媒体是否加载完成
    this.mediaIsLoaded = {};

    // 存放媒体 dom
    this.mediaDom = {};

    // 图片、音频 信息
    this.mediaInfo = [
      {
        type: 'img',
        name: 'mouse',
        src: 'https://pic.downk.cc/item/5ef1aa7214195aa594eb1cbb.gif',
      },
      {
        type: 'img',
        name: 'smoke_1',
        src: 'https://pic.downk.cc/item/5ef18d5714195aa594d2d4f5.gif',
        bottom: -50,
        right: 120,
      },
      {
        type: 'img',
        name: 'smoke_2',
        src: 'https://pic.downk.cc/item/5ef18d5714195aa594d2d4fa.gif',
        bottom: 0,
        right: 0,
      },
      {
        type: 'img',
        name: 'boom_before',
        src: 'https://pic.downk.cc/item/5ef18d5714195aa594d2d505.gif',
        bottom: 0,
        right: 0,
      },
      {
        type: 'img',
        name: 'boom',
        src: 'https://pic.downk.cc/item/5ef1ea4e14195aa594213428.gif',
      },
      {
        type: 'img',
        name: 'silo',
        src: 'https://pic.downk.cc/item/5ef0d45914195aa594178112.gif',
        bottom: 0,
        right: 0,
      },
      {
        type: 'img',
        name: 'close_silo',
        src: 'https://pic.downk.cc/item/5ef18f0914195aa594d44f82.gif',
        bottom: 0,
        right: 0,
      },
      {
        type: 'img',
        name: 'nuclear_up',
        src: 'https://pic.downk.cc/item/5ef199af14195aa594dcb6f4.png',
        bottom: 125,
        right: 267,
      },
      {
        type: 'img',
        name: 'nuclear_down',
        src: 'https://pic.downk.cc/item/5ef199af14195aa594dcb6f4.png',
      },
      {
        type: 'img',
        name: 'finished',
        src: 'https://pic.downk.cc/item/5ef1903314195aa594d52c7a.png',
        bottom: 0,
        right: 0,
      },
      {
        type: 'audio',
        name: 'ready',
        src:
          'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBcDVHUVdqS1ViZm5nLW9OOUE5WFFqQjlyREMwSHc=.mp3',
      },
      {
        type: 'audio',
        name: 'open_silo',
        src:
          'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBcDVHUVdqS1ViZm5nLW9Ma0NHaGgxSlRISTd0eXc=.mp3',
      },
      {
        type: 'audio',
        name: 'biu',
        src:
          'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBcDVHUVdqS1ViZm5nLW9NVGp1VlV6Tkc4a1pXYlE=.mp3',
      },
    ];

    // 其他 dom 信息
    this.otherDomInfo = [
      {
        type: 'p',
        name: 'progress',
      },
      {
        type: 'p',
        name: 'progress_text',
        innerText: '核弹祈祷nia 0%',
      },
      {
        type: 'div',
        name: 'select_target',
      },
    ];

    // 其他 dom
    this.otherDom = {};
  }

  /**
   * 初始化：添加 style、添加其他 dom
   */
  Nuclear.prototype.init = function () {
    // 添加 style
    this.baseSetup.nuclear_style.innerText = `

      .nuclear {
        display: none;
      }

      .nuclear_mouse {
        position: fixed;
        z-index: 999998;
      }

      .nuclear_smoke_1,
      .nuclear_smoke_2 {
        z-index: 999997;
      }

      .nuclear_boom,
      .nuclear_boom_before,
      .nuclear_nuclear_up,
      .nuclear_nuclear_down {
        z-index: 999996;
      }

      .nuclear_silo,
      .nuclear_finished {
        z-index: 999990;
      }

      .nuclear_silo,
      .nuclear_close_silo,
      .nuclear_nuclear_up,
      .nuclear_nuclear_down,
      .nuclear_finished,
      .nuclear_smoke_1,
      .nuclear_smoke_2 {
        position: fixed;
        bottom: 0;
        right: 0;
      }

      .nuclear_boom_before,
      .nuclear_boom,
      .nuclear_select_target,
      .nuclear_progress_text,
      .nuclear_progress {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0 !important;
        padding: 0 !important;
      }

      .nuclear_select_target {
        width: 100%;
        height: 100%;
        cursor: none;
        display: none;
        z-index: 999999;
      }

      .nuclear_progress_text,
      .nuclear_progress {
        width: 230px;
        height: 30px;
      }

      .nuclear_progress_text {
        line-height: 30px;
        text-align: center;
        font-size: 22px;
        font-weight: 700;
        color: #FFF;
        z-index: 999999;
      }

      .nuclear_progress {
        background-color: #999;
        z-index: 999980;
      }
      .nuclear_progress::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        background-color: #009966;
      }

    `;
    document.head.appendChild(this.baseSetup.nuclear_style);

    // 初始化 其他 dom
    var self = this;
    this.otherDomInfo.forEach(function (item) {
      self.otherDom[item.name] = document.createElement(item.type);
      // 自动添加 class
      self.otherDom[item.name].setAttribute('class', 'nuclear_' + item.name);
      if (typeof item.innerText !== 'undefined')
        self.otherDom[item.name].innerText = item.innerText;
      document.body.appendChild(self.otherDom[item.name]);
    });
  };

  Nuclear.prototype.preload = function () {
    // 用于 forEach 的匿名函数，我知道 es6 箭头函数可以直接用 this，但我就是要用 es5，你打我呀
    var self = this;

    // 循环 mediaInfo
    this.mediaInfo.forEach(function (item, index) {
      // 设置未加载完成
      self.mediaIsLoaded[item.name] = false;
      // 创建 dom
      self.mediaDom[item.name] = document.createElement(item.type);
      // 指定 src
      self.mediaDom[item.name].src = item.src;

      // 监听预加载完成 让 mediaIsLoaded 相应的 name 变为 true
      if (item.type === 'img') {
        // 添加 class
        self.mediaDom[item.name].setAttribute(
          'class',
          'nuclear nuclear_' + item.name
        );
        // 监听 img 预加载 完成
        self.mediaDom[item.name].onload = function () {
          self.mediaIsLoaded[item.name] = true;
          self.preloadView();
        };
      } else if (item.type === 'audio') {
        // 监听 audio 预加载 完成
        self.mediaDom[item.name].addEventListener(
          'canplaythrough',
          function () {
            self.mediaIsLoaded[item.name] = true;
            self.preloadView();
          }
        );
      }

      // 修正图片的相对位置，因为发射井和核弹是分开的，baseSetup 控制整体定位，如果 mediaInfo 中有自己的定位，则会跟 baseSetup 相加
      if (typeof item.top !== 'undefined')
        self.mediaDom[item.name].style.top =
          self.baseSetup.position.top + item.top + 'px';
      if (typeof item.left !== 'undefined')
        self.mediaDom[item.name].style.left =
          self.baseSetup.position.left + item.left + 'px';
      if (typeof item.bottom !== 'undefined')
        self.mediaDom[item.name].style.bottom =
          self.baseSetup.position.bottom + item.bottom + 'px';
      if (typeof item.right !== 'undefined')
        self.mediaDom[item.name].style.right =
          self.baseSetup.position.right + item.right + 'px';

      // 添加到 body
      document.body.appendChild(self.mediaDom[item.name]);

      // 进度条 根据媒体个数自动设置百分比
      var percent = parseInt((100 / self.mediaInfo.length) * (index + 1));
      self.baseSetup.progress_style.innerText +=
        '.nuclear_progress[data-preload="' +
        (index + 1) +
        '"]::before { width: ' +
        percent +
        '%; } ';
    });

    // 进度条 style 添加至 head
    document.head.appendChild(self.baseSetup.progress_style);
  };

  /**
   * 渲染预加载进度的页面显示
   */
  Nuclear.prototype.preloadView = function () {
    var n = 0;
    // 取出 mediaIsLoaded 的值转为数组，用 some 遍历，如果值为 true 就 ++n
    Object.values(this.mediaIsLoaded).some(function (v) {
      if (v) ++n;
    });
    // 设置 data-preload，预加载媒体的个数，控制进度条
    this.otherDom.progress.setAttribute('data-preload', n);
    // 计算百分比
    var percent = parseInt((100 / this.mediaInfo.length) * n);
    // 设置 文字的百分比
    this.otherDom.progress_text.innerText = '核弹祈祷nia ' + percent + '%';
    // Nuclear Missile Ready
    if (n === this.mediaInfo.length) {
      this.nuclearMissileReadyBefore();
    }
  };

  /**
   * 核弹准备就绪前
   */
  Nuclear.prototype.nuclearMissileReadyBefore = function () {
    var self = this;

    // 播放音频
    this.mediaDom.open_silo.play();
    // 显示发射井
    this.mediaDom.silo.style.display = 'block';

    // 等待发射井展开动画
    setTimeout(function () {
      // 隐藏发射井动图
      self.mediaDom.silo.style.display = 'none';
      // 显示待发射核弹
      self.mediaDom.nuclear_up.style.display = 'block';
      // 显示发射井静态图
      self.mediaDom.finished.style.display = 'block';
    }, self.baseSetup.timeout.open_silo);

    // 发射井展开后再等待 nuclear_ready 毫秒，执行 nuclearMissileReady
    setTimeout(function () {
      if (self.baseSetup.is_ready) return;
      // 准备就绪
      self.baseSetup.is_ready = true;
      self.nuclearMissileReady();
    }, self.baseSetup.timeout.open_silo + self.baseSetup.timeout.nuclear_ready);
  };

  /**
   * 弹准备就绪
   */
  Nuclear.prototype.nuclearMissileReady = function () {
    var self = this;
    // 播放音频
    this.mediaDom.ready.play();
    // 显示择目标的 div
    this.otherDom.select_target.style.display = 'block';
    // 显示鼠标指针动图
    this.mediaDom.mouse.style.display = 'block';
    // 默认位置在界面外 鼠标移动才会更新位置
    this.mediaDom.mouse.style.top = -this.mediaDom.mouse.clientHeight + 'px';
    this.mediaDom.mouse.style.left = -this.mediaDom.mouse.clientWidth + 'px';
    // 点击发射
    this.otherDom.select_target.addEventListener('click', function (e) {
      // 判断是否已发射
      if (self.baseSetup.is_launched) return;
      self.baseSetup.is_launched = true;
      // 隐藏 鼠标指针动图
      self.mediaDom.mouse.style.display = 'none';
      // 显示鼠标
      self.otherDom.select_target.style.cursor = 'default';
      // 发射时烟雾 和 隐藏 发射时烟雾
      self.mediaDom.smoke_1.style.display = 'block';
      setTimeout(function () {
        self.mediaDom.smoke_1.style.display = 'none';
      }, self.baseSetup.timeout.smoke_1);
      // 获取滚动条高度
      var scrollTop =
        document.body.scrollTop !== 0
          ? document.body.scrollTop
          : document.documentElement.scrollTop;

      // Nuclear Missile Launched
      self.nuclearMissileLaunched({
        x: e.pageX,
        y: e.pageY - scrollTop,
      });
    });

    // 监听 选取目标 div 的鼠标移动事件
    this.otherDom.select_target.addEventListener('mousemove', function (e) {
      // 获取滚动条高度
      var scrollTop =
        document.body.scrollTop !== 0
          ? document.body.scrollTop
          : document.documentElement.scrollTop;

      // 改变 鼠标图片 top 为 鼠标 Y 坐标 - 滚动条高度 - 鼠标图片宽度 / 2
      self.mediaDom.mouse.style.top =
        e.pageY - scrollTop - self.mediaDom.mouse.clientHeight / 2 + 'px';
      // 判断 鼠标 X 坐标 大于 0 并且 小于 body 宽度 - 鼠标图片宽度 / 2
      // 改变 鼠标图片 left 为 鼠标 X 坐标 - 鼠标图片宽度 / 2
      if (
        e.pageX > 0 &&
        e.pageX <
          document.body.clientWidth - self.mediaDom.mouse.clientWidth / 2
      )
        self.mediaDom.mouse.style.left =
          e.pageX - self.mediaDom.mouse.clientWidth / 2 + 'px';
    });
    this.baseSetup.select_target_mouseover = function () {
      self.mediaDom.mouse.style.display = 'block';
    };
    this.baseSetup.select_target_mouseout = function () {
      self.mediaDom.mouse.style.display = 'none';
    };
    this.otherDom.select_target.addEventListener(
      'mouseover',
      this.baseSetup.select_target_mouseover
    );
    this.otherDom.select_target.addEventListener(
      'mouseout',
      this.baseSetup.select_target_mouseout
    );
  };

  /**
   * 核弹发射
   * @param {Object} position
   */
  Nuclear.prototype.nuclearMissileLaunched = function (position) {
    var self = this;
    this.mediaDom.biu.play();

    // 删除 mouseover mouseout 监听
    this.otherDom.select_target.removeEventListener(
      'mouseover',
      this.baseSetup.select_target_mouseover
    );
    this.otherDom.select_target.removeEventListener(
      'mouseout',
      this.baseSetup.select_target_mouseout
    );

    // 关井
    setTimeout(function () {
      // 隐藏静态发射井
      self.mediaDom.finished.style.display = 'none';
      // 显示关井动画
      self.mediaDom.close_silo.style.display = 'block';
    }, this.baseSetup.timeout.close_silo);

    // 设置目标点坐标
    this.baseSetup.select_target = position;

    // 执行上升动画
    this.animate(
      'nuclear_up',
      'bottom',
      document.documentElement.clientHeight +
        self.mediaDom.nuclear_up.clientHeight,
      function () {
        self.mediaDom.nuclear_up.style.display = 'none';
      }
    );

    // 等待 nuclear_down 毫秒，执行核弹下落
    setTimeout(function () {
      // 显示下落核弹
      self.mediaDom.nuclear_down.style.display = 'block';
      // 设定位置坐标
      // X 在 目标点 - 火箭宽度 / 2 （翻译人话就是火箭的中心冲着目标点）
      // Y 在 负的 火箭高度 （翻译人话就是隐藏在网页上面）
      self.mediaDom.nuclear_down.style.top =
        -self.mediaDom.nuclear_down.clientHeight + 'px';
      self.mediaDom.nuclear_down.style.left =
        position.x - self.mediaDom.nuclear_down.clientWidth / 2 + 'px';

      // 提前停止音效
      self.mediaDom.biu.pause();

      // 播放下落动画
      self.animate(
        'nuclear_down',
        'top',
        position.y - self.mediaDom.nuclear_down.clientHeight,
        function () {}
      );
    }, this.baseSetup.timeout.nuclear_down);
  };

  /**
   * 动画
   * @param {String} name
   * @param {String} position 位移 top left bottom right
   * @param {Number} to 动画结束点数值
   */
  Nuclear.prototype.animate = function (name, position, to, callback) {
    var self = this;
    var currentVal = parseInt(
      this.mediaDom[name].style[position].replace('px', '')
    );
    // 发射时尾烟 数组
    var smoke_2_elements = new Array();
    // 当前帧
    var frame = 1;
    var n = 5;
    // 下落的核弹需要根据选择的 Y 坐标进行加成，目标点越靠下，动画速度越快
    // 按说应该有其他解决方式，这种方式比较傻
    var plus =
      name === 'nuclear_down' ? self.baseSetup.select_target.y * 0.023 : 0;
    this.mediaDom[name].timer = setInterval(function () {
      var pixel = currentVal + frame * (n + plus);

      if (frame % 5 === 0 && n < 20) n++;
      self.mediaDom[name].style[position] = pixel + 'px';

      // 上升的核弹 发射时尾烟
      if (name === 'nuclear_up' && frame % 5 === 0) {
        // 每移动 5 次创建一个尾烟
        var smoke_2_el = document.createElement('img');
        smoke_2_el.setAttribute('class', 'nuclear_smoke_2 nuclear_smoke_2_el');
        smoke_2_el.style.opacity = 1;
        smoke_2_el.src =
          'https://pic.downk.cc/item/5ef18d5714195aa594d2d4fa.gif';

        // 添加到 发射时尾烟数组
        smoke_2_elements.push(smoke_2_el);
        // 添加到 body
        document.body.appendChild(smoke_2_el);
        // 设置 bottom 为 核弹 的 bottom - 50
        smoke_2_el.style.bottom =
          self.baseSetup.position.bottom +
          parseInt(self.mediaDom.nuclear_up.style.bottom.replace('px', '')) -
          50 +
          'px';
        // 设置 right 为 核弹 的 right
        smoke_2_el.style.right = self.mediaDom.nuclear_up.style.right;
        // 1 秒后删除
        setTimeout(function () {
          smoke_2_el.remove();
        }, 1000);
      }
      // 遍历 发射时尾烟
      smoke_2_elements.forEach(function (smoke_2) {
        // 设置透明度 减 0.03
        smoke_2.style.opacity = parseFloat(smoke_2.style.opacity) - 0.03;
      });
      // 当前帧 + 1
      frame++;
      // 如果到达预设位置 清除计时器 执行 callback
      if (pixel >= to) {
        clearInterval(self.mediaDom[name].timer);
        if (typeof callback === 'function') callback();
      }
    }, 30);
  };
}

var koe_33_a = document.querySelector('.content');
koe_33_a.href = 'javascript:void(0);';
koe_33_a.removeAttribute('target');
koe_33_a.onclick = function() {
  // 实例化核弹
  var nuclear = new Nuclear();
  // 初始化
  nuclear.init();
  // 预加载
  nuclear.preload();
}
