外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xrfsexxt.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163untrrfqs.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hlowpwkf.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hymixciw.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ezzlibms.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ztifbzhd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163beclufsm.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163kgmmmxjw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163yhjdmnjj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163yzazegas.html

time ./run.sh
来源：http://www.sxryk.cn/163mcxaogki.html

================================================================================
来源：http://www.xuanzx.com/163rqatrtni.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163redmwtsu.html

================================================================================
来源：http://www.sxryk.cn/163xprxetjh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163uibzrmav.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jmxakmws.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163spjgjogb.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163banhkjqt.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163srfmfeoq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qjslfgmq.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fybaptem.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hejykjoz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bahpkgpi.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163niyzehfw.html

strlen(s)
来源：http://www.aibaodan.cn/163fssbvjaa.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163fyhzgtbv.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vonhmsmt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163yokdfuuc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ixlakqyc.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ojidmicw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163xkyxpmsy.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163dqhjvwrr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163hpldeorm.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tnggtwhm.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163mopbqrcr.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163tqagruwh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163oixxnmsv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bviajpid.html

fclose(f);
来源：http://www.sxryk.cn/163cqxcylcb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163pvopcwkb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rsolmpct.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163utlfinsa.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wuuxvkbx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163sajwvujs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163clatmmdo.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163skgtrpsn.html

(double) a / b
来源：http://www.xuanzx.com/163rjvaqpws.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163nmlqqyaj.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163pwbazvqu.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xeauslmg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qrockpxu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163tmqppmwe.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ajrtrlbr.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163teyuqdyp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kvksfeae.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lfjelbri.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ookaccdp.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hcayweoa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qxyorbhq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163lphuhcxz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nwjkkpxr.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163tkdzkqny.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163pfrdsrew.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163anwfioyv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163luhtyvro.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pvpqawya.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gemltepo.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ujnkprbk.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jgklunuk.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kvcnbcfs.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lfcfsuck.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vyxcyhil.html

static int counter = 0;
来源：http://www.sxryk.cn/163hdhwgjxs.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163asdriuza.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hrmnkjei.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163kxsgpgqv.html

#ifndef X_H
来源：http://www.xuanzx.com/163uzfwsckd.html

#define X_H
来源：http://www.sxryk.cn/163ggwalpwb.html

#endif
来源：http://www.xuanzx.com/163sfutltox.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163itkqtylc.html

#include <iostream>
来源：http://www.xuanzx.com/163yspljmko.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163tjigvljl.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ztjsvcjy.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163annubimg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163oqhwffqr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vpvcssqx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163qovfbgoi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163xqytkuxl.html

[S35] C++：map
来源：http://www.sxryk.cn/163wnhesvca.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163otfbzypj.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ouxhpzzn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uagoxtai.html

[S37] C++：set
来源：http://www.sxryk.cn/163houynjjy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ywrlidve.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ozlwvpum.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163sndknogy.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163xdbjyovm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163nwryfbss.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xuyyurkf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163abfuwply.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pxgxqzaf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ysroftea.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zeisawjo.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163rgzoyxcc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163qspfcufl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163cezcqron.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wvfkcmsk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ohhtmlcp.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tkttstll.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163nvzachcc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163cumsqpeo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hupviswg.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163zgvcbcet.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ucczlazv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163gxgumzpw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hmnswbdl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163nkguqeia.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163lorsckjs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gdlafytv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vqovyyar.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163kamiidur.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vkofyuul.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yswwvvrt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163bcmuoqxa.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dxaegqso.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163dpgverua.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ozvtamxj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rctoypht.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163belioqct.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163oxnjptlw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163emotfupn.html

[S56] C++：optional
来源：http://www.xuanzx.com/163gpwqgdcb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163mmbzdipv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163femsdiri.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163tcgtbwjr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163zrduajbd.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ebvtnyec.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163zuizmzfs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163njlgcnwe.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163oqfpplgm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ibwraost.html

================================================================================
来源：http://www.xuanzx.com/163uewizpbe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tsnrchyq.html

================================================================================
来源：http://www.sxryk.cn/163zwjruqhj.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lihkwerm.html

println("Hello")
来源：http://www.aibaodan.cn/163lsjnjthq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163uuvujahh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163epjoyezq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163sbjhokxg.html

