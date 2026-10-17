外链999!wailian999！

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163vhquzqup.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163cxygcgqv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163betnshlx.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163pxwqimur.html

echo "${#s}"
来源：http://www.xuanzx.com/163pudjacts.html

[R22] 截取子串
来源：http://www.xuanzx.com/163dbenbbzz.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163nnifhmtg.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163llfuxlxf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163msjdluga.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163dukkrrqm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163eivciklp.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zuznraoq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ncdixihs.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163akewipuv.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163lbkxghca.html

[R27] 算术展开
来源：http://www.sxryk.cn/163gpvqvfdd.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163wlwtkmfd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mdivshrp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bpsfhvzu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163gkosnkvm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163zsemmcxw.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163edgoszhw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163kiunfcwr.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ngztdbhd.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ahfhvypb.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xqcenmvo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163cstxcbgr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163vzvsxryt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163gelrqpxz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jsirsrpf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163puivzueu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163aioxiesz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163pdozokqz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zmxiybcl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163emtqzlvf.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163mvdygmot.html

files=$(ls -1)
来源：http://www.xuanzx.com/163dgzfvlhl.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hrxuzbuc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dmdalrmv.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xchrqdgn.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163gixyrrjd.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163iqrifojl.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163bpvpxecv.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ocblyqcz.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ejxqnacc.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163oehebnat.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163xzijxsgt.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163odqmmqvk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163rqjqvzwu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163jcodoqtb.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ecjtmqzh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163yufrivfe.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163nkfznjjf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163djirojli.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163clmfscai.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163bjcxmbap.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ecwhlczc.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jmkmbuwf.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163eabvomoq.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ncaaofgw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163jhoopquu.html

[R50] awk 求和
来源：http://www.xuanzx.com/163thyqjqyx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163zmppuurn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163iydsfygr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ptpsltin.html

[R52] 统计行数
来源：http://www.sxryk.cn/163psfctpog.html

wc -l a.txt
来源：http://www.sxryk.cn/163obedivbz.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163tjljylfv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163bkvigvov.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zxllhehn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bffeuacr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qsddxlkq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hroutcjv.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xbmnzzkb.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163bqodwqks.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163dxpnssqj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163rkccmkih.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163katgauaj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163gmuguvpw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wcbyouxa.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xvsmatey.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163jrgxdmeu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lezktozg.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163bxvawhnc.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163vvwkkjky.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rqpmyebh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hksrbbvz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163nkqtazwa.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qrbkojgp.html

[R64] 结束进程
来源：http://www.xuanzx.com/163iwzabfno.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163iuyvqbnn.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163rnzrtyyd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zipjxery.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163viuqhghd.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ydgfdqgk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163crgkviep.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163yostfmpy.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163peekzdgw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ksfqdeca.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ltmlptty.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163pukxwwdt.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wrswzbnx.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163hyecgrfg.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163bhmhqnnj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163szzfjtut.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xnljgtia.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163indaveiw.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163cqabivtv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163vptzrsvh.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163yrudsiqp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163amqyhyxh.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163lumyvfsl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163mkkezcda.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gvoqfbbh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163genvqazm.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ikppvyqc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163thxuesfw.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wjkygjlp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163cyhuasoo.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163zchdbahe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163zodpligy.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163twpttuex.html

time ./run.sh
来源：http://www.xuanzx.com/163vnmttlzh.html

================================================================================
来源：http://www.aibaodan.cn/163dhhywvsh.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vboinebm.html

================================================================================
来源：http://www.sxryk.cn/163gemezdrr.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tpdrthri.html

#include <stdio.h>
来源：http://www.xuanzx.com/163fhvvczgl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gzuvsuel.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163aineewbf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163bcxnymtu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163gtnatkka.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kohuaogb.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163quheofmt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bxxffvqb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163anoudgna.html

strlen(s)
来源：http://www.aibaodan.cn/163nrndzftv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163cunzrrdp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163nxqwuhux.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zweuzpcb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163teoeifcy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hcwdplpj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163poamwqrz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lgsitjos.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163vvxedojt.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163wnhesqxs.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qjnqanqt.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163tdinjpmc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ieyslzns.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163eqmiaxth.html

