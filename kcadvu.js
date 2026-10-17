外链999!wailian999！

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163dgcxjjpl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163imipczqd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163toumxwrq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163gdspgflu.html

================================================================================
来源：http://www.sxryk.cn/163jrepoxap.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163vdyovink.html

================================================================================
来源：http://www.sxryk.cn/163tdsgfvjg.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163pymlvvjf.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ssqoqeup.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tmqzntne.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163jcvfvpry.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163qsqbhbzi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zckuchlr.html

);
来源：http://www.xuanzx.com/163vtttbtge.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163nwlrxatn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ngrjkhwe.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ujfymhuh.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ptxtxuyg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163bjjpelkf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qrgqhkbk.html

);
来源：http://www.aibaodan.cn/163iaargaue.html

[Q03] 增加列
来源：http://www.sxryk.cn/163fhuhjpvs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163olpyxndj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ztcmmnjm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163fjmtyczu.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163sezmalkl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rczetqjl.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ifwfogib.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ijxpgqsb.html

[Q07] 删除表
来源：http://www.sxryk.cn/163yfqkqptr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163eeowphiw.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163tcfopovc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mumtiobv.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163doivvbsx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jujourja.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163tzycxddp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zrysvwqz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ksqepmkd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kczibtwi.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163kplsuuij.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163dtbfozur.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163rscozqxn.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163dtvqsblz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zpaevfzo.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163iqdkvjbk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163shxrgwnm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163gyalgiey.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163eiqewmfa.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ywazflet.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163domeufex.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nrnrhtxn.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163xgkcevlg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jxqrgqbb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163wkgxluag.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163svgwsntw.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163nqspjfvk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hmbhzjqv.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163tzmxdsyv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163eiuibmfc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163hlzxszha.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ddxksufd.html

[Q22] 排序
来源：http://www.sxryk.cn/163hazuwqdf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163rlbvyekd.html

[Q23] 分页
来源：http://www.xuanzx.com/163ppqlvfkk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163uviqqeuj.html

[Q24] 去重
来源：http://www.sxryk.cn/163jluanceg.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163khjdyzyw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163akprdroj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163twufcxnk.html

[Q26] 计数
来源：http://www.sxryk.cn/163irrvnmgd.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163lfldppel.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163rvckotri.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163atsqfspa.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163umknxggp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vaptkhal.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163vlayfcml.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fuznslbe.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163zxamodhb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jnhzvaim.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163tgqxgljy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163swbxtlnu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xqqenaox.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qzlzfewy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163whxpdpzv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163vfvnzuwt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163blienfjw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ptbfrmiw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163avtbyjip.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163qpyrdtjj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163qjitigal.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163yygdwpbq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163oonzewyq.html

[Q36] 左连接
来源：http://www.sxryk.cn/163jwfwecld.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ngptrabn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163srqymjze.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163dgiqwwfx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163adfmvcmo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163hdzavhbr.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ypyuqicv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163emruaqyb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163zjaidazi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163dctyjlre.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rttxbnuq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pswwclud.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163oupctvxz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163kfjxzwue.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fqozkgdt.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163jvaqzqii.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163fscurrbd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163avjjgwjt.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163cqilywhm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163mjdlzzzl.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163jxbzyrzb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ttmvvbfi.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163odeoujhl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gqgpbgiq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163kyydzesl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nepauipk.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163sasjzxzj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163bkwuqruc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163fjpldqox.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163niyqqvzn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163eidfsbab.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hinerpks.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163nyausmea.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qygawglx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jutnwfxq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163gmwfudiw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163aiyzqngx.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163muxgajtf.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163orsxqtpp.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ceawjvfk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mmtzezbs.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163whawxmrh.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xjibluhv.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163dqdtybea.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ngtlpykt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163urnbbsqx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wqrsrgrc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163nrwwgild.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163hohopxls.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163yxhalitu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163jiqhsbqz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163qfzbhfbw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163nrwfamvl.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lrowmutk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163rjaazzcy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163wzntrrqb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163orjfvhfa.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163uxvemrdu.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ubwjdmvy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vqfckijl.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xjnmdkqn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163znsdswmn.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ovutqumi.html

