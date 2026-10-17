外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163avklykvy.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163avpbnjfx.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ljgkhaks.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163uonnldse.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163kekkgruw.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163vxtyxmcr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163sggyumqv.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163sxggorvc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163cesfrfaq.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163orzfnmbx.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163uhqwceid.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163kpqvbwcf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163reuwrjca.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qrwwsamb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163eqalenkt.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163leoikhyz.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163uzfbrbec.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163iedloqmf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163wwstilko.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163awdkwhgh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163vgomaxbo.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gtbrmrfh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163duqjakxx.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163igasizrb.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163exycooeg.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ypeztayi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nppxeira.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163iqhvatdb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ekoxwxen.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163issvynab.html

time ./run.sh
来源：http://www.sxryk.cn/163kwcimyzs.html

================================================================================
来源：http://www.aibaodan.cn/163peqbfprs.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163dgquwtua.html

================================================================================
来源：http://www.sxryk.cn/163smoleodk.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163leiothqk.html

#include <stdio.h>
来源：http://www.sxryk.cn/163pavxvvtt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163flbyevbb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163vkvfhlcg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163qhqefeuj.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163nhnrozaz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hilhyude.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gjacilvi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kargjpky.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163abxihaeu.html

strlen(s)
来源：http://www.xuanzx.com/163tasceowg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163eblqwdca.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163eenkjmnl.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163uwumvftr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163rgvnnuwh.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163pzokowqh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163gikletah.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163plviwevh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163widcfjly.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163kpjyhdsc.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163hsgbsakp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ioaowfxv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163uldhsqbd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163dcxzlboa.html

fclose(f);
来源：http://www.sxryk.cn/163fcsbmzjn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163yzeuxxck.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163wvjcsswb.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163icjjbaap.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ynsknwzf.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vwolzjwr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mmtlhrsk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163mckonjlm.html

(double) a / b
来源：http://www.aibaodan.cn/163uxvtvxhi.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163abwgxzxa.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ptomcvuf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163mxngcozi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rnfguwqt.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ghzxdxxd.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163amwgfbdk.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163rybgeiri.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ftozkuja.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hcvffjgh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ghildncy.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163zbfgqfrc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vbkuqokn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163trqjlssj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163cyvffncm.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163cnnkwygu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163hcngayvg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163pnqrdhhx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ceudoosp.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163padfjdwq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163udmzuaxx.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163awrfofkm.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qelelqzn.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163imsnpvrv.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163tepvfmoe.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163pqadynlt.html

static int counter = 0;
来源：http://www.aibaodan.cn/163cjdwncjf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163dwxomwxy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163koqyibsk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163cfzikvdg.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ffxznlja.html

#define X_H
来源：http://www.sxryk.cn/163jzcswnie.html

#endif
来源：http://www.xuanzx.com/163zgtygllr.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163bkyvqtvl.html

#include <iostream>
来源：http://www.aibaodan.cn/163djxpqahs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163epexpeyf.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163cxpwxirg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163yjotenyi.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mjnxupmt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gqqwjddj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163vxvacoup.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rdxlbblf.html

[S35] C++：map
来源：http://www.aibaodan.cn/163uzebcboa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ardmgurp.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163bplpgnaq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qxrxgecs.html

[S37] C++：set
来源：http://www.xuanzx.com/163tiaqhtub.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163qrlbmznt.html

[S38] C++：排序
来源：http://www.sxryk.cn/163caznlhpi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163btfjapoh.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vlmunmdt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163kmwntvyv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163fyqlhaxt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163vjubmofi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nkwwuybm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163cztulanr.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xwadtovu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wslcmmdj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zpedgnwd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zyhcrkvh.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163zoqtmuae.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163idyxsuzs.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163muqihnyx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163jlporamr.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163oyygffub.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vqesblfy.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163vuksvryu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163aenfaggt.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gaswiflq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163uzykzgch.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163oqokxnvb.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163auqqoqor.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hqbiijdm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163nbwfqcpb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163hmhfmkqd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163asduecby.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vzmiuulg.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163phfqqwif.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163keoknzaf.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163qrxsdalr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163feobyfnj.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jyjzalei.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163hcttbcit.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163bqbznpke.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163uwiqmhzw.html

