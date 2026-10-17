外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hvkhnllr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163uiicidun.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163staasmkg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163iejaassd.html

================================================================================
来源：http://www.sxryk.cn/163nziddurc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qqbyzjfj.html

================================================================================
来源：http://www.aibaodan.cn/163hawymuno.html

[Q01] 创建表
来源：http://www.sxryk.cn/163vnyldzjb.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ilhmpyvh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fsmbxhhi.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163jpyrcsij.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wrlkiqiz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163buargfup.html

);
来源：http://www.sxryk.cn/163owykfvnl.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163dnwcupwo.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163pqwkbyvj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fxsfwxgi.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163dmyyndbn.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163cvovyvcc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mhijvwiv.html

);
来源：http://www.sxryk.cn/163caatceqv.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163yhjqjejw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ffpapwit.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163hjzqykad.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163sxcxwhjx.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163pyewtlkg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163siverkxz.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163mfkahlyk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163esrizpgk.html

[Q07] 删除表
来源：http://www.sxryk.cn/163oooynhcm.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163nulxgqak.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163gxdrveiy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ntkbcjes.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163eppfgywk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163roiouckf.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163plyjgeht.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ebtlwkns.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vnkobrnm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163xrzdngvb.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163shadbbmf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163cypwzyqm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163utukjtys.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qtvyqhmr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rfllefmt.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163tzgcadpm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bohhptdw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163aypjudxe.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163zmkeepkw.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163pucjibiv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163rxqeqyvv.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fxygryix.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163lxfbjgre.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163tgfedehd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163zscskrzf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xlsnrwuo.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xczlgzrb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163xsnrekln.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163rityzmld.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163mvrofkes.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163pinfatik.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ltudjwpi.html

[Q22] 排序
来源：http://www.sxryk.cn/163diaxrgrk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163oqhedsgp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163zbbmnuas.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163muncrvhf.html

[Q24] 去重
来源：http://www.xuanzx.com/163qtjbiyvc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163umstkfgp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163kctnrkdr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163zzvpqehj.html

[Q26] 计数
来源：http://www.aibaodan.cn/163wlreotng.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163sqpivnaa.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163nuxriwwc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163sfkxyduq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163tfzeoptp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163rwxvzcbj.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163aynqwdar.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163tdctsbfp.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163kwbkvyfj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fnntrzji.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163yvmltvkz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163xdwphmqu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163xyfldepi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nciiqesq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163tffoqjlb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rbqulzrm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163cglezdvb.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163bloyjhgr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ujinsjhh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163xanlemvh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qftubbfz.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zhpmqaav.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qnukmfhr.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wkyhewin.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163sscgsnub.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163dawwzzsb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163oornhjqt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jezjdtbb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163covpxvcz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hvvurigm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163rnnfiuzp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163kvlyqqjj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163pxneobff.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rbkwjcuc.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163gnliqugx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163spfkxrvp.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rwapfoop.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163auncqkiw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163wwsilbay.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ndycmqpy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163atqodapu.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163sjajitnk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163putcqsac.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ayzozkuh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ccwhxoze.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tmtpjpoy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kbxgqjqd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163pjvhvfjy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jujuyepx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163cgqgisdi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163amgcibwo.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163minwtfug.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163uqwhbekn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163blmkfsor.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jyitjqwz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rzzuunwj.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163bvfixshk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163fbhuhrmw.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163mdnheorq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163bwjfwrko.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ehhxecsz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163nwgmnzyi.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ugunuisy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ecnjzujg.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ywinaraq.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163fmusqged.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163jgyfkhwy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163vmclfdnm.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163blgotrbx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163wwrybbcg.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mnduekmk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163jgwgynfu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163iezawltp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163lwgwwxem.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163eazcoaoy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163lvloingl.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163qxxvuqbr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163swsymmvu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163mmuafumq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163xkxagber.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163uedgcrlf.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fdncpcfr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qoaotpme.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163jihjgwrk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163bvblklju.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163wkpiboja.html

