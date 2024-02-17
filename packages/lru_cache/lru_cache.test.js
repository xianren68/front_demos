import {expect,test} from 'vitest'
import LRUCache from './lru_cache.js'

const lru_cache = new LRUCache(3)
lru_cache.set("a",1)
lru_cache.set("b",2)
lru_cache.set("c",3)
test("数据是否存在",()=>{
    expect(lru_cache.has("a")).toBe(true)
    expect(lru_cache.has("d")).toBe(false)
})

test("获取数据",()=>{
    expect(lru_cache.get("a")).toBe(1)
    expect(lru_cache.get("d")).toBeNull()
})

test("设置数据",()=>{
    lru_cache.set("a",10)
    expect(lru_cache.get("a")).toBe(10)
    lru_cache.set("d",100)
    expect(lru_cache.get("d")).toBe(100)
})


test("超出容量",()=>{
    expect(lru_cache.get("b")).toBeNull()
})