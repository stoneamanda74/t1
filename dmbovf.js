外链999!wailian999！

readonly PI=3.14
来源：http://www.sxryk.cn/163uuubmoaf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163hwmsmxqa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163pdkorlzt.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jixycafm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163vrgzqkkd.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163fpniqlfc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163rykqfuem.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sfdgsjcl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163owiruncu.html

[R08] 数值比较
来源：http://www.sxryk.cn/163oucvxqzw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163praiprmc.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163dasjwujl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mwqdvkjv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163izhpksbh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163bnifjqwm.html

[R11] case 多分支
来源：http://www.xuanzx.com/163hkjpvdlz.html

case "$1" in
来源：http://www.aibaodan.cn/163qcuxdbvf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zvjsmqtf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163pmthmxiq.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163aucpibzd.html

esac
来源：http://www.sxryk.cn/163tnpqmnny.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xfjomdyr.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163owqlpswt.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163sefmefwk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163aqyewxxt.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163rcfmourt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163onwlhygl.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zzwgodhe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163pxciizit.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163cdcqeezl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163fwirgqed.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bgurqzom.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163aqlqjrsd.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vdquxqxc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ptxddnux.html

[R19] 数组长度
来源：http://www.sxryk.cn/163axnnoars.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pvmltcnm.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lzkknobs.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dtkqklep.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163kyzkmpxx.html

echo "${#s}"
来源：http://www.xuanzx.com/163agorhhgk.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ncctemuf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163uvjxfdgr.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kgbnbfqr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cvwngucc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163eoxdpfxy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163tpqdgnrd.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163iqsnzmna.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163waavyekb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163wzjyormo.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163woedbila.html

[R27] 算术展开
来源：http://www.xuanzx.com/163nuqtflwl.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163sjyirkkq.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163fdsmharo.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163khhfhjgr.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hwfyxhhn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163pxxcwpqf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163tjdxbylj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163btweegnn.html

[R31] 局部变量
来源：http://www.xuanzx.com/163usnvunaf.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163cftghbru.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163cxabbwqs.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ojrenfjn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163valiqmuf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zqlmwlcw.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jnvvrnpf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163iloskgze.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gjzhmcny.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qaqwheox.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163gsaovqsl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163uebaiqks.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163kdqpkljt.html

files=$(ls -1)
来源：http://www.xuanzx.com/163juipkyps.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xcbjlgiz.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163cvjbeyon.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163onruuucs.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163qmvlhgyc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ezfuyajq.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163rarhqsoa.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163rbjkyikz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fnscebxr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163msfnzqyd.html

wc -l < a.txt
来源：http://www.sxryk.cn/163pybsevws.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rrghsmtl.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163reqasopt.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163heyexrop.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fobcascv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xgdxpbvu.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lmhrykkc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163qruvslim.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lpiwxjkx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163znbqnhmd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jdfjbpis.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163guslbdoa.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163gvzvspnj.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dwrrbasl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163mdbpvnzc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163yedmprku.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163opuvnfii.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163cdtplbbt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gwsholra.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163pwansjqp.html

wc -l a.txt
来源：http://www.aibaodan.cn/163vfeoekdg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xrarkqwr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163tidhurtz.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163uxbkohtg.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163gqriyxre.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163rqijnvwo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163zfpnqyvd.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nmmbecod.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163bnebbnne.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xprxoidt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163vrujzalq.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ukjcbnwy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163revwremy.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yanarclc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163bcroejjy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163phgjjdpd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tqzxihsp.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163qevjxisw.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163sbvdswqq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lxsyjakh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tuvljmdc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163mcmkwiuo.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qtlyfceb.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163hzkyhsfa.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163zwdewcch.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163qvpvgtud.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163fxnjgnmb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163priewysk.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163yrdognif.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163wtagjgfn.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rguelnhq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163dapuoaxd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zzddckqq.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163dagtpqhd.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163obaimxna.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ywenolzx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uvyinkhy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163gfrncofs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163umufzbqw.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163uwohoxob.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qlbymsxo.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fiblvdsz.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zjisbdsd.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163fxcvgtsv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xqfpyscy.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163atmlgpnb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bhnvygmy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163nvxtvmjn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uiapyhmt.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jxrpzfhu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gwljwftb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163atidqlao.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163twpnuzqd.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163akgorfai.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qmfxotio.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163zvqscvbv.html

