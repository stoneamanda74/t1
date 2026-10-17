外链999!wailian999！

R. Bash 专题
来源：http://www.xuanzx.com/163rpsgmmol.html

================================================================================
来源：http://www.xuanzx.com/163jjriwiqc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ueqitjkq.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163oqtmyqgh.html

set -euo pipefail
来源：http://www.xuanzx.com/163vbjwczzv.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163avyrgnhw.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ejcmvofp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hyxrffvd.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wpjiihbo.html

[R04] 位置参数
来源：http://www.xuanzx.com/163xigdpnig.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vtalahhx.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163xmcduvvc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163icxufldi.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163quigbgar.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163tbhwgzkj.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163mpfjugtm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163bcyvuryy.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nabnbait.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163flvuxtjl.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vltalzvb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rhkbcxec.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163tnhagyrq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163crcggjbc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hqdxbsqw.html

case "$1" in
来源：http://www.xuanzx.com/163bikrabwi.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ucdyyvvc.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163qejdzknr.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163feowdqpw.html

esac
来源：http://www.aibaodan.cn/163gdowycsm.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qiwwlqwb.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163moozavmx.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163svnvmqtb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163hrpoaati.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163pcrflixb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163akqihgkb.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ecfoxdjg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163kmvtpaad.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163lurwayqf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rulaqtel.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163fccwgjly.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163aqdzqvtd.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163epaglsqt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163skrznnfy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163amyxhkjh.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163tcggklkp.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rnkbnkrn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163hlakycqe.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163bvrsqyfq.html

echo "${#s}"
来源：http://www.xuanzx.com/163zpsnukaw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163tysoemdy.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163tqlwbuvw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163trpvocnz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163msmutxyf.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zepwyikj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163umforruj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163nqnggubs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163jynclskl.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163qenighwg.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163umkyvabr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kjfrptwl.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tardsyqq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163uyryfwyg.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jiapjyqe.html

[R29] 定义函数
来源：http://www.xuanzx.com/163utkfsgbh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vokdcjxl.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163xqrwcrjk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jgvvxxxo.html

[R31] 局部变量
来源：http://www.sxryk.cn/163msrjcfhs.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163iivjiagg.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163nwjdvyss.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163tyjelpms.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ausddsex.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mjfxdvuy.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xhprxdss.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163npkinlig.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163srjxhjnf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163liajktns.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ukbflzad.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163nwzefoob.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nlqrncix.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163gdlneryv.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163diaezawg.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163iexinkpv.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ttzjmouj.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lernkkmi.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163twciceol.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qbardtxz.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ocrcnzts.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ghuxyxgd.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163tkuzzzzx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163sdqqysns.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163otxwclyz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ioihbghr.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163nayjroxf.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rmfxsjkq.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163fhvhxjvh.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kqpabeil.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163amopcgmh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163sigekiwr.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163uesrcval.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cwmcwoxr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wekalquy.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mzcyxfix.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xlhhapfi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163panncora.html

[R50] awk 求和
来源：http://www.xuanzx.com/163nidurjop.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kgizhluf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163yiilsjiq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bxcvawuq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163fsgajwwr.html

wc -l a.txt
来源：http://www.xuanzx.com/163mpyvzhmb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ituuklca.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xuictxzq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163vkhwrxwp.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163zvzofqag.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163esnpppxv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163eqzoakop.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nqtklfqa.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qkzvbgrx.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163cqusywxg.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163uomggtsp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nryrnamd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163hqtdgjjw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163vgdjqeta.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ffhmdzpf.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163hzceayet.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163etbseqpi.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163nmbjtczk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xpgsabby.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163smnqpnhe.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163qmlycgcb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hspmpllb.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163lwiuecii.html

[R64] 结束进程
来源：http://www.xuanzx.com/163zrmmlojj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163mdiovfsp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163raeotuim.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163biukfrtb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vpeqfztm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hhesqmvr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ahmtgpyh.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163smmzfmbj.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ehbvorza.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163fcxvasrx.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gywawwna.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ncndfczn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163avwnqfsn.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163czhvdtfg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163buswabwy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163lafggunb.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xdgswskc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bahbcmpo.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163psaqzqsi.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ekokkqvu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163jqyazmgi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bahujbwh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ipyeifal.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163rqenywqt.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163cuehlydj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fzwpxihd.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163kquzmbmd.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163zkaybpvx.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xctkltpm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vdihowlo.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163laavgdcj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wexsyjoy.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163naydumfo.html

