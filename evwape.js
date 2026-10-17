外链999!wailian999！

case "$1" in
来源：http://www.xuanzx.com/163vxcjlasx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163xgigdotu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163oowjxjbt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ujibgwla.html

esac
来源：http://www.aibaodan.cn/163eeaylomv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163hnuikilj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163kpyuemjs.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163rpdedhwi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163yrgjhnib.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163koipxdbw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ytcavglt.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163idfxsclx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163trmqadew.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163jqknnbuk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163jxaxgfci.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163azygnbwj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163fgvbjzle.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ogaqawcd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wflmxafi.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ctxzjdka.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163dzuxjzdx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bmnfsncs.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qjlissmp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163kuydvepv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lqligugg.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zbsejfji.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fyfomiln.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163lvlaucxo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163mwycuxco.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163liaigpvg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163xbwskkbq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163grqqekjd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163bldjlrqt.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fvqgphrr.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tgedntcz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bkkxzftv.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163vojucooz.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163izftkmct.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zvklqfdv.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zioalxqs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163eycntyst.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163lwkdpbkw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wjhdzoxl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163hyrjfeqd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wdxlvibk.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163jucunnoo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163molhsmqy.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ucqqrmvv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ajyxwbqh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bznjixze.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hqcuxinc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163yzypbiim.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163rrkauimr.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ffykzjjs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163nmynshwl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qcivridm.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ahtdufxh.html

[R38] 管道串联
来源：http://www.xuanzx.com/163btafhzok.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163rhejzmch.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163xailicyw.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163acdzvyqk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163mpjbzqwv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163emyfcddw.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gbatyqwr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rzpgtgui.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rdvuypnc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163gtxpotgp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163iigfbmen.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163llpisrgo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163nshdqjol.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163yucormvt.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rfedsvsp.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163eforxirt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wvkgdgrp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ycwewkbp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kiobtglq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ghevfqnc.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163zxcxjnzj.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mfjbgekp.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163iwaknccu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163afpfjkry.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163swlvlzrl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ojpddpvt.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vvhmmlrh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163xgdibdqm.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xsksnndf.html

wc -l a.txt
来源：http://www.sxryk.cn/163wcurfnrz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163omrlophl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jwcuccmi.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xheibmpa.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163cesarwec.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163hdxotaoa.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163fcaxrozh.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hxwuwhzi.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163zwfsjazb.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163wetigxxa.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163efxunsbb.html

[R58] 下载文件
来源：http://www.sxryk.cn/163thoedjdz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163izpokxrk.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163nzlsqapk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fynbyhsl.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163crsejthm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163jqobbtpa.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163oaqqxhdu.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163inbcjyut.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wgmgwzha.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163qaxwpwhu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163efybrqws.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163agolmdmn.html

[R64] 结束进程
来源：http://www.xuanzx.com/163iisrczgf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163zozeredv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ktbloqcu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ghsxutld.html

[R66] 定时任务
来源：http://www.sxryk.cn/163gqxmlsqm.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qvbobafh.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163mogojybq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163hepadgoj.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163gdxhosoh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gftvltdp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zttpysbn.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163eafrafmd.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xpkbfqic.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xlabxxzc.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163xsxqjgux.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163naurlagp.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163eakqfuvy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wiqolvrg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ayysgyxv.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163jpkzkxcs.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163kffsxbgu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qfjnpauf.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ewqyiqhi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163sjuenjfl.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rqhflbju.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163idjcndja.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xkjloacq.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ykwtyngh.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163wrnpxghm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163rxwkyvhe.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163wrxnwepj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163lcemfzif.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zmobjlbi.html

time ./run.sh
来源：http://www.xuanzx.com/163muvnllhq.html

================================================================================
来源：http://www.aibaodan.cn/163gbbjtzcx.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ujbfqcwg.html

================================================================================
来源：http://www.xuanzx.com/163jeahceqk.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163srzgcmvf.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ovpiyacz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vsmegvqj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163abdtzzlj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163oegbyaxo.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163eqcszzil.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hrlwntoq.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163aadaatpd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kmnkxwar.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163noqrybmk.html

