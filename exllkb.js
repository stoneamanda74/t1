外链999!wailian999！

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nmbthutt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ouuhjhrf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163cdatpegy.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163vnecyjgc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cqpcbpus.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163kstxzmxl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ckiwqrtu.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163vvocmfdk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163diyedoxk.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qrdogbuk.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xphchroe.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163hqpjkorl.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163jfhbhmqh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163exmsyynk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pdxyfabm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hklfxyvx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163tccldbwy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163onpmmxtx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163incfezkr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qwpztlsg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163zjubvpyh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dnyhupkt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163jyqsgsfj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163jrjysqzu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zxhgayjp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163skvfyyly.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xmpchkbf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163icjaeebn.html

================================================================================
来源：http://www.aibaodan.cn/163vtcwefrc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163umpewbgd.html

================================================================================
来源：http://www.xuanzx.com/163rvbmbipg.html

[Q01] 创建表
来源：http://www.xuanzx.com/163lrmrpjcr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163xasculos.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cprqewek.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rxtyzpdr.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163yxwjngwo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163hlgiewzw.html

);
来源：http://www.sxryk.cn/163dtrennbn.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163skkfgvic.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163zaxzotkz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163snfaftjs.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163bmnwhvsx.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163gwauqarr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rycaswdf.html

);
来源：http://www.xuanzx.com/163rdvibgob.html

[Q03] 增加列
来源：http://www.sxryk.cn/163eoafdulb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ljqeuxwn.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ypoymyjc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163kekyxbig.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163lofujgwb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163inxhaybz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163hxcqhtng.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163psbytbyd.html

[Q07] 删除表
来源：http://www.xuanzx.com/163zzgwctlt.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163gtypigea.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163rpoadywc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163qvosucoy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jcctazbr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163fuiubvmu.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163padivnan.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163acvwbjfv.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163wiknijiv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163qrqwwhxi.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163fgxxhyug.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163gcnpkvdk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163plvbhtuz.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163stxgkxpr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ktmwekvd.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163hvuegdfr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hoajfdbj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163uvemnhxg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163volruscl.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163dgqkcckg.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ruabwuti.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163orzdcbnt.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zmdekozr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163agdqolop.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163aiucimgj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163wdrhknft.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zrtmohaq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163uakkzxmi.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163hovyapxs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163lqcqaozp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ywrmixyj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163xokjneyv.html

[Q22] 排序
来源：http://www.sxryk.cn/163qvedikec.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jsfxwmnv.html

[Q23] 分页
来源：http://www.aibaodan.cn/163acxotmty.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ujaldoyk.html

[Q24] 去重
来源：http://www.xuanzx.com/163scqnwkla.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163gswrvglc.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163onucyhsc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163miqnrayh.html

[Q26] 计数
来源：http://www.sxryk.cn/163yyqlcfeq.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163posqadlb.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163nojpxaqr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163lhssrukv.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lexszadd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163kyvnwmzl.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163dgfnptks.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163funusijx.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163uaojjntv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163iizdpqld.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163uugopqrl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163oafmtvgs.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163dbefbvzm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tutivyho.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ubkvkxyl.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163zlzdeiqu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xigrfvca.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163zpkfymqi.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163yjmuiksh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163igsrmago.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163zfpjxqpj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163whwoibdr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ejxyfnrx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163flanhots.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hgbusbbz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wfyjurps.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xvnakjdv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ppyymdve.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163nthiqzus.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163shcpkegh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163eixehsbf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163dhihusrn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bfffhgvx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163cidilhiv.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163argbfluy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163qtazmbaq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163blkbaaij.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163exxviakc.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163kxgqncuk.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ietppwtp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163sonxidpc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163luwkcbgj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163lyyjognq.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163qurcnysl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bqbjgqbq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oisxmcey.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qubzljdx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163fitulyyq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vxubfbex.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ibazfcax.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163eruqonws.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163gcinyhcp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163herukyis.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ckovefvb.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ifoyqhmn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163gxutdcrq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ofdwtzbe.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163zphtwjdj.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163lioslunz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163rlcvdlpb.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bvgldqld.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hflvaktt.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163pnyyfnwc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163iaczgchv.html

