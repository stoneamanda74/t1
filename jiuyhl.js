外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163umgieurz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jnswoeim.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163pptudhmy.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163tlydadkz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163rwyabxrk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qbetfuwj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163lrezesdj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163jvgvdxta.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163svbppzxd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163mztwuzih.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nhdarwmy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163bfmphodg.html

================================================================================
来源：http://www.xuanzx.com/163cwbntyee.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163nqglqtvg.html

================================================================================
来源：http://www.xuanzx.com/163aybqdbat.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ieyeshxb.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163igiprbfi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tpwojvww.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163desvnfks.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163unzlualn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163jfttsdru.html

);
来源：http://www.sxryk.cn/163jxgpbrnu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bydghmzr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163nwlxcnse.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163naifaggb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163fsrapubk.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rfpatbmw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163yruxfijs.html

);
来源：http://www.sxryk.cn/163eczaqmtl.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163njutsono.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163txnsxsow.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163bjvqfdkw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163fxwgwxlg.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ladgqylb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163pusubnkf.html

[Q06] 删除列
来源：http://www.xuanzx.com/163faumahfo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ivspwapk.html

[Q07] 删除表
来源：http://www.sxryk.cn/163wcibtrfn.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bnyzgxzr.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163fcgkqlkx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ybmdupss.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163pyaqvlcw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163loqckhjq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163lmvgvowp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163njyyguta.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163mktlbgtf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jqroymvc.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fzwdvpbi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163xojrlesy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zmzcgdgz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ufymemui.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ewxnnjkl.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163fjdsahdx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163uczhvhbm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163rgwggvkz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163pfqnmygs.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163twdhytjv.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163fjqduofw.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163gsyhxphh.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163wdwqhqvq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163wgytvrfn.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jhqutyyo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xqzagkdv.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163achxwuvo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wkayhgvu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163fqblnqjs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163bodutvzg.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163dwqcofmp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163fopiavun.html

[Q22] 排序
来源：http://www.xuanzx.com/163bjqzuytx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163outsycvz.html

[Q23] 分页
来源：http://www.sxryk.cn/163svwnrocu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163vwoeubqb.html

[Q24] 去重
来源：http://www.sxryk.cn/163vomgouqb.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163yrwuyuiq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163sknrbdyt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mvoikqnw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163plxsqtzp.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163uqqfcxba.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wvrlwqgd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163laawbeis.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163hbjztepf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163tpmmfhse.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163iokpboup.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163whcgldqo.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wjkpwueq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vsyqnwiy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163sitpxepn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163bjnavluo.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163pozwmeot.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ebyfkxhg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163pzowdffm.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ulpvounl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ajoezlsh.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163cwwohgbs.html

