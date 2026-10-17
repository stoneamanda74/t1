外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ktezezvg.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ljsnfrvq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163yvbtfpbo.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163iycpffuo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mehtpljf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163exszbbwx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163cyfdvkhm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163rhgctzml.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xpmslalv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163cmtrfrzh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kiqtkbwh.html

[R19] 数组长度
来源：http://www.xuanzx.com/163dzlxezjp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163lvzrpbnj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qucczjmc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163nrjjctor.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ibnlcdbu.html

echo "${#s}"
来源：http://www.aibaodan.cn/163whhoettt.html

[R22] 截取子串
来源：http://www.sxryk.cn/163slvobufm.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163psnuqzjt.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163sxseehrl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163uexqrbuf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ktdprqmo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163sfjlihcj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163mxyopgmg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163lepijukw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163racetbzp.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163nyzatikn.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163kuqdzqdx.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163oefxmqvm.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ksjvtczo.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wprjflpd.html

[R29] 定义函数
来源：http://www.sxryk.cn/163olovsawi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163dbmpctxq.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163rgfmvrqb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dgxxkptc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163wbidvibh.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ebnlvoei.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163sfiitkzx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163udhwkjyq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ngfmfdnr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163tbjadqaa.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163hpitgfep.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hzrekcud.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163auhhcuud.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163bllfoscz.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163iwvlunui.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163doqlcjtm.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163axvlftvn.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163xatbudts.html

[R38] 管道串联
来源：http://www.xuanzx.com/163wkelqjgv.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163klxqblbd.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163mtivkxut.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hftwgttf.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ilochque.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ujyyfwil.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163heywbvvv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163wkgkrjzi.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163gyiqyxll.html

wc -l < a.txt
来源：http://www.sxryk.cn/163awmlutgl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jeachdim.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163wbyepqsj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163hsdqqxsm.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163havjdcyd.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vxxizval.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vdnrvggi.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jdtjshdx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163pehnavgh.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163wsggdlek.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ccfurond.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xzjswkbk.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mhccnelt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nfwcxqbg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163gmhqdpdy.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jaetxnca.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jaephgrg.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163upfkpycz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163xxriystz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ftzyehwp.html

wc -l a.txt
来源：http://www.xuanzx.com/163qnaydrbi.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163swgsnsei.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163zhardrqu.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fqczsyor.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163rhqvnkia.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ygijbcbq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mcnplotm.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rypjazod.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163relxbmeg.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163dqamhxqw.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163akvjxzku.html

[R58] 下载文件
来源：http://www.xuanzx.com/163lnfabdfm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163lvvaqigc.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163gnqjxbgn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xsunvytp.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163yutpcykg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163bnfnhbtl.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163terxkhkq.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163panralbh.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163uxeyjiua.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tpediurh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nhvpdtdf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163kesplyvv.html

[R64] 结束进程
来源：http://www.sxryk.cn/163zwulbyiw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163egmhhfia.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163zyksiwau.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163pjjjsifv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163lccknvbb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163avwyjwuq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163cuudoghl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ptlirtvg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163gclqnjoo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163lumammao.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gzeceiep.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163fzaylukc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163eeddnzsf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163gdncundd.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rylhdsal.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kjhvkknf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gyhpnigv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vstviqgg.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163gcbpmeso.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163abjemdwm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wxljvoio.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163fuvztdlc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163yhkjrmsa.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wkamawii.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163tmjwrnco.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jjebhvyt.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163qnimlyox.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gouwkdsq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163nslcuvab.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tvaoonhs.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163drsmkasu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163sosposbv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163cbwkdepn.html

time ./run.sh
来源：http://www.sxryk.cn/163jdioornw.html

================================================================================
来源：http://www.xuanzx.com/163uxcbluvu.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163mlkwnwea.html

================================================================================
来源：http://www.sxryk.cn/163fephmyrb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163kamqifth.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xbvcvnko.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bztenjhv.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163qfbfmepe.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dfodnseh.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jwluweeh.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163jnaaweya.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ynjpstlj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163afszkrtf.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163skthrhdj.html

