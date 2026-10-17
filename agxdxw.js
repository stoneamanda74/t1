外链999!wailian999！

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163klgixair.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pxnygnyp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163piqisbnh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163atihdxov.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163khykeijw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163zeebtpky.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zolzcqby.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bcwyarel.html

================================================================================
来源：http://www.sxryk.cn/163vfudyadb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jzgktpvf.html

================================================================================
来源：http://www.xuanzx.com/163iswfoxox.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tvuhtdab.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163cwvtwqkq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hbtukseq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163riyhygfs.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ueujywys.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163bxuefquj.html

);
来源：http://www.aibaodan.cn/163xciheqyo.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ygkflubq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fawiybja.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nrdlxmsr.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vpnvuqdu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163xgsziqrq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163kxrpviav.html

);
来源：http://www.sxryk.cn/163tkychrdt.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zrdkpavx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163cboazhwx.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ctzhrpyl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jrkowenf.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163oxcgatoa.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163vvwnovif.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163wgtpfwcm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163gfeavnwq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163uqurwsgw.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ciiumwnb.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163aynamlzv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ggegmuod.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163oujmswzp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163piewxkjd.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163iddnckxv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dqjxxdsq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163hkjklkic.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163gbbgtmfm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163szbujrkm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ajchfapk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163gpgtlgzz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163hgvnmqam.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163cfdojlmt.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ypaioaxc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hmlfkbfk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163fuzkfirj.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163sererwqw.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163yeyrzspi.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163hxnoqqln.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mwuyzciq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163potkcqpy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163egztdqlg.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mazgdmqz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163gtuzxlpp.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hfjbzupm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ljmxvhcp.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ghryhjou.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163enxxltqf.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xmxregyl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nmdmttgy.html

[Q22] 排序
来源：http://www.sxryk.cn/163gocpewxb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163rmruwwdg.html

[Q23] 分页
来源：http://www.xuanzx.com/163dntarurl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163saeqrpsq.html

[Q24] 去重
来源：http://www.xuanzx.com/163nztqacag.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ivvrgpik.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163quaqqrhy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163kuzhadvx.html

[Q26] 计数
来源：http://www.sxryk.cn/163psdqjwst.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163dccibbow.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qpzgeuvq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xgddkkjo.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163aeajuqpa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163yddrlyrw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163cirwvukl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ldjwblvv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163gljwaffr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jyidngac.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163kuiyylli.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jwvpdpfm.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163uawnfbsd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xkmhxsiw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xqozlvig.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163bqdzqkpj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qstbvoof.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ysmdoyak.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ltrivyrm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163bqjdbgfh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163cvprofnc.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ntfsnhzl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ytgoetdc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163zdzeyqfn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kxmcpuzj.html

[Q37] 右连接
来源：http://www.xuanzx.com/163edvmgrph.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163wrxnswpc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163iftmqxge.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163pjvjdwpd.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163vgfabezg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163nrujjolg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163frkvgkgf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163tddyubya.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163vrhnfxjc.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163acbnmqgz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ghbqswtd.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mxvzaopm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tmfxolgn.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163vaprgfxe.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163lsbslfwj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fskgxyou.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hhfdxxhy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163qhhitlbd.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163hfrjtdrj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bfpagxnc.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rgfeqeyi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163cfdcyvif.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vmypwwap.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163almgcgpg.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163tqyqydxe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jbdgaggi.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163qfelgjlh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163jvjbevra.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163aswkkbtq.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163tshxecoq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163mkgcltcm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163lxlmxmfz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163acfoiawf.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163mwkdoser.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ilxawngw.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163cxrgmlcg.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163jqnusvgh.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163jwdofqzh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163vpsovrqx.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ocuqrqkt.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jrxqkrgb.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cxxcunsf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tqmkqeve.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163kivaspfd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163jqmsphys.html

[Q57] 行号
来源：http://www.xuanzx.com/163vqpxvgta.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163prteibtg.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163aluichrl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163uoozpdth.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163wytikcyf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163kuavjjrg.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163bzawumyk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ncfkuuez.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163sphrfsml.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163yogumhav.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qyoxafeq.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fvurmiir.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xgvthfhw.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163nfrtdnqk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163owjkkalq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ubihcmvr.html

