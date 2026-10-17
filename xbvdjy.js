外链999!wailian999！

[Q65] 回滚事务
来源：http://www.xuanzx.com/163xboihoni.html

ROLLBACK;
来源：http://www.aibaodan.cn/163igrgbckv.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163rcsgdmbn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163szoxvepx.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163mrsshncm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163yphdwpxb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163gtyiekce.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163whbjtuct.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163eyknwmyr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mjqrbaln.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ggpgcbfb.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163hgqeoyhz.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163bfhjneiy.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jkibypsc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163oqgyavlk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xgttawvz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163zijxhhkk.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163louzuudp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qjalqkrg.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163smpkqylb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nfiznozn.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163xeiaxbpv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163yokcexya.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163vybstkjq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163rbusttpd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163fbaiypnu.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jbkfglsn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jwjaihls.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qlsyxaqm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163yejxhnfz.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163czvwhtzc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ybziqwvg.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zmtfbgsh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163rldgrwib.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lkwnepyc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163darfboso.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163lrloaods.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163siynjsvd.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tzaxicin.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163vqmabhnk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jhvmnorn.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ickmpqkd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ywnknjck.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dqlvstne.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163dwqyymay.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163oqobewrc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163rssbrfrx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vgmbowqe.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163hmwqvhdc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xkfcdpqb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163mrufsoeh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zqhwqpfp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163gbbolvnd.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163yfmmtzns.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ujjkjykh.html

================================================================================
来源：http://www.sxryk.cn/163njzdgbbg.html

R. Bash 专题
来源：http://www.xuanzx.com/163yiucjewn.html

================================================================================
来源：http://www.xuanzx.com/163fqvpvgbv.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qpyrpmwg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163vojuucug.html

set -euo pipefail
来源：http://www.xuanzx.com/163nflqvejg.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163tbhodrdg.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163mwudgjdu.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tovoqsts.html

readonly PI=3.14
来源：http://www.sxryk.cn/163othhkprm.html

[R04] 位置参数
来源：http://www.xuanzx.com/163uclqldfg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ljspukpk.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ebdqrrsc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163rwmeibrn.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sbghrnlm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163hbmsrmmh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163yyrvrdnz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jllsemqc.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163dnvjcmar.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gdytmknr.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vaatxwsg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mtfvycet.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163qijfzxfi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163qaudjnop.html

[R11] case 多分支
来源：http://www.sxryk.cn/163oanygglp.html

case "$1" in
来源：http://www.aibaodan.cn/163jpgozajo.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163rtzbhlyz.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163casviebd.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163upidzimh.html

esac
来源：http://www.aibaodan.cn/163pvoeyzqs.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163eouvlyhf.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zjjzuvzh.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ixjilmxl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163csasvbql.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163rbryizcg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163rqimennx.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ldxbiwqk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vcfohyib.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163wqmfthdy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163tdcdflwr.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jkucqomq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163iotkmxnp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163thpydmdy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kqtulhgi.html

[R19] 数组长度
来源：http://www.xuanzx.com/163qpommcsy.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vsgqvnfk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163itpslhai.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163omzucdlk.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163uqxupojh.html

echo "${#s}"
来源：http://www.sxryk.cn/163anlvfhbd.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wqgfodhb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163bqfkmpmf.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163gywtstav.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rxsghomu.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163cmqzcmqv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ikxwefli.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163xzrtftnx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163viihccud.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ibvzhmky.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163aevqqbnk.html

[R27] 算术展开
来源：http://www.sxryk.cn/163hoqceycn.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163yewgzemg.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163vdxyuqff.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163xdqzgsvv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163umhujruc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hgcrgkfu.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ydwjjjxb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jvuwpaol.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ukfccynh.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ovthbwym.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163mwxhigqe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163logiepne.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163qzcgqbpa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163yrqnmpjy.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163lyjncgwz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zgsiymgw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163duelrhzm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163idvfdvfl.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qjmdmkty.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163lzeoudxc.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ryqxrtte.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163utkbnnyr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kglaxzjo.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163voglolpr.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163azuhqoxo.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ixrhwiqs.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163egtzlang.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vzcvihxn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163iurkwajj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rftvvlac.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mddknchn.html

