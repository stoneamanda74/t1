外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163oovzxwrd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163slljhhjs.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dwjgvbin.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163craytcer.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ljfvmffw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163eyomyyeb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wjxgggkx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163hooqtlyi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hpahhsgo.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163klwhibvw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163qdhmyskt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hwgluckt.html

================================================================================
来源：http://www.sxryk.cn/163ofjgnzwi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163uidwcjhy.html

================================================================================
来源：http://www.xuanzx.com/163udypleiq.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ilbajkwz.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163gslmmgkk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qkxpyggd.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163qkxkkima.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163djzbenjx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163stopzckq.html

);
来源：http://www.xuanzx.com/163koeggamm.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ebjzbycu.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163mglxfrhn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163brmnyzwf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163pkvccelo.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163pigjmcgk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163nvzgmolu.html

);
来源：http://www.aibaodan.cn/163lnbxtxcm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163zycwfxyo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163vdvwpunj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mkiryhxp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vpmolxxe.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163wvhgosxo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xkxpivkw.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rupvibqu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163axuvflzc.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vlleiyps.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163mbofuhah.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fijfqqlc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163xtmwvsld.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gkhnfqjm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163tnqsahmb.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163qcmktxvc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163yqnczwtf.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163bwialgtg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163epqbayvh.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163yccvgltl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163cvhvplpq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163fosflvss.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163gddtkasd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qlahtfdu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163vxyvbstu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163beczvuhr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163unjijioo.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163dsczsxiv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163sgedvgqa.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jumgpkkg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163yjypajjz.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ydfndnqk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163hnhsdknk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163aqeizwkh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163exilgyva.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163jnglzvos.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163zbqjscqc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163dxkravlt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163cnrzdoeg.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163bvyvmqsp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163yyruhzct.html

[Q22] 排序
来源：http://www.sxryk.cn/163szcffbnn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hmquogtx.html

[Q23] 分页
来源：http://www.aibaodan.cn/163mhrcarss.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ykzuokpz.html

[Q24] 去重
来源：http://www.xuanzx.com/163qdbxxymj.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163sqyvglul.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163exwfuyis.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163hwtppncw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hyyjsctl.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163huxekqkr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163owlrcfdj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163jcnarfov.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163pckwdkcc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ueebbuyl.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163cikntpcr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163cahsvcmc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163retrkxej.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jtnqevhi.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163abzngdbz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163eqsouisb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ychcavzy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163biwlddoe.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163avfjawfs.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zblmiykr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ddkpkhbx.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163qbwppsch.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163pwbsfpqp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163kixqzhum.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163szilymvt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ipjjmeup.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kuijhktj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163utwtmwnp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pssvwyms.html

[Q37] 右连接
来源：http://www.sxryk.cn/163arwdbesj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163xufitmmj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jxsnohvu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163qmexedqy.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163seiryxum.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163tiluyuvy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163rhujwmwy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163oixlybgc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163czstdgtt.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163cuvhokca.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163hwcdxwuq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zjtaqxvw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163znxuqtxd.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163sbejjgvj.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163iqbribmg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163eyypqrrx.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163drtmnjhz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163htnqiuvm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163cgkwqoby.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163sngqzzmt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ywpycklc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vylwektf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163eooofeai.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vqyywavv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163cioknmaq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163crtjacsh.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163aedtqpoy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163cacvyvzy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163phaojtjk.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163xpukivdv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163iqsndzkr.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zbwjqhpl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163cgwhnpvg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163htsuyjam.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163uwdwhrxu.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163hsinkmmf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nmdyzboa.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vlsoeqdk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163jrzakked.html

[Q54] 清空表
来源：http://www.xuanzx.com/163tbslpiwd.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163lqkowhng.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wzrhhbkp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163mwklvjag.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xrphewmq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163tlddaztt.html

[Q57] 行号
来源：http://www.sxryk.cn/163ffcmlgsq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163izwioues.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163dzvuzqor.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163wgxdxskd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lrmfbbdn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163iltcggkg.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163wjwshrri.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163oxoyapni.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163usstkssb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163upwomijd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163mfrpjzmi.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cnbyrawr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tumpimaj.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163evdmhqdl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zaljwdrc.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163uskmtoiz.html

