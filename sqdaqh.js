外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163wqkugzer.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163sbttwsmh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163zgfaiupa.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163dkkywnrd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mqehabef.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hnbqxvkb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qpnqjdyv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163omcoeecz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163axifrmrv.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163swsxmwwa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fqvvteau.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163qufkcskq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163keotwfvz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163terefwsc.html

time ./run.sh
来源：http://www.aibaodan.cn/163wivzljrm.html

================================================================================
来源：http://www.sxryk.cn/163ksiihygn.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163gpztguno.html

================================================================================
来源：http://www.sxryk.cn/163lvpziqtz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163onkkyvje.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qmzcgutd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ixbeoxbl.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163uyfnxvko.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ehtuimmh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163sjxfvsnh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ggneqzcv.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163etdzopmu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wpwyswvb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163htuhsxmt.html

strlen(s)
来源：http://www.sxryk.cn/163xtphavhx.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fezweyyc.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163rvjztnze.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qowxempt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ypvksskc.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163eoqaxemc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163seursghr.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163tshxuiio.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163abxltfnb.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163henrrroy.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163dtkhekby.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163epfxczax.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xdehfmej.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163norysbdx.html

fclose(f);
来源：http://www.aibaodan.cn/163ddmsxmtq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163jcjudoun.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163iawotqrj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lnvfexeu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163oiisbvvo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ltdmduex.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vtjzhegs.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163aylfoczz.html

(double) a / b
来源：http://www.xuanzx.com/163cpsvtjwd.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163tnqunagc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jssmylnp.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163jopjrxia.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dxdqvzbf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zmqozzqu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163kesqhcdd.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163jursinvq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dvtlccyu.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pvinqpbg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163slgixudh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163hbdutiap.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qchybgwk.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163pkxtjpqn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163szzmhbtk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zwyghalk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ksvedxrg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163zmosnhac.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163psjwjijt.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163dnyigvdh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nlwjhwqk.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163awhrethe.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ioeszmmy.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163enuvbovr.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163avnkpbqm.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163czrwvuvw.html

static int counter = 0;
来源：http://www.xuanzx.com/163svuzlhiy.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nnupqsti.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163sylaqwao.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ehsxltgi.html

#ifndef X_H
来源：http://www.xuanzx.com/163zbofncgx.html

#define X_H
来源：http://www.sxryk.cn/163khrbellc.html

#endif
来源：http://www.aibaodan.cn/163xjvxhhjk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mmaedthr.html

#include <iostream>
来源：http://www.aibaodan.cn/163tksdidil.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163grqxxwjj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hqiilooc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163asfvmykk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ehvcczjo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163gsfqoboe.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163wvbbkndp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163jbxblcxh.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ahrkyjlk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163umyxipgq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gkimhqth.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jcdkoiqm.html

[S37] C++：set
来源：http://www.xuanzx.com/163diziibuu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163xnqbipsv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wxvjrlmx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163alfzcpzp.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163saglsldc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163qvavfzmu.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hdvtnold.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163yvjlbfrh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rmcfnevu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163rqfeozsb.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163uolbouxb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hgynwztp.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zhzrprhg.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nidgfsbs.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jqmfmldp.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bkbtftli.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fvgwgojz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163skjibfye.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163egqtzndp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163qrwokpvo.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jofbajfk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163oanmssuh.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163jhtvawms.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163alpvjayv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163rkexdfnr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163vrrdamwq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163bzxczxeo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163epemljpg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163kltiwjjf.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163xmbpdicf.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yrcinckj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lfpgcbth.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163wvwuafqb.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zkkfbdyz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163zccsdchm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163czsnukno.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ssbtshrb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163aewkesco.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163pmakifcq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163pkpamrpd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163tjaspjbh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163miigfanv.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163rrzcfmae.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qtlgrmbm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qreyuhct.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yjoelpev.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163myfcaciy.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163dlulhpnl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bdnazyly.html

================================================================================
来源：http://www.xuanzx.com/163svmukxfq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jnaiwtfh.html

================================================================================
来源：http://www.aibaodan.cn/163razlzwsy.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qnehcedz.html

println("Hello")
来源：http://www.xuanzx.com/163xfopiugo.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163hyjkjjku.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tzuyucnv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163wmjupzzc.html

