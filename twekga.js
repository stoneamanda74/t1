外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163wnpovift.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163tdfjfdni.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wwcyuwgc.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ulocyozv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xucxwqwu.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ievehrjj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ggrllinz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163eiiapfmj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163uqrtlkww.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mvkclown.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163gehdzjhm.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163aqhhgrzk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163tphcnodr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ahyqyzqp.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163bcxzlffm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163bwytafpf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163royroeqs.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hfwruznk.html

wc -l < a.txt
来源：http://www.xuanzx.com/163nintpqgv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ufiovagf.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ctgibszv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gwrnunei.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163mlvmiyxx.html

[R45] 批量删除
来源：http://www.sxryk.cn/163bsvrztij.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163xxiggzgc.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163olgabgqi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mfqqiffc.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ivtwpqsu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163urwfqnbt.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163wxvkhksv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163alppskmg.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vumcfbre.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163lcramldx.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163yydrvskt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163wxotzfny.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163soeqxrbc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gdujbglw.html

[R52] 统计行数
来源：http://www.sxryk.cn/163phjpuetq.html

wc -l a.txt
来源：http://www.xuanzx.com/163kxtapitn.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nllpxynv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ucauzrrn.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xaccqenw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wxbhjfca.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163maemnjfm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bxzxzgpk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163upvlfrls.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163izufjpss.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ialywdrz.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163yqrovqmr.html

[R58] 下载文件
来源：http://www.xuanzx.com/163luvbxvor.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oehwqfqb.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163qlsavkpi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163mslrffoz.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vfoywbya.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163swrsqbtv.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163paiczehc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163pimddixs.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163crgjrthk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163jzkyised.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mvhwldzw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wgvifham.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ipksbhds.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163towfqrws.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xowliebg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dyvfakim.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hbqwhskt.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rkerxdjk.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163qirmfgwn.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163vpqjnkim.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163nskprmur.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nogoqvms.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163cluqzsih.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vccwpjqe.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163modljlvd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163hhzmcvgt.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ekcjzaeo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163rgquleyr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wodieuos.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163seceuhlq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dsjaiimp.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mxwirybk.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dhlnlduj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ymnxcrvq.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lthudnsy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163vemachqa.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kycnasxy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ctazvhsa.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ewatflcr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ipmkumxd.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163csxdysgd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qkoebqgb.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ikpsvahj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mrtkrlde.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163wwdafaji.html

time ./run.sh
来源：http://www.sxryk.cn/163foxlmvqx.html

================================================================================
来源：http://www.xuanzx.com/163mvbjjxhs.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uqkajrqv.html

================================================================================
来源：http://www.aibaodan.cn/163uhwqkjrp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163eebbokal.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ccbfpmfd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163uxlugjzp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163bkhebobw.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163jvafsivv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wxtkkhqa.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163toczweyj.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ezgtneig.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hngyubrq.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163idzaymit.html

strlen(s)
来源：http://www.sxryk.cn/163poknhuis.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ymzwkpci.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163twdenojn.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qactelzi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163bmaxnfhy.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163dyklrmvn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gdrxxozh.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163gcesquno.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jawrcntk.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163wyoxprmp.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163zeronmfm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163nxctqiuu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163voetoqsh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vezebadu.html

fclose(f);
来源：http://www.aibaodan.cn/163uflwzubv.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163jxegggef.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163tswdhhhc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163zhuzhcqk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163olvyxhxy.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jvrvzamw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mmednsft.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163uexodqoy.html

(double) a / b
来源：http://www.sxryk.cn/163ekhjapeh.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163meeqiavl.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163hyfqoemu.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163hfieexfr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xiivngfd.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163agjcmggs.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fjzsfztq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vzqmudpg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163lhuaducj.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163fskpculz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163skuibqvn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zhozqbxp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fjxfpzmd.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163synzgjcu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fbhyycof.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ntlbltru.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163gfshlgem.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jgbefgzd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163kydogvrh.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163yaszpofu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ylpjeyly.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kytovcdb.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163lgvweojd.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163vquaoaie.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ydwdxihc.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163skosehvw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ojmhadtj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163aywkmsah.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163mrsabaqz.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fubuosxi.html

