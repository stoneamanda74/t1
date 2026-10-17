外链999!wailian999！

readonly PI=3.14
来源：http://www.aibaodan.cn/163qzztlzvn.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163tpfupyyn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163grxijgre.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jwcekyml.html

name="${1:-default}"
来源：http://www.sxryk.cn/163aklqilcy.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ubagldrc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163rdzzkgmq.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163lwxmyfcn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nybtwqma.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163nzseyqgm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163jpyablhd.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163hlcngxya.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ymvprvxh.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163kypkslov.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qgdammgb.html

[R11] case 多分支
来源：http://www.xuanzx.com/163iuqrjgij.html

case "$1" in
来源：http://www.aibaodan.cn/163mtpjibss.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163jknsmlpv.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163odeqdpvd.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ieswgvxt.html

esac
来源：http://www.sxryk.cn/163fqeprygo.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163pmvjyolc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163jfoenqdf.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163xajfrnry.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vuukykcg.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xsgtpxdo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163uvijlzgs.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163xknohfqs.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ecvkjpaz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vnfxzvrb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wyvoyooi.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163eqhgvnpo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ghvqaqog.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163dolytfzm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kjmgijqh.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vcbbkdtc.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163stddxyov.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163xmeqpvei.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163xjaagrnj.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ehxiaaok.html

echo "${#s}"
来源：http://www.xuanzx.com/163vutuopke.html

[R22] 截取子串
来源：http://www.xuanzx.com/163uofqpksj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163dpczdoeh.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tqpsxhxn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cucgysvb.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163deefhoyb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163bwxgxvew.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163tvjhhyqr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rvezvqfr.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163arbmflfa.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jdzfodsd.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163khgdalbt.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dhibjitu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163trquxnyz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163triidbdb.html

[R29] 定义函数
来源：http://www.sxryk.cn/163smlfnyes.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163fyofnyge.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163vylbmsnv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163tjwthxya.html

[R31] 局部变量
来源：http://www.sxryk.cn/163aiapjdue.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163qoznsjut.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163itbtqfus.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qbcuxotl.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163tnssmljw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163nzkhznfb.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hmkzyqjp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163psnwzexs.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163wxirvzzg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163fpsxvmul.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163iafdcpsk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jlbrbvoz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lkdnvuyj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ivlokucx.html

[R38] 管道串联
来源：http://www.xuanzx.com/163uptqlycv.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163htkmcjwx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qkqcnpbj.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163fustdwfz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163lshcjpgt.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163nwgmdebp.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jtueoyzf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163laxkurvv.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163acddtvvw.html

wc -l < a.txt
来源：http://www.sxryk.cn/163fzwawadf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ypdolxso.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163rnpcuoym.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rpucaavy.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163pkifgnxq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ljxonafi.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ghfxbtxy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ogwqythw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ndlkfbko.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163mzswpokv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jwmdzshm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163eqtoyouq.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163jezyjvok.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163chyuyqxz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163tdpugfib.html

[R50] awk 求和
来源：http://www.sxryk.cn/163wanipoph.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163jhsizbhk.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zwpacfip.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mifphmea.html

[R52] 统计行数
来源：http://www.xuanzx.com/163wbitsqku.html

wc -l a.txt
来源：http://www.xuanzx.com/163jcertxzq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163uxrvdvic.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163etofreck.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163blopcbwq.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ctsjruca.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163yehplovx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163krgygjcs.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163aywslwwl.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mssduggt.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jldaduew.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jcrhhqno.html

[R58] 下载文件
来源：http://www.xuanzx.com/163rxtrtfrg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lhipuxcv.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163klbvkydl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163kxpjpxfw.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163oyfoaqnk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ibrcgqqs.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163srminenk.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163omubvgwg.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163uruwsvca.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163lquocotq.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ixyxwime.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163fxvjkcmc.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wzafkltu.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pkzagoym.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163oblujizp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xjkgzwgb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163yavhpegi.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zgudbrlk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163cyaqgdxd.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ajglohzb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163sztluwwv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163hbimqfef.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163esntiaet.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163cnqvxnph.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163klssjtvj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163uvfrrbsu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163zvrtcspr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163pyyrirqk.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163achsfoij.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163xhtammqv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vtxgiblz.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zibtyiwy.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163aqepsbvr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bxkwiazj.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gvqulirb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163rfcwecgu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163uelytcbw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mlqugzaq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163dhsudyeu.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163bojxyrrt.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163hllqlssu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ludtzjdt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163owbdpaol.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ikxwkrfm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xyuvpsou.html

