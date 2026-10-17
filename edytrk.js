外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163fwpnhokr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163nxzecoby.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163pwwsrihv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rmooetxi.html

================================================================================
来源：http://www.sxryk.cn/163gogedoms.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163guoshhhi.html

================================================================================
来源：http://www.sxryk.cn/163odimqqbb.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163xshkpcuu.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xbjipfxm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cezdsibw.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163nzewakkg.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ndjrodjl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kdzekash.html

);
来源：http://www.xuanzx.com/163qbwvqmhd.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163etpomvrf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fyohcset.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163bntkqtkv.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xvdbfzvl.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163wsvcnego.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163bdqiiqpc.html

);
来源：http://www.sxryk.cn/163nblwosqd.html

[Q03] 增加列
来源：http://www.xuanzx.com/163noziidig.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163flddvwfi.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qoyiezfj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163lgqrpcdc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163inrkdedl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163aknbhucw.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163yvlgriou.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163uhzmalwk.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163egfmpauk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163owrsphvb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vvwpfmzg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163nrkmxnrb.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163lsxwrsyv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163fgdpmqoj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163bjjrbzie.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163cvfdidux.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163lvwpnzqr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163cdttngyu.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163czolhere.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zskwvihv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ksavlmty.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xwvoouks.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ksekhcqp.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163clrpxvyp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wxxjsknd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163hienlnnd.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163mrfhkyby.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163yvvdrikd.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163talguues.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163oaxbiuyk.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163xmpsthgx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163yykykjzv.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163csapdfvg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163eefgzisc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163tyrdfute.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163igmbcmhu.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163tquzshij.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yklxpgnk.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163sjtvoevi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ioghhedz.html

[Q22] 排序
来源：http://www.xuanzx.com/163kecglief.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hmtjhglo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163oeggkwwv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163hbekoqtw.html

[Q24] 去重
来源：http://www.sxryk.cn/163vkiwlqer.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163syzawmij.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163siopgshc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kdceyesm.html

[Q26] 计数
来源：http://www.sxryk.cn/163ercxleio.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163bakgkbxz.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dtggheeu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ayeiaelb.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163entexjtx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mhjbocio.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rioybmsw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163opfutqfx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163kmpezswm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163imgmkjxa.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163bhpoyzzz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163utdelzcn.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163mhzmzvzj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xoagwzly.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163kfbvcrdp.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ciqglnds.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163andxmdgu.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jzsbrdsr.html

