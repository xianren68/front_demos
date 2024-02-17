export default class LRUCache {
    #capacity
    #map
    constructor(capacity) {
        this.#capacity = capacity
        this.#map = new Map()
    }
    has(key){
        return this.#map.has(key)
    }
    get(key){
        if (!this.#map.has(key)) return null
        // 删除key，重新插入到队尾
        const value = this.#map.get(key)
        this.#map.delete(key)
        this.#map.set(key, value)
        return value
    }
    set(key,value){
        if (this.#map.has(key)) this.#map.delete(key)
        this.#map.set(key, value)
        // 如果超出容量，删除最久未使用的那个元素
        if (this.#map.size > this.#capacity) this.#map.delete(this.#map.keys().next().value)
    }
}