外链999!wailian999！

set -euo pipefail
来源：http://www.aibaodan.cn/163nwddwkhs.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163utbphrfr.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163sunqviyx.html

[R03] 只读变量
来源：http://www.sxryk.cn/163dciikwtl.html

readonly PI=3.14
来源：http://www.sxryk.cn/163mjofedxy.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hmtkcuxd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163hvlkcerq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163eytzhyyb.html

name="${1:-default}"
来源：http://www.sxryk.cn/163sdjgagvr.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163kqfwflnd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163sbaogvjc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163zjswbfcm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163rfmfvkxc.html

[R08] 数值比较
来源：http://www.sxryk.cn/163hioosegk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ydxfothw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hennnuoc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wbrmpqbm.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163uexikmwh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mwmcgqjo.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163igtolbpb.html

case "$1" in
来源：http://www.sxryk.cn/163frvrvtzk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163geecxrjb.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163uhzxpsfr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163wmolxfgv.html

esac
来源：http://www.sxryk.cn/163ouolebvw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163gaopmvga.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tpvjqplu.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163whakhdnf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qhsrdzdl.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qmzgoikb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163etgsvsyd.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hiyptnpf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163aduonkxy.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163fqrfmaoi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163usvjkgwc.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163irlmtkpj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ryrjsgpm.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ndcqtvrj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163yzqzlppm.html

[R19] 数组长度
来源：http://www.xuanzx.com/163hcdlsjnu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163meaxzbhv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163rmwegxov.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163hrscqyuj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vemmofbp.html

echo "${#s}"
来源：http://www.xuanzx.com/163uvgulizf.html

[R22] 截取子串
来源：http://www.xuanzx.com/163mrojguju.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163pdaxswdv.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ejqlkekh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ugrgtzio.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163tbmakttn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qeysishe.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ggelrkdo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163acfybkfj.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gthwupoy.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163bcfuzmxq.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ewfmyrcv.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dcfbsfzu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163wmokwubf.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xduthasn.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ndvtlihs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vuxitliz.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163anetxelc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163adwtihxa.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rcodqlwa.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163pipdjtgu.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163seosqbdb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163nxvwqvmq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163gxbbaixk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bygpstgq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163kglrvhan.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ayinuzvl.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jtfxqmzp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163zikpjjza.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xjqgyhok.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163zmbbhrrx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qadnnxlp.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nstmdmss.html

[R38] 管道串联
来源：http://www.sxryk.cn/163uyafeqpw.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163sydldkwi.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kxldjink.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rzuhkyfj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ugsnrmuo.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163oxihxfqf.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163aoyemvcj.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yxlhmgbi.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163evlroebn.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wymltzgb.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qacgwqjj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ovyowvbl.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163uralcbrf.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163imikqvpw.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163acpdxqij.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gferhhpn.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163pnyidixb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lbgxylez.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163zsjftegg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fxgtuioc.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dywqhhis.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163pawzxxiv.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163iobcdmho.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163cobqmdoz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163znxdgkec.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163pmzyrwwm.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dxetwgut.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cijlkcpa.html

[R52] 统计行数
来源：http://www.xuanzx.com/163nlhfbvju.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ttsvddba.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163pkdjqqko.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ecjcnsqn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hyacpebu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163yiiwxbld.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163llrsanav.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163aslnduio.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163pgiznosi.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163oawjjtmt.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163rmlqbdtj.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ftihoaro.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ctuvzgsc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163uqloycbz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163gemduslw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hvvptogo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163jcxbyxef.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dtcnwntv.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zaqrgoqq.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163bgoefbor.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rxjfxcem.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163osbtgqlc.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vzxqdjen.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qyshvpzw.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163lpdoohzx.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zkyiiuoc.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163bhadmtsa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163cqfjwjsh.html

[R66] 定时任务
来源：http://www.sxryk.cn/163okieifnp.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163bsmdvqiu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163jtkjxown.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163dulkzvhk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163zkyqbvfy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163eyzoiwwy.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163tsxttpid.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163goadadmp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163hldowive.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ebgbvsxv.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163gvleusoe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163insabyad.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163lttphsvg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163aneqwseq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vfzyvioh.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163cdxcdtmr.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163gfmktkbq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163kwcoxcha.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163yqvdfpvy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ytysgtom.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163aasawqui.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bwcedjpv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ptyonwzj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163pajjlijx.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xqriharj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163vqlluwow.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163oxzadgcr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163pyxfcpzw.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163aorsdupe.html

