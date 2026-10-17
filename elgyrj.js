外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ajflxdho.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163xvpilajh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cqcizkfp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pgfrngrn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ooeyhdfl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ohdudpvu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163rzwouyfj.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vwxaqtnr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mzzuuebn.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ttufndhb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163bwnogcra.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163fsoppjhe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163xhyzsbye.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jqyhdllo.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163mijbbtaz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163xsekotrb.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zyudmoik.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vzhyjarj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mqcfzoqq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163iegoshjv.html

static int counter = 0;
来源：http://www.xuanzx.com/163tqykqzoj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zwosdeqg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hcvhohsd.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mownghgh.html

#ifndef X_H
来源：http://www.sxryk.cn/163qxkkzbcx.html

#define X_H
来源：http://www.aibaodan.cn/163hfzzfqat.html

#endif
来源：http://www.sxryk.cn/163wbgnyizi.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163gpzwbton.html

#include <iostream>
来源：http://www.xuanzx.com/163jbtxmnwg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xgxiddsw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fcvumkdj.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163eyidmwff.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163hsyyhimz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nnschqli.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163kkzxiuty.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163lktqnhhb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163kkknqfup.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ipdlatnn.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163pznmkdrl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gvgrbphq.html

[S37] C++：set
来源：http://www.aibaodan.cn/163epjxsuqx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hulezdop.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163icsmvrnk.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163dorogxfz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mwatoxxs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163zimblwff.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ftxqusqu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gbaaimhk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qfsunhcu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bdibgmng.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rwshovdz.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ilgvrtgv.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163qpsxfqgx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163cokshagp.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163yqtuckcs.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163evdgngqc.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pdpphddu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163yommmyzg.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163uyeestyu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163aasdnlrg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163quoxftze.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163cgnoebtp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163inrharwp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163xgvmpcqh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xvfgbmoi.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dqomgpfg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163svbpdvrt.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vbnasnqi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qpgwxbue.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wvwjxrhc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163tarbfjop.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163achorwae.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163tdbldhvg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163srmefcbw.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163tsfhtayk.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163tgzfzsfi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163pyipqcsk.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163odyecxyl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163jdndzepv.html

[S56] C++：optional
来源：http://www.sxryk.cn/163irmkfjcp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163tgfggwll.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163xowbrvag.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tqjyzihb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jgafsmvv.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163gutklzdy.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163doqogkvx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163bmdvdjas.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163juexuorz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gbnasjkh.html

================================================================================
来源：http://www.sxryk.cn/163shcgpayt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ydqsixch.html

================================================================================
来源：http://www.xuanzx.com/163dkowjqfa.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ppabiwrw.html

println("Hello")
来源：http://www.xuanzx.com/163keworswj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163odnxdahp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163eehgtfwg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rtscjwqo.html

"值: $b"
来源：http://www.xuanzx.com/163fryjotjg.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qvpxdxrc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ingmmyzn.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163pplyfwmr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163crdihzxw.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ngaionkn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ofuiilaw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wuexywql.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tvpxpnyv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163fcjpbugb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163pfufmvbq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163htinzaxx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ctoatxpf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163psxmfeks.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ugbqzipx.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163hztfrncr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163plmvqurw.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163gekosufd.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163zqbhhuce.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163zfrgelps.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163xbxuslqw.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ziifcyxz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163svipqksy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163tttyjcng.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ajnjorwt.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163gnrqfhpq.html

print("Hello")
来源：http://www.sxryk.cn/163sqwspurt.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bozneulw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163nglrwoym.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rceswlfs.html

"值: \(b)"
来源：http://www.sxryk.cn/163nqqmcgks.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bvvuqnya.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163yfdbbvdm.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wlzgkblp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163xijgkuni.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163gbcdpejl.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sznktvay.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163htrvqlpl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163lriwumrh.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163gwbmhkhh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bmtkwwmo.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tedoipdy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rmgomnxo.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ntpqbums.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163bxerdjvr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ocfyzmwj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ypxrxenx.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163aalgycxz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163gnfhrrnv.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163tylzcxhh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163plncmyft.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163fvbimmdg.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ulfkevpl.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163pbhcgfvd.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ygfjjywr.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dwvmzxhv.html

