外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163avgcspmc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163uwrqjjou.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163byqoidcj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163horappwr.html

================================================================================
来源：http://www.xuanzx.com/163ocaiazuc.html

O. 并发与异步
来源：http://www.sxryk.cn/163kyprdvbx.html

================================================================================
来源：http://www.aibaodan.cn/163lvfhybfr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ixmyeabt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163pxrvkkrl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163imprgpeu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163nakdcsjl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rngbedlt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163tcyihlqu.html

Go:   go f()
来源：http://www.xuanzx.com/163zatgpoyn.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xhlybyjh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163evqnemhb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qbsvnxng.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163gpzdmzmw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163hytfvboo.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tchmfwqa.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xvsybljn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qxmwvydt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163tdvqjypv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163aoghcuhx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163vicejslu.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ybvfszlu.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163cilxogrx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163dkrtonbx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163cwulfvgl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163sfnhscsg.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163pnbqsmhw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163epccngjk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dauqfcwc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163akaulqlx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ikclisxc.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163wwpylttt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163yicxbwwj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jsgnzfqh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163qmjvxfpm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163sklqlxee.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163xsnclbol.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ktraacld.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163pljfmmwg.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bzngeiyx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dyybamow.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mlcxwike.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vpxpwffn.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163skufyptl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163wgxkbpjx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163sqhitlms.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163lievosmy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163eloaujto.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163pcrgluzy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163xbvxmrwt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163fyiyibza.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nqpapiqf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ntumwdvw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163uwladdzp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163pefuibkt.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163phwgmxch.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163issdjkkl.html

================================================================================
来源：http://www.xuanzx.com/163zohikwvh.html

P. 常用工具函数
来源：http://www.sxryk.cn/163shgyvtlg.html

================================================================================
来源：http://www.sxryk.cn/163jujvrqaq.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jbyvpsqp.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163mcacwwgb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163taqbqizf.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163preofmqu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ageuxeru.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163iganqhzy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jbpbnqrl.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163jfsoabxs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163zyzajeqe.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163meqcvmng.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163obqknbvz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zaarjwsm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163xxguglbs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163rrletgtj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163jgvcjknb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163bxxqujot.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163egmdhzvx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163athwqicw.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163omdurotl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163sgnunlwi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rukcmavn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163piefjsno.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cwgkwiym.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163kzcueyfj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163czrtipgi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163xygysjbn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163rojfaebr.html

[P04] 求长度
来源：http://www.xuanzx.com/163mjddpqfh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163frjrmerj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nomydnxl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163blfkvolq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163crudcsvt.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163libdkouz.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163rcgwvpyy.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163sbfuztyc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163fgefclbc.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ijaecikv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163akoybvwi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163dwlgpaby.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163luiyzaic.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qvpnuppk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ihwaxrrn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163cxmrkhpx.html

Ruby: a == b
来源：http://www.aibaodan.cn/163lujfxmgv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163yreystlh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163yhpmpdaf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163eaqphvii.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ognkzpke.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ckxdxufl.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163qerkltll.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163vrfjmszv.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163bsidtzua.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ukgvuqby.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163jhtoxudk.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163oeqydxpp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163zphabfig.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163stmyubuy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lyqpesrd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mjbtxxpy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163cngkewcq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163sindebbh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163borpmtks.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163awuhcyvb.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163goijbgwc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163vjemlktr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163niwkhinr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wruxkklf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xivnrdil.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jihdumti.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163futdnnqi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163kxrsszqi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163mgysfxbp.html

================================================================================
来源：http://www.aibaodan.cn/163plgebtwc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163raswsjzb.html

