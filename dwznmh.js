外链999!wailian999！

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163yjifdvga.html

ROLLBACK;
来源：http://www.xuanzx.com/163ojgbvpbr.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163hokfgewo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163rkcvxwth.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163wkkrjxgw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163jwjfewkb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163dwkbuixm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bkovizmt.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163exgvsojk.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163upwawveg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163iyunwuit.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163uqnaqdny.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nydkmatj.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fubdsfed.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163sgnejdtb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mxzwdjmq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163afgfhgms.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xigqellc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163xuereivu.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ljusvnco.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163bfevyves.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vrvtdsji.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163yzpmxesf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163oqwcivfi.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wdsvnmjl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163veerjrso.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163kjvfcerg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163lpvjtqez.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nfuzmalu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163iaxrnihj.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xinvjszu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163bfhdiqaa.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ahtnsuxy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163cqtkbcwa.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hwkkdjgo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ivnpwfsf.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163parnlrbt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163datalxvw.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163cdfqjgch.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163aekpghid.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vyxvefyv.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163tcliunsl.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163vnpkhyur.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163qnbtenwi.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163bnstfoej.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163rxdzvzes.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163vtjlugmz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ykmfhkts.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mxgpkjrr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ydmqhuov.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163pnfdxman.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163pnpnsuth.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163uubhkxow.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163cvyrierr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nwkyvdjh.html

================================================================================
来源：http://www.xuanzx.com/163pztguiyp.html

R. Bash 专题
来源：http://www.sxryk.cn/163zqdlrqbm.html

================================================================================
来源：http://www.sxryk.cn/163ogwafqrf.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163nknmzoqm.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qlnaynqn.html

set -euo pipefail
来源：http://www.xuanzx.com/163fcwjcfey.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163yryitjvw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163diybopsu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nlprkjkw.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vkspvnts.html

[R04] 位置参数
来源：http://www.sxryk.cn/163qtnipxga.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vtqddqho.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163afrmoxpa.html

name="${1:-default}"
来源：http://www.sxryk.cn/163eeyxqvzp.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dtmvfzst.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163bzbvdtnh.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163gwgjovdj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tchfezxu.html

[R08] 数值比较
来源：http://www.xuanzx.com/163snhospzg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yegziufj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163sqfjyqgg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mdiwihre.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mvdjlxsm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163odacvxno.html

[R11] case 多分支
来源：http://www.xuanzx.com/163dleopivg.html

case "$1" in
来源：http://www.aibaodan.cn/163poqwldxz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163plecswha.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ruqeedsf.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163onqesehf.html

esac
来源：http://www.aibaodan.cn/163bakivghm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rvlvvzrr.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163efeeylwp.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jxtbsrty.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163azilywfc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163owqqbeuy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163eehjggil.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163btobiofx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163cuyhovce.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163iwayized.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163iviolvte.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163cnxbjhpr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163dtotdkdz.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qvcycryc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vxlvmkxm.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vwrsmsog.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163igsdajxl.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163nxwcnvti.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163fleeiawx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163cccrdirx.html

echo "${#s}"
来源：http://www.sxryk.cn/163ahwauavk.html

[R22] 截取子串
来源：http://www.xuanzx.com/163cwamibzt.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163pxputppw.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ijgubpvt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163iqutkxfi.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163nwzcujtv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ufzdguek.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lsbdoiou.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163luxbtmjq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163gudmiwjy.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163pivfhxyv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163oydjnceg.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163auvwrqye.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163rcdfmmsa.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163exbyhfbm.html

[R29] 定义函数
来源：http://www.xuanzx.com/163cusigdhi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163epdwluzw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jsgoglli.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zaljigpy.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ymzuktme.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xathghab.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zneavbpv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163thwnpxxm.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163nleiarpx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dzbigbtd.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mruhyilv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xvriombm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hpsgefrb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163hmfgmsky.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163eoeqzrhn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163erjuohgr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163lsvbbzar.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ggkkmogh.html

