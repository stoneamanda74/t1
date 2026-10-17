外链999!wailian999！

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rpahuetm.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163redffrpt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iqwdbrxl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mrlvsynv.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vhlywjir.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ftcpptrm.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163phhtafyb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cuwhuxny.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163vhjplvcf.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ousplaqy.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fpdtcaxp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nxyidusq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163vzpercfg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163sgdcqwgf.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ffnxzsxg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163furmsqoj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163fckiwtrm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ifahwsqq.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163qffwiqha.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163bbmufedl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163zfcveqzo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163efyptrln.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qigrpcim.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ruxfgdbs.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163trwwgwlq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163huicvweo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ugarpzbu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163bkcjwhrg.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ugnkwtlx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163wizetdwa.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163figmwcoa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163vzttowtf.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163xisazvtp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ncydslxi.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163mgalcpam.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cnolyemv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163yljxnbru.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kumvddwf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zbbhiema.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163mwapcqmp.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ntkzbrxd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163tdetqhoe.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163uxaqpkyi.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163kldraxdt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163bqwvvktf.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163lybdempc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kkpjzzem.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163uxvbtptv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163vjlstvzb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163tfhxhebp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163gssjcueg.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163khksgswa.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163iqchaqbt.html

[Q54] 清空表
来源：http://www.xuanzx.com/163vuivikgk.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163lrjdizdw.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163rgztonrq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ezsnkdvj.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163vitljoes.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ucwtwpnl.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zmvvezgs.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163vqadpvle.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ejnykysp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163zjxkxdim.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163sedbwuut.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163jogsrigt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tepwvcci.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163xvikqbii.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163qqyslidq.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163kxqiictc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qodsjqnq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163eebyvmkd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kzkwnzzo.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163pampusbt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163pwzdwccw.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163fpplyhki.html

COMMIT;
来源：http://www.aibaodan.cn/163linecnjs.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163nyhbaodv.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kkdvkylo.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163httfnzjc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wpprrvgk.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163jkiorywi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163nqruflez.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ustmaevz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ejyndpbo.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rckwoogd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163whfbztxm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163gkemaypm.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163esijjsey.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163czezfxha.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163kggchqrv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163rchtvbkb.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163mhafchgx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163arfmgoyf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hezynnbc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163brlpahpo.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163gahbpzhy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163csdqxmyc.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163cxnvzdhm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wezztvxh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gjwkfbie.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163kifxkoet.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163waaywmfa.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163nbtqerzu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163hqjpiyyt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163gyzcubdl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163pfqbsfsm.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bfpppayx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jblgvuop.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163nyobzllj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163pzwiatpy.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163vgqlszca.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163qklzxdrq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163tkblpfgo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163aksffarf.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163adgrjmeu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163vusthrpi.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163eaqyicxl.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163awojepcq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163skotbajp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fkhmlkdj.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163auulyndd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ozzephcp.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163olhdirch.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wleswhqs.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zaxmkzpx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163kkkrfatl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ebabxahh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jjzzftju.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wvkqmtft.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163yooihgxh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163oczswhul.html

================================================================================
来源：http://www.sxryk.cn/163eeqzfwbu.html

R. Bash 专题
来源：http://www.xuanzx.com/163xiuszcyj.html

================================================================================
来源：http://www.xuanzx.com/163ehvsixez.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163yvxghqca.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163eqrqpzyw.html

set -euo pipefail
来源：http://www.sxryk.cn/163yklumjyp.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ptqbrmyk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ssmydtdy.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163khlzlbta.html

readonly PI=3.14
来源：http://www.sxryk.cn/163jryammdj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163chbijhgl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163cvnjbsbp.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163tdjzpjby.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mvzgyyma.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ukksqvxi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vyhahdmc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xttbdflz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ggcbfwod.html

[R08] 数值比较
来源：http://www.sxryk.cn/163pdiidhll.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163etnhihrf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163pmojejjh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163sfgpmzlu.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163vuuetevv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xouniyxd.html

[R11] case 多分支
来源：http://www.sxryk.cn/163hzixqloo.html

case "$1" in
来源：http://www.sxryk.cn/163fhspsqmy.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163hhchefyu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163zzeuxgoa.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163jihfkqsb.html

esac
来源：http://www.aibaodan.cn/163wqshxdtj.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xdrbwupb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163yuzopxfj.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163contwpid.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163lsgxkwqa.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cvuemtqt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163pjqbzend.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163tyowfqrv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163oqtcnfbd.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xoqfliyc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163uamgbwsu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163qascgyfr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163qwyfhaxa.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163oznevyym.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163tuyvedeo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ntqbtvcv.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163lydhtggr.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163xzvcywod.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163trrmsptv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ailchbyg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163oxpvqbmq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163peaqsqbf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163llsxjlwh.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163baruwril.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dhvgxnuh.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163mvomqhsr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ccyhpmzy.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163isoxjpda.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163nufldesw.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lygeqmsu.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163vgutznid.html

[R27] 算术展开
来源：http://www.sxryk.cn/163eqioxfff.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163buarjset.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163nrkjtfqn.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163pxkyytdd.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bifzzcpn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ehtdklpq.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163nxxrzdtd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mekjvowr.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163hkszdwbm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163tvdkqxuz.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dnmjnfmb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163usldjuqe.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ietksgqh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163hnentrts.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hevaigcq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rbrkvnda.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qtxkbckn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163elomqqck.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bvqtulxj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163eckbkftv.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163hykjajhf.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gphrlvfw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163rmbtoczq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163jajamfam.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ajxmlzqo.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163mrxuhkrd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hkpeohlr.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163crnhbcgh.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163mvyasqvz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163pwzkihft.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163tmsgnjfj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163yrrafxfa.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163cbisyilc.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163oambgywn.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163nfzfteje.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163bdohvdfc.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163facwniez.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dbdrzruy.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ykevconx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163nwzdrgca.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qnjypxjt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163sugohhli.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163eteylblc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163dokxbomw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163mfprfqun.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hwrknoob.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ixiwgrql.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163teijoqja.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163cobqcwvb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163fibpylsw.html

[R52] 统计行数
来源：http://www.sxryk.cn/163scqwmvrw.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ysxbfmbv.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jgczvnmu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163cdmoaagd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163mnrpsrzj.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163lnjhlmrt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163yrdrowyi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mkmrsaql.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gzvsmzwb.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163cgyxalhq.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163rsihlrvm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fyckjqfk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163cqetnqtm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163bwcreuja.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mutlvnqg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163oegarlpp.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163uxrcmuhg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163hwctugkf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163lllwydoi.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163exvllaqr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jblirbil.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cduiblob.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163gwnuknwy.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hinnmaoq.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ozfvttxg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163zvxsmnrr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zhqvivcv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163czgehbae.html

[R66] 定时任务
来源：http://www.xuanzx.com/163pmvruqss.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ddeutuke.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163eapsnrik.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163kauodgod.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jpeeqmoy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jmjlstza.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zyigykim.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ujicwgys.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163zwhqutxj.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kekuvals.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mhormroj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163eayfzwqw.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163cupvcidi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rxogwdyk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fzwcdyla.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163pwswixwq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163kbsdxlyb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mztsublo.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163fupmypas.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wtylwmyx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163iqkklvzg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163sdksrfya.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163pyspzhke.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lpmbiwmz.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163wynojhvw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ijkgqcrn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qkpcmffw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ypsvqrzf.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163thnltffd.html

time ./run.sh
来源：http://www.aibaodan.cn/163hpmagepe.html

================================================================================
来源：http://www.sxryk.cn/163guqicftw.html


<!-- 参考信息 -->