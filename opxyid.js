外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163agsqaixq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163oyvslkhr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163vpttcukl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163sozpoziu.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rsejifvp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ttlhyiss.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163emepmufe.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163llbpualn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vortyruc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163omwaxipy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xznetaqj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163oifidmus.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163oncyeazw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gniqdpex.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163oowyhnnf.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163nkbwtdha.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163jfgmzfug.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163mqfjmbno.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163kpdoyvyk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163wypfywss.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163hvukdlyv.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zexapsys.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163erzuosun.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vfyjxcnj.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163wnbhrsim.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163npidypub.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163segqnbku.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163wzcoyksn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hzlccxrp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163athnqzqw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163vkxveabv.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163olpscddv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163einzkcwm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xmkaeygl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163rmbqxayj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163dedcqlun.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163tbnnrcte.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163xoxksxxt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dfxidihd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ojkramtf.html

================================================================================
来源：http://www.sxryk.cn/163zawzsyvf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163xcejipyc.html

================================================================================
来源：http://www.aibaodan.cn/163qosdzdzd.html

[Q01] 创建表
来源：http://www.sxryk.cn/163spbsitoi.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dgbsknfe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163exafateg.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163swhaexup.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vjnugiyn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163yrvcwwum.html

);
来源：http://www.aibaodan.cn/163ticqccza.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zmvgbjhy.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vxyazptx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qrefduxi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163hrokbhzn.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zeendloj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ozabgwhk.html

);
来源：http://www.xuanzx.com/163hgvbnwwi.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163rczuoaoq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163usqgihmi.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163nzifjeaq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163heduoobw.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163fooshsfq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ibeboccx.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vbjszvpf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163eaxdenmt.html

[Q07] 删除表
来源：http://www.xuanzx.com/163cykaeyvc.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xpgiiwoi.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163igiluhvs.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163offajkbr.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163uscmjdyx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163reqwqclj.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163tpiebltg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163tdpfarec.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163mzzvrvye.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ejdneefk.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163mdaibvyq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163lawjrrvl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163utlnzizv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zlednruc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163rgbemmrf.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ggerovdz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163spjnnrju.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163bgxonpiz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dxwsaevs.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163knidvhio.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163wwnvwpse.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pzpxbvcb.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163pqhgtwxo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lhyeahvm.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163tcjmunli.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ypauagcl.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163nbfckxnp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163pyjfgcyl.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gqfgqwtd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163eowifdcl.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jtzenylg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163mebeuwbj.html

[Q22] 排序
来源：http://www.xuanzx.com/163jdmsvpia.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163auqwlcte.html

[Q23] 分页
来源：http://www.aibaodan.cn/163oruswpwg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163dphblkpy.html

[Q24] 去重
来源：http://www.xuanzx.com/163umjzpdcx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163pvbgoufu.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163pmefairj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tlfabgud.html

[Q26] 计数
来源：http://www.sxryk.cn/163kgtscfjd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vrqqiswk.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qesrdrzs.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163hxcijfwp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mxfxwxyp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163qtnyfcmz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163otortjdk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163bmfvcaox.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163faslcolu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yvdlmtmy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163uhlrtrqx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163mrejzflo.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163dnopoznq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sxsqeqck.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163mgylswxn.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kjthwlkh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163uzuqvdlr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jxedzrwe.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163zfiotenn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163qanwsggt.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163vulcwoku.html

[Q35] 内连接
来源：http://www.sxryk.cn/163fcljybqt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yxbotgxa.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163zsjoamlz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rnfnuulp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wuhppjnf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xmilpuue.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mbxxjwrr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163icrshfuq.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163fijsfzar.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163zdcqskgk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163vxumeuak.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163lgrczytq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163bdoedvxm.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jrvvbefr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163hsiuvhsi.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ngtvjdkf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dpggtrmj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163fmsklnmh.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vjxqtutc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163rewpbkzp.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163vrffxaac.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163scftnhmr.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163bkrpzarh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163rthiiwjx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163humzafhe.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uxfybqan.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ajdehvij.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qxcqhfhi.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163grviqbmb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163fllhipys.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163uhbtttff.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163avjbbxqi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163cpjaezse.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163gxsocjdb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163bizwmixv.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163mzrvfbhk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163fwwwifoq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163gcxsgbkc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jpgekhcu.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hmffrowv.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163rkjafiui.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163bsmtlepx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163yebcyhvi.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wwhiqauj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163cuarhawr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ctvdbzwz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163tufqscib.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163qvusjmjf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163bucuivvr.html