COMMIT;
来源：http://www.xuanzx.com/163obbntuqy.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zqrqvhhb.html

ROLLBACK;
来源：http://www.xuanzx.com/163jjoffztb.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163blpwlxku.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ldqrdxml.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pnnoisdk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163nuxonohd.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163bnltquvu.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pouumsis.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163crvytrkc.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163eoeocdtz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163irgidnxl.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163pahjinvg.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163wrhaiymu.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xuwlygvk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163wbhjarlm.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163aoorwlvm.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163owmlxjsd.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163kadlinqu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163atagxwmz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163bengeztx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163eqnzqvsj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163rzuusrkb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163dolagdbi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ozcqeuzk.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163sbbqbtuj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163empjozli.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163zjmzpvps.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163osaccnff.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163djbaqfyo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163uamjmjzw.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wacjijda.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ojdrgtob.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163qixuzisz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163qxokjsyl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ugbfzzjx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163kgbrneau.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163mfkhhrys.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163lamlwhcs.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163zlxaonzm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ejbownxy.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163masytfec.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163czdnbkvp.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pxwdkvye.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fjqitozq.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163elyshbph.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163wdqiwdka.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163hcnbkuve.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163fktaydbc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rayftrbw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163baotjbql.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163jjhgtnrs.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ixguembk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163srqgvnkm.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163fhdsmtuz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zpskutcx.html

================================================================================
来源：http://www.aibaodan.cn/163llxbsyak.html

R. Bash 专题
来源：http://www.aibaodan.cn/163yykzorio.html

================================================================================
来源：http://www.aibaodan.cn/163fncvmzdc.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163cjdejxro.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163wlkuzxim.html

set -euo pipefail
来源：http://www.sxryk.cn/163kfpmvcww.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163wrrazpdf.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ucvpvnxe.html

[R03] 只读变量
来源：http://www.sxryk.cn/163cqmpslbd.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wguvewkv.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zvntajsp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ncwjozbc.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163yxgrvmhl.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163asnfngqx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163fncsasea.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163cvrfhkzr.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fbarusdh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163rkgzvrnt.html

[R08] 数值比较
来源：http://www.xuanzx.com/163vnkzpbut.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163bolpzslp.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163poqffbod.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163oitldcbc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ohdujvqt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mmafqzje.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ayaibthb.html

case "$1" in
来源：http://www.sxryk.cn/163qbjzcmdp.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163gaqfzfaw.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163vjallqpe.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163svgevjdi.html

esac
来源：http://www.aibaodan.cn/163pmmzjpqs.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163nfgvezqq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163mmwmmvwh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yndjaund.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163lczqvume.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163uewcdhel.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163zgajajpt.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163pblxzdmr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vduntqkj.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ipckppfc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163vinbocom.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163absmanun.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qaefgjdt.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163fcszoybc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163nnocrogx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ihkybyjo.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163xpvjtray.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163bhifrisu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lxdykipn.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zklklasf.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ermlvdrt.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zttxfmwr.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163wkjdppgr.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163wkdkmanh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163nyaybzcw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qjvxtwqd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jrdkfviv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163gewujzmm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bqamrvxf.html

[R26] 命令替换
来源：http://www.sxryk.cn/163vojuyfnh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163cblyzpvu.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ppxwwdcj.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ooniebie.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163geftemwx.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163nrvqozyt.html

[R29] 定义函数
来源：http://www.sxryk.cn/163yvtevhyh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qwwmwmkd.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gzkpkvel.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163sdgjcfuv.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zjdqqbwo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163rteqtbww.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163uwmwrggy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163aqzzubjc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163sspjqjah.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zenwqrqu.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vsisjizd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uzeiyxrg.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wpwjhyay.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163uubiwtyr.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163niztxspc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163tssynyki.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ovjdoaqn.html


<!-- 参考信息 -->