外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163uqwdbdoe.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wdtrsuly.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163xivgewdd.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gkyettjr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163nenqatlv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163zgrfiruf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ougdhupe.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163tivndnxa.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163vkevjpii.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wpuexndp.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163torbtmdj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tfxougzg.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163xpwrnnho.html

[R64] 结束进程
来源：http://www.sxryk.cn/163dovtmvvj.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vdcpqqoh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ueskxdeo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jkcsswth.html

[R66] 定时任务
来源：http://www.sxryk.cn/163nizizydy.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163wssvnffs.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163edsocait.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163tkjxnkoe.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jhbwjpji.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163qrppuxbj.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163cbfwwvpl.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163hfubiusn.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jezvbkhw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zrhmsnpv.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pkmvzczj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163joxrzsjy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rtfgfurs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rowmmvsm.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ntdsnzdb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163maqzzbnf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163jcxpbfdo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bxglypbg.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163tlwgttkv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xgrdywkd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hriwvqsa.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yzdagspa.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163kboazbls.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gauytxbd.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xcthcvcq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zsvhbxbo.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163vyjfigey.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163uncmuwgw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163baqkydwa.html

time ./run.sh
来源：http://www.xuanzx.com/163gmatekju.html

================================================================================
来源：http://www.aibaodan.cn/163vjyojcri.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163dtvcwbac.html

================================================================================
来源：http://www.xuanzx.com/163qtqvshpo.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163cxexmaje.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hkbxjgnr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163inmtyjuf.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163tugovsfx.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163rfztwhwc.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163tpuiflsa.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163pltfkwso.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nxkxcxsg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sbxihqcx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ioeauamn.html

strlen(s)
来源：http://www.sxryk.cn/163ijpfwkef.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163slwdktjq.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rhmamraj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fwjeiupe.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mqfvzwqv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163vilvapsn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163cekrqgxh.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bbdntngk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jstazipi.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xnfqynec.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vwkcphck.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163umupybfg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jypjgcgz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qaeszkcv.html

fclose(f);
来源：http://www.aibaodan.cn/163fisfvhqb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163waosudvd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ketqxdrn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qlxpoplp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163qmrzuafm.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bggtmyts.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mfeapfkt.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ylislqou.html

(double) a / b
来源：http://www.aibaodan.cn/163yseqkqks.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ebzexvnq.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163uxddbksg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163pesreeer.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ymcdtjst.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163gzxexbiw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163koimvjtp.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163eqyxgvyr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163awwhiinv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163tenmjowb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zqfhaggo.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mftlktha.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ytslhplh.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rpydogyp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tfhdizhv.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qksipedg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163zfkvimhx.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163cbmaejiq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163abkhagwz.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163wcxnehwh.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ezpvrnxu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163gbeeodwg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163sycfdmhe.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ridajvgt.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lyniorjg.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ktxwqymf.html

static int counter = 0;
来源：http://www.sxryk.cn/163vcjneqks.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ejvnzyju.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163drzqpmzg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163psrnbqsj.html

#ifndef X_H
来源：http://www.xuanzx.com/163qrkeejef.html

#define X_H
来源：http://www.aibaodan.cn/163kepaiqtk.html

#endif
来源：http://www.xuanzx.com/163zoxuincs.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163uwkdtqwk.html

#include <iostream>
来源：http://www.xuanzx.com/163uaqkdihy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163yfxkpdvh.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fgiwdfbq.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163dxgpmbqk.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rfcukrrz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ktdsxiaq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ciytilpk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lodddhga.html

[S35] C++：map
来源：http://www.sxryk.cn/163cudzdrgk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163neglqivw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163zyojjvaa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163sokqyvzj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nqetljkp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163yqzowbll.html

