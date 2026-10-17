外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nadzxsjd.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163vkaonbei.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163osfvjxlc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163wcurdlqc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163wpokayin.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ypcgpcso.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163fxtbknnf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163xulpmaid.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163fqibkysd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163veeqqtqh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ipqeevdt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nveaqccd.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ghxtrwpk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163pblhynil.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163sxkslnos.html

COMMIT;
来源：http://www.sxryk.cn/163gksshsnl.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163fmqgqwtw.html

ROLLBACK;
来源：http://www.sxryk.cn/163lihlvfkk.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163kprsdydu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163admuubxd.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mnxesogm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ntcwecci.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163smtqfrjx.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nwfzdolz.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ohsfkgcn.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163jdxiknml.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163dagqwzik.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163bwkprswu.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163frfccadk.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ytqywrcd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163emtjnthg.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163iyqpquhm.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163lpcjgjap.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163xhnporxv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163gzpbfuyn.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163rnutmxsx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nubacabh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ngiqtbnf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qdbqgrvn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163xjjtvfmx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163oarsvnxr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163pmawrlee.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jlargpiy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163qsofnnmr.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163vjjohorr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qsxjfzll.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163igdaddsi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ebynlgon.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163wpgnyxng.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ifflhkwy.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163gauwcwiy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163kdpzxrba.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163asayyznu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tqoqmavc.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163evmiakpk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163czivhezb.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ztpckcwg.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163xkiywrwo.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163dntjswof.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163qskeetfm.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163tsoqjegp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163otbhjjcn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163bhxmetew.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mjitugsk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163whowugyt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163euyhyfaz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vpclmkye.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163gpqkmnat.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163gzvcxfqq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tajsqdyp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163sayoeneo.html

================================================================================
来源：http://www.sxryk.cn/163yurifjjf.html

R. Bash 专题
来源：http://www.sxryk.cn/163kjxdllrn.html

================================================================================
来源：http://www.aibaodan.cn/163jyhhjkgh.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163flykwygk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ncfrijkl.html

set -euo pipefail
来源：http://www.xuanzx.com/163qcfgjkyl.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ybqhnjlm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163fpcftmtm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163dxbopyqg.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gfmcqlko.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163cercvliw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163sonjmzba.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163goswpiya.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ktpkhrki.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163qbnxwzxz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163uesbbxeg.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ldtioafa.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vaxremmx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163nfxtsjsg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163gbsyjmof.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163uzfajvxl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163lixpmwdu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163gtfgopvz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163wbuijlcu.html

[R11] case 多分支
来源：http://www.xuanzx.com/163usueqkgk.html

case "$1" in
来源：http://www.xuanzx.com/163yrrydbqm.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cpyiynle.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163kxfdtnlt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qestfwvn.html

esac
来源：http://www.sxryk.cn/163henadiyu.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qyjjnjhd.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163uhduinse.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mvkvhiug.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163kxjrwvez.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163alzzzodl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ndqxhbhk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163dmyffsiy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163qnlqghvx.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163bxgtzyud.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163fvgusqdi.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163hoofeocc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hylvfwww.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163qpefdwhb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163dkovcpxu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163gdcdfhpo.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pqxzpkoe.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ptbpxeoz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163oevyxfem.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163oxtfnbla.html

echo "${#s}"
来源：http://www.xuanzx.com/163bagmnlxw.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163baofioyq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gymbajgn.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163pronivwf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163whvyjntb.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ctbzcyxg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163zfohvbjf.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163zunnfdqu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163khamtruj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ucqidgfp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163cyutfopa.html

[R27] 算术展开
来源：http://www.xuanzx.com/163mqgnxlea.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163twmvohwn.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163jmztkege.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163svfrwdxh.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zsrqonfi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163pfxzkklc.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jrqyptph.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163eehvpfch.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fwssshio.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163bxduthrh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163rpizkrhk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wsuuesut.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163mjkxkjaw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mtvfbrfz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cfkbwvre.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mebvgonq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163wotmpvjc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163yuqakrhn.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163kjcumbgy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163gjlpbitf.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163omtfefls.html

