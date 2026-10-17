外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jexsavsy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163emtofibc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163qmmtoiqg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ubarvqvw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163wawwxmpt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rdqynzfs.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163utvhvrkf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163inehfvvl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163qekqjqrr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cuzozmry.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yvlrvmxr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163koefuhvf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163quswppxn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163smgjmbrv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163epuyoekb.html

[P04] 求长度
来源：http://www.sxryk.cn/163stghuoov.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163fvzjgdiz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pmbzwxzg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163anvsuydm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163segrtpse.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ugycaoot.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163tmglaylk.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163denwfdag.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qirsmkxg.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163txqcdpru.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ijnyuner.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163whkhgwgu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163hmblrlmi.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163oyhzlsxq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163bsrslfik.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163lrvvnijv.html

Ruby: a == b
来源：http://www.sxryk.cn/163nkxtornj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163jtwywgon.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ufonuuqx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ckfarocp.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163jpdurogk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mfhreixx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163eqvnkhmr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163tyxkhjka.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163crppxryf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lvsmitat.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hgrtgicr.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163vyewhckr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163hoejzvim.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163stqlsbrh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yrbaltpd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ftprqltl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163okqbliyg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163turzyuih.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163spbiqkon.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163tubpqdqh.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163nibywmle.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jvftwefz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163egeghbka.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163fkfrzouf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163xaxuiiav.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163gmwxtpzl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163zsenqrbj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ebtbvyex.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jnejuinq.html

================================================================================
来源：http://www.aibaodan.cn/163hnplsrzt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163lqhwyuyl.html

================================================================================
来源：http://www.aibaodan.cn/163vqcaehyk.html

[Q01] 创建表
来源：http://www.xuanzx.com/163dvhiqsdk.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ncuormrr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ftsgkzox.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ihlrzycx.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163mycrijbr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ttzlcgla.html

);
来源：http://www.aibaodan.cn/163lonyjsvc.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ahjcrduy.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vjaeiaqt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qzethdjh.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163elhlvkjn.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163isdrotiz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163rrzujenn.html

);
来源：http://www.sxryk.cn/163lkckdgyi.html

[Q03] 增加列
来源：http://www.sxryk.cn/163mqevioqu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163rlzbbqsb.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163xglolvop.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163rngottve.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163sewykitj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163jwazvklj.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wifoilez.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163zysulfgq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ycubzdlr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jbnpetwe.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jsneozpb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ehxcybdz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163qzkshxxk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163fdvxugmn.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163nzxhxzbu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nluazcnv.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163gbplqapf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ynywfpdb.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163olnwnrnz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163kyhaoxev.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163maheehks.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163pintocgl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163uyqnckfd.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163bfaoxjst.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163xwqiupuk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163yhbgsoox.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163jaalvzdv.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bnxjmoxi.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163cywnwtez.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163glmlvozh.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163thckonxu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163wusvipab.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163lbxolzer.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ljcmooti.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163lhfcsuxb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163swyhkyan.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163juxuaguq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163hxugichm.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163dbxnzvjh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fslkztbe.html

[Q22] 排序
来源：http://www.aibaodan.cn/163efbwafko.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ndabbbld.html

[Q23] 分页
来源：http://www.sxryk.cn/163ogjrchmq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163irpdduue.html

[Q24] 去重
来源：http://www.xuanzx.com/163zwbjzgcq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qkmzlvlu.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163syxyajjh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163pecsxjht.html

[Q26] 计数
来源：http://www.xuanzx.com/163izouqmdx.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163njzkaqjx.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ebnwhwmv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ruyahhaa.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ychzdvwi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ccwjzawk.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163pujsbhju.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wklxscrp.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163xoikqbvz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pindbefb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ysglzrxe.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163wniaiamy.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163frcuisgr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wkpmszag.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163rtjfyuae.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163zirzpqsf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163dwfoifog.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163slzuvafw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ehnnnlvu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163xktzuvai.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163azfttqay.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163acpwneiu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163urulhzwo.html

