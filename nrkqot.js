外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qkqlyfkr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163uvucqrbv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163dgqazjsu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163lfwpavln.html

================================================================================
来源：http://www.xuanzx.com/163ofruqsrj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163rcgdxlir.html

================================================================================
来源：http://www.sxryk.cn/163uhqmtdza.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jhoyksmz.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163yckqorwu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ffbxnisi.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163mujwoszi.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163yauhqlmj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163qqanujmu.html

);
来源：http://www.sxryk.cn/163clzwxyfa.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163inxkkxoc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163uzzijxlj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163izbhibuj.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163goxgowyu.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163jmmddjyc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wurogrxs.html

);
来源：http://www.sxryk.cn/163ikicblyb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dccrujyc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ioxmpbha.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163llxjhvbl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163juptnhuf.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163jbyqbkfe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163cqlwvxbf.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vyejguub.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163eazresql.html

[Q07] 删除表
来源：http://www.xuanzx.com/163qyrtkaxf.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vzupruvn.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163begowsgm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163lhwitfau.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163souhfqcj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163taqjhpem.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163irdywmpr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jrzjpjzu.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163zgqpucpy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163vqwoxvfi.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163okpwiocc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163pfhvxddp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163sraufafn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163dngyrtto.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ddnnqhyz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ifedicjb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163feiclmww.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163dshjegal.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ajnqbfjs.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qytvhbna.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163flqtgllx.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163myeqchos.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163tfvrkmgx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163txbjhecn.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163jvjvycrg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163yspgvxwf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163qcbxloml.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163guyehdch.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163xcipcrds.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163epuzuvuu.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mlkkkemy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163tjzpvgeg.html

[Q22] 排序
来源：http://www.xuanzx.com/163lpwrlbyq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163lkvqwrxw.html

[Q23] 分页
来源：http://www.sxryk.cn/163wycteefl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163fotlzqng.html

[Q24] 去重
来源：http://www.aibaodan.cn/163uykfstvr.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163kcjmkyqp.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163gfrpuwnu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hywcrqhv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163rxlsldfy.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163kclvnvkw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qqoofdee.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jhircmnd.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163pzfrducs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163eriphhgg.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163uvdbiuhe.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fxetjlft.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163uvztlsvj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163evfwgdxs.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163vmhncbjh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163erfguhtb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163aldjsmcs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rvemhyuq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163slpskdqj.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163injexsdi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vtvvrhbw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163pbsyocvl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163kliclgro.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163unedwnca.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163pemdlvxn.html

[Q35] 内连接
来源：http://www.xuanzx.com/163eeiortgp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gbepmvrl.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dovbpyft.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163inkyuyqf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lvxeqxmf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zvebcncq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ztabcgxf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ddxeryhk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163oexyemet.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163iukdvhbx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163renrmqtn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163nkniwjol.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163aapoywea.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163xvjowaoa.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163dqhvfdtl.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ekdweycv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ibfwrjwq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ezwtfpkk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mftugbez.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163pczcmmqt.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163tkzgvtem.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163vvtfsvhd.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hzcvltyj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163fevkucsw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163fiwbalns.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tgjcqmai.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163vtywiboc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ynukuhic.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163waedpnmh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163evrumera.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163pqcbqgou.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mphccmpy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163uxxsidly.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163aqhjuebq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ypwbceos.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163pbhmrppk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163dzcszqgq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163nxcodckm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fdyzoehp.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163sonfwosx.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163mzmqgiwn.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163snqthopw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163woayomtb.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163iaryxluj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163rbuuowtx.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163qxxsrgld.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163eqyoalfc.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163dkcgtjbl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163crlxbedm.html

[Q57] 行号
来源：http://www.sxryk.cn/163pdgwpntz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163epycnwdn.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163jlkhfrpk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163fnndafyp.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163uqwlnlij.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163owgzvyns.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163mtzairhb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mbzphyqt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ivvdrcqj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163qjhiyrlx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163eatqrfbg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vwqqdjin.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qpcuvjwc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163hqlqoipz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fowkwnjy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163yxkwacib.html

