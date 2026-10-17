外链999!wailian999！

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163duftjxhb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163janzizko.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163znxugvbl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dvapydak.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163bjgkyteb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163apdgdvwu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163lcvbfwix.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163aakpmfgu.html

================================================================================
来源：http://www.aibaodan.cn/163akojcarg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163hngixfwx.html

================================================================================
来源：http://www.sxryk.cn/163yvnqfymn.html

[Q01] 创建表
来源：http://www.sxryk.cn/163qcpyjkuj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163psvrsjir.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163znjyipmx.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163idbtqmru.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163tthleudd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163skzuflwb.html

);
来源：http://www.sxryk.cn/163mfjulsvr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163lbzcdjpm.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zhcmpeov.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yrboiymr.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kyjlluhf.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hqppnivr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163iirvcokg.html

);
来源：http://www.sxryk.cn/163qrenttxc.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zhumslwr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ajieuoxr.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163lzqjazrc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163sptdzqcw.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163eqlurrwy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163zfiiaqtt.html

[Q06] 删除列
来源：http://www.xuanzx.com/163bjaqateq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163wwakgwaf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jxudrvfi.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163nzvblfwb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vnttyvhx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163xoqnpzbd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163oynwtdxx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163xcsfpwwz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wotibcfu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163rmzcoxvw.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163dczotzsj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ixordyfr.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163pyxngyji.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163pdrlvppt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163rpcmrlaj.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163tabeytgh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163lwnoxkgw.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163mfeukytf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163xvzxbcvr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163zxnlaijy.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hzsjjldj.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ugnxqaod.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163julqscfh.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163cbryiiqe.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nygdysqm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163qbznwxtm.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163smexffww.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163brnmjkla.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163afbamgri.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163kccbpijn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bnzssgun.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163reqefpxn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163megbphho.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163gdmirpjp.html

[Q22] 排序
来源：http://www.aibaodan.cn/163pkyjgixy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163bjxbeojp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163itkiulyu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163biojeduu.html

[Q24] 去重
来源：http://www.sxryk.cn/163wxntoroi.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ddqqztwr.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163kjsaiojm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jbuezjod.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hrexobio.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ffckhlfc.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vjrmxxgb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xjqmntfq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163spjnzkse.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ewrqksjm.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tjpbaeut.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wyurexmq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163zduqnvsa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uknmctuo.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163oagnxfbs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163xbbvucbp.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163uglfwtas.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xoqldbrl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163simthdad.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ehotbgrt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bnsevlww.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163wchbzect.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163rmbcpbic.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163mzbmzdrk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163jflcmlrh.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163cvupzovh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jwbhxjox.html

[Q36] 左连接
来源：http://www.xuanzx.com/163svctlqmm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ozdjbgmn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163sllnnouc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163emgagoqh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mxmhhjqk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rwhojvzb.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163fgdocijl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163dxwlsehw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163eaaubtug.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163sujszths.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qfjjpclp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163sbarpvfc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ignxlplk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163zhfkjkre.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163nsbrvajg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163seylgxrh.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163kodiyean.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163qxhyaeef.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mwgfxefd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163pgbvzfmk.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xmlpizry.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ebjbmxsr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xyfkctro.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iqcrwkdn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hpmrexup.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ssdauwfk.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tqlejqll.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163dirhztxu.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163hdnkslqq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163rzknpzhs.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tcwlqygm.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163rsoyncff.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163gxbmubel.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163bbpbfobk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jvjufamg.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163fptetmlg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zvqdjszm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163fyiudkcm.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163eudvwvri.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ravbptbo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ayslqbwz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ranusgfo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163vtgkrqox.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163fujkghmr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163eexnuhhb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zfvajfkb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163gulmzsyu.html

[Q57] 行号
来源：http://www.xuanzx.com/163ncakwvmz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163sxkycszx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hnslbdvd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163kmkychbj.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163wafivoew.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163qfeycbaf.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163osrwyjag.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163bpadxwii.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163uaejzvkg.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163zqsmrlbk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ddplesqk.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163afodtwgj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ttsafbde.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163txxouznb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163qzxcjjda.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163nmpczbpq.html

COMMIT;
来源：http://www.aibaodan.cn/163acctyxhw.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163fpqeihqa.html

