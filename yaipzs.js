外链999!wailian999！

C#:   Parallel.For
来源：http://www.xuanzx.com/163iezciwej.html

================================================================================
来源：http://www.aibaodan.cn/163dajmumfj.html

P. 常用工具函数
来源：http://www.xuanzx.com/163sgpdbchs.html

================================================================================
来源：http://www.xuanzx.com/163dnwvzpge.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kzhxxdzy.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163xyijdnef.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163amozqbou.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bzjsttml.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jvymxshx.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ocqkjfea.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163vcxtymqq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163hpjomjky.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163apfrbaom.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163kzzecvfp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163xrvnlrdc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ifujozxt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163deajjnwt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zdrixvtf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163eakisrcg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163jkuprhmp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xarjwxeo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rcmhllkw.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163swtiywml.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163viyhxdke.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163yozwbugg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xsoizsaz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ywvanhjn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163srowumrh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163yokaziti.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163yxdhnmyy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163pkicgjdq.html

[P04] 求长度
来源：http://www.sxryk.cn/163hfebyjre.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163hkaqfdqg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163msmyaoup.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dtabrohb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163utgwordb.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163sjlwrjma.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ricgtxnx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163bqykvfjj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163hmaqbnxb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rwdzvpyp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dwsknmkp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163bnmiieae.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163fwgamjkd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jjggtdfz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163epojdbpk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qtqrkulz.html

Ruby: a == b
来源：http://www.sxryk.cn/163cgexjbqg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cdzvfibc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163cpyxustk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163xcgeqkxs.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163fzcaycwy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163exrghvai.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163vrkwhsvy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163yjpqcbiv.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163yryzjdvl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163vrumlntu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163itfatjnm.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163eavzagkm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wfecvfun.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xhwfopzf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163znnqkiyr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163csyilywi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163gtruvpxz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ipjeocpk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xugqbzbk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163rbalblpi.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jlnaxwqm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163qimihvat.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163rsgmxgwj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163sovjkdzm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ahxkgohq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163azckjkhp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163omwvrffx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163prwfihfa.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nbiivstd.html

================================================================================
来源：http://www.aibaodan.cn/163yubbwzya.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163pnkijygg.html

================================================================================
来源：http://www.xuanzx.com/163cttzncpi.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163lxpbensy.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ilagmqkj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qiettuof.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ilkxroyi.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163uoofyfxm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ntdfzfvy.html

);
来源：http://www.xuanzx.com/163wmcoualp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163lsrsalpn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163wvuqgwce.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xyolbqlc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163udfifjqq.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163pnppipxp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dgnroree.html

);
来源：http://www.aibaodan.cn/163unxcngzt.html

[Q03] 增加列
来源：http://www.sxryk.cn/163aytdueby.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163irdtrozf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ymogaevp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163gqcpsygd.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hrtvaquh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163aozhnufl.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vrqxutuw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ukmkfipz.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dswareld.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163fkrltfbv.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163exblwmsf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163lopqqixf.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163oretyfbc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ijmmgakq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ndpzkprn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163wcbrdklw.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163hzglbjag.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vgoyrlwm.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jjecaeju.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jmvctvky.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163wqtlbvqn.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163fskiajht.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ltgdhtyz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zpssgygd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163sebkoxba.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163rlstiljt.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163lomrrete.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163mtvledkx.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163azguijsv.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163kchuvhhv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tltyhmlb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ojfrrgta.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163iwctxstb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163daztjtiw.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163slppjgzf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ybfrmffw.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163kmqazyti.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jmmvmbxu.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xzuwjqfl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163dktnanxm.html

[Q22] 排序
来源：http://www.xuanzx.com/163ygdmopbu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ycdvmllb.html

[Q23] 分页
来源：http://www.xuanzx.com/163unfgpytr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163rbcbhxay.html

[Q24] 去重
来源：http://www.aibaodan.cn/163qyaktayf.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ifnuymdg.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163maccqmos.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163nczaiuhg.html

