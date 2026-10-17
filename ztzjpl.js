外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163zpumslsn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jxwttmks.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163rsmnhybo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ipqkgbat.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163htuufimm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hmdousis.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163argkmsgm.html

Java: // 手写递归
来源：http://www.sxryk.cn/163uedsjrjs.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163mrdfzqsn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vamlqvcq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vxvvnqtt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ppmysfuz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163egaahanz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163bnoosxkk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jutlxrqh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ftebdjer.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163juqkulge.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163zfqiaeql.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163gkatslaw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ieeeinra.html

================================================================================
来源：http://www.aibaodan.cn/163yqvujvvx.html

O. 并发与异步
来源：http://www.sxryk.cn/163ggyuqolv.html

================================================================================
来源：http://www.xuanzx.com/163xohvuqkf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163hgrlnkzm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163skgkjola.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gpsgyxtr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163foofxnku.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bbpxagkt.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tklaqcgi.html

Go:   go f()
来源：http://www.xuanzx.com/163zefdgohn.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163wvxpucfe.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ncuyzcvm.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mgfhyeby.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ieilbelm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163lljyexpz.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dylovtdq.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ybpnzswf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rismrehv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ynbdnkmz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163aavffmfa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jdefelgf.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jurmjlpr.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163wecyfsux.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163lfpudjhk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vvplusnn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163eyitrxsl.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mtegetse.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163hvzlbnjz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ctoncgdo.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163rbsrgzeu.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163vlxpayro.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vdmkbgnl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wsbbkzld.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mozzudpp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163wabxsapj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163dufjjiuz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163odzctike.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163yqyiwaxc.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163bncihcjl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163yorusbiz.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ujtfnzad.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163lzgibkom.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bfvnsiff.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gyolkwrf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163hhlmevet.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163hluzlcjq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qmumrona.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163wujioqmq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163kpmqvvtv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qxdbjfzs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mngdwulc.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lcjgbmld.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cfsoqnhj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hgskmppb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163bttjnunt.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163omzfsxiu.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mdmsujbh.html

================================================================================
来源：http://www.sxryk.cn/163nsbbejuf.html

P. 常用工具函数
来源：http://www.sxryk.cn/163qnfevfug.html

================================================================================
来源：http://www.sxryk.cn/163aqrqaxho.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163diliebvh.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xsauowzf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ovpjgveh.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wihzojmo.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mhkrjawr.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163egawpohm.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163nacuoefc.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163jcmpauxf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163bbzuihjh.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lersszjc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163nysrxucx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163smhzkpsz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163lgxqmbbh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163vzwkhabp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163symfhvrl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fpxrdfkn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163coetlhca.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163kuseipdb.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163njnehdtf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163rjqbqduo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163zcgoapst.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xzypbaao.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fyrzjrkv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wiqzanzy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ktposxop.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fauafakq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163fxqyotjg.html

[P04] 求长度
来源：http://www.aibaodan.cn/163atbajavy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zjxfedlj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yavmxrtm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kbtqhzyt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163iuaqabmb.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163dtoaywru.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ssakstnf.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rwbnuvte.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163yblstfps.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ifpcugkf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qbsaqvdp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163wgjxwlkf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kdwpfwac.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wogfbtth.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163iguvdycq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163zudiyhnj.html

Ruby: a == b
来源：http://www.xuanzx.com/163foqqrmfm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163mkejrzni.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zbeggqiu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163lxgoydvj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163sgewmfdx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ruqkhycr.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163qzbsdmfp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xebgbcao.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fygmihst.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163onwtjooq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163notcsoly.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ojcptqxl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163oibruhnm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163eincttbg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wwarqgzv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bbmawayv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163tkfighba.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163talisdqe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bnpelovj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ehtuwjfv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163izlerqar.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qpkhbpkp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163idplrmvk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163endjkwpk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dieuohde.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163fvewvyws.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163mwuyohrt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163wesalnrb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163szggeqsi.html

================================================================================
来源：http://www.xuanzx.com/163jullblyt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163zariclzh.html

