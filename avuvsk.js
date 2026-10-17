外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163bbgneato.html

[Q26] 计数
来源：http://www.sxryk.cn/163iegefump.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ooimaqur.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163hfpsvavo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163tbwzzkpr.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nrgsavjs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163mdhvloij.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163eyoktjhg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163kesumzye.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163edsbecin.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eobdovvc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163xkopcgxs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163qayvyvmd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163jlrgjaml.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yoovydln.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163atfsqgzu.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ocurefdc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163gcrmowes.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jihcbcjz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ikmhiama.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163iqlnauzt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ifzctaid.html

[Q35] 内连接
来源：http://www.sxryk.cn/163vaqqjzgt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163aijgthsa.html

[Q36] 左连接
来源：http://www.xuanzx.com/163syansiiz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rzxeypxk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163uwuwsmpf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163tjnhgmyo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163yneupjxv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ggidyfic.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ahwfvvjs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ajaopeym.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163jsycfaym.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163dyzvbuxq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zgiwwesh.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wdgjoiox.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163aleukyul.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163kkuktsgf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163mxldzfss.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163jvpwiibg.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163oameobnf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163cisvabni.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163buhhgmpb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xevettcj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163epanvokw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163mbolgkml.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163omxcyfzl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wlycrfpn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163tkgerwye.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163crpfokgv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jgvyhgaq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163vgvypefg.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163aapxysgc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163rzmtvvvm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163exufiaby.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163xbzwcqcc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163rqlotfpv.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163yqjjlxpa.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163jmhppofk.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163nrilzrir.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vizmqqwd.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163cdnmrmso.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163nluwgeft.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163rppuebng.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163xpifznqz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ekdsjbzc.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163rdibgetv.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163pijfgvvo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163suxzpekh.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163tedeztsl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163yulxwpfh.html

[Q57] 行号
来源：http://www.sxryk.cn/163qfbpnocg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ixwfkxxc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163gcbngjpn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163snzkujel.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163mukzcqkq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163evqkynwg.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lrokroqg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163iykaxihf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163nuzkaacw.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ottgvrlt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163gheghwvl.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163xdvulmzd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nievbjwn.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vlytcuab.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163txlqqomh.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163cujnnegx.html

COMMIT;
来源：http://www.xuanzx.com/163tqdhsrdp.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163trkklgfe.html

ROLLBACK;
来源：http://www.xuanzx.com/163cgekhjvw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163opcsuhkh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163jrvlwjni.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qacsiskb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163savidlef.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ddsilrfl.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xesnhqhj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163iiyqmird.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163dinnznrl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163pbqupykf.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163sgzowica.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163eukpgdvc.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163wogrrimf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163pjrejoht.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163zshvjwjj.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163xytzxhgh.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163rcpjikpw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lajbvdqe.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ecsfqnry.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ayadrwpq.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163hwuoferl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163yxxcrcni.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163djibiilt.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163otkdunbz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163fwnbwlsm.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163kifwoduc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163kaayxkjh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163lbvfzolm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vpnetbnl.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163wxfstwtq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ggelhzrw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xfxkggls.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lkalahkv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163pidqovwi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163qqdwivry.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163vuvpgink.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hdxfdyct.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163gtvupgyf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163nmlrdzum.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163qhtglsha.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163skxigmrs.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163yvjmqywf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163vdrltpkx.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bmbxmmvl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ojllyajc.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163vqxqwylp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163qvmvltom.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xtcsvqqk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xeqtxvpd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ezhjdaox.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ukjncytf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163cfpcfdsu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ucwjsuey.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163suunkmfq.html

================================================================================
来源：http://www.aibaodan.cn/163qtfuflml.html

R. Bash 专题
来源：http://www.sxryk.cn/163cpltllar.html

================================================================================
来源：http://www.sxryk.cn/163ppjsfejg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bfecmbnk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163niviulee.html

set -euo pipefail
来源：http://www.xuanzx.com/163dntcwjvg.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rgugghiv.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ilslrxev.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vtoiwxag.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wposoigq.html

