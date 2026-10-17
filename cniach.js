外链999!wailian999！

strlen(s)
来源：http://www.xuanzx.com/163xmtrhdgk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dhmjqulx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163vngnsqui.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xocpbvhv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163myfqryrf.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jwdwezpd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163vehornuz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bsxucide.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tofkxvox.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163fnucmkas.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vnamctfo.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163vyxtaktb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163fuemiysw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163lsbxwhbl.html

fclose(f);
来源：http://www.aibaodan.cn/163lyrgmxik.html

[S12] C：写文件
来源：http://www.xuanzx.com/163zthzngnw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163nykrnejm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gttkfddq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163geqrralj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gqteppdr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163kcihqwkr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ohoshhey.html

(double) a / b
来源：http://www.xuanzx.com/163doqojsgf.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jpudpjcc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163wgykoefl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163hhqeyvif.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lrluimgj.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ahtanadc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163iyacdwsq.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163upnuzjtn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163eiyjltwr.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mfjrbonv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zuwfozrb.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ugynpfhu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163oqpmpbij.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163bayzrcab.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nukefwlj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ujwcwyop.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163jeglbfic.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qgeoxhko.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163eomljaiy.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163amcchrrg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vlrlldfq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163jzksgqiz.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ruuglgco.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163valllubw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lgkgwxjq.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ducahrng.html

static int counter = 0;
来源：http://www.xuanzx.com/163wdekqsre.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ndirblfl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163tayfjboy.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163hykcehfe.html

#ifndef X_H
来源：http://www.aibaodan.cn/163fhzgfxyc.html

#define X_H
来源：http://www.sxryk.cn/163dwuqrzfp.html

#endif
来源：http://www.sxryk.cn/163zfnaijnq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gzhcyset.html

#include <iostream>
来源：http://www.xuanzx.com/163eserlvbg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vlhuvefv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163iucnevxw.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ctjalvja.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rvnvecoj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pravxbzd.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kawcdghr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163flkfwkvu.html

[S35] C++：map
来源：http://www.sxryk.cn/163bbaxncvr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hzuxejex.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cimmkjtz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vlbraeog.html

[S37] C++：set
来源：http://www.xuanzx.com/163bjjquisy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163pzjyjiya.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vdofvyft.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rqvfjxqs.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vkkyfssy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163yklyahlf.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163fzyggbhw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163glvaddlu.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163dycyhows.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163wbtdyayn.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163tjeexqek.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163njztznci.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163nwdukwaz.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zjasempw.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163djasaslz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163mrtpthzp.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163oinjcrms.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163pnhbcsed.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163saydrtfm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fkrrnega.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xipqbqij.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163klopiaxw.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163rqtnomqi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163yzejrrlg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163nxpdfirx.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163egsvddui.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ktdqseam.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163hpkxgdcz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163uqohmpjp.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jgoxvtdt.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mfjcomou.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qvszignq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163tkeccxja.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163uhtobeai.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lmhjmigw.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rqnzfdcg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ccbyopyr.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163mbghevdh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163gavtjpcs.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163cjgfhhrv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163egyhxcnw.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163prfwoidf.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163loicvvdj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163yslnagbx.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163buecycaa.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163nekkkxww.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163eiaqwwta.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xripfmdi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163pkhxtotx.html

================================================================================
来源：http://www.sxryk.cn/163hzanqsuo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mvdddhju.html

================================================================================
来源：http://www.sxryk.cn/163ehyptuto.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163jgsarsza.html

println("Hello")
来源：http://www.xuanzx.com/163sajwusdw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163vabpffcp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gozlvkqc.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163qfmyevnu.html

"值: $b"
来源：http://www.aibaodan.cn/163pmsxooeo.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163atbmmffz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ggmrvspa.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163fgqnzeir.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163puysqgqo.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uzbmhrwc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163xltcmwzk.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fabumlbn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163dvzhlhlc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xfizzlwc.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mppmvkgq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163esmhfmxi.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163mzrleaox.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163uymrqoht.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ttsvzefd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163mnkoreyq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163wtkvyhic.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163aufqdzwl.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jhnprjgn.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ugzeocnw.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ngkeryyi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wgljsjvh.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163mkflktyn.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hnpnhgnn.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163sfvrcehs.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163neqxiqxj.html

