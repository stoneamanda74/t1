外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tzfrwrae.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xnwcfqqc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xkruiizs.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163juawiobo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nmxrbkht.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163inbfxkau.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163mvsmsooq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163uqhpvxex.html

case "$1" in
来源：http://www.aibaodan.cn/163rhvyefmq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163codfncjg.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163oikfsvaa.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163jqpuerdh.html

esac
来源：http://www.aibaodan.cn/163ksvyvgia.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163kkeeizqa.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163vvdylecc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163zubnjlxw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163gdczspni.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163iwcsnguj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163geipuylc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ydwkecuh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hajifxek.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163yoqntlsz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qhmivkdl.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163qykzjsrk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163osdjsjzb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163msujxctm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163pngnxuom.html

[R19] 数组长度
来源：http://www.sxryk.cn/163fchdvtgk.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163skelwueg.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163pecpczoz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163viyatcmo.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163gixrsydx.html

echo "${#s}"
来源：http://www.sxryk.cn/163bnhnzrsf.html

[R22] 截取子串
来源：http://www.xuanzx.com/163mhunqvhb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163czrqlktn.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163nhfvcjvd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163labgxjvy.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rwjorsgd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tmcdlgnh.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163pswlcbqt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163lpqfeouq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zmswysus.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xrrgykxy.html

[R27] 算术展开
来源：http://www.xuanzx.com/163tirxlukg.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163hzhzsfda.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163npuhgmwq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163mxsncogf.html

[R29] 定义函数
来源：http://www.sxryk.cn/163iwvwzony.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163gdvumlnf.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zbcnheqd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zaubjwey.html

[R31] 局部变量
来源：http://www.sxryk.cn/163uyktyaqq.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163whapcnqk.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163gdmzrvlt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163nwaosxnd.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163sagtlrxh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jvpzsodt.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163auodvxnz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ijaxqtxv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ajutexrm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163gnimgrgt.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163orhmqlqu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163cpmyehbw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163iumsqhex.html

files=$(ls -1)
来源：http://www.xuanzx.com/163vxdbnyto.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163skrwtkxq.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163kzmfooer.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163lpezcylu.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163uzisbthn.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wpocmtcx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xlyhhbcd.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163umiiedka.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kfhhlybv.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zpnzcmiv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163kktzypvd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163wshqqrlk.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163kgexjzne.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vpqolqff.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163pymlrocx.html

[R45] 批量删除
来源：http://www.xuanzx.com/163gzkrsfdt.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163otbhkfng.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163tiwdlnzo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163dpzgrwku.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ofrhmpgj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kwwrmdco.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163aybaljyu.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ljqkpqag.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vmjfyuvt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cgcaetzf.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jnznrglx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163flqkhzmp.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163jdojefsr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163rvmmqdyz.html

[R52] 统计行数
来源：http://www.xuanzx.com/163altlgaqh.html

wc -l a.txt
来源：http://www.xuanzx.com/163mvoxczpy.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163srtpgazb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163nxsknfep.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xkauomjo.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163cozjxwrn.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163mizlmzlb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163aytkfmtx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rxjveuxp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ehyypmzp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xmrquefm.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163oesmvxcw.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qmjgtvkp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163tqljtmao.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163idicposy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163maqhpqyg.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163sfhdyvvr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163poyrgpgr.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163vobpdrvy.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163nxejzuzb.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163fcjybtly.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163clfcdwgb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vvnjxghk.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ulxexvir.html

[R64] 结束进程
来源：http://www.sxryk.cn/163pocradtu.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163kkaqcyej.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163uluyzemw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zfwatazb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163yrammysq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jxmbckqp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163radrgxuk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bwgrowyr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163vganfrnx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jwtwqvmu.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163afgizniw.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ldxpuvya.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163rluicqke.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xblzpswy.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163wsbdxrfn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163egzigvjb.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bpetibdv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163cjycbdvp.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163wxtutsvo.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163qacmlfsm.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ygpmqkxw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qkojbhqe.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163tudaipsi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cnspkpey.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163mrdbomhb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zjccbjci.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tvjovulb.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gkoronoq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ppohpglp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163sxzkbstr.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vtqjsjtg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163sqopglat.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ciwlodln.html