time ./run.sh
来源：http://www.xuanzx.com/163nwyvwxku.html

================================================================================
来源：http://www.sxryk.cn/163lxtpxzfk.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163aasnrjdq.html

================================================================================
来源：http://www.xuanzx.com/163siqsjysw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163jskoapbg.html

#include <stdio.h>
来源：http://www.sxryk.cn/163qqihulfa.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lzfvaivt.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163qiadlmnq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hraepnqr.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163gqyrvxuo.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163kmsrxidj.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nmrysnmw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163exevwjdv.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163hihdqcyw.html

strlen(s)
来源：http://www.xuanzx.com/163htbvyjgv.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qiqanibw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163fwlsauzv.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163cpaasvig.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163nvjmpnyw.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rvgwesaa.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bgmpjfur.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mlvzkbux.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xyayckym.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163osmneemt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tctifneu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163morqhnis.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163xtfosqcb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dcqskcuh.html

fclose(f);
来源：http://www.xuanzx.com/163qkqbbalh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163tsetfcee.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ovplfvtn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163andfjfvd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163dswnbdpm.html

[S14] C：枚举
来源：http://www.sxryk.cn/163uawbsakz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163uwithimk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163jbboqdwl.html

(double) a / b
来源：http://www.xuanzx.com/163xpxqiozc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163gurhlcsp.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163rrfbiohm.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163yqduqfdx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rahltrqg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163lwyyudff.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163wvpepwyh.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163retvqgae.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bhepmueq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163nrubiewt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163euilnzdm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163zfjzxhzi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163pqrougeu.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163kprjwuhv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nnmkugdw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zykjhkyj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rcgqdbsb.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163edilrmwp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163azhfbszf.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163kvuioxie.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dquhbocb.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163dfevexbt.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ypeovvzt.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163kuborkdq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hqkmumkl.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163pkomdbfz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rqcrmkta.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163bnydjxfz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wbwzjlcj.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163kevocfrd.html

#ifndef X_H
来源：http://www.sxryk.cn/163bwjvmvaj.html

#define X_H
来源：http://www.aibaodan.cn/163rrjdprrd.html

#endif
来源：http://www.xuanzx.com/163jjbkdzkc.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mruwmexi.html

#include <iostream>
来源：http://www.aibaodan.cn/163pzjjwete.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ewqbvxcg.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163hwiiisjo.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163jxofakoo.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163vrkhatwa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163iohkgobo.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163lllumehc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163iuotaflv.html

[S35] C++：map
来源：http://www.sxryk.cn/163drrvaiaa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zrvmevkf.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163azpxkras.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uqisdxsg.html

[S37] C++：set
来源：http://www.sxryk.cn/163fxthjdcg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163stnvhyip.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163valrstvg.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163bfpcitsd.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163qguiitvk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vfvfxung.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163qruywjwb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zezimlpq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163sgsumydb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163vdlyalid.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qgngavsf.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wutffktd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ancnkapv.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hizvlrhp.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zhsqlqij.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lkswldgc.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mbebigsg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163mtfnrpla.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xhqfegce.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163wvzjfqzt.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163coxvnelc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jqnllfdi.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ogiswvgi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163fnbqgmzg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kcowskjb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163rjgqxnnd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rvmvfqvq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163qvypfolr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163lrugluar.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163gttawcby.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163lmlrrycy.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nvvuogme.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vzcltysq.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fwejpmxm.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ryqvzqml.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163qbwkbquv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rithlhpm.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163twyibsbc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163qrevlrdo.html

[S56] C++：optional
来源：http://www.sxryk.cn/163pwndzaac.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vssvyyqb.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163prgpemju.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163awpjxtnb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163isfiovza.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vhkduryi.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163eqgmrfad.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163notdizxf.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wgxqkqxm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163nimclsqq.html

================================================================================
来源：http://www.xuanzx.com/163gjtriaqh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163peplpygt.html

================================================================================
来源：http://www.sxryk.cn/163ophonshw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163rlfonjjc.html

println("Hello")
来源：http://www.sxryk.cn/163mxkolrrf.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ohitquwr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ljwsffyy.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163oudyfpoo.html

"值: $b"
来源：http://www.xuanzx.com/163txskumuc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mnmomasy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163sddhftbb.html


<!-- 参考信息 -->