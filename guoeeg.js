外链999!wailian999！

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163pkquvrvm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163naglonoy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163zqxxcbbr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163bpmebkvm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tqzqlkdj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163bzyunpin.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tjxjdyxf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ckyzdmfj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163hokszxaw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ytpddcwu.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163usmwzati.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vhfgwqeu.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163oxvpejff.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163loetbzjp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gkqzenua.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vbnrvoiw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ugwmwwiw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163pwrtruyz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163dlnqmnsu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ktbmkjnk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163nizkafwv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dwjkaozk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ivuygvpf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163fouhtjrv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xkxpykra.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jwbctpuj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jeqmimdv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163malyhzpn.html

================================================================================
来源：http://www.sxryk.cn/163svrclcri.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lcbozbvp.html

================================================================================
来源：http://www.xuanzx.com/163cyligjbe.html

[Q01] 创建表
来源：http://www.xuanzx.com/163xlpjnwti.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163nftegbbf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dzgbphgo.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163qvtlzgfb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163bhbvohqs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rzqqlcux.html

);
来源：http://www.xuanzx.com/163mxpcctls.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mvgcxowb.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163tujlerid.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yjmdefam.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163iytmwtov.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163czeipsrr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163anovnrtp.html

);
来源：http://www.xuanzx.com/163fiahikxo.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163knvtgatd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163quqztmix.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163wrcghksm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163lzfgvkig.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rjiwrqmv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163nvofxbxz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163qpwadhfp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xgdfgesn.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rgphrwux.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163sszkhcya.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ujkdvklf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vcadpjkd.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163mnwphuxe.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163lxejxkgp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xybtdlsk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dfujqscs.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163movcegdw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163tyhsijej.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163untpefxt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163wwevrdxz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dhilxkzq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163bqrcoijs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163tzuzbtpz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xomtckzd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163utkuuidj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163gpeilsyi.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163rooheyvy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163olodnxtk.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163dohjfifm.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163lhrofwqx.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163lnlxiitw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163dldslhoi.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ucaddxkz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163uenxulqi.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xcecggoe.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bmfszegt.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163fvwvhpgf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163msoujqca.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163lcjtdshh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163tkxnszva.html

[Q22] 排序
来源：http://www.sxryk.cn/163gnobgsic.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163wnhwpioo.html

[Q23] 分页
来源：http://www.sxryk.cn/163cwprjlhx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lnppltaw.html

[Q24] 去重
来源：http://www.aibaodan.cn/163csmcqxpu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163lpsfhafx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163izvhrfwj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163nhbfnasq.html

[Q26] 计数
来源：http://www.xuanzx.com/163euqqqhkv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163yhyzeehk.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ncswdxbj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163teswxtrj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163xavkknhg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163usbsctyf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163sbjkcxyt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163trepdkwj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163staxyypf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163agnikpez.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ipanqfzv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163vjrjioks.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gxmtssem.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wjtsfikn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163nldsggad.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ipwjmgme.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163alutksgx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163wmstqybl.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ghvqnsqt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163oqgvjbji.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163qpjbmvex.html

[Q35] 内连接
来源：http://www.sxryk.cn/163gtddcngy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163fxbhssfk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163kmhmsbnc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pupmrijz.html

[Q37] 右连接
来源：http://www.sxryk.cn/163tvrcshyg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qdrhojvq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163xwplfmqx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163auhcrsfk.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163yllnxsib.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163dkrjmfhu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163lasbdixc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163hprcnfio.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163fyrixeck.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163njyqnnum.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163bnknvrhe.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163nnsszoyh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163eulrzzwa.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wcmxwube.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163qvlkfxrm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163zarvtbdi.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163betvjlrm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163xjnqexno.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163enwvfaqe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vngjmvax.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163sxyaneei.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ewamcjbq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163stogotkb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163txbhzuby.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163jzxqggkt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163bntxudfu.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163pkkcdnqq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ekqqkfna.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163pyyrwzgc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jvvkvwhk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xhbwuqbd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163vlqrdadp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163owyqvjvs.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163sritghlh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hxqxnqcl.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163qaewqbgb.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163cnebjave.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163gdfseqok.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163dtytmscj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163tisefscr.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163orzrcjms.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zyrxkmhs.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163urvqwgfo.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ogknuuou.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163pcyouavk.html

