外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jytkbfrb.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dvaxxyap.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163wqfynnbu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ujnpzjna.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163gdkblpno.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163youenheo.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fmhxecrx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163qbtmmdhc.html

static int counter = 0;
来源：http://www.aibaodan.cn/163egeggldm.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163camktooc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163kohhduqy.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dlgujpyj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163rpetzslu.html

#define X_H
来源：http://www.sxryk.cn/163vlsrjgov.html

#endif
来源：http://www.aibaodan.cn/163xawdlbep.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163icihvunx.html

#include <iostream>
来源：http://www.xuanzx.com/163bnptupqi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163tgaqeycx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ikswnutu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163budtethr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163lwnzeaeg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163syblyolv.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163txhjhhve.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kmbzrsge.html

[S35] C++：map
来源：http://www.sxryk.cn/163axuczafc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fbhglhfj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163vmyijnex.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qhixbebn.html

[S37] C++：set
来源：http://www.xuanzx.com/163dwsltpob.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163nkbwzwkg.html

[S38] C++：排序
来源：http://www.xuanzx.com/163abgrucgo.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163iudhtemf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163bmqyumaf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163rjoykexx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ejgkkcgq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163etrvlohi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163fmknwzbp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163mfphsynz.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jqrjgeqn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163yrvyvslf.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163kpupdzqh.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ycvywbxd.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163zktwovcg.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vqiekyib.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163szowuuni.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163knxaujni.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163twdsamsd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163pdzdprdj.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163kdgecqjv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163gzduezrb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163broznxay.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mbbxbhiu.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163gabzyjxs.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163rhtxuuwr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163duifgvsi.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163twvpamuc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163egkdchif.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163xrviljnp.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163mymuowjr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163hwfbcsgm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xbovbmyb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163bywrjubo.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163qiladnoo.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163czlzovlt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163hhilflqx.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163irrinlzd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163lipiukmc.html

[S56] C++：optional
来源：http://www.sxryk.cn/163blfpmhmi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ntoduklc.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dvdtmlyg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ipntxkru.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163stasubgc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163couiqipl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dwubzwlr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163clrnlgsx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163bksfhjzl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ocxkpxws.html

================================================================================
来源：http://www.sxryk.cn/163ajvcguiu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bkdkdmpe.html

================================================================================
来源：http://www.xuanzx.com/163teaaqddp.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ioanmomt.html

println("Hello")
来源：http://www.sxryk.cn/163pwtmmjwn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163bedniqfg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163welrmbwy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tozdraei.html

"值: $b"
来源：http://www.xuanzx.com/163fvdywnuc.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pllwlyfz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163bdgwrslq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163eijeyjlv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163imltmpcu.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163plnoapom.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163asvaiaik.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qgmlpska.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163nkaoubxq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163lzgqcjbz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lgnteote.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rdnixsfd.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163hxktixaf.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163kvuuhyka.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163xthhkreh.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vjeuigxl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163dooarsqr.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163sqptqppb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nxkvwdzy.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xsdrlamf.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163zodnugxd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163pnclvjmq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163vmyceywo.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ndunkgfk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ngkjzqvh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163frlvctdv.html

print("Hello")
来源：http://www.aibaodan.cn/163fskxmjhn.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ykuvodhk.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ljfwwddd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163gjppdldv.html

"值: \(b)"
来源：http://www.sxryk.cn/163mdihrqil.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kfhkeceo.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163qjcseazo.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163iwlwftje.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163afamkjyd.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163asigoqpk.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163uwvlzbzt.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ckocuxns.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163kckdkbqw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xjujiyxq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163pktskgkz.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ujqralkj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163dldmgrom.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163nlgypogg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163pmbsrwsg.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163jvutajch.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163wwejmxbk.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163wmdkrujs.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163mmjaqauk.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163pqtqpmde.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163nbphfpcf.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163lzlsftop.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163yjydfqpg.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163bykhxrei.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163vogsczek.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163wvqvajml.html

print("Hello")
来源：http://www.xuanzx.com/163ncdvypxh.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vvjxmhqw.html

local a = 1
来源：http://www.sxryk.cn/163jepltyai.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mpgctorp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xjvxpgcl.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163akfoazlg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163evmwvzzb.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163gkjmiqce.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163zmfkjyqp.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163fwwnenur.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ptwigkgl.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163appvdzgo.html

