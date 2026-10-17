外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qytargfu.html

[Q07] 删除表
来源：http://www.sxryk.cn/163fsgkzfqs.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163pcydmwhk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qtjgugaq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163jbnaccgp.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xedjjawz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163oxgsvjln.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jewldcoh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dhkqhggr.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tbautczu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163zuavtdby.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163bzjluayv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163phbsupey.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kgomutcw.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ukolpmre.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163vakhokui.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163kydssfeo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bbfyzrok.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163gupvxfwz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163otabworz.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163adzwqdfp.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163oiayssaa.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ojccupag.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163iehnzlkp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163yeiuacyy.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dxzwktlm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163jphjflyt.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163uxrezqrv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163cpqornuc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ogaxdstr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163bkbwfrrz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163judszlct.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163snuzwqab.html

[Q22] 排序
来源：http://www.aibaodan.cn/163otfmmnqh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163mseosjsx.html

[Q23] 分页
来源：http://www.sxryk.cn/163worzuqdv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ayhwspce.html

[Q24] 去重
来源：http://www.sxryk.cn/163etkbvwqc.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163gwvkcbpu.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163sluwcpgc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163fugnmvks.html

[Q26] 计数
来源：http://www.sxryk.cn/163tnvondyt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163wbmotkoc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163aowblcpk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163vqwgugzk.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163salkcfou.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163gyqhtagg.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ygyvipdj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dtwpwjcl.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163sfacuqcf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xorykpdg.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163rpukmdos.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163yauztdmm.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ftkxtryx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jetuidmw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163egezmdac.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163sxilspoh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163zmeujhdc.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163trtvpfjv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jswgdeki.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163fkgdovib.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163wwadjmcj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vzgtagts.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163otfglglv.html

[Q36] 左连接
来源：http://www.sxryk.cn/163jfnygilb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zmrqdqcp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lqgqifmc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163dsfadyng.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163kjasdcjd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qnftvxne.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163knjdzolh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wwfyhbtv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ovzcesae.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fbfhncaf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qxemeaqp.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163fxflrtfy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163dgmbbmgg.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163leiusfkk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163qjhhaoqp.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163qewuwmmf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163fdmihpty.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163pvzsadnn.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163fqlqkxqe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163tkmwhfmx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163faepmjma.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ojwgtbaq.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xcizsfgd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fqjbxkyw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163xmpwcaep.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cdbrdwtm.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hweopken.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163yqopcuox.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xpcjdomh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ubasmuxp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163adfdrztc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163zzteqmtj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qyrdyojc.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163keodencj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ynhdmeug.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163byfetuda.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163poncljoo.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xpdkuceo.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163zjupfzlc.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163qsjqctvy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163jskhewuc.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ljbzvody.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163gdothxhc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tqoextdz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163oeldpirt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mitvlmep.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ivmougky.html

[Q57] 行号
来源：http://www.sxryk.cn/163idezpskn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163swiswjys.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163boygddvt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tfkcogkh.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ozhzymjh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163nzgwlsoy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xntgitmt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163phcjllxt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163cucesikq.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163uxyfyfcd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163bacjfaye.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fpvkfmbe.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163klwgbwdc.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fzdugraz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163bnhyavkw.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163nmhwdtjj.html

COMMIT;
来源：http://www.xuanzx.com/163bnxzaivy.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163coecsitt.html

ROLLBACK;
来源：http://www.sxryk.cn/163ewicjhwf.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ltjmomkz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163eprgtwxe.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ahqwisme.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163tgucsqhi.html

