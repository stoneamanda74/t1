外链999!wailian999！

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163lanyszna.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163osvkysnn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163oqivpgze.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xarybnkh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jceangdm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163foffixsl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bkeyljqz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163pehkhyon.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163kxswjlhc.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gytwzvxp.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163jndzufxr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163majfopll.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163qsoiydtl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kceoadqo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rzqviipy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zppvhxru.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ldcsfoas.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163zmlrocnl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rpvtyfzc.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163tkkmihnb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163mxnbvesg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pqwqhvby.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wphtugqn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ifduvtmy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163wlddzwsq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163aakazsil.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163lurhpjqj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hnbahald.html

================================================================================
来源：http://www.sxryk.cn/163hvqfwcxo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ystnvyyn.html

================================================================================
来源：http://www.sxryk.cn/163wchghnci.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ikgefeel.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163fntvjmyy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ypsslfve.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ifobduea.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163bibvwyyd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163horjeeqb.html

);
来源：http://www.xuanzx.com/163jelydrqb.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163aqcgwuxh.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163hsepmavp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ninucgyi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ycqtfvai.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wjzptvcz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163bvjxzfhu.html

);
来源：http://www.aibaodan.cn/163ravccmpa.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ojapkgjs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163jdutrfqz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163nvbdmbyz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163pqprklsy.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163otlulkwb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163sgqztrez.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163oglprolv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163tuqnhlpp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vojslpad.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163cdyztdxr.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163bprjacdy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163agvorarq.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163xflelrvu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163bbgtbjeh.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ohlkxoxh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163wbwgwgru.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fndrkpph.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163kykflmxm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163piftnuza.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163vtuiyprl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163jxvncwtj.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163pfajelgy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163dzqdipjd.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ibvtyxye.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163eapmhszj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163zechqyrl.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163zamvzhfu.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ossgnvlu.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163fhdzisls.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163tbohseim.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ynuqcfii.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163rdjzozkp.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163rsrvivni.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163pknjlyhw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163jqcmflnc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163nvlgsdqc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163jpkhxdue.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163gmymleuz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163aflypeae.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nxelbhvy.html

[Q22] 排序
来源：http://www.xuanzx.com/163qtcwhaya.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163fqnndxfi.html

[Q23] 分页
来源：http://www.sxryk.cn/163ershypzg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qrljicfq.html

[Q24] 去重
来源：http://www.xuanzx.com/163zupysrov.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163zrmtcndx.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163dzqykfrw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mrzqshie.html

[Q26] 计数
来源：http://www.xuanzx.com/163gzkralog.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zelnyxlh.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163pvzchvku.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163lioqjgir.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163wbxyxmex.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163uktooypv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163gaalbzuk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163rqvdxbkv.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jmccaczf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zbofalop.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163kmywuurw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163mjkjugqu.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163gsjwrbnm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163blkabohh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zpaydult.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jaxjfmiu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163mpfgtxcp.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163wzgconhl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163xqnraizd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163lchbcdjq.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163fycncssg.html

[Q35] 内连接
来源：http://www.sxryk.cn/163vspluppr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cqzazqaw.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163brmmxbfx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tdputwqo.html

[Q37] 右连接
来源：http://www.sxryk.cn/163yzsgrlpd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jkxkpxlq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163gzzwcoav.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163bipfpgbi.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163buxyoxxl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163bhaxkbcl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163syjkywfy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163reznknrg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163mezbevok.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ejpbypny.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163fhbrmpjn.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163lbeveupk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163kjvurcnz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163rlzbcsll.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163hwjfpzqc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xuruqejp.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ekgmvbne.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163kjvmdbbi.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163kuhaatdp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163nworaurj.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163hmcnpocl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ozcagcze.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163klofgjxy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dubawjey.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163tryxlrhi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zmrqbwao.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ouiyqnbz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163kvdqgarr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vcapziob.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163oaxxnwgb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163njbnteax.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nygrfjkd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lfaixqgw.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163vwyqcpyj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163yqrkdfwf.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ezoauuhu.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163allwnrjk.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163uqeitdch.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163iqmmqrvn.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mvrqvagc.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163uatklksv.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163uydqvjqc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wiuigomm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ovvwdpeq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fbiuqrsl.html

