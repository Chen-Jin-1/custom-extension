                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   /*
                    ____   _                                  _   _             
                   / ___| | |__     ___   _ __               | | (_)  _ __    
                  | |     | '_ \   / _ \ | '_ \   _____   _  | | | | |  _ \                                                              
                  | |___  | | | | |  __/ | | | | |_____| | |_| | | | | | | |                                                          
                   \____| |_| |_|  \___| |_| |_|          \___/  |_| |_| |_|                                                             


                                            的工具箱                                                                                        


                                        __     __  _____ 
                                        \ \   / / |___ / 
                                         \ \ / /    |_ \ 
                                          \ V /    ___) |
                                           \_/    |____/ 
                    





















*/
const cj_icon = 'https://m.ccw.site/avatar/678cc9343778fc282d6252c5/4f8f1c67-6a2d-4670-bc70-a774bfe43b93.png';
const bg_image = 'https://m.ccw.site/works-covers/617a5ac1-1944-400a-abc0-fbb3ea3e8d92.png';

const BlockType = Scratch.BlockType;
const ArgumentType = Scratch.ArgumentType;
const Cast = Scratch.Cast;

const vm = Scratch.vm;
const hasOwn = (obj, property) =>
  Object.prototype.hasOwnProperty.call(obj, property);

const label = (text) => ({
  blockType: "label",
  text: text,
});



// MD5
  // 为了防止以 wkrxiao 带头的曲解这段协议，所以我用 Base64 加密了

  // ICAgIFRoaXMgbWQ1IGZ1bmN0aW9uIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1L2Jsb2IvbWFzdGVyL2pzL21kNS5qcwogICAgd2hpY2ggaXMgbGljZW5zZWQgdW5kZXI6CgogICAgTUlUIExpY2Vuc2UKCiAgICBDb3B5cmlnaHQgwqkgMjAxMSBTZWJhc3RpYW4gVHNjaGFuLCBodHRwczovL2JsdWVpbXAubmV0CgogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZgogICAgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgIlNvZnR3YXJlIiksIHRvIGRlYWwgaW4KICAgIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8KICAgIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mCiAgICB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sCiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczoKCiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwKICAgIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuCgogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IKICAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTCiAgICBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IKICAgIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUgogICAgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4KICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuCiAgICAqLw==

  const md5 = (function () {
    /**
     * Add integers, wrapping at 2^32.
     * This uses 16-bit operations internally to work around bugs in interpreters.
     *
     * @param {number} x First integer
     * @param {number} y Second integer
     * @returns {number} Sum
     */
    function safeAdd(x, y) {
      var lsw = (x & 0xffff) + (y & 0xffff);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xffff);
    }

    /**
     * Bitwise rotate a 32-bit number to the left.
     *
     * @param {number} num 32-bit number
     * @param {number} cnt Rotation count
     * @returns {number} Rotated number
     */
    function bitRotateLeft(num, cnt) {
      return (num << cnt) | (num >>> (32 - cnt));
    }

    /**
     * Basic operation the algorithm uses.
     *
     * @param {number} q q
     * @param {number} a a
     * @param {number} b b
     * @param {number} x x
     * @param {number} s s
     * @param {number} t t
     * @returns {number} Result
     */
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(
        bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s),
        b
      );
    }
    /**
     * Basic operation the algorithm uses.
     *
     * @param {number} a a
     * @param {number} b b
     * @param {number} c c
     * @param {number} d d
     * @param {number} x x
     * @param {number} s s
     * @param {number} t t
     * @returns {number} Result
     */
    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn((b & c) | (~b & d), a, b, x, s, t);
    }
    /**
     * Basic operation the algorithm uses.
     *
     * @param {number} a a
     * @param {number} b b
     * @param {number} c c
     * @param {number} d d
     * @param {number} x x
     * @param {number} s s
     * @param {number} t t
     * @returns {number} Result
     */
    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
    }
    /**
     * Basic operation the algorithm uses.
     *
     * @param {number} a a
     * @param {number} b b
     * @param {number} c c
     * @param {number} d d
     * @param {number} x x
     * @param {number} s s
     * @param {number} t t
     * @returns {number} Result
     */
    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }
    /**
     * Basic operation the algorithm uses.
     *
     * @param {number} a a
     * @param {number} b b
     * @param {number} c c
     * @param {number} d d
     * @param {number} x x
     * @param {number} s s
     * @param {number} t t
     * @returns {number} Result
     */
    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }

    /**
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     *
     * @param {Array} x Array of little-endian words
     * @param {number} len Bit length
     * @returns {Array<number>} MD5 Array
     */
    function binlMD5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << len % 32;
      x[(((len + 64) >>> 9) << 4) + 14] = len;

      var i;
      var olda;
      var oldb;
      var oldc;
      var oldd;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;

      for (i = 0; i < x.length; i += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d;

        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }
      return [a, b, c, d];
    }

    /**
     * Convert an array of little-endian words to a string
     *
     * @param {Array<number>} input MD5 Array
     * @returns {string} MD5 string
     */
    function binl2rstr(input) {
      var i;
      var output = "";
      var length32 = input.length * 32;
      for (i = 0; i < length32; i += 8) {
        output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
      }
      return output;
    }

    /**
     * Convert a raw string to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     *
     * @param {string} input Raw input string
     * @returns {Array<number>} Array of little-endian words
     */
    function rstr2binl(input) {
      var i;
      var output = [];
      output[(input.length >> 2) - 1] = undefined;
      for (i = 0; i < output.length; i += 1) {
        output[i] = 0;
      }
      var length8 = input.length * 8;
      for (i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
      }
      return output;
    }

    /**
     * Calculate the MD5 of a raw string
     *
     * @param {string} s Input string
     * @returns {string} Raw MD5 string
     */
    function rstrMD5(s) {
      return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
    }

    /**
     * Calculates the HMAC-MD5 of a key and some data (raw strings)
     *
     * @param {string} key HMAC key
     * @param {string} data Raw input string
     * @returns {string} Raw MD5 string
     */
    function rstrHMACMD5(key, data) {
      var i;
      var bkey = rstr2binl(key);
      var ipad = [];
      var opad = [];
      var hash;
      ipad[15] = opad[15] = undefined;
      if (bkey.length > 16) {
        bkey = binlMD5(bkey, key.length * 8);
      }
      for (i = 0; i < 16; i += 1) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5c5c5c5c;
      }
      hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
      return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
    }

    /**
     * Convert a raw string to a hex string
     *
     * @param {string} input Raw input string
     * @returns {string} Hex encoded string
     */
    function rstr2hex(input) {
      var hexTab = "0123456789abcdef";
      var output = "";
      var x;
      var i;
      for (i = 0; i < input.length; i += 1) {
        x = input.charCodeAt(i);
        output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
      }
      return output;
    }

    /**
     * Encode a string as UTF-8
     *
     * @param {string} input Input string
     * @returns {string} UTF8 string
     */
    function str2rstrUTF8(input) {
      return unescape(encodeURIComponent(input));
    }

    /**
     * Encodes input string as raw MD5 string
     *
     * @param {string} s Input string
     * @returns {string} Raw MD5 string
     */
    function rawMD5(s) {
      return rstrMD5(str2rstrUTF8(s));
    }
    /**
     * Encodes input string as Hex encoded string
     *
     * @param {string} s Input string
     * @returns {string} Hex encoded string
     */
    function hexMD5(s) {
      return rstr2hex(rawMD5(s));
    }
    /**
     * Calculates the raw HMAC-MD5 for the given key and data
     *
     * @param {string} k HMAC key
     * @param {string} d Input string
     * @returns {string} Raw MD5 string
     */
    function rawHMACMD5(k, d) {
      return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
    }
    /**
     * Calculates the Hex encoded HMAC-MD5 for the given key and data
     *
     * @param {string} k HMAC key
     * @param {string} d Input string
     * @returns {string} Raw MD5 string
     */
    function hexHMACMD5(k, d) {
      return rstr2hex(rawHMACMD5(k, d));
    }

    /**
     * Calculates MD5 value for a given string.
     * If a key is provided, calculates the HMAC-MD5 value.
     * Returns a Hex encoded string unless the raw argument is given.
     *
     * @param {string} string Input string
     * @param {string} [key] HMAC key
     * @param {boolean} [raw] Raw output switch
     * @returns {string} MD5 output
     */
    function md5(string, key, raw) {
      if (!key) {
        if (!raw) {
          return hexMD5(string);
        }
        return rawMD5(string);
      }
      if (!raw) {
        return hexHMACMD5(key, string);
      }
      return rawHMACMD5(key, string);
    }

    return md5;
  })();

  const textEncoder = new TextEncoder();
  const textDecoder = new TextDecoder();

  /**
   * @param {Uint8Array} bytes
   * @returns {string}
   */
  const encodeBinary = (bytes) => {
    // Pre-allocating buffer seems to be much faster than string concatenation
    const buffer = new Uint8Array(Math.ceil((bytes.length * 8) / 3));
    let ptr = 0;

    for (var i = 0; i <= bytes.length - 3; i += 3) {
      // AAAAAAAA BBBBBBBB CCCCCCCC
      // 11122233 34445556 66777888
      const a = bytes[i];
      const b = bytes[i + 1];
      const c = bytes[i + 2];
      buffer[ptr++] = 49 + (a >> 5);
      buffer[ptr++] = 49 + ((a >> 2) & 0b111);
      buffer[ptr++] = 49 + (((a & 0b11) << 1) | (b >> 7));
      buffer[ptr++] = 49 + ((b >> 4) & 0b111);
      buffer[ptr++] = 49 + ((b >> 1) & 0b111);
      buffer[ptr++] = 49 + (((b & 0b1) << 2) | (c >> 6));
      buffer[ptr++] = 49 + ((c >> 3) & 0b111);
      buffer[ptr++] = 49 + (c & 0b111);
    }

    switch (bytes.length - i) {
      case 1: {
        // AAAAAAAA
        // 11122233 3
        const a = bytes[i];
        buffer[ptr++] = 49 + (a >> 5);
        buffer[ptr++] = 49 + ((a >> 2) & 0b111);
        buffer[ptr++] = 49 + ((a & 0b11) << 1);
        break;
      }

      case 2: {
        // AAAAAAAA BBBBBBBB
        // 11122233 34445556 66
        const a = bytes[i];
        const b = bytes[i + 1];
        buffer[ptr++] = 49 + (a >> 5);
        buffer[ptr++] = 49 + ((a >> 2) & 0b111);
        buffer[ptr++] = 49 + (((a & 0b11) << 1) | (b >> 7));
        buffer[ptr++] = 49 + ((b >> 4) & 0b111);
        buffer[ptr++] = 49 + ((b >> 1) & 0b111);
        buffer[ptr++] = 49 + ((b & 0b1) << 2);
        break;
      }
    }

    return textDecoder.decode(buffer);
  };

  /**
   * @param {string} string
   * @returns {Uint8Array}
   */
  const decodeBinary = (string) => {
    const encodedBytes = Math.floor((string.length * 3) / 8);
    const result = new Uint8Array(encodedBytes);
    let ptr = 0;

    for (var i = 0; i <= string.length - 8; i += 8) {
      // AAA BBB CCC DDD EEE FFF GGG HHH
      // 111 111 112 222 222 233 333 333
      const a = string.charCodeAt(i) - 49;
      const b = string.charCodeAt(i + 1) - 49;
      const c = string.charCodeAt(i + 2) - 49;
      const d = string.charCodeAt(i + 3) - 49;
      const e = string.charCodeAt(i + 4) - 49;
      const f = string.charCodeAt(i + 5) - 49;
      const g = string.charCodeAt(i + 6) - 49;
      const h = string.charCodeAt(i + 7) - 49;
      result[ptr++] = (a << 5) | (b << 2) | (c >> 1);
      result[ptr++] = ((c & 0b1) << 7) | (d << 4) | (e << 1) | (f >> 2);
      result[ptr++] = ((f & 0b11) << 6) | (g << 3) | h;
    }

    switch (encodedBytes - ptr) {
      case 1: {
        // AAA BBB CCC
        // 111 111 11
        const a = string.charCodeAt(i) - 49;
        const b = string.charCodeAt(i + 1) - 49;
        const c = string.charCodeAt(i + 2) - 49;
        result[ptr] = (a << 5) | (b << 2) | (c >> 1);
        break;
      }

      case 2: {
        // AAA BBB CCC DDD EEE FFF
        // 111 111 112 222 222 2
        const a = string.charCodeAt(i) - 49;
        const b = string.charCodeAt(i + 1) - 49;
        const c = string.charCodeAt(i + 2) - 49;
        const d = string.charCodeAt(i + 3) - 49;
        const e = string.charCodeAt(i + 4) - 49;
        const f = string.charCodeAt(i + 5) - 49;
        result[ptr++] = (a << 5) | (b << 2) | (c >> 1);
        result[ptr] = ((c & 0b1) << 7) | (d << 4) | (e << 1) | (f >> 2);
        break;
      }
    }

    return result;
  };

