外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163aejhvpch.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hvqtixgh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163cwusbrve.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dpovhvvc.html

================================================================================
来源：http://www.aibaodan.cn/163chvvzxsy.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ubwoxtco.html

================================================================================
来源：http://www.sxryk.cn/163bdamenvo.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ondyukuf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163msceuulo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163rsraeodn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163yxnwymrk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163svrcdtgd.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zzwylhzl.html

Go:   go f()
来源：http://www.sxryk.cn/163saswvpnp.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163roussbnj.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163noaekkkr.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163aheeervr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163uqgytwrq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163lfnlqevn.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kglbbrli.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163soxfwcpe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163vmuuuixd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cgcillyk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163bwuhgong.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163bpossutr.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cxlknlla.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163gpilqtfa.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ivgtgzzs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kvvvdaih.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rtmteskv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163toogaznm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163jcsamsgn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kzffafde.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vmopppmo.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jbneckks.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163pbyyizme.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jtsgtxzu.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tjzzzalb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163tqpdisdj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163nvbtbxys.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163tcgjoeta.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ttuoykja.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gbvanfyj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163igfduacj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163tkroorpx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163illkwhca.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163uscecexc.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163thzegbwj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163uxnttdzd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hqukbhme.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dpxweoll.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163lhhkljvu.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ufxpzsso.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163amxatlat.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ramqbyja.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163arklxvjo.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163atdiygyx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jrpqlsjo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163smhspyyo.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163bdbumwrc.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163xceghkoe.html

================================================================================
来源：http://www.aibaodan.cn/163jobzdium.html

P. 常用工具函数
来源：http://www.sxryk.cn/163bhcsuyhg.html

================================================================================
来源：http://www.aibaodan.cn/163irchdqdp.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163xeoidoan.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163vreymbgm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163mcdyjpxk.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163biayddlr.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163uodfobzq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163juhokedc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163wrbnubcl.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163yuzpdwkh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ehutcdep.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163cknpjxqk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ljddzlqw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163frcoqowd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163rvzzsdyj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163egmgfmhh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163nrdcrqms.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gesxxeiv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163rbthtukx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163upfxrvhl.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163qmymifdg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ocfgjmnq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rlqmxbtq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gnxolakj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qverhjpl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163kuazhhxt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jybbmubl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163uhfmooup.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163hkhrfdky.html

[P04] 求长度
来源：http://www.xuanzx.com/163glluajid.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163nsozhaix.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hffcxzrv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zyyvpqbr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163mlmzvyhc.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kdscxvro.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163fctedhnp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163obtxwndh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zqsbdozw.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163wrjuhvxw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ntlwpwsb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163atydzxfg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163alvkktim.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vjyxkkbb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163vekcxmnn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163vfwjkdci.html

Ruby: a == b
来源：http://www.aibaodan.cn/163yppsagxa.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163wgrrjgwv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163bvfrikuz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163hytatwuj.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ozeqyxua.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163owtzvqgq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163dvblykta.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mwcnluht.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cevewjrx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163aoihfryt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163djoujyvj.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zamdnuiv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163csresztf.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163criwxhbi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cluavbxh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vbirnehl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163kcuadker.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ejjieups.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163dhppmryi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jngpzjlv.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163phmmjwig.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163hbgdpbid.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bvwlkvvh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ylozwwrr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163vzqbdttp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163nyqwlfto.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163cogrmsmg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163cyonwwsn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163dysksuok.html

================================================================================
来源：http://www.xuanzx.com/163hjxfifdk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163aivyiegf.html

================================================================================
来源：http://www.aibaodan.cn/163suxtzvhy.html

[Q01] 创建表
来源：http://www.sxryk.cn/163vfogxirj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163qkofxwcy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163uqbnxwgt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163lzrqjubr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wtxhaovh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163mcuyrxwb.html

);
来源：http://www.sxryk.cn/163ucjurpto.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ysrbtfpr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163gisvuwbv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163sfslaldr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nrbdlexv.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ayehsqyl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163agxrgldq.html

);
来源：http://www.xuanzx.com/163wgvhjqyk.html

