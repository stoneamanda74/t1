外链999!wailian999！

[N09] 栈与队列
来源：http://www.aibaodan.cn/163zmsdnmks.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pmehnvcy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163jzzrkocb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fjirpyyr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hcminlex.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163elqbleos.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163bsxaxvqm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163vvweqebx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163deyninql.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163jgyacsof.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163dnxappqm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163gjtkbgbh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zecfyldn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163njrnjqfw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163qygqrzlf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qrbynljg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163sqlrdaug.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163lnprwknn.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163shmrpvbz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wgestepb.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163rilfocbn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163yudacbhn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ifhtahrw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vvedsobk.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ipnrvdcw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xlkpsnyp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163wwlqklcg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163fecewlwz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pyqrvmna.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163soifuciz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163atxdxkqi.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tbzrlzba.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qkroizbv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kygzlqlb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163kotdkrhl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xtatapzu.html

================================================================================
来源：http://www.sxryk.cn/163jvurhxdd.html

O. 并发与异步
来源：http://www.aibaodan.cn/163yomkgqjv.html

================================================================================
来源：http://www.xuanzx.com/163pvqhfpoa.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hocgswko.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163fwkxhrhk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gsgefllv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163sjckfukc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pbznzvqh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zdxdgpog.html

Go:   go f()
来源：http://www.xuanzx.com/163wulpuegt.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163sevujocf.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163iikhkbga.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163rqautlsb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163hcykrgrc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163oturcouz.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ypafmpuv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163sosqboaw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163lzrarmzc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cngfzylx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hmdchyjp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163kaozctsr.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163kzallten.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ltgotuco.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163eihxjyzm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163dnragmtk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zarqrujj.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zxhkaixj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163hdbrkwmf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rmkdrdti.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ccwbvtht.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163uwhllltv.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vtslxfil.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qqoswcnq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jrpvmlfp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163krfjkwup.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163cpvdqqlv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yydcbyoa.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qeixkqzr.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163rxbrznvb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163penawnvm.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ppktzpsv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163uixmgznb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xxwhszol.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163efejshng.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163euocqmct.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163lmrftggd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163fibnejcp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163rxqifxis.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163nwyzocbk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163obrjffba.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vqitvcgp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fdxzaxye.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jusldmdy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163kkcwfhkf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ayilpphc.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163erzzpkje.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163xznjjvsa.html

================================================================================
来源：http://www.xuanzx.com/163jtdulvmm.html

P. 常用工具函数
来源：http://www.sxryk.cn/163lkapatmm.html

================================================================================
来源：http://www.xuanzx.com/163dzjkcfeh.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163lazmcdcq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163osbtmrfv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163uhivrncf.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163aytjqvag.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hoyhggre.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163xwwcoptm.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163kaipyfrq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163eowclesw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163jijklpic.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163thupwrja.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kufijrpx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163cicyekxc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qqpecule.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163jezmwcfh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163yyvzyymj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163rpbxbjhx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ndyteeva.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ymigeflc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163tnfspbdm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163pldzbafs.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163oplbjaex.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nypaxlkb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163eaqzygbi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zhpimooe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163galskwvy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163rzgvtfdh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mhjzzmqd.html

[P04] 求长度
来源：http://www.xuanzx.com/163vkdfmjng.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163adbayutp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ggbgnugq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ynoijlsa.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163pqgmurmr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163wlpoapbb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163irqqarsb.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163rbqejgjj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163bppdxltw.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163iuhgpzno.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163zijoeiux.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163tyitdccv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163vhgsbvup.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163giwsqmhn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ziykirhd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xvqluoce.html

