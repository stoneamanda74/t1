外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163runxcmte.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163bhydyjzy.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163hzeujouq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163nkmovzdq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163oenfqxno.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163keybdkdv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xxgptrjq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163zecvtong.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163nzdezgmn.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163vrldknwz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mxasjbov.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163lvzeyulo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163nsrxdmxw.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163fnliwzjg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163moltgruf.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163pbinimtg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163auyuhkdg.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163cheptfsd.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163clpopcca.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ixwpwfzt.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163oeuruiwv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qaiguyvp.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163thafxvsu.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163nusklfrn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163gyojzejf.html

[R66] 定时任务
来源：http://www.sxryk.cn/163puawvvzs.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zqmwemip.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jekmahcw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163zucequru.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dctmbwct.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163lsowzoic.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163nmzpbljb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ocriltzx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hoiaamxz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163iktzcjkj.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163gwvcuixw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163hryyadhc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163oenyahnn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163aevjjuqn.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dmdvsmys.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163lswzfgnq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xktuktfv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163hdtdsofo.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163zyrbbxto.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163yrnufrmm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163flxpmmyh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gbcgdhpw.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ubxygejg.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rccyfbaz.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xcjknhsu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163elbxzskf.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gyxjzkeg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163kamrjvzy.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163apnczlaf.html

time ./run.sh
来源：http://www.aibaodan.cn/163sxwkemgm.html

================================================================================
来源：http://www.xuanzx.com/163ftbvjdlp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nftcbjbn.html

================================================================================
来源：http://www.sxryk.cn/163epnbtxsz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mdwnbfed.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hvbpwunq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cevqcvdo.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163okxduqzn.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163oyvtpsyb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163yqacdcad.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163cbilluqi.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ehfvbxfj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163notxlgvv.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xjknylgb.html

strlen(s)
来源：http://www.sxryk.cn/163oigzmvrz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rpkrjvxg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vobifjwl.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163lyzwrudv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163cienvtcv.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163aylficav.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zrnctkzb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163raejbjty.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163drnqnsvw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163kkqezzfz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qmvzbysk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vwwbllib.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163jpaskgwt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bbgqiqlo.html

fclose(f);
来源：http://www.sxryk.cn/163evlusiec.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jidgkhlx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163jwcrrgen.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vmivmrmj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163hmvcyyak.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jjttvfiq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163okjhcevy.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ixvrdsye.html

(double) a / b
来源：http://www.xuanzx.com/163xivjkgup.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163wphqqxkt.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ldekkmqt.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163yejafjek.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163wxagfwuh.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xbyqrvdq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163onsiknkh.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fnqnrcco.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163twtliwnm.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ochffqio.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ductggwd.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163pysrvufo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163wugoksct.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ckazetwv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163hghmsefh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wmutibqw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ozksjibv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163tqhnnmhf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jppwwitl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163isvbyxoa.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jvkktfnt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cbmkykks.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163riawwdqb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ryjpgass.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zyjiyvwx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163eidursoi.html

static int counter = 0;
来源：http://www.aibaodan.cn/163iwwsfzha.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163fsmipddn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tcqzivkq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ebppoeom.html

#ifndef X_H
来源：http://www.xuanzx.com/163jrztspmw.html

#define X_H
来源：http://www.aibaodan.cn/163onvwszrz.html

#endif
来源：http://www.sxryk.cn/163tkbovbtw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fadnkhxy.html

#include <iostream>
来源：http://www.aibaodan.cn/163wdlgscgr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tpntemfw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163eotmekvc.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ldavlwsg.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bxgxokmu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zikuvlbb.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wcrolwff.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xydeaxks.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ayfruwqa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bgcbaper.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163spqwveuj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163sentyqil.html

