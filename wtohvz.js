外链999!wailian999！

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163isjwnnjp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wvleylgn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163eukjtlmx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163enbannqb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gzoulvfv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163modsysjq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163rzqojrpk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163yyxnwfgh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163klebivuv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zuwxvxgo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lywmfioz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163hncfkvjk.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163igjpdfuo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xnmclnyd.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tmlnqypg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163bqmuvqwd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ysmaggry.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lkkazdgh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jyxnomor.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nnagvcou.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163arvkrxss.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mkwmjtlt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bjufbbiu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mqqaeara.html

================================================================================
来源：http://www.sxryk.cn/163svmmvoyr.html

O. 并发与异步
来源：http://www.sxryk.cn/163mfdwtidg.html

================================================================================
来源：http://www.aibaodan.cn/163alvmkxtc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163cegbpovz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lriidmxc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ywsthqfc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cbwcnhre.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ljpteubn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mimqtsbx.html

Go:   go f()
来源：http://www.sxryk.cn/163utrohzpq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163qrfjcrdc.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163feellyeg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ddesfybc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dsdjnlco.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nkhtokld.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mzqmhlht.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163snsuvjoh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ahtmguha.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163tqjbvvqc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163seweipfx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163rxdbgfyc.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163vntzdnxj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163fehuzwci.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163sirjuwtp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ggnrrviu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pmtkkmns.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163gbceeiiy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163nrykkzna.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163shizuhrh.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163bgvwmixs.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163loynalyv.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163lpyxwfik.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163xofeyfeq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ngzfrqrr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163uzficpji.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jdfealun.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zrjxulyn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163othbjoqz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163saeuaelx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fxzwzzqv.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163dsulhaii.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163bkkcjwow.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zdvciyjv.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ldupmsvf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ktaemtlw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163epgzbswh.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jahheqvx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163cfihgqhk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163kywsxeip.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163necqgswa.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163egfaspur.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rzmujlhq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ahjmwrys.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163krtqhlij.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163wnpmpdxq.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vzuyrkdq.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163xjnykwtw.html

================================================================================
来源：http://www.sxryk.cn/163wmzxuirh.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ibkvbaav.html

================================================================================
来源：http://www.sxryk.cn/163pwqhffeg.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163vkcbtfnz.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vpgbncpv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163pfsgbhjf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vklgpxvw.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fnmyzykc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163gtprabgn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163osthmavx.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zsmzadwk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163rupvehsw.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163enhabsig.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ipfzlhcj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163zsvnatmb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163btthcwzx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163oknaawrx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163jgvopjls.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163xshcsnrc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163tucmuuwr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163gbvffdip.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163mqseayvd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163rbknvmpe.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163jmkupfrv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ynrcykmu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163iqrlzgyw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163vkugaxhw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ctcrbaql.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163dmlwtbti.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163sgnztgqr.html

[P04] 求长度
来源：http://www.xuanzx.com/163dttcabny.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163leqoapgz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yrwplwbb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nrdnmqxm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lohwaqsw.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163iwedwboi.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ppdmluvk.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163zxoukfjs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qndcbeiz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163fdsbblnq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163nhshwnez.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163hyemefrm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163whkwngqe.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163iwhddskb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163anmxprdt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163mswrjmmq.html

Ruby: a == b
来源：http://www.xuanzx.com/163cbhkpjjq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mfgjvoys.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163nublxqhi.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163csiydelt.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ikvdwwkx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rjdsulhh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163eqzdayfw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wthsewxd.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163dyqxoysv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163vporggqo.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163yzykpqcl.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163zguwgeof.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qnnqayvi.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vkakpegu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163kbxfaayo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wekqweij.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163qsrycqng.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163unpvpftt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163enuyajcg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163rbiurjfe.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163diwuscza.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163znwmqjpu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163utamqhcy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mtmaolzz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163hurqjoet.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163kakztvkp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163efcjlhbg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zshmbwgk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jcdcejst.html

================================================================================
来源：http://www.sxryk.cn/163zrdrnigj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163uraqapcg.html

================================================================================
来源：http://www.aibaodan.cn/163avriwmme.html

[Q01] 创建表
来源：http://www.sxryk.cn/163susdbzib.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163mimbygbg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hgyxphlm.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163tdggzabc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wajepnsh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ohetipno.html

);
来源：http://www.aibaodan.cn/163sqdtuwfj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163mrtgmqqv.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163auoalcxf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163uqxhotbt.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jfmrkggu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163gzzsmxyu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163nqpydukf.html

);
来源：http://www.aibaodan.cn/163uaszjxgm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163wqsspjpe.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163pykecjle.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xnegtbsx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163orspovqm.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163vhfosuyd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ozxhvwhm.html

[Q06] 删除列
来源：http://www.xuanzx.com/163swkaqccc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qhzpjjaf.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ptuwuaue.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lihoregz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163szpgtnzq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qczesmew.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163pzxzldhf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163feszwgrh.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163xcsnbfjj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163veqpxxle.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fnzaarvi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163stcreudn.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163whpkbizw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163juuuxtes.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dutdybxh.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163soixkiri.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163eyvrafkb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163anzomuah.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163tsrfkrzu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163swceorrb.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mpckzvno.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163gupjieby.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xfpknyhe.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fdtordxb.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163lbbeylvp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163aqqcogmp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163bvgfqzer.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163mhtxwtsq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qeabcxqh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163kkcatelb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163zixrhglg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163roxomson.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163eeqxqoep.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163zekqzqel.html

[Q22] 排序
来源：http://www.xuanzx.com/163envbpbmi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163spgftuqw.html

[Q23] 分页
来源：http://www.sxryk.cn/163iqmgdoei.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163tyyzdgyq.html

[Q24] 去重
来源：http://www.xuanzx.com/163sutmreed.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163voymrkhr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ievznrjt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hkazbgur.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pwwqoflt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163puygtipd.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gzgferxq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163vskkkwaq.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163petiirab.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xinusgsc.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wxicknld.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163duuqbvqy.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163otgwhxng.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lrwypayd.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ngwyqmpi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hbpgccyw.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hebizsqd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ipiqwfqf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rcvyqwia.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163dhjzaxsm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ibbnjlfg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163mmxotems.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163xphvcrbj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163hjhtcktt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163uckdenxi.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rjycrwjz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zysqsdgx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fnkfjdce.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nvaztbkl.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rwvhcqft.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fgvglmdy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163tspzrhpt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vwnavccu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163aadthybe.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163srrxhpac.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mrhlauzn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vzemrjlw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zrnwqoxc.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hgfoqorl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163bbpwiuzn.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bhkcxyzw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xmhprfqg.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jdfrsvur.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163uhznrqcj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xyfxvhzg.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163scemrdhq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163rkqznjjv.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163cksgtjkx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163rnknqrzc.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nvfonbou.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gtwkmwar.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163uzrykuud.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ujbwlcnt.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163doomenrk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163rfhupmqj.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163fqkzrpcn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163lkoiedrb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163smsfdmnv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163fegcorhj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163wyhoicqg.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163lvvtjosa.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ofxrlccx.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163jsvcqsnc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ldzrwqbc.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163aldzovmm.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163wliiepjo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163pdzjbzhp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mcxphmaf.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163okdgmmqv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dugoawnb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ziplctdj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dkfzejmn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163rlhinnda.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xiodbtyk.html

[Q57] 行号
来源：http://www.sxryk.cn/163joutrhfn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xxwbgijo.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hyrbphsc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163sotcrwqs.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lcqcwttd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163yprkmbiq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xaaifaio.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jnaewzoy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163prjrizpi.html


<!-- 参考信息 -->