time ./run.sh
来源：http://www.sxryk.cn/163uijypcoh.html

================================================================================
来源：http://www.xuanzx.com/163liuivmvz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fqkoayda.html

================================================================================
来源：http://www.aibaodan.cn/163seueaolr.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163pnhnidkv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xapgrvwq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163lusrnyfg.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163aokxxaly.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hujjyuui.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163stiaeqff.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163jzdeppdu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163landljzs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163hvhtfrxc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163wltlridh.html

strlen(s)
来源：http://www.xuanzx.com/163vajmpqsw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163sxbmwrhj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ofzgfygk.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dqikjfkb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ykecfgof.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dlfhnykv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163pxnparpf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163sjmrqmjc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163pqhkgwak.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lgnocstm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163epzilggx.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163stggbjwv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xiohmuvd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163kkkdykcg.html

fclose(f);
来源：http://www.xuanzx.com/163bldvrxvn.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163xkdovexd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163zuzlppry.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163swwfixnw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163udgydqaq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vfyhrsbn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163oblegpqk.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163tjonqbuy.html

(double) a / b
来源：http://www.sxryk.cn/163lzlavmhw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163susosqbo.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lylgfvlt.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163rkjalytd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fzvfcnia.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ostucfiz.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163qoksjept.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163xjqoiiue.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rcsljvkr.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163qyxzogkg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163eypanrfi.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163jbzsraok.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163cnckmzya.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ghyanims.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fqdlpqyl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ebiuobnw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163lsqlhjkl.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163getkgebd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mhbbrghg.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163kitmnkty.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163qvfojmsz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163hyqnurka.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zhsojljm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tgwkuhct.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163sgqvkcmi.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ebxrqmqy.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mfzmgasp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163reichdcg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163wefdeboh.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163iiorkyfi.html

#ifndef X_H
来源：http://www.sxryk.cn/163nofwytup.html

#define X_H
来源：http://www.sxryk.cn/163mganrytu.html

#endif
来源：http://www.aibaodan.cn/163biebstqi.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zcvbeczu.html

#include <iostream>
来源：http://www.aibaodan.cn/163mtidwkfr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tbnjvkes.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163yuibronf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kebnfsun.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163gddshwlt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163twujicah.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163fverohab.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163wfagvivs.html

[S35] C++：map
来源：http://www.sxryk.cn/163rmmaglqn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163udcytchc.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fovreecj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zkizjith.html

[S37] C++：set
来源：http://www.xuanzx.com/163csojowvn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fsbqfiuq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163mlufwxjh.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163hbzzcvkr.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163fcnclqfu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163leskhvti.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163wflljlhl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163webxfuka.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dlrzyeps.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163pkxsbnph.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163wodwrvsr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163zignvfed.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163euhfzruq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vggaeskg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vtxhgeel.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163rwrkpaly.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163kfzomhpe.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163puligvaf.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xdgmmtab.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kmthjwwj.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fwszizgy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163mpexqnku.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jduxaoiu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163aunqspah.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kcyeyyjj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ezwjehpt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163iupgdyls.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163wlligrlr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163naqozfym.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163raawyupt.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163lgfqinec.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163hwaexrqf.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163rgybusci.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163esrywmqp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uwsmtdfq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163qkotdbux.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163sunijvnb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163doaxoxga.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lmwukjph.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163lmnworov.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163kiidawkk.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163gretwbvn.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163goeeuvqd.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163oaoszakt.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163hiyipgaw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xflsdljf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hnigecxk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163yhtxdsvp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163mhmdifkn.html

================================================================================
来源：http://www.xuanzx.com/163exjbescl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163eweqkjqu.html

================================================================================
来源：http://www.xuanzx.com/163wxznkwsh.html


<!-- 参考信息 -->