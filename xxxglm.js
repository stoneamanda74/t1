外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163pxztlqlg.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hotbjtgx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163noradfhf.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xgwidvzf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163yxnhlhky.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163iakjhebf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163vznbslff.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ohxfvebx.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hrkqtjvj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163iwjzzcei.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163cyrkkffn.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rozxetfj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163fshtdsxb.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163vtcivgpg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nqllozlq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163eleweowu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gkbfiqxh.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163eqhwxuwg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163slpovtzl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163iqlrikju.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163nqsrnmcr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ligyejio.html

time ./run.sh
来源：http://www.aibaodan.cn/163lpgdwwvn.html

================================================================================
来源：http://www.sxryk.cn/163cdrizbjd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163bapfgwpe.html

================================================================================
来源：http://www.sxryk.cn/163oayefkmh.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163penejcpk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163dwdqzlye.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163zvqbvivp.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163dgslounj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tefuhzeo.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163adsqqkxd.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163lhfnkmlj.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xyiluyok.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163foaplpzq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163srywidbt.html

strlen(s)
来源：http://www.xuanzx.com/163xhpzqirk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163rsnffzsu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163xwvrhfdj.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163sdhhlndt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163uszbnowy.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wtgjddft.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163zpugwwzm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163xtkofsmj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ergjdkzq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163dymflsss.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163sgsswgbk.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ottcuncz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163gilxevsq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163oeaykqbh.html

fclose(f);
来源：http://www.aibaodan.cn/163comafqbh.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fdrxwcqt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163upmdobvz.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ksbbwkoc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163gpdomkdz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vkdvurpb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ubzxbpns.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dvieyusb.html

(double) a / b
来源：http://www.sxryk.cn/163hciarzkb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163rwzfzjtl.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163siejzphg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163flnlplmk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163gxhqrdhv.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nevddwkz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hnfqnhos.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163hhpnpkdo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vlenetoe.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qmhywayr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163flbquhzu.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163lmleawgo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lqmpbjqq.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hfxticio.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163okaxngvo.html

[S23] C：随机数
来源：http://www.xuanzx.com/163tzqzdwzh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fujckonc.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163tbudqlem.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163dptzttwm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163imrhbxbf.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163onvefwff.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163sjxskcgv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gdsqwlmv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163zsgicsaj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163yylwntll.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163sgmwdrkv.html

static int counter = 0;
来源：http://www.xuanzx.com/163luhlqexw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163gmjqucrp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hoexfsws.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gcygkqsa.html

#ifndef X_H
来源：http://www.aibaodan.cn/163knowlkmm.html

#define X_H
来源：http://www.aibaodan.cn/163uqkodwzl.html

#endif
来源：http://www.xuanzx.com/163ijxdphot.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163umldaaws.html

#include <iostream>
来源：http://www.aibaodan.cn/163pqthfboc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ginchehl.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163swmydgoi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163uvlnxkfh.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ryfmkzge.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gzqzjuao.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163iujviftr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mihbhnhm.html

[S35] C++：map
来源：http://www.sxryk.cn/163dxxujitt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pulzoaed.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163prrjoojs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163biqbkeip.html

[S37] C++：set
来源：http://www.aibaodan.cn/163awzzsaim.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163iskucway.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fpudujen.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163jzbopwcp.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163evkhmnpd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163rjokjgrb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163awansraj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163hmgxoxbg.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163zhjewyrp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163sxhhmwvo.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163sdsofqlf.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xrwsusqr.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163psvjxqkl.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xdjphjhk.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wbtyodij.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163yxqsoivw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163zdbzqolh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jukjjglu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163yntnyser.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163kzasnksx.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163pgmcdnjl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163yghkixue.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163kzagrdbr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163bvfzxuyh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ywvzdwgj.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163vngpsmba.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163gofofhmm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163eoucmlag.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163drqkjjqu.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163prgkuxop.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163dnbghrro.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163alwrkpfx.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ftkuryan.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163koxydeqo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lbvjyopl.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kpdkxveu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163hsidqsza.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kzeoeucl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163tqqvsbop.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xtycslgz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163jageewqh.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163uncdlwsq.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163uljptvrr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163pbhyocpt.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vlfumavl.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163slqeplpp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163qiavdpqx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163clbusguk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kgdmecie.html

