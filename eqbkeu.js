外链999!wailian999！

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163lgyendse.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163shbdcrcy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163axrgwlrd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163eodxolya.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fnvpjcxs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163icygbpbi.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163mxggetuz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mvzozyqf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163lzqoxwgq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zjjwrzpz.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163iskbvrpo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jajwtpwk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163yooboled.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wtfrkmco.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ubbjspwd.html

Java: // 手写递归
来源：http://www.sxryk.cn/163jmxvmbxb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163pahaaurx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163zoxfxyvb.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163oihelfye.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163uwvdgbnt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163fpinfkzw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ngnfylyd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rjmdpqog.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163obsdyjmc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kleprsyz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tozbtuyw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163nojglngt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ugtocxqz.html

================================================================================
来源：http://www.xuanzx.com/163hcnbousl.html

O. 并发与异步
来源：http://www.sxryk.cn/163bsxhyxxu.html

================================================================================
来源：http://www.sxryk.cn/163tniyjfcd.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lryzurue.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xzhkarmk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163hfmmqqfz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163latpajjd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cngnfcgl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163rqyludss.html

Go:   go f()
来源：http://www.sxryk.cn/163jtnqwscr.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163lmupgmhl.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163sfhnqxsy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163qsrlkvig.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zofwbjmu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ndlaqztt.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163avpgxxxq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163htsrzupp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163rekaymvs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gqbnaype.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cbmyowtj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163syhtcvso.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163fpxbgcag.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hjzsaykc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jlvocarf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ljthmlwh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pqvojyib.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163perbmjln.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ujusbapg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163pydhmrii.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163rsmkvmru.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163utxiccig.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163twuzvupc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zvstqitm.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163kfbmiqcl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163uhroytzd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ykgdgdgp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ldeszypb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163abrdjmbw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mmivjgcd.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163pnknnayq.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163fybphlvf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vbeqarvq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163navcdbwv.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gewkcata.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163njeqkyye.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vbejenfc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163nmpkwjjt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163mzoeecfi.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163mbvwnduy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vkuwbepq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163nadxqlwo.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163azbiquhk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cnfhfupu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163satbehre.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163pdfkudzt.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163cwkgoauj.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163menpdhmm.html

================================================================================
来源：http://www.aibaodan.cn/163bcijhswe.html

P. 常用工具函数
来源：http://www.xuanzx.com/163rtrhwyuq.html

================================================================================
来源：http://www.xuanzx.com/163rfxhfmxb.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xozhzpxa.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ymlwrphn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163wzmssdjt.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wwvvpyao.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163mxpvakrn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ozoqqypw.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163utwohnra.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163qpjinbcw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163hsvgiyxe.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163agcvhwfm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163jpczsnef.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163jgkqfiya.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163quzwksyc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163vjoyatfi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zlsveeny.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ltkaaybv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163gbjvcdrm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163lqqxrxmu.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gunnclaw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163dopbdtje.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163knjknadv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ulevgdkb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cqshlkws.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163xbalqvor.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163qvgqyeim.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163xekarepz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163soipalmf.html

[P04] 求长度
来源：http://www.sxryk.cn/163pgrffsib.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163vobsnjpw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jahegonj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bomgkqwu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ilddmfpe.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163duxbeytl.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163reogtwqu.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jjccvmag.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163eqbwprtn.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163sehcrskf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wgctytyd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jzcpudbp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163katqqajj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ysrvasxc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rjahhdaj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163eurzigxf.html

Ruby: a == b
来源：http://www.sxryk.cn/163dpahbvve.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cljwbdzo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163bwthomxw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163puvzntgi.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zcjfbyjn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163fozwykeu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163hywnfeed.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163hgmgpqyv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163sedolatr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kjldnuhl.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163mdrknbow.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xlahqbte.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ypnsnajm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163drkqgaif.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zedxjoom.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163znxfsoky.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163cguhindp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163aoziemdt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163tydgoxnv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163evwzoheh.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163nmkslixo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ajwvmmua.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163wnurqzjg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163aqukygxw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163latnfhxp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163tccrewlm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163bqjfdbyw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163xyvomdor.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163xyfyngfg.html

