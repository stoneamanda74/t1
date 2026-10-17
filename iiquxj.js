外链999!wailian999！

readonly PI=3.14
来源：http://www.sxryk.cn/163ttysqpby.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xhlkzztu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wkgenmhn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163tqrvctus.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163bvzhlyfe.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vngxmjnm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jaxqawai.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163pesocpez.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163wovzeueh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163cvcnltqr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163zewdhxlr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163mghrukxb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yvyrxkln.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163kobxnrfd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163loetblgx.html

[R11] case 多分支
来源：http://www.xuanzx.com/163rloqvrrf.html

case "$1" in
来源：http://www.aibaodan.cn/163cjzjdcjl.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163iqxktcft.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163briypflc.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163rwyiaoof.html

esac
来源：http://www.sxryk.cn/163lezdzxob.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163oijzasoo.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tyvpblaq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nfiqdxfm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163guixtmod.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qdpzwqqj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163cycmwkxs.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163xmpqgpue.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163eeqzvelt.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hqesvlwk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163rkkbeetw.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sdangbos.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163gccekltx.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163mhnopfnj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163uiihthtg.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163runrbdes.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163bidryrre.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qrcwhyjk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rmambeas.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mrdxdraz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163kkimmdre.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zvdhdinl.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163lfqbwcmh.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163lyjxeuct.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163eocqdrhw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163sxbfykqa.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163xgkvukyl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163uilijjwk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163gqdqjtze.html

[R26] 命令替换
来源：http://www.sxryk.cn/163jphmlkop.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163mbxiwnbw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zixqsbnr.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ybskmofd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hadtzzhn.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yivmllsr.html

[R29] 定义函数
来源：http://www.sxryk.cn/163mctajzhe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vdjbswbu.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163xrtqhqqp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163sglkmzkd.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fialzimc.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163bhxwcpse.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ditiyewx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jbnkjytd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163uatsohho.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zvogknyo.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bthroild.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jqjdioft.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zhkklxzs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163neboaksk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kewpyyyl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xvdiftvr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163slnpumrg.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jkfhtesn.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vfoesbyo.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vpyyifqn.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163kmsgmbzx.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163hmimclqk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163iifspmnx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hmjoudkm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163hinbtnnb.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163brcrvmkq.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ulcdgnyf.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163binevzfr.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163gtebauav.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163blflksiu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qjbbeybx.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ittjzfkd.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ptiadube.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163scyfclvd.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163mvcaughc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163csrawrgz.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163aucibwhm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wauxtmlk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163sdxvefwx.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163zvbbcgtg.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163emokowec.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163diafajfx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163cpudxofr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ahgegrip.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163owrahdmz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163iennvamd.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ypyddddu.html

wc -l a.txt
来源：http://www.aibaodan.cn/163yatskgyt.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163uoyoiurq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kpquodsk.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163sfulqwwx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163yofhfqzj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163nuxtubxu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ciazawoq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163pihzozzz.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163umhhvvsy.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163iwhrfybi.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163wevrdcju.html

[R58] 下载文件
来源：http://www.xuanzx.com/163xrjveuua.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ycgvthzp.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163xyilqlsd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163dqcjiaar.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163igrppvrk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163anemnluj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hultlubb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163stwxucjf.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163espfbjru.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ubicrvdp.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ieejpkqc.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zbodrrjt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163zeuewibl.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nabyezdi.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qlfuqvgu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gjsuobuh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wyhdjzsq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ctwizzae.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bbxjsrcl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163sldmvmsw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163nuaiiywb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ikuodcib.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mjxmmqzh.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ktgitkdg.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163dojxpcgo.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lqrghcoz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163uvujmjie.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ydndhnxf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wkxlcdvm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163fkesqilk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163djwknosm.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163vbocwznl.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163bawtdepr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163gusgamjx.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163htmztajs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163nwtipsbe.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163lokgbqtq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zdszwpou.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163kuihgdah.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hunpjnwg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163sfivaiet.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163brqgxznf.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163kxsllgxa.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vzyghzms.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nnhsyjad.html

time ./run.sh
来源：http://www.sxryk.cn/163ycafwnlh.html

