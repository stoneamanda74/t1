外链999!wailian999！

[Q33] 多列分组
来源：http://www.xuanzx.com/163vnduegpb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163jcjxpbnc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163kknureyw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163nbgjohcx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163czmnsmxt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ugzxshfb.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vtqycrdi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bijuknmi.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163duovdowd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163evktgjpg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163naczgcfl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163dvvklldh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163wegdkdet.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163jaeetybb.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163cmiiycmz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163osmrrewx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xqnqcdum.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163cvujiayl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ntumzxmg.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ewswwxzb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163btsbzesf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ksbenbjf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163mqvnugdn.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163mbbdyoit.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163sqycdjip.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163inzfobyp.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163sgrxylkb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163lubliabn.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rjaxhpsv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vhobyudg.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xdowtuyl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tmtjdyeb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hupfajpo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163txjbuguf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163khiellgy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163gvtiksjf.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163nayhfxqt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163wpyhfkfp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163badzthvx.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163tywzxfez.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ezsbrasr.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163swirvkhy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kicizvye.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163btcjnrae.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163jpemazri.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xeidrthf.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mlzixkpm.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163cpjzimse.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163cazhlxfn.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ljbhrwvg.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163nzazgiqy.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163bcwztnku.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163xhbaxlhy.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163labxinov.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163rhgrqqdt.html

[Q57] 行号
来源：http://www.sxryk.cn/163odlvyyrn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pifiwcgm.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ibtohlss.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qtgwgaqr.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163gdklkvlh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163akxfxviy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163slqjinoa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163rkomgfft.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ozllmjls.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163gmaqmynj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163gisrclzv.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163sguvxiva.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vmjxsvdx.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vhlfwxhj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163gpssicnz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zoxygpuk.html

COMMIT;
来源：http://www.xuanzx.com/163iuydsvia.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163lklsrmji.html

ROLLBACK;
来源：http://www.sxryk.cn/163ksvwywhp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163zefohruq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163zfiwbfbk.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163fonduzpl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163kuoaxjwh.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163pppapwlt.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163dlgysttd.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163yznhlpmd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ozucnlsy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163efvkhciv.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163wpinzqtz.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bbkwcxcz.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163twxkooim.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xekynfrl.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163uibxjscg.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163bippmbpe.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163qqftblnr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163kevxwetu.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163zccnrrdb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163nmwmkoqq.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163tevazusf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bhdximeh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163mldnimrx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163qqleooxh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pcehdyhg.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163rgvjzpxm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163hlzjqbso.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ibxmhuva.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qqoksvcy.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hyqqnpvv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xnmqxkao.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tdnsabeq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163edptnmid.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hzszovoe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163epkwpqhg.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163mdxwzbvf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163bjbiksvr.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ngwfxgrg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163dlwjsfdr.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vaxwovrq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163dlhtgzsw.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lgevogze.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163tondkkdo.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wfpqzylw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163aspduxjj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163khtjwnnz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zwbparcr.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163kltdxvbk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163dtkdgldt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163sjhbuutz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163edfyymrx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mhxbopkp.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163usqrffgm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163bntzzdcp.html

================================================================================
来源：http://www.aibaodan.cn/163liwlwnpb.html

R. Bash 专题
来源：http://www.sxryk.cn/163udmjnadn.html

================================================================================
来源：http://www.aibaodan.cn/163alpduuzs.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163xpmsuczb.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163lbcxdtlc.html

set -euo pipefail
来源：http://www.sxryk.cn/163ffeszrys.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sqapdxze.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ybhnyldq.html

[R03] 只读变量
来源：http://www.sxryk.cn/163splsnxox.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kazctmiw.html

[R04] 位置参数
来源：http://www.sxryk.cn/163iwftbdxr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163bumdhgmf.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zhbwktzc.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ssjmlxpk.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163aneidujj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163idrzeagq.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163peqzkhkd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163qgkwwpwu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163sftgmtkz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163dktbhjyo.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163wpwnwchv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163nosjfohw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qqqnwzow.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163mzyfspxw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qtvfptua.html

case "$1" in
来源：http://www.aibaodan.cn/163fowvfucv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163drqnxflp.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tkauzvdm.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ftygbbhe.html

