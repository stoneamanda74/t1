外链999!wailian999！

);
来源：http://www.xuanzx.com/163vgxskdkh.html

[Q03] 增加列
来源：http://www.xuanzx.com/163rsvjuwfu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xojsagba.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163eqlayhps.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163yyfkryoa.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163nufommvt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rypxzcio.html

[Q06] 删除列
来源：http://www.sxryk.cn/163rgwgefkm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163mxibzxrd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163pcuyzoxz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163xzszgyhb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163bwljyvjr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ntbiiebk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163tbbqsknp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163gowwqfck.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163dadxiupq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163kiqagfxx.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163gldwhhag.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ndxmkbge.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163enhbzyvt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xuhioycg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163nyzxjpdu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163omuhpzel.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ezyeuwjh.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163uonjogaw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vnfgwtqh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xgvbzous.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163lckwrtvm.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163isusgmof.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163cbqlakav.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163drezhkgx.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fyjwjobe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163lexykkyo.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163kykvxxll.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163pjgkfwle.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163tbpnihqm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163rntnnmhr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163gezkszms.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163znjcdeup.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163houcixhv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163cuhacqhr.html

[Q22] 排序
来源：http://www.aibaodan.cn/163omvditvv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163coocsvuu.html

[Q23] 分页
来源：http://www.xuanzx.com/163rfsjzxrb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jmlpavvs.html

[Q24] 去重
来源：http://www.sxryk.cn/163miksbrck.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163huygwlyh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163zzhdxmwg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ydrfnzaw.html

[Q26] 计数
来源：http://www.sxryk.cn/163ivctzjpn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163gpiigabb.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163niggkagy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163yiudvmes.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163upcsfhrz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163dfjrvlgp.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163efvrztre.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163rqgqzqff.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163jybgdbcc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163thpkjlqo.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163wotzdiul.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163iuslbtmu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ghvnauou.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qxbijuyj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163nxpgfgog.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bnpiziju.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163nmaubbaj.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163eghpfxyw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163slevslvk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163qbwhaayv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163qzrpveoh.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ietmhkxs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zomkvaoc.html

[Q36] 左连接
来源：http://www.sxryk.cn/163efgysoyf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zaogfqdd.html

[Q37] 右连接
来源：http://www.xuanzx.com/163khaxbbvn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qhfiqqfi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163enhoxyzn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163jpdhenuh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163osqoyzmq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ywbxwfjc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163vzldrzrv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vtizrnki.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zmrgovbm.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163svlaoxcx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163zamugsgv.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163atesrojj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163whnyizqc.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163liozdxqu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163fohnmswe.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pgodfhkd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163fmrmvmem.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163pfkwpgnp.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ctxeqdkg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ghwgkfjr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163mllszilb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rzcmsrbe.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163cmunudoq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uffuasav.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163efweqfwn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zusltofe.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kdlctrwr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vckgssds.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163rekvqcbn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163cytkdpej.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ktoyvupm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163evmxvqhk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163gvusrzqm.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163kjkwfdiu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ebqmashv.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163pifdqtyv.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163atedwdxd.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163eynasrmb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163lmgglbim.html

[Q54] 清空表
来源：http://www.sxryk.cn/163mmbvphar.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163enwebffv.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163inldpbqw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163rbwhpfan.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fbeujzkj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mdhphdim.html

[Q57] 行号
来源：http://www.xuanzx.com/163zjkzques.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163bclsizjv.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163dkxcvzbk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163pewqgpfg.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163rhmukurf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163thfsirbs.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163crfhcjwy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163pomeydci.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163hawhrnxt.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163smezwbyv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163vgtdoowc.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lyvtqoau.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mwnexcrk.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163dllbyfvj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163pmgqzlcu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163qoufjpzy.html

COMMIT;
来源：http://www.sxryk.cn/163bnlhgxxu.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163kryspwrr.html

ROLLBACK;
来源：http://www.sxryk.cn/163xjcukwby.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163olxxdxsp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163xwnueehg.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ldvetufn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mthqbdnu.html

