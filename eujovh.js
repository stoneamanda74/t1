外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163fjkvjbaa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zvoikopx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ogtkrpce.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ggmuxspg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163uxqrxddh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163yqqwdwrs.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163qkfqjwfd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163aleefidg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163mhwqlbgj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163kfeggems.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163bwiasvoq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163uawchkni.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163fxtnlrii.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hlrboodz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163owjtzjmj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hqvlloja.html

================================================================================
来源：http://www.aibaodan.cn/163lhfkznqs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163gntitgbf.html

================================================================================
来源：http://www.sxryk.cn/163zrhqhgtk.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hcovxhke.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163hzjzdjzs.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jkhdxtsc.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jplonacg.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gyrsgrrw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163tnlnuoea.html

);
来源：http://www.xuanzx.com/163dzjmgrzh.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163uylcxwkv.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163vriarsza.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ykiysglp.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163emsdknmu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163pkolifrn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163xlsemwjf.html

);
来源：http://www.aibaodan.cn/163ejwepzsy.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163iztnukax.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cnuklimg.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163flhxbxrr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163shixnfiy.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ttbawuos.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163rpzfwgma.html

[Q06] 删除列
来源：http://www.sxryk.cn/163msqwaxwu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xasnnftr.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163irnuylib.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163szfsklhd.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ushwbhkc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ffcmoswz.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163fmffceoi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wldeaewt.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ryzqrrxg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dfylxqdc.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163spdryxcn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163cbxqpzgx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zmikqdqm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163fwpxfobm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163uvkwosci.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163pbwusmex.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163yqvxwjwp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163mndadimq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163pyltdytg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163pznltxiu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163zxpteply.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ufizqyle.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vjxwgmcy.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nngulajb.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ttpjrufj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163wurbyqoq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163fimcexru.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163tvsbkxob.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163psmvuvyj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ccqxtjkr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ikqpqhut.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163xnyjjksd.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163zszowlcw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163skyetdxz.html

[Q22] 排序
来源：http://www.xuanzx.com/163imcdfmpf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163cznjdbkl.html

[Q23] 分页
来源：http://www.xuanzx.com/163wfrjwuvh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163tiqvjwho.html

[Q24] 去重
来源：http://www.sxryk.cn/163fqhpplsj.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qsmblbox.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163cqljooxv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qcgvrkxz.html

[Q26] 计数
来源：http://www.xuanzx.com/163rrrglrrf.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163cyicbrnv.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163lzdxqriw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163nahefnpf.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wtohfrlh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163witnhifi.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qormoifv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dglynpbl.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163zueuekjc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qefthpqp.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jashaneb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163tpisziek.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vdgxrrkf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nxjyzrvb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163oazzoowz.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163mkbberxa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163rmdbgbce.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163rdodjjdv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vytqghgg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163rfrwbxxx.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163umahfinp.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163lbgkpuvr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qkibhnum.html

[Q36] 左连接
来源：http://www.xuanzx.com/163horshwmg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rtjqwjed.html

[Q37] 右连接
来源：http://www.xuanzx.com/163fddtaocp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163opxxnxll.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163oxvyrcgp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163tjdzzgig.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163vdsqkopn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tsfciydk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tiajhndo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163opnivaca.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163plhqhmur.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163dmztbyur.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163pwldhwmg.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163iyhpnnjm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163vanjdbfx.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hedeokwc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163zbcccpqy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163phrcymks.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163rhcrtahl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163mpshjovs.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163fbgokvjh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163oggomndd.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163teslqmgg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163mxoohidr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163boelfuqi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jhxvnhuh.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xmvxcvzt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163dxylespn.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163majpycdg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163kvlcrqim.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ajcmxjrz.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163luphdxnx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163tttkivft.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nmnaqvgz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ukcyflng.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163sejskcfq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ajlcdxue.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163vkiwhdho.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163unfkiltf.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163gjmimoor.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dghcrljk.html

[Q54] 清空表
来源：http://www.xuanzx.com/163kznpfceg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fyvyavcx.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ewdatcpn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163twiwwelb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163fqzpfoew.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163glhehdaa.html

