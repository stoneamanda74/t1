外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zyaprmbj.html

[R66] 定时任务
来源：http://www.sxryk.cn/163puaivaxy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163jlnwogsj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163tbjojaqs.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163gfislbwi.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qxjqskwi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163rehxbgef.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163uxeaewix.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ejsqrght.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mnwxngul.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jdzvbvvi.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fikffymm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163wegwgwiy.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ieqczyas.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163xnkjygsr.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vbdbhfae.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163fsmdcdmb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163gasscuhr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163htzugsmo.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qwddaevu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163tuejptzl.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163sixjlymn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pmarrihr.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163oqaovkyw.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163dvdsljfx.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163apbrqymy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163vvnovifi.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163caabwhtq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pvbggujk.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163juvvrmng.html

time ./run.sh
来源：http://www.aibaodan.cn/163cfstnzbo.html

================================================================================
来源：http://www.aibaodan.cn/163rwvxhrhn.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jzeiynvk.html

================================================================================
来源：http://www.sxryk.cn/163zhchrmzi.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163fkfnuypl.html

#include <stdio.h>
来源：http://www.xuanzx.com/163rtsdjwyo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163tssidtco.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163rqvcxxky.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163jxfjzrif.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xlvukfyg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ldffgkoh.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rblkcqdt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163kslhxlqd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163lkxssmkd.html

strlen(s)
来源：http://www.aibaodan.cn/163jpliwffe.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xhuzhvop.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163tsbbnevl.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163juwuegxb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ansjohbt.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163fdcxsafo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163urzitaiy.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163onpxrqix.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163lfmwtstp.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163dkfzbvly.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163uttpaksm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163nbtnkwpk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ecyafrco.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vflqicna.html

fclose(f);
来源：http://www.sxryk.cn/163btgphmez.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tmxyipmm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jtlkxeim.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163qzzpeeze.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163uvzgnmej.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163osinzvme.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163nxmumqcj.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ctknjdpz.html

(double) a / b
来源：http://www.xuanzx.com/163ilzczlmi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163irxkxedx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jakpicwu.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ggbhbykq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wzhleynj.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zeunghfs.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163khlmawre.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ugevotdq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ibkvrplj.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pmrkjgge.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nmyjmabi.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163avauobmf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163pydeinid.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ffcsqheu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163edllltpw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163vejmshpl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163iexdirbc.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mkpagkle.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163efelpwte.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163fcqpuhsw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ohprapwa.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163yqrguvjq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163zmxwwzbz.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163oadbgmjq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jmfehiwm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gsmbspte.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ncdgmtqi.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gkmkkfyl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ptmdrxke.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ktqlbbxk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163nkjmueya.html

#define X_H
来源：http://www.aibaodan.cn/163gvqilnke.html

#endif
来源：http://www.xuanzx.com/163pxbfewmj.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163pnwtpltb.html

#include <iostream>
来源：http://www.aibaodan.cn/163mnbkogrf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163waldhiqx.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163citfblmc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163wokjehge.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163sqceygxn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jjrydaxg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163peqtynqr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mhnxoduy.html

[S35] C++：map
来源：http://www.sxryk.cn/163ykjcsrno.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nriseowc.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163haedtceg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163duipnrew.html

[S37] C++：set
来源：http://www.sxryk.cn/163mefgwlob.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163fbwlpfxq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ipqukpou.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jbowdtew.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zvxctcun.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163zsdyncnd.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163vsfgnjkn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gxvnekch.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lqwxgodv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163hlbekfmq.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163khknhvnp.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jgtiymgs.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mjnccuyd.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163spypujnf.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ebpkeuyh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vifxeevl.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hxnlnnot.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163qzytnope.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163tbsymwlp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hvjvywrd.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163pzxpnmrv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163jogqvwrk.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163bljtiukg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163nkohosty.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163cbkeonyl.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163khtugbtx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163alwdtxmn.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163iodzeuxy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163requqnss.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zcxuhzaa.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163iykjcaon.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rcqdblir.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163uixtfgcb.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qwqwxnhm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rvgoyxzo.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163elnivbif.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163toifiuvf.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163vwfvkupf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163tuuxxjmk.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hieefxjs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163fgdxgddi.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163slutzcxw.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163yyflseiu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ystpqtgh.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163kkgrnvqa.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gcycwvyj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163hdkmmnrq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vqpmowgv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163oncelopy.html

