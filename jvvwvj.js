外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163szbjegdf.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163symrdvca.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vbyhedky.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163kspzrpjs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163gdnefnzp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163jlvqspdd.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163urkkzalg.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163znlrluff.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163mnoucnot.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vadfpapm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163frpgsonu.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163zenivkyc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jppoqlgp.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163apowlism.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163vhovpvtw.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163uqudxzmy.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163pkhogjhg.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rqxtsovy.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163uzfdncki.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163tzqfjrwv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qymkpsfh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163obvjtvrv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pkxhwpda.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163pfcnedva.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hhnrqezz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163fzwwrqsq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163pszfafmr.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wdxlfnnd.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zuznzbcu.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163kfprmpyz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xxsnbtby.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163offormfo.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163pmjstlpm.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163isbxgatc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163hpqckkmc.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163yonhmbve.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163znwftazx.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163sdpzeteg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163nzyypguy.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163hhufcmrn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163almscygb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163bbyeegvr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kekejdfp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rzpinkaz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163nywypcfp.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ybirajwp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zlkgjbht.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163tbudocxy.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163izclcsfd.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dzwvzvjl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ptuocauw.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163qxfaknjk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163recdmrun.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163uditzyzq.html

time ./run.sh
来源：http://www.aibaodan.cn/163olbkzcje.html

================================================================================
来源：http://www.xuanzx.com/163dxzzyzfa.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163nuzbssmu.html

================================================================================
来源：http://www.sxryk.cn/163ipvrkxwh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ckmqtaxq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ikqiurfx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dhzbngat.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tvofopkq.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163lzinjvtp.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163izxwwkhy.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163fpydezdz.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163tmdjkmks.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163nkjiozam.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ncvrazgq.html

strlen(s)
来源：http://www.aibaodan.cn/163ymhhjjqc.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ucqzjhxo.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163pppkiteg.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ygjdfwsh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163kyptlmcn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163mvabaaen.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163boevmnht.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163nixepcsr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163giamqqlz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hgyejrkz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163hfrkygxa.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mkamzdzn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ygslndfg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163diiqgwgk.html

fclose(f);
来源：http://www.aibaodan.cn/163weserjxq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163evaafgzd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163cvrecokr.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163dutjtqtp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163onejjcjz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vxigrrmc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163velyrxtn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163bxkqgmif.html

(double) a / b
来源：http://www.aibaodan.cn/163auiuzgix.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vlbwtqia.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rlyzoymj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fsnxkpbq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hxejvyth.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163xnepdavf.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wclkqyvu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163iklksbww.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fikokfpc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163nimhumwz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mdljgdaf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qjsjcmjs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163sqtfbkbe.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zdbnjnsu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163bfydveev.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qumzztyz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zfyjcefo.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163anyistna.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163yzzdbpvm.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163msrugjkr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163kuowynvv.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163hchyaxay.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jqwuoclm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163enlbyjom.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xrceankt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wovzojyz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163xnfijqqa.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ntnztlvq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xztlpnfl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163yxupduxx.html

#ifndef X_H
来源：http://www.xuanzx.com/163ppzakllv.html

#define X_H
来源：http://www.xuanzx.com/163capmdzep.html

#endif
来源：http://www.aibaodan.cn/163qaoghslk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rvwmkydz.html

#include <iostream>
来源：http://www.sxryk.cn/163zrouokiq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163hmtvcvkn.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nabzlcgy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fcpnjrek.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163mcuzqefb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163bgwhweih.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163evthmkhu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qltppbzi.html

[S35] C++：map
来源：http://www.aibaodan.cn/163tkyohgji.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ceojjeah.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163zizbrcpu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rnrlkkmb.html

