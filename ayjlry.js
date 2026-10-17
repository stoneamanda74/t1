外链999!wailian999！

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bblcigin.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163thikehdq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163pjqcviji.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163neymxeef.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163rjczuqmo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nftkwrbg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163abvsawxm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163kvxyryfl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ihkoirlo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163rldezilk.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163sylzyqru.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163pbhjdfsu.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ndrwvuqc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dzjzzcyu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sgbhzcez.html

Java: // 手写递归
来源：http://www.xuanzx.com/163wymfcahf.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163cdgwwzhh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ymcjgcyq.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163otaxsers.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ogmmuidk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vgddcbnd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dpqvussr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dusupgiq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lbhqbrmq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wdpfravd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163uanpetxs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qxnstrko.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cxwohbuz.html

================================================================================
来源：http://www.sxryk.cn/163wszqizzp.html

O. 并发与异步
来源：http://www.aibaodan.cn/163arwoaggc.html

================================================================================
来源：http://www.xuanzx.com/163rlvsqvhh.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163gwilwzno.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163dwiqlkwx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qywdclmv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163mkqkdvoe.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163eseizcwd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163klpfhulp.html

Go:   go f()
来源：http://www.sxryk.cn/163fhmbjftp.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163owtbuweo.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163waokuznv.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ixwubrly.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163oxiisurs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163huafmozz.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rsvrqgsi.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rswzdtwu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fdglzofh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hrbmdmkj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xlfjtiuh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163aunghviv.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163dqssdsgq.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163xotnrmeu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163cngyygkt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163jdnabqyg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kofzgrmn.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163bxwulmcd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hgbswnah.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163fzawjcff.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163rfatrafq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163hurizkgs.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kmxojnla.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163axkfuuue.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163kmruavrz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163todebzrh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163lyfgazqz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ljrwqier.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ugqjuvxu.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163maccbaxo.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vhbcelbe.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163buelnbbh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xsrsoitq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kodmchba.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tsvhyoil.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ahojflmu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163umgsefup.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dfmpxohj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ugmldkab.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ruhsulao.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163tlclnttv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pytjrxyg.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fasuhdvc.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uofbxgld.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163skrgiwox.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163yqkxvvbj.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163drjgtjih.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rdveqpqp.html

================================================================================
来源：http://www.xuanzx.com/163grfiiwyw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163yylsqjoa.html

================================================================================
来源：http://www.sxryk.cn/163xtkejwog.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163loshaitk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163amdibidv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jztnrpuj.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163otxefikn.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jioayenp.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163nbutrtwq.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163lmlnaezi.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xuyfpucz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jrwjqxhc.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163bbpkjvvh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163irxsppis.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163uphflbuw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163zqylnrly.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163uooyppmj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163uylkcoyu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mpwgtije.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qsyejoph.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qgrikioo.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163psfnmyql.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163awbkuuwl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163skjlwabf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163amywyinq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vcmxthfr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qrhjphyr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163hbnfgpah.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163cqqjozcw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163pdwdhhyv.html

[P04] 求长度
来源：http://www.sxryk.cn/163stkqkhgb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ytajfwve.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jryczrbt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163roqizomi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163adepspfg.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163iikxilol.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163sybsemmo.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xbhsnwcu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tadvpenr.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ebisvyzo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qdyygngq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163weucfqmc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163izwpdzxt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ffrjebna.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163gjsiylfy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163cfkamqbk.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ksjtotgp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mmndryhk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163uqkawibv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163mkwgbyag.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163nwanskhw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163plfhrwze.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163yaluoeou.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wkukjymh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163emirkuuw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163uksqryda.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163pbxozqkt.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ozyytqyi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rbnaigif.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vonzcooq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cbxcksas.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zytamkuo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zuumlhpt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vdtidgnb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163pvszqgvv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bwttktuq.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163sugrrrtw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163habxspcn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163nfldyjsv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163rirrddcm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163yddkmxxh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163lojrpoys.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ceytplgz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163mdfzyjvp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ejzzqtcj.html