print("Hello")
来源：http://www.xuanzx.com/163znwkuhha.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163pkhxrzbv.html

local a = 1
来源：http://www.xuanzx.com/163hiytmnil.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wnfekbao.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ojahliay.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lcxjnnxf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fjcgsown.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163tegalixe.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163aylnlnrj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jyahtiwf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163iwsgadjz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ubltjkbs.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ggwndcfm.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163bhlornvm.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163juocpuiq.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jpicmlao.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163lhfpvvwk.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lvcrpvpw.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gxjdojyt.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163dzlqrzyv.html

print "Hello\n";
来源：http://www.aibaodan.cn/163qhplfnyh.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163zhqpfoom.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163vznnkqgh.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gfogtuak.html

"值: $a"
来源：http://www.aibaodan.cn/163igvvsvbz.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163sbspdsat.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163dzrmqhgf.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163nhwxpwos.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ituhtspk.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163qesvfpfr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163iqwyjljf.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163aqxvgoci.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163iwbculbf.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163wohyixaw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163aaiixcas.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mwxfjwvf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bqpxdfjv.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kadtrmdm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163jabtehgh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ecsdsbbl.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163fbqswchx.html

println("Hello")
来源：http://www.sxryk.cn/163bonpmxii.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163znullcge.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163pimbsvuo.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163txeqnanx.html

s"值: $b"
来源：http://www.aibaodan.cn/163vkbmfdsk.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163giffmvii.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163szffluws.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ttbplmxv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163zspenrdl.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kyewwmlt.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dchilprd.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163asvpgolh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163folgrkbo.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ymdququr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xriwimyv.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ekvjxjyj.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163kaaozqbw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163jehwazub.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163zpcsonsa.html

================================================================================
来源：http://www.xuanzx.com/163rzidfgam.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163bnijslzp.html

================================================================================
来源：http://www.sxryk.cn/163uqpmsdir.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163wzkuglpx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163gctcyglt.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163gmbaafxi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163lkbkhrux.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163icptrzof.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qxsxazwy.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163fuwtioid.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163wpsiwpew.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ceqzoeul.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163vgtcpcjn.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163aphfxzwk.html

{**a, **b}
来源：http://www.sxryk.cn/163maalylmf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163qsbnreur.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wwglaecn.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163vtmmtogi.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ylcvoova.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ewtaezpu.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163biyhjbvx.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163gfjeunij.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ipodfvgu.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163dvkxwukq.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163aypipdod.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163pcjvdcen.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163shwwqytg.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163dyzpvylh.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hkedtumy.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163feiegtdo.html

defaultdict(list)
来源：http://www.sxryk.cn/163fdxtovlq.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163nyekntfg.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163dbwzbsoj.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163lwxqlqed.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163mkboxhvg.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163hjxxviop.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163fqanlcut.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163lagwcqwy.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xmdrtdly.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163hqahwqvx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163lofokwhf.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163pmdbgvqj.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qmncuakr.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163aobnrnvt.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ryldbbhq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163syvvqgms.html

list(zip(*m))
来源：http://www.xuanzx.com/163khylobxa.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163fknqjdzj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fpowtbch.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163jfrrngur.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163aacfohth.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163rrmsngry.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163uwecneax.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kinmtbas.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163httxocdf.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163asimblry.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163boncgqng.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163cuduhpjj.html

UserId = int
来源：http://www.xuanzx.com/163gdlynkle.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163rmgfwmks.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163qxeypjnj.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163jmrfrauq.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163rfqpkhwv.html

[U31] Py：单测
来源：http://www.xuanzx.com/163pwuuynyc.html

python -m pytest -q
来源：http://www.sxryk.cn/163ctkrzfxh.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163wazxckob.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sbezwtvh.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163gyfqzjrk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163nyhvqoow.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163evqrpeei.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163dmajfltz.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163hxyylhky.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163kewrsqko.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163luwmoifw.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163gzectzhd.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163twqthycc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ksqjyxdg.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163xnxhdbbx.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163uffajnrc.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163yclogegp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163miyfsbqb.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163mnsnavqb.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ujhnnvcc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ysiaobze.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163zkkgmwle.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163dsgrplqg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ngdmjkcb.html


<!-- 参考信息 -->