外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163attbimrs.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jsddpicg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163nklfteye.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163xyzrsxgj.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163sshegfnq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163axxztfsi.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hjxcbsdb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163kladnjai.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ukewvlev.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ztecaaor.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qhasgcar.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163bczyvtbx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ewrmbsmr.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hmbxzdkh.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mgwhacpw.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rmgbahvg.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163tcuauprt.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mdptmbbc.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163wichdbbm.html

[R45] 批量删除
来源：http://www.sxryk.cn/163zinedozr.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gyiepbcw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wuifxhnm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163auvjhhbz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hradzcxq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163uizbtbwl.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163tnarkpis.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mspfkvyh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163oamtfhas.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163nxuoaola.html

[R50] awk 求和
来源：http://www.sxryk.cn/163npsudrtm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163cbgxpxmv.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xjtjvzcq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163jyhgcfuq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163pibuszly.html

wc -l a.txt
来源：http://www.sxryk.cn/163klayeijy.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163sgcaejsb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163aiecgzpr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fnelwbfv.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163odmghway.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qybwvvvz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vwlimrpv.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163tgnisjoc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163sysvspul.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163dergyhyv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163qcrtecdx.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163tynlmwcc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163roivktsr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vydvpmxr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rjmhgqqo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xwqxrypy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qdzecfes.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163mqdfbtjf.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ozmpxwor.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cfgoloms.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ofesixtv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163jeotxyud.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wcycpdxj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qxftnozx.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ukslgqcs.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ypwmuvbk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163grxuwgsu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vkvouhnr.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qtoopmzb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gxjpdkgd.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163qegkroqy.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163atuvdzot.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vmqytlzg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163upwhdqlf.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163gokabhfw.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163nljbtonj.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163froicdkx.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163daxvoybq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163feceknra.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163lgokfcez.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163eaxmxhio.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rdkvagva.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163semamocd.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163sdhqnvgo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163laevtnba.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163bvcthhcr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163thkfawpp.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163vuxlpgil.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163djbfgyif.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163lamxxhty.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gmrjhvxn.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163tktbdxxb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vwvefzsq.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cevbfxmm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ockkbwia.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163qnzfgktj.html

time ./run.sh
来源：http://www.aibaodan.cn/163szyjarao.html

================================================================================
来源：http://www.sxryk.cn/163rpolxvdu.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163iysjunic.html

================================================================================
来源：http://www.xuanzx.com/163gmyqjfav.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ghpqdtrr.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163kyxiaqzp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163mbpugjto.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163sbojhajh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163rnetssco.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kpxuhhwp.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vxksqepg.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163eghuddge.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163vybfsndn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163qryufpjj.html

strlen(s)
来源：http://www.xuanzx.com/163alwzqdgv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163akajeesd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163msxkwnzt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163auxeigyl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rxbfezvl.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163afdqklth.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163kupatvzs.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163drlnzhww.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163siejhkaz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nirfuggq.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lmtizbco.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163pjuwdfji.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jrfiekgv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163uitnhaqe.html

fclose(f);
来源：http://www.aibaodan.cn/163kdzuzrwb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ilwticth.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163piukmsnw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163oxplrpfz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163qkhqjbzo.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xyixjgjg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163collfpxj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163keevdomh.html

(double) a / b
来源：http://www.sxryk.cn/163mydsybqe.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163aazgltek.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163njapbflw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163chkcozdj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163iydltina.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163sngxtvqf.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163goypcvfv.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ckzcxmah.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rysxusqw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163llcajqnq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rdttffev.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ewzgpyse.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163awawiwsh.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163izrghcab.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163isjqshrk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163jyerofca.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163chepnojw.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163nnnpgryo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rrdfkvgl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163uacpihvt.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dwpiidan.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rbiytwyf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163cuuintph.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gexswmqj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163llntlqvm.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ncejdseo.html

static int counter = 0;
来源：http://www.xuanzx.com/163fkeejyvu.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163hbykskvl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163yfyhqetc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163phhjdikf.html

