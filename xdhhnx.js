外链999!wailian999！

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ycllazbn.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ilvrurgy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163knoprnjq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163gqplsmha.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163dthwjrhd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163cokpeqot.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163chvhtzjg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163sscpzosa.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hlerxinh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tejerwpm.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qucegmaw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163scnxfexm.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ghyrezid.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xmbrvnxy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163alyspjhh.html

Java: // 手写递归
来源：http://www.xuanzx.com/163aklgoitj.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163bwosrsxz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rjreyqvw.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163izlyxqxt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wckxfigs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163cjsvpscb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163sagrhjiv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jrogvzoy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163glftgvcs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ztvondes.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163hhkavyjd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163yorojrco.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tokuywkp.html

================================================================================
来源：http://www.xuanzx.com/163ngommvai.html

O. 并发与异步
来源：http://www.xuanzx.com/163ijpdoxdm.html

================================================================================
来源：http://www.sxryk.cn/163lfzreujx.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163hgxwkbnh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163uoakqjdm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163aiqsivkr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163afahvevw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163envvqksn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ivwemahv.html

Go:   go f()
来源：http://www.sxryk.cn/163bqsxzrpe.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163mbjsbvxt.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xshmmzly.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163leshskyz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163hxanvczd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163olagszcm.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ailzrall.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163djokwvjo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ipafqdpc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163brqjtdfo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ikiduuwk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163icvhkgjq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ljouszfj.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163upbaikfi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163glbfklrp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zvkpglyw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hqqsiwye.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163nfbvxauj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163pzegnnkx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163uyoiwqip.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ixbdndal.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163oeffurpk.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163rwbkvqpc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163cielprls.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xuaiyydg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163aqohvepu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163xugxxhof.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163frrosuqo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ibgxjmul.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163thjilkqq.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163aiuawdgs.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163mnaxzyzk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163nbdfvjwl.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ceuyerwx.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jjvxcygw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163uyibvavx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hxxnbgdc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163hbqecnvu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ampktshc.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163nfbzoikp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163bnqpfnjm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lmelltry.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wibzlxrv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cfzxgifj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163slglxpzl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163mzfrzehg.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mtjsqpvb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163nouuukeg.html

================================================================================
来源：http://www.sxryk.cn/163rstfdjbo.html

P. 常用工具函数
来源：http://www.xuanzx.com/163pdavyvdq.html

================================================================================
来源：http://www.xuanzx.com/163pwtyfnpa.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163oscmwzph.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163phshuhuu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ivoldmkh.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lrtafsqt.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bzpoxafi.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ojygfdxg.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163pxlggkfd.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wppuqfhy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ewtfhdgj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163pcdgawyj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163rmvzaxqd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ioijkrcn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pudskgjr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pmmjrszy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ylkyxbtp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163yhsebpuc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163mliigfip.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163oiiycnpm.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163nhinbine.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163bajdanwb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163cxvgemoq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qwnogmfb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163piafgomy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163stwrlcan.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163kxqkidji.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jngntcqz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163lgdnmzgs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163hvrdpckn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163uyeekcop.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zyijnxlp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zflscylh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wahapaoi.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163cakkuctr.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163kyzdluef.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163chljqmve.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ffmypaud.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163snvrrtal.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163zezqyqns.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163fxfktoqr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163rcvbxocq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ehotdkjf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fqzdqjzx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163jwzyeyso.html

Ruby: a == b
来源：http://www.xuanzx.com/163equetmhw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xfarrmxa.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wkouvfmz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163eofhmfvq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163kfpgqfsi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pueghkxa.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163eearonqn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163nhqggwke.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ebdivpwm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163zcbpvuqh.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qdyntcau.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163wunxxfci.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ahvulrbw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163tmymmqbn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ihxgstyn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fgdjdzww.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163kvwtqhqk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163zlsmpegk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zjpzebbq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rggvxnnb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163rosjbgtk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163glvcoymv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163dvehjjjz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wncbsqnl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xohtbjfz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163tgeeepxg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ihmenaow.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zusuxqpe.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163wmvpeifu.html

