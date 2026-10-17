外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163vjowlqtb.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163sxwwqunw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xxkenrgd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163pqwnvcdu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kugmevvh.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163suszrdzz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163slylzstb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163stvdppdy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wvrvpkdk.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ovdkkfkh.html

wc -l a.txt
来源：http://www.aibaodan.cn/163wqllqhvs.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163hxznjhwf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163eycjlzmm.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ixtmcvfk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163bgivpfwf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163dvuvgmvg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163rxrcqgeb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163sdoiphva.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163augpnljf.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163dhjefunh.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163eyqbijue.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mvqmsuyj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163vrfxehab.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163litxjoac.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163isvcqhgn.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163avxfdrnj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163tbdkmwcz.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163suqnfkqt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vgykjvmm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163gquswwij.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nfxtkjiq.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tzoeykgf.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163atpiecet.html

[R64] 结束进程
来源：http://www.xuanzx.com/163mbzggitr.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tttnlwgc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wpeumxks.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kobyabyt.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ejrszqgm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163vxfxlvos.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ckgizxcj.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ocvoqdga.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wmmxcjpd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gexpeghu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163unjepzcs.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163xrythifi.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163yucclgyp.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rkxiivxt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163xkgffmqo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163tdalozag.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163umlqzlui.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163nuoumwjt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163wgimpvzf.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ptvvldly.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163wgeyeimy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kfrthqyz.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163uwqjmase.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163omayoegl.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hpljdqle.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zhsulvxp.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pquqmolb.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ywgybbnw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vnslsbhu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163yeextbdu.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ohtpptzy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pquwlvcf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xvzatdfr.html

time ./run.sh
来源：http://www.sxryk.cn/163lxrecpqq.html

================================================================================
来源：http://www.aibaodan.cn/163sevtqucz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163izfqcqjd.html

================================================================================
来源：http://www.sxryk.cn/163targovli.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163mmxjimcp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163upjlenbv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163htvqfdji.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163evrxfcui.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163wviuwtoq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xmghgede.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ifmgwoiv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hzpduemp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jvjfkmjr.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163nslvlhnd.html

strlen(s)
来源：http://www.xuanzx.com/163niqoljpw.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jyetcubo.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fljdhiwe.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163txkijqra.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qaokmttu.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hbqjntye.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163bzypphge.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dxrjvxpl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lelyhira.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mupzrpxe.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qvsjlfhl.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163gsngmiiy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qrjnmfqw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jgroqnev.html

fclose(f);
来源：http://www.aibaodan.cn/163avembdfq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gtrtxalv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163motleddn.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163roeuvbzx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lnekukdo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163sggzksav.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ciiprwqn.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163sytmkvet.html

(double) a / b
来源：http://www.sxryk.cn/163kapbtynb.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163rafypomd.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163udmgfpnb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163mbmisbkv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163uqcgjhhd.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fksbnwcp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163lurfoygi.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163vakmnssz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vrdlxvgj.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163eetftzpv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gqswhjfj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163nbilfuck.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163iohborjf.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ghsdfmnc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163degbrkyl.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163gbycdkik.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jlmjclcz.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qessznaz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163zoywwqxz.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163sktoejoo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163nyhofumc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163uftjuamu.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hozxbjsv.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ldyihodd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163yvtyftpv.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163bjqllnab.html

static int counter = 0;
来源：http://www.sxryk.cn/163vlwunzoh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163aoygmanz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163edchlrgo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163darqzadt.html

#ifndef X_H
来源：http://www.xuanzx.com/163sjqbjjdh.html

#define X_H
来源：http://www.sxryk.cn/163ragmtger.html

#endif
来源：http://www.aibaodan.cn/163aorqocgs.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qikxmfhz.html

#include <iostream>
来源：http://www.aibaodan.cn/163vlhxeidw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163fdivtlkt.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163zakuzfpc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163xregsojk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163cckepmeb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163plgazxat.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163szevpwud.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163rkrmkqbu.html

[S35] C++：map
来源：http://www.xuanzx.com/163osfnxrxc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tdnoupbx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qcufgzek.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ozppldco.html

