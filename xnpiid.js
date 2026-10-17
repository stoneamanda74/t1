外链999!wailian999！

R. Bash 专题
来源：http://www.aibaodan.cn/163pxqrvtzt.html

================================================================================
来源：http://www.aibaodan.cn/163mfefoucy.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163sfwiiuwy.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163muaxcosq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163bugozudm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jtvqhudr.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163srjlcyxv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ljyizeke.html

readonly PI=3.14
来源：http://www.sxryk.cn/163hhlzmsrx.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163whfaocxu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ekfocziu.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fiuvsdpj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163rnlaetxp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163xiylqwax.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163tklkugsc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163mdsjuwkr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163sitcfnkj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lhtucfkf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ccodgdsd.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163vbgtjjjn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163fcbehlpn.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163afqmdouv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ttdglejj.html

[R11] case 多分支
来源：http://www.xuanzx.com/163wsswablz.html

case "$1" in
来源：http://www.xuanzx.com/163zwszfxnx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163akjcianc.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163wpifljtf.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163evktklxm.html

esac
来源：http://www.xuanzx.com/163okyolpuq.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163qgnsznop.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tuveflqv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jxrfxafp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163omoqcphd.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163umxvgwno.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dalttoam.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163csfyqryc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163xljbghgf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rsrdndqu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ycbhpbeu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ezzltfda.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163mpjlgbcm.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163lcsgwthw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163dpnbvyjr.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163klddtwgq.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163klmpidvv.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163pljirlhx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163wkbkbnwv.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qdpvcnmo.html

echo "${#s}"
来源：http://www.aibaodan.cn/163chamkhag.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zzomhtft.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xxdkherx.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163gyhrzmxu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163qqxynjtp.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163wpyesyym.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163gdvxsusm.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xxofyomi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dbcbepeh.html

[R26] 命令替换
来源：http://www.xuanzx.com/163dzuqmlmk.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rvpjnxko.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163unhvrlxc.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163jqdqvjql.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163bvlnftxq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163giucxisr.html

[R29] 定义函数
来源：http://www.sxryk.cn/163pvomsvoh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rlnwzivw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163dmoukwll.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163dbabcrbb.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163emttuvra.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163btasplfj.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163beqifwjv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163axkioxbw.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163jhmeswsg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163lfctmbtp.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qnmdtops.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163topfezjn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wrwaaaso.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163viixecsx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163upgjqacx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163rddsoihs.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hdotanzz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163gtxgryee.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gkbtjsup.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163blmogfuc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163zrqhbnhz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163kcrszfot.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163uoxyetae.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kbcgsqtb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163cklzjpcb.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wankdpis.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ofilcrxk.html

wc -l < a.txt
来源：http://www.sxryk.cn/163prbcsrkz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163kfsemcaq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163mtichacd.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vilzlodw.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jrsoiiza.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163gskgkfua.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163aplmkxdn.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163btdzwtsj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163kzigvfgi.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ehzcemot.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163nibcmnuh.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163cctbfpvq.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vvxkclsp.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163medhpnpr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163wpgaclgo.html

[R50] awk 求和
来源：http://www.xuanzx.com/163kgcmrtzn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163sakthpmg.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163cuqsurxb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163xyscqnhm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163drnoocup.html

wc -l a.txt
来源：http://www.sxryk.cn/163kywiavwu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163rjmxbmcu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ozdsgmen.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163orueerlp.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bkkupyam.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tjstcgsq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163dwdhyyrz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163pnpctbhc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pgajpwsh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qbakcufk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163dpyyoauy.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ltevfbaz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vkhveeku.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163neeabhzp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163unaxflxh.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163pmdndele.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163sxerfoaz.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163aqcrifmt.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mnqxwzxw.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wrpipeea.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163wmohkeer.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163atjohzwz.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163tahrndwi.html

[R64] 结束进程
来源：http://www.sxryk.cn/163emmmgzuc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rkjeyuvf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xvrgdpwy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163wmzdzopl.html

