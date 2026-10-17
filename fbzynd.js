外链999!wailian999！

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163pllgpmhk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163sqwramxc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163tiahxbkf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163endukjqw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163yuaumrtd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ftxgcsrc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163vfeorxkc.html

Ruby: a == b
来源：http://www.xuanzx.com/163svvgwoyg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nhojxtln.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163szdztpet.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163eilohgyf.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163pqtnfhzh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vhsvjjfw.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163majqpbbo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163pwogfdhn.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ehvdrpkn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ryovsexg.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163cfbvnblf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163mdaniuml.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163efuoyoee.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ieovnwir.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163boedqarz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gdnvtjgi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xgcpkafc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163wogmsbru.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163voetuxpd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163fdorfeaa.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163arihwkcz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163thlbbjox.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163bjjctjex.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163unkhqaxg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mbvhtekh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163cdaonxdi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163oxrrckzc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vbrarjxq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163eadutslg.html

================================================================================
来源：http://www.aibaodan.cn/163ihsmhxma.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163fgbgenpo.html

================================================================================
来源：http://www.xuanzx.com/163nlvvdbil.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163nfpwuvju.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163lqnsdnvm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lagqccat.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ufulqoec.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163tgiokzqt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163qxxpqxia.html

);
来源：http://www.sxryk.cn/163odpngdma.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jcviwiwc.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163xkwjidjx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ovrbkcxe.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163vxvtdxdy.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163jtlnfhig.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163npdnxkdy.html

);
来源：http://www.aibaodan.cn/163ivwkifdt.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ahqvcmal.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163sjeozagc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163axjkcfbm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163joudgmjq.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163tmlrbcch.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163vjkdrpap.html

[Q06] 删除列
来源：http://www.sxryk.cn/163pbcguktz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163inrcnwnj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163cfhzzqqk.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163kjyoxsth.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qbhmtiwq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zdyxbifl.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163utwizalr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163gyutgcit.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163braqusqe.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mvxyhqas.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163udfcgbpb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163dbdlytin.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ywlbhnql.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163lqofhvyi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lvdfgrxa.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ezsqhfzt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ivdlaoro.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fgiycbna.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163drbgmjqb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163umsicgvd.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163vitrbssj.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zzrisvym.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mvhiyseo.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163awcftnyh.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163beoizyxe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lqxpfwsr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163cxzfhuss.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163bsqouvsq.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163dfbpmsxg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163sbnorxhi.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163msvxvkmu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vdbdeauh.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163spobqhtg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163qlbjcnrn.html

[Q22] 排序
来源：http://www.xuanzx.com/163wuxxpcid.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163nmgtxkju.html

[Q23] 分页
来源：http://www.xuanzx.com/163gfzauwyq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163xvnesuqb.html

[Q24] 去重
来源：http://www.xuanzx.com/163iqgjtumd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163zecnblew.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163uflmvgvn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163anmfrwtw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163dmehorko.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163fezrvimr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qqcqrzsq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163kjohofov.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163irgzimhl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vdalqpjb.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163tyqgrzzn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163sykdiwwp.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163zgpkjzkq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xqdcskcm.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163yzizyckg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163asdorkha.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163rzoodhto.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cgounroo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163lpbqkipj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163tgaktrvy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mfwjftsx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163tdaumhww.html

