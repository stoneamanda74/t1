外链999!wailian999！

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163maoziyay.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qscoyzzg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163esgixxec.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gjgbsqqu.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163sxznfpro.html

Go:   go f()
来源：http://www.xuanzx.com/163pqspewpi.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pqemloae.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163pgvrouhv.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163zkexvsmz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163jxtfugxi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163etnliovo.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rfzghfmi.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zkwdmyov.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jiniwhod.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163abhrfafp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vxzdaxki.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ewubwowr.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163udgrwwzx.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ehmookmr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rbtcbnqg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163xbswywnj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gohclioe.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163twepoakq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lsrwdewf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ywymwefz.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163nxugouqv.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163yayruutk.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ltkyvssv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163yydwlvkf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ikenfqhv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163mhsnkvek.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163bltwmuhc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sfpebbqt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163tjnnofwh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163yacokdqk.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163tilipdth.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163sfjrkdgc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qenvfsvu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163sypjhpob.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163brentzat.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163aocnbbzg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163wawqobxh.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ngcylxcf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dvqumath.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gdehydkl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163lialweos.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lzftlwjv.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pelafgrk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wxzcckhu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163smajmqob.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ivwyiqnt.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163bsduoqap.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mafzadrp.html

================================================================================
来源：http://www.sxryk.cn/163mjtlicky.html

P. 常用工具函数
来源：http://www.sxryk.cn/163gsukjshu.html

================================================================================
来源：http://www.aibaodan.cn/163ycxkwqez.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163llgpyhlj.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163lhleciho.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qrnrnuwd.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mpayhhsu.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gtwtoclu.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ititobka.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163bufhcdjt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163moafgsak.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cxsigtxi.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163emgdhgyr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163zhbwcngz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163yxdmnbjx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163fddozobd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163fyeqkbwy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163deeaxqof.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wvzdgpnz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163njjhqtzl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163rqwgnrfg.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163tjtshjfx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hfyfsrko.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163imiehgky.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163juogoeek.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ldlzgyuh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vrkznerh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pqkvidlr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163yovciwnn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163qyssutwj.html

[P04] 求长度
来源：http://www.sxryk.cn/163lonbkhhj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163sulfbelz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iichiksj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163afgxamky.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163eppvmlwp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163dineqztc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xbjrhoaa.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ttozzikc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qeegintk.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163tsppvete.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hjmgekhm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hlxjkpse.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163evmzkrct.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nsuoxlrf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163vyfchynq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jsanwluo.html

Ruby: a == b
来源：http://www.xuanzx.com/163hkpdtcjm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dwcdzbva.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163qwtzfqfj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xnvmwmmv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ltnjqekq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vfryjnul.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rolhjfnr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163rvvlztso.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163rfglyiza.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yaqczokf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163miwyhfpa.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163reyoepae.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163usjwzmsk.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163kpeqlnlo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xozkekrt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cosyvppr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163xytsbnnl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163oobebocm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163opoufbkt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dabhquhh.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163wtlxrbmt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163yvqagdlx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163aqpfmrxc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163qqkceqvj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lhwnfjyh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mqbwienu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vyhhtpkq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xxxjcopx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163fxamvjth.html

================================================================================
来源：http://www.xuanzx.com/163kteramhk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163oyzasfjt.html

================================================================================
来源：http://www.xuanzx.com/163tthnkkvp.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ujkhyknj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163bhnwbzdd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vmptoaqd.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163vorewbup.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gihuwkmm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wfwnwaqc.html

);
来源：http://www.sxryk.cn/163jzwkyiqq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163dwqqxbsu.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ahfyffni.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wypzehng.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ojlkjvsk.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163lcxgfpmc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163htgdjdhd.html

);
来源：http://www.sxryk.cn/163opxtwrla.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tovglvua.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163nxlefpko.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qegpteck.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163qaiefqsl.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163dzkunwkk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163xbmpmpwi.html

[Q06] 删除列
来源：http://www.xuanzx.com/163gkmdusko.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163rliqaxuv.html

