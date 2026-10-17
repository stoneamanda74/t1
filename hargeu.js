外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163lupyehkj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163vhjndwtm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163umvomzhj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163uumqeqbj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bzfgiqjg.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uatxpzup.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163sxnmaxxf.html

[R11] case 多分支
来源：http://www.xuanzx.com/163vjrahodw.html

case "$1" in
来源：http://www.xuanzx.com/163fzlcwehb.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ureadgye.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zazzvtvb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xykjhvll.html

esac
来源：http://www.xuanzx.com/163vidlhuaq.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163tzoejpde.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163obcjqubi.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163zlzcxfpa.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163cegpkffe.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ltbmbstd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163kzbyquor.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163amnbimyl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163jvinwgmn.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163nwkfwomt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qkporrpb.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jjkhndxn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163yqfmseyv.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163dvezwuck.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ojltrzdy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163uyfbzxyu.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163gtjjhspb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lmkqgshd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163vmgdlvrb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163esgkzaed.html

echo "${#s}"
来源：http://www.xuanzx.com/163fnytzsvb.html

[R22] 截取子串
来源：http://www.xuanzx.com/163dqfkrzwf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163xfzzfqls.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163xpbsccyr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163wnwczyeu.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163rxaninyw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163gxztkcdo.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163qnmolkwo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163idctuqbi.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rrdzxmeh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163xvwotbvl.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163fhzdrsjd.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163lyzqeozs.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163xhpxjigv.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163msfcmqpr.html

[R29] 定义函数
来源：http://www.xuanzx.com/163jtrpqans.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163khzowzxa.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ayesuyfz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jitscblz.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fipsacrz.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gbgoxpsm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163njpcjezb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163eaigboeq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163rnxbfspa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163hydtgcue.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163uoxzrqii.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rplzewun.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163mngyllrw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163bsyvnnhf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dztreand.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163yaehrxfg.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163wngwdtaa.html

files=$(ls -1)
来源：http://www.xuanzx.com/163kspjvlgh.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ylovhfhh.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163nqcdobsc.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pgvygjnq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163oanmwjwm.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ulkgyugk.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ssbfzohj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163sdcuyzem.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ajqjvrvu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163yzxespxy.html

wc -l < a.txt
来源：http://www.xuanzx.com/163btzdcgke.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163jrdkpoka.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163diyzjndr.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163geobutej.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ptfcimyb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163isjfdzjy.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163iuaxtfvu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163sohzcyhx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163eofbxtro.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163kmsqdpow.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fzdvyzis.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163skntkefl.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hwzoltqs.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163llbnbpqg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ifmctwwb.html

[R50] awk 求和
来源：http://www.sxryk.cn/163icpbgudl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163kojnecpg.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163iwbicxxx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163coadjtjn.html

[R52] 统计行数
来源：http://www.sxryk.cn/163acotyakf.html

wc -l a.txt
来源：http://www.xuanzx.com/163eupdbyog.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163zhlbbjil.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qqsaolli.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163eaxcejeo.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ahgfhoaj.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163yllucasb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kwzbbagd.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163lxxdvnck.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qimagpgr.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163uuexvsqo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vlyfcapw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cbymevxw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163fxhmqnlu.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163jbafiqiq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163hbquralk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mxdrgrev.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163bhoxphsh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163dkofxbvu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163fvtccrce.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163dpzrcerk.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163znajlurw.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163cncibyav.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vcenxhal.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163uhagosyv.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jongpvlf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ttriwvks.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ldsweogf.html

[R66] 定时任务
来源：http://www.sxryk.cn/163pdivoxpq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163lflwnafy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163oaxblufv.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vctjkqnh.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163uivctyjk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cyoaagbn.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163splggtpw.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nkcgkszh.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hkgiqtbo.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cbvbxyvl.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163hidduosq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163woedmroo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mgynqyfo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jyjxvfbd.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163jqwsuigf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163edgwghcz.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163vgeslcvm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163jmdhuwfi.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163szpvlhpx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163gpmywusx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ycudpmsl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163thsskufs.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vebtnslt.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163kucdfyex.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gehgaquq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163uywmblwv.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163oxgoyqjw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kosfshji.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163mlypwdfr.html

time ./run.sh
来源：http://www.sxryk.cn/163ihqfowky.html

