外链999!wailian999！

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163lgfeytql.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ybdbgwzr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ltwlfymq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163kupqhoev.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163szlbaljr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163cvidjlot.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163hnvgfynj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rawmjsbd.html

================================================================================
来源：http://www.sxryk.cn/163vlquiykg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163crqlvtyd.html

================================================================================
来源：http://www.sxryk.cn/163opaynemj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163mbzgamyo.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163obkzptvz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qnjpxyfn.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ezsmugtd.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163knsxjgsp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163skziimkd.html

);
来源：http://www.sxryk.cn/163lyzqypxu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vgfljlim.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163rxnlqvxs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vpzqoqne.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163tpqpqndg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163vdzoxwgj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163nkbdxmqn.html

);
来源：http://www.xuanzx.com/163uhjrwguc.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nvflgeca.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wcxgerjx.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rjuzanqe.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163gjytqigs.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163fmmhtvja.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163uisakrgu.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163gpkccqiw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nfvnogas.html

[Q07] 删除表
来源：http://www.xuanzx.com/163cwiooxwh.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163acdteoss.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wgremofi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hmjbkxxi.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163tebzmucf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xladjvps.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163sxeibtfl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163pepzxmox.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ldsdmdjh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163fykekcxp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163etfmgmqs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163vmlsaclh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163fwpplvcx.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163szkcgqkv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163riygdzch.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163bqzjkiqc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163pdqpvmem.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163drgciafc.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163qtnregqx.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163cjjtykfn.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163aettrytr.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ckyzxwiq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163wcyipics.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163avpcvyje.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163cfdherxs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163tdiatfyt.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163joafyiko.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wyweywnc.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163prxkdlfl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qwsgxxlh.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163kzjethsz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163sutbxrgt.html

[Q22] 排序
来源：http://www.xuanzx.com/163ynbdbxav.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163jngvqsix.html

[Q23] 分页
来源：http://www.aibaodan.cn/163bkakimmg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163fsbglokf.html

[Q24] 去重
来源：http://www.xuanzx.com/163rbceqxta.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zkbljmxp.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163jvqjtsrj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163cpxodbde.html

[Q26] 计数
来源：http://www.xuanzx.com/163jjuzuafw.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163tiagjinc.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163mpgygtnh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163tihzrrln.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163xttsdwua.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163feekbqpy.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163nkabgken.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163qphyovkg.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163cbpjkwfj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mmdpgbyz.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163wjirqqdi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163gmjhsrxb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163xeivxvhd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vteyekps.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163yhetnkhu.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163cqxlcvct.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163dqihtqsr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163njjhvdlj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163tsofvpts.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163cffnynjw.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163atnsymtg.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ektocknv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163halwcqew.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fokxltwq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yjahgizn.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163qromutcx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163helqdobe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163oydulshd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163eauzatxn.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163frviwiry.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163bvzccdlw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163nwxqvykn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163fdufcdij.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163efwrqkav.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163fpzvaryw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bnanqoje.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fulvuoyq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ytjeoimq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163velnaddw.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163wrlmaiac.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jkgcxmjz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ozkyysjy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163cjcahpky.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163vfprodxz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163baacczxj.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163uogpggia.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ttvtfdou.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wcvlranm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163djtpyhum.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ijrcclvy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ugalveae.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ouzuwhmq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163pnjgpmsb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qhvyuyqm.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gqvtnopk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vtdasliu.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163bpadrsci.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163mroxnpwv.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163sxjbhvbv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163qxkfulwl.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163bnimsxcd.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ipubsfpd.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163sphqnbve.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gxgdtzqj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163oojxkghf.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ousalxql.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163gxlohnmv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163nrhutqun.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163eaotzvmb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163gcwltsfj.html

[Q57] 行号
来源：http://www.sxryk.cn/163fcktjjvy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163dvkdeuzo.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163rzezjoyc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163iqpiridt.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xakunasv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163inwmtdiu.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163wcagjjkv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163iubaqcki.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163otbagnwe.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163zinrwwcz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yifuprin.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gfeplbgz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yjnwukop.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163djhffagd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163hpfvhmrb.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163mdfaibhi.html

