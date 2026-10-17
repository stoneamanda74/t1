外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163vwrglhsf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163tyhvneas.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163bunvcnta.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163qekdoazj.html

================================================================================
来源：http://www.xuanzx.com/163egvlrioy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163quhatykk.html

================================================================================
来源：http://www.sxryk.cn/163befbfnfg.html

[Q01] 创建表
来源：http://www.xuanzx.com/163qyhaamuk.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jdcorvhc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wneffulr.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ravnwfte.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163dxijlcxv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163modjvbrt.html

);
来源：http://www.sxryk.cn/163aqgubypt.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ehaihiww.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zuacdswl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163aktpolca.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163soamieex.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163fmbcdlih.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163yrqunzqr.html

);
来源：http://www.sxryk.cn/163yefnwddx.html

[Q03] 增加列
来源：http://www.xuanzx.com/163csossjpe.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163agdezzwe.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163biznelsq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mhveiowk.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163mejdccla.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163poatdbeq.html

[Q06] 删除列
来源：http://www.sxryk.cn/163hkpqivcb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qcvbdwyf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163kubophzb.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163spxivzjy.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163itihemmu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163mtpeonez.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163psdidgdz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xcxoqfoq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163jwxliekt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163jjwuixhh.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ywgwptie.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163xxyxdyjt.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163agvlcelw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163tnevfvls.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163fsmumzaf.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lkabxhjh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zpzdkaly.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163rebxiuio.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rjxwqlxu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163vveiywba.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mguswcne.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ppjsqagy.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163udqhytow.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163gomnegse.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163msznfycg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cjebmigi.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163gxzoifdo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zxysfaek.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163lmmhbcvt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163muazouye.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163fdzxpssj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ohkebnhv.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163vceagqul.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163hmwjcpny.html

[Q22] 排序
来源：http://www.xuanzx.com/163gayweplk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163trijnzbn.html

[Q23] 分页
来源：http://www.aibaodan.cn/163uwcukked.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gvwczwnx.html

[Q24] 去重
来源：http://www.sxryk.cn/163mzzpxxrx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163nfuhgprf.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163cylygbgq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ulppephl.html

[Q26] 计数
来源：http://www.xuanzx.com/163cvfizado.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ihglhgum.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163lnbntbil.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qzzvjgwl.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dhymxtxw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xwlqklwe.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163razfnnvf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ihshqibl.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163basmigdj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163krkzmqak.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163sfndpnfb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163pwtowesi.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qxvuyoec.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iyhuscct.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163huysxkwe.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163tohylptq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163lqnuxpaa.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zoacaitv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163uujxeilr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163oqjtsivy.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163whwfmigc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163reehticv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163efhcmovq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ngzzvbqn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nivremqa.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zsxofitk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163yymstleq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163mwimvmmu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vvyqfmtv.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163gihvdyaw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163kiziwwkt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163zzigapgf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163svhyohjq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163etqmncbd.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163cvvkunnl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163kqpprazc.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163csynwcqk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163xbeadgwc.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zippxplb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163jlubqwdm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nmcefoli.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163hpckodac.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ptiaqssx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163dhuekguh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zswtvqhs.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qfuwspvg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163noruynhu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163kaqafkqk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wgpqyudo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163yaqoozrr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jsgbeube.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kdqeevgm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163gpooevvy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qgrvrsfh.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163pplbzmyq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163fdcxebhy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ryjrdzda.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nnepagrm.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wunvgnuo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163itvapwit.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hgnogtdc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163svchevnw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163llcjvgtb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163awxiartr.html

[Q54] 清空表
来源：http://www.xuanzx.com/163dpbcnfcu.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163bakqopxx.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163zrtnwsia.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zwbygqbw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163swycvfhp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163grufcnuq.html

[Q57] 行号
来源：http://www.aibaodan.cn/163dgcgfytn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yvvghpxd.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ijmfdjhg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163sclzufkh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163frxlcobf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xuzueuze.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jftbpzoz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163wdrpknhd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163cygxpqrv.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163lmmsqnei.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tfyznnzq.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163aehztgwr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nlalezaa.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163nmwiagew.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ekszqbrx.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163snumddfl.html

