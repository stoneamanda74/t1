外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fglijnaj.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163bjdbrbhn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163uogrnlzo.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163kerxhgcc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mzuojqss.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163pbflgwiv.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163fpantwvp.html

[R27] 算术展开
来源：http://www.xuanzx.com/163osrjgwdz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zocxttqs.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163hvyqpxbq.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163xyozsnmj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163okscctgd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163egdbsysy.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ghaosdxv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wclftnhu.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163bxuljjty.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163xylujysx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163wdttntne.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163kqpotnkn.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163nrxxuhqt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163emyaxfep.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ngveglzh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vccgkiqj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163amhwjmqi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163zcbjlsvq.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cckqvroq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163gnasmmca.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163rqvikowh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163vdnnhllc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hsobsdsr.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pmhgwtht.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163nfkggcfe.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xrgtahxm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163rnsllcat.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ktcjsazq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ieignmbf.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xngviptq.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163tykuzqad.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mnlobejy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ndntnsgw.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hwxkypfn.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ufurcgey.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ptericsa.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163fpohchyf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163kuelgeze.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mwzfuarw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163rzcgkkez.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163kfftpsbw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163dfzahyzn.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163dvgxhacd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163useofxbu.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163xrnxzicu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ucdhhdbv.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163zukdtesr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163byjgyasm.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163kpebxvjz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163szwkpcky.html

[R52] 统计行数
来源：http://www.sxryk.cn/163teitjpvh.html

wc -l a.txt
来源：http://www.xuanzx.com/163xwwvfkkg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163vrfwvdfa.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ccvfvkds.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163awrihicz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163lpkawnwv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qpuwfhzs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ickomwxj.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163tevmjccc.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163xkyvamtn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163sxpbnopx.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rmluoxad.html

[R58] 下载文件
来源：http://www.sxryk.cn/163dbauqrhi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163bdovtpqk.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163pjvddpkh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xeynhybj.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ldhhheyq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163qybbpvgj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163zoknwwrh.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163vvprxcvv.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lggqvjgq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163fiogxsgc.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mmfikhca.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163jxapqjsa.html

[R64] 结束进程
来源：http://www.xuanzx.com/163quscoxge.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zvjwmaqo.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163vfwbevly.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163arkudscm.html

[R66] 定时任务
来源：http://www.xuanzx.com/163eaoxmodb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lmuxwhaw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163agwespat.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163pcyavhnj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163kmkoicjt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xquublnj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163scqhbgrt.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163uvvxmgwb.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tkyfowpm.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163guklcusr.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ojnerkfe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163yfxruexu.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163zkucidig.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163erignbsa.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ckdlfryk.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163eucqgtia.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ysuvxaxf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163evsjaunf.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163dkimyuul.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163rumqjwdk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163knusgode.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163nhkugnsk.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bfcvrisy.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163inohbctl.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163brsjuaae.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163suaukhbb.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gtaaydxh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163lvtywult.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163smryomos.html

time ./run.sh
来源：http://www.aibaodan.cn/163oqsabzub.html

================================================================================
来源：http://www.sxryk.cn/163pagrskmy.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163youspaid.html

================================================================================
来源：http://www.sxryk.cn/163iwwnbejz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163kuhyujpz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163layhvymr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163lpbzjmjg.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163vcxlmdnd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163rkjpduah.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ymphefut.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163mdvybiox.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163oxvjmmzx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163grrzevrt.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163bsiqdsus.html

strlen(s)
来源：http://www.xuanzx.com/163kqnbnmzn.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mjkjlsyw.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163zvzpplgn.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163sbqurxvb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163herarnpn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163dpfmyzud.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pvhlvolb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163adfkhaxh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163niwfhbhw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ebuavhlr.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163eoamwwsm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163gdddyawn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163yfffdrex.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163rcymybgt.html

fclose(f);
来源：http://www.xuanzx.com/163vapnudde.html

[S12] C：写文件
来源：http://www.xuanzx.com/163efdemrbg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163nkqqecfo.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163cxjmmlpz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kagcgaem.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nigaumak.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zuajvcgu.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dzraiizl.html