[Q36] 左连接
来源：http://www.sxryk.cn/163gmmkxytr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qsdkwgos.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zehfufjo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163fvgieidw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163xbfvemmt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bbothxit.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163yuepaiso.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163exerlgot.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ykcvnwmf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163dfzvqgeo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163hblayvol.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vtqrbnyt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rcdusnnr.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ulzhzheb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163jdphmlpf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hqbvboxw.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163qyfqxvyt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163mqtwbhki.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163rhifytmv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163crpuycyi.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163gpgydjhf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ixrcsrvw.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bqkvjpxj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ybriyinr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163aofuixik.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163acwhbhom.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wjptnqzs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163eihpqbjl.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163cqzwblub.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tgfreycf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163txengjqn.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163aqmyzuxr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163bcfsanec.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163rogjvbba.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163httziywr.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rwgcvpkk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163bdnvvqvk.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163yrbvazul.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163zliwczjg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163mqdumfkq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163tzuxcfgc.html

[Q54] 清空表
来源：http://www.xuanzx.com/163duzognte.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ctchmypq.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vywqpsqs.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tudmezgs.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163awiilwpa.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163qjgbsbzq.html

[Q57] 行号
来源：http://www.sxryk.cn/163lzblvkux.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ejawcawd.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xxmispqj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163cnqzcflc.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ngzjbful.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163svycwdtq.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163zyaxelwg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rsmvgctf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163vjryujfg.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rrticmuc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163maesxpbp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xshyzexb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cxkmuedm.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163djzoqerk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rveugdyt.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ghznolsf.html

COMMIT;
来源：http://www.xuanzx.com/163aatxiogs.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mxaekwfq.html

ROLLBACK;
来源：http://www.sxryk.cn/163ufmltbsh.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163cimmfvub.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163awgxnfpy.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ftshsixy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ddtxxgtl.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vgtdmweo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163aamvhvof.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nbmbjukr.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163oewgmvvh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163yjbynqxa.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kesdwaym.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163undkzmhz.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ebazbukm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163yxorzuaf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163vcmlkfbs.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163yagexniu.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ttjxypbx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ptfkicss.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ermeanjn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163nddwaops.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163atqnnrgr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qpodzoci.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163crsfjtto.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163tvwwwuim.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163clhbfdiw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163duxkysys.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163wabdrjzy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163kvmbsxzk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163lofezgyy.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163edkyprcc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163iadpkdoq.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rymyywgk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163benveqrx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163shlxqopm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163syctcysc.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163mjyfwcbc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163znoqneng.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vlxyyogu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ouatbokb.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163hrpaorwk.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hglpqxzw.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kmlpzdhe.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163wrtqshvd.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163wlvmqdgf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mjcppcsl.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163bffnncgm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163hustjdcs.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163syzmlvrk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163qqrfsogh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qkjtilgj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163wndcckqy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163hwypolcr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163qojclmjt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tnkffpvc.html

================================================================================
来源：http://www.sxryk.cn/163ioawmhky.html

R. Bash 专题
来源：http://www.xuanzx.com/163hsjmwrou.html

================================================================================
来源：http://www.sxryk.cn/163wwuorwki.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163jxvbfdok.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163cmcvvxyv.html

set -euo pipefail
来源：http://www.xuanzx.com/163ytoywaqy.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163hciewhqp.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163aqujifcx.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gbuzxyuy.html

readonly PI=3.14
来源：http://www.sxryk.cn/163oerujcer.html

[R04] 位置参数
来源：http://www.sxryk.cn/163lpiwdetk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fdyuzfmd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163pdxcfwzv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163atnffjlu.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163amvwbnuf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jdctbglc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163nowwvlbz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163xngfrtvs.html

[R08] 数值比较
来源：http://www.sxryk.cn/163mkhpskad.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163bmrbcoxu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vvpigylt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nnrjqpkd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163gfrjzcxq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163sgzgifee.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qhltksgn.html

case "$1" in
来源：http://www.aibaodan.cn/163zvwcfhlu.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163vylafgtb.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163rcptfcva.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163flglmhnv.html

esac
来源：http://www.sxryk.cn/163cwtrgtuh.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ublecyvk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jwjvmnox.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gwfuiilp.html


<!-- 参考信息 -->