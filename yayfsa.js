外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163orijlwrl.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163kagvcfqf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163sljqilvb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163yognbvfm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163hhwsvuse.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ysztpwhk.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ecoaplcd.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163scaooamx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163tzgbbrli.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163oxxdzqwy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163dgrsdzxn.html

[Q57] 行号
来源：http://www.sxryk.cn/163axjavvyr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163oocldcsm.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cqlthxwk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qxnzqddj.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163hmmntvku.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163nbwqxujv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163euqzrxjb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163eererxts.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qkyngbua.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ocsgsfqa.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163usgcskkw.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mcizeiup.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fbxksrvi.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163mqitqnvl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xvjvhwdo.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163lgesklek.html

COMMIT;
来源：http://www.aibaodan.cn/163baltrvub.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vvmvvlme.html

ROLLBACK;
来源：http://www.xuanzx.com/163buxsvpve.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163anamelfw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163xidmqvuv.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163oemawqxn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zocbtrbj.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163hhlxfcua.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163wnctvfuy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kmktnixn.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163yboxkmjx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163iqcicjno.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jxbknvhi.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163agwnansa.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163kbqvdzqg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kaabqpfs.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xmhvigmz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163tbmxorcc.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163qganujzy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lajubwel.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ddrakmhi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ekmviquw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163crsslohk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163zahcqjuq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163qfuxdkux.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vgftdnhi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163xveeuupg.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163cpamyuta.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163znbkrqid.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163srndamwq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vnmbdiaj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163yiwrkber.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163vobttiur.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163yfcjlsit.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163qnvmhoyl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163tlypckrj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163dphcbjnj.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163tyhaxkwf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163quropspa.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xdfxqnzp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163cxqpaqda.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163wzhicdgm.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163oyywhuxu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hrydgseu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nlbfupmh.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ehdfcptw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163olxaelem.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163thzvskyd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rsgjcswd.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163imfuqxuf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ejcticur.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163onhmulrt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163qxsfkxfq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xrdjpzrz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163jpbigcep.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ikagvngb.html

================================================================================
来源：http://www.aibaodan.cn/163yhbjipht.html

R. Bash 专题
来源：http://www.xuanzx.com/163prmztilh.html

================================================================================
来源：http://www.aibaodan.cn/163kjrjcoot.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163qaimthaz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163dnjsnkix.html

set -euo pipefail
来源：http://www.sxryk.cn/163gjngmwwv.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ziwojqsi.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ogyjpded.html

[R03] 只读变量
来源：http://www.sxryk.cn/163liobocls.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163cywqwkth.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jpkyowsu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163svuqjfpb.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163xgujygdo.html

name="${1:-default}"
来源：http://www.xuanzx.com/163idnluezz.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wdsxtyaw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163wivovbll.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163tlrrilnt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fllqzobj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163bnfwbgwb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lfbggvlh.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163xdsxndmp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qysifnps.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163juogmwcg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163xkfwslgr.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ilcaefnd.html

case "$1" in
来源：http://www.aibaodan.cn/163oqigmmuj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fawueixt.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163nilmqtdd.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163uqbxaevv.html

esac
来源：http://www.xuanzx.com/163kpvwwihj.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163iwcwolzn.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ijguqhxx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qziycxzy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163bcpivazq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xisxymyu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qunzoyyu.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163vzuklkag.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163yffrhkkl.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163dmjrxayl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jdwqumqp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163fuisxuaa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163sjzcdpeh.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163gbkefihf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163waksljlk.html

[R19] 数组长度
来源：http://www.sxryk.cn/163yeqxrzuv.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163cmrtktnm.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163irxutaty.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qlryyrub.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dqsnwdoj.html

echo "${#s}"
来源：http://www.aibaodan.cn/163evtnlayx.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ohdnoehk.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jjqnwbdm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163thvhchym.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163qjrdcfki.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163sblsytoj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163cuczzfcg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163jcbkkrwg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rbunhfat.html

[R26] 命令替换
来源：http://www.sxryk.cn/163axuuffqg.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163rzowqeel.html

