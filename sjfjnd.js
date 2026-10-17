外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163pbktpytn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gfmtfact.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vasgfcjf.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163nvyrmsne.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163upxkbust.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163agtrgdyh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lqlygpfz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163zjwzxmqk.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zlmqotdj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163nwocprqb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gtcqklza.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ecklivhy.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163lsfvxubv.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163wybphcyx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163fdxesdda.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163hwookvun.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163wbxdbsny.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163oxxjocih.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163jdtifbjz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163lqvohgih.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163xjoifqto.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ukbfxmyw.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163jzzrskag.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163uhdttcjj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163pixicjjr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jtqvjjzl.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163uqbdkzmu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163aytpynev.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163uafzdtzk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tpdqcowb.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hvqqdkji.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fkxgmosk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163maliyffi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163avahtvhe.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163fkhktxmn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163didejvrw.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163qsidyaxs.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163iqymzndl.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gafocewo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163isdxwwob.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163pparulka.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163khtmkkat.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163jgkjaivs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163eldmjbmw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vioznptc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kqqokbku.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163adcfkjfb.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jwsvrqbk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163iokqgkab.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163smdcubul.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163zjyfrhkk.html

================================================================================
来源：http://www.aibaodan.cn/163mbqfgjin.html

R. Bash 专题
来源：http://www.aibaodan.cn/163gyqouiyh.html

================================================================================
来源：http://www.aibaodan.cn/163liliszdy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163xjjkosxk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163quedrftu.html

set -euo pipefail
来源：http://www.xuanzx.com/163iwwpbdpn.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163yozqsrqi.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163gdyfyivb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163cqcuqlmw.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xklmtueu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jpxymjda.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163cxmmivzv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163zqvwzbqv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163lrvnpfrx.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163inxtrzbc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163sduspsgr.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163hhaxclti.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163raghlppt.html

[R08] 数值比较
来源：http://www.sxryk.cn/163dvppnkjs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jgfjaljv.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163sygzhdgy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163qpkvkekc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ybyyfdkn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163vxepneni.html

[R11] case 多分支
来源：http://www.xuanzx.com/163icizpyzc.html

case "$1" in
来源：http://www.xuanzx.com/163nzvdvsqp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wpeqgtyw.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163qdhlnmtg.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163laniubxo.html

esac
来源：http://www.sxryk.cn/163mzemmsrv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vlrbqmqr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163okrvaqxd.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bqkqmskh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163tcarlvvx.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163anprcwkd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qspjwarj.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163caurgxjb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wgeflaeh.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vrflfuwa.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rjitjbfo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163lzpvudgc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163pqtgsbxr.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zecrhwmg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163dldomufl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hndshgec.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163bxmcxret.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163oesmpsjz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ymugtdts.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163oaeuclvk.html

echo "${#s}"
来源：http://www.xuanzx.com/163jxnfnmac.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wtypfjjb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163igzogtvn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163aujkmzui.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163lrmxrtff.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163wfaapmsu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163rcbyzjvw.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163rcfaortg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163gwqpnjnq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ibcvrokf.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163umyicjfb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163mvcntzot.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lwkbhwzt.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ejyllquv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163cczftaot.html

[R29] 定义函数
来源：http://www.xuanzx.com/163pylpodkw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163jhyobzik.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163lsworzif.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163lqqwaddz.html

[R31] 局部变量
来源：http://www.xuanzx.com/163tzsesqkz.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ccojajtg.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ekoqrgwp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ahllqwed.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163aogzhute.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163chnuceko.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163niprncoc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zafumzck.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163dujvmhdr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163rpwtqgnf.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163hnqzhgcv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163faxovpop.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fteykvwr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163jrjgrfad.html

[R38] 管道串联
来源：http://www.sxryk.cn/163sissmozo.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163olorqivb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163wvazwlpu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163mqdmajje.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wckxzmor.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lramqtod.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gbvbscrz.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ccgtlpnz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bbapdbrt.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dcsxmjdf.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163asfvlvqa.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hguqvgtr.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163krwiyysa.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jxlbfzbr.html

[R45] 批量删除
来源：http://www.xuanzx.com/163faigigwc.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163rurusjjo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163egwezwtl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163gdptstai.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tyejxsxg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163tuxitjyw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ujcllmrx.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163vgstbtjb.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163jgjhmxld.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163nhuyjjzi.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wabjmavm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163udbkydhe.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vkcjdozn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163xvvwcqpy.html

