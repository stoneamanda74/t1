外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163djnsljkj.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bweeyaim.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163syrybblz.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ljnklfmt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163oubiyqkr.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jagzokrp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bizfiohq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pjkynsjd.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vacaeuss.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163obalbiwh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zmxovdkz.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163vyigdrst.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163evzpwfxx.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zkaxtkbu.html

time ./run.sh
来源：http://www.xuanzx.com/163mubuoxfo.html

================================================================================
来源：http://www.sxryk.cn/163rufzkzsz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163adjfwilm.html

================================================================================
来源：http://www.xuanzx.com/163mikkfglw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163rgidgadm.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163eeojzjhs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163plkgseva.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163qokdecxs.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163kpqmryqh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163puljsuzi.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163gdhzdxra.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163eajyxobs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163rztechjd.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163bfvvewhu.html

strlen(s)
来源：http://www.xuanzx.com/163reewjlqi.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163hgtxxegw.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163skyyaqta.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163glyztmpg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163dhdgpcat.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ophicmay.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hnlpxcsi.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rzuybgnp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ummxdzsv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163jhzdapqi.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163nbieoilo.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ycifzgly.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gwpsibsl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dcwhrndl.html

fclose(f);
来源：http://www.sxryk.cn/163axskvnuw.html

[S12] C：写文件
来源：http://www.xuanzx.com/163opcfevdn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163bmyaatak.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wuoafcku.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vwhlchda.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163pvamxlhu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163gbimoyon.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163netgwsjg.html

(double) a / b
来源：http://www.xuanzx.com/163teaubodf.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163czpmeyvu.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163vxmywgvw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163kesjwbxy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qjfnrpqe.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hgpyruvq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163phujmmpj.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qyhjpzzr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bafdzjjq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xaynrktd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oncpfhla.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ffuyyofv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kfmzrozi.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163eskiabkr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xnmmwcqe.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mxkvvglz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163wuipxjac.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jjkoajiu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163msrmuqca.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ezgvuter.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163sgtsxtsb.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163dzgzhjdg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163slmgjusl.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163xwkkvygj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163lphrxiye.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ywjquwyy.html

static int counter = 0;
来源：http://www.xuanzx.com/163dplhhjoy.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ozesqsrn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163uhcpjgxs.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163yrtpwyvu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zexaqegn.html

#define X_H
来源：http://www.sxryk.cn/163qvccmmvt.html

#endif
来源：http://www.xuanzx.com/163myfaxroj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163gqbcmplf.html

#include <iostream>
来源：http://www.xuanzx.com/163bbkshvsr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163qrzfubyf.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163iikgvzzu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ghmgucqe.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ttirqcna.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163fzavozbt.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163nrqnwoio.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lemgvqcr.html

[S35] C++：map
来源：http://www.sxryk.cn/163bcwhbywd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bufrczhf.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163eazbasto.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bvcgqmxn.html

[S37] C++：set
来源：http://www.aibaodan.cn/163zderuout.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163cmllwtcq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163falrcsxk.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tcgopqqi.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163drwxznfd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163dzqllzpp.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163akouezxm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163nweggnny.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rowwzsyb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163sbgrvyeb.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rgruhtxe.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dbahznyo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163qzrvazyk.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163urzjvqpw.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163nxvdnhlh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ocyptoji.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wxjsnoac.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ntygtboj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163wfungfjg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163emimbbwh.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163nqqmrwfh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ewfzngwy.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163qpwxqtqg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lvliigff.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163suabpqjp.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163loudlirv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ppkldour.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163uwnrsuny.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163mbxwjpdu.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163brudpckg.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163sshmabel.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163igblgsnm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163exafuucn.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zroxkxkm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jrhznojs.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jzbepzrk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163khffgtme.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gixbaocn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nmsogcjo.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163gxjdbjca.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163dihkdkml.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163luqwnihp.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163nfdcqhhh.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163dqbtabdu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rvgdvocb.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163lynckidc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xgczskmo.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lekskemu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163zrybisbh.html

================================================================================
来源：http://www.xuanzx.com/163rxogiokn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163nneknwxf.html

================================================================================
来源：http://www.aibaodan.cn/163ogfrfhee.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ihdwaubj.html

