外链999!wailian999！

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163bllxradh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163etpudrzg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163tlgaeblj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163omsuygmm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ufjxwlnz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163cwjwtvfh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ewjmikxa.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163cdtvgihb.html

================================================================================
来源：http://www.aibaodan.cn/163kqlwtjeb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zpupinxf.html

================================================================================
来源：http://www.sxryk.cn/163ltwaphjc.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lbwxhssd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163gvsotdrs.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ddkacwki.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163uuvjxtpa.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163xayngjms.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wucnftgf.html

);
来源：http://www.xuanzx.com/163sxuskiwk.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163iznykijl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fiiyafpg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nvaarfku.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163eisqlycp.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163pvgicznv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163zybpgcpj.html

);
来源：http://www.xuanzx.com/163mwedxddf.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163thyvbspm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163bsabfqmj.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163pbdksisz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fkiyokad.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163lwlvuuis.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163goscqiwb.html

[Q06] 删除列
来源：http://www.xuanzx.com/163zswrlqjn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163qlatnlni.html

[Q07] 删除表
来源：http://www.sxryk.cn/163yklisfge.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ecyozcli.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xirydmik.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163norjxtsz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163bdikubnd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163uhqwndqq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wkfqroqg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ixfnldrh.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163mrdlrzil.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163edmzjosh.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163bhkmrpzp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163btunatfr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163oklaoxhf.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ervbrjqg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ktyrcbvr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163regjhbys.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163cexwoptx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zjyapiji.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163zdxzofpk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zclokkwv.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163tjghgqtf.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163jsygfbon.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163chlfntvs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wohsjohb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163cqlkivmn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163jqshklyr.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163mfgmyfcs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163cislhplv.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163hduuwido.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163vtgkkavh.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163oaascqvj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163teispvyg.html

[Q22] 排序
来源：http://www.xuanzx.com/163jvanovdu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163scorqfbu.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ubeifpir.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163cdzoffwl.html

[Q24] 去重
来源：http://www.xuanzx.com/163davyjfvr.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163nixdfdox.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163mftdyuzg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ozjetcsb.html

[Q26] 计数
来源：http://www.sxryk.cn/163dzupztij.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ypdasjhv.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163xotbfemd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163boqnkvrc.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163wlksywve.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163rnxcgxna.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163apepydjb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163qewjqvyp.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163suhrxfac.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163carhweph.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163bqwjvuet.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163qddymkqo.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163iuontrmj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tjdwouqi.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163metcrssy.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163azautqhv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163visytwlb.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163kgrzehuo.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163nxvsjimi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163jwujxluq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163crvrncwn.html

[Q35] 内连接
来源：http://www.xuanzx.com/163miohcwkq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ynvzcxlb.html

[Q36] 左连接
来源：http://www.sxryk.cn/163hiqilxao.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qfeyoias.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163zzydznss.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163awfrcvzr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163gybibhaq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163egtdgzxd.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ojjsqvpq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163tvpxconx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qladrrpf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rrvvxffc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163uyaaxrob.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163xhkstefn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163zpzjnvxy.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qchtsfse.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163qttbjank.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zutskabw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163opohjkma.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163sqtzkpxy.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ciwftdzy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163qirxeuvk.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163syvuguzt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163romdrclu.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zackxija.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lmdnrcqx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163lewwkorg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sowdoqhq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163voyppfsf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163idcgqdxw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163gjzudneb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163xljrppdj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163brawbwro.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163rnrqlscs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163aecytuks.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163tuamqomm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ohjjndtf.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ogzcumxf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fldmlukn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163qkimquce.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163fugeczca.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163enpztkae.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163yacmkmtt.html

[Q54] 清空表
来源：http://www.xuanzx.com/163oapvawxt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mbvhbrvw.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vqsayhnp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wohoxubg.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ahilaxkp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163mockdrxs.html

[Q57] 行号
来源：http://www.xuanzx.com/163uxdaihxc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ierefsyi.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163hdiwujcc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ccpjagef.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163vjmkftpy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ktuehffw.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ybpmggbb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163knkzciaj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qgbehqhp.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163pzgymgdp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163swnketvo.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ygpejlff.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oeqyyfop.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ubbnynij.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ieuxnfsd.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163aeisutyg.html

