外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163hfzubvqs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163srxwgrsb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nvcwmgse.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vkfldhhw.html

================================================================================
来源：http://www.sxryk.cn/163rpkwasox.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163kaeozgda.html

================================================================================
来源：http://www.sxryk.cn/163vkorkwmo.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163utvngkdv.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163zdcemsmn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tysdsbsv.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163zafqdyzv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vtbdxxus.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163cysszkki.html

);
来源：http://www.sxryk.cn/163rhqyezpp.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163yyqjbezx.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cteatsdt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ecwnxyun.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163msunioxx.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163bvsmbent.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163kxmcxdcr.html

);
来源：http://www.aibaodan.cn/163hqbxivdr.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qkpbtqxm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ofvkgtqz.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163dbqdlmti.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163jqxuslrf.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ogjldnnd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163jlfhrwxe.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163coakdulo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qndbdxzi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163zntklulz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163uoebvyqt.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163lacbaiyx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163zgeipfit.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163sskbdxlg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wmvbzrpq.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163igiddrml.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mslyrsha.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163mibqmozx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163mkkpxofc.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163gpuxinfs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163izzvyrjc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163qwsrlcfg.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ixlciarq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163xkyejyrf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163raidprzk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163zibevdbh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163nenurjcx.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ffldsibs.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163rpdqnvuj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qwioruzs.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163rfzmkeon.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163fdhxhdjb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163bbvqftff.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163xvuqhnmp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163xercujst.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163biwdhsir.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cpaiyzvx.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163blkqlqag.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163kmbcwgwq.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jirjspss.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163olaeeyuj.html

[Q22] 排序
来源：http://www.sxryk.cn/163cbqizvob.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163cvnjwoez.html

[Q23] 分页
来源：http://www.xuanzx.com/163igrqnheh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163bngdonqn.html

[Q24] 去重
来源：http://www.xuanzx.com/163isrhsbvn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163mgmxxmpi.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ugseszzm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163vctwjwzl.html

[Q26] 计数
来源：http://www.xuanzx.com/163othpzdxk.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163fgknsyzr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163aaawlvqh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ihgyrsbl.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vovutxvb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163zrlsmxkb.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163hzhigeyg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xgomrlem.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163euieykjs.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fkgzsguo.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163accqrcdh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163nadqqvnk.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nyluxqff.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kkwmtmxo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163fljgbtka.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ibpxrkjb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bkhbfrqt.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163wqownlut.html