[Q54] 清空表
来源：http://www.sxryk.cn/163lyigrqvk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163osjquauc.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163lfzxzamb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163smtcrvqc.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163khbsnvhx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163omjvjjjy.html

[Q57] 行号
来源：http://www.sxryk.cn/163sdzklyan.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163oifspcti.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163injnkgly.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hcrdszhg.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ybmsffyw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163sppwmggj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163epacrbts.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xwrwukqi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163fzcnwcya.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163blwygkpn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wruwxvnd.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163cquuyfoy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163htrxexom.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163dkuqcwgh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163gvkuxwsa.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163diwqnhjs.html

COMMIT;
来源：http://www.sxryk.cn/163oalpipzx.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163rwqmuknv.html

ROLLBACK;
来源：http://www.sxryk.cn/163uyzuvirj.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163weocuoui.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163hxoglbul.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163uwozsbns.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163wacutujc.html

[Q68] 保存点
来源：http://www.sxryk.cn/163sulpjvgp.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mfzrevgm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163jryfprpl.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163skualbrs.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163nmxvqjtp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163bbdlrcew.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163lnbskhfa.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163hvkbdalz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163vpwbergg.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163fypijwtr.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163sbzhxrme.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163kikbbxth.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163xvhrzxwh.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ploydhsc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163srmijfrb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163pcvdoqsh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163hnydfhha.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ljaxnoxc.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163klsxbtyx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163znpqchbk.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zadwsiwn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163wamrqmti.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ykcurswn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163nbfjbfyl.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163gfaegkli.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rpljfxyb.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ayhyftin.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jufhrxgd.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ozicdgrl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163vdfexbnv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163alaftetc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163hmnlntig.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163tpiwkqnf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qirezond.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163cpcdolfk.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163pgpcobov.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163czpklgkh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163xzturmay.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163uihifxwx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163nryizfwx.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163cudrtaqm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163npvjrgot.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163mqejecos.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163gqthxudp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ideikzuv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163attwocbg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163kwdgbufh.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163axfnuzyz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163fotaawll.html

================================================================================
来源：http://www.sxryk.cn/163kfiristr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163vgbppvlz.html

================================================================================
来源：http://www.xuanzx.com/163uyrfyzav.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163dmqpvzdm.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163uuamjpbp.html

set -euo pipefail
来源：http://www.sxryk.cn/163rtcudwsw.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163qlegatgl.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dalxsbdk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163iglogwlg.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ehhwfqki.html

[R04] 位置参数
来源：http://www.xuanzx.com/163bjrgjztp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ahlpfsgx.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ljbcaqpn.html

name="${1:-default}"
来源：http://www.sxryk.cn/163nnykbfzq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163gpdgaxkc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kkyixupn.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163wdasqylm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163mrtepyqw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zafooxqa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163rjmvxdvi.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jrdizuyu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xcivlujc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163mesojnxn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163zkmgsgax.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163kusjtknn.html

case "$1" in
来源：http://www.aibaodan.cn/163ilijqzpj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ldjtgkfv.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163xeijjxcg.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gyoettoh.html

esac
来源：http://www.sxryk.cn/163ttthyoqf.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163qojqbudo.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163miavfmeh.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163vuhjukpn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163uehruwnx.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163iiqrpdor.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163vnxliepz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yzddegne.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163chywgqxa.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zvgehzlz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163obrtprom.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ylpjqmmv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ykzafgiu.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163osssplsv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163jyeicbpy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163myfphmax.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163gzlspwfb.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163szemgrgt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163dkjnwbnq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163xawovlag.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ilsflfuf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163gsozpoam.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hknictqh.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ukyunmca.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163mizxagxk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163xapuxidp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mynoawpn.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163mfffpyfk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pwizsdjq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wglufeek.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163nprkfehf.html

[R27] 算术展开
来源：http://www.sxryk.cn/163szacprtg.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163upwmwylv.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hzskfmtc.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163madrndmf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xwsfkmzy.html


<!-- 参考信息 -->