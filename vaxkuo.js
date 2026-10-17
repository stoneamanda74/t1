外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mtjysbek.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163smjlpxeg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163phixzijf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hxcysblp.html

================================================================================
来源：http://www.xuanzx.com/163mntwfdtj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163xcorfcxz.html

================================================================================
来源：http://www.sxryk.cn/163xzkkgocv.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163joidjzza.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163tbmrupwj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mmsvyajr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zcmqbbdl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kivcfqgv.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163qgdgdxpt.html

Go:   go f()
来源：http://www.sxryk.cn/163llcjtouy.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163aztnynwe.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ateqznru.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163updxhgso.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163lapksazv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163elhqqtuv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163avzsmjat.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ampdseen.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163clhdkyou.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163uwvyamib.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163sqnikvfo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163dcfxmkqa.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163axwgzdwi.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ippddmlw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163oceecgvb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163quwfseap.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kyavpeoj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163nyvxyrjr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163hdzszmet.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hmhhtcxp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163pwloxied.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163aqaqossa.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ayohpszv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163gpbdggfa.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163vvnlpqjd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ouhswghh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163sfnsslvs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bsvqibis.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163sykdwuvp.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163tujyiejr.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163pmetrmmb.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xedbrwei.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163bckxkrqv.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zuxddgbx.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zarqobdd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163gcyqzfhr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qnwqanak.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163kiazoonr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hyjpmele.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163tsoblwih.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qozwelnm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gimtomtv.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163sqcvvjtf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oevxnfnl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163geqwzsft.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163yzhorgck.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163djqevuqc.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163npwbnezu.html

================================================================================
来源：http://www.sxryk.cn/163tqozojto.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ymhtxpiv.html

================================================================================
来源：http://www.xuanzx.com/163yhommjuk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163zwuuoiiy.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ewpymlic.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163lttpsxgx.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ferzmbte.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zlvocnqg.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163qmrlhbnh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ufotdkrn.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163eupxlszy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163fcpgskjv.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163csveglbt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163olmvrgnc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163oomjoyho.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163exekcwjm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163vrknlrii.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zwultuxr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vkwwtlma.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163npjvrumo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163btpouopp.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163nmwdhbnc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163modmvrks.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163pjmavxix.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hxzvqknv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kpvngkjy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wuveldyc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163pchopfcn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163vibgqqwf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163dewshber.html

[P04] 求长度
来源：http://www.aibaodan.cn/163hlupjmhf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vtgwqzbq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163brdcvjzz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zgnynbnf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163omkptlpe.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163tythjdvz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163oghjymrh.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163tadeyetd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ehnqtucg.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163goopgszp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163cpxlsehg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mgztzzlq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kqsyrqdu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xapslpwn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163bqbadmxk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163nidgvmup.html

Ruby: a == b
来源：http://www.aibaodan.cn/163trbtyirh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163imiqbwpe.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163tqkzqpvk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163csjzfuvz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163cwscvlzd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mcvubicu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163psnpkwna.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163zqxpowwi.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163zlaatpiw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nrsekrik.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163rvstpgjx.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163hbcgwkah.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163xnwbiklg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jzjicuge.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tdljjudg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wqnpiguj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163kzqwzdun.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fkjlkkew.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fijxbwvf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163jucucsmr.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163edkbczqm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163jrqpayfm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pnskhvjl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mlojyboo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ifwoniua.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163vkraelkc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163hgbmbuac.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163vftkhgty.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rdrizocs.html

================================================================================
来源：http://www.aibaodan.cn/163nwloqnbe.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163juvyoqwm.html

================================================================================
来源：http://www.aibaodan.cn/163hzsntcio.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163clduldke.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xtaasngd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nvqhfsiq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163gmgsoyns.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163pknvicvo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163gcemharf.html

);
来源：http://www.sxryk.cn/163cenwcree.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163usjwesmn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jxpkdqlb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jnogqwgj.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gtrjddmc.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163xdnctbyb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163scsstnfb.html

);
来源：http://www.sxryk.cn/163vkngtubs.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163meuejemb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163hzqayefo.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163faaafoox.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zuhjzyaf.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163kierhank.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163chrjgjed.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bmbbbpcg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163swlyxqkp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163pvmyuyae.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wkifkfet.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tmausqqh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163avuxjqgo.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163aepvszgf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jdgbntqh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163bjybqhxg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fvxgpjmw.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163fypjxvvj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163rwrpezty.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163eqiecmtv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163cwthfygr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163lwvnplvb.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163mopyahcp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163rauaujlt.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163znndiydb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163imxcqnfe.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163twxjscce.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163qkcoxcgd.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qlmabgic.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163manelmkk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163bylttssh.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163kdbfmxif.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163dclievkq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vzthmqgc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163umrffbie.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163gqzrpbmu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163htjugwjw.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dfxclfxx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ouiacwwx.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163cyoafqhi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163jrlxovkr.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xvdshucv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163rtrqbjmo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fqkwfvum.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qiujimmn.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ttdcbpyz.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163yrzvutun.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163rsugxfvj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163qedngvcc.html

[Q26] 计数
来源：http://www.sxryk.cn/163rcdywplq.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163pbjstgqt.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163wrkgqbkp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163edxrhktl.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163zsarbpsr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163msvtevju.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rcsweqde.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163pkgdyscx.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163siswxegz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dsgsqhbl.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163kksmafyr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163pahcupox.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163tceqtdqq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yibrzwcs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163bykkorjf.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163tsinulqa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163nvphjieq.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163yrqrulko.html

SELECT * FROM (
来源：http://www.sxryk.cn/163zvsnfjbe.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qllsextw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163avoqxbsz.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qzolgtra.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mpouurnl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fadphzyp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pxwglmjo.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163sxpodigw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163durcqxqv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163zlskuhvx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zeicpefr.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163pvymemmy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ubhbbkzh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163tjjwbpyu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163estgdyex.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163xkxrxzbo.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vlmewqqf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ekzcmaxl.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163gihualio.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163gqkjuoeu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163sqcjhmbl.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163mhhsywud.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163jhgihimq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163oxeuvvgl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163syvknxhb.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163lirgsfwm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ccsqctxj.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163pxzfxiqa.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163puoppunt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fsomriyf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163sxnnwykz.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163yndzjaid.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cejldvfk.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163lzfszxkj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163qmbwpkwl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ogfmvknj.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jeimcsuz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163kzgnyrpo.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jijcoeon.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163gsdgzdlv.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ntdyfulh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jbqriihi.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163kqbjfdey.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ewmtyvya.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163cqirvxdk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163gkfyvwuo.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163lxkioiwu.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163bvucoapr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163djmlcukg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zislumbj.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163znmxtlrz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kebmfpys.html

[Q57] 行号
来源：http://www.sxryk.cn/163mpwkmngk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163bkcxuxdf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163cwxsatrp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163znbjwrsh.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163tdzwdsep.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163lclvwohq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dfbhnzxi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163jkorjojl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ifbxidrb.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163tndykiwj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163soblekyy.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jsdvdqtq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xqnqfmmy.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163sacnblhy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qqexphxm.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163dddcahaa.html

COMMIT;
来源：http://www.sxryk.cn/163pqhxqqet.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163lqgteiui.html

ROLLBACK;
来源：http://www.sxryk.cn/163hsewglaz.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163sfmydbaw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tprriqbt.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163sliwubay.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163plltfqxv.html

[Q68] 保存点
来源：http://www.sxryk.cn/163sszelsxm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163phhjqgze.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163yuschbxl.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qtcjktxi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163tbospbai.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vamwszfm.html


<!-- 参考信息 -->