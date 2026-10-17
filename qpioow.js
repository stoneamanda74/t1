外链999!wailian999！

[Q33] 多列分组
来源：http://www.xuanzx.com/163wqtmtgov.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163hospofmt.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163wvvhsrsg.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163xlhpbnmv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163sisumnis.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163pcopjduf.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ffzrhcub.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ufrnbkow.html

[Q36] 左连接
来源：http://www.xuanzx.com/163jbncbjht.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ndokoyge.html

[Q37] 右连接
来源：http://www.xuanzx.com/163fulkgihd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163rctmuhrs.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mdcegdoa.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163awvbqshy.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163yomvfkbo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163hwykncwg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163rfmzyexd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163tqsquxfu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163bzhbfeqs.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163qtzxammt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163qawybxbp.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163qdsaaxpk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163geppxddj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ozmwzwmd.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ukgqbhmz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pplqrzfd.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ijtbbzcq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163chjlsosk.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163duqvjiiz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163yqpwffku.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ncubzzrt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gidlajzs.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vafmopod.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163lcnzypcj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ipmsoxoy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163asraohrj.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163tkapltlx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163zksgjcdd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163cyzdktcp.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ridrcnic.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163zwdvstdi.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ztofljgt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163gaigocdt.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163dqpixfit.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163pqxyuinm.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163lkxqompe.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163geqnmfwd.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163uslrugfk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163toxnqxkw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163gxpcqdzt.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163gobagcxl.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163tidxxfyk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163crbvzvgq.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163phqsdrav.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163cyqdzhlp.html

[Q57] 行号
来源：http://www.sxryk.cn/163xqijmozf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nxpclzxd.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163wdkjqsoa.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163mxiedpti.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163tagbcwma.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kclkuqdv.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163mvtwsbxl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163lqyrrzhh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163gmhscoik.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163eqgaoqsy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163iaflawmc.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163zlihsutw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fqzfhtpi.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qhtuuigj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163lawzmapj.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163uazmcvmh.html

COMMIT;
来源：http://www.xuanzx.com/163vvyehhgj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163nyujhxku.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vybxhthe.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163uyypsrgw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163mgyxppla.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ccrripvi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163whuzpnts.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kofrgjqq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jewcgacd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163aqafjtwl.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163arbboycm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vukzckze.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163kixhgshy.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ajqlnhwl.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jzhkdavp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163cyodijzs.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rswpbssb.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wrbrshqr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163nlkbtwbt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hvrirury.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ajmdmoaq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163relkxafz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163owzbzowi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163vnhmwven.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163fofvajyw.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163brmqirxy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163kyohskmf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163gcafkwdc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163wzvptxch.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ctnivhdy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163zoytldnc.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qoredxqh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163hzkiwqwu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163cxkkyjqj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163lzjfwjuv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163lyqwcocg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gxpokzrn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kgslvwhx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163knlzauwo.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163pefmzfeu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163xrnrhxas.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163rbakphgc.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hwdufpia.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zczfntmb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163iirdnfdp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163jjhxmnlu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163habzyzeh.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nkepvdok.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163skmxnxkd.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xauahegk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yhdstsjr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pjmdpbub.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xtmeeiny.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163qvuzkcxv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163syoaqvgt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xekyfqwa.html

================================================================================
来源：http://www.xuanzx.com/163exkjpsqv.html

R. Bash 专题
来源：http://www.aibaodan.cn/163yytxfcqc.html

================================================================================
来源：http://www.xuanzx.com/163wnmkvbbx.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wzmnvwug.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163zjvyqsxy.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zvpcqjwu.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163wsnkikai.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163luhmvedv.html

[R03] 只读变量
来源：http://www.xuanzx.com/163yaebvsbm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163muklfits.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bpaoaphq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163qvjahqhi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jyrpgqqg.html

name="${1:-default}"
来源：http://www.sxryk.cn/163niqilqia.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rxoecmfb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163bxfdtibq.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163pxjekycq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xogtllyv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xgmvemfq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163eoxhwbrm.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163sacrxwlg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mdyofvvq.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fzajevka.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163rgsuwdwx.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163qzxmmesh.html