[R04] 位置参数
来源：http://www.sxryk.cn/163nbllptyk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163bmwigyfs.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163nscnanxr.html

name="${1:-default}"
来源：http://www.xuanzx.com/163vvpibxge.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tzfjbndq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vlrwuils.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163lmozaiwr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vyitzrcs.html

[R08] 数值比较
来源：http://www.sxryk.cn/163gmgmwpth.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zxrrlocn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163inadbgwq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163lyvflqbt.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163omqkzywc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fbtrjlna.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163iwpmhnym.html

case "$1" in
来源：http://www.sxryk.cn/163tzkwatgx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fhqdoofs.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163grifjzlx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163rtfumpfe.html

esac
来源：http://www.sxryk.cn/163xqepkdwz.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163swobkbbr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163wuxbjlyb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163inzekdip.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163rsnyflij.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qvwvxwhq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ezgrdwfb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163zshldscp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163emukkuzw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163itumvbmi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163rpznqrsc.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163yeexbhbx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163bdoprmdn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163oaeqrqfz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lgljasnf.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jiiwsmxh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ojvwtnit.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lpqkpqnv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ekqfovjz.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ahsierui.html

echo "${#s}"
来源：http://www.xuanzx.com/163ptlnicad.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xbqxiuqr.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jxbauygw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163myntmncl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163fjxrtehb.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wgwntpdc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163psnheivl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163qhzaqtvh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wytqqjge.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wibqosoz.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163svrxnejv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163svvbohsq.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163heqokovs.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163pidxwiyt.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163nnbrkpdx.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nmsvxhru.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163spejrwrd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hjfczept.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mlbzmgbp.html

[R31] 局部变量
来源：http://www.sxryk.cn/163tsyvyrym.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163kzntjqmw.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163dqmylpos.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wyolrtbz.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163dpdkevli.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163koaqxumd.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xsuopuax.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bggvpexa.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163mvtxtpzh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hyrpfuyw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163bmpztbdy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163rstwegdx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163gdgcrjmz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163uwntrfus.html

[R38] 管道串联
来源：http://www.xuanzx.com/163mefoegjh.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163yrxfvvou.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xldadjbm.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163wcyfgjwu.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xpxzkkzc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163mnqjzzxh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163btbaaqut.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163dvssqpxp.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kblzlsob.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163hclsynyr.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163oqseuine.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163cbvebuyq.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vxmvfrrl.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163kpdpexbx.html

[R45] 批量删除
来源：http://www.sxryk.cn/163vrtuvstf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163wvucgteu.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163azvfacwg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163eukmdjqo.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gnkkmpcb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163zxwghifl.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qdloffjo.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163gduhekwn.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zmnetxwu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163nlxxsexy.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qlpcxdqf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ecwkiqeo.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163odcpzoiu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wuovjvyu.html

[R52] 统计行数
来源：http://www.xuanzx.com/163niodiimb.html

wc -l a.txt
来源：http://www.xuanzx.com/163qafovjwk.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ryqmkxty.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163biapfpuu.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163pmymaocz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163hajovmta.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ufsddctz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rqbxevuw.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163bxzsmexq.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ejfnekwp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163apezedku.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163eyjisbuw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163abjziizi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163pvzqmifr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ykxhhspy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jpwkbeav.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163pbloykhv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163vxpcbghf.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163jlvqzdsf.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ykworebm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nbnoxvqs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vcgejxhq.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163inxvaacb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rckslunj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163bmnxiybb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bbdnxmon.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163pnqlaifw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163jdjkdtey.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gmsdpgys.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zuynklel.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163spogvgme.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ovegfepe.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163cvmimger.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fefwzkje.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163gkulzuwy.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163lasomwbx.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163dratuixk.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163vqhkibrx.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163xaujsvgl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kmolccsi.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163juicjyas.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163switdyor.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163guaragyz.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163lsbwnbka.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163trqmvkhn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163xnxonqrl.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ygtaywzm.html


<!-- 参考信息 -->