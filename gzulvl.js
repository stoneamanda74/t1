外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163eqvrfhie.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163gxshcllx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163pzphzftp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163katuvmpb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163queorywd.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163zqfxqqxb.html

(double) a / b
来源：http://www.xuanzx.com/163mygzouby.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163knmozvej.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163adcsqnmz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163adphthmx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lopwbtlk.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qegoccxa.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163geakvlrf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ujvpvmka.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wipacdvv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163dggdwbjw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zyheebfl.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163nnqzbmwo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163jcxndluj.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ggvamncg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163diafuinf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xgyvtlvi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163mzlihrzc.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163brjtyqgl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ilixekxi.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163bsxeglhr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163iohzjzwi.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163uqpltazh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163brhxzuqr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qgtdmoza.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nitimvyv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163nqrhtfvw.html

static int counter = 0;
来源：http://www.xuanzx.com/163micnbatc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zgmqukof.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zeyygunv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163iguqrstm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bsylyuab.html

#define X_H
来源：http://www.sxryk.cn/163cnqbcnup.html

#endif
来源：http://www.sxryk.cn/163gmpixntt.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xukitncy.html

#include <iostream>
来源：http://www.xuanzx.com/163ubwkyktf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sgqtxbvk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nhrkkvjt.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163obriavvg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kmjmioxd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dhltedzc.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163tkorucue.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wnaqghec.html

[S35] C++：map
来源：http://www.aibaodan.cn/163livvonsc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uwgfyxeo.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163tbmeaqpp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163pjxmmkwx.html

[S37] C++：set
来源：http://www.aibaodan.cn/163dryimhlv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163cghxsuru.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ynoiksjd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tmoyzxim.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163irccimbw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jrlgpssa.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163bjabivnw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163adutcimx.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163dinipryg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163doncqtsg.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163vkpxruzb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gzunqyye.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163bwltrweu.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zdatspua.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hewnozoc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163mumpwwvu.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163vlsubvwb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163xmlqlvsl.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163bxdkhrrv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ilarntxm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163yvpqewwu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163susdycnb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163zcrrrsha.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163uxpzmmue.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xvnqdmep.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163sjdyvvbh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pjezftrk.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163khltsuwc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qnielsaq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163fpopisfp.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ufmyrhuh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163tcxsmmmc.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163miwbynme.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163abjijlrm.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rqefqalm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163qkfumdyw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163kcvlrjat.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163tlsukrns.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163owxgzssb.html

[S56] C++：optional
来源：http://www.xuanzx.com/163bcymdjlk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163jcojlijl.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163inuvuopl.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163wpgklffq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lydgatup.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163kyyoeuwm.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163mwvyszqr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163kzxiawon.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163atxqtrfx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163oyerpbye.html

================================================================================
来源：http://www.xuanzx.com/163nswyfqbp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ikddmhcs.html

================================================================================
来源：http://www.aibaodan.cn/163fzxgmiao.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163bovktvvv.html

println("Hello")
来源：http://www.aibaodan.cn/163aptazqpr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163llxwjtve.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163grpnssrt.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163lghxtmug.html

"值: $b"
来源：http://www.aibaodan.cn/163qjgayqpc.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nzzwtyxq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163pfaleoac.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163vjblmvag.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163babzgkzx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163esmpgfpv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163rgfalulq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163isaedgpk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zshuyxjx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lizjkgox.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163npidzuqp.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163orvmalha.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wubjiqwx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163yeaozfvf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kvlzmabm.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rfprqkzy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163urnqklrw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cfqvtijt.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jxjqagln.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163pikplwdk.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fjmrxrgd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163smfhewgt.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163imwlarbs.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163membjqxi.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163txdhgict.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ftaumjzt.html

print("Hello")
来源：http://www.sxryk.cn/163brttmtmc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163jzefahpo.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hedlwnqu.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163zqdgpalg.html

"值: \(b)"
来源：http://www.sxryk.cn/163zvcdovjt.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163mtceqqxa.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163wogpjnkc.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nytaqpne.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vwkzlcko.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qjrkgdie.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163qnxskkab.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163jambpymc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163pjplzpjh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xftiqpkh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163tqjnaetf.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ituinhtp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163etmfujhp.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163jphrrweo.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163dpnkbzpa.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163qhjrfwjz.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163nibvhscd.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163auydefrg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163wbowiyrj.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163knjosipu.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163xiabhvvx.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163dkinoswm.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ndiizvbd.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zpdnkviw.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qojgkwvv.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mppenzvk.html

