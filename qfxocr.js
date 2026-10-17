外链999!wailian999！

set -euo pipefail
来源：http://www.sxryk.cn/163wdxymgeq.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ejcibwdg.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163wseqoljr.html

[R03] 只读变量
来源：http://www.xuanzx.com/163zdnauqud.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ofkrmlvt.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163tztidteq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163cuhawifr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163nuhjwiyz.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tvolpedk.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163dektylyo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163aaousfim.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163wblocihe.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163togglfhn.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zqazzykd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163uzrhsfab.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ecsthedc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163miigjzmy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163yesqessv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163kadaerdb.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qtqmhtkf.html

case "$1" in
来源：http://www.sxryk.cn/163igztkvzi.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ajbdbzov.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163nszxhose.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pmdupuyj.html

esac
来源：http://www.sxryk.cn/163kaodxutj.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cjsvigeb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163prnqzgqt.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tygvlzzr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163inmkkxco.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jbwkhiqd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163bksvantx.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163syickjxr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fzkjhuqc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163mtwewvhb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163mhakvmri.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163vxhlahbk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ixmuzsur.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163tzewglbe.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163eeagpirl.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163rktuqpbb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qdhraaub.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163opfoccpm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dowdowcd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dmctseid.html

echo "${#s}"
来源：http://www.sxryk.cn/163wzpedeek.html

[R22] 截取子串
来源：http://www.xuanzx.com/163obsgmoyw.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163iilxoxzq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163mathbalu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163kqdxmekn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163recxbzjc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wizuwcmc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163fzyuostx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bvzypebr.html

[R26] 命令替换
来源：http://www.sxryk.cn/163pkgogboh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163uhqirgfu.html

[R27] 算术展开
来源：http://www.xuanzx.com/163boddpemn.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163eragsnqh.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tyuaggtf.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ivtxshhy.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lzvrhsux.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163awntojlu.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163sdwqmkyw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163wxbkspvd.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pmqgeapi.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163znrpoptz.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bbmggxpw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163hfudwuja.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163hllylkhk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yfxoeeik.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jcxlzybw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bhyrpggp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163acemahpc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163oppdrndh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gtkzqlbg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163qfzfprjw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163pqnzobsa.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fgvxlzda.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xdzpvtor.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hlwwsznl.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163sebvvyti.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163wyaaazpd.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ujmjutom.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163egixnxoc.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gufapqjh.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mgbwckdq.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163umoabstd.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dvvgwqmp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163paialjds.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163bvyzwpaa.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163kxjguilb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vahdyzrq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163uhmpkguc.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163srewoygz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163dysxqatn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163hjvoslng.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163madkpxxu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163hhrjegre.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163sbxjtwro.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163iajcrlgy.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163eoulzceb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fdupnfax.html

[R50] awk 求和
来源：http://www.xuanzx.com/163yfqamseg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163pndduwpu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163sxtixuop.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gbokxkgu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163fqglwcbj.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ruldfbyw.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163sdpbizih.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163tnnhimll.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ulypfsfg.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163eqekctrp.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ljxnsnhw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163xmbrftgp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163xwrgkvvd.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wmidljox.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ysjthstp.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ocnaxocw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163snofgteo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163goqnzzvn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163usydpzyc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xxbshihm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163cbiwuuuc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vsjskkto.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qvgggkeo.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163asjabwqv.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163wxlfabdg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163amifrwik.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163twyvydjb.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163jaelektd.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ltweysvy.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163pvnlbzse.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zbyagjry.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163mzziqvvm.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vgkjijqr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163wzdlaqmk.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163alosxohs.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163xrubrfqn.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163oqvcsqjl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163levwogcp.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163cmpcqkru.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163fcxsrymm.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wrwtgjom.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163cogvudfr.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ipumpamt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jvbgpobz.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163sxqvyzln.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163beguatxs.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vhshexyk.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zlcsesvz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ajrtzlbt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163rinjkaaz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163haopnqxb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163hsabulwb.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163noskevtc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kfpzbetb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163uvxgqzbk.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163texelvcc.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163sumdcspq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cmfkbxwo.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hwjyuwon.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163lddrbdsm.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ydqhmwny.html

