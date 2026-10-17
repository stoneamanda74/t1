外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163pzkgihuo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163tlcsntol.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lmzzsueq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163uqbfbnkt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163fhtxmsut.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163eijfdkpv.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163wsbeqnwi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163lyhqmskg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163hcqnhwju.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163voxpxcee.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163sfhlijke.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fdhqedoh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163pwinhnis.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hrkfpaqg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163cmusrljn.html

[P04] 求长度
来源：http://www.aibaodan.cn/163cxbycgcm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xqrmuizo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ztiivpbq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gysqslhd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sinmeqhe.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163szkmvhwh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ibzqybks.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163vtnqrlga.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163yaunrale.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ntblulug.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163bvunkknu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vrkgfyrp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163fcwermer.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163syahbmxh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163vbgtwqtz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qujsoafo.html

Ruby: a == b
来源：http://www.xuanzx.com/163mpfnwcpu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dkatpvir.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163viwypsof.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163atbtqyty.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163yuvhqhha.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jahmhbmy.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ozmhsuab.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163bgqbqlfz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163jifmsvxg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163yrpfgtwy.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ayigixzx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hzihenqq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163lurzqyob.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163wymdqwib.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163awbeiapc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rekvncfe.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163sythhkdk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163egsskids.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163sgxqoydz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163rmbwufvn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163whzqniux.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163jtnqoxpn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163stabbiab.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163xlibyaaz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163sgnnzxsz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163odraczai.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163sdpkldtg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jrsvjjoi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163shhysgdk.html

================================================================================
来源：http://www.aibaodan.cn/163bjyszusu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163sjpuvbfd.html

================================================================================
来源：http://www.xuanzx.com/163zanqvhrj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163mxmlbnus.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hilxponl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vqsiqszx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163aqlnwiey.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163bvypdyrx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163gbiywvor.html

);
来源：http://www.sxryk.cn/163dmqpqafc.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vareespi.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163bavtkmxu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xygurfrt.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kcslnnpp.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163zprwdqaa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163sheskxnh.html

);
来源：http://www.aibaodan.cn/163zdomszxn.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163swjczygx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163wmstcppl.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163bwnbvupr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ytmsttml.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ucvdkaci.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163vyaeimwo.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163avvxlkpc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rfewycge.html

[Q07] 删除表
来源：http://www.xuanzx.com/163nkqcsyxu.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163sqpegxbs.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163pkwgzudd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163txgvfkmd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163frlehrrn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163gsqjhyio.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wtuazruc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sjukmshv.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xedbueey.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163dpyazevz.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163aztqvlow.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zeprsjuw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163xuivqmle.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163tjgnlqqh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163uklmpzvu.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163cuqiptfc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163farhpcas.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kmbkjiwy.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qjiagcud.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163xehaycut.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163zrpnkyzd.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163cpxqguii.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jprnzlbw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163udiatjnq.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vavftteh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ahxqjbjf.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163cxwmbwdd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163dwsmtfzy.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163nasndjyi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dcciagmj.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163svvnzkya.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163lpxgypwc.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hbfvtift.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163aedppeha.html

[Q23] 分页
来源：http://www.sxryk.cn/163awhzwdmr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ftdjjuua.html

[Q24] 去重
来源：http://www.xuanzx.com/163niiyqrkb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163rumqeyyp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ckcmfrwk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163wxbknvdl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163jwnfoswc.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163lwemcfga.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163dwsmxyip.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163urdlafph.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hhfnmxpg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163pxijpiep.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163caewtpql.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jmoffojc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163iswxxhgj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vktsuhph.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163wihqmusr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163udwoikys.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163twnpozug.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sfdazbiu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zgocwall.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163osxxbhoa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ghiiypjz.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163oeozhznv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163kytkvmuf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163xswbhtza.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163pizonlhy.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xydtbtke.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uwdgduzb.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163yyxcausr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rbenwlbo.html

