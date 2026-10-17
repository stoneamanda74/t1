外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163dggsgsdc.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163rmcwkant.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163hgyhcnwd.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vvcmcpjs.html

files=$(ls -1)
来源：http://www.xuanzx.com/163kabafyag.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mwisukdp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zhncawtt.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163mmfmzwas.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163qbmxethu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163tkrihfek.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163nlgqkwgq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lteyaydr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163mxzzhfza.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ylcycyze.html

wc -l < a.txt
来源：http://www.sxryk.cn/163bctqvejn.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163otrafows.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163cjuizvvz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163tclysoks.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163irmyjxgr.html

[R45] 批量删除
来源：http://www.sxryk.cn/163epvssjzf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ejxucope.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163enzcrxhk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163lkpwbbjk.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163kznordqe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163amnrthif.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ghpwbmla.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163beenmkfr.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163uspevgcj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163uwflxvpa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163gjfqdegb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163znugebqe.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163zrdrfgfe.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ddfrjrsw.html

[R52] 统计行数
来源：http://www.sxryk.cn/163eenrwpkr.html

wc -l a.txt
来源：http://www.sxryk.cn/163athdsope.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xrvqlwgd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163oboklwyk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ykkdrgie.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hefhrfxy.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163dcfeiqjk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163furrolmu.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163keljhwhv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163xesmeeml.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163pombhldm.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163fahafurs.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kapqhynr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163waamewig.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hsvkxule.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vpknkvbo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163rfrfvsof.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tejgizlq.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rxtsndnb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163tystgqcv.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kjukmtyl.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ggtjnplq.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163pvejdigs.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163kypviglh.html

[R64] 结束进程
来源：http://www.xuanzx.com/163nwqyhvnr.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163gssxgoqy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ljjiuplc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163nnleaztk.html

[R66] 定时任务
来源：http://www.sxryk.cn/163gjrhavtu.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ujaaidht.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163asdkqakg.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163cpvhygrb.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163lxljxdgg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163weswihcr.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163mnhexhin.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nfmclirh.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163mxkumwoe.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uvdjcogi.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ssyppjzz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qmowbylw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163jmgmdwfu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jabafinj.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163eudsyigk.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fzfsqhjs.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zioqgfvp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163tpjmbzxh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ryhyjmng.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163yarzxtvk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163sucvyqth.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vbwcmyku.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163dqwknvyx.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xweqmsfj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ntpjuzlk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163npvsxtzd.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163nprytwrv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qxvhlzkc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163lwgiftsy.html

time ./run.sh
来源：http://www.sxryk.cn/163drsnasmd.html

================================================================================
来源：http://www.aibaodan.cn/163iunupzql.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163wyonutqu.html

================================================================================
来源：http://www.aibaodan.cn/163vtreiodm.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wccppbre.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ycbrfnpk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qpukfjqj.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163etpvuqxw.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163rpyszchj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163gfveqllg.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fcbcvdgd.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163fefdnrbs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163uyuuktwg.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163uwzbthfm.html

strlen(s)
来源：http://www.aibaodan.cn/163jxmuwbya.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163vaaoxplt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163oiiqkgll.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qorvxfly.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163cxtnatmk.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163bapmapys.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wkwpljfh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ylhmnckn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kgqefoxu.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163lxzrihvt.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163rutclbtq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163vkzumsye.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163byqzvctd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163qanwmlbt.html

fclose(f);
来源：http://www.sxryk.cn/163ruuxsfxw.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fihkdyny.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zboneiwk.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163kklwzckg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vdhdskgf.html

[S14] C：枚举
来源：http://www.xuanzx.com/163tbwlcnwm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zxouaegi.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lkziodvv.html

(double) a / b
来源：http://www.aibaodan.cn/163mujhnhnd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163yrovreca.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163bqpxluta.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163edtsormc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163oqpzrfew.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163yuyiqgqk.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163woqpjnvf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163rfflstrr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163owsaqzrv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163hckxeeyr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vpasfmsj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163tgcrkavh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163hywqholr.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qzjaybwo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163gztlpqmq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163qqfzhcjo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163qwxocwjm.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gcucbbsf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163wfhschom.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163wbazyonb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163uepzgwhn.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163tvztusid.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ewflyqct.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qregjqtf.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163kovgnazc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163eomymayp.html

