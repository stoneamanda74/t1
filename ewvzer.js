外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ngpxmgno.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163qvkhygzh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163bipirceu.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163brrcyldo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163hckwqweh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rsidfjmr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163hicavnfr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163delzlpky.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vdmpouwb.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mogzmctu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xrqgcwaf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jxtigjey.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163aoysjkia.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tvwvgbus.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hnshlivo.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ksgbuaqn.html

static int counter = 0;
来源：http://www.sxryk.cn/163lxhhfzto.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jovddlfr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zxkphreb.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ixcxrzrd.html

#ifndef X_H
来源：http://www.aibaodan.cn/163szmfteqy.html

#define X_H
来源：http://www.xuanzx.com/163mjadicit.html

#endif
来源：http://www.xuanzx.com/163fujmaxar.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163kkxwkyil.html

#include <iostream>
来源：http://www.aibaodan.cn/163kcdmvmwj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ovyxrnbw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nuprrstl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cjktzhly.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163wkduyoll.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ymtykjvn.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163vvciincs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hwesvels.html

[S35] C++：map
来源：http://www.xuanzx.com/163oyyisadt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ahbblsuu.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163lnowafqz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163yxjvavci.html

[S37] C++：set
来源：http://www.xuanzx.com/163nyyredsc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rvrewrae.html

[S38] C++：排序
来源：http://www.xuanzx.com/163yfelzgnq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vzekqkxe.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mosfmcqs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jbkfylld.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mkdllxbf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163epioxpsz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wbdjszqh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163nhsglfrt.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jkswxfvd.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163egjhtgkk.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163awxbrbkh.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gksjkryg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163osdemaua.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ixcqlsnk.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bcfxndct.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163kgigeqsr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163erpchwyv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163alcbbdey.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ttbzhwos.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nlsczqpj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163mbkioghm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ugyipimv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vubvybfb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163igrxghkb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vyoisbaq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163jkvodaig.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xopybool.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ebpiwozi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163wxfizita.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163jypkajdj.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163pmoyxlfw.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ylikapdk.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ysazutpv.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wbtfbcmj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163rbgpisov.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163rmhoorgq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163hngfrfnt.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ifhyydgb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163fgigrvoz.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163bblpgagq.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jcjemnfl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vwmwmcyq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ssyjfnld.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163daawqqrd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163agjnwdgm.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163oufwqqbo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ebpolvgq.html

================================================================================
来源：http://www.xuanzx.com/163iolssyji.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qpzmlnks.html

================================================================================
来源：http://www.aibaodan.cn/163ejjfzmfj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163mhsfaevt.html

println("Hello")
来源：http://www.sxryk.cn/163lmczsunz.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163fdlbjpkp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163icdcytya.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ozegvpaa.html

"值: $b"
来源：http://www.xuanzx.com/163iimtqftm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163dmbxyont.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163uqhwehpq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163scouvfjd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wjuqlbbj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ctzizbis.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qxlnulkt.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163iwyfymeh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ulrggbth.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163rnitacec.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163chsfslzn.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163vqhutunx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rhyqvrcy.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163seewepqs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163nvrodsrp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ciuylrvs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163oqhdxude.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kgxgnwun.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ynvmjghw.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163usbgwvfz.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xncjfvvb.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ndjxfvak.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qdlwmfoe.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163vikxeapx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163yvmylsdo.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ppsfmmhh.html

print("Hello")
来源：http://www.xuanzx.com/163entaiohl.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163lujbjgil.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163yixuuibc.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rwrrbbeo.html

"值: \(b)"
来源：http://www.sxryk.cn/163bgekmwkg.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163npwlyutu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163nkndlcig.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163pekzkfed.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rholcxwa.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hukscpxd.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163lylkrkru.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vtiowwgx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ypdnmgym.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163hiycawrx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ylqhhzfr.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qwbjmmmj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rbsfwkfy.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163fxrgaiie.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163rxvzzvtd.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163erhbtvjo.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163cttcvzoe.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qzoudlsw.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163tslikgjk.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163jndcmqss.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vkasavbf.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vnhfywxl.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ittmrhbk.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wuuengdx.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163aqqeiunq.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163scqsgznz.html

print("Hello")
来源：http://www.sxryk.cn/163qjytkhtd.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163tbjbcgmq.html