[Q26] 计数
来源：http://www.sxryk.cn/163afmnsidy.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xyjrhqqt.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163xfddcvci.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163zqpxjzuz.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163qzzuvxkk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163dgfeuvls.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gftmxada.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ngfxyncl.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jwappkxh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qfmlghib.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163gvtykzzf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163uhljfepa.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163dcjdbalx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gpwtwixq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ioomuzjl.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163uyrbdupf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163yueumquq.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163lfdvjqsv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hzmidzaa.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mbnqobbj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163hniodyuk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vuqerqoe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tvwbqnpg.html

[Q36] 左连接
来源：http://www.xuanzx.com/163pyfglknc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qymtxsrz.html

[Q37] 右连接
来源：http://www.sxryk.cn/163hxfqsorp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hfvebtfr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163hjxvmgtk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vklfkaae.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163apmgrahl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163uldvyrjy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163pvggprlg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fwxozlnm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ikcalkxv.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163xhsqivfm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163kzwrtqrr.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163sjwcdxdb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xrnbttjr.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163skomgovx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163fioktpzm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163xmwfhoap.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163nmdotbfu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163lqitrgsd.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163fvipxety.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163uwikvity.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163wsknbrnr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vvcsevzt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163efrbnxtq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sztzohpm.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163vtgvdzkv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163wtasdgda.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ifthcihr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ltmfumxi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wzngvwcx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163unjosjaz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163kiyyxysr.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163javkavsl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163nyemataa.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rtnnnoin.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163lzkipjzp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zbeoiftn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ybpfnzlj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163iopvuiql.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163rszmshui.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hfxzqvqh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kxxqwlwe.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cptjeois.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tmszxxnz.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163szorsuuj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163aufyxqmh.html

[Q57] 行号
来源：http://www.aibaodan.cn/163swuzpfjf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163dnchlxzf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pamjjjcz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qtephtdz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gmyjlllm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163coanpvph.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163myyozayr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163gdslnpmu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163wgupbbal.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qbvxflli.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163bzdvsqnu.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163kxkcphlv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wgwxxpnm.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163tcjemixc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163qwjjhsme.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ucadcpcj.html

COMMIT;
来源：http://www.aibaodan.cn/163pauuzyqj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163yrggncas.html

ROLLBACK;
来源：http://www.aibaodan.cn/163nclvydqk.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ksdcbfnl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163cetggezf.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tsltwcsb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163etpndsog.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ywhrvmcn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163kdxrfwpr.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163wsyhxshe.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vglburqs.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163xboizecm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hydtrwsi.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163vbfwszyi.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163qmejxtpc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163yazcuqmw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163jtmoaqyb.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163bcyxvtme.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163rulctyoi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163gnqbcyyt.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163lthclhex.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163aaoxvdom.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163kvvbputl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163lyggtjyy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163nuqshdnh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163clrlnlng.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ljuretys.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tzxvwmcb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163hgftuqkw.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163oqhzbszt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gfxwdyda.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vtmemrwx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kxbaatue.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163llrwiyql.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163tlucfnzb.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163dvhheyts.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gnwvgpwj.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163atmjdabt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163cossshnn.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163auyaehce.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163gtbiobuq.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163pfvxomoy.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163lzalokvn.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ejvddzmi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163klljeisr.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bukiyill.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163rntbxfqw.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163dxkwbhad.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vkpqbqbj.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163dmlhnxfj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163eejrejnd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163nhqedbqe.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vbznjloe.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vptprxvn.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163xmsixdpi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xjpnbcbh.html

================================================================================
来源：http://www.xuanzx.com/163dboqgral.html

R. Bash 专题
来源：http://www.aibaodan.cn/163clndjogp.html

================================================================================
来源：http://www.sxryk.cn/163zmddemyo.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163aftaokle.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ebkadxik.html

set -euo pipefail
来源：http://www.aibaodan.cn/163atkzckgi.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163adpfrwre.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163bvcwjayc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163tuhgtnpf.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gomwxaov.html

[R04] 位置参数
来源：http://www.sxryk.cn/163fnhimorf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gacurbkn.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163akuqlrru.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tvkyoxry.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163fafppymi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163rjbfhnep.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rvfbfnjd.html


<!-- 参考信息 -->