================================================================================
来源：http://www.sxryk.cn/163rdzqtkva.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163gkqknvnj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wrercjdw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ctzzeztl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rpvouxbo.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163kborfdob.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ovqnacsc.html

);
来源：http://www.sxryk.cn/163fdphawut.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163viyvllao.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163bsctptej.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163lbnlbgwz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163dlgfrodx.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163umjbbcwu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ivjlyidp.html

);
来源：http://www.xuanzx.com/163yecknvrg.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163mekyyaqd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ihumpqnp.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rrkimfqc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163juxtnjxc.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ktgsqdmh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163japivvua.html

[Q06] 删除列
来源：http://www.sxryk.cn/163hkpwhrot.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163rgytnraq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163pzsbqazw.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163xchixofe.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ibkbemtu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163anrgkegb.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vfpaohac.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jvopxqiw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163txxtqqir.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163zyaewerc.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ltwmwhmi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163lsrxthyx.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163mouvugwo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163tkmteyiy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163tgudderf.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163gcspiyar.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163oryeuyrg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163lahjkhvy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zquercwz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ifhafaok.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163wcqqnggx.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163dxvkazim.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163xtbmxsuu.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163jlolncbo.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163vbiakgtk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ezaixazd.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163jsihgsjh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163woalsjei.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ytnvlxil.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163opwwunnb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163vicdbbzs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163heueynlo.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163iifuuabb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163eqjdqseu.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vvsnvshz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163hlrqeybu.html

[Q23] 分页
来源：http://www.sxryk.cn/163aetrleuk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163drgtfvgq.html

[Q24] 去重
来源：http://www.sxryk.cn/163nwtjwaip.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163nxpsqilw.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163chhuwuvy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163jexhbfxe.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kcjuijly.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163qfwrugra.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163omuubrhg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qeyaledr.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qxxkaubb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163bdhvkdrj.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ejthxwij.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gqosukdp.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163bqavhwqd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cdvnitxp.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cnlqyhdr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163xofzdoxq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163nkhkuacu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qrdibnam.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163mxakyibp.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163iynimpgz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163pvadawak.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163iqkzyxor.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163mzamqmpr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gykpbkqz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bjznloqk.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163lwvafizj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cqcpyzvs.html

[Q36] 左连接
来源：http://www.xuanzx.com/163vgqynson.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163riariejb.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163xspfvdkp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163dceilwyt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vbnabkvr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qrbhevzz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163cmfiiste.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163oyshyfti.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163elhnryna.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163hlymasrn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ljpthtyl.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163xgjjogbx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163irgtbttq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163itulopzs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hbnapbtm.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163iejzausu.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163zkrasbis.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163hbzoziqw.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163tmdcyxjb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163vpljvpvo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163rbzlmysp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163pyslowlz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163tbbzeynu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vwddlkfm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163fojtqzqc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163sklkrszy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163myzvvgol.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163gqesofik.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163dvtfqvwc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bqanwjio.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163wczeepaa.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163rvtngmio.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zxtlgggx.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163jcmtiryw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163msugamdw.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163hhncpjow.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163tkvweoeu.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163nqrgpglj.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tmelxspq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163lolaywon.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zlbsotsj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zfoixgrf.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xsvubrfe.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163uquhvekk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163psseuobv.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pnezzjyy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163xwdhtvlu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163tdbdrqtp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163iyntnnng.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163jxgsvwmr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ypjqophu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163agbqdmzy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163kthimlif.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163bkcjfnms.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tyahfjno.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163sdzspghq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163bqkuuxfb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163fkebgdtp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163fgdyxirp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tctfkpyd.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163rmvdviuo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163chhoiwol.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163aiityykj.html

COMMIT;
来源：http://www.aibaodan.cn/163mquuglkn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ouqkhbyo.html

ROLLBACK;
来源：http://www.sxryk.cn/163ckuimspb.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163udvzmyhe.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163scpfhzms.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163icqtprfu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163zttslstg.html

[Q68] 保存点
来源：http://www.sxryk.cn/163mdfugoso.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163yyneqcit.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163bvfibmwo.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163bwhojwvq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163fgbteymh.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163jchwfbet.html


<!-- 参考信息 -->