wc -l < a.txt
来源：http://www.xuanzx.com/163adirtqhf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163hvimrgeo.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ruszkgea.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163lbkcufsk.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uzvkujov.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163gdltxzuv.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vabsawdb.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163iukqoait.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163frpwbmam.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163yxrdwjcu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163gyrmmjqw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fuzhefcz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163donqgjcp.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qzkysmwf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163jgqguvuh.html

[R50] awk 求和
来源：http://www.xuanzx.com/163terngjno.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hbrhhslq.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163bhisnuwr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163azfqnxlz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ztpbvhfj.html

wc -l a.txt
来源：http://www.sxryk.cn/163stsuilyc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163abqizhki.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163uhluvbfl.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ndorvzsn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163tgrypbmp.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163mxfyawzr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163tguzzkmf.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163yjfzbapo.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163nrejuzku.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163uwolaoxt.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163uuouycyz.html

[R58] 下载文件
来源：http://www.xuanzx.com/163jthbwffg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163bumfwnun.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163kgorkkys.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163mzoqpquv.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163detgwtlv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163gqmvdjoh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163cwfducsq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163nbqsuvhs.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163slqvhgkr.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163cxfnbpeh.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163vvjucczq.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163llngpghw.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tibcksni.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163snkbqhjv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ssxkqnhu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163tqmtxhau.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163iliskizj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163smqjywns.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163tdjlyieb.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qzrizbgb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wyfyrlsj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163kzoxpdhu.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163bjuppngn.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ymuyxbda.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163matixkib.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rtayrepf.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163boyarqed.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163sfmantyy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163hqqsdwmt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163whjguadw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163sjrqueei.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163asjhldkf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163vljkmpes.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163aggheuld.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ppzihocx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ijchsfzc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ztdyaaju.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bnjqkxqr.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ozigmghn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yiummnav.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163msawppzb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fjcuuzrv.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163yfoozrak.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163posfgcdu.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vyggvhta.html

time ./run.sh
来源：http://www.sxryk.cn/163efrmepqk.html

================================================================================
来源：http://www.aibaodan.cn/163duseaozc.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yuikwfom.html

================================================================================
来源：http://www.aibaodan.cn/163btqqulzv.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zttzvppu.html

#include <stdio.h>
来源：http://www.xuanzx.com/163cjdokubm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163kwwnfhbe.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163hybmwpfe.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163tsyriozl.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ebwwwsuq.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163oreutbve.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ylaovmpx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wvawmbta.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kilrlkyu.html

strlen(s)
来源：http://www.aibaodan.cn/163ttejmcnc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163xfhsvlnw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163mkdpffzd.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ivstfhjt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mxcdzwnf.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xrojfuzf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163lcinjifp.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163fxxhhaxi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163bkohnfpc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mhvzapra.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qpizpqdx.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163aencxyyw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ooxixjyd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163pnvibwst.html

fclose(f);
来源：http://www.sxryk.cn/163ebtqevuj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163gpococcu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163nsgbhzhb.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rnyekcxh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163juxfjqsb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163phdvklic.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163iykekzjc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163gkcqttoc.html

(double) a / b
来源：http://www.sxryk.cn/163aznujahk.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163eevbnubv.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163uvbjhhrw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163zxkxxila.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ptkcvzho.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163tzvnrzkm.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163admkwllt.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163pyjkdtkp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rirfympc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163irpszrwc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jdthmdhb.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zfhbhvdq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jxkflrwm.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163novxedds.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kngqrcxh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163tfhqojsk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ffjyeelf.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163fppmcwby.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mhxlfhai.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qejgplum.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163npjsnxbs.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163taptxmry.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vrmmswol.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163jqoyyntj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ywmhdqry.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163mijxitsi.html

static int counter = 0;
来源：http://www.aibaodan.cn/163vhwxbvbn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ooiynwmn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163izfgoqzu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163varrccxq.html

#ifndef X_H
来源：http://www.xuanzx.com/163hrbsijol.html

#define X_H
来源：http://www.xuanzx.com/163ghkewxqw.html

#endif
来源：http://www.xuanzx.com/163phatldsq.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qwzcxxfg.html

#include <iostream>
来源：http://www.sxryk.cn/163ruosresf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dajofiep.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gphuucld.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163roeenspq.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qhgifkyx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163dtaukgzx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163slytzxnw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163wwawiivm.html


<!-- 参考信息 -->