外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163tiojunxu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ouyjyoxa.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kfnjvkfa.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zfhzzomq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163bccchgpt.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mkpwkppt.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163mqumvheh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wauziqns.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163eavkmwqw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ewoiqkpp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163agmntngr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qtwzrukx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163exnjnviy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163sywrrxzj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163hsqtqzbq.html

Ruby: a == b
来源：http://www.aibaodan.cn/163snywydmn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wofdlcdd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163coijrzfq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163vdyjvyek.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163cjipyqfq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163coicpppi.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163mftbqxse.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dvwovzfp.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163pmbhpufu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163gitzjcsq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163luruovlf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163nfdguukx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163dgpgidge.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163peyhemrk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163slukbjqi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mnyowyly.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163uarrbkpc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163tsbkqjft.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xvhebzof.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163joghkull.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163tltxmqni.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163okovwrcz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163yvwscbjv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163julluziu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163uvorxzao.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mklssfiu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163kpsjrwbb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163sdkdaysb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163olojvjkq.html

================================================================================
来源：http://www.xuanzx.com/163ambvofxl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163crsdxcco.html

================================================================================
来源：http://www.sxryk.cn/163bymonubn.html

[Q01] 创建表
来源：http://www.xuanzx.com/163jsokjved.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dnbrisij.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qbwcuuqs.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163parfyygh.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163chjxarme.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163cbndutye.html

);
来源：http://www.aibaodan.cn/163baeboysw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163measiwpi.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163xiwqyzqc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xcscacdo.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vczvxqsm.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163nnayzssw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163iwidvjij.html

);
来源：http://www.xuanzx.com/163wnfcnwzz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ohussaxg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163wltpbfam.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163iqbngdcc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163pqddkqwk.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163evjlpyqn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163uengitue.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qyrylfia.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ksyvzjwc.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xwowanfy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ytvktgbx.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163cqzhhqvk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fcgizwtd.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163klilepda.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163sapmfjwp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hahdqwbq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ospzwzfe.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163mrbgrnbl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163fxfydgly.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163tiftvqdx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zkofiosl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163bmmwimzm.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163fqjvcbjo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163rrbbugjk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163canctplb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163idrtqwoj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163hbbepltb.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163xcntloct.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qfkntmwe.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163admjcqjj.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163yuogrpcu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163pllyowvx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163gdbowocw.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mwdfozkg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163thljkros.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hycjebey.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ggjlhdkw.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ninkiduz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tlfdhlsy.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ffvcgaka.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163tplpucxt.html

[Q22] 排序
来源：http://www.sxryk.cn/163lsbwlsjo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rfmrsfyn.html

[Q23] 分页
来源：http://www.sxryk.cn/163ybuswlsp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163bzbslgsw.html

[Q24] 去重
来源：http://www.sxryk.cn/163eqlilhyv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163hbspmyri.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fridiyrg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163zjdaqyfc.html

[Q26] 计数
来源：http://www.xuanzx.com/163ekeoloaz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ncrnnwoi.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163zgzoqhut.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ikcvegpy.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163fjnlyfch.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vzlbkzpv.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163yeyqltnz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ogucdula.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lkodojie.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qtdcyhyd.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163vxlzjxll.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163nvcyogcn.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ijspjnas.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163athnpnzh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163fozdooqj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gzmoogbh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163yduhfxfa.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163mipqvnht.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zuyrafmq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163likjsuqt.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qobfzziv.html

[Q35] 内连接
来源：http://www.xuanzx.com/163qvkovrjn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rsghodcp.html

[Q36] 左连接
来源：http://www.sxryk.cn/163mkirtcti.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jqfjoaib.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163arneerri.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163fhvjpjjd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163lyqoikac.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tfnhulqp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qanoqoky.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ikeruirn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163hglepggk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qrbmfbmx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163npwgpaax.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163pbxpofyg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163lspbdkcx.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163fkufiwul.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zdapphad.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163gxglbzpt.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163gmbgqksi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163lbvtoimm.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163kamxpjad.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163frdrazuc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163mekjcxjb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163nyvoernj.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fcwtskhc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qhacetuz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163cpbyhqmw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yadraizt.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163pxchlhpq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163dgvqbmrd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163unarztvy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163uzzdnxml.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163lyipwcsg.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163alvawefm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163saweiunm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ufigcgqa.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163adshiaxq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163cnnemrgw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163wecmtkxs.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ulbbmpmr.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163awxomokq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ohwwnyzi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163qqxukhcw.html

