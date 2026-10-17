外链999!wailian999！

CREATE TABLE users (
来源：http://www.xuanzx.com/163vezvskiz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163uktoexlg.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ehhrkrtz.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qbepmkgp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rvjrcjug.html

);
来源：http://www.sxryk.cn/163apgjkuiu.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fadqhrgi.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163hyirfeah.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xjmwewzd.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ijokkufu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163chmspxoc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ryapatbl.html

);
来源：http://www.aibaodan.cn/163yuobmcex.html

[Q03] 增加列
来源：http://www.sxryk.cn/163brehdepk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qssybdgc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pmjcjcqw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163mtwswnsp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163qifnrhyr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163lhnybjja.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vuofbulh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163pomtffdc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ejektrjt.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163houqeuvs.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hbdmrbmc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163iqwzsulq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ohhcraby.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163skigyten.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163oqovbaho.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dqvmyytx.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ockpcbet.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163xmlrgaue.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163hnjdqdcs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163stkyvgsx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163tmdhaejy.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163vaobhlbg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163eipewsob.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163dtfnhdjq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ghvxqbyk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ehgvrhnt.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163nxdfuqfu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163znfmgaqu.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163rwtevwzy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tlofgggt.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163uitfjmmu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qhfppsbf.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163simiommw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163msifskfc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rxettoxc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ixfatmpg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ylpyluhr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qqgiolph.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163wqvswmeb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163dzajrqxo.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jdutuqha.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163mofrfmav.html

[Q23] 分页
来源：http://www.aibaodan.cn/163uddoortn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163walkbpyo.html

[Q24] 去重
来源：http://www.xuanzx.com/163ohcbxscp.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163nickfhgq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ssqgwasv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163rffvlhbo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pibccivh.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163emzyyoql.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vezjrblg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mkywignv.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163zbjtjrwp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vrpttemz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163iqnfgmsz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163dfsriecl.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xmjzmlzv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bhcqmutx.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163smizplbz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163osarqsjq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hooolvci.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hgngbaxj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163iptzduix.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163nhlbeyzo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163cmdselyi.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ewvuenfy.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163qsukdvgr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163khxhqnid.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cxoobfln.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163emhhschv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xlnefygt.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163deycsrwp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ikhbalfw.html

[Q37] 右连接
来源：http://www.xuanzx.com/163qaxuhqtw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bzzmiwyo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ryncmmfo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163oclticuz.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163qmkqufvq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vmzfmccl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kpbtfqig.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163olywdaoc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163shytxrhk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163piybonjv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163dnbpeukc.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163cfhtkykq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163dcacoonl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163zefyxgeu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163brpxnvca.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163vyswgzyj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163dufqmwfk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163budvhobj.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163xdognveo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163qkajgexi.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ojwkgsdu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163apcztbfy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163iwfsuzia.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ljkfywlo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163fqviehba.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163iwlaltth.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163wpiwiixi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163mhlkrpek.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ltrayorm.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163xofichav.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163obryqgrk.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163xraqubmb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163zlfhzgil.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163lshadots.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163tftnxeio.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163erixyrzv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fvwzzbej.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163wslbbaqn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fbpflqlv.html

[Q54] 清空表
来源：http://www.xuanzx.com/163gycmbxae.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163mbhcpoxn.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zcqakngl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163swvuupux.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wbdxnaww.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vddjwpyb.html

[Q57] 行号
来源：http://www.sxryk.cn/163fklqcbpq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163pcmglvzw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bwempubi.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163pgxfhpgk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163bagkaeju.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ncmxfgqb.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ifojmycw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163edyqbvzw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ouxebgnk.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163gxopmnkx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163kndxmxvl.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hxyqlosy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hfoonmsl.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163bytzijmx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vpzwhhnv.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qnpvdfpi.html

COMMIT;
来源：http://www.aibaodan.cn/163ppnjsqss.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163htgtmwds.html

