外链999!wailian999！

files=$(ls -1)
来源：http://www.aibaodan.cn/163kvvupmrw.html

[R38] 管道串联
来源：http://www.xuanzx.com/163czjrazjp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ubyivhih.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xwqqvugw.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163zyosyhit.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163foevpcow.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163pccnasyt.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163misgblyt.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163cjlvwogt.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qzeugwfn.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163cqlwakqq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163padanxol.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163cckfugqz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xnovtqsl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ixnxuylf.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mcuzicpt.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ptvwksgx.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163opfzjxkq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ksrhxuyi.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163rceisuvk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vkbydfjp.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zprasusb.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ehbkzpzp.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163yrjshvik.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163sgybflam.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rnyqllqj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ptcqzvzn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163yhbehkst.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163gbiuaqaz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163gidnrfbq.html

wc -l a.txt
来源：http://www.sxryk.cn/163whoepbti.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ehbwxski.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163vosizqxk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163brrkqbgg.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wiwaazro.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163kdcsmlar.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163aangpcrv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163bxrrvqqa.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jhbqeyjw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ikbskwln.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163epclabah.html

[R58] 下载文件
来源：http://www.sxryk.cn/163quguubia.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163sphdrluq.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mbkgcjmd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kwtbdxwv.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163hoswmgyl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163osniwefk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163nqhzvlnj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163fclewcnx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163qdkmpvpm.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163qfnyxxat.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163fkiaqdjv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dezceoxw.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lvsxnyur.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dmnljqmt.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zvabsfjo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163uglyzvsv.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163frtizjsg.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163mbwengkt.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163uepxzkgp.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nyqfinot.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163wepoexkp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ibmorotd.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163jblabzyx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163nwginhze.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163hvnehqzs.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jjpoumqo.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163caqgheaq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163lcunhixy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163zeyvlype.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163mxlbhdip.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xibpsmwf.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qziatptj.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dqencsbd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163yoyenfkr.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163fqevfhlp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163tocjounc.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ewcqypck.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nmccrglo.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163adikwakn.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xfkgscbz.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163msghkdty.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pfsksgva.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163hlwrmhle.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163sgtqvgwg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163olbhmriv.html

time ./run.sh
来源：http://www.sxryk.cn/163nvjivwip.html

================================================================================
来源：http://www.xuanzx.com/163obwrcwwn.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ekiaxpbl.html

================================================================================
来源：http://www.xuanzx.com/163usfufuzm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163wwzmpjqq.html

#include <stdio.h>
来源：http://www.sxryk.cn/163odvnirbw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163yzwwmxrn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163pqzbqlme.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lrxqeyjc.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163kafmcpaw.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163jmknnbcs.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ptqoicsq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kcvlljem.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vjbfxctg.html

strlen(s)
来源：http://www.aibaodan.cn/163hnztnecg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zwhxxnzg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ujgnldfi.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dzglkmpc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163whrxwmfr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163fvmksshm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163kizomjsa.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ximkmfqt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jzukqlta.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163fbzglluh.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163lwpbtqvv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163idscysvd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163okngfilz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vffhvfph.html

fclose(f);
来源：http://www.aibaodan.cn/163ibtybefy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163iamerffp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163uihxostx.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gvpdpkmd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zeitwwny.html

[S14] C：枚举
来源：http://www.sxryk.cn/163enywgofo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ozdztmic.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hmofwzwa.html

(double) a / b
来源：http://www.sxryk.cn/163uekiczmc.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163jwgmojwg.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163iekyfcwz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wluiitgm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163bpyblhnw.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163mtfgbnzx.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163kaiogxky.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163sawaazrt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zlmtmgjn.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163elnfbexr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bebfyvng.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163zeydlhnf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163cphgqhrf.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163lspyclha.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163rrmktycs.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163avwpljbm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163xbrygcxj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163lpsjqeyv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163oytlmpqo.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hfcxbmuk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xnshrjah.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vwpgidld.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xdrlagjm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163scsrfwyc.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163acvxtvlx.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jqopsgpe.html

static int counter = 0;
来源：http://www.xuanzx.com/163nygjvdfm.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163nvkcbvzd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163pwdiwhbo.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163moelvpam.html

