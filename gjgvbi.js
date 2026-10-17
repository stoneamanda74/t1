外链999!wailian999！

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dihohpph.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ymtkokdi.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qyrlvkqg.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hyrlmnwk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163vqkiczod.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qrwzqtko.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163oygpjpxz.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ijyvyczt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163emtftudb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163vdjhiofx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163efnzvirh.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163tbsavgdi.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rmvakgdu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ashdqrxg.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163iosrvhbe.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ehttykcm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163faohgdcr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163mvqlplhe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163eerabdjf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163itargmaw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dtpcfqyv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bytsqwfj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163egfsycjv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ozarmybx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jmrfungs.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163uylwqwmc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dvhwcoar.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163iikufdfu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163jpvzdwyi.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163wggggthn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kyeeczfj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163fwyyfrnq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163mudwuoam.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163dvzwsknt.html

time ./run.sh
来源：http://www.sxryk.cn/163pwxhwzra.html

================================================================================
来源：http://www.xuanzx.com/163jtnvsjcl.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163gyzgzinf.html

================================================================================
来源：http://www.xuanzx.com/163dlwnmiaa.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ykjvjtxw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ltkbwuys.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163rldlfvlx.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ekwafzwr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163nrbfvvpj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163icwuvvzq.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wjpkiilr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qjmyouun.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wrtsjgee.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163zpeapjjr.html

strlen(s)
来源：http://www.sxryk.cn/163iqzaldjo.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gbnekzst.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163suigmjpb.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163hrxmtfck.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163bmoxtbkt.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163eanbdice.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bxuxumya.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ijfmwcld.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163jfnmgitg.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163rtabmfjb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163vkokytvd.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163eezpivpo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163mlskggyq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163baizwgip.html

fclose(f);
来源：http://www.xuanzx.com/163itnecvnz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163urscqwnh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163tlbnxxet.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163lgurqrxx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163iwfauudw.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rvzpdafp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uteqtdkn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163csthgvsq.html

(double) a / b
来源：http://www.sxryk.cn/163kayqwsii.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163chbfvbxr.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163gqbwbrhc.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gdxdzpji.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163lsahchyy.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ppwppnja.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mdyupfdj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163xnemnjyu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oseorwhl.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wwadpzbx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ckgbcumm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zsnyrvao.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qicbnnno.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163rxiptbbw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163nmifkgxl.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163gikfgkki.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ipcxlgim.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163yvgjnewz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163nodpafhw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163aobfebze.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vjogskix.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163soaieiod.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ynuznqzm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163djtmcjyi.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ejlevhky.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ozqijhwi.html

static int counter = 0;
来源：http://www.xuanzx.com/163wgwutznm.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163bkwbjlzy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gqkjbili.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163nmpyzhgp.html

#ifndef X_H
来源：http://www.xuanzx.com/163sixobggl.html

#define X_H
来源：http://www.xuanzx.com/163ddytmfbl.html

#endif
来源：http://www.aibaodan.cn/163lozolfgm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lzpiiidr.html

#include <iostream>
来源：http://www.xuanzx.com/163powawnvs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gpjilcef.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kzmidgiv.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163yntjbtxx.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163rxquqprb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163epdueosb.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163sdssowpy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zvifztyb.html

[S35] C++：map
来源：http://www.sxryk.cn/163kubvsexn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pnnfknte.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163bnqiqibx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hrtuorsf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163czggqgfo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mavgbbft.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hkwocuke.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163gxpsbrej.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qwyxqlks.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163qetwaaok.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163fokxkpap.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163tkwjhyfw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ufztgosi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163zybpvtcx.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163hodypogj.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163koeuqecc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pzoetgbo.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163fbjnoyij.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163lskujybh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163anfubqdo.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ywzvhqno.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wqzofbnh.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163eqxxdtzt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163qzeydwkd.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ynctvyzp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pelzfybu.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gtbtamdh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163eyiogfno.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163eozjlytt.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qgolbgsp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163cejcnvfy.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163zlbcznpz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163goeixfgt.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163btsrybpm.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xzmiugnx.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pjbuubvd.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ywfiwgpk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ddzwycih.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163msowzcdn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rhhvyzyw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163kijhgdww.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163mhirupep.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163myexxiah.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163yxiggote.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163aupfiikq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163whfujrcs.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163cplincju.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163amxqjwaw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163sqrqoofv.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163brbgbout.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ibgkkums.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163fmtvhyqv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163rserffhd.html

