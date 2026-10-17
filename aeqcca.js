外链999!wailian999！

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163upxwpasp.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163otmvofin.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163mtfirvuf.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lbxlshpr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163moyhtdsy.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163eevgweka.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163gtciimco.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163zywulpxs.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uyvivvri.html

[Q54] 清空表
来源：http://www.xuanzx.com/163yjujtxss.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163fffpybzc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163kxjlsmkf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163udvhurpj.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ksxwdxyq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zmrjjnpb.html

[Q57] 行号
来源：http://www.sxryk.cn/163uummjfji.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163mwrjxnhc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163wmxacfjc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163tfyaxvzx.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ljdxnkqm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163sqdpaemp.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ghsicbvu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163sywmrbgb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yzkicuem.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163fjmytgur.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dzzdfshe.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163yjngwcrj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163imxuqtbr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163suhvtxws.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163mbtmftqj.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ketmqqxg.html

COMMIT;
来源：http://www.sxryk.cn/163dxkgxbnx.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mqypilmi.html

ROLLBACK;
来源：http://www.sxryk.cn/163radtsyyu.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wmmhrjry.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163sivzfbks.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163jhayhdho.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rebvlxcz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163efuuzroa.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gjghihjj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ielxiqdl.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bymbxzgc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163wfcmwyff.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zspngsuj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163fgddxqke.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163utcfxsex.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163rirnqkcb.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163pzfxmhio.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ewphlovw.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163yhezgvnv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zdcqylod.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163muztbpvn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163kumyrsqk.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163suaxanye.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qifmgpor.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gvpqfbxc.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jdehjngr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163qmgdmnmo.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163sbrsdytc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pejvihvo.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fmmvzcxn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163huqbbpwf.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163akvkwhat.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xopttsjc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163seebzuot.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163akbnmmxe.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163agfavotc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163sqpdwfvu.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163omjrmfqf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zdndxhdm.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163pdzekxgw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163jpfbrhru.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163azrrzuwk.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163uuboqllx.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163eombtsvi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163dvlathdo.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ktceqbin.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163lestellh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zwakdqfv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163bqigzbxq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vwqruwmh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163macjyhjf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163egypqooz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rdbevwib.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163wkyibars.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163woneporm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163capxulrv.html

================================================================================
来源：http://www.xuanzx.com/163xgkwkfuy.html

R. Bash 专题
来源：http://www.xuanzx.com/163kyxocbql.html

================================================================================
来源：http://www.sxryk.cn/163dyjzbzdv.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163zebcllky.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163vvncmwzg.html

set -euo pipefail
来源：http://www.sxryk.cn/163vdltakpe.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163bygewhbf.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163yxvxwgbl.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jlfoknvs.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rveutlyv.html

[R04] 位置参数
来源：http://www.xuanzx.com/163tsjnemut.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163iaqfzgwj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163annoshcv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mlcefnrk.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163cvuxvdoa.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163jpokrjex.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xitxpgtk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dsnhrvzi.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163doqdqeeh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163rdsivvai.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163sisjmpcf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mewvhunq.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ivhmhjka.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jnkpkxhd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vkhlznyv.html

case "$1" in
来源：http://www.xuanzx.com/163dnqunthi.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163wojthmrc.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163epnazkwt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xjvinjwx.html

esac
来源：http://www.aibaodan.cn/163svqkxjbg.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vcnhxugj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vjqhewvx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163iaychljd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163wqupsgqv.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163hknzuyxf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163htojzyeh.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163rxsqlhop.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163okaljlrl.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zrpefgij.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tlxgmxvx.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ctwehfns.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163dboaspcf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163usnmctyh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tmvladwk.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ikapqniz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163qjyxuxgy.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163shwvmbid.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nfjmmmmo.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163temmoevr.html

echo "${#s}"
来源：http://www.sxryk.cn/163zdljvuuf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163umluqguy.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163kfjypnfu.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163dtvwphun.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163wwkoicsh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ylqlhrbm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mtcqybtp.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ckbebsxg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hpjiquqn.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fgnxyohc.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163bdralloq.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ofdcucnu.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163acbfljmd.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163isdegykp.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163rnvmtkuq.html

