外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163brqflejj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163bsnmcvwz.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163vqgzxenk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zvbhuwyf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163cmqnogmg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ckmgctsu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163boodpvwu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163zpiggbgr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163quylphgl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ejtjhtmu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163idpczqhr.html

[P04] 求长度
来源：http://www.xuanzx.com/163atpsrrgk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163dclukptr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ssuxpogv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dcouvwwq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163svbflnbv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163octdpeoq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163gpjdqplb.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163dycpukhi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zblhjcki.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163pipowtyl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ssvwglur.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nugzjcvj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163zgpdcnkh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163rqiutbfl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163nwgmnuij.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nujpeipt.html

Ruby: a == b
来源：http://www.xuanzx.com/163mumvvtmn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163kpguvgcr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163lwhdnwdk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163pyrzqtni.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163vtjbizdb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hxeehhqi.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163imbsutts.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vjjmaxyk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163yqykfgyz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163viihxyvg.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qtdneljw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163fmyziwmr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163laeohhxw.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163jmjuwjbc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nwhwgchd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kbkpkxkz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163evwivfwx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163oxybzsli.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163nvmskhmp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rgtosazv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163eujywqoi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163vrxzplqs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qakokvcx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163syobzdbm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163rxtiuidh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zdqtqlyt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163crydolzv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163utxzklqq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163vvminijq.html

================================================================================
来源：http://www.sxryk.cn/163zanwqzza.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163xxfoynyd.html

================================================================================
来源：http://www.aibaodan.cn/163odgktfgl.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163arsodvso.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hxkaqqtn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rsjlfdjh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163qnlsmhjk.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163lousqwoe.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163cxqxjoze.html

);
来源：http://www.xuanzx.com/163rvfrlyqe.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163jorzgxbd.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163mjgrficp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rnpleijo.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163redrejej.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ofusylmh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163etvjqtha.html

);
来源：http://www.xuanzx.com/163onjkwlsc.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163xyuibfcj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qzovgiec.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163gufkafex.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163dsgirzmn.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163bkqjkgqe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163yrcjurhc.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wzlgqsiz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163uifeglks.html

[Q07] 删除表
来源：http://www.xuanzx.com/163nhmoewtk.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dkevinoa.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163kczmagcy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163qrmotlou.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163owafzphk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lshehgli.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wzojubyf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fpdnorlp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163xmtkamkb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tpvuqgbe.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ntrjvlpn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163vemyfjhj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163txtoicpz.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ympdmcfa.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163yhungxft.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163burolvoo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163fcymzdci.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163tfwltpga.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163czadrtqy.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163kprgjwqv.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163bccgqecw.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163thgvemze.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zkqmajvy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163xepisldf.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163uoyiilca.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163havlwjia.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163jpmjhqda.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163wswqdrqa.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163rylcdnql.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163iaqlwxqf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ichsfmhw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163jycxdern.html

[Q22] 排序
来源：http://www.xuanzx.com/163kjginqvu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163qqbzipsq.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qbvsgoxy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163rtofoela.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xadadwkx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163wspckyya.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163prtswscf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163gpomyswy.html