ROLLBACK;
来源：http://www.xuanzx.com/163xxnyluaa.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163bybtinvq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163qqaqbtzz.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163cobykdxl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pylyliup.html

[Q68] 保存点
来源：http://www.sxryk.cn/163gqkjyira.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163jjksyaaa.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ojijfjkp.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163mlydpejc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163seeqrgcc.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163erjtlevf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163xxqvcyub.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163lwgbufqa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163griferaw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pyetrmke.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rsujgdan.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163onbauylh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163udnnhuew.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dleyvudu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163jbvirmzv.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ctpubidf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163nhrmuifi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vommupvl.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ngzezszp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163kmobuvmq.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163waszbnyg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nftuiupz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ifcltzfh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hkynahga.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163mfodfouo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163nrijotmi.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zumbrstc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163fhtblrip.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163gvldycnb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rfpkaxbu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163uxawdbly.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lylvmnnp.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163fuuzvspn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163roxnumkp.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163pfvhwohy.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163wxsbzbpd.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gfdaogmd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163clwnsnhw.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bjroxdxm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wbdwzsly.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jjdbiosj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163wkmhzqaj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163lhefbguh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163nwpgevzt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ftozsoak.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163wijsbcmt.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163vvbdootr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163djwxikvw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163enwtytmv.html

================================================================================
来源：http://www.aibaodan.cn/163kxgxnvog.html

R. Bash 专题
来源：http://www.aibaodan.cn/163gdanjgch.html

================================================================================
来源：http://www.xuanzx.com/163idgzdtok.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rmijajav.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bwnaxsvs.html

set -euo pipefail
来源：http://www.xuanzx.com/163kadumjiq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163gxkienqb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163koiexmis.html

[R03] 只读变量
来源：http://www.sxryk.cn/163qvgwvzxp.html

readonly PI=3.14
来源：http://www.xuanzx.com/163eelgfyqo.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163tmecwbcw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163rcbuaosl.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163mvqpirkq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kacczbvw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163cypnzveu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163byiawcjo.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163dweulzbh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xejkviwy.html

[R08] 数值比较
来源：http://www.xuanzx.com/163drpidcup.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163umyzsqmo.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163iaykotsk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gowymdvc.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qvofnoot.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163nxcvdiyw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163rlgkrnna.html

case "$1" in
来源：http://www.xuanzx.com/163wmpbsupy.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163lyblolht.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163pnfsbpdt.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163bgddbinn.html

esac
来源：http://www.aibaodan.cn/163vsrsnqsw.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163zmpxuetd.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163briwlzvm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ypyvqcrw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zopsmlaq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163uuckdxvf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163affmejvc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hxyliuhq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wfhggjbp.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163hhwsbxjm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163bixzjpgz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163anolmccu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163zjaclhwn.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ybjxljja.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ebbwjpji.html

[R19] 数组长度
来源：http://www.xuanzx.com/163zwtwcpyj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ddrfnbwe.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ghcaezrd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163fsecepey.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hoqclawa.html

echo "${#s}"
来源：http://www.xuanzx.com/163rlrqxkcf.html

[R22] 截取子串
来源：http://www.xuanzx.com/163mlnkseqy.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163dbzoxaer.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163frvcobpv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163kugrbxng.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rdusrsyu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nrfweekq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163acjxhmlg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163qxgdwsdq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163rmanhxfl.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163bideqyyg.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163lacnxycq.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ndhjmlrg.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163wvhkhthe.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bywoiiss.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vjokgqvs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163bbwyknac.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163unqxojem.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fwwzzneq.html

[R31] 局部变量
来源：http://www.xuanzx.com/163klocguyk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163oyhfzeqi.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163jeuagnjx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ykqkljot.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tnaekoqy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163hzgfgsid.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qgfgyjuu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xdkkssnr.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zmyfvrfd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163rytlbwhh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hhiorbvd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163eaxflxao.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163agmfflzk.html

files=$(ls -1)
来源：http://www.xuanzx.com/163dxzlyysh.html

[R38] 管道串联
来源：http://www.xuanzx.com/163upmktsai.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163nynjcqif.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163mwcsmjwy.html


<!-- 参考信息 -->