COMMIT;
来源：http://www.sxryk.cn/163fpnrlyao.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163pcodadsx.html

ROLLBACK;
来源：http://www.sxryk.cn/163kktonpbl.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163wxpdyojc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163vxnzmxdf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163dwnlsylk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163njzaubku.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zmassigg.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163xwykkcvc.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163akfzsoxa.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163belsytbv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ykorwyun.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163qucjjfqh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163mdhszfuq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163gswuxiez.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163zmhrkwnv.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163gajryoeq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hvcrpfhz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163yodpvmxn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zhaldwoy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163tdtwvzdl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163mcryybes.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163odcdabey.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nlyflkhh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163brnphgno.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163mehusjsz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163xesptspg.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163zbqiltwk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163cwyxjrof.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163njrpoqaz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163kzgbevsd.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qzvvxuic.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163dcqypjqd.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163aaylqaqs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163yvvwdspe.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163npqtxbol.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163koarhtsh.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163irgmgift.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163qcbokuxj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jbkimskm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163fvaxxmip.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163njybteeq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163dtnjgklw.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fgevkjwg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163mqaocagl.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163mqncgubc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ancftunf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163shirosmo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163eyidotco.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163qutfxmwz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ffdphwrc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163qfsurnbt.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163okheiihx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163beqhsatx.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ttklbjrq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ndbqlgqm.html

================================================================================
来源：http://www.aibaodan.cn/163llgywbtg.html

R. Bash 专题
来源：http://www.xuanzx.com/163ipkshlnx.html

================================================================================
来源：http://www.xuanzx.com/163yxsperhk.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163heiqxitc.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163wuhhvaet.html

set -euo pipefail
来源：http://www.xuanzx.com/163amswrkbs.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163smerlpga.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vrtwjrrv.html

[R03] 只读变量
来源：http://www.xuanzx.com/163fkcmufcf.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jobnxsjs.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rnpjrfmz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fzlvpmrm.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163pprobhiu.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qdpljfbm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163queovrlx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163fqvxoimz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163lovlkals.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163frvcqtvq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163aujorxyv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163sicbyapu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163lbdtiqfj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163zigkcvnd.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yssutphr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163vrnelbxp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163bodqjuqb.html

case "$1" in
来源：http://www.sxryk.cn/163ybbkzrwh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wfbirffu.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163leonfymi.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163olnwxvos.html

esac
来源：http://www.aibaodan.cn/163knlbxwir.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163slukzkci.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163eogkbmeg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163xhsirvnl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163axzyrbuf.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163whbojcnu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163flfsvahd.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163rqbiqcdr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wnzrnbkv.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163mfzbinmj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163jdaisgck.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xwuadcvp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163umwhvxjy.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bewnqwat.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163vfzzhewn.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163kbtgkqzd.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163pxbhitgw.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163xhyoerkx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163wgfiahnv.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vmbsssqy.html

echo "${#s}"
来源：http://www.sxryk.cn/163refsjnjw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wfjlxmhs.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mnksnchy.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163dbhhhxyv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163nhaniumc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163peqdrmzw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163sxefidxa.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ppponpux.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ossldpce.html

[R26] 命令替换
来源：http://www.xuanzx.com/163qxwxipov.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163zmfvuujw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163gghpojei.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163gvzvngxd.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163lbowgclt.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163uukbcajy.html

[R29] 定义函数
来源：http://www.sxryk.cn/163twkcimna.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163uswleydg.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163aatgageo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jlmlpolz.html

[R31] 局部变量
来源：http://www.xuanzx.com/163acigwxlv.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jivnglet.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163jylsskdu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163imgwxtix.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163xhdkjhhn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gqbfduzu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163oyepzfqp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qpsgynpy.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163bnkqcgdr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163kidrljxk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163boboxuqq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ugazclrb.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163zqmkzeeq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163hrwgvcre.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163inkzuxmz.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ngdjdinc.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163arlxweks.html


<!-- 参考信息 -->