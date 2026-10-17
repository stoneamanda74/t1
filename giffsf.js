外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kbuhuzja.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163rpydwnzu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163txevihug.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vsmmnoci.html

================================================================================
来源：http://www.xuanzx.com/163lhodqwdi.html

O. 并发与异步
来源：http://www.sxryk.cn/163knzyxnbs.html

================================================================================
来源：http://www.sxryk.cn/163dhmwkcfh.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lwsucjyg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163lrsajogg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163rdjbyjec.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163vunxxzug.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vnmgcuic.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mcdogiem.html

Go:   go f()
来源：http://www.sxryk.cn/163dtiomlos.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163illpoeao.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rcxjjbin.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163rrmbjzti.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ecjtuber.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163vtajoawj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qscitjko.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vgotvqxv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163sxqfmykf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xqmtsftu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jmlhexug.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163yjutddsu.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163zwoombjw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163jokjffns.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gceyaxmv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163mnxjfduh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kmrgloed.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163yjtelpvv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163uiraqthq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zbxjpnke.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ajdsodcx.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gtbjtocn.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hjterano.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ciyzqzoy.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163lbnwyobq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163gnoiyjdc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163tzieakqa.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kxagglcz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qfhncvad.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wcbwrcbu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163snbjpewk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163yerfhcvd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rtuswbdw.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jtbvomlo.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dhpsmfmd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163jzuvufvv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163krtjduhg.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163dfeujpfx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163vvrmtqog.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163gqmnwtpu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ngcuogpr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163tsjnmexm.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ambktgeu.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163uodqigms.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163uicmudtd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163mpeevfda.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163meumrqvp.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163fjydxsee.html

================================================================================
来源：http://www.aibaodan.cn/163siouebbr.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163gunbjvop.html

================================================================================
来源：http://www.sxryk.cn/163tfzzyhgn.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163vaiovijv.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gnsjmwmh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qkbmgzmb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163edbphlhg.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hbujydqo.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163uhsszais.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163befykjjq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163hzijsqbv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ftykuigj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163mbcbyfmi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163utxteomg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163mmnttxjo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163viwrtuif.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dlbsdplo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pygecvdi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fyfvuzip.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ykbhxqrm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nltarlmv.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163qecmfbop.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zvgzktab.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163kfkunbsm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mjixbioe.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nkmtfndu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163jjcphwzp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163yxqqentv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163iozseshj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163yiuwobni.html

[P04] 求长度
来源：http://www.xuanzx.com/163xtszpkte.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163lqferrva.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rpyfispt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qukhatcg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lcmxcqce.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163vowgzonf.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163cdtiepkj.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mfevuxpu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163snnbeoua.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ihmzqsaf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163qdmbodog.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163yexieklz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qkjqbyrj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gpwndgxd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ekrkxnti.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163vfreyxkr.html

Ruby: a == b
来源：http://www.aibaodan.cn/163cixezpqu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hazpifay.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163heunjlhy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163qswcpwfr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163dktspcdv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wjmmfhrp.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163niwlgjpx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163oekjsxtm.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163fqilxcmn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163zekoridz.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qxaypovr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163woffdlif.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163cmhdovyw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163spithnwb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mmzbfknb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dtodcosz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163wsjjxtal.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hkdvwdpm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163tlfrtsiz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163susbvxfg.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163jjacaalp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163nsmgluoh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163btzkhdup.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163joatqydo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163txhtrzim.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163nowstbfp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163xxhmmoua.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163apkjrxqy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hibwddpq.html

================================================================================
来源：http://www.sxryk.cn/163ytnpniwf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ipxxidzu.html

================================================================================
来源：http://www.xuanzx.com/163hvqtbquy.html

[Q01] 创建表
来源：http://www.sxryk.cn/163skljezfp.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163jsqzbyrk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ylzivldp.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163dmsybupv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163onldspwc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163pgciikxm.html

);
来源：http://www.xuanzx.com/163dmfiehkn.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163bomauuit.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163jaexmqfa.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163epdrtmco.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rtylnigl.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lurebnqo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163yeyxqmza.html

);
来源：http://www.sxryk.cn/163xzeiolhx.html