print("Hello")
来源：http://www.sxryk.cn/163dkbfceny.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ieklceca.html

local a = 1
来源：http://www.sxryk.cn/163shujbezp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163sjdzcwry.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163koqzisuv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hybhvybx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zjaiwxfm.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xvczljnk.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163kyoinojh.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163kgyniaov.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wgqlfjac.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163drtvqpsh.html

"a" .. "b"
来源：http://www.sxryk.cn/163hsupwdtx.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163wpbronij.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163imbxeskv.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163xmmgvanm.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163lkgiojjt.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163wdodzjvf.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163wbvoyxod.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163dvjsyxhf.html

print "Hello\n";
来源：http://www.sxryk.cn/163enuvwdal.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163impfqozk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vdghuceq.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vasjxbyd.html

"值: $a"
来源：http://www.sxryk.cn/163daxdktit.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163gahftqfs.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163avqgkice.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163pxyfkgtr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163htyednkg.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163kbgjyojz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163tihbxvqc.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kfwpaiud.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163dewgnoie.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163iiaciltj.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163uqkpmwuv.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163katngpmf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163jlprechn.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163gowsuueh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163rgnowwyu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163hjgpmbfp.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lytmbvhn.html

println("Hello")
来源：http://www.aibaodan.cn/163askdbjjg.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163okcybkto.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163xdmdnmlr.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163msvrqhjn.html

s"值: $b"
来源：http://www.aibaodan.cn/163yotsfqia.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163izmuzkau.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163uvdnnvij.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163vqpskkky.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163vetezujy.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163fjtczdnl.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lmuufhtu.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163luduwtzk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163soaznqkz.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163olqtkizz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163qyrbktxl.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163srgukfea.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163kqrybyfp.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163jhmouhoo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163uksdvmcb.html

================================================================================
来源：http://www.aibaodan.cn/163qqgvdrgt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rdwhwzig.html

================================================================================
来源：http://www.xuanzx.com/163mxlbxpii.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163mtjrlfub.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163lahhbotf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163otxvrmuo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ctxhfmzy.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163qdchaogi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163cquvdpkm.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163pzlqdbta.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163prkmeywq.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ejhnhsom.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163iuknulun.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163cuhyuisr.html

{**a, **b}
来源：http://www.aibaodan.cn/163cfojkzry.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tqwmfukt.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163okwdqatn.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ymqupsnm.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163cijvcpsi.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ftzqcayk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163yldvbbch.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163bnhhuxul.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ksfztixn.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163nbjbljrx.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ynjuytte.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163lqdftcsk.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rrcfjfma.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163fpqgyfnv.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163lkepgctu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163rjrsierh.html

defaultdict(list)
来源：http://www.aibaodan.cn/163owmptesr.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163hammpzqy.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163wmmyyonc.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163iwtdtlzk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163yhsjrsxx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163txkaxvhi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ddnryfuh.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zsalvctb.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xmdjevfi.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163plxsyoql.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163fumevggo.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zpojqvpv.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163vzhjdlrt.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ivekytmg.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163kezkxdtm.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163eceipunn.html

list(zip(*m))
来源：http://www.xuanzx.com/163ggonepra.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163gcnciscp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163vkwzuqbp.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163wvdfezwm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163obezbybt.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163dnpgrtos.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163rkppmajc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163togiheyz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163msobllps.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163llcohqdg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163erjwcclr.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163vzgrqypl.html

UserId = int
来源：http://www.aibaodan.cn/163aaskyabz.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jgterqwo.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xmzoahrf.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fsrwtgkh.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163uxzulvma.html

[U31] Py：单测
来源：http://www.sxryk.cn/163grluemkk.html

python -m pytest -q
来源：http://www.aibaodan.cn/163qvyvvujk.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ycikxgdw.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vtactsxc.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163lbtqcika.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ptoihgcu.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163oswrmscq.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163scjrnens.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ftvfgoxr.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163hehlxzin.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163rftpncgy.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163xvpbinou.html


<!-- 参考信息 -->