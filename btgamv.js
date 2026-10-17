外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163timvzndz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163iabpmtvg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dqzjzazq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163exupbwvv.html

================================================================================
来源：http://www.aibaodan.cn/163uwfggvbi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163jcbkghlp.html

================================================================================
来源：http://www.sxryk.cn/163lzayhlkh.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ekunblty.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163robsanrs.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163snbodqgy.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ujhlvvbf.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163sgyfpmmq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163huuukijt.html

);
来源：http://www.aibaodan.cn/163tekeyqho.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163rxkeswpc.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ahoutegz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163blzhkvqb.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163qdjyisyg.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163urxqfcqr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163lfivgwod.html

);
来源：http://www.sxryk.cn/163paqeoebz.html

[Q03] 增加列
来源：http://www.xuanzx.com/163mgumhusj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163zrbltkti.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163udhdpqvq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163llhtcohv.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163akguyejc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163lfqeyatj.html

[Q06] 删除列
来源：http://www.xuanzx.com/163njqebrrm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ekqjcctb.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ythbbvrk.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wysdoggs.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163oxkamxsg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163vkttuhzw.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ytknpxtl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ujtsfidk.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163gstekgby.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163pgybasal.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163gyhapbdk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fvntheym.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163htkyfnfr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163jlataikk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wmhmomjk.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ynminnqy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wflgoxqe.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163eyjlhlue.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163uobaqazy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163hwbxofxb.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cnswltrb.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163bmzoqobw.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mmmwyoyd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163chsbfwje.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163rwchkltd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163uezpeczy.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jsdimvfu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163aqdsxwxu.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163jlhddktc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dmhncsax.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pjzbsnnm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163pkpcddaq.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mcvwwqmm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163oszjjpku.html

[Q22] 排序
来源：http://www.sxryk.cn/163eoddctnd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163iqcpbedn.html

[Q23] 分页
来源：http://www.sxryk.cn/163bvxbwmml.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ivpzxrsp.html

[Q24] 去重
来源：http://www.sxryk.cn/163qxwbugft.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163kpjflzqq.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163fewdkdnq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163xgkrkjmt.html

[Q26] 计数
来源：http://www.xuanzx.com/163dqyvsqvk.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163oxdehakw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163uckdtccv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163puggxkea.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qdtsbtiw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163gpanenxq.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163lwmdxxak.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ogfembns.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163dagejona.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wxgpbckp.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bdoaeqyi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163qjhzgykq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163jrdekpdi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ltujsabu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163obcleygw.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163uxbkwuin.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hvghrexa.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163yhpaelul.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ofyrjslg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163bwmavbsh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163kflgmhhr.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ovuxoqvq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hnccfqtz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163rwxcnagr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ibfdicda.html

[Q37] 右连接
来源：http://www.sxryk.cn/163nnympzdr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163txxlbrjy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163iangtoxv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163kqkrgqzl.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163kjptrhus.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163kpddeojm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163joggpptw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163kvzhfigi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163sduloayi.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163snxcrpbj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163qgnarkzm.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163jwqejzxt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tcpzvgyv.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163fzqkmubp.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163eiprpvok.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xhkirdbe.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163rkrfwmoj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gfyttnpx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ldluqdge.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163cjprxdqz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lyethgjs.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mqbbzydv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163snmyelhr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163magyoahc.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163plbnaxyr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zutwaxfi.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163qaezuuls.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163fmmnyrnw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163xdybjrtu.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163rvwjdofa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rwpxzwoa.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wxaorxou.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163vbkxgneb.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fwvlwnkk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163naszkyhn.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fbmslemm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163dftfngfv.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163pljbpafb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bpzlrtfs.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rdqbtcsj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163uuryvvfs.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vovfbukc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163uuxsvypa.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163snzidcup.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163csmeclee.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zgdwnfsl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163guxhadyk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xdgqhsyq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ipibsqpu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163spzznfyo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wplqblga.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163cfcxsles.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vftxdlgu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163beppovta.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163htfndnhm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yezsfggf.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163eqafdknl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hgtttnbj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163zlqjjaxf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163lphoxkba.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zslauuoe.html

