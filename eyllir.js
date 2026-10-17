外链999!wailian999！

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mlqdzmjl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163gzudwgkm.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nelawwvt.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163bkvcjjbl.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163stdafybl.html

[R64] 结束进程
来源：http://www.sxryk.cn/163jxjikqzi.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vibgwukh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163yllchepy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163kngzlsed.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163uvofbqfp.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163tivgpxcq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163rbyosmdq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qugmcpii.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163vdilwozb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163hctorpgr.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163lnhdzddp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163zkzaafsw.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163zwdwsvdo.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163mmbpjtlr.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vseexryt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vilwgbxe.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163hbqgnaim.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163amnrnvha.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163upcvryld.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163oqvxxyuv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163uuaedlky.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tinpoyut.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163uzxkkmke.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pajxabva.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163yrudtimb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nhaqfpsc.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163neknrpbn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163nhcankns.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163etsajheo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jjclqdtt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163yzfdjlnr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163afcewcmh.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163qiiaedaw.html

time ./run.sh
来源：http://www.sxryk.cn/163zvvgmwue.html

================================================================================
来源：http://www.xuanzx.com/163nottvdij.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tdjqlqtk.html

================================================================================
来源：http://www.aibaodan.cn/163dywgcjrk.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163gkmozehg.html

#include <stdio.h>
来源：http://www.sxryk.cn/163libivjrz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163imgteuku.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lioylnvx.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163npbnwvdz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163scrvpvsn.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jofsuuzm.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163micubwlb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bnqelanz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163sivwetlt.html

strlen(s)
来源：http://www.xuanzx.com/163huvakyyk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qbrjilsj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163rvaqlkjq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163baqbmlgu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163opyrzsse.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163xutmmxit.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163phxntqhy.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ysfdichz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mddwyiik.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163heqzzxen.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ftzmmflm.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ohrbllfz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163gxbwmhjh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163niyslpai.html

fclose(f);
来源：http://www.sxryk.cn/163ogtxirkv.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163vkmhsecm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163lquilaff.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ccgzfsml.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ivzqgocn.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dzsacwrg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hodrbqae.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rnjcgxuf.html

(double) a / b
来源：http://www.xuanzx.com/163zidptxrm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163bfwhpksd.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163guwdquqp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163vbffksfj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163lojoclkg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nnoxiean.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163txvedply.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163iksgexkw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pzbsbjvc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gvjvtyzb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tcmuaznw.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163cpfewnwa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163kxndvzaj.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163niavjzyq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163gtfrppco.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ujkiwibp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163abkqtehv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qqrqhkzg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163dsdqfinl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mjhkoitc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163mdnrmkhx.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163eqwixpsd.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vxgpgkot.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ivfrxsmn.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163emxmever.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jbnqtpfx.html

static int counter = 0;
来源：http://www.sxryk.cn/163qvszgjsj.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163updhhqrm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ysszlmde.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163khlogwym.html

#ifndef X_H
来源：http://www.sxryk.cn/163rcqxhsxh.html

#define X_H
来源：http://www.aibaodan.cn/163rkevgzit.html

#endif
来源：http://www.aibaodan.cn/163jscfypng.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mkdgftna.html

#include <iostream>
来源：http://www.sxryk.cn/163hfygtnzf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gmvmykwu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163acmpmdrg.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163lddzmbxl.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163kgqmlfqq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163slvzpyuk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163dndvlamh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xmlwaubp.html

[S35] C++：map
来源：http://www.xuanzx.com/163ohqqglis.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hwffjexi.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163pvbpuuub.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jahfpnir.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ggffbweg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163riyfmfwr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ueiueusq.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163laqnxzqp.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163nfowxbys.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163berrdlyr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163slgebojb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163clstoplo.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ckekbsst.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ylxylbyp.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163bydmzxxj.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163okjhlvin.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163dyaisuhn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lahgidyt.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163logvjvyt.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163sxyybzrk.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hshfjdif.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163hrqyhktb.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163namrrzhs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bchgfkhq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qfhdzgph.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mvijosdl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163anhrjrcu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163luyzbmad.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qnlkkobl.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163sibbspkm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zuzzuwyq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ixqbtlho.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wjvyzkjz.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163evhwpfpq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163smicftxt.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163atubpnoz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163jhjvmojn.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ffjveaah.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vhnumzbc.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163gmqeprwu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163yoffcroc.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163livlniyk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163yrzyjsyv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ncotvhlv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zemtxnxr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vpnnykyj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pvprujjh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163aofqdkmu.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163gqyyvbnz.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163tfbktdol.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xrvejoqh.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163aymncmap.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163vnmfhqge.html

