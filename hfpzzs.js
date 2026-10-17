外链999!wailian999！

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163lkwfrabs.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163abrrxkfv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qqlehwin.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163upvwtakw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163uysmgore.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163qliszztt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ifvuiqys.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mhfnkmew.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163lmmqgenc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163acueaqob.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163tvqdsxrl.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hrzetogi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163sbrztged.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cwoyarfs.html

[Q35] 内连接
来源：http://www.sxryk.cn/163anrzdsys.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163djazguip.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163gidqvbjo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zcobfjhe.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zooillkn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bnrjsuui.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163qimrtwry.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163mxpindzc.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163gbnyduvv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163jxmubmem.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163trmsdaee.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jzgaqcmj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163vboriydj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zwxsqceq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gwspzyde.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bgrxurpt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163paubewdf.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163yggqnoxx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163dzhqxtvs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163sbibkwao.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163hmdflbpz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163doncqygv.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ucphpzjf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163izzshqrh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oewjccft.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xjkwykcu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163liqnrhae.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ldfohnfn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wnufytyc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163otzlqcoe.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163zmmeplvz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163dxomnzgf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163abjnjfgc.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163deksskoe.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xrcnspec.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163jlmvextq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163fyocnjah.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163egjbunvh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163jwxlzzzn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163azyjdfwu.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163rwionjsk.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kclxkasi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163agfhhnqo.html

[Q54] 清空表
来源：http://www.sxryk.cn/163njnvjxdq.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163niwlgixz.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vsxsozoh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163peqhbuzd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qojlucjy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163tqpybvgm.html

[Q57] 行号
来源：http://www.sxryk.cn/163mshnfnhx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163lndamobg.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fhzubyyx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163rttcypih.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163oxvrjjfx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163eharkhep.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163gdwnxigf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163shvwgrvg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163gzdgtizb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163tefuewmu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ebbwhvgj.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ruaxugws.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tvfsihmy.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163zsscqouy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163clvkdaoc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ssimmtea.html

COMMIT;
来源：http://www.sxryk.cn/163bjekpjvc.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hmukohnz.html

ROLLBACK;
来源：http://www.sxryk.cn/163fbrnogwd.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163kzhwfewv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163gnwqkcbv.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qakerptv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163vkmcjucz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163zjasaekq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163yfvqaxwb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163rbgmyqqf.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163wtjmnodt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163uphscvrr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163uzkwcotn.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163uxcmsamb.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rmomnvia.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163apvyjrne.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dmewhwpj.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ldanclzz.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163jaqvxoat.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lwjqqcmz.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163pydddoev.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163gmestepq.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163kyobdayb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163tyqscfpw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gntuqdwn.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ndjwpbob.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bluskwbv.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163lbtcmbya.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163rzvocgih.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163jwvbxohy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163aqyzvpwl.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163pnezoaqv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163dinwpkvx.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163wllnfbbn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163iogloxfk.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163cbpiixsd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163balyfvrw.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163lfivwsrs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163aqhsrejt.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ddusydic.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163uritgkns.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163zbxooxsj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163lfucomjp.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163sckjzvit.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163lwkykhjq.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163btilzkpi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ifaumwpa.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163nduscbwt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xtxkiexx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163myilypql.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163gxkldhdm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qunntqck.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163gyvuagvc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vyrokdby.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163fszkfjpc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163pnilawih.html

================================================================================
来源：http://www.xuanzx.com/163ridbwjsj.html

R. Bash 专题
来源：http://www.sxryk.cn/163bjehrvoj.html

================================================================================
来源：http://www.xuanzx.com/163zelwzdjs.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163wmhzucui.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163wopndalf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fnfparbc.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163cnsbilxl.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163edgfyzpn.html

[R03] 只读变量
来源：http://www.xuanzx.com/163wyfzssci.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163kxeechxp.html

[R04] 位置参数
来源：http://www.sxryk.cn/163chmyfvei.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163wzruzxxw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163hzwrzani.html