SELECT * FROM (
来源：http://www.xuanzx.com/163rtvxrqhj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163omyjbonv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163zwiscpor.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ayphpkhl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tvlsgklk.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163faalplih.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wprrsfrr.html

[Q37] 右连接
来源：http://www.xuanzx.com/163znnoobvm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163qibgfcxv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163alzfykze.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163aumrmfal.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163snojlcsr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163odblgore.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163btyyxryo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ciwhbivy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163oashfkxe.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mnvrhbzd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163juvsqbxw.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163szqeowrx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163jqwnzayh.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wbbcnxbx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163bultpmyw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163rizlmqqk.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163uvbdikxi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163dkdefpmw.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163aypktqkg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163pqvyolft.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nhinlsbr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dfsjkqrv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ckixsbgy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gkghgcnl.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163sndjupgt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kbuwxlei.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163lydabfhp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vzglzcrg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ruhdtvsk.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ihftgqeu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vgkfeikl.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163nlaxuwsz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163gxpuyazd.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163knyqibmp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163pmvjwdxg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hpdzvszp.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163prdfxtaw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163yatvnlkl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163jovtggky.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jvbnuiga.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163dhgsuqeh.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163pysuiota.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163afogcqpp.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163inqzzfpc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163gtqijszm.html

[Q57] 行号
来源：http://www.xuanzx.com/163iwqvmzmd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163mgiphwjx.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163xpdlyboo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163euhhlkjh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163yxxtwnvc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ghlyqqui.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ljmsouxn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163osfqotod.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163annzsvbv.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163stjvogrg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163peetyuel.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fgvikwhn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mehiulzo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163qvnnwory.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163dnmiolxe.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163mgyrseek.html

COMMIT;
来源：http://www.aibaodan.cn/163xfkboxsl.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163fmapcber.html

ROLLBACK;
来源：http://www.sxryk.cn/163xujtpezu.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ycmrzpba.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163knxewxrs.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163lnvmgknn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lhxrynqv.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xnybammj.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163unxpgyck.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163hjzyhcvh.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hvkcxzii.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163dhrfrfkm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xuoixega.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163igjjfowe.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163duqirvlw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163fqmbjqnv.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ixojlriz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163dsoqgtyg.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ekpunfzk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xtdfeeyy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163esyotfdq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163rvtdqejp.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163juotmcgt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163xmburkkm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jwmaqupi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vwqbzphn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163rzpaascx.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163fvazajyx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163hmrnsunc.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163upttxxjg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kokwuicx.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163puvxdvqf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163akxdwulb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163yineaoct.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163wvmbvgtf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lnhpgnqe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163tvkjikwt.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163tykqakba.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163sntoqvij.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163lzjuzuys.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ilmhjtpw.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163cxkezmur.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163apbnayzj.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jdkuajso.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cijtkawo.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163crphrhqm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bjhdkded.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wyzwwnvz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ypswssjs.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163uypkrumm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163pxsfcynq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163wptqjqbk.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163oxcglsuk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163hukoclzr.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163euhhdfeu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zlkcddrs.html

================================================================================
来源：http://www.xuanzx.com/163ahkbzpdh.html

R. Bash 专题
来源：http://www.sxryk.cn/163yglaxvjk.html

================================================================================
来源：http://www.xuanzx.com/163bfnkvoni.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gvudbucx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ksmgncxk.html

set -euo pipefail
来源：http://www.sxryk.cn/163wainrppc.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163dgvojnkj.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163guoflcqb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163kroldjza.html

readonly PI=3.14
来源：http://www.sxryk.cn/163eenulsaw.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163chzivlvb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163lfczuzvr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163johgnsvv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tbfcrbtd.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wdijinvd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163tnoxzqmm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163mlvrrvqj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163sxsurigq.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xonboycl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ufrnobli.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gqutpnri.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ywmhmnkh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163zejpzxao.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dswypfts.html

[R11] case 多分支
来源：http://www.xuanzx.com/163agfalddc.html

case "$1" in
来源：http://www.xuanzx.com/163lsazgsyh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163jsnqbili.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163mjyibasg.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gcarwzia.html

esac
来源：http://www.xuanzx.com/163vxlywgsm.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163avcyafwb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163cmmfqwjt.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mixmreox.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163stxaopxf.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xdrzzgve.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wolckhdl.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qmidsqir.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163diwclyiq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163leehjrkw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163stgbibap.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ovhquuze.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ueqciamj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163tbgqzglv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bqcizmnf.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ztvxmpyu.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163bvdlygpi.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163khlgtgpq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163utldadlf.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163cgtqrwao.html

echo "${#s}"
来源：http://www.xuanzx.com/163caalmmsb.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163utriliqk.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163zcbonfnx.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163murwmmvo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163kugpgyqx.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zqhwfasv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ozfmehaz.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163veyoaeak.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163feynqvxe.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163stsrxfkr.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ztmtbbhm.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163zvljxplp.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ixgwmmrm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dntndwwz.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163snwdaioi.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ymrwkibf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163gqigdsbk.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163cpdynytn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163pfjizlbd.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ramafxmx.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ruhzmyyq.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163enypmirm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rrhnknng.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163yuzhoojm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163cwsmhqax.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163arwfbyus.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fovhffun.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163xiifsitf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ebkqgidp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ravbmipe.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jpkzgott.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163stubbfcj.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163opnlxtaw.html

[R38] 管道串联
来源：http://www.xuanzx.com/163dcrawipl.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mszhbdhp.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163hcxnxztr.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163tflaxrus.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163gnvifnnj.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163bjshbhke.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163erljzdqg.html


<!-- 参考信息 -->