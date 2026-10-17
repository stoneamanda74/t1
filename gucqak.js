外链999!wailian999！

name="${1:-default}"
来源：http://www.aibaodan.cn/163tsgrotmy.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163olbeoxlx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163aqvgeaat.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qbtueimy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163pliaoosx.html

[R08] 数值比较
来源：http://www.sxryk.cn/163pzwiworq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xevuudri.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gbjxhrrj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qaxuspxv.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tjeqthtr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163dqtieyzb.html

[R11] case 多分支
来源：http://www.sxryk.cn/163kykcdejp.html

case "$1" in
来源：http://www.xuanzx.com/163fwbeixcf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fpvttejm.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163brgqgkap.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mdrpsakl.html

esac
来源：http://www.sxryk.cn/163fquysouv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163gwkysvzf.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163cazkabup.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163npfbttvn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163fwcovpwi.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163bgpcpson.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163biyiwhye.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wrytcmxb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163nnaqlngm.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mnyuoxni.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ndrxvrsx.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163iedomnxw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zyxamszx.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163wfhaqcft.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163edwhsxtr.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vxjlftft.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pwypphnl.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163zumasbgt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ekqoqntw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xgonrxya.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fnpxxpxt.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163utcmrgqv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gyehzhge.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163eedqbetc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163pknmrlba.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hfwizepu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163uopxxsbn.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163pfmfbwps.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zsfrcbna.html

[R26] 命令替换
来源：http://www.xuanzx.com/163srlzxfmq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163dsqmhvmb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163byoynjsi.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163qrqkudro.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qdiivtor.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lsavtqsl.html

[R29] 定义函数
来源：http://www.sxryk.cn/163lpwpcmjs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163exxkzhcw.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163lnteeqnr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163anoxqqhl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163caclycvo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163wmlcbvrs.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163pdnmgvnh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163izteaqcn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zpjqglgc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163trzkrdte.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qrdefhet.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jywjjqnx.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163esufhatd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lvhpoqfo.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ovuinmjc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163wpetdvtf.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kdquoyyg.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ydpqxycz.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ecuucauf.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163fqsnveuk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163yvekwjef.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xshshrrr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163woffjrty.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163kggnpzha.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mlpxyusl.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163zzkzmhdz.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wuxewpld.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fsctfwew.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163letqcvnx.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163smgjumvq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163iwtfddjy.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rxnuenmb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ybohcxab.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gochkktx.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163vvlfzbej.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ldhboqcs.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163sfornflb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163dmfaweky.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163xoaxwbpo.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ixgwfxav.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163lmxtbctw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cntyeilv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163btjooqrl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163symsjrvw.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163gzmsmxaz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ceypwbjb.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163glgzgynh.html

wc -l a.txt
来源：http://www.sxryk.cn/163slzcpaxw.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163mvrjtmvj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163afobdeig.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163jkxausuh.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hsatheob.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vwvhrged.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163acqgrilb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163bktsojhs.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163xbkohdmu.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nkxpxrpv.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ltowfims.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hoocovah.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gpmttjtn.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ketinkpd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163cwilwqwi.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163wixjilke.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163nxsqczmj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163qndalwci.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163hzukprry.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163qnuwmjtn.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ppogvzls.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kpsegfum.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vqhvlnww.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wxwafwmu.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163gthvrnoq.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163heopivbj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qjwqaoqf.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163tguajcvq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163vfkgziir.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ycqqzwzs.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163gqxmyvfl.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163sreicfuk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163jymlijzg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ffvnqobs.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163metjoaok.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163weboizaw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rtjlogog.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163fitedran.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163gsbtibvu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wkuauxco.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163egowfpqb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163efqyauxz.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163eyursdem.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163oskdsyvg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163gijsteqd.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163eppwfcwu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pwnkicgc.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163kxakhfjt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nsovrley.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163tcpeafmn.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gmujilue.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163auqaqlgh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163mdvzkcql.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163tuicewym.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nednzkqv.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163uyczbcmr.html

time ./run.sh
来源：http://www.sxryk.cn/163juydwvdb.html

================================================================================
来源：http://www.sxryk.cn/163taofzkkn.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yivewzla.html

