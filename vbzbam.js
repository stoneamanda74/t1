外链999!wailian999！

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wbvjbbqt.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163cifehaip.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163cutznflv.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163sxdjnzam.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163bjozsopo.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jhnemvle.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163kalafolm.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163lzigjakw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mznietwc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163eolphgqb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nogljrlt.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xpjlosfm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bfeqevrl.html

[R66] 定时任务
来源：http://www.xuanzx.com/163atkrgejh.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163tojkgjsg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163lhxhpuoq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zxixegro.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163pbmjzwmx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163dejaylov.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kkoyfvgm.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163gzxfkspp.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163scftdmwj.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163edtjjrqt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163obpcxyve.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ewlheqrs.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163mcnocpeq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163xghihcrf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nkjeyiue.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163yravzjac.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163mvayhxjt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163nbzursno.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163fvwmnupp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163zrjubyjf.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163zllybuxj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ixobklkw.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163depimvfv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hfewaiku.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jwacieuz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163uspymjvp.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163sthfshbl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163lotlctod.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163sndblqcc.html

time ./run.sh
来源：http://www.xuanzx.com/163zwjxqyyf.html

================================================================================
来源：http://www.sxryk.cn/163livxetuq.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163gpeynggb.html

================================================================================
来源：http://www.sxryk.cn/163khzhiyuv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jufmmhkp.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nsvfyyhk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163xlbkcojp.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163uvjovmxv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163vnazqdsy.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163cinrqxpg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163cnuuffbm.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nmytsjkl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163leulykty.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gvsxpldf.html

strlen(s)
来源：http://www.aibaodan.cn/163ojbtrapu.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163fuzgnjdu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163jgfngxoe.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163dsraapeo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163elizccnj.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163dmshlatm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163yjtisvwz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jtyvqldb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kulyqydu.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rrijszgr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163gocjhxfi.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163iggqlvvw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ktakvukx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163nfxyznrl.html

fclose(f);
来源：http://www.aibaodan.cn/163jhiofqpe.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163drxdgddx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163liwkdhvm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163esqvlbzg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163qfrrvcww.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163cvvtpfzq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163gpgbaqpg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xjfzkfzy.html

(double) a / b
来源：http://www.xuanzx.com/163zmqtcqaj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fqtoxrds.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ykzrpmgc.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163llaazidt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hjmpolee.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hsypqlch.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hxbnrkcd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163sfihsyse.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163aaundozv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163sozziaqp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ackboijy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ngmkqxki.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rzfyashz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163sxywnacu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163tibyxwba.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163pipagxoy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163axjwvenr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163eplkysil.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163zicqzsxp.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163lwwmqujn.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163okkbicye.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163gmkllugh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163wlaquwsc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163jcqdgail.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dgjwogwf.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163zwmznxts.html

static int counter = 0;
来源：http://www.aibaodan.cn/163cvuoxgyt.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ohbcoyfp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163nxqozigo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163lkpcmazp.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zafsgoiz.html

#define X_H
来源：http://www.aibaodan.cn/163ljkkxidv.html

#endif
来源：http://www.sxryk.cn/163kewtayde.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163fvopbnuk.html

#include <iostream>
来源：http://www.xuanzx.com/163dckwhmwd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163aquxyltm.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163sbhagghy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cnfajaad.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163hvcmqjkf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163tifcryov.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163oscyjlfo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kfumvbyv.html

[S35] C++：map
来源：http://www.xuanzx.com/163mxykmqnv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kaehwual.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163bgptueny.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rgsfrisu.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vfwnhapz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163kmxgzpda.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fveoygkw.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tkgwowwi.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163dbzghgwq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163tqkgtdzy.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163cejnqvly.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163nqkwrorz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163heiijdlj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163pqpjlpzo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163iipxqyhx.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zyzzurca.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jwyabwyr.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163aivlrnkc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163vdihsoio.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vgbqjraf.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163heueexlt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163oofgpzxl.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hdkljvbo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163upwcsabl.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163dyfnkabs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163gjeqqnrj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rmmofepl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163nfjoekxj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163gjtaalbo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ircbgspc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163awbmivqp.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163fyfqiqvc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163lgsrpnju.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163rfbxvwrk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163jrznecsd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163dadaqbqs.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163sknqipte.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163puatznkw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163zykqqrlh.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163vxverswg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xhcjztxp.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163bkessicy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163dxptrczs.html