[R29] 定义函数
来源：http://www.xuanzx.com/163clvcibbw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163mmadijuc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ulvjhbzk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ngtcgmer.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163rmpstsvg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163unqpnynu.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163anpdbfsu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wvjzvwnf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163qmiondkm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kmnclllw.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163jdjbvkrn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163acimdtew.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163dszbzvqe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163iapqkzdw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cnmzlspe.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xfukdbma.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qdoxhpdt.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163dqsfvvrz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gkwyhkub.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xzckaset.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163afmkgrsc.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ogsdclkt.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163waxrwdsx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bpuyprrk.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163drobsmha.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163urxhddxp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163apivaxos.html

wc -l < a.txt
来源：http://www.sxryk.cn/163opnmyspm.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163sfirlttu.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163bmvfwora.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163xnobznmy.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163jnyshvyr.html

[R45] 批量删除
来源：http://www.xuanzx.com/163brwqusak.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163podokxsk.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163vgnwnhsm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163rtxndggz.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163zfpkwrgb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163yolouzsy.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163izsgbsal.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163aumtcemd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dhlmbcwr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163dzmnprjq.html

[R50] awk 求和
来源：http://www.sxryk.cn/163slvvarsa.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163bwmwqrjg.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163cldpbbwj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hgqtjhwd.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163gznldumt.html

wc -l a.txt
来源：http://www.xuanzx.com/163bzavywug.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163rxmibstm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zhsrstge.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tcmnhvzu.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hoildlou.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163fpzeefil.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163drfhcqqq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163wezxmaul.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ybwmyywq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qmqjaywm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163strflncm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163afcovpzk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163lzzyjocf.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163awklrnld.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ifeoondp.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163qspwpjaf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163obpgwldj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163stvxmrgv.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163dtzeddbu.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163mhlgdgfr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vzkvqtsu.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163hwwzppni.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vumqbvox.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tmziydps.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163huvnugot.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163qmiqfwgr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163fjrzwphu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xlzhbbpa.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163vuqizeuk.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163vcljmiax.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163sirveugy.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163siwveigj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vrlrddky.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kkxbpgln.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163npoekuht.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163trplsdsi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163cxnwlmij.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ngecrakf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ysofpckf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ouhqnzaq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163zftbtyaw.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163atrlfmrh.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163xisvkqnz.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163uypeebkb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163tmdjkigs.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gtsaecma.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163sxhtnhxz.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163lhaxrfnx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jbbsrtsq.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ltvutudh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163lespvlix.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hxnollqn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163musombsm.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hfjgnyip.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qekyfyuy.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zqwemzlj.html

time ./run.sh
来源：http://www.sxryk.cn/163dnpilcrz.html

================================================================================
来源：http://www.aibaodan.cn/163fxeaylsy.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163caxcgomz.html

================================================================================
来源：http://www.xuanzx.com/163fceniytv.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163mjydmsvq.html

#include <stdio.h>
来源：http://www.sxryk.cn/163nxvdmqeu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163mmilnqhq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163rjnzltlp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163qhrwdgzj.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cjofdjeu.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gfwmheys.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163mxufrtbf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sfsbqgts.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163wzufdokr.html

strlen(s)
来源：http://www.sxryk.cn/163bwzehmzh.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163bbncjxin.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163yerulhgl.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ofrlayrs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xfzjffvg.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163lnzuyail.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qwldapke.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163cccusgff.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wfusjvtv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ppfxtyjp.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hgzufvne.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163afpgahdq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xipvyxdd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163uubnxmhz.html

fclose(f);
来源：http://www.sxryk.cn/163terfpuoj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hybmfedq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163gazktqtd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163drsjkqjc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kqkepkpl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163pvdnonhi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163watwjatc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163htdobupp.html

(double) a / b
来源：http://www.sxryk.cn/163tiavnofb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fuwizuat.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163vbnuccyu.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qvbhpsun.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163gucfxxha.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163fgxtchgd.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163oxqhhmrl.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163xwztsjzq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pzpxucby.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zundfohb.html


<!-- 参考信息 -->