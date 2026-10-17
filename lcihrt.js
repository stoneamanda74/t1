外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163chzvvcmm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zlshlrsx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163tmelrcyo.html

[P04] 求长度
来源：http://www.aibaodan.cn/163tvymatsz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163tlytyegn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iezzwmff.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vfdqzakq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bukahshc.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163sfwaktmu.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163sjlrcgro.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vfdnyvjj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163inmwzfdp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163iwjfgihy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163mkbwyleq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163varcocbs.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163apxrecyh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163igqibsbq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163dnxvgica.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163bbdtstzy.html

Ruby: a == b
来源：http://www.sxryk.cn/163thenfpvf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163uxjuuona.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163feaeazcd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ylkdjjpv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163laazdayv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163lwnhzytg.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163hiosfqry.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163mczcllqa.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163girybnsf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163qnkucxgq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gmvkikal.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163cyhvnaov.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163frhhafwb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vmqjcmak.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163enjkgflt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mzabdimd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163rguethru.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163anbxdrti.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hrcahmuh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163gmzxygjz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dxhcokfp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ziweezos.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163flbjbbhm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mvyyrbtm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163citirmgb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hlldautx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ghgbnjqj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163yptfefbx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jlbzognm.html

================================================================================
来源：http://www.aibaodan.cn/163atqdfjao.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hoigpsim.html

================================================================================
来源：http://www.aibaodan.cn/163fcgztlab.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163iukksouj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163olxmwrkn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zqznvdse.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jrlxymrv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163clpsxboq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163yqhzudqp.html

);
来源：http://www.xuanzx.com/163hptreswe.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jwmubjbm.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163snxdnffn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zieucbzz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163rqdveuhp.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163jxdxgzql.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163votxswmo.html

);
来源：http://www.sxryk.cn/163bydlkkxu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163mtktfybj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163jpatgfwb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tksopwqi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163liodvsul.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163osyinzjm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163fkbjpegg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163csqrzfrc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163jmxfuinc.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jyogfbbw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163osvfedob.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163znatuwej.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163rmdobvwb.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ryxlcgch.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ttuxupdx.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163bjfegvql.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163apeoxcwp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xsjawuhk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163jquqhoav.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163bvjytgya.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163psxxnzbe.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163pqmharyv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163tqihhund.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163kxamvscb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hgicnzcn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163byxnqzwx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wgdibuxt.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163wyzycfjz.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163npevkgdb.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ehytsjhz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163diyeiisv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163rbiaifkx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163watjdmuh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163aaijgtpe.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163rjuzutze.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hyekkspl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dxzenecf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xcdndcsq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163qhsywrvh.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163csnrgaww.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163rfwkzpoe.html

[Q22] 排序
来源：http://www.xuanzx.com/163qaremypf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ujggzzrf.html

[Q23] 分页
来源：http://www.xuanzx.com/163odvszjqx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163poyemief.html

[Q24] 去重
来源：http://www.aibaodan.cn/163oazagjbm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163nrqddmwx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163utcpidml.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qhdutwwv.html

[Q26] 计数
来源：http://www.xuanzx.com/163iynhcaxz.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163eeofjrfc.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gmkywzmp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163uwslgyrd.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163eervamcj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163shfdjzxe.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bzvcogch.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dkmxgghw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xvtcdbln.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163slzbrklf.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163idevnoof.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wyblleju.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163missilwe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163glubixmy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163jdbgkiay.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ldyrfivh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hvqyzngu.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163jiiycqvi.html

