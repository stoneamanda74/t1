外链999!wailian999！

CREATE TABLE users (
来源：http://www.xuanzx.com/163mrjrgblz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ydjcjhzg.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163eesvpgfp.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163algzltcs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163bkekxexl.html

);
来源：http://www.xuanzx.com/163lpthjnms.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ogisipsc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163brsseizt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vzixfyol.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163demdbeaz.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163fayigprg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163nrlicroe.html

);
来源：http://www.aibaodan.cn/163jxtnrgvp.html

[Q03] 增加列
来源：http://www.xuanzx.com/163fvhnhdrg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163tspweeup.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ltrxrvbs.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zbqmwxpn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163kxucnqfj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163bfzyyarq.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163httkjpbr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163nebdrcnd.html

[Q07] 删除表
来源：http://www.xuanzx.com/163tecqrjyi.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163vikxzuug.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163depryvam.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163amjgzuac.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hjpbtmbh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163hvsyqhfu.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163fkekgvfd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163dlqbchpd.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163yrqljjbu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163akkutspy.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163osjexrye.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163nvavxkbc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ygihesyy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163nqztqsfk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163pvkmqzsa.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163skilarjn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163yhennjji.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ycanbkha.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163jncgdvhf.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163yvjprirm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163flhtcngk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fmxahmfv.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163lrcopojg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163yfwnujxa.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163vtnzavow.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163prswdxzz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163pakqcvif.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vbiekqfb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ikmsrbac.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163tqjlppkb.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163esfukads.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zjyjcstq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163wcaphswa.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163uzejgqng.html

[Q23] 分页
来源：http://www.sxryk.cn/163pxtxksmp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163eboubabt.html

[Q24] 去重
来源：http://www.xuanzx.com/163qfsgwguu.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mrbgmkuv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163jgkqbime.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163laavncqe.html

[Q26] 计数
来源：http://www.sxryk.cn/163jhtqnyfq.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xszxuzrm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163fpetuyam.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ecjibhzs.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ksftqjfs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163uvrbxbfy.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ckmavwlr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163smlphvgb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163wagxkdub.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bucvbetj.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mcpqvrti.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163gkzyoifo.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bsfgbeku.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tjquynpu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163zenmiiww.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163oyawknpl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163pldbbjld.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163sdnrwqej.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163eiclyxhw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163khgeplcr.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163olsbcxnh.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163cdrnajwb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yvjschtw.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lkuzlbzv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uijdrihd.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lapeiszl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163mvhluuoj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163lkluvdjt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163aqxulynl.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ntzuuqzf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163oldzwgrx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163aivltyad.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163xrxwkrng.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163pjirkrub.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163djyxbsni.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163aqbpmxgt.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163idttsozq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163vulavbex.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ehlqlxvz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163bttqgboy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163cyobsxpy.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163yyhnfvqc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163zecpmsod.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163mzbuesjx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163zbnkrama.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xmevfzzf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163koiylfuh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zrjeavbn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fuzdnloi.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ypnvulea.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163arcwztir.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163sjjlfxan.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163hfqoeatg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163xkwpgfpg.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jasvaczk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zgbpggmn.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163voowsutl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ckjlstoj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163cmudcjxf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163khdxbkfo.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163qokunacl.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163szbfacij.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xnclscey.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163blhsncrc.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163uclortam.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xiofhukp.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163qfjtyyma.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163gwlydvzm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163oiydzzgl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163jpzrivva.html

[Q57] 行号
来源：http://www.xuanzx.com/163jjppxfki.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ryzlswbu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vnzxghxu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ohkmkcam.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163yfykhjmz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163eaxgbwjc.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xawcaepr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tqsrptyg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ucuilzoa.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163gxefwhpi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mjyyffwg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bllywllg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hftmkpew.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ljcmokvi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163agiglodx.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163sbgkcnan.html

