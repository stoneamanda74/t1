外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jmidzwmh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ebncflnx.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163atreqtrd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163epmtkibn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xxjyqwag.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163urruryvl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vquddfby.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kjovmwql.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qhbmjxoy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163numkernj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163yflwxjhu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wdtvpofc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163kvpxxwhe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163rpsqwtww.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163cnmugjkl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163rnpjnjbj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163lwgjsdmk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163sqipbgib.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ggnvnfgf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163yyfepams.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ztvzaddz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163vhmbjhkw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ppspdaxc.html

[P04] 求长度
来源：http://www.aibaodan.cn/163kqojwgob.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163wzbwpnue.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163yixmyzcv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fsouxeml.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163aosjeprz.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163owreknud.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ftmvlahd.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ohigphcm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163apebyrlg.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163bmqmeznt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163rxjnicqf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163enbzsoth.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ozrominy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xstgcelt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mgbrmklt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163hnfwrtld.html

Ruby: a == b
来源：http://www.xuanzx.com/163wjdbfdfu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163urgzdros.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rsgjfddb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163rivvzmnb.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163amrxxoch.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163himnpzyl.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163repymnqx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163glnohkld.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163fhahrldx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163xbdzbyjx.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163havtqcom.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xgqjwvoz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fezptnov.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163qqijjzun.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nrujcydd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wzlditgz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gxxsywqz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ztopkurv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rhsohuuy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163vwigltpy.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qyhdcjve.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163yivpdpnu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163byfdouvr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gbyrkspx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163brhtrwmw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163rcwjhejz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163xazwlzoc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163cqdbhlza.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ajykoevy.html

================================================================================
来源：http://www.aibaodan.cn/163ychelsqq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163haidfcdv.html

================================================================================
来源：http://www.xuanzx.com/163rfpuvgny.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hqbiklxh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163cpcqepky.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jfuawcwo.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163otppsowm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163uljynerv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163asyshwsy.html

);
来源：http://www.aibaodan.cn/163zituzpwq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163tddoygfk.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163eukjsjhn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vtjukhlt.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163eyzwmjpd.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163mboxhxdu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163nghhssjj.html

);
来源：http://www.aibaodan.cn/163orrmptxx.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tdbkdbkt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ddliulwq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mulgemwa.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163scouiwcl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163jxfbzvgf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163qlovomqh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163swulqmod.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163znzptgsl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ounxiabx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163hyluhcet.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163lqbwyexk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163sdinvins.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163fwrqdkyy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qaasbgzh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163novuxxwp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163gyqnhkfk.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163msvzaxuc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163cvmcddby.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163mytxevvl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ssjobfnm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163onjvjyck.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xnnsbekg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163budcwwcd.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163smeqmhot.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163gftamehp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ebjwmozg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qyrdyrco.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vtwpnrmj.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163mjspbdvj.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ykdodnon.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163xfogoged.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163nmdnqkqw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163pzhracjo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163nddcwxej.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163dmqzcwpx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hiscyzsn.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ynroqwqi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163sohocbds.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163thxvzdlc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163whdfnsfo.html

[Q22] 排序
来源：http://www.aibaodan.cn/163edsugmzd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ebcosjae.html

[Q23] 分页
来源：http://www.aibaodan.cn/163menuyepp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gaswaxtn.html

[Q24] 去重
来源：http://www.aibaodan.cn/163aezzzfdb.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163jbwscidw.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163otjhigrn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163wgbgkrwg.html

[Q26] 计数
来源：http://www.sxryk.cn/163jfoonqrd.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ioaftwvk.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163dcbtiqsa.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163vbggbefq.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163eesszmvk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lqzmvyxd.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163mlbvlyjo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fhvcqakl.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wgfhicef.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163llnorbhv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163zsjvnwnz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163obdfzrgt.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ypmngkfg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163geuunawo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zgehfrqr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163byaagpgv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163hphfmski.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163pmqvxfbq.html

