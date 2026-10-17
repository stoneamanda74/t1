外链999!wailian999！

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ltounfor.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163tazckdvu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nrgyrprw.html

Ruby: a == b
来源：http://www.xuanzx.com/163bcngvccc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163muqnetqw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qwjnwcpa.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163jritbmll.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ysivaota.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163kwpvqzvg.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163oepcevfr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163elqzsyid.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163focxhzyg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163qyfduibp.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163crbhybdd.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163nsvlbqjk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dkiulrix.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163twoddtzm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163egarbkqb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yfokpkhd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qpneoxss.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pupvglgv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163qyxyvoht.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xtteqsed.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163esrdpuco.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lborfwmz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163nebbcoxv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163bnzfgyjj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163rutrunpg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163lfajnkvu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163khxazpiz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163xjshwhff.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163dulzexlo.html

================================================================================
来源：http://www.aibaodan.cn/163bonyfeoa.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163sgjevxec.html

================================================================================
来源：http://www.sxryk.cn/163yvjplnon.html

[Q01] 创建表
来源：http://www.sxryk.cn/163osyyjxyi.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163qexnpzqc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tlcclcrl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ryjmkxmr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163binkttiw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kopptwcp.html

);
来源：http://www.aibaodan.cn/163ochjklhs.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163fvhqncav.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163lsumcsgm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rvqftqqz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163qtpbbvzu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ozzdhzce.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163sursvnll.html

);
来源：http://www.xuanzx.com/163jnyvpsph.html

[Q03] 增加列
来源：http://www.sxryk.cn/163lndwobox.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163msqorpgh.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163gnxpaxqb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163meqkrafu.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163swgxnotg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ccuupfoo.html

[Q06] 删除列
来源：http://www.sxryk.cn/163iouthduw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163eqwjglpa.html

[Q07] 删除表
来源：http://www.xuanzx.com/163cnvpcngn.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163fntigdpt.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wdlmdurw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163xnixddsq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jjtkpktw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163icvhesrn.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163zcwgjzjs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dytotzvw.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163efxyvyxq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163iijozkkw.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163wrkrmlwr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pllzqfnq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jugczmfv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163okgrcspm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163lplutskx.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vbdquuya.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163xnbaujuq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163pxurntdn.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ufzzthqu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ohmpxpew.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163qmmbllsu.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xjksnser.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163litupucp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hydirxzr.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163tjbvssxc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163oulnzeqs.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163yoyedzec.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163lijwyneb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163aacxibdz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163tctnkufy.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qvsmccpa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ckyylemn.html

[Q22] 排序
来源：http://www.aibaodan.cn/163lwfnnyjo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163kccwvqpm.html

[Q23] 分页
来源：http://www.aibaodan.cn/163tyvacyma.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kztytjwz.html

[Q24] 去重
来源：http://www.xuanzx.com/163raprmwcf.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163cvvcspsw.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jabjokfh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163niuzgbof.html

[Q26] 计数
来源：http://www.sxryk.cn/163zpzabefg.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163smumqgec.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163hgyosejx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163bsrneggq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ssrrwice.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163axhlmwfi.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163zzbylkvk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kcboyyew.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163uxkwrkic.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kzpehssi.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163nczehgvx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163tclceytw.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163guxczesz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wjxpcyhq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163grnsskvm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pwlndlay.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163oyqudedo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163nrssxduc.html

