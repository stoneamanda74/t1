外链999!wailian999！

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vpfkclzc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163glctcrip.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163vwhlfegs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163epzjtwct.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163tsfbqrwr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ecstuezs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163nyxkvyew.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vpnjoqvt.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vcfwtrvb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163kdnpnsle.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163hyfnzjlu.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mtlnecqw.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163vqvpioro.html

================================================================================
来源：http://www.sxryk.cn/163zwybnhyx.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qxbwetop.html

================================================================================
来源：http://www.xuanzx.com/163jitenkfr.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163zkojtogi.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163pnekobod.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163redygcaw.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kgwlgcvy.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163btgzvdjv.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qbwmvgch.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ldxrxcjf.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xeobxtbr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wzvqawrs.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163bxnxwdkh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163cubeuwjo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163nxkkhbkx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vdjmexda.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163eevfisqr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163dmfmvzsg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mooraaeh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163cxpvxwrx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163bmktsrja.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163vepfvogp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ekipezgz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163tmcsvjbf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cliercbq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pmupfvlm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lzvzjyrw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163gxuzmpnk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163yalfjxut.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163sbquwhkk.html

[P04] 求长度
来源：http://www.sxryk.cn/163zlgoryos.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xdvjytti.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kagtbeox.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tvforomz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nqpctdrd.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163mwdkdbpl.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163vzgfzimz.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163umwrplvk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xjnaizzo.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hoaeajvs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163blbnkqmg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hqsrpqnr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vyzyimez.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ynwmuxhv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163jfyuelfu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163nrcsslsm.html

Ruby: a == b
来源：http://www.xuanzx.com/163clsbdhmu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163vmzirhww.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163nrqfqcih.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163scomaeip.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tvdchgpk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163xalkxioy.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163lcamogiz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qbqeinnp.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lckwhzzz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ctxyreus.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gwaqhhpb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163juysfsef.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163hlkdwjhb.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rguhmbdv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nggrdlei.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xlyqmkxs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bgrtqhzn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163atpgvbab.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163pfbbmjaw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163arrqcegd.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163xhnxxwuz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163wzsbfncn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163vqjinlwl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163tfiwzqxm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163blpcuqki.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163toburafa.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163unwfehwj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xvzabuoi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jiuroeqv.html

================================================================================
来源：http://www.aibaodan.cn/163unghzpma.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tyxcbxgt.html

================================================================================
来源：http://www.sxryk.cn/163hwobptrl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163qlfuguus.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nfakcutf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163apmwrtis.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ktqvaggh.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163bftbzmdt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163qbjplpqo.html

);
来源：http://www.aibaodan.cn/163idjfrnie.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mukxrxsu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163mayjyomy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lsppuhnu.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163hhwcrbqi.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163edxuyljx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163gudhouob.html

);
来源：http://www.xuanzx.com/163uexkewlk.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163fhacrage.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ayczazrh.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mtvtfngv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163mfhywrcr.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163sjwybeah.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163rjgpngpi.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ddsdjhag.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163svucetsf.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ifsjtvqp.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bdmwyfqw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163inlnbcyr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ctdkvmqu.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163vqzvbfpi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163cqrakvhc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163eiyejpfa.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163bultsusg.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lkplvdwl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hxtrgycw.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zinsobls.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zwvnpcas.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163readepbp.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ibeomsfm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ivwxkjyd.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zhexfups.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163dwxsfnyr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ypnfhqro.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ojscbayl.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163udspiywt.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163gorlkywn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163nhmnutti.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163kiiowbmg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163okdvypvc.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163lpvslkvx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163gfobjgov.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163bktishdt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163igssnllo.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163oxhepwlc.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163raiyxgem.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ubbvfozc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nkmwnyro.html

[Q22] 排序
来源：http://www.aibaodan.cn/163wybkljyq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163sksjvfun.html

