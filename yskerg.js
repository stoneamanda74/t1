外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ohtdwrfq.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ljhkccdu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163xgullkso.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163oaphvybb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163yrrununz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jxqcetjb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jithjluc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163sfqgatqj.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rpmwzxbi.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ymmbqulp.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163fnwsvpiy.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163voysgqtm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163vuuauzdn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163eaiwtynj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163zibrmwix.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163kyqzicvc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163usnrvhgs.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jvglhtuv.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ioddozwf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163upiwigtv.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ipkoigbg.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ndcqbmej.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163belemeny.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lrzuwodf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163svkndfus.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163mfbanwts.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163pcthwfcw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ptzmhkbb.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ayremzrg.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163abgmhhxc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163mhbxkrop.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163uabcndsa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163guvpoupq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163uabytigw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jebmhumo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163pxdocxvk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163dyqlhjgw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bdyjlcae.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163oecnahws.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163zgosedsr.html

files=$(ls -1)
来源：http://www.xuanzx.com/163yqxpzwxd.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wdxebefa.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163qzeuaodf.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163tkpuxyqs.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163njlqaugn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cxylwndh.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gimhgjmu.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163oteimywc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163bgekuzhh.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163bbnfoafm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163opfjsmfw.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vnbnctbs.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163kdzyxbmi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163wtgifvsa.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ugdwphnj.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zmyjsgno.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163efsnxxrm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163azcnufqr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163uohyxqsd.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163cexksztl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163xtzuurwi.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163nulkagmk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163evohnswm.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vujkwapq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163opfneeot.html

[R50] awk 求和
来源：http://www.xuanzx.com/163swdvscyo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163lriwnuzf.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fkkcjpyv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163aiqspxup.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163brfsphdq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163iafiwivh.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ggznsxaw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163qbjhfmuu.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163wwfzxslm.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163licrgdji.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163huwkuwwf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163qvjcjstp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163atptslay.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163dwzqsbgf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vhjmdibc.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163kyqsrgne.html

[R58] 下载文件
来源：http://www.xuanzx.com/163opzhpdyg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jhmffhfj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ofornboi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163kcptpkca.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bxvmhtwh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163yucfecsk.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163lzwsceky.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163hjwicnuy.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163lrwhtwpk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163eohpcvjb.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ganxocph.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rroxodlq.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163klgegkho.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163qlboqewr.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163numxcivx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ndlvriea.html

[R66] 定时任务
来源：http://www.xuanzx.com/163fplmztwy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163plumjsme.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163mzeytvih.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wornubji.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rsmutopd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163bzcbpgsy.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xahhoorb.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163hlewvrrm.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163wjkzxcgo.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jabwxgdq.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ujbztdst.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163xfkznlzt.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gwqdaqja.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rhrwwhnm.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163izkpsuwx.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ohlhrmpg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jczzphfi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ucgsqszl.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163iexprmey.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ploslien.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jqawndha.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yvbtnkqc.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163znctlnfv.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yxseareo.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163luqpldex.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163uorzjbnq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163rqvhentp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hfhpbldt.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163tcdxrthh.html

time ./run.sh
来源：http://www.sxryk.cn/163ylkthwxg.html

================================================================================
来源：http://www.aibaodan.cn/163zmtdlznl.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ortgczxf.html

================================================================================
来源：http://www.sxryk.cn/163dwdtvgdl.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163brcvihog.html

#include <stdio.h>
来源：http://www.xuanzx.com/163njxbquwe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cdmsomvx.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163fhnxshpv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bstvznyc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zziaqses.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163baymyjwh.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163msmeumrd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163hxhfyubn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163doxpikms.html

strlen(s)
来源：http://www.sxryk.cn/163ueudemym.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mtiylesj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jrulpvvl.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163kyegythh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163veptzpyn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163gdnffbna.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163fjbwcqqm.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yfekghfc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163sebstpgl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163vyxrjngw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163myqvngln.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163dqhgzcbo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163apzhjvef.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163qdzrcaua.html

fclose(f);
来源：http://www.sxryk.cn/163qppinnuq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163igmyrhrq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163uwjtivcr.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163zitziqrg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163gopoawec.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nczeguzv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163yoogzbek.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xhwnjhgf.html

