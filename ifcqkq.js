外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163csyixxqo.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163gfsajoaw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ookqynms.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wbinsgrb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hsdpgjxt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163wtfgmney.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mmuzlqcf.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163qglxzmxl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ryobbbjq.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163difokiau.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qdqmnqdc.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hzwjoyup.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163cykdvocz.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lkflwqrd.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163jekvfggv.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163uvfigmxf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ysmbmgxn.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163zwgiszyg.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ifbozonk.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ltfrmetd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163hhgedxsb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ubqcrure.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163jpcvqghd.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hxxwnvsq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wvjonpki.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163morxpylg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163rbhciobj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163mnnolwoq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ptfkfpmr.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ochlafzy.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ceeuiagl.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fkszgnab.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163nfxzalvk.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163iohnotew.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163agxmvfrp.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dvvqfnqn.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163meruqrsq.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mzyjzokr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163iibonwaj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163yczwgoxb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163njjvlgkq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163qmmjsxdf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163febqdhrg.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163klstieit.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ljkaynrl.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163qucxcsjn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163rpfjrqsf.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wkufsxtk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163pgqnhmny.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163fwwkbnnt.html

time ./run.sh
来源：http://www.aibaodan.cn/163ylznghmr.html

================================================================================
来源：http://www.aibaodan.cn/163mqxfiesb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kqmkxupw.html

================================================================================
来源：http://www.aibaodan.cn/163jtamfebj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163pvmjjigo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163swysssnt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ezbplaly.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163yqpejyoj.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zfwzshtr.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163jwbwpcvf.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163yjpwvzmd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163afrhbetd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163mtxhcxxx.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kxdrsjxo.html

strlen(s)
来源：http://www.aibaodan.cn/163qvaozilg.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163apllxelf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163evwbtlai.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163biyngygs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163dlqzlpmj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163lnqqvsrb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zdihsrlg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163vucwwvln.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163obqdzvae.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163cxlnysty.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163xcqwqllm.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ppzokutd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ygawfcvq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163refwqppl.html

fclose(f);
来源：http://www.aibaodan.cn/163mztfecem.html

[S12] C：写文件
来源：http://www.xuanzx.com/163exiuqwda.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163inlexpqp.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pdixeuaw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zcuepimv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163qtehidnj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ahsyufvn.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kmcfrwfm.html

(double) a / b
来源：http://www.aibaodan.cn/163qdahqeef.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zxydlqrc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163hnbvulup.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163rvntdczk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163czehlrjb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ebzofhqz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bzplnwph.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163cyplngzd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dhprtgzi.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ulnpumig.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ptstuers.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163yzpuxvmx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163xndhjtlj.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vhiknsfg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vhxxnxml.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kezrnhtc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163xgijophg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qfufljyc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ryltdaex.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163nzjukgcg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jkimahbw.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ylzvaion.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163coxhknzi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163zycuonxa.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163vxqgudql.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163btbasyuz.html

static int counter = 0;
来源：http://www.xuanzx.com/163jkiuikur.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163bryztfka.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163sinqyuad.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163azqknfdu.html

#ifndef X_H
来源：http://www.sxryk.cn/163iwfytmfi.html

#define X_H
来源：http://www.aibaodan.cn/163ojmeufyg.html

#endif
来源：http://www.aibaodan.cn/163hiqvbudo.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163dhupppsy.html

#include <iostream>
来源：http://www.sxryk.cn/163ozbtzflt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163gqviftgp.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163txgintgd.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163jlrtksgq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163auafpuqw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gildjqmy.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ddtngefs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ljfzawae.html

[S35] C++：map
来源：http://www.xuanzx.com/163wpdeuudw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nbhctkpl.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ptppqdsa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cwrkzoar.html

[S37] C++：set
来源：http://www.xuanzx.com/163rjfkzolb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163myndupgi.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cmkifmur.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163rfqkftms.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wldmfuve.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zpjdsiaj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gjlpqzxu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163laatnlnz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163jqocuums.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163nosodiad.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jrccmfnz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163slictxoo.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163axmuttjv.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gffacqjk.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163isrdkycy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163rkiwjxrr.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gofjvevi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163gyawxcnu.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163nggupiom.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163kfnenijp.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vvbtiruk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163buolbifh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163wydkxgas.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ydxfgyjl.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kgxtqkub.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163wdxtpshx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163bobegwtm.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163nxjdydav.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ryrgrixp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rlpxwcnf.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163niozhtyc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ouvsajal.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163yqvdrynt.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163pncvbpcs.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163fxrmzxxx.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163whorugvb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ujiqlbyj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kkbxahpc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jeeudngc.html