static int counter = 0;
来源：http://www.sxryk.cn/163ivhxlnsy.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hjotckdx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163rzveavda.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163sdvyxwtk.html

#ifndef X_H
来源：http://www.sxryk.cn/163hltwjjht.html

#define X_H
来源：http://www.sxryk.cn/163srqratbl.html

#endif
来源：http://www.xuanzx.com/163dkjzsvlq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163kxmhckbn.html

#include <iostream>
来源：http://www.xuanzx.com/163bkluiaif.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163seiunhpa.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163jemtbusp.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pvwzhvby.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163eqwlycni.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wtjzynoi.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163iujhezmr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163yqvfdejk.html

[S35] C++：map
来源：http://www.aibaodan.cn/163gmoykguu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163efcnsuti.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ocyrsfnm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jwmhjwms.html

[S37] C++：set
来源：http://www.aibaodan.cn/163cgovfnhs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163txxcetwu.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rrwvfmxn.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fxwufytb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163cjafmafn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163iskprhsr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ppjpolza.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163giunmbpq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163fpglxkto.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163dkhwlqvn.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163aikhovqg.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163cufrqpqe.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jvvdtftq.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163arihzhob.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163eldurahp.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163zdkukllg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rzsiznro.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yiplbrug.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163utkmcbnx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163enovwplc.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163dyvgofuc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wbofzvft.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qhczdoke.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163cmepqhjf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fildrquq.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163vesbbajh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163utmdlvcs.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ooqdcyue.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163mthetrmk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163voughxoq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163dywfthpu.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hvbfqshd.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163nzrhohfs.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hrnydjln.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163mglvwmxf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163cyehfecs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163vwvfgogw.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163lkyuonwb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163egobcjdi.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163jckwhnwu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163flcgdtjs.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lenfhfuy.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163zbicblmf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163usyamjir.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qvcyqneh.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kpwtrdoi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163gcqcufdf.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qrveeblj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163wnzkozxn.html

================================================================================
来源：http://www.xuanzx.com/163askhcarp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163krlzxuyz.html

================================================================================
来源：http://www.xuanzx.com/163yraomicy.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163wuocqoib.html

println("Hello")
来源：http://www.aibaodan.cn/163njfkxftb.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163dasukjmu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163cpanuwll.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163izgombrt.html

"值: $b"
来源：http://www.aibaodan.cn/163kqtsetqw.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163fzmlxgaw.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gzqcrpaq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163zrpotctp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ocdyysnu.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163oahplzhl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ttpgizhw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jdkafjcc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163tnygemfl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xxgoaixo.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zppledvb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163codurpai.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163vktmojzv.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163oisgrjlj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163kqfnhqcj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jktqqguk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163qaiwwnqs.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163tfbdirwy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ipgkikcn.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163vyjhlgzf.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rjlxtpbs.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ofzocwuv.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163pugransf.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163cbmsiegn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mrisbfwf.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lhaynwqp.html

print("Hello")
来源：http://www.sxryk.cn/163gmlidkye.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163dgrefpry.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hijbyvcp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vymishtl.html

"值: \(b)"
来源：http://www.aibaodan.cn/163yxpycroa.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163uvlaqmgt.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xoyzvpal.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163lxnffkii.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163yyyxzxsi.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nzawekgy.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bseotnhu.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163kujfuhpc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jirrybya.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ncdijszg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163tmkthhei.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163gfavnpkj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nvkovnsz.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163tbgahqum.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163bfzbdqlt.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163uwvvnepg.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yzhgscjn.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163vyvekqjk.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163qizmcoul.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163amtqduje.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ccxkeuru.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163lzxushfl.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163zviqrwty.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163yqcbcfad.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163miudlcgl.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ktfelgpu.html

print("Hello")
来源：http://www.xuanzx.com/163mxczvzkc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163yzjtloww.html

local a = 1
来源：http://www.xuanzx.com/163ixvrmamn.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wlabntqt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163qddwjkja.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163rwuiauey.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ltjvaiey.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163bnajplnn.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163woikasmh.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jrehtpsa.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163califead.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163riqsouxh.html

"a" .. "b"
来源：http://www.xuanzx.com/163sbsuvrvk.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163zbpefupj.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163lmbwfyqc.html


<!-- 参考信息 -->