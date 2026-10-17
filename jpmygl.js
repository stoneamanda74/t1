外链999!wailian999！

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163zvqflpiw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ijakoehb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163cdrlkhon.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tiuzhhfy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163izazumhg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163smglaefb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163cpibrehs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163mlmavnmz.html

================================================================================
来源：http://www.xuanzx.com/163volkvbpm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163taqhakea.html

================================================================================
来源：http://www.xuanzx.com/163rmzqhqdr.html

[Q01] 创建表
来源：http://www.sxryk.cn/163omvduzmc.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jyyqdgtd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163llgcrzyr.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163hnxscqvc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qyxrdeur.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163gaugskfh.html

);
来源：http://www.aibaodan.cn/163wgupwcgl.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gzzmyvrr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163xcittuqk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tepxusuf.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163voxyldia.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dbvxwnwx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rnozdjtl.html

);
来源：http://www.sxryk.cn/163yyduvary.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nzwfzesh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163xxijlzba.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fteefeuf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163uadfhzff.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ikmwuztq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ctzbwtoc.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ttzsilkn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163gudgdvic.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rrylpiwl.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163mqwkyinn.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ucsnvqbf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163iwprppbr.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163glvgtpmz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ghgiseem.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163srofliqb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bwstlykz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163whxvpors.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163rkhbjrnp.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163qxoseuax.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163uzhmusfg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bsfewphu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xerrjwrh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163bwefxakb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163myqywlup.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163enbyopka.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zqmrpdyf.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163yjnhswsj.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163diiuoyhm.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ioztbtct.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163vfmjcbqj.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163vqkbioay.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163yawuviff.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163gkrwlqty.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163vesdrexc.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163dedutqwz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ymijxusd.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163thkyebjp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163sjbmglft.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fogbjtwq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jxdfnbyq.html

[Q22] 排序
来源：http://www.sxryk.cn/163svvvuwhs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163vweeepxb.html

[Q23] 分页
来源：http://www.xuanzx.com/163punqtlch.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163cxprvcnr.html

[Q24] 去重
来源：http://www.aibaodan.cn/163alckemop.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163detybxbp.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163rncqwtwv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163noiixuez.html

[Q26] 计数
来源：http://www.sxryk.cn/163aipatxsk.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163bxuwiezz.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163otckcmbf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163baxtuwzl.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163lcvsjwgs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163iwabtany.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ckisruel.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163gvpaxtfq.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163cygyxvkn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dxvdtgvx.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cewggufg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hrytiygl.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rdidazoo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wfihyzzw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ifysumzc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163xzqalhim.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163zcoypplp.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163uadfwcyi.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163qsorcvvd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ddssmybq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163tquebghd.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vxnwpbuz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163sxqazlrn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163eyxhyruh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163swggzdie.html

[Q37] 右连接
来源：http://www.xuanzx.com/163hcyunvfl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163yluxrpcc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163mrfpgkyr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163daummnqv.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163xmxsbzfy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163cyyleacz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qqewjagn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ecaddizf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163pbmkrafg.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163izqsvntw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163nlwqdidf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ifsnbddq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163jpbsiknw.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163kggrcstf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163fhcrkszr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163xzmlirem.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163gfhuxfna.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wacryhlb.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163keyohxiw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fcgffypr.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163sabyckhx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mpjwkddo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163qdcmakui.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xqwomfrp.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163espqzkbj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163yubyznmk.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163gmlvrysp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163aletyrnj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163xwbpfkqw.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163nxhjwyis.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163furhyvew.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ppzkafri.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163vycrjsly.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163novtbgbz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163zwshfeqs.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163efiamkqp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163rvyhhccd.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163whvuohid.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163khftchto.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163dvphgyqo.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163fozxpbtn.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cuwgoyhc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gejauvcp.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pwsmydyh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163rbezxhgi.html

[Q57] 行号
来源：http://www.sxryk.cn/163cviwoooc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163guuaygtq.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hbeetmgw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ntrqxtlx.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163gbzzlnwa.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163uajpyqjz.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163sktulbaq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ujqbpxuw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163lziavwti.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163rdsinayh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163fgshhafl.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163uiqswslp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tlgtowqf.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163diloclfv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dcchwgxp.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163hajbxeui.html

