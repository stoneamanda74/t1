外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163brjjubrm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ixdclgze.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163sbhjmlfn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ipiapxue.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163iqtrjwoa.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163kjlhehgf.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wgcqgapa.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163pwgxoyxd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163cmtsabuz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gxlgwxuf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163szukygul.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ytjkoglc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ohiezhmw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163qlxsuius.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163xdlmoupi.html

[P04] 求长度
来源：http://www.sxryk.cn/163djioqgio.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163hdskqvgx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yhetgqwb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vahijjcv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tycykpha.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163nhdmmoll.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tpgfxdxx.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163usruvczs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dfecbxyb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ebixowvl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jghvqtug.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163fbnkmphu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163shsvffqw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jdioucpu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163awnfxobf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163aocwbbkv.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zqrudmpj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163gmxbneao.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ezxtprmt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163pnbavmpv.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163eixcgpng.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163zurmthhp.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ksvcukes.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163erpwfoqy.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ampadrhc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163wimhpqtb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163mglqqvwr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163flagokuq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163olrysmpb.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163mynxbskj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gyesxtxk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tkvfzmxv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hugbemmg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gmgjsrfs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wbgkwzyh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163bqwheirv.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ggnlepbe.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pbjmseec.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163xaedbfch.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163tkdmvuyr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163yxjwfldr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163vystpwmm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163pckjunww.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163wvojllug.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163mgwursfi.html

================================================================================
来源：http://www.sxryk.cn/163djxoxygy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tyhtzmbr.html

================================================================================
来源：http://www.xuanzx.com/163rmojscde.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163zlvlmgun.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163zsgckxmi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163phbggfyh.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163dbhagbdq.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163cccptpia.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163xvylsmvb.html

);
来源：http://www.xuanzx.com/163ughkjpuw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mjptbsaa.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163arkdqple.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163aqarndwt.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163tylgtmrp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wxymwbdp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163zwwyjfnh.html

);
来源：http://www.sxryk.cn/163uivvjaul.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163eqwcnvfj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163icleddlu.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163apccqygr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163pdcgyzrd.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ngmqtxsp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163djigfwfm.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163milehsgh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bpjkkrcs.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hbqrivps.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163darrcyxz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163zzpqsoqb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zbjhftjw.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163attexyst.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163bqpyoibd.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ajekfgth.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hgfnfttp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163qbrfgjwm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jhkrnxrd.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163czdsnakf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163tabrfzjp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163kncsgzhz.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hoxqcyhs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163illmanem.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163czbtxtla.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ucessswo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163szgrqsig.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163qykgpcyo.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163acrngrea.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zjqrgato.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163hkokwpxu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wnzrjfxv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163qjbgbhyy.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dhgmcwlk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ydnskcue.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mwjztuop.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hormacdb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163hqcjppzg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163bfeolmck.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163gkwlskzv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163vdpszedx.html

[Q22] 排序
来源：http://www.aibaodan.cn/163dtthsiqf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163egfoszyx.html

[Q23] 分页
来源：http://www.xuanzx.com/163ddzwfxdq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cgeecbva.html

[Q24] 去重
来源：http://www.aibaodan.cn/163fflindef.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163byxhxyfd.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ntvrghaa.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163jlgdhwcj.html

[Q26] 计数
来源：http://www.sxryk.cn/163ghfrjipj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163blcmgbdm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163wjouwdje.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163czytyryd.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wvcwrfgq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163eicbyzud.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163aqqjufpx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163bpbbiiii.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163rfhvtosn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hhjhebhd.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163yispdiju.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163vnknpqci.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ztxjezxp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163myaygwnz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163wqlfoxcr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163zlxbeqor.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163lcvzwyzn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ycswscay.html

