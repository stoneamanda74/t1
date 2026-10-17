外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163huojsbsq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kwmuchdq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163tawktkah.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hvavqccd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163pqxudrfy.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ovdmmlnl.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163uaczpqyy.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163agkebihb.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163uhzcaxeu.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rqrqoepw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163nvnubagw.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vfgcbfoi.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ztqljtix.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zamdfwlg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jqpwkees.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163reycjbls.html

#ifndef X_H
来源：http://www.sxryk.cn/163nqwmvbks.html

#define X_H
来源：http://www.aibaodan.cn/163jpqeiedk.html

#endif
来源：http://www.sxryk.cn/163xagsixzp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fvwttyvm.html

#include <iostream>
来源：http://www.xuanzx.com/163wdmfgsxz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163zwcljdev.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163piajulkm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163sxehairl.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163armiwwqd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163crovfyfe.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163potpfwak.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163grmhblbl.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ngqxdunl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yycfwghd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163pvtamxfs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qggvnhmh.html

[S37] C++：set
来源：http://www.xuanzx.com/163gpmrrwde.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ccnwmcht.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vxgunlkb.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ouesdqzj.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163nnjllcvr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163dscdwuej.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163treksdiu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163svzdoeoj.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163nmyvdcda.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163floxlxqf.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163rlmmvqzc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163vsyranaz.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163jqewvgkx.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ptooalzg.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rsvubtpa.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wrajdcsk.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tgpqlniv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zgthrvkt.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ubxxxdgq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cppsbrwr.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163kdtlpqto.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nfoxcdet.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fekmpfay.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bzgqgals.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163wmjmyxye.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zdwnmpey.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163boaxxaiw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163utfdocth.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xgythtzb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163pphmqfkm.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163zhotkvil.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qktvkdyf.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ijrhwxfo.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163snivgerg.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163afvsavpv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xjbskfro.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jtirtdlv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tnqhnefr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163qhdskthf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tdnlsflb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tlhnheep.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163gxlnbyhn.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163rldurbbr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163srbhrnex.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rcuzimzq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yzgoicil.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dugqxmoy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dbehlbuw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163aqvgndta.html

================================================================================
来源：http://www.aibaodan.cn/163iwcobfgc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ezunpkkf.html

================================================================================
来源：http://www.xuanzx.com/163yerqfpjl.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zayfkwif.html

println("Hello")
来源：http://www.aibaodan.cn/163quvhhbhb.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ceimwuyp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ncjygmzn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rtxnvbif.html

"值: $b"
来源：http://www.xuanzx.com/163aayczhwk.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163yhzujuwo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163lhpdscit.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163pfaaxguu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163mxkulvet.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163oreudiyx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163davwsjck.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jibewvlb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163scipyhmn.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163mwflfror.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wchuswqj.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cjsjmlhs.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163sacaxiwj.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ekkavdch.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163lqhcutkn.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163earycnke.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mljsctwp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ooktfxui.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163yekftzkn.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163duxrzodd.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163jsdhcmma.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163utsiqkxz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163fidhrxsi.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163frrrstko.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163rpcowjjv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ktyzfnak.html

print("Hello")
来源：http://www.xuanzx.com/163hlbnaldx.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163mkanpmnh.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163qppwaqay.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zebxzhwu.html

"值: \(b)"
来源：http://www.xuanzx.com/163qpoahoak.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163zrhissna.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zsxmkgtd.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163zreslwoe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163edurrjvw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dozjiqwx.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163wragtxfh.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163woaiaplp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163zchqvchz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ofufaduf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163oeziwdig.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163azxwrfdu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dkricchy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163cfvvgnxv.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163hmqhqmag.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163wwzgngnj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163mmcvgwnt.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163dxqbldeg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ovdylvdd.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163pkqzpmai.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163eklblomz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163iumllfph.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163znxrtbry.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163wmyuazki.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qqfwpkhr.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163rvfrqwwh.html

print("Hello")
来源：http://www.sxryk.cn/163gmhukbmj.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163hkokcmnp.html

local a = 1
来源：http://www.sxryk.cn/163boozspgj.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163cbjfopvf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163jtaballs.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163lzgfrlgm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163cmvqwjat.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163jpxgdqje.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163cuteqfjo.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163xxdzrcws.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163przqwoeq.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163nhogsdpe.html

