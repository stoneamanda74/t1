外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163ksdwbwmt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163fulyuwkb.html

================================================================================
来源：http://www.xuanzx.com/163urxeftom.html

[Q01] 创建表
来源：http://www.sxryk.cn/163qelkrntg.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kkshjruv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fxabkern.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163csmjrfqb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163yclladaw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163labavcuq.html

);
来源：http://www.xuanzx.com/163xehxbjep.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163izlcdxel.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163kekbhibd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kwkylpfr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xthwpsnf.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163assohzbx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163vshwphsu.html

);
来源：http://www.sxryk.cn/163dnffftdm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163zrblwxlb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163tgtzmocl.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163zxoczgzt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jhixcwuh.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163lsujcbmc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163pqzrmwjz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vsdwsdbk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163gpkbvxmg.html

[Q07] 删除表
来源：http://www.sxryk.cn/163abrnulgs.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163pphbejjv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hcsyjjev.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163vfrmcyvw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hodebocc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163meccosta.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163bzbepfxe.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mtrijwti.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vwhgscrr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zncejrcs.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163iaqrxxic.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163idryrffj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163fwusshlu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163cbkfpvjm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163kjktjadr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163klltvudp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163tshzxgmk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163iljoirvr.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163whdfqlbz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163xtybgzpf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wrybhmss.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163iloloxqc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163caqvcyqd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163vnnlgdfd.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163gqqzboie.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163afnrkhuu.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163bibwmnhs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163jawvwyip.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163tpssvnob.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ocoxhqpk.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ezvdtryb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163rcmbvdqs.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xqdfbipx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163zwajyguw.html

[Q23] 分页
来源：http://www.sxryk.cn/163udgusjyc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163umxmwoxg.html

[Q24] 去重
来源：http://www.sxryk.cn/163fritafgw.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163htqlwhgf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163uprzztry.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163atopbdqi.html

[Q26] 计数
来源：http://www.sxryk.cn/163buitlkdd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xhvnyumq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163mqqowlgu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qnqutuul.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163avqnktgs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163pfrtfdfu.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rlzsrabq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163mbxzhpbc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163enymlnai.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kksnqcdr.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163wzjluyog.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qerqzwsy.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vwcmydsy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vtpxhxpc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163tdaiclox.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163hjuuungg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163yprhqfkd.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163qtgfrhst.html

