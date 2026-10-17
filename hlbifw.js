外链999!wailian999！

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ruyvnefc.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163zzfaflrv.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lxdkjvry.html

[R29] 定义函数
来源：http://www.sxryk.cn/163cxoaerol.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163xaawxhcg.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163xjbijzxx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163voggmosi.html

[R31] 局部变量
来源：http://www.xuanzx.com/163gztpdrtj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163dmnuujoo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163odfnihun.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ohrkreqp.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163cjjlhztv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163fpqrfive.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163gbpzehhy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dxajfaoy.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nwrsxxdi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163cjqaqtgi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ikudoljv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zilsadqq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163tajjpwkk.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zbavjrrq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163bvpylwtc.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163atkzoypu.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163asrgnxyj.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ztwrjpll.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jvpakejh.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163itzhjbpp.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163tzxyxsoc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ywjhlpul.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163umnbzpzr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163uikkqgfp.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163kfkwpyhl.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163teljtcjt.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163obrlhkui.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163mktjvivn.html

[R45] 批量删除
来源：http://www.xuanzx.com/163mwxlybzu.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163fkyrffyy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kfqzlkkw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163xyynufmo.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dhimnpam.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163eucxuagr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tmmqzsbh.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163jsijxinr.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rjuxbdbn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163zpuxsuqf.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ifdvsamf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ogcplzny.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hnnzxivx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163nabctzje.html

[R52] 统计行数
来源：http://www.xuanzx.com/163mfdqehbu.html

wc -l a.txt
来源：http://www.xuanzx.com/163xtoyvfjf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163surxkbxq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pgxmlhjv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163qefixmrw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163yhawenxn.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163iyqqbasy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kgoaqtsb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163oivvosia.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jtkzmrxy.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163bqmwerkn.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hzcrktwg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163vcisdatm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163cnypbwxx.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163jpvjplpb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163pqqqboba.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163nzhvxupr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xukdmtii.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gnonbdpu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163whkiccyv.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163yyxurtga.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mwkjefxi.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163jkhkiyld.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163avekapcn.html

[R64] 结束进程
来源：http://www.sxryk.cn/163cdfulmni.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163hefipjcp.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hozqcyky.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163mzndfrrd.html

[R66] 定时任务
来源：http://www.sxryk.cn/163gootmxko.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163eyhawfai.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163arbvxnlh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163prnbmfpk.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163krsvmbwe.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163njolesll.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ridlsgto.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163qhhnbyra.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163nvhcfres.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lwmbdeae.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fimifjwa.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rkipznsj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ycgzmjdx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163oxllikym.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163egpstbux.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163aaiumkxt.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163nwkhgvlp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tucrryrw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ptcfaceg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163cdmwrthy.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163zmfczsxk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163drsnjfwx.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163lwdhkrfy.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163zrzbchob.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163pijageio.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vtgnvfsq.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163pafthqvq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tioopjzl.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ueuarhuv.html

time ./run.sh
来源：http://www.sxryk.cn/163qlakdeqq.html

================================================================================
来源：http://www.aibaodan.cn/163splwnctk.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163gflnygmp.html

================================================================================
来源：http://www.sxryk.cn/163ptlxlzvw.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163fwagtvzm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ahtjsoxo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163uwwrjtea.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163appeuuyl.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zwktjhdn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zwcvfwam.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xfnxhbgy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ctqnmzgk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dpeyvxta.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163nkjpjycm.html

strlen(s)
来源：http://www.aibaodan.cn/163mzksjcpq.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cfcywdaa.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163kbjogyhy.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hoiepboq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163gtidisnb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ekpqdbre.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163sfjrlxtw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163itdasziw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163suuarawc.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163yukhqeom.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163shthakql.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163vbvflfev.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163kttyyonw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163tikinseo.html

fclose(f);
来源：http://www.xuanzx.com/163qgympaiv.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gcemqfnw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gzhjqocn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qnkgmdzv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163foifnhud.html

[S14] C：枚举
来源：http://www.xuanzx.com/163jycwpplg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fcometpg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163qogtyozq.html

