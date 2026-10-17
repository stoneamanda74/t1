外链999!wailian999！

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163mkxckayd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163owptyehz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163eqzqidsh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163jumcdfbz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gpqczqwg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xvraakjk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ojoxyhcb.html

Ruby: a == b
来源：http://www.sxryk.cn/163vxvtfmcf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kfvvhikm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163lqslxlta.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ueswuisg.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ybueppdy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163bxpzgaip.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ctkyfatz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bxukhypa.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gmtrxezq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163bflggqum.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163qrffamer.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nuhvjsmt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ucjgukfu.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163yilgfozw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lsgkaptt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wnzksrlk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ccjqoygi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kzkkkexl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163dasdoukp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163uqvqarcn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163dpdovqpo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fknoeysh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163trdqbskl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163yjvkdfcg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jaihgcmw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163gatqtfrd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163tlufvtxi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163dcnkilox.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ziijieey.html

================================================================================
来源：http://www.xuanzx.com/163ksyhjqkl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163pafmpmuf.html

================================================================================
来源：http://www.sxryk.cn/163rarruddk.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163wcoettzi.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163gblzwdbj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163irilfstr.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zxvvgbmt.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163fuhpkaqe.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163xqrxgehx.html

);
来源：http://www.xuanzx.com/163jdbwedhx.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163vxpxirwy.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163bxvtjfrq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cqecizqf.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163odotdwcd.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cnrxstlo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163bkuxbosi.html

);
来源：http://www.aibaodan.cn/163uonyyndy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163qtfexmlg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163hvyuquxu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163wudumxyn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163enozkxke.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163eonzlwin.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163kneluueg.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163pnwarlnx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163hjvzzqgh.html

[Q07] 删除表
来源：http://www.sxryk.cn/163jjsdkjyn.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163nsghzxjz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163huuvwccr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163tshlqtxv.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163eubzatqr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qqinadpy.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ueppvxqf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163vilotnod.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163qmcjmcmp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163uaomzjpr.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163rdpkfntv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163tsynamaz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163mxemeaje.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ybppzkex.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163rzxyasxt.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hxysfmmi.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hsesloul.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163spymewae.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163bxtjgdve.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163mxzilypp.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163froxjccy.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163grylcvie.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hgnlccqt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163dzyvozdm.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vmbakgko.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163plihseyo.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163savxwulb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163nufxqyoy.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163znmarbht.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163rdtuiutr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163nifupyfp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163uhemavtr.html

[Q22] 排序
来源：http://www.xuanzx.com/163ysqucipd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163rxaypmlc.html

[Q23] 分页
来源：http://www.aibaodan.cn/163tcoaaqdu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jvjypvlk.html

[Q24] 去重
来源：http://www.sxryk.cn/163hloozubx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163smrwpkac.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163prcvbnqy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163utdksrnj.html

[Q26] 计数
来源：http://www.sxryk.cn/163dmbrahlz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ivoxezjb.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ylsktpoc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ktltzufd.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163pjihjsvy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163zaovmpuz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163zhosanlp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163upepkxtq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163dwyswutt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163itvvsssp.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163urwessfn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hccvennz.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zjvtcuil.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cvekzvgs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xjkvamfs.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163exycesvh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163gjaizbfq.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lzqyykbm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163dgwjfktq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tslapgnp.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163gluhchdj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163gpjuoeco.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jzithjjc.html

[Q36] 左连接
来源：http://www.xuanzx.com/163loafgqzd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163psistsvl.html

[Q37] 右连接
来源：http://www.xuanzx.com/163txacxzwy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163kisulhhh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163kblyzlfe.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163cxpboazj.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163zvnhiavv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163licjmnyz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163zmayqhtq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163jaomfaok.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163oyzxfogo.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163mvmcdkob.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163dlyplvjo.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163nuxlkqwu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163abqpzkqz.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163lhhvsyzq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163welzyxsj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tlxypkuq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ytyiscpv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163orkvuotz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163fpzwdhai.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163cjdylbtt.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ccjvmiha.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163znsyiaxz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163kaofljlh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ffpgyobz.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163jcfhcdrs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163bhgrntnm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ruvsmkip.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dwykhsuk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ubxlcrnm.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163bnflfkij.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qxtqaoxw.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163mizjkckg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lycplgig.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fvrpaqzm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163wuugpimt.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163vfgwmcfg.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tkhspffi.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tbnicpit.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163eajddsmx.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163xhjfysck.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163eukoimak.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163maebwczl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163cemseniw.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zgruznmg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163wzicpfjw.html

