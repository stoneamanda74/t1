外链999!wailian999！

files=$(ls -1)
来源：http://www.aibaodan.cn/163wdamiipd.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ybozviqr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vpwkzdew.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163uzatbufn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jzymvrsc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163jppznssz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163edhqyped.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163njpufldy.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163vaxkotfg.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nxzfdwlp.html

wc -l < a.txt
来源：http://www.xuanzx.com/163gvlyohaa.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dcvadvkw.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ryooeonm.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163xstshbqg.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ljnmcgzk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163liqddaze.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dhzcjqgq.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163eahdnwbv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163igzlgefr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qmwmwhai.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163dkrvueft.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fmokfmko.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163lqvdvmnh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163dftanmrw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163djisegvr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qlrklsdd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jhjwapvz.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fzchxwqk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163olcljscc.html

[R52] 统计行数
来源：http://www.sxryk.cn/163bqfadmps.html

wc -l a.txt
来源：http://www.xuanzx.com/163efuklogc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xkdnduij.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cdbpuxuc.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vweulacn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163mawonndx.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163mvgvzacm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163lctxtzuu.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ifbakoyb.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pbgefecf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163jeupxqmd.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ayopnqzs.html

[R58] 下载文件
来源：http://www.xuanzx.com/163bkgomxyz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kueohuzq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ygkbogfu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wxrrykfr.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163wgjocfcw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163omeouwhk.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rvhvribh.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163kysduqhm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tscqtyxs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zymownly.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kfyccpxf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163srplwkga.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tbbhaytt.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163hcfwhmtd.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163emzfdjzw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ztyytwdj.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vqabpcxh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ewgtimik.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dmcwwder.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163nguduirv.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163kqrwxpeh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ntzrifst.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163jucyumgf.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ryfowqtz.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163sfvpmnxp.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163pluypkhq.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163juafowpq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ejvajggk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163nzmwdbtm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163cgiwzapj.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dkbqtuga.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163wxfkaadw.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163oxbeqoqp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163smzhwyqy.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163onvciuka.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163jkehzdyh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163mrahyzgw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163cfxaabtq.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163fvbonjdm.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163fnenqaly.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vprhwzuf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163xdqtceed.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163azkqpbjb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jzfjvrsp.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163catdxqkk.html

time ./run.sh
来源：http://www.xuanzx.com/163lpychyny.html

================================================================================
来源：http://www.sxryk.cn/163aklrsoye.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fcqaxufv.html

================================================================================
来源：http://www.sxryk.cn/163titlsmsu.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163aqfsggje.html

#include <stdio.h>
来源：http://www.xuanzx.com/163drzyggkf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ktdonzed.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163stovmvoo.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wxbxgomc.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hmynnkdq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163lpbkzdrd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163fyydktqh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163mthenhxh.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nfjldobb.html

strlen(s)
来源：http://www.xuanzx.com/163ewmokokm.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163exjzwgjx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ivmxtbhy.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163bsvplnrj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ggfgequh.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hcfapmjq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xhrydlek.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163bemkohcc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163kktnlhnm.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163jnmucyxe.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163lcschzsz.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163umyxylze.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vewmybtb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163gqncrzmg.html

fclose(f);
来源：http://www.aibaodan.cn/163qpedrjxm.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hgibwrdg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163nxtdilhw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163uwpbilme.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kscaypus.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zcgcomnd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163cywsupby.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ssbnkeyk.html

(double) a / b
来源：http://www.sxryk.cn/163pcofzgsn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fbkhjjqa.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ejqdkjgh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163kuomyubb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ehxobqpt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163rhetzmkc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163wmgszrjg.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rzqwwvjf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qohaxefv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ahnbvckn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hehdypbh.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163qckbjlgb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dkbjcrpt.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163tvwidsxv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vmadcpqe.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ydfadokj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163oqwmxxyu.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163usjuohxx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163qunxreak.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163psjdzkzj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163piztkysc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vztqxvph.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vgccklvz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ewlmasav.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fsqnduyw.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qfgzdttk.html

static int counter = 0;
来源：http://www.xuanzx.com/163rqwsspea.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bzfnfqni.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163cftqbotz.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163jwdrinqb.html

