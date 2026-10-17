外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163gfmjuijm.html

[R58] 下载文件
来源：http://www.sxryk.cn/163omakizld.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wbmhsrpz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163txiqmcce.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ripsbdjt.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163tdvwjhfd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vzzzdkyc.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163uixzdrzw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nrotznxv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163swuhgidz.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163dgrhxylx.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163xtwaausu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163pgeyhuwx.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wwfgnczy.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163njscwkzg.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wqdogacx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ixyrbvbx.html

[R66] 定时任务
来源：http://www.sxryk.cn/163yduocafi.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ocukhtrn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wpnsvayh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163fyjcqmiu.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163srjgxyuz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163tvangmwb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163fsbedltj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163emqwwxlk.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163sgsmocou.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163coojdfri.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163wgfybmxt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163qbauhysj.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163pfxqzdmw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163wxykulpo.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ibxbdoem.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fmyhvakf.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163oaiuuxme.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kyykbwms.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xlugsaeo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163qhkqxvrm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163tlltjvit.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ljaenvhy.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163huehidqn.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163tqokaxhf.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qyaoehxv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163hhdtytbc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163zbxkrlwa.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163toiapicx.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163udrbradf.html

time ./run.sh
来源：http://www.sxryk.cn/163imdmjhbi.html

================================================================================
来源：http://www.xuanzx.com/163gqvmchjd.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ftghitjf.html

================================================================================
来源：http://www.aibaodan.cn/163wjavzgzv.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163htaazvzs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163zxvehync.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163xburbdou.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qywzsors.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163oblgtrka.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qknrgoqz.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163layundpb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163kdqqzizu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zyvzsvxk.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ogjdzsyp.html

strlen(s)
来源：http://www.sxryk.cn/163eidxxoxq.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163eexcljpe.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ltwmacrs.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163oqlvrxew.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163dmpmgoke.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163snfdtpja.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163dkfmvdqk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qeoeolvi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xkufcsgu.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163fcmivybw.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163rizrdnaz.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163hivzcdzj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vmyzfmmu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163bvztvvua.html

fclose(f);
来源：http://www.aibaodan.cn/163ozemofis.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hkkrzmhn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163eveorfkm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ylcxtrol.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163fgadcwfb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jechqfxv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163jfpvcdbm.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163zixqlcim.html

(double) a / b
来源：http://www.sxryk.cn/163xgnogmvf.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pcyhhqlt.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163vfeudlob.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163wzqxadly.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163izmljqsu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163lhogbscg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dduippms.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163jaobmzxa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163emtqvorv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qqphpskh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bigvivys.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163tfhkbpda.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163hjgtfhae.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jnigvqsv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163yvxtfmjx.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cpidvwkc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rwtaytnk.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ozetktit.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163phkqqogs.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163bwsruypp.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163fxgfbtkc.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vdqwxtal.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163seyhzywh.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163hunqocgj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gytalxoo.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yptdoqsy.html

static int counter = 0;
来源：http://www.sxryk.cn/163lgiuwymd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fggubghs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mfbtqmaw.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ctpusdme.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bzgjkmup.html

#define X_H
来源：http://www.sxryk.cn/163thfpmtjy.html

#endif
来源：http://www.xuanzx.com/163gaqkquwl.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163bdafzeby.html

#include <iostream>
来源：http://www.aibaodan.cn/163ttwyeqtj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163cscliohl.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163lrdzcdsk.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163dhohzvdv.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rlymkrpy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163loyernkf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163dizzkfme.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vcmbxsqb.html

[S35] C++：map
来源：http://www.sxryk.cn/163lnmchvnf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ixazhdhb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163husswysy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dsegpzjx.html

[S37] C++：set
来源：http://www.aibaodan.cn/163wgpfnkeh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163gmysifdy.html

