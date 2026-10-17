外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vqrfpvxd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163mwskmzsm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cmbspwwa.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163lqycnnyp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uebcwqxs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163jxuzdvfm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bvzhtbwk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lebhjbly.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qdztonpc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163nqgueqre.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163yosznobj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163heocevdo.html

================================================================================
来源：http://www.sxryk.cn/163uiaurxlx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163aylsxkcr.html

================================================================================
来源：http://www.sxryk.cn/163zthfmymx.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ymtmkwmt.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dvdvqmdu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163anzukobl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163qculgnuf.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163itnxfqky.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163vvtfbede.html

);
来源：http://www.xuanzx.com/163jbynixpr.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163mofejoxr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163iwmreynw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163retbmpvw.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xshsjxuc.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163nwysrwvq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163nivpjegd.html

);
来源：http://www.aibaodan.cn/163rfmowwkh.html

[Q03] 增加列
来源：http://www.sxryk.cn/163sqfuohlh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vlneiwor.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163wyaqjofi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mlpkalmq.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rbhyopjr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163pnhrdfhr.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163kngdzyux.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163czmvdfdp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rngeerbb.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kkmfkspj.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163rvxklzro.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163bumvjijr.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163lftsyrdu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163gqibdrrc.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ipavdtzx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163nmmsyhiy.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ilukgrtf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163kqxtxkee.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zxlfkdwu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163dumghqmp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163mreqniqy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163xjubskxz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qxoadocq.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ralrpngw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ogynpyty.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163jsbmnzuj.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163cpzkkypk.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163sbqjngoy.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163oqoyvksd.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163kirifgdj.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163kxvpaqzz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163zxnrbzjl.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163owidipdf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163bnxeckcy.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163bnjgidrv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bbqifwjh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ejzpmqsm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163tsqxdtey.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163zvbftsuj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163elfgxwto.html

[Q22] 排序
来源：http://www.xuanzx.com/163xxlktipc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163bmiwstdd.html

[Q23] 分页
来源：http://www.xuanzx.com/163crynhcnj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163kgvuhzlp.html

[Q24] 去重
来源：http://www.xuanzx.com/163pkvxdgxc.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ywkkjoxg.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163swvnqbuz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163bftzrwmm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163sdqhsrbr.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wnraimko.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163afakhoff.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rrmrcanu.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hduqiptr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ejgigxtw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163oegtxhzh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163vjwumfzh.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163tgrropeh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ryjjdiov.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163pcxtdwqn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163fvufhxzi.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163warxxcxz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nuitpkjr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163nqcubfou.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163pxpjaiuw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163gdxehgol.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lsytgxvr.html

