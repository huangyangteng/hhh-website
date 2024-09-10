# English Learning TODO

需求：
1. 所有的块可以收起，可以拖拽排序  先做拖拽排序
2. 全局字体大小调整



写一个通用的Darg组件，用Draggable包括，状态放在store中

代码： english/test/

实现方法
* 拖拽排序依赖： https://github.com/SortableJS/react-sortablejs
* 实现方法
  * 状态放在store中，column1,colum2，在store中引入组件
  * 实现一个DragBox组件,包含拖拽排序逻辑
  * 在Pages中渲染2列


todo:
* 样式处理，样式统一使用css module
* 问题：拖拽排序之后，组件的状态会重置，这个问题需要考虑一下如何处理
  * 目前同一列拖拽排序，不会存在问题，不同的列就会有问题
* 当一列为空时，变成一列