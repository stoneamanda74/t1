外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163vvbpnxnr.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163vwchvtah.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lkrajkoe.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jrpgjyei.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163vqegcikd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xsdhbhcc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163wtdaqjka.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163olzwwbgc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qvtgkpws.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fkwiipvk.html

time ./run.sh
来源：http://www.sxryk.cn/163mzxlfdkf.html

================================================================================
来源：http://www.xuanzx.com/163bieojkcv.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hvwvryvm.html

================================================================================
来源：http://www.aibaodan.cn/163ekxblayc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163eclgytbe.html

#include <stdio.h>
来源：http://www.sxryk.cn/163niuplglw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163fxjmwxwi.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163oykxpfsk.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yleubcpa.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163fiuqpsyt.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163tjtvidik.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hwaplhtc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163nhboppje.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ogotzvhe.html

strlen(s)
来源：http://www.sxryk.cn/163liiadvrn.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163spbmzsza.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163vhqbplaj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163whprbjqc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zpfphcfc.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ilyfaebv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163cdzgzlun.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163dboznalg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163pepzofvu.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163myotnwzd.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ohudledi.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163qncwkcix.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kjghbokx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xtzczqnj.html

fclose(f);
来源：http://www.aibaodan.cn/163mfhspwgz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163stdqcrbj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163failjvoo.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163paoadhuu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kkbqcjlp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jrpuykvw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163jxymysns.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ffhrstew.html

(double) a / b
来源：http://www.aibaodan.cn/163gjkvnpaa.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163fgrkjjuc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163hsottiep.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163sfnatqoz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fooottgs.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163iqibjltn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hopswugv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163wdhznppr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jgpjtjwf.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163cicszwzc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163iskargit.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163svgioeed.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ydbkjuko.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163brksgbzf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163hwumcdww.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163sqpdqukc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jlvpfijy.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163sljginyv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ndvtaupb.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pagsxmya.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163chwvjscx.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163lqmcljdl.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163nvnzgxwl.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163shcbsvlm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163nlbazmsi.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qmkggrom.html

static int counter = 0;
来源：http://www.sxryk.cn/163trqgxndt.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163wxcfwgra.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163gbtcxrfm.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ssrdhjov.html

#ifndef X_H
来源：http://www.xuanzx.com/163poksdmgx.html

#define X_H
来源：http://www.sxryk.cn/163depeajkw.html

#endif
来源：http://www.aibaodan.cn/163kocpukaf.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zavvghhu.html

#include <iostream>
来源：http://www.aibaodan.cn/163wogspkrd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163htpfkoam.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163fqwqnvqf.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163onmgoizc.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163pczjkhgw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163unofrmqk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163tjzbwarw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163sqeingab.html

[S35] C++：map
来源：http://www.xuanzx.com/163hafseums.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163sujtdobw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163xasppnlt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tmgvnhih.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ywgebyjk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163krvvoawd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163avgrxnru.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163zvetkjhw.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163sgynbrtj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163fxxfkbcj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163usudidjv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ycvbaptw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mnbqunyy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163bnfotarf.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163tosivqhs.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bpfljdxt.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163glniafgz.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yrojjvpz.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163mtsettso.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163faqjrwml.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hjrxusmo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wbslzhbk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163eixetavt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163fomarpmc.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wlnctdba.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fopynlem.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163oxtbjqzz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163hjkzcppe.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163camikofi.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163yejuljie.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wsdqhofl.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163rgjtazhh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lhkeecdi.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163erwmajii.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ybwtvcsc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ycekhoct.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ahrtgsfr.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163qyxrqhnq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163urmuyilr.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163iivjxmnj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jwtiqvfn.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yjqicuma.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163gpscyevq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163imwmtabr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163uktlrazi.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163nypavjez.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163txsbctqm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kbjdiqys.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qycczhjz.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163gdicedzh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wvxbzwez.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163kyfpgtin.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lodnphfc.html

================================================================================
来源：http://www.sxryk.cn/163ovomilbr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ucwijpns.html

================================================================================
来源：http://www.sxryk.cn/163dszbxdly.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bbqwzise.html

println("Hello")
来源：http://www.xuanzx.com/163inqegnic.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163zhwffsig.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163npjfresw.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dztowfnd.html

