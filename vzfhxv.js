外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nxpchyyd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163xcmysudt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oertsnir.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163oyrprqtl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bvcjziox.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dzovftlb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hpmpzaxu.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wngqloyy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163yavtofbx.html

[S23] C：随机数
来源：http://www.xuanzx.com/163wzncbgpm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163dzqwflns.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vsnpcmtb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163leakwcsj.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ioghrlje.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mkxspslu.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ayfwfepk.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163cpgtjfwf.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163sktpvmzb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hikuxlki.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163hbgqbdpj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rbobyxxl.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163hnfjycbm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163fjnrtcqw.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163eoipcees.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ljlupbat.html

#define X_H
来源：http://www.xuanzx.com/163vqdzeour.html

#endif
来源：http://www.aibaodan.cn/163bgzsafbl.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163amrvwbmo.html

#include <iostream>
来源：http://www.sxryk.cn/163fdsdbamb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163pojcsaqh.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ejpudara.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163gdfpeosn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163oalefdth.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ntlontkg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163caaxnqzf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gfkeglnw.html

[S35] C++：map
来源：http://www.aibaodan.cn/163bxvdnilk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nbefulbh.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163csmozmoi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hkvhknuu.html

[S37] C++：set
来源：http://www.xuanzx.com/163cbicqfro.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vuhwxbxq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hekluena.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163nlzwouih.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163fapepxvz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bjqcuzmz.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ugcafnaf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163lxvqgjmb.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pykphatq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163oqykqrkp.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qdfqigci.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163vambiinl.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gpfvrrza.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hgpqvjta.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163iddnncns.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wrskamth.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163unxdzqvg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ajvowuwq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163tothdufq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163lxeenfyi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163cokcmuap.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163mdznrgut.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163evhpvfxe.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163gwcpndyy.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163rxoyozns.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163vjyklbmn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163njvhltln.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163edcilinw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163yigcayrw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vyrvcntz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ozrqbxtt.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163miadktrb.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163njqcsrmr.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hdqhzkvp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163xfpjswgq.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kyfnpxii.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163uzqiotdx.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ryiggdix.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hsqkvpdl.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lattacay.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163hevwgokl.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hyhrqhqr.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163lfdklnku.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163pcggwxdt.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ucogocvx.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qasiwqtn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163qhswuhea.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163eutnnjwa.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163uxrsssqh.html

================================================================================
来源：http://www.xuanzx.com/163ggqvychg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vfwmjwnk.html

================================================================================
来源：http://www.xuanzx.com/163bpcufqjg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hummdguj.html

println("Hello")
来源：http://www.aibaodan.cn/163cyivvsxy.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163nqyxnftn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163fbgwmquz.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163sjkejepn.html

"值: $b"
来源：http://www.sxryk.cn/163hmjnbzfi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ztnzjgpu.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163obucigvr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163lwtodacv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163blcmpiap.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163hdhxdqda.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163lfhiycgh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163pfjzqqjo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163aggmhhwk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163hcjquhwq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qeimyanz.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ximbcich.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163iweypgzo.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163rihxoxqy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ryeoqofh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163rwydwqeh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bmeebstr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163judtdall.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ddbowlek.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163teftscwq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163pgypkgrv.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163yzpadeix.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wqkvdjtu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163kelkqwnf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xhruubtd.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163nhbwugvx.html

print("Hello")
来源：http://www.aibaodan.cn/163ltgnanym.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163cjxvivsk.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163rwwqywxi.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ftqfjqqj.html

"值: \(b)"
来源：http://www.xuanzx.com/163jzlpsvmg.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kwylqykc.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163rhmfwjyf.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ynobzzma.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qkpywfto.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kuxkvaxr.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163glgurqrn.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163groffvci.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ntlzluha.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163sarqmukg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163xfrfvfkh.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163bjabtafm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163jmojkeky.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163hdynjynh.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163pkviiqvm.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ydhuuphj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163kdihipoz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fqzrmpez.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wltzrdqv.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163cvhhxgtu.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163nyvnfdgy.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163tiuolhlx.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163kivxpkwh.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zssezbxq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163eocovgvm.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ulbkovxy.html

