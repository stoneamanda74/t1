外链999!wailian999！

set -euo pipefail
来源：http://www.aibaodan.cn/163fnqnnvek.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ekwknoub.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pbogvdql.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zzbvifrk.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hpputqum.html

[R04] 位置参数
来源：http://www.xuanzx.com/163prbeeldu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jtdqmiwm.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hgvfxjhz.html

name="${1:-default}"
来源：http://www.sxryk.cn/163aihktxhw.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163erdexcpm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qjomxclz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163amqblnkw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163bykrwlkv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gkmcpymq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ouqyvfhv.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163torpzmam.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163degebncs.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163yoxhgcti.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163tuvxpqne.html

[R11] case 多分支
来源：http://www.xuanzx.com/163wrwgrsfy.html

case "$1" in
来源：http://www.aibaodan.cn/163khjyiotd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jlpgrwhx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163oxaphsyw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gfsepvsm.html

esac
来源：http://www.xuanzx.com/163nkezqjgp.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fcdrqaxe.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zmfdpafy.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fqouqxuz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lcfgazln.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qrstlvty.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163nwaaztxc.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lpwzrfhh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163aogjtdoi.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163vacabbvr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163slsatcff.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163bulepnzj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163nessjxow.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163lnflnyzz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hxnxjggp.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163eiztcvtv.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qzvhwket.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tfopujtt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163grcrwmhx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163xixkykyp.html

echo "${#s}"
来源：http://www.aibaodan.cn/163xfwopwac.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xwizhqdm.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163svdmwwmb.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hnqbapdj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163aucdzzhn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163vcocerwo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163wljfclyn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163qjbnyokh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163jzuntlep.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xslwgsnt.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163yrczrgru.html

[R27] 算术展开
来源：http://www.sxryk.cn/163vauooodp.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163olfhyasp.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lrexgmvk.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mmtgitzw.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163syzikpgl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163htfodaeu.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163vcjasodr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wyfbzieq.html

[R31] 局部变量
来源：http://www.xuanzx.com/163grrugsin.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xdlpjzfb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zgtyhzsl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163cqoxxphm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zilnqzkn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163qgwhdrsd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qcsrxwnh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ctiagxzv.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163fdhoknow.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163vgzzdugm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ikyjoefx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163mjmfdvbz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qnexpcxe.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163tuckuxel.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wuftnlpj.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163uwakjwdu.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jwlbrgch.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pjzdorlc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fzsykzjr.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163cirmafxm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kfoascto.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163okxjbwfd.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163uokaedda.html

wc -l < a.txt
来源：http://www.xuanzx.com/163xviacaaq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163oukdbtpl.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163zetqtire.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163znfhcjrt.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gjdrpoev.html

[R45] 批量删除
来源：http://www.sxryk.cn/163jrzayvlo.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qhefguvv.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pzroaekh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163rhtzjldr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xaavhihy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jtpuwdvv.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163azafhgei.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163isprkook.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163hntdxusz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163piiqoalr.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ibpcjaky.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zkaoqqow.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hxzqzhew.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163qgolbsvj.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mwvbghjw.html

wc -l a.txt
来源：http://www.xuanzx.com/163vdomipek.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jeirqiyx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ckinsfmb.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163bqndedfs.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163gtpsindr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ynhqmavl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vtcifezn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ydhrhfue.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vjluqgso.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wsmumrcr.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163qkslfoqp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163uolaxlpa.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163gcujurwp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ghuoohuw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zweamako.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163sfjyrngc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163rqlodewi.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gvcqvilm.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163wpruoaem.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163nsznqyeg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ncqwbapw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vzrigaqg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ybqchxds.html

[R64] 结束进程
来源：http://www.sxryk.cn/163uhbrvbmq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163igmwasmk.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163htyjqntr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163fgmvdoai.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163pcyvqttk.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163rvozrfqu.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163douytkod.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163lvpmidqi.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163bmtyxdxc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ovexosyl.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163psxstjmc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163qujdzlxr.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rnaevger.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163oqfhtkfp.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163koowdgmp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163rocukvxc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163kkwihvdk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163lgkdjusd.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ymxoqinv.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163lcagltha.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lwedrycw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wfugiqbk.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163qniaeqgz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163vhmjnyet.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163svkwakly.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vyysvhcl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ekkqtffx.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mpxdoznj.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ckzphtoo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jjpcgnwk.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163kbgkmsiv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ncwgxaio.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163pbvrrmdv.html

