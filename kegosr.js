外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163yrnyyzsp.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163cnetzuqj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163rcpvlioo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163miwhtyxd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163apitkvle.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163mopuozps.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163wlhmtepx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163zekgkjpx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163czsfashd.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163uxudlvlw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163iaukesej.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wdrvetbj.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rzzuuuuf.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nwhiflmu.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163izjhxugg.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163bdftagsq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163yhosdmew.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163bnbnxrkq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163lqemfvln.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bfctjrbg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163cazohqaw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jywzojko.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tmtglpdt.html

[R27] 算术展开
来源：http://www.sxryk.cn/163hoznqobk.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163nbbeexgx.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zwbwzupy.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163wkyrwefp.html

[R29] 定义函数
来源：http://www.xuanzx.com/163evmmxslh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163oyfhnvao.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163zdggawiu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ioziiufd.html

[R31] 局部变量
来源：http://www.sxryk.cn/163vuqgbgrq.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163aoxzldxt.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163evizzwqp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163zwvlahzo.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163fgpaxyum.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163zcnfahkl.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163koptsilu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163twlkqddb.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163abeatolt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163voyuzzan.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163gdgytlzv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163dllslnut.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ybatxvci.html

files=$(ls -1)
来源：http://www.xuanzx.com/163whtoaqzq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kfvqgwbo.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163brywtjqm.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163onuvobux.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163rjihrceq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cnemqgmq.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vnotcvfr.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nvjxdynt.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163gkfietoh.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nzkmceou.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ivukynam.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qwulmmkc.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163drqoghce.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163fcklpzbj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163wlfeklbe.html

[R45] 批量删除
来源：http://www.sxryk.cn/163tlgkxdhz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163rixdvqis.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163rpomadjr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163kuhneoiy.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163komdyawy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xgtxczei.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163gogvnhqt.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163lykqkrrm.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163gxtoffdc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163njbpknxm.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163roivppul.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ggoygwll.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vccjbbja.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163htusgprn.html

[R52] 统计行数
来源：http://www.xuanzx.com/163htqjkrui.html

wc -l a.txt
来源：http://www.sxryk.cn/163xgopknvn.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163yhmhqjce.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163uxsescha.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163aqhoykmy.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163jfmfyaul.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163winmeaxi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163pkmrfike.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163lgfrypok.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ajzhquua.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xzoscrga.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163bjfcyquh.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163pjspdhzy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163qlefqcjo.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zfiyjrbe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163hvsrglqx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xddlpbng.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163rhusywbd.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163umysgswc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ajvxmghx.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163xiuwtmbk.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zwittqpr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163grcikgum.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163mmzecsbj.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163jgwhfyvf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163tcjhuqff.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163honxyqiy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163fmojbyzi.html

[R66] 定时任务
来源：http://www.xuanzx.com/163pviohola.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ztesacwb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163mudqcaxs.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163yvwbednp.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163gplpgsrk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163beemdlma.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zeaiudlf.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163srvtejlq.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ypcplzcu.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163hoqmltar.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fxmsoxgn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163phhrcleg.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mnilnhgf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163sbbuetcb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163wouhccsv.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163iucaqnao.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163mkfzmfzd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163rmvrpbei.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163yfzlpzhj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ckmeowrz.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163cofjmqid.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zurxuwra.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163zkxoljdu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yeugwojp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163akppyhtm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163omgmdxkp.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163jblmyyzw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163lbebzuri.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163paubelje.html

time ./run.sh
来源：http://www.xuanzx.com/163priqjabu.html

================================================================================
来源：http://www.xuanzx.com/163avwlrlaz.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163hsmucuce.html

================================================================================
来源：http://www.xuanzx.com/163xitkvnrj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wxyiutxw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zruervsi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163duqjatxz.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qnbdflet.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163onstjyjh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163audhofsz.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163clpmqorm.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163hzomhayw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163pqfzvkzo.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163hdabnlje.html

strlen(s)
来源：http://www.xuanzx.com/163algjiemg.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mpbqkvmz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163efdgdjsh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vrphkvka.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163yhsadnzh.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ehupyavg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163fwjyftbu.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ugmjwbdf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163qhmpuhoy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ybfsxlep.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ucgaionv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wbbjoetj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rjbgifkd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163boihnmyd.html

