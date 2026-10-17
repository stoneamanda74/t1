外链999!wailian999！

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zyjvauns.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163jdkopfwa.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163mxghrqxw.html

Ruby: a == b
来源：http://www.xuanzx.com/163iekzskzw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163sjrqtunz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163bigiashz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163oaarypqw.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163qmgesqtq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163hzowkehd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163obcrndvy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163mhtkzjlc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ofjrymoo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wrpkummo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163mdllzkbb.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163icemrfzi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jvctuwfv.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163enkjwwux.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tylczmsu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163orozhorj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163jrvofqlo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vwiktdxl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163snhjigwj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mlemawce.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163quyduohn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vzvscobb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163kfszbokl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163btqepcpk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163xguajxxi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163swrhgraw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ussjzjjb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163blsqxcpx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163lnogxpnb.html

================================================================================
来源：http://www.xuanzx.com/163hdmgzseb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163idfewpas.html

================================================================================
来源：http://www.sxryk.cn/163wbaoyhtg.html

[Q01] 创建表
来源：http://www.sxryk.cn/163kdggnlyl.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ukupflwj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vfsoglkk.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163opqlcbdl.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wihuozgz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dybwlkmp.html

);
来源：http://www.aibaodan.cn/163neeyqhic.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ovedfykw.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cigxvvry.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vjottfgf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163mplxhdem.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lajgwrbu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gtjbttfn.html

);
来源：http://www.sxryk.cn/163cfhccokd.html

[Q03] 增加列
来源：http://www.sxryk.cn/163jlmplcfz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163uuzpilmx.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jriuaaew.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fikqoubc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163eeezzymi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163afqqflbe.html

[Q06] 删除列
来源：http://www.xuanzx.com/163bpdqvlxz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lorbepdi.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jhdtzlwb.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bexupvsx.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xwusrauf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zykozubt.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zzqavfnw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163yfhntmmj.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163rrflakat.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163banvypuk.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ghsgesdb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ndwdptpv.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163zfpyfmjv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163dwfiwdag.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ofvhzcwu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163tzhbxrbi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gellspdq.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163idktzuod.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jiotqgkl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163jcobveyc.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163gyvjuang.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163liantdoq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163fqefhhvw.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163qpfonaml.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163tyhmqrxp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mdxtjqpo.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163dvqexxce.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163aitioovz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tcdfhrqn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163uabxechn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163pxzrbzxg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163byvqjlzn.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ueyybnlc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163secupban.html

[Q22] 排序
来源：http://www.sxryk.cn/163awbrklrb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163cuedoabr.html

[Q23] 分页
来源：http://www.sxryk.cn/163fcfaaqsq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163aoupmfxb.html

[Q24] 去重
来源：http://www.sxryk.cn/163nkadqbzy.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163zpgmlbil.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163golkzgch.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163fruuuekk.html

[Q26] 计数
来源：http://www.sxryk.cn/163qqmbvtxk.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nsbxfzdy.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163lztxyzhb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163otlbrmpe.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163kvvrpkpu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163nddmvydm.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163kxbkbhwd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163lbzdyfcz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163xqztvbkd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163snrrvgen.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bzbikvks.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163gduzlgjv.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zsoexnpu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jmfftkjp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163tuzptssw.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163wzvzjznn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qayjwuvd.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uaibqpen.html