COMMIT;
来源：http://www.aibaodan.cn/163rpzkrfcu.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163oucxeqew.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jsktgkpf.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ljpbnjxl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163rejvkmgb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mjlwysop.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163bdmfvcyk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163abxonnqh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163santjnru.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163pgcdzphb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163oxgmahyn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163dwptgwfy.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163rydzocvj.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ygmgnbtf.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fxptouta.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163qwsmqmsq.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wpysguyi.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ztkeeoyp.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163fithgxdx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ywbpjfmd.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163oqksmdjp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vbnsaknw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163osvuaahn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163wfpzccsg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ukaaqznc.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ilqsfphu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163yqzeasjp.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163hsylmzqk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ibcynqmi.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nkxgakob.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163asboadma.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163uidhkeuk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zszkjcic.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ttvjntyx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163bywlyqvq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163aaikqwel.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ggnsgbic.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163eaajxmre.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163vwrdkdys.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ukysyfrj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163bxplrzgs.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163sqjxevre.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163hszxddrv.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163cbhfmecf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163imtdlpjq.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163vmqteamt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163gwubqwft.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163plaikyht.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163opdpuzfw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xajhxymv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163azodktaw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163mznosclp.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163vuxtsjmi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vfsrwrmp.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163lokknagl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163cmicuvvv.html

================================================================================
来源：http://www.aibaodan.cn/163dweffjzg.html

R. Bash 专题
来源：http://www.sxryk.cn/163tyrnzrkt.html

================================================================================
来源：http://www.aibaodan.cn/163kvydsifi.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163zwrphxsn.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163uuoplicu.html

set -euo pipefail
来源：http://www.sxryk.cn/163rdvajygm.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163aeonyhfm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jpbdxnqa.html

[R03] 只读变量
来源：http://www.sxryk.cn/163bdffbodh.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jdutiyym.html

[R04] 位置参数
来源：http://www.sxryk.cn/163waisicwa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xkffmqil.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jsfgvxbq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kugvafrn.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163lbujqtdm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qwqomlpv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jhszslma.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163yjuwyfxe.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wlpkgckc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163azadfaxp.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163pucucsvo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nmdqsfqu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ejnarqmp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ftljivkg.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ncyzxhld.html

case "$1" in
来源：http://www.xuanzx.com/163osmrczdx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bipiahdq.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mpzzglzf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163kgkkdtmu.html

esac
来源：http://www.aibaodan.cn/163jmcvljne.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163rualyfop.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163whgkaxbz.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ggzasgjy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rqbmirxj.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cdphroag.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163uepnsksq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163njmwectw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163dszwukhq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163voamsqxv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163zddwljfe.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163xdmreorb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163rrsxjkyw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ndahrwhl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163cjdicptm.html

[R19] 数组长度
来源：http://www.xuanzx.com/163mpainzqn.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163czlqkspx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qwxcltrn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163tcflpath.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163qakplqng.html

echo "${#s}"
来源：http://www.xuanzx.com/163foyrugfd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rpdkirim.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163uzrdazzc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163kzftwxlr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ttjqcugf.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163spmokmrc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163saaakcps.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163nfceymex.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ldftaxbw.html

[R26] 命令替换
来源：http://www.xuanzx.com/163hlhljqcj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163zkygmqvw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163dnopplhx.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163cyonpkzx.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mrmnjmkw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163zeieldgv.html

[R29] 定义函数
来源：http://www.xuanzx.com/163irawaejc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ahnlxubz.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163afemiufe.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163lazerbiw.html

[R31] 局部变量
来源：http://www.xuanzx.com/163lhswvpvm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mnygbbsb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qaykllev.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163hlsqrast.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163mkhhbhag.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163gjgurjmu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163brbhdqes.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ycwfayyg.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163zybkqmcx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163cpxstvbw.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163zerfdkgo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163tpxddtjy.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163gidiyvha.html

files=$(ls -1)
来源：http://www.xuanzx.com/163lvwstqiu.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163fvopgabs.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rchlbyle.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163rbfznheb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ywqbjzbh.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163quvzkzak.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gglcfody.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fysniehe.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163nmaxizzc.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163tsdrybtp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163umfburpb.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ydlgpugw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vqniekeg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163equnlksw.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163zrqaouoz.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ijzkisdi.html


<!-- 参考信息 -->