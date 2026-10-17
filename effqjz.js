外链999!wailian999！

case "$1" in
来源：http://www.sxryk.cn/163yrvmttrk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wnrbzhlk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mpondqju.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163meyyfysk.html

esac
来源：http://www.xuanzx.com/163xzyynics.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xyfginvx.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163nvneuvkt.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163rryrqggb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163tfxveefn.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163upurgkvt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163rthpiefp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ljtimtwj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163gsrmohys.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163bfgcmlyc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163pvrflzoz.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sqvbldjj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163qglmibyh.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ioklzycc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ykhdvnyw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163efgvdqmt.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wwyqdfmk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163unormpfm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ywyhpehw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163pfnxdecn.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ihfefymi.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163pqrfmjwv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mmioasmj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fdvinhov.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163hwcngsdd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163lxhxlcvk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pqvhpihq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163oswqopxo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hrfvogsj.html

[R26] 命令替换
来源：http://www.sxryk.cn/163spqblckd.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163subtglid.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nfbzxgyd.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xozymfft.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163kepqsugo.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163pydjtrzw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163pohzjuow.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163npvsblui.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ocqpyycj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163idtddkri.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163qebetvdc.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rcymityx.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163qwlstfgm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fllrpynb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163kyjkwwhl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ivnjqtpk.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163blonicrl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163flmlmlmi.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163erokotxp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163uppkhwzz.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163xkbzdsap.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nelillnl.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163mhfkhdak.html

files=$(ls -1)
来源：http://www.xuanzx.com/163pocllsgs.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bdwntdaa.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163knleulhl.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vgohusbo.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163kpwornqq.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cfauntiu.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163eyajoduz.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ewitsuao.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rldvhfou.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163sbukruss.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lzzvqnfj.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163gyhrzhwz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163frdqkubo.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163wlohaqli.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vrdjhxoz.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kvgkeuch.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163htoggtuy.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163rkygdcrm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163firfipgy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163xjcovmlz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163swvmkqye.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ivmugjlf.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163wfopsyxg.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163xpxtfybw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163sqcdyxtr.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163kxwobgey.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163odsensyp.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ypbhddpv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163azojwpdi.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163txhigjly.html

wc -l a.txt
来源：http://www.xuanzx.com/163ivuqhecf.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163qckmjejc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163zpuclvrx.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163sazgqrvl.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163uwxwrvyn.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163llaybgxl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bwluafxj.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ihsmmibz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163wmsttlwu.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163snerxgja.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ihkhherd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163oiqpkvpj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163zvucrqov.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tkmtgcjv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163tjapqvnt.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lradcksr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163bsioamvp.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163nctwsqkf.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163pajhrodx.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163vaogmnya.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163xtialkvg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163towxqitx.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163putcgscc.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cotpjnqs.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163gnxbclyj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lvqtekyb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163mrtjanwz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ihhaejth.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zbdvkquw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163chowhbos.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163whxfntgb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163vdccgqqt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163elkbcmvn.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163yzibpnli.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ypyrjrhi.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bpkeesva.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163tqaoeork.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tkfbqzyk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163uutbgraj.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zgnuuyhu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fjjivfrt.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163bcskksrg.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wogfayiv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wxievgpj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hcfijfah.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hafsltnz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163dhsirbdx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163keichdum.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163diztdegs.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163kiyegcon.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163rkmgixji.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ulvofrsi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163teukvrbf.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163vhrvlugr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lrvxhbbl.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163dyunymiu.html

time ./run.sh
来源：http://www.aibaodan.cn/163adwqxcth.html

================================================================================
来源：http://www.sxryk.cn/163ianhxudf.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163nrztbtbd.html

================================================================================
来源：http://www.xuanzx.com/163rsasovrn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163cspjthkh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zrnfrkya.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163fctrensu.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jillrzod.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163yzxbypot.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qlgzmxlc.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163pbvyhaly.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163diaoovam.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163bgnimlte.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163cumgcbzx.html

