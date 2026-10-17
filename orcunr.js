外链999!wailian999！

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163euhjikbn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163igzktbom.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163stleomlh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mdnxjvdk.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ycndqxbe.html

Go:   go f()
来源：http://www.xuanzx.com/163xfqfcygy.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163wrrdsfwy.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rxlvkkbw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163fhadjjba.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163jfrqepym.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163kuqfatei.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nrfbolkw.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163eupvjdqd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163nfdjwdqf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163zqtemuoh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163fhlduild.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163gsrebpbf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163oxcftbtr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163cufzhxif.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163kehgdjav.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163nmrmtrpe.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cnnpbrbb.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zowvqpqo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ihgzgnnl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163qptjwxks.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163slkqaxpb.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xofplmcy.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qirqvlue.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163rcdupgrs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163kdnaldiw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ajqnvjyn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wmrfwrjz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163pbplnqtn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163lilznngx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163zkafqzbc.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163fwimnjul.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ulcqorha.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163sqdplufl.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jercysep.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fqlzjzfj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163dptetlkq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163uevixgjh.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163wujyxopb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163adqhgloe.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nqnbipoo.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163kffelyoj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163zaewjzre.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163oxfcfhuj.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163klsphcat.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163mhfyrrzh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wsbnbdgp.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163obypsolp.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163dgbfxezw.html

================================================================================
来源：http://www.xuanzx.com/163zmdhrnco.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163fmsumhqp.html

================================================================================
来源：http://www.aibaodan.cn/163nogcxkjj.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jbpbwbfj.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163soqzqwvv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fzbmzylz.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163afgwedza.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jdrpyhsq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163syenkniv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163sdagcnzf.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163jcuztuhb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163msyiqjqg.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163suranuup.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vomumqmy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163axmvpkzf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163tatkujme.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163jjsigbxc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qixsmier.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wvqxzihb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jadkeesi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xitygmdc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jcytofho.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hzdqjyao.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163edllsxvj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163dxuuhvqu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rkmmzobv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jtwfopqr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zmnhvndf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ffzvgrat.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lrrefwhg.html

[P04] 求长度
来源：http://www.aibaodan.cn/163opceikls.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ojwiqwtw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pzrfsrux.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zvfbgaze.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bvjacfvs.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163imsvpqaz.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163cvezlydu.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163awyvqjup.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163axjvrval.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qzdyvwrn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163hbjcwrtr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163yhqxdqct.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163jeesqypy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gpvpzjir.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ycveeucf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163yyojryiv.html

Ruby: a == b
来源：http://www.xuanzx.com/163jgdhmjkd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163objjtkrv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163krcjyoih.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xohdvlbr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163gjhtyuye.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vzqajsvb.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163vqdgumhv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163jgznswqd.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gmzjcgxw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163sgcibvil.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163pgzvnsvi.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qqpzmwpp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163mrijttuk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rfpstbgw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163eahwdpzt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tyfmalqx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163xzocwkqi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ekdpuecy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163rntoanms.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163gjaswgqz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fbummier.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163mgpmjfba.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163uvwntpxq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163haovkuvu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163qkeutuin.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163srcaphjz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163obvnbdel.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xnyordjt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nspyktsa.html

================================================================================
来源：http://www.sxryk.cn/163tgtynuuk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163uiejmdrf.html

================================================================================
来源：http://www.xuanzx.com/163zszfpiry.html

[Q01] 创建表
来源：http://www.xuanzx.com/163chebzexd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163alqixpmz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xoeosuqg.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163etcbgdyk.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pfwuipty.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vekdigij.html

);
来源：http://www.xuanzx.com/163tfhleabd.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hquozoeg.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163pewwzsdd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163uzgpnmen.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dkpsplhe.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163yyjqsrga.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163emscdcdp.html

);
来源：http://www.sxryk.cn/163ypzhxorx.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ybfclmju.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ezuudvtz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163cyysqkfw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163lvosmjth.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163fyhrsffe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hfqyuast.html

