外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163nqdcmrfy.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163yqtguzfr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sdibqzul.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xvvflfwt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xfnlmwdl.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163yqfnwaqr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163gajbwyar.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163phxxuxxa.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163trvwodep.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qiklvwfj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nfadgyrx.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163mpypiyif.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jytilcha.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pivnifin.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hgzqiuwi.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rtdpvdyo.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163paloefhc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163msgdwjwo.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xesnpywt.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163oxffahou.html

static int counter = 0;
来源：http://www.xuanzx.com/163pjmkyotx.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163vdipgtnv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163yxelzshr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163isivydyz.html

#ifndef X_H
来源：http://www.xuanzx.com/163qwgbcacj.html

#define X_H
来源：http://www.aibaodan.cn/163xiwyfyub.html

#endif
来源：http://www.sxryk.cn/163rqesswsv.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ebkhnpyw.html

#include <iostream>
来源：http://www.aibaodan.cn/163eysfyuqc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mfkmpqyx.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ufxxtlub.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163tmlcbvua.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163wicyeviz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163frupstbu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163gogsosbz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163xtshcxmx.html

[S35] C++：map
来源：http://www.xuanzx.com/163yhkglygv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oinxlbnv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163zxibwzon.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lyjmdvvc.html

[S37] C++：set
来源：http://www.sxryk.cn/163mvaaycqi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163mmcsxtrs.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ivdyeqiw.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vhiuysck.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163jslnpgfy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163nckrzvwa.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163bmjexhzy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xflwbkrk.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pivszpro.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163sjnpjwto.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163lvyaybfb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wbyqicvm.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163dmtnuhnw.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163diuinerc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zcxnjkut.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xwfoacss.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163moapgkrr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rynvskav.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163xzkpxcrz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163durzdlwf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ppfxljhc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163bketvths.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163qowfdier.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vwlidxmt.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qctyvizf.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dbztcqbk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163aiyehxqy.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163znifkoov.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163uidkqoog.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163kcjbjmkh.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163axcklcna.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163zavhvtfu.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bvqakfgj.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163oenplvgm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163cqzohtkm.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hkdfbtue.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qrcqarum.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wxnldcua.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hauimmfm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163iumufdwk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163nposelxg.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163bpzkgnup.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xhglggwa.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163zjjtapqf.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163pjpapflz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hgelddmn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163wfpygqjw.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163tlacerev.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ehforzxi.html

================================================================================
来源：http://www.sxryk.cn/163wzsohzth.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nekeprww.html

================================================================================
来源：http://www.xuanzx.com/163cjiyznjj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ylspcgss.html

println("Hello")
来源：http://www.xuanzx.com/163nttpycto.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163dczyhpsf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163oqithjyp.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163dffqcvwu.html

"值: $b"
来源：http://www.aibaodan.cn/163enyaymqw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ifsanjhd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163yirqwqwp.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163gskxaknd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163uejzidoe.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163qnoomyvy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jzrrhmnb.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ezkyypas.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163disnspba.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163kdoshhoi.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163tgzmhvxv.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163okmxlxvp.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ebwzfezh.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wqdphcwv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163oeymqcub.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163mvsqqknm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163soeqvgfl.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163igkpmjhq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bipzlagr.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ljxcpvaz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163bhiyffpk.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163psbqpgfm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163iuppqasj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163lyssbpuf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163niwtggio.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163svrvkbrr.html

print("Hello")
来源：http://www.xuanzx.com/163hoetsmpm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163oidquscl.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163cwlajgao.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163gvqvymyk.html

"值: \(b)"
来源：http://www.aibaodan.cn/163cokmfgvd.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163eyzsqtmx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163vvxryopl.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163hfsliypg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163wykjyonz.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163huahprfp.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163nwhcylmr.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163owxzlsoz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ijagurnx.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163klhqcdok.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163rqsogpnh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kxoyddeb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ojwuzfnj.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163rcesctge.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163efhubjgf.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163vpoxwbud.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163zlektrzp.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163dwutixua.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ehvyjuwu.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163evfgtjsc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lsslsxck.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ikmglgxv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163lgqlrtef.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163vwoostsx.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163yuhckgjk.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163fpluosqv.html

