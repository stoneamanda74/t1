外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kptkywfe.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vzmtvomo.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163hggdnetu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163lmhshwpj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bljullze.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163nyjmhvod.html

fclose(f);
来源：http://www.sxryk.cn/163tkrtldja.html

[S12] C：写文件
来源：http://www.sxryk.cn/163tzxsirbu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163sujyrbnj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xarpwuwz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dtbfzmvg.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hwqmoajn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ltrxczmy.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163osmsjkfn.html

(double) a / b
来源：http://www.xuanzx.com/163wxmcmrov.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163yaxigxsp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ztdulyqo.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ufxpykak.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163uaahzimw.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163olkbxlwc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163oamfnhga.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nyvcwbsk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rvwhobxx.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163owtewdun.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163momksuii.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163fyresojg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163hsakplgv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ngvcjylr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163bcuzslrz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qqkztmjo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163pupuajve.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163exygxhec.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163phirvhxm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163riuhfcne.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gplmxqwu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163oshqhzxv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jytpnjny.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nlxqpdmh.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163aocucdln.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ogpimmfn.html

static int counter = 0;
来源：http://www.xuanzx.com/163sgyvaxal.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163cjgfdktp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163qjimzeed.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163jbcjbvna.html

#ifndef X_H
来源：http://www.aibaodan.cn/163awdjtbgw.html

#define X_H
来源：http://www.aibaodan.cn/163nzgbxcjp.html

#endif
来源：http://www.aibaodan.cn/163rulwxdyq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xrxjhiyh.html

#include <iostream>
来源：http://www.aibaodan.cn/163vlnswakp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163lpwgxxxf.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vflrcldf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lrhdkiyt.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ctblfgwj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163nwswvpuc.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163inooadky.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ilcxnojw.html

[S35] C++：map
来源：http://www.sxryk.cn/163atdcpyus.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cgvzopor.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163glgqzjlr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ixkjaxnx.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jbjqpxdn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163oiuvcvrb.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fqqqznis.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jghavdsc.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163otisrtse.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163octatvwh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163cxvuvytr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qwqcmguy.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dqwqowyj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163tvwpukqd.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gkhiqwdf.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163vhieezdg.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163lkjfgbxs.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hynpnrlv.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fwcashwc.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163maysxlio.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163rdgeoznw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163khkxakgm.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ndlpwthb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fhbgzezh.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wycqsxgr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mrikgnmn.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163saqulbqs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163sadrnltm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qlyjzptm.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163gztzsjgm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gtdlwkgh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163tpieesit.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163urxooauq.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ddgiqadj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xmicblfp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163taciaimz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gspkuipp.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vjtfcjtm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ntnthgsj.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163knhglhrn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rduqoknw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tdrfpmuu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163tsrmmjrf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163dbululhx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163iadaetkr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163tmqjpgto.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ewaletmk.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ogludkcf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163tolkeore.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163bsqijjjs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jxrxkhzx.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ybqeqmpa.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qatsvsge.html

================================================================================
来源：http://www.sxryk.cn/163asvvjild.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xrzdwbxw.html

================================================================================
来源：http://www.xuanzx.com/163mtdmcvlr.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lwutfweu.html

println("Hello")
来源：http://www.sxryk.cn/163bthlvkkn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163finrvugo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163euywvhfv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163lrgdepow.html

"值: $b"
来源：http://www.sxryk.cn/163rnuufuce.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163unipjbpa.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qqzfygqn.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ftnxmnnm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163tyyceipj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163afgkplhx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hqccjizw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163hysidgyy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163opkyqggp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ipuhzont.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163yzvdcwvk.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ibyegloe.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ywtbygas.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163rkqjpuln.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ottgieal.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fvvcewlw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bfvknykz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163lyuitmmk.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163wmtcfoul.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xquivbwv.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163zpdcyfvq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163jpeuifvn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163oongcefs.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163guewcznl.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fvczanbm.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163jcjgglmq.html

print("Hello")
来源：http://www.sxryk.cn/163rbdrdmsy.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163mmvbrvku.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163drkriyba.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163qiaojbom.html

