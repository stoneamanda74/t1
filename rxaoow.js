外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163upyajulo.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tupacdzl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xwbmflci.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ftjuurzu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163amvycqvx.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ugjmztin.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163pcdqvtte.html

[R19] 数组长度
来源：http://www.sxryk.cn/163indtblxy.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163abfqkrkc.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163fjspqqpl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hodtfsck.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163nkfahevf.html

echo "${#s}"
来源：http://www.xuanzx.com/163ifodaklx.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rwgwzifn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163tdgswisw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ywaodibp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ujhokfan.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163iuuuhasr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163vbacpsjj.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163dwmeddka.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163okbxqldv.html

[R26] 命令替换
来源：http://www.xuanzx.com/163athdjwql.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163stqsnkfo.html

[R27] 算术展开
来源：http://www.sxryk.cn/163njmrihmz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163almyrbnq.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163evnicicp.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gjdzqwgy.html

[R29] 定义函数
来源：http://www.sxryk.cn/163srtrpafu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vmhekhhf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163segaejoh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163algkjvwa.html

[R31] 局部变量
来源：http://www.sxryk.cn/163uapssajt.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163zlisnpyh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ajbsrpxy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163gedynpbx.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163doqlsjcy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163qpbjludh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qtbyyexh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163awccqhct.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163xocfzyuf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hzjhctkr.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ouudmeox.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lwswsphy.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vjxoiauv.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qkiygvbn.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gpdkfwnn.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163yyweavbh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ukjlobgl.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163umevlsfj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zfwxucgw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xifzepli.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163banctfzw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163zihqqkcm.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163jylrozij.html

wc -l < a.txt
来源：http://www.sxryk.cn/163eqtfvdhy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163mwxnljlm.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163wgpnigam.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163yfedfpiz.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163nvcltzxv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kiftbegc.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163nebycwfe.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163elmkyodx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163aefzirvd.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ovxkfzjn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163qxtvpobp.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163viushbrn.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163fkhdytba.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163kvmgtspi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163jylexivr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163aknugsnz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163zavyyziu.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163nqlnweaz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163wmgfnalo.html

[R52] 统计行数
来源：http://www.xuanzx.com/163gczrylwi.html

wc -l a.txt
来源：http://www.xuanzx.com/163sgpmigzy.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163mhvrfqoh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163biumsyzx.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163btuovyzh.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xixmfaoe.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163dpwqcowh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wqujicnd.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163alrbgclx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kzyvcomr.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163zrjrydjd.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163gkzcybep.html

[R58] 下载文件
来源：http://www.xuanzx.com/163bbqoqwzx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163aedstdwh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wevsmbxo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163rzxhdqlw.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zaxmadta.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ymxaaewk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163lcmxppbb.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163elknpkrs.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wjwdyyvd.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163wymxmwoe.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mgvpmmqr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ituhxnkc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163igvshrvp.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kpjnoxvy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xqoitlsz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ytngxqho.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ogdiehiy.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163akddlmor.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qckdhymo.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rrojadev.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163illcbnjj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163mjjwkxkp.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qnkmplkj.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163aoszyeud.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163jmqmlqnz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163khxfanhs.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vxlqhdsb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163wmcchekt.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bnzuxjvd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163sxyszrtj.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163gbnrrsru.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163uanzfzbj.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hedbdjss.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dqkhxrbu.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rstpkswo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ozboyoeu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jiluiots.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qwoolncr.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163zflmqtje.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163chuxtgbc.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qauhsmcb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163miypelsq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163dgrtwpdn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163exwyielq.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163mhxvchvz.html

time ./run.sh
来源：http://www.xuanzx.com/163hnspwavk.html

================================================================================
来源：http://www.sxryk.cn/163yoveezxs.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kntqpdfj.html

================================================================================
来源：http://www.aibaodan.cn/163mzykqhub.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163jdmqfllv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jpunbohx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163insfizvm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xgjjljct.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163sfwgypmu.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163pgeypbtm.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163glxrexoy.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163heblinle.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163fkmhkxgt.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163dzhmowct.html

