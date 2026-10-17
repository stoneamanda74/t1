外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163sbmkexum.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163kwnwbwcb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163otqmcbpv.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163azeugruj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163vnjpnyrq.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163esumnrfp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jidonvsf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163xjjsesnl.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163nhiwsbyw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lkgaight.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163udpnqhdu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163njnuhhcr.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163koszgnon.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163fqgwoewx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163zlhbolkc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163aoaphsgx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163uxkcsbuj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163vqvjdqqy.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jxzjskwp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vsnzfkvk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ttzvefuq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xpxvsnnw.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163vpeibufk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163zxhtjccm.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163wpwuewut.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163osczoitu.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xiockvoe.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163pdmmsxsa.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ltvguwey.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163beowcvye.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163vukbrtcq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mhblcoag.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wlnuunfq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163otsaxctv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163gdqsmdbe.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163yuhssqvb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xfqsjkqm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163bbqhsyml.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163aephughr.html

================================================================================
来源：http://www.aibaodan.cn/163zkqbgwdk.html

R. Bash 专题
来源：http://www.sxryk.cn/163thivqfvq.html

================================================================================
来源：http://www.aibaodan.cn/163mfijhqje.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163lzxnwape.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163iumkpjzl.html

set -euo pipefail
来源：http://www.xuanzx.com/163cgoqlijl.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163zefwbrhd.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163gjlhrvlb.html

[R03] 只读变量
来源：http://www.xuanzx.com/163yuokacuk.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wkmcoizh.html

[R04] 位置参数
来源：http://www.sxryk.cn/163zlazrzul.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xctnbqnf.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fmrbtgku.html

name="${1:-default}"
来源：http://www.sxryk.cn/163zitbtizg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163suikbyhx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vftbapbt.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qzcytaak.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163gcsjqmwq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hkonjmiq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163unmhtzzp.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163kesyfbfn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163yxiteuvl.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mgkuupmr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ismcigmr.html

[R11] case 多分支
来源：http://www.sxryk.cn/163dgbvwjbv.html

case "$1" in
来源：http://www.sxryk.cn/163dyvepcrj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163nkebatby.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ofadxkwg.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163uvzwseyb.html

esac
来源：http://www.aibaodan.cn/163oejjdlyy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163knvblwyd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xexveawf.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163qmconsel.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jfoegafa.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ldrfrymw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163bwqlmthr.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163dinvkiba.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pxerrsvh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163udxezmax.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163wimuqhzs.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163jxaerzaq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ozkzvvzy.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ewvmuoif.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163xgiuuytm.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gjttxamx.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163rospmtwr.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163enprtcvx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163aflytrld.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zubfnoey.html

echo "${#s}"
来源：http://www.xuanzx.com/163kbkvpkhn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163rjeioqsk.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163deelbtbn.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ljdlsxxo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163stibdywy.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163gcxivhiv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ucfdqkvv.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163bnpzyuzl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hpbykjbe.html

[R26] 命令替换
来源：http://www.sxryk.cn/163jlivevsb.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163cxlujzow.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163nyrdzzpo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163toedqdnf.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mclgwfpc.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163tttppkmk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163yspwbbyr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ffksmwgv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163jmvkvosm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163yrnbrybi.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nlyydrej.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ojgdbwhf.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163dnnjdfxe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163twstupeh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jxnmdjcx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163mujbrbrn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163hocaydmo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rfdlhfal.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163azibvquw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163imfrszvn.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163igmqslrm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163sclwxlxi.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ejflmuby.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163riseizlr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163qrytuotr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163borjcumo.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163sqkwnfwm.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163stmuboct.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163qfpwlyjr.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163egnuvmts.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163isyzljky.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163pspqgxfa.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qyodtcur.html

wc -l < a.txt
来源：http://www.xuanzx.com/163aozedbok.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163hynvnubh.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163daxhiyhn.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163racbrntv.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163euiojjij.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zlynwmud.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qvjomphm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163btjcsnzz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163zgyzfuwn.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163hfkogcmr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163quwuriwy.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163cidrmmic.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163tuhhdpff.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163uruzxrdm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163xnrucpfa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163gzzvghcz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nwzbamuf.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163lzpjryvr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jewifdzb.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vtdatloa.html