(double) a / b
来源：http://www.aibaodan.cn/163jkekvtym.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163rpmxfwhg.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163yopnmybb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163mysxvaff.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163antzpaag.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163jmfcqgow.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vpvnwemn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dhucrlke.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163auzgqzmr.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tcmufxnj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ojlttdqm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163gmhccusi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163loeyrppi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mmsjmxgl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kczwxzfm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163uwarkggh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163whuabpvh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wfsehref.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163cknzbarz.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ridrhmdg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mhqmmvao.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163inikaups.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163pvhwvguu.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163eypcriif.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163medgbylc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163nsgkjkej.html

static int counter = 0;
来源：http://www.sxryk.cn/163cafsnquw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163tenabtyb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ykwmzzna.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163tzcwyqjw.html

#ifndef X_H
来源：http://www.xuanzx.com/163ppvsbysi.html

#define X_H
来源：http://www.sxryk.cn/163cxebqtwp.html

#endif
来源：http://www.aibaodan.cn/163rcrkzfnc.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gmlpqfrr.html

#include <iostream>
来源：http://www.sxryk.cn/163jdcanrwk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mjlfxcms.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ncxirmml.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hnqidzqr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163reamcxde.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163vglcfojf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163tmwwnyfo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163aiuqtjdj.html

[S35] C++：map
来源：http://www.aibaodan.cn/163qgwjbavk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mbhlbzch.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gzjxxxmf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ajzizgcx.html

[S37] C++：set
来源：http://www.xuanzx.com/163pehdsppa.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163hiehfism.html

[S38] C++：排序
来源：http://www.xuanzx.com/163uasgrjme.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tjihqmds.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163qprpzvyi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163guceromn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163nnzwkjxf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163cubvxgoe.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163syjwhpww.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bqufxxqg.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163avztguzn.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163epzgzwqz.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163vuunluhp.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ezlqjecg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163gbvehrpe.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163djiyoimk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163qoygcirb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163dwlrzuqg.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163nndvfhkf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uaullfhj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vfjnvqxj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163lwelapzq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163cqmynwrw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163sfwekxsj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163adxhiotj.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jttktvdg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ouiaolbq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163zdvkxkcg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163kxukbmnr.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163oyxoqipx.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hukpihwv.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163qghbyonv.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xaopqbah.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163kxqoijwz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xorcujyt.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163syuottjd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163daqsuyuv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163prapktpu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wwpwssna.html

[S56] C++：optional
来源：http://www.sxryk.cn/163sjszymwd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163yqzhdwux.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163gcyipqof.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163nvvwircg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163alsmsrli.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163xmvpbqnl.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163lcurjvti.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163rnxhgipk.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rujxfaao.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163flieqnjh.html

================================================================================
来源：http://www.aibaodan.cn/163mqgloncn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wqrogham.html

================================================================================
来源：http://www.sxryk.cn/163tyditwok.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ewrxnqvm.html

println("Hello")
来源：http://www.xuanzx.com/163rspawsyq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163yuulmlzx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ssnnpsmt.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dkbsuhls.html

"值: $b"
来源：http://www.sxryk.cn/163bwwpgghy.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163dbyrspxq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zqndkdjs.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163avvoahwf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163uwtihehd.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163zsjqvnqf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qneikbgb.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163yjsfyamk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163qtfhxcpl.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nwbsyevx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163zurdakbz.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lftpmekx.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163hxgluzjt.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ufgiyfou.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163dppebsco.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163mfjitzoc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pklrakcw.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163oathumbb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163pnimiztr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jqtvsoke.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163fwqfhcuo.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163caqjuahr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dvaebhmm.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163glxnikdz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163rpqmcudy.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163zldhdlms.html

print("Hello")
来源：http://www.aibaodan.cn/163khndclhj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163knmsjhux.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163bdakrpei.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163gxeqpypj.html

"值: \(b)"
来源：http://www.aibaodan.cn/163qpcfnzjd.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ofdxqoaz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hymluqpo.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163btrcddoj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163fbigvbhz.html


<!-- 参考信息 -->