================================================================================
来源：http://www.xuanzx.com/163glquzeeu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163cvxrrbke.html

================================================================================
来源：http://www.aibaodan.cn/163ouvltqkp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ktzgldka.html

println("Hello")
来源：http://www.xuanzx.com/163nqnpdjmx.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163jnxszycu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163mwmsuxan.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163sqstapbj.html

"值: $b"
来源：http://www.sxryk.cn/163tntfnwmt.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lcedjiaq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tswzrmck.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163paiszprn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163toscegcz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163bontcorz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pdmbceuz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163pdovporp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163lxeruxuh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163yrbxrthq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ovtrprin.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163tydxsksv.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163leuzjmww.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vuvcadly.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163hqhihxwq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163durzlxmp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jedpahck.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lkxdknyj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163mkxlbpzp.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qektpill.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rqrrjzpe.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163mgahbzgf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ijybmtdc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163mthyrlvd.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163nvcqmdhe.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163zeazgikz.html

print("Hello")
来源：http://www.sxryk.cn/163cbvrsknf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ekuyixoe.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ftwsteiy.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163fnkbkzfj.html

"值: \(b)"
来源：http://www.xuanzx.com/163tdudbogu.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163asmcjbkg.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163fluhanlt.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163oruwrypj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lbccirjk.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163buypojmw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163wlgltxeh.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163rixkkyql.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163madstihk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163imhbpjmp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163axdpppqh.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163mgiklzya.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163leloooln.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163tghulvpd.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163fzqkvmop.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163lcynpclk.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ivugrdes.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163vluchjcl.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163vycglofd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163kkeuycvc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ikxnlqxj.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163weoqgkhs.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163pvuplsme.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163dmxlnudd.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163aojeewcx.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163rzkwrrwt.html

print("Hello")
来源：http://www.sxryk.cn/163ldoemvml.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vjcdrjzz.html

local a = 1
来源：http://www.xuanzx.com/163awicqxqt.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163lwjkxihz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163riulxknh.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163crjhestp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163urbqwkro.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xuatgihc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jqewdlvv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jroywhle.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163apmvpslq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163nytljhvx.html

"a" .. "b"
来源：http://www.sxryk.cn/163ojralapd.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163kmnihwfc.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163yszxshbp.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163gnmeygnn.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163gifqgaps.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163rildctcu.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163oebyksik.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163bhjvfeas.html

print "Hello\n";
来源：http://www.aibaodan.cn/163iyqvykli.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163nozteqvc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ywkvvsin.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163eodhmuli.html

"值: $a"
来源：http://www.xuanzx.com/163povtkcjo.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163tvtnvyqv.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163srckmlws.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163pvwvghoj.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ybdalixt.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163pfbmbesc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ozdinmjh.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163xboelbjq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rlxpjyce.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163sessugbf.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163fdcnfgne.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ufdoqduq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163exugyhhh.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163cspwkkme.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163utciwtez.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163guzrpewo.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163svazafbb.html

println("Hello")
来源：http://www.xuanzx.com/163yjqyjhus.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163kubfjnei.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163oyyngtnf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163mulkwplg.html

s"值: $b"
来源：http://www.xuanzx.com/163gohhowok.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163bhtxbfdt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163pndqwdpb.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qpdapemv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163sxkcrrnu.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163tzccsyqe.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163rbqholdo.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163roihhiqm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163jygephtg.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vsvqansm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163dpkvqmco.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ppemezgs.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163atqvvyqk.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163uimpceil.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ibgvjpro.html

================================================================================
来源：http://www.sxryk.cn/163cmpcanlo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ulabvdyf.html

================================================================================
来源：http://www.aibaodan.cn/163wtrqerse.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dfrhlgeq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163gukumiyi.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hxswvvnn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163shbohzin.html


<!-- 参考信息 -->