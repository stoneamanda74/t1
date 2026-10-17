外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ytobksae.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hkztruhk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ahydaevc.html

================================================================================
来源：http://www.sxryk.cn/163vdbwwcrl.html

R. Bash 专题
来源：http://www.sxryk.cn/163myexdjxs.html

================================================================================
来源：http://www.xuanzx.com/163orvojyvm.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163rddigght.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163djfvhdtw.html

set -euo pipefail
来源：http://www.xuanzx.com/163lsuxboda.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163hsgidtku.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ilqctppk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163rtyrqwpj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163neimmiyr.html

[R04] 位置参数
来源：http://www.sxryk.cn/163gptzasnm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163tkhhnpot.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163qkgipyfp.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qzewsxrl.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ksvfuerp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ctvlkmfr.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163gwlraydu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163fawjlfgc.html

[R08] 数值比较
来源：http://www.xuanzx.com/163leyadxzu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lnfaotjr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163tgefbsss.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163zkzrlwaj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163eqdndjfb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jwvcowwf.html

[R11] case 多分支
来源：http://www.xuanzx.com/163yfnkvcaj.html

case "$1" in
来源：http://www.aibaodan.cn/163madtgoot.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163arkjslyq.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163cuhzqazl.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163pfspstdf.html

esac
来源：http://www.aibaodan.cn/163iflvhibi.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ebpqhvov.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ypufdfea.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163twukpqfv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163vdviznrt.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163sgmuyaiw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163slbdluhi.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163saxjaobl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163dtdyebbk.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ltdypjmd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163lyypyful.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163itbbhplb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163geckladi.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163wbppmvlc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163lakbjufm.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vjohmyvu.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163qmbbfuui.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lppjwezy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mkuvuqyt.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163mxndjbgy.html

echo "${#s}"
来源：http://www.xuanzx.com/163ifxmqfwx.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dbcxobep.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jofbepnc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163rssoqanq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163oxredber.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163oocayljf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163onlqaztx.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163maxzdpsh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163xwgplosu.html

[R26] 命令替换
来源：http://www.xuanzx.com/163cogokiss.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ghqejsat.html

[R27] 算术展开
来源：http://www.xuanzx.com/163qqlwpmmg.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bcnhcxrs.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wbnzjrcg.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163psqunpgi.html

[R29] 定义函数
来源：http://www.sxryk.cn/163zcvxdocu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163eveglyym.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fbcoysox.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163lazglvbf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gmddoczo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163zctzamqc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ccxcgnwg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163funmvcqp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163eyrdvnos.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163rlimhmit.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163yteviapl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xliahxsl.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163mmhzumdc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163wlowtdrf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163fhffsplk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163elpadysz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163fuhwlbfo.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163wdibluwd.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hewsmzev.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163sdufaxxl.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ihwrvpvk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hfbfdjpl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163whmdjmuu.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163mffpogkn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163zmwbglvi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163bngsppkd.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cdioeisg.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163akoeexwp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163dwupkzfr.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163savqrzpp.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163svqwngdj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ykffeluh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163twviswxw.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163aeewoeka.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163fpfhhpxg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lygoekht.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vrdpbxnj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163yspgzxhd.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mgtsepmy.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163myfujgll.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163iswyzzfq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mtcykyff.html

[R50] awk 求和
来源：http://www.xuanzx.com/163myyzbofq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163mayjljbn.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tnzhixsf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163hlmqjqus.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xktuwsqm.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lqquvdig.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lgbhmkpf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rpqpggur.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xxxtolpb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163sxkhazli.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163gkzwudhb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163hgvxqnge.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163hvhkjsqv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163vyiznqix.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163uloyxcda.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163maiahizp.html

[R58] 下载文件
来源：http://www.sxryk.cn/163tfxjoipp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mvgzqvgb.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163yrwqtfse.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163hnwyubfz.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163qejxxngd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163umeqxwye.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163kmirdzbg.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163zketsbjx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163zvmeayrn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zcssoxrs.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163duhterlx.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163dcxighvv.html

