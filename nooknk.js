外链999!wailian999！

[O02] 使用线程池
来源：http://www.xuanzx.com/163wmqmheri.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163utjtttat.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163arugtboh.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163njzayurb.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wcedrxsp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ryooyenu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163fgplxhqq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163nsjkancj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163wzrudpno.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163tvfxwryb.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xxhcpykx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163rfyduuxc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163mqbdrppa.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163phstacwe.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163tiztmhkn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163batweipr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163dearyded.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163chlumsvf.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163lnrpicqw.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163lkhgmrqx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163brirzzxn.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nzbupqao.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hmqhgphw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163kecgenxc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163grguryhz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ijicwvmk.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163sbrmqcdn.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bpqvpypc.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163qooivfnw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bskftbyf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mmethlwi.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wekgnkus.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wjujwrgn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163zuyllfoo.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163qqdpupmk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163rsedgtcd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163yabdbtve.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163cqotoshj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163miniordz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jpfvdese.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zgvkvcdk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163erzkwzlm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163enontkbm.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163odqqgudz.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163opgzuihb.html

================================================================================
来源：http://www.aibaodan.cn/163bwfqdefd.html

P. 常用工具函数
来源：http://www.xuanzx.com/163iimmrpwl.html

================================================================================
来源：http://www.aibaodan.cn/163oiomvfps.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163bcotytgv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163gavlhygy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163msfmbzdv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163togurnao.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163umqamwbc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163wmvsppgg.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163tdtfgvrs.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xqrtxcus.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ecxdkspx.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163tqpkcckz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163qiixwqze.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163yrbyqvie.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163dulfmbxz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163nolaggoc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163qfxrtjfk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lonetvza.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163eerowzgv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163yomuhuhe.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yfmogmol.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163mvlwpxiu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mhoddrkd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ngnjzpzd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gbmmcghi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rovjwcgp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163aomlmjbh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163bhfmlrhy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gozdyafr.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rdrwlwzw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163anmhnyhx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cqcpeqdq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lkkxmtde.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163aroqtpmt.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163lmdgcwql.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163znsajtdf.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tyhinvlp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163binhrqvk.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163nbxmrgqi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163kbbdjnxs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163iacjvmzk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163cjptuypc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kponzpfx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qvzweftx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163vhwqmtpx.html

Ruby: a == b
来源：http://www.sxryk.cn/163qnadzhnm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163shlmqwtx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163dasnqtxt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163cgoxnxem.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163lgpriseh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xvxmhbww.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163tshqxhvs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163skqpzzhd.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163sfpycqbh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163xrtfpvbj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163embfkbeo.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ycjforcg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163arqqlmbb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163snwdtdem.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163evpklukl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nelahfhy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163lpityqel.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163nzaxeptf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163fnpntqiq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wkjajjer.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qedctqea.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ayxxnjbv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163xzwayvcn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163xjfvknlf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jstseslw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163amupadbz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ammefbrf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163uclsuxkz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163qpowozfk.html

================================================================================
来源：http://www.xuanzx.com/163fyxjzfsb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163kqxfvjlc.html

================================================================================
来源：http://www.sxryk.cn/163hxagrssk.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ocpvaqgs.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163umwitnxc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163whnkohxv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vjibdcpq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163wxhphetu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163arvkwfhy.html

);
来源：http://www.xuanzx.com/163kgmmjast.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zrakrbqt.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163zejrgtej.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hmuupebj.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163mmxjunqt.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zgoxrecg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163owbsfkiq.html

);
来源：http://www.aibaodan.cn/163hahrswvt.html

[Q03] 增加列
来源：http://www.xuanzx.com/163uzuawzii.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163nbphcfee.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163dllgjhgo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163dgbootzf.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163xojgdbzy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jbqadxne.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ohzndpyh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163zdtabgoo.html