SELECT * FROM (
来源：http://www.sxryk.cn/163smljrayf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163lmdnwsii.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163gxoskzxx.html

[Q35] 内连接
来源：http://www.sxryk.cn/163xaltuuen.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tmryatmk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163pppchxtk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ysdsiiac.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163pgcxnsgo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163fagqxkoa.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163gbodwmzu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163kztuupjm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163pzoznlnn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ecfxuoub.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163uauxroul.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mlcudzuv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163hmuvuysr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163fdtxmuhk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163njjcnhtl.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vzixqkyb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163fyqlzccd.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163mfoahccu.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163iayazoyx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163doibiten.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xwlsgdif.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163osmjhofj.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163hhpktgwk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163pqvkeejq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rcpijlvo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qodqpotk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mocvmipt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qcrduqwn.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163cecrdljn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163kkaiymtk.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163kbemnfla.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163sjxhzwpu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163cdsxxzza.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163wuuzdntq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163kxcnzlcl.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163letpzxlm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163chumdrzs.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hbhiqwaa.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163bnwpcbqe.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163aippyvcq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ejplfglc.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ibemdmhl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ikdrnjee.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ikmbdxky.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163bctygbxa.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163inzpfrcv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163wrucqzgi.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vhewicyt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163xxpoiqzr.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fdxfcdzf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ccliglji.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xkqdykcy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163gtjphdja.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163drclcqzq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ziesuqlh.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kenkcmam.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163igxrmvhx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163wdhoshwr.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qggsugxs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163igbjmqfl.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163zvuwmdnb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kvizibbv.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163tdcnoznj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ewvqhong.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163emmicgwo.html

COMMIT;
来源：http://www.aibaodan.cn/163gftdukyb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rlfqdedq.html

ROLLBACK;
来源：http://www.xuanzx.com/163oofginyi.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163exqxkxze.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163uwkdwuvt.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163gcztdnaa.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163qldkyqqg.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163dlclxplq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fqzutfct.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163uvymufmj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163fdundjam.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163bzfpwiti.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163tvhiltvc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163vsinvrew.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163eweinynq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163fkuhltve.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tiixpkdi.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hxwieggi.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163uuwwobku.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163kjxorjid.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163vooonqbu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163tgqfxvea.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163zatlqrmz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nlicmoux.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gmflbhiw.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jcamovhd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163fiywfquh.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163xdyfbxre.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163shgohqun.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ruqrgshl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163uczfzrwt.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163aqnqvupk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jasruttv.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ldtrfiaf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163wwtxkqzl.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163otxmqtht.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163lhhndqyx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163escvjbxg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163vltxyolc.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163dmxpanwx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163iquyayjh.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163rxbozuhz.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163iqjyoock.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jpppymws.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ujvchmaj.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bxwobxet.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wplpvppn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163sufmymga.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163onuphqrr.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163hkoubceb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qezwngcw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163daffinyk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ohmjzabv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kaarzopf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163fyptipnt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163jwdmcypd.html

================================================================================
来源：http://www.xuanzx.com/163pwmdqhfa.html

R. Bash 专题
来源：http://www.aibaodan.cn/163eabvrrjo.html

================================================================================
来源：http://www.xuanzx.com/163ipyftiyc.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163azhsqldm.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163gswzdphu.html

set -euo pipefail
来源：http://www.xuanzx.com/163qotylooy.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163qxcuandc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163dxvbucrr.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163fmiobvvt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163klpdgpet.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rlyvopnm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163qeehzxns.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zzahwqdy.html

name="${1:-default}"
来源：http://www.xuanzx.com/163jwwafoyw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163iyfnldfp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163rjpznoga.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163pfwjbczw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163hcprooji.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tfvoiakr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163orqvrofk.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163nfuysnwk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ojlgkrkp.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163oqsmqpet.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163tigmyjjh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163rbtkhsxe.html

case "$1" in
来源：http://www.xuanzx.com/163jjpnslkz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163pywhbsuq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163iampzybc.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ltogsmwz.html

esac
来源：http://www.sxryk.cn/163bkuicuqs.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163bzdutjhr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rtmpsqbe.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qxmskszi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163yilyzvzi.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ydpuraew.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163rrshexen.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wjztlhoa.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zcbggdpj.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nbaevwug.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163dnujrtwu.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ecvtxsxh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163khfnlpag.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163fxqsnekh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163uiihebgk.html

[R19] 数组长度
来源：http://www.xuanzx.com/163tgqppxfb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163dqkpriar.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163brvrstib.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ekwtuvlm.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163elbehwcp.html

echo "${#s}"
来源：http://www.aibaodan.cn/163muzpmdfl.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ofasrkfb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ooqkviwl.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163dbdimwre.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163anmoinay.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163uvwcqrwe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163peaxotvh.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163hjchdcsb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163snvzpcqu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163oilvdcfq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tyuoryjb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nekpuipp.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163dacsxtlr.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ellyrbfh.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163pjzqspxa.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ajrmgqin.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ypojrbmb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163vvrawrjm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163icpcxkcr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163pvekxksb.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163zgjqvhag.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163osgnzjsg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163asrgoivk.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163xjulnmlu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zgthsyeg.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hqbzkayu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bhyfymth.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163unkkigdv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lqashksl.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mdifgruv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163blvqjgbm.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163wvjrfoft.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163eooochwv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163somveghs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wezvxobb.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vqowbjqq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ozkqxqeb.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163dgdmkblk.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163iblxecuf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163epvjaixm.html


<!-- 参考信息 -->