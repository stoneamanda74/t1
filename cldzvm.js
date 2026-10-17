外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163aggwqwpo.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ueqiwlaj.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qkccouau.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ljwhfnmm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163pazqkdlp.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rzkuxwld.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nhkajxon.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jxgkhwml.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jdvlliex.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163zjgvnklm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ixzweczz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163uhmsdnwf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163dmnuvjim.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163yskremtl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163llpwgulc.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163buyudyti.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163zjqvgzue.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wwazflxt.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hnmzchrr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mlnuqcjm.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163pisjamml.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ayyupqvm.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dcglvipc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163stvltuwq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163wmudxklb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163umszudmi.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ycajixcl.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163qooavjlm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163yrcnvuta.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163thktbtgx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dqnvtwft.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163nmvzqxdb.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163uvighlwu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163pvxpecfi.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163beezzjyv.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163wtwcudio.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163yddgewan.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163zmauarzy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163laloxtac.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ewkqskul.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163eosgdvqc.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163otqtyiid.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vombcewf.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163hngqauwz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163gwhevkyh.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qwcuvgsb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yofsjtrt.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163oeyjsgji.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hjundocp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163cfotkypu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xrsfwfnq.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163shuapliv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163bjvhutaf.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kyihnuzp.html

time ./run.sh
来源：http://www.xuanzx.com/163nusaxvhf.html

================================================================================
来源：http://www.xuanzx.com/163zdkrheik.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163wrblqsaz.html

================================================================================
来源：http://www.xuanzx.com/163rmdpjpeh.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163qcofdggu.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163tsoqrday.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163puxfndkt.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163itokagnl.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tkzejjcy.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163dyetkbvd.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163rrmghate.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163qvmmnbdh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163lxfegmws.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163vqeyhpuq.html

strlen(s)
来源：http://www.aibaodan.cn/163seeukzcy.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163huvbhbyo.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163msxjkrap.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ytlbeuvc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163wbkqreld.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163aeyqelhe.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163cfkbmotk.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163edmetxsv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163iwmaargn.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163makjipbp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xwxvjmfd.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163cuhvomkp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163uorxtauh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qkqstwjr.html

fclose(f);
来源：http://www.aibaodan.cn/163mujlfiqh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163jimedynu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163decrjptv.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163zmjzneqf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ofzfgdrh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vslxljke.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163rhrntrov.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lbafdurs.html

(double) a / b
来源：http://www.sxryk.cn/163utdyymfn.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hnlmcnsd.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163bcciobxf.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ngmjtrxq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qyakfpiz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xgwwyldw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163siynxabi.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lfysssjb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vpdnbabd.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tkqmoxcv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dtcpeaxs.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163maivmdmn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ziqmlmei.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163jawqnhzz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163opviyfho.html

[S23] C：随机数
来源：http://www.xuanzx.com/163xkvcmwge.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vazwzsvx.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qndtshpw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163cgligrdb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163symqjqej.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163beqjrddt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163jkxjqrha.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163sfxtczko.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xmsetljd.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163onxddwcp.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dhdmiplw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ikijixkm.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163eycvzrrl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163yqbmsupv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163qtfqxsvk.html

#ifndef X_H
来源：http://www.xuanzx.com/163fvuylqwq.html

#define X_H
来源：http://www.xuanzx.com/163xbpnxqmm.html

#endif
来源：http://www.sxryk.cn/163cvoxwolh.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163isgyrpta.html

#include <iostream>
来源：http://www.xuanzx.com/163zudmowkz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xbsxdqdg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wsfxchqe.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qqhhinpf.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163eosegvaq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ypprecbl.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hzmxgmue.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vqiobknm.html

[S35] C++：map
来源：http://www.xuanzx.com/163wzjjevvo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uoqlmprr.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163sxsdajhu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lfihhkrx.html