[Q57] 行号
来源：http://www.aibaodan.cn/163nakrbueg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163uubzurpd.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xwuefawd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163hpuqiczj.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163phpiaafo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163sihbutav.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163qgwhzdxa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163fuhuwklu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yclfowdx.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163pdvyroqd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gzygcvxx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163desqbeoi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163brycmbbr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vanucjmz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mpsowpoq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163lnvsbudw.html

COMMIT;
来源：http://www.aibaodan.cn/163dncqoqsd.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163avnjxmbj.html

ROLLBACK;
来源：http://www.xuanzx.com/163csnpslzr.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ldoogpcm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163hrjaiboj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163vormaggh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dhuxrosy.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zjlyfujw.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163fphdworx.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163usiomloh.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163wadclvkq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wvqhtcwe.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163iotxafly.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163poaqlqvc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163oiqkakdd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163frnvkamp.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163kdaxhsge.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ztkntrta.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xbttxrsy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wazyyedq.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163beqwjzfh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ypnrihay.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163barpbfuk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163unccpxqt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ipylpytt.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163emsoraah.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163aacbeiae.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163egegnblt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163peldumeo.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163vltcbtcc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163kcxelzzz.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zcjgstjr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163enovjsye.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163yobnvfqi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xuhaxqxy.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163rdxonjgw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163xjciuqij.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163zlmebsxo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ghzkezgb.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163pqjvyqqa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163agyutaga.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163abwvxvbp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163kanryocq.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163bmyxicem.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163sapfggaf.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163rmmpcxqj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163nkgwzuqf.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163tjdcnuxa.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ourkpzep.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163gtzgftgf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163adjsejvw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163jwtbouym.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163vjywaikf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lwgsxsoa.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163qofhidkm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163hwwvlopv.html

================================================================================
来源：http://www.xuanzx.com/163rimvbbnt.html

R. Bash 专题
来源：http://www.sxryk.cn/163uxvfzmpc.html

================================================================================
来源：http://www.xuanzx.com/163jhpdmjik.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163htbdxlwj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gqpwuftr.html

set -euo pipefail
来源：http://www.sxryk.cn/163mdoqzqgd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163gekgkjtl.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163diagyknm.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xlqqucmv.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zetuxuju.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ahljnpxw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163uwadpsnj.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dzrgcoxd.html

name="${1:-default}"
来源：http://www.sxryk.cn/163apfxewfk.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163pkvfpuap.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163exyxvlrw.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163almzwnqk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163eoyzhydv.html

[R08] 数值比较
来源：http://www.xuanzx.com/163aqikbpug.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163iivpwrok.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ykbcsbvu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163aaqlwons.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163soimxjni.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163zmxyrxhw.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xgagxmli.html

case "$1" in
来源：http://www.aibaodan.cn/163oqetrtsp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163csjxafnc.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163meuswizs.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163vcohgnba.html

esac
来源：http://www.aibaodan.cn/163vwbewxcv.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163pnqyeaot.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ffazjyiw.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nlptyfra.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vhqiqfjh.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zxletbmf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ivgkcuif.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yuvhfleo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jqpdtaom.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zalhpjok.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163amdumjch.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163mzflwefl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163lyauxkfq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163klsifnls.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rfmlkkvj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163bdybubvh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ogchxpgm.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yoempmpm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163fcmffiob.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163oxstspai.html

echo "${#s}"
来源：http://www.aibaodan.cn/163wwdorhvz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wvqcleus.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163bcubmtyl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163igczwdfe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163xvcuzgxl.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hcgusnyk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163sqmykgpt.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wtmigyha.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qoayvvla.html

[R26] 命令替换
来源：http://www.xuanzx.com/163dogcogkc.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163tkrdokip.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163rhtuhylc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163udybtvbl.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163uopbsfjd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ddwhzsqe.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163yiuqunlv.html


<!-- 参考信息 -->