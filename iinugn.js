外链999!wailian999！

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jptzegwf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163luthvxar.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pupfgfil.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bbageyrb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163euuviwfx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163zaymzhtr.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163valomknm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163xbkuuryk.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ofjfbzsn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163rcwtwmsf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163bpljsjvq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163oykhpkmr.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fatvcgrs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zyojwliq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163rmojbivy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zvrzbola.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jbleeylz.html

================================================================================
来源：http://www.xuanzx.com/163czvrnulk.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ewlmpupk.html

================================================================================
来源：http://www.aibaodan.cn/163ovxyrizn.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163tqnvhgxg.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jacctvrq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163qnoiqxrr.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tjpzzasi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bszoxekz.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163nexvbtnj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dkyrsggv.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zlhmysbv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163kguyacbg.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ukazlahv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163endeshpr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163yqwmepny.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163hhtgoxrt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163motqmdpr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163azwykxwx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163izcdolxl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163hmozfvxn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ehokjlmz.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163oeeszcug.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ovyneqoo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ynsumutc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jzwgmrdi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163trcbdusu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ejngxtnu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ndtowwbv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163mpvisffa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163nsaluozg.html

[P04] 求长度
来源：http://www.aibaodan.cn/163wprsvxgm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ghgpgpby.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sxrmtndq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ainstsga.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cvlvcyfd.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ycmovres.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ffthgewn.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163hgqcyyso.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tibwrcnk.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ozoqgygd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163svwbttmg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163mdgdljpz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wryzfari.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163szvoidcd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163xjxzrxxa.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163yluugfsm.html

Ruby: a == b
来源：http://www.aibaodan.cn/163qtbmlnlq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163yyzynywb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ygonomxr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163oxuzyqrn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tfadbylr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163getqxwnz.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ahbigipt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lsjseosa.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163leciwdyy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163gtnlcxfz.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163tyagdqxi.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163fxmjwltj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qvhshnls.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163lzhsmgsc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wbdghamu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163plcmdciv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bcmwczkf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163hsjfhulw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vintbvdm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mvzkgikc.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163qhbtucfo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qyshftaf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163txonvfxl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163axuyacul.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163tmlfgejq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163safqcdqg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jsqlvhkh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163cvmckdvh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163lblyipfu.html

================================================================================
来源：http://www.aibaodan.cn/163jjcvandh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163bzjmuhqv.html

================================================================================
来源：http://www.sxryk.cn/163camlnptm.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163lwbgedpd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163vbeuewrr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163liwgcnzl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mhmbflad.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jrvrjwdk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163lavwqlyg.html

);
来源：http://www.aibaodan.cn/163cywwoxfp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163aeqjwpae.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163xvmgbnxu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tmpqhdht.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163zxbpwwze.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163zuolccca.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163nqdqtbkz.html

);
来源：http://www.xuanzx.com/163lvrnzsmb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163xkgtdwai.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163skyokelx.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jccdxngy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163tbpyzodo.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zpcfgmhe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163kbrioghu.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163lnmpgpxb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163viwpypuh.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163neifmgvu.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wvhkgrbv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163qbovwndy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163tornmfpa.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163yjhntotc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163nwrjtcik.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xxprbkwh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163viarznze.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163mhlwrpti.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jqccbtbf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xttbvffs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163vuhidsvu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163qxmseids.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163jlrhnuwl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163lrmkchln.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xuqeifue.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163cqnjkzgx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163lrvihvcr.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163fprbkefu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163zvtdqhou.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163lyannwhd.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163eqnxuxvw.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163pfluhcng.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hevjjima.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163glxbrkef.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yluzsaoc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zdfsnfpp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hncjpknw.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163fxqrpmuy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yzhwrdom.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163czvaafru.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163slydkutb.html

[Q22] 排序
来源：http://www.sxryk.cn/163pwrttdcv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163tscsfpuh.html