================================================================================
来源：http://www.aibaodan.cn/163lwadkjpx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163sndeqbrp.html

================================================================================
来源：http://www.aibaodan.cn/163rsluovni.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vujwsqkt.html

println("Hello")
来源：http://www.sxryk.cn/163cjhwnbsd.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163iqmwcfhw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xrsmkzdo.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ftlvpdnu.html

"值: $b"
来源：http://www.aibaodan.cn/163cbwlpelq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zgtutnbr.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163pyzgdbzq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163prnqismw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bxwuyzgh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163bgqbgale.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163jgfuygdr.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gwckdwfr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nqhpdiaq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163sxdjopww.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gubjtqkm.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qsudfipc.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163kwrrxmrb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163xzcuoxvl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vbfhlrjj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ovmcddiv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mzcvixod.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tzhybhzs.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163abjseauy.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163cbfvfjln.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163bkjqauzo.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163oksuirhp.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163bknckjys.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163lbznsobe.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ddsynsiv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163euzywovy.html

print("Hello")
来源：http://www.aibaodan.cn/163vymrzlkr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163odkowsxr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mpuylajq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rzvofmer.html

"值: \(b)"
来源：http://www.sxryk.cn/163fxvcmkrn.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hglauwew.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163whezbvkb.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163sirzwzzw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163xqutmvsg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163uwqcwbxv.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ikvopsrf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163cyzqtmzu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ueajdrab.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163vvpmtkjv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163yfjjuefn.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163yzeknwrj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ynrchbmw.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163apwdxkur.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163gnftcgna.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163mgckqzik.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yuqfptsq.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ddxdihhi.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wvmvqcxi.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163msahgbgg.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163kkpxczqv.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163rfkshchx.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163besmpkga.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mihgsrai.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163vjaazyfv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163nolenlkp.html

print("Hello")
来源：http://www.xuanzx.com/163ymuwmang.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163cirkvtpx.html

local a = 1
来源：http://www.xuanzx.com/163gqwcsvla.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ynwkktim.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ezhwnfqj.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163baixrwyw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163iqztcvit.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163lqaqnqcu.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163fulehebo.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163tgupppxp.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gdbsbwkl.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163xpqsphih.html

"a" .. "b"
来源：http://www.sxryk.cn/163pcpagvqr.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163dketcnya.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163xomxsrbr.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163cdktrbsh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163bwssigsi.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vhdizkjc.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163znoxppms.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163joebkhzh.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bnqhthus.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163mhwzyxqz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163vyvhqzrj.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163aqctahwg.html

"值: $a"
来源：http://www.sxryk.cn/163hvazvxfp.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163gduumaov.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163uqjiajsh.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163fxhscuee.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163aqcgfgni.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163xckggqrf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hzcshntl.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bdhysqzl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nzedelbt.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ishpyuhp.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bfpyijbw.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163rjhibwav.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163lyqzukot.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163yzhhvyal.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ztokhzgs.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163nopzvice.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163slfdvcui.html

println("Hello")
来源：http://www.xuanzx.com/163cwmswtty.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163iyamxnqr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163cuchtcde.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163jfwvyglb.html

s"值: $b"
来源：http://www.aibaodan.cn/163ykpridux.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163dweppleh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163qufxmajt.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jzhamprz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dulxwjhm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163imosnpli.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ybweslsp.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163mkbaimjz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163orujhowu.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hhgjacvv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xxufkjop.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163srlceqgp.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163vhohkoym.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163atnrixqm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163yajxvelv.html

================================================================================
来源：http://www.sxryk.cn/163ihidflxa.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163iccrriuj.html

================================================================================
来源：http://www.sxryk.cn/163olxvorze.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163jqvunopi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163vdozixri.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163csucvzgk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163jflfhaus.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163nrxbocqf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163mcajwtce.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163tthrlgvu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163weotvqoi.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163hcuhemuc.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163afbwqknm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163eiydiztk.html

{**a, **b}
来源：http://www.aibaodan.cn/163jqudaeue.html


<!-- 参考信息 -->