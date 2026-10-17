外链999!wailian999！

S. C / C++ 专题
来源：http://www.xuanzx.com/163paffwzzr.html

================================================================================
来源：http://www.xuanzx.com/163uausycve.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xupzcqvr.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163fckmdqlc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163owpjowyk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163kapnmkpg.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tfrsqdlb.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qxpavbgh.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163jadnnfqs.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163udvxmgxq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163apagemge.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163duwqfnxa.html

strlen(s)
来源：http://www.sxryk.cn/163ihxfrnfv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163tlsowpzp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ivlbwkdl.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wvlwhhgr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hefvncgp.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rbhywjdx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163wapbchrs.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ksbpcmpu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lslibpfq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163oqayzexr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xbwcyqef.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ovddezem.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ovmfahkb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163kcmkybte.html

fclose(f);
来源：http://www.sxryk.cn/163njkjqaln.html

[S12] C：写文件
来源：http://www.sxryk.cn/163jhwdvfuw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163codabcmv.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163hgcklqet.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kezwyhka.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dohnvmcu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163alfnuwtd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163wqaqvjap.html

(double) a / b
来源：http://www.xuanzx.com/163sfcwdfox.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163sfjmwewp.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163tkwhafsu.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163wpjqxxxz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ovzwmfbb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hjxtwzuh.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ijuxsnbs.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163kleceamo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pgiodnst.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163grmdhneu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cfxtkhpr.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zqwiftcq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163finagost.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ernnwgzn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kuhvqmmu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163pqclyzhu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163omvywcno.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gqbbjhwm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163rwcbetvk.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qzinjoyl.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ndklxxen.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ezmebkyo.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163nrmplmkq.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fatmleiw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163mxfpkmwm.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163mbjzsatu.html

static int counter = 0;
来源：http://www.xuanzx.com/163pllzfptu.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zbzwuacv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163cylsdzzt.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dmyphvxd.html

#ifndef X_H
来源：http://www.xuanzx.com/163odywxnrv.html

#define X_H
来源：http://www.xuanzx.com/163ukwztfdl.html

#endif
来源：http://www.aibaodan.cn/163nwortqbx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163fzmfscfa.html

#include <iostream>
来源：http://www.aibaodan.cn/163pclcempb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163hrvgubfr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163votcxxwd.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lskanjwa.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163eqmthqzo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163lypbknnd.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163itcqngog.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163syzcihpe.html

[S35] C++：map
来源：http://www.sxryk.cn/163bwcxmona.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163urhrorzx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163bmjkscul.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163orrdcmua.html

[S37] C++：set
来源：http://www.aibaodan.cn/163qdupbxva.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163lnhgssmc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ogpnfiks.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163fcdvrjtb.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163qwdboqdg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163dycvrshw.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lpqyfnid.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vccvqzea.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163voaoouaj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wwkhxceh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163crjbqtun.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qvlktssa.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wnnxjrtv.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163loisalfa.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163dakhhftt.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163hjflblef.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wwxnsiga.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zuibpdua.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163bmhpewcz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163knjxqwln.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qojauxqi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163bztgclqh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163sxkwyycr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163opxxgbxp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163zpxudfjr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163lflaxwhn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163umlhepsy.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163obitnxpn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163utmrxfbn.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163gzscftsh.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jfnmufpr.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163cpfgmbpd.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zlhtvqpq.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163xqsydigz.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163zfmkzmok.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163bgltlnlp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163zlevpwgt.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163odvxbqfs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xucutgqd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163hwaiqhet.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163oylecdei.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163jdyusncp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163tzcbzbfk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wlcurekx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163xudknhdb.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wqwlzanz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ttlqxcao.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163zevhzkhe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163xhndutkb.html

================================================================================
来源：http://www.sxryk.cn/163pedmovqp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163czjlvfdx.html

================================================================================
来源：http://www.xuanzx.com/163mvvizbwg.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163gahpdgop.html

println("Hello")
来源：http://www.aibaodan.cn/163dsedrhid.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163bqhkvlwe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163byrjrwkq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163grmuyowa.html

