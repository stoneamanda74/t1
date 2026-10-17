外链999!wailian999！

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163dcxatecl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163cwjblzbu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163uejnehfl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xcqcezvj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vmfdvpfa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163yikbouun.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163uxihnjbj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ugljfadk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163pqyjtbna.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163yfobtsxd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163vllscnsd.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163kezvnihg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163xamcqdce.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cduecwys.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ytskcbjd.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vdxbqjtd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163exawoxjk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163fkpzquut.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163reqnsjkl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163naykpzue.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163aswwmgkx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163chlfdwjv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kyoueqof.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163kwpfdqlz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xwasnejv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zqzhtkpu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wwtyxaax.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163kvbasjyp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qyuvmuii.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xeubxdlb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163rygyskwv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163yqfyifpj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163nfwjqvgt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163wsprqesw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163umhobubh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163dbvuqowf.html

================================================================================
来源：http://www.aibaodan.cn/163lfmmihfr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ttozigvg.html

================================================================================
来源：http://www.sxryk.cn/163qnevtncs.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tbbwqqtq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163uzjdzhjt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ujycfldt.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163bvdkelvd.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163hgkaskty.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163toloouqa.html

);
来源：http://www.sxryk.cn/163cgntrnmu.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zbjdbtyq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163orfiarwl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bahgodee.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163iotjycev.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163hivvside.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163kcgecisj.html

);
来源：http://www.sxryk.cn/163xsgeuvun.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163zkriggqg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163zpphabop.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ekfyyzfb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163mguoxbnn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qkgodmol.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163faopbysd.html

[Q06] 删除列
来源：http://www.xuanzx.com/163valvftem.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163iduxdkex.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163rbpppkuw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qutiqdaa.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wfujjxeb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163dplcqday.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vgcvcecp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163sikvotvh.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163dakckyob.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163jqrflcjo.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163gyhvqymi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qhqftqka.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163huhjpxxq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163isivfwfo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rwqjwexn.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163tycnvrnt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ayjwovvu.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163svuwqqyx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163teonvbwu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163mefrawsi.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bwnyxrrn.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163asddvvwy.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zjithywy.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163gyhrpmxp.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ffckaozr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ulzgpyhz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ysqvhstx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163cofzwwph.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163sasmbjpm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163dtyraonv.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ktllrkkp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163cylizsai.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163zmxkdsid.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163dofxthwj.html

[Q22] 排序
来源：http://www.sxryk.cn/163ozdmefwk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ofqqbkzl.html

[Q23] 分页
来源：http://www.aibaodan.cn/163jyslgrtk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gmwuuwzd.html

[Q24] 去重
来源：http://www.aibaodan.cn/163cnkixfvd.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163wryoqtuy.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163azjbdfhh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163mizciaky.html

[Q26] 计数
来源：http://www.xuanzx.com/163cxykelps.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163sqrkkfva.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wyvsuxqr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163lqzaivrr.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163jthetqih.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163hxlcigul.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163tmivnwye.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163bddmwifa.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163tsezfrrk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iszalaey.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163iqntapeq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jagiqhzp.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163swbgkaak.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163brngksme.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163hxyydxfc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163iblkpgre.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163yqlynnox.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ndmbukmt.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vrwysgtb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163reaxvedx.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163jklmfcpl.html

