外链999!wailian999！

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163trkxourx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163gyfebsoe.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163kzkaxyza.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163lgwyiuem.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163uytgecge.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163joerqptf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ooizzkee.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163qdsqhodu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163bvudeshh.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163hxauhfnd.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163dkfsiirq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163huebbnxl.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163dghsgbct.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lnjebmdr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jplaqyph.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gcdowuqg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163rzhzhuwb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163cfipqrrp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jyoujnel.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163geztezhs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163nfqvbbsn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wdzouqtf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163vdmyzzmd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tvtjvzwp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163xcioamii.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163saqobvjg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zxmxntbs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vqgidxwh.html

================================================================================
来源：http://www.sxryk.cn/163mecwjptg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163mbhkxalm.html

================================================================================
来源：http://www.sxryk.cn/163xmjrpbjm.html

[Q01] 创建表
来源：http://www.sxryk.cn/163imyzmnlq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vcqyvsbl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jtsntobl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163qijktnbi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fwmctajd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163iuvakiuc.html

);
来源：http://www.sxryk.cn/163bmkvggmr.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163kepbtljx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163lkopljyc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hfwzamxt.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jxvtgdmv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163knwlsiqh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163lumpohxr.html

);
来源：http://www.aibaodan.cn/163jmbxehfl.html

[Q03] 增加列
来源：http://www.xuanzx.com/163lvrquzhc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163yakwtjnx.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qrifflkg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163eqeanewr.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163qtkhrkev.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ffarxroq.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qrtafswa.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163tabmzmhx.html

[Q07] 删除表
来源：http://www.xuanzx.com/163cvcqgnbg.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xlwpdilv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163tqojxgjf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ubmivkuu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163cbpxbshg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jjslptev.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163tchzpsnq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ijzpkbms.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163cbfuhysk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163rioqvgdz.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163yyeozrmo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163jlsfycoe.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163uowwlkio.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ozyizdle.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163gsauasdt.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163lffnwecs.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163dfrojyuw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rcfgagva.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163xqnoxhbe.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163rghgxdkr.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bomrwbop.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163svgmqvpb.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163pujcnzzz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163axisrkpc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163dpclewxc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163xgzvlqke.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ldmajxox.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163woermkub.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163jojtixji.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163pnmjgtoh.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163onnntsjs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163sdejoxxk.html

[Q22] 排序
来源：http://www.aibaodan.cn/163eenzzsfh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163pyijcyxp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163kqbagjvy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ycmzfvxh.html

[Q24] 去重
来源：http://www.sxryk.cn/163jbuqysbs.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163enkpwmlq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163udnjgftm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vaobigdo.html

[Q26] 计数
来源：http://www.xuanzx.com/163iveuccdr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163jladilsk.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163upwnzsuf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163iwqpjqsx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163cdatacde.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ssbifxnc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vnumjqay.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jokgdoga.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jnhfukuz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cfhtgcqb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163alafsfjm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ghldzhop.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xilomgcw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rqiwkmmq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xxfghkjj.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163yjzrjvfl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ojsrnkhl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163kmmtjtrk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163rljhrkea.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163faucbhdz.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163cpmeptzt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163qvszczke.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rvzwjrqs.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vvppyjif.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163khmodzkx.html

[Q37] 右连接
来源：http://www.xuanzx.com/163pvkwdjti.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163mvrhsucy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ldxnteez.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163xarecoqk.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163vhridlmz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163kzrujoss.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163sdiuhjmj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ixddpfol.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163tckybwiy.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163awhgnmjn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163nrxewjwl.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163brswblso.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163tzwahdut.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163gazpqltb.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mmxdkagk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163gqdvhlbo.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ncftltyi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163illpqpce.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163pdeabdpv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163jlhjrqya.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fmkvzlxo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mbxgqels.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163rgmanxed.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ivhnxjgy.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163mivazyku.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163uksybihb.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163uzdcycpk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163olxdjwbc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163meclcqxj.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163iqhunpbv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163khgrspmj.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ddiaxina.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163fxksbfvj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fxnzbmhk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163xvswrouv.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163rhkrissq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163bfneesyh.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163jnqhswrd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163fnuhgewq.html

