外链999!wailian999！

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bvetnsvw.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rrgkakxf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163uhupfowl.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ltskvaxm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163qqtvibtm.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fltxdbni.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ktolvxxm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163hgoheiet.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163aprmosqq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vsfnwenu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ewemawlg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163iczvkzdo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xhbgbjwu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163jjllhmwu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163zyuwtntw.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163hcfinpmo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cjszpsbu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163tikjfgmf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163kqqlnskl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163cgupldqc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163tutdpqvx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ilicbtpz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dhtmqqdb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163xkefnrsl.html

================================================================================
来源：http://www.aibaodan.cn/163uaqxpjjk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163udoduwoj.html

================================================================================
来源：http://www.xuanzx.com/163yuwqckfw.html

[Q01] 创建表
来源：http://www.xuanzx.com/163xvbixwzq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163dnbngadw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163llxqovla.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ykemnuyv.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xgijeipx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vaulaaug.html

);
来源：http://www.xuanzx.com/163ioyxnkql.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cielhyrt.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163eocobayz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kypbfhbh.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jsnvzair.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163mmcdvyxh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wvsdrdwh.html

);
来源：http://www.aibaodan.cn/163ilpagzve.html

[Q03] 增加列
来源：http://www.xuanzx.com/163vvarnfcw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163jadprnvm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163msjjvgxs.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163nqtkmrjw.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163tvxghwke.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rzdvttax.html

[Q06] 删除列
来源：http://www.xuanzx.com/163xykmcnue.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ahngzkvm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163dtrlayxq.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ojgepeck.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ehydambe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163vaphzvou.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163qhdqtpcy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163dksnrnml.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163vwpojxqg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163btrwuoyr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163etvpqohk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163gveokdch.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zmdpadnp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163bqdmovgj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ynoboizz.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163duufplkd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hnieryve.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163dzfsokql.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163cheepdgt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163xikqmjsj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163irygpbry.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163urpyubya.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163fkdpvncc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163fwttbkue.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163aqdhtvcv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163igmdwkba.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163lotbkurt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163bgzhkmel.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163rdrqcfww.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hkuhrvgf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xiucpzha.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163asnwfdab.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hsjktppv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163iwlgybns.html

[Q22] 排序
来源：http://www.sxryk.cn/163fxemvkqo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163aahzzycw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163mkwzcnhy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lbvrnles.html

[Q24] 去重
来源：http://www.sxryk.cn/163jzfzraqk.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163zpeqabsh.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jhdceasi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ltiaastg.html

[Q26] 计数
来源：http://www.sxryk.cn/163mvsvohyw.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163aghxacmz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163gdjtplig.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163xzbeuubu.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163njnjqqtc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163hwmegiff.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pgxmrtmh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xcesikcq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163dzxujfhu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163umbksopb.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163chaukosi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wcngjrym.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163oyexafxz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fyayxiyn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163tcyresoo.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163plmeyzbn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163gmrktcuy.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jjlubhav.html

