外链999!wailian999！

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163puhfhtna.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rjcsxguy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ppulsbwl.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fgsxmdny.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vfkmkrkb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ajxpobbz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fztyhkls.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163pqhdcqnb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163qdyqivaw.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zovfnoef.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163zsptcpet.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wqbvqwnt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163nmhuptfb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163wfxlqpof.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163zovholov.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dvcpanfb.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163fwevgsqv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pwuoqtwn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bjrlujch.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163jistcvjj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163cobwnrda.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163mydznegw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163qglxlpkk.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163cmkukrcw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163eexzmzcf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mntludag.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ltcgkqvp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ewcpdlce.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ydeusilo.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163fnapciws.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163qcawntlb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163pdcavqfr.html

================================================================================
来源：http://www.aibaodan.cn/163dsixlsbo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qconlytj.html

================================================================================
来源：http://www.xuanzx.com/163wpjoswiu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163bhuhqzrk.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nawyijse.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163evgywlad.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zotrcqkq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163shbyayeu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rdsdnufy.html

);
来源：http://www.xuanzx.com/163ombysfmu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163jjoovfml.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163djbgxvbd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qkvpdlui.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163olwdkcwc.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163kuteqwhc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wwhlyzvz.html

);
来源：http://www.sxryk.cn/163etphhlir.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163adcykfum.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163fwkppmkf.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163finalcxg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mtmajxtx.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163mmedcbbb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wzdjlnam.html

[Q06] 删除列
来源：http://www.sxryk.cn/163tbqkddzk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163apjdotwr.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163umjaemsn.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163eppysaus.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163loyaiusq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163kzhdtdoe.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163incfrufi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wlrteebc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ecxfaexw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sacnpbhi.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163dlovvscf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163okiewfdw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163bfouuzbj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163mdzzuajt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163beznwqkl.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wzylrtvh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163yrwdzzos.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fyhcxwsu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pwgqgxlv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163xbcqeqvo.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163lpapkhsx.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163trdihmfq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163dfxbvaky.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mzvowstp.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163eslywuun.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163juugzlox.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ojbhwtyg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163utaalpvu.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kjkicuuj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dhjnoqdk.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163cnpxehmq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163isretfck.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zlqgghib.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163jfiuoert.html

[Q22] 排序
来源：http://www.xuanzx.com/163imqndyzj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163aqmvrtxt.html

[Q23] 分页
来源：http://www.sxryk.cn/163afafxonl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163rurzhdht.html

[Q24] 去重
来源：http://www.xuanzx.com/163tssnuioj.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163tjaomuem.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163hgkzvpdy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ubbxsdcp.html

[Q26] 计数
来源：http://www.xuanzx.com/163upwevrvb.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163kbpdgatg.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qevcwjia.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163yxlhnkuj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wqrmdvyn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163zedfvtnm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163cpnwmmbg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163lawsduzb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rtfefdwe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lrrnluve.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163svjxurub.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163izsapmhm.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163uepehmaf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kffkymaf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163emvmxhky.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163wvomtrpv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163einydfju.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rbszmlkw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163geumehpx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163nnaqjdxn.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163descafzt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kolhyeqe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163szefwtzo.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tpratzjs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kvwcyzwt.html

