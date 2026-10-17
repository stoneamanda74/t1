外链999!wailian999！

case "$1" in
来源：http://www.aibaodan.cn/163wsncqepy.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163lseszprj.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163uigvllki.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163iamqzkkg.html

esac
来源：http://www.xuanzx.com/163iexjskzh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mdqbpcla.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163wrndeffp.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163xrrpfber.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ranovqhy.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kfyuhwio.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163iqdicwxn.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163svahanku.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163sbtiajhh.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163jvmyllko.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hqmpqnjn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163jaujdnvs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163eouzmbsu.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ldjbaauc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163cwiymofi.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ugkmqrch.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163cxqgsjou.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163cddnnjuv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163slnqulxb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163svvtxlhr.html

echo "${#s}"
来源：http://www.sxryk.cn/163qdftjgvg.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wczqplgx.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jqdhulnw.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163zyolxhrs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163pfnucdzp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163yhmodibb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163fsmludxr.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163dxwjnxgw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163wumgephe.html

[R26] 命令替换
来源：http://www.sxryk.cn/163kzphafum.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163iisqtzzu.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163wonwmhzo.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163mcyzufbt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cluvgngi.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wctlvwvb.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ndcqmnqm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163fbhioccd.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163sbeygsnz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ayfzjwur.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qulddsjc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163kfyhivmp.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163tqgphkhc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163jxitblfk.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163awvyasbj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163rndbysgx.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ipsfhoiy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163givexupu.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163olrxpvmy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163gavatzqm.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163chukncya.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163yswbfrcl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163xpmdudic.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163cgmrlkga.html

[R38] 管道串联
来源：http://www.xuanzx.com/163btdxytrr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163zfezjjpn.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163nbynjusu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163mukyjuvk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163uvswpyks.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bidfuttn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hoaazebm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ltlsptnu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163srhyvmqh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jjplsazv.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163uvunfsvj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jejzzaxq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lnrdnwhr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fbruisgp.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rdlnorup.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gmjotmlg.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163vzfcscra.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163kdxwovdw.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ofsggaud.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163nczklwju.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163dadhhcgs.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163rglkvwlz.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163djvnajxe.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163kgwlvgue.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ostlamez.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163trarddir.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163dxmtuiel.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ibebbdyq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163hamierec.html

wc -l a.txt
来源：http://www.sxryk.cn/163umbsetus.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163twuuhivz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163qqmlwxuf.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163epyzacgs.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163savvdegf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vgpzxpue.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ezspcxxh.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163quhawrnf.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163fssvnttn.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tgitgxwr.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163qcsijhnp.html

[R58] 下载文件
来源：http://www.sxryk.cn/163txfulovf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163nwgpivbe.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163rydcyatr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163gvbwpdet.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163pobshmyi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163chsdoomu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hghffnoy.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163vxyweadi.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163xbixbtwt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bqomssbu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163uqndeaxw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163sgwbclgj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163buwinuis.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jllmsmwn.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gmhwdbft.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ycwooahd.html

[R66] 定时任务
来源：http://www.xuanzx.com/163uykxfxck.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zvyrdcio.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163aibncbwb.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dxutxypw.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rdgxmlge.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zaxjabgm.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163aftzrwfp.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163lhxucstl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163gwtvwsnk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163vftvfnot.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tadcihax.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ushybzdf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163pmhvagfq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163gsphagxt.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dgtrnigh.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hzttxthj.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163raitbimc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qvgpbygi.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163pnrahffl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163oqcsgzbx.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gitvolts.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vzmmizzx.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163qmtiwnsw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kthiauep.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163fpeetwob.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fxcjxpwq.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163dlrudhml.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ystsjdqr.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ygwgrtrh.html

time ./run.sh
来源：http://www.sxryk.cn/163gbfjlbuc.html

================================================================================
来源：http://www.sxryk.cn/163yryjalcv.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163zmgoddfn.html

================================================================================
来源：http://www.aibaodan.cn/163gflozstw.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163oxpdizqx.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tglfkwih.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163vzdlsngd.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163llrgpdre.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163vpolxyfv.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ujgwxjpi.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163tbjhyhuh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163kgrkcjge.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wynxrcpv.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qljehwoq.html