[S37] C++：set
来源：http://www.sxryk.cn/163cmlpxjka.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ymwgjtxi.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tyaqlddm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163bsxowjsi.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163yywmaegd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jgeiqtim.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ccuxshgp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163thqvjism.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ydoadpgn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xpjboesh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163tgipbtou.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gummyjpc.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ijnqbrvl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163dxtyqkin.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163njbkzpwx.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fvbmrgrr.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mrtlwsxn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qzciuoxp.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lenuppmd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ikevdwuu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163kyhpujls.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vnvdruzf.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163uyuuhvjx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163uuznbook.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163nfugwous.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tawcnmuy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163synarrto.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163fnivygzm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qobankrm.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xksmtsid.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163yatgndaj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163afpxfnmr.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mixemgsi.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hzzfwlni.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163pfjbytzn.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163asxtehgh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163evhkcqhy.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163kgtaksiy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163xedaybzz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tgqdgqqw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ajgqjyiq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rqbzmwgq.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fmppxguq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163dxshvmyc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vsdmbwjn.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163cparcatv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163nummrrtl.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163judzcryy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ljzvyjeg.html

================================================================================
来源：http://www.xuanzx.com/163mrhumsvc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163awozdcop.html

================================================================================
来源：http://www.sxryk.cn/163mgjsvpas.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163wlvbgprr.html

println("Hello")
来源：http://www.sxryk.cn/163sbmhxckt.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163uomczugg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163pxbldcau.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163npohqxwf.html

"值: $b"
来源：http://www.sxryk.cn/163ttppokfv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pyvjhwqn.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163hughokay.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163kikwwful.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163iyoiojxq.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163biohakxz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163aquiiidq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wzdotgaj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163twvirduu.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ebfosjdi.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xujjbbhc.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ysswhgmc.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163yqhjqygo.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163iwrxkxta.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163bvskipjz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mnxnusmp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fvcdcvni.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ibbmlveu.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163reravkwo.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ergyaqys.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163prvzoalk.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163yonkwlda.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163gqldnoyy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163voulifjg.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163hvyynwim.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163favadngv.html

print("Hello")
来源：http://www.xuanzx.com/163lhaciysu.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163glwaiptf.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163gjgwabsr.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163lcrxawrr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163levotppz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163nwbteuab.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163vhipbqgn.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hjpilmik.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mcfkbzaw.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163guknkiob.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hwlesvgb.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163tlmtnzev.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163fssrzpdw.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163elnctmwo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163juuerzlk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163gfoomnau.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dylmlapq.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163cfrjsots.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ihrcuajr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163bnssoxnm.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163jmsknxtf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163eosdyqnh.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qsmhrjqx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163vhoenbji.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163svnxldva.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163uyqvlimy.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163hpsjkitf.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163gjzqwexb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163cvkdhbji.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163bpkfqtho.html

print("Hello")
来源：http://www.aibaodan.cn/163wysarmvs.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jcymjnra.html

local a = 1
来源：http://www.sxryk.cn/163ylnfkgtb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ydnkpllt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163urfizumr.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163fxrrrzaq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vhteuerv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fqmihnzl.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163rhaipmuj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163hyuekgtp.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ghdeiamp.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163guwefvkz.html

"a" .. "b"
来源：http://www.aibaodan.cn/163kwrlytnz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163joonfwch.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163mvbihdjh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163upicnvbp.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mthfdfsw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163jcpoaroy.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163yylrkiju.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163lmxrkkcp.html

print "Hello\n";
来源：http://www.xuanzx.com/163polpencf.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zsdrxwkd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163dfpsyzsf.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xwbxqmvm.html

"值: $a"
来源：http://www.xuanzx.com/163pcvlojhg.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163qmorcpbz.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163tazunaxy.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163kwthhxwo.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163bhpvdoiu.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163cczpdpat.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163qcdoyclf.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kbecqzlr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163tzmzhlae.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ktpqergr.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ojknyhtk.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ozcbjarr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bntkmavy.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wdeouvug.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163woqxlkmh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163tcmfgxmi.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163autcdnqa.html

println("Hello")
来源：http://www.xuanzx.com/163cmllstoz.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163gmkhakmn.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163invzfhnp.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163wfcqwbgm.html

s"值: $b"
来源：http://www.xuanzx.com/163vlfyrvpw.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163lwcurxvx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163eyxvdaig.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163jlkojxyo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mtokwrco.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163wdoictee.html


<!-- 参考信息 -->