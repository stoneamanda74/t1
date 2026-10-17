外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163fjlwizdr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163wrqdldfi.html

================================================================================
来源：http://www.xuanzx.com/163bjcklhmc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163uvtvmldz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163kvegvrsu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163jbrgmeqb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163tbxziger.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dhfegjvz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163fvdocpqx.html

Go:   go f()
来源：http://www.xuanzx.com/163fveucsox.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163vnavpkcl.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163dmrceeqm.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163oenkmkfo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163gazechfb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xizizjya.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mzxyampa.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ggowgmjt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163mrjvoxvx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xyvdsjqp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163fdpxesix.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163rfnqxuse.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163nynxieuf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kgavfqqx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163eqbvarqc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163gqreupvy.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163netfupvb.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163mnkxezkh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wwavniuk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163vmcqtzlb.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163eoqzjqfc.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gqdtvdob.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163fpnxzbqv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pjjueemv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mnazvohc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163joigkejo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zsutarua.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163csbapyei.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163nnavnyvx.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163stsjhhai.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163msfyknek.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163zrwcxrgf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wvzyojei.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bkkobfva.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ixgszqev.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163pxkcojiy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163filvdjxf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163umqeqshu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ffddnijg.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163mayfrcyi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163tzigoyxx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163mzmatgww.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163gobwxavj.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jxwmayrz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ngaqaqwc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ufrupgqk.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163eddohuws.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163zhajxurr.html

================================================================================
来源：http://www.sxryk.cn/163wxgnsuhi.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163clzorkmm.html

================================================================================
来源：http://www.xuanzx.com/163vnuumchd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163oedphrwm.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163kylqsxxa.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rafnuhix.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qxdnegkx.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163drsbsvlw.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ujrmorlp.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ukcordwq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163hyajaffn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wmnphnqx.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zkmkeeum.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hflrnjzh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rfvsfovk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163isdmdbvk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163fnpjbeoi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mupcexvg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163jwebibcv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hewmihok.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163cdtacwum.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163plulinio.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163suuukwmm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jeonbxuu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gbtlpyhq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ywlqcoha.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163imkierdx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163hkblawor.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gsboczea.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ogucwysw.html

[P04] 求长度
来源：http://www.sxryk.cn/163fdekglwi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163mxedwcay.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163eqnvcapq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tkbxhhkf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xxqeqkex.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lqbifaio.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163halbowrz.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xhxgfhze.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163wstfrhst.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163bfrmovkh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163grjhyuym.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ekhkkixv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qeiazmjf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vjyhrzhu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ysjiwnth.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163wxydklco.html

Ruby: a == b
来源：http://www.sxryk.cn/163umelrcdb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ijxwozmo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163qttwtijo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163pushgvwg.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kwqipsoi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163qdezjnfy.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163qsvuclbd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163elmpbglo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163bhivafvc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163zfaniowi.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163jvojvpss.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xdmvxqdc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163tkjhepvp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163zwgdbktr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wjpbbpkx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ogemkapg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ivbmqxff.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ehkygogs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163eldemjdf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ilddfuvf.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163realrccj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163wgubrlop.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qgkxzvhh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gvhvcfwo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163cpjzudhu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163toljkiau.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163mlkjqwlp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ilxxldee.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bqwujpej.html

================================================================================
来源：http://www.xuanzx.com/163nluybdxg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163qqlmuhzn.html

================================================================================
来源：http://www.sxryk.cn/163ddjapwxa.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163momjdbhh.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ghoasmky.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dazfyqqs.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163crkrwzrc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163osjvbgdq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163qoqmmdpz.html

);
来源：http://www.aibaodan.cn/163itxzhkdn.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vjwalhxt.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fdknxlmk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dygbgnvq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zrhpjsfq.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163jwtlygsp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hastkomm.html

);
来源：http://www.xuanzx.com/163eojdysev.html

