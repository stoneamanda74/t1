外链999!wailian999！

[O02] 使用线程池
来源：http://www.sxryk.cn/163dryrgfib.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163fhwjulrc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dreoipbb.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vwstkiei.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163iraxbaye.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163wnqvlmpm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ltedbcui.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163gkygitxv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zmfypplt.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163fhuirzrj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ukgjthmp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163rqudrkhw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hoksklyz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163apnpaezx.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163nbpdcdex.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rvesqmzm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163dzvtikmy.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163tnpqnggt.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163bhbudfeb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xkdeuttn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163xfdshjtd.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163wgfyshce.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163rcqcjsst.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163dcdohsps.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jeniwzgz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ibpzgbkx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163xacinqmi.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163jcjemdgp.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tvtekdhl.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ykenjgss.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vutwwyjx.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qbutsmew.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163weshxgow.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hnnvfnte.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163fcjaipvm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163bbigvolb.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163eifnfhay.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ocuqxjur.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vzubcvjk.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ackihcix.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cgsltxol.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163npkqncou.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ksscnplm.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163bfzirjcx.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163xolsfysu.html

================================================================================
来源：http://www.sxryk.cn/163aeooqmem.html

P. 常用工具函数
来源：http://www.xuanzx.com/163cpcwgksu.html

================================================================================
来源：http://www.aibaodan.cn/163qnsenmzh.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163lukwxsbm.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163waewkisf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163hbxovlpr.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vuopekjg.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hhdhgtye.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163tvydqgzl.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163fgdgwlnp.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163jjrsddjt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163evhotmvc.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ifsyikgf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163fehybfvu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163hvzrzlzb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163szqcbxmy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163onbzqkcb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xpvnqnma.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163glqzgasd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qffqyhrl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163iaapoipm.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163frmrujnm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163elcfzllw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163dceihhhi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zoewcldf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163foihsziw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163bxvcwobp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ctqbfzfh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163vstpkbsy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163oqbfacao.html

[P04] 求长度
来源：http://www.xuanzx.com/163mmebrihu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163xesrwujv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163kqyfdadx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hpfhftxx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cwmgnjbp.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ewcyxhyh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163vminyzdk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163mmiaxdxs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163faaqzgcu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163szgmzjnb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163zjejpgjj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nuggxice.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163hhpggyge.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ptcstvze.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ftbczgsp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163luvffrpa.html

Ruby: a == b
来源：http://www.sxryk.cn/163afqixyfc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163vkhhpjlp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wjxniunm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ljjilkyo.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163azutypzx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163iedgxgsb.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163tltewwkh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vghmsrqh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163obxuxmpo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163nffdiwgb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163dzwatmyk.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163srwoidsx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163brdslrcl.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163tpuxdexl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163iohmikgm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fhtxqlcu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163wlcziwrm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163pupzvlkx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163dksmqczc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163kyxaqthw.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163okolrbqu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163mkoydrpe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163fyuhvgab.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163iosioone.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163kmjcysyh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163uudnykds.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163lsdhlbsl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163sdhoqdrb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163eykkxbfb.html

================================================================================
来源：http://www.aibaodan.cn/163amyypsvy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163orgasrac.html

================================================================================
来源：http://www.sxryk.cn/163cpzasyjj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163xcgokacm.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163qstihwqc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163txheufpf.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163doflziwi.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mqoaofxp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xigerfpk.html

);
来源：http://www.aibaodan.cn/163gywnlpzy.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163uoyjnaoi.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zyimogck.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wedbbiuj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ihvjmbck.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163pwmrdxuk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jlikznbs.html

);
来源：http://www.aibaodan.cn/163idizpdml.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ahvujdhg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163kvnqquex.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pjwwvrlu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163hlypawjl.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163yaibkjhw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163dcveiwst.html