[Q23] 分页
来源：http://www.aibaodan.cn/163okdqqsut.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163mtavwuab.html

[Q24] 去重
来源：http://www.sxryk.cn/163mvwvqmgx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ishjwdzy.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gpneeocy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ibhjumur.html

[Q26] 计数
来源：http://www.aibaodan.cn/163bahsganx.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163sxsctsre.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dhbwgdeq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kgjubuip.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163nvuksvbw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163dlqkxqmw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163uyyhcjqq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163zitbhmep.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163gvfpfokf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mkjuditu.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163aheivdzm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kmjgeqss.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vsmkphum.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hwiyxhke.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163wmrmxxqu.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163cpszgsyy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163fafvcjnf.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163sedhqejl.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163grbrusbv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pcbdgdlu.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163fdzvyulc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kjdfpqjn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gclagukh.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163txdjyold.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gtxhvmsl.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rccnhnvb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163aziuawad.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163oiuervkx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xhlpfelw.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ilycmydu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163hwwsiubk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bydcvigs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163hawvgaet.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kootyoil.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163dmizrmju.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ascodbzg.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163rzvpyufd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bxqhzffs.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ythmjmce.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163uzftbock.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cqckvwgb.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163cuqpxsqa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163itzdjmfl.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163vtuzubwn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lojvigck.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163cxdjwjjw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mmztxkhg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163huupspqw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jpeimatq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163lcvudniv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jiaugsyr.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163rxvsluxh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vnytqpjq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163estkfibt.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163iyndrbzg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163kbdlikmi.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fuagztrd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163cvsxcnfs.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163fbagzpys.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zsmggons.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163eznbicou.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163juciabxi.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163jhrtcunj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163npxwczlb.html

[Q54] 清空表
来源：http://www.sxryk.cn/163mwuqsekg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xnmdfyik.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vdpeebru.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ejsbdmcn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163qcvjfsvu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163yzogvywl.html

[Q57] 行号
来源：http://www.sxryk.cn/163wsoqvvtp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163fdhrbclx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163pjonewqg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163twchsdeq.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163tykiczfq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163rebkgbbq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163zpxntapt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163epqlcatz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163endpfhwf.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163bfgnxdgl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163dbcegrne.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vhdhfxfo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uwchvxhi.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163dsiszmqy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163rueougmn.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163etnatsuq.html

COMMIT;
来源：http://www.aibaodan.cn/163uhyclgcm.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mimfncbh.html

ROLLBACK;
来源：http://www.xuanzx.com/163hgkkdinc.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163epyogiwt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ktnekoho.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163skeswnvz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163zrjermko.html

[Q68] 保存点
来源：http://www.sxryk.cn/163urdbhpli.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ogrlffzj.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163opkkwxvs.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163grnfatwx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163rlrvqbyp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163itfufuku.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zzbreuhn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163bvtkcsdq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163uajfwuhn.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ohicychk.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hnfuotxg.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qlboxwlx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163uhudqxwo.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163gluehfst.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163yvqnfqnu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ebbugppl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163urleqbxx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163cmqzgdzw.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163oinirdlk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163onnxhtiu.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163bdphxbom.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163bbdrtuog.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fpfimqrr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163xtyqkfzh.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163corwbxqe.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wlikrpes.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163wyqdhuqu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163oofmejap.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163sbmsmsjg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163mivntgql.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qowfirit.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163isssjrxs.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lbidyhbl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zaeenbfs.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163sjjwzszk.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163pfekzmex.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ipkjuyze.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163impzoirt.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163zehuqerq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163pjacfexi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xyzoaejs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xpgnzgvy.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163tiqorcge.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163kcqdedto.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zpvxffws.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163unmzgrex.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163apvjdgzn.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wqwnrhab.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163urjofocl.html

================================================================================
来源：http://www.sxryk.cn/163xrplokvi.html


<!-- 参考信息 -->