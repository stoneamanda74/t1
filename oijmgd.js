外链999!wailian999！

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163npnzsfdw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163srntqwjm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163vhdidqax.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mpjzcgiz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163vikvuyhm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163exmimjui.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163bxcmpanb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ivelvxla.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163phwkhuzd.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163lttjjlbc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jrjclwss.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163rtosmqfb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163smnumdec.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qbdiffir.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163hpuomclo.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vrfsufeq.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gmtweuhw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fwklunkq.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zoqriiuc.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zeqapzmf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163afgjgyem.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163zevieopv.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163axhjopjg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lulemkbi.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163axihlaow.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163hxjfemdl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ipumthxw.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wmiapdza.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zjixjcaq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163cbmcktut.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163nnvynmum.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163wlddqajx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163vtblyius.html

================================================================================
来源：http://www.sxryk.cn/163oqjylwtk.html

P. 常用工具函数
来源：http://www.xuanzx.com/163xwhqsbta.html

================================================================================
来源：http://www.aibaodan.cn/163bieduhlz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ebhhmpsn.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gpiykixz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ifuthppf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hscmiour.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163akskkeuq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163renvtuhj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wdbcliry.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lgsvbnqz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163oywpxpci.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163jztdjhgd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163jglcgbsv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zmhqulgy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163eiizruya.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163mhpkkhhh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163dhqxfboz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163hntiurby.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163emcwuojr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fmgautmt.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163sagikrxn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163tssqqjgq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163djjempeo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rmovmxyb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jsctdqqn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rvwejvpr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163kylfbkfl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ahtlydvq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163nkopxrok.html

[P04] 求长度
来源：http://www.xuanzx.com/163mtnmmrku.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163kentflqy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vewnhncx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jhrudktk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163oeyhvrap.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163frjspmqw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163nakanjsx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xtpmhyqn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163lryadzyt.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163wzzblnxr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ilfmbbag.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163yyyghaoi.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lwgzryxx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jbxfqmxf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163plvarahn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163aveuiawd.html

Ruby: a == b
来源：http://www.xuanzx.com/163jclpckzj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kblocfgn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163kyfeysbv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163risnimxu.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163offponxa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163herpmqwh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ffmgrbfc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163gohcbhzo.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163jdyjlpjg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ckunflpg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163btdzqyke.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hijqbofv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163drrduntv.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163segbpxjo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oanxaeew.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jejkprkx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163oateeeps.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163lbhozuyi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163lnunimeg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ftaeakoj.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ayjwbewp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163vcyrwzda.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163elkviihp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rrekngpu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ilmwergo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163whzcezms.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vghqifrg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ywwtsskj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163crerwxie.html

================================================================================
来源：http://www.sxryk.cn/163xfhiespn.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163sqmpvcrk.html

================================================================================
来源：http://www.xuanzx.com/163tzftqqwe.html

[Q01] 创建表
来源：http://www.xuanzx.com/163dmuyvkwl.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163gldzmdoc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163pdlsildf.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163cnyxtvne.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163nllvszpv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163yiaepnot.html

);
来源：http://www.sxryk.cn/163bqlquuxb.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vlcmhrea.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ndejxqtu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pfwnwodh.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163mayqrklr.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163zhsqoxzf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163aaxstljd.html

);
来源：http://www.xuanzx.com/163uygmdhbo.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163gyuxlsts.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163phtahdcv.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163gxjxcyaj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163bkogcvzn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163gcnrtxpm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163tfcpzkxh.html

[Q06] 删除列
来源：http://www.sxryk.cn/163qdswxidy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163vrgztyyp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163mjsrbbzb.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kufmqcqo.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ldxycdow.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163wamuutvm.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jlaybddy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163yvhktpmu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163zgpukezr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163mhtzlptv.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163aindmyap.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ytsrimpn.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163avggjobf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163cawhutae.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hjpqgsbz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163nkzmvinr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163cwblwotz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163bwcdpbjl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163uxqwwcqh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zmhmoidl.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hpqzjkfl.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163lljeahsg.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163uawdikaw.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163oygovyax.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ulagjnuq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jaqfsroc.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163uylnipro.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mbxjzjnt.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163elymuvrq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163luvpxlim.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163luubqxwy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qlclzmmr.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163naresrhr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ubbclvtw.html