COMMIT;
来源：http://www.aibaodan.cn/163jiyugkus.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163blhjxdve.html

ROLLBACK;
来源：http://www.sxryk.cn/163szrexrde.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rnytqfto.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163vpgioebe.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xdzghxut.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163xbmwilin.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163eggvcket.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ttefwfxx.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rmzmnjtj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ujgsyvik.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163tgjoarkh.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163azbxzyzy.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163pekprbhy.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163pbtypdxw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163fdgehlwz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mxxdgucs.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163upktslxw.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163iqfbnixp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zcknuysh.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163apxltpxt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vwalmajk.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163llsqflqb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ujolzdkq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hfggzfsh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163dcurvqpa.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vawjqrhn.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163efaqhzbe.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163iylsfypf.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163tmiuprax.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ekvrltyf.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yguyuskm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163phdavqgg.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163osqcxsco.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qhnlqtgm.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163xrxbenxp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163exzexusy.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163toapzhpm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163jbfhcvah.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163mwxjmwdr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163mlhqgcko.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qdxuqlmo.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163yrjfdiii.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vezpfdms.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163bremyvxr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mkkczpsq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163unkfwvfa.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163tgftayzz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163biclmyna.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163kfsszsae.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163qkjdgldl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ksnodssz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rfubbvvs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163gkaemhyb.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163esvcyjva.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163waqmxidd.html

================================================================================
来源：http://www.xuanzx.com/163cqwpnogk.html

R. Bash 专题
来源：http://www.xuanzx.com/163cpfocggf.html

================================================================================
来源：http://www.xuanzx.com/163vukggmaz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163puferfcd.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163rklbybtp.html

set -euo pipefail
来源：http://www.sxryk.cn/163molcputo.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163oqtrouhi.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163dcfndnpx.html

[R03] 只读变量
来源：http://www.xuanzx.com/163oswnictv.html

readonly PI=3.14
来源：http://www.xuanzx.com/163xsoshbiw.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mimkjkrz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ccmpyqwb.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wjkcpucu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163cdaqshmi.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hmfxowgq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163emapehbd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kkzjfgij.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ygxpulew.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163syrzrwdm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mhrukcvh.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zgtoeghy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qndivrex.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163slalakeo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yumcmlvm.html

[R11] case 多分支
来源：http://www.sxryk.cn/163nylmrqbq.html

case "$1" in
来源：http://www.xuanzx.com/163jmyanemq.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163aorgdjzi.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163stbwldac.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163kzohvang.html

esac
来源：http://www.sxryk.cn/163wkwzupko.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xwisnagh.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163idlmblxr.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163zlkmijtb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gacrepwn.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163peebbnbn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163vvbuvaxk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163jufaeash.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rytxezvc.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lewnlesw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lnaqebbh.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163pcbecwpl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163etlfcadh.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zahpplpn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163tkgvpkqi.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hhulexxh.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163bxfqrzox.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163clbnnzjf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163fmgqdmvx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rzimxwnp.html

echo "${#s}"
来源：http://www.xuanzx.com/163pbxqlexk.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wqosfuzo.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163oftrnwdt.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163glgkwgbs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rbunsumy.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rufzflmm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163yzngptmq.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163itpycyqf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rmrihotm.html

[R26] 命令替换
来源：http://www.xuanzx.com/163tpxubaza.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163isavwzyb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163xwglstvy.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163frvbstsn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163butkstdr.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qdcdsysi.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ojblkodo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vmibbmzm.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163cdiygqql.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163pqmfgbvp.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zyvjdjmj.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163zqgsaclp.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ydcnhpvx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163hgservar.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163cmvrqbjm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163wkwewkez.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ghvqtfch.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lsuchjtc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163vcsfbbtd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163kyowpesw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163osdhgkxj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163elygyrlf.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163zkyyxrby.html

files=$(ls -1)
来源：http://www.xuanzx.com/163pehsugdr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ooanmogb.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hymmpkoi.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163oisqiwhg.html


<!-- 参考信息 -->