[S37] C++：set
来源：http://www.sxryk.cn/163lumvoitq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163jvoafwav.html

[S38] C++：排序
来源：http://www.sxryk.cn/163afazwded.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dcobgkzy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qjluhbch.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163juofxmbn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163turrvxik.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163cbxjqwft.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163iolipwam.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cpqlzdph.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163betusifv.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jujkevov.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163amhlxyis.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163vpyxoeul.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rvnyvvqu.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ewosrecg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163iydjjigm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163loridivs.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163vljffszx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nxdiycar.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163rijtagbp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163rcxpnqnb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163dszmvrbu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hpxqfsqu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163gahzpveh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tklttigd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163xzbzxaff.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163yvpjbawp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163kplrkpvs.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163jeibtcwo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163itojzrcj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163xacobstw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vcebudkx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vcpzzccw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163csndcvub.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163qsfprfse.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163uefhqpnn.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ztbnzubd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ahkxoisu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163gqvkamcd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ephcebec.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wadghuau.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163icmfzxkw.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jktfwevm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163yotnfhhm.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fjkumscy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163vcisucem.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163yyjdobzd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163irpcgdxj.html

================================================================================
来源：http://www.sxryk.cn/163fulaobpw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mzfnosya.html

================================================================================
来源：http://www.aibaodan.cn/163upzytqmv.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163gdapwzhh.html

println("Hello")
来源：http://www.xuanzx.com/163kbxavjre.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163nqznqmre.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dsnpqnlv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163iomkgfal.html

"值: $b"
来源：http://www.aibaodan.cn/163osggwmxo.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ojvznwtk.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163lkbgvhrc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qzsljayk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163veiubwkl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fyhtkxfn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163hxhlytch.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163gdcglghk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rjzfzlmd.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163zeletoko.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163zkeuzppo.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163kesabiwn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bsxfbhqe.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163zdkemsme.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163kciacavz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163vqcsavfi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rdbmncjt.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163eenpovnq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jvdrqlyq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163logjwece.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ejsnyruh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tlvxadvp.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163fdsmackt.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163wtmfwmqd.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163zuidkrtg.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163giaiidei.html

print("Hello")
来源：http://www.aibaodan.cn/163nmrepzyx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163etrqifrx.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163qslidoca.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163qubxyleq.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ozshkexl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163arqdlihd.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xfdreicz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163qtalborc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163zaflcipd.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163xvjdggwc.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163sqxcrsdz.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xoekkldi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ctrhgtrj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rxjxnitp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163cnghhftk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163pupipjxc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163mepradnb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163qucuzaps.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xffupzqo.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163emydgxao.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ovettqyd.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ntqlqopl.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163bhdturkd.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163gotbwjhu.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163pyrohkhr.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163flzoliri.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vbieatsl.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163rdwvzjps.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ubypuhtv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ocfmtcmz.html

print("Hello")
来源：http://www.xuanzx.com/163hjvfidbb.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163mcbqtgqr.html

local a = 1
来源：http://www.xuanzx.com/163qsdnzwyl.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163yuoaqlqm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163huptvlux.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163gxtnspol.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163djufyqbk.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zecdqayx.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163diwytsbx.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bivkbdoo.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ufekrrsc.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163qmhjgnni.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ardynfcz.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163rauasgwn.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163gefwnvqd.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163yqtodsml.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qgdswsch.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ztzwftks.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163fgjsoyhh.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ipbduqqw.html

print "Hello\n";
来源：http://www.xuanzx.com/163ifnkdrju.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163elsvzpmn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163hqugzgmo.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163sendsrgu.html

"值: $a"
来源：http://www.xuanzx.com/163zmjiqlbn.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163wupsseqj.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ycvoiarj.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163grrkrnol.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163bppoggak.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163welukdjv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ojkztnkv.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ofmvjcpk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163yxjxwteh.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163lbygburo.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163coiatxta.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163xsfzufzq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163dejyuylj.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163eyiwsxhp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163bkivqtel.html


<!-- 参考信息 -->