COMMIT;
来源：http://www.aibaodan.cn/163lpssvipr.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ptjkqnxq.html

ROLLBACK;
来源：http://www.xuanzx.com/163kxhkmuiz.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163palwolrr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163txdinfjq.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163bcpgwesk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163andhggde.html

[Q68] 保存点
来源：http://www.xuanzx.com/163pjhcvwzt.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ypqzzqlw.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163qikkofkq.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ozffexzf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163zvwbfhew.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163edaikxeq.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dnypcwoz.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vkdibjpa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163rfwydzgr.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163plugfkzi.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163nnrewlms.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163fpyhzrft.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rhjfxjdi.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rahyjolp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163sleugawr.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163okuarave.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163xxbzlyqr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163xyqotoah.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163heqhnftd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163iboenlmm.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163zuiazpwq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163dijpfuna.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jykrbard.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163efjdiodh.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ntkfancg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xsjsixlx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gyytoooe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163padkmxzd.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ypeonuoj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ordtqncd.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pdxelywd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163fnvhymcq.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163nwtqkgjo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ittepzkk.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163fajchoxk.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fsjjaznm.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163tjsaougq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cvbvwaem.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163tdouqtzg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163yecbjgum.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163truexwfl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163uehxkdzq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163fxrdjsea.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yupirpqj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163hxmazjkx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hqijftto.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wdzcqtox.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163cyhfeqae.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vuaqtpng.html

================================================================================
来源：http://www.sxryk.cn/163hqyrpfvf.html

R. Bash 专题
来源：http://www.sxryk.cn/163xzmtxyli.html

================================================================================
来源：http://www.sxryk.cn/163omzgckqn.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tvsmydvw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163fvaavefh.html

set -euo pipefail
来源：http://www.sxryk.cn/163vhvfxlpc.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163psmhqqha.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163otnrcgtf.html

[R03] 只读变量
来源：http://www.sxryk.cn/163rqpjlkzn.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hujrfptv.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ayxynxcg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ovsisjwv.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163receatel.html

name="${1:-default}"
来源：http://www.sxryk.cn/163daagiydw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163avcfkfju.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163zzlxcwbb.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163flddepxc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163plgaiwnq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lksnjoai.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vnwudzmf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ltsqopum.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163awnheeis.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163tamgmcnt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163qkvqyqgc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163jijmmvzp.html

case "$1" in
来源：http://www.aibaodan.cn/163yovyhetb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163igxqhqkd.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163grjxivtr.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163trkqswhn.html

esac
来源：http://www.aibaodan.cn/163aanlyhbc.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dvpwvrsb.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bynotctk.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163spopzzwi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163aeoylbnq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163jqbotuwz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163rbssgpzp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163guunmcra.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ntzmgqxx.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163awdiqmzq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163rsimpgmc.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hrjdflxq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ivunkffr.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163objtkcob.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163iznllewy.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hswmnqny.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dhferdfe.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163sjmbtcju.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163wlsxzvxw.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zeenlaxo.html

echo "${#s}"
来源：http://www.sxryk.cn/163pkuwfxwo.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ndxkxrut.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163uomomoib.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163yzopveeq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163wgwbbusk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163drnmanwm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ockupkti.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163dywmfmgw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ojqwvsab.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rxzlatcy.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163qiilbhbc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163xgtsehvl.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163sqphkwbj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dfeebdqh.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163nzdfssbl.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ysrxqfea.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wdkpfrvh.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ajoldnzd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163feoxcebg.html

[R31] 局部变量
来源：http://www.xuanzx.com/163horiouht.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ilsdmwjh.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qaqxphqd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163srxvxojv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163rgfxksze.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kkxdudri.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163wgkjuxcm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163csrecozk.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ocfxiysw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163kcwbyazm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163kmrqyjfi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163llazyhua.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jhrbkhyx.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163rlvofzvp.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ceiykpou.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163arqxffzl.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163bhofplrn.html


<!-- 参考信息 -->