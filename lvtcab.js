外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163qbzyocwc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163oadzjxke.html

================================================================================
来源：http://www.xuanzx.com/163guqqtmqs.html

[Q01] 创建表
来源：http://www.xuanzx.com/163eribayss.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wzzzdiib.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163igguwxuv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163hljeohyr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163mfgusqak.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163odcuwwdy.html

);
来源：http://www.sxryk.cn/163sijsbxms.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163svjotzev.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163dmkddwhe.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dacfnvkr.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163lpmvlouh.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ncntgifa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163tdtejakp.html

);
来源：http://www.aibaodan.cn/163zudbwanw.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tbccyifu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dyuyaqvx.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163hrderyjs.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ewvjyjcu.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163pacpipwl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163asgukisw.html

[Q06] 删除列
来源：http://www.xuanzx.com/163cewicxnc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163dqnquijy.html

[Q07] 删除表
来源：http://www.sxryk.cn/163slazkerx.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bdofjqnw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163nvhhmsre.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ufcvycwt.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163hwhvnpqm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163mxmuosai.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ddzrdicp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sgjunfvb.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163xliojefz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163qrcfefbm.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ngtovoni.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163rugchvpf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163okyclmoc.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163glantsnv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163vvfaqvir.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163boivqpum.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163aesfoujl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ixrgolyb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163nefkgodv.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bwnqctnf.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bcdemury.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163idbqnoem.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mvalcsay.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163bsjmpttk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jotfyoxh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163vvrnrjjc.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163qveiutcx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163gdyzuyqr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163paokoxno.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163cbjsidwm.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163rolamhvg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163frcjbalo.html

[Q22] 排序
来源：http://www.sxryk.cn/163yjdhlsgs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163wverdzgk.html

[Q23] 分页
来源：http://www.aibaodan.cn/163nahcizwn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bhmuesgj.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lrgwrklh.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163kspcelws.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163sqwnqmib.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163gkjkxevp.html

[Q26] 计数
来源：http://www.xuanzx.com/163aweslwbu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ajvuqlbu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wzswjyqn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ggwtyuxm.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163diiokgpb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163eoaemgwy.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163iwcclqli.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hklwntjk.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163zvwsfyco.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dzhpcuwy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163btmrxxyd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163guxvgrvh.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bcxonqpl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ccunqgty.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163kdgozeib.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163yrffegrk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163klfqqeov.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163tnytihlx.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ycoybdoc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jqwoqpfg.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163eakaajjw.html

[Q35] 内连接
来源：http://www.xuanzx.com/163mffqbshx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163lopplpsp.html

[Q36] 左连接
来源：http://www.sxryk.cn/163eannknhf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gvzqmrsg.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ohwcmknc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163dthojsng.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jwgdvpen.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wcrktlvl.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kbjmvhxv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163fdrzefvc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163juvlnmcg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ylyqpkbn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163opiidudq.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163qfccxkcd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163imqnchfe.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163lgvnijmr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163yotqhako.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bnehxqav.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ftmisitp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163vdqwjghr.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163edjewcrr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163nlofqwyf.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163acyeulyh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163dctvlhus.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163atyenoen.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jmoqvilg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xvnmtcmg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hkrylehe.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163kfccahyh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163karleczw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ovvhyznm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163yazpflnm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163yvejpqni.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163udxqgvmx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163sotzdnbh.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163svyacuvt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163wcuhswxd.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dhwnhdme.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163aaavuoya.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163abwklzdn.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163jizmmexz.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ystxvevt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163jrvdfhma.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163rssyysmu.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163tmhonoit.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cpcshhfy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163dzqhtxwk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163lysdpqck.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163pxypsrro.html

[Q57] 行号
来源：http://www.xuanzx.com/163ttlpuztt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wqhfmhel.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163olzunyys.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163cewitzrh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163wynbfuyh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163baxvtsnf.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163hidyzkdv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163wmtwenyy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163bskapwij.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163oyixwuts.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tyynyjcf.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wisysikw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163myicqrqd.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163rtzzcbdd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ijdglgma.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zeqsibyk.html

