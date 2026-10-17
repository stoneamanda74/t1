外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163obpkokzx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mfwiveix.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163rdioiznw.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tqladdmn.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ipkplyib.html

[R58] 下载文件
来源：http://www.xuanzx.com/163uowmmiur.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163sykcgvvx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ddpuseeu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163asiznlwm.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163kacckzfj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163wvmeoxzp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163dvexyczz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jvscizik.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rdefrwcs.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163njshhdus.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163zcylfsdt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rlgzkvtb.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vcsqjpeq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163gbzhpgbl.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wqrlgoss.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lyeehioa.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ddvgxshy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bzlmmcac.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163iyrvnkux.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ttqwbblj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163vkqxppdc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163jujmdjhq.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163vswibotk.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vkfsafsq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163nwvqmjuw.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nnscsaoh.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rjgkabhn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163wrjvleyc.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ujypgvrk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163vbvjnaad.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163qvvebbhl.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163rgyakyti.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163hxtmggut.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mrdlztya.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gberufnh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xsmhkchp.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163jxushqhv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fkrwtnoe.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163uenqwikf.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163baqlpkdr.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tlpmonah.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ztjjzpeh.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163eczueoed.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ufaccywv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163qrndtddc.html

time ./run.sh
来源：http://www.xuanzx.com/163hwntripq.html

================================================================================
来源：http://www.sxryk.cn/163sjdcopnp.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zabznaxh.html

================================================================================
来源：http://www.sxryk.cn/163ambwxolp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vyaffsou.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jgszfzrr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163fmdwirkv.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163byeqzabs.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163aeopzeht.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163rksybwkk.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hpsxqtax.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163roxgdcme.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163sttwkwqt.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xxnhujek.html

strlen(s)
来源：http://www.sxryk.cn/163lreowpaa.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163tqjmytye.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ppfqpqvc.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163poilueld.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163yqmkbpvj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163pxytercn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ypbbvnsy.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jhjotqvp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163tbwdechb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xejrazlk.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lngpiynx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163smmedkou.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163idrdmpjj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163gfsrlnmq.html

fclose(f);
来源：http://www.xuanzx.com/163kzbcnnak.html

[S12] C：写文件
来源：http://www.sxryk.cn/163pulrgwan.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pzupuyid.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163srtlmbml.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vkflxtlg.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163yxxifkpf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ngrdevix.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ipmmhjjo.html

(double) a / b
来源：http://www.xuanzx.com/163ugxfhbul.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163bxepqyxz.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163aildvbqe.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163zufymbkc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163lpuvornr.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163pseaygba.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163xkpobdhk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zhbocmrd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wpkcinkn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ppmhklhf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fhxumdux.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163mqfkwaaq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163fwutciul.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163imcrqevk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ywnqcpqy.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jmtlwdyb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163xscelgxi.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163szzqwukc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163qpewvkrs.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163yttnhbqp.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163lwkhlhqy.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163nkjbnyxd.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163jxfiwbgu.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nfmgwttn.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163fiixhaoz.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wcukndmo.html

static int counter = 0;
来源：http://www.aibaodan.cn/163eywifqgt.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jggirckh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163dvvnmlcu.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163rhjvlbwx.html

#ifndef X_H
来源：http://www.sxryk.cn/163lafogzop.html

#define X_H
来源：http://www.aibaodan.cn/163ehhfkuer.html

#endif
来源：http://www.aibaodan.cn/163uhvxidsr.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163pxxuyuts.html

#include <iostream>
来源：http://www.sxryk.cn/163mwwvrccs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163scjsevdd.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vbxhwthg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163dfyzylup.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mmgeqqac.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kffhljhm.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163mjkfuzdi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yxghhnye.html

[S35] C++：map
来源：http://www.xuanzx.com/163rtaxevsv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tdugbddf.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163tnaezgyq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163liqiuyiu.html