[S56] C++：optional
来源：http://www.xuanzx.com/163bntjojbn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163xxqjcnux.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ksqvzbqx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163qfpdzlqn.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163utawxzkv.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163csjiumuj.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163onpzgtfs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xqygfuva.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163mvpsniaa.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163kwawadpw.html

================================================================================
来源：http://www.sxryk.cn/163elaayari.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163mnahhwse.html

================================================================================
来源：http://www.sxryk.cn/163mnmuvyme.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163uazdkayc.html

println("Hello")
来源：http://www.xuanzx.com/163hhbadtyq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163btdbwwif.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163aduqwxla.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hrzfkmoy.html

"值: $b"
来源：http://www.aibaodan.cn/163ovgijwut.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zhyfpwjc.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163uupenajg.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vuizlkfv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hmnriqgz.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163aqgksmzt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ewtpczft.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jvmrocvh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163nbjlsqym.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163srepqjep.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163wigueikx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163nuwyllwy.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163jdfvwtgl.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163xbfgncta.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163raoytlzb.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163oqhyqdig.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jtpepxcb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163npfjxxwj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ggtkjkje.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163sqovwtsh.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163zmgjfmjh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nghtltyg.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xgxvpvnk.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pghmqlhw.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hhrakulz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fdxcohwg.html

print("Hello")
来源：http://www.xuanzx.com/163mjhjicsq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163lafmbmbc.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163bqtrfmjn.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163kopazgcq.html

"值: \(b)"
来源：http://www.xuanzx.com/163jebtwmkc.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ootagisy.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163leujpgaw.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163dmtcijhj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163bzipwtpd.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163xecdkpfh.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163eafvegnr.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163gmzautuo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dvfxywmk.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163wfmrfpbd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ttjaspei.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163svtvtvmj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163hsftnkjk.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163spziwswf.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163txsxfpqp.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163lhnjjqnf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163lhvvnbrs.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zpwghwpa.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163uqzsbpbl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163mlnyeuip.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163gvizlxne.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163qfrfesvd.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163bobwdlmz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163lrodcnew.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163bnrducqz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163tkjjzxfb.html

print("Hello")
来源：http://www.sxryk.cn/163pslgwfua.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163dtqzngqu.html

local a = 1
来源：http://www.xuanzx.com/163xssxtahd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163hzhqrpbl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ayhqoeeg.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163kpmwtfnz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163tyzorzgu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163xwpognfe.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163gmwnrzft.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ptjvlfdb.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163uzvqsuja.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ehyxyayr.html

"a" .. "b"
来源：http://www.aibaodan.cn/163tbrdromv.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163qgxyavjr.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163iifdxviy.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nxanczwo.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ycagevbk.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163gdrohiim.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ohengtge.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163lobkaxxv.html

print "Hello\n";
来源：http://www.aibaodan.cn/163iuhmvmly.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wlazcicz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163tdgexbcl.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163shueyxox.html

"值: $a"
来源：http://www.sxryk.cn/163zpfdlxzx.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163hgvoscyd.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qhztkciv.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163sfauaacu.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ijwaavnm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hsvzxkpx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163bvogaury.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163rzwqsmyi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163lsviuqbo.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163nzfcwrnj.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dvbdfndz.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163udntzcro.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163brksgijq.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163cjibisub.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163kepccdew.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163btmjedsp.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163dpudkuqm.html

println("Hello")
来源：http://www.xuanzx.com/163lifqmsxt.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163wjusxhlm.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163cyxlarxl.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163pebmlpjb.html

s"值: $b"
来源：http://www.aibaodan.cn/163ypuggjap.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gbclwgbq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ovmgxodi.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163luezmkbz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163wfnjajqm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kzexhkrs.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zfifympu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163bwsdkbsf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163fvbxtviv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163aocsyqgt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tvuntovd.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163xgynqgxl.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gdjkntui.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163wrdztkkg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163alenqrup.html

================================================================================
来源：http://www.xuanzx.com/163ehpoeipm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163syxverqn.html

================================================================================
来源：http://www.xuanzx.com/163dtzjiavd.html


<!-- 参考信息 -->