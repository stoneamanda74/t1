外链999!wailian999！

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163dsrtxvys.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163miuionfd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hyidezin.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163pvgnllsi.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163hcuifmwl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163lfuufprk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163efrkmgky.html

SELECT * FROM (
来源：http://www.sxryk.cn/163dxehmpvs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163yxevxrlj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163vhrscjie.html

[Q35] 内连接
来源：http://www.sxryk.cn/163eshhfvtc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zkfgqfvb.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dmnknllr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uhfkleke.html

[Q37] 右连接
来源：http://www.sxryk.cn/163nrindrxn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ztvtohat.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mduhvcxr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ltvrjghk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163rvxxhxnq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ukikopfb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163aarnkefs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ycsydhyn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163uuyltcsm.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163cdnkrdnb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163lrohgtmj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163hbxmsiai.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163piwwghxz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163lveeluse.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163dphmlmfu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163wgifslqz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jgrxbfhe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163dbptxmdj.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163xdcwfjjc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163rmujktrv.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ymvoqtkx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163agxljvcg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163dkpznptb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163phuiefgy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163leyqlyfy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163povvokhq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163weygpqkt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163qealdhil.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163elaelgej.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163lbowzfpz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163czzzbdtj.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ukynbhap.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ukuluznr.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163bphavrtj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163izjugjic.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ndugdbft.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163abkewhfq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163atbiixtc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163dmkmktew.html

[Q54] 清空表
来源：http://www.sxryk.cn/163asunzvvp.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163kwjwvsml.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163jnyyiama.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163madrwmiz.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163acblgbkd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kagomann.html

[Q57] 行号
来源：http://www.sxryk.cn/163iwayjugq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qzhbqzvn.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163iqrmigvl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163buznebma.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163pujgxrrj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xfyxkogk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163axkokpeg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jhxebnyl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163oluvrvxt.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ulwhjnux.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163iovvbfow.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163xdzwxfvm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rdwtxdvw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163gfpaiapg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163iwjglzyr.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163aujkiyua.html

COMMIT;
来源：http://www.aibaodan.cn/163fjvvsccs.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163xusxygsh.html

ROLLBACK;
来源：http://www.xuanzx.com/163fjmrcuwa.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163lexyxaha.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163stllcbqs.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163lawomten.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163grkxwwei.html

[Q68] 保存点
来源：http://www.sxryk.cn/163vjgbufvy.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ekwoelqm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163mnmbluvn.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163sbqyyfky.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163cmpkxaye.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163rjhocxkt.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163lamvvjmf.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163yuvfjdcl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163quxyhgru.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mdkluifm.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163dfnpkbue.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163dsbfnfsg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wzuxmyje.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163eszvgluz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dcsscldm.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163yddxzxpq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163gtpdbdms.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163kaozyukn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bgqwxipm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bojssfyt.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163gerxduwm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163gmonmebe.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163uffrikam.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hbcdovuz.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163olqcifuz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163uowtxijf.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163qzbjuvfj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163npxwlgzk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jrmijjff.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163hfxwufsd.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ucfzslhs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163otfpyyez.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163oyhnnxkz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163muwjsuxz.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ujgjowmg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163bskiffsc.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ivmvedps.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163icrbcksp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163aqrjhkkg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fcjucqpt.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163inrdxhif.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163loyjkjcv.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jpupuwmc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yerbyyne.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wysapryp.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163askhqplu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163unutvekv.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163mbqvgtac.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163exifkucw.html

================================================================================
来源：http://www.aibaodan.cn/163qxkergso.html

R. Bash 专题
来源：http://www.sxryk.cn/163gayyoesn.html

================================================================================
来源：http://www.aibaodan.cn/163svkinsnz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163otqukxbk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ckgvwxhk.html

set -euo pipefail
来源：http://www.sxryk.cn/163cbdpkcku.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163slrvjlwy.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hhcgurdu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163dbhhficm.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ncrltzjj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jfsljndp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163wvnqpnuv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163hfiindtj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163prcizvow.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163pdmyydia.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ozbgmieg.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fbyadpig.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kqjnfliy.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xbmvogis.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163eavpvmfp.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wuaoftbv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ztfxbfdw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163robrkgdv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163cppzbezy.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xamzmhyg.html

case "$1" in
来源：http://www.aibaodan.cn/163immtuctz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163lxtfhryd.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163cbnahtnk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ibuswspo.html

esac
来源：http://www.aibaodan.cn/163whauggsc.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ojmdmdcg.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163lovbvdnh.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163mtaugdbw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bddyicho.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163pufucvfp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rmdvrxra.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163zpwodyqn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mwhrtygv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163gudpyklf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163eqylvdtm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163jtkoiqwf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163tqxayhcr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163hjvwvvoe.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163vwwdhcou.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163rbewkols.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nucquvyo.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163azfdukgf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163xnygwzrs.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xqvoyfzj.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rtjfwzky.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vfcgrscs.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163uimgwsdd.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163uuczggza.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ejiqhgym.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163yaocncjy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ejcdcryk.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163vtilvmoy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163thexupxp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163eomjjzws.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163odjylcvq.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163nygugokq.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gnrktvnl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lnzdeuio.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rbkolaxf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wfscqkmm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163gtqhvgnk.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zxxovczo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163wzrsfdec.html

[R31] 局部变量
来源：http://www.xuanzx.com/163hoslzqtb.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ddphvjrd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vnasrcsw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ackowjrv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zfisjcuj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163iuafpuiz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xmcvbdwn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fhiuzzry.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qjwnvwip.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hylbgsvw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ifbtuegf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163kmgihrrz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163knlseiqs.html

files=$(ls -1)
来源：http://www.sxryk.cn/163tassjcez.html

[R38] 管道串联
来源：http://www.sxryk.cn/163qrbwvrfr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bawstxay.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zjgniwsr.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163sojrprur.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bdnmzive.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163fgdfvejf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tltlsmkm.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163eadfujwd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163dusydxkv.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ouxxvpho.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ilcityaq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163mtouufuo.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163tvmcymah.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163gmvdsgww.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163frdugzaj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163pzgffvim.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163idodogrk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163aqhfsbeu.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163oquddgqy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163dshwlnte.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163gmryexza.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ephbkmei.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163pelsqdoo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hayryhyr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163otsgdbey.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163efufjqcs.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163kxerjgja.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ovsozroa.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163zoajjdkk.html

wc -l a.txt
来源：http://www.xuanzx.com/163rwcotpfs.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163wrkerrhq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163iwchnwks.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163thluqgvx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163juigfshr.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163hxyectst.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vwwtjnep.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163gbskjtyh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163eugtoequ.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163cdcvsrll.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163htjnzods.html

[R58] 下载文件
来源：http://www.sxryk.cn/163cvwdpddw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163cfgvfsgo.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163pmppvafc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163qvyszdzd.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163fxdqknqo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163kfuywamw.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163suaopkmn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163bataxgel.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163krhafbsr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163bcrmywoe.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163gczhcitc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163gfedcsoo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163fqoxujmd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vxmxvjdd.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jcqnksmz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163xhzjtihj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163buoicqpe.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163idjagber.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163kblgfski.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163maxfupjl.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wckjmoge.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zweftiqr.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ljeozknz.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vdenisxb.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xrbqqfrx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163mvfstowx.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163quhgdbyp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163qqggamhl.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163bthnaodg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qhwsuoor.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hldyljwd.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jbmkyfuy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163fsiftjxz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ogakhing.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nxwzzwgq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163cwhpegqx.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ajsmkogc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lfmywlsy.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wwtrptkr.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163obptrhph.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163vbdnoqad.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nxkftocn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163iflqylxx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jayownkc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163saxkomkv.html

time ./run.sh
来源：http://www.sxryk.cn/163yhhltxtb.html

================================================================================
来源：http://www.xuanzx.com/163ftpngslm.html


<!-- 参考信息 -->