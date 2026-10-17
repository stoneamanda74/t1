外链999!wailian999！

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fjnjcsdw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163hcnasiuf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163idchxyvs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163qqpqevws.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163oycgwrtx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163obmbnbdz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163tblylsyh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ghovdnwf.html

================================================================================
来源：http://www.sxryk.cn/163gmvojmlt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gqctxsbo.html

================================================================================
来源：http://www.sxryk.cn/163mdhnghrp.html

[Q01] 创建表
来源：http://www.sxryk.cn/163aexivygh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wtipuvbm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163eqyoztvp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163tqawpwka.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163fpfiwdys.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163sfotwvkr.html

);
来源：http://www.xuanzx.com/163evqqpmvv.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163gpleebpm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jbanfmzt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163oyurhqmn.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ozqxibur.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163hclywmlz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ureckkes.html

);
来源：http://www.sxryk.cn/163hogxllrh.html

[Q03] 增加列
来源：http://www.sxryk.cn/163laexaich.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163lsbkbxzm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xrmedupy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163blyqnbjj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qpvljmmq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163kcewdzgv.html

[Q06] 删除列
来源：http://www.xuanzx.com/163anzocugq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163itdpruva.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163msdzwqhm.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dcnqqaoh.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163dctaadgq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163xvmrqzkr.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163hletgknx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qbiwhcib.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ddqohdnx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mkqjwpck.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163rluyuaeb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163bngdscfw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163daiuknmi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tvpvarqd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dyslpdpd.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lzbmayzx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163lschwmoy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hxyicqiq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163uokaiwsx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163smghgbjm.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cholfine.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163lxmjdkoa.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163tgjomowe.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163iqcewqqp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163cmfghqqy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163bdouxgvq.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163itlqchwi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163uveemojp.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163pkrqqizu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163vbsrrfhc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163aysmofjv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163svpnrzdo.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163rwsojbyu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163oupaaiix.html

[Q22] 排序
来源：http://www.aibaodan.cn/163qsbqhssy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163rdmvzogk.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ftoneacl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163spejeasl.html

[Q24] 去重
来源：http://www.aibaodan.cn/163nmulvxvo.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ktctoqnv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163iavmmzmj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163eidaxtgm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163cdiylbwq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ewvzzlpj.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163sxrxsfbn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163uaxjvbhk.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163onluiktb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ixpqtbbm.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163mjoavbdi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163koxiasfj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163kwoggnac.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163octvrkij.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163yuabpgzt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163timffipg.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163qrujmyxo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163etarafas.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vulamxrv.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163aloddfhw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qzdzrfhl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163sevwtrxa.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163pkuvbeba.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mxwyjamm.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bpktboot.html

[Q35] 内连接
来源：http://www.sxryk.cn/163aqwcpuzv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hcjloaep.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fpafmebb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oyregzmd.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163raupvomw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163tleuluza.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163yljjaios.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163zxgydoyj.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163bqqijbmt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163gvqdjltw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mmababuz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163tcaboyil.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163fudwfdsc.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163yxdgedcg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ndamipel.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163rmcbqrrw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163shxmnmef.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163sijfjrvw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163gqeddwse.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163djigrlzp.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163qpggohog.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163jvfuhfjl.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ajogeuqr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163hbayfnvi.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163upqeujgd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mecmqnfz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163fxeqjdwy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163zkrawsmq.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163mfzslnwa.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163fcavmdyd.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163rwtmyzct.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163xoddfdis.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163mbkkcnsk.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163jrkgqrri.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163glpnrooh.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163gkyisuej.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163owrfitkt.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163rnjezrne.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163dyjyxgyd.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163wewdsvte.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hevfqjbi.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163guiwaicb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bztarxuo.html

[Q54] 清空表
来源：http://www.sxryk.cn/163qgfokwjv.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ocotwbrk.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163nvtuqyze.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cmefcblt.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pljwvswc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ufjbdvye.html

