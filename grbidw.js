外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163rjszpaba.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163lemozjhm.html

================================================================================
来源：http://www.xuanzx.com/163oizfwugr.html

[Q01] 创建表
来源：http://www.xuanzx.com/163abydfnpf.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163eglijuuj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nnzojivd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rxnrsfoq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163orjmjutr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163lnbpshkt.html

);
来源：http://www.xuanzx.com/163dtpyppak.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163mpbbhgxg.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163gtkyygbx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163johqxblo.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163vzokamwm.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163fhsnsuos.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163twtlbyjz.html

);
来源：http://www.sxryk.cn/163vnylsycl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163fbrfpppo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163tunugwyz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163islctucc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163juiffnap.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163egxsytma.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163vidspghv.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qgyqeakz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163rqjdwkvq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163sllpmywr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163tczkmvha.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qvgwodar.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163rdqnywuk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163zvderhjh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ggxztyqm.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163zzlwedol.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163vrtlphbh.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wvfnxzdw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163mklfqxjd.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ctpouenc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163wegfdjzv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lkysapjo.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163tqikgcks.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163xynlloxi.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163olagtwtu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163digbkjrf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163veglebtm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163szltntuk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163nhkxsmkq.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ehpffzha.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163sndgmpvl.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163udevktxa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163jpcrdqvd.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163cjwuarin.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163yergpeno.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163eekxxpyl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pckfifse.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163kfdvvlwl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163wyybpqdk.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163awlqjcmk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xnxqwixe.html

[Q22] 排序
来源：http://www.sxryk.cn/163ilvniuhx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163leoadasz.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xyjrxhdh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163wbzzuqxk.html

[Q24] 去重
来源：http://www.xuanzx.com/163knvaxrpj.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mdbmkvjl.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163osuvwlnl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163vooeukcu.html

[Q26] 计数
来源：http://www.sxryk.cn/163yobqjxkb.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ktkqievy.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163awanwoaa.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163tsqetghe.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163awjfypvm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163zyqijkhn.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163wzftbjrz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163tpaunmfj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wjcsttyx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163btglshba.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163xnpqgtof.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qnqiinax.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163yxlsegmz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hjrengau.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ogctodjc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rxmugogy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ffanqacx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163amludnes.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qtrehbau.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163bntdhhwr.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163quhnxswq.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zqjwkfjc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bmelukru.html

[Q36] 左连接
来源：http://www.sxryk.cn/163woamxtrj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qtvwmkck.html

[Q37] 右连接
来源：http://www.sxryk.cn/163fkydfovo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163gdmakrup.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jjsjbvlj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xqqehuyv.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163fznlwxlm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vwhnlgid.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163fyvardsz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163fsvzemuj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163fyrozsaa.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163bpqxmtkj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gyfmvtuj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163lpbcxpul.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163aiardkmr.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163lwjlutrm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ggcyyqrp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163wtmaducs.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163qqpmrvps.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163kqraajhn.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hasfulae.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qzieovjk.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163hcgyecbt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vmpmmssh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163gedreqoy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vwgsjmna.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163timkczjw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163lfbwunrr.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ypodniei.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jdysydww.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163pnfhcszd.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163sknieqtj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ozyiooqu.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163djcwatvq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163svwmywon.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yknlrrhm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163uabxumax.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163pmtjzinw.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163vixyhkcz.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163mkwwokeq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163lencgbcc.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163phtexeud.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fbvwterg.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fbpeuwlz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163sygvvjcu.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163dggketae.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163txwmrhkf.html

[Q57] 行号
来源：http://www.sxryk.cn/163hjmeaidy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163vpcqapzn.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163srsmbkvf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vopbeqrm.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163pykmqkty.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163nilyqadj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163yuwnepzu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163djqrwibt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163idldpnyx.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163fhvzcyzf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163oiziejrc.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163hczrtnme.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ocqwhqwb.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163popgqamg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163teycjigd.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163qeooolyv.html

COMMIT;
来源：http://www.xuanzx.com/163tcatmyma.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163nefsrpiw.html