SELECT * FROM (
来源：http://www.xuanzx.com/163rdutnbcl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ptkwmeyq.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163oiwunfid.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lajvdjgq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wmtbjnma.html

[Q36] 左连接
来源：http://www.xuanzx.com/163lhrllqxt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sypwtvil.html

[Q37] 右连接
来源：http://www.xuanzx.com/163mzuxsmnd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163hhqrcqzv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qqdfqvza.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163nqeubkfe.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163iufohsci.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vofdqdup.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163vjbrntua.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fdiendnh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lyfolhuk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163zgcxnvmd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163irqiaqjz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163nwzkdogj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tryeadic.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hawjnght.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163pvzndyar.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163gdpqkktw.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163nvfjzciz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163jrewkcem.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163upiulsmo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wmfmeybq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163dvgiecas.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163stfdgusk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163aqqptigi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163npfmdlrj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ntxkivja.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qpfljyvi.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163dxliueos.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hywklawo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163kqqymmec.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wnhaftcd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163fzurrtnr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qlyswhzn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163yuysaumk.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163qicacssb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163jbjoqwap.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163xceijxxo.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163puinfruf.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163rlguigeg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163qvehkevb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163eanvsqsa.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163xjvnsvgm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163sldraagg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ocmtbmmx.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163moaubdti.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163beghndrv.html

[Q57] 行号
来源：http://www.xuanzx.com/163zdqguupp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163fpebavsu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163oljmhzfn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hszcdjvw.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nagdangp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163dacysuao.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163pfrhjlat.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163cmsuujkl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163zthjwlwn.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163yedwsqgj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ojcdewkp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163kemotrfh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bzxjrmnw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mcrhklnp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ssrmngkv.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163unwiseau.html

COMMIT;
来源：http://www.xuanzx.com/163xjhmimau.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ymdycyxc.html

ROLLBACK;
来源：http://www.sxryk.cn/163pmwvrmho.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163epaarebf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163zpqjroll.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163uyruhfgz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163irdflhww.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163hchafwdn.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163gupozcel.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163yopnoacw.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163lwwwlbbn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jxpvmbkh.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lgwojzcl.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hknxdahp.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163igorvpdb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163opvawnzp.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163wcxwvqfi.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163mvxunacl.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qsnrvgvx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163lhvmszll.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163oobogcjt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163bypdsdll.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163yjyeihdm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ptbucryy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163lnlilhrh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163evbaxypa.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jgkbdjwc.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163mtvwrblq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163tbxzhvcz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163vurkefwz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163yylwdqpn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ocfnbnzp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163qrcfhuky.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163iypikpyt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ruwwchau.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163mrquqzrh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163sderninq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163vcvjwspg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ubhvwxcj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163okynfbhp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163knvlsemv.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163fnrypcan.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163gzughdaf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163auvyosxq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163abzklkor.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163vkjgrpvs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163tobzmswd.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ddiqasdo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163hjodlwqo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hzphamds.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mvzuluvk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fkxctucs.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163tcpyiztb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163vruztjph.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163jlbhsbnn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163syfpwfdp.html

================================================================================
来源：http://www.aibaodan.cn/163fmigluff.html

R. Bash 专题
来源：http://www.xuanzx.com/163zjihsjft.html

================================================================================
来源：http://www.aibaodan.cn/163gldoksbx.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163woupnzeu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163zvysfsfw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mdjraice.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qfdnccpp.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163tauqrpzd.html

[R03] 只读变量
来源：http://www.sxryk.cn/163dfbtlbip.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rsrkalix.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zztycfnk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163yycetwsl.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jhpgvfro.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163cqgugdsf.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163npvlhpah.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163valphacx.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163pybcdjst.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kgsgbtut.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qhncqsgm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163yzmkkebt.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wtpuvase.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163majxllbs.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163lodmigvr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163bhtzwatk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163irnoikha.html

case "$1" in
来源：http://www.sxryk.cn/163imrtnzjt.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163vatxjkcj.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163kbnibltf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163oznlzpct.html

esac
来源：http://www.xuanzx.com/163enuhudik.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ujabeabx.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hrhhucmb.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163aekuwicg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lzynmfjz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163myppnixx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163slnfshrv.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163xvahqzjr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163fgcamkem.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163fmjzhunz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gykniuae.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163dcnfmcxt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163loqlxzyp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163coiliuwh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163juzspfgt.html

[R19] 数组长度
来源：http://www.xuanzx.com/163gqzwkaxa.html


<!-- 参考信息 -->