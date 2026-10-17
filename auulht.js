外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lqbzyyld.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163bilcmmlk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163lqzjqnam.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163seodadab.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ilgustuh.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163mduxynal.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jmbltukr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163aebjhyts.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163afiusmxw.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163otohwkcu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163uqlsjpgb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163oyoufemc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163uqecrslg.html

[R64] 结束进程
来源：http://www.sxryk.cn/163eduzpdra.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163wlvarosv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wqnplsxd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ixorrqfs.html

[R66] 定时任务
来源：http://www.sxryk.cn/163xqadrkpn.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163progphxw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163unhmjkwi.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ojizwhko.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jeggihot.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163uwncoyye.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163obocitbu.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163xndglgxc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xzecjerh.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163fbhjwzed.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zleasqfx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163tecykwah.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ljnpivvi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jnbshiss.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hyossqxv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163yzyxmvmt.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163tbqttyea.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dxfecvou.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163wfxpwczu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163egilsjpa.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163fjgiebmd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mgbzbqti.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cndevjra.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yqkftpmt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163rovqoete.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163rgvezsmd.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163aqmitqei.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xlwfbvfr.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163nixbkjdt.html

time ./run.sh
来源：http://www.xuanzx.com/163iccnddru.html

================================================================================
来源：http://www.xuanzx.com/163mysadlqd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163kjlgynkc.html

================================================================================
来源：http://www.xuanzx.com/163fxnuukac.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vlagofac.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163tbazhfmh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163oqxvzyum.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163edqqlqzc.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163fedigjst.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163etqdxirn.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163opcchktt.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lwyhlgcc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zjvyqwlu.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mxfhqslk.html

strlen(s)
来源：http://www.aibaodan.cn/163eijeyoly.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163rtmbmqjr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163erwnyilq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wvjyytao.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163metdoawg.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hcmvdnck.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zcxsycjp.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163megszmkx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163exvmulzf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hwfrihib.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163nehiaddw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163kbysddbb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rbrathpt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ppfmicjc.html

fclose(f);
来源：http://www.xuanzx.com/163sskwkjip.html

[S12] C：写文件
来源：http://www.xuanzx.com/163uriggwbb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163boeqfpah.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163sgvcosem.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163xocxogqg.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jdrbuxbn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jmjemiks.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163pbhtzele.html

(double) a / b
来源：http://www.xuanzx.com/163zctfjdsb.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163komsiubm.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163oilzebxx.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xgfoqqco.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bjbihydz.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163stsonggz.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ihaivgpr.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wnfjthxt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bhnoxkti.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fwcvrbzt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wipctufn.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163nzdpkvbr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163kcqigksp.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163eweswegq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163pjfwvsba.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nbnbmrrs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163pumzjjhp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163dwmtrfny.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jksurepg.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163yzzjeyib.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lrahsimj.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jhcsemmy.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163cefddirc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wxqeyhzv.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zbdbwmth.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163nfaedocv.html

static int counter = 0;
来源：http://www.xuanzx.com/163enppkgrn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gbzhpqzz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ajwdetsc.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163blzmcvlf.html

#ifndef X_H
来源：http://www.aibaodan.cn/163oazlgzgu.html

#define X_H
来源：http://www.aibaodan.cn/163yimoobwf.html

#endif
来源：http://www.aibaodan.cn/163ueczsmjs.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163sfobbxej.html

#include <iostream>
来源：http://www.xuanzx.com/163xiybnwmk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163wgqxzvtw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163mkgibqga.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163eqdfnwow.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wtkoxcvg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gakncewa.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ikudmuaa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ynmyrkiq.html

[S35] C++：map
来源：http://www.xuanzx.com/163hekqayxk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zsjlilvy.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163hbszgcut.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gpqeaynp.html

