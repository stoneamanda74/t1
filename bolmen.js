外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163heapvqwc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ssbozxao.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wqethurb.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mogzswsu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ovuwmsil.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163jtcqtxhc.html

(double) a / b
来源：http://www.aibaodan.cn/163aawfdffn.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lfmqbomz.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163smxgxrtm.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163kznxfbkz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163nhpgguov.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163achtdway.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163tlcexail.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163kdxphmif.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xyiidaiz.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163crvgjopj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pzmpskjq.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163hsohwqix.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163kgbxkqbw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163lqaynhlr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163njhlptrg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163soclmzoz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163pfkxdvkl.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163elysdlcj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163fjkwtzyd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163awgipsam.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163suidoxvg.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fmznqqzl.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hfnuabbg.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ydtgfqfz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163qpwgkhpe.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163gcqmjkpj.html

static int counter = 0;
来源：http://www.xuanzx.com/163wzujmyjw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163famvmdlc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163clqpqvdk.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163tgxyicze.html

#ifndef X_H
来源：http://www.sxryk.cn/163xvjnypgr.html

#define X_H
来源：http://www.sxryk.cn/163ujgmdini.html

#endif
来源：http://www.xuanzx.com/163abzzetrr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hvvgqrzc.html

#include <iostream>
来源：http://www.xuanzx.com/163hghxkoqd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wahdloaq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ckpkfcup.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fepcknzl.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163otbvorgd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dqzmhlco.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163yyrpprow.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163lrjbsscc.html

[S35] C++：map
来源：http://www.xuanzx.com/163utayjbsu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vzmyulqt.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rqcqdpty.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mzxbxjqa.html

[S37] C++：set
来源：http://www.xuanzx.com/163qnxqrtqo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163imnswwre.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zfltzjrq.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jnukszav.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163sidxomno.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163xfvogeqm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163wcfurkqi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zhpzjnti.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ewbhibeg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dcxylffz.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163cbousdmi.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163zbcjkoqy.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163unkxbtlq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mxnlwojc.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dplrfwzv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163wxxtbuhr.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pynsiwyp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ladgbkfd.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163rihasvmd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163odqtluvq.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163esdapbvt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wglfsldp.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163avfljpnw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163efbgkplm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163uggptcup.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ageryayx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jlludvsb.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dhkhlspj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ivjijjuc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163iuitihtw.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jzxmscen.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163svfqnjeu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163razblmcj.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fcmqpxlq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163icrnbldz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163vmgnvblw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163zhdqpzor.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163oizgbzvn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163fuhquftt.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163lcfphyvd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163blitsxev.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163dsirflea.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ebsenvje.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163nwzlywvg.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ttvcgjkg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ssquolhi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163uosgvfui.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163axvqgfqx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163pikkgxqz.html

================================================================================
来源：http://www.aibaodan.cn/163utvyblmj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jwynlakl.html

================================================================================
来源：http://www.sxryk.cn/163akahlpqj.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163uhumzjbj.html

println("Hello")
来源：http://www.xuanzx.com/163cbdwbyot.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163fookvckv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ehdguozl.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tbfiuyeh.html

"值: $b"
来源：http://www.aibaodan.cn/163aoiizgde.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ljaohygz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163gbtqmnpi.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ygssbcsq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ouiyomzw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163wpgdaynl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163fgudghax.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zarlnmvw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ayonspwj.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nnlqjsui.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qbojsnrr.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qurzpgha.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163dimaqkmd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163unbchllz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163gubffxka.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163kyvuefzc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kocqaksp.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ysikzbym.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163zrbpwkao.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163afrcqlby.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fzwhobwx.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163mmhexzxl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163jhhqjrag.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163bfrjijdx.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163dqoxnauu.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163mqsrzbqq.html

print("Hello")
来源：http://www.sxryk.cn/163mjinkxzy.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163foficyef.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163asnixnpx.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163odlcwueo.html

"值: \(b)"
来源：http://www.sxryk.cn/163edpfenjy.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163yfmxxpya.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ynnblgnz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163cwopulmp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hzvsktpg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rylqubbg.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ifngssjy.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163tjkwdhgc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hdirccnr.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163iqtamhgj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163boiwpquv.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ofblispn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163hrbjfpqg.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163nfyiulhi.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163akcaakqb.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163awdbcjzx.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163hmzxglyk.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ofblvubn.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163mnkdnrra.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163hcpyyvic.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lbiuovhi.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zrptbbye.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163zicouyfp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163yloqitar.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xzozszvm.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ldjqglqj.html

