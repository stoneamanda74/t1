外链999!wailian999！

case "$1" in
来源：http://www.xuanzx.com/163chgtzhbj.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zryyhaxb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163agwhlygw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163zsjprylg.html

esac
来源：http://www.sxryk.cn/163ungmhkda.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163tdtbwohc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hsiysfuv.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163adixjyta.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163rdfppyxw.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163wzlppytu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163agdiegus.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yazcxxys.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163azbvksow.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163agxgrtdw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163uqeflsjv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163pprgwvvy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163mxtthrlm.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163gweicxqp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ealcidms.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163inpmwnhp.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163uuteorsw.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163sovnoxmu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163lagmgozn.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163kgmaloeo.html

echo "${#s}"
来源：http://www.sxryk.cn/163mhjeihmr.html

[R22] 截取子串
来源：http://www.xuanzx.com/163jpcssaul.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163btljqhqs.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gnpahwfp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fmxqjmig.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ycbjkbam.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163duhvwrju.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qknighxl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163aqtzboht.html

[R26] 命令替换
来源：http://www.sxryk.cn/163auouowlm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163kzjokqwv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163etdygdua.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ammprmga.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163omiknceb.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163juvlybvn.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ygrejyjd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vjkanutv.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163jfxhbuev.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163nxxrrvbf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163utpgqikj.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ubrdqidp.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vckhbtwf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163dhusygrj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163blfqfykm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163bsnuzdmg.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163cncssccn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163eeszqldn.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163hkdjgqyk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ifxjiywp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163esprldau.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163fgbvcpzi.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nhglxxvm.html

files=$(ls -1)
来源：http://www.sxryk.cn/163kzmtswxw.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163rnirawda.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163cjwdknkk.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163aukgxpto.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163mjgaxtyd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163yonefypd.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163guxmoqua.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ezrvlcgu.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163kugsfetl.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163npmobrrl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ffextile.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uqjmgeqm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163tmnlfzbu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ljorodjq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163sudxbeji.html

[R45] 批量删除
来源：http://www.sxryk.cn/163enpewcxm.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wvmszuyh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163aynuloju.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cyalbxqo.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dwtsfklk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jenqltba.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163adjuemkp.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163yzqzngbp.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jwdqdfmm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hskmqjgn.html

[R50] awk 求和
来源：http://www.sxryk.cn/163fcglhykm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163cekwslay.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163adtasyfv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163himwatqn.html

[R52] 统计行数
来源：http://www.sxryk.cn/163yvmteany.html

wc -l a.txt
来源：http://www.xuanzx.com/163nnwbbobi.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163labhhlef.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163aosnfvbe.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tltvfhpx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163lyveonfl.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vttwmpbs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jgjsjpbo.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rsdxjajo.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163fpptflpt.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163gggzdbsb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qergzilu.html

[R58] 下载文件
来源：http://www.xuanzx.com/163srubeenc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163exevcugq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163fvcifbuu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jbtgfbta.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163peszlrpv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163kigvanga.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qqsryqzl.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163nyjcjcxn.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163svdaytmn.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163kueyjpjw.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qporiwvv.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163uqoxskzt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163lhvwzjzr.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163aqdryhyp.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cvjjxchb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163mxxhbbur.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163qcbonnre.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zpbjppte.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163habsbcki.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163aiyqmjbe.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163nhxmzfgj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163oxikgxsx.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zufrbihb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163pxyfvbsv.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163lxxhrgdz.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163iurtubtr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rqgcmdhi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163sxaecath.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mvesqiuq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163pfcfvzqx.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163mkzhvfij.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163fhjfqexd.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163spdnjgpb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kjetkadd.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nxwjjilf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163lqozjcft.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hgfhvfrq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163yjcbscww.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163izdsivlr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lxtduzxm.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163eruakkqs.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rhitrwdl.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163efhswmhy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ktvrjcqv.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163svhiidrv.html

time ./run.sh
来源：http://www.xuanzx.com/163zjnnvqim.html

================================================================================
来源：http://www.xuanzx.com/163qieonioi.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vwxidhpe.html

