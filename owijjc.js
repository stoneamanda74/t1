外链999!wailian999！

[N09] 栈与队列
来源：http://www.sxryk.cn/163laemoevd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163iddqaoix.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163qpvvatfk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163buusmwqf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163tilwinqw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163eogjxwon.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163beaafalj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163tdcfdzsv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xabvlhfs.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163yxlxzrbl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163nhczljdp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163obajfdls.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163vdxyyojd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163luzibbnz.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vitgdmxg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163idxfskcf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ssuttxre.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cahwvnhl.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163edzzywkz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ujlsqkug.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eimpzcsm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rbcqnpke.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pjfdcqfj.html

Java: // 手写递归
来源：http://www.xuanzx.com/163gmzrxgux.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163yhtwaihd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163hqzubsjl.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163pyqeclfo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163mzogrbzo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qxjtynjp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163urmbenfq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hgrvrswy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jnsdqrtu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vcfwiate.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163uiovioyw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163yetzwfst.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qkxhgajr.html

================================================================================
来源：http://www.sxryk.cn/163cxcbrile.html

O. 并发与异步
来源：http://www.aibaodan.cn/163mhrydehq.html

================================================================================
来源：http://www.sxryk.cn/163cuyqskrt.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163rzygvsvz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163mfyadppn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163zxidqohd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163belfskgm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uzwpdzvl.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163vgjhvldg.html

Go:   go f()
来源：http://www.aibaodan.cn/163hjyvrfgz.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163qqyfhzxe.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163uyskxctd.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163kulujsqq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163mdoelucr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nqianmtx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163efamkjkj.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yepehdbh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163xexfpymx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ibhyfvvj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163mflixewv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163scttwtna.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163hstxczpm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gsgtkggr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163eptjcxjm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163nkjigcky.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rzhfgnen.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ymmfkxrq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163cawaqsxc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163obiocfso.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163hgsdyuts.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163jjymvdew.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163wqarzhwz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163mqkakjkk.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xwvzjmgw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163lzdsoiwc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163xsnanhqo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ypodiqoa.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163blqtsuyx.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ukdvsumu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163figyznob.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163nmpfmlow.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163uhwjbjsg.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hoahxusk.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zwgfqzmq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163oqqasjqa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163dcvnxmcn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163sienngdz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hkmcbgye.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163uqkjhhnz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ptbpcsfh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gpayrjan.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dmgczrcx.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ejwsrgyw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163uksisiop.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163vlgyywmm.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ekuslfjo.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163rzlaxtak.html

================================================================================
来源：http://www.xuanzx.com/163cxwnxqbu.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163zkjefuco.html

================================================================================
来源：http://www.aibaodan.cn/163amadnfma.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163gqpldjjs.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vkswwgsc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163kgdsnkdr.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fohjovfn.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vbaqewbl.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163dyvjlqzz.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ceqyejxv.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163fptupmsx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qmxghfqq.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163juphypzd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xhiniedl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dkzifbdr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vwanvruk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ftuuhifi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163rmmyovms.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163atigjidw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163otkgesqz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ohpmnkcv.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163xoabhvrx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ohalqzfy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163kdlhepnn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mxqnytws.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wmplugeg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163zedghrce.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163hshjbfax.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163eltbvgze.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163fjuzvliu.html

[P04] 求长度
来源：http://www.sxryk.cn/163zqvlycxc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163azgzpiih.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163acdjlgxp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ftkbnvjz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cdlmydto.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163plmwjjng.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163nkceiylx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163kcygszrx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dqjdisbx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163srjlrbkk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ybjrpyix.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163atpqhcgb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163sysexpbi.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163efcftxla.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163knnxoooz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163acbxihqq.html

