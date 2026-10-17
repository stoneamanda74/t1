外链999!wailian999！

set -euo pipefail
来源：http://www.sxryk.cn/163gufatuib.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kwgkwxfs.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163swifaaln.html

[R03] 只读变量
来源：http://www.xuanzx.com/163jeughpgl.html

readonly PI=3.14
来源：http://www.sxryk.cn/163cmrorlcv.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ckptajjh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163knozyehn.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ofwvaznr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163pgjiumcy.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163azizkbxx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ojbgszhs.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163eoogkelk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163tvpyeqmp.html

[R08] 数值比较
来源：http://www.sxryk.cn/163dkvxdyjd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163gpaomale.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163dvchrihe.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163fbwpdzll.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163gtiucjvl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163dvurkiii.html

[R11] case 多分支
来源：http://www.xuanzx.com/163mgggpwnd.html

case "$1" in
来源：http://www.xuanzx.com/163pwrqtfdx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163aoxuucvf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163kxyyctri.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163jhpyovts.html

esac
来源：http://www.xuanzx.com/163cfoxvzdu.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163adfbteue.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163vlkvolzd.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163bhslgclt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jhkmdxpj.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zahyniba.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163uwwhjpvw.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163kotvpyih.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gapakflx.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163slptlamm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163flzqgrfo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163gvkstgpa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163jmstvbqa.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jxmuseub.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163phsdwmta.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xboaqaim.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163hyeawnju.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ixdshhes.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163lkrrxvhf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163etuczuvw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163hlzmmfaj.html

[R22] 截取子串
来源：http://www.sxryk.cn/163jquntslb.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163lfnpdpbh.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163iuvejhuz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163iepzarsn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163dgxftmaa.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163hhhwvqvw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163jhcbhdpf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hkjpojlr.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xlefszbz.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tutwupzx.html

[R27] 算术展开
来源：http://www.xuanzx.com/163omrpmwze.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163nqovtrgc.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ktrzirst.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mbygiisa.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163djnasenr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lzsowjkh.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qrrsvahx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163kcxkdequ.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163feaaeccb.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fqmdrmvw.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163rjclprbv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163bfasabzd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163jmibdqio.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163vtrrhdvm.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jxqwxydd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wpqfpgbf.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xwrxjhjw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163aarphrpd.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mdznpjai.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163vetvfnmr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163caygjlfe.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vlxugkoc.html

[R38] 管道串联
来源：http://www.xuanzx.com/163wzalcsvq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163avxpaxwa.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hfxxaojq.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xcxlbcot.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163yppjzker.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163owgdhzqq.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163zhhpthpk.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163iijxqkmp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ggnzblyi.html

wc -l < a.txt
来源：http://www.sxryk.cn/163shvvgycz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163uozugbhx.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163gncxjmru.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vvpntxvd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163emfukude.html

[R45] 批量删除
来源：http://www.sxryk.cn/163lyqdzfoz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mqzukoee.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163xjlgdqoj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163uqbqcrft.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ebpajkko.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kfaftopc.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163klrderna.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163uwtzssiy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bwxuyxxv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dxvmcuah.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163uaciqdhb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163sfpdczjq.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hwxulqir.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ogaifgzp.html

[R52] 统计行数
来源：http://www.xuanzx.com/163orptngdf.html

wc -l a.txt
来源：http://www.xuanzx.com/163fybujkgv.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163waphmhfy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pxugeuzs.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163dakcwflx.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163anszbkpw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163sdyvzyou.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mhtoqlum.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163bbemrayu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dbdtlnxe.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ymjgvcvl.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xbrlkeoo.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163hhgmafga.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yqdfucpp.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163uvplinuo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xaxnrjpv.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vcihbrmy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zdnnfhwn.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ywuaazez.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163hsnwtrwr.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163xlbdhuml.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163wpeiprmi.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163phznfkfc.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ydqoviya.html

[R64] 结束进程
来源：http://www.xuanzx.com/163egvfjwtm.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vfyygiwr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163eqkyvoeq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163cpigaeai.html

