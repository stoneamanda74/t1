外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163gfswvazy.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lombgwvi.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ubvohgpk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163iosakisv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163vydoawvd.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163mgofvvwj.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163yxhsqwhb.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163cqxykmbo.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163yvruxixe.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163jehwufaq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ostolmkl.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xqrklnqn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ljqanoov.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163voyutcto.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qqcbsslq.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163kpxerbwq.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163dcsrtzvl.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163hnwazczk.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163xlhqnbyn.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163yakgsclh.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163obtcgirk.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wkyjobvy.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ycubsjpk.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163mopdirlg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163mdnqleun.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hhzixrki.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163wzfucxeg.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qdyglgtq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kdousdhm.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dxycrenm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163gcdvzuoh.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163mhmfpdsb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163scqekshv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163giugbpfv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tkvuhusk.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vubdyldu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163cclpynkb.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163dnxwozha.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lvfbjiul.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163iqcvqpns.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163emqejjqp.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163kiryfjwm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163pwqcybkh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163zpugvpbq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ysfnpaan.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ddnkstwm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kkgoadzp.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mfpvuqus.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163yrfbmjsn.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163bsdjdnae.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cepfeeik.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163chrhmspu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163zihsdfrm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163fgipujdb.html

time ./run.sh
来源：http://www.sxryk.cn/163bwpdzher.html

================================================================================
来源：http://www.xuanzx.com/163rztafjxz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163cwkicjrp.html

================================================================================
来源：http://www.aibaodan.cn/163egjwbmuf.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163pylpeuig.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163iwqxbalu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gskuxtyw.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163izviqzww.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163nmgerivq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hffaccdz.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ogrwcpnt.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163tzslklme.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ixnroltw.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kghdcwqw.html

strlen(s)
来源：http://www.sxryk.cn/163pjohjgtc.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mjvwefbd.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163brjdrizg.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xytywywa.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163iiozcfyb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163gkntfstm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163gppfdenb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163unjhwlmn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163skyexszx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qkczsemr.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qvblzmqh.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xkmkhdzr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nmrroghi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163fmacumul.html

fclose(f);
来源：http://www.sxryk.cn/163urbkhqqh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163rtzywdsc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163oofldnwh.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kubgzjmv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163evfbepzk.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jifaykxu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163spxnsxwo.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nxemblwq.html

(double) a / b
来源：http://www.aibaodan.cn/163kwrobrdz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163tnajnvid.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163cyrfpshk.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mzzblqdd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163tpwzqsxi.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ivemwgjl.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qonmwxpn.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wjczpmjl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ffkjjgey.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kclrqdgi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mcemlkrj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163rsfzmonz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ipiibyll.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163oietmqir.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163jjfwncwi.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163itrovfzs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vhrpkaoq.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163kuieimea.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163sqnneqnb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163txchtidz.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163kqmmfjcy.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kxvxrshz.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163pqkygmpq.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163brenbqrf.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163nhkmclta.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cgeanihy.html

static int counter = 0;
来源：http://www.xuanzx.com/163mwcamhoh.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163yvhtzzdc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163bsukpols.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163muphnejb.html

#ifndef X_H
来源：http://www.xuanzx.com/163okaesjue.html

#define X_H
来源：http://www.xuanzx.com/163dednfhaq.html

#endif
来源：http://www.aibaodan.cn/163uhbghvtd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rrqtlzqd.html

#include <iostream>
来源：http://www.aibaodan.cn/163lwkaxbxd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nwrkwovd.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163qogjyhrn.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163exaydzun.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163lojkjuqq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gcxgmozu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163eirlarwe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163dzgoyqgz.html

[S35] C++：map
来源：http://www.xuanzx.com/163fjwznugp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jwhapgmv.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xsygzkzu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163athilkot.html