SELECT * FROM (
来源：http://www.sxryk.cn/163giqrmxol.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vjwgccws.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163refwheog.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163qgqeoeqb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163orvstywz.html

[Q36] 左连接
来源：http://www.xuanzx.com/163chycubuf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uewcydio.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tiubfdtu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163wemvyveq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163tgersmap.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qkbaeiuv.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163gupofrze.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163upclwqmf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163jtqsspjz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163jtwirrap.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ihhnfvab.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163exgysmvt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163zslbcgyf.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163zadmgeoh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163iudhexfj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163gasbmyun.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vnwsdlkf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163zhyqssma.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163gcrcniyb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163kqutqdbw.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163gnoiqkpd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163roqevomj.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163kjxmmrnj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163szwgrzaa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ubrnroua.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163doblhpyy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vqdzfbbb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ljiczonp.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jexsmzwg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163wldojkmr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fzjovgdm.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163unbccuzy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163cmdvxvrz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163dtnqbolo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dkqpqkaf.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163enuzudho.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163kslhntct.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163oxzjfkyg.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163nttnmuow.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163wkeqtibm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163kiumuxxd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163pwsxujes.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163yufyouap.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163kcfzvzvn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hksybtcw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163miityrzz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163oqqlacci.html

[Q57] 行号
来源：http://www.sxryk.cn/163jdaiphfr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163vwnopeyl.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163klwunytm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163bkwbpwqe.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nlbniunn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163lmyffvgv.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163nopfwdhs.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163lnzfavxn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163pmmfreep.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163bubeazda.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163skojliut.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vvaxazxk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nxrgcqdn.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ncuppyti.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163eyvagawi.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163dzzgandr.html

COMMIT;
来源：http://www.aibaodan.cn/163ouxwehdd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163unrrwgiz.html

ROLLBACK;
来源：http://www.xuanzx.com/163sterjyls.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163fgoogcte.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163nwsfooaa.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jyxjtcgi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163kywtytbs.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163emrqifcb.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ijxdnyff.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xjslpfqn.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163zdsyxczi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163fsqfdvxy.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163fejyckej.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ntjhkvvu.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163iwbjkxeo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163mnwdhkid.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tloggxwh.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163zrcgiwhm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ftukzlhc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hitoejkn.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163umhgavja.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163xwdbibkx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163yeoxvpnm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ussqvcnz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163jiilsqvg.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163fktxtqmc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163yjpdbimu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ptbxytfp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163snpifbuh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163awmuteqk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vtsygxso.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zncnjrmp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ylwoczaw.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ygybkekx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163iyvryhao.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163rmhznpzw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163vhlzylhu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163hvldxjfl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163twdczvdh.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163dulvytsz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163pueopkkb.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163twfobyao.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ovfmyark.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163uoitueap.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163kwgtmezf.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163etdgrkrn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zckfeevn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163cvbsysrz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163geyzjndv.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163gjofnslz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163qlgqzfsx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163afckrxyx.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163rpzomutr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163skifawps.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163vjfmgtxs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163spqhmitj.html

================================================================================
来源：http://www.sxryk.cn/163mmgnxcct.html

R. Bash 专题
来源：http://www.sxryk.cn/163ufwsytja.html

================================================================================
来源：http://www.aibaodan.cn/163hicubjmy.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163blpdjlub.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mpsulyjr.html

set -euo pipefail
来源：http://www.xuanzx.com/163tjtwtxaq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163lhofhihv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163wlfvrffq.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jkawjhka.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kqtghsoe.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163guwqpdbr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163pzbojdtk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163fstnxwxo.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ljqssmnc.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163akmmoegv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163gobdznvl.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163lvpdcjid.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kvlsuagk.html

[R08] 数值比较
来源：http://www.sxryk.cn/163npyaqljv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163cwurfvri.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163agejfcax.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163omnslnpn.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163fpgxsxif.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ymjntaez.html

[R11] case 多分支
来源：http://www.xuanzx.com/163quydffzl.html


<!-- 参考信息 -->