[S56] C++：optional
来源：http://www.xuanzx.com/163jzdymbwc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163rqwpezzi.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wlthfxqt.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163rozmrkdu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163qpwmegyf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163sugyfpds.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wksztwjj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163bwywtooy.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163iurnixfb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163vdwdqvfm.html

================================================================================
来源：http://www.aibaodan.cn/163ztvwhels.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ehxlgack.html

================================================================================
来源：http://www.sxryk.cn/163gguvhwjt.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jcavexlg.html

println("Hello")
来源：http://www.aibaodan.cn/163ucysazmn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163xbvbpjcq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163pddubxnf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ivzzriaf.html

"值: $b"
来源：http://www.sxryk.cn/163qrjmdbzu.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163whgacceb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163kaeszodr.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163bijfugmz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fagbsfhb.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163osbgdayc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rjubsjft.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163djkrzije.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163iovqlseq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163colcfrjc.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163whabihuv.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163hztgwknk.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163dbuiblqc.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wjifptla.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163sttxcwxr.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163pshfxkay.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163suyvcbxm.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163azdsuczq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163aiqhfdbh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163rqqxurbi.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163vjhglwak.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163bizoowwc.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163qgnowrpb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ivuejigo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163pzqdzuqx.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163apxgqusr.html

print("Hello")
来源：http://www.xuanzx.com/163rfvlhmnv.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163aqytczsa.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hvegqzeo.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ltxzqakp.html

"值: \(b)"
来源：http://www.xuanzx.com/163avufuhai.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163txltfqor.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163seyuiuha.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163tkovbgzm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163oqgkuows.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163vtnzslrm.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163uxrnqdul.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163xkcdkcab.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163qybbiafr.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163tephchjb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163oadavhuu.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163bicqszqw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163gjwrzvxf.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163zceqdohu.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lupxyqcl.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163tgfhpdif.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163frcyttil.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163juvzgjdf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qbveqhvg.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163aaqlxtrf.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163xghttvjr.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163cchpebfm.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163oxebwexo.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163fmvuziei.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163geneqlmb.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163flhtqsbm.html

print("Hello")
来源：http://www.xuanzx.com/163stwqhwpi.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163naysorrs.html

local a = 1
来源：http://www.sxryk.cn/163ltgfiuya.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163vjymqpic.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163gcyiwnye.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163cvhoytif.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163wwuenpat.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163arphdnig.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163evdrvdxw.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163katfamxv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ucqnkxdm.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163luheezom.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qhwujvne.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163rucjeqwg.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zrdtnyjg.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163rhifbrrh.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163bisjjvgh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163okadrpfv.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gqubgedi.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163rmmftxwd.html

print "Hello\n";
来源：http://www.sxryk.cn/163reladcdx.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163yiskdcmx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163lddressd.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163fqsnpjwq.html

"值: $a"
来源：http://www.xuanzx.com/163fwisxbxu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163sqozfrps.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163dsokzyxr.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wsxkzndg.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fjqnmalg.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163dvtxrgnt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163bpstgrnk.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163epgbrzhq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163hehbdwgc.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ivncuvoq.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163beugqxob.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163awvdoflr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163cdvbizve.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163wnxbqbor.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163sdqoonku.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163yyfnbnsv.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163igenrjeq.html

println("Hello")
来源：http://www.xuanzx.com/163kwocbixe.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ohjyygri.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jjagqnpp.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163tcqdgypw.html

s"值: $b"
来源：http://www.sxryk.cn/163kbbylkfs.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163xgkmfiyp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rxtanokr.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qkpejrla.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lnlsgrcu.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163worewzte.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163tlguuwyk.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163hbvcwrir.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163tuxiczyx.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jwcsxgeq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163uciwmmqe.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ndsqocbs.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163qpefaiec.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bnyesfjm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dmkgkozi.html

================================================================================
来源：http://www.xuanzx.com/163avuhuugv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nurhsecu.html

================================================================================
来源：http://www.xuanzx.com/163zgimdzvl.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163kbcdubch.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163grljzqhw.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163yqxlmqpd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163pplqivqn.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163giubpkuz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163xnpbaeif.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163uswqrwfk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ceaznmfm.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163grfcajgf.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163eujarugi.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ciacaxmd.html

{**a, **b}
来源：http://www.sxryk.cn/163vibptpen.html


<!-- 参考信息 -->