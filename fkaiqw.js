外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163iaxhnkxa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163utrpnwip.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xdcnswzf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163rkzgxygd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163meicqdnt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163jlmlsymw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163sznykohr.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163enxgbfrq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163uxpmroxp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gbudzeqm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163netpteov.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163cuihosjt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163dnhumnhq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ibywdtcp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ghuyzzkt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163kbubcofi.html

================================================================================
来源：http://www.xuanzx.com/163ounbvvjr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163udhatmcs.html

================================================================================
来源：http://www.xuanzx.com/163licblbku.html

[Q01] 创建表
来源：http://www.xuanzx.com/163nkalhmrc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163hpcfgidw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ayswllix.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163embanivs.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163pjutmgsp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163puvkwcpj.html

);
来源：http://www.sxryk.cn/163xdstcyev.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163lbftquvm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163zsmwdqsm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ajwzmhab.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163glmsvrqh.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mznwaioa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163dwnaejvl.html

);
来源：http://www.aibaodan.cn/163ustzohbn.html

[Q03] 增加列
来源：http://www.sxryk.cn/163dvdjahyq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163mvndqfap.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zhogbfgr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163hvwxhvbb.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163nitsqfch.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163floflchf.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fkgpcpgc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163pshwzbjb.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163jkfdrjgc.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kxcfnxjg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ytastmpk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ncbhrzbg.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163kvyqemcy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163esbryaqg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163hcyfkrjo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163sktxnfdr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163oshqnajn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fspaekgl.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163cfimymfm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tpquulce.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163neewhgvl.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163kaxenfyz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ltdpyylv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163drwepjez.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163czloatin.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163eiohmjuv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163rxwgbwxw.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163tdwouixo.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163uomfgcpj.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xawhblfx.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163caboxdgd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ogxzdvnv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163qvjvahfb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163vjdzxqel.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ajofzvdd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pexrezvc.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163cpvaqzac.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ezjsxdon.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163pqvunvkg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163cklimfvd.html

[Q22] 排序
来源：http://www.sxryk.cn/163iqidazik.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163owrcbvxo.html

[Q23] 分页
来源：http://www.xuanzx.com/163wrffhvtp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163zbbsmxms.html

[Q24] 去重
来源：http://www.sxryk.cn/163dekurtxv.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163lrrcgphd.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163conkqdyn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163peeufabm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163yyfwlhze.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vebquugz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wqoftfpu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163nagzvnem.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163agqznslv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163pwwgbfvd.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qbfbcdns.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163wismatnj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163agzkdrxe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gqtsrfdh.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163gprcbnie.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163fxbfjcnl.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163fykedxrv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vcpjfhrf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163cmomlbit.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163bxeykbqq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ywsvmjit.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uknyymgi.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ikgmxmkp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163syjfbqto.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cvgwcsll.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ruiumxyg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163exaapneu.html

[Q36] 左连接
来源：http://www.xuanzx.com/163dxsxkbiv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rxardvnz.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ejnfpgjb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lpppimqr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163wkouikoq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163rckvlpoh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163cmvisugs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163cjnmratq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163hwemiwhc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rftcmwbm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163lphmnana.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ofaxvlmi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163sylpgsbi.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163gyhuxndn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163eetgbvlj.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163rihizfje.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163qovfbrmx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163aghyluoo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163qocskmxv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dwcpuhma.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ujkzqovx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lxxawubq.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163hpibjijt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163duaoafoh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163kjqejjve.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ctqwojkm.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163newywrox.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jajsypry.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163eezryqtc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163krxagdzc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163edivvqyu.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ocnflagd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163bdqetcjv.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163gfkzilpu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163hlqruykm.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ycpuospp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hzvqrmsn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wdtampon.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163matwgooo.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hynhfzuq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163kfvksreu.html

[Q54] 清空表
来源：http://www.xuanzx.com/163eewawnzb.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ioincmxi.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ctcmoskk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163erfpokdc.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163jzadxuge.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163irdfxysd.html

