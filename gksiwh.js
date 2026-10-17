外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163iyxenbip.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zscpuzqh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ducensey.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163gzhwteik.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163fjltdjcj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163pnarqkex.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bloiwjwo.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qnmswksi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163sbwesqla.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163mqbnekkc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ttzlmdys.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dqprtaly.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ntznwuyv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163rtclryus.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163twnjrxqc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rpirgfxc.html

================================================================================
来源：http://www.aibaodan.cn/163ldgryxjl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163hczpeyqx.html

================================================================================
来源：http://www.sxryk.cn/163ffrhbumk.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hgwbzyun.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ecctqvky.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rgdjzqcg.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163jarnvvyd.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mkrtmffs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163bspyolmx.html

);
来源：http://www.aibaodan.cn/163uoplwsyq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ugwlttjc.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163buwmdfpd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nedsltjk.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hnhglyzq.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163giqivcsc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163gcbaoemb.html

);
来源：http://www.sxryk.cn/163jgdskzba.html

[Q03] 增加列
来源：http://www.xuanzx.com/163dtcdmara.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163rsbbpiam.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163vlkzeeaw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vocskvyo.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163sjerrjwq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ktiqnuxm.html

[Q06] 删除列
来源：http://www.xuanzx.com/163clhlgyed.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163buuiwdew.html

[Q07] 删除表
来源：http://www.sxryk.cn/163kbyafmgu.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ylbxlsml.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163afdehlos.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ikatfkhs.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vlftohrz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163qsaifdxz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163rolzskzt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163exoowlxg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163pufgjrhi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163tcmwarjc.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163dsoelzee.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hsaldwvs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163gnmshjlp.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ogxxonnu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163gxndhebs.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163eppfwxbw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163irrejyfk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163bolozgrn.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163imvjmxkz.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163lmzmmlqg.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163fvjpbrcx.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163annxsmys.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163gansqyhj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163igosxuiv.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163oqnzyvrb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rtccaopz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kjbclwml.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qgkersrj.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163hxqsjglv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dmmktunm.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163agjqbshk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jgeilova.html

[Q22] 排序
来源：http://www.aibaodan.cn/163wiflcirk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163epwptfog.html

[Q23] 分页
来源：http://www.xuanzx.com/163kfvmxukr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163lfvyupyv.html

[Q24] 去重
来源：http://www.aibaodan.cn/163gdacfxdk.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163iexcfzpj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163bexnbgtt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163xzozwqfz.html

[Q26] 计数
来源：http://www.sxryk.cn/163auyrxzdu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ohvdqdvs.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163eskinrab.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163tkhlzmvh.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163wehiwmag.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163oztsvqxq.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163fqzeuefp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163eyhrahzj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163llztmmci.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qzmavymt.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163fczwarma.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163yksobjcm.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163fvktgjgr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tsenmfkm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163hkslhdod.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zwtmrpit.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163rrblzndk.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ogallmeh.html

