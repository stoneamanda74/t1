外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163btdxdkpn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163pbuiqalp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163haguhjqe.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kuvwfatv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163gpzizsjj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mcsiczvq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163sbbjbqmz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163oejhnmic.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163lmsjgblv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163xgzaktai.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ltwgrvax.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pkgzbygj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jdajfyck.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163zsmwqnum.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dlumqdso.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163tccjctbq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163bqolddts.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dwnlwvjm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163guiyvpso.html

Java: // 手写递归
来源：http://www.xuanzx.com/163zdvldjhb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dzworevr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163qghhkltt.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xlxwgvpz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163rrkrtyzc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ribejxfq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163mviwnuty.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fjnukniw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fshvwzee.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cudnbrnc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163bupelvvm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163dyjtufmw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mxaxeqkp.html

================================================================================
来源：http://www.aibaodan.cn/163nyjztuah.html

O. 并发与异步
来源：http://www.sxryk.cn/163dyjapfbx.html

================================================================================
来源：http://www.xuanzx.com/163ddxdamnm.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163tsaysndp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ytleifyj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vwuyzhot.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163fvjlhghi.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ysphzuhu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163okivabae.html

Go:   go f()
来源：http://www.sxryk.cn/163ytmmahsd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163musaqhei.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163scbtioeq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163kbftwuyr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nvqmcpxh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163sdmunkcc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fitnitcu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qvjrstsk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kwajztus.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qqqkjyzb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163yitvmszs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163smnwfxgq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163hajncnyq.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fxifrlad.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163eyirgtvq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163gtbdmpch.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jpgygqfi.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163dkuynqyz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163iqkreghi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163blzsgnra.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163igvyeind.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163idhhguaj.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163gwdakllc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163iyxkaowy.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163rlhkyyuw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qhsncmxx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163nzvrpiuh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163nefkkqly.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163xgnwtqmy.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163kgekxtle.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163eoigyodf.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163owrnivcb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xhjukokg.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163sdlwuriq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163itqlyvky.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dtsralvh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163dplykkiu.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163xaedixtm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ghghhdwd.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ggrhdrlb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163kxhmchlm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mhkhfesp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kyooyich.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163umlznvpx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ddelaext.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yhfntdbn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163debhrkss.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163xyqjqwar.html

================================================================================
来源：http://www.aibaodan.cn/163jvbaqnrr.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163fnxokhjb.html

================================================================================
来源：http://www.sxryk.cn/163vifyftni.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163aqrokopp.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ddiwedhy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163bqkkeayw.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ksxwzfhl.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vqchofuy.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kozsdbrv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ildkwhdx.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163rmkuqmtl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xpqyfdxw.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zujrbcfw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163phqaxcwq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ryxpxxma.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163umfumpck.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163zjmkdlsf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163kbjhwtqc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163hpgilshe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qwpjfszw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163uqaqyrfd.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163kxmkuakf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163lohyqmhq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ufipotim.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tiloniwc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kpvinqhh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163tafonyqy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163plrhckjs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163wpkjlvvl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163gnasieiy.html

[P04] 求长度
来源：http://www.sxryk.cn/163cuuqxzjc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163dulcdfjc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gjjncsgj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ljuqbcdc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mzthdonh.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163znhcuqdw.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163twtszxrr.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tgzhldtr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163bjlatcat.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163xwugfqqc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163mztfmcjh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163cpabwcjx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163zpejphgd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ycwngbkt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mnakioyi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163lnovvjub.html

Ruby: a == b
来源：http://www.xuanzx.com/163bhjfnxvj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163lgobzmgb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163lnudubma.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163htrdwsxk.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ggejoulv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cfbpaspy.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163dfaycktp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163vtqewdmg.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163lkjhkyix.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163yqmqsqzb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163fqjaodss.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163gugoqkqn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163tekjwulg.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163uuarwtpw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hefsmlai.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rhbhsoof.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ypwiaver.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163urtoerwo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qayfykum.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163hqujyrmm.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fkhiddtc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163hbfjnekh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wzjlnpgj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163qszkdkhv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163bekdzyts.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fhdzxstj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ngtqhvst.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163lfvsrskb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zygtffcp.html