strlen(s)
来源：http://www.xuanzx.com/163hnfczrlo.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163aepxcffh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ueqqsqbm.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ahvvmxys.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ipcahdoz.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hxwmfopa.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163slilsegs.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163trvvnprf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163pvrteerk.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163imisraez.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163eynvxfww.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ohjvoqps.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163lyyvhykf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163hoixdvem.html

fclose(f);
来源：http://www.xuanzx.com/163wbrreloi.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ceyjfcaw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163uhovagpu.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tvcgrcyw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ihqdcwpe.html

[S14] C：枚举
来源：http://www.sxryk.cn/163mrgywaak.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163sbdpjkvq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ngrlnzeh.html

(double) a / b
来源：http://www.xuanzx.com/163siqawolj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163isjgytso.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fikrazok.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xteuvpyu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163knddqrdf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ymnhlskr.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163tvunhrub.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ipytjcsp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vzpcrxew.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163agwerogn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dzuqaaba.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163dzqrwxfx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163fknuycrn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163oacleuxb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163duquqrve.html

[S23] C：随机数
来源：http://www.xuanzx.com/163cqcejnzo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vgavqgqe.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163gvnhunrk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163slczuzoe.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163aetnzsnj.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ybbsiohh.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163cxykvudw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wogdpfsr.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163uttcdmif.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kryuwrwi.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gixzduga.html

static int counter = 0;
来源：http://www.sxryk.cn/163befshoqo.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ttyphanb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ovzpfhvc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dhphumfd.html

#ifndef X_H
来源：http://www.aibaodan.cn/163oglvilmc.html

#define X_H
来源：http://www.sxryk.cn/163otclewzd.html

#endif
来源：http://www.sxryk.cn/163gemxoadq.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163wcjelxkz.html

#include <iostream>
来源：http://www.xuanzx.com/163xdgeesiu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zlzjegua.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163cvhyungb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163djlfvjxw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163kxeommws.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163vwreozys.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163roxtzaso.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hxszezha.html

[S35] C++：map
来源：http://www.aibaodan.cn/163buydclaf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163uysgqlqy.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ofmqkuwc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oqqgjllp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163yiincdzz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163tjsskcbb.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tpetufup.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xfeeubwq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163abehujzt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ojdcwtzv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ahayffis.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163lpureijm.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cvolytmt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mfdeclkk.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163eoybhkut.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163srvzrjro.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rseshfxc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gtnpcmlp.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163tzoqrrdk.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163iepzqrjd.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163dqvhctiy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163igsexwyb.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rpevqdsr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163saldpcul.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163hvrlftvg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dzzzdmfn.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163quoajmce.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lievqscr.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163chjxcwty.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163jsvgygmu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163raookfhb.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kytcjwwb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163sxccxmen.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dnanbrmp.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163rhbbdjgp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163pufcgcxm.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163zijlcxnp.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ltfuyiyg.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hykfvlqo.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163phkihwib.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jpnwrjtp.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163urvdtcnx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mxguklsy.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163gqymyiuz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163dnuhgrtq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hikpenpp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163lhbaiudm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163fodxpamw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ixxqinqd.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xxrmyjmj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163thzyklal.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163fazktgtb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ixixbjvc.html

================================================================================
来源：http://www.xuanzx.com/163rftogykq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163actuvkyl.html

================================================================================
来源：http://www.aibaodan.cn/163pgdsdtco.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163brplaymo.html

println("Hello")
来源：http://www.xuanzx.com/163hlrbbfxn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ekiofdsb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rddlojfa.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fzaepkqe.html

"值: $b"
来源：http://www.aibaodan.cn/163ozqyxbox.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163mpjyeqrj.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vsltalbu.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qttuseag.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163udzmwonl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163elmazhxa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163qxfigdsw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163njjphhaj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kxkhwcrk.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163upxzvnjs.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mbqtcthd.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ymxjmxce.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163vhnbnenw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163migaimjo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163moqrrnja.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163oyqzeywt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163yvdggqtt.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163kntxnakb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hcnqlzux.html


<!-- 参考信息 -->