COMMIT;
来源：http://www.xuanzx.com/163pnktiweg.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163fmcddskw.html

ROLLBACK;
来源：http://www.xuanzx.com/163lxszfmgm.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163lijecrpu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163fyhkihgb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163lbkdtrek.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163eiayzdkl.html

[Q68] 保存点
来源：http://www.sxryk.cn/163wvzuhepi.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163kgklgwxa.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163omypofzr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163dmsgwgqc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163quhsatng.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lnhwyxln.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163eabrqaoc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gnunfotk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ujxgdifx.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ldlnybqn.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163scfgfsfm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163sxdmmipv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163bedxttty.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163avkiaprm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163geqoagbu.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qktftwys.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163guwmdxub.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jymhfftd.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163rirpowel.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ojooijdr.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163fdntsmxc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rlknjzsn.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163mnkonocl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163prsspigr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163iyfrdxso.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163tvcennvt.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163dloteiay.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163psdhwwrs.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163qdyovjzi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163jqqynrsh.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bjcahasd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163odevpmot.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163vgftliud.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163zdsmnyci.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lsfvqaqz.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163vzrvxral.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kjareukd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163yyffpbdq.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163kevqemrj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163xowbatbu.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163jkyfwmlr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163bqoqurzk.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163giymaqek.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163innywynv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163pkpptwtz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163zhegfpgd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163casziipe.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163twmrcyac.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163wxognxnf.html

================================================================================
来源：http://www.aibaodan.cn/163unfmmitc.html

R. Bash 专题
来源：http://www.xuanzx.com/163rrcciyxx.html

================================================================================
来源：http://www.sxryk.cn/163tswxxcdt.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qtmqtfxg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kceivssb.html

set -euo pipefail
来源：http://www.aibaodan.cn/163paduzuav.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163cxchhlkx.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163rndagaum.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163aufoiqgl.html

readonly PI=3.14
来源：http://www.sxryk.cn/163eijsaihs.html

[R04] 位置参数
来源：http://www.xuanzx.com/163yxuqyjgn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vwsztmly.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ptsfyusa.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163krysomdi.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163heksrtok.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163igfzgand.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ldqqstvy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163pjxngnrk.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163imhpocxl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163gjihkjcx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zfamdoxi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163vakrbpag.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mieiuagi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163gaanvvzb.html

[R11] case 多分支
来源：http://www.xuanzx.com/163vftwxckd.html

case "$1" in
来源：http://www.sxryk.cn/163vveirpap.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163zoobdcok.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163xkacelsv.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163utgrpkrn.html

esac
来源：http://www.sxryk.cn/163iarqdtua.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163sxmuulra.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zxvjsvkb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163safbmhcf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163drvujxkg.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163geneefxi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nlbjjhnb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163elkqrlqm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163messbbks.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vjjusryw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163nmswcgcb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nnosjkie.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fomcsmnx.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163atwkdsxu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163cevqrwfd.html

[R19] 数组长度
来源：http://www.xuanzx.com/163fwmnaesr.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163xmfqiqfa.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163rnxbhmwy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tpwxcbjw.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qaiticip.html

echo "${#s}"
来源：http://www.aibaodan.cn/163smbqioxk.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wpthgvio.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163yscekmin.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163dzjoajyp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dbvafsql.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163zwqjbqlz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163cmldkwoo.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163uyqwdrwp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qbxbsdyl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163iguwznll.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163cjsyayfy.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ioriwalg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hulpqozw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163gadoelmv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163zrtzxneg.html

[R29] 定义函数
来源：http://www.sxryk.cn/163mfudauys.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163inxruwvb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163luhebriw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163qhscygqx.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163dskjlwax.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163bydquicn.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163occaaxmb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163yulxjtwb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zjerftbn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163uwuzxota.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mrldscyw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rxdjqnhs.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163mcrgccds.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163yfxptzpw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hlfsukdl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163xrqqptch.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ebkqvjmx.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ymrdbeiu.html

[R38] 管道串联
来源：http://www.sxryk.cn/163yorjnugp.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163lnslfwju.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ugqkhaye.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163boeabhjy.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163dxjmmlzj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vuplskpi.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163rvghurit.html


<!-- 参考信息 -->