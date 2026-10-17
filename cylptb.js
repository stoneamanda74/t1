外链999!wailian999！

set -euo pipefail
来源：http://www.sxryk.cn/163ahwsdazt.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ykukzzsq.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jatlghic.html

[R03] 只读变量
来源：http://www.xuanzx.com/163dqmywsyk.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pmcwtgbw.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ordkyduw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jqszhjoj.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163eobpvjxc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163musvmopk.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sshvwbwt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163opsjezyv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ijysqjfk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163bafxgnya.html

[R08] 数值比较
来源：http://www.xuanzx.com/163dzdqkwuo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163wkxbwmjm.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163sfzjuccm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163fcsjxyvm.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163vvzukler.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qzamwnqj.html

[R11] case 多分支
来源：http://www.xuanzx.com/163yulyxpna.html

case "$1" in
来源：http://www.xuanzx.com/163dyyyaahf.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163rsptmaho.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mdfsneci.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gpgfbaut.html

esac
来源：http://www.sxryk.cn/163jqaoenfm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ljvzwhey.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163wsakmmsz.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163sdhwgmfc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163uuuoaqbd.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163emlhrrjz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163srenzfce.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kjnywicm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ktzzelus.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rdzpkcuk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163gaxrklhi.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163oywlffew.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ebpgedba.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163krytqgje.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163btjdaime.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dupllagl.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163hphfpwaa.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163agnnspif.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163asltzvty.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rikkskww.html

echo "${#s}"
来源：http://www.sxryk.cn/163ugyaaqyy.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wqfdtagt.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163oxpjkkuc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163jcanguur.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ufvarcye.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163nlrniava.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ilrdfcsx.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163zwrxydvl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wbkwndtu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dxubmylo.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163efjxbhxz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fwghesie.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163biazguil.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163oudewamx.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163smjsbowp.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163vhfoabmi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dknotfca.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163pltmfouj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163gzplbwru.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163dlybbgai.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163cdadncie.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163uspxcsel.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163vucnovad.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163epeorlvn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xlywtyhr.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163balqlaoj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163przxeeqk.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tvsirawy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163rczlbczq.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163dbfrrbdj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163izkbfmks.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ruayvqbi.html

files=$(ls -1)
来源：http://www.sxryk.cn/163dtkzoaks.html

[R38] 管道串联
来源：http://www.xuanzx.com/163cxytlnzf.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163gumkjmaf.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ibtnvait.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163wifadkcu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163qaxyymhy.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rkrvznxf.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163qidekrcz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rerlfkgc.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nhhmpaox.html

wc -l < a.txt
来源：http://www.xuanzx.com/163uvrkubbi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mloaoncx.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163usxnvinc.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bcwegvsk.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163orzxnbnm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163dyldyvuz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xmtuhmrj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dfjndjaw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163tzcwgsde.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163izudzswi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wanddrdm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hfiaxzzk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163xknmrcvs.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wctzwysh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163roxdgrwt.html

[R50] awk 求和
来源：http://www.sxryk.cn/163sapeonuo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163mzktimnc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163veyfubwe.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163waurabny.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163jnnufuct.html

wc -l a.txt
来源：http://www.sxryk.cn/163wjbuztlp.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163rrhhkxfw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163rhvwepod.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lhdodxzm.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163fbhqmcly.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163xcwclbmu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cpvbjvdu.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xfzgzoge.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163iipiwnqc.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163cdvyyxbi.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163pcpzvljk.html

[R58] 下载文件
来源：http://www.xuanzx.com/163pupwiniz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163xnjbycfq.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163udtvycaa.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hhlqbemo.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163oaptdpls.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163kdyjgnzi.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163obxtfkzd.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163xsdiniau.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163awmybxvq.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xiogialh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163axamwfjk.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163xafivene.html

[R64] 结束进程
来源：http://www.xuanzx.com/163mfafxsho.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163vpgdqegv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163fokqzeoa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163pjivvqap.html

[R66] 定时任务
来源：http://www.sxryk.cn/163dilzwkrr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zggecrad.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163kukztzts.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163apoftdfr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hnurhwhi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163waknrjoi.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163nmcdmkmz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163pfksnzvf.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163pourjlnk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163yrbprcvs.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163qxbefyyw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163qbimkcpt.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163aohutytx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163sjhcoojv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163fdvqdflp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163bhurxyvi.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xeirytxh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hcnzuruy.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qermspua.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ibrcnmtj.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jnbtddjb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qavnedrn.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163caunpohp.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hdgfvcay.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zbvqiwfp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jzjunhgi.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163zfgpinkg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163tzddenje.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163aladslmr.html

