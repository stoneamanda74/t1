外链999!wailian999！

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163krqaaywb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163pwuqjrpd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163dnzlaoak.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163spcfwayv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163itgidktk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163dkmdzpfo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163gmkasony.html

Ruby: a == b
来源：http://www.aibaodan.cn/163iaiurhlp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163anobaafw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163kdcchpuo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tiqenkhi.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ihmziarn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163mojbtrro.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vafgtrkm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163yfkjewfc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163bgkxnslq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163pckwyduj.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163pwssvzzr.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163vktedtbh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163gqyuisiv.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163fzhssrue.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wilnwgzk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vpdocttd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nkilmbdr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163sefyxvyh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163sbeuyjvo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163lapykoya.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xxpkhjkx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xzoynpop.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163hhzosapp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163dqqxvhlv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gedquwld.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163quxfqrsj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dfpslaqy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163axavgjry.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163eridjkjg.html

================================================================================
来源：http://www.xuanzx.com/163nkfziuke.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163bpvgwbtq.html

================================================================================
来源：http://www.aibaodan.cn/163uknnbqwp.html

[Q01] 创建表
来源：http://www.xuanzx.com/163cbgixugg.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jmwrayuf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bymbleff.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ajawrrka.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ipvosqsx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163yijcjuvn.html

);
来源：http://www.xuanzx.com/163xndibrrd.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gmalojui.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163idmqbxju.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jqhvtzea.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ekozhzld.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163mxzeojxt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163axgwfzzh.html

);
来源：http://www.sxryk.cn/163ujpxegjj.html

[Q03] 增加列
来源：http://www.sxryk.cn/163gvypjwzu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163sonanegp.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ejkxwkvv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163oyzccoiv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hzrjbisq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163mbxiosaz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163bissvdeo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163evvcgess.html

[Q07] 删除表
来源：http://www.sxryk.cn/163iroljgaq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wzbamrlw.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xggxfyjh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163rimzbrzy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gwyutvpe.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163bsnlyomi.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ibfybujh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163tlccnlvk.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163hipkbmul.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163pgvqpglx.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163abnhkfek.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163mbclazqd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jittogmv.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xmjrziny.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163fgpjryfv.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163emjnljaj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163acxnonoq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163xaplehly.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163gtltynfr.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163gtxxugvr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vonszzgi.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163bszfwepq.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163nsvpfemk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163dcfjdpzb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163kzcdfzkw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163cnukjvrq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kjpggxwq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163tmfzbsdd.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xnrtkqfo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tvqzfhfi.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xzktarpx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ihnweqqa.html

[Q22] 排序
来源：http://www.xuanzx.com/163fcfsyeln.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163zipqvvsb.html

[Q23] 分页
来源：http://www.sxryk.cn/163njtcphds.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163tnbqrrgh.html

[Q24] 去重
来源：http://www.aibaodan.cn/163nbrkfihl.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163uubxczdg.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163nevrauot.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ostgbrjw.html

[Q26] 计数
来源：http://www.sxryk.cn/163izlaumfn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163tmiohruw.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163quwybyrl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qampktlz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wmepykwj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163owlkkwqi.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163sxhrvfox.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163tcudgunw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xwituert.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bwcnyayy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qmrbrkvk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hzokyoul.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163sdnwshkd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uxstimxs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163unbjjjbm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vrrumtsg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163zjisvoin.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163idgfqkbq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zcqgwjwl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163drgmmlsg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163lkdmrcnu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zbjhpyrr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qcrftkbx.html

[Q36] 左连接
来源：http://www.sxryk.cn/163qkffkzkv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kcbnpkqj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163jjxqqjtb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163vikbcygb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163behbwvdo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163uzekyvwp.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163dzyqdzqx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xelhjfar.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mvghlbyi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163amdzzmwd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163mlzhcluy.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163etnjwmob.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163pjzsdgmz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ihoumdho.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ugtsbohp.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gtbonatw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vihabzig.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ntpafhts.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163bgkzwmsk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163cgfmwtki.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163uctepxgl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163mqfqjimk.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163aenvuqxt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kvaewrvk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163pdiccrnp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163csatixcv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ptkxzmka.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163hvrtmaep.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163smfeeels.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163osupoida.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163khwspsyo.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tiudqqlf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163bcrwbhbq.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nbrupozl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163obxjmxqr.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163nrpvjvtf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wyhhaozg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163aklftdvk.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lgcobtbo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kelqobxj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ogbdjhhm.html

