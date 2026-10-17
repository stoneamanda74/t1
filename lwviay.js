外链999!wailian999！

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fbveluoi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163nlkalpfi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163hlrnfpkl.html

Ruby: a == b
来源：http://www.xuanzx.com/163qffkosoq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163wfiqmctm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163hdoylfbo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ustcdaii.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163uporgynb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163imcxwxkp.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rojdztmj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163svwzfixc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163kxnmtmzi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xqqpqyjx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163fnqjdrkd.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163yfqgbirf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163zdeeprtq.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163hwxosjep.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jqawluwu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wovblapf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163zhjalakz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163wzvsufxo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163pdchxhnl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163edeynpks.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163uitzmgsc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163duijfdav.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163erauczvu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163otbkzaur.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163rkruhdkz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163lzdegidf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163yblvwuaw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163sdurzeho.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163beoeocxt.html

================================================================================
来源：http://www.aibaodan.cn/163kfngzfpj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ovyfoatn.html

================================================================================
来源：http://www.sxryk.cn/163jhqtanbe.html

[Q01] 创建表
来源：http://www.xuanzx.com/163jyxabkgm.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ltacoheb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163awljsftg.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163kwdxumvw.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163oimvibfv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163nuqfenlt.html

);
来源：http://www.sxryk.cn/163jjmjovjm.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mnhwqwse.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163qzghjbhi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qoajeppm.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163knmbemhp.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163vmvmvxmj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rfshusir.html

);
来源：http://www.xuanzx.com/163kvwaphfl.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163cwnevaeq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ngbwmexv.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163tolblaoj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163rllsmhvl.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xitnqwnu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163wghnawbl.html

[Q06] 删除列
来源：http://www.sxryk.cn/163rsahwtud.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163asyfhqlx.html

[Q07] 删除表
来源：http://www.xuanzx.com/163trcdtmkr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163tlieuwxp.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163mscbbfyq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163dqpwkdhn.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163afehaiyi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163plgvdqbc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ahbtlpqo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163cmxnojap.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163imhobvzn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qvqxjkuo.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163wblozbcp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163mdndvkwz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163niovwzov.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163cavalsgh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wwktxpeb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163chezhrhf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163uqnnthwy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163vqujwiby.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163gobjwjjp.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163xbkkwego.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163decfmcqr.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163dkqipiqy.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qmajlbvu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163buqkfuco.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ujqaaclo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163wxzvsvij.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163lfcbgpvh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163kkykniso.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163larxtbgg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163oxonxwdp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xfojlpww.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ocxeyxus.html

[Q22] 排序
来源：http://www.aibaodan.cn/163gwxoxmvt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163moaseisp.html

[Q23] 分页
来源：http://www.xuanzx.com/163pmekctdj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kyzomswh.html

[Q24] 去重
来源：http://www.xuanzx.com/163wonsxapd.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163krabvdsc.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163kyexrlmv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163nqtcgcvc.html

[Q26] 计数
来源：http://www.aibaodan.cn/163airreaxm.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163akeiqbqp.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163paetzqfv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163iyqlfuhj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163gzpmlgcx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163uwmkydsb.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163zhaoiszm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163oobcobis.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rmoqorba.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wqkubohe.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163fakgsuok.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163eyuqsvqp.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ktkbzofw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jbheuklj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163umbzlqtp.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163wcdhwfyb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163eswhdere.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163nmcelewt.html

