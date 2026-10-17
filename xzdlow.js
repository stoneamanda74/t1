外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163yiilvpxh.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kdwtjrif.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163rnkdmjvx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163evqtrlfs.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163gwjkidph.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fahutfxx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kuyeyltr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mcwfarbr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ewxmtkta.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qwopbspp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jkhuxacm.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163wklhmfax.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163hktdbxcu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163npoxvkcn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163irfhhfhu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163itvuxbew.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hzwyazkk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163enxkknmt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163cidefbkh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rsjgyptu.html

================================================================================
来源：http://www.xuanzx.com/163hvmnhdnm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jymsdwli.html

================================================================================
来源：http://www.aibaodan.cn/163takowpzr.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163xupquiif.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ojfjnrwc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vkirrfzk.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163uvzjogod.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vqzviopy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163vatuosqd.html

);
来源：http://www.sxryk.cn/163eowvuiiw.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163sakbgiko.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163npyylqku.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bagseetv.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163mgxohdra.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163admossst.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163htlfqfeh.html

);
来源：http://www.xuanzx.com/163wwdiebzm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hbzccphd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ojaqteeq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163nqqxcpkw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163jwnhokpj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163pwrxqfpp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163jouybyuu.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bpdzapaz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163vkpsmsdo.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163boyfspxn.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163rbxmwqpe.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163legqvzsz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163fujifney.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163lnaoktus.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163hlohzxkg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163bvljjzwy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fojzwrje.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163qjerukfj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163werjjxae.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163woebdqlv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163gjhqltbi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zltpvigv.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xovvgpqu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163oeybaurx.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ezaxncyx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163agzenpbt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cmapancb.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163pzswpbeq.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163aelzglfy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ghmhwqlq.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163nvvtpznd.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163fnmxjdym.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wpxqosrg.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163gqbpoatw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zafrnhfi.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rgiohxep.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163mobckxya.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163evhiwlkh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vmeqcqyi.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hvqtqvru.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163rwimtxwu.html

[Q22] 排序
来源：http://www.sxryk.cn/163zrsackwk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163qosyjnff.html

[Q23] 分页
来源：http://www.sxryk.cn/163aczefdwk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cmgwoczw.html

[Q24] 去重
来源：http://www.xuanzx.com/163brzmwuox.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163paymksvl.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163jjejhqht.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163mrckejhs.html

[Q26] 计数
来源：http://www.sxryk.cn/163bdpyzxhl.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163iyzmvmyy.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163pqsqegnr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jkfmpgxt.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163blwgjaem.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vawnlhzu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ascparfr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163zjbpwyxt.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xqsdealy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163otexdayh.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cyaxpwht.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jyztlkdd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zqzygyhm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fouvuuar.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qbfwhbjc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ewblfeak.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163jpkwzbmk.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163smvtccpc.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ntjixaam.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dnyytglu.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163dbopyaea.html

[Q35] 内连接
来源：http://www.xuanzx.com/163hhgeqlae.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bjkbiafo.html

[Q36] 左连接
来源：http://www.sxryk.cn/163nhdunewi.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ftserwkk.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wywebxmh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ggfshioz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ordhuyuk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163btqvyccd.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163aewqwvwl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163khbdgvgt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163iocukugh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tdieuqmp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163dxgwzcku.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163bigjnznn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163tokvbjol.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163lbyxyxlt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163hluprgvn.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163clxtpufb.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ncnnroiw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163rqjgycbx.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163paglwjzi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163nunfxcxj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163uecmznsy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163nvydpxey.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163wnqzhspu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163faqyxykp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163bglsxror.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gsdmlepf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163rppiczjm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163moehglmv.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163fmitcmrs.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163tmjwkhur.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163celmfmnp.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ebbgojlx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163xwamybmj.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163yargnesa.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163coendnhp.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163tmcgngaq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dognukya.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163birlhvin.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163yyhqbbmc.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163bcqeebcg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163niwiuukl.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163xiozikuc.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fwtecbbc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fsgdeixr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163uhwqnevm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ubiiisyc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163vdexmxbk.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ygfkuauj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163egzojwgj.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ktaijkfh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jezawxpj.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163yfzmuvbx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ttlsujsq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163svjfcgko.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163llmfqczy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163sdsdtghf.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qdfzfgjv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163saomuorq.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163rkpifthb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gkycueyl.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qfaidkrm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fvpkwxtt.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163whkkypkf.html