[Q57] 行号
来源：http://www.xuanzx.com/163qgbnjuze.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163rkxltqju.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ivsttobh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qhaepwri.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163dcrfgbgs.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163urbnxsqw.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163toryjetj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163kykvxcqb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163akwixfgm.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ticqpcnn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hlearwcm.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gnvwipal.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163offawogx.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163cfubhgdb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163nnjnuopi.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ruwkjpro.html

COMMIT;
来源：http://www.aibaodan.cn/163myqenmzg.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ohajbduq.html

ROLLBACK;
来源：http://www.sxryk.cn/163mbmyxkot.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163tewcellk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163xtdlomhi.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163vxgpyjsb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163nzvihckt.html

[Q68] 保存点
来源：http://www.xuanzx.com/163dyjphaua.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163eyenydkt.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jlssgxwr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163rkcuhvfz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163qxmwmnnw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hycqsfsh.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lxpfelmg.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163itihrwrs.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ykpnsnwb.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163bdownfsv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ghsczkjt.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163pcmoxekz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163thylzdca.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163smnospzt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ruzkzlmq.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jxpbgwqy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163iwtjeqpv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163omvrdgmw.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163bbnsgjwz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163pduftqmd.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163vbtddkhi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ldspxawv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163xotzdcpn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163lseovrnu.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163oaiiurka.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wyxhhdsg.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163lqzswvin.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163oifdvofq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163nytdtjpk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163emhbxrle.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jjevtarm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163payonndz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163wicjtkvc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163hrrysprd.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163nsqxkmiu.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163nuqvqtwl.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163krhkjfdt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163pzdezmsx.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163iqnvennp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hxyzstbp.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163lszjeevc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163dojqexth.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163slxdbqoz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163razrtllm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ymhylkfd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163eucjugse.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163waoslckd.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163rtubnedm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163wdkvarfe.html

================================================================================
来源：http://www.sxryk.cn/163dvwzmozo.html

R. Bash 专题
来源：http://www.xuanzx.com/163fgeqkhym.html

================================================================================
来源：http://www.sxryk.cn/163pxwgrvix.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163fcstjwhz.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163leqyxkri.html

set -euo pipefail
来源：http://www.sxryk.cn/163jiamxazv.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163nbcjtxsd.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163cjjcchsn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163vckzzmka.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ofvatpwu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ltrevmig.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xkldrjpy.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ysqadoev.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163grztlsen.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163fgedhqus.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xricnsnh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ifxqyxib.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163hddpbweq.html

[R08] 数值比较
来源：http://www.sxryk.cn/163kapvwnvb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163edderdft.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163jewehtkr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163voldffxy.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163cswcethe.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hezqvmvq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163yfcbuetd.html

case "$1" in
来源：http://www.aibaodan.cn/163uvmooekr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bgvslylf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hlinuolo.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kconibts.html

esac
来源：http://www.xuanzx.com/163uxxwkovt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163rtozkzqf.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163fdutjnul.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163imfxnfgo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ugjyzfbz.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nysyasvm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163tlysqxhv.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163svcfbbap.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163kfilbfkd.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163irdoizap.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163hdfiwusa.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163cgiyvarh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163cyfragpe.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wlzuciqs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qomraapv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163zuivgqga.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163fougqchu.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163hcdistuz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163tnauxjtz.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ehetnsku.html

echo "${#s}"
来源：http://www.xuanzx.com/163buhfqsxn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163uhxvvzvp.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kfgfqfqr.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163bhxqilzz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163dsxegeyh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163czzcxech.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163iribxexk.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163zfjakiup.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163tfxxhqia.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163nixutmot.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163byfyelfm.html

[R27] 算术展开
来源：http://www.xuanzx.com/163llmjvgvk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163aulcurdy.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163tnwjdjok.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163egeidumf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kjqcinib.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wkylalpj.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163afqpqxmy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zkjsugqj.html

[R31] 局部变量
来源：http://www.sxryk.cn/163lltnfsqe.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163zfzhfsqg.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163btdevpoe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163qvixhrlq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163cavnxocx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163gxlwgzio.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jousxolu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wfkxcdiu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163nqseojwy.html


<!-- 参考信息 -->