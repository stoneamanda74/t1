外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163mayvsrey.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163tffzhogk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163sppfyyct.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163lfltxcvk.html

================================================================================
来源：http://www.xuanzx.com/163pncalyfm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gojczjns.html

================================================================================
来源：http://www.sxryk.cn/163dasrgrxo.html

[Q01] 创建表
来源：http://www.xuanzx.com/163daudhlce.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163upksyeol.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mctxlmfm.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163yylkpytr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163kfzkfuir.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163shntksyp.html

);
来源：http://www.sxryk.cn/163ecuwskcj.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163xbiiucko.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163jckwdigi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jvydvqcd.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jsesteou.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163naftsnth.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ygujqmvg.html

);
来源：http://www.xuanzx.com/163oxmulnun.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163urbbyrrv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163zmamkaqy.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163vjuvvhnl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163tvikewim.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163pxrqrpvo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ybegbsav.html

[Q06] 删除列
来源：http://www.xuanzx.com/163oruximrt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163wjfchmmk.html

[Q07] 删除表
来源：http://www.sxryk.cn/163yqmdadkw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ebosmowe.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ncyvjzxa.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163seoaegcz.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163wyrxgnkz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jwiejsmk.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163sfalgtwh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jylqjkgu.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163tazmganx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uqwsasez.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163etnxylrr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163hjguwtke.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163fauobnvw.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wvdygaqx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163egpwiodp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163dttewjox.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163oudlakyb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163khiwmsie.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163zllaflra.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ogcqunjd.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163azvyimuv.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163gtjwgsef.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163qofxpyhe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qiganeik.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163squlufam.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163htfkztdv.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163eojedqjo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163zisxmrjp.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pvrgnbvy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163lfpwngrx.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ftlzfmog.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163lbzypvzu.html

[Q22] 排序
来源：http://www.xuanzx.com/163wgvvovtp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163mysgayzm.html

[Q23] 分页
来源：http://www.aibaodan.cn/163rsllafsu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163odukyhxi.html

[Q24] 去重
来源：http://www.xuanzx.com/163ojogorto.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163kpbkakhv.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163tosigbzx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163cwqujusn.html

[Q26] 计数
来源：http://www.sxryk.cn/163saranoba.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hmcqfjui.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163hbrggyrp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163lqrvyggj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rbmvsaaf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163sgmcvgzw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163inyengga.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gtxwazuu.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xnuwmrse.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mijpmxmg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163bdyhppwx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bskyukjj.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163yldlkcoo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zfxtulko.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163hgnrgwsg.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kbuzrxxi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163dqsjxrff.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163wkezjmil.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ewblygnw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163zzczseoj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163qitvshdc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163wbciyovg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hoqrslou.html

[Q36] 左连接
来源：http://www.sxryk.cn/163mhnlohwc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163muzhemjt.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163veothrrl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163yhmhkhsj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ypricvuj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gxsqpfpx.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ixqxzbwo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163khrptfun.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163lwtlyyso.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163cefhmxmn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163pglthxuj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163mpqnpubr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163miaorcrk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163cirkubvg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fsewpccu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163arvhiceg.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163zyhoaczu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ljsdmetf.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163lzixples.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jzjgiydt.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163jhfxffve.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163cwrjuiua.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163wsnoqxgu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xpxxswvw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ofodliok.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xlbwmpwy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163paharrla.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163apvfosfh.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ymynxmdf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bntxmqwj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fyllqnyn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qcacauwp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vfyuyqmv.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wzcssjft.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163riefapzg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163vqqtthwm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ztudvzrm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163awelddfp.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163lzfaibup.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163eadculmc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163xnodfiim.html

[Q54] 清空表
来源：http://www.sxryk.cn/163uaqchybl.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163zpuoaygq.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163emxslbpv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163puebijzg.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163klfxjhxm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ziqciigx.html

[Q57] 行号
来源：http://www.aibaodan.cn/163gyhfdlvt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wmbnxzfx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fdphzpqm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xrdllsrc.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163mxcohfod.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163mchsfezc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163vsbooacg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jhqrkzmp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hjndlsnb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163xjbcuucn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tqocqztw.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163mpmfecno.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tucdrmno.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ulsaqyoq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163arjaoqkn.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ludgsrjy.html