[Q22] 排序
来源：http://www.xuanzx.com/163tmxgpvxj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163sjhvztbc.html

[Q23] 分页
来源：http://www.sxryk.cn/163voxrxxpo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ysfjunfj.html

[Q24] 去重
来源：http://www.sxryk.cn/163txcdaqyg.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mhvwhtpj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163cydwqblp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163kqvjnwsu.html

[Q26] 计数
来源：http://www.sxryk.cn/163kfoqfepn.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163utoajhid.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ssmmwmbh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163owkyfflt.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rjeowwql.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163anwhfofz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163phhnnrln.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ukjwhjcm.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qfeuuflb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wrplvchc.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163rtsovgpt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163nkccbbjm.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163rhggzoci.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163scstxult.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163gwcltxau.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xksnceev.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163yfurakib.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163qecclgzo.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zwjkjqat.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tjjcwses.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ktqmxmjp.html

[Q35] 内连接
来源：http://www.xuanzx.com/163dssemhla.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xnlqzlmb.html

[Q36] 左连接
来源：http://www.sxryk.cn/163yeknnzhg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163fvgnsdvs.html

[Q37] 右连接
来源：http://www.sxryk.cn/163iucphfip.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163srkqrfqf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163erjlqxkm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163zxftowam.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163yxhxzcqx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163chypkjch.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163sglmhmzc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163jcooypmr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163liigmayu.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163hhzrongv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163cckwkkuw.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fmvaavvo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163axuteeql.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163kzwpqube.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163nxwrmsdx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ksjtfrbv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vfmjmaar.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163rnfrbdhn.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163upkbtsds.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163jipvregi.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qrahgvet.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bcbtskrh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163fbtyqjdp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mbtoptdr.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ruuzyeqn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163gpuyulyd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163quwkucxl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163abjsplid.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163jcsmpalp.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163krbhskpt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163iitvkroj.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163utmkdhpx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163frrjdcqy.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163svdtfsmi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163bldekdkw.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163xehpwgpt.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163okxpzvdp.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ohmueboo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163gbrjhbac.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ygvvmdrj.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fmgykwcv.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163irbctqjf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163hunmdyyo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163mjknudxj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163nlsoekjo.html

[Q57] 行号
来源：http://www.xuanzx.com/163bcdvjnhb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qlnibhbn.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cgujjars.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163bikodtwf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kzksmgku.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163kpjjxsfk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163xqnoxgen.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163lnrbwqgl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163lrbutksh.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163kdlduoea.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163yajytaig.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163jeljuhpa.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gtdbevkm.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mhfmabcq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163cmwrtkvd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163dkbidzsp.html

COMMIT;
来源：http://www.aibaodan.cn/163pjunhmed.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163yohvmyyg.html

ROLLBACK;
来源：http://www.sxryk.cn/163wbkxjmul.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rwnrmyaf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ufaiehfu.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163rdzlzior.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jnyyrjiw.html

[Q68] 保存点
来源：http://www.sxryk.cn/163opkmwsvd.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163tepznrck.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163bsvmntxq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163lkvdnati.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163babqayny.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163gbwhfdpv.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ifinnxfz.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163hjooqbpy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163nwdqoljw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rajflffr.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163nomruupk.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qbadwpor.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ozjgorlf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163bnmmvwvi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nknzlgfo.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qqrjsivt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163hxjdqhgd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163oogwearv.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163yqzanzws.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163mqjhoiuv.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vgoenahi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163egezbang.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163tyxqnwma.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163nuaxujjq.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163veidkpqp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163cguuhcta.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163rxswiaxr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163girflnhj.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163bzglqvoz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163qceigkjk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qtporkou.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nuqipfbr.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jnzlzvyh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163aovjigvs.html


<!-- 参考信息 -->