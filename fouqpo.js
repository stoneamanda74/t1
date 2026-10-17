外链999!wailian999！

files=$(ls -1)
来源：http://www.aibaodan.cn/163mulohout.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163nisscpgm.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xvtcfoqb.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163eivjrmey.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163anrkuqhb.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gppuljdh.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ykjtrafi.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163glrzaqzr.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163uhjkmmsw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163chdsmwld.html

wc -l < a.txt
来源：http://www.xuanzx.com/163bvagzfgf.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163quxruykf.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163luzbeucy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ulsurgbp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163gykozyvm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163khqmmjnb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163glheuhen.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nwpiktgd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163tgnxwwmz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qzaywaau.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lhhpddei.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163akdbasba.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163oramblqa.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ymihkfeo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xsdgqidl.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ztncdddb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163gqykwlcb.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163tluwsecq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163nvpjeekq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163shgpgqsk.html

wc -l a.txt
来源：http://www.xuanzx.com/163csuguhap.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ywmwfvpp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163iqbscekt.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163nfumblih.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rvtihrgj.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163klrsnadr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hyggznkz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163uyjxvmfh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163vzryqqje.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163mvlsohrp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163kbuuwdoy.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nrpizjsg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ztkztnrk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163vddgmqgg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163bsljcret.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163gqzuvxot.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ivdoklfc.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163uwjusnen.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163qzvevvao.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cnjhyrim.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cotvodzf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163hrkdwysi.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163anetbwxp.html

[R64] 结束进程
来源：http://www.xuanzx.com/163uvsleqlw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bsyxxjbj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wwsqdjox.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163qikphbww.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zfngvzvm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gumajuka.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163duxsgdhn.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163aumpeqnz.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163pnvpsdxu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ykkauust.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163fsgyvnty.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ptbxykcs.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163crdoaogn.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lcbnoxib.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163auhcuvxw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hxniqknj.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163czbvyuoj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163fvmwatbo.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163bsbzpxff.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163rswukqdc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wkufdyig.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163lcrwoyav.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163hwaojukg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163kjeaywcd.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163vrdzqmxy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cgjlovnp.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163purakdnq.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163eszwslvt.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163zucjoyrp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163feiknrhh.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163afegfyfx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163djedokju.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163xkruvftu.html

time ./run.sh
来源：http://www.sxryk.cn/163zogzcvug.html

================================================================================
来源：http://www.xuanzx.com/163lzoxksjq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xtmxxotn.html

================================================================================
来源：http://www.sxryk.cn/163zxkskghp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163epajvaok.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tzrunrxp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163laklotpv.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wwiubnqm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163uesyztbc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wznerthd.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vszzooqz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163kymiqoat.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bckblhvm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163wgamolsl.html

strlen(s)
来源：http://www.sxryk.cn/163rsdhemmo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yqzdhdfl.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rpgmniuz.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163lfddvqfz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163lkpcqtkk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kvwrvdew.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xeuctqvk.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163iesdishv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ocoyqluj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ysbsqvdy.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tknfdmek.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163hmskzqid.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kvaxever.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163fwjlgbhu.html

fclose(f);
来源：http://www.xuanzx.com/163isntvqnb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163vxiaatlv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hyokbini.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xtalojvj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163fvbpftok.html

[S14] C：枚举
来源：http://www.xuanzx.com/163kvicloph.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zvwpbdgi.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163uwxqhtle.html

(double) a / b
来源：http://www.sxryk.cn/163pqgnpbxs.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163dpzpwzjc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rejbyssn.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163rrxowyjh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163vzunvdax.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jlmqmcup.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163nmnfedaq.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163dmglznnz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mchyojiq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163bwypxqlx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vekhzbcf.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zgzfkbdg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163fptfupja.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163obhibwlc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ufgirgwr.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rbzobeky.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zvgnzopo.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163suvsqbgj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163dxthvzou.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163peturwib.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ulkihiwo.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vavaqgmp.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163stoagwis.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nkchpnxo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163viuyrusb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163aabmrlph.html

static int counter = 0;
来源：http://www.sxryk.cn/163jfznmvda.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163oinktqqi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pnwvmbxk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163pgthvlhv.html

