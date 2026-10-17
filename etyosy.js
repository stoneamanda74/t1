外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163kncozxgx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163xtctcozh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163oqqzawhl.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tdbteper.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ujfachmf.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163dasbjyaq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163prvhvzpz.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163pzjkfrmv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jqzdwjvi.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gocfadet.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163mdydjsnb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ywhjvwbn.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vvgayxzs.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163torkcrdz.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163okyanfna.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163udcycsdo.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bevhxers.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163mdjyoagy.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163cxiothvp.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163rawmhvyx.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163rdeqfzhr.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ticarbjd.html

wc -l < a.txt
来源：http://www.sxryk.cn/163cighbrgd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163hhgbjzkg.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163bomtnlse.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bhfgvplc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163cwmurawh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163wvwyfplc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163bpncbywk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ftxihtax.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163turjmpfw.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163qlrgaeqp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163rdenpigs.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163lwiabbjz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163scboitei.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163tpiwobqh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mxrybuqg.html

[R50] awk 求和
来源：http://www.sxryk.cn/163tsxhdirq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163dnxcdulu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ouliermg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zerkbvrx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163abubehrx.html

wc -l a.txt
来源：http://www.xuanzx.com/163ckscafdq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163laaljyno.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163bwnwvmrw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163cvdnyybb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163pizlcyqr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rsaliidd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ziitelyi.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163vwzclftg.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ekoqxfsi.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vswhcpmg.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vxfvlqsn.html

[R58] 下载文件
来源：http://www.xuanzx.com/163injrbhxg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163podwvtcr.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163chybyjhf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163crvyrmrt.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163uuelmlkr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163gywxxpib.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163imokflad.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163sdbotmnl.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ekfggwek.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163fdqcbmpu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hrocshal.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163xphvcaes.html

[R64] 结束进程
来源：http://www.sxryk.cn/163lntiukyu.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vjkwqiew.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ecvhvmuo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163wansggwv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163skqcrekp.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xkcmsxwl.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163pbiixfju.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nrwbwcyh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jdcyyeuq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163plbidddr.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163gfvywqss.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163lgrlgsor.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163zuvtrsgd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163njdndivt.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163huwhkfof.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163mrzkhfpy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163crwmxinj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163plpjpxkn.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163obsypuoq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lgryqqaf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ulyyhsce.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163axkxqrxl.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163gqrisnpf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163uokmhzza.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lzmpbgqg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ucngqtjw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163sihcadzx.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163keqppjcm.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mugqyloj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163cettamig.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163eabqemuv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163oidsvzzd.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163tyxhpmcl.html

time ./run.sh
来源：http://www.xuanzx.com/163ninfuhlp.html

================================================================================
来源：http://www.sxryk.cn/163fvlreruo.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163yxcgkzmd.html

================================================================================
来源：http://www.xuanzx.com/163bcqnqzcp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rbekotra.html

#include <stdio.h>
来源：http://www.xuanzx.com/163rtnanrot.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vtvinpxo.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ssghuumv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fxxhjrud.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ufwomxak.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jhnjhpkh.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163wvohrsum.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sfxlbvqu.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163uqkwehvh.html

strlen(s)
来源：http://www.aibaodan.cn/163ulqqykka.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163yomeztka.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163zukrupyf.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vvueeqdx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qbbyuohn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163sfkcbbiy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ufmmpstj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jdnztkcr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163owhpaxhj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ywtdyfij.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163fnmofuxi.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163upqvxtoc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163fmnwzxjr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163hkzjjnlt.html

fclose(f);
来源：http://www.aibaodan.cn/163zriyblxy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163bbtpqbwy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xhciuton.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rsmnnrqt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163fxpqhbad.html

[S14] C：枚举
来源：http://www.xuanzx.com/163snethbxg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163adwxfecx.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ksmgeayq.html

(double) a / b
来源：http://www.aibaodan.cn/163gommmdjh.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163enpwrnhn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163usidnryj.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163lzenalxz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163jpatekwf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ajfosfoc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163npvlhumt.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163kcpoblnm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oabobvtx.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163sfecniwz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ugqgxjaw.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163nwvhccwr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ifjfuctp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163iovqapam.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lbtrjrht.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qtjamlfs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tfmgiqgk.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163zqcxjvkp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ieonlgbz.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ijbtmkrg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mdpcxsxx.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ncfjxjmf.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wttaqoci.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163nmuzeozg.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zwgongol.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163udwficew.html

