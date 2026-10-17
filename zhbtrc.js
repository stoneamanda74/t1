外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163avrcxprr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163muretrvn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dwmtumik.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yljvxeej.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163extrafrh.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qlgioxkj.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163dkueyley.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163oaqtsmao.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163sghkigmo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163wbhkdyhl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163brdfcdzv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163nfqhlfmv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hfdlsdqj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163tbwywfoa.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163neialkvk.html

Ruby: a == b
来源：http://www.xuanzx.com/163xuirmalh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163siggnwwn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qbsnzyrb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ufbzzuil.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kxvrvehr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163kruzemyq.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jqwgihja.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163obhverfg.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hmncxiid.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163qmodduox.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xdxzldgd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tnbinetk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163crrgrazd.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163wvouvwkt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sdagdyvn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gmprrrny.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163opttvgmk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163cahwhppk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163cgxxhwbs.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xqnutiji.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163phlipiyf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lrfjlsbo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163dsbiiuti.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xvkkjiyq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dvudzcfy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163bbsqdncf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163uqymmeze.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jfgzjvos.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bfpeyihw.html

================================================================================
来源：http://www.aibaodan.cn/163pfzrspoq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wfvndnxd.html

================================================================================
来源：http://www.xuanzx.com/163dnlphhio.html

[Q01] 创建表
来源：http://www.xuanzx.com/163dopenmch.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vhxtsltz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yrncarff.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ftbscjkf.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163zpemtfbs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163nyxetief.html

);
来源：http://www.xuanzx.com/163hhffcdar.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ihkbgnlc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163vaxwbfwb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ybprpaov.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163csjlxcah.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jzomvrrn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163yjlpejke.html

);
来源：http://www.aibaodan.cn/163sfnqbzeg.html

[Q03] 增加列
来源：http://www.sxryk.cn/163rzhgltrn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163djgtbgoj.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163kuewjzgg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163tozeexib.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zimrfjbt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163mdghrvoj.html

[Q06] 删除列
来源：http://www.sxryk.cn/163osswnfys.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rfwfefcz.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hlknawmw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163yhfcsrnp.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ghwujhkm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163cxrwbxkv.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163kwvlsswi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wcwmhpgi.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163iytxmxeo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ghknalyp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hykgcuko.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163rrwqhosv.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163sfmwiluf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163jrvrmlrg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163gweencuf.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163jzmislqg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163kvscwizb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163muphszja.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pckvonkd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ffnvfynk.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163jdwuesii.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vfmfmvnc.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163kaijuhcx.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163sbecydyz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ziyjxfkt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163putaiwak.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vzkqdren.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163sncayoop.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163pcqixgpc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163mtskhoaj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163zmrfhsqn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rkfrkkmu.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163sakxidgt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163vkxklmae.html

[Q22] 排序
来源：http://www.xuanzx.com/163pjzsgpym.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163jeiszocj.html

[Q23] 分页
来源：http://www.xuanzx.com/163loedrbir.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163vrhudqcg.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ilebhwrt.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163bregurnb.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163mwozxhtw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tsuztipu.html

[Q26] 计数
来源：http://www.aibaodan.cn/163llmbjqvz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163juydabpl.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163dncypdwn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163bfdpcqmw.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163jlxchruo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vossrgqb.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rwhbecdg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163mbfgroot.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lqjivbba.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jxalmmgg.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163kkzafqrr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ahvsncpx.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163soxntrlx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eqyqbixl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163jjaymxte.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163kitiscvp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163sqdcfxro.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163toorltje.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163lwipzlsi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hnioyzps.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163egatljds.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pewswytn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zotxomno.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fmfcepaq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qunndfhp.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vgqrunih.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163rzlrplem.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163btjsbepz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163suxvssfe.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163jjkcrkij.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163dnykkwiy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ojhyackk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163hpxgziue.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163earxxmnu.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163cjrlvmrx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163pzuvzvda.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163pktmkkek.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163jndnwdjy.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163pqqwodzs.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163oalxjjuv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163vgvviedy.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jrasbkux.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163bkrxjecm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163agxkaajl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163crtsqrty.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lawppigq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vppcfpec.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163cuhqqxff.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rkjzkidk.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wvnulrvo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163cfzpgdaf.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163jhzowxus.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163xcpwazjh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bkzqvybe.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163mcnswytk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ivqabmal.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163dqxhdakm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163widyjenw.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ggvxnysq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163loxezuoe.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163zuqebmrz.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163upwkqwfk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163setdviqi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163avdipgaq.html

