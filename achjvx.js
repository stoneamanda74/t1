外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163cchipkhx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163qvqjkxfv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zaqkwjqg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bgufnuvr.html

================================================================================
来源：http://www.aibaodan.cn/163nsspjpus.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ijeteqby.html

================================================================================
来源：http://www.aibaodan.cn/163ifrntrby.html

[Q01] 创建表
来源：http://www.sxryk.cn/163hzybncck.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ymeqlmtp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163uoamsslp.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163fkcvrhaj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163lmnzeyth.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wyuvvgwb.html

);
来源：http://www.aibaodan.cn/163tgotfcqh.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vbwasdgz.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163gahxlowx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jzvleaia.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kmokxjmh.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163cdjjeiww.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163laugnott.html

);
来源：http://www.aibaodan.cn/163vjywaifi.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hbtxrayx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163fkqsfgts.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163zreyrlup.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ijmfiwkb.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ouiqzycp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163yrdiahet.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wvddzndd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163xsgcndii.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163zlsupafb.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zhyddloc.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xblrplsl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163nijtmncb.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zrbvtqtn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ycjpoabk.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163khgytiwk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tgdmqsag.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163mzxdjfap.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ocnqujvc.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163wlykkwjl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163nhnucfix.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163xlctrikq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163usvausoj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163embwqlss.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jnifodzv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fqisrill.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163lnvafkbq.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163uwbzdsqa.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163fqncbzzw.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yyqrcckt.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163sqqjxtfw.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mormzbbf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163liyzwlqk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vsyfnwpu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zmtkqvdy.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ljnamrih.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163zizoncns.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163fjtgehdb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163khpvobqh.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163dynzfsxa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gmfpfsba.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ndmpbmsb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163yafnkwhn.html

[Q23] 分页
来源：http://www.sxryk.cn/163doyiuvtx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163upcbfowu.html

[Q24] 去重
来源：http://www.xuanzx.com/163qvomkwow.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163hwrlmykw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163frwozthg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163nwvopzmh.html

[Q26] 计数
来源：http://www.xuanzx.com/163dbmkrjoj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163gxvhndtq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163sqtdvyfo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ydgqdxhz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qtacvjhr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ttweuafa.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163xapjsbjj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nbsnyagi.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ujifzebl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gbrzzloo.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163faxgwgps.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163gutbuilm.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163tpirbrxf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zuxmzvpo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ocuheobf.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xvoieteq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163knlmxixz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163sjzsemdw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163dtrexhft.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163xqmbeugc.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163kubjpxnx.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qbowpvwc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hupspemd.html

[Q36] 左连接
来源：http://www.sxryk.cn/163csaukjbm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vgxjjqyy.html

[Q37] 右连接
来源：http://www.sxryk.cn/163naeozbsf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kqvyfriw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163nihsrseg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ufsxdnmo.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163jwhtjtxt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163yvpahtok.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163oysstono.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163bmmhpdxg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fijcbaue.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163plknktfw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163sbjtqkft.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163nwervfie.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ljnrzrce.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163sfhwfrzx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wapzsetj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163uekwqadx.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163epnsycxw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163frjbarar.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ahgralix.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163dqaexdpm.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163herbagub.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tuhketpo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hreesmbk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hjcxcmzm.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163nifoxzjl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wtzlnlgv.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163kwashade.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163rntgmdcf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ympacmfz.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163awishwwv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163uokhhzrz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163tgediacd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163flehzzmx.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wphxuxyi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dxmbyder.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163bfsuzxpg.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163kylrutbw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163qrzrctwf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163dagnsuhg.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qqomzxnt.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163selpujls.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zyyurpqi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163wfbhaipt.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163fvzsijiq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163puxqfpej.html

[Q57] 行号
来源：http://www.aibaodan.cn/163pipiirgh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163paknuaiu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ngfsjbhy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163cwhztydz.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lklglrfc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wfcdbahb.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163cglfuymp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163rtebzvzy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yoqxovqi.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163sojypmrr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163merbytyn.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mvjlzssy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kneccyzk.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163jkpvkyxc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163vexlkrgg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163vubtnmsw.html

