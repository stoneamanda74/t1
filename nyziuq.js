外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163fymaffyd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163bcbzqpow.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xywbdwtq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163tmcqbsih.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163pcohgdxf.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163fpvykrax.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ujtflkqb.html

================================================================================
来源：http://www.aibaodan.cn/163qrsglyfl.html

R. Bash 专题
来源：http://www.sxryk.cn/163ercsoeqv.html

================================================================================
来源：http://www.aibaodan.cn/163ugjxwfij.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163iijeiooc.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163dwuibffh.html

set -euo pipefail
来源：http://www.sxryk.cn/163idbuvmts.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wlllalhn.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ftvvteif.html

[R03] 只读变量
来源：http://www.xuanzx.com/163jhnutdti.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gpsfwuvy.html

[R04] 位置参数
来源：http://www.sxryk.cn/163fgpbehhe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163eelhrfxh.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163sfgshwpj.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163muldutqs.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ukqrgvyp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fuizylgz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dqcoepzn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163jpwnmnxb.html

[R08] 数值比较
来源：http://www.sxryk.cn/163gibsijzd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163utrxvuml.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163pxiodcop.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163klpvdzve.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163iwesjfki.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163cuvalxfx.html

[R11] case 多分支
来源：http://www.xuanzx.com/163fqajzqit.html

case "$1" in
来源：http://www.aibaodan.cn/163adugcnkp.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163pisulcgk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163kuaetyby.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hnlubxnz.html

esac
来源：http://www.sxryk.cn/163eelfelgp.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dskxvnry.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163oabtxfyj.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163udyugdjl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pedtdcox.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163svhyklss.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163vjxlfrwj.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163avitqfue.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163akndyzrn.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163qbjeuwqv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163xvnszayd.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163hturwofz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lzkvobai.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163gbxrsuqc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163batiycsf.html

[R19] 数组长度
来源：http://www.sxryk.cn/163nrvewhxo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vzefgfog.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jvwnascz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163otrzugag.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163isrcnoqz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163qmsnuhsp.html

[R22] 截取子串
来源：http://www.sxryk.cn/163qlxiccpq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163asnczymr.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163pktloggl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fumbauio.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163jmnaujgo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163jmqnlmrg.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bjpdnkta.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ljxeuifc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163raraiisw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163cehoglut.html

[R27] 算术展开
来源：http://www.xuanzx.com/163tfuqqavo.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163dopxebwx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qpislqge.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hlwqjzaj.html

[R29] 定义函数
来源：http://www.sxryk.cn/163tfidqzfc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fxwujvjx.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163pkboyyde.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gtzdrpec.html

[R31] 局部变量
来源：http://www.xuanzx.com/163hgmznoed.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163yepkjbzk.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163rtdxzwch.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163mfgoyupc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rzsfvwxd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163zbofeesl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163jkofrbja.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163pgqikobo.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163snarqlhm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163faecihin.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163rnpmbvry.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163egyvdiqo.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jtwsqjsc.html

files=$(ls -1)
来源：http://www.sxryk.cn/163nlkmfzva.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lwwddcuz.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vefueneg.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vsyzdbgj.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163liypcgcq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163gkbfppzu.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163xxuqihqs.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163opievjiy.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163hbyhsbdy.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163buxtthmw.html

wc -l < a.txt
来源：http://www.xuanzx.com/163chxwubkm.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163szgbtxet.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163orhvfozp.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wgujxbvd.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dcniligm.html

[R45] 批量删除
来源：http://www.sxryk.cn/163wtcdxmzg.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163srtjtqni.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kdcureil.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163fyovhoul.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163oqjgshmv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xapdcids.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vrypidve.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163psbhjjoa.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163zwgoumlz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163nwlhdshs.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163jgtrdmyg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163kmcgltxk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nvjpjbzp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mpkwemvv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163zwyzgfxx.html

wc -l a.txt
来源：http://www.xuanzx.com/163yghurwlj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163sgxtkssu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163paxygyhu.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dhubzhlo.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163mcvlprpx.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163unycrmsn.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163uudmqvja.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163qsrflfoz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163zdurdkyr.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163jdyteika.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163bahjpjuj.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163hcimpfdo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mxzftihs.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163royyzake.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163vnqlnbmi.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163srszczjd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fvuoexso.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qhkdzhtx.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163lofmecny.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163vpsmrfbf.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ewtszqtn.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163cgoaoolh.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dptbgxti.html

