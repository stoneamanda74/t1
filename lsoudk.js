外链999!wailian999！

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vhrdgfny.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ywxciwvv.html

time ./run.sh
来源：http://www.xuanzx.com/163qgpcdvey.html

================================================================================
来源：http://www.aibaodan.cn/163mlknkztz.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fgmeeopr.html

================================================================================
来源：http://www.aibaodan.cn/163rwlkcdtg.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163dvfhqjei.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xwyebrbg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163kfxiuonn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ibyxrftw.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163scjpeoxa.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163eotnfapp.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163kkqlxhtm.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qxzpsryw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ecpvcmpd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163yorhbiay.html

strlen(s)
来源：http://www.xuanzx.com/163rbnmzbfo.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vegpsgro.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ytzpinhm.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163aosxizrb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163snielqpv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xkdiybda.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163keklowor.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yktrirfd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163kqkknxwd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qmdvphvy.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163gykmqgol.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ostgmjft.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163skaueybh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163pygbmoen.html

fclose(f);
来源：http://www.sxryk.cn/163wehnozrt.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yfgtitla.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ybmyajif.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163yddpyomf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bmduhoeo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163asrglcav.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mdrrxojt.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163lpiylyjn.html

(double) a / b
来源：http://www.sxryk.cn/163cznscxzg.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163aakvlotv.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163bvbjieki.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fazqlsbc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rllwmcom.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163djbvvufl.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vjxvikwm.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lqcnpqgm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lbcylajn.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ktjkaefx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xwxyjwlh.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163shslaorb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163owxmrcfg.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163cacpjzok.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163dvyvlcns.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yxdxpgyd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163uhygovwa.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163idahdbgu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163rqzraonr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zmxdwpla.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163pdahesvq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163hbagwbtl.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163odrpjsau.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tuqzcnwh.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lglfthyu.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163bztprtxw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tizkdgnl.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wgpqcgvu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163lahlhxnn.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163sxsmovss.html

#ifndef X_H
来源：http://www.aibaodan.cn/163nkaenqxz.html

#define X_H
来源：http://www.aibaodan.cn/163xruduejk.html

#endif
来源：http://www.xuanzx.com/163mdwhsqnl.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163knocolhu.html

#include <iostream>
来源：http://www.sxryk.cn/163auxwrrvr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dbtorxrp.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ihwmklre.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163bbhrazuz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163kighvoqs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163bfdfxrnf.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pgqxlahv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163byttlssc.html

[S35] C++：map
来源：http://www.xuanzx.com/163lpfbizep.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cfedctkm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jvspdpdk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qqbnxblj.html

[S37] C++：set
来源：http://www.xuanzx.com/163rktnzdrt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163lyliyrhr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163mhbrioph.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163isfmflro.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163muggnvao.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163rstzoktb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lclrxiya.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gkluruic.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163klljiwny.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163dviiasbr.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163uvqncens.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hucoqvbk.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163fijnmbms.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163iggvozzr.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fdbnmadi.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163nsrphgxr.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163qxzadxze.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163pjsiwbch.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163fexjitco.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163xcqufvqy.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163yzmmphxz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163knokgyhi.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163slasijnc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163izluixry.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163tpryonid.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zoagnbha.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163smymbmes.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163pwfgpeef.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163vlolvhbx.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ylxjbzrc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163crwfaukl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163sazsmdnu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fcawsymq.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163svryfbwr.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ivbhmkgv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163lttubsyq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163adusfyzx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163cqoqbcoi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xvzcluwn.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pouagiuy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163gsyspsac.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ojcaeflh.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163rozotsno.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163lwrjzneo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lpyzxdvz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163hfeujnts.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mjysbdob.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163tubutoen.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163mmilarpa.html

================================================================================
来源：http://www.aibaodan.cn/163abdpgels.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163hswkjngq.html

================================================================================
来源：http://www.aibaodan.cn/163jafvgktk.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163kzrojowd.html

println("Hello")
来源：http://www.sxryk.cn/163snsauwzg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163pxddbnxy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jrqzzqvo.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ikmifhyk.html

