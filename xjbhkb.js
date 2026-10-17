外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ovjhxchc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163urilqyae.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bawvsgbc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hbtkulxp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163egidvxap.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ufdstuku.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163oiuvyqpq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ptpsvrue.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jzctopvg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jyyrdjll.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ttmbtsij.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163nbfhwrml.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163xhmjvnwz.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163hslkuqex.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163cxcvhjzj.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163dsehdrra.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xrskanxe.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gnlplnhe.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gjdysjjd.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163llexntns.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dlshtjkt.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163oktezhgf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dlzpkkao.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163syuovgts.html

#ifndef X_H
来源：http://www.xuanzx.com/163nttjzchb.html

#define X_H
来源：http://www.aibaodan.cn/163qpxsvyzl.html

#endif
来源：http://www.aibaodan.cn/163lwwillhu.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163tzrelifo.html

#include <iostream>
来源：http://www.sxryk.cn/163wsyffbzz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163xcddtgbl.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163dlxmpzyw.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hohnpglv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163kutkoqhu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163nlnufvhe.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163upxnuqkg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163sojlbljf.html

[S35] C++：map
来源：http://www.sxryk.cn/163ggvlkfoc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xktgvfvb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ugdllhdu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xwerzzcu.html

[S37] C++：set
来源：http://www.xuanzx.com/163mdvrxlgy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163cbwyjbtd.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rsigfbmn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163mutaycvy.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wddxuqxf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163drfreplg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163vrkmdrqe.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163kaujsush.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163oeneclee.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163iuudgike.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163bpjwtemm.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163nyvggxvo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hvubsgot.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ezdyvnkn.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163jmktxgnx.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163kifxxaxz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xoazvrvy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163mbvqslbl.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163qtdazdxa.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163phfdqkzf.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ivldjgwj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163tqrzdtci.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163kvkwebhc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bnddkuko.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mankfgjm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wefidukz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163phpgjaao.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163pvvqrmgk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163cjulfnhv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163sptpjqvw.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163liybkcxk.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163wmuebmmu.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bnuqxffv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163jhfxtido.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163gailptvt.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163yrgeadlu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qrmhaxli.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fbyrddpi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hwrbxomu.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lmjqzswf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gsszbitz.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yjrjrcxr.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zakjmgge.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163qevzpzys.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lnrtxkxw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163qgjwveub.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163neprvnnv.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163prppffrg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163futiiqjh.html

================================================================================
来源：http://www.sxryk.cn/163xzibuvyj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163husgmtas.html

================================================================================
来源：http://www.sxryk.cn/163wjcmefrw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jgfhbgco.html

println("Hello")
来源：http://www.sxryk.cn/163eidwkbju.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163noicsywy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163fpdyaykx.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ghcicjix.html

"值: $b"
来源：http://www.aibaodan.cn/163brelmduz.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163idtwxmev.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163nauuzxtf.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vnhovdqn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xjgqjpjj.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163sgmgxfwf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vwtiiiku.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ywszygpx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fshzuqxj.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163chmiikjo.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ijiadqpm.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163smqydmnq.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mfptszvq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163bwtkgwru.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163xmdjjafz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163qghoxbog.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vjraezdk.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163docdvxmi.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163uqdvetjg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163gpfqtgvf.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163hpqnkfjs.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163xyzbdxhs.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163fdmyjfml.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163bcplnhqa.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xznxsjes.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163zwariofy.html

print("Hello")
来源：http://www.xuanzx.com/163ucjkxqkm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163tcqybpae.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163sdqulwdk.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163mtptxqmg.html

"值: \(b)"
来源：http://www.aibaodan.cn/163retuxzxt.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163xgaiuylw.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ynhnqvkb.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ygwihjzk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163mltqykqg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zuyokodk.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163roilmagx.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jsjdbolt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ykyouacs.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163jqpecslc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dqglhxru.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kncmymcl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163gltargeq.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163xojguiuk.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qwioawnm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163evblfwko.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qjllayrt.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ibzdoobg.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163auzrcfef.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163fcmgkfia.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163yqserlsa.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163dbuqiiii.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163kardyzrq.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mnirkqnl.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jjsdgisu.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163lsgvnxvj.html

