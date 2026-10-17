外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163bnfqfziz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ifevzjem.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163kzewcbyz.html

[P04] 求长度
来源：http://www.xuanzx.com/163ramxtzts.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163fdtlyzps.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rxqdoads.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tijnsnyy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qvxjdpre.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lhzddbrw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163oxofmaaf.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nnslrzhs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163fgdvpbmm.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jfsmhozb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xibvaywp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ohrbxxrv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qsreoihr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163joxzzgur.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163sedvmyod.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163wfowmugx.html

Ruby: a == b
来源：http://www.sxryk.cn/163ogngmlpq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163glrrayjs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163lrjsizad.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163gwcgewgi.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ivbdenho.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163rtlgidew.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163snfnwwuk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gkmhzugu.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163slquwtky.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xuucweiq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fchfzfmk.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ffstsrek.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163iymlsrsa.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163sultcaln.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jpobijpx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wpiryrpa.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ncoyeinn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gziaehls.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wlkivnnt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xwhlxqgp.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163deorjtik.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163yqginhwd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163zxdrbhbu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163hcylybbv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163klztqzev.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163tcicnmrn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163aojfjtpc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163dwqtnpgk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163hlqucyro.html

================================================================================
来源：http://www.xuanzx.com/163fwovwhvx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163oabeadvb.html

================================================================================
来源：http://www.sxryk.cn/163pyxipptd.html

[Q01] 创建表
来源：http://www.xuanzx.com/163axgemniv.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163bnxoruqz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hpfzxibe.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163bqgahsib.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163jsncyfqc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163vbyuvrgt.html

);
来源：http://www.sxryk.cn/163dvwapdzg.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vajrgvmb.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163nodlhglb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163aawxpjqm.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zgmvdkvd.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163pdujvhee.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wnblfegk.html

);
来源：http://www.aibaodan.cn/163fzcighux.html

[Q03] 增加列
来源：http://www.sxryk.cn/163wczjjudi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163fvylpxpd.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163tppuhiga.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163cykcyxvg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wxymdoxp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ofeomnvr.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jcuzzgfs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163cfmizbou.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163flwuztoq.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163kgqrxcgg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163kvvvupif.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ermicbap.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163mtgcgbtc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ejnluraz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163yssocesd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163rsazbybt.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163fvoobtrl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kmkvpoxe.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163pxshprsj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163fltxairr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zwumdvxo.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163aacorzcz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163rwsegams.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ynpcrwth.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163jrpjcxqo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wqphiadv.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ufcajtcn.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wzknfqbn.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163pawcqmby.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pxiaeycv.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fvuimiuh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163gkdsvpmh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kggqxtso.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ibfgzvjl.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kvxxvero.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163pxavywnu.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163xdxdlrtb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163dxqtdtrq.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163pdjewkal.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tmyxzska.html

[Q22] 排序
来源：http://www.aibaodan.cn/163blbbhjqf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163pytdhntg.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xboecxll.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163pjydaxkw.html

[Q24] 去重
来源：http://www.xuanzx.com/163juipzfrh.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163lznqplfs.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163hmqhyewq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163plajnzhf.html

[Q26] 计数
来源：http://www.aibaodan.cn/163jrnzahfo.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163fwmzlnua.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163bmwgcjwp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163tlupllyr.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163cdpxcdve.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163gysfdyss.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tkanccka.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gbvbtspp.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163oaeqducj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tgdhmvzx.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163unzdmxwe.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ujayfzgt.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163utwrqllv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wjqkepdz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163qmrbvdeu.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bfekxwkt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163fkzdalia.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rxgrvpkw.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163uxafjncs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ozwlwlnt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163grypfaaa.html

