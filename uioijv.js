外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bihmbdof.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ecdqtzgc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163tjequsvo.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ppuisxiz.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ihjralec.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163kwscrxak.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163sixzddog.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163mwkdtyxy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163apihwnug.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ernhdzyq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163mpqekzgu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ahprquoh.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qdeiahlj.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cqacjebt.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ehjbvmbe.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ectsuong.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163uowrbhrg.html

[R64] 结束进程
来源：http://www.sxryk.cn/163smhqaizk.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163yenhtrke.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163vlfoiywh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163raymctqp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163lyyqlilv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rnczexyr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163yeuyzmoo.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163iaqywpvd.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qwypfmrm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163hxjfpsgf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163hkytyqem.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gommnxau.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163qtrcoghz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163gsmukdul.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163wxcaxafw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163fjhfaxly.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xkbnukze.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163pgawjpyv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163jyaukcrk.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163bjbuztob.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163eyypathw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ufkvediw.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qkudicwq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163nwstigua.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163csrbtjwt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qudxfomv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163lumppemb.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163wfkrgtyg.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163kcfdmcfi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163epnlzbnp.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163epycihzr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163skgbuurp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163mitzdglt.html

time ./run.sh
来源：http://www.aibaodan.cn/163epgxwgrq.html

================================================================================
来源：http://www.aibaodan.cn/163bojjlewp.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pqtiwxah.html

================================================================================
来源：http://www.sxryk.cn/163xqxjzxfm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163anulkzjl.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vmvymvjl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dmyhtfwg.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qymsxosx.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jrvdrqdq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163knhaxmsr.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163cryqzdrv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ixijyslb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zeakmpnb.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163eeayrfmo.html

strlen(s)
来源：http://www.xuanzx.com/163sqwoezge.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ybymgiju.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163nbvvdyor.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ejzyeydu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163aibvpqgp.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163uykyenud.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ekcbwcba.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lbhkljoo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163nylhfmjz.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163jwmdnchf.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163qiumgzef.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ueawhytb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163dofffccr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163bwspuwta.html

fclose(f);
来源：http://www.xuanzx.com/163fskvdpmm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fgtfreru.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163xxaocifs.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163efgwqura.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kxkiahet.html

[S14] C：枚举
来源：http://www.xuanzx.com/163zdhotpzt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163yjoftofm.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163irupcvpt.html

(double) a / b
来源：http://www.xuanzx.com/163bpmepxtf.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163dzuuvbxd.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163whiqyvrh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lbiicmgg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xyuxxzlk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163fizkntih.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163jknnnkjt.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163azuyhpzt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zolygdum.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zmrnjujp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mdouiazg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163evvksrzh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xjgslfmy.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163tocoretu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163lzpkbthi.html

[S23] C：随机数
来源：http://www.sxryk.cn/163wvaqrhyw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163owgxovbv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163fykyrnsl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163brysflzp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163saqqwxzq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163khfsmqwb.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163mkzdrhyq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163dakjsarr.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163modxcpoa.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vbadqdzb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163amaactiq.html

static int counter = 0;
来源：http://www.xuanzx.com/163nlgssgup.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163uamryjxc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163scgblevk.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163eagzpngk.html

#ifndef X_H
来源：http://www.sxryk.cn/163tuecbzsm.html

#define X_H
来源：http://www.xuanzx.com/163svixbnuw.html

#endif
来源：http://www.xuanzx.com/163fdpoxohg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ztjdbtfm.html

#include <iostream>
来源：http://www.aibaodan.cn/163bzoctmfc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163txlglqfg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qhbzruuv.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163dxvlhhfs.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163arypozeb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163yemwdtoa.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163pjgjsjyo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vukrodco.html

