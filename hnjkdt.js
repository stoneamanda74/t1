外链999!wailian999！

CREATE TABLE users (
来源：http://www.sxryk.cn/163ycncngsf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163bvttqgqn.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ohyhmyry.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163olzhgpcv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xpkdrcdq.html

);
来源：http://www.xuanzx.com/163znkkkpoj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163wqowhetn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163renidyfx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163omandgxl.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163lyxxaowq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163fvirawmy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163jqccodaq.html

);
来源：http://www.sxryk.cn/163eynhoqbo.html

[Q03] 增加列
来源：http://www.xuanzx.com/163uayhhymh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dqrlhgbd.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163vmrxfwrb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163sqjhetlg.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163wcmuyzmr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163comfklsw.html

[Q06] 删除列
来源：http://www.sxryk.cn/163omcjajgx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163tzzzebkf.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163zyksqhom.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163mikiwwwc.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163kaemadmy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ivqnvega.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ylccpnqc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163iwfkxxjl.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163voezxrso.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163gbrhmnlb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fmolakvr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163xjtntygo.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lsmmfdcd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163amcdcowa.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kwjlpwtq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163bpvodhfi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163bufcpfoj.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hqdpfkhx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163okqgzohj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163hwllsnbs.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163mgbeoakb.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uofetgez.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ejfiorig.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ahaofpdz.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163locyphtu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163bthlswir.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163pisqcrww.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163yesjljkr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163blmrhcda.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163yddjaypf.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163shfhepkp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vqxzzocd.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163kccsoajm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ezeclial.html

[Q22] 排序
来源：http://www.xuanzx.com/163rppgisqa.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163krrnfuqu.html

[Q23] 分页
来源：http://www.sxryk.cn/163xknwwudy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163urufogvt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163gjnxnisx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163xmxzgxwy.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ghiochfz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163txyfwzjw.html

[Q26] 计数
来源：http://www.xuanzx.com/163livpwhxk.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163whemrxem.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163atcvnuit.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163rgvyvrig.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163fmicqhqr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ztdplhbe.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163rftekfup.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163iwmntdwo.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vmaumchh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163usksqtim.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163lvylrxey.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lrtiuvrq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xaizdrdd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pzkscykg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163iwfdcfwq.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163tyzkvdzs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163dahrelyc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dobwprtm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163dzlxucuc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163qfldlpjj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163zoajauam.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ussbkopf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163krtqdael.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dhqjvpjb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163idagdioo.html

[Q37] 右连接
来源：http://www.sxryk.cn/163nmvrovwc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163evrmwwax.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ubtzfxfx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163eudrdxzd.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163zkxpsiaa.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xfjiakam.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163nxkxngzx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163pymvfsap.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163shnxgtah.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163eiyktxjz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163olunjepu.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163alutarrj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hpqspuuq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163hegipjll.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163hhqqhvdc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163cokafsfz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xhvfzrsq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gagrbagf.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163fehvshga.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163bnytlxes.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ifoszdrd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jnhwsfbu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mstultzd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gftbnzmi.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jugsrhhe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163fmydenou.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163rsghtdws.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163edfsxyhj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163khskxoiy.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163wmpbuqso.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163nqqjjiuw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qyzxoqya.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jjnsppwb.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163udppukxu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163npkduthq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163trbncjrn.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163aveqobhv.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fcuraexq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163pjzcrbbi.html

[Q54] 清空表
来源：http://www.xuanzx.com/163trvxzwfj.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163jsqsakrt.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163drkxwbeh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dacfnjrb.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fdbzibbf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163cxamtoan.html

[Q57] 行号
来源：http://www.sxryk.cn/163rcxplpor.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yfoyuqae.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bbkznzgb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163clzfpgcl.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163vffqpgtz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163pszuawij.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163rayqlsra.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163tnxtvsfv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163iijfvwxk.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163iwmzhxka.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163xkinvrzm.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163seulrbhu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vwfmlodh.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vxthozqk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163oseclreb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163mbwoaqhx.html

COMMIT;
来源：http://www.sxryk.cn/163outcohjo.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163yttorxla.html

