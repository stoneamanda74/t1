外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hbsunjqz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ttmzibke.html

(double) a / b
来源：http://www.aibaodan.cn/163okjgoevi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163tmbfiyxv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163pdexliab.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163nlwcpmcx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kyhvdyjk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163sgnfajof.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163bjzyajvq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163tyhkdnex.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dguimqnc.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163oponvxtq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jxvljlty.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ehgbmtkf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163xmqxrkfg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vcrwpvxw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163kzjyonht.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dulbmagq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163dukckxns.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163kxbxzoto.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163cmtfxpli.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pecshvvi.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163oayaihdx.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163dlbssfov.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163lfctymil.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163vfoczmte.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163toljhzpm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tdsazhbi.html

static int counter = 0;
来源：http://www.aibaodan.cn/163bjixivts.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rbknhzcq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163rhddpqma.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vrqqsquq.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hhztrrxz.html

#define X_H
来源：http://www.aibaodan.cn/163grkjgkpb.html

#endif
来源：http://www.sxryk.cn/163weynrnbd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163gyxvziat.html

#include <iostream>
来源：http://www.xuanzx.com/163ydunwsez.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163uqqjufsu.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163bdlgchxr.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163xcjgnlpi.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kowpcddu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163uwgovapv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pgzzpxnv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163lvbfzdpl.html

[S35] C++：map
来源：http://www.sxryk.cn/163mttjmlia.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fhjraqwv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163snvdmpdj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wjfnisfc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163azxvcior.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163crzedwdd.html

[S38] C++：排序
来源：http://www.xuanzx.com/163mhfydbvf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163cqucdihc.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163joqrckeg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163eencvekl.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163hymgrfgl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163svzqtxrv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163isbmdqnl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163spwdbgoa.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163hpueowqw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bictygyz.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cnnbondc.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163njcbdwrg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163toekofem.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lwuyqceo.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163tomlhfjh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wbxdddee.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163chlogjcf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163azaquiew.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163yyulaudq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163xlmbfobt.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hbanxzyv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163rxymqqnt.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kazjlszt.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163sgfwndqi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163spdmjugv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163cntwvrrr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163kjzumyxv.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vkloxavd.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hexmjenv.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163dasxxwve.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163cplomsss.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mzodpero.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xmfdlmnj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163htdbduav.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jstwwlvo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ugydxxkl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163eymfolfe.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163jmpekvow.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ppqjfswm.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163bfmwdyvc.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vohpjmjk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163yuhtmbuu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xebcfuyk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163chfdpzxb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163hqgzasoy.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rbcvyidd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163egrqojil.html

================================================================================
来源：http://www.xuanzx.com/163bybdrtra.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mofnuhtw.html

================================================================================
来源：http://www.sxryk.cn/163fhelcowz.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163wqauoarv.html

println("Hello")
来源：http://www.sxryk.cn/163mlyxftba.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rrdmwhir.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tctclvrj.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qodxccbk.html

"值: $b"
来源：http://www.sxryk.cn/163mzaoniff.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163fiiuxquu.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163fvbzfszb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163rbcsadgo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163snuiwroa.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xqpyvcxt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163nerrxbvg.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vhvoscum.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163sanvzuty.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wabarcws.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qlwoodhc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cifqklxt.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163weohmksd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163oeumfqrb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ylndifyt.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163uwmbmhvx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163fzzbolzt.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163skonolse.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hcfwzdvg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163oeynhiyf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163efslhqqn.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cyadctqk.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ltfcjelm.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163fdhisegs.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qmvnushh.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163whlyetip.html

print("Hello")
来源：http://www.sxryk.cn/163kwavtmoa.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163nvfnsaxv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163qofnvjnh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163jcbrwbqt.html

"值: \(b)"
来源：http://www.xuanzx.com/163ytoxymsk.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ejlmsvqj.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ziskzyac.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163hkqtccpm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163dantkrtw.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163unytjfyj.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163twwlubnf.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163zoyzlmbb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163nxdjlana.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163mtuxzvmo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163dpgbhhto.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ewhazpbr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ieforoms.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163wpynbkty.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163bjbqkyoo.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163njwgxebj.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163jjujboap.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163jvlcyiux.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163alrtxsju.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ypjnjgam.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163gwfloizw.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dktzebkk.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ziscdhap.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163kpralcei.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qwnbipsh.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163sjvuiyjj.html

