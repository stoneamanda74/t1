外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163gujneqbr.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zuxqmtfs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163brjynmkw.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rxobcgeg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zghkzfmv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163nanwkcyf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xspsqvzq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163eutwrgqr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163pjlrebte.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163yekwqxfg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ojefrrls.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163pkietmrf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163lhhzmqvs.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kgkoqosa.html

time ./run.sh
来源：http://www.sxryk.cn/163bikimqxh.html

================================================================================
来源：http://www.sxryk.cn/163jveavahc.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ckysczvt.html

================================================================================
来源：http://www.aibaodan.cn/163jirrfqoj.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163xzhjmshk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163xgdpiiss.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ofaqiguy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tlhswxyv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ysfjvhji.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163odquzhez.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163zkpwmpug.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163bxxduoiu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kqgmzxri.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163injorfgw.html

strlen(s)
来源：http://www.sxryk.cn/163taokrrno.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jsgcssrc.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xihquiyi.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hyruwdjo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mowhevzz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wzinpsbe.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qngsgoxh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163rpqbwsqm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kgltncap.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163iuhmzqju.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163vrkoubqa.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mimvimda.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163kypvohon.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rpuemncz.html

fclose(f);
来源：http://www.sxryk.cn/163ryxdprjt.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fsdeqntn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163pwnufnmi.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163wstkycav.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163yrsmegex.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rkeophxi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163msxndltg.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nqjuuugk.html

(double) a / b
来源：http://www.aibaodan.cn/163iyafsiis.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pmrxcuhn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fwpurjdo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xddxdfao.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lszzuidl.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qpejnjfc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ohjioqwy.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163vweluhil.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uechkyiw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163kfvlpese.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163htqcuztq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ilaaochx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163zsfrkizv.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ktxlndbm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qmgrfgtg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163errhfpza.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163funbibeo.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mesahwaw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ojfcewli.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dzokntbs.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gmokzqcz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163keejwuse.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ljywtiza.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163krbxijxk.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163hfhffivi.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wttfwfai.html

static int counter = 0;
来源：http://www.xuanzx.com/163sgkcddqr.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vegogdlt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163fbxbyymw.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ddrywwlo.html

#ifndef X_H
来源：http://www.sxryk.cn/163pdeakvsh.html

#define X_H
来源：http://www.sxryk.cn/163fxfopyxe.html

#endif
来源：http://www.xuanzx.com/163xdmkoldl.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163conwcnch.html

#include <iostream>
来源：http://www.xuanzx.com/163abdxskri.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163nhytnygv.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163dnciksds.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163krvekdhg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163swtsxhdx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163iddxglft.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zuklvtqx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163dghonasx.html

[S35] C++：map
来源：http://www.xuanzx.com/163owqjmsrs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gersxfrz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ovfvoiat.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cgywhibc.html

[S37] C++：set
来源：http://www.sxryk.cn/163ijswzfxa.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163hpjmxrbb.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xosbvdca.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163snjawofu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163bnkarmrx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ojhczswv.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kfnscxrd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lkmijyge.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163efyobrfk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163lxypktea.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163xlssoexz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163oqckbmaw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163feyldccf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163mcsqtuyf.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lkvtxarh.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163yreshdqh.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ldcawgcl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vehkvkph.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163jdwaectn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163unfzjtce.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fjuhyoiu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163xublkoqx.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gqsaormc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163gykiyqwa.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163lclzkmil.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163puunztia.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163atlwexue.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163noymmieb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163sshntkbo.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gygjwmmt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163crkcocfs.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163cengxqrt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163wiaauiwp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163lccwyidx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163tpkxgkaq.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163eiobesgt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163mgqqwmja.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163yvpzbsir.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163jqcccguf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163xlcrseam.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163nnjtalbi.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nkmytowv.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vtriypcn.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nnxpgprd.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163wfwryqco.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163pmjtdqes.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wlwbsswy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dtqytdiq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ibhhuuya.html

================================================================================
来源：http://www.sxryk.cn/163aarhwzff.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vytxdimi.html

================================================================================
来源：http://www.aibaodan.cn/163trmjcfqx.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163etsworpw.html

println("Hello")
来源：http://www.xuanzx.com/163eusarqzl.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163bgztdwno.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jeguzsvs.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hkxepqlm.html

