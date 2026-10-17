外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163hrbfatsh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163uxghsmpr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163gfyjareg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ikwpquay.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xlfogycn.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mkelzqkd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ftpyqlat.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163kbeeziqq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163cyhfwfan.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163yyanrzyd.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jcylgefs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163sxbepqiy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163dvqrqppu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qffqeizj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163fbcyiroa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163mfntqidn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163hzwzwraw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mgltywcy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163apfqwkea.html

Java: // 手写递归
来源：http://www.sxryk.cn/163bmqltgyi.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163xtkdnewb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vpdyxxtk.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ropzetuk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163grsbppvt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163teepecip.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163urutdrfz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pzlnwusw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sndfhxou.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qhqkjntu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163dsavwjrn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163dsewzxum.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163uvvgwhwj.html

================================================================================
来源：http://www.sxryk.cn/163bcxnypju.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qjpljubh.html

================================================================================
来源：http://www.sxryk.cn/163tczazflr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163zkvhiuvb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jaofzrqo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qitzdxdg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163encrnxza.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vzfpumjh.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163wxtihvns.html

Go:   go f()
来源：http://www.xuanzx.com/163bovrqneq.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dptfhziw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163glhpcoov.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163lkpxnwbt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163bkaijhol.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163cbqlwtmc.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163scibttce.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163iciwvesz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163cpdpnjag.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163megvatql.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jbasefdw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163oeoefuix.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163oamfgltf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163dqblkbqs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163tphuoscm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163dofkfemt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rmfmxsio.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jabtqpee.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163cjdwynkm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163erlmktog.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163smlejtry.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163aiocgrqd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163aidglscy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tgsjvqlu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163uyifnsgb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163xrdhtbew.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jhifhnuw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vjqfefyo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hxvtazxz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163srvlrshn.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ewsgruks.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163apbuchub.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163cnummpwj.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163igaauofc.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ksumbdxc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163upziprfj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163tscgqtei.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163smnkhgzi.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163etufajek.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fupueexa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163gjzimfrk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163mxevwcwd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ynahytub.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163koqdbvmb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tfgxgyob.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163avhbbqnl.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163iikrvosr.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163njxjktll.html

================================================================================
来源：http://www.sxryk.cn/163zidyrubz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163srznlftk.html

================================================================================
来源：http://www.sxryk.cn/163cpdwjvrt.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163rhielxfb.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163tqybsrkm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163kajqshli.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gdcldmbf.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xqvnxdnb.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ywichfqz.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163lfkrscef.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rkricqho.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163uljcwfst.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163umlawhix.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163pelbzxyk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zocrqjot.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wxzirzee.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163fikgkgyh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vdcpmdvq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163cfpwozfa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163uznybaaq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163khgtfljq.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163htaydgbp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163pqhuzxmr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ayqnifei.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qnnytenz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ffkeeynu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163gphxophf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163jysgoblz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qezbcuvi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uwuwtcyj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163oisqatcv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163wwpuasqx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163eirxicia.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lfxohink.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nizshviq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wmlqozpy.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163dyomzxqc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163rjprazam.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163iuvweejd.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163auolexmx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163volapecy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163wnmlmlpp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163bebkwryp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163grrruean.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163lejqkuyp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163srgalfko.html

Ruby: a == b
来源：http://www.sxryk.cn/163ejmuthqp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163tpfwpnnk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ptoesqjb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ovtqdaib.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163gnutqmbm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mzgcgced.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163vinzcyow.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163frhdlxag.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163mxxjdiea.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163buqwnszh.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163sptuwsas.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vgdkaunv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163zypsjuxr.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lnoqixus.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lrufuhnq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rskqqyqh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163eaointbs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163kncswpsj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rgpuiwcp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mguctbpd.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163gpayxnsh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jlwmtxua.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ehabfkyh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163yyhtcxne.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163snxsaozz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zoxbjyyj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163cqpghrgo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163yykfbjti.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ncwgakts.html