#ifndef X_H
来源：http://www.sxryk.cn/163adrawkjx.html

#define X_H
来源：http://www.xuanzx.com/163bqhsvtvn.html

#endif
来源：http://www.xuanzx.com/163ryxnptms.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163iejihyfl.html

#include <iostream>
来源：http://www.sxryk.cn/163ihdrwtej.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163frpolxwx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mjwhkxqg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lwakxrlu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bxyagqfy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163pdykabud.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zwutqkzy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dsamzeva.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zmeomqgv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qodepykb.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163whdepnmn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163usdxnhsj.html

[S37] C++：set
来源：http://www.xuanzx.com/163lrwoixpg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yumesznp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163corsbefw.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tmejifuf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163bgbspimk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163axjfielv.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ksxhmlmt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163kcrawtju.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163dhalhtar.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163junmnvxx.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163odeuhijh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163meopcrwl.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163amzwvhtz.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163mzszkein.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qminqsqb.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163zefvsdko.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163etswycpj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zdhidgfa.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163cggmgjtf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163oprizwsm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ecdaogix.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wsluumsg.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163vdqrmuub.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163njnetjgn.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163llfxjtkl.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163qaorkgvb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163dmaabozv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163pygkhkvp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163yeimuhcl.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163moekliom.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163dawvpiyz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xfzcaeza.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163tlfzdaza.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163hhccaqhj.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163hvvsjstn.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zwjrzxiw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163vwldhrbt.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163igktmkus.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163fzxpbsol.html

[S56] C++：optional
来源：http://www.sxryk.cn/163trckhthl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163jgwrflro.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163hlexdixb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163apbhljof.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kwphzhxp.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lxdxvqil.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163gbuiszib.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nzomlhjx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163lwpyczrv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163asiwtwww.html

================================================================================
来源：http://www.xuanzx.com/163ukpnxvke.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wcpfxxrg.html

================================================================================
来源：http://www.aibaodan.cn/163xmovuadv.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163vwpivdmq.html

println("Hello")
来源：http://www.sxryk.cn/163ecojlpqs.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tghxhjwp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163jknxwryf.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ohroeatk.html

"值: $b"
来源：http://www.aibaodan.cn/163mjjebupw.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qflznyzc.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163hasalgom.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163kgnhfkff.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zngducvz.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ulkjzilp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163uzesvggb.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163sommsyfd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163pjkjtxey.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lzfqldog.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xcpgemlw.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vacrwdua.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ovdonktd.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163xfjhycsc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163jifpzcba.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163msarqmzo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163myqdfjwq.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163fnggnziv.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163nmhflhfj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vqrlkehm.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163evmkqoii.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ydhetgux.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jpwouqjl.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163auwvyefi.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163zlghcbog.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ltsyzghk.html

print("Hello")
来源：http://www.xuanzx.com/163ceaxqfyy.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163foigqsvp.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163cwdfsyst.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163tmhytovk.html

"值: \(b)"
来源：http://www.xuanzx.com/163lgyhgdpb.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163nsuobdkj.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163fqcuvbux.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163czwvgsox.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ihvncixg.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163iwntkogy.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163nnhekoyz.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163rzxhryty.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ezcvmbak.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xkiflorw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163kaywpuim.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163zseucomw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163sfvgnjoc.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163didnsxpm.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163bbqtqxgd.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163guoxjnml.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163flrrmdim.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ljlewwfx.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163foetfcgq.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163mdhmccjb.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163gdaoqupq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163fbuuuohv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ecpaszyr.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163nclvlmcn.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163izqhezic.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163swmtkzli.html

print("Hello")
来源：http://www.aibaodan.cn/163zgwustqz.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163lszskiue.html

local a = 1
来源：http://www.aibaodan.cn/163tvwyftbb.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dlpimxmg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mtukrflp.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163vqahlzex.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163zwlcayoc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163pxobtqkk.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163daonwaap.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163uwtciyss.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163fcqowqsr.html


<!-- 参考信息 -->