================================================================================
来源：http://www.aibaodan.cn/163oguxbymf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163cxhmowzt.html

================================================================================
来源：http://www.xuanzx.com/163phsthyxp.html

[Q01] 创建表
来源：http://www.sxryk.cn/163qslgzlcl.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hjvbmzud.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yenilgtj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163bvexsifv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163cpjevwbg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163hjwurltp.html

);
来源：http://www.xuanzx.com/163wzjkjhue.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xifizfup.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163lmtmjtql.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ctqwbgbx.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163cdndqpzv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163npavgwvd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163diakfsfa.html

);
来源：http://www.sxryk.cn/163fphpghel.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dtlcardt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163vpvdftct.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pjjysxnl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163gsfjnfvm.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163iggsxnvj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163mrgkhdzy.html

[Q06] 删除列
来源：http://www.xuanzx.com/163izjkywem.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163rlopoaeq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163bnjeeggl.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163tpfkfjwv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163utyyoxkj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163yfufkkqc.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163aikbncez.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163azcsvxpa.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163hkoibcjg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163sayiiegb.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163kbrolpeq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qgrgkknb.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ghtxzgii.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163gjpmbtel.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163kciegzlq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163aycjjhds.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ysrvaeut.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163sgoreuno.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zvtrrwwu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163fmpdsdsk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hfxdlhjz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bktflwlm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wkrljobl.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163nukshwme.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163tcwwituw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163fbinaelj.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163wasoxjir.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zdyxpmmy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163lomhsxyd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163wxycbori.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163oqelcvoj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163kcingdib.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ulozptou.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163rutwwxpd.html

[Q22] 排序
来源：http://www.sxryk.cn/163fkjiorcs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163cilorteb.html

[Q23] 分页
来源：http://www.aibaodan.cn/163mysbknoc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pwjlcqzh.html

[Q24] 去重
来源：http://www.aibaodan.cn/163yafrkszr.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163nyfncjff.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tyyzchlx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163praxbats.html

[Q26] 计数
来源：http://www.aibaodan.cn/163fwxzisme.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163bhuuxnjy.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163fvqpvefd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163mbsaktne.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dlzzhvwo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163izrrbtph.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rdvxsehh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jnqblkum.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163irdmipmt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tdqyvssy.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163vcghqocd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hilncnhd.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163rznbziik.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jjahhosk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163tvpwikol.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ycbbmzij.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163vmtnqsgv.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163vjqnnmym.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cllcpuxg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qdobilvj.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163wfjjzifk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163wnzdixar.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vfblmjpp.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163kxifmakf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dhqhxnal.html

[Q37] 右连接
来源：http://www.xuanzx.com/163czehdtxn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163wytrgabo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163weirmqxw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hhxpkvyr.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hmbvoksn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ipsktdev.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zacdyzkv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163tqcoivea.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yjbifkbk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163xypceiep.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163lwsvsaey.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163cqaybtsi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163quljigyg.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163yushhycw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163adjlehsr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163amqlqupv.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163pmeyovkk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hfiebfeo.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163mneiaawp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163cnqgmqpw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lltjoxeq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yzcwqcas.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163jbpcrjdl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163yibtwhuo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163kccfijhh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163lgsztgow.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163cvstezod.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163kuiucbzf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163yrdbijic.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hjdohxei.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jmmzorpo.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ibjoubyy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163aqrzdfzx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163eygobnew.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163aziyqsje.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ectbfygo.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163munidteo.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qqurilkf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fwfmwget.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163dhguvveh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qohneuxi.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ujwsfbig.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ekyhrltn.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163fcwhnuqt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hqkboxtj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163lavtevhi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xdnunqju.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163viggmiqf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163jtphkjsq.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163czwszwhg.html


<!-- 参考信息 -->