strlen(s)
来源：http://www.xuanzx.com/163grlyswml.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163okvcrsqm.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163agzpwjec.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163bhqvglvz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163exhjeeph.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163idtsnoat.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163befqbhoz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163kehvaflg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163vdgnxqse.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163cfrspigz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163rnhmeyxs.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jhjnbbwl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163nkbxarxi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163fndpzybp.html

fclose(f);
来源：http://www.sxryk.cn/163adhzpmfn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vzntelxq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163aiyzqqsn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vuplponx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163wkxljygu.html

[S14] C：枚举
来源：http://www.xuanzx.com/163blekhlwu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163tetuavvi.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163oyusgapa.html

(double) a / b
来源：http://www.aibaodan.cn/163bafxijbn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163adnzgjyb.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163mojedqis.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163fxhfzqnn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ssrubfuj.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163coabpyay.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163sqezqthc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qwqzejql.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gecctlpi.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163gkiciqhv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ypntjshz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163naarkwib.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ozoxhvua.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vujbxbof.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163pmavvwdz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hkyjahph.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163urwqueaq.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163eqpremkl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163uaccuyag.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163fblidtms.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163gkvwfjor.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163lkneppbl.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163yitpjwse.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ejrdvyxp.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nmzxabpd.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163irtuchpj.html

static int counter = 0;
来源：http://www.sxryk.cn/163gpfzoavc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ptwnudxw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163bmtrsryx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163getypykb.html

#ifndef X_H
来源：http://www.xuanzx.com/163eiumixze.html

#define X_H
来源：http://www.sxryk.cn/163cbigqkxv.html

#endif
来源：http://www.xuanzx.com/163eihppfiz.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163geqmeynn.html

#include <iostream>
来源：http://www.xuanzx.com/163zdekibbh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163svnmddiy.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163otoymonc.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163lvwlaeuo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163epmskubx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qrrybogp.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hxtjarqr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xjlchkkf.html

[S35] C++：map
来源：http://www.sxryk.cn/163fnslncse.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uqakjrox.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gpqofrmh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lhhzubnj.html

[S37] C++：set
来源：http://www.xuanzx.com/163vqhmjvqk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tzihfija.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ipedawyx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163wzhbsuuf.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ivmuiukr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ngnzpirb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163bghofusz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gsuymlas.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163eeycgnpl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163yheflgoo.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163hgfsxokh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qjkgmqmm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jseedydw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vetomwvf.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ddjiohmm.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163qbnvudkk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hbxidvuf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163arlremgy.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xgjpfuun.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163lfbvqkjj.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163joqbwnmg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163bphswvwm.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ecjluahb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163fbbzxfad.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163byqwzgpc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163dcdyawqj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163phkieasl.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gaocjyds.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163zehdwpby.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163wylhuznp.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163wadtmwny.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163gorbpsxw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163kpesiwou.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wezjggcy.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bikyrqvu.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163dgrozgoi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163cxgxiuuo.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fulbyejk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163glfyyeaw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163sfvgudta.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163cykdpgme.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lcmrwhyj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163wguhhqud.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163yynkpaax.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163nqkeqbqj.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163olndyvtq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163qucycmbq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nqswobka.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163blzwbzmm.html

================================================================================
来源：http://www.sxryk.cn/163jmeccisw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163aecnbvkp.html

================================================================================
来源：http://www.sxryk.cn/163dkstctxw.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jchjktie.html

println("Hello")
来源：http://www.xuanzx.com/163qmimrhob.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163tcqijzzp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163dtkuivxy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163rljogkwh.html

"值: $b"
来源：http://www.sxryk.cn/163gdlcwnur.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163psufjcnx.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163vwbnjslt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163rkvnfosb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jctovfff.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pmkdzlaz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ktmsxldt.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ozthulgr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163cbqnqumf.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wfkmaiab.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163zljxttgn.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163tsmhbmpt.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qrwlfmfd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163tujbcmim.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163caykixxw.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mmppujlo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163kjbljnes.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163wpfhhkfv.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qqbhfvtm.html


<!-- 参考信息 -->