[Q35] 内连接
来源：http://www.sxryk.cn/163gzovyjqu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sekwokvk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163derhqhjd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163asasthbk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163cjgzcxew.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jgwpfwho.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ogbcwvyx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163kootuvfj.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163vpkyvhkn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163lblybnoy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163fyjbluet.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163drtpfskx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163uzsguuoq.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163kjxbqlrn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xpyiillk.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163oywxyizb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ajolrlbo.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163jctjmios.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163rdnoeuuk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163nvfqpqat.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ydixecgx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cgsbacih.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163vlidccom.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163iqtgcsym.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163nqeqxsjg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163acfjphxm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163oggzkudg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ucgqorna.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163fjeuuplj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163rbsvsypt.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163tnadrzsp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ueuxcnou.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163pzecxfvv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163srnqsydi.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163quteznwe.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163yhmpjafi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163foosrulv.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163qmrblnfg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163vuuzbtpp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163oboqzspa.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163eivztkaj.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163rafetrfz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163johadwho.html

[Q54] 清空表
来源：http://www.xuanzx.com/163bjikdjqu.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163jowtxece.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163uwkqbvpq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163hznfpvnf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163yafygyml.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ltsvkrwu.html

[Q57] 行号
来源：http://www.xuanzx.com/163fbndeefc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ldrstaqo.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ypfryqnq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163erwqyhab.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163tztzfird.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163prdsbdto.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ewaiozkj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163slgzzjib.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163gsbssver.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ixwiltvs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163lugyjqut.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163mnzlbrxc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dwjttwhe.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163wywuocag.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ngpjhdwu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163jnubnrln.html

COMMIT;
来源：http://www.sxryk.cn/163jkokaumw.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163yaajiwiu.html

ROLLBACK;
来源：http://www.sxryk.cn/163eyqnhzoa.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wkbycusg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163mhwpxlpl.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163sbvyxpde.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lklkqgtg.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163hszsetzs.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163twmtwpum.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163sarmnhnd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163zukxvmhh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163vzuswiyo.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xhmdkhnm.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163hijzlanb.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qryzknxa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163nhxhhsea.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163pszzcfph.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163zvcsfsqw.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ybsfawvl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163sutzfoyb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163vkqwuhds.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163oonuweiv.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zzrefkzf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163bsxiyhzy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163fwvynkge.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jgowhtta.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163slfmzdth.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163rvfrtjwt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163xzddvlbk.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xqsuaauo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163vykigacf.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163rjuiqjkh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jwtvlqlz.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163sfylkjxl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163frnvzwsb.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163wyqztlwl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bfvfrqwe.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gddfcttz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163dqzproan.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163yrtsohtw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ccelcmws.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163cqwlixhp.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163bfhdyyqr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163brqwyqzi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163vcrbvtmz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mueyvthx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163yrczsrxl.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163lbsbcbul.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163gqjqduaq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163alocuycm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zfiuzluk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rjaquwhf.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163tqorvqzx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163cgpuvaua.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163vxqdlmzp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163sfgyacop.html

================================================================================
来源：http://www.xuanzx.com/163yubmkcea.html

R. Bash 专题
来源：http://www.xuanzx.com/163nxubznqe.html

================================================================================
来源：http://www.aibaodan.cn/163grlrzqpm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163aicjdwvg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163otkvieec.html

set -euo pipefail
来源：http://www.xuanzx.com/163epkuulru.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163fvdkqqwz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ulpydzat.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ikzzcgsr.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mhjjcfny.html

[R04] 位置参数
来源：http://www.sxryk.cn/163khpzglqa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163qvxonqqw.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163nwqpzdke.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ntndlxtc.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163jrhsqtvg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163uyxymmms.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163lfsycsgt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163yyflxord.html

[R08] 数值比较
来源：http://www.sxryk.cn/163lvohjfgd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163dparistx.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163dzzaexoo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mcvmaerk.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163aczuioin.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163swxukgmk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163lqstskba.html

case "$1" in
来源：http://www.sxryk.cn/163bgjghsyg.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mfvunvkx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ymbnysvr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163rkyydaml.html

esac
来源：http://www.sxryk.cn/163fwkcwfup.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fdgmzzfw.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pxuyaaat.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163agqgxdss.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163mtalxjty.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163dmcbkhff.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163joakqxmb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163iwjluaih.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163kayzxwap.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163cwxbeyoc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163beirffop.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163jdjqrazx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163obovwcun.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163mcoemvfu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163emqwqaga.html

[R19] 数组长度
来源：http://www.xuanzx.com/163lnzfetjy.html


<!-- 参考信息 -->