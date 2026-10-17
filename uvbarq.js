外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163buatxfgm.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163libdqasm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163fbprhhas.html

[R19] 数组长度
来源：http://www.sxryk.cn/163csrztuwx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163wecmfjbg.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kezockli.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163tlmemxik.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163coqukdxi.html

echo "${#s}"
来源：http://www.aibaodan.cn/163pvrmsolb.html

[R22] 截取子串
来源：http://www.xuanzx.com/163iikukupr.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163rubkyusw.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163dpaiujss.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ulowypzy.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163yalbdboi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jrrtzuug.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163efxbemrf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gqieshvt.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163oygpelko.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163banjqbbg.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163xwncqgmp.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163byqcmkfe.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163guhlxdqk.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163wnnjnbjh.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vjllanic.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ekvfsekk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163zewgkqjs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163rqiirmdr.html

[R31] 局部变量
来源：http://www.xuanzx.com/163kaunuvnn.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jhbhckvv.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xwltwzir.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163pigqhttd.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163sottuxer.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ymvubnre.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jgvacrsl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fujgjtkz.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163qmtfxgsm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lsyjmfgl.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kshahtyx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163yvpfnnir.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vgmbcwlh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163wthkmkeb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163eemylsly.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163scmxmrlc.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ddgdjemu.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pnnfxqdt.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163hawlkklx.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163taanbpit.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163mwltybaw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163uimmkhrn.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163jkpvxqai.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163yaqiznxy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163qdbxcasg.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163oluyqukq.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163focadgva.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rotyhivh.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163iqpcwckq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163whhekabr.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jjucwurl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163qhhqjvoj.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163uedknaov.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163gdwrszix.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163qkyyxpvh.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163dyaeonun.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163lhzqxlsm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pharazxj.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163grbdkewa.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163vozdbqfi.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163qklkqdyp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ppeaivni.html

[R52] 统计行数
来源：http://www.sxryk.cn/163jwxieosk.html

wc -l a.txt
来源：http://www.aibaodan.cn/163rrxvsxkn.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ssymreqv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163neiwdmen.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ibxtzjtq.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163hjppdgah.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ddlbolxc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163vlotfcts.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163eczoppqp.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ubsaxnkm.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163kdvqzqiy.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163qpbgbczs.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ztcnscuo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163iplvnsga.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bqjdaiyp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163elhbyozx.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163kuyasfdi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xlabwaqf.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hksvqlpt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vskfugle.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163fipbevqs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ltczlbnr.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mquayocn.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ojducsub.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ijmjxccj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163wqksaboe.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xplnadpr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ebdljsqj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hfftrktn.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163scywmlat.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163iayfbixs.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163xcltxxgd.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wpqqosau.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163jlgvhewz.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163iqbhqdmj.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mlcujggq.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163gadhsabz.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163aqnvlifm.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vqdbibmq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163iwwnrxid.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163lnxkgxfz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163kcecuuio.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ntrbujll.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ovraaikt.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163flvgrtmx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163lywsxkzz.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vqxvdzgi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163szvdhzgf.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163caeatsyl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cjnwjuol.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163uhflzvgq.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163nnuxzbfa.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163bupoxava.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163vythjfwt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vxuxfjay.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163oqntpaag.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163tesvmnsq.html

time ./run.sh
来源：http://www.xuanzx.com/163vekouofr.html

================================================================================
来源：http://www.aibaodan.cn/163oryubogu.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163lhkorbrd.html

================================================================================
来源：http://www.xuanzx.com/163lsuaaevr.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163tugfztsv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163cvzzaxkg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163unvlamsm.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163mezlryhy.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163plcaracf.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ylsixzco.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163iaufvmli.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163iknggugc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163lprzrhbp.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163jnirlham.html

strlen(s)
来源：http://www.xuanzx.com/163zkbsrxow.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163umxhlkcp.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163clesqrcy.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163kzddmlwp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163onrcyowq.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xuovkdnu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163atvktchi.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163tdfdnpxc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163trobaxom.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163cvcjeucb.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163pdeiaodp.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mebmmqgv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163dsijsktn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vpgyztmk.html

