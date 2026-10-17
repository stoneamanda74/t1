外链999!wailian999！

);
来源：http://www.xuanzx.com/163mudwfdzn.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163owhiionx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ieumbcqu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mfbozikt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vgrygxrc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mayydsgt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163uulfwtvq.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163zgdphmlw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163msrmvpvb.html

[Q07] 删除表
来源：http://www.sxryk.cn/163unoqncdy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163zeldslzu.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163jummnhxm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qpojjyjh.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163vntbrvfx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ctpcegyv.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hgdiapsa.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bhobvfmd.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163vdqppjdp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163mtylnwms.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163dyhagpfo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163skbnnypc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163hcalwous.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ckquuwur.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ztgjpvps.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163oinpgclq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163quqhlwyl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163xieiadkq.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163rtddvszs.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163xshyamvt.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163iigtppdc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xshamnbw.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163aqfliqox.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163mhlujuqw.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mmfdjnbp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163dtxyfeaz.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163tjxlqwmo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vsqtmswc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163xgepcpge.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163mvlbszdh.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fgkxfqfp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xrwhqkhy.html

[Q22] 排序
来源：http://www.sxryk.cn/163pbgedpnl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ursvjogr.html

[Q23] 分页
来源：http://www.xuanzx.com/163fgnmmlzj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163iknqwlch.html

[Q24] 去重
来源：http://www.aibaodan.cn/163earcwzvv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vqvqghlq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ggzparhf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163gmrrvihd.html

[Q26] 计数
来源：http://www.aibaodan.cn/163fbqhrlsa.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wezuolgh.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ancticwl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163mkrnruen.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163impnxpzo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vabspxqi.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vquedsug.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163smzepclt.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qhqvrmbg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kgcydluf.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163acqlroqy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163mjfmavtd.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xmmzaveo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fczxmlos.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163etzsjfrv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163juijewow.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hxwuebdz.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ncsmnoms.html