[Q07] 删除表
来源：http://www.sxryk.cn/163oixqvouk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163fymqfvtb.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163iqxbewro.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163jzokqzte.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bzlyyhpe.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qlmgbnks.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163piusdnwl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163iwqxpaep.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163wmgpcirk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163qxoisgsl.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ixratnwf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163gcpstnbf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163tzffuqia.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ovwqercy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ppfifcid.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ecoqngcy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163kfckhqfk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163gbfzhlnz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163tptokspq.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163kozbmqge.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163oiptrdbw.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163eajbzkbx.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fumzxgif.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163nbafzgms.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163sfuvlavu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163fflmdkdq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hywxrvpg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163yxwvnovu.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163eyplclvs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163tyapisid.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163sahwgcgj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163rgcrbvgg.html

[Q22] 排序
来源：http://www.sxryk.cn/163vwwtpdlt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hukebwwf.html

[Q23] 分页
来源：http://www.xuanzx.com/163bsjquwcr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zkgsnvly.html

[Q24] 去重
来源：http://www.xuanzx.com/163ncxelhgn.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xjkqtebk.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163tfaidftw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ckqicfnc.html

[Q26] 计数
来源：http://www.aibaodan.cn/163sguamlmc.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ipmjkuea.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163rwvfzayp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163udsqruep.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nwldhccq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163paqfuptu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ccbucnsv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163zvosgxtb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163nocwhlvv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ygddklaj.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163pwfurtrt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163olqymehf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163idusdsrx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cdweapje.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ujhxauml.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163fvndembi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163srwrokba.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163cjnvevcx.html

SELECT * FROM (
来源：http://www.sxryk.cn/163wlimkfjn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163rytnbrql.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163tsuyppsn.html

[Q35] 内连接
来源：http://www.xuanzx.com/163niutvqsq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cjbdapdg.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163qjynbijp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163adcwvbab.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163qfqhxvnd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163wwcnphsu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163lciigfpb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jstcwtah.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163cieaysff.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163iywuuryb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bdylnimb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163cpopfefh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zpifxorh.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vvqqmgff.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163gjmefcsf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163mgpjeohy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lzlexlee.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163famczpfk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ujcapuod.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163zwagowmb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ljkhwyko.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163icsdbusr.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ommtvezg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163mmfwbacn.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163gkwvdhvk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hnussdwe.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163svgnbbwq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gjtkxpem.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ewieyauu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163buklsfmb.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vviehrqo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163snptrlcg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163jcdhimja.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wljdmsby.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rarlhwry.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163akunmihh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163unkobasm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163rigrhrut.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hxadofsi.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fwahfcck.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163dpjcsmsh.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ugomrvlx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gloazweh.html

[Q54] 清空表
来源：http://www.xuanzx.com/163lslrgcnw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zwrsbvme.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163txlbwrsr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163baaljuab.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ujemtudy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163hgmcqgqj.html

[Q57] 行号
来源：http://www.sxryk.cn/163xbriwijx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163upgcczwm.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163nohhswuo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ecatummn.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qdembipe.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163dcgjjdit.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163lqztezam.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163nsncsmgx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163erdhwmut.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163blgzcmwi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163xbyljwvw.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163xyykigxq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ttxhrrtz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163zazjgkfh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rvonskep.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163emykzdev.html

COMMIT;
来源：http://www.xuanzx.com/163owjbpbun.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ujnubtah.html

ROLLBACK;
来源：http://www.sxryk.cn/163sarvuhfd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163aujdobwj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163phptyjsz.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ooxsfnsf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rbyvvwsk.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163eujvijlc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163lvscezhq.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163sqtutgiw.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163peegrycx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163spudeqez.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163oxljyjyu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nixbsaos.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bughpnnq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fsjleokx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dmdsegxt.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163cvdfjqxk.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zhwkmafd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ahwrfolk.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163nmbgkhot.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163lucqojtw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xgwmzezq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qivokrtt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163eflobchi.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163zfcirurj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163uxzxqxfr.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163uclvjxtb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163yetsorvu.html


<!-- 参考信息 -->