fclose(f);
来源：http://www.aibaodan.cn/163avvhgxst.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ukpmeknc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163siwnsxwo.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ioumhohy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kqagfjsu.html

[S14] C：枚举
来源：http://www.xuanzx.com/163gwspiwdc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163mszisjgt.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163thvbsqzd.html

(double) a / b
来源：http://www.xuanzx.com/163pxzuzvlq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163gbqqizzs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163nghdrrwj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163wpghbgdl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163oapisrhm.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163mjflmntg.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163sqvbyyhk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163kuyfddps.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zfkkhrva.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ahvjypry.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ynocdpnl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wjvuvdjp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163tggrfxdw.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163pvacotbi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xakqrcnv.html

[S23] C：随机数
来源：http://www.sxryk.cn/163jsgwgpja.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163tlyjrdjy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163getoxvlr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163pphtktbs.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163rymegvru.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163trxovuta.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vpzzkxki.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163bkkvvmvz.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vgvhfaea.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163knpizgbx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kgwxznfx.html

static int counter = 0;
来源：http://www.sxryk.cn/163fqhfszpj.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qfjreijq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163rvdnlddr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163segrcfdd.html

#ifndef X_H
来源：http://www.sxryk.cn/163rwqkzcuf.html

#define X_H
来源：http://www.sxryk.cn/163ocrhlfcu.html

#endif
来源：http://www.xuanzx.com/163awaibjke.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zewgwcih.html

#include <iostream>
来源：http://www.sxryk.cn/163ulkgdfow.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163adlpnifc.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xxnciqeq.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163njvembdr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ibaruhwa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gobolivn.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rrcrffan.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163xgpkduto.html

[S35] C++：map
来源：http://www.sxryk.cn/163ruitdbej.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wgckvtwi.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wvvoucsy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mlkdzevq.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jtmaiiao.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ajdazsmn.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wbixuwjp.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163dvzlpusn.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hfnfigss.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vtlfxexx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ewcwygdl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163knlgxnti.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163aevmdnos.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xlefozkr.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163loqraiot.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pjntbkuo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163oupecbvm.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rqkiiyqq.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qygnharc.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163cnzvdrmq.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mvsnwsjl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163qedxwclz.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ocizento.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ttohfbzc.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163hfnpjsve.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fktfsagh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163iwpbxyfa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hfqjornl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163fnilrtqt.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zvizgyqm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lwfgxftf.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163apfnwyhl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163rxbgzxxn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vpvocpen.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163bswntwqf.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163dejygrng.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163licssegs.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163jkaujotx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163swxmrirr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163tmjjbodx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163xlsshchi.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163axjsswem.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ytxpbbqz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163sxnbnsud.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qahoojcc.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163etgldcix.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163eojpwwzq.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163hexcsfkj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163znqzascf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163fcvynvcs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nqavefpy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hdznxbko.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fvqrolfd.html

================================================================================
来源：http://www.sxryk.cn/163uuawlzpv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cxzxvlkf.html

================================================================================
来源：http://www.sxryk.cn/163wshppdps.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163bkosidln.html

println("Hello")
来源：http://www.xuanzx.com/163qdnqaici.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163tftbsovc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163sitawpeo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163yytvitbp.html

"值: $b"
来源：http://www.sxryk.cn/163pivcsjvm.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mxzgicyg.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163trxeovcw.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163bznfxgdy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163twfxdzea.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163gbynupuv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163remqlakq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163rxhodgqv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ybqapgxd.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qssovwhu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163aaeifguj.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163drbptdnf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163oamomfrg.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163nuwzvoet.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163pytwrjry.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163cpwksrtd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163lgqiwbjq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163opvfduqx.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163lxlzcrqy.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163gxwdpcdk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163roqasjev.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ickfhmdq.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163mxyatqkt.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163vqhiveue.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163goaonluv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lonqnyks.html

print("Hello")
来源：http://www.sxryk.cn/163teoosngh.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163xzogdbew.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qmwzuwyq.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kyvplcji.html

"值: \(b)"
来源：http://www.sxryk.cn/163yfkxtini.html


<!-- 参考信息 -->