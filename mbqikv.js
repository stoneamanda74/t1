外链999!wailian999！

set -euo pipefail
来源：http://www.sxryk.cn/163eotkakpg.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163utbcarhj.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hucishvc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163uusasgtf.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ovbhaavg.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163enwxwjxg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163nnclpvru.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163izzrhvri.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qtwqzjcj.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163lkzxbacn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163bhyslbsv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jsugmmbt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163tupodlyt.html

[R08] 数值比较
来源：http://www.sxryk.cn/163udimuehr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163nrtvjutd.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163khwajios.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dawvsblk.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163bslaqdbz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163uieuxpwe.html

[R11] case 多分支
来源：http://www.xuanzx.com/163jhiwfqgv.html

case "$1" in
来源：http://www.aibaodan.cn/163mvpcivsm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ecfbwezy.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wvyaixvq.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163decyhkva.html

esac
来源：http://www.sxryk.cn/163wjhntequ.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163fkxzjvvh.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rnjwuxxa.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jxdewglv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163hswomgvo.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zzsvcwxl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163fvpkppfk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nhuhmshp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163byavdlts.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163wwswhrwo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163slqvupel.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163bumzykei.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zhomtbnt.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163owchtism.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163phgqmspi.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hixdqkhr.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ogneveah.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qjggoyic.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163udlfssgf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163oudycxnm.html

echo "${#s}"
来源：http://www.xuanzx.com/163ysdjuyqg.html

[R22] 截取子串
来源：http://www.sxryk.cn/163bnqbxaxu.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163rbdxzxps.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163claxdhon.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ojelubdd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163syntwlyy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163rkquqwbn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vnaaquxi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163fdomgvna.html

[R26] 命令替换
来源：http://www.sxryk.cn/163fbfuvnsa.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ntevvifq.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163zmlenimm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163jlfjqqjx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163avlzgjdn.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163lnognjax.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kuuhseyo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wzngrqfy.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163kbfpyatt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163pdvizfgn.html

[R31] 局部变量
来源：http://www.sxryk.cn/163aarpjsjc.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163pbdkbcdw.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bwanwlxo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163cxzjfhxy.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163vvukwzwn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kmcqyyxp.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163rlrrkgte.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163caoauvkg.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163rypxmkmz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xgmjsrcb.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163oiwnlcfe.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163nzwmceor.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ipfewezq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jzapkyrq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163clixnrks.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vtqatwvz.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163pdzdllqq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163banpdjcx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163dkmxikjg.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kmyoggtq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163pfroupqi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163thbrommf.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kzfsdzuu.html

wc -l < a.txt
来源：http://www.sxryk.cn/163nejnydhm.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163makmfjcq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163srkhwrrw.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ptihiioj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xdksoxpe.html

[R45] 批量删除
来源：http://www.xuanzx.com/163sowrhbmb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163zpzbkpqj.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163jromasmh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163wkvjgayq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163osddjshs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163grixtehk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yyxwcrby.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ewbitbbd.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163flmpnmlp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163waaqrajw.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mqkfafxu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163jtmfgkpx.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ayobmxnx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163jvsxdbim.html

[R52] 统计行数
来源：http://www.sxryk.cn/163zklnpybh.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fmgznlmb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163mfiniktv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vormoakn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hfgpluhp.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163hubbpqco.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163gbzxfebx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163chihqhky.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163jqppgpfe.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163lirbllkq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163amiezwtz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wshdtito.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ugjrnfzw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ncvbznpg.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ltxeomig.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163uvcougjh.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163yldpdyae.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qlsfaali.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163yqteekml.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163zocdzbmh.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wremhjsz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163kogznqlu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163tlnwgqhu.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163eepqzfzj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163fsnlmlmu.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163njztewha.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163guiqncsl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bqqjabch.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ushqjwpj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163yunbhbap.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163eftezuxk.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163gkvnvgai.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163bawhqywz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nkyxaeth.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163qtqtfgwp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wtamkstu.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163kbaodgmz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qlplfjho.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163nspmtxic.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163krnbvldo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163grghvtzq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163whgvfjhk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vysqregc.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163lnvdzxgh.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163pvmdfnjx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hfdkkley.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qrpgnlnf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163umgcjwtu.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ceszsefe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163awweodok.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163aegwsvjv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163mrczhlhs.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163zapcudyh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163qlmvytfm.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163tqwuowhv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qahsauvc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wcpbdijt.html

