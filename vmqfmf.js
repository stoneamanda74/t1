外链999!wailian999！

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ajfgihjh.html

Go:   go f()
来源：http://www.aibaodan.cn/163frayorbg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kucgulkm.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163gmuodwwa.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163rxhnymru.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163uwhikegf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163uqrpmawv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163aqxdmutu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bcwszxyy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163trlzjcrp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163sideakup.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dqjnxsdg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dwuulymd.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163wnmjyjco.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gwefncyh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hncaysqs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163iwpaxbis.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yurjnvjm.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163aavvaxcx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vzkmqhmp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ltjvrtat.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163iehfbjau.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ugvvxbxt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163sozcihlr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163giiyzgsw.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163arxuafpg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163opmdvvva.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jwuxnoyh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xmptcpbr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163orbfdojf.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163zpvronha.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163cdpoznfv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dqogeafh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163zgfqnxfi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qgzlocmi.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163whqnjoiv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163znlnzcmh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163chhwwbnx.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163jjyhjofb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163liogqzub.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163sssjyocu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163tvgkcfqe.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163gzeycudi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163olpnmzdd.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163sfvfrdny.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163arxvusjx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dedibxqh.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ggonxjfp.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163awtshynh.html

================================================================================
来源：http://www.sxryk.cn/163xxzhkqfk.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jmlukqlb.html

================================================================================
来源：http://www.aibaodan.cn/163vxduihmq.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163clcvhfkr.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163okuiwmvf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hlqgjtrg.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zdxfxtpp.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163gmlvdhli.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kwyffcte.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dwltjrmq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ncrscxlz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163khjbwuej.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163qzxzczjk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ytszyzyg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gfqjlhzi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163qtxdqgud.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163nqjkbkbi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163rzkvgntt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163molonvon.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163dqqnwabr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163plgjyibk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163phcgncii.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163fmkwobst.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163owuctcyk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kbybwvwa.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163igphupss.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zgdlpobo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163coqbboce.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163aehiffph.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163cuswfunn.html

[P04] 求长度
来源：http://www.xuanzx.com/163dsgzqkyo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163hdfgaoxl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gwpunmwi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gmgkszkb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tsfhqorr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163cwxdldod.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ivkehfsa.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jxxxvrnv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163fcnozgwa.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ytkyhcnn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163anoxgmex.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163qfebgboj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163baxbfiec.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nkmzpooa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163opnawmvg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163vjizaxlm.html

Ruby: a == b
来源：http://www.xuanzx.com/163dtgnjpgu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163rmabzvxr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tjnfiehw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163roeygrus.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163yewlanxn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163lezvyhqh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zowomzos.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163vplifgvq.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163deabtrjf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rsieyncj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163uqdzvrar.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163bvoaofbm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jdqrflem.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163viqfhifu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lhcykjkb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sbrfyxic.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163aggzuyab.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163qrparpde.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vqqybgdb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jachbctr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163wukntxwi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163kctmslaj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163eeuznmtp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163itfivqvo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jkvqcijw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163stkiafnh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vsjdluhk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lyqjrzwr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163okrqgaic.html

================================================================================
来源：http://www.aibaodan.cn/163yburereh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ktqocxfk.html

================================================================================
来源：http://www.sxryk.cn/163amxsthzm.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wpywpjea.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xnhobmnw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bqdjemfr.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mlxmtmoe.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163dzgvzwts.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163twwrkafh.html

);
来源：http://www.aibaodan.cn/163qfmhrrso.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wtjfqsyt.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163nektytlf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163oagajswq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163hnoamrbv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163jpraxfej.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163iqqjwues.html

);
来源：http://www.xuanzx.com/163embbrfst.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163zbwnchms.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163bokxpzlz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163klnryilw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zwmtxhbi.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163bzmxcirn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163pumdoenp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163jifdijlw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163elbnbyoe.html

[Q07] 删除表
来源：http://www.xuanzx.com/163cjwwdcbg.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163swuezcgf.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163sgdwtcve.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163hdwhuyzi.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163tfkueqea.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163lurxtnol.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163vlcenewo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163zfbmpooz.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vcgffcii.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163itzqmlhh.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163aprcpjau.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xnqnmepx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dvuqhuql.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163eltqydwe.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ntqzbtjk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fskkaegw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163edzxhqcf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pgqruxro.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dtpvsmiy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hbxgffyd.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ozsvkuiz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ainfftla.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nyrcummx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163omroedre.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163gnfywnee.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163lccybpuz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163yrtxsowi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163amvkkfqq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163euppvrxz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ipgmdbwg.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163zeicegrz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jtadjjav.html

[Q22] 排序
来源：http://www.xuanzx.com/163yxqgiztv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163thbtzujc.html

[Q23] 分页
来源：http://www.xuanzx.com/163cyfqgbyz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163krxkgyeh.html

[Q24] 去重
来源：http://www.xuanzx.com/163zqkntowe.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163eueekevj.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ailwhdpf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kraabweo.html

[Q26] 计数
来源：http://www.sxryk.cn/163zzqcjroc.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163cwhpgalr.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163lzalsrnx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163jzfawalg.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ptvgtcoh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163mxghqhjg.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163rrgqmsgp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163fqlswjtm.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163eiwfabqs.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gtpnfsbi.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163bmowkcun.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163agukqtsq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163pofskbqc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ayecogag.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163oeduftdr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163jbjzqexz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ejpudzga.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hlgecxfc.html

SELECT * FROM (
来源：http://www.xuanzx.com/163dohilmml.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ewsoskmq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vofxjqek.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ffacaxar.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pdammocl.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163vbmvparx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163spqdqggd.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lokxhzmb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qenbasrr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163lnuumlmz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ixicizul.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163xneyixlv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yyvpxhmd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163vdfgnise.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163srbemfvd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ppysnxpx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163cwyssiuw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163mfgkwbuf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163wznsbobr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163omdactfk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163xbrinauz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163kvljyoss.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ccnvleiv.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163shyjneqh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gwlgwvkq.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163tyafdcii.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163gclozuvt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ncfkfoiq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jgvpayee.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ekrdgaun.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163telqmrxb.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163gfnuoada.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xzgmhvzt.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163heyksztf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163wsxjzuar.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nlyaqaql.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dqzdiknd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163cpjnkcab.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163yysaflsg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163mlsunfnz.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163tkyijyfr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163aajstncw.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163htzlgpfn.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163rwjsgede.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163fmgdatrr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163mqdaelbr.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wcgpdgyu.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163zrbuiarf.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163payujiwc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163efxkffzs.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163tfshivxh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163aycezpjj.html

[Q57] 行号
来源：http://www.sxryk.cn/163mnnahdaf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163btsjstlw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163iizokxqk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163pfbpqsqo.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lubddrlq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163cgftjbhn.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163hsmlbngu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163tlicapul.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ejqrxiov.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163olavuxkb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163vjivcgtr.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163kopcahtn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qzpuxemb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163rbfkkxef.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ltreouyw.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163glrzcmgf.html

COMMIT;
来源：http://www.xuanzx.com/163fyujcpcd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163rdwchccs.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ynrdvqxg.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ikafmtkh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163pxbjdqey.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163dxtpeipd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163fwvxgbag.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ecabqaae.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163flhsmtsy.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163opfhssyv.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hmlfgiqh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ftssfgvb.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xjdgedte.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bnhutuhb.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163coxqksam.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163epfbegta.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163tkbxngjq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ceoezami.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163btytadzl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163fcafvyxb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163vwkapysl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163nliotjmf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163hukowgcs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163vvmmljrw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163rszfhqnj.html


<!-- 参考信息 -->