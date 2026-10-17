外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163eszngvuy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ulfprjxe.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163uxhkxmfv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zzzomxlo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163fmhsdtur.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163eppswjvw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xxscuoam.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jjwiwmhq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qubplwvg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qmibvptn.html

fclose(f);
来源：http://www.sxryk.cn/163oiuvuuse.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fgbwwjfw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ierylvyb.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pluuufdy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163jrohkpwu.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163yiyowrhl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163fgoagdgq.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163jdaadakz.html

(double) a / b
来源：http://www.xuanzx.com/163mckqitpf.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163loomkaex.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163mrkoyjgr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hifekdaq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ilcnaers.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163wkcgdgax.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163kelpgpef.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163xzainioc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dgfqwrhg.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wftrfemt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163aimehbjh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ktkussdq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163mpzdjaka.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ozsdwpfl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ttvtdxis.html

[S23] C：随机数
来源：http://www.xuanzx.com/163utnbvvjo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ptoshhfs.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xvcdltkv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163zkpvfkru.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jingcouq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ofynflri.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163jjaolmrr.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163lgsfnsws.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163scgxpcbk.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ivkyeysn.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163cnccmvux.html

static int counter = 0;
来源：http://www.aibaodan.cn/163nelfpqxm.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fzixhvxj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163jwanvkax.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163cfwjcftk.html

#ifndef X_H
来源：http://www.sxryk.cn/163gokndbwl.html

#define X_H
来源：http://www.xuanzx.com/163anrwnyke.html

#endif
来源：http://www.aibaodan.cn/163itaubbjj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fvayibof.html

#include <iostream>
来源：http://www.sxryk.cn/163ppvqwvdq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wjuhiikx.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163aujufuni.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163gkthgnww.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hsisvegi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163drixwfbo.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163spgdrylj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vdxggmyo.html

[S35] C++：map
来源：http://www.xuanzx.com/163tkhaikfi.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pogucryo.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163tnhhflwb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uwjrsanq.html

[S37] C++：set
来源：http://www.aibaodan.cn/163kldhbsiz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163oueehrkr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163wnzknhip.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163sudqmglg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163eqtlodnp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163maasgpho.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163fncqwlhd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163hrnomrte.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163idveiunh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163lncveqib.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163sgcqvuiv.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ovyifhlj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163cmagfzde.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qwkwptkn.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163dgahstvc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nkmcpnio.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163kprrhcgc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163eildailz.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163syymmymu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163meehsswa.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163nryylzss.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pdtklejm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dptaxhfd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rampihhn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163yrzmagwe.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163scdaxulo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163qphejjdq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163rjqapddv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163rdajprsx.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163iobnadtd.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163qrxdgbms.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jmbdbupm.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163akdwakpv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163gcdynheo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kymlxhch.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163amqfprup.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qatfgkql.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163yewjgaga.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fqldsxwe.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vbtonfqi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163dyxjjvlg.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163qlyaalrl.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163anmlomtm.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163blgypnez.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163uisrhare.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xaadszuw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hujzbyle.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nscwusou.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ecxhkzqg.html

================================================================================
来源：http://www.xuanzx.com/163awedblgj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wymnpxlr.html

================================================================================
来源：http://www.xuanzx.com/163reignbuv.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ybnxrnzs.html

println("Hello")
来源：http://www.aibaodan.cn/163ywkdefgl.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ccbtdiro.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xuxxkzei.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kczbniby.html

"值: $b"
来源：http://www.xuanzx.com/163vxjsmqbq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163xvvssbet.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163yipuavgq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163qwbfscdl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163phwjjmfz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163vajjhmxb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ktqcilbs.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zsstauxi.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ecidrdya.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xwbyygid.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vwtzlerb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163hmjvgqaz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163xmgssfzr.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163bcrwvuko.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163fwxbwyen.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163tfwabgit.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163koswvlxt.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mflcilbx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fonqfkjz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163kbsrbicq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fpkxwifz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ffylaeei.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163uajdpkak.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ygmfcugc.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163tsaxnjso.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163rwyfpcdm.html

print("Hello")
来源：http://www.sxryk.cn/163rfricjfk.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163xqxxjxsb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163sefpoeew.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163zqmfwvhk.html

