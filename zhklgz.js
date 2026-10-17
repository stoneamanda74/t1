外链999!wailian999！

x |= (1 << 3);
来源：http://www.xuanzx.com/163ztejybbp.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163urnkftua.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ssqqvset.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163mzaffvyx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163icesfepx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163awkbkgiz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ogxgrhob.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ykaiahsc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kcewkhsn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163drurypwd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vxebutxf.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163xcvpwvjw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163yjpiqupe.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163tarfxmxs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163nxokodsd.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163leuawcnr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163lskmiojq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ajhpnsxa.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163nphyhjcg.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xfdsgqmw.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163xuuuoxhh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163phfrvmax.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wayjpboz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qdauhzep.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ivuyvtte.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yuztgfco.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lqsmetwr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163twnyvowj.html

#ifndef X_H
来源：http://www.xuanzx.com/163dbgbkvwt.html

#define X_H
来源：http://www.aibaodan.cn/163wxftohhq.html

#endif
来源：http://www.sxryk.cn/163rtrorwvg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lzlauise.html

#include <iostream>
来源：http://www.sxryk.cn/163bayyaksc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ymubnejg.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163rziikgfw.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ihbmilbr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bhwkjsun.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163vsjfqlfm.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163btzxnfis.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163amrxwees.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lhqrdjox.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bjpgfdnf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ewakxhmo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163itswrfms.html

[S37] C++：set
来源：http://www.aibaodan.cn/163kjwkssko.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163mlrackzo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163krlfidxf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vpbwomtx.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jaqqytid.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163kifgtcpx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xhyivbni.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ojetclbs.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163jbfrpval.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163svoakhwf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163mdhfxkiv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163eavdfgej.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163godrixxj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ujqhamqf.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ouofexjj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163eggjyktd.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163araqzrha.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fumlhori.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163eukhvfmu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163gfviwcib.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163enjkxvwe.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ygpkjkhf.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hijhufje.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163cnaglovv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163yymuyobt.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ynxsivng.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163xmfkglru.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163exypxcwq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kbvbcmoz.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qsyahvna.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163owyotwjb.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163wwbojifq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163chvbzuzf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163gquholio.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163tzhxnexn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ozcxbhuo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163quttkzkr.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ltlzodsi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163hlzztxfe.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ybgqhxdm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163gjiybdlq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163pebnttci.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vnbaheyo.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163hfkmiojq.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163vsfmpgwy.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163uphnnuod.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163frdpibwq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163iygrowsk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163lhclkznx.html

================================================================================
来源：http://www.xuanzx.com/163olhgsjvc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lyfjmzvc.html

================================================================================
来源：http://www.aibaodan.cn/163tfaxwglw.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vakfqljc.html

println("Hello")
来源：http://www.aibaodan.cn/163bvkqwewd.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163azretdoh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ygmqxofn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163cslsoypo.html

"值: $b"
来源：http://www.aibaodan.cn/163lcnpyycn.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zttfgzef.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163rysysguc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163tlhfhnyx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ykwykjyl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pcaikobl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163flndmqcu.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163oblpykmp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163lzljhvgs.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163yneshjve.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163paqgknap.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163qbglfnvv.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rmqslxby.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163lcxacmbu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163efhkkvfw.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163yfazwyog.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ydqggbok.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163upoejmta.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fgfzzrua.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163rviezblm.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qfappcln.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163epzvkfbn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fivqapux.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xchurfev.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fecwuszu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zldgvwax.html

print("Hello")
来源：http://www.aibaodan.cn/163bieamzgm.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163yafxxvgj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qaakhivs.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dvqwiete.html

"值: \(b)"
来源：http://www.xuanzx.com/163ynoutwtn.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163cnzjkttq.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163iezaywsh.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ypkpayjh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163evnuremy.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163tvpsycym.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163wvgigfyf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163lryllkas.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163wyqscrnj.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ddsuirzd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xzktcyrh.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163pzpqmyef.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163xnxrjnsl.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163kqkaqxeo.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163nchmeael.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163maqddlxn.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163wdukxjpl.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163mirppigl.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163vdguydqf.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163efuwsgtf.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163meymjllh.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163tqsrfzgd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163nwmphnim.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163uxihqcbc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hyeuzqow.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163tvbifdoc.html

