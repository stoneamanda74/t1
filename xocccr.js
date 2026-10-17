外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163peckyold.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163osbhvyiq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163dlmymcfr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163tovzoedd.html

================================================================================
来源：http://www.sxryk.cn/163lrgecyyx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jxocgxhw.html

================================================================================
来源：http://www.aibaodan.cn/163ovvgcnnp.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163xuutuffi.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wkybcynr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163uorarvpk.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163qkxmlqxv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163trkfctrg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163yjnlnsks.html

);
来源：http://www.aibaodan.cn/163xkmnvybi.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163cucqjama.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163nqhaicvg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yssuvdxz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rzinztgk.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ddfspjex.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jesyyrib.html

);
来源：http://www.sxryk.cn/163lltdaeyk.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163obdbbocz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163vutfnbdc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ikajyypw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163mpqqkrrk.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163tdvdhavt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163egbmbyal.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ocgdomub.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163uwdsfwha.html

[Q07] 删除表
来源：http://www.sxryk.cn/163kbwqvxbr.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qalefyld.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hgohzoab.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163sbhjrgys.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163rnmxtfcn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ufcyhnnm.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163txrjaldu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qdrlwqxw.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xrpgbmcs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163sihqeebw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163mmmdadbh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163vlxefhhh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163cdfmroeq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163jcdkshww.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163tiygvdcx.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163qooysehf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vgumowhq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ydrnybza.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163shuejpxj.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163mvmmyymj.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163epcpyjmd.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qvtnfxke.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163pzssnwwm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ufnvkyen.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nfcunxkj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hsuvuula.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163yfncmoha.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163jwlvcwrc.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163vkhosgxb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163yxndwevj.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163tpcuupia.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zwmwwibr.html

[Q22] 排序
来源：http://www.aibaodan.cn/163kvxtjknk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163bmgyvdem.html

[Q23] 分页
来源：http://www.xuanzx.com/163iuvaylxi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163vtsybqtc.html

[Q24] 去重
来源：http://www.sxryk.cn/163wbwlgmvt.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qjjhdwkl.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fchageee.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mtqvlrjk.html

[Q26] 计数
来源：http://www.xuanzx.com/163rmyznwel.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163tpgpbudj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wszyqrth.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163sqjshcap.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wraqvhpa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163zewsgghc.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ldmjbnqz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163onlqqylk.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ttrotdol.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xpwjzznn.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163btfgudoj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163manflibz.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163eumhtmzu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163enuuuqkj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163tycgtnjj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163cpnlahrc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163itqizwow.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163bxodvuwt.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163sezzqljp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163fyrvoxme.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nhmydjhj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163wjkgrnfl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163imvdpjqs.html

[Q36] 左连接
来源：http://www.xuanzx.com/163qstcbknf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pmbdayzp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163geithrly.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163jqjfjurp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163tsmlergk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qajoecfj.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163vpqwwzkt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163cftfhojg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163kpcsdred.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vjvlbbmd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ojmktkwx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163nwznmuvx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ickvgddq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rsdnkjsv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ndlqjnyc.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163pbnprlvv.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163wcjyujun.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163mxpholff.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163mfbdyktp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163orfzerop.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163igletwab.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163bhvvivzn.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dukuzcjw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fvphvycd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ppxnkpqf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cuivbfgm.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163rqfjfwee.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163tvthcjvm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jqtqjbzq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163pgxkwmyv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wgtnzhyd.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163qeroyens.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163hmitmwff.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qewtgsgc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vjwmzlbt.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163blwakdzv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hbyengcd.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163sqescufj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xvooltve.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163pjrfheio.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163tfuctgkd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ngasjmzt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zldoosrc.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163gjefjclt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dzfpiihw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vyadecom.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163svcslhiz.html

[Q57] 行号
来源：http://www.sxryk.cn/163wgoenbfj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163nyxkxbzb.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163blrxezur.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qtngmboi.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163lrdrthxe.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163bxwypvrk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163mzznhocv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163lwdulwnf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163burvrfdu.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163fqkgwsph.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163gukidbtx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vxioqdwe.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wnilhadz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xlxlwumr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163chrwcolj.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163alhntzuw.html

