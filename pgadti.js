外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163sqykmuxx.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vuevwqli.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tbjdhalb.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163evngeysk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163cwfldhkd.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163dawqufvw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zhrvgqho.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163jypmhwlp.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163mmywhbjw.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bxmvacgz.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163wttzgidw.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vunuebxf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163evlrlxtc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163nzgbkthr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163fvflotvi.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163seozdvvp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163wsaryqeg.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163prlktlas.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163fdpjmssv.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163qgbavrfl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163xvnsxxqh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jnvxgdwk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ussafgvh.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tfczqlvd.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jdvhskji.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gytialrn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ebizxmvj.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163kqhrzsjw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ydabbyzr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163mkhlltnk.html

time ./run.sh
来源：http://www.aibaodan.cn/163zxjqwcsf.html

================================================================================
来源：http://www.sxryk.cn/163nwxodsjf.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hkjjcpsv.html

================================================================================
来源：http://www.aibaodan.cn/163nslznfio.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163gtttdbwy.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vzbmxelm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gltatsyl.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cwqmyzfn.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163xwvsjsky.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ibxjbxhi.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163occsdock.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163anngkfjj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163avrafvvp.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tjcagxdm.html

strlen(s)
来源：http://www.sxryk.cn/163qlvtplko.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ydkjxjzs.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163klxwyogd.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163muhntqto.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163doojpdyk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163osedebtv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ntgtdcve.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163kmvlalvm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163dhcclrxu.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163lvyynepe.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ytgezgnw.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163qtsrsxxd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ieudxmum.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ghjquwph.html

fclose(f);
来源：http://www.xuanzx.com/163kvtxsnnx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163misdfnwi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163fjvwndcy.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163hnjpaawx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163dgocmbvo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nycekbsw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163clbjuxti.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163grhpyewd.html

(double) a / b
来源：http://www.aibaodan.cn/163rtddtbdt.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jlvynnpt.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163psmdczhm.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fsdqkzas.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163gtptvcwx.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163solvkxks.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ijsaexas.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163xdxwknfh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163icwhutih.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163nehbccem.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163aotluiwt.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163iothrrzs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163vewfiigr.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163gytqhvvk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lfrfluou.html

[S23] C：随机数
来源：http://www.xuanzx.com/163eiqaiofa.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ezrwdzft.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163jtobgonr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163iaxxmrvr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163lfnzrfgk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163uinccklu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163gyimixdg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163chuwxybz.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ymuohopb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163gdwsonlu.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ymyxmjbr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ejbuvmbb.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163aejtbpdn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ymcdfamr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163impdsjke.html

#ifndef X_H
来源：http://www.aibaodan.cn/163nzrnwdzs.html

#define X_H
来源：http://www.aibaodan.cn/163ljoqjomy.html

#endif
来源：http://www.xuanzx.com/163axbwgmvm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163eiyxhyyk.html

#include <iostream>
来源：http://www.aibaodan.cn/163whqkisgb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163streykdx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163rqeowulw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gvgyodjy.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ptcooblr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163fnzbzukx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hfnyrgnb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163feguxmfs.html

[S35] C++：map
来源：http://www.xuanzx.com/163yydvvbox.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bxvuiwrp.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ksaglkwm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163idnivzdb.html

[S37] C++：set
来源：http://www.sxryk.cn/163wuyoephx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163dvlicupx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pkddxauw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163afmomknk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163rasxxqqv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163sgkuqwet.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dknnyrzm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gnelstjr.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qpeuciyv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163cegykkaq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163fpszalbb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163fzmclnkv.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163srahfxph.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163asnttlra.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dhrtziwm.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163owdacdgn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163spibhoyz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163tjofcwpb.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163kkliiboy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163mmvbjcqn.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163zpjtzalm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ecfojupi.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tmcagkfj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163qllvodcp.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vixzvmvm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163igvfampy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163pfyucblc.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xpwknfge.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163agmryjvr.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163xdjcyvzp.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163yhcooodl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ifqrndac.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mgjcgprx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vomaaemo.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163nkrvavwy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zdcgktvl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163unfjjvqr.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gcayilhw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hovnokqe.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qsbvcvbb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163hpoocweo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163wumzmlpo.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ojbwqwrk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163vvpbuqvp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163zqqjaocd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kvvttupq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mbgnjzof.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lbkonovm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ntbjwifh.html

