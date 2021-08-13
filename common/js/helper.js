module.exports = {
	random(min, max) {
		if (min >= 0 && max > 0 && max >= min) {
			let gab = max - min + 1;
			return Math.floor(Math.random() * gab + min);
		} else {
			return 0;
		}
	},
	isArray (arr) {
	    return Object.prototype.toString.call(arr) === '[object Array]';
	},
	deepClone (obj) {
		// 对常见的“非”值，直接返回原来值
		if([null, undefined, NaN, false].includes(obj)) return obj;
	    if(typeof obj !== "object" && typeof obj !== 'function') {
			//原始类型直接返回
	        return obj;
	    }
	    var o = this.isArray(obj) ? [] : {};
	    for(let i in obj) {
	        if(obj.hasOwnProperty(i)){
	            o[i] = typeof obj[i] === "object" ? this.deepClone(obj[i]) : obj[i];
	        }
	    }
	    return o;
	},
	// JS对象深度合并
	deepMerge(target = {}, source = {}) {
		target = this.deepClone(target);
		if (typeof target !== 'object' || typeof source !== 'object') return false;
		for (var prop in source) {
			if (!source.hasOwnProperty(prop)) continue;
			if (prop in target) {
				if (typeof target[prop] !== 'object') {
					target[prop] = source[prop];
				} else {
					if (typeof source[prop] !== 'object') {
						target[prop] = source[prop];
					} else {
						if (target[prop].concat && source[prop].concat) {
							target[prop] = target[prop].concat(source[prop]);
						} else {
							target[prop] = this.deepMerge(target[prop], source[prop]);
						}
					}
				}
			} else {
				target[prop] = source[prop];
			}
		}
		return target;
	}
}