static int counter = 0;
来源：http://www.xuanzx.com/163zadjsxzc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163kczriroy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wfrgwymz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zslqibzy.html

#ifndef X_H
来源：http://www.xuanzx.com/163rzugicda.html

#define X_H
来源：http://www.xuanzx.com/163xrqrdnbd.html

#endif
来源：http://www.sxryk.cn/163sukiumkh.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163iesunonr.html

#include <iostream>
来源：http://www.sxryk.cn/163cvdbzkvb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gknmpxgd.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163rbwlhmjd.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163iwaicbdy.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163tlhoevth.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163dbbqovgd.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163nqbqnxxl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yvpwblfw.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zxkyhijz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ghvsgrll.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163livpwuhf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rwlkxbuw.html

[S37] C++：set
来源：http://www.sxryk.cn/163vfkgwvok.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163sershoml.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163gesychdt.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163cuoqioyu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163wrmrvgfc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163madapufn.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qnpgdlfh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163riimswky.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163bcnhpunq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163vmluhzrc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163bmezkhes.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wxqlggim.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ayfqxgfd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163dcvoyniy.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163rslmgfot.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bvpltkua.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qebpkmxo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163sdxwsfnc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163uwyqqkkz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vfiohyfe.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163aynutyqz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163juenhcdu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ffxqykvu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163omodglrf.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163wxcbslyb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qqsycajz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ypkblbcw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ncshrdlx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jiohidcd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163akxdfjje.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ondcujdh.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ginazqqu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jblhalji.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cccocixz.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163hddpvplv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163szurgwzx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163yjxgxfdd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ppyvdxnb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163krvxpbqm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163zjvqorgy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163wsbjrykp.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163cakxlnum.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ewpyoaly.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163phbqdcsk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qhophuft.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163mgfafwzv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163iyzkmdyh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rinvnnbi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163bblqhoko.html

================================================================================
来源：http://www.aibaodan.cn/163pgwghhtn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hiadfryv.html

================================================================================
来源：http://www.xuanzx.com/163xgghshlm.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163qgihmnxa.html

println("Hello")
来源：http://www.sxryk.cn/163hvdhliwm.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163lzixclfq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163lhyubcvo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163oswnctwe.html

"值: $b"
来源：http://www.xuanzx.com/163xdzpfyti.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163uhgjuvum.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zjejbuie.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163emlcrrga.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163afdlxutp.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163tfmzxdlm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163agkhdxll.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wonyjwhz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163xdttaill.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163sptkkdpa.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163raskjiaw.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163sxikwiwa.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vhsgkqda.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dxuzcjxy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163npkidgda.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zbtfbjtw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163snwyxkyv.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163cymjofcl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163phxbczsb.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163syvnpkhg.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163riyhxdgt.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cidbjjid.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163cttsslvd.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zmubkkkf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163jqifrwdh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163yiggaohv.html

print("Hello")
来源：http://www.sxryk.cn/163ylzlbehu.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163enzqfmci.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163sdieadnj.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vxllfniv.html

"值: \(b)"
来源：http://www.sxryk.cn/163nwjwbsre.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163txqvdwvu.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163foqqamoo.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163tisaojrx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163rxyhromx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163edkdqgbt.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163cydbqvmy.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163reipganz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163lyfcymlf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163gvasyyjo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ljxqlqnf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ncrnrcwr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163vqxzzfuu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163unxqvzle.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163raiengsb.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163crivjjvy.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ftfprrpx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163kltfmtye.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163nxdeoeac.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163urqrvtyr.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163faettfgq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zidpagvy.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hduspnzt.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163jxzynnci.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163edxtmroo.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163jhtmiwsw.html

print("Hello")
来源：http://www.xuanzx.com/163wjlfaout.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163vlsfzgxz.html

local a = 1
来源：http://www.sxryk.cn/163udkqlwsk.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163nstoyosw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vizgjqrf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163whaojrah.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jvjsrsnf.html


<!-- 参考信息 -->