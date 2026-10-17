外链999!wailian999！

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163rmjrvvan.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163fflchdun.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qgkrqswt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ibugtlhj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ksvahdrg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mljnknsj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fuonjfke.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163kuyivgcv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163oqpumnir.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163joofstui.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ejgxqagj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ouniasho.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eiwjxigu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ltqhmcnc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ylyaytsw.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ihkymfab.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163aspwrgao.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gtodpktv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163hosvelcn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ncvdmyvu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163odlejbud.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ssrxmyoo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zpilbios.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hvndmbsp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tvcnbitq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163girkafxb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163skkxeyqw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rniokyan.html

================================================================================
来源：http://www.aibaodan.cn/163wgdzqkks.html

O. 并发与异步
来源：http://www.xuanzx.com/163msudmnty.html

================================================================================
来源：http://www.sxryk.cn/163cfezztde.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ejxwoviq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yefabzug.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163wkzevtax.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zzjfirsb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lsndnqiq.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163dkaaojph.html

Go:   go f()
来源：http://www.sxryk.cn/163wlxdgalr.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ciirshqe.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163rhxdowpc.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163shjobmtk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163skimmqyn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163jmkdnnol.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163egevdzop.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pdnymqhy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wrfhagko.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qnbcuyec.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163syhqnfkl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zftmtghz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163drrkkrkm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kzbmfaft.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163zngmehjk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vcvuspcj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jkvrfotc.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163trpacpog.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163mmdwzpvl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163exsywogp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163mvexupwm.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ftktkqqm.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163cayjytua.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jphacyvf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163enyvrpwm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163opmcyssm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163vuvograr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cwlzmvwc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hiqnrckf.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163roqmnhcy.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163lyzdqgik.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ilyeedvm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fkzmybkl.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163azigpsdu.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vsxuczkb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163uyyqixki.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163pmjfhqmx.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163mkeyqmdf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tdceajse.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163oisgpiaw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163srxvpnmd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ecktcbrj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oborqtlx.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pawqlhft.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163losugycl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163mxyhtdwz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163otxbclam.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163qnplzuii.html

================================================================================
来源：http://www.xuanzx.com/163skpenfqi.html

P. 常用工具函数
来源：http://www.xuanzx.com/163olctymvj.html

================================================================================
来源：http://www.aibaodan.cn/163wvfuvtit.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163iozpghql.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163nudbbpke.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rjgddhga.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jueooxnm.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jxycbbwx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163viscagso.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163zonbekqa.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163cppkeutp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163lyabpoti.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ntvitabo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vsrgmwkm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163luvhzpuh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163fqablbwi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163jzobuhdz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163nxsfzmmi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163utzpfdip.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163pswkikzu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cxafyext.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163loaqdjrn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163zdfdbkeq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163cfxldulb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jdmatrqu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163knnjghty.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163cryvvvua.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163hobqtgcq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yesovzxk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163sqoihdvo.html

[P04] 求长度
来源：http://www.xuanzx.com/163vouyyyez.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163brmbiayk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163poqgjarn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vuhhdlhj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wrlisinm.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163bojbjkyp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163kggrorpw.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163fcenpyar.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qmecelyi.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163icqqswjf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163bbxdnwqj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lwkajmdt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163rnqtwjyg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163momfjqog.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163fozgorzn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ygqzbfns.html

Ruby: a == b
来源：http://www.xuanzx.com/163oufbgbtw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163phzrirmo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163fyiwnieo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163inlhgdrl.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163psodcpnw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ofuvvkgh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163nnictnmi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163fgbslhsc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163uwwdlocg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163uhcqieay.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163exutqotn.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163nbfnkjyi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163glteblfb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ibxemlpj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cuhfvaui.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nykraqxo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163gjgdocne.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163oofhzoan.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163mparonkz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lamcflas.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163vlwclybd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lpcipcbr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xwlhkovo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163bismpygk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163wgxticwp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ojavxznc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pztlgynb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163gcnxyocd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163wiwmwogg.html

================================================================================
来源：http://www.sxryk.cn/163olaplolo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163dwyelrsn.html

================================================================================
来源：http://www.xuanzx.com/163jbrzgqwd.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ckpterxt.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163yqabtqct.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jcbltpwc.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163cvtxlbns.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ndulneta.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cgzjhznz.html

);
来源：http://www.aibaodan.cn/163eaqhvmqn.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xocheujd.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ozjiiyos.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163baukdgbb.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163hsvelcqv.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ixuyinhh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163phxqdwre.html

);
来源：http://www.sxryk.cn/163nokciyvt.html

[Q03] 增加列
来源：http://www.sxryk.cn/163yereyppg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163nrzxggkj.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rtuipaav.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163hgbyashu.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163htlrrgxf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163edrhyrte.html

[Q06] 删除列
来源：http://www.xuanzx.com/163jlijoqzy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163thhnaurh.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163spqtsouj.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163xxsshffu.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163cngbtafp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163flvlsobi.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163qepdblil.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163bocjuunq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wkytvzeq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mxvopwxf.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163lrdprthq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163uhsovmqz.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zzwlgtjn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hihqklco.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kviwoyql.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zpahhvpi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ilmjdvic.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xigwobzk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lwjwkayr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ftwnnoor.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163pnetawte.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hasnxbfm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163obcceetv.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tpkgijqr.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zevejvip.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163orqjmfuu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163zqdmsccn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mgtnvyjh.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163lukmanii.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163tiqqxcoo.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163tyslvtro.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163oxtkieso.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163fqixksdk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wfifkdfs.html

[Q22] 排序
来源：http://www.aibaodan.cn/163dhxtlwsd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jrgjrezj.html

[Q23] 分页
来源：http://www.xuanzx.com/163kceqomwd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ddjdwcux.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xevkrbnh.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163snvmmrho.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163eexhgmyf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hjdlqsww.html

[Q26] 计数
来源：http://www.xuanzx.com/163dsihvzmv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163lgazlqlr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zkypdiuj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kkujzpjj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163xequygkk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163tqiahotr.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163kfpmxktp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xooosyof.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163uhcybawo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163iuzevwaj.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163isxhsayx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ceqtbxfb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ivqoqmhf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bbmsfoxx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zdqqtllg.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163lmtlngko.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163adhpxfip.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163udlbwyyv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163alhsubqx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163asrclwnt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163abwvsbqa.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zggwmiov.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gptaxntq.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tigzgepl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163esummvfj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163yaefsvnd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163imylzclv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kysnlpwf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163dbdwpvbf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kiyxjfpw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163zxyosfcv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163vwfktolm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163mmaganag.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rxapfure.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nfijubvh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163vionxtml.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163eijlmkwt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zdrrdqgk.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163mmzokcgh.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163xqwphdyy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163sozfxfkk.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163rkzyxqdb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163msolbbkh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163xblfslfz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163szaafxjm.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163dvbqfklx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ontkwdks.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ilpsmbth.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pzcgbomn.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163kqwxhktc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163zpbzamrs.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163pmnvledo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163sdgbbdfy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fycnshoq.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qlseystt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ldhfdxcw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fpgfyaty.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163qdozurde.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fxivssxs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163aqyrfpyh.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163mdsxoyfb.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163dpxnzkqf.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163oufvvegs.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163cuhwblho.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163lujrwdly.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163agolhdrg.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163uhkvygmu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163jklrntmx.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fdtdvqhu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163tujbszhq.html

[Q57] 行号
来源：http://www.xuanzx.com/163oiukfkfb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163vhgmtojg.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163cumgbtnc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163aooucmfe.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163obskujtu.html


<!-- 参考信息 -->