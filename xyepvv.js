外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wiulyjpm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163jotmekri.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163corupova.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163lpdhnixx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163lqshylox.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ufqjqmtt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163kpgeuwvs.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163usaicrdq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163pduppwko.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163vwpxtuoz.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163pvodhvoc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163bniwbdhb.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163uaxoqyro.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163durghbap.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163cswbeuxh.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163cxenlyfv.html

static int counter = 0;
来源：http://www.sxryk.cn/163vhrgsyap.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qdswxisk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163fhszlutr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cvmzxvpo.html

#ifndef X_H
来源：http://www.sxryk.cn/163gtjhamjh.html

#define X_H
来源：http://www.sxryk.cn/163vawegpii.html

#endif
来源：http://www.xuanzx.com/163avifothc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163xmyzxpjs.html

#include <iostream>
来源：http://www.aibaodan.cn/163kmnzoiar.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163penejgji.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163kbjibbck.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pfofmoxd.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163cmuqaczq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163pvywgphg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hfqonbcc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ecnjfhdq.html

[S35] C++：map
来源：http://www.xuanzx.com/163brmvlhqd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vbrvozzo.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163skuajzdg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bkwqxmwc.html

[S37] C++：set
来源：http://www.sxryk.cn/163etxjtbwm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163exskrjsw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163rksiopku.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163aztsbbxt.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163fgdcwfeu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wkfxajkb.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163angwqdos.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163vwgbcywk.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163afmdltyb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163wqnnagbo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163fpnibyfz.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zbvosvkk.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qpsfueqb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rjeiqbpp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dctwhuel.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163yddqxfgj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lalhtikq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163xqkhjmab.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163kacpqpwi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163yrhcusbe.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fahleitw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163netrfirm.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163wwyroqos.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zeasdkeb.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cwpjitgp.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163qpqmtsmt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163zpppkhhy.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nytsezbp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163pinfijmy.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163zcrrksva.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163knwurebk.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gznhhprs.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dahuqsag.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163jqxlcrgd.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163urxfxkmk.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163papgehuw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ucovrodb.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ymfeeoud.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163sqhuaill.html

[S56] C++：optional
来源：http://www.sxryk.cn/163hdiphevs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hhwfupkh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nkppuqhd.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163nnokiihg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163curogacg.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ijypjmyn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163zdvypzyw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163cpchotmb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163kcbbwvqe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ndnfahow.html

================================================================================
来源：http://www.xuanzx.com/163lqvqteib.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163entbbdyv.html

================================================================================
来源：http://www.aibaodan.cn/163qewzswul.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163bhimacfp.html

println("Hello")
来源：http://www.sxryk.cn/163ngbucoiu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jyrqvmdj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jrgizdsj.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163pycvcnbg.html

"值: $b"
来源：http://www.xuanzx.com/163grztkoqt.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jwnthwry.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163poqkjebm.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163kdwvdftx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163qrhydicx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163duuontme.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163bacadddp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163gaixngra.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163pmnhdjzr.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163csqthdgn.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ltzaxzji.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163dpksmldb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163zfntcbnx.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wjtebyjh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gcuuozum.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163zetztdae.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163cnvhbclp.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ekorihtg.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ilwgbyfq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163fyzubkyq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dcofwuqp.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163wowwlgbu.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163uiqkxjau.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163fbyglzzm.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163hhmkuvxz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163tbzlkmfm.html

print("Hello")
来源：http://www.aibaodan.cn/163nvuzjzmn.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163nvmvrzbl.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163cvspraap.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163wyidkyox.html

"值: \(b)"
来源：http://www.xuanzx.com/163uygvqcjj.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163qyxbpjhb.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bqnsnsjs.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nskaioib.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163xgxjgcan.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163lbanprfe.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zkljpcbn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163egvfdgah.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163fztttsjm.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vmbecrut.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rcnluffb.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163gpzdicao.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163togmfsvi.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163zakswson.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163xhrjnsnz.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163bjjlgssd.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163lopmeerf.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163fifldqxx.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163pnipaeze.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163hmfwanqw.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163oarxaqjx.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163hyuvnhai.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163wknxskxy.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ehpltdao.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163kcgaztsx.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163qpcnregr.html

print("Hello")
来源：http://www.xuanzx.com/163oedgttrp.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rsqmequy.html