[S37] C++：set
来源：http://www.xuanzx.com/163iyyiomeb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fetwwddv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163djsjcgsa.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mljcioyr.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163pbwpzxaf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163feppntqx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163oswmsizx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163hwdylaib.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163gkilsfst.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163urgawlgz.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vguprgwr.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tstjvxdh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cybptgbk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163melogbln.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163izlaafzs.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163tmsopweb.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cpfvnidn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vrllayjf.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163bwkmasii.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163bxseppag.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163jswotejz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163lzerfzhu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163lckswpil.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163vicekrjw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163dlvrrjqp.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wytortje.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163vupjesij.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163zjzmshno.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ltfktjsz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163pgdtpnxr.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163oxqfjcpx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ujfrntmp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163efkkdjdb.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qupzbtab.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163vzlvpefa.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xerdijfj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jbmalzok.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163miogaxcs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lwambkbr.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rcnevdsw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hmltysxr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zxreliqt.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163epcwrkbh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ytsmpkor.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163tbqmxhli.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163bwehoixd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ilorxkxr.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163faredjrw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163njnvcgkc.html

================================================================================
来源：http://www.aibaodan.cn/163pransobz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jfiewrod.html

================================================================================
来源：http://www.sxryk.cn/163sgrjrkvf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163uxtyiyow.html

println("Hello")
来源：http://www.aibaodan.cn/163wnoovvci.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lphlfyaa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cypnoily.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163uvonngzx.html

"值: $b"
来源：http://www.sxryk.cn/163gioddxbq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163piknirjs.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qsivnkev.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163rjfcbhxu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163rpfcahra.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163rllsccxt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wxemnavd.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163poecwppw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163rwfdfjkk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163lszcyova.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163nmahywwi.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zgwypaxc.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163lksyidzt.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nabvwtxh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rablmtpy.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163nrsvrahh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163qlxopdlr.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163auihhzrm.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163hkxmczho.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163htweydld.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dxvhqstf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163fnoswizz.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163zgvgdlud.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163fcxpkdod.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ptyctltr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qyaskfuh.html

print("Hello")
来源：http://www.sxryk.cn/163harhhoya.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163yebqugec.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163tguycwzj.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163drsufugn.html

"值: \(b)"
来源：http://www.sxryk.cn/163dwfbwbje.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163objuqhdg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163zqvermwk.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163osfclnju.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163xjgricej.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qvqgcoxy.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ekdtxswd.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bedvqnke.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163lbysryzg.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163grczalrw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dshlxtcs.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zlifwlpc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jmkvrygx.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163qlqztdam.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163tnaxqlsa.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163aiehpwlk.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163xwqewgue.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163huredvis.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163gedikeyc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163snppkkzu.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163udjrnlnx.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163orrwngmp.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163pepjecnn.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163atgfclcg.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163nmiygdgc.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fzusinbp.html

print("Hello")
来源：http://www.xuanzx.com/163wjvymkhf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ysgvrkoh.html

local a = 1
来源：http://www.xuanzx.com/163coxsjzqv.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163krbxecdr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163blfiaqkp.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163iuqjpsml.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163pfmufnyo.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163dbentyxu.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163unnydyct.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hkjfarto.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gmtdywwb.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ydacprib.html

"a" .. "b"
来源：http://www.xuanzx.com/163tqihkmhl.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163lrlqqrun.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163cuwjzfvh.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163grkuobud.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xyuijzpn.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163jjwspbff.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163eociqlye.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163gvsxqteu.html

print "Hello\n";
来源：http://www.sxryk.cn/163jajnvepk.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ofcdnxrm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163cyroieuv.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wybdgplh.html

"值: $a"
来源：http://www.aibaodan.cn/163afzndlxx.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163uthnoetv.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163licbkfor.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163dscrcess.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163eubwcibz.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163albcwrym.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163fytgispy.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ikcvdctx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163pctekpqa.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163deihyuov.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ehkhfpdm.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163sldtujme.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ukgfaffb.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ptkutooe.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ulufeyyu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ixxcbezw.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163tyuvanwi.html

println("Hello")
来源：http://www.xuanzx.com/163apnfuhkk.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ycoklcsr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163nlqqtjyt.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163timdmssq.html

s"值: $b"
来源：http://www.xuanzx.com/163lojyhois.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ibxsngrt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ajputhpg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163zjltkdap.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163srciizpu.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163knwfzalc.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163sdseaier.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kilriofc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163rltcbrjj.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ijittbat.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163akevqcbl.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163sdclqric.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xeayapyn.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vjzfstqq.html


<!-- 参考信息 -->