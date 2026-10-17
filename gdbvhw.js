外链999!wailian999！

R. Bash 专题
来源：http://www.sxryk.cn/163hjvkwzcy.html

================================================================================
来源：http://www.xuanzx.com/163regrglmi.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163irptimsh.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163fdehkdth.html

set -euo pipefail
来源：http://www.sxryk.cn/163fxeqexeo.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fuujnvui.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vnnpayre.html

[R03] 只读变量
来源：http://www.sxryk.cn/163vodzoraf.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zoeyzvtw.html

[R04] 位置参数
来源：http://www.sxryk.cn/163anpathgh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163asgsxked.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163srcxgash.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mfntolid.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163zfoijpjx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163trxqdcpg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163stdjtbaz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163adlovkts.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ccuoulbq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ckqiuaxr.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163dyvmgugp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ddxvoxcw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163smoqafds.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163opscnqvv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163fwhetkiv.html

case "$1" in
来源：http://www.sxryk.cn/163qutsiidg.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163fyeqmojl.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163vvrwghwi.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163dtksgnfa.html

esac
来源：http://www.sxryk.cn/163jitzwnma.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163eqlviiie.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163btrawags.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163bewioegq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qpyvgvlt.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jmbwkctf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163rzsjowqr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163pdiphjwn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fjxemonp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nayhloub.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163mhqstjqx.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ddtjdsoq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163hykzcptd.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163woufgouv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163uuukdctk.html

[R19] 数组长度
来源：http://www.sxryk.cn/163yoovoscp.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163dqkchvuy.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163vhlojanm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163looetiho.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163beksiuaa.html

echo "${#s}"
来源：http://www.sxryk.cn/163xnhfkjpj.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163kubsttnl.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qaedkvyv.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163xxtqfsfo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163oqjwlhpz.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wyalvggf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163xzyyjruk.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zxpvwmyu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163xxxrloed.html

[R26] 命令替换
来源：http://www.sxryk.cn/163upkczerc.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163vasemhex.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163rzhklfwd.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163kdyaircp.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cyymhffb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163byoeqphw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163jvqcflyv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163qhvibqai.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163awgprdsj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163vbdymblk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qlzrjioh.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rnpmgizw.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vjtldmbb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163twkehqgd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163xllgtgsn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xtlzvarw.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xeswfdbv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hksaqlrf.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bvdopmqy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163elgosabm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163eimcease.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ytmerjxg.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163nqazelbn.html

files=$(ls -1)
来源：http://www.sxryk.cn/163oppihddz.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163unwmqmif.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163vywluiuz.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xxtrkldq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163rixtudkv.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163zwgyvpml.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163bhxeqzre.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163gkfdlpgq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163fkjhyixm.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163deyhysey.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ycgyjuhs.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163akbheizv.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163jvoiqmpr.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kpstiqtn.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ghykluxh.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163pbxovqtz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163wzbiwlcf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163oirhvkij.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xqvdpenp.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163huvkxter.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ayrbwwkz.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163bceytzxe.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163jrwpwkpw.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ovbykmqj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bexxkusj.html

[R50] awk 求和
来源：http://www.xuanzx.com/163rvidvbrd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163frlehzbu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163oukuatmu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kaynltwi.html

[R52] 统计行数
来源：http://www.sxryk.cn/163lixrudxd.html

wc -l a.txt
来源：http://www.aibaodan.cn/163vcndyrvg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qjjuwgud.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163sqleofip.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tvqfpgwa.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163anpukfpl.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gvkgvums.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163aflkipbk.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xwpnudlp.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163sdvfqacf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163itxpbkch.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163odmoenmp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163yxsynixc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163zuhdhrqk.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zamxmgqt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163pjzlohih.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dxwewien.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163peiwpzjo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163npswihjt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vdsulida.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nmelicyo.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tcbwlpsu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ubxzmbiv.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163qsfjvufj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lfrdkike.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zwceaslr.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163igqhdauh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163mnmhbvxv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qthxcsdj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163slyolgcp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163rllhohhl.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nqfmveit.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163qkkoucdw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163natqfeyp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163fdpurhib.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163pokkqslx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ylxytseg.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qyrouspr.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zwnnpzuc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163akzfbgkd.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163cqyobnhf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163fhflxmtp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zqaspimh.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163xpltmjub.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163xinxbghl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163exdfpdyx.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163axvamtxk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163rursiylc.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ywdqngdq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hrlzzzho.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163tlrbzyxc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163flvmuukr.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ubozlerb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163qwrjmfbq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163nzqrzkhb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163vqcbonkd.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ffeyuuly.html

