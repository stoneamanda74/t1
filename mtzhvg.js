外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ewmuduna.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vrmbfctg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ncbhtnie.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ggbntjja.html

strlen(s)
来源：http://www.sxryk.cn/163jlasnpjr.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163zlrrjoiz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ifxbwliw.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zkuilgtb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163glomkfte.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163iizeirnu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163pfctpons.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ielzezmj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163qkgynsoc.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163iflvaxws.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zejexkta.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163qcphutop.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ldovmiew.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163kuiqpxhs.html

fclose(f);
来源：http://www.xuanzx.com/163mawyooku.html

[S12] C：写文件
来源：http://www.sxryk.cn/163oaiwarnj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163knnogqxz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163phijnqdx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163yhuokpyn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qwlyucjx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ubnxmikb.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163apwrzeuc.html

(double) a / b
来源：http://www.sxryk.cn/163vpheoxql.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pomwhlvt.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vtifapsv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163detrjidz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163mjcwmspy.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163wwbxvwqh.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163egnwnrgp.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vcwffdnf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zprzlzwu.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ryutafve.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mveussnb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163znmxcjwp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163jdbqysrl.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mgagtsxw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zeoewdzn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qlrzfziz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163gmxowqnd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wyksxple.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ymucouyc.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163nfwamioa.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vtfythns.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163arcpcief.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163yrmqnolf.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163pawpzrqm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ovhvshmp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163pqyxrmqn.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pbvajuju.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fakkszwh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163mclwhkdx.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fahatapj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163tdyvtpjk.html

#define X_H
来源：http://www.aibaodan.cn/163fmzfzjxn.html

#endif
来源：http://www.aibaodan.cn/163hnezruml.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zxfpjfqt.html

#include <iostream>
来源：http://www.xuanzx.com/163obeggqyq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sblrponl.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163psfhovxq.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hkbskivl.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163pqcjenzt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gaibfbup.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ukrayxnz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163jnviikam.html

[S35] C++：map
来源：http://www.xuanzx.com/163rqjrsftb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bmjujvji.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ufvredrq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zzhbewsa.html

[S37] C++：set
来源：http://www.xuanzx.com/163iglliegv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163jlqqnimv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163tokhzbql.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163gcghlsha.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163goulzcbq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163whlrqkxx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ehyvkeir.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wlujftyo.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ezmfnclk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bfbapiho.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qpubjryn.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nluvntmw.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ricrnqaf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163dppniuri.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163yvctqtmf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dsemezci.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jwyswdgg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163gimmwnab.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xmujrdsr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zhqypzxn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ozhkijwk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vazrxsox.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163btzxryvd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163pivfibwl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163nzowcwir.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163yvnguety.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163pwjdognf.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163sdpjkldx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163tprraddv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163bgovqeqd.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163mwjyynyt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ucqjnqmp.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zfjzlonx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vrxuobqa.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163eevjoopv.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163eszkctmy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163lqmmjlgc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xuoyolqi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163moapkaah.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163iahxqgck.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vvljrszy.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qvuawmve.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163czjgcjmw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163xccdohaq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xyfveijr.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163lvtmodpx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ajkebdos.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163cfcrmlnf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163qlcafhlj.html

================================================================================
来源：http://www.aibaodan.cn/163gurcfypr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163lnkmxumk.html

================================================================================
来源：http://www.xuanzx.com/163tkgstbyp.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ofwqpqzb.html

println("Hello")
来源：http://www.aibaodan.cn/163sbkpxtdg.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163cxppxobz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jyvdrbuo.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163qaoehrxs.html

"值: $b"
来源：http://www.sxryk.cn/163omntoexg.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163cqxytivi.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163bnwsdvfc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hqjopoej.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163kofujnus.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163uksjyhyu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163qdpbvjss.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pqckicfh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163fyclhcfw.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163sribaoti.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163brnxqetp.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bvfbemrn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163oczaiemr.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163xwikhcqd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163przzjbgb.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163hetkjigr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vxxpfnbc.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163plwzswaj.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163mtajapft.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nlgtmdha.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163oducmftp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kismuylg.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163cxhtzrci.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163tixycqkn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ufcnxagq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ghyjzeib.html