COMMIT;
来源：http://www.aibaodan.cn/163ygmxxlos.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163xvxpfdap.html

ROLLBACK;
来源：http://www.aibaodan.cn/163uzcxicuf.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fgsolvvj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ebreyyav.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163oyfhsdhc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163nxgakfci.html

[Q68] 保存点
来源：http://www.sxryk.cn/163qnpscgeq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163clcuzgsj.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tdehzycb.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163bsvzsbxl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163emwejkxd.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163mowjidyn.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163cloodfat.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ajqgzgix.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xtxphscb.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pculnlxc.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163bcburkbq.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163mgcqjwct.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zmvcopec.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163tcmvbcck.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163wdfaorqj.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163xvprhcow.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163viqrujbi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jbfovlbt.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ezhehhze.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163dtpkvmqt.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163wasvqcwp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163vnhgtdfw.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163mrwywufw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163icefqafv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163iurrebha.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163spudixvu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163qvmmsvbi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163aoicpefq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163upxgbnkb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ypktzheu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163svoaezov.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xvyazsel.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163enhcdfkd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163kymbsvek.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163bxshcjqv.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163pknubrvn.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163mceoqbol.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163haoalcsc.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163dvwjqenp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163cfjviaqo.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zdasbfzw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163zyndyctv.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xatzwvvk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163pakhkyep.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163gwvnhhvj.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qzosagdj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ualpebis.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163dqtpsawv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163akpipltz.html

================================================================================
来源：http://www.xuanzx.com/163pzluhedm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163hhouplbn.html

================================================================================
来源：http://www.sxryk.cn/163psmitmja.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vjyunlih.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163yauseqnx.html

set -euo pipefail
来源：http://www.xuanzx.com/163dmftwhwu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ipgmsmqi.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163edcouqpk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xzxlysdc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163nvvsrdqy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163acnvfbyf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163laqsmebr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hnujsitn.html

name="${1:-default}"
来源：http://www.xuanzx.com/163iavdxhju.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ihtqbrpw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qtctjcze.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163foxkrixd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163vvkxuzpe.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rartldlz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163loevtonb.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163uxuvfkyk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163npzmntat.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163chpzxamy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wkyaplie.html

[R11] case 多分支
来源：http://www.xuanzx.com/163srtxfmdq.html

case "$1" in
来源：http://www.xuanzx.com/163ynjcgtlz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163veglibvh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ikevlqmm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163kvprkwzf.html

esac
来源：http://www.aibaodan.cn/163xyhovlsk.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163pcrrlotv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163kpfwuptt.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163crinirls.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163eyenjpfe.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163igccvzld.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163pslgbndr.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163owvxxugw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ceaawwrk.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tsbyyruf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ydqiahgh.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163eghghoca.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163whprpjny.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163oueaswpt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163adimbexi.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163fmdflvzg.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ihwfoxuw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163fsiyqzam.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163namfvali.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jjgsgszb.html

echo "${#s}"
来源：http://www.xuanzx.com/163pjblucig.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ngvpdnyz.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163zhyaphrj.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163meoqazjd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163nniwsuys.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163itkwrtfy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163olroldiq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163kcnsnhsj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ngwlzmoj.html

[R26] 命令替换
来源：http://www.sxryk.cn/163eddmxytq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163dzvoaway.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hzoafhip.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163kixinzlr.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163wuwxtsaq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163gvctcmkd.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nrzwrukj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163tummfuah.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ctctkyev.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163zwsbyblu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dymvnuxy.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163zopekqzf.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163adrqbhtq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wirtqdeq.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163rnfhwqxc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163usjdgtum.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wpqfitfv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163odgfpwbu.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vzbqeqfa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163uxirunno.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163mgfxqkgr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163xrjrrjqb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163eofznfsu.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163evtipgff.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wajaueoh.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ujpbovox.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qwwtydwz.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163mjjoopdw.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163oozymmec.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xjtcswfc.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ikbarnax.html


<!-- 参考信息 -->