外链999!wailian999！

[O02] 使用线程池
来源：http://www.sxryk.cn/163vznqhgjl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163hfcevtzb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rqzhhnuu.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qpojqtyn.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163obcvvvyd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163yvioxvuz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163tlsjgmbb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163gaswdvxn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hhswxexj.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rfxnfrby.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163pusimuzv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163arbpyxpi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163yzgbungg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163adyomuin.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163gdochluj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kkehupbp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rltserhv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163cfbtijjn.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163zakzlier.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kaseqheg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163huczcwkw.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163hyqtriut.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163oizwneut.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mdjnvqpj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163fvexayap.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163efmaurqr.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163eyfywzvd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163jjnfjrct.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ygonwxst.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163adtkyuab.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uppwxcon.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jpwmaaub.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xcvvspto.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sopulvln.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gbasqafp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163djvjteyg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163xywkuhwt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163gzascopd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163anemcgum.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163txwpmtvc.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163brnbjgrk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ptngcgvc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163kizxmrsr.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163inlqvipj.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rqlsjshp.html

================================================================================
来源：http://www.sxryk.cn/163iltjzcgr.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ubifndtt.html

================================================================================
来源：http://www.aibaodan.cn/163heidjblu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163wxjayoeo.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163egwspnot.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163kbhsqoqg.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163htrubdpe.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qlcokhgi.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163rsmvyauo.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163pszlvyxp.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163jyiiwyfv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163nqxfbbjx.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bgfxukoy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163wtfvjhay.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ixmujnih.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jcfwrmik.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163kexfjxyp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163hxyilvws.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ythqtcjc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bajwcttb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163wqkwgoyh.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163rneohynm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hhgybldb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163szhemxsr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vvlhgdln.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ociekwqt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163nunqtijp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163lxjjqtfg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163hanxrweg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163xwzvjten.html

[P04] 求长度
来源：http://www.aibaodan.cn/163tcpmlopr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163gacmlgsj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vskryygf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163axwgwrgi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163atorvjob.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163eisnockv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zywissmx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163plsjyngm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163zqunczst.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wwmjrjik.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xdvbyqph.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ymnhtiko.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163skolsbud.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163iglozppc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ldczghrl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163iufnihyz.html

Ruby: a == b
来源：http://www.xuanzx.com/163yfxaqfas.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zaqexfdq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163vrbbvfgc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fucbtsbm.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ckpzwqlv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163eizfthvu.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163phqbqhrk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163fhrmopih.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ebogfwdu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lfnisyvk.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163rclslwix.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ztqmnlpc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ilgczvxf.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xrxuiylf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rgzketeo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rpjjmzbu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163wgokhhxp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163fvypfkgi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163fhsflnfg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163pdziolsj.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163sykeiczv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xcoduepn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163yllctvhk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kdoojlgn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163wmbgvdzy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ihpxyicc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ebginpmn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163dmukvigj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qqgvrvnq.html

================================================================================
来源：http://www.sxryk.cn/163wyhlqwnh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jdmmfmca.html

================================================================================
来源：http://www.aibaodan.cn/163omzwvyml.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kegazmun.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ftdgyzfj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zsejgwlq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163mlgtnvfm.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ytrlvvvr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163pkdegwnx.html

);
来源：http://www.sxryk.cn/163cgusbjpl.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163kighsopa.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163cymjkexy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xsctrfgk.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163tzgqnwkr.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rqxjyvxi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163vjwewyev.html

);
来源：http://www.sxryk.cn/163jvowbkcr.html

[Q03] 增加列
来源：http://www.xuanzx.com/163nibtexad.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163iersowct.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163lhagbogu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163tvxbyrcu.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163tjuqmvqy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163wnbwrhkc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163nxeoubdy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ifopdzxg.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163sicvirvp.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163julruzxx.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163dqprxowx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xjtszkek.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163goyshccl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ifcihlrs.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ablxsrze.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qqxshaln.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163qokibacl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163sfhpldvl.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fzepswdc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jgbumrtd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163uyviqsor.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ksmjpaxr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zabruvjb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163brjzfzwi.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163nmenhdjb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rtgjkucg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bbccyvym.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nnwpfayh.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163rwxzbcfg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163rdocgjmp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163cbpzhzlt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lahamowc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163nyklaxeu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163pqvzhihm.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163dgkzhqay.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163soorthyl.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163uehuebng.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163exualsar.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163gmrrwvep.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ooysnmgw.html

[Q22] 排序
来源：http://www.sxryk.cn/163xpvpqwlk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163mmbefjsq.html

[Q23] 分页
来源：http://www.xuanzx.com/163mlvactxo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zfasolxq.html

[Q24] 去重
来源：http://www.sxryk.cn/163ryeyjyyq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163nrvpqtuc.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163tzehvjrk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163oaxippnm.html

[Q26] 计数
来源：http://www.xuanzx.com/163slzkxkvl.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ohrzmgty.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163xbfsawpj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163pseeryjj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163wwfycmzf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163bwecgudr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163otqjnvsb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163wwcnkecx.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163svvpnikw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vmueehxp.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163xedmxxuv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163rwpqpmrk.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163fpuufshl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pienhjai.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163bzqicejz.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ljuruuat.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163scmwgydw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163nhwsrlhs.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163zaytsjkz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163lebfmdjc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163vvcptyux.html

[Q35] 内连接
来源：http://www.sxryk.cn/163tafwiydr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mzruhqqc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163pprdikvv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163twrubvcc.html

[Q37] 右连接
来源：http://www.xuanzx.com/163zvjtcfnw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zaigigle.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ghhbbiow.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zapmuyio.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163nzotkedk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163kqbczdhz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163rxmpkyoq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vqtqinwd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163avogqgwq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bezlecfo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163rkglihnn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vyisbsmm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163txbjamkw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ovlnbsus.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163bxmnqifd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hpxyjrud.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163jrtfdktl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163eovmrraa.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163zxqunopx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163koavuuxs.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ajgyoxwr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163thfnwufm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163jdmvsina.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wusjayyu.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163rpfypgmp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163bibqvisg.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jbttuopx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163zgfbidez.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163loyseyuq.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163dacbsoti.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163bzyvkzds.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163yvvydrqs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163svsqjjiy.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lnmjwvbz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163tmsmrkqy.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163uimvjyfg.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ijlomfzb.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kmajuggi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163axktjxhz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qgeaxaxp.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jolzeucw.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163whrunriz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163qnparxfr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163atejxkix.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hsoxcpkn.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fvjzrkup.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wfnmueej.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163vhbirxch.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163bjcqechq.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163lwscsfig.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jmpxzigj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163evlopuxz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163fnwwuwjn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hxezlyps.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jqnmquje.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wwhetebk.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163vmhoagbk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dnkhtome.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163vnenlwuv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163kictnupg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163iqpbnenq.html

COMMIT;
来源：http://www.xuanzx.com/163iukzjecz.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ziorobvc.html

ROLLBACK;
来源：http://www.sxryk.cn/163bmkbdnvd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163oktlutyw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163xfvixkva.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163weoedmvi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163gqpzhynt.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tzamhopp.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163eolvrviz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163erubgial.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ghcgnzui.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ldhtbvkk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gadvwqbk.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fezrvjit.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cyanoehi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163mluomnhf.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163nbrivhcx.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163sbcddblc.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163rlsggwjs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163dqyusvtt.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163peebivqb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163fzddzxev.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163wunlwvxx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163egbxprfc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163fciiygje.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vuiatfzl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pgdywdsg.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163cmaaerji.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163xyeebnpe.html


<!-- 参考信息 -->