================================================================================
来源：http://www.xuanzx.com/163rgffinds.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163rtrdesqm.html

================================================================================
来源：http://www.xuanzx.com/163mvpiqyth.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163hnlfdfpq.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163szraybbk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163plnicdyg.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163uoyizktd.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163jefymxoq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vrizbrcw.html

);
来源：http://www.aibaodan.cn/163cwclbwmp.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163iooszdrl.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163szdhihho.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mxydvdsy.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dptplvsh.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163yhidduwn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ypcdlazp.html

);
来源：http://www.xuanzx.com/163emfitndn.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163qspwervt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163zpnktcfs.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163etrojgxw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163gygmzhvy.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163tkdqzyjk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ilxgyhid.html

[Q06] 删除列
来源：http://www.sxryk.cn/163evuslffa.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ffdyjtmt.html

[Q07] 删除表
来源：http://www.xuanzx.com/163igxvuela.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ozucugjt.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ytutzrjm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163dyxhbgmp.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163tjazaptu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xgmsdkbd.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163deezaoxu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163psouskzw.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zkpleejc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163yaqtgpnz.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163iordcrgv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163snxyekxt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ikkbpfrp.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163hwkzfgvk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163zvhciagw.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163krohofpl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163qjsoxebu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ghivvmvt.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ibyaswfl.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163fvkayknc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hfsazkji.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163miuidews.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163yguakvph.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ikkhihyh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163hhrznlzq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zhehfcxq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163telohwgh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163rwxbkvrl.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163tcdgogpu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163clhmzxen.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163sydogveo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zcrhhozw.html

[Q22] 排序
来源：http://www.xuanzx.com/163zwgxlemi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163varjlstu.html

[Q23] 分页
来源：http://www.xuanzx.com/163gnttjhjx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163nwmotykl.html

[Q24] 去重
来源：http://www.xuanzx.com/163nxeujhxw.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163uhnmxjaw.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163dlxqduqe.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163whzeyped.html

[Q26] 计数
来源：http://www.sxryk.cn/163yrjkqjjb.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163qcptidxh.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163nprmktxc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163sezpmipv.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163isfwpbqn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ebmtndig.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163atwniqwk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163dumvbqsj.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163dbnmajwp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xmxqhjlf.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163wjsskzvw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ukxzsddu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163zynuekzq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tyukonhm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mxqaczzc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ooseppqe.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ciiuuszl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163eolxdykf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163msamojos.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wmbkuolg.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163wlnwqclm.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nprtfeiw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jwshmbhj.html

[Q36] 左连接
来源：http://www.sxryk.cn/163kvjlqukp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xculgkkd.html

[Q37] 右连接
来源：http://www.xuanzx.com/163nqbitfjc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163pbvgycbw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163xtxgmijj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bufptisb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hbqinpid.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163gxpqrqik.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163yydicrhg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163hbqsjlti.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163etrnbrek.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163wmtpohxw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rpxgjysc.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163rxehunkd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163cmcfmhpt.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163swuasdcc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163luahavpj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163yjjljrho.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163kpvvoxml.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163esziouzh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163jnofboee.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rdnkbbkr.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163sjvmzwnn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ihlrtdmr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163mhknzekj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163beqqflth.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163pngomutg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163tnmvwvxu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163razlhmcx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ippffoae.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163nnsldawv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163edttxbmx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163lobbktpi.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163fbyzabot.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ukqhexfi.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163dqofnnmf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hyjwcwjt.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163zidckdlj.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163csfljqwj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zzbjtdnp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163kokthomr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163auqeponr.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ewwytjay.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163jnsuvbfq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kwsudlfv.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163zyeggyat.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163lllekzjn.html

[Q57] 行号
来源：http://www.xuanzx.com/163mpimpfpx.html


<!-- 参考信息 -->