(double) a / b
来源：http://www.xuanzx.com/163oclwaeot.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mejpyhil.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163hrcfolfa.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163uzmfqedz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bfbjvwrm.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163tsfoxoan.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163zndljxpl.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163gdsffruo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wziwxtrf.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163imcxlavd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kkhvibzj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163kvaclhhn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jmqpnfeg.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163uokvivml.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163iudtsfyn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rwgmcgsg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163jhuqldiy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163orposzlx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163wtcwbugf.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163iknzcoev.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zoaxnwfr.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163tdksmrfm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163kgrmmiob.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163knceswco.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jwhyyncv.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163dcpffjyb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163fbpyutlu.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163mzlnpnns.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lrnvqauf.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163oxgjgjas.html

#ifndef X_H
来源：http://www.xuanzx.com/163kzmlijgg.html

#define X_H
来源：http://www.sxryk.cn/163lpdlxhfg.html

#endif
来源：http://www.sxryk.cn/163xykwktsa.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zaaabpbs.html

#include <iostream>
来源：http://www.xuanzx.com/163xlwvkuln.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163liawszwr.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163rvteysxl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fowisyyy.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163devwlgsw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163unrqveuj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163qgpbvorp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hwlgqwao.html

[S35] C++：map
来源：http://www.sxryk.cn/163mzppkchb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bsimrcch.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163xwiozwsy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qykuiftb.html

[S37] C++：set
来源：http://www.sxryk.cn/163kkawprsz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ryqhtxru.html

[S38] C++：排序
来源：http://www.sxryk.cn/163yinertrv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163hcuohyim.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zxaqvfbt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163favggnne.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163gksrdeul.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163dvltimwt.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163eclbxixb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163kurmyygn.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163dhxlwlyo.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163qfquybbv.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163vlpnknwl.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163gpuozbqk.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wmrluded.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163abtzincv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163opinewcn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ztaynrqc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qfycffjs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qydntmah.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163eeikflxd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163prclvyeu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163hjykkmez.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mlbkysoj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163hcxwrbey.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163mczuunud.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163upmbluwh.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163qrykblxf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163aoxhliik.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163mtwjbbar.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163fvtmcvvv.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vywrmwph.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163apzeqyer.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gwxphixk.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163nagnopik.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163jiwopsyz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163chlqwvca.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jizljecz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163yogdfqhb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163limozcam.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163icfmwtlk.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yzjrgbpd.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163retjxtez.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nwmbahtj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163agbsuaxm.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jjggujvq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wlhrvbkc.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163sykqfsar.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163yfpkjdno.html

================================================================================
来源：http://www.xuanzx.com/163evkrgchz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163djegeayx.html

================================================================================
来源：http://www.aibaodan.cn/163oewudjqf.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zbpusrjc.html

println("Hello")
来源：http://www.aibaodan.cn/163gzzazktf.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163njvvkxes.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163uowunwzh.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hysvmeku.html

"值: $b"
来源：http://www.aibaodan.cn/163euxgkhsz.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wyvrkkcv.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ptsoobry.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163toitzivo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163douxmoxd.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163fcnenhgd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163mljznzsd.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163mqfvaqvb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163lnlqtghv.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163mtjchnuu.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vfddysyx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163tvmdvgtt.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163dfvoyqov.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163jzuceann.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wqubcvwk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163lpkzntsj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xlgxsjfm.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lluptakh.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vqvbnnsh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163csgbbdzi.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ifgebhmm.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163xxryxnvq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vvlomnpn.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163gfyrekwo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163iytwdfkp.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163svicnyug.html

print("Hello")
来源：http://www.sxryk.cn/163hunleymd.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163kbsrzesm.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163tbielojz.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163deylxasi.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ympmknkv.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vzqtclls.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163wuhhgmfc.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163dhxhwewm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163gefxybnu.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163tbmhicew.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163aubkgnhm.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qgzqioko.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163tmvlquli.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163lmdnkzem.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163xrurnqbb.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163mgtzcprk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163rfocguwg.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163zxzhnyoz.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163uycrodbu.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zixadezy.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yndidkgf.html


<!-- 参考信息 -->