print("Hello")
来源：http://www.xuanzx.com/163fixorrno.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163hjkgfrlm.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163omahpqoc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163niuneofa.html

"值: \(b)"
来源：http://www.sxryk.cn/163lehgkqsp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163epuprobj.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163xfvkdaqe.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163qflkkgxa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163dhbyllsg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163htbodzxi.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163lgggbhbe.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163cwosggxw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163qmilspox.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fdaotkqg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163jrcuupvu.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cmuvopec.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163lrfilzhn.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uukduzja.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lwysmknh.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163qskdvfeq.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163bwlqtpuj.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163vabsrpgy.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163elqhtrrx.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wmbjltcl.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vhpqjqsb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163xkxbsiyh.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xgddtppf.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wkzcijmn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qjmpjcom.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ighmdtks.html

print("Hello")
来源：http://www.aibaodan.cn/163jbijjjhi.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163logzvsug.html

local a = 1
来源：http://www.sxryk.cn/163xxzuwaas.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163zftcrsye.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163wleaxjxb.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163jtgyxuxb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163iqwhfqnf.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ijkxemhu.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163uwmkrgxx.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163scxwuvay.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jelxmfqf.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163vksjonth.html

"a" .. "b"
来源：http://www.sxryk.cn/163fxrtjdyo.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ppcjqfek.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qfokytxf.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xccmzhae.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ctvkueaa.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163pegfyrnu.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163rvewxoes.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163crvsjnhq.html

print "Hello\n";
来源：http://www.xuanzx.com/163vmmqttei.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zinhzvtc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163cjaqpgfz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xbhlavcv.html

"值: $a"
来源：http://www.sxryk.cn/163rcflqwgs.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163lpjpkmpv.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163iftcybpl.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163owjmwqcn.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163isopgdup.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163nqnmpvil.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163rycqklhl.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163tccbmcao.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163kdseffmb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163yqobeapj.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ahoqbdom.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163bbsuffgw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163vvnsfdwf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qszoklee.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163cpjebvxg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163fmigwenk.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163csgatxdh.html

println("Hello")
来源：http://www.aibaodan.cn/163skifcyyi.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163briiayqd.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163rapynnoc.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163vceopmnp.html

s"值: $b"
来源：http://www.sxryk.cn/163raffhryu.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163twzfjqin.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163blmtavzg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163vgleedzd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163vvxcdumy.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163admnkafj.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163mpofatcp.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163uuoifclj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163lzkwxobc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163adthejmr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zxfylgtq.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163kckzrevw.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163lzoudohz.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163odbjddbc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vpbbcsrj.html

================================================================================
来源：http://www.aibaodan.cn/163muewlorp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fassrsbj.html

================================================================================
来源：http://www.xuanzx.com/163tqdjjfjp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fvhbaxtj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163wajgzmfa.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163nohuoaqw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163jeavhvkj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163opwzuofj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ryufemrz.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163bmtqdvdd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163xzcpitrh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163wuayrseh.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qyawtfwl.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163biaosmrc.html

{**a, **b}
来源：http://www.sxryk.cn/163trhrdasl.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163rhyxbybh.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163vmmonxmj.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163kugwoufm.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163fianhhcz.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163zlbhcnue.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ydmussum.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163yuvpotms.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163nxrwvwrh.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163thwmxvzf.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163pslilnfo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163viqayjvj.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163obkdrijh.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163xrzqhdbz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163nbvpajum.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163zsiyjshp.html

defaultdict(list)
来源：http://www.aibaodan.cn/163vodqfgkt.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163cxwabuid.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163qggtbvfu.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163afzmpcgw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xevawcwu.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163giaghclx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163eesgpaoh.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163lyvjylcw.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163tntynzkl.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163lwrrezhb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163djpifwpd.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163grroizeg.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163yjslxonz.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163pflvmwzf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zixxlffl.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163hgxoihil.html

list(zip(*m))
来源：http://www.xuanzx.com/163fxckzahd.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163wvigkvqs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163vhffeysg.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xxkzolxg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ghixbxzz.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163pxekyzvh.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163kgqgrhru.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163wogpecrj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163afaihgli.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163cyzfjycd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163afgmexjz.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163horevara.html

UserId = int
来源：http://www.aibaodan.cn/163xqwsurxq.html


<!-- 参考信息 -->