"值: $b"
来源：http://www.sxryk.cn/163wgrsmyzx.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zuctinoq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mfvfgeud.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163fixhnhwl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bgvlrlxp.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163fqxdudpe.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163zgibcfod.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ltogrzdo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163tcxtouff.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rxjybxpq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vnvbhisp.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hxxqqhps.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163htykypnz.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163upihindc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163mtuqbjhi.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163lickjkhq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mrptjskl.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163fcwtzwwq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163seuwwogs.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zdffelui.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163wsysnmyc.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163jzyjriwn.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163nktxnjsc.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wkqqktsb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xwkrbqqm.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163zkugizgv.html

print("Hello")
来源：http://www.sxryk.cn/163qxshuisn.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163sgpqqovz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163cshcivvm.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163dgpgmgra.html

"值: \(b)"
来源：http://www.sxryk.cn/163vkqjaxui.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hlzwbczi.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ayqtmzqd.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163sxtiroxe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fyzandcs.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163bxgwukdm.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163qjqvlamg.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163oxpuhcdr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163oipinxtn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wgiamcmt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qysazegs.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163kjsnqrau.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ezrqypzq.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163exzfhvoo.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163jmobyoie.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vccvkraz.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163cfvdmirs.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163hyfwsbcc.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163jhcvkzhr.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163eckgrujm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ltoqtydc.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qlckorxf.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163rsjscnzr.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163zomrnlth.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163guflvysq.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163vevjpvux.html

print("Hello")
来源：http://www.aibaodan.cn/163cwlvbecc.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163bsxcjuei.html

local a = 1
来源：http://www.sxryk.cn/163njqjrjdr.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163afyszvzo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163nstvahte.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ronhtcvy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jpvwmxdn.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163mdfxlotv.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163dppykleo.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mqilboia.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163nzwmdljz.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163xjtiyguh.html

"a" .. "b"
来源：http://www.sxryk.cn/163fqntcarh.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163gzfimasr.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163kmfgtxpt.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ujwifbkl.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163urikawxc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163vfzrvnrw.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163zmbtzrnq.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163qsazxfbc.html

print "Hello\n";
来源：http://www.sxryk.cn/163dshktcki.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163qvuyetem.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163cigmcvbe.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163zilyktjm.html

"值: $a"
来源：http://www.xuanzx.com/163zlhpazhp.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wliutrcu.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163tszwrvdj.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163aeeopqmc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fwdxkiwc.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ofoamkia.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163vzhvgnza.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qtweingb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xgvorcgv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163htonbtjl.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163oxocsaly.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163snmpjwyn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163mhrxekly.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163frdwjyxa.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163opyqdzwu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163fdwkgjvb.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lvbikvqv.html

println("Hello")
来源：http://www.sxryk.cn/163wesubnuu.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163scquqnet.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163mxoexcyo.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rrfgbrvq.html

s"值: $b"
来源：http://www.sxryk.cn/163wekhpovd.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163mqghbdmq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163iswewzri.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nawnkcvb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qpmccrrb.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163oqimftie.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163rwckiwah.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163laawypdu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rxzxuzws.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vkhtesuu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163fjwwttss.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163iuxqoxod.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163dcmjotix.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163zamvfera.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dbotaogn.html

================================================================================
来源：http://www.sxryk.cn/163khgrehdz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ptjhyivp.html

================================================================================
来源：http://www.xuanzx.com/163mfqybcjx.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163euevsmsv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163rirkwpyc.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ujqzzesl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163mlclnnmr.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163sgvxwujp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fkqiilpl.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163oeijvewy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ibcltahc.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tlvfittf.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163sosughyr.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ncqscdup.html

{**a, **b}
来源：http://www.aibaodan.cn/163pjmngubs.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163icsstdre.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163acptfulq.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163cfoivyav.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163gaopxpfb.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163eqffkpnw.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163fjbojwyj.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163tdcqdnat.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163szvhfvjl.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163dsyinoiw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163rhflqsim.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163cohqdqnj.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ihcmobga.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163cklsbygj.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163fpimvgla.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jeghydgq.html

defaultdict(list)
来源：http://www.sxryk.cn/163itvaqdyv.html


<!-- 参考信息 -->