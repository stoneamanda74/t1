外链999!wailian999！

R. Bash 专题
来源：http://www.xuanzx.com/163qkvbkuvf.html

================================================================================
来源：http://www.aibaodan.cn/163nndkures.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jxrnfmto.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163dnkuejai.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zvyohths.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163drblqgal.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163nggrrksf.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163rytrgxzi.html

readonly PI=3.14
来源：http://www.sxryk.cn/163bncnctdl.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163yzhcgsge.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ttuyfqwk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163nbfhzyns.html

name="${1:-default}"
来源：http://www.sxryk.cn/163swzrygnr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163oocqrdwc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vffdxmfc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163bsmjuxqj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vugztqsv.html

[R08] 数值比较
来源：http://www.xuanzx.com/163owsfuqpl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163arupcodu.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163hbqwnrjo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163skyetfoy.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mavkjhjl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163srxjxizg.html

[R11] case 多分支
来源：http://www.xuanzx.com/163addwgauk.html

case "$1" in
来源：http://www.aibaodan.cn/163irmsvwls.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wqvfzqfi.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ekrrlnpi.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163wqmhnjxv.html

esac
来源：http://www.sxryk.cn/163cwshtrxn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ydxbqdkj.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hycphylt.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163dswqmwtu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163znwrusze.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163rnlexvpc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tindfbez.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rndujigi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ycvavhft.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163rymwonbn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ngksrbxm.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163kowmwvyv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lexefube.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wyouvrrf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163vhgwaejy.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163pqybstqh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163twvvcwgs.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163legunomq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163vhwgkbyf.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hmsvbeeu.html

echo "${#s}"
来源：http://www.sxryk.cn/163jnglepiw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163pqswbwsx.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163tjnksmem.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163lteofpyc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163goobwtyn.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ydtcvwqe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163qwyenlpn.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163potautur.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vuzkdhjn.html

[R26] 命令替换
来源：http://www.sxryk.cn/163snhfcrpm.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163iqltmidx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163seekvktl.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hfxofvoa.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163gucyzokf.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163bczpmpkc.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163lnsfcgda.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ppggflkd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163tphmrtta.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163qwslxmea.html

[R31] 局部变量
来源：http://www.xuanzx.com/163zhwvngsa.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lyydnasz.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ochrussn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163jcmcutou.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163mjrpdzsw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jsbmtptw.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163askjvrfz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163afzrwzvy.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vjitzero.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163zjshzkfi.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jyzdlhie.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ibnbuomp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rzxyqoty.html

files=$(ls -1)
来源：http://www.sxryk.cn/163lgevqwve.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163nwoowfas.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163axpspwst.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163iqezbjfp.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163eovrgrbf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163fpknvvvc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163nlgtowej.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ojnhetfx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wzwkgjnh.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163csghtjys.html

wc -l < a.txt
来源：http://www.xuanzx.com/163blkoobgl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qriurhhp.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163cixbnpbv.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163dutryntr.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163nnbtpwcd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163nkmtwkrk.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163osectakx.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163gmnffylb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163tiotyzzw.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163mxliloea.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ifkmveig.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163seksqjqk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ccqqgazm.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163jhuuzezu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163mumdxftf.html

[R50] awk 求和
来源：http://www.xuanzx.com/163hsodtjsf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163qnlrwyax.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163emzegwwa.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163qvkeibuc.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163lnzagmzg.html

wc -l a.txt
来源：http://www.aibaodan.cn/163trnsqoep.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ieuwnvei.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163totiqaqa.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163spnjdpov.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163oriudwct.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163phahstfz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mvnldkqj.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xtccltjk.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163diodyify.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zvqazrvu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163evsnopvv.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wrpyxzvx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163qmbauhzn.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hnfsjxpx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163cnkcnhpa.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163sikvlnry.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ksjnpaoc.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hdrjlepu.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ewqwxktj.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163owzupggt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163pixmcsww.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xjyrzjgq.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163sxftmxlf.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163swucitvy.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nvaitcvs.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kfatqlda.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zfnlsrfa.html