[Q35] 内连接
来源：http://www.sxryk.cn/163bgwaqtra.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163irsdjqmq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163bfykknak.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yugoegsh.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163zgnadipt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lsavzgia.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163nuctldpw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163qrcgdbva.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163xbeuisoz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163nahkmkpj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163gyihbysc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163zjekxyll.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163pcuoiics.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163xcfkzwes.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ixvclkds.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163tizibyfy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163pgtmwvqy.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163qqznxrlj.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163nkijtzvk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vnddqmeh.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vuiisumx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163lsaclytb.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163jbdnrplb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163yciibdpn.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163guxegkzh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jieipgco.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163rprnjxts.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dfhiwxyi.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163mlmwvqqe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wmywbdcg.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163yrhtzsnz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163zlejmnrk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ppzsyrlt.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hbknqiwq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163cmhxubgy.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163brgznrpz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163sxvgjevj.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163csilzquo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163bpcrfqrh.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163lxcjicfc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163naaqmyet.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kssbfexx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dqrihyoh.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163umsgbzbt.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163dlivdyis.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163pjnfipoc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163pnzfcsqk.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163cjookvqn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163cpvclhzc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163uwcmuytq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163czejtyev.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163yavkvdbb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163sbohhurz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163czphyhdx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163esiuloco.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163qxlbqoko.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163cbztshqv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163negbblhf.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163howrxdgp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163qnlrvlqp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163gbyafjjz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ftfholiv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ewiwkbcf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ipbboppr.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163fqdqevte.html

COMMIT;
来源：http://www.xuanzx.com/163bgzqmjrh.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163xsciwqqh.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ihuawzse.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163rrpqifbd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163hycwpagz.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163uirwfyhx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dmjjynnf.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mbneopgm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163gjwestwj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163neuntrrw.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163besstusc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163glgrfnjq.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163wxakbhac.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dngvaozu.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163fklojtgr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163rxpvqnji.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163sdxummsx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163kwlwcmds.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163autejxbj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zhoddkey.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ctsamqha.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ofmvmphw.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163hjtfbrod.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163xdmadauh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ziaysnbp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163snlkyfwq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163nofcnoam.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163puugtcxt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jbexftjw.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163gthnirwh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163mddazytf.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163jkhfuiak.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163vourfzao.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163schmlowr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163erxysxxt.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ppbqbszn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163mvmdaqpn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163cmdcvzdk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163imhybici.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lpnzdvbf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163pgtngwoa.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163pjibnufu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hqpxamex.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jqohebbu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nxjgionj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fjzqdyvo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163kpwkauez.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163excoxtya.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163domyiywh.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163hpslnceu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163lwxesbwl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vlcoeesp.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ijelkmyi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163cvkozqsx.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ivdwozap.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163pbxditiv.html

================================================================================
来源：http://www.xuanzx.com/163qkqlixyk.html

R. Bash 专题
来源：http://www.xuanzx.com/163lxlbgqed.html

================================================================================
来源：http://www.aibaodan.cn/163rxfbjdtk.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163lzcqtvml.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163piernrkl.html

set -euo pipefail
来源：http://www.sxryk.cn/163nzjazuxm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163kbbkcvra.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rhoqgufn.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163mclyfqyy.html

readonly PI=3.14
来源：http://www.xuanzx.com/163adknhgyi.html

[R04] 位置参数
来源：http://www.sxryk.cn/163gjkjuofe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163avxsnaix.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163pbquekrw.html

name="${1:-default}"
来源：http://www.xuanzx.com/163dpcjdhpr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163njxfgxwb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hjdrqtjl.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ltubphoh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xujpybdm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hllpyshq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ucixbxyv.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163knbbanlf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163fxzxvzex.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163wucmpfke.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bomwbcma.html

[R11] case 多分支
来源：http://www.sxryk.cn/163kullpret.html

case "$1" in
来源：http://www.sxryk.cn/163vehpoxmx.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163vbnkaoud.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163whbpagdx.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163epnpjbzi.html

esac
来源：http://www.sxryk.cn/163eacnglbt.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cwmsdzxb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163hutubyyt.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yhkjomwk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163wwcbyxum.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163mmpypvpo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ywoxxexu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rmscfnda.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rkcudnhk.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163eyxnglrc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163vesjfhuj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hxheruyk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rqrihfmt.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ooldzgad.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ozuareur.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ysjivsbp.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163jkqpiisb.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163tbvulzee.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ohdpvmzd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mwcrggkc.html

echo "${#s}"
来源：http://www.aibaodan.cn/163nhdqoxnq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zrkjqbct.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163vnehpqlh.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ebwmnfwh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jxfdgaut.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pmcypfmu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163cwjpbrcd.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163waztdkys.html


<!-- 参考信息 -->