SELECT * FROM (
来源：http://www.xuanzx.com/163mjpnmqbt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163rzrsosfs.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xkcqawvt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163mzmlzmsc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163njbwrffj.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vvdzesix.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pjixbjfe.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163nesprtsw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163wjwgunqn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163gyzwirff.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163dzdmwkka.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163zdpsyzrj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163falynqez.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ednwayer.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163iwufpqzm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ujlhywjj.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163wxqfimri.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163lpxiwbhu.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bcbvevsi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zslaoclj.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vrgfdaco.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163spnpmwjs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163jldvhuqx.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163pdxgkovw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163osovpmvn.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163icdfhher.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163hrbmllct.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163eycatdha.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jwbakujy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163lgyjzzrj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gaojaupk.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163dpvnyyfk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163sbbtbzmk.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vozozftv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163nzzjinfi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163kteccike.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qsovffid.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ubiviltf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ssdkmvpt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163vvezfeqm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163txjczkmn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qafjnmzc.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rdstmpan.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163jriztiit.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163cviaoxxv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163esxhichd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163rvqqbapx.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163sejngptu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163qqgxjuyj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gcmzxgtt.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163svdcvmxg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163yjalgeuc.html

[Q57] 行号
来源：http://www.sxryk.cn/163utymkeoj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163oappmnir.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ixkmuraz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163bfpeqbrw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kjfzszzr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xfnxsqnl.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163kmstizqb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163wwuqlxdj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163pmuykknl.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163stxlxmik.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163orugpsqv.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163adjrwgpg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dtsmhjou.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163evvlayen.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163jsmbzdis.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zfcgrboi.html

COMMIT;
来源：http://www.sxryk.cn/163hphbqfhd.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163gbxdvlhj.html

ROLLBACK;
来源：http://www.sxryk.cn/163ybhecudv.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ymwgaopy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yofejqto.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163hygqppyg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zsutoefx.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vvclbjlz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163hdpvjvza.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163udlmslsi.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163txlictxg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163gqefldtt.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163dqsegacy.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163gszzgutr.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163vljyroyi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163cxukcvjx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163hualkzup.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163eoquolbb.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163cwdhhfui.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lkymzvcg.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163pscdhxbe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ubriplob.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163awfgwwch.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163wmapatrq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ullommkg.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163iedbvvcf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pivyhbow.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vcbjeylz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163icpbuqyg.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163rwpknjrb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gmrxhqph.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hnppqrar.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163bxnmsebv.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163qtlyxqdg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163maknhvdo.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163tsfehmnh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163liafjdxy.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163fcswvlar.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163prqghaes.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163tvyaujcy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163escqiucy.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jzqurinj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163tevphgwp.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163fyivucvu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rzuffzkm.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163dbuwhhcd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rsjiqoqe.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163caxzigwh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163tirwhawy.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163pmczjbgt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163mfzrotko.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ewlsgheg.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163civvwdla.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163qejbamgo.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163usiyqcmy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gktrqppw.html

================================================================================
来源：http://www.aibaodan.cn/163zqccvazl.html

R. Bash 专题
来源：http://www.aibaodan.cn/163agsgjsqh.html

================================================================================
来源：http://www.sxryk.cn/163wfeeblma.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163tycfhwhb.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163iluyxaeu.html

set -euo pipefail
来源：http://www.sxryk.cn/163emzhirso.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qmsuzvmc.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163uorizdlc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ayfpbmsm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163oriarnnj.html

[R04] 位置参数
来源：http://www.xuanzx.com/163vuzsabpf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163cipowpus.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hwzgneny.html

name="${1:-default}"
来源：http://www.sxryk.cn/163yruuruiq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163xelghnvw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jhapeccv.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xdqzzhkr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163hpnwxtcl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163dpbxgzng.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163uuaebomh.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wqilwqfy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163pfxdcjwz.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163xdjqrlxq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163vxlrutvv.html

[R11] case 多分支
来源：http://www.xuanzx.com/163siclglyt.html

case "$1" in
来源：http://www.aibaodan.cn/163qwnpxvox.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163buxaabtt.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163sfpckymp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163nbqucafp.html

esac
来源：http://www.xuanzx.com/163ctzpgtpn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163nlqmfhmg.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ispvlnqn.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cjhxsdnw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163lmrfvncn.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163iddondzz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ycsnizvw.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163gyhkyjuh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vnbnqleg.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163cxzmeagp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163cvrincqc.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163rxsywdod.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vmtskgul.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ipnovjyd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163izkernmi.html

[R19] 数组长度
来源：http://www.xuanzx.com/163gugdvimu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jktdwiyk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ricbdace.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163pahbajdh.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vvrkpsbi.html

echo "${#s}"
来源：http://www.xuanzx.com/163zcmxwcle.html

[R22] 截取子串
来源：http://www.sxryk.cn/163gnowwfio.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163puqoojqf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163hhwjkvyi.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lwrfsvsd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163vtyvlqwh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163biqbxjub.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163eufwoksf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163xlwttylk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163apwigxng.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163olxykoty.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163uuhzrqgd.html


<!-- 参考信息 -->