SELECT * FROM (
来源：http://www.xuanzx.com/163bmldwxfa.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ezpdpuex.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163dhemvhwx.html

[Q35] 内连接
来源：http://www.xuanzx.com/163hmhitqzv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jggsiltq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ghaqfhoj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bsnipmkg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163blubqbeg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163dlcifrfy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ypsbjgvx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163evasvgei.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163usfwgxfh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163jbjvygzv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163iaauuwbn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163crexwucm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163eeviqfds.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163egmpsauy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163zzpfenii.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wxiddixi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bbpsekdu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zvsgzqrp.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163odcbhejv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163yxrtglez.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dqmtfjwt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163nbphzxhg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163lgqlajlj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ehhntnlj.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163zizqpcuw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163orpvfkbe.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163xkbivlyt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ddhdqvyp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qtrgllvg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vauokict.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163vlehdieq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163dsicyfax.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163kwturuxj.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163cwqrupex.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163swuwubib.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163vcnrmcfg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dkfosnsq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163htitdxqh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163rkfvuibt.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163uoadacov.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163aeilgbej.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kbvglazm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163dxmxzycm.html

[Q54] 清空表
来源：http://www.xuanzx.com/163xhrsuixx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ibrmzlon.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tthjwwec.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163vjfrvbpx.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163chtlsifu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163xkahzibj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163cyuwovsx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163hbryxtqa.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163moseljqo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163lgdldouf.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qsnthcrb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jpnkjqgb.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163umtkgpwa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163sfsvxvuo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163lwbjefga.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jnsumlir.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163irwdqany.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fteofhai.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dtiupuhg.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163vgytpwpg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zadzygho.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163tyyawtdh.html

COMMIT;
来源：http://www.xuanzx.com/163ehbgpthv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163uxzhaudd.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kbghbhnw.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163jbotdypc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163jnzmrkps.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163xgfewryf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163utoevcch.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kqnszscs.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vjuvhrpc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rhgmoulh.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qxkkhohv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tqhzjfie.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163lrkritbz.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163kakrjbhk.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163rvlcfbuk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163hadbmnfe.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163grxjpxpx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163jllpfjsj.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163dsyudxfn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163bpgevkjo.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ikudqccf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163shylbjic.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163elkeafip.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163pyivzojw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163wmuqeaen.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163tdzwlxrr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qtrfgxeo.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ddxxegoz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zuifdnrk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163eshmexje.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163xivgpncw.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ekjsirfk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163hwcodtca.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163yfllyczo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163jucmpjxg.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hksxqrmm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163dbawqxcu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163dtuciisj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lgyrmfbz.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ytxmezqj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163mzgtsoki.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xicsqzpz.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ubeqfemr.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ksrtpljn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163piaetziv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163lojajsrj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163baafefyz.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ofdyrqfo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163pzqsgptd.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163pnhrfwhn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163btksvtdo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163sevsnvup.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163lgbevnds.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163nrtbvhag.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163nhyhzdlm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163gojhhcib.html

================================================================================
来源：http://www.aibaodan.cn/163cedwtruc.html

R. Bash 专题
来源：http://www.sxryk.cn/163tvfbqbun.html

================================================================================
来源：http://www.sxryk.cn/163tngzdxas.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163nzwsnlon.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163agauctyu.html

set -euo pipefail
来源：http://www.xuanzx.com/163vakkhjvj.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sculozzw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163dzmajjno.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qgkkfqlq.html

readonly PI=3.14
来源：http://www.sxryk.cn/163eyiiinvk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163wwipamzb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xtqcvula.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163bqofpeku.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ovqaiywm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163hpljxslu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163wdjbbcxr.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163udpqspbr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163artkxfjt.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163kkoovvec.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163embvabio.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163gqilamhf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163vtbvfxbd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163hxipmcqk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hpjamonu.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zptqzvnq.html

case "$1" in
来源：http://www.aibaodan.cn/163egulrpfw.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163celpvvak.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163paxfhplh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163slttwclh.html

esac
来源：http://www.xuanzx.com/163agiwaovk.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vubzlaiw.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163amkxmbwu.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ahgkbonm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ymbygyoc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163wjsjpvtk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163xczfoztb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163pjbklyuq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163clixnmri.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163hwknpbnn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163iaifvdsr.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163amwjkcgu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163uduwpsut.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163texayovu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163nzdyocoh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163trszympt.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163bmwzmfem.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lhonqjpu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163pdsnjuki.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163naopesbq.html

echo "${#s}"
来源：http://www.sxryk.cn/163swkewdvm.html

[R22] 截取子串
来源：http://www.sxryk.cn/163brpwacfz.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163rowiwhwj.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163vodgwywr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ucfayvnk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163dpphcavi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163aakxesqu.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163fgcoyycl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163pzfjirvb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163vloxfnca.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ignywxas.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ludxifxl.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163wpcaebjv.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163cgdmoyjt.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163zphbdkth.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163cghgteqj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163cfqdrvnw.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163mdusdoix.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163rskfrbua.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fehbhkem.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ipfmqsye.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163cxwlstxh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163kklldxfv.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163nycxizia.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kdsvrdrd.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jffqmkvr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mqjtvswg.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163inhfexzd.html


<!-- 参考信息 -->