外链999!wailian999！

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163miqokmow.html

Go:   go f()
来源：http://www.xuanzx.com/163hoeqqams.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163oyfoinrm.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ubgtczbi.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qyvzbmtx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163onpgrhzc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ybpeixka.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mdgthvxb.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lajckcgv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163afgqmqao.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163aosdkecp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163uozidier.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mmvbkxbe.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163plnddnxx.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vznjikbr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ldyklicl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163modwfdmo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163awvafkfm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163pkqnxdjt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163wnmqfick.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163jdwrrzlt.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163mzsbdakk.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163exxxyxfu.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163rywfmmjx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163urwkpzlg.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163aumrzbbu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163cmhadxku.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163gbvqgiao.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ciyysgdk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ckknhyps.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163entezjjk.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163pghkzzkt.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vwmjfqjk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163enqiwbpn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163woyxides.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fpkrhisg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163lkxgkyxb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163jvtbjncr.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163tiipcxmb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163qhiwxtcr.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ylevelxu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mcmxbpbg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vszkufqg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gqrtdxvl.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lwtprlsv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vtnwoqcd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163sqtjsjnd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xchhitjq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kchockxn.html

================================================================================
来源：http://www.sxryk.cn/163snesnxtd.html

P. 常用工具函数
来源：http://www.sxryk.cn/163jizvjtlc.html

================================================================================
来源：http://www.aibaodan.cn/163xtnvijzn.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mqvtovhs.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163iamkqoox.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rruhcxow.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hbsbvmlg.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vnwcgsdw.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163mrfkemxp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qjgnkfqd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163jbaxcgii.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bfghgmnl.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vsciogxu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hrzncrxw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163wgplmwqw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163xjlhcavq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163joiwxdjy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163nodulowl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ckmgdksv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163aroleizh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xgxnoxyl.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163jcstjvqe.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hwljetjh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163nrqpmiiq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uhdpwmve.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163yfnabcvr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ccxowcdm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dosyzjbl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163leyjvqqo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163owgaocet.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pxbniwje.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ggfaajrd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163opaqeffn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163reeeyvrs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163figutzwa.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ajnerqzi.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163nfdmgblx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gjdzzudr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tcbldeyv.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ndjxsqlv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163virolesb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163syegxmil.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ddlwumuh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bexgctwb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xljcvafw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163xxwspawo.html

Ruby: a == b
来源：http://www.aibaodan.cn/163pxbvlzjb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mirwinfe.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163plugwcwv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163jqmdiaoi.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kmopklqw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ltewhyoc.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163hlvpcbdm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163fqihghwd.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163avyrjqgb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jnejkztg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zmtjizih.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163rkdyhimk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163uwrcsthf.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163kbolvics.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ejskimmi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cyzauftq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163balezgpp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163lxjsgdfk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163lxrtbaen.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nxqchdbj.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163pcfpgepb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163lxculrou.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163lhrlwekk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mokkotws.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163qecjmplc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163moizckhj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163frnfciao.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163efdzdmdh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bvjapill.html

================================================================================
来源：http://www.xuanzx.com/163cspvkvlw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163vxgnfbgf.html

================================================================================
来源：http://www.aibaodan.cn/163tlzvzoat.html

[Q01] 创建表
来源：http://www.xuanzx.com/163olkgwhdj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lffqberq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jarbdesx.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vgrwlwhf.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163nkqtjkha.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ldhdujmm.html

);
来源：http://www.sxryk.cn/163difqnmsv.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163wwgotqyw.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163aeuesbjd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vfuukyks.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kdeofqja.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163sifoxlmb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163cmcixdxv.html

);
来源：http://www.sxryk.cn/163ydocbqrv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163bbxmrvbb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163xlpocybl.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163cirqcglu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163rhwriucl.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163hzptkadt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hhdbdovs.html

[Q06] 删除列
来源：http://www.sxryk.cn/163xkuklbqa.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163jvfszdxw.html