[Q57] 行号
来源：http://www.sxryk.cn/163nkauqhsk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xpjtrlbq.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xlwpstcy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tfsaorjc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lywbbyge.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163nyylehnp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163bocznalw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163yyjkzffo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163bnkjuifv.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163kosdzkpf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163vkinuvfg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163zdblfbip.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cwbmhtmn.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163slgvfqqs.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163tptyfbtt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163rkhbtvdz.html

COMMIT;
来源：http://www.aibaodan.cn/163cazqploj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163dhelxnqs.html

ROLLBACK;
来源：http://www.sxryk.cn/163mfssjest.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163foanmoxw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ebodeljn.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163fmmglhfp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163dgloynpq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163lhifzqza.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zqhwgzbq.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nwknfevt.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zdjzvgoq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163wfnybumn.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163rlixoigy.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ydeusqkt.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qgsnvfdb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163wwifuyut.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ddmqkhbc.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ezuismej.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ofyudfig.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163vjtwokni.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163akjaouem.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163rfwbaioj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vaqkowvp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ygijotxv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163rojfbrtj.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163nihkfyjn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163txcndmfe.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163uftwdvmj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163dqvqsuow.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163rcrlgyia.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163uuqiffne.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xddquzsk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qffxvaep.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ktalioam.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163wfboezfy.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163anbbhfwy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ncwwwhjo.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163xfseoggr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xwxzbeck.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163mqmhnjtg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163gtlriosx.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163joobomsj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163kgfhhsew.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163hcritose.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163swdhvksd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mmoklqar.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163oqkebhsm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ckbtqnfe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163jtxqhoik.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163nqchaudu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163gggytkxq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163xnypvbwq.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163mukkfkdl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jfhjvxfa.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ifecxsrt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163jcxwxwyy.html

================================================================================
来源：http://www.xuanzx.com/163vwmyrgqw.html

R. Bash 专题
来源：http://www.xuanzx.com/163twyzfjkl.html

================================================================================
来源：http://www.aibaodan.cn/163vefjfnil.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lyfvoalb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163vvxyozoe.html

set -euo pipefail
来源：http://www.xuanzx.com/163buafejvr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163riczopis.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ftbmgjwj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163sleofkag.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gvzaxwks.html

[R04] 位置参数
来源：http://www.sxryk.cn/163sdcyhfrc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ioznefvv.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163hifogvlj.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163eckdbroq.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wbatoafd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xmdcgauu.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163krvjsdsi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163funghgip.html

[R08] 数值比较
来源：http://www.sxryk.cn/163kqoknguz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163kgbdzons.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163mthpnwjz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163omptivkp.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qkgtoefp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163gwhareis.html

[R11] case 多分支
来源：http://www.sxryk.cn/163uitmboec.html

case "$1" in
来源：http://www.xuanzx.com/163nfwgkeaj.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ywqyqvxb.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ajhzdijt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ftbfpqeu.html

esac
来源：http://www.xuanzx.com/163mtdibgpr.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cmrbqtzd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vfjdunws.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jgxorpvm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163eeonftap.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jiijylqq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163iolvvcfg.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163tmyafjlk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wllhbyvq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163dnaettko.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163twkwgkpi.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163agvgahdd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xjzsdcor.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nwchajwd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ycrqjiux.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ceuwwzyz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163oqwddyiz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163pgcgusqn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163zpnujfkb.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163slojrnix.html

echo "${#s}"
来源：http://www.sxryk.cn/163npoehxhu.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nmgujhhg.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163bodvcqsy.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163voyrjffu.html


<!-- 参考信息 -->