ROLLBACK;
来源：http://www.aibaodan.cn/163peejbpcc.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163rsbhnwgn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163daguigjf.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dxtbuypz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ahwoqrgc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zgrwavpw.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163eaqtjzlu.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163htzcgvko.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ppsqjcfk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163wkbsjwpz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163zureplda.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163rfhpnpig.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163tgvsnnbx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163axvsacdc.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163pptzegbs.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163vwqlgpkx.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wyziywio.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163woetrzqm.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163nurzumui.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163neycnrii.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163mwwehtuq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tsgvvflx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ejzbjwqz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vypqsmqi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163bigymcfa.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163txzvfzgh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163mhrlpzfv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163fsrjyrvg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fhtrxllv.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163corhdtpr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163sejrssas.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gxcmlima.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ybjjpzog.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hvgjmxal.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163nltnvdtr.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163szryvsii.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mouzagwg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163elkcfcxb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163antlkkil.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163klkwfopx.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163bcmxqnja.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ntyzkuej.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163bhzhbmrd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163elygetgp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163wdpooznm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163egfqfjmc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ezucbmkp.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163gbfhuqdy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163avmvfgeu.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163orlgbfoz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fucalibx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xfhoeufd.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163yalkackp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163kitckidl.html

================================================================================
来源：http://www.aibaodan.cn/163vnlywuxm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163uvykwuhh.html

================================================================================
来源：http://www.aibaodan.cn/163ipjxqwkp.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vrnsmcao.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163dwayddxr.html

set -euo pipefail
来源：http://www.sxryk.cn/163aqwuujdj.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163pipdtdgp.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163nalvmcnh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ihkqqsvs.html

readonly PI=3.14
来源：http://www.sxryk.cn/163hnuglgtu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163owkixspy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163fljshrtf.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nqyoftqv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163fzquxfsk.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163vlmalusv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163zlhrhbbn.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ezvuftmu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kumhdcca.html

[R08] 数值比较
来源：http://www.sxryk.cn/163dsxvozwg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163pekbbjie.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163fsqqgibt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163sicngqiq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tawzqibf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163wqwfyprf.html

[R11] case 多分支
来源：http://www.sxryk.cn/163iupejlte.html

case "$1" in
来源：http://www.sxryk.cn/163nmzkpizr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mmbjylhy.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ugosemen.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163psuvchtv.html

esac
来源：http://www.xuanzx.com/163aglecmop.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cqnpwstd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163shttnspu.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163gwbhfspu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163lqwotzvy.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tppgrfuy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ncqevapa.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163gjnmgera.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163yrbvpziz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ecxqladd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163cpdwsezt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163oriugsnl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163atanqpuy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xrdofwgq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163tlliktgb.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vfkachml.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163mnvnlwdm.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ehmdwogj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nfkfrxln.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xavlrgur.html

echo "${#s}"
来源：http://www.aibaodan.cn/163pzzhkscf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163yujamhyu.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163dlhyqzkw.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ebpheboe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163sccheigt.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ijnuedvm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163quhdgtmm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zpwhmnvm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163zqmcqopi.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163nvymzjoj.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163nelfdtvt.html

[R27] 算术展开
来源：http://www.sxryk.cn/163owwbzkiw.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163iaooeizu.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163aslnxemw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163egrcixvf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163mterwbph.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163mljhxntm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163htyrriiv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163yyyakhqi.html

[R31] 局部变量
来源：http://www.sxryk.cn/163iacjirwt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163jvydnfhe.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163mfjpvewd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mcdypsyd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163eqknmqbs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163pbkspozv.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163wnauiztl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gyykkcts.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qrshvmrz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ychwnhkc.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163drfvcids.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163xhtfzzzq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163blaqqsva.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vvdjfyma.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ygfkjnow.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xkbvheua.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lywoeynl.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163qfktjrxc.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163psmgbtpx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163rburdgkf.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163lxsasyql.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163fizocgrj.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163gsfgjcnr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163cuycuawp.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ajbjylzh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ngcrjnau.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163urzkypfk.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vqympzyh.html

[R45] 批量删除
来源：http://www.xuanzx.com/163pevazbad.html


<!-- 参考信息 -->