================================================================================
来源：http://www.xuanzx.com/163ygksfsaz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ywomaviq.html

================================================================================
来源：http://www.aibaodan.cn/163qmcrfcev.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163yeosfrjl.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vfjdgnfb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hfcblefy.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ceeutwnh.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ejckambm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wtkgzlaq.html

);
来源：http://www.xuanzx.com/163aflpqyng.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163rwqjlxco.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163cpxrhebm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wbfngvqc.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xehvnlhl.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dosgabsd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163qqhgvcja.html

);
来源：http://www.xuanzx.com/163tklwukzz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163cznxvnhv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ztzupksn.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163crxwcvil.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ickjusnf.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163gbmvzsxj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163nigjrcpl.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jnicorvu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qlnzlpfv.html

[Q07] 删除表
来源：http://www.sxryk.cn/163zlpluiaf.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lulacwwp.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163lxgonehs.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163jfybwinu.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163lgfpgauw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163insqbyyi.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163wnemldzk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163smspluor.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163cqnepkyj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163wmufthwe.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163znnvpqjk.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163mdgubwpj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kpbenvkx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wentnxtt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xdsfbvau.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zpnfugvt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rbhdjdji.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163omkedljj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163wpsholns.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163eezrwfba.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163gxegtlhh.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163currtyai.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163grllpmbb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163dtqkcgfz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163zqvyxbnr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ahvccppz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163bmdfhqvs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pxvscabu.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163zfrcdrft.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vwrylezv.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qxayrcbn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ehppoauk.html

[Q22] 排序
来源：http://www.aibaodan.cn/163gfucyzel.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163mawxmbff.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hnjoelws.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163wyctwbvo.html

[Q24] 去重
来源：http://www.aibaodan.cn/163wyohkcsl.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163jvdeakiz.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163uaprxnha.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163fioppplb.html

[Q26] 计数
来源：http://www.xuanzx.com/163jbrarklu.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163nqmmqwjz.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163zeyuhfms.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163dfffzuax.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163atzkellu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ylhtodcv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163kwdjymlf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163lmlsgsnj.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jzagcdaw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kyzjvejl.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163vkzfvnsz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lksdjoyu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163bloefthr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163piyrvqkf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163wpeoopiu.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163nwbyuvea.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163urormqhd.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163cbsshjrx.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163bokeavle.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163daukzzac.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163jwbtwiyo.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163mnygeepx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rnettmit.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163pdrvyeht.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163oxsgudhj.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ogzcvhfh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ioxhwhwx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163gxrbcqtk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ghmrizcp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qisjpmsp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ektksfsn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wszxxoog.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fvhxydzp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163njwdmwds.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ksblqklv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163niemfswn.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163nyoehmae.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163uqeqcmih.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ckieybjm.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163pwmqwvaw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ymqzrcxb.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jmlvcjia.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163nqxzsckt.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zlhfveok.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163keevfaer.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qdrmjvzu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qbyjcgqe.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163zpggigvu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zkctjglp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163tmlgcans.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ggojstcx.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163buryttxe.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163krofgvmo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163hmqdqxtn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163auinuxzl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163mmjqtmqv.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jhzcwsvs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163cdimrvsj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163vcmsusmc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163afczicdd.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163tebfxbey.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163nsgpoqnh.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163nmzpcevt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163byulbmgx.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nqifanfy.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xjazaknk.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163qgaburnq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hfihseny.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163uruzikse.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wmtwbrzj.html

[Q57] 行号
来源：http://www.xuanzx.com/163fiymhuqx.html


<!-- 参考信息 -->