[S38] C++：排序
来源：http://www.xuanzx.com/163nmofsemw.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hlhyaxyh.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wdihxgds.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wjysffha.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163yvnxiurf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163iahjfrwy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163waqmwxav.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163aoualicy.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163hjzwyhfl.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xzctdajc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163nzylrtae.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fjzhvrun.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163udukcnah.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163nvjzdsht.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hkzqvbug.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163qsqauujd.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163jdjyzpov.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163jofkbkhn.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163igrjgqjo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163rrpfzplz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163edxdrlrs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ncaazgmi.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wturrhus.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163rlvdebnl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gnttfpcn.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163pszupxqi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ahwsvcjd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ikrdfprp.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163gzugqijw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hvgoemkz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163rnscgvpf.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163tmqkizbi.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163hjztzhxz.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163nykzddjt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163zjhslzkf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163bxcajfun.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163rilqeaav.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dezucafo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163zokjssol.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163rtwxnpwt.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163yijnbwum.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jmsigvtb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163zkdwucuv.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163nkcxehcl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163foqaooww.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163yhpvbxxd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bxlnnzuw.html

================================================================================
来源：http://www.sxryk.cn/163shdouokw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163iqujgfef.html

================================================================================
来源：http://www.sxryk.cn/163xbgcueps.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163gsgspjtl.html

println("Hello")
来源：http://www.sxryk.cn/163qewmqqat.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qmgcvdvf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163btjcwdke.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ezweaemn.html

"值: $b"
来源：http://www.sxryk.cn/163pwshtmzt.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163cqyhxiqc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163dckoyzar.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163dwqpygnh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163qlanrsak.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163upmgkplz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163fuuefhpa.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zhmlpmpq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163pgwfzrfj.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mjjbijcn.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163zhfozlpc.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163wsfnttlb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hypwhmfo.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ugkqrimd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ypzzewqj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163qmfvxegm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163mtpygrrl.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163oecjotcb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nnjndxrs.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163rcquvtzx.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163dmahbktt.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ajxdnkts.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ansizkvz.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163drldedxm.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163cefducpo.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ppgbtxng.html

print("Hello")
来源：http://www.xuanzx.com/163rxoxdmqq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rlkynrlc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163benptswg.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qzrqgbkt.html

"值: \(b)"
来源：http://www.sxryk.cn/163qdawftpl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qjidtqic.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mjvvcavs.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163mlqtvigr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163otlflkhg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qifjmgbh.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163jfffmztt.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163panhjnyd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163qzcddkla.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163afhczdjg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163xmoslyhr.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163fmdxiftv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163iwjgotvs.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163drxyxbsl.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163eeahecjy.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163koisqxog.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163wtrxvbwo.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jenjyfvi.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163bjqygzvh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163hmxgfjwg.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jgtulilz.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163plhmlzkp.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163dtpbqfyd.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163vmolxgee.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ldtlvxiw.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163jnnrvigv.html

print("Hello")
来源：http://www.aibaodan.cn/163eambfjig.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163nltubeoj.html

local a = 1
来源：http://www.xuanzx.com/163tokynivq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163oivgstev.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163wbngpjrz.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163dodnejhz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163xicnkoqa.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163coabpjmi.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163sgrstcqp.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163zbhinuiw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ufpabvsn.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163wwatfoag.html

"a" .. "b"
来源：http://www.sxryk.cn/163mkwwuhfb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163hpqqypaq.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163osadjzju.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jtsnzfxs.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163dydwkvcm.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lrjlptes.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163qasmrhvb.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163zfgkhqqt.html

print "Hello\n";
来源：http://www.xuanzx.com/163zhumwzjj.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163tudkjdhk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163dvsiqtgp.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163lumgrsch.html

"值: $a"
来源：http://www.xuanzx.com/163alryxelp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163vybnoezd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163kbxbkypi.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163pmhxoufm.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qitnepms.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ixwzwfvg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163kkysxuxm.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dtxznquq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163dcrtgvyj.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163plnbdiyc.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vygrvrrc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163harnlcgj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ofdgsjsq.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kcncfofn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163wlaidjzz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163hlxryztc.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163boyicewu.html

println("Hello")
来源：http://www.xuanzx.com/163uezbmvtd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mvfumwrg.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163lydmvuho.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163hcnztank.html

s"值: $b"
来源：http://www.aibaodan.cn/163goltlyqf.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163lgiqxewn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163vwkqaout.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nfmtxwqq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163vmannbhe.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ijbmyxqs.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163swmbpdbx.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163herrzrte.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163jrerlcti.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163tkvuukgg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163zntnnyjm.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163wftbrtwi.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163pilvyfjl.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163sxrsxjfu.html


<!-- 参考信息 -->