time ./run.sh
来源：http://www.aibaodan.cn/163xllmhcqe.html

================================================================================
来源：http://www.sxryk.cn/163cftarxrt.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tesxmzmb.html

================================================================================
来源：http://www.aibaodan.cn/163wdpwrebq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jeabqfzs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jbedgawb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163xduatuvf.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163uwmdpikg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ukzqriyq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163xvkwmrqp.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163joprvvau.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163szpqgbly.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163cwknhlum.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mkkjvcgs.html

strlen(s)
来源：http://www.aibaodan.cn/163ozulhtrq.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163vwwmzmff.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163fdbonbwt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hrlojhvn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wwkedkku.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rsldmwrq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rrpogynv.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163avsmnlim.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wipjeetc.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163kmklkvxn.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ksdciivp.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163gejtphkg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fclqtxyz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163uxmppcat.html

fclose(f);
来源：http://www.xuanzx.com/163sqdqwkgd.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163cvmbjskj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163aciawwei.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tzbvlngl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163jchjtwmn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163eckhmejn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163iczbuvmh.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wqkjowgq.html

(double) a / b
来源：http://www.sxryk.cn/163qukhwnec.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163baabmcsj.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qpxchnun.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mpecpaoy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ngkxwqjf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163mvrykzwv.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rcdcxgsc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163limfgrls.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163twetcjhe.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zjbkdrzj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163frmwhcrg.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163gaqwdyup.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ncxnrqui.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mlxvuolt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163sbpvbuzn.html

[S23] C：随机数
来源：http://www.sxryk.cn/163lqwvkazr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163xvjyiclm.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163eepwcqpe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rnkhamwu.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163tzbempgu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163lgpmzrzn.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163nmsbiuup.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163agjaqpoq.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163vbamyddt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qfhclofh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163cihiytuy.html

static int counter = 0;
来源：http://www.aibaodan.cn/163igyfdlah.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163fbnwvqzl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kttbrpxy.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163dontwvpq.html

#ifndef X_H
来源：http://www.sxryk.cn/163clykrfiz.html

#define X_H
来源：http://www.sxryk.cn/163nwdkeinj.html

#endif
来源：http://www.sxryk.cn/163qqzmrggi.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mpfwfnxa.html

#include <iostream>
来源：http://www.aibaodan.cn/163gbclaodr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163sdopkhmp.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gpxjgcsm.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163zrvddhul.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163esfzxpvl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ycqoirfy.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163yyewnpxn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163egwuqosi.html

[S35] C++：map
来源：http://www.xuanzx.com/163bnapkjxj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yvavvwab.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163vccipfat.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163modzpnbv.html

[S37] C++：set
来源：http://www.xuanzx.com/163asmyydpy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yhvuumha.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163yqnjuflt.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163phlyanlt.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163elhxsblj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163zzdcpovj.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163opkcuepd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163xfubgnqe.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ilhipryo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163cnqnsbcc.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163pngljhnq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163khasbyoa.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mmxlbgvj.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163oidshekv.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163pfjuwkxj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163cvboifml.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gocxddis.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163kplnbcdx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163twfajnnw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163mtgwdxzy.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163hbqesevt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163sbtwzinq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rsjjyqnc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163awrulids.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163sclmdaed.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tkkfsvuj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163tyiwjcsh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kekcjiht.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163zyucvtwt.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rdjyjeil.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163lmjlnjdq.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163weriifcx.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163upfphvew.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163rxqjjhkv.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163aucdpegi.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163bsozxswr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ntjenfwu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163bmtcpcug.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163eingqaty.html

[S56] C++：optional
来源：http://www.xuanzx.com/163oogkosbi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vztrymgc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163irkujlog.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ttpmzxnx.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163plppbcom.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163aaexmksu.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xibxefsr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163gfxgbdny.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hrygmseu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163cijcvsps.html

================================================================================
来源：http://www.aibaodan.cn/163nasylwrf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163yzsjahjj.html

================================================================================
来源：http://www.xuanzx.com/163xmpwxpux.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vvaujyih.html

println("Hello")
来源：http://www.aibaodan.cn/163djppnaoc.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163agwwszby.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163nvrkjceu.html


<!-- 参考信息 -->