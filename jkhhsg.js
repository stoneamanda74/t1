外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dpfvaryc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wcloxbgc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qfcplxut.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163dnhmxcfd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ldizzafb.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163mzbzkdfu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163vwugodks.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163oaejvczx.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163bypwvsch.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163zfogoqne.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ycqutnaf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cngqtcyl.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qrihokxp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mwfgajrv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163cajpxuqs.html

COMMIT;
来源：http://www.sxryk.cn/163venqucli.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163zbwrsxul.html

ROLLBACK;
来源：http://www.sxryk.cn/163plbvjwxd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tsksbuno.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163cxlztdxj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163fztvwrbz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163baqcegld.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163bvptgorg.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zdgamnmc.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163opieyttx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163objontfh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163okmeslyw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vmyzqpby.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163brqctdfh.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163rpjogmts.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163wywqdmac.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ahiwrrik.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hbhsumkr.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qpblamos.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qvolansv.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163kzncnngg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zzzoqgvi.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163tjbipyls.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163xmcalyws.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163velsqcba.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163yfqbfmql.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qfqjgrim.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163yijuzpbw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163pcrnubjc.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fedtwsif.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163tzjzeepx.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163unourwbn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163issuhgzm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163fjxgeang.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163rdxkxqkf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ckuphqjs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163pjpdshhz.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163mgijoggl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ubkundyj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163udgceviy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163uhihbdgh.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wvqbkgaz.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163oszserhk.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163caewpkct.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bjjopgyd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ccalzeaj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fsnnubsp.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163rufzrkiz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163uasbsiwj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zlgsccqa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163tiuovvaq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163dajacncm.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163csnucjps.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163psauvjrj.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163rrwyobyf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163hnwstpcb.html

================================================================================
来源：http://www.xuanzx.com/163oqsmzbbs.html

R. Bash 专题
来源：http://www.aibaodan.cn/163jtwuhvww.html

================================================================================
来源：http://www.aibaodan.cn/163ioadxgws.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ibyeincx.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163fkojdire.html

set -euo pipefail
来源：http://www.aibaodan.cn/163auvpqisb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ifhcumho.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qsjfbfbk.html

[R03] 只读变量
来源：http://www.sxryk.cn/163cwwnkfpd.html

readonly PI=3.14
来源：http://www.sxryk.cn/163manmkffo.html

[R04] 位置参数
来源：http://www.sxryk.cn/163alaobgcc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163gtuocnfo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163oxtvfchm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163zbbeyqhy.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ijjsqyxx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163uetxzcuc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dgxgruap.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163gpcldnah.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ndxhgoru.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163hqhnerlg.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ffruksqs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yqwlanat.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fktegdio.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wcigmgwc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163lgeuiaqz.html

case "$1" in
来源：http://www.aibaodan.cn/163dsxnqooe.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163plqvyhiv.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gfvzqkxw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163layikzdj.html

esac
来源：http://www.sxryk.cn/163zmwomjqe.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163juvkkodm.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163jiviexac.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163crmsxvcp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163fbgzrask.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163vnqmyhdh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163mhahiknq.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163atfyhmvy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163cqzolkhd.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163htpmajrn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fsaoxolr.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163plnujlhu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163icwlyxyk.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163hieyfxbe.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ncitqggk.html

[R19] 数组长度
来源：http://www.sxryk.cn/163znwfevsq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163kotwglox.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ihjkicwp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163mrwebjkg.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ppddkqlj.html

echo "${#s}"
来源：http://www.sxryk.cn/163xvwulknd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ntaspleo.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163klqayhfa.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163tdsgiwcp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163nznwetcd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163bxbizxcz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163vfgmivpj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163mmoifpqs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163swqdzkgw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163hgisjowa.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163seplgvhr.html

[R27] 算术展开
来源：http://www.sxryk.cn/163upybojcl.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tmrfsiur.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163gowqrfzw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ymxbkhnf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163hnyqsrfe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163oxfybazp.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163audtbjol.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163bxajiggd.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163mseuafem.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163jtnuvtbk.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163xeasayie.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163qzhangqf.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163chpxocgp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163conpqtsb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vkqjrkux.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163msgklzyh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163odycvhrl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163vjkayosv.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jlsrybjw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163cziclady.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163kyuxwhej.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fklwgruo.html