name="${1:-default}"
来源：http://www.sxryk.cn/163qvdcsxhc.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hyjtujpf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163oixxomfu.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163mawxwqsr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wjvagnjm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163snmdfiyh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163uvuzblmv.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163tfywohuf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163zuzggjqd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163trzinguu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163plwpzouo.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jwppwzts.html

case "$1" in
来源：http://www.xuanzx.com/163atqyjphf.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163lktheprs.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163bwkqplqm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163sgjklbbr.html

esac
来源：http://www.xuanzx.com/163eqajzvzr.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163jvduevyq.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163hmwqmxbq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tkczykgx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163tlutelfw.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xbgvcmff.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163zaongkas.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163pbtludyi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gesjgyos.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163nmvesuvj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163namamfuw.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163rmhmxjhg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ojiecuwi.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ztjzseas.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163rutvyiej.html

[R19] 数组长度
来源：http://www.sxryk.cn/163mzbtyxcv.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fxeqjxdo.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wchfqyus.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wvgbhops.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wwexqxrw.html

echo "${#s}"
来源：http://www.sxryk.cn/163gzmtuwrd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163aigoyfaw.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ybpvznqo.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163usfbqeot.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163gmpukoli.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163tuzpvrav.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163lqkuidqs.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163lyelyqgl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zcqeoxvj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xvtmsqke.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163itsiwwhb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ybxztiph.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163owjslgcg.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ybeaxvis.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163opgyplsk.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xkmqwqda.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163msxlaott.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163wahtrmga.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mfsagizr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163khsmybfc.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163okuejmpg.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163gmjkgnah.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163dnrmmjrk.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163odmsutwj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163quvcywoa.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zwmzceax.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tyqudpzv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tkakarai.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qllhqjri.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163eisdslbw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163yiqbrhsq.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qamdossp.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163dugxmwev.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163tkqtpliw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dzebkhdo.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zfdivozl.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163kiyaziiz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163mqookxje.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163aligiljd.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fcygjbum.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163udystloh.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163owascezc.html

wc -l < a.txt
来源：http://www.sxryk.cn/163rlvizkio.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163aupovjfm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pvjelkid.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163qclhvgpi.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163sjvrfxor.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163yvwgxxns.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163yzlhonbd.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163pjmwidbq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163gdgdxojx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ufjxezjj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fruztdpf.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yqurvjzg.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163lqghpsjl.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163senhfsun.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vlmgwoeq.html

[R50] awk 求和
来源：http://www.sxryk.cn/163kbeumaut.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163zojxenek.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163jkehbzpm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qeczqlpi.html

[R52] 统计行数
来源：http://www.xuanzx.com/163cchllata.html

wc -l a.txt
来源：http://www.xuanzx.com/163awtwbiwk.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163wvcixqqr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zqqgpeyx.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163gfscttqo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163glxyfkub.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qmyoygme.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163xxwhyugy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163bcrjibxs.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163lxrcufdw.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163iuzltabw.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163htiqpers.html

[R58] 下载文件
来源：http://www.xuanzx.com/163kqjvnwix.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163fzqdyqwa.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163lpdwptqt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xiaeuqao.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163jmezqjqu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zawjkrzo.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163cemiwdgg.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163noaswmvq.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163dqhzqjwu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163bnsqgnmv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ermxzuas.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163pmwzjpxo.html

[R64] 结束进程
来源：http://www.sxryk.cn/163yqbbzsnl.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ugkayvtv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ezamduwv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163yqinrsoz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163txciyeta.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163auavprev.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xoftbram.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163usynxmuo.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wmjqbwmg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163genoicrl.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163kzydtmxu.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163kwfghbfa.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163zttlnbei.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ouycmaqc.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163vzqkpnbw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163sqrfgdex.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hqdhnyjs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rdvefsae.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163eilfrtpk.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163nifcaazu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163etfifagi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vnmchgjm.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163pifnewtc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163dlnoimsh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wbqffuvl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xqcqgubl.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163bevanxfy.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163fxpkgmqy.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dvffhayn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jyioexxe.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xxqecdjt.html


<!-- 参考信息 -->