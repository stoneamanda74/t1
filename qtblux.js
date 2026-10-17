外链999!wailian999！

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tmmootth.html

================================================================================
来源：http://www.aibaodan.cn/163qkngoeav.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163rufmzxgp.html

#include <stdio.h>
来源：http://www.xuanzx.com/163vnfywwot.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ljwrboup.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163moggtkhl.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ptjsgdnc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163fptrcrya.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163pqdsbrao.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rcsbpcfc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163nfhpqclj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163gqptrfie.html

strlen(s)
来源：http://www.xuanzx.com/163iyoepbqp.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163chnhdgjr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163cyzaikbf.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163wgxawosv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163aqgovogh.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163rfymrwmg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163nxucliuz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163myvnpakh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163uejbfzwa.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163yzalbkke.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163byautloy.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163bvzqvvvx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163meibhuoo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ashjmooe.html

fclose(f);
来源：http://www.xuanzx.com/163sxjtycna.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ueayvowt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163tsatyiiw.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163qwpvqlpb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163afmohpqe.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rgbqkwhq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163sfychuqw.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zstjkhrg.html

(double) a / b
来源：http://www.xuanzx.com/163jhrbdhbg.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qyqmjbuf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163pfureoab.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zfdattvn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mwtbccdt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163hnvcdatb.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163uebdrndf.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163surizkgb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163oqrvhjxr.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163veylozzx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jmkdlspc.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vnfqauss.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ojhtowuj.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163fezxbnjl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zafullcr.html

[S23] C：随机数
来源：http://www.sxryk.cn/163trygrgbn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vfxxvueb.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rpyewhpx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163kogvlwmm.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163edmkdxcx.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163bwaciemp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163rotaqkxt.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jownsebv.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163eshjlnev.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ehfwsjgi.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xovamqam.html

static int counter = 0;
来源：http://www.sxryk.cn/163geifabqo.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163aforduec.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163pvcnmish.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163gphobygl.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bkxqttxe.html

#define X_H
来源：http://www.sxryk.cn/163iuhuwslj.html

#endif
来源：http://www.aibaodan.cn/163cjegjeib.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163erlzattw.html

#include <iostream>
来源：http://www.xuanzx.com/163ghfaltcb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163phxjzdiy.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qbshbbyx.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mkmdoazw.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163mbomsbji.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ifnirbre.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163tadaxnyz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vtnipfrv.html

[S35] C++：map
来源：http://www.sxryk.cn/163otnwfpvo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163smhzimrn.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xqkgytle.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rmjddlrr.html

[S37] C++：set
来源：http://www.sxryk.cn/163bknxfiqh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ssdkluku.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163kqzmzvvx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vckwshuq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163onfpazkb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pncdslqi.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163uvwjdlln.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gyfpdffj.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wkecqgzu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163slkxunkq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163dqgwtpri.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xrpfvlmc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163pxmkanvl.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163gbhmqdum.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163czkrvjxg.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163zziwldxt.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163vggarilw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163sjcirlou.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163tfimerfr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rgecdkhr.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163dwzmewxx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tzlzkvod.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ktxajjsf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163bewblmux.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163euisenlm.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163jfvknrli.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163dxgmprvc.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163lenymfpi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163guzaxlmc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163kahhxunu.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163soryqzbt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163obzadvdk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163vahlecxt.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163driojfur.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163mjwttize.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163tsdlkyko.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qylppvrt.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nfiyfruj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163gblmakzj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zilxphfx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163axiverzm.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ozgtpwzr.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jjdwebcu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163afxrccky.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163zoggdrka.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163vtogonmo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mlbowsps.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163yjzlftqe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wmkkwpqr.html

================================================================================
来源：http://www.xuanzx.com/163snfrbdio.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kuaadzrp.html

================================================================================
来源：http://www.aibaodan.cn/163bspxmoqq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163pwuurrjo.html

println("Hello")
来源：http://www.xuanzx.com/163cjaaecfs.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163cdtnonyz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vbpjujus.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163gcaspjro.html