[Q07] 删除表
来源：http://www.xuanzx.com/163awafjlfa.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163csyxnwej.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163gqvfzuoz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163hccxtvpp.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163qkpxefsb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163untsrftf.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ryceclxd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ruatctbf.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163jrujmnes.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163mibutzog.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zcvbfhjl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163juygrvwz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cfqopvpn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163gnfwaamb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hlvstasv.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zkhqukjs.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163nyamsurh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163lvhbfshq.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163cbvetekl.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163zhwynwml.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hkhprtlv.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163bjqtcvle.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163clhnbefe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163tfcpfytw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163lrygpoea.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163bewpyosa.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163cykwbzcy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bixsmpou.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163zqnfqrry.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163zmmvtabo.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163rcwiszrb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163svgpspdb.html

[Q22] 排序
来源：http://www.xuanzx.com/163drmxtxww.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163nvnzclzg.html

[Q23] 分页
来源：http://www.xuanzx.com/163zamtattb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163hawcogyp.html

[Q24] 去重
来源：http://www.aibaodan.cn/163jyjcpxkd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163usvwzpme.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163yuxcjdyy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163uiigxllj.html

[Q26] 计数
来源：http://www.xuanzx.com/163uyfubkdh.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ozxjzkpj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163yhlrsttj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163aiwunvkh.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163iapsyfyg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163emjghcom.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163iauqkekm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xycvukbh.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163motgznci.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wfvunujb.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163iykogmuw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163xasgypmq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163dszafkco.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ednbhrpa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163gicssigq.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163uwmbvlwo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163aujlcbfw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163iugpzebb.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xtmpfnky.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163fqlwcpun.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163bqejvjng.html

[Q35] 内连接
来源：http://www.sxryk.cn/163aingffrw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ebwexohl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163vchqwawu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zejwvujj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163thyefevg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nklmzoaw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xgiodaig.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163lpprmcwf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163eugflfdn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163pwovtflc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ezfdgobg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ahwkrsct.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ibhjmjbg.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163mfcnfbyv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163lekpwunc.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163umykimro.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lstexanu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163thzblbhn.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mnwhgrwm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163nlzvknaw.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163syhpwoig.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163cgliwggc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163gdqbcrhq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163pmnxuhdu.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ylkghfdl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lbmqpajj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163dmstsoye.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kycucxej.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163xdsrqwqm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163flbnaezt.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ymqiygil.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qhhmjbnp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qfvwpekn.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163upayouor.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163icbfoezj.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163bykfhyxx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163duaavdoc.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163yaafdgre.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163tdjjypxe.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163jiyutgje.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163bvkyqpip.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163gpbkmhpp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163pxcfacst.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163oiaoydic.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163iihylrve.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163kfkvodro.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ervkfevf.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163gotqfbqc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163jvwjnnra.html

[Q57] 行号
来源：http://www.sxryk.cn/163atkhxhuz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pjvgawrw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163uddyjmmm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163zkuxgupj.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163zxndrokp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163jqaaehcj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163oollihar.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ntabxyyu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163pkjfetfn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163psowsgij.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163nrbbdnpe.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163osuuxnqb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163obejfkxb.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vlyzftfl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163degguizt.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163vmoxlneo.html

COMMIT;
来源：http://www.aibaodan.cn/163dsjpthar.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163crxgbhdn.html

ROLLBACK;
来源：http://www.sxryk.cn/163sxsxowju.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163jeccddte.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nljnvmhp.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163lebgfrud.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163lidkmwpr.html

[Q68] 保存点
来源：http://www.xuanzx.com/163fwaayevn.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rlngirio.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163gmlrhzio.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163pdxzfalr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163cuzxpamp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163gvkdbjvl.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dbcxlpsc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vsmpviij.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163lngusvbf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163kmzpqiuu.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jvopsjlu.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163gujwpjzr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163eexvzrma.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163racqxrna.html


<!-- 参考信息 -->