COMMIT;
来源：http://www.sxryk.cn/163mrklvtyr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ejdyiczd.html

ROLLBACK;
来源：http://www.xuanzx.com/163dsmfnchp.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163iedhdvml.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163rccnexjr.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163sprlacsz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163qorujxyb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163zckxxddp.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zzryafop.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vkyokebb.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jnrsrjjz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163qeluwohw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163oqhjacnj.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163eiqeopkt.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ggntchjf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163lmquwonz.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hsjlftyo.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rdtkdlnm.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qdxsiatl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rjfqjthy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163tkjfbpab.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dinakldm.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pnavapoi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163jepoqazx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163yhhicshq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wcscwepk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cezyvetc.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163cxonycum.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kpfrfmns.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163innfbvkv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163fzxsdcxi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ksmhcrmk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qpkpkjdc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163mctmbqti.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hcxgyrzy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163lakzmhrf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bjffkxxp.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163lendjqtv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163dbxrklry.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ycanfqeg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163yuuriluc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163hmazitjz.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163gdpjioud.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163mjhzqwda.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fgrgjdfn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163nfrijtgy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163etiuzbms.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163mcbivcss.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163qvjdppfi.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hyplzbor.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163wdlffcch.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163egmvpnjt.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163vexjpctq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163xszfbhkh.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ekfaogxy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163bfyvfkwi.html

================================================================================
来源：http://www.sxryk.cn/163ikwhwroi.html

R. Bash 专题
来源：http://www.xuanzx.com/163zrgvwbzm.html

================================================================================
来源：http://www.xuanzx.com/163feeicnkh.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163jsepbeii.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163didsorjg.html

set -euo pipefail
来源：http://www.aibaodan.cn/163bhebovnc.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163mdeuxzss.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ickldini.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163fyjrjmbm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ocjpkslp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163fojgzspl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163wtxypoig.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163yodkxeoo.html

name="${1:-default}"
来源：http://www.sxryk.cn/163brouesua.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xnjodxxt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fitqmkwk.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163qbdidppg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ltyyxacd.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163faikbyut.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163lpulptwj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hwkzorrm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163qirrufze.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tdzbpejb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wvhaawkw.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163shrbkfxz.html

case "$1" in
来源：http://www.sxryk.cn/163rsgrirqq.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dvcrmhxk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163zxqlgbfx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qysbajbl.html

esac
来源：http://www.sxryk.cn/163prqdudid.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163bjyrfrmj.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163aasgtbhf.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ntzgcfxv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gomksvtu.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tocbxwmd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gosefmwh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163zvnqjbry.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fnmhnmhu.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ogvcxwfy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163cfrffftf.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lraxxtof.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163kelgxdwi.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163aaimiysq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ybuthjsh.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163jyxhbgqz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163xaiiduxf.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qkfvkejx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ytgjzhax.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163cwqxxvyo.html

echo "${#s}"
来源：http://www.sxryk.cn/163zypozozk.html

[R22] 截取子串
来源：http://www.sxryk.cn/163lksrsfmx.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kyshqyqe.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163cecsdalh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163efogvpuk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163usocfeyn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163fxakurgg.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163thqjeist.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163osvoxqzq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jftzskzi.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wyffptwb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163qbwpivsq.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163zpcdejqt.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163udoyhzsi.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qogthhyf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bsydyxkm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fdihtnaj.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163kpnlgrvr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163bgmroydn.html

[R31] 局部变量
来源：http://www.sxryk.cn/163hwrfghsn.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163irtkgvco.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163egkkicym.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163oqsotzau.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ycmwmfcq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xdbnqqxs.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163gvbkvlla.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ytgoejri.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ibmrerjx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ggmjrlsn.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vyuiizvs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163tudpcupp.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ubxypkom.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ddkxctsl.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jisrnbai.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163qsajwuiu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gyqqjvnt.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163feswtesd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hmevnwvw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163uoywmadr.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163zojqqotz.html


<!-- 参考信息 -->