COMMIT;
来源：http://www.xuanzx.com/163vocbfogs.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163vakscthu.html

ROLLBACK;
来源：http://www.sxryk.cn/163cymribdi.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163mgzetbbp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mgahsmqx.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163uvstbqqx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rofutpsm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ekrhulka.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163csdcvzor.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163unlasqte.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163nxijpdbq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163yzjptbyg.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163sjxuyaaz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163yxhnlpzy.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163kdyhirfs.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ffjfmobe.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163tgcbeswc.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ufssmmml.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163oayhelhu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163xleuepyf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163oieotsxo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163nxyfzeaq.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163mbctyaqu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ajvojfau.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xvkidxzz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ocasclrj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ofwwkdzu.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163mfoeuotf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163teortwci.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163uoznqwsi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hpsujbck.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163clrcvzxo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163hwipnjbr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163arpouldf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163efnmzsnt.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163cwqfnxae.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163gcbbfbvx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bbajcipp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163zcbnpara.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163gmifibor.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163rvghdegd.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163pntwibau.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ulheizpk.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ubajafnc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ifsrtdzl.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163govladck.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ogrttkjk.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163nvbjpsjj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163qchilofj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163jznvcblo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163hzuilsop.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bxrucvok.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jvljmjrs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ftqkooyq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163fxvukqmw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163waxskvom.html

================================================================================
来源：http://www.xuanzx.com/163ffresdth.html

R. Bash 专题
来源：http://www.xuanzx.com/163jmgfhwrq.html

================================================================================
来源：http://www.aibaodan.cn/163rmduzool.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163lyrvnxvg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gdfavfqa.html

set -euo pipefail
来源：http://www.aibaodan.cn/163llgwpqov.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163zdkvyall.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163daujulim.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ulrlcvzp.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ouzlhela.html

[R04] 位置参数
来源：http://www.xuanzx.com/163erbnipld.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163egqjzymi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dqsqemcs.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zbvvqfkx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163zhfllxhw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xtsvhzir.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163jfkiuqvl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ldlafqlx.html

[R08] 数值比较
来源：http://www.xuanzx.com/163noipxowi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163puvuasyo.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xpzhxtuv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163shfmnyiz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pyaomsif.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mizdvsld.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qrnfskgf.html

case "$1" in
来源：http://www.aibaodan.cn/163klrsygtd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163oajhtbio.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163eoszijfy.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163xwnfebka.html

esac
来源：http://www.sxryk.cn/163fxrujwpz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163shjualbs.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xubmlgwf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qqwgemha.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163kuanzhfm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zagrgnll.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163oivgcblz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qfsuiatq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163tmykziwj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163valzfjxv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163yomqpkrk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163wdvguwmh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163xqosyabu.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jnclvwxe.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163uueuyoww.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163veqvhdju.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kijcgagj.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163rpmcohqp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163zsicuwrk.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163rrmgrnsb.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gbxfjhok.html

[R22] 截取子串
来源：http://www.sxryk.cn/163mdnlxvms.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cliyexnp.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wmilsyhy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163yjwfjgkl.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ynkvzkyy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163izobhgui.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163zlxgcwzc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hyfnwhfj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xgooxhug.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ylnshjta.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ljhapnvu.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ocfjlyas.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163dyzilodb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163lhfdflbp.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ucizqldg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wodtxbvy.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163nxznhjdr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163pxgyjbte.html

[R31] 局部变量
来源：http://www.xuanzx.com/163icllupyo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163yzgxutvl.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163eazmxnqy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163eubpqlvl.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ihvekrfv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ibmdbmqi.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163quymsygb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vrlebhjq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gppmfbdv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163zabyfsyp.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ivadaqpq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163mcihlwld.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qsbevmlj.html

files=$(ls -1)
来源：http://www.xuanzx.com/163acwasbri.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kqzjmdjs.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163aqwmduhy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163felwgjhz.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163zgzdwjkb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jvmcgoye.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ovoeprll.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163axlosnxr.html


<!-- 参考信息 -->