================================================================================
来源：http://www.aibaodan.cn/163vfyifkzd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163atzidfex.html

================================================================================
来源：http://www.sxryk.cn/163xtyslpqy.html

[Q01] 创建表
来源：http://www.sxryk.cn/163rlrvllcc.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163kjtawuhr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mzramvka.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163bncmjgwp.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gtuejzil.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cxmtavvo.html

);
来源：http://www.sxryk.cn/163ymvvlkla.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zraqupac.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163lnwcayxd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163lvtlqutz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163mrsbtrez.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163njogxbaw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163zozzlipx.html

);
来源：http://www.sxryk.cn/163piugcuhv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163klchladz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163jybgtrzl.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ahjhecqa.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zchiffch.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ymgyczxe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163yvjzcwhg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163nbgwwzpf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ncvotkcf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vpchibsv.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fifwwikc.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163aonemnou.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163yosjnutk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163neyicyuf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163nzmtqeji.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163eeikjibj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163dvvhixyi.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163aqgfknwp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163tcrclein.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163mnupxazd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dorboqzy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ggbleank.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163jbpentac.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tikheavc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ojotwnhw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163fkgcskff.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rdkwwphh.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ggwpezpu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163rfpkdevf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jtzybqmp.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163gcgptvht.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163vpszsjet.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163sqjshxvq.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163weonfsrz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163uwfqwmek.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163alnyrfrv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ffpgirob.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163doycodir.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163fcqisbrw.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163wytxyrcs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ykzwnohi.html

[Q22] 排序
来源：http://www.sxryk.cn/163brqhlint.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163fmlwxtzq.html

[Q23] 分页
来源：http://www.xuanzx.com/163pmoppxxz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lqgdzifz.html

[Q24] 去重
来源：http://www.aibaodan.cn/163prlkyefu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qknehhuk.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163vdwwhyrb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163trqtojoz.html

[Q26] 计数
来源：http://www.xuanzx.com/163qsdqeksh.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zjbcsoqj.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163wljwggau.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163twmckwwi.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163vomwpzni.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163nfoidkqn.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163oypkusab.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163obvgyofg.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qerizdfj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hvuyuolf.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163spyaxfzc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163foohvcbt.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ehussttn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jkcdodbo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163lsrapqvn.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dhfjnkvj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163exvwhxvm.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163yqozauie.html

SELECT * FROM (
来源：http://www.xuanzx.com/163nllhwaie.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163sswrnwvw.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163esygpsmo.html

[Q35] 内连接
来源：http://www.xuanzx.com/163misxzrbm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qethsrea.html

[Q36] 左连接
来源：http://www.xuanzx.com/163buaacjaf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hizpybnl.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163jqfvpgui.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163mkvsbpvn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163aqjsbgbs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wfnttsom.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lkisetyd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ijqznusr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163pvcdaddh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tpioomrz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xinaqreq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163sccjejaq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xbvjnmrk.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163pnzfuing.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ctamrnki.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hzgimuuo.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163hmusiybb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163iccpznkf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163nowjjhxj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163znsguwhm.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163flkvcauf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163msaozzlz.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163eruauwlw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iqauwdfw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163accmmxel.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ajjyeyyl.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163lquncwak.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163uosftsxe.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163fzkvvvfw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jlvuxjno.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ubhkgujk.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163dohdhgln.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163wrbynpew.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163peprqdlk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163pixjybku.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163orowuxjy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ajsmnkjv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wbidmyxj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hlepjqfe.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163sftharah.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163bodldiew.html

[Q54] 清空表
来源：http://www.xuanzx.com/163sstdonbp.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163itmlcaxu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163eiqyvwfd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mfutqglf.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163sovbayvu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ivtvyuhj.html

[Q57] 行号
来源：http://www.sxryk.cn/163lfxmeoyt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163flcpnsds.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xvixocok.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ivqofzva.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163bcmfryeo.html


<!-- 参考信息 -->