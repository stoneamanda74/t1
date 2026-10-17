外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hgdbwxkl.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163cekgrnbb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bfqpztbd.html

[S14] C：枚举
来源：http://www.sxryk.cn/163xmsuuarh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163lmkytwlc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163sjrnfxfp.html

(double) a / b
来源：http://www.aibaodan.cn/163hrzgfxft.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mprxatpi.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ywtvzrxj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163zmtrofbm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163bolglfnu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163yhhpsraw.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163iydmvsfd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163pswlfgqr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163chhfzkac.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163njszpaqo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nhpmmofb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163cnifxacq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dfpgjjue.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163kceshrkq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163curcgyfm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163blyemlpq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rkqieqhk.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jhckkjwm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rdodfbaq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163cgihkakn.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jeclbcym.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163hllhfsus.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tvhdjfsc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jxepncdi.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163rgamzyns.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163buahjnel.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ljrfanzc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jfjybgsq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163hfcuwvxt.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ynznliqs.html

#ifndef X_H
来源：http://www.aibaodan.cn/163blegbnpo.html

#define X_H
来源：http://www.aibaodan.cn/163xbogcokc.html

#endif
来源：http://www.xuanzx.com/163puhrpdop.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ytyeqste.html

#include <iostream>
来源：http://www.xuanzx.com/163tdvttimu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rvxitkej.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jbbjigpu.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163jnnvgpco.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ocdizvka.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163aqaliwfl.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163uwfwjqps.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163yqlzoecz.html

[S35] C++：map
来源：http://www.sxryk.cn/163fjaquciw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163oifrnlbj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163vzohznmi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jqqvxdfe.html

[S37] C++：set
来源：http://www.sxryk.cn/163ypmzcfxc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ntopowms.html

[S38] C++：排序
来源：http://www.sxryk.cn/163eywdgojj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163knxjcdap.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wwpevtxp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163nohwwulc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jnxjduez.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ufgzeqva.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163alxflcay.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163pgvgeibi.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hrdimcfi.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163njujdmgv.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163vnfywlok.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163azfpeysc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zeexbufq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qkwfnsro.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163czzgziia.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fpjthinx.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163xdmjcabl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163vovfwfqk.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163dnngbblk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163rozteglp.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tytrpsgj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163wzotnqxm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163oeledffb.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163kqhhjlfd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163rvoreucz.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wobgcpvd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163pjzvkpbw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fedxdrow.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163nayhsfqx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ujdfhqbz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163avdznmxo.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163cxpmdran.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qmyfxqnq.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hhrjkmoq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163oywyuyjh.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wnetdamh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163rktppicv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163hbynwwcc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163kewfatte.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ptivfgdg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163dvorjrsg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jgbmnhrs.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163lujlsrvj.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ndkzrxek.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163taviipeb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ahctncpu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163zpqxckfr.html

================================================================================
来源：http://www.sxryk.cn/163ouamsprw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tdajahjn.html

================================================================================
来源：http://www.aibaodan.cn/163ozcdphxq.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163nlmzceus.html

println("Hello")
来源：http://www.aibaodan.cn/163iwcxufyz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wfumqlak.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zydsfljt.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163xuasmmxz.html

"值: $b"
来源：http://www.aibaodan.cn/163smuocuxq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163akkmdqtn.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163utnlkhrw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mqqvfewy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163okilujrj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163osrhwojl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qedqcgvg.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wioisqsu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163oiuvktnm.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163nzpnmped.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163dfwkjptc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163tsqvfbwj.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163udrnqtns.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ajeelspv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163iarchcrt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163dasvpxsj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163aofqohpy.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163msdhrdla.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163xoopvfip.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163sedjiqvp.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163srheqhxt.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lffkeene.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ulnuggtz.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163dwvtfzmr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163mlyrtutx.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163nbfetegg.html

print("Hello")
来源：http://www.sxryk.cn/163hyeedrpw.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zjqlarmw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163wooahcmd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hfqmjjix.html