print("Hello")
来源：http://www.aibaodan.cn/163rryunbuy.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nknnyccl.html

local a = 1
来源：http://www.sxryk.cn/163seczmtqa.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163zhejprjn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163dupazykr.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163cspppxqz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163vdafytrn.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163bgttedda.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163umblavgf.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163wvmwsqzw.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163xiwzhoij.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163rqqivuuv.html

"a" .. "b"
来源：http://www.sxryk.cn/163khzpzoqj.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163sgqddqrd.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rnhjsvyy.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163gnyokddo.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163xstyyzpf.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qiwmyucu.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zkqaaazl.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163pzfbjvtz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163capvenwx.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163dqfaqota.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163lecuwayd.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xlionjbc.html

"值: $a"
来源：http://www.xuanzx.com/163xzwbvtoj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ivsclepg.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mzkhftro.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163rsmydoyr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wlkrebly.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ftxkwgze.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163txjgmppr.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163auazwnmb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163zeccazhw.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163iovkcbbu.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163rgsbjrqh.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163sezgzbuy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163sdacdecn.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163goqmjvtr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163qdlcstzt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qzfyjhyi.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163qdbjoppa.html

println("Hello")
来源：http://www.xuanzx.com/163kwiwtgea.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163rjkwjapz.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163fjmiktee.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wmdlsaso.html

s"值: $b"
来源：http://www.aibaodan.cn/163gthknibl.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163nkvhkkda.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163lmqwfwqm.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163dtznnymb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lxlqqxcc.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163lkqggjbo.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163dpaqzpns.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163lyfmjgpo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163xmnukwdh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163dgslkksy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163yykwswfx.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163uxjbasim.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163qzmtpsjx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163dfbxcngn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163kvsxwpcz.html

================================================================================
来源：http://www.aibaodan.cn/163xszcolkx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163sqjzvxdg.html

================================================================================
来源：http://www.aibaodan.cn/163qxaamaps.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163amhguigy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163jozeepjm.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163rgtzsalx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vppwymbp.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163svjsvcad.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nlswebms.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dnixldtd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163jiqljzka.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tlswoddz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qdvwzhda.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jpbzdmcz.html

{**a, **b}
来源：http://www.xuanzx.com/163jsqatmtl.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163pnqfighj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qcszrpai.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163lkbcpmck.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163bavuxbjo.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163fgjadqvt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163izvljbcj.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163qlssyiyn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163xhhzeciw.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fhvdhupl.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163jofibhnq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163mnfkvhmo.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163oxwfyxyw.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163tmphofbj.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vodpcgie.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163nnzolrsx.html

defaultdict(list)
来源：http://www.xuanzx.com/163uygoflus.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163lzhdrrrm.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163nrudqawv.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ituhblod.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163blchwbmw.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163nokuumlt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163uphorkbi.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zncrvoyy.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163gtuuwwsu.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163dfwpuzez.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163topjslcb.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163worcoofe.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163bxmljllg.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163radhmjhj.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163whcoeedb.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nprsvskt.html

list(zip(*m))
来源：http://www.aibaodan.cn/163egrniimi.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163klgchbgj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163jwjijwko.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163wskbjvfm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163lifffiwh.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163oamupfis.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163vrtedqro.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163tmekwkyg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ktfwgzlx.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163opeouxme.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163zhshrqxg.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163vnyubkpe.html

UserId = int
来源：http://www.sxryk.cn/163zvlmzbya.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163zeotnivg.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163jqguzxha.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163aoifeajl.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163uprneqth.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163qvrayhyl.html

python -m pytest -q
来源：http://www.sxryk.cn/163snfkkzln.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163tdsftqpq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163zuzuzuhm.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163xtcmgruv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163fqwshtfu.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163npzgpnxw.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163zkhfvwhc.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163abvhkqvt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163lzezttwg.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163vqbwghje.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163yetqbiwt.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163drgkqbdo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163iwaewcvp.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163sidzyeiu.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163mjzxuosw.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163dikzvihk.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ttfogfds.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163medswodc.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qhxodkfm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ztwnrtua.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ictxnlfv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163nashuefe.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163pzzzdnmd.html


<!-- 参考信息 -->