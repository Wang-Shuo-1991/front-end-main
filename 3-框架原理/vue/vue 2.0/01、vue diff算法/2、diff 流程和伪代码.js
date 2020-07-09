
// diff 流程
/**
 * patch (oldVnode, vnode) {
 *      
 * 
 *      if (isSameVnode(oldVnode, vnode)) {
 *          // 如果是新旧虚拟节点相同 那么进入patchnode 进行深入节点的比较
 *          patchNode(oldVnode, vnode)
 *          
 *      } else {
 *          // 如果新旧虚拟节点不相同 -> 新的vnode 直接替换掉旧的 vnode
 *          
 *          const oEl = oldVnode.el // 当前oldVnode对应的真实元素节点
            let parentEle = api.parentNode(oEl)  // 父元素
            createEle(vnode)  // 根据Vnode生成新元素
            if (parentEle !== null) {
                api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl)) // 将新元素添加进父元素
                api.removeChild(parentEle, oldVnode.el)  // 移除以前的旧元素节点
                oldVnode = null
            }
 *      }

        return vnode;
 *  
 * }
 * 
 * 
 * // samevnode 在哪些维度进行比较呢？
 * 
 * function isSameVnode (oldVnode, vnode) {
 *  return (
 *      // 1、 -> key值
 *      oldVnode.key === vnode.key;
 *      // 2、 -> 标签名
 *      oldVnode.tag === vnode.tag;
 *      // 3、 -> 是否为注释节点  这里有个 isComment
 *      oldVnode.isComment === vnode.isComment;
 *      // 4、 ->   是否定义了一些属性或者其他信息，比如 onclick，style等等
 *      isDef(oldVnode) === isDef(vnode);
 *      // 5、 -> 如果是input 要求type要一致
 *      sameInputType(oldVnode, vnode);
 *  )
 * }
 * 
 * // 如果是同一个 vnode 要进行 patchNode（）方法进行深入比较；
 * 
 * function patchVnode(oldVnode, vnode) {
 *  // 找到对应的真实dom，称为el
 *  const el = oldVnode.el = vnode.el;
 * // Vnode和oldVnode是否指向同一个对象，如果是，那么直接return    
 *  if (oldVnode === vnode) return; 
 * // 如果他们都有文本节点并且不相等，那么将el的文本节点设置为Vnode的文本节点
 * if (oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text) {
 *      api.setTextContent(el, vnode.text)
 * } else {
 *      updateEle(el, vnode, oldVnode)
 *      
        if (oldCh && ch && oldCh !== ch) {
            // 如果两者都有子节点，则执行updateChildren函数比较子节点，这一步很重要
            updateChildren(el, oldCh, ch)
        }else if (ch){
            // 如果oldVnode没有子节点而Vnode有，则将Vnode的子节点真实化之后添加到el
            createEle(vnode) //create el's children dom
        }else if (oldCh){
            // 如果oldVnode有子节点而Vnode没有，则删除el的子节点
            api.removeChildren(el)
        }
 * }
 *      
 * }
 * 

 // key -> 作用到底是什么？
        
    a、决定节点是否可以复用
    b、建立key-index的索引,主要是替代遍历，提升性能
 
    说是在diff算法中提高效率，并不完全准确。因为在即使没有key 并不影响
    进入 patchVnode的环节。主要是通过 key 作为唯一性的标志，来判断
    新旧vnode是否为同一节点，如果是就复用，不是的话，就新的替换旧的。
    但是，不带key比带key的性能要好。

 * 
 * 
 */ 