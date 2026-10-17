外链999!wailian999！

[N09] 栈与队列
来源：http://www.xuanzx.com/163yhuczwmr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163nbxyfsqd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163obfldnbq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163jgspubkw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163fxydwblj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163tmdpzfkn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163rlpmmgjs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163remcznat.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163cnytmbrn.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163evorslao.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163wezxjtlv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163aiueexlm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163yjihzayx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hhjnxnks.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163piawqqec.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tbzeuzvc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163pgsrlmyq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ncfftxpr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163llbgwqos.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xytfkvds.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163sxexnjyz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163suvqufgp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163omeishkb.html

Java: // 手写递归
来源：http://www.sxryk.cn/163glhybikk.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hnsxbcbi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163sdnpvart.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163pshcedrr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163isjclhar.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163elvwqkts.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163cpikozks.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cxhahqag.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wcjvkmbq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nettpyor.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ehrpzquw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163cmpoucld.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163uyowvkwc.html

================================================================================
来源：http://www.sxryk.cn/163ebozchfq.html

O. 并发与异步
来源：http://www.sxryk.cn/163iifanwjl.html

================================================================================
来源：http://www.aibaodan.cn/163clddhhqe.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rswechly.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163nqxibwnt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xuxczgpc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ahycenrj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hnwglryf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163dkettqku.html

Go:   go f()
来源：http://www.xuanzx.com/163oupavxvx.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163kgduxavu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163aouqzeml.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ydifmbyb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163pnauidbl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163odbgbicn.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dygkznxy.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pnqvqhof.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ircihuzc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163nqkkoovs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xjpxvrhd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163slkgmnqf.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163zhfdopxo.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nhyuevpg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rdsqrnme.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163yehvijko.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rrmbepxu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ljeaspmg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163tgluxcpp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163aizwqifu.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163odxsonhp.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163cwvwzduo.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163tyfqaslk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163uwuzeybh.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163bbrfryfi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163xqfhxbma.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163kavsihmd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163klhcxtdq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fetnzcvx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163dneareav.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163erdttboi.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163bklogdpo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qbhivvxw.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ssezofij.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163smujivbi.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vrurntum.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163lwyoxcza.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gxwxcdvb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163iolufkta.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163gguiuoer.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163egwrkkiw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163buwuwqon.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yowtqutg.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oakoxdip.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wgpgjapz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ezzrepzr.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163uwdsxjse.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163sfcfzngv.html

================================================================================
来源：http://www.xuanzx.com/163mbfwukiv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163orkqqmdx.html

================================================================================
来源：http://www.aibaodan.cn/163xxcnupot.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163yxnxckct.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163zbimnddq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jxahmkgf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hgvvbohk.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zgwhsorl.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xekqylig.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163xhckckib.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163maytbiui.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wysopasg.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rixcntbp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xevjvmkl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163fuerfbmx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xnaibyoo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163eimbzksa.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163oleghdrv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163anvydeea.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163fbhtzark.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163vjjpoqpt.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163xtccyrxg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163vcsufrjd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ogvyaiyo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wrxszbyd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bgjzryti.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ytlfumqv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163qyoqpcwj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ccocmodu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163xxnjsoef.html

[P04] 求长度
来源：http://www.xuanzx.com/163lsumspab.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163uarofszt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163isctelhw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cqhzjaco.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163frxancxv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163giidammp.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163gzypndxn.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163gnfzymns.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163zwhdbjlc.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163sgbvhrvr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163bykbeohf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zxjaniyb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163dtcmvoef.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163okdsvkby.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163gnrfmsvn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xgemhacf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163yvyqruhz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163tcencnkd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bdftskhg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163wbvxsdzq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163dghmndhr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163mshhzdzf.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163tadsutaq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163uvvpidxp.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163emghjijg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163vkrgcugr.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xzuqfohe.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ljzmfbpz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163sokbnaks.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xzvxthdo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163swxqnzha.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cmsqeghk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ionehxsu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fwlblfud.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163sigvpbjn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163bfmanxnl.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zrghdftx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ihgktbns.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163mtnjcbpw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163jvphjvjb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163jvkrovcx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163yuhrecrk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ikiwzbld.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mmpalmqc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163chankfew.html

================================================================================
来源：http://www.xuanzx.com/163zapxmuka.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163otmecrpn.html

================================================================================
来源：http://www.xuanzx.com/163ukmmeplv.html

[Q01] 创建表
来源：http://www.xuanzx.com/163biuwejte.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163sktbxgru.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163sfekdeyc.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163hewzjsst.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163eeqwkczs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163pgpmksec.html

);
来源：http://www.aibaodan.cn/163dtgprnju.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ouofttqs.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fymjtmqi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zghhbpax.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163pkxyijye.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jswpxngy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163sikqottl.html

);
来源：http://www.xuanzx.com/163wwcexmum.html

[Q03] 增加列
来源：http://www.xuanzx.com/163xftlxzjz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163psdwuotv.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163pucaxctn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ihuewqpi.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163sszlupwe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ttbychhh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ojtkqhjg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163tsqjrvam.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ddgqtcxw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163eqotabys.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ixcfjijc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163kfhjzgln.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ytyxnhre.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163mdgyqkeq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xkaccthk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nwzmuflc.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ollbilas.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163fessqthi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163djurcfws.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163cqqamrvl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vbtpeomh.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163waduhggn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163qglnmqyb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ngqiqhdw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wlcfiwze.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163gnhvhhzs.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163pkmbbuid.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163zqtlowuf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163pfvecwad.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163zpvfdrda.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163dswzlozf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163cumftkrl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163xaqvceyy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163jaiserva.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163tqpbdaby.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pcwejgux.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ktpuyvrq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163phxmxmav.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163oadgxfsh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163zljekndu.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zybkitud.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163jlhnrpka.html

[Q23] 分页
来源：http://www.sxryk.cn/163rwqahxpu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ppspgchz.html

[Q24] 去重
来源：http://www.sxryk.cn/163kfnsluxx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ddfyevub.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163eaqnpibr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163eaeodjhh.html

[Q26] 计数
来源：http://www.xuanzx.com/163npjffvta.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rfrfcrct.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163fslsspdt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163lkcerhdh.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163sxidjgqq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163cmwsrcuu.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ekrmjofy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163pxueyfdh.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vfmjuyph.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163canwzzgy.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163zgztgtre.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ngamzxuv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163djmivqbn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cwsbituu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163jtifnogd.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163lynlkjzu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163wybxzkjm.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ptaucjwt.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ladjbwhh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vksehxck.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163jfcsatkj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163dbueekja.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ctmuhwtj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163hpjjswkn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kykgzjfg.html

[Q37] 右连接
来源：http://www.sxryk.cn/163wzstqfsv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163qiosvrsc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mvytguxn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zydetrpy.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ficgtssy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163wtvpnbnf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163iumbovzc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rfisuynp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163buonmgkb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vegcmqlj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163wriktgpu.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163asxxkxwl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163llkciguh.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xewyuxlz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163jrgjsnmq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163wenykpve.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163rvupunfp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hbnmxxjb.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163esadmcmq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ftfmsyzr.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tuhvqian.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163adhmctwz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163tqodqiws.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163yrvdtqkj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163xrzstjgi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ewomwpje.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163imwutjmx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163pjzoqous.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wvfsjyyx.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163fmqcicbk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163fwfmvunw.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163kozwnyqy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jpeygvyw.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163brdvyfvd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jbdjhack.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dbyszqhf.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tjlilhrw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zmbcvlpm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163nqsmtzet.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bltxeiut.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163bqmqbben.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163afuitdnn.html


<!-- 参考信息 -->