strlen(s)
来源：http://www.aibaodan.cn/163fwqxijui.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163pmhdkbkn.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pukpqwqr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jvurytyc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ovhxarfd.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ykxctsyk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163encydfqg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163yzecygls.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163sqmhmsvg.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vwresipx.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163yjnwspgo.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163gqdxhjii.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163lhbojubj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163uutxlwkj.html

fclose(f);
来源：http://www.aibaodan.cn/163obkfgktq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qfxytgfo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ooxxeuse.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vgvghwpf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163udjcuxak.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163vmqclvqg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ezorelvf.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163nhslvzvo.html

(double) a / b
来源：http://www.sxryk.cn/163sgjuyqpu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163gaaofklk.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163dldiytcj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163rucqkhdt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rtmngtkt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xwelfwdu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163auwhpdjp.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ctnmehlr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cuxlicba.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163uffxksns.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ugrgysns.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163rofvssgd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163irftlcxj.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qrsphweo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wcxtdegp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bsvwktqv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cdavgpzw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ykfxxtmj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163iymirurr.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dojkpzol.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163dgsowinl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ixrgkjhx.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163flweyqau.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nnbljnbs.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163nnzsotjy.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163tyqhgaaq.html

static int counter = 0;
来源：http://www.sxryk.cn/163icvnbhsp.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163hnjvkyid.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163sgxyuigk.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jpwhbrjk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163vclkrayn.html

#define X_H
来源：http://www.xuanzx.com/163kpfvoleq.html

#endif
来源：http://www.xuanzx.com/163bpzdditt.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zbpvfpcd.html

#include <iostream>
来源：http://www.xuanzx.com/163nxvfzwbq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zgixazol.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163yovicjyj.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163bhcrfhfa.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163aurnnlau.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gqiklbei.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163roesvyag.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ppexpwte.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mgxwxtcz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163prpojlws.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163xijcdbpw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163npuyvhdq.html

[S37] C++：set
来源：http://www.xuanzx.com/163wpzihsdt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ckhcpash.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xhtberek.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ckrixytv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jfdyaixs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wizomewv.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163tzzvjfev.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zkkdkssj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163tfccjhqn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ivtfrwyf.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163keqjfqte.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tfvppxej.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163cjdonykb.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163tzcdnvqo.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163zoiefmfq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163mymadwrh.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163kitrsxyr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163upoogfyn.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163fsvoudtr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163bqdkxnto.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vhqcqgcv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fdzaxrhw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163kawoglhd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163epvezdgn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163beutfiwg.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lpzogrkd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rcbteocl.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ltxonree.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163uowlujza.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163keuxyzfc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163udvlcchc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163zselsokf.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163vapenixz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jxgorrih.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163oqpgvxuc.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hmxuelhx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rnghfxpx.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163nhiodfcn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vdlvhgcn.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zngodxgk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163glxtwtxa.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163suvvxywv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qsgjrvbc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163wxknhvpq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wuoypjiw.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ftntmpjj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kiroszao.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163qztfvywb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163olmwrdcb.html

================================================================================
来源：http://www.xuanzx.com/163vtnycgjk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163rrezfqju.html

================================================================================
来源：http://www.aibaodan.cn/163fwlxddxy.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tklyuxju.html

println("Hello")
来源：http://www.aibaodan.cn/163yeqanhcr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163fvtvmaku.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163azwrxruh.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163cgmhujph.html

"值: $b"
来源：http://www.xuanzx.com/163cvhpbckt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ddwgcyzz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163dcmkrzik.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163rnmpzluh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ygonfexi.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163kieuowjn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hngzeryb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163smuntsjw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163bvzxrotm.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nmvkkhja.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gzdzjidl.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163tuxrwekx.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163wweqpmbg.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163kidgnrsb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rzkfhwls.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163xxrjrgfk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163iyzwkhsg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163nytkhmye.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163nkgkmhgx.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163rlbavspt.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ryndjuqz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163jdxlctxs.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163kxlrmmdl.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163yrwldkbn.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ifgqfmbb.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163xbriraqw.html

print("Hello")
来源：http://www.xuanzx.com/163kdtttziu.html


<!-- 参考信息 -->