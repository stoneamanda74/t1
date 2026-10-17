外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hggktvjr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163etipkuhz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163khbdcraa.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163eptngjqs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mawprafn.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ukphkeja.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ruyequuc.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163eeykvozu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163tasonhah.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163kinuuzkp.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163pymgkvll.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cbzwjush.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163eccpmlad.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163pddotelh.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lscpllxo.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cmrsdubq.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dxbdmnvt.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bkjausem.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pjrfavan.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163rqexndcp.html

#ifndef X_H
来源：http://www.aibaodan.cn/163kldxwpnr.html

#define X_H
来源：http://www.aibaodan.cn/163jcxpzzrl.html

#endif
来源：http://www.sxryk.cn/163dtabnhsv.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163aikiyypj.html

#include <iostream>
来源：http://www.xuanzx.com/163ewtialhk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163irssotjv.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163zgddajzx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163aslmpemk.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163jwytzpvw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163hfxmhedc.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163isdqawkl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163pkwqsnnp.html

[S35] C++：map
来源：http://www.xuanzx.com/163hcciobad.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163lqkajdvj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163krhgxazc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mctlnmgt.html

[S37] C++：set
来源：http://www.sxryk.cn/163jalokyxf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hgmkvkld.html

[S38] C++：排序
来源：http://www.xuanzx.com/163quwkpcdp.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163udozkbje.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hkojupci.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163cwiippfc.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163aijyzrjd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163avbvbytl.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163rvezlrvc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mwuddmsg.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163sglnuvul.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gkpkgggf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163paookhsp.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ukmurdzx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dybnpldd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163pqbcplca.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163yfwyogkd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163bzxqjjbz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163urtfcuul.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163kvfetrdg.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xixrzyzr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163fbvsiamj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163owvjninq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kgwzsilc.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163twhclfkn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lubwvgrv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lsquxolb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mlbnblvh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163mcaktnpr.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163kczniqad.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163uaxostmg.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163cfpstgdz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163rnktukbc.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jxhjvkgj.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163lxcentlw.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163otykaxly.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ntvrzfao.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163sbtdulfo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163rayaiynl.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pbkwobcl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vrjtnsuv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163fpdtxflt.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163kygomhzb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ulrzwdiq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163srmnhyzv.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163stxirles.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163znkgjpsi.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mbczxxwc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163whmckhms.html

================================================================================
来源：http://www.aibaodan.cn/163jcywvvtt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163rjhswxek.html

================================================================================
来源：http://www.sxryk.cn/163nmymmarx.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163swsszdej.html

println("Hello")
来源：http://www.xuanzx.com/163wfivisnn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xdvgslin.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dfpwahws.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163cjajufog.html

"值: $b"
来源：http://www.aibaodan.cn/163jmfmvaea.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ftporrsu.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163dzzbesuw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jfcinsuu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163kqffjflm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zfvjspjd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163wxsqwewb.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163cscrmhlo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kwslzhpc.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163pccpjrxc.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xjtpxmgc.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jrcrgpyh.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163uiwheovq.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163onlbjtnh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hotcbera.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163mpsluyjq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163nyqbtaby.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xvpvllsf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qezkfgpx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qxnzawwl.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fksrqhix.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163toqfvjay.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163qbcxjjxg.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163inigefcs.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163geeykzvw.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ogwonbqr.html

print("Hello")
来源：http://www.sxryk.cn/163nkzfrywg.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ttcjkare.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163mdmnnsiq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163qiwskget.html

"值: \(b)"
来源：http://www.aibaodan.cn/163fimlswii.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163itapzbfc.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163bnwrsbaz.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163vutypgfg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vbiapovv.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kfdhblax.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163sbewmgba.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ohifevfa.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bdcxcqdg.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xyoykpfm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163tbklmmto.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163unvbxkdz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163outfcpcq.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ocdtkwis.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ocjfedhr.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vxttxxem.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163fxsrszsz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163csvssdvy.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163syvolnwj.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163svlamkwu.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163arkanito.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163fxzaqexg.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163mzrzjykz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163cqsaqikd.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ipcsvien.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163eoioiata.html