[Q57] 行号
来源：http://www.sxryk.cn/163ntkdlmpa.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163szzazeob.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hyihuoom.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tnnjhpfy.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163naqfodhj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163cqtlwfyo.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163zkfosnae.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163nzzyghvq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ffvlcujj.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163viutbtog.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ieegsbeg.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163hshcyzki.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pxgseaez.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163hpmfwiwi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163aghknaek.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bmkataas.html

COMMIT;
来源：http://www.sxryk.cn/163abaietdt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163auddgoni.html

ROLLBACK;
来源：http://www.xuanzx.com/163tpnrojlx.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163jjpnscuf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qousfcct.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163nipgxhoz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163phenenvy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ggmtylva.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ryykzdcs.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163gjcbbkgt.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qpyptxqj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163iwmcwmxb.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163btabmrub.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vwotfaba.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gioogoin.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fyocrewq.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163dudsdqtw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wbjmfalm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163yqkdtyxj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163amxsshba.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zuvmvzcr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163tzbxqefh.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163yyyitafv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163upqsvqgr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ahdxpmwu.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163xczcmame.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163wwpmebau.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163pminavkg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163oyytiasv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163hxfgzxhl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163pxahmzcs.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dzxesvfz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ehwiawek.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163gsvdtbmu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163majboqzq.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163nzvuscfb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163alztmsiq.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gzxuyuhj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lmrzjwwj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ztriafam.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163duotyjtv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163oxjfmkzq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163faciuage.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zyrtlxrz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nlmawbap.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163wgnkprfr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163uvnmdnhn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pudfpxkj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vexktavb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163matcnslg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jowcoyei.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ftkkhwvh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jorroipd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163vaafjvgu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163yileuwto.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tykvnlfl.html

================================================================================
来源：http://www.xuanzx.com/163oaukdyyx.html

R. Bash 专题
来源：http://www.sxryk.cn/163rpprjhrg.html

================================================================================
来源：http://www.xuanzx.com/163yibjxkcn.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163grompyiy.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163kdzvgcha.html

set -euo pipefail
来源：http://www.aibaodan.cn/163aesmjtom.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163tpnklyrc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vxvukktn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163acbtryop.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163nznwlzdg.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kowcjueb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163qmdkmtto.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163iizyalyc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163sysdkgaj.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jsrhdlvs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163lespmqcg.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fhltlsjm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163rlyxjbzh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163lhwzjwpu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163gypxzjsl.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163accioeoj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hslfrigm.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wdfqrdor.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163jqgmxpto.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xzlpntun.html

case "$1" in
来源：http://www.aibaodan.cn/163dzoaihea.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bkwturni.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163wlwaprgt.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163evbyufst.html

esac
来源：http://www.sxryk.cn/163hkhfdcvs.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wqnlgezx.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163mlzvezcm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163eaozqjta.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163hywsabdm.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ewwqtjli.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163eqaldhnk.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163oofxneyl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163nzskrkdz.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163cgqihqti.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163asnytykj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163uslipukz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163pwykmfuq.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163cvtpgrye.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163hpxrhpfs.html

[R19] 数组长度
来源：http://www.sxryk.cn/163wezmekvc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ydxyxsye.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163zjyjqsjy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163vvapcmyn.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163vzuolgko.html

echo "${#s}"
来源：http://www.aibaodan.cn/163vpwwzyjz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163bebbcidg.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163armqgzll.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pynodjya.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163uzspcldk.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163dttmxsfm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163hosrnrat.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163jplezfuy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163evdharei.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163txywihhq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163uhyqlodn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163hxjrtbie.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ysvprfvd.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163zdesxloh.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ckulecog.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163yyjavppn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163rwlsgpae.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163brqxaaog.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wqsxonsq.html

[R31] 局部变量
来源：http://www.xuanzx.com/163cszqabos.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mocrgunv.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163gzymedpl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163hsvcnsng.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163phjjtmfb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163fwmqjthy.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163yznpjzvv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qfifgqrb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163onouxbvp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163gnsfbgnn.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163pgdjyarw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zpxlyvop.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163zxxswfsj.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163tevkyldu.html

[R38] 管道串联
来源：http://www.sxryk.cn/163cnomzkpb.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163rddiqnen.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163cscnypkn.html


<!-- 参考信息 -->