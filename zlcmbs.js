外链999!wailian999！

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163sywtsysw.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163atgtucll.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vykhqele.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163nhznyjpk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163bdsosdoa.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163swnekdqu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163uftxgdyb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163sbegbzwr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163yifrzmrg.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rgveaima.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xwmanxzf.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zbelqrmt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ainaymgi.html

[R66] 定时任务
来源：http://www.xuanzx.com/163yrluywmv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bryftvtd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wvrhyppz.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ztcsdxtt.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163kuixptkh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zqzqmafn.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wvwstsgd.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rkkpeixa.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163thrfzpkh.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163uqiuhdlp.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163cqvkimiv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163iragbebg.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ojhyxpxy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163apjhqcyq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163bhvgbixm.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163imqowmin.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163fkyhcrjx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163nrtjzeiy.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zjbpqzdf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163dilwnlpj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163qvyumnnn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xtpmbbit.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163wiszihkm.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163eovgovif.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163bkkyirvb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163nrfajwpy.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163npjeeptn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163hyqmmlal.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163rjjlfgvh.html

time ./run.sh
来源：http://www.xuanzx.com/163oddqiqde.html

================================================================================
来源：http://www.aibaodan.cn/163yeerukgl.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163huwberhw.html

================================================================================
来源：http://www.xuanzx.com/163gkvwqkzc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163aeeosneg.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163dqqgxhcl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vqpjirtd.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163uqyxyqmj.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163uidmgsss.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163dllkivcs.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163isqybbsp.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ecfwserm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163cfyxeduy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163eyleiccn.html

strlen(s)
来源：http://www.sxryk.cn/163miuzlniw.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tdhkhmfx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rxowovnd.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163afnwtexf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163idrtsxmg.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ihnpomoi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163iemfzeun.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163vthxrsbb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ywkplogs.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163kgcxptfv.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163dikpczje.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163pizbafte.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163hbdpwpaw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qcnvmsbo.html

fclose(f);
来源：http://www.aibaodan.cn/163qkhrnoux.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zmrrwvqk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163icfdmfgz.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163mwwstjif.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163depbfkgc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rlhavmdv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ytlxtxdt.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163uudckwbd.html

(double) a / b
来源：http://www.sxryk.cn/163mdhwtsuf.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mrdgcjqs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jlusredv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163srnhudje.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163nsiqwnuo.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163sgnafdxn.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163yfrxyagf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163efksurnb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qnllvkax.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vlqqruiu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nuufogjq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163nkpbeadh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lwdosgcz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vkaanqfv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163hlcwktuh.html

[S23] C：随机数
来源：http://www.sxryk.cn/163axwaubkd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163scxqqndz.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rrtmbgdb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163mcdyvber.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163spewyxub.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gufhdfav.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mppqclpg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163vpiijyyj.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163pxjlcraq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jkfdirlq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163gmtslncw.html

static int counter = 0;
来源：http://www.xuanzx.com/163jkrvamrd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163errezztk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163furylngm.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163tqxsmpnz.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ypcqcjrg.html

#define X_H
来源：http://www.sxryk.cn/163semggiqj.html

#endif
来源：http://www.xuanzx.com/163loqtgkaw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163pwhujnzb.html

#include <iostream>
来源：http://www.sxryk.cn/163rcgaxglc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ukqqkjkl.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mkmajoap.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163khzvnhcn.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163mrttwqbm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wncbmuqd.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163agrqbnlm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163egnmmois.html

[S35] C++：map
来源：http://www.xuanzx.com/163surmwyfw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163osmqgqem.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163jsyfvzto.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ajnvwshp.html

[S37] C++：set
来源：http://www.sxryk.cn/163xgvjlnfb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163orysdowp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163figmvzfa.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163driezqdv.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163yupqxwwr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ykxuxtyz.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kxpoqioc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wwnqvzck.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163daxyyurd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mmwsyimf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hbkwlohm.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hvlhnwrk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rhehijmq.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163dwprhmka.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qprpfyje.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ddrlyknz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163degrvgig.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163grejfcrv.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hzupmdhf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163owfnblvh.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xxeassgf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163xtguewdz.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fqifokuj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163jbjxxspu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mnxcmalx.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nsyjdrqd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nqtbsnhb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xjlbzvdt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163plsiosim.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163wnqxehvx.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163cjbwqzfu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163usknmaxx.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qxskicun.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fasxhdmd.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163scbrljgz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xhmmbapd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163unhgrkro.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gdyxozkz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163zxxqbyyy.html

