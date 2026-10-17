外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163weubqxsz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dqtzjsgt.html

[Q68] 保存点
来源：http://www.sxryk.cn/163uvsxcvdd.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163znytnoic.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163bmgxvmao.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163nsrpybiv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163otjxdgxz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163yjythwzm.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163cuumqwpx.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ulfgymdu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ralfidgw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zilnpdeo.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163yeajmcpf.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163smsyddpx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163fxomouin.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cbgclcoz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163juebdlrh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bdmccflh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163uikrvzcp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163fhakedgc.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163uhjqrrif.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163wkawgdas.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163adkpsmgd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163xwkxwyvx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ygoccpki.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ncgrsmih.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163iqpkadgk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rdfhgdok.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163mrejswvz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ydgemwsp.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163bxlqltpd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163tntqelqv.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163jkfchlez.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163myeevruf.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163yppsuees.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vkkkyhqu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163evfbmwyy.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163dlwxedhg.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gergeuwd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163glpvuoou.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gkdgrfbv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163kyutouqa.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163luhllmxs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163znhtraex.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163fmxxpecl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mvkaddva.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xmafchbc.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163mdetytzt.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ppbalnvz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163krupwrdr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163nnmrmcxz.html

================================================================================
来源：http://www.aibaodan.cn/163uygmvphj.html

R. Bash 专题
来源：http://www.sxryk.cn/163xbqinlxl.html

================================================================================
来源：http://www.xuanzx.com/163hkmapiuc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163fpgobyzi.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163rsibpkrh.html

set -euo pipefail
来源：http://www.xuanzx.com/163cngnhlxb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cqohjygv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163pazbxfps.html

[R03] 只读变量
来源：http://www.sxryk.cn/163lmxtbgzs.html

readonly PI=3.14
来源：http://www.sxryk.cn/163xxribtwk.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qeprnybb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163uzefrakl.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wyfhqytp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kuevvhkf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163zchvfxxx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163oipehsxc.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163yfawuldi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dwpcpahm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gyxpsywr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163narcerug.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163pkgpnypi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163cornsmxn.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jpkgnkrd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163guwkrxqc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163cgzppoue.html

case "$1" in
来源：http://www.xuanzx.com/163geucklbf.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mkbdcffu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tzxhtruj.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163tuttiqiu.html

esac
来源：http://www.xuanzx.com/163ffcblnjw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163szbtolhu.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163nisnyjjj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yihtntqa.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163duoypuce.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163jtuxfvvn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ipiowpex.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wofoxrpt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163brwnovzp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163opipqkpi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fuauigpu.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163zckpjxuu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163soukisjv.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163rztcutvr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163roddziub.html

[R19] 数组长度
来源：http://www.xuanzx.com/163gqlxeutq.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ghxnciab.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163otminldg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ucsrljpt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163macpspoe.html

echo "${#s}"
来源：http://www.sxryk.cn/163qaoszdlq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163syopbrnq.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163npjhjotu.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pxirkeew.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163embzihvi.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163edbqtwop.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163bjhijble.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163nzvibzaf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vwfywyel.html

[R26] 命令替换
来源：http://www.xuanzx.com/163hgzmzqlq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ecmhudre.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fzhwbzeu.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163nwcugbab.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163azyllwjf.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163owvkqzky.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163knaqazoq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wzgqygea.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qxqobvji.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163onbgdeyz.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163izhysqtd.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fcegedlx.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163nuzwjaxv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163hypujzdl.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163qsgyensl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qcswuken.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163haubcenk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fqldeadg.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vrfydrzi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163wtauvmbr.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jssuexqe.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163exxziqyy.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163irchjajc.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ybguvpxj.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163rgqcskbl.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163fnybcfcr.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ejzgcugm.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163mrdlcfoj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163cpjqqoak.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hfpitawy.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163flueltqa.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163zioqhddi.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qjentwsj.html

wc -l < a.txt
来源：http://www.sxryk.cn/163zgqbxreo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163sdxlnmxk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nweszuqi.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163dnepyqmq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163smlqubho.html