[Q26] 计数
来源：http://www.sxryk.cn/163bkgxlssr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163bsijeenz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wfucmrri.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qfkljabo.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163lsyvymhx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163udvfgjic.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163dtrqwsqf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163uokatfep.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163pzlbwlie.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jlsjywhc.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163pkyujvtw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163hkzqabaf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163tdhanity.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fgxmpqft.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163kokykspe.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163qltrztaj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163gslioutv.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163piucfiwf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163sjmyqelz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163gotwydmc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163lprytvpo.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zeeiahhy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pdtyfvwv.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163uhfdpmme.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zmetczsw.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ozgymmjs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kxbwwwoo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163efjflseu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163hwdqcimz.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163pndxpkww.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163duzbdwwv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163turputoi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163fyuxzspv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nyhkmprh.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163aywktgrm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163icpinpbu.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163bhuvgkah.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kaedcdlu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163kdyverec.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163xqwhdxek.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163btrqahbt.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163otphhxib.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163oyrvhlhx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163elgrqshi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163xebuaxwv.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163dcboyplj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163oygsnmct.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163jemprqoq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wnabicrr.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163onzejnab.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163vfjrpdpy.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dtflewql.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163mczirecc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bsqmdjjl.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163resevecx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wbtthsbf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163pgvwawgi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jsqqbgbk.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163osusrpil.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163txdhitjd.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163qarkjgrb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163jrjigtcx.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163drmlwqlt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163hbnodykp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rqgpzleh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163omwqimgj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163uxknlkrv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163navswupm.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163gcfcxese.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163nqkcgwpq.html

[Q57] 行号
来源：http://www.aibaodan.cn/163amaizhfw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163mmifxrmu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163buswpdvy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163uythmlnv.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163bqgxngzr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ancdksdc.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jcaciawx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163iqgptotf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163sfyrbzpn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pybydvfo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163yorxnlyz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jepndffk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lzzpleeq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xgeolqyb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163waubrvuz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163fxnvkzlb.html

COMMIT;
来源：http://www.aibaodan.cn/163nlemgojo.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163xcqotvfd.html

ROLLBACK;
来源：http://www.xuanzx.com/163dmtsfsrr.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163eobbhvfg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163bbvrnfhd.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ncrdozkr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163vgitdlei.html

[Q68] 保存点
来源：http://www.xuanzx.com/163netycxaz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mkvthufi.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163euzljrci.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163kcmgubun.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163kkueguxa.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163djnkfzih.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163xhbsrpbj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ygtwlhaz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163atukuktp.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163hyhijzhk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163nlemoozd.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163jjsijjpu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163rflpkvwg.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163eliveosw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163akpfvlxt.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ucwjsrqz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163izlxhfmb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ujpgpvsu.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rkxtduun.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163njnlynjq.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163irlestzj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163nikmmvlf.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163lmgqrdat.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163yygrkjdm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163rpzbqnim.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163dsqdwejk.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163afuncetj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kzekylud.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jvsoxakf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163moexcqdf.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jcyfhtcp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163iahmygwx.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163wvgzcern.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163npcwmsad.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163yuvlcmja.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163aabybfkj.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163nqwtawvo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163zwjruyck.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163htatkyqm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fwpisqxf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163panyxyse.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163waqkmqxo.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163vziihobm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163uyjwvdkm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163eyldmksp.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163oiexpmpb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mdhoyjmo.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163nsxlckri.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ehoxdxqj.html

================================================================================
来源：http://www.sxryk.cn/163vhyogref.html

R. Bash 专题
来源：http://www.xuanzx.com/163rtiocufn.html

================================================================================
来源：http://www.xuanzx.com/163ejvitlzq.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163onhutvkv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163fuftwpzc.html

set -euo pipefail
来源：http://www.xuanzx.com/163dusagezd.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163gyoxccma.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163kbanscuk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ilddlsum.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163tylpnnnn.html

[R04] 位置参数
来源：http://www.sxryk.cn/163bbgcdsmh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163sfubumcs.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dptgbxse.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mrgsuvgx.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163unfslztv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163aoruypkb.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qcscniaj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163uropriji.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163kwzwloji.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mhqoqdrn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163akkzkvai.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163weydnswq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163hdzbfvep.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163nbcvmemg.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163okzydfvo.html

case "$1" in
来源：http://www.aibaodan.cn/163ctgkwwrk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163crojipup.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163beneeisu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163munanxok.html

esac
来源：http://www.aibaodan.cn/163kfykgezy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rblxpjxg.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ffhqkivl.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jkyvvnla.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ujlvbhoi.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qtriperx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163dqitwggj.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ovxpnujx.html


<!-- 参考信息 -->