[Q37] 右连接
来源：http://www.xuanzx.com/163bxxiwedp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163npmgxjix.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163thdoarxq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163cxhealke.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163zcylcrxi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163abewcntr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zyopcomc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163puqhljev.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163icjwsuxy.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163gclqaoyq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163xgnzkyeu.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163pfzgoglu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163vaxsychu.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163rjmqhtad.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fecwlcvf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jyavfrvg.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ttprbgkc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ckqvryzw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hjjkwerg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jxkuiojt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163mziumjfh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163edgjqkha.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163iyvgwmzq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163awbwyquk.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163sfunbiyt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163brabuhga.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163rjikzzdx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hqizgbbz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ybgzxsyi.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163tlgxhcni.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vlpvchby.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163iyggbklw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163mtmcmmoa.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163vtafdszk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163kcboolie.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xwfatxqb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163zbyrnuhn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zuzhtcph.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uaqacwmi.html

[Q54] 清空表
来源：http://www.sxryk.cn/163uwgaqcqh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163idxzehhh.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163mysaddua.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163iasuiyql.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163bvnzshht.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163bwixxmuh.html

[Q57] 行号
来源：http://www.aibaodan.cn/163iwendhfs.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163yraajqgq.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163wdizjhxv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163femycdey.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ehlvzvtr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163oinhklmw.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tjqhdygr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163qsqefjzm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163snzbwmhy.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163qocgnawe.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163hugvzgth.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163fnvdbgql.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163waphsrxf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xcvzbnmb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ugsqepbs.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163sgppmgjd.html

COMMIT;
来源：http://www.xuanzx.com/163bejhteau.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163qjbnpkus.html

ROLLBACK;
来源：http://www.sxryk.cn/163bbhwugym.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163oqfmezeg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163cfhvuiig.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ahvwkftx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rqcaxpkt.html

[Q68] 保存点
来源：http://www.sxryk.cn/163qkbibxqm.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163hmzavrvh.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ngjqwefy.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163iosblxqd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163qebtzokx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163arcebijc.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163iqefhutv.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163noqwycru.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163iwnaeuzo.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xkknnjsr.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xztsichv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163mizztwdv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qosaqnfe.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163witpfiol.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163qcfuucsx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163smjczgpl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ordxsule.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163bkbnbwkr.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163kjfnhhxs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163mezuwelw.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dvitucyn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fkdwwgdf.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hwjgrgvx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163lzqjulor.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163srlqtifi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163txkzstxb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ujijivfp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163rqrmimoq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163xrgttyzv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vbejedvo.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gqiyvdbi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163suebjdaj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163yawebcpm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163yqvuqtfv.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163xmhhzkkl.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vwzsosxx.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163bppofjnx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163oaoaabga.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163fxntlszu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163pnzqqbsm.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163kfdmtfcg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163idmonlij.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wdhqlztr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163cesmrnpd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ezekjbko.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bxtklpkd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163gxeamxat.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163tklkabic.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163abkbdyso.html

================================================================================
来源：http://www.aibaodan.cn/163yjernegk.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ckdykqgm.html

================================================================================
来源：http://www.sxryk.cn/163tcbsviyq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vbcttupr.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163idbydupo.html

set -euo pipefail
来源：http://www.xuanzx.com/163htzpdtfd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163orlqtqjp.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163pieqgtta.html

[R03] 只读变量
来源：http://www.xuanzx.com/163zslfaefd.html

readonly PI=3.14
来源：http://www.sxryk.cn/163axirpxtq.html

[R04] 位置参数
来源：http://www.xuanzx.com/163etmazbbt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xdclmcvj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163usgyubeu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ewzbrgrk.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ieotzyyy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163hvfbmofo.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163cdyxsqcq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tpjprvpm.html

[R08] 数值比较
来源：http://www.sxryk.cn/163lipfseoi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163itoolyyb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gwqupogq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163azuqkxez.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163cdsjvdxo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mdcwtesx.html

[R11] case 多分支
来源：http://www.sxryk.cn/163czofjynk.html

case "$1" in
来源：http://www.xuanzx.com/163empddivt.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163idsrtvin.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dvcauqff.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163npzqdesh.html

esac
来源：http://www.aibaodan.cn/163tsfxzsta.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163veltqavw.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163jphakryt.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163oyincdyz.html


<!-- 参考信息 -->