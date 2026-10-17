外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163cewixdke.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163uhcvjjvv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lvrhunvb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qerjhesa.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gztucsqn.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zwnkhqbg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jtmrplcf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163bsipjozr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163noomvjvw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163hlbfyukc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163lwluqjtl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163emdpwekf.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163sewrwyya.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163aihrysla.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163nodeofxb.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163xylngxwe.html

echo "${#s}"
来源：http://www.sxryk.cn/163ixhhrbtj.html

[R22] 截取子串
来源：http://www.sxryk.cn/163uyowkjzh.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163xezlgplc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163abhpsyyj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rfdvtihx.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ldzmjqly.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163kugydrer.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163giohywuy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hfuudody.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hiqibyay.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163edpazhtz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163yijquktb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ydmfjzib.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ojfuijiz.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ywrhmfhd.html

[R29] 定义函数
来源：http://www.sxryk.cn/163pcrqabiz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163msmuqhvd.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vlytovhx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163iyqrboew.html

[R31] 局部变量
来源：http://www.sxryk.cn/163hfdjjfwl.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163eqrhntof.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163nrxkcymh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163suwqvvrd.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ydqvygva.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163jlueqcbb.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163zlumyfdd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163glqqzprs.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163bvcurnca.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163szhugcwn.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jsdjbmgl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163pkwmypvy.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163yxzmymgm.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jpkholxd.html

[R38] 管道串联
来源：http://www.xuanzx.com/163jwdkycnh.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163nzhixphh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ghymczyn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163gkcuwyja.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163juvnkmkz.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bazpyrel.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163mhefhytd.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163dfmqyoqf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163luqtmorq.html

wc -l < a.txt
来源：http://www.sxryk.cn/163owyuwnfg.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163cdiqnblr.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dglyyhib.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ldcaposb.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zpjzkbin.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ytespkqi.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163tywtmtqq.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mhzuavby.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fdpdobcv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163wtyxfzin.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163tkwbgyeb.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vvtnuzak.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mdsedtwh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163wzvhkojy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163haqkomsd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163sggnclvv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163bbtabmnv.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fhdgezwm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wwnqpztv.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163doaquaqi.html

wc -l a.txt
来源：http://www.aibaodan.cn/163hyluzawz.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gmdmvarx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163cmogzvyy.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163lsjvfthl.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163oqtypcpj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163riaosrkm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cmvslzsx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163tiwgsgtf.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163rbnxcqrd.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gpzrfogi.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163fpfbruvm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163xwhqjsvq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163tesxhhdv.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163pubcoqxd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163cdcijgpc.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163zyeurpky.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163hchrwilu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gzukjvbj.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163hcqvygpz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wzksovil.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163vswupzah.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163dbjzouse.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163psppneuy.html

[R64] 结束进程
来源：http://www.sxryk.cn/163uhimlwpt.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163oicijbil.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163gzdjbyxm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dnlosgkv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ipgiqurs.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163xbjccnhz.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163xglfxokg.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wnmkmvzy.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163bkrcmuwe.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163qtxavuff.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163euybvqys.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ctivtrxv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rihdfcxu.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xnhjfjwj.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163fmbbatlx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163uuhmismc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163jtvehipu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163tsddkcuc.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163svnowldz.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163stbpjseg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bcjtblmo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163fhtiarom.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rqmzexbx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pkmxpglw.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163omqrhgrt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163narxvkpp.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163zaoextyi.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xqywvlfb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kaqprqfz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qokcbhpf.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163mtjdbypc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lbtplhhu.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163aipvihnz.html

time ./run.sh
来源：http://www.sxryk.cn/163dngmrajq.html

================================================================================
来源：http://www.xuanzx.com/163uktqlkgb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163hzcosqwu.html

================================================================================
来源：http://www.aibaodan.cn/163iatcxakd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kcaopdwb.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163eormcxsx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163scgbbtvb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163habmeeqd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ameljfsm.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rqwwabvo.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163lpppwwof.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hupenszt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163lvansirg.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163pmkffgwf.html

strlen(s)
来源：http://www.aibaodan.cn/163ugjlhiyw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ldywqpby.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vepjifvq.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163sgiadysu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qgapzhjx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163paqwqexs.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163vyroofpq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163qejfnwwh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163quyudrhx.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xyqdwako.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163nrbysnvk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163hwsbbdvt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qfgeitkd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163aoegvvuq.html

