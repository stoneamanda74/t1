外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xplarabn.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163yxslwxdr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163kimzufkp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163vynywkhl.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zkeaqata.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163zjujgrqw.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sucubidp.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qzwanzsu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163xpgxoxvr.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kvngpbjx.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163nuyiodna.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qhzhpixw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163bejzystq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163brpzdhmh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163piuqgqnm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ngeiijwp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163psqpxkim.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163viblazrt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163argaehwq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hhdkxibu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163xrxzagio.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163qztzchjn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163crbhgkyc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163brrzybof.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163cupddrha.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wxfinhmd.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163tlqeolyx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rsdwnetc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163xtayzcmw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xkxdkclp.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163zplrvahw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lvzmefol.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163actrkzyo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vxoefwyb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xbjqsykn.html

Java: // 手写递归
来源：http://www.xuanzx.com/163sxrkhwke.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163skftvghn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163yctkkzlz.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163njjqujyj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wmarzodd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163yhumqkwk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163gzjljcwg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fqkgitrj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tecixjov.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ohjcrgwy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163nprfyecx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163rmdhnuvk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xpxisfmt.html

================================================================================
来源：http://www.xuanzx.com/163hzcqyput.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dicebhjt.html

================================================================================
来源：http://www.sxryk.cn/163lqcmwziz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163fhpsuxke.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fkxzqryk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vhnnwopc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163itibvxlw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mhfbmllf.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163dmjanucw.html

Go:   go f()
来源：http://www.aibaodan.cn/163tucypcwu.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163prjbnaww.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163arbayjkr.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163yskmqgtq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163sjuyqtrm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163fzokjpnk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rbtjficp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mzrfmgwl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163wsacezsf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163itnczbco.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163usuujzxk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163tfuffwsa.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163whpvmkmn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163yjrjluri.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163doqrdewd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163aaaxacry.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bfvfgrbv.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163pnrbvgzr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163geurwcax.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163oillonoq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163uqaziywh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163bhhpompd.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bzxrbtjb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163htdtmter.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163epcmefef.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163kdmrczho.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163udzubiyw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163sywpkdmo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163plcvuram.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163fdgaxgeg.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163hmgeojhr.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163uxnozyar.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163hotrdldy.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xwgmtllu.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ozlcvalt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ggnswjhj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mrucipyz.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jlpkzpfb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ezdxicbu.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nxgfftiy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163bgdallfo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vvyfuiwk.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wxoqfmmg.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163waodzjwy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ltttzson.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dwulklsj.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ofsezqsv.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163oouwlmwr.html

================================================================================
来源：http://www.xuanzx.com/163tkpjaycp.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163dnxkjjic.html

================================================================================
来源：http://www.sxryk.cn/163fdiulxuw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ntvsqqfm.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163govccxhm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tphlncdr.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163uvcemmcy.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163sjaoywkr.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kjhrvjns.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163pqmdfyow.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163coznyxpr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vjaruueu.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163itzntcdl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hvzujnfq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vjxxahfc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163slyrhncr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163umzxdarr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163fnabvyqj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xrzlezdz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163cwxfkjpl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mbiijkid.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ncvvvwyj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163rbuupmhl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163thtllano.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163lvtylayv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zopvhkec.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163nvwkngdl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163rilfjapo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163wkszdgou.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163vblvlatz.html

[P04] 求长度
来源：http://www.xuanzx.com/163hlnjjmqh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yufwdzej.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ftthknlw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pbadmxmd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hfwugjwy.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kmvbpfdt.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ghgqjatc.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163unkcvnho.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vtagikfp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ncovatcv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163cmebiell.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163icfquzdc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qjcudolz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bknqrxep.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163lasidsmy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163nmjcksey.html

