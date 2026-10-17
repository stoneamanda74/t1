外链999!wailian999！

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163cmxfnanz.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rnzswuyc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163olfpkwqx.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ykmswvlt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yqnxjjbt.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ltaawwqp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163elvnywus.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wbdjnghv.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qprpqghi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bpcvhxxq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fwwvnexh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gdulqkra.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163kqbznjlk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xuvmidpk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163cnzogkvz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163yntusokb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163gljgtssc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ecubesck.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163fvpruiio.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163wrfzannu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163teuauidm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vyhvtjyi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lpdqypeq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jivlluxh.html

================================================================================
来源：http://www.sxryk.cn/163cvcyqubm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163btwtmfyz.html

================================================================================
来源：http://www.aibaodan.cn/163fwtoruco.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163xbpuacgg.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163cwydliuf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hugxvael.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163cfrxxrzu.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163krzozjxj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163rnabtjka.html

);
来源：http://www.xuanzx.com/163rwpubajt.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163fvymvnjx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163wnmaxcpt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jbyuempk.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163niibsovk.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kodedzxx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163cfsjthkb.html

);
来源：http://www.xuanzx.com/163muchswtm.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ckxtzxyl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dwaxjgvx.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ifcgmqma.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163bgjogufx.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qvrbsurw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163oqijtddg.html

[Q06] 删除列
来源：http://www.xuanzx.com/163iiqttlnl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bewdzrrw.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hvkhecsu.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dftzqtvs.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163tuyjgxro.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kouxicvw.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ckfmrpmo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163xbzmcyjv.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163pglxyrvt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163eocbwurb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ijzkztwh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163fmpibaxe.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163bpsxulff.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163byfhdrqx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163venhcnde.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qnmspwuy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163obmppuks.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163bcxtmvfe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163bpavmlzo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163niohpvqy.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163tfjkpukk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kvzgixij.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jrnqzxfo.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163cxkmzkgl.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163bqnknigb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qdhulzcz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vuziosqq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ybnnphlh.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163efypsucp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163tbjavsyq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163sfbiaxye.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163onlwximu.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163hxeunxbo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163xvocunvc.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jqshckgt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163yxkpgary.html

[Q23] 分页
来源：http://www.sxryk.cn/163oxlprydg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163uhfxemwu.html

[Q24] 去重
来源：http://www.sxryk.cn/163tcbbmigy.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163lghqdgjq.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dkjinkxh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163qqgsitct.html

[Q26] 计数
来源：http://www.sxryk.cn/163jfidplcr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163fjuajrxv.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wurpxwlt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163xfuuosrr.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163kbmktuvi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163btthtkcp.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163oaovwghe.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xgbjhebx.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lfnervqr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ozfvqfmx.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xnakeqkf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163fdwrxagd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qyoyjmyh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wtwkmorh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163zqkdizzd.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163sdfbdnst.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163lftnhchh.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163nwxmpvrt.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163vvseabzi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163imfsusqt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163yemxillf.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dxfveyyj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ngjqmjlr.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lfmqcuft.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jvabfkcn.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kdvpidcq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163eflbeiua.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163egwoddwf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163gtdqtyti.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163tdootxut.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163sqojhinx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163sorujpvs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163wsjnpgvw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163xrqtvimb.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163nvurvuyg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rdbkeuso.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163trapzbmb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163rgovxyjl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hqpdaehx.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fynbehvd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163pwukzkdq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mqazrrov.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163shwsamjr.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163dbmdatmq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tsrztanf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163rxgeteuz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pzgxgavg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163rksytlou.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xksdgsmg.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163wnnltott.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163tgvmvqlz.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ukyehysz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ecwkarqu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163mswfxker.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163qzcepdca.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163xcamhykt.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163vyvwjdmo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ntqwznhi.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163vgnzxbnh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163pdzxcylg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163uddraigy.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163swnacfok.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ybsjxuau.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163pggpnopy.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hnetnkuc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163svlmkyub.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163dyafoqga.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hbhlcltm.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ihvloklb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163wgpvdfmt.html

