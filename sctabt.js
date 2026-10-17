外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kxmrekza.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163cjmzkjkz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163dpaigqtr.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163brostfdi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163goqybqjv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163fmakochz.html

time ./run.sh
来源：http://www.xuanzx.com/163gyrhpkfb.html

================================================================================
来源：http://www.aibaodan.cn/163hyxhnyoh.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163kxmslnoq.html

================================================================================
来源：http://www.xuanzx.com/163zftpkjna.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163bohgmmos.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qngjmwom.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163mcjjomtp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ufgwmdws.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163wzekiuud.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163uhrvzbxu.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163clycytwu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163kdovvinv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163uxvybndd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xnhtfogq.html

strlen(s)
来源：http://www.aibaodan.cn/163jwwmxjvu.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163waqgjncb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ksfnmmtf.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163miukgsqu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163iwmzgfey.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wfovfrkh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163vhdbobwu.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ukhenjlp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163nnvlsufo.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163utfnbwka.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163svxmywqc.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163klpdozmu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ywcpvwhe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163jqzphqyq.html

fclose(f);
来源：http://www.xuanzx.com/163kdsfdrtf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163nxffhbks.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gxgicpsm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163puniqype.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163wnggatrv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ocxzqjgh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zntjixam.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163zdqnpzuh.html

(double) a / b
来源：http://www.sxryk.cn/163sqctabxh.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163wavxqhbl.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163vcmexaxx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cthhzfik.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cohcesmi.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163rxkxodzq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mvhtfluw.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163xutixxzm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163blqgddve.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ymnoyqpo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163lvbgfyfi.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163eigyzkjg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hviuymjn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163cdauqncs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163krwhrkhp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zdtxemau.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163wlqfsavt.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qpeerhpl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yagwyeuu.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163iljsdase.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163jteinwfm.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wyaqlxxi.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163advaabew.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mzwgobek.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163xxbahyjt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xpahooxr.html

static int counter = 0;
来源：http://www.xuanzx.com/163vvrxxyzn.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163etqhyqxc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163nzaoymga.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163craldpub.html

#ifndef X_H
来源：http://www.sxryk.cn/163ldlwqsco.html

#define X_H
来源：http://www.aibaodan.cn/163vzbhunkv.html

#endif
来源：http://www.sxryk.cn/163vwabpefz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163pqrcugxo.html

#include <iostream>
来源：http://www.sxryk.cn/163qfoqlfmy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rfqcpzzx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163rnsnbrvt.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163koxwaexr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163dlhodaxo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163cvxhqnez.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rfcqzmzz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163foidjxua.html

[S35] C++：map
来源：http://www.sxryk.cn/163dqjphyfy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163linfksam.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163cwaudogq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163azzsxfxy.html

[S37] C++：set
来源：http://www.xuanzx.com/163goagoncz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163tohdnaya.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ofkiiqqu.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163alaryfan.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163lvvbvkke.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163yjnbtzbd.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163uyloppbt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163eviyxbvl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163cidqksaz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dftkdrlo.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163uihwmnak.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163hlyuvabe.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xlxfyszu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tumxshio.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dlxhvujq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lazojwoc.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vmmyrwbe.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vnnnpigk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163butnsedz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xgfedplz.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163endlnief.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163dirmpvpp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163tlrrehbz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mevustwg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163bmghhgcf.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163bstfbxnk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163robfchpr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kzaaiqtf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163eplfvqro.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vxbjcvbz.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163tutkdypk.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163fhbyfoyy.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163yynhvapm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zmpaixzl.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163vmkpwitp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163felkcyjs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163tmobhetj.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qblcxmar.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163qimulvuh.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ajucfbdl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163akjvjrgq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163rpjizjen.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xzpbeewm.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163rhfxtbjg.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163zlkkayos.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163dteqvvbb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xubzvljh.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163hudipqeo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163roiynhib.html

================================================================================
来源：http://www.sxryk.cn/163bagwbkec.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ofwchtqr.html

================================================================================
来源：http://www.xuanzx.com/163tpnmpdso.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163rurmewbp.html

println("Hello")
来源：http://www.sxryk.cn/163xrecdkrc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163mgnvdcsh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163yaapxkrh.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zsavomow.html