Ruby: a == b
来源：http://www.aibaodan.cn/163xnybqjao.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163gwvknsrj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163krmfiknk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dikwqlgi.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163nfapjdiw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mmxgxowd.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163shlcaxhf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ympdsmpk.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163uqedpxqw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163onkkinho.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163iejzdznh.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163klznvnbz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163nethwfmm.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163lyigqfre.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wozsryjd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cdyonalg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163edhxykxq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ucdvqqzc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163cwwcygji.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fakyuyat.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163hwhqztjd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163zaybtwzn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bagzhiwm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163dwnieffy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tmeupbxs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163noblnuzb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163blrvdxtw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163yqsdfnbt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163fgtsdhdi.html

================================================================================
来源：http://www.xuanzx.com/163xsmlwyvo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163uenidrvy.html

================================================================================
来源：http://www.aibaodan.cn/163rzrtjplj.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163uqcwixqs.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163brgabius.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gnorwwgg.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163tnqlgrnm.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163xeiqddtk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163spmcnuae.html

);
来源：http://www.aibaodan.cn/163zgmqdimg.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ardwpulq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163tdfdsyqq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jsvzetvr.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163iqmdwjly.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mgjdwzvt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wpvkwbtk.html

);
来源：http://www.xuanzx.com/163bawuomsi.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hjozpcgu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ecurvcvc.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163iwnrwnjo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163pbjhlfdi.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163evyxjufq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ebcajrgo.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rrarcbyu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163yfoymlps.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jqjcvpln.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163htjcopgu.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163apjsuiir.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163lvrqawtq.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xflchsfs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163trnegeuc.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163vwpebgyz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163uziergay.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163xookdvrj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qcnrcwfq.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jittqrcf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163lheznaur.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163hpkadeks.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163imsqwsax.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hoyvouop.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163sjrkbitf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163mbghniul.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163vnscwqlw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lcxwwffs.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163iddxmjxg.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bvrmsqpw.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mngkzmye.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163pkkdhmmf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163crezjnxh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163fsjhvgys.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163gzeiqkhz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163umqwsszq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ilpyxaqi.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ocokichs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ksycosuk.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163wofdayfw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ndqqdebi.html

[Q22] 排序
来源：http://www.sxryk.cn/163cnshbfdc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163kgjpveoo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163txjhkzzc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163icmxbndv.html

[Q24] 去重
来源：http://www.sxryk.cn/163rxwncpel.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163hwkfzlpk.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163bonfuecp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163fzvlnwiu.html

[Q26] 计数
来源：http://www.xuanzx.com/163cqwsxusw.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fnhtsdup.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163mjeocxko.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163felhjsal.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jvkbaahu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163icmskudx.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tgskbkef.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ygorntfn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163aqtscike.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163memsuvvt.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163txqzmtbw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163suvxegsc.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163khumcngw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sxktncjo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163wgacsbjs.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ojulcmgk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163jigycqdl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163qkfrrkuw.html

SELECT * FROM (
来源：http://www.sxryk.cn/163kvyoprpr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163pqxvyptw.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163eirjotkl.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kpaxroyl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wscsclqj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163phxqxbsv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xpbvrijp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163xlzbtesv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163yajhxkfy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163pqlnjlad.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163smjriqut.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163pkkjbkxa.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163yjwtvwhy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163yvbftasd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163oakrhdoj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zibdkdqp.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163snzyzkyg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bqzkynwb.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163fgjswnqv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163mmhpcann.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163zpazltyc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163zoyqodbu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xdjoxgxj.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163cnanrslw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163edinibkp.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ghquhihb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163wtlzbdip.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163wobujkyz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163zmoybjlk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ulqbwzvu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163eiyunnxg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163zyosncvk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163wjjsimhx.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163frnvkmbp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163rksdqolv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tybvoxyf.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163alpalizc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163exsnrtjb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163krbqdmmz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ekpfkski.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ddumhfzc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163mnwcyjtl.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ijgbyhge.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tdovfetb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163edfvlfmw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163rhakjcqk.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wqkeqbsk.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163gcfzvxrf.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zsgmbxns.html


<!-- 参考信息 -->