case "$1" in
来源：http://www.sxryk.cn/163kkpnvjgo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pzdcyird.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163cedyxhio.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ccsvdzft.html

esac
来源：http://www.sxryk.cn/163nseyjttt.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xtjoxjfw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163oulfiotd.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163uagpvnra.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gadbtlrj.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163lavupkjp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163qjgjoqzx.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uemgwvpo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163axqcandd.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ngecgite.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ryckuhch.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163zqbbzlvd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163gdycrbyw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ytwzjavq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163kizepbxd.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ddzipqnh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163jcthfsbn.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mgpxlqir.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mojrpcul.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163bwhtinqw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163kmtbdipi.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zdgeuymy.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163cpcylfvp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163lylunwtj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vdprnlyy.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163kkgyqakv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163judglefm.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ykomoymu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163tjqesxly.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lfqlkxbg.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rynttuja.html

[R27] 算术展开
来源：http://www.xuanzx.com/163qjtpbcpa.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163tjqzvwap.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163dvegfpmi.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163otphzfcv.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ligfxusj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163pfdqvtcm.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163yckayahk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gcubjyph.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163phnmjoci.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rqlomgfv.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ukzeubch.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163uxmpkytj.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zkpzegdy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ysuiystj.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nashshwq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fwygnfve.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hebubkbn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163gmzyumwk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163xgrggipm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163vtybuoqb.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163imomjogb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163hhssrpya.html

[R38] 管道串联
来源：http://www.sxryk.cn/163gqviprgg.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163gsmvsngx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163uxjmxiik.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jlklslea.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163gbeiwssu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163yefyqbhp.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tyoqlqym.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xpngdrrr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163pyictpom.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ioucsxlb.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vikrkmqk.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vubdjgzb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163uapqpbov.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163tcrsatan.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163jfwtvokb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163cyszybrp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163bhzrsvyx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kzyjtuli.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163wruvzpxl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163abtoltnc.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163txcwnhds.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163exxsmuib.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163waccivhw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dyzarrpl.html

[R50] awk 求和
来源：http://www.sxryk.cn/163krisyghd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163qixiimgq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163hutpvgib.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163gbyyqrro.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163lbktmknj.html

wc -l a.txt
来源：http://www.sxryk.cn/163hvmaywoa.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163oxrvoegk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163emkfjjwo.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163osajhnut.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163gelisucz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tlhxvyrr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xxupbytr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xpnvdyhp.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163livqrywc.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163lhgwqyjx.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163yedxomqz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163eyjkwcgb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163vvbjjuuu.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163xbattivp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163qlpdxhbr.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163kwrpzrmg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163btjzudiv.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ltueidxi.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163vsaswlsj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ndntygod.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163xlcfnssh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vjzmvhbl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mxwdpvow.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163fxcjqbnh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gjjgxuom.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mqqmlfhz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163kltpsspz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163evobfdab.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163yakvxpdo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163osuipinu.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vclpalvq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qkbejcsz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xoddcadq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xbqpjhke.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163igtzjuss.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mtpmrcyn.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163abhqkrsz.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rtcnwhtu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163cgqzjddp.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bfxoohzt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163wvqbmvyg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ubqllfrd.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163rnmgnuvg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lzabbtqp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163yyeaafts.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nbtolyzi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xybbkrqe.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163dbjgjmii.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nmmsrjqu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163acumivyf.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163etfqvqdt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dbfleoim.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rzzoitiy.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jauqjcms.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qbxphldl.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163dyqqlyjw.html

time ./run.sh
来源：http://www.xuanzx.com/163fyfhkeni.html

================================================================================
来源：http://www.aibaodan.cn/163ujxqwayx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163gvsgvpqc.html

================================================================================
来源：http://www.sxryk.cn/163kwrzdmgb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163szeylsvo.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163nugqbgtk.html


<!-- 参考信息 -->