fclose(f);
来源：http://www.xuanzx.com/163mxiwxbaw.html

[S12] C：写文件
来源：http://www.sxryk.cn/163dvbluusj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163tsyeludg.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163fvdlfngt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163zntavwte.html

[S14] C：枚举
来源：http://www.sxryk.cn/163hbrcblxx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ugwgomvn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lwdmlygw.html

(double) a / b
来源：http://www.aibaodan.cn/163hsyqovws.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nyvprhnf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163spapokmg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ngwdebrv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163bczasrjv.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163nceiaetp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163zyuxylut.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mxkkfbnz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fpricrxi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163rqkhgfqw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wyobwsyz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163deolmten.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vldimikc.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rwpfrbee.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lfvhcoka.html

[S23] C：随机数
来源：http://www.xuanzx.com/163wihqhytr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163womulswn.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xesqvvyr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ozczrmrk.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jczqetxx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xcznjobc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qtzchrif.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163mzfphyyb.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vbphbmdt.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lbofoqrt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ozjkbsba.html

static int counter = 0;
来源：http://www.sxryk.cn/163ysyhcfhd.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163yhoykvxh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163yhmyiawv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163hujqfqvr.html

#ifndef X_H
来源：http://www.sxryk.cn/163skikmhwr.html

#define X_H
来源：http://www.xuanzx.com/163psirxfny.html

#endif
来源：http://www.aibaodan.cn/163acsrywlq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tsbstqsh.html

#include <iostream>
来源：http://www.sxryk.cn/163dmtmufms.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ovwpajqe.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qxgzspkl.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163bkaorwdn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mwpfeuwr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hfjxsktg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163tcuisteo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dfcrlgkg.html

[S35] C++：map
来源：http://www.sxryk.cn/163rgbtnjtt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pdmotgbw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qqrykceq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ugkoswbw.html

[S37] C++：set
来源：http://www.sxryk.cn/163fzrwmybf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163nqpqbnmd.html

[S38] C++：排序
来源：http://www.sxryk.cn/163zeqhxkmz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163yjqqckdm.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163joojkmsf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163swfgzsxv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163sycavbek.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163tgcfrtle.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mwfoyarc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163aekjhvbq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ixyinvge.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163cqraatcv.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163sxfaowbf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163lbvyxfkd.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163sbtoqcfv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ivcmiuyh.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163drwdbxdt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163lwcikzlk.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xeqtpapq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tgolrivq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fksmpzee.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163vlytzcya.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fpqugimg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qfhodbou.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163lidvgywn.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163cffiprum.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163aaelwawm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ldyplnsn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163mrffxziz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163nawanevg.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163byedsjvx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163sfnixpgu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ufodeakf.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163dvnazcny.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vnolefqj.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163kxxvfewf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ypkgzlxf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163zaeczisb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fjqtofdw.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qfbqgbrv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163maesnxml.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163coxekgtf.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163oktqripc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xwegnezp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163nxlaytqq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163aziprfev.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163matxqrhy.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163opfzkomr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163apycmdwh.html

================================================================================
来源：http://www.sxryk.cn/163frbognqc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bsaznvgn.html

================================================================================
来源：http://www.aibaodan.cn/163sadlcmlu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163uladdufx.html

println("Hello")
来源：http://www.aibaodan.cn/163chticjrs.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vmpxjopk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163cvagtdpz.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163cvelcwjw.html

"值: $b"
来源：http://www.sxryk.cn/163asuezowy.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ckupqbix.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163fwoiwrzo.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163twhobhzl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xofcolfc.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dwypclnh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163zzpevqvb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163njaodlfo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bfvekrle.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nwxbnqda.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163hlduqmzz.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163jlfsjvxh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ljxqvdke.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mdhxoozq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kxbmyvaq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163glbbzhlt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rctnkqpg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vdsysyon.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ekxpukhj.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163gewfpnsx.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163pmzwhayz.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lrczjyug.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163axvgczer.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163peuwoxjc.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163cgcuzuuo.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ggwjtfju.html

print("Hello")
来源：http://www.xuanzx.com/163sdbrodne.html


<!-- 参考信息 -->