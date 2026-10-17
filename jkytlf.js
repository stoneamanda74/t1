外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gblehdba.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vjidaqem.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xupmlfmg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163guwgmzep.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ythoovkz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163hrmyydri.html

time ./run.sh
来源：http://www.aibaodan.cn/163jtchuxlc.html

================================================================================
来源：http://www.xuanzx.com/163yqzsydwl.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163aurrqflc.html

================================================================================
来源：http://www.xuanzx.com/163tnqttfqp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163nnunawug.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hhuiznwl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163vnrsevbw.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jqwuztio.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163wsbjldjy.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bllqbsfa.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163aosdsjje.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163suoszbsl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163qjqnqyam.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163rjigyotx.html

strlen(s)
来源：http://www.sxryk.cn/163xufastrl.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163zklowpvd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tvylpuis.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163bhjpvldo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vojrgqfb.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163slrlziga.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163plahaymd.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163vdebbnyv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163dupjuupd.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tmhdemnz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163apzvpmtb.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163tzakusfz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163lsdwhdsc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163mtidegqp.html

fclose(f);
来源：http://www.sxryk.cn/163bobzfgoo.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bevgogor.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163feiwblxd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tlatxbbq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163lcswtbqp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jnmbplyp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ykjhfolb.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163kkskhmjn.html

(double) a / b
来源：http://www.aibaodan.cn/163fvdadutd.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163olwvskin.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fhgcxyjf.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163gahagkkh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163imzinjza.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163pnjjybbk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163icswedqf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163rczusstc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163udaunlwd.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vyycqkgk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ypcoeqbn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zfeyacof.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mnpzlgfn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163eywpneth.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163djivgriz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163lsobegkp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163szrrgjib.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163sfjhlhpk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jaohjoed.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163yngblfog.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hdlvcqjg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wbexyfex.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163usirngom.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163asicwrdq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163eumfipup.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jqwyndfu.html

static int counter = 0;
来源：http://www.sxryk.cn/163uirfqqmu.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zljiklip.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vlyjffsx.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163znpznsme.html

#ifndef X_H
来源：http://www.xuanzx.com/163pqbdjkbw.html

#define X_H
来源：http://www.aibaodan.cn/163cxnltyhu.html

#endif
来源：http://www.xuanzx.com/163icidffis.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163exvcljyg.html

#include <iostream>
来源：http://www.xuanzx.com/163oromegvs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163zntqtxgc.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163dqpxlozd.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fkbswywk.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kzfxfjml.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163pdpdjatj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163gpicineu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mfeaqukr.html

[S35] C++：map
来源：http://www.sxryk.cn/163acebfyai.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rppabcuq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163cccrwhbv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bckkthzt.html

[S37] C++：set
来源：http://www.sxryk.cn/163vwcwxgzo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163xfiknzga.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ykokzqdp.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hgepfulf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163eonznlwe.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163agtggyvj.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163opnbtvkd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163sqflbepk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ologhiir.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163sgzichyg.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rfdtzyjh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ebawbfhg.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ublznhbi.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ztgbmmba.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nnitsbjz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kskdflet.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163brdsuifm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163jmzcffgq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163jqojyjuj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163smeysgzo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fknawrku.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qiuffywe.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ucuhznig.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163pifaptbi.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ymzdzcfo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ozpjdmxq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163nfxqjsgb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163hhchyqmv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163qiygxpio.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qojwbuwc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163lfpjktbb.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163iysquwhh.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ikqexzor.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cfbkssuc.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163droyvzum.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163zshnraka.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163iurhkgep.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hvgmkzps.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wbubpfzt.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zeferdnv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163alylfxvg.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lnweppsq.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163tggqkxgl.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xetdahje.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163oylyufmc.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163upjahvxm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hvygqjsz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163eiiccwpy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163kdgydqnj.html

================================================================================
来源：http://www.sxryk.cn/163ltndxgmr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wcjgdlaf.html

================================================================================
来源：http://www.aibaodan.cn/163ltqfjbps.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vtdwmhwv.html

println("Hello")
来源：http://www.xuanzx.com/163icgnqzzh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hozpfyxw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163lbotwfac.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163muzghqrh.html

