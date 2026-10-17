外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163osnkjwfn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163khphuqrf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gpnbxgfo.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ywlmtilx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rrzigfje.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163icayorcn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163jyuvhzpg.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163haofwcou.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kjgxthrm.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kvffevyr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ezocxmvn.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ylsamoct.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ibpssvdd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163adnohouf.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163cpmbhzak.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163dhxflocv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ndlnnxjh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163sgwflhtb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ddkbpudp.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163nnqdtumd.html

static int counter = 0;
来源：http://www.aibaodan.cn/163sdamhzni.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163mdqwnnqn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kbconrcq.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163edxipami.html

#ifndef X_H
来源：http://www.xuanzx.com/163cjrlbzgc.html

#define X_H
来源：http://www.xuanzx.com/163bcnlnpei.html

#endif
来源：http://www.sxryk.cn/163bxnscguw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gwumhvri.html

#include <iostream>
来源：http://www.aibaodan.cn/163nsxavyjn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zasglkbs.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163hassgfoi.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163wnudohpb.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163hovmargb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jjfcgarc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ewlgjbpw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jgprfkhp.html

[S35] C++：map
来源：http://www.aibaodan.cn/163iupcscbu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ixjqthcb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163onnudaml.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tidkxgae.html

[S37] C++：set
来源：http://www.sxryk.cn/163tgfdnyds.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vjnrlzlq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163yrdhtsar.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163cwjuclgn.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163razojcyy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163eluhiave.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jksxxcgy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163myfhpiwt.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163dyupnjuc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fvidgjfi.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gozjphwx.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163jcwfrghc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ygyioner.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jbeeyris.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163adufxhmn.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163mhugrwqs.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lefgogye.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163dwytnqle.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163sazriezm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qhtybkpn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163dmwpkwtj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163cclnhjrl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163xuqkosro.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163epznzvdh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rkyfrjlj.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ybgvglcb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163bzodypkr.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163zhygdbck.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yowaadpt.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163exedjqig.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vfhqrkee.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163cxciehse.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wpjpazct.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163pjwnizwe.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163epalbtne.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hwvwcvct.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163llmhlrxl.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163kzedrysr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163yvtcjcmu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163efqtacrx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qfqlsmae.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163qdepybmd.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ladjrtrb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163uufkqnxo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rggbehmy.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163kxtuzhcq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163otszagxb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163dcbrrxnx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163rfwvbtxu.html

================================================================================
来源：http://www.xuanzx.com/163hppjjdcz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163akkyqjww.html

================================================================================
来源：http://www.aibaodan.cn/163cpufphlc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163bspewtky.html

println("Hello")
来源：http://www.xuanzx.com/163hjptdybr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ewvkgjag.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163chkubmez.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163socfsqzf.html

"值: $b"
来源：http://www.sxryk.cn/163muaghndt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163kvcxpebr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ljvbbfwk.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163fcynypbv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hivfbodi.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xkebkmcm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163frneszxo.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163fhtinwtx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163rkqfpuks.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163tbsykevs.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lseipltf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163nkemvino.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163eoapaflj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163oauqfmwp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163kafoqfga.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ispdocgk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163rescarde.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163gjzfjrdy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qzdnoajp.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163azkpovmi.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163gxjbnbnt.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vaetdsrz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163rcbrvtsh.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vhaimrqm.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ushzafdo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163upakiugu.html

print("Hello")
来源：http://www.aibaodan.cn/163bbrrbbsd.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rurjlnup.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ylfgjaso.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ylgtjcro.html

"值: \(b)"
来源：http://www.xuanzx.com/163twuycgvp.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163jdhdropy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mtdvidto.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jgwnszqi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163rbkvchmk.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163oxlsecgh.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163bxfuunxe.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qhowszlf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rayhhofr.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163qrhuvfkc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163hgcvwtjs.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xhqhktex.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163zqhiyhey.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xemshmzb.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ilbtyfoa.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163jrawsfjw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163aunarpos.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zalyeuex.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163yswxaksx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163cxmuhgze.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163hgqkplrd.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163klkprzrv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163czvdlsxf.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163uknunqwe.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kjwtqexh.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163nvymoidz.html

