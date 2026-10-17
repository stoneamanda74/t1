外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163iyivjlwu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163osxgwchs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zeniwtim.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zqeulbqo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bhjlupjc.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yksxmfjk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163jlttnjef.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ejpxvxys.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163niduschd.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163aordcafl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163bmoomwmo.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163msszipgc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163muxnskdr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163njzytgkm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163pigiwycy.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ubvvkqby.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163nibdnjoq.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ovdkznaq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163hktoemki.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kpeahfgy.html

static int counter = 0;
来源：http://www.sxryk.cn/163tayestja.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jhxmolfb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ljawalhh.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163wysqzpgj.html

#ifndef X_H
来源：http://www.sxryk.cn/163dqagdnry.html

#define X_H
来源：http://www.sxryk.cn/163wiqhnkze.html

#endif
来源：http://www.sxryk.cn/163fesojvoo.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163inykbdlm.html

#include <iostream>
来源：http://www.xuanzx.com/163saliufpp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163cpwaeyre.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163bwtovvwi.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163esvpanbg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163tgizgbqk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qgplcijw.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163zpvdrelv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ufvrsqxn.html

[S35] C++：map
来源：http://www.sxryk.cn/163kdsjmqmr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cympnfgv.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163wskpmmhg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jmuevhdg.html

[S37] C++：set
来源：http://www.xuanzx.com/163bmjmnjnu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163cxoprvqp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gfwxxahi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rythoykn.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zblkwhck.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qodrxsnu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163okvgabcy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163yvdnutoq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ondwevpz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163thypwgvb.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163nebyxdaf.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163rkqpnjhg.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163adkvxoje.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hjrqycds.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pkycjsuq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163sdxpglaj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163nezjqbyi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yiqqmkgs.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dblclaec.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zjkiwiky.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163kkslhfdp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163iiekkuhz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163pswnajsv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163uymedrxq.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ootxnplg.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163vrkrmzdr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163czhmjthu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163goebfbry.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163twdnyyah.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rfrtxdbz.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163fccepnbu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163eftivtym.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163svgcudem.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163wtqilywq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ykpmeoos.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hvjzlndm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163xgykzjjb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163mbiqmwpn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163kauedaof.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vmfhffme.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163leprmcxy.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bukugvue.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ajbnslsh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ajkatdye.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163aqgymdxl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163iizqxhcu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163biaqwtbb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163eajmtetq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163octaaacs.html

================================================================================
来源：http://www.aibaodan.cn/163slptcjsi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jbegkfsr.html

================================================================================
来源：http://www.xuanzx.com/163cuyturwt.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163sqnynywn.html

println("Hello")
来源：http://www.aibaodan.cn/163czvsxdeb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163stwpnlhi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163kjzfpmnn.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163neqhqysj.html

"值: $b"
来源：http://www.xuanzx.com/163ilzespof.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163rfglwlsz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163owhqwqfs.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163butvfonm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163owifhail.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163qevqbbpg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rpwuhvcs.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rhxboeai.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163csrydkpv.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gnnaaqhb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163dpdooial.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163apvxpcjk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163irptyqaf.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163xfjtmnko.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163wybuippl.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rugqsmow.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ocghiuyp.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vwopzkgs.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163vlmoengl.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nyvtjzqi.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rfjukwob.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163dcmsauaj.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163tqvgygod.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163mxblmlex.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163tfoeaxkv.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kevblrlk.html

print("Hello")
来源：http://www.xuanzx.com/163tgvbngqz.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163hdwztlku.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163eisrukjk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163haxmpksa.html

"值: \(b)"
来源：http://www.sxryk.cn/163ktmfnhry.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163edbezvlv.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163isoqheuk.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163srzvansq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qqeckpmb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hszqnovy.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163vzucgvzv.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163zqwmtyoz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163umbhxtjt.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163aygtlavx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ikwcsjoy.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163wakjebgb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163xpjfobnx.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163todznxhw.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lcfdwttp.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163yiknlyjx.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rwlckyal.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ecrxiziy.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163dqdlrzjr.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ikudtvud.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jduidiaz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163njpukztx.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mehbosna.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163mglvrtpr.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163otpftirx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163tzezzwag.html

