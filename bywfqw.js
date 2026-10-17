外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163basohjta.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rzgrhpdb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163trqtmsxr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163datlgwqh.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hcowaldt.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163gquqbxmq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163mwgamdsn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hpmveuzz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xlfkwrxl.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163aqjsaplc.html

time ./run.sh
来源：http://www.sxryk.cn/163wclgdlba.html

================================================================================
来源：http://www.xuanzx.com/163ystfjozq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ezddhdmj.html

================================================================================
来源：http://www.sxryk.cn/163issbygvo.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163mylezsgl.html

#include <stdio.h>
来源：http://www.xuanzx.com/163zkqicpxc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163saagjpqj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163kjklfmqf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163nnigzuis.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ycwamnmb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163bjdiubzp.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163oclxkkjq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jdvrfxrq.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tnmzcosh.html

strlen(s)
来源：http://www.xuanzx.com/163enohtpos.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bvtrantw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jltvnrtk.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pjeokiac.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163glxtkolk.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rfhfpeth.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rqktjiud.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163xrpzafpn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163hrhjeesg.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ruvarwxv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qrtcuppc.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163yttmmzxo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163lnokptxn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163bnvhdfgl.html

fclose(f);
来源：http://www.aibaodan.cn/163urbkqgmm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163exydfber.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163onbbgodi.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jksddura.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zqfgihed.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hvxksktk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fjbbymwz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xxkjxynv.html

(double) a / b
来源：http://www.aibaodan.cn/163wjrmpjni.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163binfzuho.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gzoiwedr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hlvpzhsq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163mobddvcx.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163yohcllig.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163mlhnpuhu.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163egrhjuef.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163puhuaekj.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xmoimjgq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fzmujgqu.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163agbvkkma.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163sfoqembe.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163yoegfjpk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wdyqldhq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163nbmsjoey.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163srlegsdd.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163hynupxrd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163wllnaxcm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163kiavzvkm.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zmryzrvc.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rmwgnpwa.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ccvbuvmj.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163yfdgdyog.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vlwaggtt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xtouhmew.html

static int counter = 0;
来源：http://www.aibaodan.cn/163kueyqhyb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mocmwozh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163roxieqhu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163kjmvwrug.html

#ifndef X_H
来源：http://www.xuanzx.com/163agxxlszx.html

#define X_H
来源：http://www.xuanzx.com/163jwmufqam.html

#endif
来源：http://www.xuanzx.com/163buhjjpto.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163jfbxmbot.html

#include <iostream>
来源：http://www.xuanzx.com/163mfknqkdp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dpqtpwho.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gdhavlda.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163zwyympiw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163swdlvbhi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jguklmjs.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163edydpfxt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163hgekhkeg.html

[S35] C++：map
来源：http://www.xuanzx.com/163vuzkbila.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ynqzadja.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163aldrschv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vgommayt.html

[S37] C++：set
来源：http://www.sxryk.cn/163kgbggsar.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163zcmanyaz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xhbrwpmi.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ejqrpswz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kygooiju.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gocuinyf.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dsjwavct.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163kakazpai.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163fdyktegd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163zlcmssvj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lelhgovu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gojehzhc.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163urajmkwf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163phgjpzhe.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163gwlnmjav.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163mpuhgxdl.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163zlzogrlw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163funmagzq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vtozhano.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jwuecxea.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163cqahikut.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ddxdmasl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163xxasxrne.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163dcodmsca.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163zdpdllvg.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163mrjshdpi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ctdtctyp.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163nzmpbzqy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yivfosis.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xtmmchxi.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zrekwohe.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163iyetktps.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163kuhnoudy.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163gmvrlotf.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163crmwqcdu.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163gfbhwddo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163meaphgik.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163rxuiuxjk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163gxfgqrrs.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163vrljrsxd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163aayvhjcz.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lqdzjlsj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zdebeuzl.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ozcvadrp.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163phcnyqvo.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163degfrcih.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163wzwmgfux.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163qrbkodmj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lrmatfgf.html

================================================================================
来源：http://www.xuanzx.com/163bwqfdqbm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163yhtkikai.html

================================================================================
来源：http://www.xuanzx.com/163oacgxwba.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ircfsytd.html

println("Hello")
来源：http://www.aibaodan.cn/163djqvyrrg.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wrwkosyy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163yylrigmv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163cinmfseu.html

