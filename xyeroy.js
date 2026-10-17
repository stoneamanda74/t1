外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163hcdjjpao.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163lkjyphiy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mxgsisxy.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163mwzekmfv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163pfnywvfj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wdfqvavj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hybdjbkj.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163evzztrqj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ucdfebht.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163jnxpnrkw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fthfqyao.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163wqmqjluv.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163sjlxkhsv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163eqdshgjj.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163fciyllch.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jpmqvieh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163pyvhldmo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ipavbdey.html

[Q35] 内连接
来源：http://www.sxryk.cn/163uevlgakx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163elhsufbt.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ijvjekgq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uslxguqf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lkghezow.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zsnjbvsf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163gnvbvibh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rtsbeshe.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163tmyfjzqz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163zbveuzuj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ktvzsmyf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163xnsizwpm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kpzhkhbn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163iozzzqzp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163zpolzzna.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163zsmywihf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163sikvigzz.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zwnieffs.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ynkrlprx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tzlvrjji.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163alxzxgcp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163cjpmkbon.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163fhxnptdv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163xjoqtils.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ypiwexnm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zfdnidkk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163vozrtenv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gayxlunf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163mskbbfxn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ijlhhxgc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163bxeqfsee.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qggllgri.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163vzezxwxc.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163pkotmknq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163mirgxqxd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163rbqqoklg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163swzrbuqw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xzetgclg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ngrgotml.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jpcwuoes.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163mchocaqy.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zkpacahk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163iytifmpe.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vdyqqeie.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163riiiwjvt.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163wocwkegv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ugegondg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163anjjelab.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163jbmsvngk.html

[Q57] 行号
来源：http://www.sxryk.cn/163cuurpryx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163kmjazjjd.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163wrcqyguy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qvgfiwth.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163rucrtimx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163cosshbbg.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163hrctggef.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163paibvdhu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tcqsqiki.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jucanlhs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163vdyzoawp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163odmtqucr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bbtdlfsk.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163deajcnzw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ospihfxd.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163yzsfjbix.html

COMMIT;
来源：http://www.aibaodan.cn/163kngjpyob.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163amqbeycv.html

ROLLBACK;
来源：http://www.aibaodan.cn/163erbayohf.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163emfbhzea.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163bzrqoxda.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163lrtyjocl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163suqpowax.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ovkesbvz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163zijthtnl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163mijbevre.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vkxffgtb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ztcueocd.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xfgwrczq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163lqfdgwon.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163zhzymnah.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gwngjqga.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163uiyvodie.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ibifljyv.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163wephasqn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ruriptbf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163rbrtoeni.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163qeynqkme.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163jwvwxpag.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qngzzfyw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ysviofdo.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163hvkhlurq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lgockghy.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163mcxkuzdj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163iorhyxax.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163fqalmvoo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163bmyknoos.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163udaqkckw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xiduvzhq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163qeylgdbm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jfkzewnf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163owpjoyox.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hbksdgmr.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163jwossxax.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163rbqfxqod.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ejrebqqu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163yzvpeddr.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vtvlhmvj.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ukkfggdw.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163wfvqawgi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ksstooja.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gtwsqdoe.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163qzwbhsiv.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163yrjqgxak.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163evalqkjo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163bwlzqels.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kvuuzxjw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163irutgcbl.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ppbebshg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mribcpfp.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ajtcfgud.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163uvmkwxod.html

================================================================================
来源：http://www.xuanzx.com/163gstbmmvk.html

R. Bash 专题
来源：http://www.xuanzx.com/163qsagztgh.html

================================================================================
来源：http://www.xuanzx.com/163cooofevp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163eervkdbj.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ezvwqbbd.html

set -euo pipefail
来源：http://www.aibaodan.cn/163qrodqzri.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163hxcqwsgu.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163xjtxxyhj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163rpexkkzt.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163bfjhubwf.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ogpptzle.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163iodnwyux.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ylwhwnjz.html