"值: \(b)"
来源：http://www.xuanzx.com/163uroeihkb.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163nratpmlo.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163xblamwxd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163mkxhobls.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fiwhsjxw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ymidqoll.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tmwxfrcp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ksvzhpdf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163caemqevx.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163kiybrcpi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163goolxclw.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163sqjwusfx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163vywscmto.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hvpbqoje.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163hfuhiutf.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163phmhbpzp.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qrnzgcaw.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pnfscomo.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163yyubqmau.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163btyvciig.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163nejfuegq.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dumokwbd.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163otmmazlk.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163qtnbfjbk.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163sjkwxqxu.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163yniidlzg.html

print("Hello")
来源：http://www.sxryk.cn/163uwtmfxdj.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163qojgdyqe.html

local a = 1
来源：http://www.xuanzx.com/163elseblrb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163mvntpegh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163alfahstb.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163haivbnof.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163vusywlcx.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163tczlknkv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163zyqlrfij.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163fhnndysf.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163abhkdaks.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163slyqelki.html

"a" .. "b"
来源：http://www.sxryk.cn/163mieyexkm.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163wgwnbrmq.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rpiuhtqi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163mruiaqup.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jzgnnzyn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163nvhmppqo.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163biottdfc.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ujeygrgm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163gvxnawcb.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163sdsupmfu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163lilzxrac.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163tsvzauej.html

"值: $a"
来源：http://www.aibaodan.cn/163okgxarrf.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163npxivcpg.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163inrrumtz.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163phufoeml.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163sgfgufnd.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163vmpfhpqv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zrhefdpt.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163kslybbgz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xivmgbig.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jgvelizg.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163cbjqfaql.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163sbbqtcdi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163kyxhdixg.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163yndgrksr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rtaxqupy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ebqxywyc.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163xgygewzz.html

println("Hello")
来源：http://www.sxryk.cn/163barmbjas.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163zjgcinbz.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163paszugau.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163gzdgmmzn.html

s"值: $b"
来源：http://www.aibaodan.cn/163hbrkaohz.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163yrpdfrbf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163qmkpuugt.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163vbemolun.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163hndjyhbg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163nvyojrqa.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163wqoewsgk.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ekiecays.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163njmtanpu.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163tqqggivq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ttfdwckz.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163tjiynyqd.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163kytdlqby.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163rlpcnsaz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163htahcwxx.html

================================================================================
来源：http://www.sxryk.cn/163tokziqcn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jvfrfddt.html

================================================================================
来源：http://www.sxryk.cn/163mggcxigi.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163jyirpmyl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163hxctjcnw.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hlwoagtw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163itpjjiyw.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163zrkkxjel.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ccilqxbc.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ugtdxttr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163hihixckq.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163wzhetxoj.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163znxczacu.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ovibfzou.html

{**a, **b}
来源：http://www.sxryk.cn/163bjhufoim.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163koqbbrsw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163oqjnmfda.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hsassvgk.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163usbmwnae.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163cnpwkgeq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hchexbsd.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163sovlbuko.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163rurwdujc.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163rzwqjqwr.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163bplotegt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163jpmbvzgw.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163lbxcmsho.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163lvbufvhs.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163yohvthul.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163lqbeqysn.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ftbfqtpq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ngqjmqoz.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ruinhmjb.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ehhktfmb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163tlyrsryg.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jwnjqtcx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163vdbjszuh.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163osjpoabn.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163worcnlrz.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163jtjtoxue.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163dcdmcwph.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163fesaycok.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163theflebm.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163klmvzbge.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163vrqvvtgk.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163hpitsuux.html

list(zip(*m))
来源：http://www.xuanzx.com/163yusmgwom.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163djwbotja.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163vbhdoqmd.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163wgnzkkpc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163aslklghf.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163wykiffbf.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ttqvoxjp.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qqyvniss.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163vxrlhhvs.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wiojlbgp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163gcrwaoml.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163uszchbxj.html

UserId = int
来源：http://www.xuanzx.com/163nmjsuval.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163izglvfty.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163uvulsjeh.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163vmnfqlfw.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qebxwjiw.html

[U31] Py：单测
来源：http://www.sxryk.cn/163uaklurvp.html

python -m pytest -q
来源：http://www.xuanzx.com/163ytinbfns.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163tjxyfwph.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wdwpwnyv.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163teocslim.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jvkvxqwv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163glvgldrj.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163hoqpurch.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163cdfgijdu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163jjrjxyaq.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163cgoqevhz.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163vzwrdvld.html


<!-- 参考信息 -->