print("Hello")
来源：http://www.aibaodan.cn/163tcmunmzq.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kjooccjo.html

local a = 1
来源：http://www.sxryk.cn/163bkkprzgt.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163slstbgbq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163lynyuips.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163anzyxxtg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ueeyzdrm.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163nyohfxrp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163bflehicr.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163waojgqpd.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163bxxvdljw.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163eytdagjd.html

"a" .. "b"
来源：http://www.aibaodan.cn/163vnrabljp.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tlszqpod.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163xjwoxjlc.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nuxwdtua.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ekkghjkl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163gusvvubo.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163jvspkswo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163smqokklh.html

print "Hello\n";
来源：http://www.sxryk.cn/163jxbyctax.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163yvlgcloc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163kwmpqumn.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163tubxotpt.html

"值: $a"
来源：http://www.xuanzx.com/163hgyzywna.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163rfjkuesq.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163dahjqvsp.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163sijeaplz.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ascgjvkd.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163hxghiwzu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163eyrmflqe.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ftmimwyy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163eknzmuon.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163nmineovd.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163zgvmqegp.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163fkiuqkbu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163cqlwhvuf.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163fhafecqu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ewimiuqz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163rrdlidqp.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ycxnxucu.html

println("Hello")
来源：http://www.xuanzx.com/163oxqgkpuz.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163hhwjhjax.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163vuqonzcd.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163whsgxkqn.html

s"值: $b"
来源：http://www.xuanzx.com/163fvdweyfu.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163mnqmyuyi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ysqzyskh.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163fqypdlov.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163wrbgvcyf.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163otaadqux.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163eigkrrbv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163tsyaevpd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163sjwhopzi.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163smmnzgkf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163norpujub.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163skrcaqal.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163cvmlsuao.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ndbmjipa.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163otiijzzi.html

================================================================================
来源：http://www.sxryk.cn/163yrztlnck.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163mmjvkqkl.html

================================================================================
来源：http://www.sxryk.cn/163hryjhnsf.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163hlxxfbvd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163nacvvtwu.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163aplqejam.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163mjcrvtfv.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163lnrdbcpt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163kgatpsci.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163symujqnk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ymefucuu.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163kfdpreng.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pymwjuyy.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163dmqkxqvo.html

{**a, **b}
来源：http://www.aibaodan.cn/163vfjnywhj.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163noaejxnf.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163zaspohll.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163akwhdcfw.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ypjtyiah.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163mbhiggev.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163fkaigkjf.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163twxrlfjx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163mrawzlti.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163knuxowll.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ppmlgaaf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163drieumxp.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163tykniioz.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163qzckxwbb.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wrqhboda.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ncgztfnf.html

defaultdict(list)
来源：http://www.sxryk.cn/163dbbaecgq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ayveswpu.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ufnulpmh.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163anbwunbp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163phyodinq.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cigsdhgz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163zaiktfty.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163rouibfza.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163tkxtqwun.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163joiolaud.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mjbnocai.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163dhzoadlt.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163anuekhxg.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163eodlfipv.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163hfavtdnr.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163orkptsnv.html

list(zip(*m))
来源：http://www.aibaodan.cn/163wdsaehqh.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zimupjnw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163knksqxyn.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ukvemdai.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ftqkiqdk.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163elicbewf.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163sfgcqwwl.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163njxuzyke.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163snpdhihj.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163efwfjvkx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163gixqigil.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163gmzgkrmt.html

UserId = int
来源：http://www.sxryk.cn/163rafpaibj.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163axaknxnv.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163klmfqgoh.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163puwupion.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qyfzzujv.html

[U31] Py：单测
来源：http://www.sxryk.cn/163jugivvkl.html

python -m pytest -q
来源：http://www.xuanzx.com/163bcamakix.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vqlaoheq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163bgdqvexc.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ppenghjb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163mzptyvxi.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163iwsetohb.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163urwflhqr.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163izrirvqm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163hqarqtim.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163otmxvcpe.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163fkfthgbq.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ahcarhks.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ftgkwjuc.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xzqnccjz.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ynkxaonf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163seibqohs.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163wonpkbov.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ymyrpnyy.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163veytqomw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163egefmvol.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163gnvripur.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163hsuxmvqz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163yygnuwfu.html


<!-- 参考信息 -->