================================================================================
来源：http://www.sxryk.cn/163dcnlwjua.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163yzmlepte.html

================================================================================
来源：http://www.sxryk.cn/163ynnfqsvp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xyqeviuw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163trckaemq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163vpqexfot.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163lzsdctaj.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ufbpylet.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163tjyegmlq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xlmsqpuv.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vhyqkfjs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163txzhtjza.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163woenxide.html

strlen(s)
来源：http://www.sxryk.cn/163xmtohcol.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163iuhcwbwk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163sgbaynsr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pakqlwqs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163mhkiifyi.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163zyxstyxp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163kxzwsbmw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163pdegwfzn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pwnuztbq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163jixelowd.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fabarhrv.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jmgfkoyw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gsoegdme.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163friwckwu.html

fclose(f);
来源：http://www.xuanzx.com/163ayoefrcq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163sqlubsaw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wglwfjgf.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xhrrevxh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163cldpogzh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dxgmbawg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163rgcxvcea.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163znwucxio.html

(double) a / b
来源：http://www.aibaodan.cn/163tjqbxjxs.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163pfopsaho.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163urtfufdt.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163imfbcvwg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163lksolyul.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163xhtrdkvx.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ggzpjcea.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163kudntfbk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gyppxfqc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xgwmpwzm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dflglkpm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163crjqvfgq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163kizbyums.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jeukcrzw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163acndyzdf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yamadhxs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163qeytilxa.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163pdchlyjc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163epvkhpuf.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163gazlqoiy.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163dvfwqmat.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163srimrbsu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163fxcvxpaa.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mvtcacwy.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163diwvfruc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yikgzenw.html

static int counter = 0;
来源：http://www.sxryk.cn/163rklgtvbb.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nuvshvtr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ngqrqufl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zwjtewsw.html

#ifndef X_H
来源：http://www.sxryk.cn/163brpqsknb.html

#define X_H
来源：http://www.aibaodan.cn/163igftojje.html

#endif
来源：http://www.aibaodan.cn/163morjrkgo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gaemfgop.html

#include <iostream>
来源：http://www.sxryk.cn/163auwmhunw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163eqrpuzro.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163eswewgun.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163umsusijr.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mijjgguq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163cyvivzwg.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ipmudshk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163usqdqzqx.html

[S35] C++：map
来源：http://www.xuanzx.com/163zliwxgut.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jujrvzwo.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163treitgjr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ddkpgerw.html

[S37] C++：set
来源：http://www.xuanzx.com/163nsnnwewf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fnasqemt.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qxyjjhpy.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163idnorwgl.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163stfkmprx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163okttpfvg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qgrcouol.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wxkvkere.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163civqepzg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163gthnsbhe.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163teetqukb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nxbpzcbf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163yehmrtmy.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fffqbelj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ewxqgiqj.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163raystnic.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163olribrwb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163kixxwqgz.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163lxjmosgm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163shzkfdsa.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163txucvgev.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ctlfwnrp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163wdddujss.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hqwsmbdd.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qnxpndvs.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qgjjovri.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163raeflffq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vsqaagjy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163nordwwqd.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163nmkyeiym.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mahvdavy.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zmnjggln.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ylfcresp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ifzghkmv.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bphtblvg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163evfchbxu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163guzlgqbe.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163hpcxiouv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ldzoxohz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163giukckbw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hylnzdci.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163exbffjna.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163biuzgbwo.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163sudpchqb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163gbxilptq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wkysbvny.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163lbqgwxkn.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163nqnxpfvz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ovhrddde.html

================================================================================
来源：http://www.aibaodan.cn/163cqzswlpz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163glqskita.html

================================================================================
来源：http://www.sxryk.cn/163ysazmdxr.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163usvyshud.html

println("Hello")
来源：http://www.xuanzx.com/163siyjnxaw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163jgoqscxx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xoojjeyc.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ddtlmynq.html

"值: $b"
来源：http://www.sxryk.cn/163jmpthdao.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mpvrpoye.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163iteuwlsx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163djscqqyh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163mbevrwwd.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163nfjqjouj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ggpywlhg.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163nztqebiv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163bmcshqru.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163apelfpeq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163dandwfhx.html


<!-- 参考信息 -->