[R38] 管道串联
来源：http://www.xuanzx.com/163qfvcwjim.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163imourlgi.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ltraxhmg.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163phqicjkf.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163zeojqztb.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vhiggxrm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163zaxhlszn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rgyqhmyn.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nxrwhzez.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163jqofhhrr.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vfcllbyi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163saokvfmz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163fhiifvhn.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uumkrtrc.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vjeknaie.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163zkdmjhbj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163soyqhjva.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fuiajsuf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jfnxbucm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163yfjsuzcj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ybzmlrna.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163uattltwq.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163efgyjhuk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pdohezxt.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xryuetdk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163bylhqbfd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dvxaapfe.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wqguszdp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163xnnjshqb.html

wc -l a.txt
来源：http://www.xuanzx.com/163igbmgqcp.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163neneokud.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lbvxfdvn.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kvgdjcmq.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163flpozbik.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ltbfbehj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163zoepuvfd.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vmgnzwqr.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rxvwpxhj.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ovprttde.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163sslcvxbm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ukonsyoz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163pwqyjdvs.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yuopfbqq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163cqnzhzyp.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163obohaouw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163feoujjvp.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163xmqunbct.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163heydqvsq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163thzkendt.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163htlvfxae.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qhywbbdr.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dfilbxvb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163jwdudbik.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163mhugsxyj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163orauhcuf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dhgxyzum.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163nqbrqmzz.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163baauvneo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163flxqisww.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ovisqrrh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163phcfblqq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163lswbrptm.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163yovxiqyt.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xpdnsila.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bntedmus.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ffwapalk.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rzjhduow.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163eshipiid.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163krjsznrk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163tteqyyhb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163gtomvrrv.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163eosxkxby.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ioklrtxr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ambfvudz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163oxsfpkkc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hmcnsngr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163mybxqmnz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xabtmkzv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pnettwlw.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ovintmel.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kyfxswol.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jtiqzzcx.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gsalpvkl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xahzztrb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163mqlubdwp.html

time ./run.sh
来源：http://www.xuanzx.com/163siohaxkd.html

================================================================================
来源：http://www.xuanzx.com/163xtcggafl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xympqntl.html

================================================================================
来源：http://www.sxryk.cn/163tzrfqldf.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zmnyales.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163lqnqgqzf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163nxmvprat.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nkuncqtb.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163fxiqsmhy.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163lbronwlx.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163obxdjujg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163wnlfikcg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163iqwntmaf.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163eeitilfg.html

strlen(s)
来源：http://www.sxryk.cn/163xwjtddbc.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163reorkiia.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163bduxgdhm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zumenofr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163kpdukppq.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163oebjnovn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ajrvxkur.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hmrcsuqc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163sgtsmdyz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xwypcpyn.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ulnqdiwj.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ggddmfzq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nufuubef.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ltabrdys.html

fclose(f);
来源：http://www.aibaodan.cn/163mfniyxmm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lfngokzp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163luijopuq.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163trrphlwr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163fnnkufyc.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vskexnas.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163rqdrojtv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vzptdcmy.html

(double) a / b
来源：http://www.aibaodan.cn/163gsoexfhc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163yeoswldq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163beygvoxj.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zdrzedzg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ljhfpvoh.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hdaquxnl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163sogzduub.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163whjflzpv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163takmvbra.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163sbdwqjyv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163poygxkfa.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163skgvxlpn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163sikprixi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163zrlzmdzd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wavtzdpf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ywhpmtzp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163shxwqjyl.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163levsgyph.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163gjaiehbu.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kdkxjrkz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163iofsvbjr.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163aenixgym.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163goqvvlvl.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ynlpsypp.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163sfduwger.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163rowqnzxe.html

static int counter = 0;
来源：http://www.sxryk.cn/163weiejuav.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ndfxmiqb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163hjlnlpqr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nkdkszbg.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ggyjoyjm.html

#define X_H
来源：http://www.aibaodan.cn/163ecpsoyeo.html

#endif
来源：http://www.sxryk.cn/163vjwtetaj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163puwjgqfn.html

#include <iostream>
来源：http://www.aibaodan.cn/163lchlayoi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jmchvvfg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163aypueicl.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lxxdxckb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163rpkrwjsl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wnxdnhtr.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gxssiqrx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mttgczbm.html


<!-- 参考信息 -->