SELECT * FROM (
来源：http://www.xuanzx.com/163gphtocim.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tabtpeeg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ueommdiv.html

[Q35] 内连接
来源：http://www.xuanzx.com/163pwakgemx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hnwlpywu.html

[Q36] 左连接
来源：http://www.sxryk.cn/163qsdbysdw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nqeokokt.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ijkivakp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163krijscci.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163egeposzv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163vzgulpqs.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163jmnqvckg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163bqgasaih.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bsnwtzfb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163bfpfivhz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163oswgqfsc.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163khxmcleb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163lwaclicn.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163dbhddpyb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kbpexqqx.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163vnihsdde.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163twtgxtac.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163rjkqwqwn.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163wyecdhsp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163tokldllx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ufoohzoz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ygvdorqg.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163jiccllhb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163arzxqxxn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ldzvpxig.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gstnfvty.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163dvwnybas.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163lgyosiur.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yiohfnja.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vmxmifmh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163plbhnmwz.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ohknopwx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163yhkhpmrq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163jmaogelg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vdhgiwxb.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163fnnlonny.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zhkcsgkh.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ttowvkww.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hpdddaut.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ixghpyik.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163yiwmympl.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wbhrvrgt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163djekqbra.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163nhpngpqj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163umenydna.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163qivkoznf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163jldritrd.html

[Q57] 行号
来源：http://www.sxryk.cn/163yprfkppj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163mvxwuhix.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fpilpvbu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jnsyyprh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ygqkxbil.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163alibygtp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163wjfrxjni.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163iuudqlbk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ckwmxlhy.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jbsihenu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163iyjyzgfl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qpyytlen.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xbmxejwe.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fexlqqev.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163xxfjinjr.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163diajdkqf.html

COMMIT;
来源：http://www.aibaodan.cn/163kaepdxxd.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163tsrsxdrl.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ntbgxnjg.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163qqibbzem.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163lhvrrhoa.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ekzowero.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rgivivqw.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163fvjejnwa.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xphxdyys.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xbpozmmj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163lwgpaoit.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163oumfnfre.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ubamzawz.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163bvchfnzn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163bviejxcv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163zuyvoksl.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163twrnexkg.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163pxpyigqe.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163cmakwaxt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163nhwyrjdv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163xxoywpdf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163srbpjdoa.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ddoblnyd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163xmtavnbl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163rbslnbzk.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163uqmysmlb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ckywclkd.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163fftigxvc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163klbvaxuk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163qsfthzfq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163itkndfir.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ekkizioh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163pcqlswcf.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163urihzeid.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tnrfbfyw.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163amsnijja.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163fplnuxsh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163whlzwmki.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163mvpiyfcr.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163oltfukff.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163amsywuoq.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163nttpmgxo.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163kskutvwg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bqbhsyfx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163jksvfgrx.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163bbdurcta.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163qxvzrkwg.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qbtgscra.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163nehgkizt.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163visxdhqq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163oytcfvay.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ijlpllfd.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ysgzktdv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163pjhopfxv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ukbapprn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dmgcnauw.html

================================================================================
来源：http://www.aibaodan.cn/163qiuquglm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163lopzpmmc.html

================================================================================
来源：http://www.aibaodan.cn/163nxnvmrye.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ovqqveym.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163zdzxlset.html

set -euo pipefail
来源：http://www.xuanzx.com/163zwedffku.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163cgyuetwb.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163jfzdliib.html

[R03] 只读变量
来源：http://www.sxryk.cn/163viohfnwz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gmaqziri.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ubuwnmqr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163vtolgmsr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qjqfaznx.html

name="${1:-default}"
来源：http://www.xuanzx.com/163igndnycx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rlbbxrlh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mkiflylp.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163thalivyf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zntwjdqe.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163watplkko.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163iesmstku.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bseueicj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ulmowwco.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qqttuwmg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163rzrjbpek.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163apjnjdek.html

case "$1" in
来源：http://www.sxryk.cn/163wtflichs.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163jhymutgj.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163uuebnfye.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qeuyaaqu.html

esac
来源：http://www.xuanzx.com/163wofctoed.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163vricaeft.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gqwxfcrp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hjwpyxmz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163hjilbume.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163srffskit.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163geszshtx.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163gpgznxab.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163boywutle.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nneyqmun.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rgartldb.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jlvfdkai.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jlkdyecz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163uoiplxku.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163vcgfjizy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ophkjxyw.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ebcrrbye.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163rvlczvxj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ptynddpw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wfsncwzs.html

echo "${#s}"
来源：http://www.sxryk.cn/163aiqrcmos.html

[R22] 截取子串
来源：http://www.sxryk.cn/163azwlanqq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163uiepsfmj.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qmsuucku.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jkndwewk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163twkekabq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vzbqtycm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163viqdkqbq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wthmihli.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ulbotjji.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ewqelovf.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nzhtaakh.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gteyxewi.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163sujbypqn.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163npvilgms.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xchdbouq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163bahvjcpz.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163roktmvve.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163kaasssnr.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ghugnzzz.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163lkrtpysy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163lcadvbvv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ywkivypk.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hwopwyyi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ybmxqfnn.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jpggjsnk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uscqyzxt.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pguooejg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ldjjtzyz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163erdqgelr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163kiwhwgkw.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163fdlazdto.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wukyksok.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xzsbxogq.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ivevwmrk.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163lihshyzp.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163txhatmcb.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163uualfnku.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zjrxaxpv.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163itbvklax.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163tvdlhrfo.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163hydxhtzt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ibjwiqdj.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163xgmlihsy.html


<!-- 参考信息 -->