[Q06] 删除列
来源：http://www.xuanzx.com/163eyhobfhi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ydlfnghw.html

[Q07] 删除表
来源：http://www.sxryk.cn/163civnfttg.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163slvqzhaz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163brgxiqis.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163yalnliga.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163pkjsxcyd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wkkljrmt.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163bayfalea.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163uqdeugai.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tsxpdsio.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163tsxeqsof.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163rgvsjdwa.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163njvqwqio.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163hnlqlgiz.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163tytbdooz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163okpnzqzd.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163fzemwrix.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163faczcvcy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163fniqeent.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163rdwokuqu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163atybyqma.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zeuzxehx.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163oiegpdlu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ifvrhopi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jjsfmrfv.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163suwwyydo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hxuhpvug.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163znhpxzju.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qbimgvft.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163mqbcoxfx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163obedigzv.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163hicocwep.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xuutokql.html

[Q22] 排序
来源：http://www.aibaodan.cn/163dwicahwh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163drwkmvam.html

[Q23] 分页
来源：http://www.xuanzx.com/163kaytgyaa.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163xjemzaav.html

[Q24] 去重
来源：http://www.sxryk.cn/163gbbpcaqf.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lmlyewvv.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163npdzbwbn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ktnefijh.html

[Q26] 计数
来源：http://www.xuanzx.com/163syfhsmbz.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hmjtvnfr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163joctxdqp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kvnozkab.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wufvitvr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163elnojapg.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163yjfsfxgn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163zsvzjqag.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163mcyacrye.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163msaujqrg.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ydalbtwk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163zybpotam.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163hysehdmq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vejqunax.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zslyyeff.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163abkdhubm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163lwbmdhjd.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163fqnlqnxj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ihpbipff.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gihnnzwm.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ntdrnasl.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163tagueztd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wllkyoxx.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wkcbtxam.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pifbgmcn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ztbsmamj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163agvwdxyr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163uoypfjic.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mayqzllo.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ecaskfrd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163lhkdskdm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163fwthllkr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nsulezay.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163zkljyeou.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163dxfrduud.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163xhfnywwe.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163mxcbdtki.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163qwxhndol.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163adxxchks.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ihsjnctg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163czhvxind.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163kjhdjwcm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163bitzxeed.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163rcxkjqiw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163izlfmrcu.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ebrujbmq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pljswovj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163bxclgseq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lpuetrbp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163keakxaul.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163quczgqde.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163qqkfbmji.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163hkozbteg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ylmprpca.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163vnfobnsz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163cmxsjznd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163enshtxyx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163eiuiukcj.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yjvufdot.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163fnuyylyd.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ztyyryne.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163nyxocvlk.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163npukgkyy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163hwfnjaak.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163mfazzqfx.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163zgjbmcff.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163eeuscdzz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163yzbqrdmw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ksqomica.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ubxecvic.html

[Q57] 行号
来源：http://www.xuanzx.com/163cfgzpsai.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jbrbgtzk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ntspzwie.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163slbfbymy.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163lgiierqf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ykcrmpcy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163nljaiuqa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163fsofdfgy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163hxxjvkvk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xeripvqu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ijatgpjp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cdbgqlhm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dzjqkpke.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163cfctnppa.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qejdzwwa.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wqlziweh.html

COMMIT;
来源：http://www.aibaodan.cn/163cipknkjf.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163bdoobhok.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fisoskhh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163jggzbovz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163neqkeoyg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163vfkhckyj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163amwozuvo.html

[Q68] 保存点
来源：http://www.sxryk.cn/163cdvsksiv.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mccrievj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163eektldha.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163uvnemrmk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163mrfaavwx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ckiptlft.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ordiuovl.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163mcktoazc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vtnwlibl.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163jnjqdulh.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ijkvjpel.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163vdbkubru.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163tqhsfhcd.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163mgixwclu.html


<!-- 参考信息 -->