# Mynote
## 获取 touchmove touchend 时候的元素
```javascript
var photoDragEvtMobileMove = function(e) {
    var x = e.changedTouches[0].clientX;
    var y = e.changedTouches[0].clientY;
    var element = document.elementFromPoint(x, y);
    console.log(element);
};
document.getElementById('container').addEventListener('touchmove', photoDragEvtMobileMove, false)
```





# base
touches: 当前屏幕上所有触摸点的列表;

targetTouches: 当前对象上所有触摸点的列表;

changedTouches: 涉及当前(引发)事件的触摸点的列表



1. 用一个手指接触屏幕，触发事件，此时这三个属性有相同的值。

2. 用第二个手指接触屏幕，此时，touches有两个元素，每个手指触摸点为一个值。当两个手指触摸相同元素时，
targetTouches和touches的值相同，否则targetTouches 只有一个值。changedTouches此时只有一个值，
为第二个手指的触摸点，因为第二个手指是引发事件的原因

3. 用两个手指同时接触屏幕，此时changedTouches有两个值，每一个手指的触摸点都有一个值

4. 手指滑动时，三个值都会发生变化

5. 一个手指离开屏幕，touches和targetTouches中对应的元素会同时移除，而changedTouches仍然会存在元素。

6. 手指都离开屏幕之后，touches和targetTouches中将不会再有值，changedTouches还会有一个值，
此值为最后一个离开屏幕的手指的接触点。

触点坐标

touchstart和touchmove: e.targetTouches[0].pageX 或 (jquery)e.originalEvent.targetTouches[0].pageX

touchend: e.changedTouches[0].pageX 或 (jquery)e.originalEvent.changedTouches[0].pageX

 
 ---
 
 touch事件
 touchstart
 
 touchend
 
 touchmove
 
 ---
 
 每个 touch 对象包含属性：
 clientX：触摸目标在视口中的x坐标。

　　clientY：触摸目标在视口中的y坐标。

　　identifier：标识触摸的唯一ID。

　　pageX：触摸目标在页面中的x坐标。

　　pageY：触摸目标在页面中的y坐标。

　　screenX：触摸目标在屏幕中的x坐标。

　　screenY：触摸目标在屏幕中的y坐标。

　　target：触目的DOM节点目标。