print("Hello")
来源：http://www.aibaodan.cn/163eqpythta.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163piayacvs.html

local a = 1
来源：http://www.xuanzx.com/163fxowgybo.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ddaixjly.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163eofppbhp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163xmbkibbj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163bzobvjds.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163nimzpops.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163soynevvv.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163qllogium.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163armkwpxk.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163gqimrtzq.html

"a" .. "b"
来源：http://www.aibaodan.cn/163fbqkrbyb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163jmxrterq.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163mzeycmgj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cyzdceti.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163uhyqgtxx.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163irocdviv.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163yjyryokh.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163eokalapv.html

print "Hello\n";
来源：http://www.xuanzx.com/163yovuyzar.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wxwhvvox.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ttygtwlj.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ceyflvti.html

"值: $a"
来源：http://www.xuanzx.com/163pipbczvw.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163orqvazew.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ogbqghjd.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163khdmixrh.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163pwxmhwhr.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gxirvjeh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163grlgyfuw.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163bzfqcpqy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163qeyavsue.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163wuvfxzom.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163hdkmhbls.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163esdgunww.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xkvfotzi.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163vdegactw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dlumekfu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163udyrqeeu.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nvuamqpv.html

println("Hello")
来源：http://www.sxryk.cn/163vgpvnemt.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163eufqdvxp.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163czywwayb.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wlckrytn.html

s"值: $b"
来源：http://www.aibaodan.cn/163bzwforyd.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163lpexzrxv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yajkrwju.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163zoszxmap.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163rujdgtkn.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163wnnnqvim.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163yhivnyfg.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xaobmhgr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163jvpbxqep.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163paicifid.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163lyohxaij.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vgdrxhaf.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163hepwluyx.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163tsyqgsmp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163giukfzun.html

================================================================================
来源：http://www.sxryk.cn/163vflfszvu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163pqdfqreb.html

================================================================================
来源：http://www.xuanzx.com/163kvfnkaug.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163hvgymhpk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163vlopbmew.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163tbkezqyg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163qyumhnwh.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jegisuni.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163klyrbpmk.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zistvdbi.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163glaymrto.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163bgcbugqp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sqkcizqh.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163bvtepztk.html

{**a, **b}
来源：http://www.xuanzx.com/163zifhanix.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163mxagczxg.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ntqnlmnb.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163lviumeba.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163foyadzgn.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163awkhuisy.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163pwtbfsya.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163xwlvgvgt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163thqvbphh.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163frukkcta.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ehuksquk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163tiozuylj.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wbaamesp.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163uqqrmdcv.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163youdokhl.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163lrpgckcf.html

defaultdict(list)
来源：http://www.sxryk.cn/163kdnmrmcv.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163wmjbwwor.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ltfovnxe.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dclxtygp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163qpzlvwth.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ctuotmgd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163qrrqrzot.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163limwtjti.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163epomnyiv.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163hbszebyf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163jxhvpkat.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163cpficpun.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163afvotxyc.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163gbomkvuc.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ivtvngxh.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163oyiarmwx.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qquzrvnd.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163hougrkys.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163znkbzokd.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163qlqdxkij.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163eerecdvg.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163mveoefuk.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163kiigxmrs.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163oaomhlee.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163liknuqlj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163tqfralmd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163lhaixilc.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163sishvsnj.html

UserId = int
来源：http://www.aibaodan.cn/163lgofmuop.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ahbufora.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163urnvwvmv.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dnuyllud.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163widviria.html

[U31] Py：单测
来源：http://www.xuanzx.com/163zseygmzk.html

python -m pytest -q
来源：http://www.sxryk.cn/163dxgjrtey.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163exkiuwwc.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163xcfyibbs.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163bggxanal.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163eqsbgrvv.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163xwnrpele.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163gzuaxucj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163dphxgsun.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163hbyarwdv.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163nhgqrmzn.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163uczozdtx.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163nxrbxqtw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163tkcqtegw.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163szztlpyf.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163rfdmtwey.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163wpihrils.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163kzenmkpk.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163topkgqmh.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mdyzqnlt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163iibfjsus.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lskmeasg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163xvmrwxum.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163bybsepxz.html


<!-- 参考信息 -->