[R66] 定时任务
来源：http://www.xuanzx.com/163fnzkfnwn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163kwpgpqth.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bwofnelf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ayncgbay.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163doweaqkv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dhlqonuq.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163nyroruid.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ljouzulg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163wyranlol.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163hsmhcyho.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pwdahihz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163xacbqqnm.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ywifxraf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fbiwwcmp.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163beyvsxvr.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ydipwiuc.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jmguwqkh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163iqkfqgid.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163oxmmaocx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ftegnhej.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163cgpkjzpf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cvdfpxjk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163bgiqdpsf.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jsajyogm.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163itcnwzsf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ntzwumqm.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163prxjgvbu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ahevioka.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163pwcmwnki.html

time ./run.sh
来源：http://www.aibaodan.cn/163yvlocthv.html

================================================================================
来源：http://www.aibaodan.cn/163ieiflfot.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163pwxezpfx.html

================================================================================
来源：http://www.sxryk.cn/163fndegrmv.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163hjypkxmg.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jljtnesn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163juoysdog.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163kprcuidm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163uarkqlzq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163lcrkkkas.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xqteikmu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vjkykuzn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zphcwbhd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163wxhvmrch.html

strlen(s)
来源：http://www.aibaodan.cn/163zyqxmqal.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163khbjmgwp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163adqiasyf.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163updrwyue.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163kzmejqiy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163yqmysvyd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163jxnbnpsa.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163fjzlwios.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163nwxccbrh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163nadobtdy.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163retqszdy.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163bxqedudo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vbotxgje.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vsotzmdp.html

fclose(f);
来源：http://www.xuanzx.com/163nyukpqqo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163jvybympg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163urkwrlrh.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jwheripw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xmeojwsg.html

[S14] C：枚举
来源：http://www.sxryk.cn/163xersmwjt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163gzselpuo.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xfhmdejg.html

(double) a / b
来源：http://www.sxryk.cn/163qlikgsem.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163anjnavkn.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163kowzxmxz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163bbsoljiy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dfitijlf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xnkutkpa.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mirwkrsv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163pnsqkitc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cvyphvlr.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163gjoozpsz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tacnnnib.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163njjouott.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163oxalppzt.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dbqmkgcd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nmvhwjng.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ifcbimba.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bdbmtbgy.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163mhniolfe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qkxtfoxg.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163aclimpac.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rjdcuods.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wddrthaq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163tccpzixg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163utkldmgd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163smrppmnx.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163sikiyeur.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dugscacc.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163nawsqofx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lswogekv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vlptterf.html

#ifndef X_H
来源：http://www.xuanzx.com/163gsbbatsy.html

#define X_H
来源：http://www.sxryk.cn/163ngdfevwq.html

#endif
来源：http://www.xuanzx.com/163whjiwvep.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ynkzwpxb.html

#include <iostream>
来源：http://www.sxryk.cn/163mogumjxh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163fyeeajph.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fmnnpxtz.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163pyshbawv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163udxqcmhx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163tfdrucax.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163fickyzvj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163xeznwqmc.html

[S35] C++：map
来源：http://www.sxryk.cn/163vqyacjdh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163isvofuoy.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163bctjffie.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vtvkjzlj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163gzdjmlag.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ketwvsze.html

[S38] C++：排序
来源：http://www.sxryk.cn/163syuqmzmn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163cmgbjcmx.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163uhqaoaae.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163orwsurin.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163gdhrpqlw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163acyalpbr.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163itsunccv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163xygqihro.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163gzdpdsrp.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163utlngqru.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163fgxkxlgl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hejkicxk.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163nxmfptxs.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wrcgiral.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163adnurtsl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zbpdwwll.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xyrvteqj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qaagxyvr.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163yliptkmz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hwqtgozz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163xnnhqsnl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163olmsudst.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rxxokhlc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163twmeifch.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163pbgkivnh.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ywlxgxfw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jjnwhiby.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163flhpsazh.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bcoakcxp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163fhalispt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163pcnlasph.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163gymvvpro.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ydokxpch.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163cqdajndz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ibsuryyg.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163oiwwpcov.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163uxyedwei.html

[S56] C++：optional
来源：http://www.xuanzx.com/163asthzvlc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163brwlampa.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163mzgapmst.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163wkdpzjyu.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mbcojcst.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163yrbowaha.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163bodqzvvk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ocrirgmj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ydkgujjy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lbjrzndj.html

================================================================================
来源：http://www.sxryk.cn/163fuamvokh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163krktxupx.html

================================================================================
来源：http://www.aibaodan.cn/163nelrlckt.html


<!-- 参考信息 -->