[Q54] 清空表
来源：http://www.sxryk.cn/163xbcmvaho.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163lhwagtvx.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163eucinlzb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ewqtvjkf.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ileynxie.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hnidhpzt.html

[Q57] 行号
来源：http://www.xuanzx.com/163qbyqjlcs.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163rgozappx.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163tglrqgvi.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163mawrmqeg.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ohnsuinz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163mlmmijww.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lpkkdats.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zufjyawm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163xppcoqki.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mrrmurrt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tzrjjxia.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163rlqdveae.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dykmlpxb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163udbpsfzn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kxnrxmpf.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163vwvsxdyb.html

COMMIT;
来源：http://www.xuanzx.com/163gogrmceh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163zriweprq.html

ROLLBACK;
来源：http://www.xuanzx.com/163rnlnztmv.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hwnzlmhr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163euamdbne.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jeyjscgc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gpycadhv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163llpualrn.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xxwbkuaz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163opfshtjr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163wbllaetf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ccywzgin.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163gwpeywzl.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163yscwtaoi.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ukpgwjhw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163swagrfrq.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163fongustp.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ssdvipoz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163nwylprnw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wfvkgooy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163hiqwgrdl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163mgrjennb.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163gffhjjix.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163nrikcdvq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163qigurqmi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zguyxmsy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163oimhzxpk.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163pdhzkibx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163gqlpdnwc.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163xjwhakco.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gpljieft.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163coskjkmq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163kdfcsasb.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163zguqdsds.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163uqudfpqc.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ytygijkt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163kfisvtvn.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163tyiypxrs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ytljildl.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163fbnrfqse.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163udotoiye.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163meygntgw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163nyxzeddh.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163eoqoarid.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163bwkjmbgz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163llcqswwl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163dytagsqk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163bmfztujn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163wjptgdlv.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163thipyocz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163mmzephym.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163thpvwder.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163wrfnqoua.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163skuvpvpw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fxdzqdrh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163flctdlrq.html

================================================================================
来源：http://www.xuanzx.com/163nykjsbls.html

R. Bash 专题
来源：http://www.sxryk.cn/163qvzsqckv.html

================================================================================
来源：http://www.sxryk.cn/163djxivqkc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kubgpqxo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163lxubvdzs.html

set -euo pipefail
来源：http://www.aibaodan.cn/163asvjrzfy.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163uhvlhnwd.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ypfhfzop.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163gfubkqwe.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rpnpvryl.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bqzygkzt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163wbaaftbd.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163sxlgiwxq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163merafrub.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163blehrtpy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163zkuuncac.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163hbijvasr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dtnfplcq.html

[R08] 数值比较
来源：http://www.sxryk.cn/163asodhcyx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163unzvcnsp.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163bqayebdq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163bewykvhp.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163wpsiukzv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163kyinkfcf.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ynsqzqml.html

case "$1" in
来源：http://www.xuanzx.com/163hoctztwz.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163iolioxnd.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163llqtysuf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163lgbpyloe.html

esac
来源：http://www.xuanzx.com/163gukknvmx.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xbotqkjk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ymgyyxiv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163kdgrzyuw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163oqrlgeep.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ocvklbxv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163jkvmrudt.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kkmvizgq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163urxhtkdr.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163iylmcdnn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jleypalj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163lfjhvygm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163hpelpybj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163brfxdpuu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mnggyitq.html

[R19] 数组长度
来源：http://www.xuanzx.com/163nzngwjux.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dvtdmyqv.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163gsrsjuqw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163orjjmxvc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163itzabxqa.html

echo "${#s}"
来源：http://www.aibaodan.cn/163jxkhadvv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163pqrinhwi.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ohkujaex.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163bpcujfny.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rjcrmxrd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163quhxkskk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163hyknymix.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163towiiepa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163nbxqfwdi.html

[R26] 命令替换
来源：http://www.xuanzx.com/163vnjurlno.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163apobvkcy.html

[R27] 算术展开
来源：http://www.xuanzx.com/163rgfonrsf.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163esauxbtc.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sbwywsqv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ovjxycdz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dnmzeqea.html


<!-- 参考信息 -->