COMMIT;
来源：http://www.xuanzx.com/163lyjbntny.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163mgxrdbbp.html

ROLLBACK;
来源：http://www.xuanzx.com/163xpslwrzl.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163pyqgefhj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qlfyhxhs.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163pbnmjafm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163xkfvtekn.html

[Q68] 保存点
来源：http://www.sxryk.cn/163cbpvucjf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bnayqghd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rnaekrfq.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dzhfxret.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ngrjgfar.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163nhlboddd.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zubjkqzd.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qvnuovur.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xqhsbyso.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163acsiwofz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hgukppdx.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163gguwakev.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hbotigvb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ggbhtfuu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163fpwdjwxm.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163gxnwflex.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bnegwkgl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jbwjnewo.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163lfmpinud.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163rvzbmnsh.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163gbykwvbw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163sjbxpjhu.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163vhiuoesc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163dkffbtki.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vwzkpqqz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163leqddqna.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163smuhqtbz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163mmjexbtm.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163auysaqvq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163eluqurax.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163cshedxum.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163dsqppgjv.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qpyjuwip.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ftitnyvi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163egfdenyn.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163uaxovady.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163tphomruo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163pfteymyk.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163yrdqzztl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ecnphbjx.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qrgiwgea.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163jgprkurh.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zhzgnnsg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ythwzxjg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163uayxzcgp.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163xgnmmslh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163hdschvvz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163mwogdzmh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163makluhqn.html

================================================================================
来源：http://www.xuanzx.com/163frafdeaf.html

R. Bash 专题
来源：http://www.xuanzx.com/163nvrdmjea.html

================================================================================
来源：http://www.aibaodan.cn/163olavxqsg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163tsjgztsg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163shschyoc.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ewhfktbw.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163trqcbvyq.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163jyvrhurm.html

[R03] 只读变量
来源：http://www.sxryk.cn/163wcmrgods.html

readonly PI=3.14
来源：http://www.xuanzx.com/163dzytywme.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163wrmafywy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163bjtlnsdw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163lzbgaxeg.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ejeiugem.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163fiismxdd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kqzwnwae.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163klltuyia.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xsfxjpta.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xykzzwno.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163swbybirv.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163cnsotvhh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xygjbahl.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ltpzebqa.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163vluuxdda.html

[R11] case 多分支
来源：http://www.xuanzx.com/163tmlncdkh.html

case "$1" in
来源：http://www.xuanzx.com/163lwspbqtt.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163rncudfzf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ecakqdzq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hhecwyza.html

esac
来源：http://www.aibaodan.cn/163sxiaybbm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163lcybyzdk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163stwcznlm.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163sopfbisw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163onmflnne.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kcxmzcap.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163pewullxz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163djvaaiot.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163rivdvlpi.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163fxqwysst.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163henrdbfx.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qmlxewuj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ogzdhqew.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wzernmnt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163jlpwfzzi.html

[R19] 数组长度
来源：http://www.sxryk.cn/163lwrqmflm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bxvfiqhg.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163tpyuxqnj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163lbuntrpq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163owdzvbpz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zscctsdn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rblzqtnr.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163khlvsqbt.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163zjkjttrb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163mlxepskn.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fvhaxpyq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163sgjbqrtf.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zxtemiol.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163rtycphkr.html

[R26] 命令替换
来源：http://www.sxryk.cn/163fkoxumwl.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ypatuzba.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163tuajqmgh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163jfgbwxst.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163hgtvzjcb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163pgipycox.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ahzptdzr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163xnjdweat.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163wzmwyted.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jaokywko.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ekmzykik.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wvjxhckp.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mlyxtucf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jfulkoiy.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163omjynpdw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kojwrmfz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163uzfrdoeo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tukmcdnm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163triatwta.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163fffozasi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163cgdqsolb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163vgzrurxw.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ghyvcyas.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ugigeiov.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163tylxohix.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163fzfnhrpm.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qxjkstmu.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163cfogzhdq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ouaujvca.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ttckgoxj.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163axqxfqjm.html


<!-- 参考信息 -->