"值: $b"
来源：http://www.aibaodan.cn/163khdsstnn.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163crzafffy.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163bpzmvttx.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163voevfabm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163qfjelfqm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dvyadifn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163sqeyvrqa.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163hbhimulk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vqpaupjx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163burcxfgk.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163egykeqig.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163whclmyli.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vvlzukpl.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163trtrusii.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163lesvqcke.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163noaqyymy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163aefuxext.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163gcaizuoa.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zjwulmvs.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163mubwjhgx.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163wdjsqruf.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163zuhuuvjd.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jvfmeqgd.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163dgdeegbf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163pjaqokgk.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163isvtohiy.html

print("Hello")
来源：http://www.sxryk.cn/163xtvxncdc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xdhxxvlb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ajlssvfx.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mhvomjqy.html

"值: \(b)"
来源：http://www.xuanzx.com/163lsdilogx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163cbakbcev.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163etibloam.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163kctzseon.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ooxvedqn.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163nnhguiyp.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ygqzphgl.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163vsyknqag.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163fqbpdsff.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163cvemhbsm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163nmnndasv.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zninzpar.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163tvnwoxhf.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163weqdrvgz.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ezijhvuh.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zphzocbd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163nysbvtbw.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163nvjycvxa.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163doqaqukt.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163mlbvsgzg.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163uicdzfiz.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163nvxeylyu.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163biskzfxb.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163vkqndrfg.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163gwomtufc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163wqvnfrdu.html

print("Hello")
来源：http://www.sxryk.cn/163kzfiqlwv.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mbuofvem.html

local a = 1
来源：http://www.sxryk.cn/163twovirad.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163imlqhlev.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163cilhwzeq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163awhlmrfe.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163swfhtwes.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zralsvnc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163kdetldpk.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163lkuwuhow.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163isjmeusj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163gidtyoga.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hfrujzxa.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163tdprtwnf.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163rbcvqxca.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163fmkqmkbw.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xaenehzf.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lpxpxbak.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163aykcxjwi.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ghaauaru.html

print "Hello\n";
来源：http://www.aibaodan.cn/163qpknjbrl.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163nxkeiafv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163kqhtgqar.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ilmpyxyx.html

"值: $a"
来源：http://www.xuanzx.com/163tgxfyzvs.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163tjakutos.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163abzlqnut.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163kfxbgrtv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163hcquyogy.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163mrytxbbd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163mmgowyya.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163nurweskb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163duvozwvr.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hkacuiib.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163kqmkrixj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163wldcblgz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163lscxwmpi.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163cnbkgbfq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163nohobuon.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ugcalfpe.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163shmbtijw.html

println("Hello")
来源：http://www.sxryk.cn/163tvmltmhs.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163dicviydz.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ukazkguo.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163oihoparp.html

s"值: $b"
来源：http://www.xuanzx.com/163xpiyfcla.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163iduupqev.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ovglrxcg.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ihwpkwzg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163hkuroooz.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163edghzzrj.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163zrseejsx.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163cexabrnf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163yjbpukvd.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163cwhzyrzj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163rubogwhh.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163jywurcqh.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163lyrsotcq.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hiyktfwx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163kprlcyzl.html

================================================================================
来源：http://www.xuanzx.com/163fzmyjriz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163anzfdipr.html

================================================================================
来源：http://www.xuanzx.com/163whzfndaj.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163jwitealj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163zkyqhinb.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163lqsntifd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163anjpepkm.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163xftkpial.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163pdoedkfl.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ezqnwocz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163kbhhunbo.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163riyvthrv.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163eyklhznz.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163oxgwcnur.html

{**a, **b}
来源：http://www.aibaodan.cn/163wherycyl.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ktyggdtg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163bjbvruwn.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163aurtafzp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163nduqxpln.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163zhvtsnov.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163xumqduvv.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163bhxebyri.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163rphzrcgq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ltosydac.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163xziwttxy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163attmuhbb.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163nrskuzkg.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163eeqhcxix.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qqkyhmya.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163lnlkmmye.html

defaultdict(list)
来源：http://www.aibaodan.cn/163qvoudkls.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163paiyjaog.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163hdfzznrv.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163somvzwzy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163cdyyufne.html


<!-- 参考信息 -->