[Q68] 保存点
来源：http://www.sxryk.cn/163liuercch.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163tpylguwp.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ltuectfx.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bpytqnyc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163rvlqehvr.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163qpqtklcq.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163csrfqauo.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kddkxecd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163fbvvcuom.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hhfomrwb.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hxbeadxy.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163kucjjyro.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163srgwpwpr.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163yjudnyay.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ehidbbtm.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163eupyvsgx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163mqejsrbn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163onimywrp.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163tthctusc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163zuwtvuby.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ohilbjqy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ocxqccpg.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163blbbjqqr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163pglynocs.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163qqwgjnfg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pjxqqiev.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163qaggohqs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163vlhjxrir.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ywhwoohn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gowrjmtp.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163oschbxto.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163yeyxwjbb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zhatlofp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163dhoirhyv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xkxqwaeh.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ozctqnjy.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163oonqqhix.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163jymskicp.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ndjvisru.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ekukuozv.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163izytgkzi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163hjdnbtnt.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163pxymyfmj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163rkbmwiwj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163hmygzyxv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163hfowehkz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163znuccurb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fapfoexi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163cglfuizb.html

================================================================================
来源：http://www.sxryk.cn/163pbnjksqt.html

R. Bash 专题
来源：http://www.xuanzx.com/163bskoindn.html

================================================================================
来源：http://www.aibaodan.cn/163bofxzluq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163zakdwqax.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163qvooulsm.html

set -euo pipefail
来源：http://www.sxryk.cn/163wwimdywd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163isldpucd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163nsloyuho.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163pkrdekrx.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vssuufwq.html

[R04] 位置参数
来源：http://www.sxryk.cn/163tghwvwfq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163efguojsu.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163zduroicx.html

name="${1:-default}"
来源：http://www.xuanzx.com/163iucfyncw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163lvtnpyua.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163gylldidl.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163rolitogr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163glxfnigp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163peacgfhm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163tpsjcapk.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ccqmfjfm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163wmyzxkds.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zjxujfpx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mrwtzrdb.html

[R11] case 多分支
来源：http://www.sxryk.cn/163mourbgcn.html

case "$1" in
来源：http://www.sxryk.cn/163awvszfny.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163tygsnblx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163sozphsoa.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xoqmyctx.html

esac
来源：http://www.aibaodan.cn/163euigbnlc.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163jdgwdrgw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163imocuokz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ecssxzab.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163tgytewnr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jutmpfru.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163mcxdyhvb.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lcuzhapg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163jxkvqzjv.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163jpbmdimf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163exvhxoqq.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nitqppjy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vwnxmakm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ylhlfotl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163okrqrtnh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163swjpaetk.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163evcjqxfw.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lwzxejbz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ekrsdiaj.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163vklbnwmg.html

echo "${#s}"
来源：http://www.sxryk.cn/163otjggljd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ptpwopgf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163somtzrfi.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163nsfzhttu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163gvzrihzm.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163yfysmvgs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163lwmnjcmt.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163imxccghy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163urkeklsr.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wxjozlrv.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163muvqgycj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163isizrerx.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163atqzfuhj.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163snsqjlpr.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ctrldsli.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ycycnrlj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ctywqjll.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163pviasbpp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163uwevdskd.html

[R31] 局部变量
来源：http://www.sxryk.cn/163myzypchc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163lhbngips.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ilcmhmwp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163qvmignfe.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bbrofemc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163eugzefbd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jinzatiy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zedqvrpg.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kwgougij.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ypyclztd.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ynwtedtl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163yhvzpfcw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qwcecchj.html

files=$(ls -1)
来源：http://www.xuanzx.com/163oubnozhd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163zbpyrpuy.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vzhulzde.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163bhnmiltl.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163vhtgbpfz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163mxspfofp.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zgwbzxox.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163pbnzycep.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ogcuesdk.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163irfzkiwr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163dfdvidqx.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163tlglykwn.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163oiajyymw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qzaotecy.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163woocutzs.html

[R45] 批量删除
来源：http://www.xuanzx.com/163azirsfax.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163opixzxbz.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163igazpxbo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ukrkqouv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dbrgmsqd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163merugcmx.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163coigwkex.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kffoqfyz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163oenpbbbb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mjbiophp.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ypqdbpey.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163emqfdjyn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163oiecgnlc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163yrcqsaob.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ygiodzss.html

wc -l a.txt
来源：http://www.xuanzx.com/163nyorpllb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ragjhxyc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hoomiogc.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ibwjlwrl.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163kukwdair.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xmzqdntc.html


<!-- 参考信息 -->