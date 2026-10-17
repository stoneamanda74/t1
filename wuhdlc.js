外链999!wailian999！

[Q65] 回滚事务
来源：http://www.sxryk.cn/163moqrjlgd.html

ROLLBACK;
来源：http://www.xuanzx.com/163iohemper.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163nxgakkot.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163djqlqvpf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ojveyyhc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163uzrwbdnn.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vukfgrxf.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163bmkcpuyn.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163wwtxtadj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163khkrgpnx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ybonlgld.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163fiodqoqn.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fpcvnoan.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163vkjzxdxb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163fwfkqsms.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dejburrb.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163mgqspxrm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wshfgfmu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163vqoowswc.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163gfgrcqdp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163kbmqkihn.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pfixhfsw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163nnldxknw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163qefyzrmq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163keomkntm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163fmokgexn.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163rcxbaapd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fzvyuslp.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163lqyoakmg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163cvkwtppy.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163arrpaqvh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163capjhemi.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163qnlkienq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163dfwccdxs.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163skudttqo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163qoodggaa.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163evevniay.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163rmkuubsp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163mrokuxgz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163inqkainr.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163paaligtn.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163fqgznsow.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163qzuohlsx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tbvvywri.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163naekuluq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163mhjsvzrg.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nmliauoe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163tqwngplk.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ifhqbxqq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qzubyuoc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zefrulqg.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163pfnqfspc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ityqgrtd.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163nkyyryca.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163suqogvqf.html

================================================================================
来源：http://www.aibaodan.cn/163mzlggiwr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163hegqfbbd.html

================================================================================
来源：http://www.aibaodan.cn/163ubaxlrfa.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ungrpoce.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163neebeqvs.html

set -euo pipefail
来源：http://www.aibaodan.cn/163rovlalnq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xudrpugq.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163uvwklvlf.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163mzapcezm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163uamljfjn.html

[R04] 位置参数
来源：http://www.xuanzx.com/163yurfpjbp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gpbygfhe.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163nponemba.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mtpkjtul.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163zrgfbjfi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163huakgdkp.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163svwztdhu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163dqintumh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bccrijhp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zzgzopho.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163kievhhoy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ljbcyojy.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163hpqajerz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163harhatcy.html

[R11] case 多分支
来源：http://www.xuanzx.com/163wqhiccxh.html

case "$1" in
来源：http://www.xuanzx.com/163alymlkfp.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bdfvxesb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163qnclvham.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163bkihgirz.html

esac
来源：http://www.aibaodan.cn/163sdkkxkgv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163paabacvc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163fgtxmbkl.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fhnwdqsq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163zlphlotd.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163bbcvtbiy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163hntetair.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163iumkfcnc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rexwpbnq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163cuokzmvh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163dsstipch.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163nqxcgxdq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163bvkpplui.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163uvqjsocq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163wixxznod.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163mkynyprh.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163vkzktwag.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163iaqeafns.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163efkrcbro.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163dbpwgqks.html

echo "${#s}"
来源：http://www.sxryk.cn/163egudfcue.html

[R22] 截取子串
来源：http://www.sxryk.cn/163tqvmqzpp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163wexusquk.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163aphyxrdh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163mbbruyuw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rzaldktq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163adipyegs.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ftugymdw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xgzuevwz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bskddhxs.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lpgcnuuc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163xefmjejk.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bvnzkria.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163xdsgqqzj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gqvlufyz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jcjdodjj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ysznjoly.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qdeyuvrp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tohuqjuk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163jutcqpqs.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163sotaaknp.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ikbpomde.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163chphfhpd.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jrmngrzv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163hpxbptit.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163rltgktsn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lmcksnop.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qkbbvbbx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163exijsagj.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ymmjjxmu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163creemole.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163xzveehay.html

files=$(ls -1)
来源：http://www.sxryk.cn/163papeysjm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163enlkqqzt.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ugmhlrzr.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163uodbtxsy.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xgkhykpr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163avhjcfsh.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163lwccdbak.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163iauvygjq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163dsvqcrkh.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163eyjbujxv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163hqkgcveo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163utbvofwa.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163gmbtrrmc.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163yoifefga.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163brgjgxln.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nyrekjzo.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163affifqhh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163eyraiwef.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163sjivysbu.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163wfruomug.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163woaffaeg.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ppkisjbz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163fgmsvfgl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ghyxpqcq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vjrpzksa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163jqjrnyni.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kqlecygw.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163jywhazab.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163xlrfzdpw.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163oyzyikeb.html