[R45] 批量删除
来源：http://www.sxryk.cn/163alrgobql.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163lgsizndk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qvtrkzvw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wiiwptqi.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163vtczzoej.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ottiweyk.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ajurobbw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163aakbtjgf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ahgvopcx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163aapjgkcy.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ipjxwmwz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163nbkofpqu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163lzzeqquv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163indrclcj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163lorwtvqv.html

wc -l a.txt
来源：http://www.sxryk.cn/163vlykwpln.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163hyvhsbkr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163vllweckt.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ekfskpij.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xqfhbqlv.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163rwlfbrzn.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163gzkyavng.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163kimdplii.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vwcvjyqa.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163nihtcuhz.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jszcqixa.html

[R58] 下载文件
来源：http://www.sxryk.cn/163omeytygn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mwhcyttp.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ziwcazkt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ewqxfntv.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163gubtghzm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163yygtnqtl.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ddgyztgm.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rytwnmvr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163psrjwtnu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zyjhdtwo.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163fcumpuxc.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hrlqvvwu.html

[R64] 结束进程
来源：http://www.xuanzx.com/163mphhdoqc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163rmwrjgss.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ucwbwktx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qsuclplu.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163bkmiokcu.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ljkijlit.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163zhzhihna.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163slqeuelb.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rkwcflpk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163khymstae.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163hvhhbesk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163cyqtuelx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163qemgpmug.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163splradim.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163qlelwkfb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163fnvwhwxg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163syirwwqh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163vasisiro.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163expsxpqy.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163qmqipnuv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dyzorgvz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ydeenjft.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163pcgadbht.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163smwteeno.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gbfcorbj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ybapcqzo.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163gvziaxmq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163iftokgyh.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163vyhoutya.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163xmejacak.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gdlwzxve.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163gsmmmzra.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jbzjllym.html

time ./run.sh
来源：http://www.xuanzx.com/163yzkawyvd.html

================================================================================
来源：http://www.xuanzx.com/163ftovdqlb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163bhbpgaiy.html

================================================================================
来源：http://www.sxryk.cn/163kmffmapb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163lzksqtho.html

#include <stdio.h>
来源：http://www.xuanzx.com/163knjjyglc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ofbdstpp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163uwhuwsxg.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163nhstzgsy.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ebwftwfm.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163zlmkasyn.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ymohasav.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ithrvpmq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163jtabuutb.html

strlen(s)
来源：http://www.xuanzx.com/163vveyqopo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163nuggizfd.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163rntorwke.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163svolhrsi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163awsiwaiv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163daqeilbt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163pfljukwb.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cdscvkeh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ndicsbgu.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lxkmwnlc.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163sfpmdhqj.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163mjojnbyq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163deeqzqha.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163gxowgpig.html

fclose(f);
来源：http://www.xuanzx.com/163nibbvhor.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163iqqigwtn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qoaihkkh.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163nzxqwnzx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kdvbadjo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gyarjkat.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163etfmdmyp.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jigtbsrk.html

(double) a / b
来源：http://www.xuanzx.com/163qrzqfyuw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163nwnklvpm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163rqqrmzww.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163yghpwuml.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163neadzlyx.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163txmgdixo.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163jsbeubpg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163dbuxhtan.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zijdpecg.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163bchquqov.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xnrikewl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163gaucaact.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qrvvwlvi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163hvvsoecz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vdvedrgy.html

[S23] C：随机数
来源：http://www.sxryk.cn/163nidihjvq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wsnwsdgz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163slgdjpdg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163nuupjtnb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163kxkgkddj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163sapjakei.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163mekpytkg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163komaoxcd.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qlplrqjp.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163aazhrplj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qcaofoyv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163zktbxigk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pgwpjzzq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163cpirozer.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163pbxzlsol.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ysvvsthi.html

#define X_H
来源：http://www.sxryk.cn/163xaxddkwq.html

#endif
来源：http://www.xuanzx.com/163evhvjvip.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zckaepaf.html

#include <iostream>
来源：http://www.sxryk.cn/163rwluqyqu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mtfrxkzv.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mqpdgdus.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ublgslnm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163alzbfzht.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163viiffcku.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163aemnfqbd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hmtpgetn.html

[S35] C++：map
来源：http://www.xuanzx.com/163yojnkrim.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163goksbrni.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163klbtgzcs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qwavrlti.html


<!-- 参考信息 -->