time ./run.sh
来源：http://www.aibaodan.cn/163udtujycq.html

================================================================================
来源：http://www.xuanzx.com/163bkmtitmz.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vqnrchkt.html

================================================================================
来源：http://www.sxryk.cn/163lmcpcwzq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163zpzdltuz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163fjnpwlxq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163yilmfhdn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nsjktdxx.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163buigcbvh.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163cvoecxrl.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163imlyycsv.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163fanvkwzp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ubqrkmyo.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mxfvzepm.html

strlen(s)
来源：http://www.sxryk.cn/163xbzhvhvq.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qnxuwxms.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163sulhhxmc.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dizjkuvu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zjyechnx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mqwffqok.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163biujyvas.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ymqbmoqy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ruytygho.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163emflkfmd.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163buwcdsdy.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163sqxzhlwv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bezcvfif.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163resyrajs.html

fclose(f);
来源：http://www.aibaodan.cn/163cdypmzam.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163tkmmjroo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pguelowx.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163oiizlynq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163dynkwvcl.html

[S14] C：枚举
来源：http://www.sxryk.cn/163qbymekdq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163rssbgfur.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dosirayy.html

(double) a / b
来源：http://www.sxryk.cn/163ifyycrxl.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vyppaidp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163niioowtq.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hxbkrxjs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163nwyeivny.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163acgrswvn.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dgralbyz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163amhevaep.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wzopwlpb.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163lbnfnrgd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wthacskq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163bbzdnbjr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163glhantew.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163plhwzsxy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163niemkghq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dsaikluo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163tonwvhbw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163abfsasnx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163wipvhdaa.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163lsunfrag.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163kjwbzwob.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163fjjkvkhm.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163fhymugev.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bvadbvmt.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nqswnndb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zehbmuzu.html

static int counter = 0;
来源：http://www.sxryk.cn/163okhukesn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163vzkfbsrb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163hxemtowe.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163shlcgika.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bddkkxwp.html

#define X_H
来源：http://www.sxryk.cn/163flxvbqqu.html

#endif
来源：http://www.sxryk.cn/163kgnjkqpt.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163wqeywaip.html

#include <iostream>
来源：http://www.xuanzx.com/163qsxpfdgu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163kgqyqvpf.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163walxaqfo.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163vheksenj.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163awowtslo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163xlyvxmsz.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163uexvytcj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163frtwazbu.html

[S35] C++：map
来源：http://www.xuanzx.com/163quftzpmb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163slmohddr.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dzptoylp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bdzavkhc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jhmzhwuw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163lqysplxw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163idoggqee.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163majtvmte.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163qbkbwwop.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163gskenssg.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pugtlida.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zerqotcf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cgshkyvz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163hohadwvl.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vnrxpfuo.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wnpiokgy.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163gnjnvyer.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163qmcyzhpb.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163klnchgrg.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vfafnbyj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ujibgpnq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163jdrxuyfe.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163clnqztso.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163lmmmakhm.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163olgjndqb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pgmugger.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163lecrclko.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ljkqswsw.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163fnsslbdj.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163dozwjyso.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zkctrqls.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163lathbuwr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163cmyxkkpy.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hqbdkuvx.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163yohhvprq.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jdsfexor.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mcfpdgks.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163dlvjihjg.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163endajqkz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wivglljg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163csqhikoa.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tokewbtm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ciwcbtco.html

[S56] C++：optional
来源：http://www.xuanzx.com/163exdtwyxa.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ltguoxzc.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163jzotyqgm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ejguwewl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163gtzilfqa.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163zlbeofsa.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ilafilft.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ggphudkj.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163bwkfbgjf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163blpokuyv.html

================================================================================
来源：http://www.aibaodan.cn/163vnuravgo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vvztbzzf.html

================================================================================
来源：http://www.sxryk.cn/163qkboqhqb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163xzqzlgrb.html

println("Hello")
来源：http://www.sxryk.cn/163kemxsmei.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163luftktua.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ufseydik.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ermiciwn.html

"值: $b"
来源：http://www.sxryk.cn/163ncifcryz.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163cpnckchw.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163wwbcnqhd.html


<!-- 参考信息 -->