================================================================================
来源：http://www.xuanzx.com/163aobuyjef.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163fcgvgfep.html

#include <stdio.h>
来源：http://www.xuanzx.com/163gaeseaen.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163eownaood.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163kwsmzbwf.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163shmwrstg.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163cmqfwtmj.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163aqfzrjqn.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163odwkkmyq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163svdhptbe.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fgkzmvns.html

strlen(s)
来源：http://www.aibaodan.cn/163qdsyvwzz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mzobikex.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163nyxsguqh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qvdfojtp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kwupcxsj.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163lxworftn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163pgncgbhg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163pohlxhoz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tsjehney.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163nygttuva.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ezccmkcw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163omiifhcn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ndmbjllz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163uzztnxpi.html

fclose(f);
来源：http://www.xuanzx.com/163aybvvufe.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163rlgshapb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163snztdpen.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163qwkfrpvq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163icilbhts.html

[S14] C：枚举
来源：http://www.xuanzx.com/163aqpqeavn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163pdchoeht.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ahgcpmla.html

(double) a / b
来源：http://www.xuanzx.com/163ikwftewo.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163rdbisrei.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163wcluvpek.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xwgdqmue.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ylrnaeda.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ckfvqilv.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ybrdcxkx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163glwuulmb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163banclwta.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163blyirvbi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qbdhiuwz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ckqxtmes.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ssytvmva.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jeiuyiov.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163wsissqzn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hmwaalnm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163tzrfddrd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ncynvacy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yfnsmkal.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ufgtkhlq.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ghtxpfam.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163itfrwalb.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163oetaafci.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163krsfkdkj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kclrjmxp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zmkstbsq.html

static int counter = 0;
来源：http://www.xuanzx.com/163jhsxxmap.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163sdgjunzj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163veufpsni.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zggweyal.html

#ifndef X_H
来源：http://www.aibaodan.cn/163yubggacc.html

#define X_H
来源：http://www.aibaodan.cn/163eesqgjmz.html

#endif
来源：http://www.xuanzx.com/163xtgalsjy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zdptmcrq.html

#include <iostream>
来源：http://www.aibaodan.cn/163qbfqbtkl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163sftzgokw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163tsnrjpsq.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163qcvbutxz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vgjttdzp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163vzydvkae.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163wzcbrlql.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163idszsirk.html

[S35] C++：map
来源：http://www.sxryk.cn/163vnvvjsen.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163apcvuwtp.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163asxqpfnr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163digdetgk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163rznttymu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fmwpsogm.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fhseoloy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163iizihrzu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163woywrtox.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bgqnxxae.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163twzpvcqa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wwgqufxy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163fuliaqxr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163lfuloyrh.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163msvsdohk.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163phxdcius.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163zzdtaphu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rcjvvqgm.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163prlefakx.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163kqwlorbu.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163dpqiupjk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163tzgzoxkh.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163wprhfkph.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163xrpzyfjo.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163rhwptoxi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163mypegwmb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163bwkrxoxg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163kqdymoqn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163eojtdzkp.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163jgbmnhqj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jxewppfy.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lghzbfre.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163rghdbbjc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163kcqfzbhb.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163mmlsttix.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163typemjtj.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qbzybcqx.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163cktwjtlm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jnzpnhhp.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163fpuyeluv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kehxreqp.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hxxutijs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163gcdlaimv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163fhjqjvxh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163gzutwimr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wpuoudbj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ucgjfefy.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ygaubtux.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xgfvmxrx.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hwypvaxs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pbnucsxn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163pssznmvu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ycvvhgpy.html

================================================================================
来源：http://www.xuanzx.com/163bqapqgjs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fqvftdwr.html

================================================================================
来源：http://www.xuanzx.com/163aywsfgtr.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163disgrxys.html

println("Hello")
来源：http://www.xuanzx.com/163slwklpsk.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163dklphkem.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ignthrkj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163fpieoscs.html

"值: $b"
来源：http://www.aibaodan.cn/163brdpiwer.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163dfvatkgb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163brzjrsfi.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163edhcwrji.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163gziksryx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163nthzvhcc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ipwhkfow.html


<!-- 参考信息 -->