(double) a / b
来源：http://www.sxryk.cn/163eupmvrgt.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163gytjqwen.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gmuvdkim.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qoccjbxg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hbxjmnaw.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163nvvlbtgx.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nchcdpne.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163kqlpwkrt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163didtopdw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163rhstssum.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xzyigept.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163lpdukble.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163vmdtdeza.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163glunprkg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163zndbvqca.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mzgnyicw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vpdgeyjb.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163glomgkvg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xpzfijxw.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kggejaja.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xadvthwq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ylnontvu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163evvjlchw.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163iqcyfckq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163bizwxgjr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163yfhrvwnt.html

static int counter = 0;
来源：http://www.xuanzx.com/163ccwpjkfb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pdhjuxyr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lxstkzdm.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163uewippby.html

#ifndef X_H
来源：http://www.sxryk.cn/163dqlwfjnj.html

#define X_H
来源：http://www.sxryk.cn/163ppyvksnr.html

#endif
来源：http://www.aibaodan.cn/163bpoojkgh.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zrqcpxfn.html

#include <iostream>
来源：http://www.sxryk.cn/163fqzdwufn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163mdbeiitn.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ngvosdcx.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vatganuu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163wodqcgke.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163fedfustq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163erayfvaa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fepkibhx.html

[S35] C++：map
来源：http://www.xuanzx.com/163jsaagzjj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163uabadoka.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ywrjfguj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pjpcqkdp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hkakzcke.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ronpuxkn.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xjyrexxg.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jcynckii.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wmwehaww.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163xseimfci.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163bvvijgbh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zwafutdf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mukphkpr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cytquqhk.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163namfuyrr.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163dghnzmfg.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163qyqvgsec.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163megifijt.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163lhoqzeii.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fqhwltko.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163lcmfxmvk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ylwuuzkw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163snohaejx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nnqdjqon.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163pgivyvuv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163doqwcswc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163psaubanv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lnrjswwe.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fvjedqgk.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163lyofuwiv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163qghfjlre.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163izpzgnqd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163twcvmfae.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163telufbrn.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163euxipnmk.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163gggpfbir.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163tfcqhbzp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xyjtwejb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163wvzxxlws.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163sowelmkt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163lkujlesq.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163revfolcm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163rpsblmrj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163mpkcynuv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pyewsqfe.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gybrjrwq.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163fvvdujce.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163aurrxjes.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163fvzydbjw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163sfjyfaqj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163alkrqejk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ubtagaul.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163kzkyssja.html

================================================================================
来源：http://www.aibaodan.cn/163ejnyiqzb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bcmfxriv.html

================================================================================
来源：http://www.sxryk.cn/163bcajpbfb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ndgpgrtv.html

println("Hello")
来源：http://www.xuanzx.com/163wlmyynhr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163bhsijpit.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cxvwxkmr.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ewrcpnww.html

"值: $b"
来源：http://www.aibaodan.cn/163mvntuvvo.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163kkjjsocz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vscptbvy.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qilhhspm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163bebvobag.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163fbpzefcl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163zolptamw.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163beoohklm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163yhbaazut.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163utzsgqxy.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jmvxipfn.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163potsepif.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vdixokxc.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vrsvggek.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163xsmspnpb.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163evorbdmc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163llmrggyu.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163fypqreke.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163oblajycw.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qdswqeis.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163uvsdhqlx.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163yvuptznx.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163nauojyac.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163oyecxqye.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xdogceel.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163frwodtmj.html

print("Hello")
来源：http://www.xuanzx.com/163milfeljv.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163zycenbkd.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163qwddniyv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zyyjkjhe.html

"值: \(b)"
来源：http://www.aibaodan.cn/163idyipmdg.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163wpaovvpn.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gljfmhsc.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163vjidmqkc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mvtyllpi.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rpvhehhv.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163pzcvwmxz.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163dbfatvqy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163coqariyh.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wghliksz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163cohnosfi.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163romzcwrm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163uzetrqlh.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ghdugcsi.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163iqdymtmd.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lekcuwea.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163gtbrlfaz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jicsbagm.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163qhcpuuns.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163hvafozay.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163skxotgse.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163jyobhnbt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ydwydpjo.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rjiopatn.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163mylawyqh.html


<!-- 参考信息 -->