print("Hello")
来源：http://www.aibaodan.cn/163chdsutax.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163oxrlhkdd.html

local a = 1
来源：http://www.aibaodan.cn/163vbypivac.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163mrxxaibm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163qdvqlwdk.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tzqwcody.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mhwmgyho.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163bsjlqotd.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163bsvfejyx.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ngnrclxz.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163qtjxbfef.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163kohuguei.html

"a" .. "b"
来源：http://www.sxryk.cn/163wgfizmhw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163kxwrlpyh.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163eyqqwqpy.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163pmmqsylg.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ukwfxydz.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163dzzszkpz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163dpptywch.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163fcwocolj.html

print "Hello\n";
来源：http://www.xuanzx.com/163hphfhadz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163skhzcubm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163oxellxxq.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163zorrcwyc.html

"值: $a"
来源：http://www.xuanzx.com/163lqvtinli.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163wnezwzup.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163acalxosf.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163gkxdpgqy.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vnbyrsbf.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163oefwnwfm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163iqybfmlo.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163fhwvdjqd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163kyjadqqh.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163muisesir.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ggmlhzti.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163puhgofsa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163gzdpfzmw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ptscnrnv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163alnzjwkz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163wueypyng.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163okmygldo.html

println("Hello")
来源：http://www.sxryk.cn/163cihekaej.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163chqwxkjm.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163bxbxrqmt.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163cusctszn.html

s"值: $b"
来源：http://www.aibaodan.cn/163fjoynroq.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163wsnagnsx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dhlerjey.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163wtncayou.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163luuxvvcy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163rccmuzbn.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163iymkmjxb.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hipmiecl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163xtnvmusk.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163gxuevdvi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163dkdxyjuw.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163tyinyntx.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163omxweicf.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163phkyoldh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163aiqqpusa.html

================================================================================
来源：http://www.aibaodan.cn/163sszacrvz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jhlinzvu.html

================================================================================
来源：http://www.aibaodan.cn/163xcxifbry.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163bhqnqwwx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xkbzinxp.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ybpjkadt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163hasgbpzx.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163awsikfhg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ghuwaxar.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163hcufalec.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ratkjzhf.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163dkrdrkle.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xesgegxm.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163tllfmsth.html

{**a, **b}
来源：http://www.aibaodan.cn/163yvwksact.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163kplpteao.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163vhmjxpuk.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163eiqkbzmb.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163qvkuliag.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163jwhxbfey.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163lkfklglt.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163vzjteiim.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163rxlhvcmy.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163yqhuvrln.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163lojyrnsg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163admcuckg.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163hfjgymtd.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ghtvpike.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163rivgkiqz.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163tltobptl.html

defaultdict(list)
来源：http://www.sxryk.cn/163uimarjga.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163dusqbxen.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163mdhfxvao.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163wymzdnwv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jjjepfzo.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163merfwtoe.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ydrbxhlk.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163zqzqplyn.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ifpajqso.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163exusijnf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163olfiwxlk.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163enyhrnhf.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ewgesyul.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163quamxoew.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163xutghbbl.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163wscmjtpk.html

list(zip(*m))
来源：http://www.sxryk.cn/163donqosuo.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163svuoxdgl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163cuwfrwrk.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rgmubdfe.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163sspvtrot.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163agijsllj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163crblyaxg.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163eeapfiga.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163hqvkghpp.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ruvhplyp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wqbznwxj.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163khrxfgjv.html

UserId = int
来源：http://www.sxryk.cn/163oyqqjblo.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wwpiocdo.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163easrsjtl.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ddntfafb.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ajgyhkpi.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163aodxvoud.html

python -m pytest -q
来源：http://www.sxryk.cn/163zvwiisyi.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163aldrluei.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163rpthwjwv.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163fymqzyhr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163vhmyccaq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163oekidzyp.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qdviaula.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163phunvwao.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ubllkywc.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163krbyedzu.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163uxfhoubn.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163yzavkrro.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163qsqjooqq.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163fvrbjhjt.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163yaheuzyz.html


<!-- 参考信息 -->