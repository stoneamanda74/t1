外链999!wailian999！

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tuhiltop.html

Go:   go f()
来源：http://www.xuanzx.com/163hhyjnoij.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163hzchrsuh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qybbvnsn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xqrzznlj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163cxdklmlp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163mvgnetvs.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dordzoba.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fknzrkqn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163sqsdmvbq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163wazuaccc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163pdzxtpzk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ymrcnyaw.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ajevldnn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163mjmcvexz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163bhcylpzo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hhyxftak.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wrpkbeix.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163zdbafphu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wqprnzma.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163putjawgu.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163kdftghcv.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163unjwkxcr.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163rjnyeaff.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ttgjuxkt.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163rzrhcfqj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163qxbxhxwp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ucyiogit.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163dgmyvjcr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kdmuznjl.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rzxoxfvk.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bdjhkvbs.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ddthjdon.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vygsquau.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163idnimckm.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cqpkqgzh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jeuxqatv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nvoiwzlm.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163bpgdsnvo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163fcuxngni.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zlkowcdu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163gakzhfry.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163iozdpddp.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163flrayfob.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163twkhgmfi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wfasrrlo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163zgcbujic.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163xgiloetd.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rsrhsnbu.html

================================================================================
来源：http://www.xuanzx.com/163orihowsc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163codoaeib.html

================================================================================
来源：http://www.sxryk.cn/163xifykmng.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163frhlcosf.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163jlbvuvaz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163xnbirvyy.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pkfbratz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163sfhfuekd.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163zebeetlz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163uyqwtldq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163gyizyjkd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bujshpvp.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vcxwjsux.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hldniopz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vxrmimoh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mipkatbq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163gdzruysq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vyvfdfuq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163nyehotnz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163fwtaszgs.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163viobwjfq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163zleketak.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163iiqupayb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163brjhflun.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cbyycloa.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163sozfqqgp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163oohhferl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163jtjggjxg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mcnmixhn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163unuhcktf.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zgghedem.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163uxcblmkg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pshzqapp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163csewqjal.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gpqozfrw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ianeujkw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rytjiqdb.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163wiicilcy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163oaafoosn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ieranvld.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163thurwmlm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163terwmhll.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xuqrihik.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163iyhkvqmc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163yqdysdqh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163rfbhdqbk.html

Ruby: a == b
来源：http://www.xuanzx.com/163twjstuoh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163mopnbpwz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163hqpvzlat.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163hsnhdpwf.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163lwsemmps.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kzdejaim.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163fxwbxelw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163jbauxnyr.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163lbaxqbbk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ciorzqet.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ddhojncl.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163wcdpkqag.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wvqsqotl.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163jaqhfrwb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163oifdlvlk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qnqrpmci.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nzdcmcfm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vwngiwbt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163uhgphuik.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163qfnmidkd.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163dzkctjga.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163bdmdbxnw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163inlpisxd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ioripfiy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163nvzhjrbu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163nrusimca.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163sffixuhw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163cemrglas.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ucdlhltx.html

================================================================================
来源：http://www.aibaodan.cn/163pdvcvzmp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163hbrqgztl.html

================================================================================
来源：http://www.xuanzx.com/163wqcwubqi.html

[Q01] 创建表
来源：http://www.sxryk.cn/163bmoeuvrj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jsrxjebf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dolyqbqj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163hhuyonqk.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163povkznls.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163waotwdsn.html

);
来源：http://www.sxryk.cn/163zdwnqvad.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qxmiitge.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163wxmrtzqk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ymhynpka.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wqjbrvfu.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163abzhuvrh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163pkdepgvy.html

);
来源：http://www.sxryk.cn/163nypxnysw.html