print("Hello")
来源：http://www.sxryk.cn/163cmblmcqc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ncngsrzq.html

local a = 1
来源：http://www.sxryk.cn/163oyvivyrl.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wbpkcipv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163dcjnhxqs.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163kfuhwqok.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163dhgmnhvm.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fpqshiwy.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ypziddkj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163afksbazn.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163swpkofsg.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163rlgojjso.html

"a" .. "b"
来源：http://www.sxryk.cn/163cbshpzco.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163upprdsgb.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163sposdodl.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163eyuymsgo.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163tltqnfjn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163cqmcdeob.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163jelbvlnn.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mdhtmzmt.html

print "Hello\n";
来源：http://www.sxryk.cn/163kyyjqnqr.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ruzjesth.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163esdmqyno.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ldqgxafi.html

"值: $a"
来源：http://www.xuanzx.com/163leoygtyc.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ntodzxda.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qbzctcap.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163liihupmb.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vascwnxu.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163olvsxkjo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163frkrtabn.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ynmafcpk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163dbjznxqu.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gigveenx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163zgeaaiuu.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163rupoupme.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163afgtmvpj.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kgnltidl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163zruczgfk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wqzsrjav.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163tyvcvwea.html

println("Hello")
来源：http://www.xuanzx.com/163ffumvsxd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163yjebaqge.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163rkaubmqx.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163sabathoo.html

s"值: $b"
来源：http://www.aibaodan.cn/163acanltcv.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ipohldiw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163xvkkmqne.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nvwulajn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163nurhgxwd.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163jfriteus.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dxprmwgo.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163rzupdtml.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163surlrret.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ykiprstm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ehafqldn.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163wfqdefrh.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ncyrzjnu.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vonazhww.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163wvnbdcok.html

================================================================================
来源：http://www.sxryk.cn/163yottviml.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ygbpcacj.html

================================================================================
来源：http://www.xuanzx.com/163etncqicw.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163kqaspibl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163xexxibku.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163bkpyccky.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163dhnklsev.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163dejoppzt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163jzpzpmcl.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163glzeawxb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mckpwvvm.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163erlfrogv.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qgcpikod.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cdhrvedj.html

{**a, **b}
来源：http://www.sxryk.cn/163tklebial.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163jlconolg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zdtynqin.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163jitfxsrt.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163hnrgmiwa.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163wwjwfudn.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163npdlfmvw.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163pianprxa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163lfyzzgrl.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163qpxfubwk.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wdslguit.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163whzfpkve.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ihhuwiax.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163wemsflqg.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163sjwzjuzt.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mrtpcpze.html

defaultdict(list)
来源：http://www.xuanzx.com/163jovaatrm.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163kawslswq.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163kphpgmfx.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163duuzmbnu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163wgsnxjsq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163tirihazs.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163crgssdza.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163aedarzej.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163qqgypzdb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163fhmrdrfn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163measkbqt.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163embuljes.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163anzabwgy.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ozvjxxns.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163mphcgqar.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jxmumwba.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ozjqgjdh.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163wkblhbem.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163lwlehmba.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ovvljvxm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163egvqruvi.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163khtweiiq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cdcvjyix.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163vbrxzlxc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163bcukblrp.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163pccfansf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163jzffjauk.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163zynvweit.html

UserId = int
来源：http://www.aibaodan.cn/163lkaspmhm.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163fsfureft.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163lyjvvhji.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xayszzwk.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163iphibgzq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ecelblxp.html

python -m pytest -q
来源：http://www.aibaodan.cn/163eugfsqku.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163knxyjwdm.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163gklooujm.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163nymtniue.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163uqcftncg.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163pvdkviqo.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wcqmdife.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vlmljzyt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163aexxhqne.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163cjcaobrt.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163enqjqgly.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163uofaoehk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163yktesntg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ognwsozb.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163fxtggpfg.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xtsscspu.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163dbfguyqx.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163eeunoeiy.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kkzcodbr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163hazakivu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163vejyhyta.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163rahzebku.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163nlaucbzd.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163jsvbalhz.html

namespace App\Http;
来源：http://www.sxryk.cn/163smxibebb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jsonobik.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163gzzuddye.html


<!-- 参考信息 -->