================================================================================
来源：http://www.sxryk.cn/163jobcwysl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hymxvqnp.html

================================================================================
来源：http://www.aibaodan.cn/163hcxxwnps.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ffxkzytm.html

println("Hello")
来源：http://www.sxryk.cn/163lhdiasqm.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163zllseicz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wseuljrr.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163vxpnpchw.html

"值: $b"
来源：http://www.aibaodan.cn/163rgdvgjtt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163lddmtzse.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163nqwntvox.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163clxkxyum.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163equebuok.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163yinwiuvl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163oxfgzcdy.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163lbxtfjtx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163mijmfjgy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nzfryhqd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163khossila.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ynbfpvzg.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163dforffdz.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163syaisiye.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ffrynthw.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163xlplggak.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kfrlnsql.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lgujqglz.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163qgokljvf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xbcgepud.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163mzgdsbzx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ffapdotk.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163dlibgjel.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hihllcge.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mmevbegq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163famagsdd.html

print("Hello")
来源：http://www.aibaodan.cn/163clttzeku.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163wgrkment.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163gcpgixom.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vmtcdwee.html

"值: \(b)"
来源：http://www.xuanzx.com/163yfjnqcih.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qsgisvxo.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xinsihwl.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163jrxzpbig.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163rwscqeco.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wxfyqiko.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163gcsrlmyv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163zutdgwhq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ukjqxnsi.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163cinkehhk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163sbinsecj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163yqmgvxuq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163nwthhimz.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ejcqewnl.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ywvqvrfd.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163lqeaympm.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163itduknhm.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163vyyaaslu.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163nzehsqac.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163xphtapcj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163bfxsbguh.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163xlvswcec.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163arpmxpdf.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ilrwruyi.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163upefkiko.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ygvgenkh.html

print("Hello")
来源：http://www.xuanzx.com/163mubsareg.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ttxpiuft.html

local a = 1
来源：http://www.aibaodan.cn/163yyvjckdf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163gzvhgejs.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163lutwkyzp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ywyxfgws.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163rsnoarjp.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163hgmjrwpy.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163cbatsagv.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163zcfdvutg.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163eykhmsan.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163dtwjhcrb.html

"a" .. "b"
来源：http://www.xuanzx.com/163satdvnju.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163fycfinsz.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163cbxrngcl.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163dtyslxtu.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rgldajub.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qpciupjq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163tnuleusd.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163bevxuwzv.html

print "Hello\n";
来源：http://www.xuanzx.com/163ukzhnzdv.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163xwieozbx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163hrkmlaww.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163crgizjun.html

"值: $a"
来源：http://www.xuanzx.com/163ejlxzcdq.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163xxqnwyed.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163fjqsofha.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163yvxhhrzc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163rmkdwsuj.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163uzvxnybn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wvhuajwv.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163hrbsfcni.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163yugqunfa.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163udmwucvj.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163pqlykrew.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163flugdieg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163olyqeves.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163uxvtccnw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dlfjldis.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163efyflxmg.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163npkobeib.html

println("Hello")
来源：http://www.xuanzx.com/163uituiwwo.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163jemhmoji.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163llcynply.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163osbtbonu.html

s"值: $b"
来源：http://www.sxryk.cn/163slwgqsfe.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ieeebiyp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163eezxzzrt.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163texxapiq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163steyycsm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163cqwexksx.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163oxwsmiyf.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163vluwrdfg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163rcbjrhme.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163tgcnxkjo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kynlncxg.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163abuitthp.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163twjxqvrl.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163jbamksfq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ggrlyrtf.html

================================================================================
来源：http://www.xuanzx.com/163nrbzvakw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fjkubkth.html

================================================================================
来源：http://www.xuanzx.com/163hisljxii.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163xifebbms.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163dwqutjpf.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163kisykott.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163anixzwfo.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163rqvjkozo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163umvnffry.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163paivmkjm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163hcxvpgam.html


<!-- 参考信息 -->