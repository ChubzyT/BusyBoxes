// ThreeCanvas.js r28 - http://github.com/mrdoob/three.js
var THREE = THREE || {};
THREE.Color = function(a){
    this.autoUpdate = true;
    this.setHex(a)
};
THREE.Color.prototype = {
    setRGBA: function(f, e, c, d){
        this.r = f;
        this.g = e;
        this.b = c;
        this.a = d;
        if (this.autoUpdate) {
            this.updateHex();
            this.updateStyleString()
        }
    },
    setHex: function(a){
        this.hex = a;
        if (this.autoUpdate) {
            this.updateRGBA();
            this.updateStyleString()
        }
    },
    copyRGB: function(a){
        this.r = a.r;
        this.g = a.g;
        this.b = a.b
    },
    copyRGBA: function(a){
        this.r = a.r;
        this.g = a.g;
        this.b = a.b;
        this.a = a.a
    },
    multiplySelfRGB: function(a){
        this.r *= a.r;
        this.g *= a.g;
        this.b *= a.b
    },
    updateHex: function(){
        this.hex = Math.floor(this.a * 255) << 24 ^ Math.floor(this.r * 255) << 16 ^ Math.floor(this.g * 255) << 8 ^ Math.floor(this.b * 255)
    },
    updateRGBA: function(){
        this.a = (this.hex >> 24 & 255) / 255;
        this.r = (this.hex >> 16 & 255) / 255;
        this.g = (this.hex >> 8 & 255) / 255;
        this.b = (this.hex & 255) / 255
    },
    updateStyleString: function(){
        this.__styleString = "rgba(" + Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + "," + this.a + ")"
    },
    toString: function(){
        return "THREE.Color ( r: " + this.r + ", g: " + this.g + ", b: " + this.b + ", a: " + this.a + ", hex: " + this.hex + " )"
    }
};
THREE.Vector2 = function(a, b){
    this.x = a || 0;
    this.y = b || 0
};
THREE.Vector2.prototype = {
    set: function(a, b){
        this.x = a;
        this.y = b;
        return this
    },
    copy: function(a){
        this.x = a.x;
        this.y = a.y;
        return this
    },
    addSelf: function(a){
        this.x += a.x;
        this.y += a.y;
        return this
    },
    add: function(b, a){
        this.x = b.x + a.x;
        this.y = b.y + a.y;
        return this
    },
    subSelf: function(a){
        this.x -= a.x;
        this.y -= a.y;
        return this
    },
    sub: function(b, a){
        this.x = b.x - a.x;
        this.y = b.y - a.y;
        return this
    },
    multiplyScalar: function(a){
        this.x *= a;
        this.y *= a;
        return this
    },
    unit: function(){
        this.multiplyScalar(1 / this.length());
        return this
    },
    length: function(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    lengthSq: function(){
        return this.x * this.x + this.y * this.y
    },
    negate: function(){
        this.x = -this.x;
        this.y = -this.y;
        return this
    },
    clone: function(){
        return new THREE.Vector2(this.x, this.y)
    },
    toString: function(){
        return "THREE.Vector2 (" + this.x + ", " + this.y + ")"
    }
};
THREE.Vector3 = function(a, c, b){
    this.x = a || 0;
    this.y = c || 0;
    this.z = b || 0
};
THREE.Vector3.prototype = {
    set: function(a, c, b){
        this.x = a;
        this.y = c;
        this.z = b;
        return this
    },
    copy: function(a){
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this
    },
    add: function(b, a){
        this.x = b.x + a.x;
        this.y = b.y + a.y;
        this.z = b.z + a.z;
        return this
    },
    addSelf: function(a){
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    },
    addScalar: function(a){
        this.x += a;
        this.y += a;
        this.z += a;
        return this
    },
    sub: function(b, a){
        this.x = b.x - a.x;
        this.y = b.y - a.y;
        this.z = b.z - a.z;
        return this
    },
    subSelf: function(a){
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    },
    cross: function(b, a){
        this.x = b.y * a.z - b.z * a.y;
        this.y = b.z * a.x - b.x * a.z;
        this.z = b.x * a.y - b.y * a.x;
        return this
    },
    crossSelf: function(c){
        var b = this.x, a = this.y, d = this.z;
        this.x = a * c.z - d * c.y;
        this.y = d * c.x - b * c.z;
        this.z = b * c.y - a * c.x;
        return this
    },
    multiplySelf: function(a){
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        return this
    },
    multiplyScalar: function(a){
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this
    },
    divideScalar: function(a){
        this.x /= a;
        this.y /= a;
        this.z /= a;
        return this
    },
    dot: function(a){
        return this.x * a.x + this.y * a.y + this.z * a.z
    },
    distanceTo: function(a){
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(d){
        var c = this.x - d.x, b = this.y - d.y, a = this.z - d.z;
        return c * c + b * b + a * a
    },
    length: function(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthSq: function(){
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    negate: function(){
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this
    },
    normalize: function(){
        if (this.length() > 0) {
            this.multiplyScalar(1 / this.length())
        }
        else {
            this.multiplyScalar(0)
        }
        return this
    },
    setLength: function(a){
        return this.normalize().multiplyScalar(a)
    },
    isZero: function(){
        var a = 0.0001;
        return (Math.abs(this.x) < a) && (Math.abs(this.y) < a) && (Math.abs(this.z) < a)
    },
    clone: function(){
        return new THREE.Vector3(this.x, this.y, this.z)
    },
    toString: function(){
        return "THREE.Vector3 ( " + this.x + ", " + this.y + ", " + this.z + " )"
    }
};
THREE.Vector4 = function(a, d, c, b){
    this.x = a || 0;
    this.y = d || 0;
    this.z = c || 0;
    this.w = b || 1
};
THREE.Vector4.prototype = {
    set: function(a, d, c, b){
        this.x = a;
        this.y = d;
        this.z = c;
        this.w = b;
        return this
    },
    copy: function(a){
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w;
        return this
    },
    add: function(b, a){
        this.x = b.x + a.x;
        this.y = b.y + a.y;
        this.z = b.z + a.z;
        this.w = b.w + a.w;
        return this
    },
    addSelf: function(a){
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w;
        return this
    },
    sub: function(b, a){
        this.x = b.x - a.x;
        this.y = b.y - a.y;
        this.z = b.z - a.z;
        this.w = b.w - a.w;
        return this
    },
    subSelf: function(a){
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w;
        return this
    },
    clone: function(){
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    },
    toString: function(){
        return "THREE.Vector4 (" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
    }
};
THREE.Ray = function(a, b){
    this.origin = a || new THREE.Vector3();
    this.direction = b || new THREE.Vector3()
};
THREE.Ray.prototype = {
    intersectScene: function(f){
        var c, a, b, e = f.objects, d = [];
        for (c = 0, a = e.length; c < a; c++) {
            b = e[c];
            if (b instanceof THREE.Mesh) {
                d = d.concat(this.intersectObject(b))
            }
        }
        d.sort(function(h, g){
            return h.distance - g.distance
        });
        return d
    },
    intersectObject: function(w){
        var n, j, i, t, s, q, p, v, k, x, u, r, g = w.geometry, h = g.vertices, o, e = [], m;
        for (n = 0, j = g.faces.length; n < j; n++) {
            i = g.faces[n];
            u = this.origin.clone();
            r = this.direction.clone();
            t = w.matrix.transform(h[i.a].position.clone());
            s = w.matrix.transform(h[i.b].position.clone());
            q = w.matrix.transform(h[i.c].position.clone());
            p = i instanceof THREE.Face4 ? w.matrix.transform(h[i.d].position.clone()) : null;
            v = w.matrixRotation.transform(i.normal.clone());
            k = r.dot(v);
            if (k < 0) {
                x = v.dot(new THREE.Vector3().sub(t, u)) / k;
                m = u.addSelf(r.multiplyScalar(x));
                if (i instanceof THREE.Face3) {
                    if (l(m, t, s, q)) {
                        o = {
                            distance: this.origin.distanceTo(m),
                            point: m,
                            face: i,
                            object: w
                        };
                        e.push(o)
                    }
                }
                else {
                    if (i instanceof THREE.Face4) {
                        if (l(m, t, s, p) || l(m, s, q, p)) {
                            o = {
                                distance: this.origin.distanceTo(m),
                                point: m,
                                face: i,
                                object: w
                            };
                            e.push(o)
                        }
                    }
                }
            }
        }
        return e;
        function l(d, G, D, B){
            var J = B.clone().subSelf(G), H = D.clone().subSelf(G), E = d.clone().subSelf(G), F = J.dot(J), C = J.dot(H), A = J.dot(E), z = H.dot(H), f = H.dot(E), y = 1 / (F * z - C * C), K = (z * A - C * f) * y, I = (F * f - C * A) * y;
            return (K > 0) && (I > 0) && (K + I < 1)
        }
    }
};
THREE.Rectangle = function(){
    var f, h, d, g, a, c, e = true;
    function b(){
        a = d - f;
        c = g - h
    }
    this.getX = function(){
        return f
    };
    this.getY = function(){
        return h
    };
    this.getWidth = function(){
        return a
    };
    this.getHeight = function(){
        return c
    };
    this.getX1 = function(){
        return f
    };
    this.getY1 = function(){
        return h
    };
    this.getX2 = function(){
        return d
    };
    this.getY2 = function(){
        return g
    };
    this.set = function(j, l, i, k){
        e = false;
        f = j;
        h = l;
        d = i;
        g = k;
        b()
    };
    this.addPoint = function(i, j){
        if (e) {
            e = false;
            f = i;
            h = j;
            d = i;
            g = j
        }
        else {
            f = Math.min(f, i);
            h = Math.min(h, j);
            d = Math.max(d, i);
            g = Math.max(g, j)
        }
        b()
    };
    this.addRectangle = function(i){
        if (e) {
            e = false;
            f = i.getX1();
            h = i.getY1();
            d = i.getX2();
            g = i.getY2()
        }
        else {
            f = Math.min(f, i.getX1());
            h = Math.min(h, i.getY1());
            d = Math.max(d, i.getX2());
            g = Math.max(g, i.getY2())
        }
        b()
    };
    this.inflate = function(i){
        f -= i;
        h -= i;
        d += i;
        g += i;
        b()
    };
    this.minSelf = function(i){
        f = Math.max(f, i.getX1());
        h = Math.max(h, i.getY1());
        d = Math.min(d, i.getX2());
        g = Math.min(g, i.getY2());
        b()
    };
    this.instersects = function(i){
        return Math.min(d, i.getX2()) - Math.max(f, i.getX1()) >= 0 && Math.min(g, i.getY2()) - Math.max(h, i.getY1()) >= 0
    };
    this.empty = function(){
        e = true;
        f = 0;
        h = 0;
        d = 0;
        g = 0;
        b()
    };
    this.isEmpty = function(){
        return e
    };
    this.toString = function(){
        return "THREE.Rectangle (x1: " + f + ", y1: " + g + ", x2: " + d + ", y1: " + h + ", width: " + a + ", height: " + c + ")"
    }
};
THREE.Matrix3 = function(){
    this.m = []
};
THREE.Matrix3.prototype = {
    transpose: function(){
        var a;
        a = this.m[1];
        this.m[1] = this.m[3];
        this.m[3] = a;
        a = this.m[2];
        this.m[2] = this.m[6];
        this.m[6] = a;
        a = this.m[5];
        this.m[5] = this.m[7];
        this.m[7] = a;
        return this
    }
};
THREE.Matrix4 = function(){
    this._x = new THREE.Vector3();
    this._y = new THREE.Vector3();
    this._z = new THREE.Vector3()
};
THREE.Matrix4.prototype = {
    n11: 1,
    n12: 0,
    n13: 0,
    n14: 0,
    n21: 0,
    n22: 1,
    n23: 0,
    n24: 0,
    n31: 0,
    n32: 0,
    n33: 1,
    n34: 0,
    n41: 0,
    n42: 0,
    n43: 0,
    n44: 1,
    identity: function(){
        this.n11 = 1;
        this.n12 = 0;
        this.n13 = 0;
        this.n14 = 0;
        this.n21 = 0;
        this.n22 = 1;
        this.n23 = 0;
        this.n24 = 0;
        this.n31 = 0;
        this.n32 = 0;
        this.n33 = 1;
        this.n34 = 0;
        this.n41 = 0;
        this.n42 = 0;
        this.n43 = 0;
        this.n44 = 1
    },
    copy: function(a){
        this.n11 = a.n11;
        this.n12 = a.n12;
        this.n13 = a.n13;
        this.n14 = a.n14;
        this.n21 = a.n21;
        this.n22 = a.n22;
        this.n23 = a.n23;
        this.n24 = a.n24;
        this.n31 = a.n31;
        this.n32 = a.n32;
        this.n33 = a.n33;
        this.n34 = a.n34;
        this.n41 = a.n41;
        this.n42 = a.n42;
        this.n43 = a.n43;
        this.n44 = a.n44
    },
    lookAt: function(d, c, b){
        var a = this._x, f = this._y, e = this._z;
        e.sub(d, c);
        e.normalize();
        a.cross(b, e);
        a.normalize();
        f.cross(e, a);
        f.normalize();
        this.n11 = a.x;
        this.n12 = a.y;
        this.n13 = a.z;
        this.n14 = -a.dot(d);
        this.n21 = f.x;
        this.n22 = f.y;
        this.n23 = f.z;
        this.n24 = -f.dot(d);
        this.n31 = e.x;
        this.n32 = e.y;
        this.n33 = e.z;
        this.n34 = -e.dot(d);
        this.n41 = 0;
        this.n42 = 0;
        this.n43 = 0;
        this.n44 = 1
    },
    transform: function(a){
        var d = a.x, c = a.y, b = a.z, e = a.w ? a.w : 1;
        a.x = this.n11 * d + this.n12 * c + this.n13 * b + this.n14 * e;
        a.y = this.n21 * d + this.n22 * c + this.n23 * b + this.n24 * e;
        a.z = this.n31 * d + this.n32 * c + this.n33 * b + this.n34 * e;
        e = this.n41 * d + this.n42 * c + this.n43 * b + this.n44 * e;
        if (a.w) {
            a.w = e
        }
        else {
            a.x = a.x / e;
            a.y = a.y / e;
            a.z = a.z / e
        }
        return a
    },
    crossVector: function(b){
        var c = new THREE.Vector4();
        c.x = this.n11 * b.x + this.n12 * b.y + this.n13 * b.z + this.n14 * b.w;
        c.y = this.n21 * b.x + this.n22 * b.y + this.n23 * b.z + this.n24 * b.w;
        c.z = this.n31 * b.x + this.n32 * b.y + this.n33 * b.z + this.n34 * b.w;
        c.w = (b.w) ? this.n41 * b.x + this.n42 * b.y + this.n43 * b.z + this.n44 * b.w : 1;
        return c
    },
    multiply: function(d, c){
        this.n11 = d.n11 * c.n11 + d.n12 * c.n21 + d.n13 * c.n31 + d.n14 * c.n41;
        this.n12 = d.n11 * c.n12 + d.n12 * c.n22 + d.n13 * c.n32 + d.n14 * c.n42;
        this.n13 = d.n11 * c.n13 + d.n12 * c.n23 + d.n13 * c.n33 + d.n14 * c.n43;
        this.n14 = d.n11 * c.n14 + d.n12 * c.n24 + d.n13 * c.n34 + d.n14 * c.n44;
        this.n21 = d.n21 * c.n11 + d.n22 * c.n21 + d.n23 * c.n31 + d.n24 * c.n41;
        this.n22 = d.n21 * c.n12 + d.n22 * c.n22 + d.n23 * c.n32 + d.n24 * c.n42;
        this.n23 = d.n21 * c.n13 + d.n22 * c.n23 + d.n23 * c.n33 + d.n24 * c.n43;
        this.n24 = d.n21 * c.n14 + d.n22 * c.n24 + d.n23 * c.n34 + d.n24 * c.n44;
        this.n31 = d.n31 * c.n11 + d.n32 * c.n21 + d.n33 * c.n31 + d.n34 * c.n41;
        this.n32 = d.n31 * c.n12 + d.n32 * c.n22 + d.n33 * c.n32 + d.n34 * c.n42;
        this.n33 = d.n31 * c.n13 + d.n32 * c.n23 + d.n33 * c.n33 + d.n34 * c.n43;
        this.n34 = d.n31 * c.n14 + d.n32 * c.n24 + d.n33 * c.n34 + d.n34 * c.n44;
        this.n41 = d.n41 * c.n11 + d.n42 * c.n21 + d.n43 * c.n31 + d.n44 * c.n41;
        this.n42 = d.n41 * c.n12 + d.n42 * c.n22 + d.n43 * c.n32 + d.n44 * c.n42;
        this.n43 = d.n41 * c.n13 + d.n42 * c.n23 + d.n43 * c.n33 + d.n44 * c.n43;
        this.n44 = d.n41 * c.n14 + d.n42 * c.n24 + d.n43 * c.n34 + d.n44 * c.n44
    },
    multiplySelf: function(c){
        var o = this.n11, n = this.n12, k = this.n13, i = this.n14, f = this.n21, e = this.n22, d = this.n23, b = this.n24, a = this.n31, r = this.n32, q = this.n33, p = this.n34, l = this.n41, j = this.n42, h = this.n43, g = this.n44;
        this.n11 = o * c.n11 + n * c.n21 + k * c.n31 + i * c.n41;
        this.n12 = o * c.n12 + n * c.n22 + k * c.n32 + i * c.n42;
        this.n13 = o * c.n13 + n * c.n23 + k * c.n33 + i * c.n43;
        this.n14 = o * c.n14 + n * c.n24 + k * c.n34 + i * c.n44;
        this.n21 = f * c.n11 + e * c.n21 + d * c.n31 + b * c.n41;
        this.n22 = f * c.n12 + e * c.n22 + d * c.n32 + b * c.n42;
        this.n23 = f * c.n13 + e * c.n23 + d * c.n33 + b * c.n43;
        this.n24 = f * c.n14 + e * c.n24 + d * c.n34 + b * c.n44;
        this.n31 = a * c.n11 + r * c.n21 + q * c.n31 + p * c.n41;
        this.n32 = a * c.n12 + r * c.n22 + q * c.n32 + p * c.n42;
        this.n33 = a * c.n13 + r * c.n23 + q * c.n33 + p * c.n43;
        this.n34 = a * c.n14 + r * c.n24 + q * c.n34 + p * c.n44;
        this.n41 = l * c.n11 + j * c.n21 + h * c.n31 + g * c.n41;
        this.n42 = l * c.n12 + j * c.n22 + h * c.n32 + g * c.n42;
        this.n43 = l * c.n13 + j * c.n23 + h * c.n33 + g * c.n43;
        this.n44 = l * c.n14 + j * c.n24 + h * c.n34 + g * c.n44
    },
    multiplyScalar: function(a){
        this.n11 *= a;
        this.n12 *= a;
        this.n13 *= a;
        this.n14 *= a;
        this.n21 *= a;
        this.n22 *= a;
        this.n23 *= a;
        this.n24 *= a;
        this.n31 *= a;
        this.n32 *= a;
        this.n33 *= a;
        this.n34 *= a;
        this.n41 *= a;
        this.n42 *= a;
        this.n43 *= a;
        this.n44 *= a
    },
    determinant: function(){
        return (this.n14 * this.n23 * this.n32 * this.n41 - this.n13 * this.n24 * this.n32 * this.n41 - this.n14 * this.n22 * this.n33 * this.n41 + this.n12 * this.n24 * this.n33 * this.n41 + this.n13 * this.n22 * this.n34 * this.n41 - this.n12 * this.n23 * this.n34 * this.n41 - this.n14 * this.n23 * this.n31 * this.n42 + this.n13 * this.n24 * this.n31 * this.n42 + this.n14 * this.n21 * this.n33 * this.n42 - this.n11 * this.n24 * this.n33 * this.n42 - this.n13 * this.n21 * this.n34 * this.n42 + this.n11 * this.n23 * this.n34 * this.n42 + this.n14 * this.n22 * this.n31 * this.n43 - this.n12 * this.n24 * this.n31 * this.n43 - this.n14 * this.n21 * this.n32 * this.n43 + this.n11 * this.n24 * this.n32 * this.n43 + this.n12 * this.n21 * this.n34 * this.n43 - this.n11 * this.n22 * this.n34 * this.n43 - this.n13 * this.n22 * this.n31 * this.n44 + this.n12 * this.n23 * this.n31 * this.n44 + this.n13 * this.n21 * this.n32 * this.n44 - this.n11 * this.n23 * this.n32 * this.n44 - this.n12 * this.n21 * this.n33 * this.n44 + this.n11 * this.n22 * this.n33 * this.n44)
    },
    transpose: function(){
        function a(d, e, c){
            var b = d[e];
            d[e] = d[c];
            d[c] = b
        }
        a(this, "n21", "n12");
        a(this, "n31", "n13");
        a(this, "n32", "n23");
        a(this, "n41", "n14");
        a(this, "n42", "n24");
        a(this, "n43", "n34");
        return this
    },
    clone: function(){
        var a = new THREE.Matrix4();
        a.n11 = this.n11;
        a.n12 = this.n12;
        a.n13 = this.n13;
        a.n14 = this.n14;
        a.n21 = this.n21;
        a.n22 = this.n22;
        a.n23 = this.n23;
        a.n24 = this.n24;
        a.n31 = this.n31;
        a.n32 = this.n32;
        a.n33 = this.n33;
        a.n34 = this.n34;
        a.n41 = this.n41;
        a.n42 = this.n42;
        a.n43 = this.n43;
        a.n44 = this.n44;
        return a
    },
    flatten: function(){
        return [this.n11, this.n21, this.n31, this.n41, this.n12, this.n22, this.n32, this.n42, this.n13, this.n23, this.n33, this.n43, this.n14, this.n24, this.n34, this.n44]
    },
    toString: function(){
        return "| " + this.n11 + " " + this.n12 + " " + this.n13 + " " + this.n14 + " |\n| " + this.n21 + " " + this.n22 + " " + this.n23 + " " + this.n24 + " |\n| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |\n| " + this.n41 + " " + this.n42 + " " + this.n43 + " " + this.n44 + " |"
    }
};
THREE.Matrix4.translationMatrix = function(b, d, c){
    var a = new THREE.Matrix4();
    a.n14 = b;
    a.n24 = d;
    a.n34 = c;
    return a
};
THREE.Matrix4.scaleMatrix = function(b, d, c){
    var a = new THREE.Matrix4();
    a.n11 = b;
    a.n22 = d;
    a.n33 = c;
    return a
};
THREE.Matrix4.rotationXMatrix = function(b){
    var a = new THREE.Matrix4();
    a.n22 = a.n33 = Math.cos(b);
    a.n32 = Math.sin(b);
    a.n23 = -a.n32;
    return a
};
THREE.Matrix4.rotationYMatrix = function(b){
    var a = new THREE.Matrix4();
    a.n11 = a.n33 = Math.cos(b);
    a.n13 = Math.sin(b);
    a.n31 = -a.n13;
    return a
};
THREE.Matrix4.rotationZMatrix = function(b){
    var a = new THREE.Matrix4();
    a.n11 = a.n22 = Math.cos(b);
    a.n21 = Math.sin(b);
    a.n12 = -a.n21;
    return a
};
THREE.Matrix4.rotationAxisAngleMatrix = function(b, d){
    var a = new THREE.Matrix4(), f = Math.cos(d), j = Math.sin(d), i = 1 - f, h = b.x, g = b.y, e = b.z;
    a.n11 = i * h * h + f;
    a.n12 = i * h * g - j * e;
    a.n13 = i * h * e + j * g;
    a.n21 = i * h * g + j * e;
    a.n22 = i * g * g + f;
    a.n23 = i * g * e - j * h;
    a.n31 = i * h * e - j * g;
    a.n32 = i * g * e + j * h;
    a.n33 = i * e * e + f;
    return a
};
THREE.Matrix4.makeInvert = function(b){
    var a = new THREE.Matrix4();
    a.n11 = b.n23 * b.n34 * b.n42 - b.n24 * b.n33 * b.n42 + b.n24 * b.n32 * b.n43 - b.n22 * b.n34 * b.n43 - b.n23 * b.n32 * b.n44 + b.n22 * b.n33 * b.n44;
    a.n12 = b.n14 * b.n33 * b.n42 - b.n13 * b.n34 * b.n42 - b.n14 * b.n32 * b.n43 + b.n12 * b.n34 * b.n43 + b.n13 * b.n32 * b.n44 - b.n12 * b.n33 * b.n44;
    a.n13 = b.n13 * b.n24 * b.n42 - b.n14 * b.n23 * b.n42 + b.n14 * b.n22 * b.n43 - b.n12 * b.n24 * b.n43 - b.n13 * b.n22 * b.n44 + b.n12 * b.n23 * b.n44;
    a.n14 = b.n14 * b.n23 * b.n32 - b.n13 * b.n24 * b.n32 - b.n14 * b.n22 * b.n33 + b.n12 * b.n24 * b.n33 + b.n13 * b.n22 * b.n34 - b.n12 * b.n23 * b.n34;
    a.n21 = b.n24 * b.n33 * b.n41 - b.n23 * b.n34 * b.n41 - b.n24 * b.n31 * b.n43 + b.n21 * b.n34 * b.n43 + b.n23 * b.n31 * b.n44 - b.n21 * b.n33 * b.n44;
    a.n22 = b.n13 * b.n34 * b.n41 - b.n14 * b.n33 * b.n41 + b.n14 * b.n31 * b.n43 - b.n11 * b.n34 * b.n43 - b.n13 * b.n31 * b.n44 + b.n11 * b.n33 * b.n44;
    a.n23 = b.n14 * b.n23 * b.n41 - b.n13 * b.n24 * b.n41 - b.n14 * b.n21 * b.n43 + b.n11 * b.n24 * b.n43 + b.n13 * b.n21 * b.n44 - b.n11 * b.n23 * b.n44;
    a.n24 = b.n13 * b.n24 * b.n31 - b.n14 * b.n23 * b.n31 + b.n14 * b.n21 * b.n33 - b.n11 * b.n24 * b.n33 - b.n13 * b.n21 * b.n34 + b.n11 * b.n23 * b.n34;
    a.n31 = b.n22 * b.n34 * b.n41 - b.n24 * b.n32 * b.n41 + b.n24 * b.n31 * b.n42 - b.n21 * b.n34 * b.n42 - b.n22 * b.n31 * b.n44 + b.n21 * b.n32 * b.n44;
    a.n32 = b.n14 * b.n32 * b.n41 - b.n12 * b.n34 * b.n41 - b.n14 * b.n31 * b.n42 + b.n11 * b.n34 * b.n42 + b.n12 * b.n31 * b.n44 - b.n11 * b.n32 * b.n44;
    a.n33 = b.n13 * b.n24 * b.n41 - b.n14 * b.n22 * b.n41 + b.n14 * b.n21 * b.n42 - b.n11 * b.n24 * b.n42 - b.n12 * b.n21 * b.n44 + b.n11 * b.n22 * b.n44;
    a.n34 = b.n14 * b.n22 * b.n31 - b.n12 * b.n24 * b.n31 - b.n14 * b.n21 * b.n32 + b.n11 * b.n24 * b.n32 + b.n12 * b.n21 * b.n34 - b.n11 * b.n22 * b.n34;
    a.n41 = b.n23 * b.n32 * b.n41 - b.n22 * b.n33 * b.n41 - b.n23 * b.n31 * b.n42 + b.n21 * b.n33 * b.n42 + b.n22 * b.n31 * b.n43 - b.n21 * b.n32 * b.n43;
    a.n42 = b.n12 * b.n33 * b.n41 - b.n13 * b.n32 * b.n41 + b.n13 * b.n31 * b.n42 - b.n11 * b.n33 * b.n42 - b.n12 * b.n31 * b.n43 + b.n11 * b.n32 * b.n43;
    a.n43 = b.n13 * b.n22 * b.n41 - b.n12 * b.n23 * b.n41 - b.n13 * b.n21 * b.n42 + b.n11 * b.n23 * b.n42 + b.n12 * b.n21 * b.n43 - b.n11 * b.n22 * b.n43;
    a.n44 = b.n12 * b.n23 * b.n31 - b.n13 * b.n22 * b.n31 + b.n13 * b.n21 * b.n32 - b.n11 * b.n23 * b.n32 - b.n12 * b.n21 * b.n33 + b.n11 * b.n22 * b.n33;
    a.multiplyScalar(1 / b.determinant());
    return a
};
THREE.Matrix4.makeInvert3x3 = function(o){
    var e = o.flatten(), l = new THREE.Matrix3(), n = e[10] * e[5] - e[6] * e[9], i = -e[10] * e[1] + e[2] * e[9], d = e[6] * e[1] - e[2] * e[5], k = -e[10] * e[4] + e[6] * e[8], g = e[10] * e[0] - e[2] * e[8], c = -e[6] * e[0] + e[2] * e[4], j = e[9] * e[4] - e[5] * e[8], f = -e[9] * e[0] + e[1] * e[8], a = e[5] * e[0] - e[1] * e[4], h = e[0] * (n) + e[1] * (k) + e[2] * (j), b;
    if (h == 0) {
        throw "matrix not invertible"
    }
    b = 1 / h;
    l.m[0] = b * n;
    l.m[1] = b * i;
    l.m[2] = b * d;
    l.m[3] = b * k;
    l.m[4] = b * g;
    l.m[5] = b * c;
    l.m[6] = b * j;
    l.m[7] = b * f;
    l.m[8] = b * a;
    return l
};
THREE.Matrix4.makeFrustum = function(f, r, e, o, i, h){
    var g, q, n, p, l, k, j;
    g = new THREE.Matrix4();
    q = 2 * i / (r - f);
    n = 2 * i / (o - e);
    p = (r + f) / (r - f);
    l = (o + e) / (o - e);
    k = -(h + i) / (h - i);
    j = -2 * h * i / (h - i);
    g.n11 = q;
    g.n12 = 0;
    g.n13 = p;
    g.n14 = 0;
    g.n21 = 0;
    g.n22 = n;
    g.n23 = l;
    g.n24 = 0;
    g.n31 = 0;
    g.n32 = 0;
    g.n33 = k;
    g.n34 = j;
    g.n41 = 0;
    g.n42 = 0;
    g.n43 = -1;
    g.n44 = 0;
    return g
};
THREE.Matrix4.makePerspective = function(e, c, g, b){
    var a, f, h, d;
    a = g * Math.tan(e * Math.PI / 360);
    f = -a;
    h = f * c;
    d = a * c;
    return THREE.Matrix4.makeFrustum(h, d, f, a, g, b)
};
THREE.Matrix4.makeOrtho = function(c, o, k, a, g, f){
    var d, l, j, i, n, e, b;
    d = new THREE.Matrix4();
    n = o - c;
    e = k - a;
    b = f - g;
    l = (o + c) / n;
    j = (k + a) / e;
    i = (f + g) / b;
    d.n11 = 2 / n;
    d.n12 = 0;
    d.n13 = 0;
    d.n14 = -l;
    d.n21 = 0;
    d.n22 = 2 / e;
    d.n23 = 0;
    d.n24 = -j;
    d.n31 = 0;
    d.n32 = 0;
    d.n33 = -2 / b;
    d.n34 = -i;
    d.n41 = 0;
    d.n42 = 0;
    d.n43 = 0;
    d.n44 = 1;
    return d
};
THREE.Vertex = function(a, b){
    this.position = a || new THREE.Vector3();
    this.positionWorld = new THREE.Vector3();
    this.positionScreen = new THREE.Vector3();
    this.normal = b || new THREE.Vector3();
    this.normalWorld = new THREE.Vector3();
    this.normalScreen = new THREE.Vector3();
    this.__visible = true
};
THREE.Vertex.prototype = {
    toString: function(){
        return "THREE.Vertex ( position: " + this.position + ", normal: " + this.normal + " )"
    }
};
THREE.Face3 = function(e, d, h, g, f){
    this.a = e;
    this.b = d;
    this.c = h;
    this.centroid = new THREE.Vector3();
    this.normal = g instanceof THREE.Vector3 ? g : new THREE.Vector3();
    this.vertexNormals = g instanceof Array ? g : [];
    this.material = f instanceof Array ? f : [f]
};
THREE.Face3.prototype = {
    toString: function(){
        return "THREE.Face3 ( " + this.a + ", " + this.b + ", " + this.c + " )"
    }
};
THREE.Face4 = function(f, e, j, i, h, g){
    this.a = f;
    this.b = e;
    this.c = j;
    this.d = i;
    this.centroid = new THREE.Vector3();
    this.normal = h instanceof THREE.Vector3 ? h : new THREE.Vector3();
    this.vertexNormals = h instanceof Array ? h : [];
    this.material = g instanceof Array ? g : [g]
};
THREE.Face4.prototype = {
    toString: function(){
        return "THREE.Face4 ( " + this.a + ", " + this.b + ", " + this.c + " " + this.d + " )"
    }
};
THREE.UV = function(b, a){
    this.u = b || 0;
    this.v = a || 0
};
THREE.UV.prototype = {
    copy: function(a){
        this.u = a.u;
        this.v = a.v
    },
    toString: function(){
        return "THREE.UV (" + this.u + ", " + this.v + ")"
    }
};
THREE.Geometry = function(){
    this.vertices = [];
    this.faces = [];
    this.uvs = []
};
THREE.Geometry.prototype = {
    computeCentroids: function(){
        var c, b, a;
        for (c = 0, b = this.faces.length; c < b; c++) {
            a = this.faces[c];
            a.centroid.set(0, 0, 0);
            if (a instanceof THREE.Face3) {
                a.centroid.addSelf(this.vertices[a.a].position);
                a.centroid.addSelf(this.vertices[a.b].position);
                a.centroid.addSelf(this.vertices[a.c].position);
                a.centroid.divideScalar(3)
            }
            else {
                if (a instanceof THREE.Face4) {
                    a.centroid.addSelf(this.vertices[a.a].position);
                    a.centroid.addSelf(this.vertices[a.b].position);
                    a.centroid.addSelf(this.vertices[a.c].position);
                    a.centroid.addSelf(this.vertices[a.d].position);
                    a.centroid.divideScalar(4)
                }
            }
        }
    },
    computeNormals: function(m){
        var e, b, o, g, i, j, l, k, d, c, a, h = new THREE.Vector3(), p = new THREE.Vector3();
        for (o = 0, g = this.vertices.length; o < g; o++) {
            i = this.vertices[o];
            i.normal.set(0, 0, 0)
        }
        for (j = 0, l = this.faces.length; j < l; j++) {
            k = this.faces[j];
            if (m && k.vertexNormals.length) {
                h.set(0, 0, 0);
                for (e = 0, b = k.normal.length; e < b; e++) {
                    h.addSelf(k.vertexNormals[e])
                }
                h.divideScalar(3);
                if (!h.isZero()) {
                    h.normalize()
                }
                k.normal.copy(h)
            }
            else {
                d = this.vertices[k.a];
                c = this.vertices[k.b];
                a = this.vertices[k.c];
                h.sub(a.position, c.position);
                p.sub(d.position, c.position);
                h.crossSelf(p);
                if (!h.isZero()) {
                    h.normalize()
                }
                k.normal.copy(h)
            }
        }
    },
    computeBoundingBox: function(){
        if (this.vertices.length > 0) {
            this.bbox = {
                x: [this.vertices[0].position.x, this.vertices[0].position.x],
                y: [this.vertices[0].position.y, this.vertices[0].position.y],
                z: [this.vertices[0].position.z, this.vertices[0].position.z]
            };
            for (var a = 1, b = this.vertices.length; a < b; a++) {
                vertex = this.vertices[a];
                if (vertex.position.x < this.bbox.x[0]) {
                    this.bbox.x[0] = vertex.position.x
                }
                else {
                    if (vertex.position.x > this.bbox.x[1]) {
                        this.bbox.x[1] = vertex.position.x
                    }
                }
                if (vertex.position.y < this.bbox.y[0]) {
                    this.bbox.y[0] = vertex.position.y
                }
                else {
                    if (vertex.position.y > this.bbox.y[1]) {
                        this.bbox.y[1] = vertex.position.y
                    }
                }
                if (vertex.position.z < this.bbox.z[0]) {
                    this.bbox.z[0] = vertex.position.z
                }
                else {
                    if (vertex.position.z > this.bbox.z[1]) {
                        this.bbox.z[1] = vertex.position.z
                    }
                }
            }
        }
    },
    toString: function(){
        return "THREE.Geometry ( vertices: " + this.vertices + ", faces: " + this.faces + " )"
    }
};
THREE.Camera = function(c, b, d, a){
    this.position = new THREE.Vector3(0, 0, 0);
    this.target = {
        position: new THREE.Vector3(0, 0, 0)
    };
    this.up = new THREE.Vector3(0, 1, 0);
    this.matrix = new THREE.Matrix4();
    this.projectionMatrix = THREE.Matrix4.makePerspective(c, b, d, a);
    this.autoUpdateMatrix = true;
    this.updateMatrix = function(){
        this.matrix.lookAt(this.position, this.target.position, this.up)
    };
    this.toString = function(){
        return "THREE.Camera ( " + this.position + ", " + this.target.position + " )"
    }
};
THREE.Loader = function(){
};
THREE.Loader.prototype = {
    loadAsync: function(a, c){
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.onload = c;
        b.src = a;
        document.getElementsByTagName("head")[0].appendChild(b)
    },
    loadWorker: function(a, e, b){
        var c = (new Date).getTime(), d = new Worker(a);
        d.onmessage = function(f){
            THREE.Loader.prototype.createModel(f.data, e, b)
        };
        d.postMessage(c)
    },
    createModel: function(b, d, a){
        var c = function(f){
            var r = this;
            THREE.Geometry.call(this);
            s();
            m();
            o();
            i();
            this.computeCentroids();
            this.computeNormals();
            function m(){
                var v, u, t, A, w;
                for (v = 0, u = b.vertices.length / 3; v < u; v++) {
                    t = b.vertices[v * 3];
                    A = b.vertices[v * 3 + 1];
                    w = b.vertices[v * 3 + 2];
                    q(t, A, w)
                }
            }
            function o(){
                var w, v, z, u, t, D, C, B, A, y, x;
                for (w = 0, v = b.uvs_tri.length; w < v; w++) {
                    u = b.uvs_tri[w * 6];
                    B = b.uvs_tri[w * 6 + 1];
                    t = b.uvs_tri[w * 6 + 2];
                    A = b.uvs_tri[w * 6 + 3];
                    D = b.uvs_tri[w * 6 + 4];
                    y = b.uvs_tri[w * 6 + 5];
                    g(u, B, t, A, D, y)
                }
                for (w = 0, v = b.uvs_quad.length; w < v; w++) {
                    u = b.uvs_quad[w * 8];
                    B = b.uvs_quad[w * 8 + 1];
                    t = b.uvs_quad[w * 8 + 2];
                    A = b.uvs_quad[w * 8 + 3];
                    D = b.uvs_quad[w * 8 + 4];
                    y = b.uvs_quad[w * 8 + 5];
                    C = b.uvs_quad[w * 8 + 6];
                    x = b.uvs_quad[w * 8 + 7];
                    g(u, B, t, A, D, y, C, x)
                }
            }
            function i(){
                var x, u, D, C, B, A, t, z, y, w, v;
                for (x = 0, u = b.triangles.length / 4; x < u; x++) {
                    D = b.triangles[x * 4];
                    C = b.triangles[x * 4 + 1];
                    B = b.triangles[x * 4 + 2];
                    t = b.triangles[x * 4 + 3];
                    l(D, C, B, t)
                }
                for (x = 0, u = b.triangles_n.length / 7; x < u; x++) {
                    D = b.triangles_n[x * 7];
                    C = b.triangles_n[x * 7 + 1];
                    B = b.triangles_n[x * 7 + 2];
                    t = b.triangles_n[x * 7 + 3];
                    z = b.triangles_n[x * 7 + 4];
                    y = b.triangles_n[x * 7 + 5];
                    w = b.triangles_n[x * 7 + 6];
                    n(D, C, B, t, z, y, w)
                }
                for (x = 0, u = b.quads.length / 5; x < u; x++) {
                    D = b.quads[x * 5];
                    C = b.quads[x * 5 + 1];
                    B = b.quads[x * 5 + 2];
                    A = b.quads[x * 5 + 3];
                    t = b.quads[x * 5 + 4];
                    j(D, C, B, A, t)
                }
                for (x = 0, u = b.quads_n.length / 9; x < u; x++) {
                    D = b.quads_n[x * 9];
                    C = b.quads_n[x * 9 + 1];
                    B = b.quads_n[x * 9 + 2];
                    A = b.quads_n[x * 9 + 3];
                    t = b.quads_n[x * 9 + 4];
                    z = b.quads_n[x * 9 + 5];
                    y = b.quads_n[x * 9 + 6];
                    w = b.quads_n[x * 9 + 7];
                    v = b.quads_n[x * 9 + 8];
                    k(D, C, B, A, t, z, y, w, v)
                }
            }
            function q(t, v, u){
                r.vertices.push(new THREE.Vertex(new THREE.Vector3(t, v, u)))
            }
            function l(u, t, x, v){
                var w = r.materials[v];
                r.faces.push(new THREE.Face3(u, t, x, null, w))
            }
            function j(u, t, y, x, v){
                var w = r.materials[v];
                r.faces.push(new THREE.Face4(u, t, y, x, null, w))
            }
            function n(G, F, E, z, A, x, w){
                var D = r.materials[z], J = b.normals[A * 3], I = b.normals[A * 3 + 1], H = b.normals[A * 3 + 2], C = b.normals[x * 3], B = b.normals[x * 3 + 1], y = b.normals[x * 3 + 2], v = b.normals[w * 3], u = b.normals[w * 3 + 1], t = b.normals[w * 3 + 2];
                r.faces.push(new THREE.Face3(G, F, E, [new THREE.Vector3(J, I, H), new THREE.Vector3(C, B, y), new THREE.Vector3(v, u, t)], D))
            }
            function k(L, K, J, H, I, C, B, A, y){
                var D = r.materials[I], x = b.normals[C * 3], v = b.normals[C * 3 + 1], t = b.normals[C * 3 + 2], G = b.normals[B * 3], F = b.normals[B * 3 + 1], E = b.normals[B * 3 + 2], O = b.normals[A * 3], N = b.normals[A * 3 + 1], M = b.normals[A * 3 + 2], z = b.normals[y * 3], w = b.normals[y * 3 + 1], u = b.normals[y * 3 + 2];
                r.faces.push(new THREE.Face4(L, K, J, H, [new THREE.Vector3(x, v, t), new THREE.Vector3(G, F, E), new THREE.Vector3(O, N, M), new THREE.Vector3(z, w, u)], D))
            }
            function g(x, B, v, A, u, z, t, y){
                var w = [];
                w.push(new THREE.UV(x, B));
                w.push(new THREE.UV(v, A));
                w.push(new THREE.UV(u, z));
                if (t && y) {
                    w.push(new THREE.UV(t, y))
                }
                r.uvs.push(w)
            }
            function s(){
                r.materials = [];
                for (var t = 0; t < b.materials.length; ++t) {
                    r.materials[t] = [p(b.materials[t], f)]
                }
            }
            function h(u){
                var t = Math.log(u) / Math.LN2;
                return Math.floor(t) == t
            }
            function e(u){
                var t = Math.log(u) / Math.LN2;
                return Math.pow(2, Math.round(t))
            }
            function p(t){
                var v, w, x, u;
                if (t.map_diffuse && f) {
                    w = document.createElement("canvas");
                    v = new THREE.MeshBitmapMaterial(w);
                    x = new Image();
                    x.onload = function(){
                        if (!h(this.width) || !h(this.height)) {
                            var y = e(this.width), z = e(this.height);
                            v.bitmap.width = y;
                            v.bitmap.height = z;
                            v.bitmap.getContext("2d").drawImage(this, 0, 0, y, z)
                        }
                        else {
                            v.bitmap = this
                        }
                        v.loaded = 1
                    };
                    x.src = f + "/" + t.map_diffuse
                }
                else {
                    if (t.col_diffuse) {
                        u = (t.col_diffuse[0] * 255 << 16) + (t.col_diffuse[1] * 255 << 8) + t.col_diffuse[2] * 255;
                        v = new THREE.MeshColorFillMaterial(u, t.transparency)
                    }
                    else {
                        if (t.a_dbg_color) {
                            v = new THREE.MeshColorFillMaterial(t.a_dbg_color)
                        }
                        else {
                            v = new THREE.MeshColorFillMaterial(4293848814)
                        }
                    }
                }
                return v
            }
        };
        c.prototype = new THREE.Geometry();
        c.prototype.constructor = c;
        d(new c(a))
    }
};
THREE.Light = function(a){
    this.color = new THREE.Color(255 << 24 | a)
};
THREE.AmbientLight = function(a){
    THREE.Light.call(this, a)
};
THREE.AmbientLight.prototype = new THREE.Light();
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function(b, a){
    THREE.Light.call(this, b);
    this.position = new THREE.Vector3(0, 1, 0);
    this.intensity = a || 1
};
THREE.DirectionalLight.prototype = new THREE.Light();
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function(b, a){
    THREE.Light.call(this, b);
    this.position = new THREE.Vector3(0, 0, 0);
    this.intensity = a || 1
};
THREE.DirectionalLight.prototype = new THREE.Light();
THREE.DirectionalLight.prototype.constructor = THREE.PointLight;
THREE.Object3D = function(a){
    this.position = new THREE.Vector3();
    this.rotation = new THREE.Vector3();
    this.scale = new THREE.Vector3(1, 1, 1);
    this.matrix = new THREE.Matrix4();
    this.matrixTranslation = new THREE.Matrix4();
    this.matrixRotation = new THREE.Matrix4();
    this.matrixScale = new THREE.Matrix4();
    this.screen = new THREE.Vector3();
    this.autoUpdateMatrix = true;
    this.updateMatrix = function(){
        this.matrixPosition = THREE.Matrix4.translationMatrix(this.position.x, this.position.y, this.position.z);
        this.matrixRotation = THREE.Matrix4.rotationXMatrix(this.rotation.x);
        this.matrixRotation.multiplySelf(THREE.Matrix4.rotationYMatrix(this.rotation.y));
        this.matrixRotation.multiplySelf(THREE.Matrix4.rotationZMatrix(this.rotation.z));
        this.matrixScale = THREE.Matrix4.scaleMatrix(this.scale.x, this.scale.y, this.scale.z);
        this.matrix.copy(this.matrixPosition);
        this.matrix.multiplySelf(this.matrixRotation);
        this.matrix.multiplySelf(this.matrixScale)
    }
};
THREE.Particle = function(a){
    THREE.Object3D.call(this);
    this.material = a instanceof Array ? a : [a];
    this.autoUpdateMatrix = false
};
THREE.Particle.prototype = new THREE.Object3D();
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.Line = function(b, a){
    THREE.Object3D.call(this);
    this.geometry = b;
    this.material = a instanceof Array ? a : [a]
};
THREE.Line.prototype = new THREE.Object3D();
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function(b, a, c){
    THREE.Object3D.call(this);
    this.geometry = b;
    this.material = a instanceof Array ? a : [a];
    this.flipSided = false;
    this.doubleSided = false;
    this.overdraw = false;
    this.materialFaceGroup = {};
    this.sortFacesByMaterial();
    if (c) {
        this.normalizeUVs()
    }
    this.geometry.computeBoundingBox()
};
THREE.Mesh.prototype = new THREE.Object3D();
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.sortFacesByMaterial = function(){
    var c, b, e, m, k, h, j, n, d, g = {};
    function a(f){
        var i = [];
        for (c = 0, b = f.length; c < b; c++) {
            if (f[c] == undefined) {
                i.push("undefined")
            }
            else {
                i.push(f[c].toString())
            }
        }
        return i.join("_")
    }
    for (e = 0, m = this.geometry.faces.length; e < m; e++) {
        k = this.geometry.faces[e];
        h = k.material;
        n = a(h);
        if (g[n] == undefined) {
            g[n] = {
                hash: n,
                counter: 0
            }
        }
        d = g[n].hash + "_" + g[n].counter;
        if (this.materialFaceGroup[d] == undefined) {
            this.materialFaceGroup[d] = {
                faces: [],
                material: h,
                vertices: 0
            }
        }
        j = k instanceof THREE.Face3 ? 3 : 4;
        if (this.materialFaceGroup[d].vertices + j > 65535) {
            g[n].counter += 1;
            d = g[n].hash + "_" + g[n].counter;
            if (this.materialFaceGroup[d] == undefined) {
                this.materialFaceGroup[d] = {
                    faces: [],
                    material: h,
                    vertices: 0
                }
            }
        }
        this.materialFaceGroup[d].faces.push(e);
        this.materialFaceGroup[d].vertices += j
    }
};
THREE.Mesh.prototype.normalizeUVs = function(){
    var e, a, b, d, c;
    for (e = 0, a = this.geometry.uvs.length; e < a; e++) {
        c = this.geometry.uvs[e];
        for (b = 0, d = c.length; b < d; b++) {
            if (c[b].u != 1) {
                c[b].u = c[b].u - Math.floor(c[b].u)
            }
            if (c[b].v != 1) {
                c[b].v = c[b].v - Math.floor(c[b].v)
            }
        }
    }
};
THREE.LineColorMaterial = function(c, b, a){
    this.lineWidth = a || 1;
    this.color = new THREE.Color((b !== undefined ? b : 1) * 255 << 24 ^ c)
};
THREE.LineColorMaterial.prototype = {
    toString: function(){
        return "THREE.LineColorMaterial ( color: " + this.color + ", lineWidth: " + this.lineWidth + " )"
    }
};
THREE.MeshPhongMaterial = function(d, a, e, c, b){
    this.ambient = new THREE.Color((b !== undefined ? b : 1) * 255 << 24 ^ d);
    this.diffuse = new THREE.Color((b !== undefined ? b : 1) * 255 << 24 ^ a);
    this.specular = new THREE.Color((b !== undefined ? b : 1) * 255 << 24 ^ e);
    this.shininess = c;
    this.opacity = b;
    this.toString = function(){
        return "THREE.MeshPhongMaterial ( <br/>ambient: " + this.ambient + ", <br/>diffuse: " + this.diffuse + ", <br/>specular: " + this.specular + ", <br/>shininess: " + this.shininess + ", <br/>opacity: " + this.opacity + ")"
    }
};
THREE.MeshBitmapMaterial = function(a, b){
    this.id = THREE.MeshBitmapMaterialCounter.value++;
    this.bitmap = a;
    this.mode = b || THREE.MeshBitmapMaterialMode.UVMAPPING;
    this.toString = function(){
        return "THREE.MeshBitmapMaterial ( bitmap: " + this.bitmap + ", mode: " + this.mode + ", id: " + this.id + " )"
    }
};
THREE.MeshBitmapMaterialCounter = {
    value: 0
};
THREE.MeshBitmapMaterialMode = {
    UVMAPPING: 0
};
THREE.MeshColorFillMaterial = function(b, a){
    this.color = new THREE.Color((a !== undefined ? a : 1) * 255 << 24 ^ b);
    this.toString = function(){
        return "THREE.MeshColorFillMaterial ( color: " + this.color + " )"
    }
};
THREE.MeshColorStrokeMaterial = function(c, b, a){
    this.lineWidth = a || 1;
    this.color = new THREE.Color((b !== undefined ? b : 1) * 255 << 24 ^ c);
    this.toString = function(){
        return "THREE.MeshColorStrokeMaterial ( lineWidth: " + this.lineWidth + ", color: " + this.color + " )"
    }
};
THREE.MeshFaceMaterial = function(){
    this.toString = function(){
        return "THREE.MeshFaceMaterial"
    }
};
THREE.ParticleBitmapMaterial = function(a){
    this.bitmap = a;
    this.offset = new THREE.Vector2();
    this.toString = function(){
        return "THREE.ParticleBitmapMaterial ( bitmap: " + this.bitmap + " )"
    }
};
THREE.ParticleCircleMaterial = function(b, a){
    this.color = new THREE.Color((a !== undefined ? a : 1) * 255 << 24 ^ b);
    this.toString = function(){
        return "THREE.ParticleCircleMaterial ( color: " + this.color + " )"
    }
};
THREE.Scene = function(){
    this.objects = [];
    this.lights = [];
    this.addObject = function(a){
        this.objects.push(a)
    };
    this.removeObject = function(a){
        var b = this.objects.indexOf(a);
        if (b !== -1) {
            this.objects.splice(b, 1)
        }
    };
    this.addLight = function(a){
        this.lights.push(a)
    };
    this.removeLight = function(a){
        var b = this.lights.indexOf(a);
        if (b !== -1) {
            this.lights.splice(b, 1)
        }
    };
    this.toString = function(){
        return "THREE.Scene ( " + this.objects + " )"
    }
};
THREE.Projector = function(){
    var e = null, c, p, n = [], b, f, l = [], k, m, i = [], j, h, a = [], g = new THREE.Vector4(), d = new THREE.Matrix4(), o = new THREE.Matrix4();
    this.projectScene = function(J, G){
        var F, E, D, K, I, B, r, L, q, z, H, u, C, w, A, y, x, t, s;
        e = [];
        p = 0, f = 0, m = 0, h = 0;
        if (G.autoUpdateMatrix) {
            G.updateMatrix()
        }
        d.multiply(G.projectionMatrix, G.matrix);
        r = J.objects;
        for (F = 0, E = r.length; F < E; F++) {
            L = r[F];
            q = L.matrix;
            if (L.autoUpdateMatrix) {
                L.updateMatrix()
            }
            if (L instanceof THREE.Mesh) {
                o.multiply(d, q);
                z = L.geometry.vertices;
                for (D = 0, K = z.length; D < K; D++) {
                    H = z[D];
                    u = H.positionScreen;
                    u.copy(H.position);
                    o.transform(u);
                    H.__visible = u.z > 0 && u.z < 1
                }
                w = L.geometry.faces;
                for (I = 0, B = w.length; I < B; I++) {
                    A = w[I];
                    if (A instanceof THREE.Face3) {
                        y = z[A.a];
                        x = z[A.b];
                        t = z[A.c];
                        if (y.__visible && x.__visible && t.__visible) {
                            if ((L.doubleSided || (L.flipSided != (t.positionScreen.x - y.positionScreen.x) * (x.positionScreen.y - y.positionScreen.y) - (t.positionScreen.y - y.positionScreen.y) * (x.positionScreen.x - y.positionScreen.x) < 0))) {
                                c = n[p] = n[p] || new THREE.RenderableFace3();
                                c.v1.copy(y.positionScreen);
                                c.v2.copy(x.positionScreen);
                                c.v3.copy(t.positionScreen);
                                c.normalWorld.copy(A.normal);
                                L.matrixRotation.transform(c.normalWorld);
                                c.centroidWorld.copy(A.centroid);
                                q.transform(c.centroidWorld);
                                c.centroidScreen.copy(c.centroidWorld);
                                d.transform(c.centroidScreen);
                                c.z = c.centroidScreen.z;
                                c.meshMaterial = L.material;
                                c.faceMaterial = A.material;
                                c.overdraw = L.overdraw;
                                c.uvs = L.geometry.uvs[I];
                                c.color = A.color;
                                e.push(c);
                                p++
                            }
                        }
                    }
                    else {
                        if (A instanceof THREE.Face4) {
                            y = z[A.a];
                            x = z[A.b];
                            t = z[A.c];
                            s = z[A.d];
                            if (y.__visible && x.__visible && t.__visible && s.__visible) {
                                if ((L.doubleSided || (L.flipSided != ((s.positionScreen.x - y.positionScreen.x) * (x.positionScreen.y - y.positionScreen.y) - (s.positionScreen.y - y.positionScreen.y) * (x.positionScreen.x - y.positionScreen.x) < 0 || (x.positionScreen.x - t.positionScreen.x) * (s.positionScreen.y - t.positionScreen.y) - (x.positionScreen.y - t.positionScreen.y) * (s.positionScreen.x - t.positionScreen.x) < 0)))) {
                                    b = l[f] = l[f] || new THREE.RenderableFace4();
                                    b.v1.copy(y.positionScreen);
                                    b.v2.copy(x.positionScreen);
                                    b.v3.copy(t.positionScreen);
                                    b.v4.copy(s.positionScreen);
                                    b.normalWorld.copy(A.normal);
                                    L.matrixRotation.transform(b.normalWorld);
                                    b.centroidWorld.copy(A.centroid);
                                    q.transform(b.centroidWorld);
                                    b.centroidScreen.copy(b.centroidWorld);
                                    d.transform(b.centroidScreen);
                                    b.z = b.centroidScreen.z;
                                    b.meshMaterial = L.material;
                                    b.faceMaterial = A.material;
                                    b.overdraw = L.overdraw;
                                    b.uvs = L.geometry.uvs[I];
                                    b.color = A.color;
                                    e.push(b);
                                    f++
                                }
                            }
                        }
                    }
                }
            }
            else {
                if (L instanceof THREE.Line) {
                    o.multiply(d, q);
                    z = L.geometry.vertices;
                    for (D = 0, K = z.length; D < K; D++) {
                        H = z[D];
                        u = H.positionScreen;
                        u.copy(H.position);
                        o.transform(u);
                        H.__visible = u.z > 0 && u.z < 1;
                        if (D > 0) {
                            C = L.geometry.vertices[D - 1];
                            if (H.__visible && C.__visible) {
                                k = i[m] = i[m] || new THREE.RenderableLine();
                                k.v1.copy(H.positionScreen);
                                k.v2.copy(C.positionScreen);
                                k.z = Math.max(H.positionScreen.z, C.positionScreen.z);
                                k.material = L.material;
                                e.push(k);
                                m++
                            }
                        }
                    }
                }
                else {
                    if (L instanceof THREE.Particle) {
                        g.set(L.position.x, L.position.y, L.position.z, 1);
                        G.matrix.transform(g);
                        G.projectionMatrix.transform(g);
                        L.screen.set(g.x / g.w, g.y / g.w, g.z / g.w);
                        if (L.screen.z > 0 && L.screen.z < 1) {
                            j = a[h] = a[h] || new THREE.RenderableParticle();
                            j.x = L.screen.x;
                            j.y = L.screen.y;
                            j.z = L.screen.z;
                            j.rotation = L.rotation.z;
                            j.scale.x = L.scale.x * Math.abs(g.x / g.w - (g.x + G.projectionMatrix.n11) / (g.w + G.projectionMatrix.n14));
                            j.scale.y = L.scale.y * Math.abs(g.y / g.w - (g.y + G.projectionMatrix.n22) / (g.w + G.projectionMatrix.n24));
                            j.material = L.material;
                            j.color = L.color;
                            e.push(j);
                            h++
                        }
                    }
                }
            }
        }
        e.sort(function(M, v){
            return v.z - M.z
        });
        return e
    };
    this.unprojectVector = function(q, s){
        var r = new THREE.Matrix4();
        r.multiply(THREE.Matrix4.makeInvert(s.matrix), THREE.Matrix4.makeInvert(s.projectionMatrix));
        r.transform(q);
        return q
    }
};
THREE.CanvasRenderer = function(){
    var A = null, v = new THREE.Projector(), s = document.createElement("canvas"), n, r, k, p, t = s.getContext("2d"), D = new THREE.Rectangle(), q = new THREE.Rectangle(), z = new THREE.Rectangle(), l = false, o = new THREE.Color(4294967295), x = new THREE.Color(4294967295), f = new THREE.Color(4294967295), y = Math.PI * 2, j = new THREE.Vector2(), h = new THREE.Vector3(), G = new THREE.UV(), F = new THREE.UV(), E = new THREE.UV(), C = new THREE.UV(), d = new THREE.Vector2(), b = new THREE.Vector2();
    this.domElement = s;
    this.autoClear = true;
    this.setSize = function(I, H){
        n = I;
        r = H;
        k = n / 2;
        p = r / 2;
        s.width = n;
        s.height = r;
        D.set(-k, -p, k, p)
    };
    this.clear = function(){
        if (!q.isEmpty()) {
            q.inflate(1);
            q.minSelf(D);
            t.setTransform(1, 0, 0, -1, k, p);
            t.clearRect(q.getX(), q.getY(), q.getWidth(), q.getHeight());
            q.empty()
        }
    };
    this.render = function(ac, Z){
        var ab, K, M, U, aa, Q, N, T, R, O, X, V, J, H, S, P, Y, W, L, I;
        if (this.autoClear) {
            this.clear()
        }
        A = v.projectScene(ac, Z);
        t.setTransform(1, 0, 0, -1, k, p);
        l = ac.lights.length > 0;
        if (l) {
            B(ac, f)
        }
        for (ab = 0, K = A.length; ab < K; ab++) {
            M = A[ab];
            z.empty();
            if (M instanceof THREE.RenderableParticle) {
                R = M.x * k;
                O = M.y * p;
                for (U = 0, aa = M.material.length; U < aa; U++) {
                    T = M.material[U];
                    m(R, O, M, T, ac)
                }
            }
            else {
                if (M instanceof THREE.RenderableLine) {
                    R = M.v1.x * k;
                    O = M.v1.y * p;
                    X = M.v2.x * k;
                    V = M.v2.y * p;
                    z.addPoint(R, O);
                    z.addPoint(X, V);
                    if (!D.instersects(z)) {
                        continue
                    }
                    t.beginPath();
                    t.moveTo(R, O);
                    t.lineTo(X, V);
                    t.closePath();
                    for (U = 0, aa = M.material.length; U < aa; U++) {
                        T = M.material[U];
                        e(R, O, X, V, M, T, ac)
                    }
                }
                else {
                    if (M instanceof THREE.RenderableFace3) {
                        M.v1.x *= k;
                        M.v1.y *= p;
                        M.v2.x *= k;
                        M.v2.y *= p;
                        M.v3.x *= k;
                        M.v3.y *= p;
                        if (M.overdraw) {
                            c(M.v1, M.v2);
                            c(M.v2, M.v3);
                            c(M.v3, M.v1)
                        }
                        R = M.v1.x;
                        O = M.v1.y;
                        X = M.v2.x;
                        V = M.v2.y;
                        J = M.v3.x;
                        H = M.v3.y;
                        z.addPoint(R, O);
                        z.addPoint(X, V);
                        z.addPoint(J, H);
                        if (!D.instersects(z)) {
                            continue
                        }
                        U = 0;
                        aa = M.meshMaterial.length;
                        while (U < aa) {
                            T = M.meshMaterial[U++];
                            if (T instanceof THREE.MeshFaceMaterial) {
                                Q = 0;
                                N = M.faceMaterial.length;
                                while (Q < N) {
                                    T = M.faceMaterial[Q++];
                                    i(R, O, X, V, J, H, M, T, ac)
                                }
                                continue
                            }
                            i(R, O, X, V, J, H, M, T, ac)
                        }
                    }
                    else {
                        if (M instanceof THREE.RenderableFace4) {
                            M.v1.x *= k;
                            M.v1.y *= p;
                            M.v2.x *= k;
                            M.v2.y *= p;
                            M.v3.x *= k;
                            M.v3.y *= p;
                            M.v4.x *= k;
                            M.v4.y *= p;
                            d.copy(M.v2);
                            b.copy(M.v4);
                            if (M.overdraw) {
                                c(M.v1, M.v2);
                                c(M.v2, M.v4);
                                c(M.v4, M.v1)
                            }
                            R = M.v1.x;
                            O = M.v1.y;
                            X = M.v2.x;
                            V = M.v2.y;
                            S = M.v4.x;
                            P = M.v4.y;
                            if (M.overdraw) {
                                c(M.v3, d);
                                c(M.v3, b)
                            }
                            J = M.v3.x;
                            H = M.v3.y;
                            Y = d.x;
                            W = d.y;
                            L = b.x;
                            I = b.y;
                            z.addPoint(R, O);
                            z.addPoint(X, V);
                            z.addPoint(J, H);
                            z.addPoint(S, P);
                            if (!D.instersects(z)) {
                                continue
                            }
                            U = 0;
                            aa = M.meshMaterial.length;
                            while (U < aa) {
                                T = M.meshMaterial[U++];
                                if (T instanceof THREE.MeshFaceMaterial) {
                                    Q = 0;
                                    N = M.faceMaterial.length;
                                    while (Q < N) {
                                        T = M.faceMaterial[Q++];
                                        g(R, O, X, V, J, H, S, P, Y, W, L, I, M, T, ac)
                                    }
                                    continue
                                }
                                g(R, O, X, V, J, H, S, P, Y, W, L, I, M, T, ac)
                            }
                        }
                    }
                }
            }
            q.addRectangle(z)
        }
        t.setTransform(1, 0, 0, 1, 0, 0)
    };
    function B(L, J){
        var I, K, H;
        J.setRGBA(0, 0, 0, 1);
        for (I = 0, K = L.lights.length; I < K; I++) {
            H = L.lights[I];
            if (H instanceof THREE.AmbientLight) {
                J.r += H.color.r;
                J.g += H.color.g;
                J.b += H.color.b
            }
        }
    }
    function u(M, K, J){
        var I, L, H;
        for (I = 0, L = M.lights.length; I < L; I++) {
            H = M.lights[I];
            if (H instanceof THREE.DirectionalLight) {
                J.r += H.color.r;
                J.g += H.color.g;
                J.b += H.color.b
            }
            else {
                if (H instanceof THREE.PointLight) {
                    J.r += H.color.r;
                    J.g += H.color.g;
                    J.b += H.color.b
                }
            }
        }
    }
    function a(N, L, J){
        var I, M, H, K;
        for (I = 0, M = N.lights.length; I < M; I++) {
            H = N.lights[I];
            if (H instanceof THREE.DirectionalLight) {
                K = L.normalWorld.dot(H.position) * H.intensity;
                if (K > 0) {
                    J.r += H.color.r * K;
                    J.g += H.color.g * K;
                    J.b += H.color.b * K
                }
            }
            else {
                if (H instanceof THREE.PointLight) {
                    h.sub(H.position, L.centroidWorld);
                    h.normalize();
                    K = L.normalWorld.dot(h) * H.intensity;
                    if (K > 0) {
                        J.r += H.color.r * K;
                        J.g += H.color.g * K;
                        J.b += H.color.b * K
                    }
                }
            }
        }
    }
    function m(J, I, M, P, O){
        var H, U, S, R, N, L, Q, T, K;
        if (P instanceof THREE.ParticleCircleMaterial) {
            if (l) {
                x.copyRGB(f);
                u(O, M, x);
                o.copyRGBA(P.color);
                o.multiplySelfRGB(x);
                o.updateStyleString()
            }
            else {
                o = P.color
            }
            H = M.scale.x * k;
            U = M.scale.y * p;
            z.set(J - H, I - U, J + H, I + U);
            if (!D.instersects(z)) {
                return
            }
            t.save();
            t.translate(J, I);
            t.rotate(-M.rotation);
            t.scale(H, U);
            t.beginPath();
            t.arc(0, 0, 1, 0, y, true);
            t.closePath();
            t.fillStyle = o.__styleString;
            t.fill();
            t.restore()
        }
        else {
            if (P instanceof THREE.ParticleBitmapMaterial) {
                Q = P.bitmap;
                T = Q.width / 2;
                K = Q.height / 2;
                S = M.scale.x * k;
                R = M.scale.y * p;
                H = S * T;
                U = R * K;
                N = P.offset.x * S;
                L = P.offset.y * R;
                z.set(J + N - H, I + L - U, J + N + H, I + L + U);
                if (!D.instersects(z)) {
                    return
                }
                t.save();
                t.translate(J, I);
                t.rotate(-M.rotation);
                t.scale(S, -R);
                t.translate(-T + P.offset.x, -K - P.offset.y);
                t.drawImage(Q, 0, 0);
                t.restore()
            }
        }
    }
    function e(H, N, J, I, K, L, M){
        if (L instanceof THREE.LineColorMaterial) {
            if (l) {
                x.copyRGB(f);
                u(M, K, x);
                o.copyRGBA(L.color);
                o.multiplySelfRGB(x);
                o.updateStyleString()
            }
            else {
                o = L.color
            }
            t.lineWidth = L.lineWidth;
            t.lineJoin = "round";
            t.lineCap = "round";
            t.strokeStyle = o.__styleString;
            t.stroke();
            z.inflate(t.lineWidth)
        }
    }
    function i(J, I, H, S, P, O, L, N, M){
        var Q, R, K;
        if (N instanceof THREE.MeshColorFillMaterial) {
            if (l) {
                x.copyRGB(f);
                a(M, L, x);
                o.copyRGBA(N.color);
                o.multiplySelfRGB(x);
                o.updateStyleString()
            }
            else {
                o = N.color
            }
            t.beginPath();
            t.moveTo(J, I);
            t.lineTo(H, S);
            t.lineTo(P, O);
            t.lineTo(J, I);
            t.closePath();
            t.fillStyle = o.__styleString;
            t.fill()
        }
        else {
            if (N instanceof THREE.MeshColorStrokeMaterial) {
                if (l) {
                    x.copyRGB(f);
                    a(M, L, x);
                    o.copyRGBA(N.color);
                    o.multiplySelfRGB(x);
                    o.updateStyleString()
                }
                else {
                    o = N.color
                }
                t.beginPath();
                t.moveTo(J, I);
                t.lineTo(H, S);
                t.lineTo(P, O);
                t.lineTo(J, I);
                t.closePath();
                t.lineWidth = N.lineWidth;
                t.lineJoin = "round";
                t.lineCap = "round";
                t.strokeStyle = o.__styleString;
                t.stroke();
                z.inflate(t.lineWidth)
            }
            else {
                if (N instanceof THREE.MeshBitmapMaterial) {
                    Q = N.bitmap;
                    R = Q.width - 1;
                    K = Q.height - 1;
                    G.copy(L.uvs[0]);
                    F.copy(L.uvs[1]);
                    E.copy(L.uvs[2]);
                    G.u *= R;
                    G.v *= K;
                    F.u *= R;
                    F.v *= K;
                    E.u *= R;
                    E.v *= K;
                    w(Q, J, I, H, S, P, O, G.u, G.v, F.u, F.v, E.u, E.v)
                }
            }
        }
    }
    function g(N, M, V, T, I, H, P, O, W, U, K, J, L, R, X){
        var Y, Q, S;
        if (R instanceof THREE.MeshColorFillMaterial) {
            if (l) {
                x.copyRGB(f);
                a(X, L, x);
                o.copyRGBA(R.color);
                o.multiplySelfRGB(x);
                o.updateStyleString()
            }
            else {
                o = R.color
            }
            t.beginPath();
            t.moveTo(N, M);
            t.lineTo(V, T);
            t.lineTo(I, H);
            t.lineTo(P, O);
            t.lineTo(N, M);
            t.closePath();
            t.fillStyle = o.__styleString;
            t.fill()
        }
        else {
            if (R instanceof THREE.MeshColorStrokeMaterial) {
                if (l) {
                    x.copyRGB(f);
                    a(X, L, x);
                    o.copyRGBA(R.color);
                    o.multiplySelfRGB(x);
                    o.updateStyleString()
                }
                else {
                    o = R.color
                }
                t.beginPath();
                t.moveTo(N, M);
                t.lineTo(V, T);
                t.lineTo(I, H);
                t.lineTo(P, O);
                t.lineTo(N, M);
                t.closePath();
                t.lineWidth = R.lineWidth;
                t.lineJoin = "round";
                t.lineCap = "round";
                t.strokeStyle = o.__styleString;
                t.stroke();
                z.inflate(t.lineWidth)
            }
            else {
                if (R instanceof THREE.MeshBitmapMaterial) {
                    Y = R.bitmap;
                    Q = Y.width - 1;
                    S = Y.height - 1;
                    G.copy(L.uvs[0]);
                    F.copy(L.uvs[1]);
                    E.copy(L.uvs[2]);
                    C.copy(L.uvs[3]);
                    G.u *= Q;
                    G.v *= S;
                    F.u *= Q;
                    F.v *= S;
                    E.u *= Q;
                    E.v *= S;
                    C.u *= Q;
                    C.v *= S;
                    w(Y, N, M, V, T, P, O, G.u, G.v, F.u, F.v, C.u, C.v);
                    w(Y, W, U, I, H, K, J, F.u, F.v, E.u, E.v, C.u, C.v)
                }
            }
        }
    }
    function w(aa, P, O, V, U, J, H, T, S, X, W, L, K){
        var I, Z, Y, N, M, R, Q;
        t.beginPath();
        t.moveTo(P, O);
        t.lineTo(V, U);
        t.lineTo(J, H);
        t.lineTo(P, O);
        t.closePath();
        t.save();
        t.clip();
        I = T * (K - W) - X * K + L * W + (X - L) * S;
        Z = -(S * (J - V) - W * J + K * V + (W - K) * P) / I;
        Y = (W * H + S * (U - H) - K * U + (K - W) * O) / I;
        N = (T * (J - V) - X * J + L * V + (X - L) * P) / I;
        M = -(X * H + T * (U - H) - L * U + (L - X) * O) / I;
        R = (T * (K * V - W * J) + S * (X * J - L * V) + (L * W - X * K) * P) / I;
        Q = (T * (K * U - W * H) + S * (X * H - L * U) + (L * W - X * K) * O) / I;
        t.transform(Z, Y, N, M, R, Q);
        t.drawImage(aa, 0, 0);
        t.restore()
    }
    function c(I, H){
        j.sub(H, I);
        j.unit();
        j.multiplyScalar(0.75);
        H.addSelf(j);
        I.subSelf(j)
    }
};
THREE.RenderableFace3 = function(){
    this.v1 = new THREE.Vector2();
    this.v2 = new THREE.Vector2();
    this.v3 = new THREE.Vector2();
    this.centroidWorld = new THREE.Vector3();
    this.centroidScreen = new THREE.Vector3();
    this.normalWorld = new THREE.Vector3();
    this.z = null;
    this.color = null;
    this.material = null
};
THREE.RenderableFace4 = function(){
    this.v1 = new THREE.Vector2();
    this.v2 = new THREE.Vector2();
    this.v3 = new THREE.Vector2();
    this.v4 = new THREE.Vector2();
    this.centroidWorld = new THREE.Vector3();
    this.centroidScreen = new THREE.Vector3();
    this.normalWorld = new THREE.Vector3();
    this.z = null;
    this.color = null;
    this.material = null
};
THREE.RenderableParticle = function(){
    this.x = null;
    this.y = null;
    this.z = null;
    this.rotation = null;
    this.scale = new THREE.Vector2();
    this.color = null;
    this.material = null
};
THREE.RenderableLine = function(){
    this.v1 = new THREE.Vector2();
    this.v2 = new THREE.Vector2();
    this.z = null;
    this.color = null;
    this.material = null
};