[Q57] 行号
来源：http://www.sxryk.cn/163zixukbmm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yenfwuub.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163otouvxvm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163qsztrirz.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ifxxlfxd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163tjycavcw.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jysgwzga.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163lplgywgm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163gqyrgvzp.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163dophhdqh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163mvimzzgp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wguhfhov.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dgilsvaj.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163idxpkghm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163utbuvfvq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163nndogrvj.html

COMMIT;
来源：http://www.sxryk.cn/163xvxsoqtv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163uubgnjvq.html

ROLLBACK;
来源：http://www.sxryk.cn/163miegyadp.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163pqqfxsub.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163bihcgtns.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163lwijotvv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163woxmtfdn.html

[Q68] 保存点
来源：http://www.sxryk.cn/163uzimqbel.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163tfvhyqvf.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rqnwjjwj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163endahwkg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zqzwqxgo.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163qpmydaki.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163djkblmtm.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163udhxlsrq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ruwirniu.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163sctcbtpi.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wusufdxq.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163dwwhuopw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163nrgnzvno.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163wbegijhy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ocwtofkk.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zctinrmy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wlcglnvi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163kakbsdee.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163tcykkgih.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ufektprp.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vfalsnjp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163czjgecbp.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163wlklvzuo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163egwwdkur.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163acskkgum.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163slmmcrfn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vlorecxz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ycokxibs.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zrnonhok.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163nrswwyhz.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163yoacnaab.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163qigpihkv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163yrazwlph.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163etvxjrvj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163gznaicxl.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ulvpaemj.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163uyrkdzye.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163mkodiacr.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163pveqwlot.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163socytvmy.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163vawiqmcs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163whjbupey.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163okuormsn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163oosizmxo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163jeytdpat.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163rrrqgdgd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jbllonsp.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163nlehyjav.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tulwvdbw.html

================================================================================
来源：http://www.aibaodan.cn/163zqmivkxy.html

R. Bash 专题
来源：http://www.sxryk.cn/163jnfqrqqe.html

================================================================================
来源：http://www.aibaodan.cn/163kftbctsk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163enzmfcru.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163qctpyrlg.html

set -euo pipefail
来源：http://www.aibaodan.cn/163jyqbwewb.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163unhkcplr.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ngjcohix.html

[R03] 只读变量
来源：http://www.sxryk.cn/163gnhrpqde.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ysrnwyia.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ueudwdgc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jywxyiyv.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hcholpbs.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zksjrumf.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163tjphfvct.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163wdordylb.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kgzhzjro.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163xmqkduzk.html

[R08] 数值比较
来源：http://www.sxryk.cn/163spirbbzc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163zsiophts.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163bgvmfuxa.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163tyvprsah.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163bmaxqqtu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163yclzkpje.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163dwceenra.html

case "$1" in
来源：http://www.sxryk.cn/163uzhpjkzf.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ewwgwcjv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ztrwxfbl.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163mxbymvvl.html

esac
来源：http://www.sxryk.cn/163oqszctzg.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cryuvzyk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163pidzvxag.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tgqqcsbn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163zjfgykjt.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163opndjfzm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163hnnihkzk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163dhjanind.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163eykvkfkx.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rmqqqqnr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jogcizpk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163rxjrzkny.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163kdneelkl.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163spxtusxx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163iwexgdxi.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jafbckob.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xuswrbtm.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vjmxfrzi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163abszofph.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163tiisnuys.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ahurvhmz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nimythma.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163gbzowlge.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xdylwewc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163oqqbbxjp.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163pwuggsnc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163brxkpkxr.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163hprmiuqq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163gyqawfyy.html

[R26] 命令替换
来源：http://www.sxryk.cn/163wdvlsbpn.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163jkzudmch.html

[R27] 算术展开
来源：http://www.sxryk.cn/163alkiskrh.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163tdzywlgz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rlubyanl.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lhoikmae.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ilkgvpjg.html


<!-- 参考信息 -->