COMMIT;
来源：http://www.xuanzx.com/163ztyhlccj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ugftxurb.html

ROLLBACK;
来源：http://www.sxryk.cn/163jmbnmmeh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163behddqrb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ujadntan.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163tyedndlz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163swpoxyeb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163hquuzfsg.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xnnizhxp.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163fvifckcs.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163fyghlowm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163saslmtat.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163esggwabn.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ncxnbhjg.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163hthubjap.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163malnqsem.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163tpvavysy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163fvqtxckp.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163rmegabcv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163cfgncazi.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163agjlprje.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ibauhqul.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163lnhmppiu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163uxuztlhh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163zjblhsso.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163egbdwfbi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163kubnsaup.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dtcgfobv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ltcotvmw.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163erjcjubf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cwdfnqju.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163jwhwvymn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163uqxbrptw.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163nqwocupt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163stsguslz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163xgycodju.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163kuainsif.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nekyashj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163cuwtddeh.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163wjuzaxfv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163oshxmjka.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163lidqprvw.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163hndxdtxo.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gionqlcb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wuihkgwm.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163oouxhqag.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hqddlhcp.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wdsnktvi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xlsfaezf.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163liekftvq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lriqwicg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ecukmtie.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ycxgsgvz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163qdimktzt.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hfijyvvx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163cmqqnhav.html

================================================================================
来源：http://www.aibaodan.cn/163vsbmjgyo.html

R. Bash 专题
来源：http://www.aibaodan.cn/163yqynxxcw.html

================================================================================
来源：http://www.aibaodan.cn/163xlmyzjta.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163amqyaxyd.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163vzjgmfuj.html

set -euo pipefail
来源：http://www.xuanzx.com/163aeawsjjm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163sydhfkox.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163smepeugr.html

[R03] 只读变量
来源：http://www.sxryk.cn/163mhgdmalw.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ohwydykx.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bzcqdfir.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163zelysyxq.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163dvmuenml.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163crlgcjdb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163mnaqsvlj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kfpigexw.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163mfwvgrdj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163lcuwqwqy.html

[R08] 数值比较
来源：http://www.sxryk.cn/163rxklkeej.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jznlauel.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163slzlnctc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163aqndbkxm.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nhkisnna.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163myyytvrl.html

[R11] case 多分支
来源：http://www.sxryk.cn/163mwefjvhj.html

case "$1" in
来源：http://www.sxryk.cn/163fpcveyar.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163vzxfjysz.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163zzajdepx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163eafrlwxf.html

esac
来源：http://www.sxryk.cn/163xsdrjzpv.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cepludrx.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rhjwjsqh.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163yooopiwr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163cduiodgg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163yqwsamtc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dbxbimdl.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163iqalgair.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163puhcgqug.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163bcmeotce.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tffrdiwv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163uyfbeufg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163oacajbwt.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163gktunznq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163rnbgkmhl.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vbnnjrco.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fnzsdbwk.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163oilidqsg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163hivnkent.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163vytyunin.html

echo "${#s}"
来源：http://www.sxryk.cn/163rfpcwahq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163hzhhxnjs.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kgjgovjy.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163gayjibpe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163yuslhxiz.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ipzntkqh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163sajmhjwu.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163jtvgtvhp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zonpmrbq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163mpofdbmd.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mscwjuyq.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163phrslywz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bzmvbmcv.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lqjbrjmh.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163kynvvrya.html

[R29] 定义函数
来源：http://www.xuanzx.com/163tdurbjpl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dxxmdnpz.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163slgthssq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163vokbriap.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ghjuasxh.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ngvxwltb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zzqitdbs.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163cfxfirnq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163jflcmady.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xazmmfzt.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163edtncsev.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rkhjnymf.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163bhslwigp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163brzkidst.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163qnztxmmf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163iauabkzp.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yhconekv.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163bhtostxz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163mwhkizsz.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zodwkfpk.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xsetadcs.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163pooddlom.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163lgpaydtz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ncnozkan.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mjuzglol.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163wbuctwsx.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163soflhwfy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163eijeuatl.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yajfzhgo.html


<!-- 参考信息 -->