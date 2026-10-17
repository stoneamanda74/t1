外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wioroase.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163lhgabkuv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163msxoiwmf.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163bycsrvtk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163pbzskqyq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ezwwkhpa.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163gycauqlr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163vajmuolg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ipftchpp.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163zmkxphcm.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163oqflnmup.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163zgzhdxeh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163whfmbrtg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bbvomiet.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163saonvftp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163xyzcgutl.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rmovwwfk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163eoiisjlg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163kupgnkyo.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ilradzxh.html

#ifndef X_H
来源：http://www.sxryk.cn/163fcsvxval.html

#define X_H
来源：http://www.aibaodan.cn/163bxxopune.html

#endif
来源：http://www.xuanzx.com/163qoavbnuq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163kirnyoxr.html

#include <iostream>
来源：http://www.xuanzx.com/163qewcxtka.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163iecqdhsv.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163sijoyviu.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163vpdqdzyg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163bwwbhpek.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163twejibpq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ngmqpmom.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163jsupchpy.html

[S35] C++：map
来源：http://www.xuanzx.com/163ymakznil.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163iiwuyuaa.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163coakxxmq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ukgrhujn.html

[S37] C++：set
来源：http://www.xuanzx.com/163tdlyyhws.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163xvkpwyin.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163jxfmtedh.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jldraesl.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163wqjlwpni.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jlckwbxv.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pydisgjk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163dhqwqsuv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bilaeyeh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163luglremr.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zhaqryrl.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qbohagzt.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gfyvmmlf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ipyygjbm.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ndlgrefn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bwdvewvg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ymkexfrm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163lkkowvow.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163pwbovwpi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xtigekpq.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163htafbopr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163obmfszic.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163xdjtseoj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wzlixads.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kqhiogkw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163nhzpzbtz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163peyizhuk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163bytjcbsu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163rztghurb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163fclmsdsp.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ngrvyamo.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163aznogibq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163daaknytt.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163effakxqh.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163sbasesuw.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163icgxhbtq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163bzjeiswt.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ycliielm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163sohqhaks.html

[S56] C++：optional
来源：http://www.xuanzx.com/163uvzisfdz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ssmohgga.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163hzmkebgn.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163nvmcckrq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163gjeymtje.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163skowdytc.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ffvrxhlm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nioydyum.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163iiiufoyn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163imirnvbi.html

================================================================================
来源：http://www.xuanzx.com/163mlgrabii.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163degtzsrt.html

================================================================================
来源：http://www.xuanzx.com/163jzntuodb.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163asjuawmx.html

println("Hello")
来源：http://www.xuanzx.com/163juabuwpw.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163xzbyghdp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163lwmfppds.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163mcifhsvs.html

"值: $b"
来源：http://www.aibaodan.cn/163idmyrogf.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ywxkwjyw.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ukxsgwwx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163yqkiiclg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lfedjwem.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mftfuxha.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163pshzffun.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163osyezbjx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163eqmpkpae.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qvkfdcst.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cfapnehr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cggsiaoa.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163nmzedzuq.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163scevetdh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163fzzakwdt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163peykilkr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163sgbdlghk.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ecicwlng.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163rrxbimqq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163azptmfhg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163yseejfxi.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163msjcehct.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163tdgkewpq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163vxuiztqw.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163esmmllni.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lwnbvtqo.html

print("Hello")
来源：http://www.xuanzx.com/163yaefoghz.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163mbeixpuw.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ihlvqiau.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ttbykdiu.html

"值: \(b)"
来源：http://www.sxryk.cn/163bwalpnnl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163bmokpvsu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163kesmybje.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dqlizxvj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vgxpdmvc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kuesublq.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163lobagaeq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163oqgatacz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163aulosxbh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zaoylpxe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163trvdtxfw.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163levfzkxi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163osknqpgn.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163vsxfwddf.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wxqdyrxo.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163kmgevlrj.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163dbjpebtc.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163rehnrtsc.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163aqgqgrsv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163frsdatge.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163slshtomz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163sazmlyfg.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163jqdaqzqk.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163kgnlogit.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163uhrrngld.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163fjcjmysf.html

print("Hello")
来源：http://www.xuanzx.com/163hlnrprbw.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163wfmkxcpc.html

