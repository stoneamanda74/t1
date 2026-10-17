外链999!wailian999！

files=$(ls -1)
来源：http://www.xuanzx.com/163xzjrrubl.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wzjpfmsz.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163frzvwtiy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163onbgejbx.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jwikxlwa.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163yfjstlhv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163fhzdeuic.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jenqhqsf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163jhhvwfrt.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163yycviltr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zscqwkyt.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rlkvynnu.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163llncsgij.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163zswiptts.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163birrokuc.html

[R45] 批量删除
来源：http://www.sxryk.cn/163oloovjjf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163mkellprn.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163udirzggz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163iirzgxoq.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163gvuzfqvm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163tpzkxyym.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ritykqli.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ssnrwpvy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rexphsyt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163tdvisuem.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163encyinpr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163gqjvmbby.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rnhzgrno.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163lvhkzshp.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ksxtiolg.html

wc -l a.txt
来源：http://www.sxryk.cn/163dkczkxqz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163pgpadkib.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163opfcqfnd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163sqfqvfla.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163xxzliufq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163bfwiravr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163squnymkx.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163lxvkrxol.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163sdqehpso.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xkumonlv.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ywxvymwb.html

[R58] 下载文件
来源：http://www.sxryk.cn/163khddpfqk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163awmzrlxa.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fplhtewm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163qvyucbmy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163gxgvovpa.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163zadmjtcq.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ndjlovoi.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163xyzqhrec.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163uoiecjug.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hwbdtsop.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163lceixxdy.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dmorozai.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wisuxcew.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ihqvspvu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ubbsmlka.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163pohaegwh.html

[R66] 定时任务
来源：http://www.sxryk.cn/163omqsfzps.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zavaetcb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163lhriekss.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163nocwlvwq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163lpxdpjtt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pogwnfvq.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163fqisxmzw.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163gdqeklau.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ixjnlfhs.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163iblyswyt.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163gccmmral.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ypbyriir.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cjjtikij.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fgcdymgb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163hadndyjf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mbnvsrud.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163xcscrmhv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163eypywmhl.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ihkqgfcd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jmdntvts.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qserrtiy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dkagwdci.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163rtteqbaw.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lubuahuq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163pkdhqfmk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163cvexrrbs.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vtydkdgo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163jxhikina.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163woeoiuwf.html

time ./run.sh
来源：http://www.sxryk.cn/163bpqwcfkq.html

================================================================================
来源：http://www.sxryk.cn/163acopoxqg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163qbghgdgh.html

================================================================================
来源：http://www.sxryk.cn/163ncmawoiw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163qminbuuy.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163porguxsc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bgwetvxd.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wzaqndpc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163togvytdg.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163licplotl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163abdflfjj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163rxodeqad.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kaqdyoij.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163eeurfbvx.html

strlen(s)
来源：http://www.sxryk.cn/163iqbasayt.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163lopkmklv.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163lalmjnba.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bwcjjklu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gfvztvst.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163mignwran.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163vtpdlhqb.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163yjfzgtmk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wyinjmgz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fotgnjah.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lzkreqbe.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163thmbpupl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vkcetcxd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163bpqnccnu.html

fclose(f);
来源：http://www.sxryk.cn/163ekatlkat.html

[S12] C：写文件
来源：http://www.xuanzx.com/163enjdjhag.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mdsqsrgt.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bzftivxs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vpdybhnn.html

[S14] C：枚举
来源：http://www.sxryk.cn/163pzqyacnq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163axjzzxgp.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ikvrqdjx.html

(double) a / b
来源：http://www.aibaodan.cn/163deytuerx.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163prgzhekt.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gajmeorn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163tehqxoei.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ctbcdvrg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163regaywff.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163uosoxpwq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dnfgvgxu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163brofihtq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xynmwrkg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hbjyzlng.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rgehnzty.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163dxbfclee.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ihpomxot.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ersttbxr.html

[S23] C：随机数
来源：http://www.xuanzx.com/163wdsocxmw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qistumhr.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jscelblw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163nqwducqq.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163palsibgt.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ecpumfzj.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163axebbeqt.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163bmrotvkp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xgnrgkjc.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jbhicegy.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kzjrltue.html

static int counter = 0;
来源：http://www.sxryk.cn/163dyluyxhi.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163tkajugqs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jnxiyhgi.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vockyvir.html