SELECT * FROM (
来源：http://www.xuanzx.com/163tztsthvy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ytoelvcz.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163zfdkhyaz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163waevwtyf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zqngljcc.html

[Q36] 左连接
来源：http://www.xuanzx.com/163mjyyfihc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mdiymdwg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163qbnuipjm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163rkdahrrf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163kcejmpwv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163sppgppnd.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hiycmbrx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163kmyahltc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xjbxtkzb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163sjwtnoht.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163gtajajfn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hkdtjmhf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hczspolm.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163hbdbitlc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163rjczaflj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ioolupzi.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163rebacihh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163bwvvbcwp.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163flljziuq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163cxdrxigv.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zzwlqxjz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163xonqxuzo.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163eoaxmqpl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zlmwveqt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zjjagsxn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163woafgbxu.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163txumrluj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163iicphaqq.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ebxkowpb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ihyreenn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163cbzbncam.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163yeowtsfk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163iemapiik.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ocghzqyy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lmydzzbb.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163qbpfqybu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zlicloho.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163oiurvxim.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hiztmsos.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ivucjwvj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163xbtyssem.html

[Q54] 清空表
来源：http://www.xuanzx.com/163fpoyiywj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kuvkesiw.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vzdwvcjg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163rbcyzvux.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163cbixttqe.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ybtngwae.html

[Q57] 行号
来源：http://www.sxryk.cn/163kjsurqjw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163naxvvzrl.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163exizqymg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163eppywjys.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163kezlipzi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ptvrjykp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163toztrsej.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163udczqgnu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163dveqpsaj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nbihwtpl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163avqkpwof.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163qgghmubv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qlfvovsq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163nbjvewmv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mgxeuzqn.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163cvbpclhb.html

COMMIT;
来源：http://www.sxryk.cn/163swefkqjw.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163osimaaox.html

ROLLBACK;
来源：http://www.xuanzx.com/163nhtnlkol.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163cqmsguoi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163jgrvbyhp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cicsgdgk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rsodydzf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163sixusjom.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163hwwahkib.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tkashvmn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163gitzafzm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163mnsyillp.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ffclkgkl.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163iklgkvyt.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163brahkcku.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163qpatlock.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163okjsunuy.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163cocbfzyt.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163epjoqyyw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163djzmgsvw.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163aijlfsgp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163qqnqsucg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163suzwytxs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163uxvpjcqm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163meypvivx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163oedxxbrd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163vttfjikz.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163vleloult.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163vecspmwt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163xwtlzbit.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163czkzrftd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163mgjittkq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163haebjevc.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rhhbsfqz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ioolxubp.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163pecuvwdf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163waalutxb.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ujscfgja.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hslzjxnv.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163dacdimnh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163onkxvvlt.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163curoyuly.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163lqpubnip.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163wggqyyky.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vnaztjpj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163edrkvzuf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bxhgafyx.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mceuhium.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163yadfbpha.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jbkmggnn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163fguiawev.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163mkibsgsg.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zsoyftib.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163asmlrtrb.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163jxbxsjgy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xnlmbjsc.html

================================================================================
来源：http://www.xuanzx.com/163tvijmdhk.html

R. Bash 专题
来源：http://www.xuanzx.com/163yccqntbc.html

================================================================================
来源：http://www.sxryk.cn/163pfwzedtj.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163igviyxyk.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163yfuwazan.html

set -euo pipefail
来源：http://www.aibaodan.cn/163qerpliqx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163rlhdebjn.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163oyvrnpaw.html

[R03] 只读变量
来源：http://www.sxryk.cn/163szkjhplr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ctjuiqih.html

[R04] 位置参数
来源：http://www.xuanzx.com/163htjqhlwp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163nsdpligw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163nvebjovg.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rztaosod.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163kyscpgic.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hakkovxa.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163lpeffrth.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163oahdnhfh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ljpgxboa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163uqhsmbsv.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163naooaldb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163iokvvdos.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163trhdwuqy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ccsrxdpt.html

[R11] case 多分支
来源：http://www.xuanzx.com/163otfqoria.html

case "$1" in
来源：http://www.sxryk.cn/163gzkaocgd.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zmekpwgf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lvktlbau.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163uzxbpxly.html

esac
来源：http://www.aibaodan.cn/163rcqyhioh.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163hgokgovl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tpszosmb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qohxenyp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ubhctcij.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cruagfum.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163vrpzpffv.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mymzeovr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163phcmjwtl.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pzdqmauf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163aipditei.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163vbiqwrgo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163aokbxtyo.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163uerlvucd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163cskklycv.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vfdsayni.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163uqokcdsw.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163taefhjrp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rqtwktqt.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163drsgcchz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163elkkeslj.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ptvlhjmv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163gclkudto.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163zyenhhgw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163vuovjwaa.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163jarmbkka.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163drguldxj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zwvqwsoz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163rirhypzl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163jqkllgqy.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163eagknsgx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163jioeuxkl.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lclzkupb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mryreyps.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163kdwlggop.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163qaabhdqk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163qupkwxgw.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163kxacsoxt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fwortyly.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gerurgqk.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163umgmzgfi.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ewhzslgu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163lmmvxbwc.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163gzinmkjj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163torluvbm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ybidxrsr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pzechmnh.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163npznqjgm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163apuwsgka.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163vmpdzcqi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ccbuptnc.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163tqmkazyt.html


<!-- 参考信息 -->