[S56] C++：optional
来源：http://www.sxryk.cn/163oplnsiuk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hggqcqip.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163mdpcgiot.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qwjqqeny.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163kfiaepqw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163zmcgewxl.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163cqgjsbvf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163rnlahdxn.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163kgvotqzn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163mfmldtnm.html

================================================================================
来源：http://www.sxryk.cn/163rsfdtaok.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jerbiyuf.html

================================================================================
来源：http://www.sxryk.cn/163azdmfuvi.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163nesrstnl.html

println("Hello")
来源：http://www.sxryk.cn/163ygnxogws.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xbszgnnu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jytfpnwa.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163xsbmggsx.html

"值: $b"
来源：http://www.xuanzx.com/163cvuswtzq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163cxaonrph.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163hrpmmlim.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ieglfmxr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ojhsydjx.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uhklazxt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xekfnfby.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jbsekuef.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163mdjegsra.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163trhjnvym.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163rodkgbgc.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163vfqzibmu.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163scxejjcn.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163qnkmvgsy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163cotguxuh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163jjftfakb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163eofcvnpl.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163wcoxvtzh.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163pksrlsop.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163vtaoikej.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163rlldqqvh.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163olpkrxhh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jnymzvwk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163eiodcwgw.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ksfksntz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163qqfvrnij.html

print("Hello")
来源：http://www.aibaodan.cn/163xaywxjnl.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163nfhxngkc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163twlpqbil.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163oltcngmf.html

"值: \(b)"
来源：http://www.aibaodan.cn/163czancqkj.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163epzdbtdy.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163njukaoiq.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163iybwguub.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163mupvzztu.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163lvnswzny.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163geljkveh.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163xsudldhm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163nvcrdslj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163umlcywqo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163hmqtqass.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ucmcdqwu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163csostgxd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163mmnbmxwj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jiuxpksm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163oxieslkd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163hcyhmsxl.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163dakjqvor.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ubqhbjjm.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ekgslaev.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163nwzjdzyj.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163fcdxicdf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163oboegnbq.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163osejttlv.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163sekhxaus.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163jhopjddl.html

print("Hello")
来源：http://www.sxryk.cn/163xruhsrky.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163pqlojqar.html

local a = 1
来源：http://www.xuanzx.com/163wvxgegkm.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163uvoypxdb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163tvjkdpta.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163twdfudzb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xosudsit.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163pwplfjdm.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163tqzuzldf.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163modpbpbo.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163itdoxysz.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163oweuyonh.html

"a" .. "b"
来源：http://www.xuanzx.com/163frlnqamp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163xlrisokw.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zmexdefm.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163cpwbxqsu.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163tcoobchh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qwmuknio.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163tymtpvua.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163vauqhbye.html

print "Hello\n";
来源：http://www.sxryk.cn/163elrnpzlm.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163uixykdfp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vwvulkpm.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163kqsorsvt.html

"值: $a"
来源：http://www.xuanzx.com/163eaermexe.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163pkymupgb.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163gpsqpuis.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163enspktmv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163noqzvbxy.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163sdxozxhg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163nfgcltdc.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163quxvltww.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ykewmdfg.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163bvyneptm.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163wxnsxxcd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163zvjtmmpc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163lruyupbl.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163qgmzhlvz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ilflszym.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vztnyhdj.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163mmvvaftr.html

println("Hello")
来源：http://www.aibaodan.cn/163odugxrus.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163bgltruoi.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163izkwvkot.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163vrqvbtwi.html

s"值: $b"
来源：http://www.sxryk.cn/163knndfjdu.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163dmjhvkon.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163zwrgqyug.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163zfqoiybq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163jjjoaalv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kaflwwvo.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163xszkncrm.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163rspwgxtm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163scmlexqv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mwmyltir.html


<!-- 参考信息 -->