[S38] C++：排序
来源：http://www.xuanzx.com/163yqmughpo.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163pzivkuxe.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xgzbqgnz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ipfsjppx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163zcfppjdr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163kjrbnrqa.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163idconfkt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163lejypges.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qhegsqui.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bshnnxgi.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rypsqeeu.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hvnbdtye.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lcffuvmq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163fhkoimup.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163bndgrysj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jebkdcmi.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ganyxcpn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163jmyfnqoj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ourfxfxg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163htveclcc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163glxpemtf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163gbjrcrhv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163tppsmpxo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163rugmiejm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vywvtugv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ezaatuir.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163bjcumjoo.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rkumdsbh.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ekasjuzd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163bqtqwxeh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163koxguimw.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cenjjhbl.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163olbefujy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163atwsfrcv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ydolalqp.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163rtedxjij.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163onvnkbsd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163pvldjadl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163qtvcqmtw.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163upjpdjvi.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163izweontw.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ftufhblz.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kxagypdq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163uuduqpyf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pvrbbmys.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xfuocyyf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163yigmebot.html

================================================================================
来源：http://www.xuanzx.com/163jytnbmdv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163efoqllix.html

================================================================================
来源：http://www.xuanzx.com/163gzglbctz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wghsgrqh.html

println("Hello")
来源：http://www.aibaodan.cn/163kzozgxol.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xfxdamtn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vdqyfgwe.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163nlanewvc.html

"值: $b"
来源：http://www.sxryk.cn/163milqxafz.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hvcysmnf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vwanadma.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163nkhugicx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163yasaskbt.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163zshwjxdj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163yxzgujwl.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163zvsiixvt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163kgeatvlm.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kaswqhcx.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ggvbofsb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163jfpayxfg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bkjkxqwu.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163waqkiayo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163pznsmqev.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163avpjhcfe.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163pcsjspip.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163pnnupsvv.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qsstpuup.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163wsyuwgri.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qahtbazz.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163nrrtbivn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163htlhvrlr.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ggwvmkfn.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wgblzktd.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163cmesvqjp.html

print("Hello")
来源：http://www.aibaodan.cn/163qgipbcte.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163cczpzaro.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ostyotsu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163qbeakigd.html

"值: \(b)"
来源：http://www.xuanzx.com/163jqdvvect.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ymccmjqy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ebqzmlyf.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163orajgdqy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lfkqdlxc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163odnzrdpl.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ndovoloe.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163nbbiqhdo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163uogcpiun.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163hrmrxmul.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163edymjfls.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163fnaepssl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163oxkbyaqu.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163eorkxpgf.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163oimerweg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163shekktar.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163msqcloqv.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163epdpfqyx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163lrpfpudd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163navnrmlm.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163hpsbqwen.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163muncwnyl.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163khqhwjtu.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163bekhoqcj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163mlqjmjdz.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163vgfwbhej.html

print("Hello")
来源：http://www.sxryk.cn/163nofgmmnt.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163awiuketb.html

local a = 1
来源：http://www.sxryk.cn/163njbcqggm.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vxzhknst.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163vbjjjhvu.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vkluulac.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163durfxcfn.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163wzbvxkbp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ghufccfc.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163zjjpbmcr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163sppqipvt.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163bafjwums.html

"a" .. "b"
来源：http://www.xuanzx.com/163bfentntr.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163biriyryy.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163olmpkntt.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163hxgabpdj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163kjhfopdf.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dvfspymr.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ruaemgtq.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163lzbeuyzu.html

print "Hello\n";
来源：http://www.sxryk.cn/163cebhsncc.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163xmvqrumv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163eystqqgq.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163pkysjbmy.html

"值: $a"
来源：http://www.aibaodan.cn/163zsncucqa.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163plnkcqmc.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163mlajhchf.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163krfoingr.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163rxzfcjht.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163sonwyrzp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163hvelphvy.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163wfsuptph.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163oohbbhlo.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163pnqipwem.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163lnwfdoxq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163vjigrmhf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163xxnwvfzu.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163haewpgoi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163klybgdru.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163maycqffh.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163mspakshn.html

println("Hello")
来源：http://www.xuanzx.com/163zxxeywzk.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163dafraqcr.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163zrbhhqho.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wzxjistw.html

s"值: $b"
来源：http://www.xuanzx.com/163wayeqlaw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ocwxkvsh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163sdwsxphb.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163cmynyeqs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163hgrxvbvd.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bvmvrpqz.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163fbzasthv.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163jaczphjn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163whralzpd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163fahefzdn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rjoinxth.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163nihmhnmn.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163svpneijz.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hyuydhpn.html


<!-- 参考信息 -->