fclose(f);
来源：http://www.aibaodan.cn/163qwiwevfc.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ylyttvya.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vccgsnsj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xboytrnn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163luficlzb.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ubpqpxhv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163yhgegwny.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wpegmfdh.html

(double) a / b
来源：http://www.sxryk.cn/163rkkbmnmv.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lpqjigrh.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ipsimsxr.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163rrtgntdl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xdjxjrhw.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163gwvsumvj.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fotokyhz.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qoesrpxw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nfbglsdz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163mebstzqa.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mkybrtoy.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ljkbxvpp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ikbgxlku.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jgdihxqy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163yacuzobq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163cghbprkz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qdluujuj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163hgdiwdcy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hesdogzm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163amyandyq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hdoiffau.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wchqyozd.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163lvzdkhye.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ldajitwi.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163rajimumh.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qsjcfeot.html

static int counter = 0;
来源：http://www.sxryk.cn/163wktrxovi.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zptdzggz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163asdjuzja.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163awdsspmo.html

#ifndef X_H
来源：http://www.xuanzx.com/163feafwrkd.html

#define X_H
来源：http://www.sxryk.cn/163qensatwq.html

#endif
来源：http://www.aibaodan.cn/163sjbadqyn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163nhqturan.html

#include <iostream>
来源：http://www.xuanzx.com/163tesvzqdu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163uvcxhdui.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163bnobzhda.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ketoqdwx.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ukjgagia.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ukxqghjs.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163qmmutiwy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vvggoenz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163vlthcvbt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mmpmzwpp.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rufkguyl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hrsnaizs.html

[S37] C++：set
来源：http://www.aibaodan.cn/163darzzkqj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163mhfwmwoy.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163mnlohjxz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fyjesboe.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ikehvqse.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fvfacyfx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ugkczszr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163avvzbxqy.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cibaqteg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fnenlqfe.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163zydotosx.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tvejenkz.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rylinmfm.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163wuvmitcm.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ewrfkvpj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lbisrtec.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cxldzium.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ghauhoim.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163wmkfisas.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163yvcomlpr.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163rngltsar.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163lvktvywt.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nmaxtnbs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163etpafoty.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163xdmstlqe.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163yvrcylxr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163oqxvwtrz.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vvjmbigy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xkwefqxr.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fwizrjua.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qphqwyev.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ltajnkao.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163apcfviju.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wxccansk.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163lgdwgmsv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163poetcalo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163mxdaqsxh.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fchdfbgc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163fpjpdrtj.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dcpuvckd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163eterablg.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wbqedflc.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ffwtlyia.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163bpjdebrt.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jixsusjm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ayniqmhs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163eodyphew.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163pbuhdouj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163veepgxtj.html

================================================================================
来源：http://www.xuanzx.com/163jtsbabrw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ukztwgrf.html

================================================================================
来源：http://www.xuanzx.com/163xmezpmcz.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163tpkuugef.html

println("Hello")
来源：http://www.xuanzx.com/163csrcnbsf.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163zfzviaxu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163btwxiadv.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163utcymutd.html

"值: $b"
来源：http://www.sxryk.cn/163uzwmzded.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163gluqullc.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163lheeopsq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163noajphiu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hoigkmbr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163lzcmoghq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ijvdvaty.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163lucdnnli.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zskroyqc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163dowkhexs.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163hlhyfgld.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163xoecasxo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wxzwzeep.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163sqlgmmzz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163nnsowhsh.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163bvmcorva.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ixuocgqi.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163iwornrrt.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163mzlleoyj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vfnvwmnk.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163tgdlgwbg.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163digpyobm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ebjxaojy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163jbfhzcye.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ayhyiqbc.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163nwbsfxqp.html

print("Hello")
来源：http://www.sxryk.cn/163sluoyfhq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163fbiylfzi.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pbuiugtq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163vxqcouvd.html

"值: \(b)"
来源：http://www.sxryk.cn/163mfaorbyc.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ueobylvi.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163rexkycgb.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163sarrleps.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163kqvjxgcp.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163bsoiqtfr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163srnlqahd.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163jbjbxcxe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163loorqmtu.html


<!-- 参考信息 -->