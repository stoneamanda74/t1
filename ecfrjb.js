外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dnnqfltd.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mjewwmqu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lcxpmauk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lcbbdohk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mwkdczgc.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163jnnzgnbo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163pdserkuk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163xcdlhtgk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xcbsuyuv.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163lhocpcrr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163dovklpfd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163oyayntgz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163bjbpbhez.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163agkeetbg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jqoeacbq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163yegcekhx.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163bdzajddn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nvhocjtu.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kprnyeqr.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163eovcbvsx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163udeyckfu.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hzdywovz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163nkdceuhr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163opordhhs.html

#ifndef X_H
来源：http://www.sxryk.cn/163spssfshb.html

#define X_H
来源：http://www.aibaodan.cn/163ikisruzn.html

#endif
来源：http://www.aibaodan.cn/163dyztnbho.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xhtqsool.html

#include <iostream>
来源：http://www.sxryk.cn/163bxintont.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163lcibvedi.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163puimgawa.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163twgdnwdn.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163pswenwho.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163syibztmb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ymfeuwsp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163qdvvjlbs.html

[S35] C++：map
来源：http://www.aibaodan.cn/163samovxaf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ptwqsplz.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kdautoxi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rjsrytas.html

[S37] C++：set
来源：http://www.sxryk.cn/163tldcjzgb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163uscoizzu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163khjrupoy.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fzbfhzvy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163azvnrjty.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163huztpolr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163fxvehbiq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163txrniezj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jjoxvybk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163hoqnhchb.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zwntfyvd.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163rxyljmma.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163gakqtxld.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ynpbyojp.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jyvnlyng.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dppznjvj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hojyvbcw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wcqcpgbl.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163spyqvwuy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163vkffjwzn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163pdlahijj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ajwhodpg.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163buwcfwij.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163skiismvq.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rxldkjuo.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163thurzqqm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163uaznibsw.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wsuwoipv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163deucensq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163uxphmtxf.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163plkthkyp.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ytnqnecj.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163cvizlvff.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163weeuhzyj.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163sjlyjffb.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hdrpwuqm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jwmyiysf.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163biilulto.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ovzmdjio.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163gwrcnoxq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163mcjzwxzn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zqklpqic.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fpfksruw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163nlxwkhix.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163sofsukrj.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zgrbfxxy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kxnxcajv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163iakwoujm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163rvtppfqo.html

================================================================================
来源：http://www.aibaodan.cn/163skzxpqhf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lwdsuhok.html

================================================================================
来源：http://www.sxryk.cn/163czcitqrs.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lhchvbtx.html

println("Hello")
来源：http://www.xuanzx.com/163oapbzyat.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mopinszy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163pshrgegk.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163iwguyagb.html

"值: $b"
来源：http://www.aibaodan.cn/163oszyitgm.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163bhbibbsj.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163bkzfmlem.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163xazvrlrw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163wvseagmz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163jvxxebax.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163brscqjik.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qpnygezt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bfbbrbse.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gjlawzrm.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vlbdyxwd.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163lzdrbjoq.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163rpfumunr.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163hwhmlbkj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163sxlryfel.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qhaecfek.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163cffuqskk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163cypaollq.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163alydizaa.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jjqlunrd.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ozxqkivc.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163rmyebvut.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ymezldtv.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ualbkkdj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163uxhmnouq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bjsclvuc.html

print("Hello")
来源：http://www.aibaodan.cn/163rfmjzcum.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163exdkwtgh.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163htbclpam.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163fozrptgk.html

"值: \(b)"
来源：http://www.aibaodan.cn/163diijinfo.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163zdluebdy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163eccdbcbx.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163gnaeleki.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qnasgbbq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163etkscwal.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163kmnttsds.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vgmkaeiv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ttyakpei.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163uizmbobl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163oyenffqh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163rkjemrmc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163skgdxvem.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163drvhjlfp.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lcgsrlzg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ioxhqeno.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163frizwuzv.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163stiuxnsu.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163zrsdkdqd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163thevzahu.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163uwpesirj.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163jrhurner.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163vhapatkn.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163argfmrar.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163iavrxlys.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nrvshmrn.html