esac
来源：http://www.aibaodan.cn/163aprgiayp.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163onhzskzb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163crjyxeqi.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163jzmnlmde.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163zqhfzvml.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qopfybyt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ytluxlqa.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kjaelrbh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gulwivzb.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hzlqcmok.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wpohheer.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163rxndmqyb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163irwktzkl.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163zaqvgwpv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vpnqvxzv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ncwokrrp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163dyhpzqou.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ujqbhxnq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rezvbtli.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vpwugqgq.html

echo "${#s}"
来源：http://www.xuanzx.com/163idhfhoev.html

[R22] 截取子串
来源：http://www.sxryk.cn/163sluvlkoa.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ygzucxsv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163evynaiuz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163uxmivxbu.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163mirgypvk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ztsdwzhg.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163jusfaswa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163logetsvu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163tkpisamg.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163berruuqe.html

[R27] 算术展开
来源：http://www.xuanzx.com/163awtvrewa.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163msvmmqtg.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163dqpfozyg.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mrsufwmn.html

[R29] 定义函数
来源：http://www.xuanzx.com/163oxpwyhhg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163scpbwwln.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163kridmeij.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163tkkdjodr.html

[R31] 局部变量
来源：http://www.xuanzx.com/163iasnrnsn.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163pqplxdhi.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163kwshtsui.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163eoakgbni.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163aqtlrqto.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ofqyzkyc.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163dwgyckxh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163soiiumrl.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163edfklonk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163iywibvig.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ifjnoweo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zimzbvzi.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163orcfxwvm.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vaiqeobh.html

[R38] 管道串联
来源：http://www.sxryk.cn/163jvqiphky.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fzvypddv.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163apknkujf.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163tjzmqggk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vbekhman.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163omvnjbss.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xohgzqwj.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163sicrqcvq.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163lgydinqd.html

wc -l < a.txt
来源：http://www.sxryk.cn/163mxtclbao.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163gwqgnnce.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163futxkwbm.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qitvzkju.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163lkwsyhtm.html

[R45] 批量删除
来源：http://www.xuanzx.com/163hzqygsrc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wigkggth.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163duymnppp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163dbjhskdk.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163iiwhecbi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163dniaixih.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hqitkslw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163diuofqyh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zvtpktdc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qhpdixag.html

[R50] awk 求和
来源：http://www.sxryk.cn/163hnpxlicj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163fgytxckh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163gejdjvjz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bmhbkevv.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163nmclxhuc.html

wc -l a.txt
来源：http://www.sxryk.cn/163qshhctzh.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163uhtqifxu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163yhbbpcix.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dbqopuio.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163inuayvzl.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163zkcfdwdx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163sckrwcqh.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vkaismwm.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ryfagybu.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vuhhsjra.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hpbavdng.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qivctspe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mewcvqul.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xydwjyag.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163vdvoiiod.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163tmkrfomu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163fqdiamhv.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163vysfrcij.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163yuzlegtz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163naaiuite.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ewxdxmjk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mtaylujk.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163njvclekm.html

[R64] 结束进程
来源：http://www.sxryk.cn/163mapvduoh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xutzdder.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163reuvwzvj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kirjewni.html

[R66] 定时任务
来源：http://www.sxryk.cn/163jjuquyxy.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163escnxmjw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163nsoumbno.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163syhvkavc.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ejqfnstd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pdwptugc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163oywutmyw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163trxenddn.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163mfbypvsx.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163vmfnwska.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vyurjlud.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163vlmkrevq.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163cmtunrsd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jotyfzhg.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163pjffnnvi.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163oiwggqib.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163actgvdjq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tjgiohfe.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163dggxmuzd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163koprquoj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163kaaqeamw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vqmlgsfd.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163sbspjxhr.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163deywxcfq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163gnobrczw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zqwryvsi.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163iscdjyef.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163nqfsaohp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163dxndgqtk.html

time ./run.sh
来源：http://www.sxryk.cn/163pcfwhpfu.html

================================================================================
来源：http://www.xuanzx.com/163qtaowgaz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kqerupgs.html

================================================================================
来源：http://www.xuanzx.com/163ciwclrrq.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163rnflijjl.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kttgzfec.html


<!-- 参考信息 -->