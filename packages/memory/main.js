
// 所有的icon
const allicons = [
  "/icons/at.png",
  "/icons/balance-scale.png",
  "/icons/bicycle.png",
  "/icons/bus.png",
  "/icons/cloud.png",
  "/icons/cogs.png",
  "/icons/motorcycle.png",
  "/icons/video.png",
  "/icons/at.png",
  "/icons/balance-scale.png",
  "/icons/bicycle.png",
  "/icons/bus.png",
  "/icons/cloud.png",
  "/icons/cogs.png",
  "/icons/motorcycle.png",
  "/icons/video.png"
]

function main(){
  // 获取main
  const main = document.querySelector("main")
  main.addEventListener("click",click)
  const imgs = document.getElementsByTagName("img")
  // 打乱icon图标
  allicons.sort(() => Math.random() - 0.5)
  for(let i=0;i<imgs.length;i++){
    imgs[i].src = allicons[i]
  }
}
// 剩余的一个未匹配的元素
let pre = null
// 定时器
let timer = null
/**
 * 
 * @param {Event} e 
 */
function click(e){
  // 还有定时器在执行
  if(timer){return}
  const target = e.target
  // 判断剩余的与当前的图案是否相同
  target.classList.remove("item")
  target.classList.add("item_click")
  if(pre){
    // 相同变换背景颜色
    if(pre.firstElementChild.src === target.firstElementChild.src){
      target.classList.remove("item_click")
      pre.classList.remove("item_click")
      target.classList.add("item_solved")
      pre.classList.add("item_solved")
      pre = null
    }else{
      // 不相同，定时关闭
      timer = setTimeout(()=>{
        target.classList.remove("item_click")
        pre.classList.remove("item_click")
        target.classList.add("item")
        pre.classList.add("item")
        pre = null
        timer = null
      },1000)
    }
  }else{
    pre = target
  }
}
main()