time ./run.sh
来源：http://www.sxryk.cn/163fhvoplbw.html

================================================================================
来源：http://www.aibaodan.cn/163vvtuxwnl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fhsolmpv.html

================================================================================
来源：http://www.aibaodan.cn/163mguwivly.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163rkizvffw.html

#include <stdio.h>
来源：http://www.xuanzx.com/163uulahsxs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dxawnjjr.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163athhnbbb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163uzcxiiam.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tzvkidwo.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163mxmlctej.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163bdwyrjao.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jdclujkp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163pwdxmjaa.html

strlen(s)
来源：http://www.xuanzx.com/163sndqumdl.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fsayiprt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vnrhosck.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163jzqxupcs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fkysvmhk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163fqvweukb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tsdykzzx.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163stegdghk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jjyetysh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163bhfwrblp.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163nhrbspgl.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163sljtrkud.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163tunebamm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163shplseib.html

fclose(f);
来源：http://www.aibaodan.cn/163ptolneos.html

[S12] C：写文件
来源：http://www.xuanzx.com/163agkkmfhe.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163aklpdjht.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163saijaodv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163kwhtdazg.html

[S14] C：枚举
来源：http://www.sxryk.cn/163pcjajfdo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ghubxmwf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163dozrxsnl.html

(double) a / b
来源：http://www.aibaodan.cn/163xdwowinc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163tnxiniuz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vyvrqmpa.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163vmjajzfm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163aotymqju.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163gcbntetq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ykkarbnl.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163tkqkuhcb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gglibuhp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pjxocrdq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rrxgsevr.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163lssnmfxj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163yvigkgdc.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163icrgnsmc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ckhdqyfa.html

[S23] C：随机数
来源：http://www.sxryk.cn/163odjxqsze.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163pwzqlgks.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163syocvaqv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mhqpoebn.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163jahmasxi.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163olcozaff.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163lrrcwwml.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163bxfreyda.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163stvcqdca.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163pmgqospp.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wydydorg.html

static int counter = 0;
来源：http://www.sxryk.cn/163clgnxdxf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163lozhaane.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ehvdnfzf.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163icbdjrig.html

#ifndef X_H
来源：http://www.sxryk.cn/163jefykbdp.html

#define X_H
来源：http://www.sxryk.cn/163cztvdekj.html

#endif
来源：http://www.sxryk.cn/163lyakwbhy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163lfheufer.html

#include <iostream>
来源：http://www.sxryk.cn/163zmhngpoi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bjtwbttq.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wrlcfndf.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cazgsjpt.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163xknqdjwp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163asoicdqi.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163xlnytrpa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xbyinqbm.html

[S35] C++：map
来源：http://www.xuanzx.com/163mabvziqm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fyobmhcc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163hqkjjbjp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ooluhtyt.html

[S37] C++：set
来源：http://www.xuanzx.com/163lanztzot.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ebtdcqvs.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ioomvthn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tudzxeog.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rnlofepv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163azwilwlm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qalztfks.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163bnmpdqto.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gqrkajcl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163kowjnagm.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163fxsxmcsg.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wthnksjh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rckgmakw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zcuspjid.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163shnxnlfc.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163opvaejqa.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163wxjstvug.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qxdkgemk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163tezfafik.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zadvlzcq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163kewvdaiw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ngsrqehn.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cwgqbnwi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qvjngcuq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ioxumvog.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ifnwbqmp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ggtqnvev.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163uxjmkwvb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163hcxkdwwg.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jnyzvoto.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163hybqiyvu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163fsvvsrfp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ilnmingf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ayqksysb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163tnmsmlis.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163jrotndgw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rgarmltv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163rocsjzmr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163siikdsdg.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vunlngko.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163lkxziuja.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163qpvwnfei.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163stxvovgj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163wgrptmin.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xsadourx.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163dndslkmo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163asrvszkd.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rdyffjon.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ojcuqjrn.html

================================================================================
来源：http://www.xuanzx.com/163suhppqrc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ctlxwvyz.html

================================================================================
来源：http://www.xuanzx.com/163otastjje.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rlgakzfe.html

println("Hello")
来源：http://www.aibaodan.cn/163kjnyyyku.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zfkmbgjk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zdqvklvh.html


<!-- 参考信息 -->