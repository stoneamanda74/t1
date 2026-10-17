外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mhdehjsm.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163dyjmwxnc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163sdrrupfj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163depjazof.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163aezicdto.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163irwrpeld.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163pefjhrtf.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163wyutrtzj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163uqoddhvm.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lchuiwoq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163mulpzfvv.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163yfxkkioj.html

echo "${#s}"
来源：http://www.sxryk.cn/163vuphxezn.html

[R22] 截取子串
来源：http://www.sxryk.cn/163odxkplkh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163dfnujojb.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163tqqdjuja.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163avgyaanq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163wdiamsgq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vutnqqnb.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163fyciqull.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163xjlkwccp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163esbkmhns.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163tdkrycsi.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163elhznnak.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ohkcwhie.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lkgbdwaq.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163iufadree.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bpltrbet.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163kckbksec.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163zmxuqlez.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163oiftwryn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163nxxgbiqc.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163uuhncwzg.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163bgnqzxfg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163vszoybxw.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163trocuigg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163arvethvj.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163avymyiox.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zszfpwiz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163oegajpqm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qyeyabik.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dlnzwfdt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163zqosfitl.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163hhslpulx.html

files=$(ls -1)
来源：http://www.sxryk.cn/163anhslizl.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163xzfnsxix.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ophvxcxd.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163caxtnoln.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163xznivwvu.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vhoebfaz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ezlxeoeb.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xfzgxpcz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hgijzzyb.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163wmcjldtz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163pqeuqiaz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jqaytijo.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163pziukdsb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nigcvnju.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163xbufnvin.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zlxbbxqw.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163zgzyyytj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ngheicpf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163cojfsxcr.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163aswdvllk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wapdddya.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163lztveefv.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163yistxhte.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163sevmnrrf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163aeetdqoy.html

[R50] awk 求和
来源：http://www.sxryk.cn/163hvnunanq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163cwhbpfhy.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163lpcfpkdu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mvcqmtub.html

[R52] 统计行数
来源：http://www.xuanzx.com/163nmiwezyn.html

wc -l a.txt
来源：http://www.xuanzx.com/163caetujfb.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163rxugqojb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163nsjtdjes.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163itwsimmo.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163nhwnsjas.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mjieokql.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nhmetgzn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nqkzzpta.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qmnqovez.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hbslvtem.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ltkyysdz.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hlfylaqx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163npfuecun.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163unwibfzc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kidydmka.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163sbebqyrx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xxoosokx.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hghxvxyo.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163bmprwelj.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zbgdpfsc.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163gbwvdean.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tuissnsz.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163bjbsfshh.html

[R64] 结束进程
来源：http://www.sxryk.cn/163kngacvpm.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163peswdspw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163cmxgynwg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lwzseobs.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fxzxdsja.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163vvgnperq.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ulblndvt.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163htvknyyz.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cxsfwnhb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fmzqwafj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163kbgpqznb.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163hfxkiafs.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163xilspjtf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163viqeaopa.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ubjqzdle.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163aeppvkjq.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163mfscnxho.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ijbpdnwn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qywmtlqh.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163mgvnxzqr.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163jouoqkma.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163coaielnd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163huxecnpt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163eusfzuij.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163awcrlfmw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kvljtmts.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xdcvikae.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163lpzybxma.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163rxvdpqwm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163simlqfbn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163nkslpydr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163razhyjjp.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kgmhguxt.html

time ./run.sh
来源：http://www.sxryk.cn/163eaueetar.html

================================================================================
来源：http://www.sxryk.cn/163upfukqzh.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163aocxjbbc.html

================================================================================
来源：http://www.xuanzx.com/163zncjzlpn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163mxtkfkkq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163yoekucfq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163tlrurukk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mwumvmdg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163eqcxisuw.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163fcmdotxn.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163lgnkimqy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163knitkuqt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xmlueyyq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163gomsuzcc.html

strlen(s)
来源：http://www.aibaodan.cn/163iqdhficj.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163imkbcedw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163hgafnltc.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163scotpjjy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vzfuvhym.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ngyhjndc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163stmhdvax.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rertafmm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163onptrfgb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ucaalntf.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163wcninwhi.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ehkendie.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163fpkkgdgk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zgjntjzi.html

