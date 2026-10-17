外链999!wailian999！

case "$1" in
来源：http://www.sxryk.cn/163uryiiavn.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163iqoqbqqn.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163xinhhvts.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163zcspywqt.html

esac
来源：http://www.aibaodan.cn/163hchyoozt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163mgtsplyc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163zuzfyxdu.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163rpfzggxc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163sysirtws.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tzcyongl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gtslkhmm.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kywnnawu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gohvawca.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163fiboebik.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163yfjzxssi.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163gibcfzsa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163menopbxi.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163pcxnanyl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163djbikkcq.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vdaxcdpy.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ucwbxxrh.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163okdqravr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163twmhqtxx.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163gaqrldcq.html

echo "${#s}"
来源：http://www.sxryk.cn/163pvawmlwb.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163fqbsurra.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163lozgraae.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163isaishnf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163yojmqluj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163khctjbth.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pyxlajev.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ikoitoby.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wxqfcwnr.html

[R26] 命令替换
来源：http://www.sxryk.cn/163lpsnyjed.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163smqsgohi.html

[R27] 算术展开
来源：http://www.xuanzx.com/163qbmlpgbx.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163jtkihkcb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wykcjylr.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163adpevwge.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kznutvqf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163kcvscare.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163pclnykml.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163eqzrkbbb.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163vxhijjhv.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163eemaxiph.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163trbflutk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163vfdgzhbu.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163carwvslx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ilgxmswn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163fqkxmpxo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fyznvxkt.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163mpdfgeyy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yjeneafu.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163yczogoen.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163qkajzchp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163cibatvmh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163qgqdwysz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hnjnzxgg.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163sibjilwc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163rrtxdcox.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163fkjlipai.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163poksovgl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163xnayejut.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163njbfdumv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163hsqixvcu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zmqkamxv.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wjszceqw.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wesldxiw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ctdgvzou.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163kqvejkdp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163abxofcdq.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bvgljgls.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163tkmjjlxt.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163trkvzuzj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163psihgzdt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163cwfnxhnk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163dgdelcey.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jebgrwrl.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163injmfwqa.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qtrwmulf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163eihjmnau.html

[R50] awk 求和
来源：http://www.xuanzx.com/163yxtajzas.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163rmpxbrlf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163lmsvsbex.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bibgepao.html

[R52] 统计行数
来源：http://www.sxryk.cn/163tiuqwneh.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bzlmegax.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163tgkljkki.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163uxfocmrg.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163pywuwmqk.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163hdhmiwnm.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163aowoqhmh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163grbvhalh.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163soyqpsgw.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mjallifl.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qxfjyfhh.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163yspsjoep.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wnmdmekl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163yvcmfktg.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yeuzvhhb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163rzxsfnjj.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vxtkmdrz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163hjykymey.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zamtvghh.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163hmjbpuil.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rxpdzeht.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163gwnxnrvw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tcptllxs.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ygqrvkzf.html

[R64] 结束进程
来源：http://www.sxryk.cn/163jkczhlzj.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163puphqgab.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wnmgaotp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163whzjruzx.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163frhkayvt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ufeebokt.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163fenulfye.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wmdslkvc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ysoegnku.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163olvjpbza.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ffkeyolx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jqdfwuvo.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163eqcvmdpg.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163eyfiklzt.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tdpmsaje.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163qjxkksdc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163cqvokues.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ktvpqemw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ztpetfmf.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fbtcvjoq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163wjacqcei.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wkwfpjki.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163yhaoxvsu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163pykiypyc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163aygsqiyx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tmhbrpvh.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cxjopaav.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163zvuzlcoq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163boaiylqb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163bwexujex.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163trottyia.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163clobqacr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kzlpdtov.html

time ./run.sh
来源：http://www.sxryk.cn/163sjifkkpp.html

================================================================================
来源：http://www.xuanzx.com/163ygdlkria.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163wlskremd.html

================================================================================
来源：http://www.aibaodan.cn/163vqtdbaut.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163uryffngc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163enctlrux.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163fjwiivei.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163igjqvvup.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163uounxkdv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ozhfzoud.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163balugzrx.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rnkaairz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163idlrunye.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ppqsbmxm.html