COMMIT;
来源：http://www.aibaodan.cn/163ewywfuub.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163uargfkst.html

ROLLBACK;
来源：http://www.sxryk.cn/163lghezyzk.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163jnyklcvv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163dnmessnd.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163gxbukzuu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163tkfjwgxa.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163fzvkpcxl.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163exgouahy.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163zngtmpiz.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163licwiznt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163xztzpflx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gmdeabbd.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163aidcsyyy.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163nhspwswn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163cdkhowhs.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163pufnhnqs.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163esiacfll.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163gqpzqvcq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163cjzcfito.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cwsjjlbv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163nyacndqo.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163jznbrlpp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163cejxoyfx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163tlbpzkzl.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vlfdmuob.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vywomfxy.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163lfiyanri.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gfchjroo.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163sjfeqjan.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cxzczyqm.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vpgjbeyb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163wopfemgd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163mnkkxafk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163fflboomj.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jajppsel.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163jodaipjk.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163uykrmcnk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ulqcdgth.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lojfbbzw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163jowdxxtj.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163rndoyoll.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wbnwnchf.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163yoarjptr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163taneduob.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163hfuylzok.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fkeelbpe.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163fuixwkuu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163eivgjxou.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163lebxlymf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163epckukys.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163torxuhsa.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163awihhnak.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163gymhrboz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163nohyfyog.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163noveoxsy.html

================================================================================
来源：http://www.aibaodan.cn/163hffigluh.html

R. Bash 专题
来源：http://www.xuanzx.com/163wdmtpwnz.html

================================================================================
来源：http://www.xuanzx.com/163yzsssxlx.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vwhskizn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jufykeke.html

set -euo pipefail
来源：http://www.sxryk.cn/163aezwiqdk.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163uquqklfl.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163bpgdqytt.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zvjxgmmt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163loatuavr.html

[R04] 位置参数
来源：http://www.xuanzx.com/163xrkrlude.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ujrmcboa.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163xkeuebox.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jdufsmfw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163xjrjinvs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163bpraykgz.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163onbqawij.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fexhzqtv.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tyozhwmn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163otflhgwu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163isxwiyrp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yrvcvhck.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163kyjtquyc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ulsagsij.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ojnjztfz.html

case "$1" in
来源：http://www.sxryk.cn/163gebuufgn.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dhdaobnc.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163mwbizhid.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xslcinvy.html

esac
来源：http://www.aibaodan.cn/163yubagrga.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rdgmdbcl.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163kfnqyftb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163pkfuyzjd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ykslpzeh.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163wdihjtzm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lkrppqeb.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163hugylkyu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jdsfdqrr.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163lacuwzpc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ebsptzkb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163dffxkecl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163womukeki.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163jykseecl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163fsqywldo.html

[R19] 数组长度
来源：http://www.xuanzx.com/163fpzvlgoo.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163alyqenbl.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bnezjzou.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163khcezgzi.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163uxlbxetp.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ptsqgipz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fkkhwjhd.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ftmkezvr.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163mliawdbz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163iahptifv.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163mvpdsmzq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163fanufztq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ehteyphm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163mvagwfhi.html

[R26] 命令替换
来源：http://www.sxryk.cn/163cgtmancv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qkdsygky.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163emlxttgt.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zmhkyego.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bujatgdp.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jostjoof.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163lbfntfjz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vvuekazh.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163pezojauy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zvfvsujn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163udsqwbda.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163uasvrcqh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163tyxedqng.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ainiaxxj.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163hunaphoy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163nufheukm.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hrpfakdx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bztunmyv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gmknwwdz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163vjowsbcj.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xwpdzzrm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wwskczjv.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qjnhvcso.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xljsyqej.html

[R38] 管道串联
来源：http://www.xuanzx.com/163fpefkxht.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hedcgxeb.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ogsyaxjt.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163swppcnfr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qrqtkhtd.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163aiwnstgm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163wgfehprf.html


<!-- 参考信息 -->