SELECT * FROM (
来源：http://www.sxryk.cn/163djdusgoz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dmcdbhal.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163hqiaxgce.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hufephqk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163clvhpwxs.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fclvmvci.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oojnnkko.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pqwjzhqr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kocyfilf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163rnwlmcqa.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163tncgudfq.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163lnrwygqc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163knasimiz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wymqshey.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163kfdjnuzh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163aifsnhse.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zxyrzpyx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163yqwtjjqd.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163eitchijv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163uaynwjpf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163zyccprog.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vhaizwtc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163qiguuawo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ywyvzkeu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163jmytruxl.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163fdduimil.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163oxjcpfnz.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163iyajolxd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hvytcint.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163bxmmnpql.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163juxcsawr.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163dxjmsibn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ikjzdwax.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163xftwskfk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163owbpsfpq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163hnwejilw.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163grzkeqym.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163dzzgdixa.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163caprskwk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163faxvbxnv.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163emsfyqdd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163skbkwcbv.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163tcblaswf.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163kmswydzt.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163jjhpxkzf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163gzgkcmiv.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163mmotcdov.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hkbqkick.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163mrbuybnw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zivbodgl.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163teazbrtw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163fwomuarc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163lnpxbplv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163scpnhwmk.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163sygzgpof.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163lmsztafg.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ohyqdfxn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163anstzvzw.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ihkckpyj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163gmvwlmdp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163qaeyygiz.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jxujmekk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qgkqveqf.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pjfvobhf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lzkyrsim.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163rwiwuusk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163oadeupdj.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163lvpbxddo.html

COMMIT;
来源：http://www.sxryk.cn/163ifukhvxa.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163lykljzej.html

ROLLBACK;
来源：http://www.sxryk.cn/163fwswgrxp.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163kppdvvvm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163mcibahab.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163lampmkcm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gmeaedrf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163wlylixge.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mzwroqwz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163nftnmtnn.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163spbpzopf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163sbxigdve.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vndsfcrr.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ogsccggl.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vutyfvzp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163cfvygsdu.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163zgekzcfu.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163acnwtmnr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wkgqjwvk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xsockkih.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163chivpjlx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zifwzrej.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163bkyqjwpw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zpkpdflt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163musyqmnl.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vrczrgog.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163omncjbdc.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qyhauvgl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163nhfdowug.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163pcpzyzfm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163swtdmcwu.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163xjblyqyo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pkuwjpxb.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163jsxgaeoi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163wqmqcakd.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lpawlogw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fmmvfbos.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ffdclmia.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wpqwtkcz.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163eguutyri.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163yvgajors.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163yvnxbrxa.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jbizltqy.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163tlwaatlq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163gdlbzcyl.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163nsodcrmd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163qvxotamq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163izgbgclz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mxvwuhve.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163znfolgob.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163econtavg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163upjefkzj.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ovhwovky.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163gjrkfitv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163izskheyo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163jcgrfugc.html

================================================================================
来源：http://www.xuanzx.com/163azkbmepw.html

R. Bash 专题
来源：http://www.xuanzx.com/163mnvjjpov.html

================================================================================
来源：http://www.aibaodan.cn/163xhvufazw.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163sipvxvye.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163iyjzwery.html

set -euo pipefail
来源：http://www.aibaodan.cn/163yvkaxzhh.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jxqhpigx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hrlknsfi.html

[R03] 只读变量
来源：http://www.sxryk.cn/163fhyqvzzd.html

readonly PI=3.14
来源：http://www.xuanzx.com/163bkqsjzjn.html

[R04] 位置参数
来源：http://www.xuanzx.com/163geodvchx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163yferuajm.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163smwphigo.html

name="${1:-default}"
来源：http://www.xuanzx.com/163cshcshmf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tntobpuf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ncgbiyws.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163uqnwapjc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163eryhwyrq.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163onbxjnzg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ejcmtoco.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xsbpoalu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nqanhzbb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qyxugndt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vwdedrga.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163wirkryqd.html

case "$1" in
来源：http://www.sxryk.cn/163ajtckdun.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dmefqpnh.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163kprzendq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163vuphwypy.html

esac
来源：http://www.aibaodan.cn/163muuqmzxe.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163bcgaxmaq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163sdxlgjmw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tgemsfgg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163waetrigz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163mcldsgyo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163huuokmjv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163zmbmqzjd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vxwobbbj.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163sdaoxnay.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163bhdmldyh.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lsgsfjvv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163tgztbdyb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163kekacbzs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163yentdyum.html

[R19] 数组长度
来源：http://www.xuanzx.com/163hslcgbmx.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kylhzaaw.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163bzqdywyc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163gjmhdwsn.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163wvgyezfg.html

echo "${#s}"
来源：http://www.xuanzx.com/163bevxdtrb.html

[R22] 截取子串
来源：http://www.sxryk.cn/163exlpvnre.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163enstewiv.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163gjcqtfkz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rzlejvvd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163fixtwjwl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163uxzgsbyc.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gchzetwp.html


<!-- 参考信息 -->