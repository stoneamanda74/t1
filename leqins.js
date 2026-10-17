外链999!wailian999！

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163vxsqhlyp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163fjiwwwfa.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163nxoxoeqa.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163kkqogsms.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ksdlcdjq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163oszeawxx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xohrvipm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163wcjevtbq.html

================================================================================
来源：http://www.sxryk.cn/163txtjjyrz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lefvuctp.html

================================================================================
来源：http://www.xuanzx.com/163jodaoses.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qtgosioz.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163scmdsoij.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vuoihlhi.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163fholqivg.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163fjbortih.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163wzuszvyu.html

);
来源：http://www.sxryk.cn/163erjuiehj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163tkbqjtae.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163apzzjrrf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wmlddbsk.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xobtirnp.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163phxjeyrq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wurhwzws.html

);
来源：http://www.aibaodan.cn/163ogtuhbbn.html

[Q03] 增加列
来源：http://www.sxryk.cn/163roxzgnmy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163owfeuhop.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163hnrrflum.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fkkajbod.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ctwxydss.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163filbqxhe.html

[Q06] 删除列
来源：http://www.sxryk.cn/163dcdmdbdd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xlbwxwyo.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163vuwolflw.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ypcgozhi.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163htawqffm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xoetxdaw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163sbstwiai.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xrixsqyf.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163feitjqva.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dmnyixtp.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163hasxhzdw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163egsjulrq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vgvaqiie.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163aeorhgqx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163nsmnvqhv.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ahqnceml.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163cwhdydqd.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163pshrpnlw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163brkrwjzs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cmcxftox.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hsdmvlea.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163izvqggfa.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ofawittg.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163glfyeinb.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ajghwjay.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163pzunzynv.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vzglinpv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ydezjlvw.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xxnndfde.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qwywdnfy.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163tkuswqzw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163iaatsoaq.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163bqbfcceb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ynkijhhb.html

[Q22] 排序
来源：http://www.sxryk.cn/163lxyojiuo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ptwghetr.html

[Q23] 分页
来源：http://www.xuanzx.com/163sjmtkike.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163liskycoo.html

[Q24] 去重
来源：http://www.xuanzx.com/163gegaihhq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163hzjhpabs.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163yizglwxe.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163hhbywqsf.html

[Q26] 计数
来源：http://www.sxryk.cn/163blwgokqo.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163jgqdjwsl.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163iwixqbiq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163fljwesjl.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163goyzujfa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ufqyuvqp.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rmscsvzp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163gvddpqll.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163nbfnzluc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mresrfbh.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163srfeciss.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163yxhfbtpd.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163sqrgewlg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bufmmfec.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xiamzxsq.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163gxpamazx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163rbcsfjfl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163whtqqkqw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jngaemfb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163iwybgcnp.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163wvnspigt.html

[Q35] 内连接
来源：http://www.sxryk.cn/163htdummth.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cwndlixd.html

[Q36] 左连接
来源：http://www.xuanzx.com/163cbcojlfn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sktjprxk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ffbpilsm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163fukvgnzi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163fciylrvt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163jthtszja.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mpjfasfx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163oiiujnkk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bdtvsays.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hpitlawo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163jwdatflz.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163cxqmexty.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163seqrvogm.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ckhfibzl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163cwpiqkke.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163dwqmutbm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163tdofnhlq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163spuiflsd.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ugaieydh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163cssmvkxm.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163fzyjhwvc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dsslcure.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163lfnskjui.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vtkafzye.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ytixeqar.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qhmtvaxl.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163whdejrmc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163gsclyfrm.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163qvbapfgt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163pgnsduiw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163mizcmycs.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hvjjepgc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163cujbbhbz.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163hniffhlf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163abxprwdo.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163hcxmudxh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163neczzzge.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gesbxoss.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qmfipror.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163phthqxxd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163lqznmgmd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163tcrzxajn.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163soomxqym.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ilsawppe.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dpitnafw.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163acrxwsdn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163jywvpflw.html