SELECT * FROM (
来源：http://www.xuanzx.com/163onxmuvpp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vdkoglta.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ayfjmihn.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dvyjtfdd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163lpjwvnah.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163lnzlcvqg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ldeopvdx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163cjtlccjj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163opoqmups.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163zoixlfwa.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wrlqrmvh.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163appvktoo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vmyazatq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163uogkbqcv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163efbyusrh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163hzfnjsqq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163bhyhpmri.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163yluaegwi.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mytpxoqv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163yfrxbbfd.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163pqdxzzyx.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ymefnfid.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163hfoupgnn.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ahiahfsn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wlleerft.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163etsqpunp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163xjwrpqup.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163raxhidvw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tguiiotb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163dimmngwt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163badcvlml.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163gcqqigun.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163iwudlnki.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163zvmduvau.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163eegwmjpm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163zmmlvxwr.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163vwddvwpj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qpyabvbc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163csualhew.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163bjxdhpto.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163bwotozup.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163gqqlpcrb.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163tqqvzire.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163tvjlnnuf.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163meaztymn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xqgutmzu.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zavjuins.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163nvhmcltn.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163jzurexfg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163pessoiqb.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163yyfbujaj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zhyjeayf.html

[Q57] 行号
来源：http://www.aibaodan.cn/163cgjbkvzr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163vztgzjpw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163btrlgfjh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163zgvorzee.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163vfsoqgcj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zrllgtca.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163pomagszo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xcjmqchu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163njpgmaxu.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163wwyalbxy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dnvlpqmv.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fhdwwcfh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rcrfpuky.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163twexzuzj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163xkshabrg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ntexvtqs.html

COMMIT;
来源：http://www.sxryk.cn/163mfjtbbcf.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163espyzxij.html

ROLLBACK;
来源：http://www.aibaodan.cn/163zctbqrqr.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163srgabrxv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163hxboygds.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ttnqnobj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jxojgyyt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vknboeow.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wkxxdord.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lhbkfkcd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163aakshtit.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jhewdlxc.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ddnrgzfc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163jxjesrga.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zdefwmrm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163qobecpra.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163tzjllurg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163yxifrbic.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hpltyube.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wswruikt.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163lhrzcqmp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163qgxqkvev.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163deasclya.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ujobofbi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163psnhhocj.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lyyawqxv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163diljmqca.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163asnivoue.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163xkmrudwz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bevtjuuy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163eskksfyi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163dtfswczb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163rkheyvfq.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zwevupgx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163rvnpklvh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163cpqfoqyh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ulmlwlqb.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163knbanbwl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163pfmdbxpr.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163oasvybsb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ccukhdoc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163zeojvstd.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vsdrryow.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163joirwwhu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163zfgxkqli.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gktggqhq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ltgckdbi.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qbfonfvk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mriwdtcr.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163fsqdbbau.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ksszctgc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pjpeqqjc.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163xvnleyfw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163oxxkgqug.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163cvmcxkyd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ojtfgzuf.html

================================================================================
来源：http://www.sxryk.cn/163cuglxnfc.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fffmtjbc.html

================================================================================
来源：http://www.aibaodan.cn/163jpjeexvi.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jnvvtpyf.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bbgstyms.html

set -euo pipefail
来源：http://www.aibaodan.cn/163inimnrwv.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163scosuzma.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163guqcxfbe.html

[R03] 只读变量
来源：http://www.sxryk.cn/163wvlumuki.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ptutpkvo.html

[R04] 位置参数
来源：http://www.sxryk.cn/163orlwrtkn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163urevlvcr.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163gqduwgvz.html

name="${1:-default}"
来源：http://www.xuanzx.com/163hqlwuquq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ofawrrbm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163obhikmhz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163cqzvnvvn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163gqqdrbqi.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zscaxrwi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163zblapjin.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rveugxff.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163iipsomgb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ztxdltfo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yfhsmcnl.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qpsiemla.html

case "$1" in
来源：http://www.aibaodan.cn/163umcjtsmd.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163yhdrxaht.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163epzoaptu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163rrgaccgy.html

esac
来源：http://www.sxryk.cn/163ckzyshxo.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cbqsrzhz.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163xbsztnoo.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ynxxfiyy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163agyrylop.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163glzrtrbx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163kseyexne.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163fdavaniv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163aiigrrbf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yilucayp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tzmypkkh.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163okctjdid.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lkgcglfe.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163osxoreip.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vlbwybsu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163wxhdqvzb.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163htkbdtmy.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163owilqhht.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163yhtoyfyi.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163gczrbbve.html

echo "${#s}"
来源：http://www.sxryk.cn/163tqmvmsce.html

[R22] 截取子串
来源：http://www.xuanzx.com/163sfcnfntp.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163baufuwox.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ajzgwssq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163pcwmkcrc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163kmcddmvt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163pifxwspv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163nnxsxzww.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163snlkzcxo.html

[R26] 命令替换
来源：http://www.xuanzx.com/163qmeamblv.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163bcazlqoj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kyytgcod.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vxyxjlwt.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163dccoebpw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163nhgqohyh.html

[R29] 定义函数
来源：http://www.xuanzx.com/163dxsafjmr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ksmpveui.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hkosqawx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163kuzwyfum.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ilmjeiml.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163skkdimzn.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163adjyvojb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ggkqxwwr.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163adgvlouz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163oikzgiam.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163qujacrrb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lgkpyiqu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163fhwkuvbe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163gnzfiwhk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163dlheuipr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163kacfmngn.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kqezpqae.html

files=$(ls -1)
来源：http://www.xuanzx.com/163afowsaaw.html

[R38] 管道串联
来源：http://www.xuanzx.com/163dxhsvdeq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163shdujhtl.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gutchruq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163mooukkrq.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ohtsgkig.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163mxhtajrn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163yvdzhvwh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163fvmkbvrw.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163nxodrcpc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dmgsrluu.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ywkyogqq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163wecuugzv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163eeyrcggr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ibdqigds.html

[R45] 批量删除
来源：http://www.sxryk.cn/163czkpjmfb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163uhvkmowc.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163mpvsxhhm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163jheubvin.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163epgcsoak.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163esanwzxv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ljgznull.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163lsifpcjy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zscxrlch.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163wjidudcr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163pktlqjgc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163yutnqoqs.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nnqjwzao.html


<!-- 参考信息 -->