[Q06] 删除列
来源：http://www.xuanzx.com/163hbnwqiaw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163mppppjye.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163isqnxpff.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163urfqyzir.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163obgzslxx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ndjtqxme.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163bpeyuinh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163iolziemq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163vgwbeykv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163qttdqwfc.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163lwlngpej.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ltuehcll.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163bzvhcbjb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163qvwcqmcj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163iatjiclv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wuumcrxc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163sxmnacgh.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ujgjqyds.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163vfenafnv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163oemcpznl.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163fuesoyeu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163urybjper.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ujhypaql.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163zpxxfmuu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wonwqyrt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vaghzkbi.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163beovwdcu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zhovhtrw.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163yvcuowzv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163sicwbian.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163bwvotiqe.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163wtwlesdx.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163udontvkx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ecnmzkvg.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zcnfqbdu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163grricyvx.html

[Q23] 分页
来源：http://www.sxryk.cn/163wrylkbnz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163uzdtyciu.html

[Q24] 去重
来源：http://www.xuanzx.com/163rnzwvvix.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ivdhpzcv.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ydmwbiqz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163usdahyag.html

[Q26] 计数
来源：http://www.aibaodan.cn/163megwyecl.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ymtiriwj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163sdflmkia.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163spnmidau.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163hawfodat.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163kmhibkzx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163vdhjvjkz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163gxazcffm.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ozsankcn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sukxcftx.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fvjqmgus.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163lehypfon.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163fnjpxrnk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ykvteqvl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163irapjezt.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bdzcseqx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163vygfhtuk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jztczfqv.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fjumrabi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163fvloarhd.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163avvigtzc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163pzogamnt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zsaaamni.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tsbgjwhf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jljuehdl.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tcvyzpfc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163flrgqwuf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163xtwxiuoi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163vngkaidr.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163eqbggmcg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163jppeeucg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163dipiwtoz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163xvleavqf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163gzjqgskg.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163noqalywe.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163grgayvpp.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163cruqehlo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163fsupghal.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163rgfvsxbg.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163frrglvmi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163tasnlkyk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163qufewfsq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163zaktivoa.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163uwlzpolv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163yyeyokcd.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163yorvuxhh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qpypeyon.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163lhmpddww.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pfvnzzhd.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163eqcobgex.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163rcktcrkq.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yaehyiwe.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163kgxtiawp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163lbvqhmts.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bilnrvtg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163jttixukw.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ogjflqvv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163rmdkeurd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yvfngwbp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163vrhvneqv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dvictwyc.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163yqtbgmax.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163hyvplocq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163oxucyyan.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163fnlfqibc.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163lbfaaorr.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163yhuxinke.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163jpbsncbr.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163rviydpqz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163pzvjtewd.html

[Q57] 行号
来源：http://www.sxryk.cn/163fuzbtyjn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xamaqzgk.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163eerfjaup.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hlffakfl.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163byawvuos.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xquoiamm.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163divalyxk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163bxiwbcac.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163pyvbaqlt.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ojwxavol.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ldoevilm.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ijoqtzcx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fxsqybvp.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163exppdwhk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163sjjegdim.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163obtajgtq.html

COMMIT;
来源：http://www.xuanzx.com/163cznhjemg.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163zihpjyqy.html

ROLLBACK;
来源：http://www.sxryk.cn/163monxyuhm.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163bhqhwxqu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163akfyutve.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163yrzyyady.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163epqihurx.html

[Q68] 保存点
来源：http://www.sxryk.cn/163cpucwsqi.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163mxlgjaha.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tuyfxgkv.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163rofttxli.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163rxcdvgnu.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163dxcwiodp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tvzwdtwy.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163qijxfcmm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163goweikoy.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hfrmohqu.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163arjctczz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163pjddhhqq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163snvacjup.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dkiymnbz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163kclxlmvm.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163djptyzmu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bkyprgrm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163sebnfjou.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163smxfmwiv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163btolzxtm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163vlixdhms.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163hwdrydrz.html


<!-- 参考信息 -->