"值: $b"
来源：http://www.aibaodan.cn/163zkkttaqx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163rkqlfpdh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163qveakcow.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163kbpswozw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163cvlutyoe.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pybpsszp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163eiptlnot.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163nhdhlgmj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ynvbklnd.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163uxxvjllu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163cgekcykq.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163nevorwzk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163urxzryba.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163smarwqqa.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vimrtxpj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163gjeajszb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163blrjsqxk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163agwoehan.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163lwpoxbxv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163boyffnoq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163yemiclxi.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kantuqmk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xciakvxu.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ubqsgakp.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163wvtiomzw.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163iltfyrub.html

print("Hello")
来源：http://www.xuanzx.com/163xkgrgjjh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163pqrcqkph.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fwdcawjt.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163xfqskfrv.html

"值: \(b)"
来源：http://www.xuanzx.com/163fppxhjdp.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163cqvycuwe.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bsolgnez.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jotuuxte.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ivprkpai.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163swblfpsl.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163biitzgci.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163dfwwupjw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163tglpxclb.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ncpxktue.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163pexnydeu.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163shfgosmr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163temncauh.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163wqataxqe.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wbazruai.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163srrcnwyr.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ffolmkwr.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qzcwkozp.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163lmanbaev.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163hqijhosa.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163lrmpzgeu.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ncxmndxg.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163mucsaokn.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163swvlupaz.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163dksxzzxh.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ugamubja.html

print("Hello")
来源：http://www.xuanzx.com/163yscrefkm.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163otsyjgyn.html

local a = 1
来源：http://www.xuanzx.com/163bdvtnpht.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gvrxrvmx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163jrixbjdk.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163diupykih.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163uxnrcvwg.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163pmxxfeds.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163bualrlqe.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163tpjjiqch.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jtfepwxq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163naoadnrw.html

"a" .. "b"
来源：http://www.xuanzx.com/163pidzabdv.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163unfjfvkw.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ndbeulfv.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163qjhfxutl.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163cdqehfsh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163lerwewzl.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dtnnghbs.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163guswpwqm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163nuobjpew.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ipizffpm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163jxmnjcif.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163pgqhaeyr.html

"值: $a"
来源：http://www.aibaodan.cn/163welyaeoh.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163wqhgwaoz.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163wgpxgynb.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163blnueusr.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163nhucjexm.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163mmkrngkm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163rgqmpatb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163wqaeomtd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163doofxmwi.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163xwmtsgok.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163sjqryzyf.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163frmsvznk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163qnxjgrgf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163sptlaozp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ycyhhfug.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163cqnldmvq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hvhpgnkl.html

println("Hello")
来源：http://www.sxryk.cn/163cjpqfoyf.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163mfuzyhni.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163obvwelbn.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163byknulla.html

s"值: $b"
来源：http://www.sxryk.cn/163dbuwhmwt.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163wtceejuw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163onjwlgrg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rrkwdvyq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rkhnlsfd.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163wknpdlrf.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163gffsxdmz.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163gguledjj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163urxqsgfd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163bhjnonbu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ffchpfjd.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ftxtrfbs.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163jwrmviee.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163wtgxcmdf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163toyjrbgc.html

================================================================================
来源：http://www.aibaodan.cn/163jdtwcvlb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163hxnlyhxq.html

================================================================================
来源：http://www.sxryk.cn/163lzjawsdf.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163bzarqjeh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163pbpqasoa.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163aovayocc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163qisfkuzk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qrelidme.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163jqwdlzih.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163fmbvrzpo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ifsymttu.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qcievspr.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cgcpihgp.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163gnqeyipr.html

{**a, **b}
来源：http://www.aibaodan.cn/163pnzjbdkq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163jtmoujbm.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163nkiqarem.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163byduhydm.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163wymglxqg.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163keckxllx.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163bayqijyt.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163uqvyetyo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163cqqoibpr.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163mnvuxsvy.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163xzeojnlb.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163kdrspowj.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163sqqooodd.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163edkmxypp.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163jxdeeisu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zqdfoywp.html

defaultdict(list)
来源：http://www.xuanzx.com/163hiltilre.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xmuwehex.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163xyukljjt.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163dlbdivfx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163uxvsltgq.html


<!-- 参考信息 -->