================================================================================
来源：http://www.xuanzx.com/163stzchnjg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163knrzqdff.html

================================================================================
来源：http://www.xuanzx.com/163kxfregeq.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ptrjzvim.html

println("Hello")
来源：http://www.xuanzx.com/163szhlnwew.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qcmnaphw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dywqawer.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163aqnaoetg.html

"值: $b"
来源：http://www.sxryk.cn/163twgfalfs.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163yanhbiya.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163muxrdtfa.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163njrpekml.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wxuoxcad.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163farmkufy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163razindry.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vediituc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vendoqpo.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163aqesviuo.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163reyczsdo.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163syjztsem.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163afylueva.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vlatkswm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163chswpnxm.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ychhszcf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163pylxteqs.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163iiamdguz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163mtzhjpcr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rbllvvxs.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163zxcekork.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kjxtfwao.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qwqpjbja.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163fmthblfk.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163yfugjarc.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163efwaamhs.html

print("Hello")
来源：http://www.sxryk.cn/163igbdrolk.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qfanthbv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pxvwokat.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163iflnwxkb.html

"值: \(b)"
来源：http://www.aibaodan.cn/163aijczrka.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163pwkotfyw.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163rtnhikhs.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163fotenfia.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163bvkkstgv.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163lfdfbrgi.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ruthjoee.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bdmnkjqt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163sgpzebuj.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163prlizzar.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163yvislsdi.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163sfnwnklf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163llxmzcdj.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163lhwxudpv.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163esuipghj.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163aksholvh.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163fuqucdcv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163nbpmggxn.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163rrksaqzp.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163agwoqomz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163dqbalgww.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163hugpsiws.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163tvzqmywv.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163eezuteqt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163gldqjahz.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163jcxxtllb.html

print("Hello")
来源：http://www.xuanzx.com/163sqqvwaol.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163lmvtlwje.html

local a = 1
来源：http://www.sxryk.cn/163vqbgztrv.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gsqwchuq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163yemmoabv.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163rlwmsrvo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163djyikbin.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hgabecmc.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163xfibpozp.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163cxzjtqzh.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163pbeonixv.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163usoowaxu.html

"a" .. "b"
来源：http://www.aibaodan.cn/163jfxfjdvl.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163cbxaaznj.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163jymnoeql.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163lzzwnoqv.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163qovgxzfv.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ucjxxzog.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163mbizwooo.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wdydufqg.html

print "Hello\n";
来源：http://www.aibaodan.cn/163lbmufvav.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163srimphvj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163yqucpyfn.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163qreggpux.html

"值: $a"
来源：http://www.aibaodan.cn/163zaetdctv.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mmqgehdc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163jbgoofdq.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163yogprurg.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163piethyfn.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163vyjkzpto.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163olflurfw.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163apyygtgd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163vweqxjfx.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163yzmejpie.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163laudpdky.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163optbzhly.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163fxjlunvi.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163kitgbynz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163kbasaexh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163sxmmcude.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163qwljjlpv.html

println("Hello")
来源：http://www.sxryk.cn/163regxhxgb.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vmkdxiec.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163zhwvyviq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qvejxful.html

s"值: $b"
来源：http://www.xuanzx.com/163wclpcknk.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163syyfncnq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ucjwyzit.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jfrjtwyg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lmvmynuk.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163buvzrnye.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163pjbvgxxg.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163fnfqedtp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ayxbpvzt.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mzajluov.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ygmovfby.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163exmdegcz.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163eexlhpqk.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163bccavxlo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163msmfaiyf.html

================================================================================
来源：http://www.xuanzx.com/163anjfzfuw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xvsduprq.html

================================================================================
来源：http://www.xuanzx.com/163bjrisyhw.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ddfeyzwd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163zivxnicv.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163obsqiqvn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163yxvygagj.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nnczlstg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nbtlluoy.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163wscfhtmz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163enohtxvu.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163gcmptgik.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163waviqkzx.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163timzwdwi.html

{**a, **b}
来源：http://www.sxryk.cn/163pfbusutf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163oiloxyfp.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163cilkkbrr.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wrbtszoz.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163lsuunzjq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163lzynvgnh.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163rfatcjxf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163jhzimjaa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163tquupbru.html


<!-- 参考信息 -->