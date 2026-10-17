外链999!wailian999！

x |= (1 << 3);
来源：http://www.sxryk.cn/163kzwbafop.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xgoxosnj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163edlzjzjk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163xghxqssb.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ccflteyi.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163wdwavjzv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yphnuqod.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ebqskqty.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cpgasabh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163zqdyavsj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163eyzzfmvs.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ymkcktex.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qnxwrrhw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rnyennyy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163lipizxll.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163fbylihct.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qanpaast.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tskwmpdi.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163iviprvmf.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163roukfjar.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163mszbxcxb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xcqqfusw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163yzdfpzma.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xpahvxwr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163vjnfxrja.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163noxypcrv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mipecwiw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163vqefcfmd.html

#ifndef X_H
来源：http://www.xuanzx.com/163ozpqugzi.html

#define X_H
来源：http://www.sxryk.cn/163creufrqy.html

#endif
来源：http://www.aibaodan.cn/163ifwyqies.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rabfgwlj.html

#include <iostream>
来源：http://www.aibaodan.cn/163wifkbzdb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163qyvwjnqn.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163onsowiwj.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163kwvbqvjr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163suhhxhzf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163mokzmurg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163sozxhfhy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163febpteva.html

[S35] C++：map
来源：http://www.sxryk.cn/163tbxmyybb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tfflbohf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163hswslzru.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163frhmozkh.html

[S37] C++：set
来源：http://www.aibaodan.cn/163gbomyqnn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163fnkleodu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cffkkzid.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163uvacbfyx.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kiujnvra.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163aejgjtkz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163sbhpwibf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vclszchh.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163eduwfoik.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163thkmmiam.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163oalhazaw.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hqdyszuo.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wqcktdpu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rqshksrm.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163gugytzsv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tbmzaasd.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163iowhnbwf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rzwqbnnp.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ikfuyamd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163tlqlqpew.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fkoklyrv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pvtmfojy.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163elvnreur.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163zhmyxhgl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163unxldjld.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163onhznxtj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163cswbjcti.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xacffdgp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pcbxzbya.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163dsrvtkxi.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163gmhdqezd.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163swyueoau.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163uhytnjae.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163mtvimzpk.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163mfivgtpk.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163wtqcvxsh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xybbfidq.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gkiahsmg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mbecpbcb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lzmlohca.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163wxlbpveb.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ujmqhfzx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xxoekoth.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163fhvhrkkc.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163aaanqtxa.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163kednzjhd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163kcnbxcku.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163xzurtbte.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163lystalqs.html

================================================================================
来源：http://www.aibaodan.cn/163guyjrdrx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163cbatrfxi.html

================================================================================
来源：http://www.aibaodan.cn/163sngfomtj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zeqnvaxn.html

println("Hello")
来源：http://www.sxryk.cn/163tmuqypas.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163aaoyewsg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xgoqwfxt.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163qmvpazix.html

"值: $b"
来源：http://www.sxryk.cn/163ctdhcfxf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163aludclqi.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ofxrschc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bwhbpwtg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nzktittg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163impxaehg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163sxhyaftx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rtuxovwz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163wbblbwya.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163bbtbhfql.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163atvnpiyi.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163dtrmczff.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163nopstiaa.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163hhrjgdql.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163lzivumsn.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163uvefthur.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163cdhntbaa.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163yyrpdxbr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163whyupqbi.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163fzwxorqm.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163tebngaon.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gpavrwhk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163lvlpkrkt.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wmiquxhs.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xxnidxpt.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zsrfpdqr.html

print("Hello")
来源：http://www.xuanzx.com/163njzienlm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vqoikxes.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163iqbsouey.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dqtpwooo.html

"值: \(b)"
来源：http://www.aibaodan.cn/163oasgceot.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163afkaubqv.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163amzpjbcq.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163dxusfxqp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ayheckio.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163lnudrrwo.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163rfgskkmt.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dwdkylvx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163alsqnifp.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wzphuxox.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163iotrmdpc.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163uknwpjjk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163tpqhfhkh.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ytajouvs.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ytqjmitt.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163kymlmwyq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163arwpuzwb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163lxtbierz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163kvhzlozh.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163xtthhvgb.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163yiyydgjb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163mltrahku.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163dwwkhkoa.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163uzsxzkyg.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qjrvcbqh.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163gbdpcslg.html