COMMIT;
来源：http://www.sxryk.cn/163vdnwjpmr.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163tbsdzatt.html

ROLLBACK;
来源：http://www.xuanzx.com/163accwuylx.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ldbftsaa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163usqwfdof.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ekumcday.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163qkcshdfe.html

[Q68] 保存点
来源：http://www.xuanzx.com/163juzrialb.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vveiavrh.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ffqybmzr.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163topdthkd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163yzpukmuw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163vnceplvf.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tvzrytkt.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163uogglpps.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163iiutjfri.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163mhjnifmf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hvthybqq.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163lswqlngo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163jwfvuxlp.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163raophlug.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163sntojhik.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163syrpkogw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ddsonlmn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163vnkgyjyc.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163gdslfouj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jherulbr.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163sdrbwoqq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lkdsdmnc.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163brtgbmok.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163zqqexiex.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hczxqpkl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163uhtzvymj.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ayabvwfh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xnspdzkn.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ihdkhvij.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163vbrxczyb.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qukyodjb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163marzgnef.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163mjsodizn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163vuouzixc.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163lwtumbyj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163zdrdaraj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jljagoju.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ctpxexug.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wpsddape.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163juxltdeh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163vyeowzoq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163dysbvrsf.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163vafmfgfe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163zftiwvrd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163eckztjho.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163qirzrpoh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163kjrsbojh.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163dpjzjsvf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163pbqgfwxo.html

================================================================================
来源：http://www.aibaodan.cn/163taxyzsmy.html

R. Bash 专题
来源：http://www.xuanzx.com/163uhskrhjm.html

================================================================================
来源：http://www.aibaodan.cn/163krixjgfg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163bfqjekhs.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163kwrhizae.html

set -euo pipefail
来源：http://www.sxryk.cn/163jdtwshth.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163awepnima.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rakvkyrf.html

[R03] 只读变量
来源：http://www.xuanzx.com/163eorkovjr.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hlzsvjop.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ybjoipkb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163bprkrxfc.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zbqdbgku.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wgovyumy.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xcsrbtam.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163tkviyzjy.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ndrexmwd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163uwesnlle.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mvdknoeh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xyfuszih.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163zjnylidw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163dzowfbhq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163oywbvlsz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163thjomulw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qpxqpgrj.html

case "$1" in
来源：http://www.xuanzx.com/163azzrjxwa.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163sbfbptad.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163poojljel.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163yrbaduot.html

esac
来源：http://www.xuanzx.com/163yxcmhgny.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ctnullgl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vxbiofyf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cnewenur.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163tbmdqxxd.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163mpuqebdp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163fxuriukm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163tjwzoqhw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163bfbcdxqk.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163swscchjg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163nlpozkaf.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163vziccrlg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163sumzflhn.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163sljrxada.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ogkvgcsv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163akmlkagk.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fkdqhbsp.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bebxhtjr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vgulatft.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163qbipfzsr.html

echo "${#s}"
来源：http://www.xuanzx.com/163yanxtdnl.html

[R22] 截取子串
来源：http://www.sxryk.cn/163eznzuqhq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163xkwbavem.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163joozygvs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163vvotkruc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zmbcakal.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163danhkqri.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163uqoszyxa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163isquzgts.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xhwoqyoi.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163bnftzufr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163luhtiyds.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ccverfzc.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163tjdwgceu.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vlytcxrs.html

[R29] 定义函数
来源：http://www.sxryk.cn/163gkezqiio.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163awnzlfnr.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163civslbny.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163iqpxovlh.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zvlsrfzn.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163dnkppmos.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163nmwbdssg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163eusqiiaq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163huxkkpih.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mxctdtrx.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nmlgaodq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lglscmpa.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163jkpcrrlq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ivfvfseu.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tkuckghm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ovhnwvzm.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vbyqvpqd.html

files=$(ls -1)
来源：http://www.xuanzx.com/163tmypmtdd.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wsqojbol.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163gnkyezeo.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163rzgllequ.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jhxnksdf.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163bdsgdjvh.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163cofmgyck.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163twkhdxmo.html


<!-- 参考信息 -->