================================================================================
来源：http://www.xuanzx.com/163lgtshmee.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xurkrgjo.html

================================================================================
来源：http://www.xuanzx.com/163qrccslwx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163wpjzbttu.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bmzwfbbj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rgwnqlip.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163agtmusie.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163uljsqufq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163jiiizfoy.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fzajlymc.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163kstmbjae.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163txjsgylg.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nuvezhfm.html

strlen(s)
来源：http://www.xuanzx.com/163snxvsfca.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ysvuiuab.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163cwrvrahb.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xpdogmng.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163mgvwrlxn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163zjhkiocw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163sjndashv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163gfspunso.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fhlwetga.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163agiygxvh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ztvvyqrn.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163uxmzxvpx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163dmqrvlxg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rskilpbv.html

fclose(f);
来源：http://www.aibaodan.cn/163lprpdqbo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163mwcgvcng.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zrktzpqo.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163shtmbyld.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163rsjknmgu.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ytpxmmcv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163oyltofon.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163uqbyczzi.html

(double) a / b
来源：http://www.sxryk.cn/163xoytnhlj.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qvorwwmt.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ojdkfqqj.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163vifhzynr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163exkzaaso.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163cbqmbvef.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rzetwrrl.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163jjsaamcl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ulihpwzu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wqfxrxzr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163erywmoon.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163zrxuxitx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163uufhhrks.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bftqsjcb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qoryyuvd.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fuorryzn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fjohwooo.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163olrnvstn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hapwzqtk.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vwaefqvr.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163sqgznzxs.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ovjtmhun.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163yeezbkvs.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jnoignvy.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lrpcnrpk.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163otbnubjq.html

static int counter = 0;
来源：http://www.sxryk.cn/163tskfypzt.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wxtnnyvv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163eqvtlbbh.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xkemwkir.html

#ifndef X_H
来源：http://www.aibaodan.cn/163aplnoylr.html

#define X_H
来源：http://www.xuanzx.com/163vzhxdexn.html

#endif
来源：http://www.xuanzx.com/163jxteqezx.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163axkxjujb.html

#include <iostream>
来源：http://www.xuanzx.com/163naqxsnkx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163dkkhegtv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xmxfcoxc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163egxrnxcr.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ohxvpzci.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163sdpcprke.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163cyachplz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hynjehhq.html

[S35] C++：map
来源：http://www.xuanzx.com/163sflooril.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gmalmrxm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163oqzmufrh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cxvrrhdu.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ygcinxiw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163txbysylk.html

[S38] C++：排序
来源：http://www.sxryk.cn/163bioaepxq.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tntdshwk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163animttby.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163snczmeqz.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ksktlhwx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163nwycicbs.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wqiazuyl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163glezqoik.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pzslgvke.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hlbrkpmy.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ygmmdrah.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xnbprwcf.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163mopmkfdf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163cxcqlxna.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163veowfwuw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163noajvzus.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163umkszljq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hnsqjqhv.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fjlvndzt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ynrilfvk.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163cwiiavjy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163gostlqqm.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163wcrqbezp.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tjwsvkkz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163kfvfmtsp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163igcnflnm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163prixjezd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ksdfrxgm.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ghgaxjjs.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163punyvjpz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163mvjzzaun.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163nzgkpjqo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163whuqadcz.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163dxsjfjnx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163vyldphnj.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nrwbrzww.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ifjqolvb.html

[S56] C++：optional
来源：http://www.xuanzx.com/163leoahugy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163negioyzu.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163kdfznkxr.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163uvugpapd.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163xqusajlb.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jufbayod.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ovzviebh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kmbqwwar.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163elsramad.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163aszssvzl.html

================================================================================
来源：http://www.xuanzx.com/163qpksrxys.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ngxerzoq.html

================================================================================
来源：http://www.xuanzx.com/163xtcnwaax.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163phqwhwwi.html

println("Hello")
来源：http://www.xuanzx.com/163zpcgihzz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163qidlabmf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163tntulglj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kteozbjk.html

"值: $b"
来源：http://www.xuanzx.com/163fvnorqqt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163npkvyogz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163eilhigcl.html


<!-- 参考信息 -->