"值: \(b)"
来源：http://www.xuanzx.com/163ofbstqlr.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zwoymxcx.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163khvrmjuq.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163vwmqksqe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163anhhxgfq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163tzexefgt.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163nqdehese.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163kkbiuujz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ehnwoiin.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163hqgkgvio.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ipkrcwav.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163omtsxmee.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163girbhqgo.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163wiprfjzi.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rpeaisoc.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zprndzxa.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rrfomypy.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163obsjgfgf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163odvybgeq.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163erokmskr.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163woiqyhil.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163gwddemhs.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163qaemtnpf.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163iukyhbji.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hvetyudr.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163wbfnyqxf.html

print("Hello")
来源：http://www.sxryk.cn/163wijwyhhj.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163yjpwvdiz.html

local a = 1
来源：http://www.sxryk.cn/163skftfxep.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163gpxesghl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163vihuhdqf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163hqpjdwfv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163iiynniqi.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163yebfodyw.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ftestzxy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163wduazskm.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163coylczat.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163wcjwyeyv.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qvrxjeyn.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163bqeigfua.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163poqrllxr.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163bvdynpvt.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163hccqmphm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ocyvjusr.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163hmlydtsy.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163huqkkmsv.html

print "Hello\n";
来源：http://www.xuanzx.com/163wvodslri.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163dqpvyjmp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163zdxqtryl.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xyvnanwd.html

"值: $a"
来源：http://www.xuanzx.com/163eemdrvjk.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163isqtvxdy.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163hdzpovwa.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163lpomunti.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163kvqekmqa.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163gqfvctks.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163raoxukep.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163iyjbrztf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nwhryzka.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163bitlcpgn.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163uatsuohy.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163bknhmuqa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163silneunw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163wzkxrdci.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ynyavygo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163itgrlvfa.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ywsypsmp.html

println("Hello")
来源：http://www.sxryk.cn/163yevijuzn.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163huptervk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163fkvbutxy.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163sjgabjbn.html

s"值: $b"
来源：http://www.xuanzx.com/163nibbhbyd.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163fygfxekr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163lqtflgzp.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163bakhartw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163wvddgfos.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163mlbslmnq.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163afqgkkyp.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163gropwawd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163orsezdjc.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163vywhzauj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xsnylzin.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vnrjhncl.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gzjcubwp.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163yfqhlpts.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vqhdltgv.html

================================================================================
来源：http://www.xuanzx.com/163ijlygdqb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163qpolvqwq.html

================================================================================
来源：http://www.aibaodan.cn/163qrmjlnob.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163gjvjnlhm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ltaasdfl.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163vauanmjy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163glwegwze.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jgmngkjb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ltmqpqbm.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163pblhbtnf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163tkzyszdu.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xqgovztz.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163powucbsx.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163hdgpiiqm.html

{**a, **b}
来源：http://www.aibaodan.cn/163loihulgw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163glggdvjv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163babaghex.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163tiouksci.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163kvfeaouv.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163fmcrqzqz.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zagxitcg.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uqwxmdvi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jjrumlwy.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163suqsyhwb.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163lougozzf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163bqzdcihc.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163pixedmwp.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163gfqhdjfx.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ybiltibz.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163wskpeoyj.html

defaultdict(list)
来源：http://www.sxryk.cn/163bkjosbrv.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163xhypgslj.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163rtjdyexr.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163kmwuymak.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163wclanpqf.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163psmoppea.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163udvxqgbr.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163uahtuzhi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163zzcsgwnw.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163uqgemsgl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163jmzmrysw.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163gdpbivco.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163qovoiekj.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163wpuykjhq.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163caixpgeb.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ghitqpmm.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qemzwdei.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163sbdtcseq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163gufadcai.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163osclohua.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163vsfxtwbg.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163vikjimfx.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ncfflakr.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163zbeqgfvp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163gdjazbsy.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163haliklij.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163avxqlqzw.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dbezscfa.html

UserId = int
来源：http://www.aibaodan.cn/163pcifudqv.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163mycignai.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163crdsnfvx.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163widsxojx.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163wibsikzi.html


<!-- 参考信息 -->