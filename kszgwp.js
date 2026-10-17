外链999!wailian999！

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ydixzvag.html

================================================================================
来源：http://www.aibaodan.cn/163qbpeeqzg.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163nzsoqdbj.html

================================================================================
来源：http://www.aibaodan.cn/163otrtqnch.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163wzzxjtvj.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pxbmanpu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163uwlgdoie.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163szyoogfj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ysdklpjn.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163xfttocin.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qmlrevit.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ltmpjkpv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cgvslbad.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163tlglhpum.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163xxufkgjw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zzxpbosv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ypcidzqd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163poqxuwgx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163tsrpgrts.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vwckqens.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163mqgtdulm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jfgwhlwt.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163agsjykho.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zahgtgxi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vpbechjg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mgxgvmmt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hzvpqcdk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163udubhlyx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163fhixvnft.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163xhjkbgdt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bedtadrf.html

[P04] 求长度
来源：http://www.sxryk.cn/163utvzwkgy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163tegmstkw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bgxenkzr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hyraivks.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ejkugcxb.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163baouoanq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163pscuioua.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ufqejalp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163hvhgdabz.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hlhnboel.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163aahscuqe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163oifnielt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163hkhuezkw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cjdrghzs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163hjrokqfz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163hwobzali.html

Ruby: a == b
来源：http://www.xuanzx.com/163vhqjakvi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vzlgabjg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wlnnddbd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163lgchysqf.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163fxnvxupe.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163innykgeh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kbjfpohh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163lulzsgfb.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ctoeqvpf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ozqsimmu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kbkiggtt.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163zwygdshx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163nuatmvlb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163dqgtkvbx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vyfesvyc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dygblwnj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zgdgfzgw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163bavmywqo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163znybuucx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163tnmuzasx.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163bwbeeqka.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163kugorlji.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163xdlmcpcl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kfxbmayj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163uuzinijz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ukrxmfkc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ytraysqw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163rnstgaiy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163gfxmyael.html

================================================================================
来源：http://www.sxryk.cn/163arltyeui.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hlcdwjkp.html

================================================================================
来源：http://www.sxryk.cn/163sxwowyfy.html

[Q01] 创建表
来源：http://www.sxryk.cn/163qcnlnxyx.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163iuueuyll.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dbvxmlqj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163qkgwmpsm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163tnsxjeju.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163sbwwszje.html

);
来源：http://www.aibaodan.cn/163ecfpbsyn.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163cajqrmcd.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163zyipncjg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gybvngqg.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163dyzgfrpj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163kmtwtzqm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163uialpkkk.html

);
来源：http://www.xuanzx.com/163hblddwuh.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ucuoqaap.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ctkvnzui.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163aohyfquc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ffgurack.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zaygseju.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163yvdegxvf.html

[Q06] 删除列
来源：http://www.sxryk.cn/163moevifzg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163cwiodhrp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163immpbgur.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163drvskpfu.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ayojkgzr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163cwarvllw.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163grafyasa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163urknbhoq.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163dsgwbqld.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163jshdgwrz.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163fvsgwxuv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163rcuuhfig.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163fobdwwfb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ysqfkfbb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ssnrxzms.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163mxxfxfhm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163crblknwx.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ulvfkfbs.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163tcxveyqk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163cuinqpwp.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ngjgxunv.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163dfbxegab.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163oujefkhf.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ajgftblz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163huxeoflm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mdfmmere.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163fjqdqzbi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163tvqjetjm.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163proqezeh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163gogwdsmb.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163hypuequa.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163lzqqtgba.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ksaqwgws.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163hzljfbnt.html

[Q22] 排序
来源：http://www.aibaodan.cn/163lmthqjci.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163drurtsef.html

[Q23] 分页
来源：http://www.aibaodan.cn/163mdqmpoef.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163tqrlaxir.html

[Q24] 去重
来源：http://www.sxryk.cn/163ihxcetun.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163xhsqpupf.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163hdjvtaur.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163movtdasc.html

