外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163sbntrvpc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163kxhpjmht.html

================================================================================
来源：http://www.sxryk.cn/163vbgdmqtl.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ycflhnqt.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163uzfrzlio.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cprhoiei.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163umavvqby.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163lixfdenf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163hfbweffv.html

);
来源：http://www.xuanzx.com/163lefnlgcl.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163zpsysiio.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163bokrkctu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163stxkxcun.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163jwswusgz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163cnwbjzpl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163dypinriq.html

);
来源：http://www.xuanzx.com/163egykjtoq.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ruqacudp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163yawdkmxr.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zoxapngc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163wflvrgsa.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163eruakbfl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163sirqowdr.html

[Q06] 删除列
来源：http://www.sxryk.cn/163irfvjble.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163msiakpdl.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163bhrhryet.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163otrmtyqs.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163uzqvefhg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163cfifgwhe.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dfwepdsp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163oeoiaigk.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163glbcdgny.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xezpesee.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163oheluhhz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163gdnhggia.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ynbziixe.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163oqnjisej.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ziqozvlp.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163oxkeoetz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ifufzfsv.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163kfipguxv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163xukdwysl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163nojjjyld.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163auulfnhx.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dzlnvumy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163irtgmkqc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163hbqthcuj.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163qkmlucpc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163dccvppmi.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163yluqoguf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163gelbeooa.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163gkmyzztf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ajpjttam.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163zoqeimjo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jbjresig.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163bfkmnjla.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163xpfssuoh.html

[Q22] 排序
来源：http://www.sxryk.cn/163tnkblzmo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163grkckoen.html

[Q23] 分页
来源：http://www.xuanzx.com/163ozebvimv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163fmloeklu.html

[Q24] 去重
来源：http://www.aibaodan.cn/163jkzqjcay.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163pmslnlcq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163rrrxreed.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163javdcxqm.html

[Q26] 计数
来源：http://www.xuanzx.com/163qxfoyypd.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163bxhodamk.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163uhlfxtit.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163avcpdvun.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ffuodbjm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ijpsvkbc.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163cpbhovpx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163isukeaum.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163kcglrqzj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163oblybmnu.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163onkospui.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163mokctwrl.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hdavguib.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xseyymgy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163xkhojbid.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163duutymyl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163abgqrjku.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163mhtujoga.html