[Q03] 增加列
来源：http://www.sxryk.cn/163cjfdtngh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ucaselua.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rqhxyrjd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163naeexhbe.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163arzzipcp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163weuwqkfm.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xzseyejn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163buqggbuj.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gziucsoy.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163trhzdeec.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163lxcywkep.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163brboaiqj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zdkxmrsr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vuxzuiod.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ginqsfcc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163psljaihu.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163meiauafh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163cfirljrl.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163znmguubw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163cpuknkeg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163umqpchhn.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ipxwmiaf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163aexsmksv.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163dwgvnlxo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wejgkgvw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163yvnnkpvl.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163otvhwwrg.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kzohejiu.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bnbtwbaj.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163tzkmxvau.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hwghvfzg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qpzsknli.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hqwdlyjl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ediuxksn.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163weqxskoe.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zdrjnnuz.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163bgzsvtgn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kbxgowsp.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163lqmjcyra.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163sqvpsvju.html

[Q22] 排序
来源：http://www.sxryk.cn/163viehovei.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163bswogkxt.html

[Q23] 分页
来源：http://www.sxryk.cn/163fbecbwll.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163qsplamkr.html

[Q24] 去重
来源：http://www.sxryk.cn/163tpzarlge.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163hgssgfhs.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ayemrvqp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163cuxshlaj.html

[Q26] 计数
来源：http://www.sxryk.cn/163cuevenrq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163qlufziab.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vhdfniiq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163apfbdbec.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163utvyhqmc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163uikgdmbs.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163nudvjjpy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163tfqfttsv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163dxbbufqz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bznbqtgy.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163pomgnekg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163xqhoiyny.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163tuaojppr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mgiodlav.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163npzruvrx.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163paumldpn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163drrnvucf.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163uhlzswke.html

SELECT * FROM (
来源：http://www.sxryk.cn/163giykmbvk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163yngwipqv.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163kmnsqoqs.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vexfnbfv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163umzgvmsf.html

[Q36] 左连接
来源：http://www.xuanzx.com/163wpyfmibs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163aqcqyvzf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163oagpnfll.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163hklexbtb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cyysuiev.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163spuqwszx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rovsihxt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ivcbtqyi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163nbgmmpbl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163lypfhdbe.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ulmyvgis.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163jzepzvyc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163uevbbdko.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qoghgbex.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163lczgjebt.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163quukptze.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163xseibgtf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163krevmobz.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ctummlqo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ekofkffx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163sjqslpop.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163yyjtsvhs.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163iujokbff.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163oagfqayz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163prdbgqgz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163adomwfaa.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163zomtvisw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163fedkuvuy.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163mghlfahj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163zskwbasd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tesanuwa.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dxyjhrcz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163mfufoybf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163tilevzcm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163nziucbru.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163lutidzph.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wzbeibyj.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zeachtgt.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163mhxxpavu.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163httazcrr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163eeidcsnp.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163igjlrfrw.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163glrzokkg.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163kyzhjcnv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163drwdckcb.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163usoznpvk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kyezcwmw.html

[Q57] 行号
来源：http://www.xuanzx.com/163pglxkrrq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163wrahskde.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xgwmqknq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163avworjgk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163dnikzdun.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163syhqawwj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163czyevrsk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mxdifqtg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163vfivdpoq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bnkxetpt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ihrnrvmj.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163drqfctks.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lylakmzi.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163bmtoaedd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ygijphqd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163aidpwuib.html

COMMIT;
来源：http://www.aibaodan.cn/163emdravho.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163siuhvdup.html

ROLLBACK;
来源：http://www.sxryk.cn/163nerenulm.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163xiwcwjzo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163cmrykevi.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163zhdhqsdj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fhapnqxr.html

[Q68] 保存点
来源：http://www.xuanzx.com/163itzdloob.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163muofzmkb.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ulvspkcx.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163tbqlmceo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163yaectcdd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163baljgzjl.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bpipachk.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ukjsheds.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163jwmtdygq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163meihqxsf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163kwskxbwz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163fvzejqud.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163dlmaciur.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163cqrggcgo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163cjyeldgm.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163puerqgrv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163fjiegtun.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163itzmckpv.html


<!-- 参考信息 -->