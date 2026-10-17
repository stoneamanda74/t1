外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163pylltyfd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163xbizjvah.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163gnrymzno.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163lrqejjog.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bgiubrzc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zzdggxtu.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jyqbcjjs.html

[R27] 算术展开
来源：http://www.sxryk.cn/163iyswgaxe.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ojwhylnd.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163usssclot.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163njudmwnl.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kisuiwwd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163qqqlizth.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163dsvhbezy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163symbwhub.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ankljnkw.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wdbwbbua.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163cayyikyb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163qnsxmmya.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163opkpczrl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163iucvkhqv.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163urzkvmnt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qgrntnpm.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xdrmuhsw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163upasxgal.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163njmpirfb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163sfjytywn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163pmcqgjsk.html

files=$(ls -1)
来源：http://www.sxryk.cn/163cnffslbt.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ylrqmxta.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mgwpbuxx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ohinersa.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163znfkeikq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163gyjawkdc.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ppdzneew.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xuhcycce.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vgypmamx.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163uidzjfyb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163dsztpite.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163kjwpealz.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jslyaswx.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163awjkkags.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163szcmvcid.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xtohifvf.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mtblibxz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ysrainip.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163abqqyjaq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163kihoktim.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163jojottwr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163qtgjwirb.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163pvsiygda.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163cukvutms.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163htayovuq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xryeqnbs.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163nzrrntbo.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163mseinlao.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xezxmqut.html

[R52] 统计行数
来源：http://www.sxryk.cn/163vyptzyts.html

wc -l a.txt
来源：http://www.aibaodan.cn/163gvwxiyrj.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163icanaxkz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163fkijkckn.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163heujtzvy.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163zjqecqpm.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163pcxjxwdb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ndwmphyt.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163apqcwfjg.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163lrxwjsnl.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163iiqxjdxq.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163sbgewfsq.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ntxywhhv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163nylvqxld.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hawojuds.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163slukpjjq.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163hnnvxrum.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jtfrosmx.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163paarrffp.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163jutynhxg.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163mkdoomuc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hwtoffgw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nkjwjijt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163orqbehcw.html

[R64] 结束进程
来源：http://www.xuanzx.com/163obyqovzv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163uooswbod.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163uerigoli.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163igveiqwy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163goobehkj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163nviflthp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163wbatqhkn.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wrpvpuin.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qywynzbr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163rbdrrpoa.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rhfzizaf.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nlcxqlol.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163uhlfmtas.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163glrkmydh.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163qnepvxxi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163faqewenx.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163smxwdaua.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163hbsggrsq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hftwssnq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cxddmwao.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163cfnllhls.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163caenpdfp.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163bhecakht.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163uttlnmea.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163snytcluu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zpjuwbyr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mtoshteg.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163eudlpupp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163gtieqnss.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wlggewve.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163yemvvplf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163duoqfhaj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163uuttvwtm.html

time ./run.sh
来源：http://www.aibaodan.cn/163xuvvriwa.html

================================================================================
来源：http://www.aibaodan.cn/163lagrtoov.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vgcnjcyw.html

================================================================================
来源：http://www.xuanzx.com/163hwsocldh.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kwupmfgk.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163pvukttwp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163msuqpttt.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163bmivgfig.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ramgsfmn.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163risirdfr.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kkbrccwd.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gdqjzncy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163zsnkpkad.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163cwcgffir.html

strlen(s)
来源：http://www.aibaodan.cn/163xqhpkawj.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163kpmkpuda.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hzvejijt.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qvvicfai.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ckwgprut.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jpphxqsm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ojpbouqy.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163arcecykp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163crbnkofi.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zwpbipgr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163nzplujfi.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163rwbguzgy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163diozpwok.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ukxqzstp.html

fclose(f);
来源：http://www.sxryk.cn/163hpalgojl.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bszdnsbx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163mnhudjzf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163mttcugfz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163lmzqbcrr.html

[S14] C：枚举
来源：http://www.sxryk.cn/163nyzlhmfa.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ikqzrxry.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ohycvorl.html