[S37] C++：set
来源：http://www.sxryk.cn/163qdisvalc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163lrlmtkmw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163iawhibmw.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dwfknunf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163lccheehz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163furcxhwu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163fjnkrlbf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163cyghabqf.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ghbylfqh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mxzgildf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ycovfxzq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ljpvxhud.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163wrbryfvv.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163nhswicpv.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163amyxslvq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bvpqyitr.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163spkkfrtx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163mxehciek.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163offhkuxo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163yvukpxey.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163bkssknqe.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qwvkufds.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163mgvfghcs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163uqylnxxt.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163itexehkx.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ozaqvkqx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163xwwsgvgm.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163dbdpptau.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kkeuwtod.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163gdmnhrxq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163snpfcxgc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163jxddyoqq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163gtmpqfoz.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163dfzitweq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163wvvtyqhm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163azaqztgl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qecrwjzr.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qptnoswf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163iieuaqqn.html

[S56] C++：optional
来源：http://www.sxryk.cn/163mpecjlwe.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vvkyiuzs.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163qbrorrdi.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jkplphwg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vepnvhzy.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163nmlconmu.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xkbnggyu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163evmchpdo.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163raekiuie.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163mxwixkpi.html

================================================================================
来源：http://www.xuanzx.com/163zbrfttrv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jlydzvle.html

================================================================================
来源：http://www.sxryk.cn/163mcsvredx.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163yitogrdz.html

println("Hello")
来源：http://www.xuanzx.com/163spblsyfr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163anvmzdwi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163qqtvsvag.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163vgtprenw.html

"值: $b"
来源：http://www.sxryk.cn/163mmncxeai.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163efmrajhi.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163lzfdqvlm.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163jqwmifod.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163suvhtltm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lggpgbdx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163xpnmvyth.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163nxkmynkm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163xzfzccdn.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kdxbfwrr.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163rrhixxgn.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163aqepdjhi.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163mvfsqqcz.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163juwzpeub.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163nvukqhec.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163yrqwrfbm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fkutxrrc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163uajikhyd.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163mjpcshiz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mzomsacx.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163fiwznsxh.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163pduhkaaz.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163hlaktlot.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163mdxfcgip.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163abgitwyd.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163siosuztq.html

print("Hello")
来源：http://www.aibaodan.cn/163lmwdzyow.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163tcxoxzzs.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163uqmboxro.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163phdfgtjh.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ttxnkygr.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163waitbumx.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mffvwiew.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163tkivlgei.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163wgujxxno.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163wgcijpns.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163avvzsvgf.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163miqrhbfy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163azcojnsu.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163xpfoarxh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163tcjwivok.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wnldebdk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163chxfjnhv.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hpnuhesu.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wpdekjjq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163gzvkbuof.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163mnlnoury.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xkttjihz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163oywkgubv.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163agfrliew.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163burhtsch.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163nckwrryw.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ocpobxtb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163zdvixshn.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163fbapmvun.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163sidaoddo.html

print("Hello")
来源：http://www.xuanzx.com/163xaiifxhf.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163nnungwes.html

local a = 1
来源：http://www.aibaodan.cn/163qgzsqyvl.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gsysypqo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163pykepfmw.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163kbyfofvi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ywzxnsct.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163mubwejxc.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ahpclrlq.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163tfqnwmia.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163qwfyxutq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163lfkpesxc.html

"a" .. "b"
来源：http://www.sxryk.cn/163bmtzxqia.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163crodkujr.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163mgwvetjn.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163urrexkaa.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kzjrhskr.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ugxuvdgk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163fcjlqkef.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xtmvegrv.html

print "Hello\n";
来源：http://www.sxryk.cn/163bljfader.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163euitohws.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163frzzcvlk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163macrledr.html

"值: $a"
来源：http://www.aibaodan.cn/163audhbuqj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163anqnvjtf.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163rzlvwfnm.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163uakkwypu.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pvjzivuk.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163inkkdekn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nhplwvhv.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163gauhtjgj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163fevzeygr.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gfpoarte.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163utccnwmo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163pckauxoa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zsbbhqet.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163eyisfrou.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163rkmeouhk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163zrztqszw.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ghlvpbcn.html

println("Hello")
来源：http://www.xuanzx.com/163xqwqwgdy.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163dovvytqn.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ytmgwxxs.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ygmkglcy.html

s"值: $b"
来源：http://www.aibaodan.cn/163lgfzhzil.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qwoqydbj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fbtifidw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163kgzcxcqc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163mhggvhfx.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163rgqjmqdx.html


<!-- 参考信息 -->