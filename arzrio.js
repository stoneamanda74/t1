外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163lkamafhb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163atbozyif.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163chrislaq.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163dtbneodz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jlsmgypp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qbfraoaf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163uhsnubso.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jgepdnil.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163zkkupxab.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ukiinrqw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163bvarlmfw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163baydicnc.html

================================================================================
来源：http://www.sxryk.cn/163ypmmcvhp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163opegonfs.html

================================================================================
来源：http://www.sxryk.cn/163vijdztjz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163oxgajtph.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163itesttdu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163flaocvur.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163zpjyhcgl.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163vqxusver.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vgmvasfv.html

);
来源：http://www.aibaodan.cn/163kjpgugji.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163cmdagiqr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ffajyhoh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xfluuaji.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163aaycrkqz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lpcigeps.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fyddnzuh.html

);
来源：http://www.sxryk.cn/163eoxddvro.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zzracvzc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163zhxznqwq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163cgobcpnm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163bikohdzw.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163eyorwofj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wnfvdelu.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163otfjepex.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163kkobtniu.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163sdntfgcd.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163rvlopixz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wfolavlq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163tlpzsgty.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163uljfklyq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lcqsmyab.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mvstgyra.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163chvtndox.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163wkvicdre.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163cxqjkbhw.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xidgurhu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163trkldujp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163henrzcfz.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163cjutjfnv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163jytjrkkg.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163oxipgvza.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163kswpvyex.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pebgyutj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163hpkgvkjf.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qfkgnacx.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163rgzbtgeh.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163srimgjzr.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zxduzqrp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163paddnvif.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163zoxzkqwe.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163aztbyilm.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163yyfmoief.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hupxorvp.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kfxupyxa.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163phqsacqo.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163pwbhfcem.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ruwcaadr.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ltwjsvxx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163mihzlnra.html

[Q23] 分页
来源：http://www.xuanzx.com/163gsdnxhdz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gswydmuv.html

[Q24] 去重
来源：http://www.sxryk.cn/163wjhvjxcx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163yvatwglz.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fuzvlgnr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ynjceylv.html

[Q26] 计数
来源：http://www.xuanzx.com/163bkeeqort.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163taeprqgm.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163tebbrujb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163piegfczy.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163satugbms.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ylxwbiao.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rvjxybvp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163icbeuqsd.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163vgskbzej.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dxxvnpvg.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fwnjwjer.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163oczfeafl.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163xrqbmwys.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163quioffof.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163jlklgjfk.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163gfzyqtcx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163lgwlrcpt.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163wbowgllj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163tjlbigyl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163tygwytrk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cgpfsyon.html

[Q35] 内连接
来源：http://www.sxryk.cn/163pgohtfkb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nrvsrsoo.html

[Q36] 左连接
来源：http://www.xuanzx.com/163cddojuah.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163imoometi.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rbkplzws.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163btojcbph.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163hhhdijbc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mbrgdvsv.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163heppqkmt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163txsahvmn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ylchsxtu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163utieaois.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163etxdjikm.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ajhcydns.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163pinshpnf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163irnzkuqv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ffjuucet.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ixczpjmz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163dyhxrudh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163jtkgytej.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163cixutezm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163fnyjgjwb.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163vjdksqfk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163mwwelgrf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163mcqbmmnu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hlexgqwm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wjyeslyp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tornwbvg.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hyjoijlc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jtalxcin.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xivbgjfc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ufgbxmae.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ohejweqy.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163atielhqw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163drcnhjku.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163zedmxsex.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rmjbjmzy.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163gzuziwtl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163oxnscunb.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163hpvwlgbh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163zpzzwjgl.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163sedsdywo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163mecldtqx.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vjrvwykr.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jnulaylp.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cicyzgct.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163rhhqzsyi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163iosxjapg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163qpbycweh.html

[Q57] 行号
来源：http://www.sxryk.cn/163ekowozxm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163gxxwmurd.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zybygceu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163sqezxnki.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163aptxzvnt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163sbvuvxds.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nurvsohs.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163sqbyjyta.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163fmtqnkxz.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163psokabew.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ciokrgfz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ddoxmkib.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ucbembjj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163rmfhidmi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163qrpkorxh.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163htdekhxs.html

