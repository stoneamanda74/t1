外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163htbomxng.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163utaiiubn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ujhdatjq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163jijbabjl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163agjxnzjh.html

[R26] 命令替换
来源：http://www.xuanzx.com/163yyyhjopx.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163yrblhlob.html

[R27] 算术展开
来源：http://www.xuanzx.com/163uipyouqu.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163yvbubqno.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163vmmkpkyr.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qquzympn.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163caqyfpcn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163spxfiohi.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163lqbecwzj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163lykahnqf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163flrbxunb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163hscckjdq.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163eydntcwv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rdnpceqe.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163iwqraaxm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163jlllldso.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163fkfxmxci.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yaervmrc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163vkvteqie.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ezuopshp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163uhwrkewj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163uaqarpap.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jojdcqlz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qcayvrbo.html

[R38] 管道串联
来源：http://www.sxryk.cn/163kyxytbir.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163dhkxhyqs.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163rktomxtj.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163brfeqwaa.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vmsocwtc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163woognevt.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163apaxtegk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hypewomc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163obbvyozu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lwyxqler.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163itcwqqzx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163radshcje.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mdlcbeoc.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163aqdntymt.html

[R45] 批量删除
来源：http://www.xuanzx.com/163usgguvju.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163iaewgjjj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163cujbloom.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cqixtbdh.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163sqpqwlxr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163digzurkt.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163togqemrq.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mtsplays.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163yakpihey.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qsbefzof.html

[R50] awk 求和
来源：http://www.xuanzx.com/163zmsozfnd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mqxgynmr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fwzxhotw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163tlyyldva.html

[R52] 统计行数
来源：http://www.sxryk.cn/163yknreoyx.html

wc -l a.txt
来源：http://www.aibaodan.cn/163mwudbsvv.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163sdbnggbb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jltfgrvm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163iykvnypj.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163simnvlze.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163adecwuem.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163zdhmswgr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rnsinurw.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163mjvsmldz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163hgatdbtr.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wmtuxpnv.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163aqfxkwqb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163umtokfcm.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ppxjtnir.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163gocybifn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163dgelbfpt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ydkjjyuo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163npyruybu.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163punptyzc.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163hogtllfz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xkuycdrc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163uhcuovqs.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163odacfcfo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lhnojohf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163duvfdvtx.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163votvenph.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zroxaixx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vgkzgqzy.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163uiuxhuee.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163uwejvjhu.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163hcpidtrt.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jahdwact.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163btkfqfmm.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ehazdvpn.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163alsowlda.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ofxrdtqb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zhqcukwu.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163uhzihjxj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qhkpampb.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163sutbdwei.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kydtcfto.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163qsymygpc.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ynnolrjd.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163sxhbctmd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163yzgrefaq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zhwocrfy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163yynvfqeg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rpyadopv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bfyypmff.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163mnxezdgg.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gygoawxy.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163rlzezgsv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163apjglaqf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163iabdpwmn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qmveomol.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hzfweooi.html

time ./run.sh
来源：http://www.xuanzx.com/163bzaqchnh.html

================================================================================
来源：http://www.xuanzx.com/163plzbhfkr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uvivdvqr.html

================================================================================
来源：http://www.sxryk.cn/163mgritfis.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163odyouijg.html

#include <stdio.h>
来源：http://www.sxryk.cn/163hmkrtvwl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163jbssoqnn.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163rzjxujbn.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163xivdwnpt.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163bhftncxd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163sriqpdrq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163fstuotzb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xfxzhygw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wbcmcupw.html

strlen(s)
来源：http://www.aibaodan.cn/163wbviehzs.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163mqiwxfxj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ktcpekxw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163mowrobun.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zlcbirkn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163swtnvflr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163tjphjmcd.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163abjzhirc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163kanxwpdp.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163wpjbmcil.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163arjxjvps.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vmjmcskv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163hcbvoicy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163abrfyoyw.html

fclose(f);
来源：http://www.xuanzx.com/163hcojkamy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163dmtcotwv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163apsvofmf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163zwqimcok.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163cnmiotze.html

[S14] C：枚举
来源：http://www.sxryk.cn/163yciiqnpb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163pukxgyzd.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163yndmkmld.html