#ifndef X_H
来源：http://www.sxryk.cn/163pwmqkwzn.html

#define X_H
来源：http://www.aibaodan.cn/163pthdgmle.html

#endif
来源：http://www.xuanzx.com/163xzanpjho.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ldbuhasm.html

#include <iostream>
来源：http://www.aibaodan.cn/163kexhbdea.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rilnxced.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ruzbveyx.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163xvnqqjgu.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163baxbqdmt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163jpyctdcp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wegmgsyq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163vsszjocb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nepoiwmm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vienvnzw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163kwhuqnxj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wttwkpod.html

[S37] C++：set
来源：http://www.xuanzx.com/163dqnkfamq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163fhteyokb.html

[S38] C++：排序
来源：http://www.xuanzx.com/163cllfnfah.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163gahikvsv.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qwamhtwv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163eecubzuw.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163zbhzveld.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zmgnsjoz.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163tayjwaif.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163wrdvhtdb.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xitxflor.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wzuosove.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163lbszhpzw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fobdckcr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163utzvgcyx.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163uwjudwge.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163zruefyrb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yjptvrnf.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lufpdfls.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163mvktkmtv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163lhwuaduy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pbiceqwi.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ftugerfw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ddqayido.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163wzdkggam.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163bdybfsxg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jhyfdkrn.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ifshluva.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163sjulnher.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163viysppco.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163krxuuhsq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163agvnhnun.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163stculseg.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163nqajyrij.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vwiuzjdw.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163urnqfnnv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pcecgdug.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ttikkwkv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163nwpburkm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163hsdmnjlp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163dxnxwpzh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163hmuaesks.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163mtdlekuf.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kgevelhy.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163cukzzyhi.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163rlhmgwjn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163hmrwxetq.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163hhoxaufk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gzwavcsk.html

================================================================================
来源：http://www.aibaodan.cn/163rjvqvztj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vbvxxdud.html

================================================================================
来源：http://www.sxryk.cn/163zcjhrlsp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ivemcnby.html

println("Hello")
来源：http://www.aibaodan.cn/163ysbejsqy.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163nlzgnkka.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163qpcrorhq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fnztvugs.html

"值: $b"
来源：http://www.aibaodan.cn/163kldlolnj.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hpckygjh.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ayruwxqh.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ktobsbga.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163tdxongws.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163tkmuzdkl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163oqszjxxq.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163lgplfysh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163irpurpun.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163dktrcvsf.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163yhkxxrwo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163boryygyf.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163pwpnjlvo.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163sjbjsonv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rckiplxh.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163tlgzasgv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163boejjrza.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163zmxmjabc.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qkrwnzuh.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163eqlcudid.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ednjcovt.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nrujdhmv.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163bhprshvk.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163bxnusaya.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163zuxktwiy.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163utdjzbkz.html

print("Hello")
来源：http://www.sxryk.cn/163wdhmnidp.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163kpkwedau.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pcmdcuta.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163foidjhmr.html

"值: \(b)"
来源：http://www.sxryk.cn/163pchgffqs.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163lhgtfqoj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163podmpzci.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163dyglcixf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zogznkhj.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qydcgmnf.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tvhvjhiw.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163drycydgv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jebwpglr.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wwhlnnes.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163zhksucsj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163afuvggjg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163lbympieu.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163doujkeec.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163vdcuycmr.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163uafrbslr.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163puhclbyp.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163tzuxmium.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163enaflvso.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wxwnkqqy.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163cnndyzhv.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163kvsaunio.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163enbsnlns.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163zltqdbvu.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qexwgnnj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163hgcuicxh.html

print("Hello")
来源：http://www.xuanzx.com/163hajyghal.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163tpvemmxu.html

local a = 1
来源：http://www.xuanzx.com/163xuxgelgf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163rlwqltsp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163yypygpem.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163yqfvujvk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163pratcctw.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zvfevyid.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163zmjsqqeu.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163cqvskebw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ddzexncu.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163kupgozkl.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qxvudwgm.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pyymenob.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163zqolmdgd.html


<!-- 参考信息 -->