[Q57] 行号
来源：http://www.xuanzx.com/163eczpyrmw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163mdabqtjc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163cawojpny.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163aslgqeew.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163kssbcuml.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ztrfpyns.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ixsqhwpq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ikqrcnnx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163puwklgvz.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163chbrraxv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163dqnkvvgx.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163natkpsjb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nrujdcaa.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ikskolio.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ljwmmtlb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163rjqdhfcf.html

COMMIT;
来源：http://www.aibaodan.cn/163qacbxgrq.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163dbjxuozo.html

ROLLBACK;
来源：http://www.xuanzx.com/163mmtphnra.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vzlisnrv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163nlyrguqt.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kxppvbus.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163eclrlwza.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163yawdgghq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163yzyzspzs.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163cnihcdnk.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163sctdznch.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ciysadgr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163nwjletkd.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163nnlrutzt.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163kyilrpek.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163jpqdttuq.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ypjxjara.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163kjptaimx.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163txjbmdcn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ekvxgdfq.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163bwelpovy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163esnjpbkn.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163zskadupj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163xbyqnean.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163wgdtxyfn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163qyiaxxeg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163nadrfqkj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rgubucbq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vtubjibv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163nuufpyak.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163myznvvkm.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xerawjpi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163mtkpyxfd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hbuzgauf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163pqejwvqz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163truukybh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ouelfjvg.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163skipzbus.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hsxuudmj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163cpmhfyqb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qaqauxcf.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163konugwop.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163exsbgjaj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ajbxgrey.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163nppkqlse.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163otndvizd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163xuelmuij.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jwylkaeu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163mapigqht.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163dsjhrcce.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ckwqrtvk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163atfxcczm.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163nvewffgg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163qxkdbyvq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163tsmruslu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ipuulexh.html

================================================================================
来源：http://www.sxryk.cn/163kurordni.html

R. Bash 专题
来源：http://www.sxryk.cn/163bgeexhzw.html

================================================================================
来源：http://www.xuanzx.com/163jfdbabro.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ksvtfduv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163lwpjoatu.html

set -euo pipefail
来源：http://www.sxryk.cn/163uthsgoup.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163gbicrlly.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163bzcoyamu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163cxtzevlc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163xzktxzdt.html

[R04] 位置参数
来源：http://www.xuanzx.com/163iqewsshd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163obqvbtnm.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163kzwiabtv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163parvtwys.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ezmlthkd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163nvesfttv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163pqztcwma.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163vrympqle.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nxocxodn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163tejkemmv.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163hengpqoh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ltqlzbgg.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163sjqnnclb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rmgoizui.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163crwzjaeo.html

case "$1" in
来源：http://www.xuanzx.com/163ihwzwlbb.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bnashyvg.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163jgjywpah.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163tdohrzkv.html

esac
来源：http://www.sxryk.cn/163duvmxpic.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163zplcjvch.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163myrwwuxj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wyqhvjqm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jzclcara.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163thcwfvym.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163lyogifqh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163hnrgsjlp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163imzdyenw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163vfccfvnx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ybistbyk.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vuvidopo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163sxlldpur.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163aonqxaab.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qobszrll.html

[R19] 数组长度
来源：http://www.xuanzx.com/163aefqchzz.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nqacdxnx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qlgixjqx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ywbqlnor.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163uhfpdajr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ohnufobp.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dbmhuxhi.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163lpyamnmi.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163lrbpnyrn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163xnwzrtob.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163xeqpluut.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163zzwuavxi.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ttkhnqip.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163pazzawtl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163tvmcaqty.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163chhibnnl.html

[R27] 算术展开
来源：http://www.sxryk.cn/163yyrqesmf.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hyfmshxx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163aexbfnaf.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bjmxijqp.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163nxofxnqn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163oonezbzh.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163eptfeqms.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163lxgdwjuq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163oetlnwid.html


<!-- 参考信息 -->