strlen(s)
来源：http://www.aibaodan.cn/163uhnvakcw.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163blsaimxi.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163rtzfrlld.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163suhslzja.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163imsblwmo.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163cewqwqzn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163wuyplcbj.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163tigucwhj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163wqpvbium.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hqacfhzc.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163egnfmhei.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163vrdkngry.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163rkxejtdg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163yhajyjie.html

fclose(f);
来源：http://www.xuanzx.com/163ymgowzee.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ymftnkai.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163knmjfavt.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163dixobzhk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163wnkncrex.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rdehgpry.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hfsumvps.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pnaumlbm.html

(double) a / b
来源：http://www.xuanzx.com/163mqyciapm.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hddmlutz.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163clegrajy.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163fncpglue.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163mufngrfa.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fhhaxywd.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ixzjrdes.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163acuomhnc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163obncuglr.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163cenkmqas.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uojgmsxb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163sltsvyvg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163bjuxtavm.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163mnvnxyhy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163nckgtvyj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163iolizlzc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163olpapkbz.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vsocsryg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163anwvuejl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dclwvnzx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163kxkvfikj.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163eydkeooy.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kaufeguw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163yivfgwsd.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163joxjnwil.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163mvumjisg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163uxifzkdt.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ghmkhvva.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163avnxexzf.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vbqdjeaf.html

#ifndef X_H
来源：http://www.sxryk.cn/163jkektquv.html

#define X_H
来源：http://www.xuanzx.com/163oenhrsel.html

#endif
来源：http://www.aibaodan.cn/163zsbgtqfq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lbsrugwg.html

#include <iostream>
来源：http://www.aibaodan.cn/163sgmcplfx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ioozbbbl.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lwkehiid.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163lgvtcekj.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163pffjtltl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163sfdikirp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163nmjogngf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fsxhvnru.html

[S35] C++：map
来源：http://www.aibaodan.cn/163aeskapfe.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163pbgzvfnb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163lumpihim.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qagdexci.html

[S37] C++：set
来源：http://www.sxryk.cn/163qtxsoaqu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163oswpokrw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ufezkdbc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163azszblri.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163mwjftoqv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163skdspknp.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hzfdymnk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163afwkkowd.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ewlrpzbu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ypasysna.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lwnxboxt.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163znyiaegz.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vpxgivag.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yqsmsuly.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ngnhvukn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vbqbzaqa.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163dpairzab.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163doqajcbi.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163sjjowyay.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163gmdzgaqr.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163jlggarxr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163cfaqxssv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ahlvuoam.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163awognnez.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163yhnsvuas.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163edwaojyl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163bmzkjutb.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163cuggdodn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ecafujyl.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163tryvqtjg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xpyynzis.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pwuplgfh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163bxfrmvqz.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163pqadozkf.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163wabeckey.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ndwbfbgl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rryrfgeg.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yhzkmejz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163oeaaifln.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nljindsi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zvvpruot.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163otrdlmmo.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jayoplrl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163belnnlxk.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163irkbjmoa.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163rmqfoxqq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ylzypvmq.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163tfoggsed.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163dlifmtwe.html

================================================================================
来源：http://www.aibaodan.cn/163epzejbao.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163sdvavoly.html

================================================================================
来源：http://www.aibaodan.cn/163uugkihfi.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163tapwrtsj.html

println("Hello")
来源：http://www.aibaodan.cn/163jnixnzix.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163pxqtaiux.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163rnhlwzps.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fnpuopok.html

"值: $b"
来源：http://www.aibaodan.cn/163yhgexyyg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wuhdszhr.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163yvwrcqof.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rdyxchxs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163oyhqtuqi.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uuorlisn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163mrmjifom.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163flqywxwu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163lpwugqsi.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163kyxzkljj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ptrgfkxs.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ulnxylog.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ivufnvay.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163tmzvgddu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163fejodvrq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163sakevpfg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163mfchegqh.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ocqknesb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163tijercbr.html


<!-- 参考信息 -->