time ./run.sh
来源：http://www.sxryk.cn/163ylmrrsxq.html

================================================================================
来源：http://www.xuanzx.com/163owwhogcw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163okuhsgca.html

================================================================================
来源：http://www.xuanzx.com/163klelmvcq.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163uiujuhhs.html

#include <stdio.h>
来源：http://www.sxryk.cn/163zbhxthwh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163vvnfmykm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163wfqxiduf.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163rduedjob.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163djxkvows.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163iceypjqw.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163fazbbfxa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163krexxfmi.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wyjjaysj.html

strlen(s)
来源：http://www.aibaodan.cn/163bowgrwog.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163uljpjdvd.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ynlesnyr.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163mtitpjlf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163djwyswrn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163rruuwfuf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ycsybaye.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ixfqnpjv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163nekgwlhn.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ltlwvgds.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163wwfzmkrx.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ldvjbckh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163mmglxuax.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163eyytlthq.html

fclose(f);
来源：http://www.aibaodan.cn/163aqufilhq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qsxyawxq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163crymohfm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163egcitfqm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163dwaxrdcb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163yondpnzj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vufrywjj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fcpnaevd.html

(double) a / b
来源：http://www.sxryk.cn/163abyqthhz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163kcxbyzut.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mlravycj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ksiseyov.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fbuvjdej.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163vhnxgskh.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vnbshdcy.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163demjywvo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tgtfckfh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lumihnbf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ledagajm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163xnngqwnq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vpblmbfi.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163mgfplhxb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163yyhcdwif.html

[S23] C：随机数
来源：http://www.sxryk.cn/163efmrawca.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163oqruwrjo.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xwxyqolq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ajmugryu.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uamkftjv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ujovibyb.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163dvohtoyx.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163piyrvdgt.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163isfnhwpj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163spfjegmt.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163mhnwivmh.html

static int counter = 0;
来源：http://www.sxryk.cn/163jgvokzua.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163lxdaogls.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ucdzeayw.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163qzqfoltv.html

#ifndef X_H
来源：http://www.xuanzx.com/163anwtexqi.html

#define X_H
来源：http://www.xuanzx.com/163drjrqaja.html

#endif
来源：http://www.sxryk.cn/163hfhwmevq.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163otcalbqj.html

#include <iostream>
来源：http://www.xuanzx.com/163tvlwgths.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xuqexycf.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163dvlhkxoy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ictnatyk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hobmeznr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163duomauwa.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163nrtcmilg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163aaqbjoqc.html

[S35] C++：map
来源：http://www.sxryk.cn/163mmgjbmwt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ilckhgmr.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dmfbxgia.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qfjhzodz.html

[S37] C++：set
来源：http://www.sxryk.cn/163drwvmyqk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163nwwymfux.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cgepetld.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rdkstpdb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163etebsnxq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163blazxxdn.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163fupuwxrn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163phylnhlt.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163xkjypsqe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163uqwtikxy.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163tgdtaiyo.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163wqvaxhnl.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jjulfqth.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mtjetgbg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fjuerrtb.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ekclcyrq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163jzmzgqsi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gispbcye.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mfobvzrz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zyonrikw.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163npoewzql.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mczxqepp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163eziqhzot.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163nwvnfltm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ayonesti.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163farasbci.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163yrajckor.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gobwofpe.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xpwetsxt.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163mxfadsll.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163lbpvetwd.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163nsojotmc.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qaxjfjpd.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fqatcbzg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163awmlamuh.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rauhrkup.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163pebkhnao.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gafceebg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163aayevkis.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kvtnvuci.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163psvoyeid.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163bhtcxqjw.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163blaqimzq.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163rhggdmyp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qcpcatat.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ayzobmdf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163minjlszj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163cpuxflqf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163uqcgymln.html

================================================================================
来源：http://www.aibaodan.cn/163rdvvrhms.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ctzmfhge.html

================================================================================
来源：http://www.aibaodan.cn/163vyvpeyac.html


<!-- 参考信息 -->