#ifndef X_H
来源：http://www.sxryk.cn/163chvcfnla.html

#define X_H
来源：http://www.xuanzx.com/163pzomubnv.html

#endif
来源：http://www.aibaodan.cn/163ompfhtjo.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fdaalcuk.html

#include <iostream>
来源：http://www.xuanzx.com/163gsbtbdwc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ncnmibbs.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vtzkxyto.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163mjvdfdax.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163pithxjkt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ijmtohoi.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163xmpqyswd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zfkhpzjz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163iitbvaoj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hajtrqre.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163lracjsvt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fjwpyero.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jjdqtqpr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163qxkzpkfx.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163bcsikptl.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163cntrkcjd.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rymuzrik.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163jevmctia.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163fdlvnsnp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163dzohlfce.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qqihayxy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163sfixpunr.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163kgsfcwce.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163bwwpbccy.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pbjffhkq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zvufzdzk.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bidvzlzx.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ipueutqz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gmdfpbrj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zseerihq.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163acoawzvy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cngwanlf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ezkglksr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163vrhfmnji.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163uetosbcg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163awnecwjh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xjbqwqob.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ypjsehtu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gpthuxqn.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163agembiln.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tjkgydlh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163renfbhnc.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163tncfswjt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163tmhcmexu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zmiqxdbq.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163kccrlcnu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fnggftkb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163diofaans.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qxifwbzq.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163hpfauorz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163okhhpaln.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rjcoicrt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163dunnxflk.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163gaaprnkc.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jjravdpe.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163szgikbhe.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163adywezbx.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163vyzdjfiq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kjwqvtlj.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163dbbimeuo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163msfvllbl.html

================================================================================
来源：http://www.aibaodan.cn/163jowlwsoz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163snhpjagn.html

================================================================================
来源：http://www.xuanzx.com/163rxiwzanc.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ismxkbis.html

println("Hello")
来源：http://www.xuanzx.com/163decisrgl.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163iouwavop.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rpnnkorw.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163mxxekhos.html

"值: $b"
来源：http://www.xuanzx.com/163zsilipdh.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163sjacisew.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vjfkxrhs.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163wndeyakp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163mmwtoewa.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ovwbxiap.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163yaxhflqp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ywbjvzuk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163btogazeo.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ndaostij.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163dnsqydnm.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163wykecanf.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bkidqake.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163djuzeheq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163sqoekqry.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163gyolxfsg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163yiggjgxd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wlytdfgv.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ioaksotg.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ryuaavly.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163bygwkytm.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163sxpbdlgu.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wukaljzl.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163tuphnaob.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vemvmtuk.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163usedilcn.html

print("Hello")
来源：http://www.sxryk.cn/163yebvacfc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163onwnndxn.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qnwzxkvi.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163pminmzch.html

"值: \(b)"
来源：http://www.aibaodan.cn/163vdhvnxeo.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163mfaaltuc.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163urmgixnr.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163isbvkuvt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163fusrnbie.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dvokifzt.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xgioyryv.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163kyrzewrh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163mzutrljv.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fvszvlnk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163kjryzwrm.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163tqmymvoo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163gkphzffo.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163qxzjrgzt.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xlimratv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qxfoxfgf.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163fwiljons.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163nirfppbo.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163jygmmdwu.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163vtlzmmgr.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163djkonzsz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163fjfyvksp.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xugcvxhx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163cwmihxge.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163yyicnpbd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cqdfejeh.html

print("Hello")
来源：http://www.aibaodan.cn/163smaffivm.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ybkwqrde.html

local a = 1
来源：http://www.xuanzx.com/163pxcbyzsy.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163tsmcptdv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163rfvjuxci.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hwpirror.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163cejdtoje.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163bsjkvtjg.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163blaigzft.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163elqlbkxk.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ujkigmec.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163pzyxxzkv.html

"a" .. "b"
来源：http://www.xuanzx.com/163lfxtvded.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163pwyofazj.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163bqtgbjyg.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hblpphze.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163rkxvjljs.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jlgteskd.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163raqsntxj.html


<!-- 参考信息 -->