print("Hello")
来源：http://www.xuanzx.com/163wodfxuoc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rzjprsnh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163acifnxwj.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163yutpeokm.html

"值: \(b)"
来源：http://www.sxryk.cn/163qtbzqegp.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163yvbtuljn.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163prfwqlgf.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163uvcencoa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wonuzcus.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kkamnzco.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163nvwnpowq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163gnjanflh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163xfdtforr.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163mcidbebx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163eslkdxdu.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163aaakpunf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163qjegptme.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163jgniooux.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rdloyxpb.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ycaxwtqw.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163zmdqncqs.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163jatnhfal.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163hazkwsff.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163krrljlay.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163dktudmgn.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163gedzybhx.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rsfzlawv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163xxzwjxar.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qzfafeuq.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163wgmzhtxs.html

print("Hello")
来源：http://www.sxryk.cn/163lzxkfzlw.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163gksjtrhj.html

local a = 1
来源：http://www.aibaodan.cn/163owzckscy.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163bxiitzqk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163qgotibvr.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163riygkjws.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163rxefrlcb.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163lgyujqlx.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163tfmurekr.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163zljbvkgr.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163aohyvhpj.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163oabvnfqj.html

"a" .. "b"
来源：http://www.aibaodan.cn/163dskkbqte.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kxibyrrc.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163zqpxoyas.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163wovmakss.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163vrxkirqp.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vidulosz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ehopomcw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qnchzycq.html

print "Hello\n";
来源：http://www.sxryk.cn/163rhyqvkbi.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163sgmaehtb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163pwqfahns.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xretgula.html

"值: $a"
来源：http://www.aibaodan.cn/163twgubzwl.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jocqjixf.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163spujujth.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163tbjbbqte.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163daeanqcs.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163bplgzrhu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ipmhnlhm.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163zxuwatbg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163yuaiqhsn.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163mwsspult.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163xipvfwsa.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163giqwemlm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163yuvzxttv.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163fdiyvzdg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163rkkkhjkk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163rshzvqmt.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163cgabfnnq.html

println("Hello")
来源：http://www.aibaodan.cn/163wiusuuww.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163znujixvw.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163mempqfeu.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163hfgkuimk.html

s"值: $b"
来源：http://www.aibaodan.cn/163llseehqs.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163hbjsrowr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163wjcibokw.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163kotfgwfb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163cmllsmbm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163jbhtzeof.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163bfatrxsr.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163hmoyinkh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163jjfxyvir.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163opgtjpxb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ooublljf.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163djtgkzlx.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163lqskibhb.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163flkvmziz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163yztcrjdx.html

================================================================================
来源：http://www.xuanzx.com/163bjpyvgvo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bafrhmlv.html

================================================================================
来源：http://www.sxryk.cn/163woocrzmf.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163aumgqzqg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163duyvecqi.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163yfvukhfo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zzbjtwqx.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163uvohbruy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ohiatrsz.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vzfyzatu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163bkgqpxfu.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163gshielyj.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163elvubnfi.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163dbghznyc.html

{**a, **b}
来源：http://www.aibaodan.cn/163yxliyekk.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163fgcavrgl.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wofmkgss.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163nwlpxijk.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163pylcqqsl.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163lnxlgnwf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163sghwijzt.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hlonvoik.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ujrlwmox.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wvvcgxgj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163eldqyltx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163jieqsqep.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163tjnjwtys.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163cwqpptdc.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163lvxrrirg.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163cjujihcd.html

defaultdict(list)
来源：http://www.sxryk.cn/163pqtgdpiy.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163qiekmdyv.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163cnopxyvx.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163fkdzrgpl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ehzhzhou.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163fdpwzomg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ahtmanxd.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163rwqvktlo.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163dnnmatgz.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163dfzfwowv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163tckgxfpb.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rdcwisvp.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163dnvrlhqq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163gvwbzoig.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163vkpmutel.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163sailbinq.html

list(zip(*m))
来源：http://www.aibaodan.cn/163yyejlboa.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163hqfncvio.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163lirimemd.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163manxzyct.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163fkpimbxu.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163xhkvgfob.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163wxnkmuox.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163kkmidbcz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163sfasbyqa.html


<!-- 参考信息 -->