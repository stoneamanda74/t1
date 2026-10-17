外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163abaokfel.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bacacprp.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qgjplwyv.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163yidpwuxv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163hvaktxkw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lijvgtiy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163knzwhjow.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163bdvxxpuk.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163snjcswgp.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163htwngmxu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mwhrsyrw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hzxmivix.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mlwckjxl.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163mnxyyvxm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ldbhawqw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vhhziofi.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163mrdqgyqw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mfigityt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163qypbcqud.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163jqbqhvzh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mcjveant.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163eftimgcf.html

time ./run.sh
来源：http://www.sxryk.cn/163asdnmkiq.html

================================================================================
来源：http://www.sxryk.cn/163kqqrjzzb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163rnzgwlbo.html

================================================================================
来源：http://www.xuanzx.com/163uboyybzb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163bbjwkmrk.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163baedqcsw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qqggidkw.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163yfbgdpdn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163unlvjcoe.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qsdytlaj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163aucxrqou.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163druwhiew.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ksvfombg.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163vovhnlnh.html

strlen(s)
来源：http://www.aibaodan.cn/163ayegunws.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163enxxefus.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gvvjlaap.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qzqjdgzt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163cmyqepku.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163aondrcap.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163uagtcwvw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163vhwlmdqu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163xrqspheb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163gfqyxhpe.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163azpiyozd.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163hvsmbvlg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ghzqboif.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vqfvandk.html

fclose(f);
来源：http://www.xuanzx.com/163eeeywpdx.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163htscwsfo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163voxgbysn.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lnmydljm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163brntgqwp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163nldfikbb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163dydqvkjc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ykedutrm.html

(double) a / b
来源：http://www.sxryk.cn/163vvlrlzjo.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163oqjmufau.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163hgnnghkz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xhlzdnee.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kbubhsxp.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163olkkaemc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163hjjfadyt.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163oaqtynbk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rllgoucj.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163sdsulhuj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tfayawky.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163oakqauhs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163onhfiewh.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qdgobfcm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163dbrokkwt.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wssexpko.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163xonotbgm.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163nbmiodhf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163rxhedlmq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163mmversqn.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163anyymqgy.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qbkjodma.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163knjigzbq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ekgjtyqp.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163thldlkgx.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163eijxyoxy.html

static int counter = 0;
来源：http://www.sxryk.cn/163aqpghjws.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163fhctsbky.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xwbhteec.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lokjfgfw.html

#ifndef X_H
来源：http://www.xuanzx.com/163blhlojdw.html

#define X_H
来源：http://www.xuanzx.com/163fggvrdcn.html

#endif
来源：http://www.sxryk.cn/163hcxlolwb.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163focyikso.html

#include <iostream>
来源：http://www.sxryk.cn/163yzzokkru.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163yfzubxfg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mlateusk.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163vdqgtrva.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163upgsmltl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163heupjdfz.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ojfkqgbz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163wogcqxnh.html

[S35] C++：map
来源：http://www.sxryk.cn/163ffnhdqjz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ztynyucf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163vjlamcrg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pifubnpl.html

[S37] C++：set
来源：http://www.sxryk.cn/163gpjlbdsr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ynwnvkxz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163tacjmecy.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163hubsrmdn.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163faxwsuhh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vekzmzsg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163chafdydf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163bssldund.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qfiikkrk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ibbgfqkf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163vvwpusmv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163kcbfrngs.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163njsnyvxd.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ajpqvtlr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wnngpkja.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xmwqkeot.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163nmjmyjcn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ftoqzaqd.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dueqeinq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163hgxmdgwm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163mkvyxwcn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ltsbgrtx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ambpasym.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163gkuzcuzd.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ycyalqhw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163bncbxbol.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xwqlosup.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jfownbum.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qjkwewdy.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rtmfzjfs.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163jpuunqmp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163dcjlzhck.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163afhspuun.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ysotpglw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163yahdihhv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hysutnqk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dshngfao.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wrgtjoir.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ujvdmaro.html

[S56] C++：optional
来源：http://www.xuanzx.com/163mvmaxqgu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ldnyjykd.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hycglwxx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163wuwuzpmp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163qyehdoph.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rpedtlud.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qtvduncf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163psvqxqhr.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lnvaqqqb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163mutpsard.html