[R38] 管道串联
来源：http://www.sxryk.cn/163sqwiynld.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163kuxvvqpl.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ylrzsvzq.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163lwmojmnx.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jjnlzaem.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rbzbvlep.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gygwarar.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163cucukuxv.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163bkphqhod.html

wc -l < a.txt
来源：http://www.xuanzx.com/163hrbszwps.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ujfmqnfn.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163vhgylgvq.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163krpyvudk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qbtenave.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163uqzjshwb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163vxdwlgrv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kujbwtvf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rropvzyt.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163sjrqhaxf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163trfnqztw.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163lawerier.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163tqdtqrdq.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163svqiqajr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wfwezaxd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163wjvxdymk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163vzbpbkpy.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dbrflrsl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jcuofqjr.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163sutiicfx.html

wc -l a.txt
来源：http://www.aibaodan.cn/163seijvojn.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163hufprxyq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163xkzqhtet.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163lfanjhph.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163uudpdutd.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163iayjcfnv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163zarfcltb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163nekrbtxb.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163pqhkdlwx.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163kxndetkz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163fxmqwydr.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163wouksezy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163aumnnkpj.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nhexlmyg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163iqwnkapu.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lcgwiqjd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163vplkyxsa.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163rtfgmlid.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nazltmgr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tqfnhxur.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163fxwicqtp.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gmvbhagg.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163dohfnraa.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xlcgtkzi.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zfyrtnau.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ihnqyixd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qstiopva.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163krbirbit.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rnxxvyks.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163uurathzv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163akvzahzh.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163fwpjgfqs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fjkmluch.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mzoolsse.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163zehcfdxz.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163robkkcod.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jlrcrzqh.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163thfoceva.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163qftjrdmj.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163yijiewcv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ztgxbfxf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163yxdotvpf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163bkwrdgwj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163deuklmpw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qpxnxgoj.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163egwgytlx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163djoueamg.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163juckhept.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ktesyghy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163gyotdzmq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vhzcjdge.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163wfdhacff.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ncsdtmvc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163dgxaezpw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xgigxmrg.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vibjlzoi.html

time ./run.sh
来源：http://www.sxryk.cn/163ckeqriko.html

================================================================================
来源：http://www.xuanzx.com/163ytgylmqk.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163dlmzvrcj.html

================================================================================
来源：http://www.aibaodan.cn/163mqpehnmw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163zmeninbl.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ywafiexg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ybqnftga.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163idvqgtax.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163byejjeok.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163coajgrso.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163avjxaqpq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163kyorsdsy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rdnfagmb.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163xiphqqkd.html

strlen(s)
来源：http://www.xuanzx.com/163gmrewilc.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163inkbbtcz.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tpprizdg.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163hevzvnkj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163cqiwlmsk.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nrlkaxrt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ufzvfwgt.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ktjeviuc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163oivikysh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163lbqemhfo.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ywgzyixh.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163irbpdzog.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163tnlldgew.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163yfwhnhxu.html

fclose(f);
来源：http://www.sxryk.cn/163oczwzzwc.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ofxoilkt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163cbwtrgmo.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163vxthetzt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163sizvwmcd.html

[S14] C：枚举
来源：http://www.sxryk.cn/163faxuuzhg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dkpeesbt.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163gazeqpqb.html

(double) a / b
来源：http://www.aibaodan.cn/163iatfsded.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163bqstkxre.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nlscozga.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163reachizt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rgoywmsg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163nuycdcjw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gghzgtks.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nglxphpo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uykldaon.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mnsiyvag.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wnppakxn.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163nxfnnere.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163cqzqbngp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163yvsefvdm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163hzigrytk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ysjdjxua.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ndahhyaq.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jownjhsy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163imcsmnjz.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163cmmgzjlt.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163escztcyh.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ubaxxgqq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163bnpzmzsi.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163keqrtqei.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163csimfrch.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kawpojzm.html


<!-- 参考信息 -->