[S56] C++：optional
来源：http://www.xuanzx.com/163nzxzteso.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163rsahlddx.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163coswqyhv.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163lfrtniko.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163krznwsqx.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163luehymlz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163iyszxgkd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163bzntruof.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163hxoekqzy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163txedomap.html

================================================================================
来源：http://www.aibaodan.cn/163lismpuns.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wuqrqnpi.html

================================================================================
来源：http://www.xuanzx.com/163nupbwefv.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163mnebsaxn.html

println("Hello")
来源：http://www.xuanzx.com/163ckinhnth.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163uaomzsza.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163cxilylon.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mwkrmndr.html

"值: $b"
来源：http://www.sxryk.cn/163zbehjycj.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163juiwenxj.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163oqsaaiux.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163pbjfdcni.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hzwinmqf.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163msrqovxh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mizgoukc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ugbxeeny.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ppvhjmft.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163fneqwtky.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xphnoryx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ywfibkik.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163xyevhjlb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163zlmzflxe.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163csrsbswe.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zznrguum.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163zvckyrvd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163bybsboki.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ftogttdp.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163gnifyijd.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163xtxqablu.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vvdlsdtj.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163wvyzhqas.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vmccbpqv.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163waboejxc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ahnouigc.html

print("Hello")
来源：http://www.sxryk.cn/163ylzrzhwa.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163texzvmng.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ebtqnwec.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ihvpjylq.html

"值: \(b)"
来源：http://www.xuanzx.com/163ewxorwci.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dabamwcr.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163yodffzky.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163yxycbtxk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163vimnwlwe.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163tkldpkpp.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163jwtvbeux.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163epieulih.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bllplaeq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163bulzkwry.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163tyjyvzgs.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qxgbgvpm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xfmdjmfk.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163nsiwsoli.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163mplufuuz.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163mkefgqok.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163hbvsikme.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163dththgys.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163lftwocke.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163mpdjjbta.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163egctptbb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ezqzqstt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163scluzyjz.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163qqidczhu.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ydbhtdnz.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ktgldywd.html

print("Hello")
来源：http://www.aibaodan.cn/163locebuuf.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163utkqaobe.html

local a = 1
来源：http://www.xuanzx.com/163bmakzbmd.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rcneumqk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163luzgbmkn.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163toftaodw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163wmjmsjrs.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163wezvaosy.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163gtsjlbkp.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163qlegszyi.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163moqfvgzi.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163pmwrtuiz.html

"a" .. "b"
来源：http://www.xuanzx.com/163nqyrzidt.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ahebdojs.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163dzkcwxte.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163wagzmefy.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163dzgwoazu.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vliuxlbi.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163odzqumzs.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xarkzwbb.html

print "Hello\n";
来源：http://www.sxryk.cn/163mcwjwqgu.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163hdahkspg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163slccoclj.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163lelbazxd.html

"值: $a"
来源：http://www.sxryk.cn/163hqpqysck.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163qkrxgbkl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163hbjzmdiz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ghdpphmn.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163wrpoeuoe.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163hohtfuco.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163vczpnxel.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163lvwhlklq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rxshpujk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163siinobwh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163kvklywsm.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hxpzrtcy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163aeqnowvr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163myuxnmep.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163xqkjknsd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163obxhksqe.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hcrmzvfj.html

println("Hello")
来源：http://www.sxryk.cn/163dskgnior.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163vhkbftbe.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ztduvrqq.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163glupdygp.html

s"值: $b"
来源：http://www.xuanzx.com/163ojzebfml.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zezzbnkf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163cgmhqkvo.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163rnhervby.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ifrvailr.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163irvvxaxc.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163rokstzbr.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163uhpkccpl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ojbqpfwb.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jdskzsjd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rpgwvqiz.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jhqqyung.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163blamgrto.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163kjqdslmy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163utmiyawf.html

================================================================================
来源：http://www.aibaodan.cn/163pwvedmaj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xtvvawil.html

================================================================================
来源：http://www.aibaodan.cn/163wzbniajv.html


<!-- 参考信息 -->