print("Hello")
来源：http://www.aibaodan.cn/163steikszh.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hefoknei.html

local a = 1
来源：http://www.aibaodan.cn/163qgmrevzf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163rqrzwkcj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163cliwcwsv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163sjhzfajc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fykneimv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163mruabzsk.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163vpcvsyzm.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163xdoohvrp.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wvrbdibn.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163dftpozkc.html

"a" .. "b"
来源：http://www.sxryk.cn/163kxascmxh.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163oextykvt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163iobbsgea.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163bcirxjeq.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163zcoxuvzt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163zxotkwko.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ymhvudtv.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163tvpjxscz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163pfzesvdl.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ifzdroyd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163kklbnaec.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ajjuqqew.html

"值: $a"
来源：http://www.sxryk.cn/163vngdijpp.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163bvdiavab.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ultsntzs.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163puogjhcn.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163zljafehg.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163xzklnkds.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163okkvvnqc.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163keyxvrfv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163nmfkevwz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163uojsxbia.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ljygzaua.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163iomwkpug.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bndiieqz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163syfsjudc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ghownofw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163yauwvcef.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163amcmzzho.html

println("Hello")
来源：http://www.aibaodan.cn/163zolxnqbd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163utdbydcm.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ctbpasuu.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zxnzpxof.html

s"值: $b"
来源：http://www.sxryk.cn/163txzutzka.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163slmptpcv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163seeabaqm.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163kiplpbqk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163cjaffdta.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163enpwazja.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dajeaszq.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163mqyegndz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163guitmsxc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163qgqujtxx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163mrsoccmc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163xrbslyor.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163pkdlogyy.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163bfhhhzrd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163iyyacmfa.html

================================================================================
来源：http://www.aibaodan.cn/163phijrxni.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dxggfewx.html

================================================================================
来源：http://www.sxryk.cn/163kopslzso.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dcuqnvzr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163usmwcrcd.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163vwrthvrw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163bidrvanb.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163fzuexliq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163vwwomepe.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ubjzsdqb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163yeyayywt.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163mfxtrqaj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nwbkskrf.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xdtwjwoa.html

{**a, **b}
来源：http://www.aibaodan.cn/163qqjldsdq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163zotgjoff.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wnyivjwq.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163jxrnvliu.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163vdxwnhjj.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163exozbpgu.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163myqvzcqd.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163etvqmigj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163vftbzzgc.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ajswmqus.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163zkjnohqa.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163kaccgiis.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163jmkhhimp.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163zceujovl.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163xsttzykg.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163nbnsfflf.html

defaultdict(list)
来源：http://www.xuanzx.com/163qmslxgsa.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163dfvbxnin.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163rifrjisc.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ggvjrkbh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ixyozwgr.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hmnqaoxj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163omvqeohx.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163okeugkin.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163nhrvdafb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163xtkkqadt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163piixpubr.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zvlsrrtn.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ebmcklfc.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163gueesfjt.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163bfpqocfn.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163gunjpbrf.html

list(zip(*m))
来源：http://www.xuanzx.com/163tpulsnyh.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163zlgrgjuv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163keftdsqe.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163sdqbhgzm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163evngjtjf.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163jbjmequu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163rjeupaqz.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kkhcujoc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ecwbmegi.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163swwaqoqq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ksgsuude.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163cjipawms.html

UserId = int
来源：http://www.sxryk.cn/163uleeadve.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xoxxvpgt.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163yzivwqic.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163yiyopkjr.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qdbkpcxp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163lgljjtox.html

python -m pytest -q
来源：http://www.sxryk.cn/163mxelfkbs.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163pdrcydyk.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163gwsrljpf.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163haajvyby.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163mmqmhrib.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163zrvqhlqi.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163orubfcvg.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163lmulakkh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163fkqqpkfe.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163gvmwbtcr.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163vpzoipdx.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163juomlocf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163qmqsztta.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163alxizkhh.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163wfvissqg.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163nvxmgkqq.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ddwosher.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163moorltwn.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163orxqidrn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163sgudphip.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163heejjxtc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163vmusossx.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163vurxjdal.html


<!-- 参考信息 -->