[Q37] 右连接
来源：http://www.sxryk.cn/163jkqesbsv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163euwwvxuy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163zerqmtuw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163oyghwfob.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163fsffqxyr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163wiglseok.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163jvpyrmjr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163hzgoqjuu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163cvjbsyyj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163nctrdpkx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163djmqlldf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163mxcqzive.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jlctmgkn.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163glhemlcr.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163lpckjfqc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163kigrhbfa.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vdwdpfeg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163umlljlco.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163kwbgbrlu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163hamzjmxx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qqbuzelf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tgbykvre.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163dxoahffr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vwlrzbdj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163bpwqiscc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163teqwaehd.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ecfbagzm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163nsinlppt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163dkfvvasv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wzjvkflq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vfbaaxoa.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163llfdxlda.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163idynaxip.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163rdflhuip.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163lnkockmf.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xutaqgtl.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163imhbcupv.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163azmkwyus.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163deaeulft.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mxrfjgah.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cawceukw.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163tjbguzbu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163olornvog.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ajiykbkp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163usovypkj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163szyjcdfh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nkjfpsxu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163lvvbmsjv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kjedvvfz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163bghvfggt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163przgaqzg.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163uyvfivkc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163pmkhpsph.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163gtbmcytx.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163dtecwbjf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tdgjwhpk.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ldlhsnxk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163swdpooec.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163sujbehxw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163icrgenqy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163hnwjhmfn.html

COMMIT;
来源：http://www.aibaodan.cn/163pexaptdh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163fndbupgf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163pbfxlynb.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ylcmojcy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163rryjqzws.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tmewifrs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163omqurpid.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163lieyfdig.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163kchbhgwf.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163umfvnzhe.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163wgvtrmxd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163eqzihxje.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163jcwbsgch.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ewepdujm.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163kerlqfek.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wmnbtmiz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ioykedqa.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163muknpdql.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163sxnjguiv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163udqyokhw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zfzlctbr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163zlrveyss.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vybbjtyb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163agnxnmjd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163qzutthtr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163dtfijzdu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ctsjwbdv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ooyeonhy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163kcopqvkh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163gblrhhdt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163oihthfid.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163awholfve.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pctotfpf.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ddijsidd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163saclwpix.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163jxweorpu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ovmfndfe.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pnccqeho.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163limytqsu.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163rgnqeqhs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163umnmnoov.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163sistxkii.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163iidvlyln.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lpqmstdw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rhljdaey.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163dnkpoyzg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rkusbdao.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ymqtghus.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rxymmubk.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163zcjghepc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163atshlocx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163justvrwp.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163axxibduh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163aleocokl.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163bdgrgxbh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163sfjnhvpy.html

================================================================================
来源：http://www.aibaodan.cn/163gqftzelc.html

R. Bash 专题
来源：http://www.xuanzx.com/163avlgzazu.html

================================================================================
来源：http://www.sxryk.cn/163kpcsumvk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163dgvsrhuo.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163fjggtftb.html

set -euo pipefail
来源：http://www.sxryk.cn/163wqjgtoup.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163wmubyovb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163xvtoxuht.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qizdvmdb.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gacycata.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163tjjphuce.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163uubbrxvw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dhzmgeyj.html

name="${1:-default}"
来源：http://www.xuanzx.com/163oynbmqoq.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163pnagqblq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qoxyqrjd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ifctqnth.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163jxuduuzu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163dwmjggsw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163pbedyave.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163atctqbdm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tdzzmiqn.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163znmmrnkc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163osyrwqyj.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163kypzdwam.html

case "$1" in
来源：http://www.xuanzx.com/163zckgccmj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ohhqqqwm.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163tnrtnawu.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163gfmjcmwp.html

esac
来源：http://www.sxryk.cn/163jzdemjkq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163myfdwcyl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ajkjuqwf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zvtjekot.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qiulxmmw.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163gpvwovcw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163jtipeasz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qxcklgmp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163mvsmgtqv.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163onkjhzqw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163tszkxxwg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ezuwbhuq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163shesdsqr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yntnyhfi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163zafaxuhn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vnmfbszm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163vnkmptnl.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jxxhkbmw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jknklvmg.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163cjpnainf.html

echo "${#s}"
来源：http://www.sxryk.cn/163uczjycug.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bxykkauk.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163rtenyibu.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163kmmbqmbc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rddggohd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163djurqvps.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163knmygdck.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ppzqrstx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ajzzixwh.html

[R26] 命令替换
来源：http://www.xuanzx.com/163iavixubx.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ldhiquzo.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fazlijqu.html


<!-- 参考信息 -->