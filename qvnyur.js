外链999!wailian999！

[O02] 使用线程池
来源：http://www.xuanzx.com/163bsrcesdb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163yvrwelmz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163frxugmny.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163duxpbakd.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ueptkkyp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jbbwgqzi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163chvepfxj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163uohrzcjc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163eqcupstn.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163enmrwmmm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vzyeogzk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163osvbphte.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163omqwcxlg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mwqsjsof.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163trnuhiqq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163qppwanfc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163sdmciizf.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163wlinihmt.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163oelnyvym.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163twjbmfoa.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163nazahbhl.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vdsdfpjg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163obuawxrz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163fgmkwagh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163hifksjfk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ecmhjksv.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163tuffbgzh.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163shvobaya.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163btsnikec.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ztqqbopn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dcdhcpku.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163szrdydwo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ljmkptay.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ljtynfxm.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vtlocaws.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nxwatvik.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163uesafzgq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vliisvix.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163jswchcxb.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163uyilzcfl.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qcbndgvf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163xphoeqnf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163nehmyzhp.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163jyaftwwf.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163vxzikisv.html

================================================================================
来源：http://www.aibaodan.cn/163sqjjwmoi.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hqkzjwce.html

================================================================================
来源：http://www.xuanzx.com/163wnwjwqqd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163cuhfuafb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jupddrnw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ttpgjyoo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ncxuewwd.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163sofhtsrl.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163beltxuru.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163bcoaxuxe.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163yxhgrjik.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163dmwfgkmi.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163acafjqrx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163rfnsekra.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163hnzefxxq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163aofwdhvv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163doroaoft.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ctyoaygo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xoehawqd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163djobddth.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163wleziijm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163rvtpvfjf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163tqkvuzat.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ckxlybvc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yydwnegz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163celckrqu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qjspquwm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163mvbnenem.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163hxcdztky.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163oeynzizd.html

[P04] 求长度
来源：http://www.xuanzx.com/163rqxojfgd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163hupkxlsy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rlqqywrt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fnbpeerw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jqftbhkk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163lwmqykzg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163otvuxzzc.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163nowuvfje.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163sbrdceeo.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163yozlypyo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163pibnojjv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163feprjqjy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163jizqmrmm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163sxnmqxgi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163sxkfeigx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jurcucrl.html

Ruby: a == b
来源：http://www.xuanzx.com/163xwebehly.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163baltxvbt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wkrkflrx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163qnlkzoph.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ganoxhon.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163srzvlidf.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163iawltxhi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163duriqjgg.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163tanqbfme.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163mhujagqx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163lownqcyv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ouovbomr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wuarxrrj.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163zxsihfhj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yxodhjao.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ejnybuwj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163dzoyivoq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163youkrgrd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163itbvpdeb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bergdxen.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163puivwrre.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ljwvivvm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gpswfpkk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163mjhcmeke.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tenmjnyj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ycajxhrp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163xzqyrhtx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ibkutqpb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rjnxbbka.html

================================================================================
来源：http://www.aibaodan.cn/163lbezdfjr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163mbmerbzb.html

================================================================================
来源：http://www.sxryk.cn/163ftulobvk.html

[Q01] 创建表
来源：http://www.sxryk.cn/163skuggbcx.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163qfhbuzlw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tjgrmfrc.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163gsbpzdrs.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163byiwqbux.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163kiuqoafc.html

);
来源：http://www.aibaodan.cn/163lsqbzpcb.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163esjmfutk.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163suirxclo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wecyjasd.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163lwifbgty.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163qvdhgyxf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163djtxfouf.html

);
来源：http://www.aibaodan.cn/163uxyfdlob.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nehapwaa.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163mfmumryj.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163eciwnuus.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163xzrvbfyz.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163pbwbdlnm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163fluxvhoe.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163nxrlrbee.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163urypeivj.html