local a = 1
来源：http://www.aibaodan.cn/163qgvzmdtt.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163nnzagfxq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163fzejzkqo.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163pwphnubk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163inwafhfe.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163puckgcnb.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qxiwcrsd.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163lpvddewc.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163nmaaroqc.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163bythgonu.html

"a" .. "b"
来源：http://www.aibaodan.cn/163btczugrv.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163yjvdhoyo.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163gudadzny.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163zysddgdj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163eyqmzgxn.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163cvebzhlc.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163vebrtlcf.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163aqyduuty.html

print "Hello\n";
来源：http://www.xuanzx.com/163ecsrjege.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163dwqqygsw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163vujocxsh.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163dmyozyxm.html

"值: $a"
来源：http://www.sxryk.cn/163xjrugrnl.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163amqbaiiv.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163rhswaruw.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163jknzhwrf.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163qvpwjytn.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163dabjdxqo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xmdfymyz.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163uhrtqfue.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rfobllte.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163fcrrnopl.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163pnmfuwvc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163nvtwmyex.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163dftvxjcy.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163bmxazhkk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dlzaoxcj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163pywwkdnc.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163yyggrpna.html

println("Hello")
来源：http://www.aibaodan.cn/163fuhwggsf.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gldwwbfi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163rczkhqgu.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zzgtkadz.html

s"值: $b"
来源：http://www.aibaodan.cn/163bfqxocbu.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163soihnsci.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163lkddlkby.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163lkqvwvqj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ylnhfyow.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163rbfspabs.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zbhawjgd.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163etheigvn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163veawgrkk.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gvtjomdu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163bconqzrv.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163jgyoclyq.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163sgwdpvkk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163baubqojh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163uubrtfqm.html

================================================================================
来源：http://www.xuanzx.com/163urnlnjvi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cngoxcxm.html

================================================================================
来源：http://www.aibaodan.cn/163ankrlfxh.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163bqvyydnd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ulcylyod.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qeoammfe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163wmisppob.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163nfhesrlc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163zindkekf.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163bqvkdjsq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163holhraqb.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ekdzviev.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jolnhmgy.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163tmijdktc.html

{**a, **b}
来源：http://www.sxryk.cn/163wczhlzsw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163cekkqact.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163mlzsupal.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163zgwrzstf.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ibhigemi.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163uyweiejr.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163jilvicsg.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163bkrqmmqq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163lomydykd.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163oyhxczdd.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163mvnlmecc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hrfeagdu.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bjcoptcc.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ytxxsjhk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163uefsqljx.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163uvgpgakm.html

defaultdict(list)
来源：http://www.aibaodan.cn/163miwfyxqi.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163fporusji.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ejiksmxe.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163jsupgpgk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163bipunfnz.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163bsugabry.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163wlvlcwpg.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163nnkzzdua.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163pehhmgsc.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163pgecjxrc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163nclqibrq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163pwsnexth.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163hsinovmw.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163lrwzgaqt.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ukycuijg.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163monkscle.html

list(zip(*m))
来源：http://www.sxryk.cn/163xinmnmky.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163dfxebfsc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163phxbsfri.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163qnardqjt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163mgmghtxp.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163muikpxkq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hbiatizn.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163wgciighf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lcpyqscx.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163egjlbfun.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163kelmzuwi.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163yosgvguh.html

UserId = int
来源：http://www.aibaodan.cn/163suznkjga.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163kjexiofb.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163cwnlroou.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xnowswzb.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163lqzqzkml.html

[U31] Py：单测
来源：http://www.xuanzx.com/163edhloobx.html

python -m pytest -q
来源：http://www.aibaodan.cn/163gdhvqaye.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163czqddaeq.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163xsxgozwq.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163jdajzqnp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163vsukzinl.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163fprbarlq.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163cryufokk.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163fybbnqks.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163cymshtpf.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163usvylixg.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163nsjzjcun.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163vbrpmuvc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163dpfmbget.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ydzxsdfp.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163esmevdlq.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163hsilzwlc.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163fliqaurs.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163zaswsjnm.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163slostnwo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163kzcyqhtg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163pmbslkjq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tpvewcef.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163hfveyvlc.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163mlafmusc.html

namespace App\Http;
来源：http://www.aibaodan.cn/163iqwwwblp.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163hxhubsth.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163umecbusu.html


<!-- 参考信息 -->