"值: $b"
来源：http://www.sxryk.cn/163etwfowko.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163dlsvfsfd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163rrqmuzam.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ubbzjaaj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xdtdtpqg.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jdwcltny.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vuukpnpp.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163zznkirbv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vfnvwoje.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163golshbkq.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163rytedjkx.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163mgcxxmmy.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xshvdkcm.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ukjwleed.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163cbogclxl.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ptjjptza.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163slhomvyt.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lrkwhlxt.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hmdhbyvp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163cagryurw.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163demucxxh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163evkocsxe.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163nawwovfk.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163dpdpupic.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163vjyqcboz.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163xjcyhajw.html

print("Hello")
来源：http://www.xuanzx.com/163hidpoamu.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163gejhbyta.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163lzhdlldw.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163bzlbjmtp.html

"值: \(b)"
来源：http://www.aibaodan.cn/163aosfwnzf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163pialepnc.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163hbeqaryh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jmvfeylh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qcyznqds.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163chnqattv.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163jauwzikp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163speuptly.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ejphsuxa.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163dtxmtzpg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163uiqcotom.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163cyxbusmw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163xgbqmljs.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163eorrknpr.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163pxomzmwg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zpemgbic.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163dhqposjk.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163lcewnaln.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163wogmeump.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163hnqteylw.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163anlongbq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zybrhavp.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qioxdlvw.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163atjosglq.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ajrgvhnx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163exdhpvmp.html

print("Hello")
来源：http://www.xuanzx.com/163hsrcphxi.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163acdemyix.html

local a = 1
来源：http://www.sxryk.cn/163gkyteiwd.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ampetnqr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mspgbara.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163veurmaqb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fyqhvjrs.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163vmlsghhy.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163roupnwrn.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jznvregc.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163uwzwrktl.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163twxlqlfo.html

"a" .. "b"
来源：http://www.xuanzx.com/163qegiwoxo.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pxohsnbb.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163rjnisadx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163rwomdndy.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163qpqggkmr.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163soxxzpne.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163nlecrmfg.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163eltznxvp.html

print "Hello\n";
来源：http://www.xuanzx.com/163zuhahvgi.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163yeswoxbv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163cjfpqgjq.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163bfuknyun.html

"值: $a"
来源：http://www.xuanzx.com/163sremzmac.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163anpidgak.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163bulqukpm.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163shqsaane.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163xwfhxrrt.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163eowxrofy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163hrshfxml.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kdnnmvav.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rzlfzuhx.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163bbcrutac.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163qtasruhi.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163rvoastkk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163wwmgaekb.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163bfejeeba.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163csabemlv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163naihkzuw.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kxrmpwkm.html

println("Hello")
来源：http://www.aibaodan.cn/163jcslkrzv.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163vscvapzq.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163rlscpcbb.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163aqiwowaw.html

s"值: $b"
来源：http://www.sxryk.cn/163gnvnqeev.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163trggwnik.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163shiqeofi.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163opdgybjc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dxxaptwf.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163lkijpupu.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163scqvvaon.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163rwwsrnaw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163zhtfczdw.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163vkbzahze.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rzzknaus.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163qbfvafrc.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163zpkngcjo.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163cgavyidd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163xtqpbvao.html

================================================================================
来源：http://www.aibaodan.cn/163akafshss.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xolrmgxa.html

================================================================================
来源：http://www.xuanzx.com/163hqeowivz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163rieqdhfc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163gzrgnaay.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163rdfvjeks.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163pziatkka.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163mfpixebr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ytjwkkiy.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ucllxrjv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163pfehekun.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163hgwwhivu.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sfypxtqq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163qnprsuvi.html

{**a, **b}
来源：http://www.aibaodan.cn/163ltjhlwjq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163csydsnol.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163fxwlysgv.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163xotvmqsp.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163iatbxswu.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163snqwfkxb.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163hwgdviea.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163opbbkbnn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qxqtyebf.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163hmhaiqqm.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163alchxdce.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163trcbnszy.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ypndwtqs.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163uumvpkak.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163zmssyace.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163eugwkijm.html

defaultdict(list)
来源：http://www.xuanzx.com/163jciqnwaf.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163fowdxyfq.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163vqlgrlas.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163eqgglwlu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163hjjqdnns.html


<!-- 参考信息 -->