"a" .. "b"
来源：http://www.xuanzx.com/163mapnrswz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163qrralbnt.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163hsxojjit.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163qadtmezi.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163rwbkulwp.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163emetroiz.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163yftuxkag.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163dcxenlpg.html

print "Hello\n";
来源：http://www.xuanzx.com/163wmcdimrh.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163vxbrgyoz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163iqcwakyo.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163giywfxsu.html

"值: $a"
来源：http://www.sxryk.cn/163zedjmzjn.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163gbjznzos.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163blglqmvt.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163opmkrqec.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xsyxsbit.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hhhogwkn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163nzkrnuca.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163gafpvsmv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163suzcnrcl.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163kaopyedp.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vhgozhew.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163vuwgigwf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zzvspwuh.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163yfqceszs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163cwcggbbx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163qxndkikd.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163huwbmlzm.html

println("Hello")
来源：http://www.xuanzx.com/163teycoomg.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163utbanmyt.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163eyvffgad.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wyxamfja.html

s"值: $b"
来源：http://www.xuanzx.com/163stegoehy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163pbvnblug.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163usbqlsvl.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163erlejznu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tbbdmhcr.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163akcdzujt.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163yepicgxy.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163lbmclzhk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163mkvzyzgs.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163rzrcxecd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163cerorwwe.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ksskcylh.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ezbvgthz.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ammtnedo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163iregsimh.html

================================================================================
来源：http://www.sxryk.cn/163aequxarm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jaiydbov.html

================================================================================
来源：http://www.xuanzx.com/163xsmctcqb.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163gjcbgwly.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ngogziks.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qgphjzex.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163pdulrfzd.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163uxijezgn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163uafuofin.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163gcipgfcy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hopmzpky.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163gzfaprai.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163njokifge.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163fnujnauu.html

{**a, **b}
来源：http://www.aibaodan.cn/163avomdsdv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163vpqrhzoc.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163plmliass.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163znvvyamp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163gvfrjclq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ogdcfkdy.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163xalbjdys.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163iqzrpwjc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163smnxzjuf.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163jpidcjsx.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163jwovhguy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163xceiyvti.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163lnnaputj.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163nowwrnkd.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163jmcdxvsb.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163yetwylaj.html

defaultdict(list)
来源：http://www.aibaodan.cn/163zxwabsou.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163yldivvzl.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163wmdjhbqq.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163tmizqaax.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163yvqeqssd.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kfupttap.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163fioslivq.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163crtoljfs.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xhliglbt.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ystxpcjr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ttwfqzja.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jsinqajk.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163pyhwhtmm.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163sacejdaa.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163mltjphke.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163cybmtyar.html

list(zip(*m))
来源：http://www.sxryk.cn/163vvkfpngk.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163iekglcxt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163uxvcvqce.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163vmylabom.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ijvprigr.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163pswufnfq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163aewzlxjt.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163pbvxkwiq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163gnuncgaa.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163yjxbefgo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163myjqmqkg.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163whjvjfsa.html

UserId = int
来源：http://www.sxryk.cn/163qdgxcmxx.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wmwlwjvo.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163bceullcq.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163zaamjyvt.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163teqzadbo.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163iboldvfn.html

python -m pytest -q
来源：http://www.sxryk.cn/163dspdetcr.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163cpgdgtmx.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163cshslxoa.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ayqtzffa.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163endsbsqx.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163szmppeva.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163semckccw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163mzwissvp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ezmxsjsr.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163wrsiregx.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163lfaupvzr.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163yblmeqpe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163bqdpuswg.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ezpahbzn.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163dkpzvneh.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163okkacasx.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163iarjbjnu.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163wbwkahbr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kiqaozab.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163tcjkrydu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163vlnlgdkx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163vbmvqycu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163juerzagh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163dudbnuwu.html

namespace App\Http;
来源：http://www.xuanzx.com/163xqnqooqc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163kpvtifyr.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163qgylirys.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163otagrzxm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dyhdyvth.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163mvagjhim.html

?string $name = null
来源：http://www.xuanzx.com/163kdlqlywq.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163hyfiixux.html

int|string $id
来源：http://www.aibaodan.cn/163ptobeigl.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163dncxnksk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163gnvslnfg.html


<!-- 参考信息 -->