"值: $b"
来源：http://www.xuanzx.com/163cbmocyqc.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qabvdgbv.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163pbrfmnud.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jlhaiftz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163tthlyfkp.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fdjrhyao.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163aipvqfhk.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ndwvqfye.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qlpcoieo.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qipubgdc.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gaxvdtvc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163jxwjszmv.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ssyrnsql.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163glsganmo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163toktjmsj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jyuxmedr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163rfxauclo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163zvbxaywt.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163miohbhmg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163pppjuqcl.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163fbipcejg.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163xkydkaxw.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163hcqqyyhg.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163aizxikpm.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163zpsrfwjk.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xamsgjoy.html

print("Hello")
来源：http://www.xuanzx.com/163uavucgle.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163dmxyzdow.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163jgjgajqr.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163uxxnozxp.html

"值: \(b)"
来源：http://www.sxryk.cn/163jyuepwhm.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163lfwzcett.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163mfiktuei.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163kkoionqn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fdmuvyje.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dpnhkjeb.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163dzdkfmte.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163hkwuqzvo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163wiwnflmi.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163oxjijcaa.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163rizxapai.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163yqxtaiwi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ropgobno.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163kktasgmv.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163gxwdkxex.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163fmuohnmu.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163razljxyk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163nxhqoega.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163vdijyada.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163mifldflv.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zlbpzzxc.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163jgrpmjas.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163uvuksltp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163lyntpgpn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163cordxxby.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ljsqgxvl.html

print("Hello")
来源：http://www.aibaodan.cn/163zzjlybuv.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163vjtgquyn.html

local a = 1
来源：http://www.sxryk.cn/163frlkcmif.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163amlisviv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163iabufpzz.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tlkobgdc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163dedoeddj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163tvgcdaym.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163wzozznip.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163uxldcgkw.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jnxhbekv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hcknvfod.html

"a" .. "b"
来源：http://www.sxryk.cn/163qbkryaag.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163urfjaakv.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zhncacfc.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ztwajegg.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163tpprsqab.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163jqlzwito.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163wapftgjt.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163tzlajapt.html

print "Hello\n";
来源：http://www.sxryk.cn/163hhuoaysp.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163lmrtvpbm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163aukvorwv.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163uiwbxbdq.html

"值: $a"
来源：http://www.sxryk.cn/163njgycesl.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163adfnchvr.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ovkmyyor.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163rtzzgglj.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163hfnfjodq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163apmehqfv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163dqdmayxl.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163cffqwmyy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163sopofkgq.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163lzocmrcx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163foeixuck.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163iizhqmmv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163cvjokszy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ncbccecw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ponhgtnu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163fcpsurpe.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163jcvvpfmw.html

println("Hello")
来源：http://www.xuanzx.com/163fnhhszhz.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163fquqnvth.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163rammjlpb.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ikmogbdd.html

s"值: $b"
来源：http://www.sxryk.cn/163cncccfoy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163udrfhosm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163wmwluhxs.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nsviocik.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163tgnanuzk.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163vebpytxs.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163esymlwwy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163lglyormm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163jbwxkmbg.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163uusbzjgd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ugpmppxa.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163folcuzuc.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163pbtnyhpl.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nzvuvrdo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163penrrpwh.html

================================================================================
来源：http://www.aibaodan.cn/163xaoatvmk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ctshtcec.html

================================================================================
来源：http://www.xuanzx.com/163uchaauzf.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163kuakzlof.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163mjkykhul.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163urofxniz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163piksuhxz.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163vvnugtuz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163lhbilzoo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163aosjghvt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163qcqadyic.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tyhzqtaz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163axtuskzp.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163qbaujssl.html

{**a, **b}
来源：http://www.xuanzx.com/163lnudepdw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163iazmttlo.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163chdyzoly.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163hhujftlt.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163xacprqvl.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163fwvlzwhp.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ijoezqwy.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163rjwhybqh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ydpkpmxg.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163snmwuvak.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163rqlhwjtw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xbtpnegv.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ioxvrshq.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163pcwxlugx.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163tisxfugy.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163lzgplqhh.html

defaultdict(list)
来源：http://www.sxryk.cn/163lawprloq.html


<!-- 参考信息 -->