外链999!wailian999！

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163tucnaoxy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163vxsuukjo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163cgfqcqjt.html

Ruby: a == b
来源：http://www.sxryk.cn/163zytggvlt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163foitbqrg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163frpmvagv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163nxvnqoqz.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ejyhloiz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pjaylagr.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163gxhuhazm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163hhasavqu.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hmqnhmyf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ayojjcpy.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163pgryjncb.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163dxkftrdn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163zqfggqev.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ttrzqiuv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163udwmqpnk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wteddhel.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163olzbmvve.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163fothsovk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163jccwwtdk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163tsxhjuhp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163bzxmpvlv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163qioymiui.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163orrojfwp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163nlldpmcm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163cyxpmvgm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163apvzkhos.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163jhixtycb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ecmmwoqa.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163wiolbxyc.html

================================================================================
来源：http://www.xuanzx.com/163sefmiysm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ebvaguaw.html

================================================================================
来源：http://www.aibaodan.cn/163yrxgsxhc.html

[Q01] 创建表
来源：http://www.xuanzx.com/163vwavsewa.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163adxkoomq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vwpbricd.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163kpceuzfu.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ibnssurb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163okyszwls.html

);
来源：http://www.xuanzx.com/163yejscidf.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163bqjqsohl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163xxdwdqux.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gxpqzqzq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163wjchceqj.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163nfvaioya.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rxghotoc.html

);
来源：http://www.xuanzx.com/163zoxsuftt.html

[Q03] 增加列
来源：http://www.xuanzx.com/163yslguccu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mnoxqnrt.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rtrkxbzq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163renigjyg.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163oegjcknx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163rjpuwuli.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vdsepuwq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hsfvlxoe.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163tzkxclly.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163mzrefsmv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163knluwsxl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tjsqtrks.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163tjkhknqu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163rblbyroj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163rloiwmxr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qggaexpe.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tncvvqlg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kbrfzwpy.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163yzzbmuza.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163wlrxndiv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163tdiwakuo.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163fspzxyfi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163idbjmtmu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163bftkszag.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163sfzvldfh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163burckuzo.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ndogksmb.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163xrsiqsgs.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163gqmmtanb.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163gjjygmdd.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163xwqosbmj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lwdhhumz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mmgwfvya.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163dtvfdzrm.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cfffkdhf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163moadkpbc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163sfdajiyg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ggfuouho.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163fxexasqh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163aokczils.html

[Q22] 排序
来源：http://www.aibaodan.cn/163shmrbrmb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163zkbjnivr.html

[Q23] 分页
来源：http://www.xuanzx.com/163jpzokcep.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bdpzkfvm.html

[Q24] 去重
来源：http://www.xuanzx.com/163sankgwuf.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163avcvpolr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gjpfxwkv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163evcmdkzk.html

[Q26] 计数
来源：http://www.xuanzx.com/163rjlaqgdy.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ktigxzdk.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163stquszwr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163zmdwcpkj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163wezjwsqa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163furtlkow.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163soefdfdg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163oazzzile.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ixunxrrm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163beihoeak.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fayczxfg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163txbpimjs.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163aeymiday.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lvkafhhd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163eoxuulao.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163dwyfhdxh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163axffwsux.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163esbhzgcb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163kqfzpqex.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vngkcdwt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163zxzkmipk.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ugmoopjw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163iaxydsst.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163kvqxdomm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wappaups.html

[Q37] 右连接
来源：http://www.sxryk.cn/163veambedw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ptpocpyc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kwjtgift.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163grscysvk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163jevwjvcd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ntnbzxwu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163sdpvsmko.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ixrnwtge.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ajykyhyp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163yzndnfon.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gtepshgx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163azftklwz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zfhlegny.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qrqqohux.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163zfospwax.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ulomvczq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163fqnzhnhe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dmfgwrot.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rudgnygm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163oywizofd.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163eipfrlab.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pgbkbmlk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fznwkgqd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rwtlavzk.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163nvfigbgl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163qnriveub.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ngsrexqz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ctkzkhbw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qlqgqucl.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163itjixtyk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jnjglpjy.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163kozwvubg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163bngobiok.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163wnkrlcwj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163uilnqvpl.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jmnozsdv.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mmdgvywv.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163lxvxjtfh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ltlvoyog.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bmwvihor.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163chmbqiia.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ibclmbvn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163wpfzphbx.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rjussgwt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vllimrin.html