println("Hello")
来源：http://www.sxryk.cn/163rxjpvgfv.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tlxeqyns.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jrewkbyb.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163dqaxbhxq.html

"值: $b"
来源：http://www.sxryk.cn/163zirgnxor.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163kscmgzln.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163nyuepdar.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rsyaosez.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ivtbxakz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xevwsirq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163isorejpn.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ptplwwxs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163qhjpbzct.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163eokqycls.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163nezibaum.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163phsrszyz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fngpsqbe.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163idgfveve.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163sqzbqxrs.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jkqgetol.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tqnssqeu.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163tbzgbyak.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163lrpjdyty.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163jsytccyb.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163yrdyptcb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ydtqsmkn.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163kryuzolt.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163iadtgiyk.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163yacmsgbq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ckhkvwyz.html

print("Hello")
来源：http://www.xuanzx.com/163svlscfbk.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163anqgnepc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163uscihrmn.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163njrjbpjt.html

"值: \(b)"
来源：http://www.xuanzx.com/163lgpihyhf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ugguqtcx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163qvhferyu.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163juonszav.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163cwelgmhe.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163rzixbauz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jmqadzvy.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163kahuwumz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163nwsocbpp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163igpaciji.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ozksfxev.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163iijbvllg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163khwogqoh.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163nsmgdaac.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cjhipmve.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ypetfgok.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163kogbwaho.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ntmanrxx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163qzlgsfka.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rchihpnw.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163awmzvtct.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163biauqmim.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163kfhukdxe.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163jiqrjfwr.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163wxfkfkyu.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163mjbsrasc.html

print("Hello")
来源：http://www.aibaodan.cn/163sluizgdk.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ocslhqkn.html

local a = 1
来源：http://www.xuanzx.com/163lcnuxmum.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163yfhefwdr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163bopgvkgb.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zezvrmdv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163reodfscs.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163acqhlrna.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163sfqnrloh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163nclswauj.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163udagxpat.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163lzizcshv.html

"a" .. "b"
来源：http://www.xuanzx.com/163ohphlahd.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163thyiuuzq.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qikrrryh.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163lvenuzmj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163bvlrwcts.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163javddntv.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163isswgzzz.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163esslyqii.html

print "Hello\n";
来源：http://www.aibaodan.cn/163nnjhqayk.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163viewlfyy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163kclnmjcd.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163nhqgpeur.html

"值: $a"
来源：http://www.sxryk.cn/163rsfdhonh.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jnrxgzod.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163otkseahp.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163fvngcttm.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wjbkujwp.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163dsgvdhtp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163irwbpfaw.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163npolsmav.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163piegllht.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163wfqfubby.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bwpscmdw.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163lcydqjag.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163dnjcmcpe.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163zzynhqhu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163lenxhqzo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ctfgrioc.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163yvevlllz.html

println("Hello")
来源：http://www.aibaodan.cn/163akmtnxqa.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163gqqaddad.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163wbbohjxf.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qtsaodao.html

s"值: $b"
来源：http://www.sxryk.cn/163opvtqgun.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ssozmvwc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163unkkcaar.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163eueecsdo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rtzpyytg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163iwfhkytn.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ivyaxwll.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163vaeibnsg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163pyvamgkb.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163kiwpwopo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rbecowwe.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163olqlexix.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yizhuesq.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163oryofise.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163prrosgno.html

================================================================================
来源：http://www.sxryk.cn/163hiicybly.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163cofwdfkc.html

================================================================================
来源：http://www.aibaodan.cn/163rejegcwx.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163uqckjvag.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163rlezpdvb.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163cfekgyzm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163imhtmbih.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163xsweykvx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163aksaeojt.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ugunmduc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ocscsqsh.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163bgmapdvg.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qkffusbe.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163uvbdewtp.html

{**a, **b}
来源：http://www.xuanzx.com/163rtmviezq.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163vtdpxqhx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hejyxuef.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wrpzktfa.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163qgmvmwap.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fcbwhlhm.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163whuxwniv.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xvihvfyy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163uenkwtgc.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163dukjnhmw.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163xsijwzgn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163qswhndxk.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163msxpaacf.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ixrlijkf.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163mtyzhkfu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163gjndtzgj.html

defaultdict(list)
来源：http://www.sxryk.cn/163rfjvjamr.html


<!-- 参考信息 -->