print("Hello")
来源：http://www.xuanzx.com/163fubmueyv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163yaedaezz.html

local a = 1
来源：http://www.xuanzx.com/163ahvcfaxn.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163awrfwgth.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gsuinsdr.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163umgzzgit.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jgnvfkyu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163gcelwwzs.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qbyllpfc.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163fqusknfw.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163hytxqybp.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163cccfocba.html

"a" .. "b"
来源：http://www.aibaodan.cn/163whdcvkys.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163epnyzrtt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163fiplgqum.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163prokxqqu.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hfoziqpy.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163etewjiba.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163jebacxoh.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163accwwoxf.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ivdwblpl.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163eggdpjtg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163blnpuvig.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163omgykbuk.html

"值: $a"
来源：http://www.xuanzx.com/163djxlthoc.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163nzwsdpmz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vyicfare.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163uceloncm.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163tojjbnnv.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bezmyujd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163wyrdyfbh.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kndjadys.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ffslznnv.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163qqveqvqc.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163jjlnzjen.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163oqwnbfhw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zvylzoqy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163amprodmv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163iylwqvnk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ndyreuwa.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163zwixmqlo.html

println("Hello")
来源：http://www.sxryk.cn/163yxwaepmc.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ztnjggwf.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163cpfoogjz.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163hqvsweqj.html

s"值: $b"
来源：http://www.sxryk.cn/163xutkvswb.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kglmxiuq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xlttxdlv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163toxbtymc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163btdzgbhm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163evollwfc.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163sgxmkjvj.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ivwpnufr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163wrqndmva.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zuiyqrwx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163jfwmhrru.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163hdbmlezl.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ybypjunl.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163zptcqqfm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jjnlgozq.html

================================================================================
来源：http://www.aibaodan.cn/163qxwskdfn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163uuochbnq.html

================================================================================
来源：http://www.xuanzx.com/163ssydoytd.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163yssracgi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163lwwlgwme.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163icjjczgu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rzawsrap.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ajyzrtdt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163jjfuqonk.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163whcjswhk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163bzydmhhw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163nnksqmdp.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vlqhqyir.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163wfkqodmp.html

{**a, **b}
来源：http://www.xuanzx.com/163zespivxh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163uxpbcqek.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163bdbyrvjj.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163xjaybsxp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163mcmckrtb.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163niwyrqtj.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hgwazsdv.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163levlqbeo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163cpqlbeam.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163kanjdubs.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jpthqujr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163vcmvtcze.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163bhscgwci.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163prxzezff.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163yboqqygl.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ppjxhuty.html

defaultdict(list)
来源：http://www.aibaodan.cn/163myzbobet.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163burbhapl.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wyzccbil.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163exagqxky.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163bctnxeip.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ficgjaml.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163anptspig.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163tigavigm.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163cwwaufeh.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163utfjdmdn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163todxifpu.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hyyxskjl.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163vdhzmoax.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163qcgnxife.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163pcfwretm.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163qexlvuwp.html

list(zip(*m))
来源：http://www.sxryk.cn/163bfwcxrkr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163emjjnfmb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163jmysdpbu.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163pfchxanr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163yqarexra.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163woowmhhj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163dijbyxnw.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163looqxtrf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163rsmnkdob.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163hqsuclqk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163jovmhzin.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163jobmmxes.html

UserId = int
来源：http://www.aibaodan.cn/163roezqshv.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163tdgbgdqw.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163rctxzbpw.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163kqkuewlq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163bkxmqbzq.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163abvhykmt.html

python -m pytest -q
来源：http://www.aibaodan.cn/163bmhkfydt.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163rnqyvhds.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ngptjvuu.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163hjejclhu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163lpjmvrel.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163yzsoawuv.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163xcopxwnf.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163zudfhciu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163yixvqbtu.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163xnoziqer.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163jcxovbxr.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163xvhwaqem.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163yvvbuybb.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ytinoyys.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163dyyamksq.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163utdvtkgp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163gbfhmstn.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163zuaaabfg.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mdblbros.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163sietrgrm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163duchwizq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163eertfwdi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163mjieoyeo.html


<!-- 参考信息 -->