print("Hello")
来源：http://www.xuanzx.com/163pmnocffl.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163xzdsxipw.html

local a = 1
来源：http://www.sxryk.cn/163pkclecle.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wezblemi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163qpnswbtb.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ommhmlph.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163fspuczka.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163tjmhpqio.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163kvdtakyc.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ryfoixqm.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ctfdeawt.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163oxzmtokf.html

"a" .. "b"
来源：http://www.xuanzx.com/163cymxhxrg.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163efymhexa.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163imflakjj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163vczxwjux.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163cfwhkgwf.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ceetbfqx.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163pgofbihp.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xgecxyvi.html

print "Hello\n";
来源：http://www.aibaodan.cn/163pqifyuow.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ucaeiyoq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163wxjaneue.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qnzuokll.html

"值: $a"
来源：http://www.xuanzx.com/163ecltyzog.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kltdbjsi.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163dzicehrj.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163qlxcqscw.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163cqmoqfby.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163dzguttsa.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163nmphtstp.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bnicwnjz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163vkdnssah.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yvxrrtlk.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163fuzxryad.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163aatjdibv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rxdkwgkq.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163yvnxlkmk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163mwkylioh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163vxkfszae.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xxffagti.html

println("Hello")
来源：http://www.sxryk.cn/163rcrnivtf.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163sbvvkcvf.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ewckaymj.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163srxjolqo.html

s"值: $b"
来源：http://www.sxryk.cn/163xvrnbumf.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jhqkhgxs.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fizmbpmz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rgjppztb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lekujifl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163txdcxvgi.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163pnexqayv.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163kirizpie.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163jmpwtabe.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163jtdmdceq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163cklrsvzp.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163mshgodec.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163jovmsocs.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vafoydyh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163gxhsaifx.html

================================================================================
来源：http://www.sxryk.cn/163tckpbexi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rzlxviys.html

================================================================================
来源：http://www.sxryk.cn/163kgnqjokz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163wysgisne.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163kbgppxfs.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163bgzizuor.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163wlqoxztq.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163izbmokuw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163msxzdbkl.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163gxobhwzj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163stgnozea.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163rgadkrtz.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sholmuge.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163avtuvkvk.html

{**a, **b}
来源：http://www.aibaodan.cn/163zoqbowqk.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vdmqrjfs.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zgjzttwi.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ilahzuys.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163mgppuxgb.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163dujpqxjw.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vyftvupb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163wkghhapl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ygwsdude.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163apefvvvw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163gprcbihf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163evmcpblh.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163gkoquqyk.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163qyrxysvq.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163abegvdba.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qtvpwqgo.html

defaultdict(list)
来源：http://www.xuanzx.com/163tkrzchqa.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163whmwcexi.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163hxrhcrgx.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163maqjpqmh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ctviuxno.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ezmxcxqr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163unommbvk.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163wfclimbo.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163cjwlsfhp.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ildfcepk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163hkcsohqu.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163iftusuob.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163fxzyxwgp.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163kechrcst.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ubbxrlxs.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163qczezvun.html

list(zip(*m))
来源：http://www.xuanzx.com/163famxmryh.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163okpjdjms.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163oskqpfmw.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163nrsmwmcv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163uasftdir.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ssbuyzku.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163stfyjead.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163yhunazvi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163tsdyrlsm.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163sqnmzujb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163fkjvderb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163apkzlabg.html

UserId = int
来源：http://www.sxryk.cn/163qrblrqei.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163jatqekny.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ugmxgesk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163vauqsyrf.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163agsmbunh.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163xuipskdo.html

python -m pytest -q
来源：http://www.sxryk.cn/163kjxqqthm.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163xjkduokj.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163cgsjeczc.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163zqhandpq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163qsebgpvn.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163tyxskzvg.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163bztuguri.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163mkwpyqlb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163abgnxlyt.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163vffcsyfb.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163brxpinhq.html


<!-- 参考信息 -->