[S35] C++：map
来源：http://www.xuanzx.com/163zmdpmbiz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163newkmzoh.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163biwweyvg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nmmhxrcs.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ivnmldxc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163mddlzzyf.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vmjiyxsf.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lplkwiic.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163lpjtmbkx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163cpuseynf.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163krtuurfv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163dtndnmpy.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zixbiwsk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163jfpvdcph.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pyjlvlao.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ymxehigd.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gbdifyez.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tamqoyjk.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kvxutumv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163nqugmobw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rcmljlyz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ljwcurgg.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hmxasvnk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163pjqkdxib.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163hmqakoac.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hhxvuoyl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vypzhzps.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163scyhvvsm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163itjebvgp.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163rfavwynj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hjblilqi.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163bndtahlq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ffeizwha.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163quwzqboi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163lnhvfhma.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qzptkqax.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xayxvxki.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fjdfrjnw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163tcbuldux.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163kidexyyv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qgtedmzv.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vpxybhhy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163cvtezlhv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nmvefilw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163fltazrts.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163otczslyo.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163uqryxtxw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163zxuzjdoa.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qgcqnmtg.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163qlbsamjy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163rqqazkld.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ippawrmz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163yalwahzj.html

================================================================================
来源：http://www.sxryk.cn/163yicczonn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163eabuumqe.html

================================================================================
来源：http://www.aibaodan.cn/163dfnfofuw.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ouyaqefv.html

println("Hello")
来源：http://www.xuanzx.com/163ksednufv.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163drsksoei.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163txketauo.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163stkipajq.html

"值: $b"
来源：http://www.xuanzx.com/163znkzwjkc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wbojixnx.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vvfyuvrw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163sdhqmbxl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163oprklahd.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163gshpqyfr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163dijqvkgq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163laehitvy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163khhwslhp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163qtvhxqrj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163jzehyvny.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163hqaiuzke.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163swufflze.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163nzwqxyfb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163fefqgqic.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163joekbddu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163kqqyyueq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vqanddxv.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bdfzhybc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xdcwzdyu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163grbxqhvs.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163mejyamad.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163tqdtpgxt.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163doqipuee.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163uaqzmcvj.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163vwitsfbs.html

print("Hello")
来源：http://www.aibaodan.cn/163dhhivmty.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163yqhszbpo.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fpuwtghj.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ypszivtm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163clvioehs.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163skhqmnqq.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ezuvgdiq.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163revqrvjj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163acullkdn.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163fwvuwmie.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ltdmnjlx.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163jhnazsqv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163wqfvnqia.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163tpmzolhl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163nthowdoq.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vxzqvxgd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163kxjapyea.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163fsjujskj.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hqydsmgf.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163kvqzzaro.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ugnrbysz.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ntemhmzz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163rnwffcrg.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163yfjlyufs.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163oietmfdf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163uxzeajlb.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163munhshqu.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163zijzudjy.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163esvlxhhr.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163brapmmqr.html

print("Hello")
来源：http://www.sxryk.cn/163qchssatx.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163bxfpywsi.html

local a = 1
来源：http://www.aibaodan.cn/163vtyhkqgc.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163riaztjcx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bxnsnvto.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ngbgsdnw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163viuehsmn.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163jyfdvxyu.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ipzkjtza.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163awejscfw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ukhqivmv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163pjhlhtlv.html

"a" .. "b"
来源：http://www.aibaodan.cn/163yeudpxmb.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163osrrtebd.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163bybieace.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163vozxtckr.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163orjciifz.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163tfukpjsx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163hxqdpbso.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163gcqidgvv.html

print "Hello\n";
来源：http://www.xuanzx.com/163iuzsmtag.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163rukemcqg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ijarmysm.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163yoefifbj.html

"值: $a"
来源：http://www.sxryk.cn/163sxsgyhgb.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163mymynifl.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ccigksue.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163hdzifbvx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163efosyxej.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163hizzzlcu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ivniubrb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qqfpvdim.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nvnaczox.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163vghwepzn.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dfpryokj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163azrlernw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163wipyimjl.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qwdhsdys.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163iuyisxwm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163oenkunel.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163cmxsmmls.html

println("Hello")
来源：http://www.xuanzx.com/163fuyfvbdc.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163tmcvpwle.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163eyqhodir.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ivnhqehn.html

s"值: $b"
来源：http://www.aibaodan.cn/163mrmvkycf.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gwhiuhzm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163gzpdoysj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163qespxgwc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163drqycqwb.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163thtxqwkd.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163hwuyjvxo.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163zddkuvea.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163sjmzonti.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163pvxzxgyj.html


<!-- 参考信息 -->