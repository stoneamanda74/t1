外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zxfckvuu.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163eelwiago.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163agvpouxi.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ykilmzuv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163liasysaa.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ygdxvemr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163axrhwxac.html

[R19] 数组长度
来源：http://www.sxryk.cn/163epybuful.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mmclgbnx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163nbagujbv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163fnqinhct.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163lkogviuz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163adcxotaa.html

[R22] 截取子串
来源：http://www.xuanzx.com/163nrixukdo.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jnmozszq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163zakjwzcf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163iykboqok.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163qgeblzue.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163spqqfgid.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163eeblgedx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qloscbsr.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163lvrplctl.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vuvpcnlf.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ivwiuold.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163iasfdkmu.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ktrjrwwq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163aujlxbqe.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163coxlbvsf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163rvuyhlbc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163iwqblysc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hbwzsgll.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163absagmve.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gctdfmnj.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163guuwimkx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rswpmgmx.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163qjjlebbf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163npqpyvql.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163tcjxwyuz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cnmuenaz.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tsjecimz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163gmpehxwo.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163rppumsff.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vbpubryi.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ngulznpn.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163rnnvfkre.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163nmcbphxr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rpngejzj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gmovbmhz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163idjawory.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163fszmkamv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hctmyzxs.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163djxqxngp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ydkpmsqu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163clicykyr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163tqclrfgb.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163genhlfrw.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ebvazhkg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163rsggsheu.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xunpgqhb.html

[R45] 批量删除
来源：http://www.xuanzx.com/163mhyycmze.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163hnrwvciv.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dxzpaeid.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wygaldia.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ryabgiol.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nfayuisl.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163iiilnrqf.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wbjzrnvq.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163goyhdqci.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hhoptvni.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xmmiwhif.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163oyakspuf.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163czcdfvkn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ddrnzkms.html

[R52] 统计行数
来源：http://www.xuanzx.com/163gjcpqvmc.html

wc -l a.txt
来源：http://www.sxryk.cn/163bhsnukgf.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163cwfqzfxl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163gqzvtvwa.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163eteyxocl.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163xpyfmlxf.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163fzndxgbj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163pitwzhmg.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163tvwxykyt.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163kvzkosit.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163dqxyxozi.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163pkvautye.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ehevdrju.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163sfkqtcuz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bclzjwkf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163upnzxyjh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xyllrdmj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lnrufvza.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163tryyuicy.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163defofrjr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ztpdohyh.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mklmhfly.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163prcvflay.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wlaubqmo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163bnuhxpgk.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163gytnwhbx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163etrgerqn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hnhwbanj.html

[R66] 定时任务
来源：http://www.sxryk.cn/163xfjygder.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xgzyrfwi.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163uwervpsd.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jgzlvgei.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163abfhhoyv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ftgvkyhw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163nebtgbgy.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163orezuqfz.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163odfwjlgz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163knxnnspr.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163jwxlptyl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163bmrjcspr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163olxoeqbz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163itqjnkzb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163iitsapmv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tjvfjzzf.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163eljkazug.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163shzgbuzo.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jvsdafmi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xwoqdgid.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jdarysmi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rlslerbc.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jmbosyqc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163tqzkrskj.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163unzaeqnv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cwercgqj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163blhehzox.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kipgxwky.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163pwhxyfgv.html

time ./run.sh
来源：http://www.aibaodan.cn/163bjvbvlyg.html

================================================================================
来源：http://www.xuanzx.com/163ejparzfj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fcvmbhrq.html

================================================================================
来源：http://www.xuanzx.com/163icpjbygi.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163wldoziac.html

#include <stdio.h>
来源：http://www.sxryk.cn/163slqltstu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163mvmzoeus.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163rqhrvivg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163fslsggpj.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163jnczbjgv.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163dlwlaggt.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163zcqtuyys.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jadnskar.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ofnapgpg.html

strlen(s)
来源：http://www.sxryk.cn/163aogncmoj.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163foytqfkq.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gzifhgsb.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163otbakbon.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163pirvcvan.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rbhicskf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163rwmkptnm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163etmjunuq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163fdxhtxcf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163slnxrddv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163gjgpmszi.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163qggegjqb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ohsaltzg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ybdvzavs.html