fclose(f);
来源：http://www.xuanzx.com/163osjefgbw.html

[S12] C：写文件
来源：http://www.sxryk.cn/163kipzuofg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163uurikopt.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163nanwlrmi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163uaiapcuf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163njogvbrb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163egzkyedv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fpeieiqd.html

(double) a / b
来源：http://www.sxryk.cn/163txhqvhkx.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163reovaqam.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kdqrelvi.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163xlycseou.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163swxoisjs.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163rtlvtcaj.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163urvcsluz.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qtlcwtwv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nljrlekc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qtgvpbnp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ndznlxqr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ltflymwn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hsefcgzx.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ismulety.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163cszbrwny.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ityepmcg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163gkhtufau.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163aknjfyju.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163wdffgowm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ksnrckah.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dwnesrbr.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kugizohq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dloyxytf.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163vodgkvly.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ismfzjig.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kgkdwhvf.html

static int counter = 0;
来源：http://www.xuanzx.com/163btguvlho.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163whejtlpo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163qnsjfmzd.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163yskzrcxx.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zrykgbhc.html

#define X_H
来源：http://www.sxryk.cn/163lcgqjxxo.html

#endif
来源：http://www.sxryk.cn/163dvfgmplx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qcmxldvx.html

#include <iostream>
来源：http://www.aibaodan.cn/163tjfseatl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ntafkcyo.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vxdavwkc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163fkgrmgqx.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163vbclvkfm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163imtohjle.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163dnvvbrxe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dlmnqmmg.html

[S35] C++：map
来源：http://www.sxryk.cn/163tfrpsyiy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xpjugbqd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rgvungub.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gcuijgap.html

[S37] C++：set
来源：http://www.sxryk.cn/163wlhedauq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rvhrxthm.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vdtploav.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163pqyfemfs.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163iuledibm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ftoynasf.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ytjcsfzd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163uvvekbgh.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163wvqcbejz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cmzamjlb.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163fxvrrdjp.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163suvvxcdt.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rckgzwxf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ebmcwzwe.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ymuekngi.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163sygomvef.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163xlrpnarr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yozypfnp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mxiboxyz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uhunalzn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163nmjzqucs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163clddqnnd.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vsndkoyz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163irsgekqd.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163esbxaauw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163kvujzvqi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jcxaxdma.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mumlhygj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163scvgnawx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qxiestua.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163eefvbvlv.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163equoxtih.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fkecysci.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qfgliaqe.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163pcvmsrhd.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ppukryxg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163gvvqwepg.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wnyantbv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163htztzlye.html

[S56] C++：optional
来源：http://www.xuanzx.com/163mzabdpkz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163lsjvcsgg.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163grqqjbhh.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163grrppxph.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nkrvxnlz.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163mpvmmjoc.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163dpriftqu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163fshctlbw.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ftsaafho.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ihhrebme.html

================================================================================
来源：http://www.sxryk.cn/163loqjfbis.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fxlchhrs.html

================================================================================
来源：http://www.xuanzx.com/163ahztwuij.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163svfbujki.html

println("Hello")
来源：http://www.aibaodan.cn/163hswhrcgs.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163mpxbhcip.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163wdsxxtke.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rjdfkrqj.html

"值: $b"
来源：http://www.aibaodan.cn/163nrbbnukn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ppncczmw.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163vtxzcfuk.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163fbprrtgu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wrddefmn.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163npdyngcv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163pkitohew.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163oefozopd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fassfeme.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163mmluovga.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163cngvzrvk.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163kmmkscmq.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ezhztabu.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fimzhuin.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163pgjmeiwv.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qlfqtoqu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rrndyesl.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xofyqora.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jtcvjrru.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163orcwfutn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ggnhmdra.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ekltkznk.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163mivylblw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ntcvaijb.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ahrihfxa.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163gpwecegu.html

print("Hello")
来源：http://www.aibaodan.cn/163myyqqvbb.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163tuhpidkv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163mevacvvw.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163wgsucsbt.html

"值: \(b)"
来源：http://www.sxryk.cn/163mdwhrblx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ahqscdsl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bczkjuyc.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ymdqgrwg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163wocukekb.html


<!-- 参考信息 -->