================================================================================
来源：http://www.xuanzx.com/163dnvvtrgz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ezbwgvkz.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163nektsqkr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qxtrjiyx.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163fsapgnom.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163yitlfneo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ygxifvvp.html

);
来源：http://www.xuanzx.com/163grcjdhkx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163gzrqzsdf.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163mdreawjv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nniszskz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163laxiwonk.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lxumsuud.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ukjwkbqp.html

);
来源：http://www.xuanzx.com/163qyxjtpbo.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hhijexpx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163akclquaa.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pikkwsvo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163rlgpixqb.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163pvlxbell.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rvasfnun.html

[Q06] 删除列
来源：http://www.sxryk.cn/163yvdzgzba.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ffzasnex.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ppnihoah.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fjqtgtkc.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vdyznkyp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163cxajfkcf.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ulxxfslt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163omcmlnhd.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163nhkuvhvx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163sbknjaff.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163crsgcpzn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163bipdokpz.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163nhzockqr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163bbvpfaih.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163sjgzpgmy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163rhvmbkkt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163vwtthbcc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163wxrnwvfq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vzsiudid.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163vhjspaeh.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163htpmnaza.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163xewhihfj.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vockoqox.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163oqyvfent.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163gnhfjitw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163pzsjaljn.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163lmfkmfsl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163paftmppk.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ffpmbnaq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163skpcbimt.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163jjetfsge.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163fjarcltr.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163abqihtjk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163hfijncow.html

[Q22] 排序
来源：http://www.aibaodan.cn/163nhasxrrp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163wkzavdgv.html

[Q23] 分页
来源：http://www.sxryk.cn/163pyzkcadg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163mqmkjodi.html

[Q24] 去重
来源：http://www.aibaodan.cn/163hyqqypyu.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163wyoelzgo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163yipuxfjg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163thdgdwwz.html

[Q26] 计数
来源：http://www.xuanzx.com/163lswanryo.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163cvnqihio.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163jvqsvbdw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163fyxxputx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163fknkyhfj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ynxenirw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163kyxioqlh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nznabflk.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163keooedwp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jylhyeps.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163dlwtdtwp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163disrokxj.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gxlviewt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163icjmlrme.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ugcmclnn.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dcclbele.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163fmgnbssk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163zzedjwzl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163pqjjliyr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ijoadfoo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163znusupip.html

[Q35] 内连接
来源：http://www.xuanzx.com/163cxxsasrc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ywtspkgn.html

[Q36] 左连接
来源：http://www.xuanzx.com/163iukbvanb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mihrnvra.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163rcyyszol.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qwaqclof.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163pfhxkrij.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163fzxapmkh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ydhhpiil.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vhjmsspt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qchgejhr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163effirfhl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ybtoivgd.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163uzmrwxyl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163pqzyxkym.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163uxdwsesm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ncpzhnmi.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gavwwxoc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163pbdozivg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163asuhdeer.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163eykvkntw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163yfhbsxiw.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163apojfewd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163vpxtxuwe.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163kgfgmrrk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ilfxxspj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163itvzwhpp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zhkrdfxn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163xbgswwzx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163fiuihbua.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163dyecwixs.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163gvtbuqcp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qnpajcef.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163dmeepwnn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rniqiamo.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163nrzyezfj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163hsrmwlxg.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163pbupvkyq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163pxybufaf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163bavtofnp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fcgmjgwx.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163aaumyuxo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mdsexynb.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163gmamfkdq.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163onuenzdm.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163naxtuvxi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163lhnbivxd.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fuzmkhom.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163wukxbztg.html

[Q57] 行号
来源：http://www.xuanzx.com/163jfndfefc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163krsdawes.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163eubgjvbh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163amczwftt.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ldftguil.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163uezbvrey.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163sabnxtwy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163uzhydxaf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mubownuz.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163yvfyepjv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wxgcoiva.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163akbzshpj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jizpvlxj.html


<!-- 参考信息 -->