[R66] 定时任务
来源：http://www.xuanzx.com/163pvjyfaxi.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163dybkibqt.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163honxirfa.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163hhvlfmkj.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163gtkczdli.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163yunygshn.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163bgqfjcfh.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163cwvynpwr.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163mobzlvrd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lnjaahno.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163wbrgxoza.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163laihudxt.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163btcqzelm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163iawbqtlo.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163yxdomqln.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tracjlap.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xdglyhpu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bicvgcuj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163asdhqbkp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163tkhhcekc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ykdyvflq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pcwtwhun.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163kguitipj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163utlxbetr.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163arekpnqw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ryjqgftl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ksnoeosb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163oityougv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163hfwixyvq.html

time ./run.sh
来源：http://www.xuanzx.com/163ywftkdzv.html

================================================================================
来源：http://www.aibaodan.cn/163ficmsstv.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tscutxye.html

================================================================================
来源：http://www.sxryk.cn/163zeevjrsp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vpaixnoz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bknfndju.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ligpatmg.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163tdvkywws.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jrtziima.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163lodsuroq.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163rrsfviwu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ftovstav.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xwenxvni.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tpepsgdm.html

strlen(s)
来源：http://www.aibaodan.cn/163oixdxeiv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163nsldweof.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ebfkeqeb.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163uopyoofn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qmhkjakp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163cyylnbew.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163inxbwfkr.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rsoxrxwr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163xkbdlzhe.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mjmrqadh.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ahhxwicm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163hhdvtlyu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jmcjltzf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163rafethzl.html

fclose(f);
来源：http://www.xuanzx.com/163clrojvin.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163stmlsmjd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163limrydpb.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163kdxwviyx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mtaxtxou.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gxgpjvei.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163dgzphqet.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163oaracveg.html

(double) a / b
来源：http://www.xuanzx.com/163dnebkljq.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163tecskprz.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163qwkzkyqd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163dnksphkj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fvxmfwjo.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163trlqedwg.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163htyfqtjw.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vsynqykj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ukqqrdik.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163nuesvlgi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dvcotexr.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163efaexnoa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163vtmiozqi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dwjcidro.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163abokdann.html

[S23] C：随机数
来源：http://www.sxryk.cn/163kscjmpma.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163azfgvfql.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zuhziwba.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163nqqsbvgv.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163oztpvawf.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163msjyvhua.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163dozytyyf.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163vyjeizhw.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163neztvawn.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163pwhoiamt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163tqtbcpkk.html

static int counter = 0;
来源：http://www.xuanzx.com/163uonsbnwh.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yoiqknsa.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163hlypqpwr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163efydctee.html

#ifndef X_H
来源：http://www.sxryk.cn/163rbqfsvou.html

#define X_H
来源：http://www.aibaodan.cn/163rfrgkvyt.html

#endif
来源：http://www.xuanzx.com/163qalxriiy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fxekiszp.html

#include <iostream>
来源：http://www.xuanzx.com/163gsftnhbb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163uiiqpvyk.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163bkxwvuby.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wodhevrj.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163yoxlfgfr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163crovxlbi.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163rwjsrewh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xshsgpec.html

[S35] C++：map
来源：http://www.xuanzx.com/163rmcgbvhm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lbhtqkym.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163faldwkol.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163witxzred.html

[S37] C++：set
来源：http://www.xuanzx.com/163hqbjemxs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163kggwzzdl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163bozaeanq.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vqskzmkk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163bfnmwjha.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ryjlspis.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163yiqmfgyf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163kofyjqlm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163tkuqypyz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163vwwgulrm.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rncreygo.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qtyoyukw.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wixdfnyb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163iowtqhvd.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ergimmwz.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163wrguidmj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ktrhjgya.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163btmterbd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163boybvnnp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ycdjepzg.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163emfreuur.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163srndaejy.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163lrbfkdua.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mvtrwfyt.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bbnppptw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wycpzddz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163eqbeyrhu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ukxxpjqn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163fmkdzurv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163rngcvadp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163gicughxa.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163zfychsle.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jencrrsc.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163oseenuoz.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ztkloiwk.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163trrkoraj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163fykvyuic.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rtxjohge.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mnyfxkvu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163dcudubao.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163zemoeksi.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163caiaxynk.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163joranwea.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163zmguuhrf.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163konbfgnl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zomwgwys.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163iccbcpyr.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163zexiuauk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xizybqdi.html

================================================================================
来源：http://www.sxryk.cn/163bnwoprkg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163uncsnphg.html

================================================================================
来源：http://www.sxryk.cn/163utmpwsxy.html


<!-- 参考信息 -->