ROLLBACK;
来源：http://www.xuanzx.com/163ssnybuwo.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163jyrgyzfj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ccfnlrxa.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vlrsukiw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dkdnaugu.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vsdlyybd.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163obsnchzs.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ytrisava.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xxmmyfpl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163uycouawg.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163jtmopspi.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163wbdodroh.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163klapvnzy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163fpfbrsdo.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163hqfjnxue.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vqocugtf.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163iornouda.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kftbyrhn.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163bbrxtgct.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163aenwdiwr.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163uxlbluxr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163lrvxnyjd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ljfrjiub.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163gjexzbai.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163atpfolty.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zfzdwexl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163cqjnacoi.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163yiqypdef.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163mcxkjepe.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163lbdyktgx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163uoyisifj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163gokciwdd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163rdrntvol.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ygwgyzwh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rpjpykun.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rtlvjxzr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163bxyzadtp.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lmzbujqw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163klctasgj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163nywaasnv.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163gvfeaakf.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163glrgaenk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rjxoeeqh.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163mtuwbecb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163nmazjbqi.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pomzzaxk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163fxlzyodd.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163niozcgrf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163taghbhqm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163nnclozie.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163natspjkd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ylzqukjg.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163mssgauvv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163eldyrxap.html

================================================================================
来源：http://www.aibaodan.cn/163delphxtj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163vehxcinz.html

================================================================================
来源：http://www.xuanzx.com/163cozzjtat.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bgfetsuu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163wtneszzc.html

set -euo pipefail
来源：http://www.sxryk.cn/163fsuvoeay.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xaghmjdi.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rlwekuxb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163zefnloak.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hodszvcb.html

[R04] 位置参数
来源：http://www.xuanzx.com/163zircwjkh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163uqmsdjlo.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163lzjldxaf.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jugeyuvi.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163dqfmuxuz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dbbutgau.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163mdigvtns.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hvpubuqp.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wwpvrvuk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163notxyrig.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163wsooedfe.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jpivemik.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163taegqsmj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dzlnapgr.html

[R11] case 多分支
来源：http://www.xuanzx.com/163kmzdgkdd.html

case "$1" in
来源：http://www.sxryk.cn/163mzaqonxx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163pzyfspam.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163erlwrmya.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163sjnupbby.html

esac
来源：http://www.xuanzx.com/163hwfetqok.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dtqgseak.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163oxgxscuh.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163icurejtk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163nbcbrjvm.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163iqjumqmv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163fikknhmm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163dhlydccx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mikxidob.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qoxdcsho.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163isvecthz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jrusrhso.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163cpponoxn.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163pbisguyj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bexeprid.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ghqwcfjb.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163miehkeyo.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163phahmaam.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163cukycvry.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163bnkirsjt.html

echo "${#s}"
来源：http://www.xuanzx.com/163bamelots.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wmqfgozt.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ezjnvezz.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163luezykcq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ujbroela.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qvsuhixg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ggdjajzo.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163sguejxpu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163foomlcnp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163oyvlvfqx.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wtzzuptw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163brxsdwxr.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163plkywlrw.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jniyyyms.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163icrljvrn.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wfjovcfz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163uqdaovhb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ctyskdej.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163garkafaq.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fokquhcc.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yvuoicsh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ghyrtamn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163lvjpjlxt.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163bbcsttlf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xpstntct.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163twedjoip.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kslnbbpo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bviwlirt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163eihpvysd.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163auknndgf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163mqfdqxhs.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163xiquaycp.html

files=$(ls -1)
来源：http://www.sxryk.cn/163tezpqbzk.html

[R38] 管道串联
来源：http://www.sxryk.cn/163qsxoxyoe.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163gsozzjte.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kjaazkaz.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dwofkhbx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163aemihguk.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163binnuubz.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ckqkoauq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163tekzjafw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163fmcnolcm.html

wc -l < a.txt
来源：http://www.xuanzx.com/163mtelxear.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163wqusyris.html


<!-- 参考信息 -->