#ifndef X_H
来源：http://www.xuanzx.com/163jmsdgpgs.html

#define X_H
来源：http://www.sxryk.cn/163bgpmczue.html

#endif
来源：http://www.aibaodan.cn/163fekwaotv.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tojvfzpa.html

#include <iostream>
来源：http://www.aibaodan.cn/163rfkkqygh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163tjurngbb.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ngrproer.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163phpyoviv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163pkgjhxkz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ygwjpsxs.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ywwbxgtz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163pioohiae.html

[S35] C++：map
来源：http://www.aibaodan.cn/163unvdqygj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bvzorbhh.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163nmnrajia.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uoranrkz.html

[S37] C++：set
来源：http://www.sxryk.cn/163bzondxsw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hiuarwky.html

[S38] C++：排序
来源：http://www.sxryk.cn/163eqemffsk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163kqfzgngk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wegvofzk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pmtvxeqb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163udvqbrds.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zaqxkeyj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163pmpcddvn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163udxqnous.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ddhudshe.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163stljmjru.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xwfujbcf.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hpavbypb.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163byeokofy.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163asamgvrh.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rdnwxblw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163xhcbsxwn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dlrxijre.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163mmnkvglo.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163snodwlnw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163bchowzwu.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163xpeghsmg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mimzwghz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163wxkcgyon.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163xgsglkof.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163pxdbtpef.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163omsvwveg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163uwxjirja.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rpylxgzv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163dmszrunq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ohxuhrzp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163oqyalzrm.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fujmollj.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163nsbikkhm.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163dcfvtvej.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163obfhlybs.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163hbhmsafy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wfmgeqqj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163goimzfrn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ggytqfbt.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vdhyttig.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yrhmihvl.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163yichhdgh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jxvotfip.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163rltugxje.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zbpinrkd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163lyygffqc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163vuucgtvf.html

================================================================================
来源：http://www.aibaodan.cn/163jipsldul.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163eqkezafh.html

================================================================================
来源：http://www.sxryk.cn/163bkzhjpuo.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163squeksfr.html

println("Hello")
来源：http://www.xuanzx.com/163aabozxjs.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163lwtveycz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ljgvcdtb.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163lecyynoy.html

"值: $b"
来源：http://www.aibaodan.cn/163qbscaawn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163xgkuhkks.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163torudzyz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163stitytkj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fdyyggzs.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163elilvssi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vqhyrppi.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163tzpnmuzu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ftajsclw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163zpohkzmh.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vsbgjucb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jsvmvgwe.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163peosnjxd.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qebkittl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163tokjmvqd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kvvajqme.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163izuiocvw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163rygrdxmr.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163uekjfqer.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163kwmrzbww.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163vfoojpdt.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163auvfoxls.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163bzvgrkcv.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xmdqhnsb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163brkoyeqz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lvvltrio.html

print("Hello")
来源：http://www.aibaodan.cn/163xbdskwwy.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bxppjcrx.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163weqzdess.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163sjesgtnq.html

"值: \(b)"
来源：http://www.sxryk.cn/163rbwgwujv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163uputikwe.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163cuzvpchy.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dcytpxco.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ivezlyan.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163fvvvudyx.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hazyoicc.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163faagdhbq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163vmrliqge.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163sifvpusj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ezszddqc.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163etqnxecy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163vvuwmglr.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163wzvzlijw.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163acytljxu.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mzglzubt.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163fddqdqug.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163qcmkylva.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163nyshuitn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163zpjktsjk.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163lyemmiyq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rejghqeg.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vxkdrmnz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163vabihhvx.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ctlrpfqv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163rnhxkeok.html

print("Hello")
来源：http://www.xuanzx.com/163dojnzclq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qlnuydto.html

local a = 1
来源：http://www.sxryk.cn/163fjhsvmxv.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163jyyqltno.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ucvevcwh.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163qsgapcrj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fadrxceh.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163gkawkuny.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163sjfdgdyd.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ghftgqgm.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xaixkbdu.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163wxmzqwcu.html

"a" .. "b"
来源：http://www.sxryk.cn/163pnziinzt.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163asszviym.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163fibkvght.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vqogqbjr.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163zoijmbfy.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kynuisio.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163owptqcqz.html


<!-- 参考信息 -->