SELECT * FROM (
来源：http://www.sxryk.cn/163erwireme.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163boddlvtz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163enpicazu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lefjiyzx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ejnbqssf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163aakfdklg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163viywiife.html

[Q37] 右连接
来源：http://www.sxryk.cn/163tyxlofns.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jumrsjek.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163qanbfpgc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163vttfzreg.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163varstjrs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163qqrknqyy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163mzkdppdk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nywdesyx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163wmtnjfmn.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163tvtrrefn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163trceqrss.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163zyvjobaa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163gtlbkefj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163kfbvtiky.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163jpolzccm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pqtllnjs.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163mekewyou.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163owbpoqab.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163sicsgrsg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163nrpqogdw.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163nepskrxf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163smgyafms.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163brcrmyzp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ucfzxqwk.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163uprhdpeg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163chufpkvp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163kuaqtqpv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163lswacfxp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163jfaevjvh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163plezkntk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vyksmxaf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163fgkgfych.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163snfmfqwb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163owonudvl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nmeqcngh.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163gggokmod.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163vsaoxwcx.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163mpdhqcaq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163blevgjsb.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163szhjqcpc.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ftnidvqh.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qppuxmuk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163uewwnjyl.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xgkcraqu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ubtgtkkf.html

[Q57] 行号
来源：http://www.sxryk.cn/163mtgtsfus.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163alijugff.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163umpsckvl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163rokrfaja.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163sqkoffir.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163lulgnokz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163twsqkhog.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163lfxjowle.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rwvqhbvl.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163pzzuicqc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tdmhiixu.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ezyxofaj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zolqegka.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163athvhljt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163flfkihwi.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163hktyjrtl.html

COMMIT;
来源：http://www.aibaodan.cn/163qwjjogaz.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163caugfcam.html

ROLLBACK;
来源：http://www.sxryk.cn/163wchygpfb.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163zrjhfkbz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163tgfdninf.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qmjykjuu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163lxdemfwa.html

[Q68] 保存点
来源：http://www.sxryk.cn/163kmpmmqne.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163dapqgkkl.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163eqtaauxa.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163akgwuxie.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163fjsciwbj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kdgvwpcm.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163kcistujc.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163svfjmtkn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wqcgjrun.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mlraopav.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163cnzmlyiq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ngheijij.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qhvmrpef.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ozhliudl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163dhoochjk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163puwfbbri.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163sdbcsaqv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hjrnsgyu.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163upjfkbye.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163uuuxgznw.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163hsyegttr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vlhuehrp.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163tovhrkmt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hzrvjmhb.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bqqomnda.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ovfhiesg.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163tolmgknd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163afyqhupy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163lhfyfqxd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hwyiefxu.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163kodwvzco.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163unxgwxjq.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163kuafrwck.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163lilnvnut.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163msmafpvv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rvjxxzto.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163amnvkbkq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rsebnxwv.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rzbutubi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163rijccfqw.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163apmwmwsb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163iijqdhtc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163gtvqkzie.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163bjrgsbao.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ehiflitm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163cckjsmfj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163rsdeuyoe.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163iqyzuhcu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163uuaecgjn.html

================================================================================
来源：http://www.aibaodan.cn/163kfkvotdy.html

R. Bash 专题
来源：http://www.sxryk.cn/163ixtklncd.html

================================================================================
来源：http://www.aibaodan.cn/163xxuvchgs.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163lzpbzjfk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163lcdgookw.html

set -euo pipefail
来源：http://www.sxryk.cn/163ogyawvrt.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163erqptijf.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163sgewspha.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163fwlaknnh.html

readonly PI=3.14
来源：http://www.sxryk.cn/163xmrdgthq.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yeqjenhx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163gvhhpyib.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wwnlhsxu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xjheamzz.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163flwshpdo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163wpnvqaxu.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rccehvrv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kguemvdf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rotiqiqi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163fhukfccm.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163owaijodu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wbcdslsv.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yufnyiuh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163jwxwlwwa.html

[R11] case 多分支
来源：http://www.xuanzx.com/163oexvqyoc.html

case "$1" in
来源：http://www.aibaodan.cn/163ajfdfiff.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wkvzszfm.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163bxczzfjz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163tgdfzqkm.html

esac
来源：http://www.aibaodan.cn/163kuqavygt.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163kjlvwgkx.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rotdudjk.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mmkcvliu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163dbzkarha.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ksymgsle.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163mvtgrppy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163sgqiheuu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ycfubsmy.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163klrjadze.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163uoazcofh.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ckjhdnll.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jatlqmuz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ckakjmja.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163prlbplye.html

[R19] 数组长度
来源：http://www.sxryk.cn/163yalufqtd.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163cliazimv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hhysqvwm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163fjdpksum.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ehpcnkvc.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gkvcsjsx.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163uhwdxxtc.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163gcxuyoxr.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163dekozxrn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163tjssqxzk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ouvsbpcj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163fqvmeaie.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wqlyljnl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163radnhxll.html

[R26] 命令替换
来源：http://www.xuanzx.com/163pghupypt.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163iikoqhkr.html

[R27] 算术展开
来源：http://www.sxryk.cn/163dnofivza.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xsvkuvrq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163pkwtrtuw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163uelzkgxw.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ngywoqez.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fiphgmbb.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gtxlkorc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163smiiuugn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163oqmhpdoo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163pnlzzoyi.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xtqtndtq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xtvzhhmi.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rquujiid.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163uwcvqioy.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163lmcqpjpb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nokpxtvg.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163pqwdmgkw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ppvionol.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163pztdczlu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163qkjlfkea.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163bgecxvwa.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163pkbwpoyz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163oohfklll.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163dskgjnyd.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163seryppmg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163fsjgqvcm.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163pdwwhjqn.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163tmitcljt.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jtqvowxt.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vksmebaq.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zjgqipzj.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jjdywflq.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ujsdxyig.html


<!-- 参考信息 -->