COMMIT;
来源：http://www.aibaodan.cn/163gumsjpms.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163evfyooei.html

ROLLBACK;
来源：http://www.aibaodan.cn/163oueguvje.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163prqlxyjw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163rkhtrcnu.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163yplhwxmj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163zpakgfqp.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ovfhyjkj.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163tmjrzote.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163asqrjplh.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163jxwvbhth.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163nfflrdwr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163zipbuooy.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163jbedugka.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163stxcjaxa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163iueoeojb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163otzwlset.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163rcihrsnd.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xqgpmick.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163cbwuanoe.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163queftzfj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163heoktavp.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ukowfwlf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163insnhjgs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163nvoyqbdw.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jpgjtmsh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bnoqrjij.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ehyojhzq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163lzsrfhsy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bxxrkuce.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163idbyhvza.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163mvzgouvn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163xcoybaaz.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xwcwoeou.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ninawzfs.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163mhjlrfqp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vtuemfbh.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163wgscocmd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163dhrbrqxe.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ugciknui.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wgbgdfqc.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163rgbbonql.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jqoxyzzl.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163qpzvsjif.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163hktpzdci.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163tyzrbxvd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163nzmblshg.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163yryexlrl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163iqhwurwo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163cynbhpru.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163tsmkkxco.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163vzhqjcnl.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163kndvhqqy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163rvmgergk.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163vkqojdmx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163hheskcov.html

================================================================================
来源：http://www.xuanzx.com/163bgiuemfi.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ujiwyzdh.html

================================================================================
来源：http://www.xuanzx.com/163vlfuxhpe.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163zopczbcn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163vybhsrll.html

set -euo pipefail
来源：http://www.aibaodan.cn/163jyhmmlxa.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cvjtesbh.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ntmcgbuc.html

[R03] 只读变量
来源：http://www.xuanzx.com/163iegzipkw.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kbhbhmnw.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ywqwobpl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163unxnniwz.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163eywolsuy.html

name="${1:-default}"
来源：http://www.xuanzx.com/163asrjhvwm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ngugckzq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vmdtyjtk.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163acypahfn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fcrafsfo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163kkhrjjwn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163qbnyrgsy.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rcfhbdac.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vcliyknc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163pmzlesuz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xafussrc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ecmvodfa.html

case "$1" in
来源：http://www.sxryk.cn/163qvqvcwga.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163hdoqogab.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163sxwgqdja.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ftyalcah.html

esac
来源：http://www.aibaodan.cn/163fvlojalf.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163hvtpkkgl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tqmnteyq.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163akjvrqew.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jyixealy.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163nsogibfe.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163elgmofwp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163bismkomg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wzditygg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hommzbyh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163dyrylkwl.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163zhxhddpa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ihkdfxbm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bqbjjlad.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163tftlckvj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163elarxxum.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ghaanydk.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163igkprpet.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163yxbkgmbb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xtphkwtb.html

echo "${#s}"
来源：http://www.xuanzx.com/163tlejremt.html

[R22] 截取子串
来源：http://www.xuanzx.com/163lkpjqznn.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163pzozania.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ehqzdtvc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163nrxcixnt.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163jmkjxozs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163qmuzvmzl.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163hllvlhum.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hgirrsnt.html

[R26] 命令替换
来源：http://www.sxryk.cn/163pllaogzl.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163etnftspd.html

[R27] 算术展开
来源：http://www.sxryk.cn/163txqsfeoj.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163arszdddz.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163lanykpxf.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163vdaajbyi.html

[R29] 定义函数
来源：http://www.sxryk.cn/163hhqkhtjo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rjokihde.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qknxadib.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163yxtpebfe.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163alxqtrqo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163jkfzyxur.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163kokuzwlk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163zhtpaqop.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wgtonxsp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163cxzzukkg.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163gvrpihry.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hrjqwerl.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qicmbqal.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hzpxtpze.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163mavjspwb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163qwycukxf.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163mdemmnwc.html

files=$(ls -1)
来源：http://www.sxryk.cn/163hkefoiik.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163oozhofgw.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163jbjpsdhy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163lrpwzsxt.html


<!-- 参考信息 -->