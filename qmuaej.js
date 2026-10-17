外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163mdvmiuuc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vnzpboyl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ftgruupp.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163sggvbhmn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tfqmsgjt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dclvscma.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163apreqnli.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163qdsafuxt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163bedqtxyk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163gndexxze.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ngwmglqg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163gmqrpskb.html

================================================================================
来源：http://www.sxryk.cn/163aqcivfxu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ysfelnxd.html

================================================================================
来源：http://www.xuanzx.com/163lucavdsd.html

[Q01] 创建表
来源：http://www.sxryk.cn/163dupltdyi.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163lfstpfnn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163irmspxkc.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ltzheorg.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163xhqdfhuh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163sdjyzpck.html

);
来源：http://www.xuanzx.com/163rsgtjewq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163kulypdlg.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fvdawhlr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163sbhluvee.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163bfkwqerm.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dgrwodgc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163yftyzzdd.html

);
来源：http://www.xuanzx.com/163uhypwovf.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163gaifofvm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ltjksnca.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163poumbizj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163etjbwqlt.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xgokfacb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163avsrpmhw.html

[Q06] 删除列
来源：http://www.sxryk.cn/163nmjzzobe.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163jeavwukl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vuopvpdk.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163nqgqcmfe.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tcraktjm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fjvnpdlg.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163rycusdlu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163qeuysopz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163uhqmcgqi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163fcoqyxub.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163bqrefluj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163mgpwjnih.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vgpnacbp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163iafgqgsv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163uxwhwqrw.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wpkwodfo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163cyecsyib.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fuzperwc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163eazoeumi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zewrpbbo.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163aixhomqe.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163zsnyzymk.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jifuygtm.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fswlrykv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163htxbapcs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163nsciowxa.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163zrpmhczk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163unpykmod.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wshxbgxx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163xhpnxqmj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163koowjvvq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163rikexesu.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163nbbnpkvu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ytfycrur.html

[Q22] 排序
来源：http://www.aibaodan.cn/163litbxchg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163szhjdwdt.html

[Q23] 分页
来源：http://www.xuanzx.com/163lmrgjzsk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kwedznxc.html

[Q24] 去重
来源：http://www.sxryk.cn/163agqitogq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163kmkwekyo.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fcvrgkel.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163bcbhyqmb.html

[Q26] 计数
来源：http://www.xuanzx.com/163gqggurrr.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163xmfspzrl.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zczzvxdn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163twntpoju.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lovlkybj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163wgmmdufg.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qiziibdq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ejmoxidy.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jymupsss.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163maypkast.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xvrflsho.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163mmstjepu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ifpacqnx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vxnjssft.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zkodrppv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163dntaltaj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mjymmnyk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163hacqidih.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ciiipuaf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163trfvdkjo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163thijirac.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fdolwcvl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163aslzbfqu.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163zkvizwwg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dirzjuou.html

[Q37] 右连接
来源：http://www.sxryk.cn/163bviidnwk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163whxtvxte.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163witqatab.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163oavgkqyv.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163tnuwxtoh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163mljsjfdu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ytycwnuk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163anudhirr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qajmaydu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nhqronuw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163zpesefoa.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163dosqnuem.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kjiscwuw.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163inyzeplh.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vihgplkd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163kotulbeq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163tqomtiby.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163frezertp.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163hpdygvoa.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vrhwqtdt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dzmiumyn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ytiqvbjl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163rlzflhpt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kcyoflrz.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163pzsdgmjp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163akhixygc.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163byfsvioq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163nmvvyyep.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163vocyhdba.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163odicjqbt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xnbcgbsr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wpbdfkzv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ygjycmwv.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fikktalj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163nuwthogh.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zmiexlcm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163buouaesq.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163omdyhdpj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163xlvppnty.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bolvecjl.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163vpbkrnkq.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163kcptfaay.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163dpmutayy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163nllyedsi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163awblgwkb.html

[Q57] 行号
来源：http://www.sxryk.cn/163ntzhjcmd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163uxnwidrr.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163kpmcngok.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jfrujcmx.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wwwwjnoo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xhfpigiy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ryaylkvf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163lrzhqogh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163juvmrxis.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163viopvsln.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dmiojprl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163cymhkyyl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qzgvafsh.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163olohtgfo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163cuebbgaq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163uyzqxhfs.html