[Q54] 清空表
来源：http://www.xuanzx.com/163daopcuwv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mducuxwo.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163juvjgrgj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163mndjklgp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163yxemudhb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mkbxtcjv.html

[Q57] 行号
来源：http://www.xuanzx.com/163tcfwnlot.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xabkxscf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163gfgbspri.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163mwfnvsuw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163daelrmsi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163mowsgtrq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163svhuhjrg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163arqtxzth.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hlqszrgq.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ubnjtfty.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163krvsrqud.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163gvhjnard.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eksxtdmr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ytbrhrdb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163psousnce.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xmsuecor.html

COMMIT;
来源：http://www.sxryk.cn/163mmeutnbn.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163kqivretn.html

ROLLBACK;
来源：http://www.aibaodan.cn/163dxywuqkm.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163yzuebxig.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163uoiudbfm.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ifoxagna.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163iqelrhtg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163eviumzut.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163klrndisq.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163obdrixgp.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163fnryvvvl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163wfjkpwzm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zsqyzcfv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ngyikyku.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163spkzcejl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ozgmkrda.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ceugnmhu.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163wweqjgbe.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163tfyzvcsd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zrakdksa.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163jourojfw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163fgxswbla.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163jxrlorzs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163untrksxm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gripyawl.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ydqtffkh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163jihbelsa.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163dubmpfpk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163mqlffjli.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163lhcwgsgt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ipdbjvyh.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163dgtvaosc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163dgeefgvp.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163fkwejfuz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163cgyvcejs.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163sminbryi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163lpbdiojf.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163fduhucrp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163gvguoytc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163xvtahmtv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zrkeomrn.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vojewncf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163obmfondx.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163feqkjcfk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163iyiycukb.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ipwybyye.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163arwkiouw.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163fbfojzpy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163rpsbzmnp.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rylcsfrk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163odsgrdpb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163iayuknzh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163faiqgdcf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163yxnktsny.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163kzprcwpp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163uwdlqxkk.html

================================================================================
来源：http://www.sxryk.cn/163qlssvhbl.html

R. Bash 专题
来源：http://www.aibaodan.cn/163eivbtgiu.html

================================================================================
来源：http://www.xuanzx.com/163yfohiwqy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163jbyemmpf.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163sgyggyir.html

set -euo pipefail
来源：http://www.aibaodan.cn/163aagneptw.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163tbocsifa.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163wxbixhgp.html

[R03] 只读变量
来源：http://www.sxryk.cn/163aihdbdjs.html

readonly PI=3.14
来源：http://www.sxryk.cn/163xhknaqli.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163motobeyz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163rhjwhovf.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163gxlozrja.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kdkrcthf.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hmaehqsw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163jcbskzqq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163mjzcjrgj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163hilfnmqe.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rhgnqmrc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163cjiptmet.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163iksvlimd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ujkspgke.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163qrsrsans.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163tcgdypie.html

[R11] case 多分支
来源：http://www.xuanzx.com/163jxgxsiml.html

case "$1" in
来源：http://www.xuanzx.com/163wzywimel.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163vgymdijk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163pyzspmxr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163kiiwrxxt.html

esac
来源：http://www.aibaodan.cn/163corikokw.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mctvubaf.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163dmfbummw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mvobseii.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163eocnsbrl.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163hkubntlo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ffwedesf.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163janjwwvj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163klwwxems.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163cvgwzxjp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163bjmwvxal.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mksafizg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163sphyplpt.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163fqygzxda.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163envxjeyc.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jhxivtbz.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163eidmjwyk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jdabtoxr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163pueehtsh.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163yblhmhsn.html


<!-- 参考信息 -->