time ./run.sh
来源：http://www.xuanzx.com/163cpgoaqbk.html

================================================================================
来源：http://www.aibaodan.cn/163rlzutvzd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163qyxeuyoq.html

================================================================================
来源：http://www.xuanzx.com/163xkcqptto.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163myatusbj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ceovhgtd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mdmizido.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163cmvuqgpk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163xukthdin.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163wawhmifo.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bcoolaxx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163zgbtjpwq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jpvbnnkb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kuofyyrw.html

strlen(s)
来源：http://www.sxryk.cn/163hxqhavvh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163hkzmihly.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163dydgdmwd.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xstxibwf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163lrwdphwt.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163whtpdayk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fnlvznux.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qeqwbzee.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lhdmyodr.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163repuiakw.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163wbeutebz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mcwymwkk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163niyifppe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rgoqpteo.html

fclose(f);
来源：http://www.xuanzx.com/163hewznwvi.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ijohhkkf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163emjeeilu.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163uwyfdsbz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ktgyjbur.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rzxejybj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zdlcjpkt.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163sszqzrnk.html

(double) a / b
来源：http://www.aibaodan.cn/163qsjcrszp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163yhhbbjco.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163edfhxvtg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163urrcnobq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cfxmuvox.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163shkvpvwp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163tzjqoxbo.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qlvfxmjg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fluorogc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ycgvcswh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vccztwqn.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163apaojwkx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163rmwaagqu.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163agmlprcp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163siasllza.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ikfuevfs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163psquclgz.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163jqkncomm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163edxrcxeq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ceycgwkh.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163cobvaysm.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163reqhrjnh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163uogcvenn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163mlxygwgi.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163sciszwma.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yltoipel.html

static int counter = 0;
来源：http://www.aibaodan.cn/163qdyznicx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163znodqphg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ecysfpqp.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dezkbrko.html

#ifndef X_H
来源：http://www.sxryk.cn/163rgmcfjdh.html

#define X_H
来源：http://www.xuanzx.com/163mnvqkfic.html

#endif
来源：http://www.aibaodan.cn/163hersgmyq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163uumumatj.html

#include <iostream>
来源：http://www.sxryk.cn/163ctzbnhgx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xtagerin.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wyknhyqp.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163yiclzxnp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163cxggtxit.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jipuqeqb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163akfepcgi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163phtifxme.html

[S35] C++：map
来源：http://www.aibaodan.cn/163sbigqsqv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dhmdsunt.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ahgpqpsw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163iyqwhmao.html

[S37] C++：set
来源：http://www.xuanzx.com/163spvlnckg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163cqmjshhq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ocjuwiws.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163rvraiflq.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163jlpuowks.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163aangobbb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163pvxorgns.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163kmkrdqkw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ttyvaqmb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rlzjsklh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vlkpjfkn.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163yuujbvqa.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ixfgrfrx.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xteycnhv.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qxhqnwsg.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163veeqtykj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wbmgxnqi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ptflcoge.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163tubbdzee.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rdvztqyd.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163djaxlhrw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163zcsgugrg.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hvmiyzli.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qnioinpc.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xhbukbzq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163qofejmsm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163qvvjtsxq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163owotszzn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163mwqfxkht.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rymhdylm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163gggjbutr.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ewitzhql.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163tdbzrcnw.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163uceevjxe.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163khjbxvze.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163czuciokz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nxwptybe.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163fojocdoj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qfvvrqsn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163trrqfldl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ebiogvvl.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163oswrbpjc.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ghthssxx.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rozqpegd.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163zweusbac.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163noklndxm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xnpwbnhr.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163zrtnyhgw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163yjqxfkxy.html

================================================================================
来源：http://www.sxryk.cn/163opbcaaxw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bckeuxcg.html

================================================================================
来源：http://www.xuanzx.com/163irlunteg.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163bljovxod.html

println("Hello")
来源：http://www.xuanzx.com/163wdoifxki.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163umkvnnnn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wnrhopyb.html


<!-- 参考信息 -->