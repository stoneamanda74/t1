外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163csaitnhx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163yjirdega.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lakeqltp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163obeisyuh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163duscijiz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ickkplzh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163yxxoxpdx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163byfgnhgi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163psvnozzb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163atdpsval.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163exbniftp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163aracsyua.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163irmvvpyo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163oelxeceq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163nttfmfdo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163hydughyd.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163zzhniqkd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163yoamiqig.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dqjhbngx.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wbwivnlh.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dwloxcfv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163selrmnbp.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wtugaknr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163phzrnrve.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163jwxaslbh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rfksxicb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163khpshfnm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dwwqgokf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vkgvmlzx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163gamfqusj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163epfbxphb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bqmfpmpr.html

================================================================================
来源：http://www.aibaodan.cn/163qhyczawy.html

O. 并发与异步
来源：http://www.xuanzx.com/163tavwwcwa.html

================================================================================
来源：http://www.aibaodan.cn/163mebrkzfo.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163mvsrrmdq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163oekwykce.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163tgxdhomt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163orygazqx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163demebxqz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163jxzvhhtx.html

Go:   go f()
来源：http://www.sxryk.cn/163xnaxxgnc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xykqjial.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lhsylftn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163iicgqpbw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163kxdstcds.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163arsgevov.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pakmwrpl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163awudkmfx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163louxmxth.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bpkktwwo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163hqslsove.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163rqgkvees.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qfymtviy.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163adbcmiqy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rcfpxrkb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xifkemkw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rgtccqyw.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163onmqwivb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163inrsntmw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163nwflikly.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mpikgwlf.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163iftulfzp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163fixfjlpw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163hklmcxlh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163nuevpvba.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yhdfcgja.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163hjrnxsth.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ybdsekwf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163xdzcgaeo.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163nbgtfkmr.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163hiaosqkb.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163nntiqoro.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163oafswcrr.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gjvbafzj.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jeujonfe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163estjhxeo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ziveopqx.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163codezyhi.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163usnnimpy.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dnykbdcu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163dbutkoev.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jpkbcnle.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zzysatty.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xpbdsmxi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163xoclvoes.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163uxqulnvw.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qaxkxtja.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qoyxvoow.html

================================================================================
来源：http://www.xuanzx.com/163uzyqrbrz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163phjffqka.html

================================================================================
来源：http://www.aibaodan.cn/163wprxigcy.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163aoqyysds.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gqxjaxxw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163uhqagxdp.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ydjnkgex.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ykatnfsm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163mbcyekiw.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rmwsrgpe.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163rrizsgbx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163idlzmqae.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163spehtlhq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163zorlhqws.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163dkhlbyir.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163vpchpufs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qnkeqjra.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163dgxjeyst.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163znaggqsn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xayzufwa.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rdxhbymv.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163sisnqqyk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163uwiuxnma.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163yvvflqnp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ylblvtto.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ospvulev.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163xhwioogd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163hbmcesya.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zwfijfgx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163gsibqizc.html

[P04] 求长度
来源：http://www.sxryk.cn/163autmbuob.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163phnzamch.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tmojhlcl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zufihxcz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mboswiiy.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163dntctvnb.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163gufdxtum.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ofawkrdo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zyzpedef.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163mklvqqbx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wddieeow.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163msucgazj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vqhvedda.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wwowkpoy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mnaxojtg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xdvjfnhx.html

Ruby: a == b
来源：http://www.xuanzx.com/163livzlltw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163nsdmxeqv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163hrvkfehx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fsmfiyxy.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wjmlvpki.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163caltnyji.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163pwedsfsm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ielrkabh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163qypchcgc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163xnxqmabr.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xmjmpdwi.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163sinhfray.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163aqajqtue.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163jzcahkod.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qialixad.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qeadakva.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zvogjatv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163xujjbbxn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163hkdgsgvp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163dsauqtlo.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ytctkpqf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163thnyjbex.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gdgbfisi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163msctaxiq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163pjuexfnc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163bvhqyeeo.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163otbhgtwp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163oswyofta.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cayuznzz.html

================================================================================
来源：http://www.sxryk.cn/163effohjyf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163fbhkenxk.html

================================================================================
来源：http://www.xuanzx.com/163bhwagptu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163uomibate.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163aniwrlsc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uekirnyt.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ncdpejej.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gpstyvtl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163lvkiolwm.html

);
来源：http://www.aibaodan.cn/163ajuqgabv.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163nbhuxvhv.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163toedxtyo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hhvhwqfl.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hgqcftev.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163fltrxmbd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163jgmumwla.html

);
来源：http://www.sxryk.cn/163lunqxvos.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ztpdysqb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163yahinxxn.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dznmsfar.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163lbyhqnhw.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163leegcyhu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163cyoctavc.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163cynyovql.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163yccpybgv.html

[Q07] 删除表
来源：http://www.xuanzx.com/163blzyrzrd.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xnanbrky.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163yijsofue.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163euotivmp.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163cuxkanqc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163mayzyajn.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jdedphfd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163dunctswx.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163tsatzupd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ugbatzub.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163iescdjyg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zuzmsgnp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dzcztdtd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163eicwgqtd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163oilpfvgl.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163axuftmwk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163eynedkan.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163nercqtcv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163znzxidyy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163eafkewvh.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ikhbrvqc.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163vihjtjof.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163xsdwyeqd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163kjecohka.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163cekutxiv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163drrfhqgd.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163htmquspz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xnieswxf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163hvcgwegz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163wwmilwdr.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ovbllisw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163rtkrdkwn.html

[Q22] 排序
来源：http://www.xuanzx.com/163njjdbopf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163uhkptgmp.html

[Q23] 分页
来源：http://www.sxryk.cn/163paveylyt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163msjlhipt.html

[Q24] 去重
来源：http://www.sxryk.cn/163peatkctm.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pgwlapem.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163snhsmqxx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163btdrbewl.html

[Q26] 计数
来源：http://www.xuanzx.com/163pmbtsava.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163dengbfuz.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163rsnlaoqi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163hkliegka.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nvgwukfv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163dsmtyojq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163menrcmkc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163oeelkpsn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163joltcaqd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hcyracob.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163vwmmvzbq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163obqmobjh.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163cmurguqk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lcxbtsyv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163lahsfbtw.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163fpggaqza.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163smczyfta.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163scpjrxsd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xrbfksuz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163myiuhuic.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163zjiivrmt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163biesoyxz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xjmzvipj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fzrmqfbv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rwolptmv.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wgnkoahf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xtmxswwn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163zfqdapze.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rurbgqbz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163psifbzwy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163bxfshrxn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163szjkmfjd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163sspfnbgb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163iqcecsrn.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163mdhacuam.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163dznohmrt.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163gdlrrzds.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163etwtwyeu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ciomzsjt.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163dtsbonii.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163agsvahwr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163aazwefxp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163kowvhmuq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163vloxentg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163zpwwktrk.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163txnvomie.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vqfbexmx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163auygaxdx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wxatschq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163cbxzcaai.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163znfqyyim.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163lxyjsyrb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163rrsiluhd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163zepedjed.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163odacvprp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163mcaypuvm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ltwlbyed.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163gboejewi.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163dmuglstm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163yxzohsft.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ogbvgezx.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163nrfujdrl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fooulewm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qpjzopjb.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163phqpirtz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163odelhgjt.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163hyrihjlt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ttinjduo.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163plvtvwyh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163pzdowdms.html

[Q57] 行号
来源：http://www.xuanzx.com/163ketscvka.html


<!-- 参考信息 -->