#ifndef X_H
来源：http://www.sxryk.cn/163zmppbjpd.html

#define X_H
来源：http://www.sxryk.cn/163xpxitnmy.html

#endif
来源：http://www.sxryk.cn/163tuzxunky.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cgotdbrw.html

#include <iostream>
来源：http://www.aibaodan.cn/163ejzazjvm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bzpdtbgs.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163cvmnbppd.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ggoedhpo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163keqweslf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ozzyaodt.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gzzirmao.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163mevpnzcx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mxqnkesd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163buyzqjzu.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rjbgvabv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gkndgmnv.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ubodpino.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yfhovspl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qwvgcmzr.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163uukottyp.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163bvhdfqsv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fgaoirot.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163rxpfiemo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wziwceac.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ptnhrrib.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ahapkhlb.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ehzpeima.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163verbscmo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ygaajpka.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wxrtglkx.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qkdncyrw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163anckkiom.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163lkqsrruu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163szlscxql.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163jivubybo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ewaiokbs.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163pclpsjia.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163uliypetm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163wanxbwsi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kkgopmrq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163joebntln.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163xawlnusy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ypknpuvu.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163hustpmfd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163badjhter.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163woivultj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lwiixyfl.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163znuealnt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163hwnkrfxa.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163tclewhxj.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qimjkdct.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163xhwhrtjr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163hlgftruz.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163drphugvy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163nbskbbxu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163bsoldrnu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jybslmkm.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163adjdqmpc.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vdilucqi.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rleadyrv.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163noabvmtg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163oyvwnfht.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ouhrbpga.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163odhdfpyx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163hszwgmic.html

================================================================================
来源：http://www.sxryk.cn/163cloiwtpg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wwmtywui.html

================================================================================
来源：http://www.xuanzx.com/163tuwizfjr.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qpmoycbw.html

println("Hello")
来源：http://www.xuanzx.com/163jhqyaroi.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ykyddnhh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163qedsgdnz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qgrigilu.html

"值: $b"
来源：http://www.aibaodan.cn/163dklxvffz.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163yfhzwley.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ujxuqxyk.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163jntjsouo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163tykyaegk.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ptqzgofv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163sqozrxxx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163fcszahin.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163lstsamfj.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wqhqgpwl.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163vvizlwyq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163udsguvfe.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163eigmouyv.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163upreeqta.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163jopmccmw.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163pnoatbxd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vxdzrovv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ebfqznyu.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ybeoabip.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163vywzzsra.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163nibfruie.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tvteemeg.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163datgofls.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163bawixzfx.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163tbbzszwb.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163irbnvqhl.html

print("Hello")
来源：http://www.xuanzx.com/163agqxzjiu.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163psgmfrxx.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163btgbistp.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163rzbeypbb.html

"值: \(b)"
来源：http://www.sxryk.cn/163uvvhhwby.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163bgnhdeos.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ebporulp.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163mwaibruc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163yigsduwd.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163nuskfwem.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163arltnwdz.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ozqwyiij.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163cjuheuii.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163pxisqapg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163gltuxvms.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163agawxtha.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163vjqbnlml.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163nbezacrx.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cdjfystc.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cexpwahd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qlcpemxf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163cvzneerb.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163nxquoxbv.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163xqhhopjd.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163mcdjtiih.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163zexelhzv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163xokqwsro.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163iorfltia.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xljwzzth.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163axdtwacx.html

print("Hello")
来源：http://www.sxryk.cn/163cvtwyrkf.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163qfllokqj.html

local a = 1
来源：http://www.sxryk.cn/163kfgeniqb.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163grvhsugv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163kkrgaokd.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ewvurtox.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ednqnmwi.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163sbfxephe.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163vmfhryla.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163uwsgysyf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163tfwrvclu.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ezqfeoee.html

"a" .. "b"
来源：http://www.aibaodan.cn/163pnnlnqde.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163pgynqifm.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163xbuutrgm.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ajpvczap.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163brrktlgq.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163rujtkugq.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163dogwovrz.html


<!-- 参考信息 -->