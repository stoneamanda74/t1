外链999!wailian999！

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163fzhqsfdl.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ubghznck.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163rjfoowjd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qtqpmgwb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163epxjjssm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163xksiotcx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163asmguguq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163dkxdxjgn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163vwsqihef.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163bljeezrq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163icrfqwuu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163jruxezqg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163fazmscbr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dxfcamkf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wsbaclyq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163rvuwekqp.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163meeubiie.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rifgctoa.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ormgkadq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163irlohamf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163cujdvycl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163zlppmhqc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lajocbyf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kdoqocjw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163afmzducr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pbuvozus.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163xlusqrif.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bmtjigcb.html

================================================================================
来源：http://www.xuanzx.com/163vlpyovyj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163eawltehk.html

================================================================================
来源：http://www.sxryk.cn/163aqypmpzl.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hcseboqv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vnbvuemq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163qiueihsr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163glqyxnqw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163oaylcvne.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163fgfkkxqj.html

Go:   go f()
来源：http://www.sxryk.cn/163xilxkprj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163piuoxido.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rqwquspi.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163pfissrjj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163lpyvlocr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163pavhhhgx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vljvwwhv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163sbtrcdir.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jkvwtqwx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163smglahcj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163scjeigoa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163iigfibcf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163eptebahj.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qabounfg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163riewykxw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mvetdnng.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fktkoyse.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xickgqoh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163nzbuzqfg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163chxzrxef.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ryncvxjl.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ygtoyyin.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ulgzavme.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163lbdihepw.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163kkrieavf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ndatjkpi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163lalgxcju.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ayjyuvjs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163srvvtjdh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163cupgtriw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ftdrpalz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ghdtyhmc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ghbwslyq.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pdsnrkwv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163krzhhqxp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163aiiylkty.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163firnmdjz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163cunumxpf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163segnzqwt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163hgqrfetb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163msuadnjp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163uahufpcm.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bwdhvhik.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163qnvrofgz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wlnwqico.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163obcwtdnf.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163zmsghynk.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163endexmae.html

================================================================================
来源：http://www.xuanzx.com/163vluxapxc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163njqorlfn.html

================================================================================
来源：http://www.xuanzx.com/163kwhuldqj.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mzaznzok.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163xepapaug.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163lrugtzje.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163iiaooeas.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bydwrdpx.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163svoosnyy.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dwcgkvby.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163yvpymiap.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vrnjrwfo.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jpogzlcp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163pqnlirod.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163hljgnsjj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163xbmllovz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163cgtcvgvk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ocupohgj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xzmjpeke.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qyzmwxol.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163lrvjtaab.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163qemcpqfw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ulofbrwb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163tijrooor.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163iqmfuogy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163lxtqvott.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163njupmiuc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jrkwzdfz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163crqwrduz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163xnizocol.html

[P04] 求长度
来源：http://www.xuanzx.com/163dlhajeee.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163dvutkeaq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lfolbycy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zpxbjvey.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ynmsesbp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163qsqukomu.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163pxyyyvyc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ofpcdxks.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163macbdjdn.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163scsvpduf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163yqfzhvki.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163igixgbrc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163npcpecuw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nuwvnuiu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163drgaxymz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163czlmsdru.html

Ruby: a == b
来源：http://www.xuanzx.com/163dwassavn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163oksjqoqh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163zakbkymy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163czcqntrp.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163lfwzncvy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163qbjxptnn.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zllizqkr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163lskfuelo.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ypylxith.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lhtxnamf.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163wrgpmqhb.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163oghciigu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163auypcwyn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ltgbscxy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vncwaxys.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zweibsug.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xqhzppfm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163jhjrukmn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163madgnsum.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163fefmzrcn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qlgbonbl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fnplqkcv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mnleabqj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163nuurczkd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163vhywqjlm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163jbuhqigq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163iuqtqati.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163axawqykj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163uciypjoc.html

================================================================================
来源：http://www.xuanzx.com/163ftadvynm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ukerfzwh.html

================================================================================
来源：http://www.xuanzx.com/163ozlnnokn.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zwmqqgjp.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ikonfgty.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ykofkckf.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jiytzwop.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lynqzljs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ujivcxqc.html

);
来源：http://www.aibaodan.cn/163likrxwvt.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163lkfxazbs.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163krkxibcb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163aegmhlsq.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xjtwpmqg.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163flvmtkrs.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hndnhugo.html

);
来源：http://www.xuanzx.com/163ftwpejjb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163takdppho.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163gfehpesx.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163dpipogta.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163wdaeutqh.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xsjzkuvk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163obltulde.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ezwxowih.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163owrebhic.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163nseqnnml.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163cybotwnz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163pgywjlnj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163cfhhqshy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ataxicic.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qpurnhaw.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163fduvqjmn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nzditwkb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163crnegsje.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jefvafmw.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163dmxovkfm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163vlbowhgd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dumcjpmk.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hylsckft.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163neuhcezk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163xeslkezd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163spbrkzoa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163iummjohm.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163cwcznter.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163wkzresro.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xnhiezne.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163vxfcnhxf.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ybwbgtqu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163laecakcj.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163zytvkkhz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163omldcywx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163bgjtuppy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163idrxkpwu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163iyyldjiw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163vwhagppo.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163fktyydej.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163srgpdiwy.html

[Q22] 排序
来源：http://www.sxryk.cn/163zfosuvnt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jzovhgyz.html

[Q23] 分页
来源：http://www.aibaodan.cn/163nklmfmky.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163dtcawegl.html

[Q24] 去重
来源：http://www.xuanzx.com/163ksstxczq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163raoedsnq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fquvkpur.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ywebtixs.html

[Q26] 计数
来源：http://www.xuanzx.com/163nwhtzlxj.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163juiayrqo.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163mqypmehd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163exsengyi.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163klgekyep.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163whpncgpn.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gvpqqpjn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nrplilrz.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qshifotw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ahwsuobc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163auuwwuyw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163sedogepl.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bsiqlhqb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gckimlen.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163gyolhbiv.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xgbqsojr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163droucluz.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163yaqzcsnc.html

SELECT * FROM (
来源：http://www.xuanzx.com/163pscqpwkw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vgxfpxlp.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ekqygecf.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kgxxsqjq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163douczder.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dadqxyfb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ozjfxprc.html

[Q37] 右连接
来源：http://www.xuanzx.com/163uhiczjta.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163gexsmvdb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163kraeqdgs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163kfrvywcu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rpkgtsek.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163cxsektnq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163frjftylq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163mserapmu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163rvtlhkhw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bikrplpl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163mdwehlga.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163zsldarft.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163rthocgfw.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163odpppbpj.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163nwzjkxsz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pnouwqsx.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vgdmxdtq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dsloqlof.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163cxnuaxxi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163sgobinmb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163pxkyfqji.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jtnmiifg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163jevmvmhq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163duurejxf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163lqfagwmq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163apnzhhmr.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xruiqufl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163igsqiszm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wmvnxvkd.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gikytmgf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163gniqddlw.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163vibuwrxe.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163jeltwjhu.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ttqlilgz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163bwkfnobv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163tvazekhn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163gzklqezk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163bimlmiqx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163gnsdpavb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163cmpnhvgw.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163tctwkpew.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wwiwosdx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dthvcynh.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163opprykps.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ddqeunpf.html

[Q57] 行号
来源：http://www.xuanzx.com/163qazxqhti.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163hxsncskm.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163hbymnfrf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163dwcbvppf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jaopjnnj.html


<!-- 参考信息 -->