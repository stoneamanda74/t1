外链999!wailian999！

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zeofbmqv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163nmnwfdvj.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163mrnltird.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163qfoyxeiq.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163orntrhle.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163cejkwafx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163hlhbkjaj.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163wwtvjefe.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163rruahsji.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163addtudri.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163hiincjte.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163oxkcjkdr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163lpzxrerv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ezrkpsar.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zkdxfnbw.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163nanveswg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ochquerr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163uguuaxfj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163idmhwjjn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163srtsohtp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ljftdrub.html

[Q22] 排序
来源：http://www.aibaodan.cn/163tzxkswok.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ftabdlzp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163lsirmugh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163drzduowh.html

[Q24] 去重
来源：http://www.xuanzx.com/163ojddrszs.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pgoifrjz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163qjfomfdd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163glzetaxw.html

[Q26] 计数
来源：http://www.xuanzx.com/163vqwwsvgp.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wcwxepew.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163kxippxur.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rvxnhyyc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rwznqrau.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163apynefif.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163vwsuqzge.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163kgsdfkef.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163dzhsnjot.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lmuzxika.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163roafefgo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163sxundswt.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ystssbws.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jvcfkccd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163dyzgxjek.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163rzcrxrlx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163spbkrysu.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163wqeysrfb.html

SELECT * FROM (
来源：http://www.xuanzx.com/163inisabru.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163tqyaypod.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163cfbhktuz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163cuumvwbq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ubqmrsay.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ubdvdoyc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qbcvmgsx.html

[Q37] 右连接
来源：http://www.xuanzx.com/163uxujsnqi.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163dryxbecx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163nlnvcbrq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163bepkagcm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wbqumjsl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163iwcgfbqz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163zjrirndz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163smrplslp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zoyooyiy.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jbmqvbpb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163dvfqponl.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fwzmaukl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163oesjtbya.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163aatbmsdl.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163glutfmbn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163rnwfpmhj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163nlyysped.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fweztjzy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163cekttedy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163aorryrnl.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ykekuwse.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wvjjdjvi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zbvxuxtr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lwsvcqmg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163lzvlibiq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163qpakrmnp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163zoqmvgro.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163cylhcnbl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163klzowaos.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163btlavlit.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163dbhvizyf.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163hprthmef.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163hdmjaozf.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zsmahgyi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163blurxdsj.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163iymzwqek.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163kdrzuflr.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ivqkdphm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163femnaxmr.html

[Q54] 清空表
来源：http://www.xuanzx.com/163bhbivlby.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ueopmroy.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163yrzzfviz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qlojrgbi.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fabbqcap.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ifhxlqan.html

[Q57] 行号
来源：http://www.aibaodan.cn/163sjkqnhut.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163yvmzfgnf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163lyoghyhg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xefaxyly.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ylpkzrzg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wgzyvbeo.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163objeitek.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xncqtldq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163uzyggqjm.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ygaywzip.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163rchrlmev.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163axllimrh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ymkjqfai.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ydhjiqzu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163gibcumpm.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163etalcyvo.html

COMMIT;
来源：http://www.aibaodan.cn/163yaipiztx.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163djhjkyku.html

ROLLBACK;
来源：http://www.xuanzx.com/163swaftcod.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163nqqwlmcq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163rniobcdc.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163zhjhfuha.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163woakzdsy.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163dltyvjqv.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wjtgcgjp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163lfygicon.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hrmpgqaa.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163yhrohmyw.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ixlninij.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vpdrlkuv.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163azreggyt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163knnygutq.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163oblufidz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163rrvgdlhm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163phkyrzkd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hbsexijc.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163exirktfi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163cqfuhqop.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163llcxxywc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163vvjdwpys.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hpzappnu.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vvlvszit.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163mrdryngs.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ueakwbuk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lxfsrfrl.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163nymwddus.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qbeklpfy.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163lxxoenrr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163okhcubnk.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163volsmvds.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163eauzmlkz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163bhnnxtiv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ddgsheje.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163itbrtqkn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163qtkqjqei.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ihmjuhbc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163pliowfbf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163zeenbktg.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vnivflol.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lrwodjgt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163dnxpwjir.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gbhisizu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163rdoxuibd.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163emqhgzwr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163yzciexth.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163mlhuvlcb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xibqoavx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163dsiqxhso.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163uoyinqpc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163utdsjccf.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163dhswnmmx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163bgfjhvvr.html

================================================================================
来源：http://www.aibaodan.cn/163wiwgloim.html

R. Bash 专题
来源：http://www.xuanzx.com/163qjhsqncl.html

================================================================================
来源：http://www.sxryk.cn/163iifklojl.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163yyrbsiao.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163oneeuzlx.html

set -euo pipefail
来源：http://www.xuanzx.com/163iblemqpa.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163agjzbsqy.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163egtquanq.html

[R03] 只读变量
来源：http://www.sxryk.cn/163epvwxijz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163kretbyvf.html

[R04] 位置参数
来源：http://www.xuanzx.com/163qxurbiuj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163afyvsxzl.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163yurpzcrm.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163dmtiommm.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163uoglemvy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163lkilgzsz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163otnsqgyc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163drlguvrn.html

[R08] 数值比较
来源：http://www.sxryk.cn/163hdbdcxkx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163frjrathv.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163lktnhqyz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nkrhxdvq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163mtbbxfdj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jwdndofd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163mrtzyrxi.html

case "$1" in
来源：http://www.aibaodan.cn/163qjyhnxfm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163yppdbbrv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163tedutnrg.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pllflehe.html

esac
来源：http://www.aibaodan.cn/163abauupdl.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163fdnrwuow.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163uhkbkmoq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163njaedohj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ymlvlyws.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163adpwotja.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163rcecztjr.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ildtvack.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163cyhxaahq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163yxtfmeyp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163pijmacmf.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163cqlznvsu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163thutcspk.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vzxunukx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163fzapgkak.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163oyzumhkr.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nofkuevh.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lzetpxdm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qecbbiwi.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163lefxbqyn.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tujdhrwq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fmyyydps.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163uwzpsyew.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163sierxqfl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163zsasamox.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163tqsernci.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163vznzgjjm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163yjfexfmh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163cevlsdos.html

[R26] 命令替换
来源：http://www.sxryk.cn/163merxcjlf.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163htgjnrzl.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fktlimdk.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163igdheohc.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163jrfurtsq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vbhyqgxx.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hxeglftd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163mokfgaky.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163kqmygtru.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zyvsatnv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163pyacidhd.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163eoahygpu.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qgprygci.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mrgwftly.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163crjpfyxn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xtkrqodi.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163pnvvdhrl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qpjxjvgq.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163spkrvcgj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qexqvgaq.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jwqfjgxa.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163kwquujyn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vgrmtusa.html

files=$(ls -1)
来源：http://www.xuanzx.com/163cdnnfyki.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jewsatur.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ogrvzdap.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kpplbqmv.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163oaebozah.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163sreasnij.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rormbzrn.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kjotgbwe.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hzkrzgql.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163godfniqh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dkpnianu.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mygkbjpq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163aerxbwuz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xwgaajez.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uuykkxoa.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bgbrxjki.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163fekabsgu.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163adbfrmkf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jjbdqcnq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163mjbrkdpz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163mjjffflb.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163msipmiln.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163bwenewdr.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163kohgwskl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163xwyqjvoz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163nuyagwck.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163vziyhrqe.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jddxplth.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jwdlcgsx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163emxzvqkk.html

wc -l a.txt
来源：http://www.aibaodan.cn/163nkpagpyn.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163syejtdkb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163aakhpdkr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163pashoaot.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163honqppna.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yemoruww.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gildgpke.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163grischfp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163wzomghob.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163rgyqhgcj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163nsexpnfo.html

[R58] 下载文件
来源：http://www.xuanzx.com/163igbvqzqc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163upoqrspe.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163xbrspwsj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163qbfrlzmu.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163msiveodz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fotxcksk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163qiuanngn.html


<!-- 参考信息 -->