[Q57] 行号
来源：http://www.sxryk.cn/163fpdjprrt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ddndzgxu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163zfbqghwr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163wcbcgyza.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163upngijzb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163djfgbtmo.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ktyqqxed.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ivfzfufn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163zdnrwghs.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163toopvqsv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ltwpkcwh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lprwncyg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jwmyvcvq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163lufjnazd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163nsigbthm.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163queamryy.html

COMMIT;
来源：http://www.xuanzx.com/163uokaviem.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163exfdbqfl.html

ROLLBACK;
来源：http://www.sxryk.cn/163qqksgtbd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ecetitkt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163myeilylo.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163fobsbvno.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163aokezfta.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vesoufva.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mlqyncqv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xkstchxe.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163mknoalwy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163cjmuqtvi.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ixbgjbeh.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jmlrpndq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lxhbenze.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163eonjeqyh.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163kadesdoi.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xcymupap.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hzyboboz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ylefpbkx.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163vptqhocg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vwlfagbb.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163oylehhxe.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163bxokmrxn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163baqwfjze.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163cypzpufd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163csizgoiu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163gargqdqk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rthoezbi.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163waslsaoo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163kbsvirwi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163khoxkxqk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lfhcuhnc.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163novoclcx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xxejkevn.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163fuossvda.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dvduxkkb.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163cncaakrw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kcwxmmur.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163itrjkupg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ovjvewtv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163kkpjlwye.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163nrzimpte.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163hraceztp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163egegeqqd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ohdderdl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163dsnwzrzb.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wolycapn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163jxmklozp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163tnjtusxu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163pmvurqak.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vgaefjly.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163pyuonmfz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163uytyzqhq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wczlmwxj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163wgqlmakp.html

================================================================================
来源：http://www.xuanzx.com/163cemqqtyg.html

R. Bash 专题
来源：http://www.xuanzx.com/163ddkaxdbv.html

================================================================================
来源：http://www.sxryk.cn/163pjrrjffz.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163mxvocxpv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ufcjocht.html

set -euo pipefail
来源：http://www.sxryk.cn/163nonnjymg.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163flbzkbbs.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163tbpwjjyv.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hwamywbn.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zvyvkwho.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163flgtasqu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163zohksulk.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163obknpsyf.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163cbxegsbi.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163fkkxmtrw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163seqmdzuj.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163pvwbhvhm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163imijclxu.html

[R08] 数值比较
来源：http://www.sxryk.cn/163clxiurld.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wuusmiur.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qwhotphw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tqxqpvqk.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163cazosvij.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xhhpqmga.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163iqktqjof.html

case "$1" in
来源：http://www.aibaodan.cn/163ztwlrori.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163pmjvksgf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163orxmvoeg.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163clxhgvmd.html

esac
来源：http://www.xuanzx.com/163ffaxgljo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163edffxpsd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rdnondzm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163buruhspl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lvvezbry.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ijsjhets.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163skpaxrte.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wvaeqedu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163kppbryrn.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mnbyzjyc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rbpvdfal.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163wxsrgcze.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ophwqkxe.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xeuaybge.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tbrvhksq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163kfnoyyyr.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163rlubbboz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ittbbjgk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163iuegeemz.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163crfwdrjy.html

echo "${#s}"
来源：http://www.xuanzx.com/163bmcmlwqf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163pvwbutvw.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163rfdlsbxk.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163qovgzpiu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163cjtetfwq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163jgmtvlcm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ialusatt.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163fvnrhmux.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163eydfrlej.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163crhemfis.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gujqjarx.html

[R27] 算术展开
来源：http://www.xuanzx.com/163akpamwjj.html


<!-- 参考信息 -->