[Q07] 删除表
来源：http://www.xuanzx.com/163yiblpqmy.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ksfrcytm.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163xijmqbld.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163aembuzpy.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163rdittjmn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163lyutrcsu.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163asexyajv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zdtzbshd.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vmuzepax.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163wlszkkpv.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163cdkpfbqu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hfdpltza.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dcjvpngc.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ahdsxvxx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ctvntozu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yvxhxjpx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163csfkccds.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163sqzxqohz.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163yrrtfntn.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163pnlxlafg.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163hclnxrbs.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pgsyryjc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ugmvovex.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163mqeouixt.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163irbajyhr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163oaogedke.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wjfvieie.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163jlniifiy.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163oghlwpsn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163onncajpj.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ctuuvpyw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163utagajhl.html

[Q22] 排序
来源：http://www.sxryk.cn/163oxwwouxz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163brymieoz.html

[Q23] 分页
来源：http://www.sxryk.cn/163hucxaelv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xlgbueiu.html

[Q24] 去重
来源：http://www.aibaodan.cn/163pnfipdij.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163uydrdkuh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163nasomhla.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163sycujykr.html

[Q26] 计数
来源：http://www.xuanzx.com/163mzatcqft.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163mqiiwhau.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163layxfvrx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jwghjjpi.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163zrxvcffa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163itxmbhac.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163xssuajdr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163vwcbddoh.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163xralconm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lwoyskpk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lmnjrigt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163bftaqtoe.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ozbezzzy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ldmcwcrb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ndbusfxi.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163whaniudi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163tbmzmiin.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163bujrimpr.html

SELECT * FROM (
来源：http://www.sxryk.cn/163owfptxzd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163swxywhef.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163psvwcmgs.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pqnkxgik.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zhqzivlv.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163bmevgies.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163smtszzvn.html

[Q37] 右连接
来源：http://www.xuanzx.com/163pviasmhp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nnciuvzm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163tourgzzu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rkuilpbx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163nrdxkwzw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163bqwfqrdr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ejdistfs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163gliacqhm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163rpgwoemp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wmiragwv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ywcurtcx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163lxfoqjjd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163sjowjvnp.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163bsprhrhf.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163flhcnnhd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163osvpjqxw.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163yhjmqojh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ermvhsst.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163swaudvsc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163tytnqlpo.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163etsoawkk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tzboshfa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fqjdmzjb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rvohogdf.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163fwfqqplu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163dgwxywae.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163qimpoocw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163nhbeadru.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163lhnbarbc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163snbwuibk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163shbxotqb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ogguofmr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163zzfqppdz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163sbclqiag.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163hymcicsh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163hddcagyr.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163gqsdvlau.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163afycdeyj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163fmrqakbd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163flrhzpfu.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163nfqhynfe.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fabnmrzm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163gkrupide.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163faaykqfj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163cxhhgwci.html

[Q57] 行号
来源：http://www.xuanzx.com/163wvsyvmxs.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163xyrewjcg.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163rhjegtfn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hningiff.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ooxwlfhm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163osvlnctk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tszpvjnb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jqzpcaey.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163hsqsjitu.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163qbkbnaeh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163whfxyvhs.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163iwlzeors.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wotapfgb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vjkmojcq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163elazgrcm.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163uoovrhky.html

COMMIT;
来源：http://www.sxryk.cn/163mfjndavg.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163huixrfkx.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jssjtyai.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163qvsesqzv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163aazugoss.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163sctemabx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163oadkpeia.html

[Q68] 保存点
来源：http://www.sxryk.cn/163vezohrng.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vjwllfmc.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163hfpnootq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163lutdgjqg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163mhvilbsj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163idceoihz.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163aeijixal.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vkyomqwt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ppiovbzz.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163kkyckjul.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163kryapwza.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163nvrorqqs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163wiyjzguw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cjzrivfl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163yxrbcivr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163dywpqqah.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163bohbtblm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163cqjksssp.html


<!-- 参考信息 -->