print("Hello")
来源：http://www.aibaodan.cn/163upldrssr.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163bqisgwck.html

local a = 1
来源：http://www.aibaodan.cn/163lejrtnsl.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163sgipnrps.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163bsddvuzi.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163dosepdjr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mtkpqenm.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ehiftbhi.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qjfpmmqm.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163bjrtylqa.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wpfalepe.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163fpksxchr.html

"a" .. "b"
来源：http://www.xuanzx.com/163vtfqzwwv.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jifxhwow.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163arkdggqs.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ttingvjp.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163fznknpll.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fdlcuubx.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163eirarfwn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163prdnhwiz.html

print "Hello\n";
来源：http://www.xuanzx.com/163yjzgwkln.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163wmuoyoej.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xtfatudv.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163zkixpobe.html

"值: $a"
来源：http://www.xuanzx.com/163jtohbzud.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163mjjxyhxp.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163szeelkfd.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163xjetvpws.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163mvuxlzhg.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163rsqsvnwu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163wjmbkfhl.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163pwfdreew.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163syeukbyw.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163kcbqywmn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163kfhmjyxi.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163khyxeeml.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163utrwcakx.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qustkqjc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163emhkxkmd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ttoyvztd.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xmkwlrve.html

println("Hello")
来源：http://www.sxryk.cn/163yjkjecfb.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163awdgsjrx.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163llxegqaj.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163rceewgrr.html

s"值: $b"
来源：http://www.sxryk.cn/163xwimbnpx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163plvumato.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163hacundxc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163mduxpzyq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163bdbrzisf.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163opiggbil.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163fdnjmgst.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163nkabklot.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vxgoegol.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ewgjxalz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163utusmwvz.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vpjnuyzl.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163umrqbyqd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vlvkgodw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163rnwqjypq.html

================================================================================
来源：http://www.xuanzx.com/163otegadyq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cbauxfee.html

================================================================================
来源：http://www.sxryk.cn/163oeevajxf.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163mebjrstp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163xudsvmku.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163raozjmux.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163zrosyjdx.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163hrlbfoqd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163yhdfuxao.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163gcdxtrlp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163nkukgevp.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163slnhdlkf.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163aklzocyh.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163vujjrydf.html

{**a, **b}
来源：http://www.sxryk.cn/163zmgpyufn.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163hawhfmph.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hxxrfxlx.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163wazfmlux.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163othrhpzi.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163umclubbo.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163bfxvxisb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qpoeyvae.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163wkvldjqu.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163lwwzmkbd.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163gsrxpqeh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163rizamiii.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163uhoyjaml.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hdtbprgl.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163myhkmhns.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163cbntncrx.html

defaultdict(list)
来源：http://www.aibaodan.cn/163tlhjlkjb.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xwpewffv.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163bzzqilpu.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ggntkrft.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mzijjooe.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163syzeceyi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163jisvqkak.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163jkgvbchq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163yexzjjke.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163jtoitgbe.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163bmkofwce.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ehorhvgx.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163aqvxcszd.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163rkramdfa.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163atnnofya.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163wtqrczug.html

list(zip(*m))
来源：http://www.sxryk.cn/163hijtlbpg.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zfiktjpv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163psgzdkxx.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163uzbibckv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ymcntgym.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163mwduscgd.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163qdzkgnas.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163mpkfevsk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163agqezody.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163afeocmoi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ujxcdczb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163gdauqutw.html

UserId = int
来源：http://www.xuanzx.com/163hmlmfcpu.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163vqnuonjc.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163sdgstkll.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lvlvqekk.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163zdnscbha.html

[U31] Py：单测
来源：http://www.sxryk.cn/163xhasogmu.html

python -m pytest -q
来源：http://www.xuanzx.com/163rwllhuuo.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163hnvngzmc.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163cdxcuxbh.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163dxmgyowm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163qgzdzmsb.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163fenunqkd.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163kyrfardu.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163sihcrsqf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163fecabiqr.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163lhrmaeoh.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163hbtskjmi.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163mindqpzu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163wpoloagu.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163nvaeaeam.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ynbwpiyx.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163fatmruiy.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163veawscxc.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163gwxslzdm.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sxwgpmov.html


<!-- 参考信息 -->