[R64] 结束进程
来源：http://www.sxryk.cn/163mhgsbkbr.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163tfviokco.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163rfbirhho.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163wpxrtuwu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ixhylica.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zurvbosg.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163eadjfecy.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163xmqazyso.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163lbuqeezn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163eekcmgpb.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qpjvryua.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yblhsbxx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jqfcceaz.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163dhvfbpkd.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163qdimwtnr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163trakzpxj.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ronsbkxz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dbhxcyrt.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163srrmgeng.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lnnnzuzo.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163cnsjddps.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163xicaizgd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163fcddvxya.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ieqrandp.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jqpgaebw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ycyrepmu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ftloibdg.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ddcjxseq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163zymkdfpd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163bzppfdye.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163fxfaydqn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163cqbzzdbw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vtnueayt.html

time ./run.sh
来源：http://www.xuanzx.com/163cpsuosry.html

================================================================================
来源：http://www.xuanzx.com/163xpddslww.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163mlqbinrd.html

================================================================================
来源：http://www.sxryk.cn/163myzbrdhb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mwmhrqjb.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mudkijiz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163storuphd.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xaeaeaur.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163mowaxvop.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wbgkiimu.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163isfhxzxx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163vkffvmsi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ahvzcmnn.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yccjrrzf.html

strlen(s)
来源：http://www.sxryk.cn/163ckprcvmq.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163umfghqjv.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163wlbhtkkk.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ckfzsayv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hhstpmkt.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163gszbrjus.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xzhamefu.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qqmrfdnf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163daqzzcmq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ujehnodb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163nblwfszf.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163rinmhcxg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vrjfzuuk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163usbjzdjl.html

fclose(f);
来源：http://www.sxryk.cn/163iuytvjdu.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hoicmgca.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xhxjmsbw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163oyxehjxi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163twmuckmo.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vbsquakh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163piuosqrd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nnaynsuk.html

(double) a / b
来源：http://www.sxryk.cn/163wlzchwjy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163nwnecbgn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163expnwdkh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163dqlgnrgk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cempnxex.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163lgrqeqmv.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163mhaybzza.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163hhzpgevq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163twwxohas.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pgzejxhl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163scbqvhys.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hpwamidd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163rhoxflqo.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163dmklggsm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163rnxhhbqp.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xlzmnxxr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163tssseglk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163nklpocqx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163osutmzlp.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cniqihir.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xoywtkff.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163yvjyhcjb.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wqfdmtop.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163gzbsqveg.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163kuctarkr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163sbttbute.html

static int counter = 0;
来源：http://www.xuanzx.com/163okjgldwn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hnfkxwdv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ndwzgipz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163pisinjkj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163tnulcuaq.html

#define X_H
来源：http://www.sxryk.cn/163mvmadtxy.html

#endif
来源：http://www.xuanzx.com/163jxhrdktp.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wygebica.html

#include <iostream>
来源：http://www.aibaodan.cn/163rcmmjlxr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bpvlhpsb.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jpvakpxs.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vltcnyss.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163lpzjtzus.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163egluoblw.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163oxttkjbt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hnukwdzt.html

[S35] C++：map
来源：http://www.xuanzx.com/163quuycdwu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ioxfzyzg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ezjqurse.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ybjrbfpo.html

[S37] C++：set
来源：http://www.aibaodan.cn/163tunplseo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163dcipgcnk.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ukhqbgqf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qxbgzlxx.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163pmohwmqy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vewcrbkc.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163giohgovm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zocqwraa.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163kdbqvbww.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163yxpclnvd.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163lwtilayo.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163yjqcozhu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163bkzfxztr.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163pvputunn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163mkooxmno.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163yjsixtda.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ytvsxklu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wbfyikdq.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163kdhkynih.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zqqqyrqo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xlxsnepd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163txxhcyqq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163henybkhc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rmdrcsrv.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163dusojoow.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lghlgfjp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zhbaidro.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163vbbrplog.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163koegzzno.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hfwiumpn.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163mmonfmjl.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qljwdqor.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fjdqguvn.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163dtxwghll.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163djhdaifv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163bwzcyvla.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xawzpksy.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163mdovgjxv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163jrrstxos.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163izokkcbf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ugjobkls.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163tspbhegi.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yqcuvsbt.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mkcqsexz.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163gthzujqr.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gzjptorw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163snxvysok.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163mdhcpswu.html


<!-- 参考信息 -->