[Q54] 清空表
来源：http://www.xuanzx.com/163rphrqfuh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qkinhzjo.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163jorzufxm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163pcuycntl.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vrmnqega.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163okwlyiue.html

[Q57] 行号
来源：http://www.sxryk.cn/163gijnpbzn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jupxeapu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163fgjfusqz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vhvpkqpg.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163gvrebejd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ijarrhhe.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163nalkqqrv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rrbdffnc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163wnlmyxgp.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163rqnwicrh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163cuajzlnl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fubvacfv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163njjledmf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163wcrvuzgi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ldydjrah.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163bakomwuv.html

COMMIT;
来源：http://www.sxryk.cn/163woxiwtyo.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163retanfed.html

ROLLBACK;
来源：http://www.sxryk.cn/163wborimwc.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gvtplkoq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163onhkuisz.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163newwfrxg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zrafrdox.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qjihccat.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pxmngqrl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163emeztnqu.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mpmgsoxq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rwlykhwg.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hevwsdwt.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163gqgywfru.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163auqlotab.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163clysuplk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163vhsryaxd.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163eiegdwlv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163dlnbvaun.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163npgwwnju.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163wpvgqfhz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163zpwmytia.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163geadsbek.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163pmzhjfln.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ortyfojn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ajfzyrue.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163iefvuugh.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163crgulnwx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163wymymrih.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163sxqdirue.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163yzdvbirt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163cjzbipoz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zmgsqxow.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163usjrlvis.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163cbwpfstf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163eixfjgim.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ytiiadfd.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pmjdjzik.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163czlagclh.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163fqefdmcp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163xfgywzvo.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wiqgwmmi.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163gaxkpnzp.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ibeayxds.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163mcljzmpo.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163uzwaizpq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163gkqfmdfz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ubbrczmr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vtvrmuzb.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163idznohoz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163dfafvwyk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163dfniwzdt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bkirkceq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163itjbtoxz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163pdrfjhme.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163jalakrlf.html

================================================================================
来源：http://www.sxryk.cn/163utzmubhe.html

R. Bash 专题
来源：http://www.aibaodan.cn/163gyfpmuol.html

================================================================================
来源：http://www.aibaodan.cn/163pagfnnke.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rkazcbrr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163rbkjxvsq.html

set -euo pipefail
来源：http://www.sxryk.cn/163nzkzzupg.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163hddulnob.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fxykmnag.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ivdpigbf.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jruyromv.html

[R04] 位置参数
来源：http://www.sxryk.cn/163wlzdkgft.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163kjwcirtk.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163byvlkath.html

name="${1:-default}"
来源：http://www.xuanzx.com/163owknxnyb.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163gmvnpbea.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jkxrtuas.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163okgvctll.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kgpcsucg.html

[R08] 数值比较
来源：http://www.xuanzx.com/163obsovbqb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163suzmnoxt.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hkqtgbwo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163pvyvzspk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ynnycbmg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163knydbawy.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163mbydthuz.html

case "$1" in
来源：http://www.aibaodan.cn/163mqqhtlkl.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163qwviixon.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163zigenqiw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qvuucsew.html

esac
来源：http://www.aibaodan.cn/163wafxduue.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163uosxwtul.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163crcepgjz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163iawhjdsw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163uheedhya.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163pdthboqd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163obrktljk.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163njtpvrhe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163yqqtleyu.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163qlwfnsgd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xzitndia.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163kloibseg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163uviahkpo.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ltbkcrez.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163olbkqymd.html

[R19] 数组长度
来源：http://www.xuanzx.com/163myjzalfb.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163znigdbgx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nvowpabb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gtmwizyx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163todjjbqw.html


<!-- 参考信息 -->