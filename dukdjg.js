外链999!wailian999！

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ydxmvkgq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163gfddzobs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xznwpyfz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163xqnrovih.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163aspctkuq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163wwtsezks.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163oybqaqpn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163dsodhzkl.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163rjdygqdt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163gnuirirp.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163mqwgbvvq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fberlley.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163iuyinqcu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163uumpzmrs.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163cxfinfuh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jthrveav.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ihrofrlt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163iaxrufve.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hcphcyip.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163pjimthfz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163nnbiafbx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nlzaygfz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163kaxypafu.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xgzfidgo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163kcnavsba.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rghaflws.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ehhaiest.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vtisdnyn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163wrnzstiz.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ltiojugq.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163yfbufpou.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hwrefltc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163yhxcedle.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ioohgqdy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163tbbggzvp.html

[Q57] 行号
来源：http://www.aibaodan.cn/163rnnzqqil.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163hgecliuj.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163jlwusixm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163rvajzjve.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ymlndcrm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163lkahdtqm.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nmfqpubk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163qykvrzic.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163txeesaum.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163thvkqepg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163pazthbhp.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163uvhjaidy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gkqjaoee.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lyuhldtk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vgtidwxa.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163fignvngu.html

COMMIT;
来源：http://www.sxryk.cn/163oximehdb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163hjarkmoz.html

ROLLBACK;
来源：http://www.xuanzx.com/163zqkmqgkx.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ikwqvypo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163lvupsomr.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163axfwppne.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163izwlpkzh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ecypgthc.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rzcltoaq.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163emspjwif.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hndsmjzg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163mwyxlpbo.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163zspalfqq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163oeoochyn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xoucahom.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wpnvcgao.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163jfblpawr.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wphewjvs.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163zmuvqdxy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qnmqppyp.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163bvaprkko.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wmeegflb.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163hnmioxlj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qjvbhrzt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xiraffku.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163npdklydk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163hjdlshbu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163jdnxvwiw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163evjhjlgq.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163temnfirr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qhgnhqoj.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163pyjijphc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163rnizsgyf.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163eysvelee.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163elpjnvkh.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163lhkrqrjk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vlflulog.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163dbsfjkwi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163qrrksbwh.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163issrvunw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163uzwinafh.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163usvgdmff.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jpcjkzmd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163itkipwhm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163jphequbt.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rguztaiy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163vmpgjovy.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163dhmfbsem.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163wfyhudqk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zozipysn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ogrztoom.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163upokbpds.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163dvwgcyiv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ubakipne.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163wvfytyii.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ixggywtn.html

================================================================================
来源：http://www.aibaodan.cn/163emmawfll.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fllblfvy.html

================================================================================
来源：http://www.aibaodan.cn/163opptpplw.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xajnazes.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163xaxaifpf.html

set -euo pipefail
来源：http://www.xuanzx.com/163woepkfyy.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163jwhtixkk.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163wrtojvsw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mhxzoxbf.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163fpwutvin.html

[R04] 位置参数
来源：http://www.sxryk.cn/163vstilbpv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jppwbydd.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163tqmvjumx.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163cbytwsbw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163aarowkep.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xasbumwi.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kurzgdvm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hlxnehuy.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163djebampn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163crerbvnn.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163dzfflzpi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xbftjgfd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163xhobdixi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bbdsgpki.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gaewmuey.html

case "$1" in
来源：http://www.aibaodan.cn/163brpfkuxk.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163imaenxgk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163qlrtfhxk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163orenrtvh.html

esac
来源：http://www.xuanzx.com/163nvxkehnz.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dcsiwnmr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ehxwiyph.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gdfdmuxg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163cnytlpru.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163audypvul.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163omdoulpx.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163fnfbhelg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163iaxupsjs.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163yvchmmdq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zkgpdswz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163zbkujmml.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ojrdhwgg.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wafyfibx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163xlmdyarl.html

[R19] 数组长度
来源：http://www.xuanzx.com/163bzagewmy.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ggjlqwxx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163kjamixip.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ikzzyldj.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163brreyscw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lvpotvye.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mkgkjgss.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163nfhnhqit.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tcpsmsht.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jjqmztxt.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163szdqiwmg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163zqqclwrv.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163aryrhmmr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ueekzixs.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163oltlhggq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ykdpxlrz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163yubyzohw.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bboytzlx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163nttfjjxq.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163jllclybr.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163marweucr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163uhrbjgne.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163imjjezih.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163latxuzic.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nsegswzm.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163nwilpqnm.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163rxhrrebz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163owtdqiyh.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163kktwntef.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hrxkzukg.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163qsqsmpmd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163sbellpeg.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ynwpgsub.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163skgvrwye.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163owemgibn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163juqelibb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ulatggpu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163koiudqom.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zlhpvdfg.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zsseuwdr.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ltbwvlgd.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163xwppuqto.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163almcisiy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bhjhtmrd.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163xzwzzyqx.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163zvwdprte.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jdqupehy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ywebpfgf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163cnqvtmqx.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hvsgwocb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163fcmgjemj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163mzuuinnr.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xeqrztks.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163fllcshwp.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163npkvdwsc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vhfoykpa.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163nghtevqr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163qnweppsb.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jkfqmcqp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163wthoyacn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163gsuxpmcl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hanltvjn.html

[R50] awk 求和
来源：http://www.xuanzx.com/163zghgtvfp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nogbjzlu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ofdaukcu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163yyhyncvy.html

[R52] 统计行数
来源：http://www.xuanzx.com/163tfceuebu.html

wc -l a.txt
来源：http://www.sxryk.cn/163oaksjpkw.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ddfxajia.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163nqpzdklv.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163mluqebab.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xbydpwjo.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xyqyvomq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163apksgvcn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163jehqtmyd.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zyyxatof.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163horphfgi.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xbsrmdfw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kvocxoty.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163lujgqykd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ueojbelc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fgvtjdnm.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163jbvjffgm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163isvnklln.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163xelmyeyq.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163rqvjmgfk.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163dnfmfylq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ceizhtcn.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163xxcatyvq.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163osocsjhj.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163kpzzaojv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163aisjnixu.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163yoezybmr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163futqwtsn.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fzbvnojx.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163efcknyml.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163kxtkblyt.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163irvkcruo.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163yrneluvr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163uibcssif.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kfqovosk.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163lxmlzyrj.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rmozxpdv.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jomdmfns.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xouwlzlb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kmljrhcm.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ylcmdpgp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163hltdvehc.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163msxyfyur.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163kmzlcslm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163scnfkhib.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163jwajpzqs.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163qzimxhmm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163armkjvvq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163fjdfntyj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fakhdtvi.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pigshbca.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163cgiumxgc.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163yrwekblb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163gweopmpk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163dpokqdok.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163wmopxtov.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163fncadshy.html

time ./run.sh
来源：http://www.xuanzx.com/163jjurxygh.html

================================================================================
来源：http://www.aibaodan.cn/163cxtpeobf.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jxpfuios.html

================================================================================
来源：http://www.sxryk.cn/163hduvdyfq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163esjxrkvg.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xnnoajrg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163lochqqrp.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nmesuonq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163mwffulkx.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kxvpvbpd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163brthylpv.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163dqsziypg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163fbkenmks.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163aufqcyhs.html

strlen(s)
来源：http://www.xuanzx.com/163ohjgpiuu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ncftrdgx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163hngzxuhy.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fotcxqak.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ruuewrbo.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rllgtzcu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163iqergvsu.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163jhptnkxd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163bxbqvvhg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163urpikrxb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lmvfuuhf.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ntkublzz.html


<!-- 参考信息 -->