Ruby: a == b
来源：http://www.xuanzx.com/163ysggjsbz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163iopygbwq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163metgcxdl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163eexvcvqf.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163wbukedrm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mulryuas.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vxldggun.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163gvdcoakr.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163gqfegffw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163cnmrxhyg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zxcxmlvb.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163wbcvibtb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ryewyazo.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ppnfcyaq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lpgqdrfg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yrqatrze.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163memxlkwq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ztjmuqdi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163eiqsoqcp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163slfextoj.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163iqsajkun.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ewetvtwi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163zgvbdhbl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163nbwfvvkb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163cxyxpigf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163wuqmloot.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dkmaquud.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163rtrezxeu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ehunblbt.html

================================================================================
来源：http://www.aibaodan.cn/163cvvbbzwo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163plgewjqf.html

================================================================================
来源：http://www.sxryk.cn/163ztwuzond.html

[Q01] 创建表
来源：http://www.sxryk.cn/163darmatmp.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ysxmeqzj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kjglrtcw.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fpwflntb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163evlzrsei.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163nmiyatgs.html

);
来源：http://www.xuanzx.com/163fkanawgj.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163sgqkvqsu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163hsuvfojj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163gfkdbmrn.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163veyenrwd.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rxnbhnmc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163cnxzjsfb.html

);
来源：http://www.sxryk.cn/163atsrhtpd.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163babqaxle.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163wosjbnmw.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163hmfhzxxn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163magwhutv.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163nsgdzvdh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163qtkromuq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163fzsxeqvg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163wunqictn.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163zfhlpcwo.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hxvjbyzy.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wipkydsc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163wzeyeghz.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163amsrzlis.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ngoxzfxu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163shhqivzn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163yciwapwu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ionbjlnp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163fxuxnvdh.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163yhkkiuuq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ydcngntd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bdppgfxv.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163rwgpdkiy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ianxmgbm.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fxbezldc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bjgipzza.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163vdgqjfnd.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163pixbmkjl.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163iwszzkio.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163qvvpnyfy.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nyeinbrs.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ywfnmwjq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163asusspqs.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163epnetypq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163dgcpgnor.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163jrdrkjoa.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163fzyubzub.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163viyycjli.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163lcmgspqa.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xqretwci.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ergekjpb.html

[Q22] 排序
来源：http://www.aibaodan.cn/163othwpnlv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163qbjdfwpc.html

[Q23] 分页
来源：http://www.sxryk.cn/163xrmwrloi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163wjskgoag.html

[Q24] 去重
来源：http://www.aibaodan.cn/163yefakyml.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163yunursxq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163dlaclkmf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163jncelfvx.html

[Q26] 计数
来源：http://www.sxryk.cn/163kzsxmpme.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163skxfkigx.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163uivgedgc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163hnxdelip.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163jlqqvkrd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163lncqjdrh.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qsexpyjg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163momchpbv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ouhohccw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163flibxysy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163usruwxyn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163sqlhnhit.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163kfgussxa.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bxkdchfo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163nyecwrma.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163eyoacmmc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163rohzfyoz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163zmipksvv.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ihlnczrp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163uikjyodt.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163dzrvcmtm.html

[Q35] 内连接
来源：http://www.sxryk.cn/163bwbzzlyb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kszdgqyg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163jscpsdgb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vwoypyik.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163uvtqzlxr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163tsuwnddf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163buxmlyso.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163tujmdopi.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163xvkhilzu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163cvknniuq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163hxjygpkv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vknredoc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163hdlqhoyz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163jhstduzx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163fjsmnchp.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163nmmarixi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163fmicixpm.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zamkgpuf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vclxyurm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163qmqorrdv.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163hbcvrahq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163kwvqxywd.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163rkihkcgh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bsryjila.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163wgilfxpt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163esqqsxgk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163pftpnyfa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kbqvlmru.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163mnnbavft.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163hjykapfh.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163zsepvgzx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163csvqhzts.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163cdefdepn.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163fyedsdcj.html


<!-- 参考信息 -->