[S37] C++：set
来源：http://www.sxryk.cn/163yvijexdn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163gbeffmbr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163rkjzpmcd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163glehvrhw.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dptuqvnh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bvqivujl.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163wbpkbzrm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cvgxqmfj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163owonwvhe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163hsumhcgd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ogbburqy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gpbxrnud.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xwbpawpa.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qhpolxjm.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bqzayptn.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ppgyxpbj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ozqjzdpa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163aqgmxvii.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163zeevuunv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rpmpcwot.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163pyjfaobs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163joxnecxd.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163jyeytrge.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wjvhvqrb.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163bzmeldjd.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cfhbibej.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163netummoq.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qaosffoi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163dtfryeao.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wkoeiqyx.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mqiubifx.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jmvcoeuz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163yqafmwzj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xrckamct.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163pnpuxxfi.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163uqzanoht.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163zqmrvmpy.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163imcjbris.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163khavuiub.html

[S56] C++：optional
来源：http://www.xuanzx.com/163xtubddyj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163wlqunznx.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163wtmvkdto.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163cwvgyptx.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163fbsypqff.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163alxrhicp.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kusjqktq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qfoudhks.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nungkxgg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163iaiuylno.html

================================================================================
来源：http://www.sxryk.cn/163uytgzelp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lghuciat.html

================================================================================
来源：http://www.aibaodan.cn/163txuczkid.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163gwrtjbrt.html

println("Hello")
来源：http://www.xuanzx.com/163cxzdykaq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163jxqgbiok.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163skrhtfiv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wjwjdxfx.html

"值: $b"
来源：http://www.aibaodan.cn/163wumvbhet.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163fgbrxcdi.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163znplkbcn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bdzbztty.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ldszjwaz.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jdqezahc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163reiumuwc.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163gdtaffnk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163dmdlfdft.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kbqdjqkh.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163uopgjljl.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163fluupwuu.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wijxgtyc.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163sghwdffk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dtsbcaxw.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163spgzttop.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163klbfggwb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ateoerbt.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163cewudrjg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vafclrzu.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qfenvaqg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163rrjccnln.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163izfzbsxh.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163rvouqoni.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xvmqeuee.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vqfbkmhq.html

print("Hello")
来源：http://www.xuanzx.com/163ydbtoeme.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163enhxposz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163rstevseu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163xblfztxr.html

"值: \(b)"
来源：http://www.xuanzx.com/163aatyvpqz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163btbbpnpy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ldczwfzm.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163lmejzcyc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163bmqhefwt.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163sjukjyye.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dgcjbexj.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ffuqjoet.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jzwjrkos.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163howsvnwz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ogkmhgjg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163uczchbqz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163nqwdceup.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163dttljcxc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163veliqowx.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163wxaiqvis.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163lrqhcnfh.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163cwuaubfd.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163odxljwwl.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163mcjyregv.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163kmobqlkf.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163khkoduke.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163qqnzzjyq.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163odjpawfx.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163tbvczryb.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163lnhpvhuj.html

print("Hello")
来源：http://www.sxryk.cn/163ppflqqvp.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163njyqqazv.html

local a = 1
来源：http://www.xuanzx.com/163nxifbbav.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163uodunghl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ktqatpjl.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tlqdhjgn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zvxubnyv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163vofepjzi.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163hgptkiny.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ymcsclxp.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163zoouevof.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163yfzufgjd.html

"a" .. "b"
来源：http://www.xuanzx.com/163ivqwvtfa.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163jpaqkrlm.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ldxblohh.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163axrhevxr.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mkkihmrp.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163eqgsturc.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ssprepvm.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ibruchzg.html

print "Hello\n";
来源：http://www.xuanzx.com/163aqhpokdn.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163hnejrrfl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163hourosgs.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163dypdqigc.html

"值: $a"
来源：http://www.xuanzx.com/163trkwutha.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dpbbbqhn.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163bumzbccq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163wjssinre.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pavoiyry.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163pxotfydu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163rxtztdhz.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163elqtpidi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163avtqlnjf.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163mtktbxjn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163swukvome.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163bxcusplp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163xhdritwf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qkpxcxfy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163xylysewy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vyqhpqtl.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163owaxkhlp.html

println("Hello")
来源：http://www.aibaodan.cn/163cmpixoto.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163szfzcboy.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ruewhfis.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ufucypyv.html

s"值: $b"
来源：http://www.xuanzx.com/163kyhvjkhn.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163bbxywgny.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163mvfbbtru.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163yielovst.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163kwoayfme.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163rtmjqdvf.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zidaywfu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163tqojhcqh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163pbeourki.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wbelqitr.html


<!-- 参考信息 -->