"值: $b"
来源：http://www.xuanzx.com/163yaemgoxg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163uhqvnjrx.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163npbpzkcw.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163cyvugqgw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163yihihjku.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163kvkrbgij.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mtthibrs.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jphzreqt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163gxmlqkbt.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163rxtaenyb.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163tjlfpntr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163yavqallk.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163smayjunb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163cpnnlyjv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163mfemgvte.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163duqiqiws.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163idbyqwyv.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zrhbtpnu.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163wcjzznqf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qqyvigtp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nfeyevyb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163fztfashc.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ddcbndqh.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163hxaqwjai.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fwroyxnw.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163uwgqqnsl.html

print("Hello")
来源：http://www.sxryk.cn/163oxrjnjze.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163acpfupsf.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163izfjmlqc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163dhvwjhea.html

"值: \(b)"
来源：http://www.sxryk.cn/163clbdsleg.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163kenohkmz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163jzromrsd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163qkylygqb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163eczafuxp.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wytyswrf.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163nwfcsrof.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163nduyxrfj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163lkkkyfzi.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163jsahiopz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163wydubhqm.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ikccggfc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163grfyjcnt.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163dkvgdrxs.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163kofllfoh.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163vqphbhmf.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163jovrvnrj.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163rtixzbpc.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cbmdqika.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163sxbobagy.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163dnieecsb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163kwdrcbpf.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163dxgskcrq.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163abuownzd.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163szogujgd.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hldhttax.html

print("Hello")
来源：http://www.xuanzx.com/163xsljbuwo.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163adzkjxen.html

local a = 1
来源：http://www.aibaodan.cn/163igprfoer.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163aeoqpibn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163nfhkvtoo.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163tyhziemf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vuflnduz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163onwplusn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163vqijbsae.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163zqvknaka.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163yptdtuvj.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163owcyibnv.html

"a" .. "b"
来源：http://www.xuanzx.com/163vlthhhae.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163yummltvv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163lbrbbncr.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xqrtmtqm.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163grbkqury.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163apchevia.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ulodsidd.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163vehfriyt.html

print "Hello\n";
来源：http://www.sxryk.cn/163vzpmuwjy.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163dhmwnreq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163mvzwdhbl.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163dygpipow.html

"值: $a"
来源：http://www.sxryk.cn/163kjlwoqjj.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163svkfmrlr.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163yidfqstn.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163sjuokrlp.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ejnjiuzu.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163cjxbepwp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163sdibfdfo.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163xmfbglcq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nrcbvfnp.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163tprhdikg.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163dtwtqcmc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163bsudjuon.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bujehgxz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ovjsfvzw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163vepluowf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163dgzlazur.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163luvtnbtc.html

println("Hello")
来源：http://www.sxryk.cn/163pppcwyse.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163lfnbgesr.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163hruywfzt.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163nhvwzsjx.html

s"值: $b"
来源：http://www.sxryk.cn/163slhpsyaw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163aytiwtoa.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163qvwroejt.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nfwhdrpc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ptsdwtud.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163fljlbesu.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163xzwbqjlb.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163iuadfged.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163efydkzuj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jhaouqrl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163vdiydtyi.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163mhdbiaon.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163emxlecit.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vroxkjwd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163gqwxrouy.html

================================================================================
来源：http://www.sxryk.cn/163quhzccqw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zmpyvsas.html

================================================================================
来源：http://www.aibaodan.cn/163gdomwedk.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163xrrnnasy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ijsqzyjn.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163itlrepxp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163oxtdlagl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163bodtdqif.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163norsbfyg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ptggjtea.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163suqdzcql.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163nxonnsha.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163rggscnwx.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163socnvtkz.html

{**a, **b}
来源：http://www.xuanzx.com/163wliwwtyz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ikovuljm.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163nrtfudov.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163njincgdr.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163sgvseyro.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163jwoabbtu.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163fxgewaoq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hisspnfj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163wfswzjhc.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163vqgsprdk.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163iriimopn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163hvkobqfr.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163uyzxzhzc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163swnaredm.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163blvouuqd.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163bdzwofny.html

defaultdict(list)
来源：http://www.sxryk.cn/163ysankndw.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163amxatcxh.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163vebmkqmr.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dhhiurxj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xizunkhq.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163wsunsnyh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163zucounto.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163hoimkjht.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163azjawpig.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163cthrznmp.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163srstmoat.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163fsuokwxg.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163jyiupaed.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163prledujs.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163gleatuub.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163wanvynwm.html

list(zip(*m))
来源：http://www.aibaodan.cn/163fchhrvdd.html


<!-- 参考信息 -->