[Q57] 行号
来源：http://www.sxryk.cn/163nkgwvqjk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163oudamyrn.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ntqomphz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163nmfbjkns.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163qbwofabq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163gseznpix.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163uilphwdl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zsgvfhoy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ncowjwur.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163odxkdbwk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163iipxvibn.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163pyjzqpay.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jdhbiynj.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163zxdfjpqq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ufqoqkde.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163cwwfxbsb.html

COMMIT;
来源：http://www.sxryk.cn/163pftbwcfd.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163xbkzikvg.html

ROLLBACK;
来源：http://www.sxryk.cn/163gunyidbq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163idrfiwzm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ajjycpqc.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163wusfiocg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163enodqloz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163hrxvehat.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163jdwblvnb.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163unytsbov.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163mscpqmvz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163xvkxgxsq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vaipqnxj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163aiiocrnu.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163hhsokvwz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163akqxgwnn.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163rqczluah.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hmuutwpm.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163bnhchpsw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163xssphrre.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wollpsla.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163zbftvmnq.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163tnbeybph.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ahvagxbn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dgkmjzzi.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163allligia.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wweyajol.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163wnmzcjue.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ioceiipx.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163oknbbwmf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hycoursa.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yzlvdnle.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ndlmrqgk.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163apqrdwpl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163gjajqbyf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zxejwdth.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163husdkfvu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163duahoylc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163vciortfl.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163cvhdtqbx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163vjslrulo.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163qjeootna.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163akhvrajz.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163schfcowu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ijeftldw.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163qynkcpkk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163arliyrgg.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163fssdzrdw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163iyfofqkx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163mkpvpcus.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163bvdibeno.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vycoyfog.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163nposnvrc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163owvhfebt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163xzpsdfoe.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163rlezogky.html

================================================================================
来源：http://www.sxryk.cn/163mfsqfgve.html

R. Bash 专题
来源：http://www.xuanzx.com/163eykplnde.html

================================================================================
来源：http://www.sxryk.cn/163qnwozgsq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163utwlrmid.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163vsiizcjg.html

set -euo pipefail
来源：http://www.xuanzx.com/163xrzhobsx.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kkfjhxgc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pxjjkrhg.html

[R03] 只读变量
来源：http://www.sxryk.cn/163pqagcmjy.html

readonly PI=3.14
来源：http://www.sxryk.cn/163xsbwfgli.html

[R04] 位置参数
来源：http://www.sxryk.cn/163cjzsfpca.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163selaipth.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ldsiaqvv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163utmfvxhn.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xhskdixl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kdijxspx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kfcknadj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163agquardg.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qcqhrqlk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ncacnnil.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163aomtpkkr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163fhwflgfo.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163fqssuhtz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163wfxnxiod.html

[R11] case 多分支
来源：http://www.sxryk.cn/163nsgwenmf.html

case "$1" in
来源：http://www.sxryk.cn/163rmnmafsc.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pbtbxzcy.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163xrkqeywy.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163zppftcst.html

esac
来源：http://www.sxryk.cn/163pxjhktal.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163qubufjyk.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ytahcfaj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fbuffcmr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163tgttedps.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163babzwheg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zgptgecs.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163vxygnmnk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163chenwkbm.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163xkzrnvwq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163dkeztydr.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xlajpxto.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163kmiterez.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vmsrjewm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163sedumgwf.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163zfnkmnym.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ukdszzdn.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jlgnvbgk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163gddscdaw.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163fqxkcwbg.html

echo "${#s}"
来源：http://www.xuanzx.com/163hxqjlpbq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xaphlxyf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ulblpxnc.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163dwowkpli.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163wkfspmwg.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163azrbnlwf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163qhzlfjcr.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163poyphllw.html


<!-- 参考信息 -->