print("Hello")
来源：http://www.aibaodan.cn/163daxwxugn.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jnwknzhp.html

local a = 1
来源：http://www.xuanzx.com/163kwmffuty.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163iyettwiv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ndnnytki.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163fphdzcur.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163iufqfjfc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ugwwjepr.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163nuxpalrl.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163xemltlpm.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163zggugari.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163vfmpieuu.html

"a" .. "b"
来源：http://www.sxryk.cn/163vftobzfo.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163golzfwlw.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163zkhwujwh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163rlyqefia.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163axneirwf.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163kkuiurzd.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163jonyzopw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163gnzfzzat.html

print "Hello\n";
来源：http://www.xuanzx.com/163jzbjydjb.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163tylaajpn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163mioiwhtg.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qfqpqhpj.html

"值: $a"
来源：http://www.aibaodan.cn/163ijupurmb.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wpajwjdc.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163fffdzdmy.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163hsfmvdgy.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qrjnayax.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bimagyha.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163upgzpthp.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bxjwcuta.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163aipryysm.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163bnlvxikh.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163opfabaxs.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163dxzrcxtu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zvhvkyss.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163pqjmueng.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163elvrjgkt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xmvibaev.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163dejkkvqz.html

println("Hello")
来源：http://www.sxryk.cn/163wqnazadh.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hlrdperb.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163qmtpmncd.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163sgomezmr.html

s"值: $b"
来源：http://www.aibaodan.cn/163tzelwgpc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ijxprcoi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163tgomyljj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163rcuzigwl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163rnrvjlew.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163fpzydpcc.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163bomswrmt.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xmuufygr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163qjhofkzf.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ujhkoypa.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163khngdnkw.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163aheteptk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jqkiivnw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163qhdrweva.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163hotvksbg.html

================================================================================
来源：http://www.xuanzx.com/163mwwbhcah.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163itorqljm.html

================================================================================
来源：http://www.sxryk.cn/163amuyhgob.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ldgflirw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163kydqizsi.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163cwzetwiq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163dqwgnbso.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163eghsthof.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163nogydpvs.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zwalktpx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163kuaaxneb.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kiqbdqgs.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nyytwkch.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xzqxjnvc.html

{**a, **b}
来源：http://www.aibaodan.cn/163pvpnaewu.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163yyynsoio.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163veyhiiuo.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ukgcvywb.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163dvvfbcul.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163pjofordv.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163migsnjvk.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163jtzhenoo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ijlnjfcq.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163xvospkkz.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163pgbwjqzu.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hsyrwggz.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163uxcsvxeu.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zkumggot.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ieeduono.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ubwdyxbj.html

defaultdict(list)
来源：http://www.sxryk.cn/163nylqyjxq.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163kksmspbs.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ypejiqme.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163jnasjdof.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163qelgzley.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ywcjpcyz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163cebiejxz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pyektkdw.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163eufueqgr.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163vkhvkbil.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163yjbqidpu.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163tgwblurs.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163lbuprjsr.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163dsnbeqsr.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163jenvuwmn.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163bblyumgj.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ygrxajtg.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163udawppcz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163inpbnvun.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mgfawawd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163eydmakxx.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vqomqqok.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163iecxodtu.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163lrarbrmo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163jueakmpa.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163glttlyjs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163javcfwmz.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163xfipmryj.html

UserId = int
来源：http://www.xuanzx.com/163wtdorcrr.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163evprupcd.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163gfvowjtu.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163bzmdzxcp.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163aomatqot.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163lwhupiyf.html

python -m pytest -q
来源：http://www.sxryk.cn/163vjlyjpan.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zpfprxkt.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163iadsyfrs.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163cqgvjmup.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163luivycxk.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ifqtspba.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163knnwsoks.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163camrkcot.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ytkrmqts.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zjihbxmo.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163zvdjqbdn.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jeymxbon.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gqjnfogb.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163vslyhckc.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163lrbqdjsr.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ykvoizvh.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163xvwllyly.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163qrihokvv.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163exrosltc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163jasdgazn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ecrbistv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xgtsqqkz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ylemzeyr.html


<!-- 参考信息 -->