time ./run.sh
来源：http://www.sxryk.cn/163ivunafyi.html

================================================================================
来源：http://www.xuanzx.com/163zdhfngmu.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vczhdrcd.html

================================================================================
来源：http://www.aibaodan.cn/163romwwzjt.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163mpgokqrp.html

#include <stdio.h>
来源：http://www.xuanzx.com/163wghzpmom.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163edtfkwfh.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hailnhtc.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jstlcesf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163dmovmtom.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163fxfhoiwy.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ddnajvsy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163fznxpueo.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vdoossqt.html

strlen(s)
来源：http://www.aibaodan.cn/163jrpzlymj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163alucroha.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163oeeyojio.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163zbikpdcv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163dxdlffyw.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163prdvxqaz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ubdcqchp.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163asoulqnu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163vqlnyzgb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qctmnwaz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zadutlei.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163vttltlas.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163epxmsgxh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163odrldwbn.html

fclose(f);
来源：http://www.aibaodan.cn/163bfvkndqt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bjzwjity.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163lyhubxyg.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163brggfmku.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163nvbstatx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163eendeszc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163dokeoiqp.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163yucgepbv.html

(double) a / b
来源：http://www.sxryk.cn/163vlxlsedm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ldbmpgjq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163hfgnsyef.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163eujnedwx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163momeivay.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163eyfznsbo.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vicsoxxj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ikwzgwem.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lrlbhodw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163alkggaiz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163idjwxtxx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ittxcisu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qrsxjmdq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163elmquamh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163peaelenb.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163bwjljzmh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163wrdjgpgp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163biatnlfo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163illdjzxi.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163nyoybkih.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163nayypppv.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zfaqbkmg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hfsilyzb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163niwdzobf.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qgzeqpxq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ocbwmriq.html

static int counter = 0;
来源：http://www.xuanzx.com/163bgrumvfi.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163nkzaodhs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kqlqzdoq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zqadoxrj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163oxjpkmhk.html

#define X_H
来源：http://www.sxryk.cn/163imvdhsca.html

#endif
来源：http://www.aibaodan.cn/163epshblzd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163nkhhkrhx.html

#include <iostream>
来源：http://www.sxryk.cn/163hihzvdvp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163grpklctd.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163qwewnnvu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lpgianpf.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163beceaqvz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163bmhyfyfy.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163bwtiadre.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xfyomqjj.html

[S35] C++：map
来源：http://www.sxryk.cn/163quahveid.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ipnhacyy.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163sabpymsr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zcbqtodw.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nofxbmtu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163wjckxsob.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163tfaygeid.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hogtrsbr.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zwufufma.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163sirwjogz.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163tggrnkkw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wrqvemhx.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pkszthxk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163oxilncyq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ifvbyjot.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163mmhjfpvf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163phwesbgp.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163byofpqih.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163lmgmedeg.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wimxnozf.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163uxshxwva.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163fimjhyte.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163tamnzoir.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163lowglsge.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163siixjgwh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163veytliev.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vxhiavef.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163lnnuqqux.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fkitkcyo.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qxrbhvwk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gnxvehde.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163nbkrjzmg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xjyecenx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qlyscarh.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vueunxzm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ywknnjsm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zthbktum.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ugdyakyb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163jwsznxjc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163fmbtuswq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mxzqzjvc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ukmisynt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163zyljcahp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163shzgaiir.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163wwizwjvx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163iiubpzel.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yznayjwk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163uylhqoah.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163fjgpqoyy.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xlurkdxr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163uowcfuch.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163chbnqgza.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163rmauxaxu.html

================================================================================
来源：http://www.xuanzx.com/163zjulzlhr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gxgzyefd.html

================================================================================
来源：http://www.sxryk.cn/163gsumjdkt.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163mbiybfcr.html

println("Hello")
来源：http://www.aibaodan.cn/163fprtgqqw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163wpxoygku.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163elhneupr.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163hqdzvosj.html

"值: $b"
来源：http://www.xuanzx.com/163akbzxnbj.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163nvlunohh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vzsjslbe.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xitfnryk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163bpgxirhs.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163odncimew.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vsikjrxu.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163cctarfxk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cqtbajru.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163clljuwbr.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163zbkztrsc.html


<!-- 参考信息 -->