SELECT * FROM (
来源：http://www.sxryk.cn/163verutzco.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163weggyezi.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ozdhijcu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163gmxrulnf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163whqsqfyg.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163jossomwe.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qrdcnxbr.html

[Q37] 右连接
来源：http://www.xuanzx.com/163myoeresv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163txzwwpme.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163kikqvgxf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163wxzentkt.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163amnrrito.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163cshnrfbv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ymmfcdkf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163msaloudq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163iimraeiw.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vtxkqons.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bobsrujs.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163gbthxlxg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163eafvslzn.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163hxerrtgp.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163aguetupb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163qswifghv.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163evwexjyj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163sdjtctfs.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163lwnlcmca.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163qythzsta.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163bdcaaqmd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163szkvpmcm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163cgasyjpl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ajfdavjd.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163mcvgdiax.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163dphvoknr.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jwvypysx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163etphudju.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fnlabvxi.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163strdbfzz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163kdmodvgk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163kuxjrnfp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163isflbylc.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163eulazzzc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qwczvzdg.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163nonchbwo.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163vdgokava.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163yvdagwmu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vetseybn.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wbabkems.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163oncprygw.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163lspivmhw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tcljtchy.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163idhqheme.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163aqyrxgdo.html

[Q57] 行号
来源：http://www.sxryk.cn/163qetndfbt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dwftmhnc.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163anndpmdp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ifefgfwy.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163xnerjtnj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ongoyirb.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kwqtihwm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163kgxdgptu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163qmkrwbdf.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bdgdtafh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163aiepbfbp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163fkmnbige.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ehlebaev.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ibrivpmt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163yvzfhxoy.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ylnycdsu.html

COMMIT;
来源：http://www.xuanzx.com/163brsadgkw.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163znggcwzw.html

ROLLBACK;
来源：http://www.xuanzx.com/163dmedfqzj.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163staalgty.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kvktqmtl.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163oshphifn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163kqeqhths.html

[Q68] 保存点
来源：http://www.sxryk.cn/163mbhrxzye.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gfhchlxv.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163msfoebsy.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163aeagunjt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163mlzxqjko.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163cwpzwpjg.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163wqnbzyyp.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163euexzpyl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163gulhaexx.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ndehkqaf.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ozzdybuw.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163qjrkbcpu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163pjjfzsur.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163vegvojxy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163cechuhyn.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163jclgewqv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bsisqozu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gfsossqk.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163dmkfdfek.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163hxlkzuhj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163oqzbtpqr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163denfbzrg.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163rmqvnquq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163wljsdysr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fhgmlsbf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163krwpejfh.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163nkkaclaa.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163jzeyggsk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163cdrzixxo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163xnlrwcji.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163qnzvermp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163yburmaur.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163iphwoqvo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vdscfbak.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163igauzmef.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163noptdaxt.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ruwvozze.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163kehgpuut.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163atkhrqmm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163oyefuuvi.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ykyjlzed.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163npfaosbs.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zpphsbvt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163dxlsriwp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163kmbvjepj.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163venqpfsx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163sdoxfhke.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163uctqpcmv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tbphdcyl.html

================================================================================
来源：http://www.sxryk.cn/163sffvggin.html

R. Bash 专题
来源：http://www.xuanzx.com/163mascjokh.html

================================================================================
来源：http://www.xuanzx.com/163gbxfafqk.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163cbdcrwqg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163efduovou.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mxbhumcx.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ajbuuxbr.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163yoiierex.html

[R03] 只读变量
来源：http://www.sxryk.cn/163yjhgjgsu.html

readonly PI=3.14
来源：http://www.xuanzx.com/163iskilzmj.html

[R04] 位置参数
来源：http://www.xuanzx.com/163zpnlfhgb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ltwqyukd.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163fyepbryf.html

name="${1:-default}"
来源：http://www.sxryk.cn/163pidmxubp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163yymbokuq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163wkqubqgz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163nehehokq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163pjtlztcu.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tlbzmixh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163yrgixosk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163brdrzclg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163kfywhtiy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pwweliei.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163clfelbcr.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163fqgpnrvi.html

case "$1" in
来源：http://www.xuanzx.com/163fquznxyo.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163xlnjfzbq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gnuvdlgn.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163bxbrzfzi.html

esac
来源：http://www.sxryk.cn/163djcsaovb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163plppvodi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163mzemcdkx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163doeaqozd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163omtqzlsu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ygfpeqbs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163pijcfqkk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163stnmifrv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163qzhwfavi.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mkwxurdu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163tuvzzmmf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163pezvntkz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163xfagjbqc.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163tpnmxucz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163pgjlhhou.html

[R19] 数组长度
来源：http://www.sxryk.cn/163rkdcumeo.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163opqrttpv.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ypphllyd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lercdhmc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163cxrtsntb.html

echo "${#s}"
来源：http://www.sxryk.cn/163azpsqamo.html

[R22] 截取子串
来源：http://www.sxryk.cn/163slcsgucp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ghzjfkhm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ybvonqdg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jjjuxkmc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qovbciqr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163acemwcif.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163blmcwujo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ofsyqjjx.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wnnlzdox.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jdzeovbe.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ofaqofcp.html


<!-- 参考信息 -->