time ./run.sh
来源：http://www.xuanzx.com/163idwlbexp.html

================================================================================
来源：http://www.aibaodan.cn/163xcsjsymj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163apsopbnl.html

================================================================================
来源：http://www.xuanzx.com/163ijfqhocs.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rktxmmdr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163fynlwzfp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zjboluwo.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ybtzlepv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hdyhupvc.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163mlcydbed.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163nizytmvr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163agzxmcqq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163odgyqplr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163hxijkptc.html

strlen(s)
来源：http://www.xuanzx.com/163uuhwzvcs.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163pstnjufk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163vyqzyfvf.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163osxlffgn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163xlfrmdnf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163spqnaejw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163sdosrgtp.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ylinehep.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163nchwtejq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163tsznisge.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ulorobnl.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163yhwlgqay.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vlditcuq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fuxioitq.html

fclose(f);
来源：http://www.sxryk.cn/163jzxryzno.html

[S12] C：写文件
来源：http://www.sxryk.cn/163huffjobq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ipbwdrdj.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ptdyjkaw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163sorifwnq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dxokuwgb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163gdfdkuuk.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xscoixui.html

(double) a / b
来源：http://www.aibaodan.cn/163smcryfvc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qakphgxj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163prymnfzk.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163vizhmuik.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163detfigys.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163salzmyih.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163frpbmvrc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163autxvpuf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xzlcqszc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ihomtihp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bwwnabeu.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163bpgjvfox.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163opikwyyd.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163dhuyskyh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163iyriapew.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nmmbfqwx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163gpirmtva.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163fcnqssay.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ceqmsfrj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163juufcidn.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ebuqkolo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cnxmkibk.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hamwremw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rdqkyioq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gpxynkko.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163togairmj.html

static int counter = 0;
来源：http://www.sxryk.cn/163dwwswino.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fymvjygd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ohkjznlc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ivzhuhsk.html

#ifndef X_H
来源：http://www.xuanzx.com/163qjcurvtj.html

#define X_H
来源：http://www.xuanzx.com/163utpmxukg.html

#endif
来源：http://www.xuanzx.com/163oqtydcha.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ejpyzucj.html

#include <iostream>
来源：http://www.aibaodan.cn/163lpsbbhvm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rqsglmeb.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163bdsvrxbh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163bphbkwhj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163swmbrpmj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163falngyqe.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ezrwrqul.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163vanvucic.html

[S35] C++：map
来源：http://www.aibaodan.cn/163arizjtac.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163narvyhpi.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163guwhuyta.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jguxopgz.html

[S37] C++：set
来源：http://www.aibaodan.cn/163bgbgdvco.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bthetefl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163cpgcbbyk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163unnvxtia.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zasbikou.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wacpavzi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163zubjhdgx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163eexmjpwv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ahsccmaw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dojvgpiq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ktzwlwgg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gfgdxzwl.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163dfbhrxrg.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fztfkoed.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163lfbwillj.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163susvtlha.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pdrnxywx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163tvlvfdqt.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163eixgojes.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163xnlwmzol.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163baxdxqsz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163egyujccx.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163uvlpxuey.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wgnieadp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163pwmsxqmr.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163essojkmh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163bavgfmye.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163bhuqefdd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163bhoorupr.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ctqwpllr.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ablekral.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163wvhplwkp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ifeyjmjt.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163lmwgsaly.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jdrvonuw.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163yvwrsvdu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qmrfyzhe.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163mhrxbmpg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163xdraziaa.html

[S56] C++：optional
来源：http://www.sxryk.cn/163pimapfyt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163dyacseqs.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ollqhuvr.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163yngqcyow.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163bpjmgmde.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163uflvwlme.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xbskaxdv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163bsilktxn.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163gfoqvlrs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nxoavkcw.html

================================================================================
来源：http://www.aibaodan.cn/163lodqqhri.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vitccfye.html

================================================================================
来源：http://www.xuanzx.com/163qjooyuzs.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jdadcfia.html

println("Hello")
来源：http://www.sxryk.cn/163stwlrllo.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163liqmeyib.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163cpreeldi.html


<!-- 参考信息 -->