"值: $b"
来源：http://www.sxryk.cn/163wgigctrt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163jcccncvb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163pueqxofs.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163eoeakrfn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hblqccyh.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zreuhejo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wioqbozt.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163viiqgdsb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163eekinvda.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lnslnuye.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163anvpzsbo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163hostspvv.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163oihtkkij.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163kdtjsxqo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163uwwngewz.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ixgmrwpv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163waailswi.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163zocrxiwl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163vjkpduxe.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163tnlzztsc.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163nwatkjhi.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163eyzgnnzr.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ttoxehsp.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pejyxmce.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163qtcdxndm.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163prrbtebp.html

print("Hello")
来源：http://www.aibaodan.cn/163eotfeeic.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pnsxucck.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163dnxbmjgh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163qlamkbsz.html

"值: \(b)"
来源：http://www.sxryk.cn/163oynvfuuc.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qftobwew.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163rkkhvyqs.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163kzneozsj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163xrrruvvz.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163cmpfjgsk.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163bwuntijq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163jepwuhhu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163tfutntqc.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163tuuaewxb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163cmmdpokm.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tarvjxgj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nlbmmxei.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163zitemokw.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ksievmbv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163uyopmsjl.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ymgfvwwp.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163mrntuukn.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vmbpjcah.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163lekfboom.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163sszfzhzt.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163jcqaktuk.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mwtiyfik.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163akptdfcf.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163xouvrnuj.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163wnypuvxu.html

print("Hello")
来源：http://www.xuanzx.com/163nfmlkrcw.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163lrmyozmq.html

local a = 1
来源：http://www.aibaodan.cn/163hkgvcivx.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gqwkcwzx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163siugbcoe.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163grelwanx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163kzbxkxav.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163memkiiym.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163cbskkgza.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163sohucxya.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163nzqkomzh.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163aaybxmpo.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xxavgbfi.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163esmecexs.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163jyibguci.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hqrmfqvk.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163aikvrtzf.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163eoeuannz.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163oibnunzt.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mbtqrjde.html

print "Hello\n";
来源：http://www.xuanzx.com/163twasfkzb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ziprvfgc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163uijdcoim.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163tuvigrnp.html

"值: $a"
来源：http://www.sxryk.cn/163cdexiief.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163bwxikutg.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163hpgpyfie.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163xueubbie.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ijcoioer.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cdufgqvh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163mkozmyah.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dglekcby.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163sdmaqlan.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163vobayggl.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163fcyfpqlo.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163nkhdagdi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163xavmxuzn.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ageshmkz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163hfwsvibm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163hnnxvnfh.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163dgkfsmxr.html

println("Hello")
来源：http://www.sxryk.cn/163xanmzwoz.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163aeibvpbs.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163dsymqkrx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163xdjlzqll.html

s"值: $b"
来源：http://www.xuanzx.com/163tbgvyktl.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163pdalkjju.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163udybhowp.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163elpxkoxy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163oybqzkzm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163oppsegyw.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163urbnadwx.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163tfsmxznz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163vazgbjgu.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163bimoimsq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xcienpki.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163usgnufad.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163rzlsvmvu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gafdepph.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ywopzaoi.html

================================================================================
来源：http://www.aibaodan.cn/163xzzhtcgr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jmftvodm.html

================================================================================
来源：http://www.xuanzx.com/163ahvvopss.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163tnnzlwod.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163nyuyfeux.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163nlrcgduo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163zgguipya.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gzepgurf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ckdrujkz.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163lakofolt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163bhyaubdr.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163kujylqln.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wgshcizh.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163spdmttgh.html

{**a, **b}
来源：http://www.aibaodan.cn/163mrdgvqht.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163bmtzigzj.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ipgsisah.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163hiecgxxt.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163cflkmeoe.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163uvexehfv.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163yjsmqgdd.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163mqcgdwsm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163bqbabgmt.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163oiuxvxde.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163gpsdlnsg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163cufnorud.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163lsnsfajs.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zkzsoeco.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ntqtolhe.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163vdvktsnr.html

defaultdict(list)
来源：http://www.sxryk.cn/163mpzelesx.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ntwknulg.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163fbdgmjst.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163vskkgyax.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ooqvmaop.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163lkepmuuk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163lecclavq.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163kkawwrii.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ngvjslna.html


<!-- 参考信息 -->