[S37] C++：set
来源：http://www.sxryk.cn/163ahyonmmp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mdkvnbig.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zycifpcv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163yxfemzai.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mbsuuqth.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163fqrlkfqk.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rgtbdjnn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hyyynmag.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163usaxclsl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163kffnvfwu.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163thksigqh.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zvhvhrye.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163oneodsaj.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163tttpphej.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163xacdcnth.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dhjagsyn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163aqnhlmpv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163pvkkippw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163axejagjo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nkimguud.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163mhmbhogn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vkajtkcc.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163hyruyojb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mrdisnvl.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163dtptjhij.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163hcvqlyqb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vucrufih.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wizoskzo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ziqpajfr.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gdutagmt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ejszzpsw.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163wuenlhgo.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163bptpqsua.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163icbcllqq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hnicotbu.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lnpxzwex.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163whakarla.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163csledomi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dehbffzq.html

[S56] C++：optional
来源：http://www.sxryk.cn/163sdgadboo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163onbcqyoz.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163cjzyaojx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163degnafxd.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163idqrwree.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163spsymarp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ozehzsql.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tfajrtqq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hibyldtl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163snnbvevb.html

================================================================================
来源：http://www.aibaodan.cn/163mxwvxixw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hnnxpupc.html

================================================================================
来源：http://www.sxryk.cn/163narofcsf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163beqxkjvo.html

println("Hello")
来源：http://www.xuanzx.com/163nqldrwvt.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163irucgqze.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163yscxjfoh.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qanmzvnm.html

"值: $b"
来源：http://www.xuanzx.com/163xwgcvpcd.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163fgcgbgcu.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163pbezskdn.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163odawekcn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163hxeelqwi.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163egplxdjn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163hfgxqkcq.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163numsycey.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163uspgzwub.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xbkodhly.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163pgvdaijg.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163inaqgche.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ampcsizz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lnsjvzxx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ewozscjf.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ifeemjvr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163txbbqlal.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163vymtnskq.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163pjmzetkc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163eihirwku.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163gdrgxkiq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kurkaiox.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163lamuwoxv.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163znmabgdt.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kfhwlbtm.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163uomaytla.html

print("Hello")
来源：http://www.sxryk.cn/163mocfuoet.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yqiroaff.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163hxkaerax.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163yghmvrtn.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dftppgvi.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163uvrphdxw.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163cdplchbo.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jtxkmexz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qwrdboid.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dsiotjth.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163hrpdkemr.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163znbclbdf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163szbyimnw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163rjknughv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163noqtgihz.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xtdsfiez.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163tksuphqc.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163izsemqfv.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163sksujnvc.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ybqbdnem.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163owavfgrh.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163cnyufcog.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163bfagzfkn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163swlcnhuh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163shidizsq.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163casbmbhi.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163koweozmv.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163kmhejdhe.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163kqdqhxuk.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163uvcpoyou.html

print("Hello")
来源：http://www.xuanzx.com/163aqhkwtbd.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163wsyqvzom.html

local a = 1
来源：http://www.aibaodan.cn/163fnhgjweg.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vgzeftdr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163jfnrjgxh.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163svwfmbni.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163mdiygekc.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ykegtmpv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163nmtscvvv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163quovndet.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163kbqklfux.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163qospqhmp.html

"a" .. "b"
来源：http://www.sxryk.cn/163hwqdguok.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163jcweuvfi.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163bhaaskov.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163snctwisg.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163udhnpzid.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163rgoaiudj.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ccfyormk.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ahgjoijz.html

print "Hello\n";
来源：http://www.sxryk.cn/163jikbabqs.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163mayrjpib.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163bytmuhsa.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wodiiuio.html

"值: $a"
来源：http://www.aibaodan.cn/163zqnhmpyj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jdpltwbt.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ijfitkgi.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ufbcfkrj.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163yajltpwu.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163xvqjoubr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ixmgixma.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163gjgdwvjv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163niwlukjz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163tvftiupj.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163zjrybsjn.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163orgghhcb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163qvrptpvw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163habgxrob.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163oamhynyb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163sgykzhdz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163zhnhhvkk.html

println("Hello")
来源：http://www.xuanzx.com/163tvcyknio.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163fzwimfvz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163muntebci.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163xahoiaar.html

s"值: $b"
来源：http://www.aibaodan.cn/163tirggdtn.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163gxkiyrnh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163wgftrkdq.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163wybhnwtm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163lnvdiwzu.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ijzfdidw.html


<!-- 参考信息 -->