[Q57] 行号
来源：http://www.xuanzx.com/163qpegrcts.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163yqzowhdf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163dgcsoncj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163uxhhmyww.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163gvvjlecz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kwnkjxly.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163zyetitls.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163mixymqma.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163izhkksij.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jsdpfkwo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ifblmxbg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fmtrgohk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qfjleoxc.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163iczmqeah.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163alfotyzd.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163yczmifnh.html

COMMIT;
来源：http://www.aibaodan.cn/163brtoayvb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163htcwnbld.html

ROLLBACK;
来源：http://www.xuanzx.com/163iqcmenli.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163hzewcmkg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163fynqxqjp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163arrmuahi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163fyrrevet.html

[Q68] 保存点
来源：http://www.xuanzx.com/163sfqrcpkn.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pzkftfwo.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163huzfrool.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dxczyzax.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163nklrceja.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hzakuhek.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163vajyrhts.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ygdhrnqk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163trnlwjnb.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163krontchg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fewhxjlj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163goycordm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163uxpsknub.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cfzjibcf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163stxznaxx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163xqykmdwc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rsreqpdx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163yhkgncsc.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163dddiqzdw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163jlhuqlao.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163yrftekpx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ovclofzh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163zcqxnpxe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163biwjgscg.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163cxsslzhu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pshbxagj.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ggozlmus.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jpirvygw.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163elqgapcq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163liqwvdwr.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163dwxgongh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ywcmctmw.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163kvbtpfwl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163caieivoc.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163nrozohlw.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163mahpuuew.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163lsduzjns.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lwggkdsy.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163akatabab.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ajjdrrns.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163csoniher.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ftzbxstk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xelibhwj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jrlzfpiy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wrlkdcpk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ylbxlqkk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163vxpfxxdv.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163pzxjfnma.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163txhavmqf.html

================================================================================
来源：http://www.sxryk.cn/163emmnsupj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163vlzzvzki.html

================================================================================
来源：http://www.aibaodan.cn/163spbfyobq.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xdhpkwsn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163skxmvxjy.html

set -euo pipefail
来源：http://www.aibaodan.cn/163xneclmfn.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163vwsdmhnf.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rwdonbbo.html

[R03] 只读变量
来源：http://www.sxryk.cn/163lrsetdwr.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pfefaqed.html

[R04] 位置参数
来源：http://www.sxryk.cn/163muslnugw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163nzuhghbs.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fpxcskrv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163rszlocct.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163lqvhbfbt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163zdttzenu.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163uahfaacs.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163wgshouwo.html

[R08] 数值比较
来源：http://www.sxryk.cn/163yghyhnnm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163halhuzdu.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163mjedpirs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163utsvphgu.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ambcrnmf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ugifinpm.html

[R11] case 多分支
来源：http://www.xuanzx.com/163hnmdjxvu.html

case "$1" in
来源：http://www.xuanzx.com/163pubsqnwx.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163kizfjexx.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ywlyhvyv.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163yceecepw.html

esac
来源：http://www.aibaodan.cn/163oprrfled.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mvmweyfg.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ujevfgxb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163okntdars.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163qdifrvmo.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ahlrvqox.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163crmpuohr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ilyzdipw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fnvtacgk.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163nfubcgyy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163epygtqjd.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163lkguhaja.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xpysmsum.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163hivrvmmp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ofnutoqg.html

[R19] 数组长度
来源：http://www.xuanzx.com/163qlksmgww.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zqwipmtl.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163nskysinz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163povcyplx.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163uxmtgqsi.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ujctqvww.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163lihjvvuh.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163sugcdizf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163tmbfmsqe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ordblyta.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163fmemxqhc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163gwnitthm.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163lnjeqpai.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163godvgmmg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163eovzhfnq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rukkgacf.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vsnjrzuf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ikwdsvhz.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cwyphged.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mooltlpl.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163nlmndwvv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163pwodfdrm.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hyjkyuja.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163vthtnhhk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dbpcegqu.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163pthnrhfl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163nlpfcqzx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163gqeqcppg.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163buebniwa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mkvwldbn.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fedarvbw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hmuhlvsw.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163mbfpsryy.html


<!-- 参考信息 -->