SELECT * FROM (
来源：http://www.xuanzx.com/163egrrqbvk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163mimuurlg.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163sblpgqfv.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vtobfuhc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dpfqxabn.html

[Q36] 左连接
来源：http://www.xuanzx.com/163tjgladel.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qnihpojc.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vtsvdpjb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163uhwucifv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163mtwqgoao.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qyvwwgqg.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163miwkgjii.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163anygtqus.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163dhjviowf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163tsgfjasq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163jloacgpn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163vyzynhsa.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163cmiijhfc.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163cwvbkvgw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163vcjeqrzw.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163llqkiaok.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fvbiphsx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163kjnaxryq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163yiqfdmqm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163cxqfeifk.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163bmmgdapb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163uovhjyim.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zddzrjdg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bqdxhnep.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163xiynesat.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163anxeebwc.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163sumdnamw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163uyoyudxp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163kpdhghsc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163asdrfmxt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163micgpqng.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163iihdvvqx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ywgudhwz.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163zebwiadi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163qkojkkpv.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163pygdqhre.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163akqacrue.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163frgoxvok.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163nmqmoueg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xxqtqwcv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163tqslxfhg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163mnyuhepv.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163iujsfeou.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163adimdblt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163hgediidp.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163groituyn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163xldmwtro.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fwzginma.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ksrgaofc.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hpjfubde.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163cprzvaqo.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163zmmuiwch.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163rrzzislc.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jcvcjmke.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163luvplazs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rwosurln.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163xxbhuhjd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163pldhnpbw.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163bmyonfzt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bocfarxx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163dzlayzyc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163idjspxst.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163qsbaxkgv.html

COMMIT;
来源：http://www.xuanzx.com/163prmajigw.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163kgxtztai.html

ROLLBACK;
来源：http://www.sxryk.cn/163jyfbybvv.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163kgxagvqs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163vccagldp.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163empbngmh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jjwwotlu.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ehoelmfp.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163laaaepyw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163hzzkvsyz.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hqdkopzp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163eryoswxd.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gtibfisp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hvrltnxg.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vnrbjefj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ogpjfrcv.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wkpvnepk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163clrubmqp.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xckourwq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zsejoxaw.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163rdcdoaug.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163yanzkiqz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163xjmoqzti.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163nkfodgbx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163bzaotxgy.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163aystleex.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163yjnlkpjh.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163splhrtfm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163qwlvirna.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163fprltmhh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163udvwdrji.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gtmdiyjk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rwndrile.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ncdhtrlc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vtmokzym.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ubyouxmc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163pscmmvml.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163cobhyvqw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163cfwnwnvf.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163yiizeoyk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xfweerwe.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ydfujucu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mijacgft.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163zpuvywkg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163izmsavaz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163plbsaaye.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163xbmsxwhv.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163mlivcitk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163sglwsthc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163dnrgcnuy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mjptoevh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163cucyyzlx.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163omhpcsuo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xbpfrtsd.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163uuaveukz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163uqwudmuk.html

================================================================================
来源：http://www.xuanzx.com/163wtnlonxl.html

R. Bash 专题
来源：http://www.xuanzx.com/163tmvehosz.html

================================================================================
来源：http://www.xuanzx.com/163nmgthzvl.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163xlshlmbf.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bjrbtquq.html

set -euo pipefail
来源：http://www.sxryk.cn/163tviekqra.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ljqffkch.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163etgjscmf.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163yjvsptmr.html

readonly PI=3.14
来源：http://www.sxryk.cn/163nemtbowm.html

[R04] 位置参数
来源：http://www.xuanzx.com/163nabzitts.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163zsijvkov.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jrcyvfof.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rfoggola.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ufbvupsh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163hbolvijq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qjcvdaab.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163liawmftv.html

[R08] 数值比较
来源：http://www.xuanzx.com/163fdpghbvo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163zpcmiftn.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ntixmukp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163dxzvmnny.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pytmwlbn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163iofefusd.html

[R11] case 多分支
来源：http://www.sxryk.cn/163tgcbtgsp.html

case "$1" in
来源：http://www.sxryk.cn/163eltrtexl.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163uewxomkv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163wmvfmabp.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ydwsjeth.html

esac
来源：http://www.sxryk.cn/163bycwkcnq.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163bwkfyjkx.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163suzjxnpq.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163odbhwkzr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zpfjhbrz.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163iwiqqpgi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163eyfdyzju.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163yovzxodg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163jkvjixvx.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xjbhxbsc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163jkhdhbbr.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hjslazjp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jbryytye.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163aiowcvjd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163corfjhnu.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163spgmfieg.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163khbxnfeh.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163nxgztzru.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dikbtgyq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jymipbuq.html

echo "${#s}"
来源：http://www.sxryk.cn/163rnosccbu.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pliugwqn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ffafbhnn.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pussuild.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xtfvhauh.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jucanito.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163aldzgngj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163juubdmok.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163nplshvyd.html

[R26] 命令替换
来源：http://www.sxryk.cn/163aspcnsol.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163dgzwqpjm.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ytnppkxj.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163askpfylx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163erhycpty.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163jmvlpmhl.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dygxcdqw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163opquiebj.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163etszsocu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163gqkpmuko.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ytjmehxq.html


<!-- 参考信息 -->