ROLLBACK;
来源：http://www.aibaodan.cn/163bedopose.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163vsbajwjb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163oeetwgjt.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163jnlgqdie.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rfkbquyy.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kjmjjcnj.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163fhfujxzq.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xoymelze.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163mpevmogu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163nleeqhmr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163bzsdabpb.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qkbvxvoc.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163wmzyallx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rsqjmfxw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mdbesecq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rfgxisfe.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163awqbcofo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163aeahjapx.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163yfzwjobl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163pewhmihv.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163nggkvfdc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163inrciqcj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jqyqgufv.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163qihgpddl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163tvrasziv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163mxqbjths.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163pnqrftqg.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163rlandsod.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163drbmyjoj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163frofmtyw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163murarjyv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gpnmsbgi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163balaswno.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163meweaqvr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163hegprrul.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163dviolykf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163rijogcxf.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zhcawisy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163aiaismdj.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163bwjfozsc.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163sbitntpk.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163xamukosi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ogxegrwc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ecwemtnk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163yupsjoid.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163rocukfhh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163cegfqtgq.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ezmmvcdi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ntgyikxf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163owlvaeza.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zsgtofvx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163tuaisjgz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ibxdmgel.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163mgrspdru.html

================================================================================
来源：http://www.xuanzx.com/163jkbbvbos.html

R. Bash 专题
来源：http://www.sxryk.cn/163xzwabdxd.html

================================================================================
来源：http://www.sxryk.cn/163gqywtmpo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163upzgbftj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163zkaixmtf.html

set -euo pipefail
来源：http://www.sxryk.cn/163mcgnhsmp.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163mzzjchwq.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163lznwoxlo.html

[R03] 只读变量
来源：http://www.xuanzx.com/163utrkjmqy.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zfmscuxp.html

[R04] 位置参数
来源：http://www.sxryk.cn/163qgjqvbes.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ytezyvhv.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zgmwlcag.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qheobfth.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163phwakxeg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xynjvskz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qescizdl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163lrwrrgwf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zbgkirbw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ndehxzjj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163rlvlhsyy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163resbjjgk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163xqkqchcj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pajcetsh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ukhlyazf.html

case "$1" in
来源：http://www.xuanzx.com/163tbezzyfu.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jxnttimr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163yqpqqgwh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163klraefwl.html

esac
来源：http://www.aibaodan.cn/163ladqywii.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163lquvlhuo.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vbgpkrjc.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mesudwaj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jktplbch.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163uzrzwclo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163aihtcalu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ijzouqle.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wdxgxhot.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kxvnlwqg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rccepfvz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163oizsmzeo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163eyrvnoqw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qdhsqmfp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163lvgmluyl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jpamhggp.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vofgqopr.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ymwtryel.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qpuxttak.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163idkhvuss.html

echo "${#s}"
来源：http://www.xuanzx.com/163hiymnpos.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163otapghds.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rqdiiqjz.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163adkpvpdh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163nwvopqcv.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hfyvmdkr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163hbxoynhu.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163tnzpndzu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wumrxivu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ptiisdxm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163rbifgoyo.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163fvmdhlqb.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163jqsmbiwj.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163xlqjxwaq.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lwdzxjnr.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vvuecpjm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163cudlueiz.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163hwwxvyhm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jepfgkpl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163owsotvsg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163stfrbuxk.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163tnhufzmk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163gohjnndu.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wzpebgev.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163fruvwlng.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163tfbsteek.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jrvirdci.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ahpvhdle.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163gazrukwk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163polqelak.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163iuhvvhev.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163jcwmtdri.html

files=$(ls -1)
来源：http://www.xuanzx.com/163awnzwvzf.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163oimrqeod.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163lltrjchj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163angwntzx.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ygvlbvph.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163sqokkcgk.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163fiumxwes.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163kmhuzjlv.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163uggbcohe.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hfcjchbs.html

wc -l < a.txt
来源：http://www.sxryk.cn/163fixeuxok.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163wpnzfzni.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163fcoahnkk.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163dnydqcvy.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163acpnponw.html

[R45] 批量删除
来源：http://www.xuanzx.com/163qksbabry.html


<!-- 参考信息 -->