COMMIT;
来源：http://www.sxryk.cn/163oicqtxfy.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163qrsfoevb.html

ROLLBACK;
来源：http://www.aibaodan.cn/163opglsijz.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163afzkuopa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kyxzpxny.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163alolsqoz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163srdtokcl.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163dpmpkqkj.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163cmepjztn.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163prdjkaea.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163eutgmfaj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163krcsnkvj.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163fuyjwkwx.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163mmxflpxm.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163lgxvllhd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163imfngyiv.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ujcuorxb.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163yjuciipa.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163pdmiznau.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zglikynr.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163gsodhftv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163pnxapsou.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163hecjheck.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163qowojksh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163nufivkdu.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163itejsebg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163esljmkup.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pdwgfbtp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gvmekpnx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163uyddrdme.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jxlmbfxc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163tdutqkya.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ioqbsnrn.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163bsggdich.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163yazxyibt.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jcvnzyhg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163biaebpbc.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163khoskymr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163vduxehvg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163loobhewq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163tbqzbcly.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163xoawzpow.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hidkhyma.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163shafwfnl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163psroinga.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163jnaswxhw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163bxeihiyt.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163emtqdlpe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163uozeuptp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dpptsbzs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163konlpgxt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pssxdbex.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163vxyubsij.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jsdenoww.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163cmquxivz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163hfeegkbh.html

================================================================================
来源：http://www.xuanzx.com/163hvqdyoac.html

R. Bash 专题
来源：http://www.xuanzx.com/163gelnulta.html

================================================================================
来源：http://www.sxryk.cn/163tovdmyhl.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163eyxdcqfo.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163vnqgbqwq.html

set -euo pipefail
来源：http://www.sxryk.cn/163kpuxicgg.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163aepkxvwu.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163glfdntzn.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vsrqmwqg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ngcejbrg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163odycifcy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163rlvgzbfq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ldjmvrbf.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ieoizhth.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163faylztqc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jbbqblxk.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sejgjptn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163avblqwdu.html

[R08] 数值比较
来源：http://www.sxryk.cn/163clcsboys.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163fbhijuqs.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wcyxanzd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163grkeggyo.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dcrhrjmy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163tdvbfnqp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jwqoyboe.html

case "$1" in
来源：http://www.aibaodan.cn/163lxliecan.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163itvbxmhq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163abwezpem.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163zyzaylla.html

esac
来源：http://www.xuanzx.com/163tdgviepq.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163iykafgzv.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rwaljpqu.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kmddlbvi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163bravmglv.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163pqzmdgtd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163pbituolc.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163stptlchx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ldekvadq.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xgzvxlpd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163pikcjeng.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163idzmchtm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163nfjaxxyb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163dehinkkl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mqbnrzsw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163njasgalf.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163jlsysbvu.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163lodpkdpm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163fnrzjjit.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qttebilb.html

echo "${#s}"
来源：http://www.sxryk.cn/163advupzgw.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xqkmrhsh.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qlhrvfkl.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163zjbfnqls.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163fpmghleo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163zgyzphyy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xuuzyvfe.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ulybvfah.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163toxrenfl.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xplfinwb.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163jnihvcjy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163syvccehv.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lqmbumrj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ryptqizl.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163svotyynd.html

[R29] 定义函数
来源：http://www.xuanzx.com/163oogelgwn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163mqeieyji.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163uthncvuh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163kskjpkou.html

[R31] 局部变量
来源：http://www.sxryk.cn/163edpctdjk.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163kmnysyrz.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ebjavnzd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163nnthfwdp.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163hybqcnrv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vbxuwkzu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vfsogbmm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163egtyuvtp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163tkkygobp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163dosudohf.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163wygqhibj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qjlezuqc.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163pmayrqzh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163qzmxheop.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hfgnpeeo.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zhtyxthj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vrellmcx.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hqzjlaiy.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163lyldclmh.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ieskewsf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163vhabkkqh.html


<!-- 参考信息 -->