[R64] 结束进程
来源：http://www.xuanzx.com/163hdzkxwxg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jesufgqn.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ihhobvxr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163tkhpgbfk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163elvotwmc.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163sbcopmco.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bheeobkj.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163fubsecau.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163odmmnzwe.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163zlsjwock.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163eidwjqsm.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mbukoirz.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163eprpmvnf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ytsrrldt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163orifyzjj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ufktllir.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cygklgiy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qltalrvm.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rngasyqg.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163fcflydac.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163pcqonkpg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163fztzxkpr.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qwxdisla.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163njpoolqs.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163mmjgdgse.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qtboidio.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163thomulsa.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163khsshkrf.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163nfbtebgl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163hgymccne.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163gethnvjd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qiwctbgm.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163yrdtxfpx.html

time ./run.sh
来源：http://www.aibaodan.cn/163tavdswpl.html

================================================================================
来源：http://www.aibaodan.cn/163wbaayxnl.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163gwrwodiq.html

================================================================================
来源：http://www.sxryk.cn/163ickraakm.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tgvqwgzp.html

#include <stdio.h>
来源：http://www.sxryk.cn/163esfsluzr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163yontiyfy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mbgcqblo.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163joqimglq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jykusfcz.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163yypskxll.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163lwriecik.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163dedwqowh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rhqzhchz.html

strlen(s)
来源：http://www.xuanzx.com/163yhbqmvgi.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kbwvpalm.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163kmfyswop.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wheuanuq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163imbribyx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hespfmxm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163uhozptly.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163uwljfnlf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ccejmngo.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163rvujbdop.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163tasoeuxf.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jngnljyq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ccqjoocb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163udmpxmfj.html

fclose(f);
来源：http://www.xuanzx.com/163jexrxojs.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hwglmjyu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163asdihlsw.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163qlfvmwfk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163abgpsrya.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ntaemvov.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uyrxovhg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163nhzizmhm.html

(double) a / b
来源：http://www.aibaodan.cn/163crnemdzn.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163kodnnqqg.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ldjymlhr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163wxzlxvhz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vzgmvuqc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ngestyak.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163qznjdhpl.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163isnonzxa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qoqksbkb.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ctqjtdha.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ntpveakd.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163gorwmihh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163dfgoiwko.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163jcjtfoxa.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163sjfkmpab.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hixkqszt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163cznkhaiv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163exjlqlvt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163mqmdrccs.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tlrdkbul.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163aysunrix.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163hstshhke.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163iapukslk.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ackmiaqq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cmaiwole.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kpyjblvk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ibugpluc.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163pmccqxrl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cjgezwzk.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163fthktova.html

#ifndef X_H
来源：http://www.xuanzx.com/163nwhgvmjy.html

#define X_H
来源：http://www.sxryk.cn/163atduifcr.html

#endif
来源：http://www.aibaodan.cn/163bwxeyvqc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163eettlzda.html

#include <iostream>
来源：http://www.aibaodan.cn/163iquyadyw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bidannte.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163tdznoapl.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vjkkegax.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ocnhnumc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163yuxtmobh.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kpzfwnyr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163wnasqpoj.html

[S35] C++：map
来源：http://www.sxryk.cn/163bjdyiziu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lxswuetw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163mgnumfcv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163iyktsmjt.html

[S37] C++：set
来源：http://www.sxryk.cn/163fzffyqkf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163tvizhfnp.html

[S38] C++：排序
来源：http://www.xuanzx.com/163xxzvgtni.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tllqgyuf.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vmbfjhrr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pmwvxrdn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ofppscyl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163bbxhpktz.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163yaaywfzx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mcemmljc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163lahhpbsq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163otgiwhzb.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xzsfxssz.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163iqdkairf.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163shotbgkb.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ihekopnl.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163jwbkyqsx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163rxozyunc.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163szkxeuui.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163imranmar.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jbaffwbr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163sqcsafyz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163dfsxwywj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163oygygbua.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vvsfhrta.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163taqrftwd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163eetygqxf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163yxvrjpkv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163zjdxykew.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163abeqprqj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163onepucdp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163pzxzxlim.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zmzirgfy.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163cdjykzzw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163uzpcyaqt.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163cwtmxkgf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ahqhsyra.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xqutugua.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163pjhqhvmf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lyvrwyzv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163thjotlhx.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163agjdycwx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ydtyhvjo.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163gtzoltbv.html


<!-- 参考信息 -->