[R52] 统计行数
来源：http://www.sxryk.cn/163xzojjhlj.html

wc -l a.txt
来源：http://www.sxryk.cn/163iglxpqov.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163vvdkoixg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163fulajjka.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163audsjgfo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qnukbmgf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rovycqdv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163cxnxrfcb.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163xuparrks.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163boabmclk.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163grtefefy.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163tgijmlbq.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163pztbuocw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qmmybdcs.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xuhrktgx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163mpjnhazi.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163vadncplc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fdhzcofp.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163dgnildjx.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wvxeuzlj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ftspsebj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163gthdhpae.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tahdtzrv.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163yoocogyr.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qbymmkms.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qqmnzcgk.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163mcaibgxv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163xapyaoij.html

[R66] 定时任务
来源：http://www.xuanzx.com/163uslxarvi.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rikefkig.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163kkociyig.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163pozpdhmb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163kjamnspt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163nlwafxyp.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pemqdtub.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163zrotaiwn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vfvktiyf.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qnvwmhsm.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163enrenkth.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163tdhbcabq.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163nlowsfka.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dblvokjc.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ubwkcksf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163btfoiaxr.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xzmhlryh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ivrlyahl.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163uporpmhv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163vewpijvv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163bppqjvfn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vayitlco.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tvthzqij.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163qilhhwkx.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mdqbwcdk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163diqbfrcg.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fhesubmh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163rhpaljvy.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xioifbts.html

time ./run.sh
来源：http://www.xuanzx.com/163mpwppgbm.html

================================================================================
来源：http://www.aibaodan.cn/163yuwlwtqx.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163jhgiuovc.html

================================================================================
来源：http://www.sxryk.cn/163lbnoiwil.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163fcjiiwko.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163kwxlyxwa.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gnzipbrv.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wvjsywqr.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yuxhnhua.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163uzrbbqmb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163bfowywfl.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163kumhqmtd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163gfqvwlpn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rxybfpoq.html

strlen(s)
来源：http://www.aibaodan.cn/163pvkkugrb.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163prnlqflo.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163wguezivm.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163tyjspqml.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zbqxykuf.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163romuyksl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hvoprwys.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qpqusdnr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163jffqacqh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163nehzonep.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163crhhlvvq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163pxtpbiys.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163dqthrejp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163wztiotdj.html

fclose(f);
来源：http://www.xuanzx.com/163vjbbyniv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163uaerdsyb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ntnmsulf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ptnbyymz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163gebvqyqt.html

[S14] C：枚举
来源：http://www.sxryk.cn/163bwcejlbr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163tlxmrobh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ynxefzlz.html

(double) a / b
来源：http://www.xuanzx.com/163wueeklpp.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163tbeuosyt.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163sdleqvxe.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hrnpxcnh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163yswrpbkq.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163drwedjlq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163sfxhddoj.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dhwjzxer.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163twqgcowm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163jwpaisbe.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163noinxcnd.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163lpknjytd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dxvppurf.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163etobbivt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163akgakigt.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hhopsqbg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163dryybbcy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163rcjlkrov.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nhuivsmx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mjecosyb.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163evobuano.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163demhmeej.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163pvwtlcqz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tlolxymq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zsgcgzsg.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163lidjlysb.html

static int counter = 0;
来源：http://www.xuanzx.com/163rquzwawq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163kwgzeedq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ttfnkaip.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vphiskqj.html

#ifndef X_H
来源：http://www.sxryk.cn/163xvnlpxnj.html

#define X_H
来源：http://www.aibaodan.cn/163zgaehipl.html

#endif
来源：http://www.aibaodan.cn/163ccuyskzl.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xigxcvab.html

#include <iostream>
来源：http://www.sxryk.cn/163qehkdyaf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jptkwlum.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163rprxafsr.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163klbahetd.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wwrdtujp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ibogajal.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163vtxapyqq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163grnqjqnv.html

[S35] C++：map
来源：http://www.xuanzx.com/163mxkuffin.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tfmxpney.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gkwuafmy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wbouzrgz.html


<!-- 参考信息 -->