print("Hello")
来源：http://www.sxryk.cn/163ogqtxhwh.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163npfnxyga.html

local a = 1
来源：http://www.aibaodan.cn/163zwblyvcj.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ngfiymde.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163qajyczha.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163fsdklsxs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163zopabhtl.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163pnmajadp.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163uenvkwxv.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163brywrykn.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163sosvrmgc.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163fhxqsouj.html

"a" .. "b"
来源：http://www.xuanzx.com/163locuuepz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163fptmukmu.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163xwypjaqq.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163wudlyqsb.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jxcfukeh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ofwgfmqe.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163malqrstf.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163wtuemrix.html

print "Hello\n";
来源：http://www.xuanzx.com/163mxscrkpb.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163uanfrsby.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163xujysxcj.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jlzjgruj.html

"值: $a"
来源：http://www.sxryk.cn/163pugwnmlz.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163tbjaaosk.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ekrtzolt.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rshxnomr.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ocldrsli.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ikcijudv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163qferwmvz.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163nbgrxqoj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163wtondyud.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ubaujusp.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163jgopocht.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163dvvzqugs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163uelasgep.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163pnvhhssd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163blpikmis.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163xibbgbwz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xumgpjbj.html

println("Hello")
来源：http://www.sxryk.cn/163vmsicqml.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gzxivuds.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163gwcijffu.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163rkboyxik.html

s"值: $b"
来源：http://www.sxryk.cn/163gjhuxhgh.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163fdwbljte.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163uxmpwypr.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jslvgntc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lxzorbbt.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163yrcghtnf.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163nsdsfuir.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163uxmdezrk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163qkkzmqlo.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163gycmkwam.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wnwskctt.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163mqzdbrga.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163lqpbylfz.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163pgqeoivi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163rpkkfdhi.html

================================================================================
来源：http://www.xuanzx.com/163vljbytza.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163prflcawk.html

================================================================================
来源：http://www.aibaodan.cn/163gdmozsxo.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163gpyhhdmp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163uqxwxzij.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163fxetrdsv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163dhvziwnw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wudrjfri.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163oxoeibrk.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ercvhdar.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163hwwzzodi.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kprclykv.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qqzstocs.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163leuyhyec.html

{**a, **b}
来源：http://www.aibaodan.cn/163gbbwmibz.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vhvxddut.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163baeilaln.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163atrkmrhd.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163gxpewntr.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163rdwyjxmx.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163fzghnnzr.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163sqxjtatr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163whggbray.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163mtxdgwir.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163nhhbqvac.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ycrjmqnl.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163phkoable.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163rmubyfph.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163vgxwpgsx.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163xiyrloog.html

defaultdict(list)
来源：http://www.sxryk.cn/163ulsbuwck.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163gliphrtl.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163xzkrowvs.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163xerjyqje.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163dvwiesik.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163cypfnfel.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163nnxpuhef.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163scubcpum.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163fobrtpcb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163qmypczam.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163pwywmmrj.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163mwxvskqw.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163fjuufrgq.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163fuqsarts.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163snanhblm.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163aptpbtqa.html

list(zip(*m))
来源：http://www.xuanzx.com/163iuqzsjza.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mqendmrf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163iinjbczz.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163gfcwhujg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163knroxhds.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ibsycudt.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ikpbwzmq.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163qilosjhx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163iedpdvoc.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163xvrfcsvc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163mrfhsnbh.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163dhsqhmmr.html

UserId = int
来源：http://www.xuanzx.com/163nbiuwemp.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163eqoliwge.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163dasohrsh.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163bqgmfwxl.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163zwprkxmp.html

[U31] Py：单测
来源：http://www.sxryk.cn/163jnqwhlyt.html

python -m pytest -q
来源：http://www.sxryk.cn/163tongljbi.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163iperohmv.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163yrihcswu.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163iuuiuddg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163mktygqrz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163feobhfjd.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163mfzcfgnw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163wsaxvhbj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163desbsqcl.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163hpcgzyve.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163kkifbgll.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ijtevgpo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163eqeatxjb.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vukryjba.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163fbwoswjk.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mnuzqhut.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163kkjvlajd.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163vliwirum.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163yvcdwgbc.html


<!-- 参考信息 -->