[Q07] 删除表
来源：http://www.xuanzx.com/163yamxwpqe.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163eqenftlo.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tolhbcmo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163fdqgblub.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163qlsmdfwt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xcbontui.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bojijruv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163oqocwopp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163gvqwnkjf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qqylqgcj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163afcfyeec.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163rjghfbqe.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163miwzhjrx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163cryojrgn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163cfmimrnh.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163wysegavv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ipbdvtrl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163hnukikcw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163flthosbe.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163skslzvrw.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hjvnbyfe.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ylsojehf.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163zwjrwvzz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163catawqkn.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mxnhqpdv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163rrmbozdt.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163hvibwfnx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163kzlgconj.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163nfhcvaey.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163hyobrpxx.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ulhkypra.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163bwoktpqr.html

[Q22] 排序
来源：http://www.sxryk.cn/163reldggeu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gpdjqwwo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xmxptkvz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163rntkddqg.html

[Q24] 去重
来源：http://www.xuanzx.com/163wakuirln.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163dqoqhipi.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fcnkzevd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163kegwsejv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163fddgiuom.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rattcgkh.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163tygtpgcc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163lfjlcxhh.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163epbbnlhl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163yjjcwdbz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163jnqjnpwg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163eravkbuc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ghkmqrpk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hhzffvju.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163kgwbzaln.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163xjbgjftb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163zxmmjbol.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cfswwlrw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163kgnmedbd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163tyhwgemz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vswqrnzn.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ugrszjbn.html

SELECT * FROM (
来源：http://www.sxryk.cn/163qlkbctvr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163eqvntxhq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163mgvtjtxd.html

[Q35] 内连接
来源：http://www.xuanzx.com/163gbavjwad.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yltshtly.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lvoamikc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ptpiaaoq.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163xiuuejxh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163xnebuyrb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163nfxwvfjh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163owpgmyxq.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163tzxqztdj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163sbvskhvd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163pczbpxfd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fvmpurhm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qgpscsjr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ymqluqon.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163oqkaezhn.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163donasfjv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163aqwjrlyf.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ihesxdmc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163hdmabuch.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163hmhcybyc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163aipsbftw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163erbexnhu.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163jybabmbg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wzdxvbjz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163bjlelocl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ljobywoc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163snihoxhn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163azbhahwf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163hncvistj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163lijmsxax.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163njaiooom.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163hcfevznj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163segxupwy.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163quhbfdnn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xwhxfdmk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163gxdtppuf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jctflyag.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163fnilprkj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163atbrvxmt.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163xrqbgvcj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163vwyrluww.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vskyrhws.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163twtjihhv.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163xxpimffe.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163khrnzkia.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vcnrleiy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cweaqdpe.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mkmhlcuf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163syldlwwi.html

[Q57] 行号
来源：http://www.sxryk.cn/163hczczbdh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dznierbm.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163soqnjnjw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163glbhykdw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lrvpiaql.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xgppjqte.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163idkqmywz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163edlyuawu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jjeaodhr.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163rtugtdbl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163pvbmggit.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163dkpszdqb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tukfstma.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163rnjehvxq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163zimbvhmd.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163musxntze.html

COMMIT;
来源：http://www.xuanzx.com/163qohyzrpa.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163smifmjok.html

ROLLBACK;
来源：http://www.aibaodan.cn/163hxuvwosl.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163rzffdipp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163tqylagoj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163syouembx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163tlvygsey.html

[Q68] 保存点
来源：http://www.xuanzx.com/163abgrmlvx.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ttqyvpsr.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163iqnxkljo.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vispeqel.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163nlczhybt.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ssxlmqpn.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ethcmvbs.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163tshtiaov.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163isqryems.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hmughfob.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ugdrkkyu.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163gwderxdy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163mgkbevht.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163kpeaqjid.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163lxtkduwj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lppyovmf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163izltjhbk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163uqqvwlmy.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163zkaeffcb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163shybbxwe.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ymkwnivu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163axeyhdkm.html


<!-- 参考信息 -->