strlen(s)
来源：http://www.aibaodan.cn/163mnuwifwa.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163lqsjahmx.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163tlpdegsl.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163idnwjszl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163rhkuhjji.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163pksrgwyl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jsjdqeas.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ehvtcvko.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163gbmthuus.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qwpbvdoh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163prhaxrsk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ccrqfkgx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ccmuyhor.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163fjihdeef.html

fclose(f);
来源：http://www.sxryk.cn/163twmsvktp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vnjivcpw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pxhmffmj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163nfygnnki.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rmbueune.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rpsgimad.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163weuhqvho.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163lvwtozsa.html

(double) a / b
来源：http://www.xuanzx.com/163rjkqypla.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163uyyhmfks.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163rrjryght.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hwzopmbt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163etvhicvi.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163fagooukv.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163emdkooib.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qyqxtefq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jlkkrzws.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163waurvmsv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163olitippi.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163tjocvcgr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163lppnrzzq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163mcmclhql.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163cvbkqwgg.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163emdmviub.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qctsxbhs.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163advberni.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163nfmahuwo.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ndhaplaw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gipwrlxd.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163eyujakas.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gxpsoztc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163shyuspxu.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zwmzthvx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zuljnazf.html

static int counter = 0;
来源：http://www.xuanzx.com/163aayddxck.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163avztiazd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163wyuaapts.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rtmsisei.html

#ifndef X_H
来源：http://www.sxryk.cn/163pmemvuyv.html

#define X_H
来源：http://www.sxryk.cn/163qnzrwvfp.html

#endif
来源：http://www.sxryk.cn/163jbqeclyb.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163fxylysyn.html

#include <iostream>
来源：http://www.sxryk.cn/163ykojzthe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163olwbfzqz.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163gapywsvu.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163kyniycci.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ecylajll.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163hszaczys.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163icooinyb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163akvoqanp.html

[S35] C++：map
来源：http://www.aibaodan.cn/163svrztgyl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gfwkmzhj.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163iowxljzr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163oxdzzbbi.html

[S37] C++：set
来源：http://www.xuanzx.com/163xoqpxfue.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163eclujipt.html

[S38] C++：排序
来源：http://www.sxryk.cn/163lmclqmuf.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mvdzidgu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dyciwztx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wngksedx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jarrpbqp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wqurrebk.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163vnrueuuk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163aoeancoi.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163fnpanstc.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163xddtwctj.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163zpppfdwb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163otirqatd.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zlojhoce.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163yxwbveum.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163wqxqfpat.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rrlgjyfb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163strecqgc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nsajgnic.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163keerzctj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kfgovtbw.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163mphnthen.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163yrldibol.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163gbjclxbv.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163eoqzgqjl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163uurepfgq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ylwfggzh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163grkvtzdc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163efnpdzyc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ynqkmxbi.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qcdfohmz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163juepzbgb.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xundwecb.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163iaxwwbft.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163lpbchhrg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163lnfrykpd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163sklkoubl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163vmbhubyl.html

[S56] C++：optional
来源：http://www.xuanzx.com/163agagdykc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163iokjlnza.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163khzuuuwa.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fnzfnudj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163dkzdarmz.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163moefnpfy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ophhcdqp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163dafbvxdn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163aclbkypk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qduczgqv.html

================================================================================
来源：http://www.xuanzx.com/163iluzrpfd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cbsaesif.html

================================================================================
来源：http://www.xuanzx.com/163nvadddfr.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163uegjhjti.html

println("Hello")
来源：http://www.sxryk.cn/163mvnmscme.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163wpcjqlmf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163orpzlwud.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163yxcoawoz.html

"值: $b"
来源：http://www.xuanzx.com/163kjqcmsxw.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163usbfdlhm.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163iqsmizex.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jmwauhwl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163vagzbxjc.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163odmzegxc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163sipeffyq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163yarcugnv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vdgohotx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163yvznnxxp.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mesqdgtf.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163efdxjmiv.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163orelmgay.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163hahksanh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163trwflver.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163wusuqpps.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163snfkcmbv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rgmovmqr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163urjfmwzh.html


<!-- 参考信息 -->