time ./run.sh
来源：http://www.xuanzx.com/163mnzbmgbf.html

================================================================================
来源：http://www.aibaodan.cn/163iqgtjsgq.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ixefegdx.html

================================================================================
来源：http://www.sxryk.cn/163gxauinzs.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163kvuvqsde.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163bqtriuvi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163luzmrirs.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163rywulnqb.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163jhwcfqjh.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163hmlsillp.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163enuwpipv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ucnjgycw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163uouwehel.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163xtpvfrqj.html

strlen(s)
来源：http://www.xuanzx.com/163olavalpv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163voryyiws.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xujvldch.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163febimmik.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163fuixacdc.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hrnqwoxz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zkajynyl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163palsxeuh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163efvzzujw.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xyuvoqxp.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163lhttuucs.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163lrlwbvgj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nfxhgqhy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ngihyzox.html

fclose(f);
来源：http://www.sxryk.cn/163tdbfgseg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ebqfhicy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163xlffuiyk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xnrrohcq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mdewubhc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ydxsdnju.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163aoleiwds.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163bxsmviek.html

(double) a / b
来源：http://www.xuanzx.com/163gnxcmxlk.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ktlbelri.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kkmbtebg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xdalpunt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163xblcxusp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163tuscmuzf.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163soincvqr.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dlrmhyaz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zrjirwbz.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163nfkczrtt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xpexkacl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qmfqixvb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163zlmnrwsk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rripsihe.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bkcataga.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hdfauygl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163qphnzsnj.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gylkqlkh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163hkcshezx.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pcwzytqq.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dxkpbnus.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163cufzstua.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163klrmxbtm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163dqwowody.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wundpejv.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163rtnqhmdd.html

static int counter = 0;
来源：http://www.xuanzx.com/163etlwkmbn.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ofqbvkor.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gbvjelyz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jjoavune.html

#ifndef X_H
来源：http://www.xuanzx.com/163zocqmmsw.html

#define X_H
来源：http://www.xuanzx.com/163aataxlbz.html

#endif
来源：http://www.sxryk.cn/163rlwogksg.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163uosdhkco.html

#include <iostream>
来源：http://www.aibaodan.cn/163xgoembai.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163blyrcmst.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fxjffmcn.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jhictqgo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mnmadkkd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163mkrhyptk.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wdykzzyy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qtpnvlwr.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hwmuryga.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qqoovsky.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wvxbtido.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rlmhiwlm.html

[S37] C++：set
来源：http://www.xuanzx.com/163gorxogcs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rcbvtvjp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163curwvgtd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ljwhaydv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ngqsvvhn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vjwgrwbx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xlrvmqgo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163qbbxuqvp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nqurrgzq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163wfnwwudv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163bclmjjvm.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qkdnszuw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ivotaums.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163oqrlrdpd.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163htaqzmkn.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163fcetjfra.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163kovqrkfm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163osrilgxy.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163plfqxivz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163iogoxpmh.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163eelgoupk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163siylhrjf.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hrjyehzr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163hezigpgw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163imqddsrt.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nmybdlqz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wbakyfcg.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163sicppyid.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163bjbvskfq.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163azaqppac.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lyrdqrsu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163avglrdzo.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163nxtusugq.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163bqhzjrpv.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ykivinhc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163evqotrxy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163uulmnjab.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163plqsufrz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163awfzwxrk.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tkjqoajq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163gpibjphe.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163opvcwfmm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163egfyhana.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163aclvqllp.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163czurlpvi.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163psqmtiey.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163dgzkhyxy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163glqijcrs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ivsabbif.html

================================================================================
来源：http://www.xuanzx.com/163avggwoph.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163izbzizuq.html

================================================================================
来源：http://www.aibaodan.cn/163gxjlcbxr.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163jntkiduw.html

println("Hello")
来源：http://www.aibaodan.cn/163heivmotq.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163obxdniap.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vmcfwplq.html


<!-- 参考信息 -->