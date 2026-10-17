外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163wqgybjal.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163kflvfots.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163giwyboyf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163noaejnfc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163edkuhxem.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163xkwrawfu.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163stcktktd.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fgodhbsh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qpbzyurj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163iijeuugf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163khlvemlq.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mtlfztoo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163njafkrqm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163febjprda.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163vxvalivc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163asickfco.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163gzkmmugo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vodzzfzx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zsptwlbk.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163bcmljbja.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163kcvfwjmh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163zkjgfpht.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qpdyuzyg.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163zcymylns.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gbgkwzzv.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ilwmktvv.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163kaufcfat.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rdguquxf.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bxiquzpo.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163yqpvxpku.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163jsbjyxze.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163kvrcykta.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163jlinfwdt.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163gwqnpiry.html

wc -l < a.txt
来源：http://www.sxryk.cn/163tlbsshxd.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163rgvuuwbf.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dbxumjgz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rgutzqga.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163epeslvlv.html

[R45] 批量删除
来源：http://www.sxryk.cn/163indbzqqj.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163jiuqjbxf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163gouyoacm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163aetpgeip.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163uybaxwzu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163jszztaui.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163npryqpci.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163gtylzzmy.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163teovqxcs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dgprumkc.html

[R50] awk 求和
来源：http://www.xuanzx.com/163tscgnwqw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163scmwfvyx.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163uyksqivk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163rsdawvso.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ydsexgxc.html

wc -l a.txt
来源：http://www.aibaodan.cn/163npdxfpsq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163kxrnftrq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163mvfdjlhp.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xmrrwxzn.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bzzcbbok.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163suxzlrle.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wtxgjyxk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163uednkhtm.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163jvgmoksr.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163toiimufg.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hrsrqcrt.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ullavylk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ivtooiwb.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163azzbkexd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ehrptyji.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vrcuchom.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163whmjstmh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163aphbzgxx.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163pizyrtya.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163bwehzare.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tkqhdbhv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163iowrktdz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163jhrwowey.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163sdbkqyps.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ybrhptbx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163lrqraydm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163crnhxkbj.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ezymmjwp.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163izixifzp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163efokpmkf.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163uukwpdzh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ziaqquby.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xcqfxacx.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hlaxnswx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163sjdjiodd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163zehvqqso.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xjhmmxed.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163cvdxlvyv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163smiawaxr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163sljomvbh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ijupoqxf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kdvkrmhc.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163wwatvvpb.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xvskkupe.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163arizwcfp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sagnplyl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163olocsyve.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163cmnqvcdw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wgpyrofd.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163nmklrvdn.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163bbaxgrqz.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163cetyjslp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163bleidstq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163aszlrjyx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xexhcmdw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163wtkrexsz.html

time ./run.sh
来源：http://www.aibaodan.cn/163wpbjimmq.html

================================================================================
来源：http://www.sxryk.cn/163tnbtsesb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qlkkhfsi.html

================================================================================
来源：http://www.aibaodan.cn/163hihavhxp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163hnsxrpzt.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bztbpwfq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lkitwvie.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ukaqhovg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163hhbpiecd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163fhyvjwrr.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163trxuuncb.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163rwsmzvpn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mzzsrbpe.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163dxzomdyq.html

strlen(s)
来源：http://www.sxryk.cn/163ukdzhrmb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163pdmzppfn.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ndynrhzs.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163sivmaxll.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163qyowtpoh.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ndgorklf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163vlmpzfwl.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jqcofmvf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163lhtbsthr.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163inelccxw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163yhnzuyxo.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163kfcizshi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ilzddccd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163uwckbbxw.html

fclose(f);
来源：http://www.aibaodan.cn/163iyfnyxkb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163aeucdxhb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vwwfmwai.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zbsvilac.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vpqwloaz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163imwjacrg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uypfnegu.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lnoftxov.html