Ruby: a == b
来源：http://www.aibaodan.cn/163thxidzvt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163atrotjro.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163abdwcdwl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fjpnqish.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tdqxzysy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163vjjyymbc.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163wislwgwz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ulgxksiv.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163fcrfmaff.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163mbcfgmbd.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vsamukzp.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163wjbxegit.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163unlwxiws.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ylhcqvic.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ysmekzqo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lmcummep.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163pkeoiqrh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163rxnjanhn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ncjxpwzq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jyinapre.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163rkwopkxd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163wukhutwl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163rmufgfhb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163vckkfyam.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163rwianzmd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163zqrzxeqs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ipzhtfvk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163fhhxkhev.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163iwwpkojd.html

================================================================================
来源：http://www.aibaodan.cn/163gfaqeqfc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163pvnxyoyi.html

================================================================================
来源：http://www.aibaodan.cn/163oissreps.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zgbspqgq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ywhkuuwl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hjvtzqlz.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163mbovjgli.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163hcyafeog.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ieeutjpd.html

);
来源：http://www.sxryk.cn/163lnfwkkdq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ienzdsig.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163wdyjihsi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xnfwtgww.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zrrrpcsh.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163yoyggxza.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163xbrjicns.html

);
来源：http://www.xuanzx.com/163gsuhlimf.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jjhpktaf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163jabxunur.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pjrnvbcl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ptucwhpp.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jevvpsor.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163sbfpoemi.html

[Q06] 删除列
来源：http://www.sxryk.cn/163iiwhhyoh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163tsaiaccq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163irjlitne.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163vvfdmrbl.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163cxzcxlno.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163cgcouvcc.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163pafiknhd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163lpqtsdml.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ykubxirq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163triulemf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163dlijwhse.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163cmsrfwsa.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163akbdrpab.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163nkirxlas.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163noegnrgb.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163pycweuqs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163dlnjenxf.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163mknzzecx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163moqbjmzc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kytldoud.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bwdonyir.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163khumkzrq.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vmjdgfnq.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ivdceweu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163houxofnx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163rxeeuwyj.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163pzeblwxw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163khdqvric.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163rnstevkw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ipwxnqml.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163fffgarps.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163nvlakzss.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163pppgslmm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163vadqkgkp.html

[Q22] 排序
来源：http://www.xuanzx.com/163jtbrfsqh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163edylcvqj.html

[Q23] 分页
来源：http://www.xuanzx.com/163uwaefkfv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gfhddxzm.html

[Q24] 去重
来源：http://www.sxryk.cn/163xnfpjejz.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163yvrwblbj.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ysxqgbre.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163rvllpiya.html

[Q26] 计数
来源：http://www.sxryk.cn/163gmamgilh.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163aaskjtas.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163etxuqygr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mwaazeop.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163dhofspry.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163hwahsaec.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163avqeaaoh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ybzruvgc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ddahyfgu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163aabfhozf.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jsyxxkra.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163crpbdlep.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ivngovpa.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hghrsqjw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vucqgmaa.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163wbiwkhdn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163lxgagaqw.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163vzjllxzw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zlxneucf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163nnqmqaad.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163hkctuwvq.html

[Q35] 内连接
来源：http://www.sxryk.cn/163gufchelm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mhqkeywb.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163gumkzcpk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vegrgjtj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163cfysndqr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163olnrjxeh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163eplminof.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163dafumzff.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163owhjpzau.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163azpdcihb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zaalgofy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fnbtmpwo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ihqyeseu.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163obggzrws.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163fstlrmeh.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163cxhyzkov.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ndudonwu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zwimowog.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mtfqlwkz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163njpexipd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163cpmkming.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163iszxfjuc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163clyhhnao.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163nhztinff.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xubgadjy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163uznmilgm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163kpmwettf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dthvnhqp.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163arclwqvw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163iivnulpp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163hpnlsyae.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163naynigjq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163aaqnpvmc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ieazyere.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163rqdmfxuk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wczhordc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163zcauetxr.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ieccevfu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163lnyjpkfq.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rbxsxgbr.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163bvvbzclx.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vnmkhdng.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163bsmgkyhc.html

[Q54] 清空表
来源：http://www.xuanzx.com/163fnubfkch.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163svzcvofr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163nsjusiat.html


<!-- 参考信息 -->