[Q26] 计数
来源：http://www.aibaodan.cn/163dkrsxonz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163lggtxvsk.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zndcnixd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163punwnglt.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163bvunjkle.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163diphcwcz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163borneqpg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163lbrbmpfo.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163eapxkfve.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qjocaxxx.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163hzvkqxpl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lksucoxl.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vxhypqfq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163waxndyel.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163fpkpuswq.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163qcthfucm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bnpbiukw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163vvjguwci.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163hvblfqsj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163qewrvyus.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163xtiprnhj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dkvautug.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xeedidbg.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163kojvbyjo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163yalwmaba.html

[Q37] 右连接
来源：http://www.xuanzx.com/163vlcslzte.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ilclxchd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163pdymgrno.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163yqqngtwb.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163vzbkcopj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163swvituty.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163onhcmskj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ajqranst.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163onylgqbd.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wadghemc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rngfvobf.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163olcfajrd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163nhppcnym.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163otgacroq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163tuaftxtn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163aaplkhvt.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mazuomuc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ksetiaaw.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zvcllval.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lskgjyap.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163qpnjrllv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zoktnuin.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163okpfzgca.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nmpssfyp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163lpntxxjw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163bkhelvkb.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vebxajxi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163rexwjlev.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ejfecddf.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bgbumpgz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ienikaih.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jlqlnbla.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rvfmdbpa.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163loapiltx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ewgffynr.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163tpgdvsmq.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lbzhulpk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163zsztiytn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163klkcnlwe.html

[Q54] 清空表
来源：http://www.xuanzx.com/163umarjpqd.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163xqkievsl.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qupmxnsp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163adtocytd.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mqhvgdku.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zmlqyuzj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mmztnvne.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163fwmbwowk.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163nrxuulfh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163xmqsgmwn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163zdcoqkcq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163bzzvyhkr.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163yqwkxxak.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163duzgmlim.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163diadyyxt.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163rawfmtcc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163euzvxado.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163izlsrxzf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163avpclydq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163bdmnfdrm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163gqribrrr.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163fcyckuyb.html

COMMIT;
来源：http://www.sxryk.cn/163pruoyffu.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163krgosars.html

ROLLBACK;
来源：http://www.sxryk.cn/163yzupqbxz.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163thvhbjnf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163bhqxxbap.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163glkoknqh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rvfuvrnt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163wdcljcup.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ffqheiqb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163jzipzjrh.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163dqqqtyej.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163bjnmpvqh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xtfrtcjy.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163idifvcjk.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163sczrmbls.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163midituzt.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163qehdsskc.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163faknilxc.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163hjalqnmb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xfjhszkc.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163frftswhz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ersxavle.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vxnglyos.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qaarlocf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jfntpeve.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163itshclun.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163xazuavsd.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jkjtesjq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jlyvgjpy.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163aqmzgtqe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163tmfkyoes.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163juxxsfob.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ogodzgtf.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163zflonojm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jkigjxmj.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163trmfbxjl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163jsmlcxyl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ampljtef.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163izsinsmx.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163rykqjyvu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163iizlhfyi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163eziryovy.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163qautneju.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163wzufrvvb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ygorhfba.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ewwzlbed.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163glytegsz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163lpacxodz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163lflvgwdz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163msiepywx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zovdairv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ioanpfyd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163kebbzgyr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163nbymmojq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163anxeebjg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163sirftzsq.html

================================================================================
来源：http://www.aibaodan.cn/163dpvcosvb.html

R. Bash 专题
来源：http://www.sxryk.cn/163afkiqnqf.html

================================================================================
来源：http://www.xuanzx.com/163keroillo.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163cwgfxxcx.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bksqnbtt.html

set -euo pipefail
来源：http://www.aibaodan.cn/163aphjtxyq.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163dqvoxzci.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rqnzrqhm.html

[R03] 只读变量
来源：http://www.sxryk.cn/163adpynumc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163tssnqrio.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ujsoghbu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163dcbqgqqp.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jxvofozg.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163oshujpwv.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hthbztor.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qbiajaew.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163swnwyowi.html


<!-- 参考信息 -->