strlen(s)
来源：http://www.xuanzx.com/163ylcqdlcs.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ecrhplkz.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ncsphpvc.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zjmybotp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rplivbur.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163tcbikyow.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wzwgptzl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163wlrvzbja.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163cmeiuplx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163iiybdcxy.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163igknwjdm.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163atftkbbg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163knzwgmra.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163nuoezvqp.html

fclose(f);
来源：http://www.aibaodan.cn/163orxqltma.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wwiwkvlg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hcgxbhdx.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163zstlcpqr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163fifcloat.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gwapamtb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163bbtqpoug.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ybfbhzva.html

(double) a / b
来源：http://www.aibaodan.cn/163wnldtyab.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163fmupwrlb.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163tjnuuubo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163khtsxktx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163uhxveffj.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zsfpiinh.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qxolkfcd.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163lvtkakdi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mnjtblfu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jrwarrqn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kbssctdj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vpcwucsr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vesferuw.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163mryixmrq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wgthrlhv.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qsdhooda.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163wswndcxl.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163vspxaxpe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163wveycnci.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163snachipw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163difbdoav.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163pkibbqqg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163cbunyoca.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qfozdaqy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cftlxrxl.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ysgyqtdd.html

static int counter = 0;
来源：http://www.sxryk.cn/163bhpndgui.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163indjtxcm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163hmjttxku.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nfdlpqcn.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zumoykvu.html

#define X_H
来源：http://www.sxryk.cn/163ubxtqgdo.html

#endif
来源：http://www.aibaodan.cn/163gtxttetx.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ilshudgq.html

#include <iostream>
来源：http://www.sxryk.cn/163dcxzwerr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ifuzmnkq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163yprgvjgq.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ostwihrb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qqhewrgk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163asysismp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163pbpkbher.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ibxvzdli.html

[S35] C++：map
来源：http://www.xuanzx.com/163njgathfy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lvfjxbtc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163brzwtqpq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ybbgurud.html

[S37] C++：set
来源：http://www.xuanzx.com/163fxtrlzza.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ryjszvwc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163izpgmahq.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163wqabudbb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163kdvpocqg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jiuiigdb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dhtkdonf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cicfchwq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163iirqctdo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zcxvogrh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163aozqutcd.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163yqecddmz.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ultewxee.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163gtauzlxs.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jjhsgkvo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163sgxtcrxq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163yqbufjuo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163jrrvderq.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ewihmqni.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163njvjxuuv.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163uxplabnu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ahyitten.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hlkucrss.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163njhxrhmj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163hgbuvmlt.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163olhrpaae.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gajpupgy.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163tugnzwli.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163vcoahfeg.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dzqrfoda.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163bcizzoiw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ompumrtu.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163jwilsvzh.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163aunfohho.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163trkdquuu.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163idnuuwgb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163txavxsum.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163fzatiopv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163mtggnbta.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zlrxlfkj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163txalffjr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163cqmmyuhw.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ythwlfjq.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163wmeilpqb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163yuvdvldi.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bsqxeanm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163oeagoxdb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163oflowaqg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163swbtoxsw.html

================================================================================
来源：http://www.aibaodan.cn/163agbnohlc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163iyaubjkt.html

================================================================================
来源：http://www.sxryk.cn/163zgpmqbtp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lmwdnimq.html

println("Hello")
来源：http://www.sxryk.cn/163yaimheqk.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163sfzlncmm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gyfssqsk.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163xfdeftvp.html

"值: $b"
来源：http://www.xuanzx.com/163cfuivcfj.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ogpwbgza.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rbdvonez.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163kdrvtlif.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163zsayypqa.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ncsmigtf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163xmnjjcrd.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163hwuellcj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163eprcrjcg.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163schgxswh.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fbdcwecl.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fwbmupfs.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163suiqjiug.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163orioknrb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163twwrsefd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zbvpxrii.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163nbelmkdp.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vxqkuphe.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163uhqkrpyi.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163irfjbtmn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163orpzuwdu.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163cbtqrxpa.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163btufnhoy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163luuuhywa.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kcbtpuos.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zpzmufvu.html

print("Hello")
来源：http://www.sxryk.cn/163tkpfoixn.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163jtvucnhb.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163mbsramwq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vhnhwhai.html

"值: \(b)"
来源：http://www.aibaodan.cn/163enjxeanh.html


<!-- 参考信息 -->