[Q23] 分页
来源：http://www.aibaodan.cn/163nmryoavv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zxhcwzqt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163dydzwytt.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lmayqfxv.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163mqdhzrug.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163awefxxhh.html

[Q26] 计数
来源：http://www.sxryk.cn/163lgtrhrch.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ffsglzqd.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163dfhoylia.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163bkqlsymf.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hditethu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jkpuanls.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pvfverbr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163lxerflhc.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xboutvgb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163seimfkkw.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163mxitzobv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163srnicxyi.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163iriehpxg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kxjuflqs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163udkkmwfe.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163akmlanux.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163xjlxypvc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ouokumhh.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163fgvfgmck.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163edjxktte.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163emczguqe.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163eykefcdb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kygcuflc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163nkzgqtic.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bbyplugf.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163xlkpktas.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163dncsjhlp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rhuojwkt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163afteqvex.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163fyzqszrs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163pzkhjdlv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163syvixrfc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rwoyblbn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163kkevsfkj.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163yogkiweu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163naxnzyau.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163gjunpsfo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ckztgmit.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163tkcvgiuh.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163uxusoqgc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163rgwgzayc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rxgcnsqt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xyutaxtq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163plqwejbo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163podxhwcw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163vqasaswc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yrihqxoz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163hincyexc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ohnthmkq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163pgoxrrgn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163avunzhxh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163eexzfnma.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163xwfqghzq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bvgxmlfo.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163kggqhxee.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163glwurbmz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163kvqbjhkd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163fajsrcyh.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163jktmchyo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ikretsbw.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163fpmtuqpi.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ukpajdnz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ribwoaov.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163wecrskir.html

[Q54] 清空表
来源：http://www.xuanzx.com/163icmyawex.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163sphlbkni.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163mhxlettq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163oxuvpuzb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163iisifusz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zkhhujlw.html

[Q57] 行号
来源：http://www.sxryk.cn/163divlqygv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163isfqnkor.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163yoxskxhx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163gthdssfm.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163nwoyogau.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kkzbsbkf.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163juysalzf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163qzwqwaij.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163kldntuxy.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163fidaeqvs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163cokmfzaa.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163tvwtfxkc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163aeqrpuui.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163gsxngiba.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163djhhkgtr.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ncwdeieb.html

COMMIT;
来源：http://www.sxryk.cn/163mrfinual.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163byfjacwh.html

ROLLBACK;
来源：http://www.aibaodan.cn/163qxqzaeqk.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163dmcajtrc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hwpguqqn.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163phdswkcb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jsjasnzi.html

[Q68] 保存点
来源：http://www.sxryk.cn/163igwdtsqu.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163okermrex.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163beozeams.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163vzpoysgv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lyviuiou.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163aeawzczv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163lvajijun.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163oyexufoz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163plbmotxo.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163fslytbph.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163bousiusc.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163jrnuqyjq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163faykbxtd.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ofvsrkjs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163gjcsesna.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163thegkfuo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163alpymhgt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gxgjcljs.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163sezovxcl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163odmhzqth.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vxvxstej.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rdzetdzo.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163wyvjtzty.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163mfknbxox.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163mxiqizpm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163geoxdlfq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163miuekcyf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163lkcyhnra.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163cidsoicb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163mzsqtfhi.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163cwsiaqcq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163azddybmg.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qgbgbjqt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163phoiypap.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vdvygfky.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163iffafgwu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163pjbnzjzi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ejhmdayp.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163lbwgspjg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163dtctazmw.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163omhshneh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163bvvizang.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163joqmlqvz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163hmuxkfcz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ddzccjpa.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163zvfmhtuy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163htwvbxnx.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163zixqyiwp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tomnbskp.html

================================================================================
来源：http://www.aibaodan.cn/163arabxoii.html

R. Bash 专题
来源：http://www.aibaodan.cn/163rjbtkhpx.html

================================================================================
来源：http://www.aibaodan.cn/163tbaqcagz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163txdgfpdx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163iqidsdwk.html


<!-- 参考信息 -->