[Q54] 清空表
来源：http://www.xuanzx.com/163lkjrcvoz.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163jyzwoxhe.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163skjflnqm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163slhcxgtv.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mnilgtqp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163oqjvlixp.html

[Q57] 行号
来源：http://www.aibaodan.cn/163wlrhaqih.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xuglylsw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163heutdebl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vsxujyaj.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163klvtsxon.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163gmewgkfm.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163nagxuerc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163vafeltvh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163xqdnludz.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163fzwivgre.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163hmosdujh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163runbvkpt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163prwxkazu.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163rpteqakm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163wvpdwyic.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163bdigrgbj.html

COMMIT;
来源：http://www.aibaodan.cn/163uchrpuxf.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163lhyhngcj.html

ROLLBACK;
来源：http://www.xuanzx.com/163ouwapdae.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163gyaptdkr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163oillillg.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163yfexirve.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163hktitzas.html

[Q68] 保存点
来源：http://www.sxryk.cn/163iepmaymc.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wztnbwyc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hakmljui.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zdnutefe.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163aatydxqv.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163fyrkgcgr.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zjrnnrmb.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ftfggzgb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kihvtvei.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163dvqynidq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163wsdfmvtv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ejxbkfee.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zzofzwxw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163fphivfzt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nixakgvz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ljrjcdlt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163xvzmhagf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163sdkexzmy.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163dqikecnj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163uffgmlhm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163bdtnmrcw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mmdvuwph.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163olgdfcqj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163sodgksom.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163xcezisbk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pyulotzf.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jjjlspyr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163nimqqiop.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rpwdocsx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jhxskpro.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ulzlboxw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163hldoryjv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163mdqxrvnf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163fbkmcqxz.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163osevnjsu.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163wazpghnf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163gtmfnqmv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fjorvmja.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163syxzqvtq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163uxfbtxiz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163vrvmfmzl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zgrtyvyz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163jgqrmbve.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ebvllotw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bxedqmme.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rhrlditr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163pxngbddq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163egyiemlb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163qfilieox.html

================================================================================
来源：http://www.xuanzx.com/163lofwweby.html

R. Bash 专题
来源：http://www.aibaodan.cn/163mdqycgdv.html

================================================================================
来源：http://www.sxryk.cn/163ynbthxye.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kywasakf.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163lsptcszo.html

set -euo pipefail
来源：http://www.sxryk.cn/163uoxgayqj.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163zotsvtqs.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163yuviiuzs.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163zqjzzcpt.html

readonly PI=3.14
来源：http://www.sxryk.cn/163swjawtvg.html

[R04] 位置参数
来源：http://www.xuanzx.com/163mevbhcnb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163kkupyhyz.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ocevflto.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rowmacdb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163cjsrtsyp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163qhioehix.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ycbethqb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163sxllbtyk.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163zviayeqa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ttmbbklh.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163mtrgktvm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yxknjggg.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163vljxejbp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kiijegqa.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163sxtfqzzm.html

case "$1" in
来源：http://www.aibaodan.cn/163xbbpevqg.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163uzvfpurf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163drhdtfkp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xzubnbkd.html

esac
来源：http://www.aibaodan.cn/163czfuupdj.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ltznaaol.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tgxrrjbf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wsnyrzgg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163eepvhvyu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163weizqjgx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ftwtthzq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163pfasymxq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ixdxofti.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tdcnnsic.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163krrouotf.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163mdsppenc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jajguzwq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bcbdtbmv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163byjbvcxn.html

[R19] 数组长度
来源：http://www.xuanzx.com/163smoxmgih.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jwgdvstl.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yzhaqibk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163opmzjwsc.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163kiysdnur.html

echo "${#s}"
来源：http://www.xuanzx.com/163whhtiswe.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163tuvmyzak.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xpunhumo.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163bdhzjkpe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163nroolpwi.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163yaxwfsbl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vljmwifm.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163iukezppf.html


<!-- 参考信息 -->