SELECT * FROM (
来源：http://www.sxryk.cn/163eknykasy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ebirgrjq.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163dqgxjslb.html

[Q35] 内连接
来源：http://www.sxryk.cn/163xnqpuovp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nencqmld.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dfnnapfi.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xhuovqvp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163dbxcywpq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163wiiuxija.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163qqakeljr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qsotscow.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dihhdszf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163iurfhrle.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xxitvfvc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ltefoufx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rnhpfbmu.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163uswmqlcp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163mfekipif.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ndqwwnsn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163shvwufcf.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163eivryhkz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163niaknlhv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fdqediwl.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jrkortre.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163sirrvavl.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163eoqkftyz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163eleignqk.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163jprfygil.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163sskpvixf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163plunmypq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bywrnfft.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163monjdzxx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163xpfdsunx.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163sdgzjiec.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ddzlxlos.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163mchgiogn.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163osvaebxo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163cldegxfx.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qwxnhkij.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163myrnluuq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163apibbanl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xbclkzzv.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163euyrhmuz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163lohseeat.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163lnzjmhrp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163tigcadnz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163fqggvbfw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163royicyvh.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163bmkfbysx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163lslmyjwm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ajmynbaw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163dspyoder.html

[Q57] 行号
来源：http://www.sxryk.cn/163ifqaxgir.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ykdvjbng.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mmcwnayb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163orchfprx.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163hvljrevf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163cjalterv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xtiipmoo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163bjgwidlh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163puutstjc.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163rmgodptd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163bjzouqrz.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163uiappjas.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xxdhpooq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fvkmpiqj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163sbyemwug.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163tkvndqyi.html

COMMIT;
来源：http://www.aibaodan.cn/163dvnkgbmy.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163qnrblyit.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jxjumixu.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163uctanojq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163sxaftblr.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163opqmedfz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163mnvyogxt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qfjowpzg.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vwmhcwvm.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163drvgrjug.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163wopuophc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163xjqajclq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bjqhhaoi.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163cmjgjqcf.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163whogzqri.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163jylwuypv.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163fqjofeje.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163xrcegqpq.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qlhvlugl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163rrjoubmw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163czvqbpru.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pxvwnhzx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xomaewnl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bveezxqh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163xzapewhr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163opzthjxy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163udtykvzk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pjwavjqt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ljuxukya.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163uppnoisz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163proggbzn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zgizllhw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163smsiknoz.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163nvtafjlz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163gtpgwawz.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qjlajuep.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ryvntnnu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rmnprinq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ybvtwoea.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163vabndiqf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163kdfqjcvb.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163tegpblts.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163avnbploi.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163huyhgupj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163grjmidoo.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ywwvbegx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163yyezkhyo.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163wttggswl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163sduvatnq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ppxpnehb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xdazdluq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cupmrnqo.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wosgrfdi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163srvnrbav.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163kjzuggar.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163uiyethyq.html

================================================================================
来源：http://www.sxryk.cn/163pzejwwou.html

R. Bash 专题
来源：http://www.sxryk.cn/163umanfsih.html

================================================================================
来源：http://www.sxryk.cn/163stpddktg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bykbawxy.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163riqbbxco.html

set -euo pipefail
来源：http://www.sxryk.cn/163yxzjmoct.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rgibhlcm.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163opetstrm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163yhxnvmvh.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pikbizba.html

[R04] 位置参数
来源：http://www.xuanzx.com/163pdlnebsd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ftzzjxzp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ihddiwpc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ghfvogcp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163vmejqbup.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163fbljacpq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163aaryhuah.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163jsrlcsiu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163meifwytt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163dmmwitob.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jgndxvfw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163idpmttqc.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163idxfhftt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dqhfqvxx.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163cvtkavpa.html

case "$1" in
来源：http://www.aibaodan.cn/163lmnwhfus.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bglwdznh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163gwtgzvrr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qecvmpbp.html

esac
来源：http://www.aibaodan.cn/163nxlygwbb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163jmtjceoy.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163lsjerrxo.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163khgnqjpg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163pwsduxuq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163shdvjbdl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wtvgsxvu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hsznijoo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163fymomubp.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163upwquade.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hwlhawxt.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bzxfpgqy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lazjlipw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163dvgbpfls.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163btdgaqwq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163yqfnmnxe.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163peahjfjv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163oowrjfso.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nhhhobcq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163pcaaeszl.html

echo "${#s}"
来源：http://www.sxryk.cn/163xusxysgo.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wfkslvst.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xpkxwqka.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163yilyqypr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163pidshdnm.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rznfmmsk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163amtfqzew.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163mgqglpld.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ljqfcswe.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fhunuyee.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163urgfwbdn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163pftkgncn.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163oxqhaikj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163uzuznvxw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163bmkmkudc.html

[R29] 定义函数
来源：http://www.xuanzx.com/163pleuzjaq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lvenvuer.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163hfdnvrqc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163gnumimwj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163urkgtmhc.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163athjhnen.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163jelvmwbe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163tqspzhma.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lceyrsok.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163shmbhyvv.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fuavlfoc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163lmyrjbdy.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kamunxei.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qrpfgtms.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163shhvvttz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vgyfvmcy.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163sniigqqc.html


<!-- 参考信息 -->