[Q03] 增加列
来源：http://www.sxryk.cn/163dfejfjqu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163wtqlfjgf.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163cxhvinuc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163bdmboium.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qhsmbpwo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163anegaarc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163aoafpifi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163aqfxfjza.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163buoldonc.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163awjyrrbg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fuonoxwg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mlhemnus.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163iwygtlqg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163nzvdhqdh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163dbryxonk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163trczfkdo.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163yirsnnph.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163yvmifeit.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163bpncvmsp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163phagribn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163corsxdne.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163zufmhjzj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163rzanhzym.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163qyvrkjiy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163haqfizqq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163yhyfekzi.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163zkggcdrh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163hsomemcg.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ldegtgdj.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xjfpuqlg.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163nlfygdgd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ezxsyfqm.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163gmomdbgi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163bdhjkjti.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163jeelokzd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163tgqswifj.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163btfaiftu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ayzvdscf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163axhfakky.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163aqlqcwmh.html

[Q22] 排序
来源：http://www.xuanzx.com/163gelippoe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163pulueppa.html

[Q23] 分页
来源：http://www.xuanzx.com/163igtdsera.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ddinbefr.html

[Q24] 去重
来源：http://www.sxryk.cn/163ialevxoo.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qvuwrkvo.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qauyzhgg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163vxvcyirj.html

[Q26] 计数
来源：http://www.xuanzx.com/163rgkqexgu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163cxfdiyfu.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163kwapmneb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163svojhwsi.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163axpestpo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ovwdsjrb.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vwladwbq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dfkfdyrn.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163olztpetq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163icjdifid.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ympogfaf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ekxfcksw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163jznxolwe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tyrpyioc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zousdilr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xomypmbq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163tqazxvnw.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ycwxmkoh.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163txfadmaa.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163xoyxnqar.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rmkyiikt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kchbksbk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xubqtecj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ufsutbzj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dqsffugm.html

[Q37] 右连接
来源：http://www.xuanzx.com/163tkviljfx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163yrwvmrfg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163nujzvlxf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163whaawnyu.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163yfoafcmp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163savejpgg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xxloafkh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163grkawdkc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163pyovigtv.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163lgfkmiwx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kmfirasp.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163yfavppsv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163vmadknfz.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163lhemrppd.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163zlzmfffu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fngyaqve.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163glwxnfqq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163pyjhvvtu.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163wxvsuohc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wyqecfee.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oaiealkf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163rikjzsyr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vhhuujvo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xqsbxwdw.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mbejtfkh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163hvqxxvlk.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163amsrbfvf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163whohgxzj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163rbmtgywp.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ankjbtva.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163pykekxso.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163rplyakuj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163arjzahyr.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ampwprvr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163umwuxnnq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hfdluxca.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mkidaowj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163gvurudoi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163pzkjpsxe.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163uqtujolx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163bdeqpxrs.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163kdvwbnze.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163gvodvrwq.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qvarecwx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163futsxnoo.html

[Q57] 行号
来源：http://www.sxryk.cn/163vaggaggs.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163gijwesod.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163zlypuskt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163hmeffzew.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ugydwmuo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163pyocrman.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163pxmciblf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163wvbkosqt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163iehgmjxb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ymuyeicu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163zxvalccg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163voetzams.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ngoeehqm.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163jmtdweyj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163croaiskv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163hwkduhfl.html

COMMIT;
来源：http://www.aibaodan.cn/163myiyiszn.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wcxodizi.html

ROLLBACK;
来源：http://www.xuanzx.com/163ogfptvkz.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ugussvuh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nouugnxs.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ruumgkte.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rztmazxv.html

[Q68] 保存点
来源：http://www.sxryk.cn/163cegvjjgm.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ofnjngdr.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163hwszzpld.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163oivttanc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lihssnvj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163jezbgdut.html


<!-- 参考信息 -->