(double) a / b
来源：http://www.sxryk.cn/163oethehrr.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163rruwufcs.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163toaawajd.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163gagjgsza.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163grbwnpoc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163khmckvjq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vcugvdab.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163kmphbtqb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gmimuxpj.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pbtjwxwt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qlbozayx.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163buspjchj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dedbjgcl.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163esiloahd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wqindpxh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163jhxpmqik.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vsuqpfbu.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163zzaizfev.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163rbkpyeil.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163dmrrqfco.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163csglsewp.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163anocnatn.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163obnrtumv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ikohqmaj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163pbkogkwh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vhxernaw.html

static int counter = 0;
来源：http://www.xuanzx.com/163qphtqhzw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pegdbtcq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zvantnun.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vilvcxsh.html

#ifndef X_H
来源：http://www.xuanzx.com/163ypytmojs.html

#define X_H
来源：http://www.sxryk.cn/163yrsfrmes.html

#endif
来源：http://www.xuanzx.com/163gfwigaqv.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ivtnehla.html

#include <iostream>
来源：http://www.sxryk.cn/163vzatsjhq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163qfykwulv.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163lblmdyni.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mavldpfj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163hpqfxjrl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gvvrpztb.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163irkogpnm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ynbscavu.html

[S35] C++：map
来源：http://www.sxryk.cn/163oqeusroo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zdedmfan.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163iinfmepm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163szcqivex.html

[S37] C++：set
来源：http://www.xuanzx.com/163wgeghicx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fqoqotri.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fxhagjhb.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ytvgcfyy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163kmxsfsvb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163hnmmnwlx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rcmavvtg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163slfebazw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jmanuodk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ejcwoblj.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163swzohlaw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ynemdmdg.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jbqfxblk.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163dftawlkn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fjjlkdie.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vndddrpw.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zbhhjbmd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163pruwhpjb.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163fxneaetm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rjixzwsr.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163lutozxxz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qafkljrw.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nqseystn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qajvlxmd.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kcjhavwl.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163bvjlkvtc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163tjwxcbyk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nkjteirb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xsyrcoyb.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163bytjvgni.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vbosbqco.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163mitescbl.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163glyuisqe.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163huivszyb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lffrfczf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163nobjretr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163gwgfksjy.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163cnybotlr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163arlxmbew.html

[S56] C++：optional
来源：http://www.sxryk.cn/163peuzxnil.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ragkuxjs.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hciezhkw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zuwccpyr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163qzpnqflj.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wkqpsofy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163gfvsviif.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163phygakxx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163prgcwnpd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gbqhyula.html

================================================================================
来源：http://www.sxryk.cn/163yarsxvbw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zauhnrky.html

================================================================================
来源：http://www.aibaodan.cn/163bqfztpkp.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163iqsqhmds.html

println("Hello")
来源：http://www.xuanzx.com/163kkkiurme.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rblvqgja.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163yemghzby.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163lqptydwx.html

"值: $b"
来源：http://www.sxryk.cn/163xakjuqll.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163tvyxqfvq.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163npxfsvyx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163uarmugkz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163blbrzwcg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163vwffypux.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163eobeycnh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163dyeeqbis.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163tcvtfmdb.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163tvchapgm.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163eihzprqv.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163fifzancg.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163zbsjptnr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163zmqpplkc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163zlnujjet.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163wvjsxckd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163frugojvf.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zzejrhnr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163hotcjjcq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163dibwwxer.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163nxnrecjd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163qaduesvi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163pdfztnbc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163jzsokxfj.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163uqxrikxb.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163giikjopf.html

print("Hello")
来源：http://www.xuanzx.com/163kudvfirx.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163dsuaubqd.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pdecaynv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163wjooejvr.html

"值: \(b)"
来源：http://www.sxryk.cn/163vxrmocia.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ftbkfome.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fnewyfsm.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163imtidjxe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163axdjdagd.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163egwlenom.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163fjtpvcpk.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163wkpiguzj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163rnadtysk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163mhzigpbg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ascchhvt.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163bzxpnbsa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163tcozmrxs.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163yjoupvuj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163hayhawal.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163wukwrntu.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163zcsoowlh.html


<!-- 参考信息 -->