(double) a / b
来源：http://www.xuanzx.com/163bjwwyugb.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ojlmnzhb.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163tonzoscr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ezksodln.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xfymmlxm.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xkvyolxt.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hnttoaio.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163dvjvleae.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zedkyvaw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163susvavff.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163stmnuyty.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zwfxrgtn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ztacgwhj.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163pqaivshw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163iirnugwp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163poqqtnog.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163lgbnssjs.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163fkouqejf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ukmdhcua.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163iusibjsc.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163zvzuyddm.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163gtmwcrji.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163zbbohucs.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wkzmpplr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zoiztcpa.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yhopimzi.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ewevfykr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163djnkoqfa.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ruhxjpbk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163mnukgiwm.html

#ifndef X_H
来源：http://www.sxryk.cn/163gioomxnn.html

#define X_H
来源：http://www.sxryk.cn/163hkksvbbt.html

#endif
来源：http://www.sxryk.cn/163vosbiozp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163dhcgbogq.html

#include <iostream>
来源：http://www.aibaodan.cn/163caswtwjl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163omepyqsw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163urudfjar.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163qzczefmo.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vzzyknsr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163erlzjbms.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163thghuizn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163mfvkonqg.html

[S35] C++：map
来源：http://www.xuanzx.com/163qydhwrmo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nbyaedfr.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163sgwgzazf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wemtskvk.html

[S37] C++：set
来源：http://www.xuanzx.com/163phwwwtsu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fqnggapk.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vztnxuqn.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163nfijindi.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vhjabhhb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ptkzlxol.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163lfuqwzrh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163uminhduh.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163fquslnam.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dlwdcshr.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ntazekzy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163smjlvgpv.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163swcdoquo.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163cbxdkuwx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163jolgegoz.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163uhlvsqqn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163zhcicrzd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ozwdmczz.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hzwagupz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xgnvtrvu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163znlqhwup.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wzampjis.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fytnkvgk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163zofyllmw.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rrkhylnp.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jlhzsrzu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163xbxtgisj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163qfmwlsul.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163cspummie.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163lcvzhkqe.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mqtsaycn.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pbayubpn.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163lqpdnouv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163cqmuejco.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vhewiytg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163nhpzbnfe.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pdyoeume.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hloeaxcj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163vjqegcwq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163lpghdnap.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qarmnahq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163coqxjdbv.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163xpruwgwe.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ufuwwhla.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kzmqauch.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163rpxvykrr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163oayobodi.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163werewyvm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163texpnhdz.html

================================================================================
来源：http://www.xuanzx.com/163bwbsfboz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jygpcryk.html

================================================================================
来源：http://www.xuanzx.com/163qyjzfplg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163iehfdhjc.html

println("Hello")
来源：http://www.sxryk.cn/163xmvgubbw.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ftmkjmsj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163zdfckwhr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163zvptisbg.html

"值: $b"
来源：http://www.xuanzx.com/163jszonchl.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163appgaahn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ovcizdaq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163bwijpruy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jhohizmd.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163feqixeyp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163dzorqppc.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163cuwdfwcq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jbfesxgm.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163jhvltbro.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163bayvxjob.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163gssszvsj.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gioevavz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163hebsbzlr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163sdgfxjhp.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vskxsidz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jjcyhurg.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hzehysdj.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163wavymctd.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163izcjennj.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lntndipk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163mzjfmclq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163bzibmpuy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163kgiixgfs.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fzsqtjpf.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ngktmpri.html

print("Hello")
来源：http://www.aibaodan.cn/163clqkuhby.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163mthugtps.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163rmmlgwol.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163mghqcvji.html

"值: \(b)"
来源：http://www.sxryk.cn/163atjngtdd.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ckjonqet.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163crnymcrp.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163yqhxrcjl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qtpftrwu.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hsgyrcvi.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163dfroonjj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163byjtrdxh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ynnqdvjj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163oserxtoc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wqdxcsfu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163weamntkh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163vgezbwux.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163pdqmkhuq.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163roilceot.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163kfjfvend.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163wfenqory.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ilyxaowc.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163gjgboiuk.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163bwxjdnvf.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163fxkmtbej.html


<!-- 参考信息 -->