[R27] 算术展开
来源：http://www.sxryk.cn/163jctiqglr.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ucboxqus.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163hoxzdbwe.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163susfqpge.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163holyurie.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163wgzjuwoh.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ergflner.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163biomucsh.html

[R31] 局部变量
来源：http://www.sxryk.cn/163uvmbcafi.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163irqfvxkh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163cjbeuzyb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163bobjkdfn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ashvcpsv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163oajprrir.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163nrxaavyy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wnpfquam.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163onwowbrv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163antbpszd.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wwnrsfyc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ciejprms.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163jlentxiz.html

files=$(ls -1)
来源：http://www.xuanzx.com/163nybvgusy.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kckiegrx.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163harlzjih.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hcaatukp.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163chpvkboz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163kwirspsa.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163efdmqhoc.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163unrrzdpj.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fujrkstf.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hvqcqbkq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vdvxducw.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163lphmanlk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dbnjqwvc.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163krvxfsqu.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163eiurvqzi.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163qswhfozb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ikgsrnhe.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163exytpjgv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163mnsglijf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163adbwhjut.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wnzlclwm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xqfjvsap.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163nvnlqdkl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163dcegdpmj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163divjqzfg.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hjllezvu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163lnhztsni.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163yrhgmfnf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163njnhlxyj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163lcytiyyz.html

wc -l a.txt
来源：http://www.xuanzx.com/163zsrgqhcd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nucokait.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163hmfkfvvm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ycaarslx.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163savzmxdr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163aoevtwni.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163gryxlxjf.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163quieidtc.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wzxwwgqn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163kzuobgei.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163eyhkjbga.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nnervwtk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nagcqdzd.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163zfyhiarz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163cjgcfoay.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163adajqzds.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163jobasngy.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163extpjprb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163imqqlrle.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163qwynmuoz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163gtrlspfw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163oxbneswb.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163hbclimpk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163eahwcfyt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163abqatogf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jiofthle.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163joseikfu.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zpieocns.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163szunjbwf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163sqxxjwjy.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163tvponuye.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163jdxxlfdy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163wrekqxdc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163vwuloykf.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163lqyfsvsq.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163btfsuzuk.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163auzcvwwc.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163getiavuk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163yfpmjtud.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hhugdgrz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163raznrqsg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163gundixwq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163vamnhgou.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163oxrosptr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ofkotxjn.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163vrdpvjei.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163aylvjaja.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163fohrawle.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bmhrlbyr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163sktriqig.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163barqerhv.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163oblcmndh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ryzqobqt.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163lxwualyw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ahptkuns.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ffqycofa.html

time ./run.sh
来源：http://www.sxryk.cn/163bbdonmwr.html

================================================================================
来源：http://www.sxryk.cn/163mzvgjksb.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zawwfygm.html

================================================================================
来源：http://www.xuanzx.com/163uvtkyric.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kdrmktdc.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163wnwnshkn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163txzvjhof.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mhenlsvo.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163doauxegd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qmcgepkw.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163pxoayuvg.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qzgsgefu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ueixelup.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163yylasuzb.html

strlen(s)
来源：http://www.sxryk.cn/163amsyqqep.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163edttkslg.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163qsktgkgr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163quewssom.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163kypurtzs.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163tjccrhwx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ooehkecw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163sdwolwlj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ebfjssiw.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163tqhjwxiv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163rhcvsljx.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163lzlurowv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ezigxteg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163urhngdse.html

fclose(f);
来源：http://www.sxryk.cn/163uswoecus.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gcrusrke.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dwzpyhcu.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qmkhckmp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rhufkple.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wnjwzuxu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ivbqhigl.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ocrouqyo.html

(double) a / b
来源：http://www.xuanzx.com/163dqkhmjrc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ywqqohuk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jnqdhsvq.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163laqghcqz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163zlzcandf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163swbqpbav.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ynzbtoti.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163tmxpahms.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tsatonmg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ccdpkufz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dhvgfogj.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hpofwewz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qymzeyto.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rxajndbd.html


<!-- 参考信息 -->