files=$(ls -1)
来源：http://www.xuanzx.com/163iixqfcdf.html

[R38] 管道串联
来源：http://www.xuanzx.com/163qpuzfjbm.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163qmdrxfin.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163armwtvbu.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ojkqbzql.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163sowxfaxi.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qzxpusox.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163zxuxdtxw.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163rnzsparg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163xmlqkqpz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163bwzztgla.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163tvkvcuzf.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nozvokfq.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163krosbjsm.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fnlnabop.html

[R45] 批量删除
来源：http://www.xuanzx.com/163qilnkwlq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163bhypufaw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163dadfbxlg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163oiketylv.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163bfxhbahk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163yrprrkxg.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163osqntqjz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ltibsyio.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zzbyzbfk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gklnyuel.html

[R50] awk 求和
来源：http://www.sxryk.cn/163lhaipohp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nsfnopgj.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163wupppuff.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zcnjpjxd.html

[R52] 统计行数
来源：http://www.sxryk.cn/163rvjoiywc.html

wc -l a.txt
来源：http://www.sxryk.cn/163htdzuzda.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jdvbswqz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hnouizya.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163tlwnuqha.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163swubqlfn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163qsfqtxma.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163dmqbzuqa.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ljqwnttc.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ghpieejk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163pcjtmgax.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163qoamqwdi.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163whxmxjpj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jidwffva.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ixmeqhbz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163gpghwyhk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163kfdysjad.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jpubaytf.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hfqymtvm.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163tnidydwc.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163xkymdtvb.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xcwufaxi.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163rrrepuxm.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163jppphwio.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wcjppfsp.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163qxwgwojl.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wlkfxvkz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163aghjtxos.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gqgilhur.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163rrfmjeec.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163rcicivxy.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163xthgghyb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dfkuruov.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163izziwieg.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gbtqdewq.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163fquzqlwv.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bybrisip.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163sbxnkuly.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163twrqfewf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163dxeglyny.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163blrlsras.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zcxzvkcs.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dmuzvzbd.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zifanscg.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163etrnwwuy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hxzeqwzf.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nslryrhz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163tukljomd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ipaixapa.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pexttfvy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163whfqiyyh.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yyutpsiz.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gacfmdsz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jvujkirr.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163bfjyikzm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tzkyznnf.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163luvbxqzf.html

time ./run.sh
来源：http://www.aibaodan.cn/163aechxtzp.html

================================================================================
来源：http://www.sxryk.cn/163ukebnkey.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163jxsdtnxn.html

================================================================================
来源：http://www.xuanzx.com/163bcfxdpgn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lllhpblk.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mqyzuaid.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163epwajgsg.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163failxgpb.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163dutinwki.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163annsmsbn.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xqkryweb.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163msbwsiiy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163mgipsnvp.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tduenakr.html

strlen(s)
来源：http://www.aibaodan.cn/163oddnitwj.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163pweliqmi.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ffskwtbj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vxbwqlau.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ariszsyc.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163rakjqrnu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163pyinebsb.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mbxhktzi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163dscuazpc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fdsjcjjv.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163uvzhytfg.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163iabugmhz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163iffvqaih.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163uxaclirc.html

fclose(f);
来源：http://www.sxryk.cn/163dokgfizy.html

[S12] C：写文件
来源：http://www.xuanzx.com/163yslvksbp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ogqmcoio.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vywcfdgy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163hledcyoz.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zxltstof.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163nwosxazw.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163umyirtrb.html

(double) a / b
来源：http://www.sxryk.cn/163gixtfsez.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163wolnlknm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163pbnzclko.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163aeqabmnj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163jlreutrc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ckdoweth.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vfoxhfgv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ffzcmxeo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ajkuwfmi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jzoloxfz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ojoqyapb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163sjjbprgf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163laytpnki.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163xqhklcbo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163tadhegkg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163aihwafyv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163klgoivau.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163nwjihyjq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qilpwmzg.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163twemniuq.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163vkazoajg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163hogjkmtn.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163otunsavg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163iprjvksd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cyqopzdv.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163btecrjkt.html


<!-- 参考信息 -->