#ifndef X_H
来源：http://www.aibaodan.cn/163rsdqdpjc.html

#define X_H
来源：http://www.sxryk.cn/163vmbxvupl.html

#endif
来源：http://www.aibaodan.cn/163itumrbgq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163kjkqdkgo.html

#include <iostream>
来源：http://www.xuanzx.com/163nsykaepl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163uiwudnqx.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163dxnctxpd.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163yskivwav.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163zbvqambm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163rrbskmzc.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163uvyxjjhi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bdqitwrr.html

[S35] C++：map
来源：http://www.sxryk.cn/163ygkgriwo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ejlriiad.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163fudzgugy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163djafryuh.html

[S37] C++：set
来源：http://www.sxryk.cn/163jwjhidmr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wcfyyomn.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cpclgric.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ivdhqcil.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163smlszlfe.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163xmazlskk.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163wpvpeyeb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163cylcjytc.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163iutvjvka.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163oyqreiwj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163zstmciov.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163pjzhoibd.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163qnijtypu.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163oapfltko.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163meihoeri.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vyvmtnve.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163sihsnfwp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cuztcfxw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163iffagqip.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163bvqpactw.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163cdczbkpo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163imxbimts.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gbteysyg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163qpbtnqys.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ttiubxhz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163hfygamva.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wouwohik.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163tutjxmti.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dohqfvrc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tjtnhagt.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xzlzvwxb.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163hqxephoe.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kqbkmjrs.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163mvajkoxz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163whgcbjin.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163pqtpnoya.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ipqoofyk.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fuaaadyv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mjnmmosa.html

[S56] C++：optional
来源：http://www.xuanzx.com/163iifjvktd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163beybgcst.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163mnfgvqsy.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163xpizcdfp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163szmvdhpb.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163wescfrzs.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bhrcudnd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xcgzwsvn.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163kkfjnxau.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ucxylnzi.html

================================================================================
来源：http://www.sxryk.cn/163uwbshyxs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163nkgkxrgq.html

================================================================================
来源：http://www.aibaodan.cn/163cfxdejla.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hpqooasb.html

println("Hello")
来源：http://www.aibaodan.cn/163xndpfaek.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163uivqdbgz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163lwkldgnj.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163dhsdaioh.html

"值: $b"
来源：http://www.sxryk.cn/163cyscbtkh.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163bumfohqy.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163fzpfcljh.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ianrjnxd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163tfyhmmka.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pwwcponb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163iefrbtwj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163evhdljfy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ndolnqvy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fxfcmvpk.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163wgjfenqd.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163mjsjtwxw.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qczpuenx.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yavxrkww.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163taovqfmu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gjyefyri.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163peookyum.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163eeakusgg.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163mjqqyakl.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163qkhmzwph.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xcjaotfa.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wdxqsyyc.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163inkjvlex.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163yocowvvh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163whosaozs.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163imwujsew.html

print("Hello")
来源：http://www.aibaodan.cn/163hejbtlvy.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163zrfvaomw.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163gpgwidwm.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rlmbehmf.html

"值: \(b)"
来源：http://www.sxryk.cn/163tlgiqrbp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zfzhxmei.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zbzsxgih.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163kldvqtjg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163gjjxjspl.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163crnvfeht.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163whznnupw.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dobacpgy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bgfsmtsl.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163lgxdkbhn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nykhxdnp.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163uvgqusyj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163tlhukwkz.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163fxcqydtn.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jerydshu.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163maczacjz.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163peqhcsen.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qmiilqnd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163lrgiseco.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ziqnjgzi.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163fkzihvqw.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163trunhean.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163okvmewvd.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163upqmfunh.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163dibgpvwc.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163elyptczp.html

print("Hello")
来源：http://www.sxryk.cn/163mzmvecet.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163dtzvdrie.html

local a = 1
来源：http://www.sxryk.cn/163acxxwiah.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163hmkkpllc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163gqprekyh.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xnbuoasg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mexbgarw.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163urlrsngw.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163xodkjsgf.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163sivzoumn.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163lctggfsb.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ccxtewnn.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qmcuzlrd.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163taimorti.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163bzipyywx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vlanyzee.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163lmrphjhf.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hmajsqwo.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163unjmfzjl.html


<!-- 参考信息 -->