// TurboWarp 数字编码

  /**
   * @param {string} text
   * @returns {string}
   */
  const encodeText = (text) => encodeBinary(textEncoder.encode(text));

  /**
   * @param {string} text
   * @returns {string}
   */
  const decodeText = (text) => {
    // All characters must be in range [1, 8]
    for (let i = 0; i < text.length; i++) {
      const ch = text.charCodeAt(i);
      if (ch < 49 || ch > 56) {
        return "";
      }
    }
    return textDecoder.decode(decodeBinary(text));
  };


class cjToolbox {
  constructor(){
    this._formatMessage = Scratch.runtime.getFormatMessage({
      en: {
        'extname': 'Chen-Jin \'s Toolbox',
        // 通用标签
        'label.general': 'General',
        'label.window': 'Browser Window',
        'label.network': 'Network',
        'label.webControl': 'Web Control',
        'label.vibration': 'Vibration (Mobile)',
        'label.battery': 'Battery',
        'label.comment': 'Comment or Execute',
        'label.text': 'Text',
        'label.boolean': 'Boolean',
        'label.nesting': 'Nesting',
        'label.math': 'Math',
        'label.clipboard': 'Clipboard',
        'label.encoding': 'Encoding & Validation',
        'label.mouse': 'Mouse Pointer',
        'label.json': 'JSON',
        'label.scratch': 'Scratch Hidden Blocks',
        
        // 积木文字
        'alert': 'Alert [TEXT] and wait',
        'confirm': 'Show confirm dialog with question [TEXT] and wait',
        'prompt': 'Show prompt with question [TEXT] default answer [DEFAULT] and wait',
        'openweb': 'Ask to open https://[URL] in new tab',
        'gotoweb': 'Ask to navigate to https://[URL]',
        'webre': 'Ask to redirect to https://[URL]',
        'api': 'Request API from [URL]',
        'rpoem': 'Get poem from Hitokoto [API] line',
        'extapi': 'Get [EXT] of extension with id [ID] from CCW Extension Market',
        'change_title': 'Change page title to [TITLE]',
        'thistitle': 'Page title',
        'visibility': 'On current page?',
        'when_visibility': 'When leave current page',
        'on_editor': 'In [IDE]?',
        'dark': 'Dark mode enabled?',
        'fullscreen': '[ACTION] fullscreen mode',
        'reload': 'Ask to Reload page',
        'close': 'Ask to Close page',
        'vibration': 'Vibrate with pattern [PATTERN]',
        'vibration_stop': 'Stop vibration',
        'battery_1': 'Battery level',
        'battery_2': 'Charging?',
        'battery_3': 'Seconds until fully charged',
        'battery_4': 'Seconds until empty',
        'comment': 'Comment or execute [COMM]',
        'comment_hat': 'Comment [COMM]',
        'while_true': 'Repeat',
        'r': 'Return [TEXT]',
        'r_comment': 'Return [STR] and comment [COMM]',
        'enter': 'Line break',
        'enter_text': 'Line [L1] before and [L2] after',
        'if_return': 'If [BOOL] then return [TRUE] else return [FALSE]',
        'exactly': '[A] = [B] (case sensitive)',
        'bool_true': 'True',
        'bool_false': 'False',
        'r_comment_bool': 'Return [BOOL] and comment [COMM]',
        'str_to_bool': 'Convert [STR] to boolean',
        'xor': '[B1] XOR [B2]',
        'xnor': '[B1] XNOR [B2]',
        'nand': '[B1] NAND [B2]',
        'nor': '[B1] NOR [B2]',
        'do_comm': 'Comment [COMM] and [DO]',
        'do_': '[DO]',
        'math_pi': 'π',
        'power': '[A] to the power of [B]',
        'root': '[B]th root of [A]',
        'trig': '[CUSTOM] of [DEG] radians',
        'prob': '[NUM]% probability [BOOL]',
        'cb_read': 'Text copied to clipboard',
        'cb_write': 'Copy [TEXT] to clipboard',
        'encode': 'Encode [TEXT] with [ENCODE]',
        'decode': 'Decode [TEXT] with [DECODE]',
        'md5_': '32-bit uppercase MD5 of [TEXT]',
        't_to_u': 'Unicode of first character in [TEXT]',
        'u_to_t': 'Character of Unicode [UNI]',
        'generateString': 'Generate [LEN] random characters from [CHAR]',
        'change_witcat_cursor': 'Change cursor style of [WITCATDIV] ID [WITCATID] to [MOUSE]',
        'witcat_cursor': 'Cursor style of [WITCATDIV] ID [WITCATID]',
        'json_is_valid': 'Is [json] valid JSON?',
        'json_is': 'Is [json] JSON [types]?',
        'json_get_all': 'All [Stype] of [json]',
        'json_new': 'New [json]',
        'json_has_key': 'Does [json] have key [key]?',
        'json_has_value': 'Does [json] have value [value]?',
        'json_equal': '[json1][equal][json2]',
        'json_jlength': 'Length of JSON [json]',
        'json_get': '[item] in [json]',
        'json_set': 'Set [item] in [json] to [value]',
        'json_delete': 'Delete [item] from [json]',
        'json_length': 'Length of array [json]',
        'json_array_get': 'Item [item] of array [json]',
        'json_array_push': 'Add [item] to array [json]',
        'json_array_set': 'Replace item [pos] in [json] with [item]',
        'json_array_insert': 'Insert [item] before position [pos] in [json]',
        'json_array_delete': 'Delete item [item] from array [json]',
        'json_array_remove_all': 'Remove all [item] from array [json]',
        'json_array_itemH': 'Position of [item] in array [json]',
        'json_array_from': 'Array from text [json]',
        'json_array_fromto': 'Items [item] to [item2] of array [json]',
        'json_array_reverse': 'Reverse array [json]',
        'json_array_flat': 'Flatten array [json] [depth] levels',
        'json_array_concat': 'Concatenate arrays [json] and [json2]',
        'json_array_filter': 'Get all [key] values from array [json]',
        'json_array_setlen': 'Set length of array [json] to [len]',
        'json_array_create': 'Split [text] into array by [d]',
        'json_array_join': 'Join array [json] with separator [d]',
        'json_array_sort': 'Sort array [list] by [order]',
        'json_array_analysis': '[analysis] of array [list]',
        
        // 菜单选项
        'menu.enter': 'Enter',
        'menu.exit': 'Exit',
        'menu.global': 'Global',
        'menu.overseas': 'Overseas',
        'menu.true': 'True',
        'menu.false': 'False',
        'menu.execute': 'Execute',
        'menu.notExecute': 'Not execute',
        'menu.base64': 'Base 64',
        'menu.turbowarp': 'TurboWarp Number Encoding',
        'menu.url': 'URL',
        'menu.gandi': 'CCW (in CCW)',
        'menu.gandi_cocrea': 'CCW (in COCREA)',
        'menu.ccw': 'CCW Traditional Editor',
        'menu.turbowarp_web': 'TurboWarp Web',
        'menu.turbowarp_desktop': 'TurboWarp Desktop',
        'menu.keys': 'Keys',
        'menu.values': 'Values',
        'menu.datas': 'Entries',
        'menu.object': 'Object',
        'menu.array': 'Array',
        'menu.equal': 'Equal',
        'menu.notEqual': 'Not equal',
        'menu.ascending': 'Ascending',
        'menu.descending': 'Descending',
        'menu.minimum': 'Minimum',
        'menu.maximum': 'Maximum',
        'menu.sum': 'Sum',
        'menu.average': 'Average',
        'menu.median': 'Median',
        'menu.mode': 'Mode',
        'menu.variance': 'Variance',
        'menu.url': 'Latest version URL',
        'menu.name': 'Extension name',
        'menu.code': 'Source code',
        'menu.bgurl': 'Background image URL',
        'menu.p_id': 'Author unique ID',
        'menu.p_name': 'Author nickname',
        'menu.p_avatar': 'Author avatar URL',
        'menu.desc': 'Description',
        'menu.vers': 'Version info JSON',
        'menu.json': 'Complete JSON',
        'menu.stop': 'Stop',
        'menu.start': 'Start',
        'menu.auto': 'Auto',
        'menu.default': 'Default',
        'menu.none': 'None',
        'menu.pointer': 'Pointer',
        'menu.progress': 'Interactive loading',
        'menu.wait': 'Non-interactive loading',
        'menu.help': 'Help',
        'menu.cell': 'Cell selection',
        'menu.crosshair': 'Crosshair',
        'menu.text': 'Text',
        'menu.vertical-text': 'Vertical text',
        'menu.not-allowed': 'Not allowed',
        'menu.alias': 'Create shortcut',
        'menu.copy': 'Copy',
        'menu.grab': 'Grab',
        'menu.grabbing': 'Grabbing',
        'menu.col-resize': 'Column resize',
        'menu.row-resize': 'Row resize',
        'menu.ew-resize': 'East-west resize',
        'menu.ns-resize': 'North-south resize',
        'menu.nesw-resize': 'Northeast-southwest resize',
        'menu.nwse-resize': 'Northwest-southeast resize',
        'menu.zoom-in': 'Zoom in',
        'menu.zoom-out': 'Zoom out',
        'menu.input': 'WitCat Input',
        'menu.bbcode': 'WitCat BBcode',
        'menu.markdown': 'WitCat MarkDown'
      },
      'zh-cn': {
        'extname': 'Chen-Jin 的工具箱',
        // 通用标签
        'label.general': '通用',
        'label.window': '浏览器弹窗',
        'label.network': '网络',
        'label.webControl': '网页控制',
        'label.vibration': '振动（移动端）',
        'label.battery': '电池',
        'label.comment': '注释或执行',
        'label.text': '文本',
        'label.boolean': '布尔值',
        'label.nesting': '嵌套',
        'label.math': '数学',
        'label.clipboard': '剪贴板',
        'label.encoding': '编码与校验',
        'label.mouse': '鼠标指针',
        'label.json': 'JSON',
        'label.scratch': 'Scratch 隐藏积木',
        
        // 积木文字
        'alert': '弹出警告框 内容 [TEXT] 并等待',
        'confirm': '弹出确认框 问题[TEXT] 并等待',
        'prompt': '弹出提示框 问题[TEXT] 默认回答[DEFAULT] 并等待',
        'openweb': '询问是否在新标签页打开 https://[URL]',
        'gotoweb': '询问是否跳转到 https://[URL]',
        'webre': '询问是否重定向到 https://[URL]',
        'api': '向 [URL] 请求 API',
        'rpoem': '用一言 [API] 线路请求诗句',
        'extapi': '共创世界拓展集市中拓展 id 为 [ID] 的 [EXT]',
        'change_title': '修改页面标题为 [TITLE]',
        'thistitle': '页面标题',
        'visibility': '在当前页面？',
        'when_visibility': '当离开当前页面',
        'on_editor': '在 [IDE] 中?',
        'dark': '启用了深色模式?',
        'fullscreen': '[ACTION]全屏模式',
        'reload': '询问是否刷新页面',
        'close': '询问是否关闭页面',
        'vibration': '以 [PATTERN] 模式振动',
        'vibration_stop': '停止振动',
        'battery_1': '电池电量',
        'battery_2': '正在充电？',
        'battery_3': '充满电需要的秒数',
        'battery_4': '用完电需要的秒数',
        'comment': '注释或执行 [COMM]',
        'comment_hat': '注释 [COMM]',
        'while_true': '重复执行',
        'r': '返回[TEXT]',
        'r_comment': '返回[STR]并注释[COMM]',
        'enter': '换行符',
        'enter_text': '前一行[L1]后二行[L2]',
        'if_return': '如果[BOOL]那么返回[TRUE]否则返回[FALSE]',
        'exactly': '[A] = [B] （区分大小写）',
        'bool_true': '成立',
        'bool_false': '不成立',
        'r_comment_bool': '返回[BOOL]并注释[COMM]',
        'str_to_bool': '将[STR]转为布尔值',
        'xor': '[B1]异或[B2]',
        'xnor': '[B1]同或[B2]',
        'nand': '[B1]与非[B2]',
        'nor': '[B1]同非[B2]',
        'do_comm': '注释[COMM]并[DO]',
        'do_': '[DO]',
        'math_pi': 'π',
        'power': '[A]的[B]次方',
        'root': '[A]的[B]次方根',
        'trig': '[CUSTOM][DEG]弧度',
        'prob': '[NUM]% 的概率[BOOL]',
        'cb_read': '复制到剪贴板的文字',
        'cb_write': '复制 [TEXT] 到剪贴板',
        'encode': '用 [ENCODE] 编码 [TEXT]',
        'decode': '用 [DECODE] 解码 [TEXT]',
        'md5_': '用 32 位大写 MD5 校验 [TEXT]',
        't_to_u': '[TEXT] 第一个字符的 Unicode',
        'u_to_t': 'Unicode [UNI] 对应的字符',
        'generateString': '用 [CHAR] 随机生成 [LEN] 位字符',
        'change_witcat_cursor': '修改鼠标停留在 [WITCATDIV] ID [WITCATID] 的样式为 [MOUSE]',
        'witcat_cursor': '鼠标停留在 [WITCATDIV] ID [WITCATID] 的样式',
        'json_is_valid': '[json]是合法 JSON？',
        'json_is': '[json]是 JSON [types]？',
        'json_get_all': '[json]的所有[Stype]',
        'json_new': '新[json]',
        'json_has_key': '[json]包括键[key]？',
        'json_has_value': '[json]包括值[value]？',
        'json_equal': '[json1][equal][json2]',
        'json_jlength': 'JSON[json]的长度',
        'json_get': '[json]中的[item]',
        'json_set': '将[json]中的[item]设为[value]',
        'json_delete': '删除[json]中的[item]',
        'json_length': '数组[json]的长度',
        'json_array_get': '数组[json]的第[item]项',
        'json_array_push': '将[item]加入数组[json]',
        'json_array_set': '替换数组[json]的第[pos]项为[item]',
        'json_array_insert': '在数组[json]的第[pos]项前插入[item]',
        'json_array_delete': '删除数组[json]的第[item]项',
        'json_array_remove_all': '删除数组[json]中的所有[item]',
        'json_array_itemH': '数组[json]中[item]的位置',
        'json_array_from': '来自文本[json]的数组',
        'json_array_fromto': '数组[json]的[item]到[item2]项',
        'json_array_reverse': '反转数组[json]',
        'json_array_flat': '扁平化数组[json][depth]层',
        'json_array_concat': '合并数组[json]和[json2]',
        'json_array_filter': '获取数组[json]中所有[key]的值',
        'json_array_setlen': '将数组[json]的长度设为[len]',
        'json_array_create': '以[d]分割字符串[text]为数组',
        'json_array_join': '将数组[json]用分隔符[d]连成字符串',
        'json_array_sort': '以[order]排列数组[list]',
        'json_array_analysis': '数组[list]的[analysis]',
        
        // 菜单选项
        'menu.enter': '进入',
        'menu.exit': '退出',
        'menu.global': '全球',
        'menu.overseas': '海外',
        'menu.true': '成立',
        'menu.false': '不成立',
        'menu.execute': '执行',
        'menu.notExecute': '不执行',
        'menu.base64': 'Base 64',
        'menu.turbowarp': 'TurboWarp 数字编码',
        'menu.url': 'URL',
        'menu.gandi': 'CCW (共创世界中)',
        'menu.gandi_cocrea': 'CCW (COCREA 中)',
        'menu.ccw': '共创世界 传统编辑器',
        'menu.turbowarp_web': 'TurboWarp 网页版',
        'menu.turbowarp_desktop': 'TurboWarp Desktop',
        'menu.keys': '键',
        'menu.values': '值',
        'menu.datas': '数据',
        'menu.object': '对象',
        'menu.array': '数组',
        'menu.equal': '=',
        'menu.notEqual': '≠',
        'menu.ascending': '正序',
        'menu.descending': '倒序',
        'menu.minimum': '最小值',
        'menu.maximum': '最大值',
        'menu.sum': '和',
        'menu.average': '平均值',
        'menu.median': '中位数',
        'menu.mode': '众数',
        'menu.variance': '方差',
        'menu.url': '最新版本 URL',
        'menu.name': '拓展名',
        'menu.code': '源代码',
        'menu.bgurl': '背景图片 URL',
        'menu.p_id': '作者唯一 ID',
        'menu.p_name': '作者昵称',
        'menu.p_avatar': '作者头像 URL',
        'menu.desc': '描述',
        'menu.vers': '版本信息 JSON',
        'menu.json': '完整 JSON',
        'menu.stop': '停止',
        'menu.start': '继续',
        'menu.auto': '自动',
        'menu.default': '默认指针',
        'menu.none': '无',
        'menu.pointer': '手形指针',
        'menu.progress': '可交互的加载',
        'menu.wait': '不可交互的加载',
        'menu.help': '帮助',
        'menu.cell': '选中单元格',
        'menu.crosshair': '交叉指针',
        'menu.text': '文字指针',
        'menu.vertical-text': '垂直文字指针',
        'menu.not-allowed': '禁止',
        'menu.alias': '创建快捷方式',
        'menu.copy': '可复制',
        'menu.grab': '可抓取',
        'menu.grabbing': '正在抓取',
        'menu.col-resize': '可被重设宽度',
        'menu.row-resize': '可被重设高度',
        'menu.ew-resize': '可往左/右移动',
        'menu.ns-resize': '可往上/下移动',
        'menu.nesw-resize': '可往左下/右上移动',
        'menu.nwse-resize': '可往左上/右下移动',
        'menu.zoom-in': '可放大',
        'menu.zoom-out': '可缩小',
        'menu.input': '白猫的文本框',
        'menu.bbcode': '白猫的BBcode',
        'menu.markdown': '白猫的markdown'
      }
    })
  }

  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    })
  }

  getInfo() {
    return {
      id: 'ct3',
      name: this.formatMessage("extname"),
      color1: '#00aeff',
      menuIconURI: cj_icon,
      blocks: [
        label('v3.0'),
        label(this.formatMessage('label.window')),
          {
            opcode: 'alert',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('alert'),
            arguments: {
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: this.formatMessage('alert').includes('警告') ? "警告" : "Alert"
              }
            }
          },
          {
            opcode: 'confirm',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('confirm'),
            arguments: {
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: this.formatMessage('confirm').includes('问题') ? "问题" : "Question"
              }
            }
          },
          {
            opcode: 'prompt',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('prompt'),
            arguments: {
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: this.formatMessage('prompt').includes('问题') ? "问题" : "Question"
              },
              DEFAULT: {
                type: ArgumentType.STRING,
                defaultValue: this.formatMessage('prompt').includes('默认回答') ? "默认回答" : "Default answer"
              }
            }
          },
        label(this.formatMessage('label.network')),
          {
            opcode: 'openweb',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('openweb'),
            arguments: {
              URL: {
                type: ArgumentType.STRING,
                defaultValue: "https://ccw.site/student/678cc9343778fc282d6252c5"
              }
            }
          },
          {
            opcode: 'gotoweb',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('gotoweb'),
            arguments: {
              URL: {
                type: ArgumentType.STRING,
                defaultValue: "https://ccw.site/student/678cc9343778fc282d6252c5"
              }
            }
          },
          {
            opcode: 'webre',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('webre'),
            arguments: {
              URL: {
                type: ArgumentType.STRING,
                defaultValue: "https://ccw.site/student/678cc9343778fc282d6252c5"
              }
            }
          },
          {
            opcode: 'api',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('api'),
            arguments: {
              URL: {
                type: ArgumentType.STRING,
                defaultValue: "https://extensions.turbowarp.org/hello.txt"
              }
            }
          },
          "---",
          {
            opcode: 'rpoem',
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: this.formatMessage('rpoem'),
            arguments: {
              API: {
                type: ArgumentType.STRING,
                menu: 'hitokoto_api'
              }
            }
          },
          {
            opcode: 'extapi',
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: this.formatMessage('extapi'),
            arguments: {
              ID: {
                type: ArgumentType.STRING,
                defaultValue: 'ct3'
              },
              EXT: {
                type: ArgumentType.STRING,
                menu: 'extension_menu'
              }
            }
          },
        label(this.formatMessage('label.webControl')),
          {
            opcode: 'change_title',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('change_title'),
            arguments: {
              TITLE: {
                type: ArgumentType.STRING,
                defaultValue: this.formatMessage('change_title').includes('页面标题') ? '新的页面标题' : 'New page title'
              }
            }
          },
          {
            opcode: 'thistitle',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('thistitle'),
          },
          "---",
          {
            opcode: 'visibility',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('visibility'),
            disableMonitor: true
          },
          {
            opcode: 'when_visibility',
            blockType: BlockType.HAT,
            text: this.formatMessage('when_visibility'),
          },
          "---",
          {
            opcode: 'on_editor',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('on_editor'),
            arguments: {
              IDE: {
                type: ArgumentType.STRING,
                menu: 'ides',
              }
            }
          },
          {
            opcode: 'dark',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('dark'),
            disableMonitor: true
          },
          {
            opcode: 'fullscreen',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('fullscreen'),
            arguments: {
              ACTION: {
                type: ArgumentType.STRING,
                menu: 'fullscreen_modes'
              }
            }
          },
          "---",
          {
            opcode: 'reload',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('reload'),
          },
          {
            opcode: 'close',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('close')
          },
        label(this.formatMessage('label.vibration')),
          {
            opcode: 'vibration',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('vibration'),
            arguments: {
              PATTERN: {
                type: ArgumentType.STRING,
                defaultValue: "1000,100,1000,100"
              }
            }
          },
          {
            opcode: 'vibration_stop',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('vibration_stop')
          },
        label(this.formatMessage('label.battery')),
          {
            opcode: 'battery_1',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('battery_1')
          },
          {
            opcode: 'battery_2',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('battery_2')
          },
          {
            opcode: 'battery_3',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('battery_3')
          },
          {
            opcode: 'battery_4',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('battery_4')
          },
        label(this.formatMessage('label.comment')),
          {
            opcode: 'comment',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('comment'),
            arguments: {
              COMM: {
                type: ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'comment_hat',
            blockType: BlockType.HAT,
            text: this.formatMessage('comment_hat'),
            arguments: {
              COMM: {
                type: ArgumentType.STRING
              }
            }
          },
          /*

          {
            opcode: 'while_true',
            blockType: BlockType.HAT,
            text: this.formatMessage('while_true'),
            isEdgeActivated: false
          },
          
          */
        label(this.formatMessage('label.text')),
          {
            opcode: 'r',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('r'),
            arguments: {
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'r_comment',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('r_comment'),
            arguments: {
              COMM: {
                type: ArgumentType.STRING
              },
              STR: {
                type: ArgumentType.STRING
              }
            }
          },
          "---",
          {
            opcode: 'enter',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('enter'),
            disableMonitor: true
          },
          {
            opcode: 'enter_text',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('enter_text'),
            arguments: {
              L1: {
                type: ArgumentType.STRING,
                defaultValue: '1'
              },
              L2: {
                type: ArgumentType.STRING,
                defaultValue: '2'
              }
            }
          },
          "---",
          {
            opcode: 'if_return',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('if_return'),
            arguments: {
              BOOL: {
                type: ArgumentType.BOOLEAN
              },
              TRUE: {
                type: ArgumentType.STRING,
                defaultValue: "true"
              },
              FALSE: {
                type: ArgumentType.STRING,
                defaultValue: "false"
              }
            }
          },
        label(this.formatMessage('label.boolean')),
          {
            opcode: 'exactly',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('exactly'),
            arguments: {
              A: {
                type: ArgumentType.STRING,
                defaultValue: 'CCW'
              },
              B: {
                type: ArgumentType.STRING,
                defaultValue: 'ccw'
              }
            }
          },
          "---",
          {
            opcode: 'bool_true',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('bool_true'),
            disableMonitor: true
          },
          {
            opcode: 'bool_false',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('bool_false'),
            disableMonitor: true
          },
          "---",
          {
            opcode: 'r_comment_bool',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('r_comment_bool'),
            arguments: {
              COMM: {
                type: ArgumentType.STRING
              },
              BOOL: {
                type: ArgumentType.BOOLEAN
              }
            }
          },
          {
            opcode: 'str_to_bool',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('str_to_bool'),
            arguments: {
              STR: {
                type: ArgumentType.STRING,
                defaultValue: 'true'
              }
            }
          },
          "---",
          {
            opcode: 'xor',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('xor'),
            arguments: {
              B1: {
                type: ArgumentType.BOOLEAN
              },
              B2: {
                type: ArgumentType.BOOLEAN
              }
            }
          },
          {
            opcode: 'xnor',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('xnor'),
            arguments: {
              B1: {
                type: ArgumentType.BOOLEAN
              },
              B2: {
                type: ArgumentType.BOOLEAN
              }
            }
          },
          {
            opcode: 'nand',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('nand'),
            arguments: {
              B1: {
                type: ArgumentType.BOOLEAN
              },
              B2: {
                type: ArgumentType.BOOLEAN
              }
            }
          },
          {
            opcode: 'nor',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('nor'),
            arguments: {
              B1: {
                type: ArgumentType.BOOLEAN
              },
              B2: {
                type: ArgumentType.BOOLEAN
              }
            }
          },
        label(this.formatMessage('label.nesting')),
          {
            opcode: 'do_comm',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: this.formatMessage('do_comm'),
            arguments: {
              COMM: {
                type: Scratch.ArgumentType.STRING,
              },
              DO: {
                type: Scratch.ArgumentType.STRING,
                menu: 'do_',
              },
            },
          },
          {
            opcode: 'do_',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: this.formatMessage('do_'),
            arguments: {
              DO: {
                type: Scratch.ArgumentType.STRING,
                menu: 'do_',
                defaultValue: 'false'
              },
            },
          },
        label(this.formatMessage('label.math')),
          {
            opcode: 'math_pi',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('math_pi')
          },
          "---",
          {
            opcode: 'power',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('power'),
            arguments: {
              A: {
                type: ArgumentType.NUMBER,
                defaultValue: 2
              },
              B: {
                type: ArgumentType.NUMBER,
                defaultValue: 4
              }
            }
          },
          {
            opcode: 'root',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('root'),
            arguments: {
              A: {
                type: ArgumentType.NUMBER,
                defaultValue: 16
              },
              B: {
                type: ArgumentType.NUMBER,
                defaultValue: 4
              }
            }
          },
          "---",
          {
            opcode: 'trig',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('trig'),
            arguments: {
              CUSTOM: {
                menu: 'trigs'
              },
              DEG: {
                type: ArgumentType.NUMBER,
                defaultValue: 0.5
              }
            }
          },
          {
            opcode: 'prob',
            blockType: BlockType.BOOLEAN,
            text: this.formatMessage('prob'),
            arguments: {
              BOOL: {
                menu: 'bools'
              },
              NUM: {
                type: ArgumentType.NUMBER,
                defaultValue: 50
              }
            }
          },
        label(this.formatMessage('label.clipboard')),
          {
            opcode: 'cb_read',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('cb_read'),
          },
          {
            opcode: 'cb_write',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('cb_write'),
            arguments:{
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: 'text'
              }
            }
          },
        label(this.formatMessage('label.encoding')),
          {
            opcode: 'encode',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('encode'),
            arguments:{
              ENCODE: {
                type: ArgumentType.STRING,
                menu: 'codes'
              },
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: 'Chen-Jin'
              }
            }
          },
          {
            opcode: 'decode',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('decode'),
            arguments:{
              DECODE: {
                type: ArgumentType.STRING,
                menu: 'codes'
              },
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: 'Q2hlbi1KaW4='
              }
            }
          },
          {
            opcode: 'md5_',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('md5_'),
            arguments:{
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: 'Chen-Jin'
              }
            }
          },
          {
            opcode: 't_to_u',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('t_to_u'),
            arguments:{
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: 'C'
              }
            }
          },
          {
            opcode: 'u_to_t',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('u_to_t'),
            arguments:{
              UNI: {
                type: ArgumentType.NUMBER,
                defaultValue: '67'
              }
            }
          },
          {
            opcode: 'generateString',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('generateString'),
            arguments:{
              CHAR: {
                type: ArgumentType.STRING,
                defaultValue: 'Chen-Jin'
              },
              LEN: {
                type: ArgumentType.NUMBER,
                defaultValue: '8'
              }
            }
          },
        label(this.formatMessage('label.mouse')),
          {
            opcode: 'change_witcat_cursor',
            blockType: BlockType.COMMAND,
            text: this.formatMessage('change_witcat_cursor'),
            arguments: {
              WITCATDIV: {
                menu: 'witcat_divs'
              },
              WITCATID: {
                type: ArgumentType.STRING,
                defaultValue: 'i'
              },
              MOUSE: {
                menu: 'mouse'
              },
            }
          },
          {
            opcode: 'witcat_cursor',
            blockType: BlockType.REPORTER,
            text: this.formatMessage('witcat_cursor'),
            arguments: {
              WITCATDIV: {
                menu: 'witcat_divs'
              },
              WITCATID: {
                type: ArgumentType.STRING,
                defaultValue: 'i'
              },
            }
          },
        label(this.formatMessage('label.json')),
          {
            opcode: "json_is_valid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: this.formatMessage('json_is_valid'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
            },
          },
          {
            opcode: "json_is",
            blockType: Scratch.BlockType.BOOLEAN,
            text: this.formatMessage('json_is'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
              types: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Object",
                menu: "types",
              },
            },
          },
          "---",
          {
            opcode: "json_get_all",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_get_all'),
            arguments: {
              Stype: {
                type: Scratch.ArgumentType.STRING,
                menu: "get_all",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value","key2":"value2"}',
              },
            },
          },
          {
            opcode: "json_new",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_new'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Object",
                menu: "types",
              },
            },
          },
          "---",
          {
            opcode: "json_has_key",
            blockType: Scratch.BlockType.BOOLEAN,
            text: this.formatMessage('json_has_key'),
            arguments: {
              key: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "key2",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
            },
          },
          {
            opcode: "json_has_value",
            blockType: Scratch.BlockType.BOOLEAN,
            text: this.formatMessage('json_has_value'),
            arguments: {
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "CCW",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["Chen-Jin","CCW"]',
              },
            },
          },
          {
            opcode: "json_equal",
            blockType: Scratch.BlockType.BOOLEAN,
            text: this.formatMessage('json_equal'),
            arguments: {
              json1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"a":0,"b":1}',
              },
              json2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"b":1,"a":0}',
              },
              equal: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "=",
                menu: "equal",
              },
            },
          },
          "---",
          {
            opcode: "json_jlength",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_jlength'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value","key2":"value2"}',
              },
            },
          },
          {
            opcode: "json_get",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_get'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "key",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
            },
          },
          {
            opcode: "json_set",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_set'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "key",
              },
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "new value",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
            },
          },
          {
            opcode: "json_delete",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_delete'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "key2",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value","key2":"value2"}',
              },
            },
          },
          "---",
          {
            opcode: "json_length",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_length'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[1,2,3]",
              },
            },
          },
          {
            opcode: "json_array_get",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_get'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["CCW","Chen-Jin"]',
              },
            },
          },
          {
            opcode: "json_array_push",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_push'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Chen-Jin",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["CCW"]',
              },
            },
          },
          {
            opcode: "json_array_set",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_set'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "fav",
              },
              pos: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["love","heart","follow"]',
              },
            },
          },
          {
            opcode: "json_array_insert",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_insert'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "fav",
              },
              pos: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["love","follow"]',
              },
            },
          },
          "---",
          {
            opcode: "json_array_delete",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_delete'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["CCW","a","Chen-Jin"]',
              },
            },
          },
          {
            opcode: "json_array_remove_all",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_remove_all'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "a",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["CCW","a","Chen-Jin","a","a"]',
              },
            },
          },
          "---",
          {
            opcode: "json_array_itemH",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_itemH'),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "CCW",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["CCW","Chen-Jin"]',
              },
            },
          },
          "---",
          {
            opcode: "json_array_from",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_from'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "abcd",
              },
            },
          },
          {
            opcode: "json_array_fromto",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_fromto'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[1,2,3,4]",
              },
              item: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              item2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3,
              },
            },
          },
          {
            opcode: "json_array_reverse",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_reverse'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c","d","e","f"]',
              },
            },
          },
          {
            opcode: "json_array_flat",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_flat'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[[1],2,[3,4],[5,[6]]]",
              },
              depth: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
            },
          },
          {
            opcode: "json_array_concat",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_concat'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b"]',
              },
              json2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["c","d"]',
              },
            },
          },
          {
            opcode: "json_array_filter",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_filter'),
            arguments: {
              key: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "id",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"id":12},{"id":24}]',
              },
            },
          },
          {
            opcode: "json_array_setlen",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_setlen'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]',
              },
              len: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
            },
          },
          "---",
          {
            opcode: "json_array_create",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_create'),
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "a,b,c",
              },
              d: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ",",
              },
            },
          },
          {
            opcode: "json_array_join",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_join'),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]',
              },
              d: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ",",
              },
            },
          },
          "---",
          {
            opcode: "json_array_sort",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_sort'),
            disableMonitor: true,
            arguments: {
              list: {
                type: Scratch.ArgumentType.STRING,
                defaultValue:
                  "[5.23, 214, 522, 61, 5.24, 62.2, 1, 51212, 0, 0]",
              },
              order: {
                type: Scratch.ArgumentType.STRING,
                menu: "sort_order",
              },
            },
          },
          {
            opcode: "json_array_analysis",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('json_array_analysis'),
            disableMonitor: true,
            arguments: {
              list: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[17, 1, 2017, 0, 120, 14]",
              },
              analysis: {
                type: Scratch.ArgumentType.STRING,
                menu: "analysis",
              },
            },
          },
        label(this.formatMessage('label.scratch')),
          {
            blockType: BlockType.XML,
            xml: '<block type="event_whentouchingobject"><value name="TOUCHINGOBJECTMENU"><shadow type="sensing_touchingobjectmenu"/></value></block>'
          },
          {
            blockType: BlockType.XML,
            xml: '<block id="for_each" type="control_for_each"><value name="VALUE"><shadow type="math_whole_number"><field name="NUM">10</field></shadow></value></block>'
          },
          {
            blockType: BlockType.XML,
            xml: '<block id="while" type="control_while"/>'
          },
          {
            blockType: BlockType.XML,
            xml: '<block type="control_get_counter"/>'
          },
          {
            blockType: BlockType.XML,
            xml: '<block type="control_incr_counter"/>'
          },
          {
            blockType: BlockType.XML,
            xml: '<block type="control_clear_counter"/>'
          },
          {
            blockType: BlockType.XML,
            xml: '<block type="operator_join"><value name="STRING1"><shadow type="colour_picker"/></value><value name="STRING2"><shadow type="text"><field name="TEXT"></field></shadow></value></block>'
          },
          {
            blockType: BlockType.XML,
            xml: '<block type="operator_join"><value name="STRING1"><shadow type="matrix"><field name="MATRIX">0110010010100001001001100</field></shadow></value><value name="STRING2"><shadow type="text"><field name="TEXT"></field></shadow></value></block>'
          },
      ],
      menus: {
        fullscreen_modes: {
          items: [
            { 
              text: this.formatMessage('menu.enter'), 
              value: "enter" 
            },
            { 
              text: this.formatMessage('menu.exit'), 
              value: "exit" 
            }
          ]
        },
        hitokoto_api: {
          items: [
            { 
              text: this.formatMessage('menu.global'),
              value: "v1.hitokoto.cn" 
            },
            { 
              text: this.formatMessage('menu.overseas'), 
              value: "international.v1.hitokoto.cn"
            }
          ]
        },
        bools: {
          items: [
            { 
              text: this.formatMessage('menu.true'), 
              value: "true"
            },
            { 
              text: this.formatMessage('menu.false'), 
              value: "false"
            }
          ]
        },
        trigs: {
          items: [
            { 
              text: "sin", 
              value: "s"
            },
            { 
              text: "cos", 
              value: "c"
            },
            { 
              text: "tan", 
              value: "t"
            },
            { 
              text: "asin", 
              value: "as"
            },
            { 
              text: "acos", 
              value: "ac"
            },
            { 
              text: "atan", 
              value: "at"
            },
          ]
        },
        do_: {
          items: [
            { 
              text: this.formatMessage('menu.execute'), 
              value: "true"
            },
            { 
              text: this.formatMessage('menu.notExecute'), 
              value: "false"
            },
          ]
        },
        codes: {
          items: [
            { 
              text: this.formatMessage('menu.base64'), 
              value: "b64"
            },
            { 
              text: this.formatMessage('menu.turbowarp'), 
              value: "n"
            },
            { 
              text: this.formatMessage('menu.url'), 
              value: "url"
            },
          ]
        },
        ides: {
          items: [
            { 
              text: this.formatMessage('menu.gandi'), 
              value: "ccw.site/gandi"
            },
            { 
              text: this.formatMessage('menu.gandi_cocrea'), 
              value: "cocrea.world/gandi"
            },
            { 
              text: this.formatMessage('menu.ccw'), 
              value: "ccw.site/creator"
            },
            { 
              text: this.formatMessage('menu.turbowarp_web'), 
              value: "turbowarp.org/editor"
            },
            { 
              text: this.formatMessage('menu.turbowarp_desktop'), 
              value: "tw-editor://"
            },
          ]
        },
        mouse: {
          acceptReporters: true,
          items: [
            { text: this.formatMessage('menu.auto'), value: "auto" },
            { text: this.formatMessage('menu.default'),  value: "default" },
            { text: this.formatMessage('menu.none'), value: "none" },
            { text: this.formatMessage('menu.pointer'), value: "pointer" },
            { text: this.formatMessage('menu.progress'), value: "progress" },
            { text: this.formatMessage('menu.wait'), value: "wait" },
            { text: this.formatMessage('menu.help'), value: "help" },
            { text: this.formatMessage('menu.cell'), value: "cell" },
            { text: this.formatMessage('menu.crosshair'), value: "crosshair" },
            { text: this.formatMessage('menu.text'), value: "text" },
            { text: this.formatMessage('menu.vertical-text'), value: "vertical-text" },
            { text: this.formatMessage('menu.not-allowed'), value: "not-allowed" },
            { text: this.formatMessage('menu.alias'), value: "alias" },
            { text: this.formatMessage('menu.copy'), value: "copy" },
            { text: this.formatMessage('menu.grab'), value: "grab" },
            { text: this.formatMessage('menu.grabbing'), value: "grabbing" },
            { text: this.formatMessage('menu.col-resize'), value: "col-resize" },
            { text: this.formatMessage('menu.row-resize'), value: "row-resize" },
            { text: this.formatMessage('menu.ew-resize'), value: "ew-resize" },
            { text: this.formatMessage('menu.ns-resize'), value: "ns-resize" },
            { text: this.formatMessage('menu.nesw-resize'), value: "nesw-resize" },
            { text: this.formatMessage('menu.nwse-resize'), value: "nwse-resize" },
            { text: this.formatMessage('menu.zoom-in'), value: "zoom-in" },
            { text: this.formatMessage('menu.zoom-out'), value: "zoom-out" },
          ]
        },
        witcat_divs: {
          items: [
            { 
              text: this.formatMessage('menu.input'), 
              value: "WitCatInput"
            },
            { 
              text: this.formatMessage('menu.bbcode'), 
              value: "WitCatBBcode"
            },
            { 
              text: this.formatMessage('menu.markdown'), 
              value: "WitCatMarkDown"
            },
          ]
        },
        observer_modes: {
          items: [
            { 
              text: this.formatMessage('menu.stop'), 
              value: "stop"
            },
            { 
              text: this.formatMessage('menu.start'), 
              value: "start"
            },
          ]
        },
        extension_menu: {
          items: [
            {
              text: this.formatMessage('menu.url'),
              value: 'url'
            },
            {
              text: this.formatMessage('menu.name'),
              value: 'name'
            },
            {
              text: this.formatMessage('menu.code'),
              value: 'code'
            },
            {
              text: this.formatMessage('menu.bgurl'),
              value: 'bgurl'
            },
            {
              text: this.formatMessage('menu.p_id'),
              value: 'p_id'
            },
            {
              text: this.formatMessage('menu.p_name'),
              value: 'p_name'
            },
            {
              text: this.formatMessage('menu.p_avatar'),
              value: 'p_avatar'
            },
            {
              text: this.formatMessage('menu.desc'),
              value: 'desc'
            },
            {
              text: this.formatMessage('menu.vers'),
              value: 'vers'
            },
            {
              text: this.formatMessage('menu.json'),
              value: 'json'
            },
          ]
        },
        get_all: {
          items: [
            {
              text: this.formatMessage('menu.keys'),
              value: "keys",
            },
            {
              text: this.formatMessage('menu.values'),
              value: "values",
            },
            {
              text: this.formatMessage('menu.datas'),
              value: "datas",
            },
          ],
        },
        get_list: {
          acceptReporters: true,
          items: "getLists",
        },
        types: {
          acceptReporters: true,
          items: [
            {
              text: this.formatMessage('menu.object'),
              value: "Object",
            },
            {
              text: this.formatMessage('menu.array'),
              value: "Array",
            },
          ],
        },
        equal: {
          acceptReporters: true,
          items: [this.formatMessage('menu.equal'), this.formatMessage('menu.notEqual')],
        },
        sort_order: {
          acceptReporters: true,
          items: [
            {
              text: this.formatMessage('menu.ascending'),
              value: "ascending",
            },
            {
              text: this.formatMessage('menu.descending'),
              value: "descending",
            },
          ],
        },
        analysis: {
          acceptReporters: true,
          items: [
            {
              text: this.formatMessage('menu.minimum'),
              value: "minimum",
            },
            {
              text: this.formatMessage('menu.maximum'),
              value: "maximum",
            },
            {
              text: this.formatMessage('menu.sum'),
              value: "sum",
            },
            {
              text: this.formatMessage('menu.average'),
              value: "average",
            },
            {
              text: this.formatMessage('menu.median'),
              value: "median",
            },
            {
              text: this.formatMessage('menu.mode'),
              value: "mode",
            },
            {
              text: this.formatMessage('menu.variance'),
              value: "variance",
            },
          ],
        },
      }
    }
  }

  alert(args){
    alert(args.TEXT);
  }

  confirm(args){
    return confirm(args.TEXT);
  }

  prompt(args){
    return prompt(args.TEXT,args.DEFAULT);
  }
  
  openweb(args){
    if (confirm(`作品请求在新窗口中打开 https://${args.URL}，是否同意？`))
      window.open(`https://${args.URL}`);
  }

  gotoweb(args){
    if (confirm(`作品请求跳转至 https://${args.URL}，是否同意？`))
      location.href = (`https://${args.URL}`);
  }

  api(args) {
    const data = fetch(args.URL)
      .then(response => response.text())
      .then(data => {return data})
      .catch(error => {return error})
    return data;
  }
  
  vibration(args) {
    navigator.vibrate(args.PATTERN.split(","));
  }

  reload(){
    if (confirm(`作品请求刷新，是否同意？`))
      location.reload();
  }

  vibration_stop() {
      navigator.vibrate(0);
  }

  battery_1(){
    return navigator.getBattery().then((battery) => `${battery.level * 100}`);
  }

  battery_2(){
    return navigator.getBattery().then((battery) => `${battery.charging}`);
  }

  battery_3(){
    return navigator.getBattery().then((battery) => `${battery.chargingTime}`);
  }

  battery_4(){
    return navigator.getBattery().then((battery) => `${battery.dischargingTime}`);
  }

  bool_true(){
    return true;
  }

  bool_false(){
    return false;
  }

  r_comment(args){
    return args.STR;
  }

  r_comment_bool(args){
    return args.BOOL;
  }

  str_to_bool(args){
    return Cast.toString(args.STR);
  }

  math_pi(){
    return Math.PI;
  }

  r(args){
    return args.TEXT;
  }

  change_title(args){
    document.title = args.TITLE;
  }

  visibility(){
    return document.visibilityState === "visible";
  }

  enter(){
    return "\n";
  }

  enter_text(args){
    return args.L1+"\n"+args.L2;
  }

  on_editor(args) {
    return location.href.includes(args.IDE);
  }

  dark(){
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  if_return(args){
    if (args.BOOL){
      return args.TRUE;
    } else {
      return args.FALSE;
    }
  }

  power(args){
    return Math.pow(args.A,args.B);
  }

  fullscreen(args) {
    switch (args.ACTION){
      case "enter":{
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        }
        break;
      }
      case "exit":{    
          if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        break;
      }
    }
  }

  rpoem(args){
    const poem = fetch(`https://${args.API}/?c=i&encode=text`)
      .then(response => response.text())
      .catch(error => console.error(error))
    return poem;
  }

  trig(args){
    switch (args.CUSTOM){
      case "s": {
        return Math.sin(args.DEG);
      }
      case "c": { 
        return Math.cos(args.DEG);
      }
      case "t": { 
        return Math.tan(args.DEG);
      }
      case "as": {
        return Math.asin(args.DEG);
      }
      case "ac": { 
        return Math.acos(args.DEG);
      }
      case "at": { 
        return Math.atan(args.DEG);
      }
    }
  }

  prob(args) {
    const percentage = Math.min(Math.max(Number(args.NUM) || 0, 0), 100);
    const shouldReturnWhenBelow = args.BOOL === "true";
    const randomValue = Math.random() * 100;
    return shouldReturnWhenBelow 
      ? randomValue < percentage
      : randomValue >= percentage;
  }

  root(args) {
    return Math.pow(args.A, 1/args.B);
  }

  func1(a,b) {
    return `${Cast.toNumber(Cast.toBoolean(a))}${Cast.toNumber(Cast.toBoolean(b))}`;
  }

  xor(args) {
    return (Cast.toBoolean(args.B1) && !Cast.toBoolean(args.B2)) || (!Cast.toBoolean(args.B1) && Cast.toBoolean(args.B2));
  }

  xnor(args) {
    return (Cast.toBoolean(args.B1) && Cast.toBoolean(args.B2)) || (!Cast.toBoolean(args.B1) && !Cast.toBoolean(args.B2));
  }

  nand(args) {
    return !(Cast.toBoolean(args.B1) && Cast.toBoolean(args.B2));
  }

  nor(args) {
    return !(Cast.toBoolean(args.B1) || Cast.toBoolean(args.B2));
  }

  do_comm(args) {
    return Cast.toBoolean(args.DO);
  }

  do_(args) {
    return Cast.toBoolean(args.DO);
  }

  async cb_read() {
    try {
      return await navigator.clipboard.readText();
    } catch(error) {
      console.error(error)
      return '';
    }
  }

  cb_write(args) {
    return navigator.clipboard.writeText(args.TEXT);
  }

  exactly(args) {
    return args.A === args.B
  }

  encode(args) {
    var str = args.TEXT;
    switch (args.ENCODE) {
      case "b64":
        return this._btoa(str)
      case "n":
        return encodeText(str)
      case "url":
        return encodeURIComponent(str)
    }
  }

  decode(args) {
    var str = args.TEXT;
    switch (args.DECODE) {
      case "b64":
        try {
          return this._atob(str);
        } catch (error) {
          console.error("invalid base 64", error);
          return "";
        }
      case "n":
        return decodeText(str)
      case "url":
        return decodeURIComponent(str);
    }
    return "";
  }

  md5_(args) {
    return md5(args.TEXT).toUpperCase();
  }

  _btoa(unicode) {
    let bytes = new TextEncoder().encode(unicode);
    let binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join("");
    return btoa(binString);
  }
  _atob(base64) {
    let binString = atob(base64);
    let bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));
    return new TextDecoder().decode(bytes);
  }

  t_to_u(args) {
    var text = Cast.toString(args.TEXT)
    return text.charCodeAt(0);
  }

  u_to_t(args) {
    return String.fromCharCode(args.UNI);
  }

  async change_witcat_cursor(args){
    var witcat_div = document.getElementById(`${args.WITCATDIV}${args.WITCATID}`);
    witcat_div.style.cursor = args.MOUSE;
  }

  canvas_cursor() {
    return this.mouse;
  }

  async witcat_cursor(args){
    var witcat_div = document.getElementById(`${args.WITCATDIV}${args.WITCATID}`);
    try {
      return witcat_div.style.cursor;
    } catch(err) {
      console.error(err);
      return "";
    }
  }

  comment_hat() {
    return false;
  }

  thistitle(){
    return document.title;
  }

  when_visibility(){
    return document.visibilityState !== "visible";
  }

  generateString(args) {
    var chars = Cast.toString(args.CHAR);
    var length = args.LEN;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  open_document() {
    window.open("https://learn.ccw.site/article/0e3e5210-57b6-4025-9cad-3cacc8436b7e");
  }

  webre(args) {
    if (confirm(`作品请求重定向至 https://${args.URL}，是否同意？`))
      window.location.replace(args.URL);
  }

  close() {
    if (confirm(`作品请求关闭，是否同意？`))
      window.close();
  }

  while_true() {
    return Math.random() > 0.5;
  }

  async extapi(args) {
    const response = await fetch(`https://bfs-web.ccw.site/extensions/${args.ID}`);
    const data = await response.json();
    const json = data.body;
    console.log(data)
    if (data.msg === "Extension not found")
      return ''
    switch (args.EXT) {
      case "bgurl":
        return json.cover;
      case "p_id":
        return json.publisher.id;
      case "p_avatar":
        return json.publisher.avatar;
      case "url":
        return json.versions[0].assetUri;
      case "vers":
        return JSON.stringify(json.versions);
      case "p_name":
        return json.publisher.nickname;
      case "name":
        return json.name;
      case "desc":
        return json.description;
      case "json":
        return JSON.stringify(json);
      case "code":
        const url = json.versions[0].assetUri
        const data = fetch(url)
          .then(response => response.text())
          .then(data => {return data})
          .catch(error => {return error})
        return data;
    }
  }

  type(args) {
    return typeof(args.text)
  }

  getLists() {
    const globalLists = Object.values(
      vm.runtime.getTargetForStage().variables
    ).filter((x) => x.type === "list");
    const localLists = vm.editingTarget
      ? Object.values(vm.editingTarget.variables).filter(
          (x) => x.type === "list"
        )
      : [];
    const uniqueLists = [...new Set([...globalLists, ...localLists])];
    if (uniqueLists.length === 0) {
      return [
        {
          text: Scratch.translate("select a list"),
          value: "select a list",
        },
      ];
    }
    return uniqueLists.map((i) => ({
      text: i.name,
      value: i.id,
    }));
  }

  lookupList(list, util) {
    const byId = util.target.lookupVariableById(list);
    if (byId && byId.type === "list") {
      return byId;
    }
    const byName = util.target.lookupVariableByNameAndType(list, "list");
    if (byName) {
      return byName;
    }
    return null;
  }

  json_is_valid({ json }) {
    if (typeof json != "string") {
      return false;
    }
    json = json.trim();
    if (
      (json.slice(0, 1) != "[" || json.slice(-1) != "]") &&
      (json.slice(0, 1) != "{" || json.slice(-1) != "}")
    ) {
      return false;
    } else {
      try {
        JSON.parse(json);
        return true;
      } catch {
        return false;
      }
    }
  }

  // return object if its json else string
  json_valid_return(json) {
    if (typeof json != "string") {
      return json;
    } else if (
      (json.slice(0, 1) != "[" || json.slice(-1) != "]") &&
      (json.slice(0, 1) != "{" || json.slice(-1) != "}")
    ) {
      return json;
    } else {
      try {
        return JSON.parse(json) ?? "";
      } catch {
        return json;
      }
    }
  }

  json_is({ json, types }) {
    if (!this.json_is_valid({ json: json })) return false;
    try {
      json = JSON.parse(json);
      switch (types) {
        case "Object":
          return !Array.isArray(json);
        case "Array":
          return Array.isArray(json);
        default:
          return false;
      }
    } catch {
      return false;
    }
  }

  json_length({ json }) {
    try {
      json = JSON.parse(json);
      return Object.keys(json).length;
    } catch {
      return " ";
    }
  }

  json_new({ json }) {
    switch (json) {
      case "Object":
        return "{}";
      case "Array":
        return "[]";
      default:
        return "";
    }
  }

  json_has_key({ json, key }) {
    try {
      return (
        this._fixInvalidJSONValues(this.json_valid_return(key)) in
        JSON.parse(json)
      );
    } catch {
      return false;
    }
  }

  json_has_value({ json, value }) {
    try {
      json = JSON.parse(json);
      value = this.json_valid_return(value);
      return json.includes(value);
    } catch {
      return false;
    }
  }

  json_equal({ json1, equal, json2 }) {
    try {
      json1 = JSON.parse(json1);
      json2 = JSON.parse(json2);

      const keys1 = Object.keys(json1);
      const keys2 = Object.keys(json2);
      const result =
        keys1.length === keys2.length &&
        Object.keys(json1).every((key) => json1[key] === json2[key]);
      if (equal === "=") return result;
      if (equal === "≠") return !result;
    } catch {
      // ignore
    }
    return false;
  }

  json_get_all({ Stype, json }) {
    try {
      json = JSON.parse(json);
      switch (Stype) {
        case "keys":
          return JSON.stringify(Object.keys(json).map((key) => key ?? ""));
        case "values":
          return JSON.stringify(
            Object.keys(json).map((key) => json[key] ?? "")
          );
        case "datas":
          return JSON.stringify(
            Object.keys(json).map((key) => [key, json[key] ?? ""])
          );
        default:
          return "";
      }
    } catch {
      return "";
    }
  }

  json_get({ item, json }) {
    try {
      json = JSON.parse(json);
      if (hasOwn(json, item)) {
        const result = json[item] ?? "";
        if (typeof result === "object") {
          return JSON.stringify(result);
        } else {
          return result;
        }
      }
    } catch {
      // ignore
    }
    return "";
  }

  _fixInvalidJSONValues(value) {
    // JSON does not support these values, so convert to string.
    if (Number.isNaN(value)) return "NaN";
    if (value === Infinity) return "Infinity";
    if (value === -Infinity) return "-Infinity";
    // null and undefined -> empty
    return value ?? "";
  }

  json_set({ item, value, json }) {
    try {
      json = JSON.parse(json);
      value = this.json_valid_return(value);
      value = this._fixInvalidJSONValues(value);
      json[item] = value;
      return JSON.stringify(json);
    } catch {
      return "";
    }
  }

  json_delete({ item, json }) {
    try {
      json = JSON.parse(json);
      delete json[item];
      return JSON.stringify(json);
    } catch {
      return "";
    }
  }

  json_jlength({ json }) {
    // same function
    return this.json_length({ json: json });
  }

  json_array_get({ item, json }) {
    // 1...length : array content, -1...-length : reverse array content, 0 : ERROR
    try {
      item = Scratch.Cast.toNumber(item);
      if (item == 0) return "";
      if (item > 0) {
        item--;
      }
      json = JSON.parse(json);
      let result;
      if (item >= 0) {
        result = json[item];
      } else {
        const length = Scratch.Cast.toNumber(json.length);
        result = json[length + item];
      }
      result = result ?? "";
      if (typeof result == "object") {
        return JSON.stringify(result);
      } else {
        return result;
      }
    } catch {
      return "";
    }
  }

  json_array_itemH({ item, json }) {
    try {
      json = JSON.parse(json);
      item = this._fixInvalidJSONValues(this.json_valid_return(item));
      let result = JSON.stringify(json.indexOf(item) + 1);
      return result;
    } catch {
      return "";
    }
  }

  json_array_from({ json }) {
    try {
      return JSON.stringify(Array.from(String(json)));
    } catch {
      return "";
    }
  }

  json_array_concat({ json, json2 }) {
    try {
      json = JSON.parse(json);
      json2 = JSON.parse(json2);
      return JSON.stringify(json.concat(json2));
    } catch {
      return "";
    }
  }

  json_array_push({ item, json }) {
    try {
      json = JSON.parse(json);
      item = this._fixInvalidJSONValues(this.json_valid_return(item));
      json.push(item);
      return JSON.stringify(json);
    } catch {
      return "";
    }
  }

  json_array_insert({ item, pos, json }) {
    try {
      json = JSON.parse(json);
      item = this._fixInvalidJSONValues(this.json_valid_return(item));
      json.splice(pos - 1, 0, item);
      return JSON.stringify(json);
    } catch {
      return "";
    }
  }

  json_array_set({ item, pos, json }) {
    try {
      json = JSON.parse(json);
      json[pos - 1] = this._fixInvalidJSONValues(
        this.json_valid_return(item)
      );
      return JSON.stringify(json);
    } catch {
      return "";
    }
  }

  json_array_delete({ item, json }) {
    try {
      json = JSON.parse(json);
      json.splice(item - 1, 1);
      return JSON.stringify(json);
    } catch {
      return "";
    }
  }

  json_array_remove_all({ item, json }) {
    try {
      json = JSON.parse(json);
      item = this._fixInvalidJSONValues(this.json_valid_return(item));
      let i = 0;
      while (i < json.length) {
        if (json[i] === item) {
          json.splice(i, 1);
        } else {
          ++i;
        }
      }
      return JSON.stringify(json);
    } catch {
      return "";
    }
  }

  json_array_fromto({ json, item, item2 }) {
    try {
      return JSON.stringify(JSON.parse(json).slice(item - 1, item2));
    } catch {
      return "";
    }
  }

  json_array_reverse({ json }) {
    try {
      return JSON.stringify(JSON.parse(json).reverse());
    } catch {
      return "";
    }
  }

  json_array_flat({ json, depth }) {
    try {
      return JSON.stringify(JSON.parse(json).flat(depth));
    } catch {
      return "";
    }
  }

  json_array_create({ text, d }) {
    return JSON.stringify(String(text).split(d));
  }

  json_array_join({ json, d }) {
    try {
      return JSON.parse(json).join(d);
    } catch {
      return "";
    }
  }

  json_array_filter({ key, json }) {
    try {
      json = JSON.parse(json);
      return JSON.stringify(
        json.map((x) => {
          if (hasOwn(x, key)) {
            return x[key];
          }
          return null;
        })
      );
    } catch (e) {
      return "";
    }
  }

  json_array_setlen({ json, len }) {
    try {
      json = JSON.parse(json);
      json.length = len;
      return JSON.stringify(json);
    } catch {
      return "";
    }
  }

  json_vm_getlist({ list }, util) {
    try {
      let listVariable = this.lookupList(list, util);
      if (listVariable) {
        return JSON.stringify(listVariable.value);
      }
    } catch (e) {
      // ignore
    }
    return "";
  }
  json_vm_setlist({ list, json }, util) {
    try {
      let listVariable = this.lookupList(list, util);
      if (listVariable) {
        const array = JSON.parse(json);
        if (Array.isArray(array)) {
          const safeArray = array.map((i) => {
            if (typeof i === "object") return JSON.stringify(i);
            return i ?? "";
          });
          listVariable.value = safeArray;
        }
      }
    } catch (e) {
      // ignore
    }
    return "";
  }

  json_array_sort(args) {
    let list;
    try {
      list = JSON.parse(args.list);
    } catch {
      return "";
    }
    if (!Array.isArray(list)) {
      return "";
    }
    list.sort(Scratch.Cast.compare);
    if (args.order === "descending") list.reverse();
    return JSON.stringify(list);
  }
  json_array_analysis(args) {
    let list;
    try {
      list = JSON.parse(args.list);
    } catch {
      return 0;
    }
    if (!Array.isArray(list)) {
      return 0;
    }
    list = list.map(Scratch.Cast.toNumber);
    const listLength = list.length;
    switch (Scratch.Cast.toString(args.analysis)) {
      case "maximum": {
        let max = -Infinity;
        for (let i = 0; i < list.length; i++)
          if (list[i] > max) max = list[i];
        return max;
      }
      case "minimum": {
        let min = Infinity;
        for (let i = 0; i < list.length; i++)
          if (list[i] < min) min = list[i];
        return min;
      }
      case "sum":
        return list.reduce((a, b) => a + b, 0);
      case "average":
        return list.reduce((a, b) => a + b, 0) / listLength;
      case "median": {
        const list2 = list.sort(Scratch.Cast.compare);
        const list2Length = list2.length;
        const c = Math.floor(list2Length / 2);
        const e = list2Length % 2 === 0;
        if (e) return (list2[c - 1] + list2[c]) / 2;
        return list2[c];
      }
      case "mode": {
        const freqMap = new Map(),
          mode = [0, 0]; // current mode, max
        for (
          let i = 0, num = list[0], count = null;
          i < listLength;
          i++, num = list[i], count = freqMap.get(num)
        ) {
          count ||= 1;
          if (freqMap.has(num)) ++count;
          if (count > mode[1]) (mode[0] = num), (mode[1] = count);
          freqMap.set(num, count);
        }
        return mode[0];
      }
      case "variance": {
        const average = list.reduce((a, b) => a + b, 0) / listLength;
        const list2 = list.map((a) => (a - average) ** 2);
        return list2.reduce((a, b) => a + b, 0) / listLength;
      }
    }
    return 0;
  }
}

Scratch.extensions.register(new cjToolbox());

window.tempExt = {
  Extension: cjToolbox,
  info: {
    name: 'Chen-Jin 的工具箱 v3.0',
    description: '更多积木，更多功能',
    extensionId: 'ct3',
    featured: true,
    disabled: false,
    iconURL: bg_image,
    insetIconURL: cj_icon,
    collaboratorList: [
      {
        collaborator: 'Chen-Jin @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/678cc9343778fc282d6252c5',
      },
      {
        collaborator: 'Chen-Jin @ COCREA',
        collaboratorURL:
          'https://www.cocrea.world/@Chen-Jin',
      },
    ],
  },
};