"值: $b"
来源：http://www.sxryk.cn/163bbdawvas.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vifqqpye.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163fcvhvlep.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163kxhxtifr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163gyvrxldv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163kbhbblfo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163gxcvacbt.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dqccpwxy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163hlelhizt.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163gzmnynre.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163avknocyr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163mazlcalq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vsnqitsi.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163sdisgmvi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163sbfmjvet.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163emdwotpg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163fzsdghte.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163gjtiejbn.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163xpzykrbx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163xhjurmtq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163htjzsztv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163xpxtoymn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jhlxbxhy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163bpapdikk.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163rvjdltdc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163znjhoshm.html

print("Hello")
来源：http://www.aibaodan.cn/163vpiosyph.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yqqtvbfp.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ighdctfp.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163jroiotxu.html

"值: \(b)"
来源：http://www.xuanzx.com/163djoqgmgs.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163vhmosazu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163unooazam.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163yyemeyxm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ilrvwyox.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163lzelhcto.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163iriibxdq.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163dxozmnpi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bjxyexcy.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fmuclqzp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163gmeqwxcc.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163pijokpdp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163egqrsumt.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163oqnvqlkh.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jnhuzeac.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163vakkqdpm.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163kyiqbkvs.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163xjrjrphe.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163owgydlil.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163irdhejzr.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ygyqkyek.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wqhcyinm.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163htsgligb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ssgkzcti.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163dgqnqeqg.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cpcevdcs.html

print("Hello")
来源：http://www.sxryk.cn/163psjfuuvf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163nrsgrigl.html

local a = 1
来源：http://www.aibaodan.cn/163xmlfhcdi.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163hlovnrgd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163izpwzxed.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163oluosiqw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163hrhftdwo.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163fjpuwlcn.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163vkhphmyo.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163mozlljtr.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163qahcfsfn.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163gwpxremg.html

"a" .. "b"
来源：http://www.sxryk.cn/163dxrngrhg.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163fldxxwmq.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163buedxdfe.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163buydtpao.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163glxqmflt.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163udtfogmn.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163iqsgddbx.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163wiyyrutb.html

print "Hello\n";
来源：http://www.xuanzx.com/163xpdeiwnc.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163fenorqoo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163tolashxp.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163oqliivxw.html

"值: $a"
来源：http://www.xuanzx.com/163yckecqda.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163uwkbhczg.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163tfbjxcow.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mntttztj.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163bktuvsia.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cmxdtjzj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163uqysnazu.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163eqnnylsy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163vtiqbsga.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163foiqkixs.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163yotqbvez.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163qchciwha.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163kmatffdv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163wvkbjzmr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ctysesin.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ujnhmevt.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163imjkprwa.html

println("Hello")
来源：http://www.xuanzx.com/163yawfyqfe.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163rabituqz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163wbukaipo.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163zwzueirc.html

s"值: $b"
来源：http://www.sxryk.cn/163vuuylrcj.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zpcjwxfi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163fdnjjffn.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ubhrrqay.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163vhlcphwa.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tfdqkapr.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163wnhmyaob.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163swezfoii.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163xsoswyts.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163upfpwppn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163urjgquie.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163cmqfxurc.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163rnewcisa.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163kkvkcyvi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ltobvmdn.html

================================================================================
来源：http://www.aibaodan.cn/163uduzhxba.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hngcsfsx.html

================================================================================
来源：http://www.aibaodan.cn/163lfqbiuen.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163dyuwalpr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163kuonbfpm.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163fxrivyzp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163uaskwtlt.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163nsnypdtb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163dejuaegu.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163henrelup.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ndtaazob.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163fzfxgmta.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qrjiqjfv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163cosdnfan.html

{**a, **b}
来源：http://www.xuanzx.com/163qnntwdhe.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vdasqonu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qbuztaej.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163vtvkohdx.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163dsdkqzdj.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163njycvlci.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163oagbcbjw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163toqsukyc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163tsidgpmm.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163txumnanc.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163xyaizdiy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163uqbtltzy.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mkogvyzw.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163enigafor.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163czgnqjmt.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163rpcypqop.html

defaultdict(list)
来源：http://www.xuanzx.com/163faksxcsz.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163yivmtvhq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163xkrceuxf.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hhuhrjdr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mrwzewmz.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ksanfjsk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163mdleywqd.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163myxtkikj.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ainkuykq.html


<!-- 参考信息 -->