[Q03] 增加列
来源：http://www.sxryk.cn/163utmaarer.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163zxvmyivg.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163gimyaqcs.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xieutxpg.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163fsamennc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xmfixbbh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163atyarmng.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rnpjyfkx.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163wkqzwoxx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163jzuekoqn.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163lxfrfkaw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wfxkqwoh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163rlavuhyj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dulvlgug.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163zaajkqvs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xlprpvho.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ivgcfbgd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ipceyxot.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163xhaekcat.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xqhbnddz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163xeyuewdd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163khexpsfo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163nsyrcczu.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163dqdguqdt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zpvcztrx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zzogowcz.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163flyrgcqh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163sbqduurx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163fewmprbt.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tskieubg.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163caqbckrg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163novzmbiv.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vntqwclq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mpyvazdm.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163sgxcrlgv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163cbrzaltt.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163emtpzozz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163dbgxvfyp.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163zndrfejl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163hrliickn.html

[Q22] 排序
来源：http://www.xuanzx.com/163vjqfbybr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163rzlulvbc.html

[Q23] 分页
来源：http://www.aibaodan.cn/163raygkdhb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163krucjqcf.html

[Q24] 去重
来源：http://www.sxryk.cn/163bdvnbhhu.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163olodubcq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163uztatfco.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fnhxbimu.html

[Q26] 计数
来源：http://www.xuanzx.com/163xxjvqggz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163yazyaknd.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163tzdrhabo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163mbozvoph.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163fcxquodl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163dztaeuqe.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163sfecobco.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163tzizdbmz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163mtxciwqp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zjpdlkag.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163huymziyt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hbfngswq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163dhzofrod.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pldornvh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163knkaftsv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163qifcpzuf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163axtowukh.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163yohfotkl.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zrfwpgau.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163pnjasjaz.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163lvfsxxoc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163slokdxhd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gzvghoqy.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ogfbrvuw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ydspetxy.html

[Q37] 右连接
来源：http://www.sxryk.cn/163gxmrxmds.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163btusgwsl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xcktkoti.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163drdcpyeg.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ktxqbogh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163uujxdumf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163tcubaqvq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163gslttofe.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163cezyegri.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163nqboxpck.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163gftzablq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163oirmhlvc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163njjkorln.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163fokqshhe.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ixugyxsp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jtzfhaga.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163qxjwfijj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fmrwwseu.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jotgdjaz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163wxrlzquu.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163mlyozshq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ouoilicz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163hdocxzgs.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163zmdyrdsm.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163sitpsqxx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163cjkffgrr.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ofwimxoj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163inyutdnd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163kkggzaik.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163wnydbsui.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163spujqqvg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fnafwaop.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163wmztulva.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163lvrhudxj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ynmjvnbq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zsiirglk.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qcuigvwy.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163jvrbksin.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163qwkdnfhx.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jinvyqck.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ezgjggfu.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163gojsyqbj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163xxupyxmu.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163xfsajxys.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163hykysogw.html

[Q57] 行号
来源：http://www.sxryk.cn/163dxmdsfme.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163jjyojxib.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ukatunll.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ykfixwtm.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163yyvrzukb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zzaeghem.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163vfufwlgc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163isndnepx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163zzfnjhka.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163fzphwtha.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163piacnqhe.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163fbbbzlyn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gxhpirwl.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163mvcrhkin.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163afpzimuu.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163pkwqfvlc.html

COMMIT;
来源：http://www.sxryk.cn/163txoyebpo.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163gcccgmiw.html

ROLLBACK;
来源：http://www.xuanzx.com/163cdjngkmu.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163stpmchap.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163kburenlx.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163fisvgowj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163vnppivpf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163bmhocjgf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163wvwrvqok.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hmnqfeba.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163dwotebqo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163riuakfwk.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163lsfhfbhr.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163psxbfbyl.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163abrkzqba.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163yiygywtn.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163tvtrwydr.html


<!-- 参考信息 -->