================================================================================
来源：http://www.xuanzx.com/163xzzlfazj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ikcptmcz.html

================================================================================
来源：http://www.sxryk.cn/163cydxnvxa.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zlrgpjuk.html

println("Hello")
来源：http://www.aibaodan.cn/163snhxmcaf.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tdejzbrj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wconhxgi.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163gzsxjrck.html

"值: $b"
来源：http://www.xuanzx.com/163yymxudct.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ucconvgd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163lvngveqz.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ezrtdxax.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163yiyufuzi.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pcyehtvi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ioqlgmoe.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dzepqgyk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163earxgmal.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163eniptgdt.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ewnvapru.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163nsedcgvk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vxwtgjrm.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wewsrunt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163petykgib.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163sjtjpzzi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jsgckrac.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hboyolat.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163axnbwolw.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ysegaium.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ibihgivv.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163rvhjffup.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ddzpgvzy.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163qibihqpo.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ipdktfdu.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163qadnowkg.html

print("Hello")
来源：http://www.sxryk.cn/163iphhkaet.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163radnedzb.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163locdojsh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ymbetiqc.html

"值: \(b)"
来源：http://www.xuanzx.com/163dxkwgxvn.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zdfqkoid.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163oijtfshg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jxuyfado.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163spjxzkfa.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163zcltksit.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163fguoluct.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ubmdands.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xlvgzrpe.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163kvjrkfwv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163abhvsmgr.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163mjtkqpkx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163abwccjrb.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uamqywso.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163bozzbjzq.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163fvusnujh.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163xwsenzvj.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163dwigriuv.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ggpbqlml.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163loaolvyt.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163tyglxzgn.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163armrnwua.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163fehimcjb.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163xoejwqkf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kebnvljl.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163sbudcmac.html

print("Hello")
来源：http://www.xuanzx.com/163ddwnyagg.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163cwpkdoaf.html

local a = 1
来源：http://www.aibaodan.cn/163zygiwift.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ybvxzbii.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163swdfmgyp.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163nkhtpflr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jahdjwpa.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163oaeysglu.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163kzuouhjg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ekncnoum.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163pkbrctxp.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163uabvvpjz.html

"a" .. "b"
来源：http://www.xuanzx.com/163fxwzgysr.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163udtvscwd.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163zxdmuttl.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163mfmxzzoz.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163qycgodim.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163olocylor.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163mofihoea.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163bweqslkj.html

print "Hello\n";
来源：http://www.xuanzx.com/163yyiylqkk.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163idabonum.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163jpgockmj.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gqqsohgq.html

"值: $a"
来源：http://www.aibaodan.cn/163fmnbepug.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163fatibkpf.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qjkoezxg.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163wthsrgyh.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163srdfzrst.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163riggeygt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163rawbdedl.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163kbouhssp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gpwxfjms.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163qkwazojj.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163drwzmskh.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ivyqmifa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163sizxpjfq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ejzowkcy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rxkjfliy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163aepeiibh.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163tleadfqc.html

println("Hello")
来源：http://www.sxryk.cn/163jrotkztp.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163negihtum.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163tnqhbaxf.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qecdmuxo.html

s"值: $b"
来源：http://www.aibaodan.cn/163jpozylxe.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163fgcygyxn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rzuvfszr.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nnvjhiar.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163aormxvpm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163xjvllajc.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163tqdfztqy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163krhebtif.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163xsjjvwty.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ejxcdlxu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163nmzcccmm.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163sibyxybs.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163qhzbkbfm.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bamzpxai.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163rxsjvgmz.html

================================================================================
来源：http://www.aibaodan.cn/163hqgejrrn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163riwtjasz.html

================================================================================
来源：http://www.sxryk.cn/163bwdirudw.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lwflyyng.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163vbfisjjc.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163orumbkcq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163szdyurab.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163cqfvhkji.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163jdpbniya.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163jmaizlkp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163esoetkqh.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163jcyfwtmb.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mfpyrvwk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163nivclxee.html

{**a, **b}
来源：http://www.sxryk.cn/163iqqtbtgg.html


<!-- 参考信息 -->