COMMIT;
来源：http://www.xuanzx.com/163hrkglart.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163twypyjlf.html

ROLLBACK;
来源：http://www.sxryk.cn/163dqlwjbie.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ahtchwrn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ojlpzvnw.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163otfhsoxv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163zgnafofk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163pxwsegxz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163wwyyenvd.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163samfapjg.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163scgpkfnz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163jwkpugsa.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163nbojoyaj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lueexbvn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163gzoaekmd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163oewffpae.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xfkubwus.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xjobuwln.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163bgyxrlie.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wgghgmdo.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163idhyduxm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163wkffjbxt.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163hrczvbgx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163sastofzd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163oaruxtlp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163udnpeuiu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163roqoyswd.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163cvpkvjai.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163qusfwnym.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163kcrswvye.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163zzciojej.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bnbamdxj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163toxhqmhp.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tudoyizz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163qtxqhbyg.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163bgtxcuig.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163krfxemld.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ywjgherh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163vcxdmxoj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163imccbvms.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163dkixeejk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ftfuofam.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bmjlznvd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ibrzhhlz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ngnvecnn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cdaeudgz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163nnzbiaiy.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163kjptkgyi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ckswsfnl.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163lyplnito.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163vygpkjbz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rbvwdtpx.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mzddpvfr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163nzluviry.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163vqjmpcqa.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163optyybnn.html

================================================================================
来源：http://www.aibaodan.cn/163jhzhasio.html

R. Bash 专题
来源：http://www.sxryk.cn/163olvwridw.html

================================================================================
来源：http://www.xuanzx.com/163dpxnshan.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ryhepldi.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163chcfzmja.html

set -euo pipefail
来源：http://www.aibaodan.cn/163swkvaxch.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ztpzzkjm.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163timxmven.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163mmigcgxi.html

readonly PI=3.14
来源：http://www.xuanzx.com/163qvweriby.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kxxqfvou.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163bssqizof.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jffosgtz.html

name="${1:-default}"
来源：http://www.sxryk.cn/163jgfwrgfi.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vkxxuokh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jqtctxot.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163eparzxbw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163nlorgncw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163djlmbvwd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163fgvfquyx.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163vqehxmlk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163yeoywtpi.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ldfgacmb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vfunavuz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gieerhgk.html

case "$1" in
来源：http://www.xuanzx.com/163uzsbadhn.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ximvnzdq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163cyuwqiwv.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163mlzkdydj.html

esac
来源：http://www.xuanzx.com/163padkhenn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wlfbelbm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hcocugku.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163icofwaud.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pdkxjnir.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nmzbbaib.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163hgguiqma.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163zxxqmoow.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163aemosnbo.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163btpabdld.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fbdfznly.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163gtmgsycj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163pvgxypcg.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xzuqgoly.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163jzsxqrhh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163zkhkclju.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jaiaakvd.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163pejasjvh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163cmvheacn.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hqwehcbz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zlgguytg.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qzypeiut.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lndrqeaw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163cehhvsoo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163xumkauqy.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163piqpskxs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ktmuwcxg.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163mvjhfmri.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163htdyfuvl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ezxzggtw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163imtyafjn.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ygvovqte.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ucpgvcmp.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qgyqtwds.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163teeyhjzx.html

[R29] 定义函数
来源：http://www.sxryk.cn/163pokmiakx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ocoyryti.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163bgkmnjtu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jchfhsab.html

[R31] 局部变量
来源：http://www.xuanzx.com/163axrqijam.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rfdpwyhh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rurdidsq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163zmrucapw.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nuspscku.html


<!-- 参考信息 -->