(double) a / b
来源：http://www.xuanzx.com/163srsqfbfu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vuupqlmf.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nsdvlwgx.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163dymowirz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163auvvabuh.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ilveliwf.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nmmpxyzt.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163viehbpxs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xhymavxw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gqanjoif.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zwsqkieq.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163bcefeqga.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163nhwyxgih.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163frklthag.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163csflilkz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yezvvleh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163yjdpvysl.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163arwxhgdj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163kuwqwpeu.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ibssikcc.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163revgawua.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fmnahwcq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163edvcmpnl.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163pjvrsjyy.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vxdnicxw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vdgusfag.html

static int counter = 0;
来源：http://www.xuanzx.com/163bjehwmoc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qedagxgq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163nccqmjol.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lzilmbnh.html

#ifndef X_H
来源：http://www.sxryk.cn/163rrregcxt.html

#define X_H
来源：http://www.aibaodan.cn/163lrtucapf.html

#endif
来源：http://www.xuanzx.com/163zowqhseb.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163iovarzjn.html

#include <iostream>
来源：http://www.xuanzx.com/163efshuqzf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yyoqypct.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163dbraatup.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163gcmeobtk.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163auukcjzf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vbklmwfu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ntiegcgb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163rovrscvx.html

[S35] C++：map
来源：http://www.xuanzx.com/163ghhdjhpq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163esrqezbm.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163tojumefp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ownwjsrk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163fbckhvxd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jpkzfyub.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163iuzjmuka.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tqcaoqku.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163jzvaobla.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ijrdstsy.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163msnxxgps.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163usiqlhbv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163wzpvexkm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163hnxfwzmk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ybknecxu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163mkvokjqh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rymxwqry.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163kawcsmbm.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hguybzyr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tphkgvrn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163sloukxpg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163goibzenk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163wwexavdw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163owuxtttg.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163gvbhoegn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163rguesyky.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rogyxhha.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163xofwlxki.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163agjydmpm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163gwuwqphe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gfsdtnrd.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163fyewxrxc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ychvukiy.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163pkzfmxwo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163uctmsvtn.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zsdgbctt.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163uajjpdvo.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163aevoajmu.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163pqapwchq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163illcnwah.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163feykhwkc.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163vetsrsvx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163fjkyvsuq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tbvehvsu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163yjqptklt.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qulsdygx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163byrtieqb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163pvxbfuwu.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ywinkrbh.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163cuvclnaf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zvulbege.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ahebnvqp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vpaapvwv.html

================================================================================
来源：http://www.sxryk.cn/163bfbzalnz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xnnxzror.html

================================================================================
来源：http://www.aibaodan.cn/163leosdxiv.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ehxjbdxv.html

println("Hello")
来源：http://www.sxryk.cn/163abupivtv.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163yjrqknar.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163osodijhv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163cjqwihyl.html

"值: $b"
来源：http://www.aibaodan.cn/163vxljlgxl.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163alcpnkvt.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163hbccizlp.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qgcbhgfs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163weqmldkq.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163bbvzztex.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qqqoutcm.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ojwufcxk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rekxzyrw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163sgoindmj.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zxlidyul.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163bnrbcguj.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163otwqbrws.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163uontrkca.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163yjnballp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163cbychite.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163bqffyvum.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163booxltye.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ddzvyusz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qisaexnd.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163pcthrbhc.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qufgmnmc.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163yyfichie.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wwojuwkg.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163zqnmxboh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163gzehucdd.html

print("Hello")
来源：http://www.xuanzx.com/163ixwuzngo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163cwbinbjh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163twbxumdy.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163yzfqbtun.html

"值: \(b)"
来源：http://www.xuanzx.com/163kxskjnmx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163qpqmlofp.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163hdxbmqrt.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xrifnklg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163btdgtgve.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ifwilmiz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163gtvtfjsg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ipoztvne.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jlzhkvvp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rmibudrg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163dxjycawx.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163sneedmam.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rqrigtvk.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163mexgpucp.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163hyrwfycf.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163wujcydhq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163haewsrdi.html


<!-- 参考信息 -->