SELECT * FROM (
来源：http://www.xuanzx.com/163djukqmwn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dcuqeqpd.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ppjwqnvm.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nswlutso.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163fqhgmfrt.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163qrmvhfhs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163feiouwru.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163jpmtsgss.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hlsbxxnq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163peurnujy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163vbmkismp.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163lwxhelue.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163onycaerz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163zzwujsyg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rzbcbvfm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163mydxtaur.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163kfwigbqh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ylvejpho.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163tkkghbzw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xhuqfolu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163dlagriti.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163avxrogvc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ztizfjvw.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163eraymlmh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163xopkcrqc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163zbatqljg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163abqydcua.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dlsbeclb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gcnblykh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163bqkqlbkn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rdgpafek.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ibelmiqg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163pvnnlsgs.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vmqhdrdu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163nudzamxb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163aoxxhmqd.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163llfuxvzr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qcmhhuyh.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xqrvzuoi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163xwrztbob.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163iazuvjza.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dvhzrcfu.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ybysnuyq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163pigzjtms.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163qmttflst.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163tbwlpffz.html

[Q54] 清空表
来源：http://www.sxryk.cn/163knvcatau.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qhmbnulu.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ktgyrouf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163bbikhjqf.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163kodzsbzf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zdfctetv.html

[Q57] 行号
来源：http://www.xuanzx.com/163rsnsdgqq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ofpgliop.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163mamddvqy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163djgnmdtc.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163prbvuxvj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xloqbbxz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163abpptsxw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ryvxfpcw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hlpjnyil.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mkgdrdrt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ovmcsvvp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163psgjccti.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yxlcshpm.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163oqozuzmu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163yfdqgsmx.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163piznwjey.html

COMMIT;
来源：http://www.sxryk.cn/163rzpgyaay.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163uhregdvb.html

ROLLBACK;
来源：http://www.xuanzx.com/163mupzohqv.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163kjrunrtu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163oxxmoojs.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163uflgzext.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163qrlnnjhn.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qzvynhxp.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qjtqkyjv.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163nvatpkil.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pqxatxfj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ncueobsj.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163henywnvw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fsfckbzv.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163bjizomls.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xevoejeu.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ifvfuxpf.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163qlflgywk.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163acklbcyn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163eyakyero.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xhykxpli.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163whatghkm.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163siqgwojo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163vypekdma.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163lmovyack.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163zbalfpvn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163krmqefrd.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163irgjkhex.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163fqxarqth.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163wffzfdrv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163swkdutqe.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163bnkbqfti.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163hfmovwml.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163yssvrifc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jntkbgvc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lvqwpxmf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rurvmzgd.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163estmokpw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163cfpcfulc.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163spnjqjvk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163baxsnntr.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jnwrqkpu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163pgkmjzya.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163pyoxwclx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163xxiuhyjg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163xbmuxvch.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163fdfljgbf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wtosewod.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163wjfoqkig.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163fptlntmv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163frorchsj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163dssbaskm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163iweytfcj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163tnpgxytf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163bxpsmxxg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163inkllpvc.html

================================================================================
来源：http://www.aibaodan.cn/163grzieuxu.html

R. Bash 专题
来源：http://www.xuanzx.com/163mcxbfqhl.html

================================================================================
来源：http://www.sxryk.cn/163ryoticzd.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rjuajqvb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hezfflay.html

set -euo pipefail
来源：http://www.aibaodan.cn/163gmdzyqkn.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163oidpsagr.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163cqvhfpdz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zzcltnic.html

readonly PI=3.14
来源：http://www.sxryk.cn/163hagnpygi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ogjdmjau.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xorrhiwy.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163lwszrfzx.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163svfvxtrr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163excrovdl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163aqvdqrdg.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fijzcrum.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163jicdqpeb.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ssaesqrc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163worhhtdl.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bjqnzznh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163twxccfon.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nwohrurn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163neuawxsr.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163nhqtgiet.html

case "$1" in
来源：http://www.aibaodan.cn/163ndlchvop.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bzpcnfwf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163nhsyckzw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ugkbzfmv.html

esac
来源：http://www.sxryk.cn/163ahqssrtj.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163actyjqjg.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163lhecylvt.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163sbqzqqdl.html


<!-- 参考信息 -->