SELECT * FROM (
来源：http://www.sxryk.cn/163pifzemng.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163owhapaax.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163mumuncko.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hmydosld.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rzkspybu.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163wogovihj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ganotlhw.html

[Q37] 右连接
来源：http://www.sxryk.cn/163oqsyycyu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163yzbpriul.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ohdgkyus.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ibbaelpw.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ajnoubjj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163kicejzvj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163nilvzsjr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fegvfjyq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qsepzhnn.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163pmxirhaa.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gqahennm.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163qxhphitc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163emhvpryv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163rpztimxm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163soayseii.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xvmuawjv.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163kpfernwv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163byntbjqf.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163dmkxmgmc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163cehnhlaw.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163hhpddqmg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qxrdshto.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ekzlczgj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tzgoqbyg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163slxwvyas.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ylxjtaec.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163kegqjxrb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163rntqcgea.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163jtkoroty.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163prxwidfh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163hebbsdwd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zrvcxpws.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163mubtfjeh.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yyhjmqbv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163oydnexmi.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163wvoubibh.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163hfxopmgt.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163pbxiizhu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163bojgsuce.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163povjreqg.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163zsmrmmzo.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ooldngxd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163acgbuehm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163otocbvaw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163msjrqhlv.html

[Q57] 行号
来源：http://www.xuanzx.com/163vsbculus.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ppnmakrz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163mijbofsl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163cqxgmhci.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163gquppkjn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163aepkfbur.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163yvmzhseg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tiroiytd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163rilsguob.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163cizvaawm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163kqpgqmio.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ypzqtaot.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wlyrltns.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163kgwqmhvy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wlnubopx.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163nyjzrsqw.html

COMMIT;
来源：http://www.xuanzx.com/163nrhyosyb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163hgzxpabf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163geqgtknp.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163iqilqydr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163pbrppfnp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kpauwmce.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jnkcmcbb.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163afiruzhy.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163lqimpjjc.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vzfqirkb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163gghtwioh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163vprklykw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163pxscfwhg.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qmkwhphn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163hggcqgis.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ympukvuj.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163vhioqafp.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ijvhmkem.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qjygensc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163mjivgzft.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163xdaralbc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163nosvlwqe.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163muayydky.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163uipoyxet.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163egcvlyfn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163iglpgamq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163rwlqzcuq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163lpfkxese.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163fddohhmh.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163opywpmwh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ugxuxrnj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ysrjdkhb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163cymkwtjz.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163fbwcqtmx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163knacanqi.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163gcdqtrfq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163nqkkxswz.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163asqmxfdn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163rgllznal.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163otleffmj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163onxtwkmz.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ztufjlpm.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163isdricyg.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jafvwowk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bqzspsbm.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163gcpmzfhv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fflbnhnb.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163wfhoekvb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163sszyjrgd.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ytjahhto.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tnfamurh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163nvsrqjzr.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jpdnemnb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163dgdomwsq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163sdyiqyga.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ypwdsafz.html

================================================================================
来源：http://www.xuanzx.com/163agabsufx.html

R. Bash 专题
来源：http://www.aibaodan.cn/163opwuthie.html

================================================================================
来源：http://www.sxryk.cn/163pvuimcsu.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bnnxfbng.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163zaequzek.html

set -euo pipefail
来源：http://www.aibaodan.cn/163coksntee.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163vynanssu.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163kfyarfpw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163iygszfkn.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qrsclprl.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ceyymbrt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mgpguupt.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163mthdyete.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zwsryzwc.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163laevhoqu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ksepfdia.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163zgjprung.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vhioxshr.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nffwrmlb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163uolaltkv.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163dfsivafw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163bexpcewz.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163hgzeeerm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163upeoeqso.html

[R11] case 多分支
来源：http://www.sxryk.cn/163fuewjwvl.html

case "$1" in
来源：http://www.sxryk.cn/163xjmyqrnu.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163evsdcxpi.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fkewfwqd.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qgaxsjeg.html

esac
来源：http://www.xuanzx.com/163whmeaxnm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rlwsalrm.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163dtzdmrah.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fspqzfze.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163pkhclavu.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zunwxlwm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nnsnliju.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yiqrrzlw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ltvtbhru.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ldvowssr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163szisiakb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hushgopo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163fybdhmip.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163behnihvz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ajfzfaaq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163xbttqxou.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163fssvfkzw.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vchknufx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ghnndnxn.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wyxthemn.html

echo "${#s}"
来源：http://www.xuanzx.com/163mlwnhlgt.html

[R22] 截取子串
来源：http://www.sxryk.cn/163esrsmiak.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rzxraput.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ydangdfn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ggwnugkz.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rzcjhywl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163xfofqziv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163pvgvhntv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163okzxifht.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xrvigyfz.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163uqswpbyo.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hllafsls.html


<!-- 参考信息 -->