"a" .. "b"
来源：http://www.sxryk.cn/163vyaqwybh.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vkishrcf.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163lndvlgzm.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163hkndqplb.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xsnqfiot.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163swnnzlmc.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ancqcmkc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163bbnmbkwp.html

print "Hello\n";
来源：http://www.aibaodan.cn/163whdgrcrd.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163pvpzxrmg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163mwbvbupw.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163yjkomvwa.html

"值: $a"
来源：http://www.sxryk.cn/163hblhurqx.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163exjtotqz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163iftgismi.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163kmirhasm.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163blwsoocm.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163qjukgbqs.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163kcutymyn.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163saiglapb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163mgpjdfvm.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yhiutoaa.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163kyimwbvt.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163qytrnhxr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163eqwyfggj.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163jhabodjv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163wasjpqjt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163idjhfpwy.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163swrzxnhf.html

println("Hello")
来源：http://www.xuanzx.com/163pgzunvhc.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hqomdgpc.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xjzirgyj.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163rajdnzmw.html

s"值: $b"
来源：http://www.sxryk.cn/163mimmbhnk.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163bxcchqvh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163dwhksfie.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163tfkzzfvx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163xtnoliyg.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163cbvwzlmt.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163rgirjxqs.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163aabzyxcu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163zjsgvslj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vjtibuag.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zkikdtgb.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ezgvoiit.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163uiwsolya.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163iaicngwh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ikpqppzm.html

================================================================================
来源：http://www.sxryk.cn/163vmgydeyc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163tztypuav.html

================================================================================
来源：http://www.aibaodan.cn/163badatbbs.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hjfdpnkf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163gczsngzu.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163pixyymfp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163tzzlkfid.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163yeylejqs.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163spccreqe.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163costicbn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hrmlqllc.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kvnqcycz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jihlnmot.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163euteuocn.html

{**a, **b}
来源：http://www.sxryk.cn/163zlbjiaiq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163olhbkscg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163sptxitqm.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163iluqikvh.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rxzdvwpc.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163wrjspxvo.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163welkosnj.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163lrxvvzil.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163wxkjqjau.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163uskhhgjf.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163bfdjlrmj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163bhjgbtam.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163tiziiodn.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163fwzxdbis.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163snowwqyp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ysmispzk.html

defaultdict(list)
来源：http://www.sxryk.cn/163yqcgknpc.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163atbgkzur.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163xxitqdkl.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163lqlpcege.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163xvvdxnwt.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163igxsnciu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163oerxowbs.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163mfnkaxuv.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163atyieblc.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kffrfovw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163bieaimhq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163phepbbod.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163tmiywihs.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163thbgfugg.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163efzcodyh.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163likobgvk.html

list(zip(*m))
来源：http://www.xuanzx.com/163dfhrtbcf.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163jraugfgf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163zhtzuvmp.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163skatlbeh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163zkzrrwbx.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163msqjuvec.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hinfgcoo.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163bzwsvsvz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ytqjmklh.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163kxxopxya.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163qktkilah.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ewyyctul.html

UserId = int
来源：http://www.aibaodan.cn/163dseblsai.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jmaenakn.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zbrzhlvt.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163dsrmwlss.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163lvlceucq.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163cjsjnppt.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ayyilnvd.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ekdwriqo.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163hqaldbby.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163yzpcjfpg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163frvwpfxb.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163hebejkle.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163kicqopuk.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163yzovgals.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163meeprrja.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163etssikhh.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163egkpmcdo.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163hwpnosnp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163bbekaouq.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163erggumak.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163cbhhajap.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ooxpgcgb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163qrreepjs.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163oqttqhlp.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hjuzagrp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ghissfoh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163uankxryp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163dnmeeouk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163wysfysnf.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163qugcvpkf.html

namespace App\Http;
来源：http://www.xuanzx.com/163ahognwse.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163foglxaoj.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163bbnjajhx.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163gkogptrt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rgynhzqd.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163zslbzvpj.html

?string $name = null
来源：http://www.aibaodan.cn/163ulyuyetv.html


<!-- 参考信息 -->