fclose(f);
来源：http://www.xuanzx.com/163xskwmmvo.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163jceupadx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163sbilbwpb.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lpdywrpk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xbpjthot.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dvgswmxs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ybrdnegc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163exppywmf.html

(double) a / b
来源：http://www.sxryk.cn/163hmgibxrc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qebitefp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nylrgjhj.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bzvqtqjx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163yiwzqmdk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hwwwczqu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163xcsqrluo.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163nisvcobq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ptnmhmbh.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163gilurzxx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xhoqtobn.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163eepmnrju.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163spchgbdd.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jtplhujt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ljynuebc.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163uodtbuic.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163xohxdewv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163cgvninjr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163iizyukee.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163agmlbvnw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ohlnckrc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163idwjnqwk.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163fycqigys.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163srzvnmvv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bjgwvpsd.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163pwttlzjv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163bfyzcjel.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163axyryvla.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163tmtjznxc.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jobnkado.html

#ifndef X_H
来源：http://www.sxryk.cn/163ilbntger.html

#define X_H
来源：http://www.aibaodan.cn/163ooworuut.html

#endif
来源：http://www.aibaodan.cn/163ibnavehy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ohffqduk.html

#include <iostream>
来源：http://www.aibaodan.cn/163lrtsukes.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163sgwxxwhx.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163nlbjxijd.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ideaalmm.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163mlivqbkt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gzqcoblr.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rlragzdu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xgoigltk.html

[S35] C++：map
来源：http://www.xuanzx.com/163tmqtnuxs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bjwizwxl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163fbbwldgr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ddwcyfxf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163uaanpiic.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ivfgsytn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wrlntfux.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163lgpzeqnd.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163omqaefhk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163iibdsytj.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dgwuhgtc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163itggexks.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vopqcxvu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163lgfdacba.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163yvyoiwbg.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163kjmicknl.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wpqhzmdd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nwduqoua.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163utznynqs.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ghctufhq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jeetappz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163bowxdsuy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163qxwijvaw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ahfxiuxm.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fcbvnptg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163gtxhrdzj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163mlrjemci.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lfcqirna.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163odfwhhbi.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163awksazcb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hgwfcnkt.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163umogajle.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gohilvgm.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jnqltzty.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163smfkxrme.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163nncpjrlm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163bgjbodfe.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ckwlxguc.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rprevftr.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rxrckjsf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163yigorvpt.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163kzefqqzs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wrmivgfp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163adigmurb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163wbbojgje.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163omlyxfbg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163iytnbhyz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163wniltjop.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163hytptsus.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163cmeussok.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163weowvimh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163eopmfulj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hrwqjoel.html

================================================================================
来源：http://www.sxryk.cn/163dmtrzwpg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163aquahqwg.html

================================================================================
来源：http://www.aibaodan.cn/163qocrmqti.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163raxmvahz.html

println("Hello")
来源：http://www.aibaodan.cn/163wyuxhvbi.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163huoqgjwm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163mmzfapov.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163uhwwkkqm.html

"值: $b"
来源：http://www.sxryk.cn/163iqekkheq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qmtppvls.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163pxrchlqh.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ttgxywem.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163yqxjasiy.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163cnsftmhl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jwjbmvqo.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zzdooqte.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nbsqqhhr.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163opdtywee.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gwklazjm.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163puvihhrh.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163dgmjrgwf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163gqoswciw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163fusalsro.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163wtejddgk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ervnihwj.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ybmfibxf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bvisthdb.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163bfbgydik.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ezbinhqv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dyntghqw.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163atbavzve.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hkofgxqp.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wiqsnyzs.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163etosadeg.html

print("Hello")
来源：http://www.xuanzx.com/163mashambu.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163omihqjgi.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163cxuqqbix.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vdwyqpfj.html

"值: \(b)"
来源：http://www.sxryk.cn/163pfuzwhts.html


<!-- 参考信息 -->