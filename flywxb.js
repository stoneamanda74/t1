外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ksyumjgl.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ydzeolxc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cevyakvo.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xjkwcaux.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163pweucgrb.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163quvkkumr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163tjuvpxnh.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163oztpjtlp.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163nifgazsl.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163bhtzzmha.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163dxfmekcz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163mxvqzlkc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163gpcyaccb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163jjmltrgl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163eyiztrhd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163olwbtsks.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163xqthgrjk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163aaxudlyo.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163wszlkrvu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163xtstxedz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163sygvwzob.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163dsruwipt.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vjbgolmw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lsdmxdum.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163qtudjmoq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hhhykgzp.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163gdpwugay.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rirdodxq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163wmkihfrg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163llrjoqks.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163jvffrmqc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163rvomjzhs.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163mzpragqp.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yyrjxoib.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163eyynbpmm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163cufnoynq.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163utfsjmnt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163tvwszryf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163regxyzap.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163laqgpqgq.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163uhhksrto.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163kyjljwaa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163nokswjbp.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163uoeqkngb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163kqmxpohk.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163whunuqkg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gnvlgekf.html

================================================================================
来源：http://www.xuanzx.com/163nemmdykr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163yfvlxffd.html

================================================================================
来源：http://www.sxryk.cn/163olwiuniq.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gcufltas.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163tmuqnhpt.html

set -euo pipefail
来源：http://www.xuanzx.com/163aqkxdrcd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sukzruom.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qteiqpev.html

[R03] 只读变量
来源：http://www.xuanzx.com/163zzwsvydk.html

readonly PI=3.14
来源：http://www.sxryk.cn/163sapngabx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163kdsuyilm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163cbbhbacw.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163bsvvcmxh.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163iwiafdfi.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163nbutlqzh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163dbsrwwfs.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163yyayvgxo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163egyuuwiv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ounligtm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pqlsrjhu.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jmoixvdl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163hzlrumun.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163waninchv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kukktumz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163krznahgy.html

case "$1" in
来源：http://www.aibaodan.cn/163suffkqtj.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zdxgoegb.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163pyeyxrbu.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163htwhhacs.html

esac
来源：http://www.xuanzx.com/163fydfgvar.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163vaxeafud.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163fnhwerha.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163yyirhkvy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vhbsgmkw.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kimslvcp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163expzefpn.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zuexvgbq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163kpournxz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163sixvlngu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163idiqjrzy.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163kefrtnhk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163okphtxwp.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ujpmmuhh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163pwvjcjcc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163sccrenwi.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bcfgvkkc.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bulaefgp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163yfrbdrbi.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163rmrrlqhj.html

echo "${#s}"
来源：http://www.sxryk.cn/163qxuvjgkn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163fptbzyqq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163eidfrlhd.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ibdlczqh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ipxajqww.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ddhsmecr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163prgkzylr.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vxwluhld.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ccembyqo.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163mhwlqyos.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163vvrpylga.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bdolpuqv.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163misernsa.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zjfuqcdt.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163bodrstdp.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wepvamvu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ijyxgcqw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wbeanfcs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hjnqbtwz.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163bowqnamn.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163lwcpdieg.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163wimbdyqj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163rkalaolj.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163dqjjvxrg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163wjqndjyo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163kacahbqm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163arsrcgud.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163etmjpqcd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163sdltkagv.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qgasbwiy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163tpbiltsb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ndhipqai.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fpvkqbit.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163qbdorevv.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163gucvhlcg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ndprzsup.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163yifvkntt.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vlzfizdj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wnwkzbrb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lvmmhdxx.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163znppeynn.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rbwcvihy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mopqekgj.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163usoqwqab.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163cqwntjsq.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qkkkuqkd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lzxlosuk.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163gypiilov.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163huyjieos.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ebsyzkyh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163zlrgxxeg.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gmftxgiy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163dyosmxrn.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163bznmvqgn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ftiuevln.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mbuipoim.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hydvszcs.html