wc -l a.txt
来源：http://www.xuanzx.com/163dcfaccqc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163nrcaadxf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163skdebiih.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tfprgyhw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jdlozeyo.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163zqobusuf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vjhbzyft.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rlckklxe.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163tiwnumsh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163swjaaidp.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nyuhiuak.html

[R58] 下载文件
来源：http://www.xuanzx.com/163cevyspxl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163occrjsig.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163dfxnesug.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163gsprvxyp.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163riwqaopm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163cecyhnpc.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163qbnvfjze.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ceofchrk.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163vdmcfpoo.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163sshmftvq.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163xkkisokw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xkbiwqou.html

[R64] 结束进程
来源：http://www.xuanzx.com/163yxrzqiiv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163vnfpqjgs.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163xspgjsuk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163stgjxmzn.html

[R66] 定时任务
来源：http://www.sxryk.cn/163bzepyuzs.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bujncuox.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hiknzcqh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163xefdntnk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163gctjijda.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xtvfxeee.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163uzwvohhh.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163dznyglhh.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163dpazeded.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163szleznla.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163jteiuzhw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163oocwsnyf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163efnxcujg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qubxphfe.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rhbcokkk.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hrorzviz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163mpqksgeq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163uaznfxed.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163unszpqyp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163wfzoauvz.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163dbpafmvf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bobislll.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163thlofowa.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rwfvuzul.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wcvelvac.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163bdqsltfg.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xnlgixdn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163dohnfhge.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163wtjpwwes.html

time ./run.sh
来源：http://www.aibaodan.cn/163yrfuerzj.html

================================================================================
来源：http://www.sxryk.cn/163dhuilqjo.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qvfxkdae.html

================================================================================
来源：http://www.xuanzx.com/163fupmpwpi.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163zlnsuzco.html

#include <stdio.h>
来源：http://www.xuanzx.com/163gxozpdnv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163yrrdjwzj.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163onzcivlr.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163kacpgvvw.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163pogwwabe.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163umnratkm.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163fmskoaxv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163nzwbgioy.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163pcyqwkaq.html

strlen(s)
来源：http://www.sxryk.cn/163idxsoykc.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163wqbegoeh.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163afvavifh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qxhupiuj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163orxonppl.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163cpwajixs.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163exyxtayh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163vazczgqz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jtlzvvyd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163gfjaluxz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163csytdagf.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163azcatukl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163uajrijts.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163riutljbg.html

fclose(f);
来源：http://www.aibaodan.cn/163myoidkqv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ssuxnnwg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163abbpwyrt.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163qgromghr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ifftclhk.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ynnswmev.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163nqupdthn.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ankalxgb.html

(double) a / b
来源：http://www.sxryk.cn/163jlbhnsxy.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jilxyanv.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rjlszeyc.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163eagleild.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163enuyrjvr.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qbfwdtpq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163jaokfhiu.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fxlnrbhj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bajgkctx.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hlqyhucn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rqullhwz.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ujbvwcqd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163htfusrqp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163huefgnts.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163srhzrovn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163pbrmqgfm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qjepoadc.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rpruxngf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163nbollork.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bylwmhnq.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ujilalvv.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163gquttmvy.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163naxbwhex.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163dxtjfcen.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163elmagvrn.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163puhnvyhe.html

static int counter = 0;
来源：http://www.aibaodan.cn/163acmiflhe.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163nqciafvn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163qpfbkymg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163aopevszw.html

#ifndef X_H
来源：http://www.aibaodan.cn/163lrgiqkio.html

#define X_H
来源：http://www.sxryk.cn/163ivwmpzya.html

#endif
来源：http://www.xuanzx.com/163zouqsnuv.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163pmmoftor.html

#include <iostream>
来源：http://www.xuanzx.com/163tiyedzjj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ohxzdtrw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163pmkajwan.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163zwfsypwt.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163vzniqtzy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163tgyjsozc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163acujnnec.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163airaqvrz.html


<!-- 参考信息 -->