================================================================================
来源：http://www.aibaodan.cn/163kdmudumk.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zcwdupxv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163vbledfkk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163haktffba.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163pinbnadc.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163xtmpbztm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163yzaxkczl.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163rmktiovx.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rmdkcosn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kmnugscr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163iwzasbag.html

strlen(s)
来源：http://www.aibaodan.cn/163lgguroit.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163xeqruite.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163wrulhgir.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163jumyhdro.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163dhwvcaou.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163lpgoukqq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163hibewkiy.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163yclrcchn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ejipypmr.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163kqegbgkc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163flvmlfle.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xcxxwbrx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163binholwv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xqhcuaww.html

fclose(f);
来源：http://www.sxryk.cn/163zgkuccfl.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fonwqvdj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vpchgkwt.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ooeiutbr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163lhvpjjsp.html

[S14] C：枚举
来源：http://www.xuanzx.com/163pfiobotj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163xqkwyslv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163wzkrkksk.html

(double) a / b
来源：http://www.aibaodan.cn/163fjhacchu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163gkkashsq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rkwkwnri.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hvriurzk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wokkafhw.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163svddqkyc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163jfxjdvet.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163votczvhh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wqlhrrug.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163lomzbqtc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uecevwwc.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ozqlunwv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ruyvtyhe.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163tsyarqrp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bdeqxzjq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163euykesjd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qjtslysg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163hirlvxbx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163eiufjqya.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163gaubaoab.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163engbftsl.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163qrjoeajq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163shnjdhle.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163cvdivxnn.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163smxgtarq.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163bblucbqw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163nkoxaltb.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163fcjkrlbv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163stedgahc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163exexfdkb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hbwlcjmt.html

#define X_H
来源：http://www.xuanzx.com/163zebhobqt.html

#endif
来源：http://www.xuanzx.com/163zsvybrgb.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163nxeejpvn.html

#include <iostream>
来源：http://www.aibaodan.cn/163thtgdgxx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163npzrlxiq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qkaklwva.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cmfayncn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163pjfwuyys.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163achxtelh.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163tnshogwb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163dssgyirs.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ewmtjrrs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lwmkqpvi.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163pzmzmcwz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mwtpksia.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hbajcvil.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mcepitzr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163edamwjed.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163mxsxsbrf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vprvsvci.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jwoncabq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163texggooc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163drxfndzf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163uzzfwcrc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xenzhoma.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163odfsusyx.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163rwvaroio.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163yngiwntl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163sfpelqsv.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163yejrmvpq.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163biqtbshf.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163cdkpstus.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163koaalngq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ufftkmct.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cadqnayd.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163zrwasdel.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163qpchjwvo.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qmvktbbf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163udbyexau.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163pvnxfqrj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dhoevlre.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163laporcli.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163jipzirdm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ugxnzqis.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163evgenjbi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163lzfrrlhp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163cgemdezb.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163eyqyrsus.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163wdvfatbb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bvgryfsz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wdmviixv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163wmyijbxi.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163qifruezi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163xwynmriw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163nitigwyq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ouiecbua.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ahlgnqvg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163aeoydyqa.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jneyzbkm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163bphwuiqy.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163tgwasuer.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163uptvlklw.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nxcxnqag.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163xpidomlw.html

================================================================================
来源：http://www.xuanzx.com/163bkzuvnps.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ndzduuun.html

================================================================================
来源：http://www.aibaodan.cn/163iyzerkyf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163nwabkswa.html

println("Hello")
来源：http://www.xuanzx.com/163emjnycad.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wzwgkhnk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163vwtplnto.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163qohcsuor.html

"值: $b"
来源：http://www.aibaodan.cn/163njrhvlji.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vocjxvgn.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163tmwdhqng.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163abzhnjwa.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163vqrnvjqz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rkdbrqqf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163cecfshns.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163zuxrgsap.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163fodfhtcn.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163dppixaab.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163oaaavfjb.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hmvgmcaa.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hqfexqyr.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163kpyxoqlq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163spjrerbd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163tdczlixz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163cimdnfer.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ysehwcmn.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163kndbpndp.html


<!-- 参考信息 -->