[Q68] 保存点
来源：http://www.xuanzx.com/163aiogsoqx.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163utauxfrl.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163teetexpg.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ppkgdmrx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163urtphkez.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163dfbitteq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qgbxwezg.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vuuaqvlo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163tnbzryct.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ntwtbslw.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163uncclclr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163cmuluuhs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163scqiakdf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163itnjbmcj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163jovvnrzl.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pazsossh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wdbwhouh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gxsvxxab.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163dfhibkkb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163inwylmzc.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163wovndvrq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163tqsdmlji.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163pmxqhozh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163xbgkxxih.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163tdphydtv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163evfxzndh.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163pavpwtuz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ulpyebej.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163mfhhldqw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mcwyquyx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163wmengtwg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163znfhafdl.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ixzhbjmf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ylocidin.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163liedncyr.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163jexhjjjc.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163wzxkckxh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163nxvvldlh.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163eimmqluh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zufazcst.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ifgvvnef.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163nunbnmol.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163gwbmvbbs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mzgrwibo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163gsgbvmxd.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mfwdrkht.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163keghoxbb.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163dhuuwmbs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ysaiaucd.html

================================================================================
来源：http://www.xuanzx.com/163qznkoaye.html

R. Bash 专题
来源：http://www.sxryk.cn/163mkprhuxl.html

================================================================================
来源：http://www.xuanzx.com/163hoogpqtp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bugyutyg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163uwnjieol.html

set -euo pipefail
来源：http://www.aibaodan.cn/163sychsgon.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cltlgobt.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163gvcueprv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163vrqlgqpq.html

readonly PI=3.14
来源：http://www.sxryk.cn/163azbtihji.html

[R04] 位置参数
来源：http://www.sxryk.cn/163tidzjnvl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163gvcznsas.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163cobvwlmn.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tyqkaxft.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163axlwwunk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163urhqpjrn.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163hgczllix.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163rkicutzb.html

[R08] 数值比较
来源：http://www.sxryk.cn/163rmlvfdov.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vkwpkxqs.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ykfitaiv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wixbqpdf.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pmntsnwl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163vjsdwgzg.html

[R11] case 多分支
来源：http://www.sxryk.cn/163aifamrbb.html

case "$1" in
来源：http://www.xuanzx.com/163pohnvhlk.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163llgreomh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ztdpcymg.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hqydhxsy.html

esac
来源：http://www.xuanzx.com/163tbuuujlf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vubvfgil.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163xcuugtct.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nhbhoult.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ziehkrfq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jmcecsam.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163klmkuwlu.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uvykqaom.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ayfilwac.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qudsdqib.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163cjaqhued.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163vjtkyncl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163axhpgbfy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163jvbntood.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163luhxpxes.html

[R19] 数组长度
来源：http://www.xuanzx.com/163oyzdcwsk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163rehatyto.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163megwbrxd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163prjuzguj.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163zpclzdtj.html

echo "${#s}"
来源：http://www.xuanzx.com/163crzwiliv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wykjvdab.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hiihigvi.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163kzfrvpzq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163wqjfdeuz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163mduvhmtc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ebsnsprs.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ddiwtuou.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163asodobqz.html

[R26] 命令替换
来源：http://www.sxryk.cn/163rzhygipt.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163gsetjzbu.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163mqtemyht.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163nnycwixu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163afivqkrc.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163adlabhbj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kwspwswb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ixfbnuyx.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cvtnnadw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163svmwqfnv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163sjrxqxia.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163vjefothe.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fjewbbav.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163texiuqbw.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163kqqrcglw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jnpntbvx.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163gvhjpufb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hdnrpceu.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163rmlacthl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ozzyensa.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ucewgitv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163dnjczavk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163lhgzmxcw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163zuocdhmt.html

[R38] 管道串联
来源：http://www.sxryk.cn/163gmwgiybd.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163izewopoo.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lfezpekz.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ceoypoih.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zmoqhwhv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gydhslbw.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ttxndqvn.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163iuyqpjfc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vbbhgbfx.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163trxgwnvk.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163lyvmzasu.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163rdvongnd.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163okwqsxhl.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163nrnrpsul.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fhktyxkf.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ceqjatlm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163natacvor.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wupuzdde.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163psnolcfd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163vshvybel.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163cmldgduj.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163jyrpzixi.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mnxuccij.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163tppysgpx.html

[R50] awk 求和
来源：http://www.sxryk.cn/163svxbqatd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gfcspdzb.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163rgspguwy.html


<!-- 参考信息 -->