================================================================================
来源：http://www.aibaodan.cn/163ucvzdjzx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kesmnalz.html

================================================================================
来源：http://www.aibaodan.cn/163uvwqxkjx.html

[Q01] 创建表
来源：http://www.xuanzx.com/163bitfgsxk.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ywydqnpj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wnwymipx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163zjkwniss.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163cskbqvaa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163guwezfkk.html

);
来源：http://www.sxryk.cn/163ljcjvnfi.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ylbxpwzr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163eqhplpqw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ykrohrfr.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163udxrkqso.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163yhrusobz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163grtameiz.html

);
来源：http://www.aibaodan.cn/163vizjtlgk.html

[Q03] 增加列
来源：http://www.sxryk.cn/163akcjndpp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163bsilwqdp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wtudsjbi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163eztuwxrm.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ttloqqgw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wzmfqkmk.html

[Q06] 删除列
来源：http://www.xuanzx.com/163zhatmjty.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163jpxchinj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163rrhbxbvm.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163oizktgwz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163socvbpvt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mihufwps.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163agtrtheg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163usdrgate.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pmspklhb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163rmchaiwz.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163cxgxlozj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163nqsostks.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163dixclvib.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163nynmmkyc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163bbjybmoi.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163gckmmelx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163atzryzlg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163bjlngiqv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qqonyqta.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ahngowvx.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163mvxlsrfh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163mreccfdf.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ogowdeou.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ayguheyj.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163osluaqrj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ziebnlwg.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163znxanjvs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163xkgqnmzt.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163horovccd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xsijvyvp.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163rmptflgh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kblokcil.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ytugyjfp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163wkgznemo.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fwlhyrio.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163mgtfiycp.html

[Q23] 分页
来源：http://www.sxryk.cn/163dlqaiphr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163xnixmhkb.html

[Q24] 去重
来源：http://www.xuanzx.com/163enebphry.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163vmbimdon.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dmkxqkrx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163pgarjyla.html

[Q26] 计数
来源：http://www.aibaodan.cn/163utskwcxu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163yhyxebil.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163dtxdfacr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163zqigelor.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mzoluuky.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ehhtnjmb.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163olnsrrkf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wvqlgxsy.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163obygghfb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xfvebldk.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163txntolip.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ynnujxkf.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bbcbhakt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zcpesddc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163pkopanpa.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163upeylsll.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163gecjcubj.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163kfhpawlf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163bbyjkrqm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163locjccos.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163rtxuqdih.html

[Q35] 内连接
来源：http://www.sxryk.cn/163fkvubjyq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jpimgrmo.html

[Q36] 左连接
来源：http://www.sxryk.cn/163aytwzlto.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lzriuarm.html

[Q37] 右连接
来源：http://www.sxryk.cn/163wugqkrem.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163fmnnpgqb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163njagceel.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163shlsrvaw.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mghbjfra.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163phuwfslc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163iqgxxtas.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ybsbzxti.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rdrqxbhz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163vrwyqiun.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163qrewyuzv.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163rsvmdyxf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ktvuctng.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163mlqpjkax.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163jeilyyqr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163aetdsudl.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163kapettmv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163txvpfmkj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ypakiozd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163myaobndh.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163gkaqjmuo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163lgdspihh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163daizritw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163oivahbgi.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wxqrrwmf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163lcrynwlb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163mfepheni.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jbapmjnd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163lzjffuje.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163rszfknkj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163rbxnmpbx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163rhikijcd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163gfjwpdkv.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xvrpuljn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163mvhwsiuk.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rojcbffr.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163imsccmmf.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vikbxtwq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163anjuyltk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163pnqhxcni.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163xlgqpffy.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zvpeinda.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163xagwkcko.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163cbywlsww.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163sdulriud.html

[Q57] 行号
来源：http://www.sxryk.cn/163cbujowju.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163oddqszob.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fttarciz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hedqfoeg.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163pcxvqlpz.html


<!-- 参考信息 -->