[R66] 定时任务
来源：http://www.sxryk.cn/163wqnzuuhc.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163tkdprzyo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163tbdtheka.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163qbqbbglt.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ympxutpj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163azfcitme.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163iqgwfllj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163pnqchrxo.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163tmpsqmur.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163wytnggcl.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rbbfuczv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163rdgaiagd.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wesowfsc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163uodyvffn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163njdjlhcs.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163glcpbbbs.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163tdvohzwm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hdbpedkt.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nraiapmz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hpdqvqlh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163afycfrnz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163sylkmyvx.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163yfqcemug.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163oitewhwq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zreuwqba.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163sfbuhlgi.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163bxbgprtq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cdaqkbro.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163pdvzbhov.html

time ./run.sh
来源：http://www.sxryk.cn/163ltelepwn.html

================================================================================
来源：http://www.xuanzx.com/163slxsvpmk.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ssazivdg.html

================================================================================
来源：http://www.xuanzx.com/163enbqiasi.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163hllshcxj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163khmxkkcr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dlotzvbn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163oriojnpd.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dyyuvblz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163erworkdm.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jaxpxwwy.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163tcndwvby.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163fwasdtxo.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163hxsfuuha.html

strlen(s)
来源：http://www.aibaodan.cn/163bzgclurm.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163udrdrmxv.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rotywwqo.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163paddxxps.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vjxurqco.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163bwgankqk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163wwfqfgjl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163atorrheg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vpgcbtqr.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ldfosgpt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xjlafsys.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dnlsdkfv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163pkqxwnrt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163eefoqapp.html

fclose(f);
来源：http://www.aibaodan.cn/163xvxerjyn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163gbaolsas.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163frtwixwx.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lfedxmqq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dsldnjfz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163lmxeadzm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ljfnhtrg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163egweowlw.html

(double) a / b
来源：http://www.sxryk.cn/163onyiwwew.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fzyzkruk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163acjpjvzo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163skxllzrx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hwloqfdh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tbmyavrr.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163kwxkijxs.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lngfdxxu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163udvwaerg.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vfvbbglz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ozggopal.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163eaarrbci.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kniepkyp.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163fmtijozu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163uiianceh.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qzigzxlo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ybjkeika.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163winnvomw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fxnzxqtm.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hckusxws.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xzdpfkay.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163bupcbexm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163earvqern.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163dyhdpodd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163wjzpzkpj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ivwsahml.html

static int counter = 0;
来源：http://www.sxryk.cn/163ywlyvbko.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163spfqygin.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163siyxxdpu.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163fgxctyyc.html

#ifndef X_H
来源：http://www.sxryk.cn/163azyvtuic.html

#define X_H
来源：http://www.sxryk.cn/163qwmgtqtc.html

#endif
来源：http://www.xuanzx.com/163zccudmyx.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gfgikmlh.html

#include <iostream>
来源：http://www.xuanzx.com/163ilijszrp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163cznzgwnq.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ulaqzcoj.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163nzbhpyei.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163cdyyfvzk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163cuenfbcu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fzxzdwzn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163bfzibusv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163otollxaz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kghhztdk.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ekdhjbmv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aqtxrmde.html

[S37] C++：set
来源：http://www.sxryk.cn/163wfwckryt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163zyejegwo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163eyfwrtxj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163sfkflajb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163dkaaqzlg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ljifgiql.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163chnnrghg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163rcewprfj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163vngesqsf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163uzxlqeen.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qldprtij.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163luduxwha.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163bryjrppe.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zpsbtdfg.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163powevulq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vrbbimui.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ddkewhur.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nzcztaej.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163emgxlsik.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163jabtuaob.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163evamxjia.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163bteziihc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163nkzgvyam.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163vlwnixya.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163twlifniz.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zwobvmfx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vjgcqewy.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163tajcytgr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163moejglhq.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ypoekslo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163tdjcaevl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jrygwwyd.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163itppoqxw.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163totivpgg.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163tmfaetsz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163qhhmxjjt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163fmnlemlf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ehfohrib.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fdgoreor.html

[S56] C++：optional
来源：http://www.xuanzx.com/163wvsurzby.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163unfhbgse.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163fwldqhpz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163urqvqfhi.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163xtgwvfom.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lwxpdjvh.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163tcbpujbt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163tzewospb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163oatqelmb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163oupnkgss.html

================================================================================
来源：http://www.sxryk.cn/163roawhopx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vemxgibj.html

================================================================================
来源：http://www.xuanzx.com/163hvfkqaax.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163sywjtqdj.html

println("Hello")
来源：http://www.sxryk.cn/163cqjuygla.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163atulmllh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bcgsxhkc.html


<!-- 参考信息 -->