COMMIT;
来源：http://www.sxryk.cn/163wsiulhcl.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mgukcvdw.html

ROLLBACK;
来源：http://www.xuanzx.com/163vbvdnhre.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163bfhoylfj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163jsnvrkmy.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163diiaplid.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163unjayfrh.html

[Q68] 保存点
来源：http://www.sxryk.cn/163fwglsvtn.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163uphltugc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kluqmjyr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163lqkdxlvl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163wbphoiry.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xbxctzpy.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fkfuauuz.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163gwkvcomk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163lsjrklly.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wwpfinhl.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163zgcdnyjw.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163wkrynkzn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163oxmqsnyp.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163btsezidb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163libtollb.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ppufhzdq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163avlrdfgp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163relcjzuf.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163avvmlsff.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ulnkzjad.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163irmturnp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163veihhgfq.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fszjnkww.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gwadtxfx.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zuuankpj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163guxqkyzn.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ssicvxkl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163plmahcpa.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xbdnpufr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163tjdrcxen.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163brxecwhf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163oyxzjbfz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163rqrfgepe.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ivmhhptf.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163kmqmahjd.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ukgdilzg.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163memecgyx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163fgjglysn.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163duknkein.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ejgtukuq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163bhaespef.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163fxlwzptb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hepgjpsq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kwukjjoh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163tnshtmgf.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ekvchzod.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163uudepxpg.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163hhyscgvp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163chhirmqw.html

================================================================================
来源：http://www.aibaodan.cn/163cvlaezxo.html

R. Bash 专题
来源：http://www.sxryk.cn/163jpxatgzp.html

================================================================================
来源：http://www.aibaodan.cn/163ofazfgsp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163qherslqp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mdokvkmt.html

set -euo pipefail
来源：http://www.xuanzx.com/163uyenzgpm.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163jucikdpt.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163sddtbwss.html

[R03] 只读变量
来源：http://www.xuanzx.com/163pqcjwekl.html

readonly PI=3.14
来源：http://www.sxryk.cn/163zangjpfx.html

[R04] 位置参数
来源：http://www.xuanzx.com/163tivugfwk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163pnedjiah.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163igstyvpt.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ugmwgezz.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163barsczkb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163jlgplvet.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163vvwmodgx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163rvqhhwxf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163pvkqhnlp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jkonvbet.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jzfzrxrn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xruguxww.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163pikesous.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pirzsjhs.html

[R11] case 多分支
来源：http://www.sxryk.cn/163zytyzdnl.html

case "$1" in
来源：http://www.xuanzx.com/163qgdwdtxf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163egzfzjzx.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163cqepupql.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163dahwgzam.html

esac
来源：http://www.aibaodan.cn/163pltzdvvz.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163jggrpimg.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163itkdhxxb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tquozlyl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ffiyrehn.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163newjamuj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163eiqpupbk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hgcjjgkw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163dzoihfha.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163szgubwmy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tywdiezl.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163wkluqufx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163svnvjtjq.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163akspvsec.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163klmutyvj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163lgptfwlj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163vfabvfey.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wfszflic.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163felmogjb.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hpwwxebl.html

echo "${#s}"
来源：http://www.aibaodan.cn/163elfkblls.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ithygzpe.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163bpziesby.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163jjdkcwyd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163yiclxbok.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163lgiiwios.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wxaomtdo.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163wyrbzgon.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mpmzmqfa.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dvawylte.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163dtcqopmu.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ocyehgxv.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xjydvscn.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163znkvhimt.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jntndtsc.html

[R29] 定义函数
来源：http://www.xuanzx.com/163dzzyvtsw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gzebiema.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163riholmrz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163lqhpwiti.html

[R31] 局部变量
来源：http://www.sxryk.cn/163oifziveo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163krqnsjeo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163oesmokig.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163oehvgctt.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163yrinvidr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163twyhxtfz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wloqlpgx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nfscejmq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163iqnrpxem.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163pvdzrvld.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163nzfbsvll.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zqllhwsb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163yfrpjjou.html


<!-- 参考信息 -->