[Q57] 行号
来源：http://www.xuanzx.com/163ilazjfzv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163sbgzwkgd.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ujetwqgf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163rqwzegmr.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163vtaeznyv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163yfmtfqsp.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163rqfqlsbk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163murxvnfd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163iqjcdmzr.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zhayulgn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163phvrebxs.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163eqitfmvl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zntlipeb.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gtgrnvpo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wnvecsza.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163dcwpicdz.html

COMMIT;
来源：http://www.aibaodan.cn/163bxmfbpjx.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163zrbqmetj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163pwczehpw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163kbntmyun.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163dxxjqftu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163vnfqjrsf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163okpwdojd.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ivgdzrbw.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163hlpqlxik.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163gmubebwi.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163nkdeowdm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163jiyapvvm.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163rflsglqg.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qafkxovo.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163tflbsebq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163crznhydd.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163zjykzale.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163eiulocdu.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163cpvpjlpe.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kmretyln.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163gochmmjz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163kdsfcrie.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ffuowxzh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163xhijxhxo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vzjztqfh.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163iiquohuj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bzzqffue.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ehmjiqxb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ipnyriri.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ttrijhjq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163xwkhetxc.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163eneterdt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163khyqfowq.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gcrluhaz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ifjmmvej.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163viuqqsoz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163htwqcenp.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163vjhbvgng.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163aaqrpbur.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163uqsfyvrz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163rbqxgubv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163vkzahexp.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163wbhfzvlt.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163twwtgvvc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163vevqpmfl.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163fniqdrlk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163whalkfvb.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163bqxisblr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gpwrtqss.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163hhfxyvtn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163pllrsjbt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163wjfywxxm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163auevwsjv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163bntdpoye.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ysqjouoi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163rwphaplz.html

================================================================================
来源：http://www.xuanzx.com/163xwkebeuo.html

R. Bash 专题
来源：http://www.aibaodan.cn/163okbgstkc.html

================================================================================
来源：http://www.xuanzx.com/163vlqimfhh.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163lhtkjgcu.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163mrldqnla.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mbnekhjx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163hrdlzjqe.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163heenzfje.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163cjpycqub.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qoocjcqz.html

[R04] 位置参数
来源：http://www.xuanzx.com/163zbcwtrcf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163bkefkxdi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163xyrmmoco.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ohgbdvbl.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163filjlxab.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163skqhvtsj.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163gskufmii.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163whsoyjjv.html

[R08] 数值比较
来源：http://www.sxryk.cn/163fbnlnfhg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163driaavik.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163yndqzhsb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bnvpmsmy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163bukyfjpe.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163josgknrq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ainlovld.html

case "$1" in
来源：http://www.aibaodan.cn/163stotkuey.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fmqwdpgi.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163mlyiursu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163eqwcoswp.html

esac
来源：http://www.sxryk.cn/163bnmhbfrt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163vibicbdo.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163tkcmwywm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163iwknxjuk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vdkimdjp.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163waygcgre.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ondkzmka.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163bjttrbcw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163znsmjcgg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163npuaiveg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163cakddajp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163cplckqvk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xrkzfadv.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163efwooobz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163fuohgzes.html

[R19] 数组长度
来源：http://www.xuanzx.com/163nrusvhaq.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163scokhecu.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163tfahlzhv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163pzwoxans.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hwsfbnjm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163dhmomlgo.html

[R22] 截取子串
来源：http://www.xuanzx.com/163naymokdq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163blnefbze.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163adsseswy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vkwnuzjm.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163vrmkcclj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163nrqyhedp.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163nwyifvnl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163pncrzrdx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163bxygmesv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mifcepkl.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ckhvosko.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mcqudvlo.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rfwvsfxa.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163kgduppiz.html

[R29] 定义函数
来源：http://www.xuanzx.com/163tpcgsjvs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dsphyrhg.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163phwedhcb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163eticsfnj.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mriktkqu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ohjzlthq.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163hlqmqkua.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163acrsfowu.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163mlzaxspo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163eathmwpg.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nempfhgj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zikdnsnj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163cpbldvxy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163listxbmv.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163mstpnseb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163brrzicoj.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163kuvuytaj.html

files=$(ls -1)
来源：http://www.xuanzx.com/163jgvrzbpe.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ekfnuaiw.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xqzvektz.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163wlpcoblt.html


<!-- 参考信息 -->