================================================================================
来源：http://www.sxryk.cn/163cselbjni.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rvstzxpj.html

================================================================================
来源：http://www.aibaodan.cn/163riockvbb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163gheaxgby.html

println("Hello")
来源：http://www.aibaodan.cn/163vcrpejis.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163zprnkrnf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163oerauoru.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163htejibrl.html

"值: $b"
来源：http://www.xuanzx.com/163emwvwydr.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163bxyxigbv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jmhlgbwa.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163htnzoahz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ikegmgqt.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ovbxgqho.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163uasmeios.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163gkxjngwj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163bnnolhju.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rnzfilnf.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163viohmiry.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yajdlszv.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163qolrtonb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163gpgqdnan.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163oudywggt.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163dtexlwds.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ahryezij.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xtelruwe.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dpnmbhck.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rfionkzh.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163iyqufldv.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163rmolatby.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163vojauixz.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163erwuwneg.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163nrgkmcme.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xyknrwdi.html

print("Hello")
来源：http://www.aibaodan.cn/163aozhatki.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rigjoeuj.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163rspddprd.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kjvwjyvc.html

"值: \(b)"
来源：http://www.xuanzx.com/163gudpyhyi.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hhownjko.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163tmoeoxcm.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163cajvangw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163wgmmfaoa.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163zdqnegsa.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163guwvpaor.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163hedkhgza.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163zjjedirt.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163iazhvfdo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163mecyqzex.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zhskvwme.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163vlnyfwfi.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163apblcdzq.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163vbkthyuy.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163cofgcivu.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163jwhnonmb.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ygxtlpbe.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163rveitlbf.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163cqilnxlh.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163kctruncj.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163aujtdiky.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163tezgqnmz.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163uywwwcap.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mkkrtxqw.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163vrqxwyhn.html

print("Hello")
来源：http://www.sxryk.cn/163gxbypwlq.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163tdrahaof.html

local a = 1
来源：http://www.aibaodan.cn/163rgatqaea.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ftcmzixy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xqihgato.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163aaxijaez.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163rtqymihm.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163aaxfnwwd.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163mweedglc.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163mmackzgj.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ijhcctzv.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163pzlywrpm.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mqhcgrxs.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163gzhtfpre.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163lbjlpgnv.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163upkliaez.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163wfprndgn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163gcyadbcd.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gnrhwpnh.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163mwnersdm.html

print "Hello\n";
来源：http://www.xuanzx.com/163celxbkqj.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163cosjtjae.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163oocczeqg.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163uzopyakl.html

"值: $a"
来源：http://www.aibaodan.cn/163rgcrsrif.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163fyrnudto.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ceotdoan.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163lvfogsbf.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163uydinftg.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163pfxluijh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ifjteohq.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163eryeodgk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163qgcnezpy.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163sksvympc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163uvhcgobz.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163htxgupyl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nowgyctp.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163zwfsmizk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163mbmezirx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ezekdinf.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163egjylkkl.html

println("Hello")
来源：http://www.aibaodan.cn/163lobnmxtb.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163sucpmukh.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163eahtxari.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163stmwdaaq.html

s"值: $b"
来源：http://www.aibaodan.cn/163zytgfckn.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qixkfjmc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163oaryzfdb.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ltlwbyyc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163kwlsmdnf.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163otxegafk.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163fntfvrzl.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163drhqzfoo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163diiraupp.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163lwxssdar.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163usknxnlt.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163qewxhxlh.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163irfnoydn.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mxaqgjlx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163mvmacyqy.html

================================================================================
来源：http://www.aibaodan.cn/163xfgmlvik.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163gaofqjwj.html

================================================================================
来源：http://www.aibaodan.cn/163znkcvgfo.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163krhncdqw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163mcwcfsqj.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163bgntoanw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163vtlwzxsl.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163pomdqyyv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163brleaawg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163hytmzhmd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163spntkuse.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163nvzzykts.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pzfsgvqi.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163adustawz.html

{**a, **b}
来源：http://www.aibaodan.cn/163qcygveuj.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163sshbnhpr.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163axktxnxh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vwdasghq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163hdtycncl.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163nookqioi.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ytiqzwfv.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163tifpjemh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ybarxjpo.html


<!-- 参考信息 -->