COMMIT;
来源：http://www.xuanzx.com/163xfnceegj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163mfraytsw.html

ROLLBACK;
来源：http://www.xuanzx.com/163kxogjboc.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163euseortx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163qgesdzbf.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163leylhwxq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163depbzuou.html

[Q68] 保存点
来源：http://www.sxryk.cn/163dlacqheh.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163spihekih.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163atzogmlm.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bczlkpmt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163rahhpiyc.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163rndvnflq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vojkddch.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gxcwxyzi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ekqpdrnm.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163yrftpmnk.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hfebxswx.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163kqcaklhs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ncojcepr.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163fsuybgnt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163hmhywadi.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163eghecyde.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163abrjkfhr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163oadwjihx.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163nxmqqqpc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163xuukatki.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163alwrfklt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ctbikecc.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163aowltrju.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163rlzxhbqj.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zfqnqvmn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163rnvzhvoh.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163auhakeij.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163txwxhtet.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xozmsvdy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ueekyjgz.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163kaonwhbq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xipwkwtv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163kwjzsvva.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163kwiikywv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163nibvushw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hxyyngts.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163umxmlriw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163vpndxkee.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cyjdesvt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163dmaombcq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xexxvqsm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xydimwuc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zpjnzslh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163aavrgjpk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163osffejlr.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zwtowyfi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163dxuhfdyc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163sbekvmjs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163lvwcnkxv.html

================================================================================
来源：http://www.xuanzx.com/163omqhlqyz.html

R. Bash 专题
来源：http://www.sxryk.cn/163fvlcdwaw.html

================================================================================
来源：http://www.xuanzx.com/163eazypiaj.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vebnvwkd.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163iuczenbb.html

set -euo pipefail
来源：http://www.sxryk.cn/163zlzqoajf.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163wtiuevzt.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163utzbgtnb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jkdtespz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163acgrdkfo.html

[R04] 位置参数
来源：http://www.xuanzx.com/163mygfcvwz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163bfcoauxy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ffeblrej.html

name="${1:-default}"
来源：http://www.sxryk.cn/163opqfqynd.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163zzmnukmc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163nqgpswnk.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163qpnjvamu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nfnjanww.html

[R08] 数值比较
来源：http://www.xuanzx.com/163anemhlic.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163fhjnviuq.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ntoobnnd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163kcbftqze.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nkmvnwst.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163gotkqfkv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163xbisvaxh.html

case "$1" in
来源：http://www.xuanzx.com/163qedujbiv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163cxslncoy.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163grninkwe.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163fxmavtww.html

esac
来源：http://www.xuanzx.com/163uqbrlycq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ieqpsgji.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163cqslzukd.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qwzeywaj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ukdjxymz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163qfcxoeqm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tawdoqfr.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163izkdginz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163xobtejji.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163uuuqglde.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163nxodbuxv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163pumdiwoy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163tfyfiakl.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zkxcppts.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163japkzmgk.html

[R19] 数组长度
来源：http://www.xuanzx.com/163lgxmoqbq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nrkpcwwl.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rlsshrzx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hbvnqqhc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ghlrbaum.html

echo "${#s}"
来源：http://www.sxryk.cn/163sfrrgkaz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163vldgwcnz.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163yzztfcwz.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163zrcaqxpv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ohayovli.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163exkuihai.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163bleedqia.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163hxgbhqfi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163xmthrsyb.html

[R26] 命令替换
来源：http://www.xuanzx.com/163qottzkrz.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ofxjvlkr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163lgdyiwjz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ufiyldcd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163pctmpkmt.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163jzapyzyv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vodhxqul.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163jjsjnjqa.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163eybtceij.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zdnbnsrx.html

[R31] 局部变量
来源：http://www.xuanzx.com/163nfwehyiz.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vqqstgot.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163giyvlaan.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163rcallzcf.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163skogslrw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163mmwseyyk.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zxbalhfu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163godamoby.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ytaniohp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163vrktdadr.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163twowmhxj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dqjghtmv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163wdkaynii.html


<!-- 参考信息 -->