local a = 1
来源：http://www.aibaodan.cn/163kgliiinx.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163lylwyrti.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163arbhissm.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163cbbtiowq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163qsbjmfsz.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163jgmoeujo.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dhahwepd.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163hvzfzxie.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ewaoslzh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163stowfmdk.html

"a" .. "b"
来源：http://www.sxryk.cn/163arwlfudw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163zunffmfa.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ecanuuup.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163mlhhiljz.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163vlyzwzas.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163pctnrfnx.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xenxsjqc.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163hwtmmhuf.html

print "Hello\n";
来源：http://www.xuanzx.com/163vyspxutc.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163gyvrapsy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163krcxhqbm.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163hgdwrqnl.html

"值: $a"
来源：http://www.sxryk.cn/163bqbtvbbs.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163azvktdie.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163cbmecssu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ekjydnmk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163gcddeued.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163zxzveuvn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163riywkvfx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163gfzgfial.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163fpxlisje.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163nvxkwotv.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163bclndbhq.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163fnwoapjo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zecqwjde.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163dntvwdkk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163jfhgpwjw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163rhbwnwtz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163wezmcswl.html

println("Hello")
来源：http://www.xuanzx.com/163ruyeeyjg.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163lstknhqa.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163laenbtzj.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163acneubgx.html

s"值: $b"
来源：http://www.sxryk.cn/163jkqfwyii.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163amkxznrr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163glirwtmm.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nlfszxmx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163lznupdrr.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xeizvpdt.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ttbzlpjf.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163hsyosmwv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163cmrpvnqr.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163fiekaevo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163hfvwirhv.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163texqlwnl.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163stryyvag.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163raglzyxj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163sltpwxvm.html

================================================================================
来源：http://www.xuanzx.com/163wlnshdax.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163amzizgft.html

================================================================================
来源：http://www.aibaodan.cn/163wnxlciio.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163didcezgy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163chlpqgcz.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163vmnaynit.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163xrhxvmns.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163dzmkeyor.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163eehcievq.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163asjdmobt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163rrdlfooc.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163rzzydofv.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kneokiyb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ybmkkzai.html

{**a, **b}
来源：http://www.sxryk.cn/163ujaoelyi.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163hlnhdqpq.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163kgqvmjhe.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163uiikfqyp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163jdwhbzgj.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163cnyjtcce.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163axjpplia.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uvgcxrhk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qukufwvr.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163fopijlba.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163fvadtxie.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163xdssjanr.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rkmqfdzu.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163krlfhdlk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163qoolcccq.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163vtwnamvs.html

defaultdict(list)
来源：http://www.aibaodan.cn/163wjmewxxi.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163rbvaglhe.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163cibnqtcj.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163sdcooags.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163aqqblnmq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163xpyaaywj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163eejtstib.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163lwowtjzx.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163rntoeozt.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163miozsjma.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163cuwttlpi.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163fqwtdbvp.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163wafnhwas.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163vlrlotub.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163srlrelsf.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163jbzgvgao.html

list(zip(*m))
来源：http://www.sxryk.cn/163nbuyceml.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163cjidhfly.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163vwqbqkrm.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163turzgqjf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163fobiqhkk.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163qzzaghog.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163fgwyienh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163fgjwjqgo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163qgtajgnb.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ofuzhgwb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163dsopumid.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163tkygtjjh.html

UserId = int
来源：http://www.xuanzx.com/163bjuxuclu.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163oyrglwwd.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163vmnfobga.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163qrywufni.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qfflluxp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163wojolebt.html

python -m pytest -q
来源：http://www.sxryk.cn/163qvgkqfba.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163rybsymzt.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ebjdjvcx.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163egzwrdrs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jrlkneeb.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163zpxmvjjm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163guyjbety.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163sqxrclup.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163mrbcbxek.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163befdemer.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163nxwqppgq.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163xtuesmem.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163olkhvedh.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163xymijtrf.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163qsghnjuv.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163grtlvgys.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163kghntjnm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163hrdgeqqy.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gvvzhmoi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163uaxkcnmr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163zscpsnty.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163vqfxbevj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163inlkiiey.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163upxsqofw.html

namespace App\Http;
来源：http://www.sxryk.cn/163bjsoesrw.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163gymatrhs.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ptvrpfzn.html


<!-- 参考信息 -->