"值: \(b)"
来源：http://www.aibaodan.cn/163gxeqbjoe.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ptkxtjco.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163grzwfjoo.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163qnzbnooa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163dxxybagg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ynwblesl.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jermsgku.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163pyyhiroq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163safksagv.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163lfmgfwgo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163gqshqopb.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163xoxhktxv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163akfpqlru.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163slhbucxp.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163oaxrvrij.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163gxskrhcm.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163dbtncbgq.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ocqoevig.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ftoutxpi.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163zuczsnqa.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163vxbddqzm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163jtiyizgq.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ahfzwkxl.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163nivhdnbm.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163pqtmrdtc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ksjnhzcd.html

print("Hello")
来源：http://www.xuanzx.com/163anbvisxx.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163tchnmuod.html

local a = 1
来源：http://www.sxryk.cn/163poqehoqh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ollbaigz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163dgorlcmq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ovafkvfd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163sscqvccx.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163zxqiyuac.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163aragrgmz.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163cjeiwvrk.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163oafccsgp.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ybnywcho.html

"a" .. "b"
来源：http://www.aibaodan.cn/163cpcxixkk.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163gaxjvysi.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ipajdyau.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163csdxisxr.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jujbhbbn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lvcnxnrk.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163kcwwqlgj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ytskoayn.html

print "Hello\n";
来源：http://www.sxryk.cn/163giycbire.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163edwfrzlh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163hthzsfde.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ugmgjtvp.html

"值: $a"
来源：http://www.sxryk.cn/163eqgxqfwh.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163oxkqefjh.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163uqliaotr.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163bxkzkrnq.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163nknqovuq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163nscakoec.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163uemgplbf.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163elbfotwl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163bfynulhj.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163pibnqqfm.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ljtnlmmb.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163jzomtoev.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163wvqevtnp.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163chvbtabh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163zoxbqppt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163svqjzbmc.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163vecuehij.html

println("Hello")
来源：http://www.aibaodan.cn/163amrlyroe.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163chohifnk.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163vrtbwrnl.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163lnprhpuh.html

s"值: $b"
来源：http://www.sxryk.cn/163nymqkvht.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163qwwthysj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163losvxtgf.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163kzubjhqm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163eotpjmnd.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163zkikzvba.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163gwukndpf.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163fbhglwod.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163yqspcsqz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163phnqnwex.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ndtvjcya.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vafsapks.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jkusdvkd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hnfwqwbe.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163llfkxhkg.html

================================================================================
来源：http://www.sxryk.cn/163zyaqytvh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zsdsyaqk.html

================================================================================
来源：http://www.sxryk.cn/163krqzyzbt.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163mxrkvoxn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163zuynhrcf.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ayjbaxbl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xeubnqvj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163usxizhlx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163pfgoyiqd.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163yvzmwzdg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163upqclxpl.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163oydmmlzl.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pfaovafl.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ximclsvo.html

{**a, **b}
来源：http://www.xuanzx.com/163zjngevjn.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dflgdwpg.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vtmikyyz.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163mjqmprbr.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163cqpprhpg.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163wbvjlvnh.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163wgpmvlpc.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ilnjtbdu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163hqzzhepw.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163kkytbuns.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qaortdfy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163owkutqne.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163yvdtxqpg.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163mhekxiao.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ysvglsyj.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163zqqncezu.html

defaultdict(list)
来源：http://www.sxryk.cn/163mnszekhv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163bacunkgy.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163rhadkhhc.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163hzbnsbdt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163vgmqdhlt.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xvzoxprm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163dwcxvstw.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163xgngazdq.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163otsdyect.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163bcwqcnep.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163jnbmqcmz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163bnydfgzc.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163pmldknyn.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163hqhrqolu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163eotygzmq.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163lerxcaxi.html

list(zip(*m))
来源：http://www.sxryk.cn/163wulsaqom.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ygxewglc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163jmnztnqe.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ffvtfviy.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163uxxxmaaf.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163bmdwaamk.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163egeoihxw.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163gcsiatde.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163djvjkndd.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163gwyxnrws.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163hbmaumil.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163jlpoltbb.html

UserId = int
来源：http://www.aibaodan.cn/163dnsiwogc.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163azcyjbfq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163eyxzvkqn.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163hydjgywu.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163edjervuo.html

[U31] Py：单测
来源：http://www.xuanzx.com/163kxrcpyoq.html

python -m pytest -q
来源：http://www.xuanzx.com/163dpsaxpec.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163lbxassri.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163rgzzbntj.html


<!-- 参考信息 -->