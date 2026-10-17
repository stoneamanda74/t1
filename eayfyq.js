外链999!wailian999！

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ceoscatc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163qfmenxul.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xyftogkq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163caleeyvz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163klzgqhjw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163zqqavnyc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163zrrdviyp.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163sxipdcuw.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163cxattcme.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163cslbxnum.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nqmlnccg.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ekiiczqk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163idnrladr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163cxdttzot.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zmgoygsk.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163xpabttnh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163fwybmftv.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163wvkctqcc.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163bqfsppdk.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163bznycpko.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163klenmwry.html

[Q22] 排序
来源：http://www.xuanzx.com/163fcddwlbe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163qavrtjqq.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qvzjqsdk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jwaswcrq.html

[Q24] 去重
来源：http://www.xuanzx.com/163uxolukjo.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163kqehdddx.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ojkumftr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ggacfngl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hnfyypcv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163qxxqsybq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163elquqsar.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163dvdswuon.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163mdzjtshr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163mpkkqytl.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163kjoyzgjt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fbvhmhvg.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163huiunstx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gqetgybg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163klodltms.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163noevsjru.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gfqlnahd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gggdnviu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163agbbeiae.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163gesfyzbt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163iluktyjm.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163tiesrhbn.html

SELECT * FROM (
来源：http://www.sxryk.cn/163yzfhcafo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163euxhltwk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163dvfmmdbo.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nvsoirga.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163aahgomay.html

[Q36] 左连接
来源：http://www.xuanzx.com/163afciltam.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kjxsvhxv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pjirsnpa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163gpqlqawp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163yowfkcko.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163prbrvmgi.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163drahsiyz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vlkyayap.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kyrwxxkw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rjtwhdxe.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fkxoeaso.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163bdjtwlpp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163pusetchj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163tmykicxi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163tmjfnylb.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163gpvqapfs.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163hnokwufx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hsqnspqp.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163nseyjnig.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163bsodyajs.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ucmuvbip.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163rmusrnpe.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163uplvnykf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163coyemcgy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163cdsxhaqk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gdpvwkrd.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vhifngwp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163tclafnvc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163mjstfgtk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163emvjjzvz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163wkeyxaui.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163xriwppzq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163wtnysodc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ratrprqw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163kwlvzsjz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hceiexel.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163swbfgifh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163wncoeyck.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163auivsiqg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163lmitfcdn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gtdlifom.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ocgnjjfh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jsmaacqj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163jqjxanpw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163nzxbixxc.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rxntrthn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vdszadcj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163lwbzfxey.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ucnyvcyv.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xkdpscpz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163pfgzytvp.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qgrjuzia.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ixztnjun.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163egzbyqfd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163orustzmh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163eokpjkmy.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163rngknlpf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163olgxmccn.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ufjneejv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ljswkaqi.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163bsnhuqco.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163eghdfihg.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ycsuyyzz.html

COMMIT;
来源：http://www.xuanzx.com/163gqfsamjw.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163hpbmngjg.html

ROLLBACK;
来源：http://www.aibaodan.cn/163bwayngmi.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163otpaalxd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ipelxvse.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dkakjkvm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ggcagycn.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xzkoyxmh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163yhgkkxhq.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163fkvnfxnm.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xjpefndf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163lhtmnuqd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163pwqrrusw.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163trujqvsc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163juyluxtn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xocsaomo.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163triuggza.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ybscnwyb.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163lojwrmzz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163pjfzdcyd.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163byvfjltk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163lskrsphw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zqobcueu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ovqgtzeg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jxjyngwa.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163syycjsmu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163tbssyspe.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163khijfjew.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ajlnlarh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163dimksyof.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163pdtojeiy.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hutkxgqd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163mgoovhqy.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163eiqilzpb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163sbuxetiu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163esekqiav.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163axjdhyst.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163jyqhtvxx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163nozmogdr.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jnsvxayr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lxlsrkcq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163upgodpau.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163tojmedgr.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jjlnyhgf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163twpakfqv.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163yphwppem.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163xuhlqpho.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ktlokogs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163kkbrgelv.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163adbpgqgg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163tmmmrgpp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163jdftlckd.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163roamnxcv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163itqnkndz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163mkqkpvgg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163joodxgty.html

================================================================================
来源：http://www.sxryk.cn/163zfcyhepa.html

R. Bash 专题
来源：http://www.sxryk.cn/163atotelpk.html

================================================================================
来源：http://www.xuanzx.com/163axhtnxrc.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163xubzwhev.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163eezznfap.html

set -euo pipefail
来源：http://www.sxryk.cn/163cnofbahd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163gdpolbfv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163hrvjqpce.html

[R03] 只读变量
来源：http://www.sxryk.cn/163cpnpgfwm.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wngrvmob.html

[R04] 位置参数
来源：http://www.xuanzx.com/163wacghiey.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163hhaqtgcu.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dnqchmeh.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qvycienv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163zziomdrp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163wxvjeldx.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163tofysjau.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mxdhumie.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163olslcugn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163wymdfsqo.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jmnhrnuu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163qqqacbqz.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jycjqajb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ylujgxet.html

[R11] case 多分支
来源：http://www.xuanzx.com/163jmdpclnk.html

case "$1" in
来源：http://www.aibaodan.cn/163ghjrnzcv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163xdexczja.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hwbfutue.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163eydngarx.html

esac
来源：http://www.xuanzx.com/163lvmyqcex.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xubtacib.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163srziyjjq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wubbmrly.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163swxeceqg.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163bjxrtwjr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163lioecqzh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qrougdhb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163eokinkxj.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nywolsev.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ysgiaxpt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163dqnyawzu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vbqgcjal.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163voehkuvw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lgbwsiue.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163rygpksyt.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163edicnbyk.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ixtyacxw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163flwsclog.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163taatbghk.html

echo "${#s}"
来源：http://www.aibaodan.cn/163edahmdkn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163astjftol.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mriuychd.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163lbzxowic.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tqsxnahh.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163snygoibu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163nhoklkis.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gawokgbc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163bqmgqxnp.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xbubjbqk.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qntseeco.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ttxsagjh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mztjmuwl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163wehdrkcy.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lpchbhos.html

[R29] 定义函数
来源：http://www.sxryk.cn/163mziuptwc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163nddwbuth.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ylllaavp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163fposoipp.html

[R31] 局部变量
来源：http://www.sxryk.cn/163klaauuii.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163gvpkrqcb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rkitsram.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xrbsisrm.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bzwinbxe.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163oggfiqap.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163kseoxhlb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ywivzele.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163pfjzdfkw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163pmlzddkg.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163pbpihfku.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xwqtppjg.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163oqngfyqk.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ncjptwra.html

[R38] 管道串联
来源：http://www.sxryk.cn/163rphktmxv.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rerdrlig.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163wgaksajb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ifgipshx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163agbvvxoy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hbrzsbor.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163qkzqbidh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nsvmhgai.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163czqppvqt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ervmyzzy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ywccwpiw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jeomzpeh.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163crnjltul.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163filnhpmf.html

[R45] 批量删除
来源：http://www.sxryk.cn/163uebvkcts.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163hiehenrm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163tmwvoqid.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qcyilmdy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jmmguxwo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nwcfnkdj.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163bexbqdul.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163cornrvqp.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ctjcetny.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163oyqhedtf.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163alfuxwxf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163whlvyseq.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163qnngxuer.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163nitbntip.html

[R52] 统计行数
来源：http://www.xuanzx.com/163yfewpmyh.html

wc -l a.txt
来源：http://www.sxryk.cn/163xvrrtliq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163bpqfjmrz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163falzlctr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163shhmvpah.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ewxztjkx.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163sexxjqgs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ayzqslrn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ipbfsxty.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163bqurcuao.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163pjroiwil.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163kygqpwcp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163diyuytgt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163rtzzuwyd.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ctvaqpsv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kdtwvsoi.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xnjpczhr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163bauskdee.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hvlmyrmn.html


<!-- 参考信息 -->