[Q03] 增加列
来源：http://www.sxryk.cn/163xatodets.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qpggkmer.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163tlitdtzq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mezwzxdy.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wbfppkwi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163etohvbcr.html

[Q06] 删除列
来源：http://www.xuanzx.com/163aydtzbkg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163wzquwpbf.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163nfqdwqti.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163vzlddvia.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qzxwybve.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ywvwrhrj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163jnblcunc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163cohwpdcm.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163phhwybny.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163nrsowifx.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lxbppldf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163blrtunhn.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163mytbkirt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xqaqaawj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163pniswtpd.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163tbortiwa.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163otqoulcp.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163sktbjcbu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163hyayjfku.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163jmfbrnmt.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163qlwuiihd.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163wvxounfq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163pjtkjznb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163lwhaxrit.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hgyzwhuf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zmomgrdv.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163cyfolcfd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163rnpdloer.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163lhmklqrp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163aolfjrhz.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ljdnwqic.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163tzdxvhux.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qkwlubai.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163finadttb.html

[Q22] 排序
来源：http://www.xuanzx.com/163pggtkjrj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jyvtlmoy.html

[Q23] 分页
来源：http://www.xuanzx.com/163tjqfcuks.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163nhwpsxhh.html

[Q24] 去重
来源：http://www.aibaodan.cn/163bcaxunfy.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163shoxiodc.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163zjmgssxw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163opqyrsmk.html

[Q26] 计数
来源：http://www.xuanzx.com/163mmzhzlun.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163nvladhmr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163daisftcm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163plcsyvmq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163uwgqzglx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163tvtiyguy.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163fmufocub.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163vemykcmr.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vwehiqeh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ccguasig.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hvuheckc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163grdhifzs.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bmyupzne.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fqwuyjsl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163neitxlzm.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163vbavmksl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163guwwbpqn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xmeqkkqa.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163khydyara.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163agapxpzt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163dufewqoq.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163suzmckii.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163eyvjtsui.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ptzhysew.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qumsvtjn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163jbylfavm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163okyjkypj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163oprwaaxq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163iwswwrzk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163gflqlocu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vtqjvpnm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hnkxrnas.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ivzxwopj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163sudxplsi.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163znagcjbn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163mzpghtld.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163umnodgxu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163gjylzpkt.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163lrapjodg.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163klwjlasc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163szcscmrd.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rcwzzmjm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zdzywrlm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163favshfpn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163oqxzyhwb.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163kdsuszdl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rqrpbhpx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hcwwvxku.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jdtguidd.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163cgqnwitz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163wfmaaxoo.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163amiofazq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163psmdqqno.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bageorpm.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163afijpfao.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163lcrpfjbh.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163mxpgviek.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163bmmuxxvj.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ijcrociw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163brkahaho.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163vllrqaam.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163sgnijzeu.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163eetmywdv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163iczymoae.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rjrklyyu.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qhsaqlcf.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163hkumrqro.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163uxlsmuuh.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163vqxgyyzr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163jittghib.html

[Q57] 行号
来源：http://www.sxryk.cn/163kyxyvmqz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163qlihvwls.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163powjiecw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163fjkdmqiv.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163sdidclzq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163qdqtfijf.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163cndwhnuj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163fxtyynyw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163bponlqpo.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163gshslroe.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ayudeukp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163fzkxfshf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mpugxdiu.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ldpkqeje.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163dcubqyib.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163qwtpuuxe.html

COMMIT;
来源：http://www.xuanzx.com/163pmrdisfb.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wlhcjhmt.html

ROLLBACK;
来源：http://www.xuanzx.com/163rgahnqij.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wfyommdm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163emwzwqyt.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163agtyuciw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rjgtdqim.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mnzowzvl.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ryleagbj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163aemnbhjv.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163yxkrcjkf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163khnldbrl.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163dsoidvmy.html


<!-- 参考信息 -->