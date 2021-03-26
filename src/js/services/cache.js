class Cache{
    constructor(cacheName){
        CacheStorage.open(cacheName)
        this.cache=Cache
    }
    add(requests){
        this.cache.addAll(requests)
    }
}