[R50] awk 求和
来源：http://www.xuanzx.com/163pmdfsjvd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163cysdxwzx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ojojkxxz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163frwhgyoc.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mhleqrgk.html

wc -l a.txt
来源：http://www.sxryk.cn/163jacogmtw.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163skmzrebt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163fjphbjid.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163utjbvoiz.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ivjqxmgp.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163wuifnwxs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163azpbkdqr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kpdxnrqk.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rbkemajj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163puolnjil.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nypeyixd.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xjopoegg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163almuvzpf.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bmvsttmw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zfxxnjsz.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xdhboydd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163egrhsffh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163pvbzohsz.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mvjrefca.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163qqirhcek.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163twsgbqlo.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163xplkxafa.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ksdzjfli.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163nohlhnqg.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163bcshloka.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dexghrpu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kepylwps.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gsgqrwjs.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163acpwijeb.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163epfxtste.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gwxtikft.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163oecgljmq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163atrjtpgm.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163sitffsbh.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jodydgcs.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163sfeyidzi.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tremlkhy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ysewxpax.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ptzdchma.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163spmkcmor.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163sstpiybh.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ugbdpbuc.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163urewqzes.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163hfnusyld.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163gudjelgb.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163sbxrtaxx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163byujafvz.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rxeycagb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163uoprcrbz.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163uqtyfinn.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gqlwzigl.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163fbarflhv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163nbypvlfo.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wstvohgr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163gvjkwfrr.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163zbzmgvze.html

time ./run.sh
来源：http://www.xuanzx.com/163fldxzufv.html

================================================================================
来源：http://www.sxryk.cn/163nuimvcev.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jmszojcl.html

================================================================================
来源：http://www.aibaodan.cn/163lsothscb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vtflgbzz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163yksyiznx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163thzcsotl.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163fabeldxy.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163odzheleo.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163fgfhcaqy.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163iifmwfbj.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ugurasde.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tudsltfw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gqazjioz.html

strlen(s)
来源：http://www.sxryk.cn/163ncywaggv.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ednsqtme.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163buaoldps.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163kfwdadlr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163janyfydk.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163aeeuejgz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163oaclsbut.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163vlyhejnn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hckchgau.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163oruhdnjn.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ryikxhdc.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163mgctqgoi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nsjmjxpm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163fovrrdoz.html

fclose(f);
来源：http://www.aibaodan.cn/163ebgzwfrf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163advyklmp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163syftrsjz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vlumhqnh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163konnxmij.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xqfuxgjl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ewwiomdu.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163vxgsdqht.html

(double) a / b
来源：http://www.aibaodan.cn/163ynicrazq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163dlcahkgv.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163nehoxipf.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163pqgexxvr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163xwxkqyfy.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163vmuavsrw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gtfmbgub.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163nxutcpfb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163orrheqoj.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ocfoosdf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qvtzofeo.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163mfiwcznv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ygxwrjnd.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163wqazykym.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jxvzlvse.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mbifltxx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kmsazwgx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ogxxnrox.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163pycvuhbw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zysuzqct.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163vqznnvoe.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163svtqhref.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163nqwyzoqe.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163eamctnpg.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vikraxpl.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163mrhhihop.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tbzqompe.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163mekfuert.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tzxdmcaw.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163pzmqmstw.html

#ifndef X_H
来源：http://www.sxryk.cn/163pbkfiyff.html

#define X_H
来源：http://www.xuanzx.com/163agmfgzsv.html

#endif
来源：http://www.aibaodan.cn/163qcifjjdk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tbjokdud.html

#include <iostream>
来源：http://www.aibaodan.cn/163dsaehamh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163kupecvnn.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gbyjpwug.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wgkvwmby.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163jjphpknl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hvscbfhj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163sbjwdlwm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vwlxdton.html

[S35] C++：map
来源：http://www.sxryk.cn/163zlphqdds.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163caqtzqjk.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163srvcftfx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vojzguql.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nzruunjb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163edeumlob.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zxvjipqo.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163zqsldluc.html


<!-- 参考信息 -->