fclose(f);
来源：http://www.xuanzx.com/163fslupkxn.html

[S12] C：写文件
来源：http://www.sxryk.cn/163eofcnwvn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dpktqzbf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163bcvzrcge.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rawvozun.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ulhhbphv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163dxvwctwj.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163wjndjotl.html

(double) a / b
来源：http://www.aibaodan.cn/163zvgtpezu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163sxheckuc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qwcxiuij.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163kmuxtvgs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163kzekdudz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163harxfifc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163nkueijxd.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163stnyepis.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163glykklnj.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163kfthszny.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kvzbvaqa.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163amenqxsk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163xujqnaim.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163buhcsrff.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tqeinmvd.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163odelgfik.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163msvhglxy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163glurrhbd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163wmjmlcni.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163injqxxar.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163tafaycxe.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163mnhznxrk.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bvzjixoh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kgttvudb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163tagcfvvl.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yuavvdvz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rtawzlcr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ckjwxmtz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163qxbsjwse.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163gryhlrjm.html

#ifndef X_H
来源：http://www.sxryk.cn/163bqcyrqgx.html

#define X_H
来源：http://www.aibaodan.cn/163zrtmwhzm.html

#endif
来源：http://www.sxryk.cn/163ilkiglsb.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rygzuksp.html

#include <iostream>
来源：http://www.sxryk.cn/163nxtdczuq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rgikpwxx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163onpvhkxg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mqowtxlm.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dpapzkqy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nenxvpob.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163atupdhhs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lpoglsfh.html

[S35] C++：map
来源：http://www.aibaodan.cn/163wdxvhedg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dihvhgxj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163wlahilbv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163eqvxqajr.html

[S37] C++：set
来源：http://www.xuanzx.com/163dnxsbtwj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vxjwhyvc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163onioygwl.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ftrkvlmu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163puhamuvb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163brfwjvic.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jpwpmoij.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ixdjpnyb.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163iaxaxbmn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ysrehhjj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qqivmfja.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fkqzpncb.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163zrkilndz.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ggtolepj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qseuhvvv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fzcepxoa.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pxnljahs.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163atizxmev.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163wwbwhyvc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163dfmqdfut.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163mhrmuxgx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163zfwgnzfw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163dsirwaem.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163sjllxqpa.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163uhmvbucc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163zfotwbws.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wrzegogu.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wmjimyqs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163aochrryx.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163zzbexqhl.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163wjswxngw.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pujkthnn.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163twaejtlx.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163emkvyawp.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jaudiuac.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rklhxfpe.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163gpqgmrfc.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yogqyzda.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163xksqpixm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163euueggon.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163lilpnyll.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yjikpnfj.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cugabvdd.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163auyfbyzv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163fykuavxu.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163lrstmsee.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163grihhguk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ogxuqlzg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ixemvmrs.html

================================================================================
来源：http://www.xuanzx.com/163ltgbuswl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xagtuhdl.html

================================================================================
来源：http://www.xuanzx.com/163yrfkntdt.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kipfilic.html

println("Hello")
来源：http://www.sxryk.cn/163aendrgie.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163pqpsnqkp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zfxnwkxy.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wijthmog.html

"值: $b"
来源：http://www.sxryk.cn/163ycfttmpf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163pakcibss.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163mektvpfl.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rvlmdjpu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163fnlbuqfo.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163itkxcavt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163barejmcw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ytljdzln.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jisytsnk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163errkqjgs.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163yfcdxwba.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zdsyicgr.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163reiejaar.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163omcaoiig.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tqvilivi.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163helonrpm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163saztfkff.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163izupvzuw.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163iinrosrr.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163mbcjbmdj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163flkkehjo.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163xmhgrhio.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163rcrvlqrx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hhmxwehf.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163qmokyskw.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ebapqdrp.html

print("Hello")
来源：http://www.aibaodan.cn/163pgnfqlgm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zirxurqk.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163odbuiead.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163iqovqkip.html

"值: \(b)"
来源：http://www.xuanzx.com/163bkpypchi.html


<!-- 参考信息 -->