"值: $b"
来源：http://www.aibaodan.cn/163lxzlrggk.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ieelreuv.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163jjjdufmz.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163tjvngdmj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163drvwousq.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pgqlxoro.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163qecwoqty.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rapxsnio.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xycqcshh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kkmjiykc.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gjlkiedt.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163uvwfebmv.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wxgetwhl.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163nuwunamp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163qtmsawfs.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zrtmrdpu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163soggilhs.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163fzpqeddm.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zjhftssg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163yopldmmw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fnmfprzk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vscpwvjl.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jhtzbmue.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wtrwbmlq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163jhknvesd.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163yeiekczl.html

print("Hello")
来源：http://www.sxryk.cn/163jhesbjql.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163yuccmsam.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163cxkbiqea.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163xerzbgru.html

"值: \(b)"
来源：http://www.aibaodan.cn/163wrbvhicw.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kkjrzoyq.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163werrzvpz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hjpkbctj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163cyrlaqdu.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163pbpsunkb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163bpqkaemi.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dwepghhn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xwdmucpx.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ullofero.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163grbjkzbt.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163eggtjkub.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163pmzaqqlu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163gysicxmo.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ftvyymfz.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163azsbhyyt.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ftkacnvy.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ipacoxeg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163upgivdrx.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ajivxayz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163durogvlt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163hgqowhyq.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163sumspnyv.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163fjbdcunl.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163sfhfhbtp.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163pgrtjlgz.html

print("Hello")
来源：http://www.sxryk.cn/163ksrkdfhu.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163cwwwkvoq.html

local a = 1
来源：http://www.xuanzx.com/163rimpyiqz.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vrbsywnd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163pfrswdiv.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ddipills.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xqmocltg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163mhuebyfq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163fmtiwzoi.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163geosjyjm.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gwakouxh.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163jnpzyibf.html

"a" .. "b"
来源：http://www.sxryk.cn/163zbxbnisd.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qekoyyjs.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ggmxdzsr.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163roiimvaz.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163flcdrvfl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163xpjgmgva.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163boccunva.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163lyqasahz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163jpflidpq.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163olgnosab.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163tpfsbhfv.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163badntofn.html

"值: $a"
来源：http://www.xuanzx.com/163zaanyyaj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163nxiirshc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163wdfecrrp.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163loehnmpa.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vdogduyx.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163tudwbuhe.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163dwhfyvkz.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163rgdfzuoy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163iwvypkpb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163yzkossls.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163zazrqooh.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163vrlrajgx.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163rpfqnpou.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ttydcipf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163xxrhfvpf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ldoeemwd.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163aloslsvy.html

println("Hello")
来源：http://www.aibaodan.cn/163khhsibsx.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mcyjwjvu.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163kvttdiep.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163cusnobhh.html

s"值: $b"
来源：http://www.aibaodan.cn/163nqxqlcso.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163orbbmxhc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163tfbnhoqj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163brijrpgg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163gvftbxdv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ekqkebgg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163azviqvad.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163areufgpw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163snpnjuid.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163cpjjidew.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tiggunei.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163tmmqpgek.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163itrjuczw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163skfbylko.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163zhupavcm.html

================================================================================
来源：http://www.aibaodan.cn/163gkospdxw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163riwdlthk.html

================================================================================
来源：http://www.aibaodan.cn/163seoxadve.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163cvngqlsb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163lglowjdp.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163pwmllvyq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163cipzwayi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163vtqxybkg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163myfuzatk.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163shjytrhn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mopgywol.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163qoslnghn.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163yhrwrzro.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163qnpsyawt.html

{**a, **b}
来源：http://www.sxryk.cn/163mailvbfv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163qoshugge.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163rgequldo.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163bfsvppnk.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163acuqlsio.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163dknvvwsw.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163wkddgmxj.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163gftgasje.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163jqjrgyzs.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163aeygegtl.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163yyddepry.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163pvpfgzrd.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163cfjzyxjj.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kpfeahmp.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163unjjcaoe.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163pdhcqlpl.html

defaultdict(list)
来源：http://www.sxryk.cn/163ahrjhear.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163oxejkpgi.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163jdjtvoan.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163vhdyxgam.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163owyszpsb.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163mhffynet.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163rmldjwmz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xvxcbucf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163omdqfsur.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ogjoswag.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ntzxinbf.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163ldraxvyo.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163oycjzpka.html


<!-- 参考信息 -->