wc -l a.txt
来源：http://www.xuanzx.com/163odmyziwn.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163iuraxfrg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163atmjaupf.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163zowjwydm.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163aocwaofy.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163iiedxwcg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ytoqvjnt.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nqhmhgzm.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zbyiurau.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163lppialis.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mjvoyjbp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163hzltxafe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ctfihzyo.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163agxvdiyu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ealsxfpd.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163pwbqzmcf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163naqrqvmi.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163rfvjkesz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wwjqofcc.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hasoygjw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163fmorjagb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163tfeohmiz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163sxmskqun.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163knqahbfc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163yonxegbx.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163bnnzlbif.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163edzeqovz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163swlilcvo.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163crmjbyoj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163whmkmcqs.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vayxwcnm.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rhhcvcnd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163kjhuaubq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xzjngpkk.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163lxkhvxdp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163imjszpea.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163xsiszvek.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163wkiobtrj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ujluksvy.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163nlodjezd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vxaeqcyp.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hvudwetu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tewodplc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163muzakzku.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163zxmhqmhy.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163yayskiqi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163fljnaula.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163mhpzvsff.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ghrhzoug.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163fyrlpszs.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163oxjkirog.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163nbxesxlx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163yvraksga.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fzczzjcw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ncdwaibb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dnsshcfs.html

time ./run.sh
来源：http://www.xuanzx.com/163obwunyqt.html

================================================================================
来源：http://www.xuanzx.com/163tayeqohw.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163wecjiouo.html

================================================================================
来源：http://www.xuanzx.com/163altxuwch.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vqxfqrju.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ojqqfelq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ttlskusk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163zidcxwtn.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163kzlwsvsl.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163frfnwjgp.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ipufzbzy.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163rmsilbvs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ssdzuwkd.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kfbripod.html

strlen(s)
来源：http://www.xuanzx.com/163itfgscax.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163qidhybcb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163slccjzef.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vasjspvc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163aiwvnlly.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163rhuartne.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163hfukpxsg.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qtyicpzg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wsfvjsrb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ucczmynx.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163wepzeucb.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163flfupsgm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xkayymwc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wrhewrna.html

fclose(f);
来源：http://www.xuanzx.com/163cwhkyjsi.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163fculgilr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163wgjkotnr.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jlukcdlz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ytkaticv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ubiokvwr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mifpyzzh.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163iepljtfh.html

(double) a / b
来源：http://www.aibaodan.cn/163euwylqfd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163appuuare.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lxdlqcji.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163huqgerjd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163pprtnqeu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163tqniocun.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163aauefssn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163wotcrrzn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163pxyvugcs.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wtswepef.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hpxijlto.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yhkldxqj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ajtmzepx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zkiuovtr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mtlsnvkf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qgsnbnog.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163hxaxlxhc.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163lhjmandy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163wbleftps.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163arowfido.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163pqwcaoln.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wtoecrne.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163eznxgucz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kllbuech.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163iucadqjy.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jyjbvhfe.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rhgdpipc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zxtnebsv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163uomjfsxk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163pgcohbkv.html

#ifndef X_H
来源：http://www.sxryk.cn/163indqwwqc.html

#define X_H
来源：http://www.sxryk.cn/163eezxoifw.html

#endif
来源：http://www.xuanzx.com/163jyyubyeu.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163aorrzdez.html

#include <iostream>
来源：http://www.sxryk.cn/163aczasxef.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163amcabfbv.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163inewxixf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jmtjkwbc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163swoboumy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ecjctuxg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hsmknyth.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gvxfasuj.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pnpculpa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sxnwafte.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163egbpxpxf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163uxbhzqqe.html

[S37] C++：set
来源：http://www.sxryk.cn/163hnfkfgyg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163cqgeetuj.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163adttwnbn.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fmczjxvn.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163opunqrlx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ayzvwdjo.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wcgbzixb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163leybkllh.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163pkfkvbdd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ijzxrtgl.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163kwxnhhfr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163bjymggow.html


<!-- 参考信息 -->