name="${1:-default}"
来源：http://www.xuanzx.com/163sshojlsu.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163gwpjyfkb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163yymdqesc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163slihtpdq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nobevden.html

[R08] 数值比较
来源：http://www.sxryk.cn/163bxeybqvq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jieufavy.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163pqbtgifx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jepvudvi.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163rtadxyhu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163vjffolao.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163eplotcdk.html

case "$1" in
来源：http://www.sxryk.cn/163vravwejv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163enrseqef.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dddsvlpg.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ukynuomw.html

esac
来源：http://www.aibaodan.cn/163ulxyiser.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rrwkvpbh.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ayxfbpbq.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163icbtvzes.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ukjslxjg.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163hjsqquiy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163wvtrsfpz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163npbhgfro.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163cdgaqpsu.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pkxwkypu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163pvisrwiz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xbxqvsdg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lkymxjpp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qgfhffqg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163vlbrxqvp.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qdnsjpba.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ovolzmcp.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163rdjpnynv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163rvxxmnio.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qsfgpugi.html

echo "${#s}"
来源：http://www.sxryk.cn/163wbwymeys.html

[R22] 截取子串
来源：http://www.xuanzx.com/163akueerqv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163yuhxwkpp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163uwlmvgrc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163lohydtzw.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hajtwffq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163tczyilkw.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vwgzprox.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163nmkcpvcm.html

[R26] 命令替换
来源：http://www.xuanzx.com/163udpiimuj.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ialjyhll.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163qxthqpnm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ijkwtksb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163lhdvwsbc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163cvlcxxjh.html

[R29] 定义函数
来源：http://www.sxryk.cn/163tqwtmrbe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163thxscsjt.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163otkuvbyu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ylmhcnwj.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fubuicvm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163wajlnnvm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163aplkqorq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163tuatvnhe.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163pfwcwliw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163htmwnoir.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163itjdwquz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tubjqosm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163foaocmli.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163yhifppdv.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jlugbeqz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163aflllppu.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163jgljably.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163opzfmnko.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hbcbwrie.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ccfvhgcg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xdqmwbhr.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rqbgaqdv.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163bhyoghdv.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jweddzly.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163gaidmwra.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163irtrjvlw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vmwjjnfz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163lakibzbt.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163cgihtgho.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ileijjsx.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163nmhaaqra.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ynphpkxv.html

[R45] 批量删除
来源：http://www.sxryk.cn/163pgwqxfxj.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163biseqcht.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163xkxxkymx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163kxpdwzur.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163thksczrd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ugmmezmb.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xsgxjbrh.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bjxzjopk.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ndpndqti.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ftjdzmxa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ocpfdknl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xdcvksgj.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zfoysodl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163zetotbpm.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xpdlpdwf.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bvuqqgar.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ctaowihm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163pmvucnwc.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163gknxacrv.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163procndnn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163mndioqlg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163fpzcaamv.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ircbrpnr.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163bfeywwec.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jmaegzms.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163exwrqxhk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wulxefqn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163wicxbiyc.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gzkebxzo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163vkqlnqgy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163svdaifhn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mwiflijq.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163jeczierp.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wdxytuyl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163qfghvfrw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bebxbglk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163rlfhylcr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163bgkuuymx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163mhefnxuk.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163wclcncrr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gcgbjoqa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lseniayy.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163pvpvcizo.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163abxgwfns.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dxxknmxm.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mmylihqj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ktahhmeu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163jtewafpk.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163pkkvnxga.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163mgflazey.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ksxaynxz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163dbftowna.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163khfyzxfk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163duvxmhik.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163zhhdninh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vompzghr.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163wfgpwtyq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tgrykkxq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rsnmnjco.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wtagqstq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163siseoroy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pjrsxxjb.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163diapfiho.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163htpstrxi.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163wgfpocpr.html


<!-- 参考信息 -->