"值: $b"
来源：http://www.xuanzx.com/163jiqaxdvw.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163mzmzqhrp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163jyqgfzkv.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163rbehotyl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lnwwdhxs.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pcpmexci.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qowrvkww.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dktmjtgt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ifndhrpq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163emvfedab.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gahbnsyr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hrbzzcaj.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ycodwjim.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vxfufbxw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gkquscxh.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163vqaehako.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hpdyhugf.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163fhqbvliz.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zsagbbea.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163abdbjyzg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163slcxhkwf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kikjokgu.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163iyovzrix.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vzasakby.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163bjfyljoz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163kybprlfg.html

print("Hello")
来源：http://www.sxryk.cn/163pbyfprsw.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163xgqmlzhj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163aqsvatdc.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163wyqdejwi.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kfdifqxa.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163hjyxebsc.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163laikzlkh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163syervwmq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163egwtdyxq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163xndiyeug.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163qypbzutn.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163xutswfuj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163rvaywcwo.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163vdwesxlc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163uedddoeb.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163dplilxln.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dbpbdmyy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163mcjiiwqg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163kmtnlrqh.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ptxgvrdn.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163kuydqiwq.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163wsnjdvmu.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163jkxgotsx.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163uvkkaclh.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163hhbsmltd.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163rsltigcb.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163rczvwdix.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163kgcgkzry.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ptmqhrib.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ruueanan.html

print("Hello")
来源：http://www.sxryk.cn/163yclyrbns.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163frtseeyp.html

local a = 1
来源：http://www.xuanzx.com/163whqbftxf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rkkavaha.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163qtskmryj.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163gailwolx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163dydaucow.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163jcflairy.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163pumcrmky.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163blkzgamd.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163chyifrdx.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ubsfetbu.html

"a" .. "b"
来源：http://www.sxryk.cn/163ozsqiyoi.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163rmadobxc.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ymkpwrzh.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xumedxaq.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163oajzvufw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163wbukyaou.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163dxnrbemg.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163dkdiakaf.html

print "Hello\n";
来源：http://www.xuanzx.com/163eucigikc.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ayumaroz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163iodphfdf.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163zoidyjuk.html

"值: $a"
来源：http://www.aibaodan.cn/163onzentpl.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163gydutcdn.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163klrygnkw.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163nmupgrxv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163yzrbzvyd.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163xdpllwkp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ioqeustb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163hzlhnukv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ssovrwqr.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163izanjetf.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163lvlkyywo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163vcoxiavs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163vrfyawlw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163vpxebtct.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163sykycmre.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163gzrqddqj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163eyotayyw.html

println("Hello")
来源：http://www.sxryk.cn/163trtjcqiz.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163toorqtfk.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163noyizoxn.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163kmkqcxfb.html

s"值: $b"
来源：http://www.sxryk.cn/163foenmpxq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163qwdsowhj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163vpxiyshv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163vtpmghlc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163bdktflwj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163pokkhwjv.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163yikotwiw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163rymyvhgh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163daaszrfj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163eunmjrsz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163qkdknzlu.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163orlubttj.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163agcirbnh.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vhukxkor.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163gmykhovq.html

================================================================================
来源：http://www.sxryk.cn/163yuyyolet.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lclfenrp.html

================================================================================
来源：http://www.aibaodan.cn/163cydhohvt.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ncxyeexh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163enmohuil.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163zzqmyfqe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ulurkrkd.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163dcftckxm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163bsmfsqpb.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163dppectgj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163fygrvylh.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163xzinpzfe.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lliaglov.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cliuphxo.html

{**a, **b}
来源：http://www.xuanzx.com/163fkbggqwz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163rbxdcetb.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163epajnmby.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ohzrjtnm.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163exboypvb.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wfslfdzp.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163dhrvipwv.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yodruiff.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qhcfcgdb.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163uptdtjvm.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163rhhbemoy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163yaymqjhz.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wcawftrv.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163fjyucjcr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163upyclshl.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ecmlfxkj.html

defaultdict(list)
来源：http://www.sxryk.cn/163anrvwwfu.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163aonqlicq.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163xoecizzl.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163rbaqvzbp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163zzpwkrkp.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163zpsunbrl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163doutvzaz.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163ovxqsgqn.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bxesiatl.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163sswwyqpj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wuvvmdbl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163khobmfhh.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163mhwldnsa.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ggunyhjk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wkkraadk.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163klpyrdrw.html

list(zip(*m))
来源：http://www.aibaodan.cn/163wunfonsa.html


<!-- 参考信息 -->