[S37] C++：set
来源：http://www.aibaodan.cn/163yzzhwetn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ornsdpcv.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xitxvxtm.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163xmirwuji.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ktjpywqm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163dvtnpaap.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xyzoqvnx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163mwiiqudm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163kvygtfqf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qrxtmpfl.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vsyrkpdg.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gzzhuaex.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hitaiwjt.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163skyzzrql.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163mtnnexzd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163edihnjbj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163iazlqhzp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163emnlhmjf.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163aqzxlxjo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163egqckhpx.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163nfijojnd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163rokhedjj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rdbnmbrv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163aipaotdm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163dqkzibxg.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163dnxosqvy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jeisnrmx.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163bzqsniwg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163kmnoexpg.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163gxzwyijv.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163aqwszlgo.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lzunyjap.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163mhrroczk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wfovyrkc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163foafesnc.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fsqkyuei.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jejowksh.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ralgqqtv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163poaamcqv.html

[S56] C++：optional
来源：http://www.sxryk.cn/163carpobel.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pfsdjmuo.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163igyxjhdd.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163omaxoqjo.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ebmkgpju.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163rccdjjjc.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163pogmrchg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163roikmjxs.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163miqqysjy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ohnhhbsx.html

================================================================================
来源：http://www.xuanzx.com/163juupwexk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jfdlgnve.html

================================================================================
来源：http://www.xuanzx.com/163vvpfmdko.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163gutigqss.html

println("Hello")
来源：http://www.aibaodan.cn/163pgzatyfp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vsniaxho.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163iegcbyxv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163btamdejv.html

"值: $b"
来源：http://www.aibaodan.cn/163ioazkglt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163cldjrgpx.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163dngtvhsp.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163zvvecbpk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163rswinfqt.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163klnxntrn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163bevgibkd.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fiuvkpbh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cntsmaup.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163rbkakcht.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cymcccqq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163byipwwgc.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163dqicsaih.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163oivnhetg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kyvrevvk.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163pqnbugcu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163hhmhoiju.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mpueysst.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qndkyowa.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163cnvbphta.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163lucfxiab.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163nabwljja.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ivjbgbkm.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163jepxuict.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163dkzvundq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ipayunoy.html

print("Hello")
来源：http://www.xuanzx.com/163efcrtdsq.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163uwhakomt.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163uhmrprfe.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163cyoncimn.html

"值: \(b)"
来源：http://www.sxryk.cn/163efmknotx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163cfasycpw.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ucvwwaqs.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wfciecrr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ofwlljzh.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163fuhzfcca.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ujbzuwbu.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kizydmgu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163yyfazvpz.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jkxrceme.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163nhwglkcz.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163aigjtbwd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163bzguepsn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163gudganov.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ybsikome.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qzkkorll.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ormgblvj.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163hhtyyfsy.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ugqlfmot.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ezvzcaij.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163erbejzsd.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wiyzmnno.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163iimbgvez.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ihrxqcgh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163dhirujqh.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163rsjxfkni.html

print("Hello")
来源：http://www.aibaodan.cn/163rcqlvofp.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163pcfhbnif.html

local a = 1
来源：http://www.sxryk.cn/163utmvqmla.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dgcvszks.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163aslbdarr.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163lrzvvmzg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zdxvwgat.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163icydfwlm.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163rhjqrzrz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163zhdhozxs.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163mhtqjlby.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ndetpfjc.html

"a" .. "b"
来源：http://www.aibaodan.cn/163uwahytri.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163hohnqflf.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ixykwzhz.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163orkrchkq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hhcazkcl.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ewswrtar.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163egwrlcdd.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163zaknetbo.html

print "Hello\n";
来源：http://www.sxryk.cn/163dbvihuqu.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163kvrpskjx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163aokdulrm.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ghcyyixa.html

"值: $a"
来源：http://www.xuanzx.com/163ngyqiail.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163fkjxrfol.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163skkvrmev.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163bafcoisg.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pfgwqeeq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gjtycgtq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163vgqluraz.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163xpfdqmfp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ojoqagio.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lbrfvjhc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hbzqdswb.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hulegrxd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163xkbfzqrn.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163znhcqrxf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163lhfyucrz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163cqedycsz.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163tjwjycjy.html

println("Hello")
来源：http://www.xuanzx.com/163rvmhgcce.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163swnvrcll.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ssiekbok.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cpksmmiu.html

s"值: $b"
来源：http://www.xuanzx.com/163hgyuoiyr.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qzmkkjws.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163wjqfyfuh.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ivlgbfne.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163qvrmysyj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ynkstwwo.html


<!-- 参考信息 -->