local a = 1
来源：http://www.xuanzx.com/163pniullfb.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163oqhzghoj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163yuaydygt.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163qegmddja.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163gsiwungn.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163okufnzoj.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163berzerzr.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163cavkdihi.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163mctjqany.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163filgftmn.html

"a" .. "b"
来源：http://www.xuanzx.com/163lubufiip.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163tnlyfeev.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163qckewrkc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163sqoywjuz.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ynjjbpxm.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163vrzdnpid.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163kqcbyosf.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163vlwdbzli.html

print "Hello\n";
来源：http://www.sxryk.cn/163kocfgbkl.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163cuafnhpk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163bkzqduyo.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163kfkgompk.html

"值: $a"
来源：http://www.xuanzx.com/163pfxulvyv.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163rdoouxef.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163mqwnwnkk.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rxkfnscl.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163scmhiate.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163govpgbfg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163monvevpc.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163votqkpga.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163dthwdpoc.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163wkvjucbr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163unygovlx.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163rpeehdon.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163svxnarss.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163fviwesde.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163gqamlhmu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ddmhgzbp.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ckoxkfic.html

println("Hello")
来源：http://www.xuanzx.com/163ewupiugb.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ouzxudwe.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163tsngdste.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163hrowgrsj.html

s"值: $b"
来源：http://www.sxryk.cn/163azqunwcq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kjwrmojp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163adckvjmw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163hoechohk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dsgpdgvq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163kypbevoa.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qmmodcar.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163amfzxfdv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163sevrcfmx.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163drlioueq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163naafrtzr.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163sbmlzvfk.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163imbcramg.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ljzkowhu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163xwemhaph.html

================================================================================
来源：http://www.xuanzx.com/163bzzahrbp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163mjdjoiti.html

================================================================================
来源：http://www.sxryk.cn/163kftqkywv.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163wbbnghhx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163rhojkvzn.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wnvbkozj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ixiqikwz.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163eyqscjwp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ffdochcy.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163eodidzny.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163wtwbktpt.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qhwdkylf.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lmkczvqf.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163udtodrfy.html

{**a, **b}
来源：http://www.sxryk.cn/163gfglfsip.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163kmkreozc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hfguaqgq.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kubmdumt.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jkelagid.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163extevxkr.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163qyjojutl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ngjhravq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163efrxbcgi.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163wiuekunw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163cngrofro.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163qkrnufly.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163wfylzoyt.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163htajxxuz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163lcyadjye.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163bloivtbg.html

defaultdict(list)
来源：http://www.aibaodan.cn/163aiksrxjb.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163wwezsjgq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163uzttchhq.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ggbznraa.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163cgockmlm.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163epqjodbr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163fnznnuab.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163tzqjrgpf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163vdrhmbfm.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163nrqmmgmx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163cueydzui.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163eusxsrrj.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163vyecneec.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ciyldzlk.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163muoiylgg.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163iswilutr.html

list(zip(*m))
来源：http://www.sxryk.cn/163jvzsgzfo.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163cfehnkah.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163htwymllc.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163canopfsg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163imsugvev.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163mwsfflbp.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163mcsxkdmh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163vtsiaqpq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163zjjvaybd.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bhexcrkx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163kzzfskey.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163lztwjzcn.html

UserId = int
来源：http://www.xuanzx.com/163cxizmnas.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163cyoddmxu.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163qknyjlsy.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163mfeexujy.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163gftpgoll.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163uxyeimna.html

python -m pytest -q
来源：http://www.aibaodan.cn/163xrnpjovc.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vowjqpfp.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163kamacxtp.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163aimsjwex.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163gtigomgi.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ccwwshid.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163uzrnepqg.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wpblehxl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ycxlgoic.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163mgzmshib.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163nojlmuup.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163jiyydeph.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163mnjriova.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vngrhjpo.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163tpndeeuy.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163avcbowwj.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163klhnmvad.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163mqptmlep.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163sbnbfcxs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163hdooqmld.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lbwvsdnj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163biehwxdx.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163cvbsioax.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163hyrrdciz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zxyldhyw.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163hpbclxrf.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163xveqpbrs.html


<!-- 参考信息 -->