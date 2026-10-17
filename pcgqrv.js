外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163whgrhqve.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163kftkatks.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xmzvvntg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163mopvorqz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163kfkvxslq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163klwapruo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163dhynmhcg.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dgwxqrpb.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163yqhlumvm.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163zwazltwg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hjuwzwyb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163sbcqburu.html

echo "${#s}"
来源：http://www.sxryk.cn/163tsmleeex.html

[R22] 截取子串
来源：http://www.xuanzx.com/163bsjatazc.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163pyevamnc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163huxfudyd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163bujrgttl.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163rfzfnnfv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163punpyvuh.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wftywabt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163atvrqbji.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163cfvlbnup.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163shkkertb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163dzvzdaxj.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163cwoanbwy.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163gtuosuae.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163fcxjemjx.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xhrjlwno.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163yqwbsbyr.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ygzclfur.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ziyayubc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163kqqejtbc.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163iltusasi.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163yqsvtyow.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ifftlian.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163nsjyolli.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163gceeoltm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vziqtwrm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lsruojdh.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163rjrfbaof.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163jtkqaemw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163uavjadjp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wutmjjod.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163pdqcaghe.html

files=$(ls -1)
来源：http://www.xuanzx.com/163dnpekxow.html

[R38] 管道串联
来源：http://www.sxryk.cn/163pvdtxbuk.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163nbxmtbsx.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163rbsbqdnw.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163uysihqmb.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163aksdmmpv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163amslsoqx.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163facwzmut.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163qhcrpgpa.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ybrexozn.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xeymtibo.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rzdmnrbo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163flvjwtuw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163udmrrsbb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163kusyiiix.html

[R45] 批量删除
来源：http://www.xuanzx.com/163amhsridi.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163dyvvrjmq.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163lwfuvagl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163yaozzngb.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163edecczqp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163tngkyuwo.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hkqcdgub.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163nzqgfxct.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163kbxpfbip.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163oplzdymv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qjbsmjpf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nepzihdj.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163vwxqskba.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ezqjxbea.html

[R52] 统计行数
来源：http://www.xuanzx.com/163cdixxoij.html

wc -l a.txt
来源：http://www.aibaodan.cn/163xomqocth.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ssftegok.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163yovmuqbv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163iighybxq.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163tiwrhfwc.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163pdemoevg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163lsityeju.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163damymlcw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163whfyttia.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163uqlirulz.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hlykyrfh.html

[R58] 下载文件
来源：http://www.xuanzx.com/163aebntqmv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163dzfvpwvd.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163brwsdocq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163mmmvogev.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163jrmwqzby.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jluveexk.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ngendafp.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163noydofpm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ygzjmezs.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163dbtrrcao.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163zngephbt.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163mrxdksus.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gtxbnfwc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163idwmppvw.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163omaphujt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163pflaahad.html

[R66] 定时任务
来源：http://www.sxryk.cn/163guifsykl.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163uysiiebw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ywqayszj.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nerdtkvo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jirsycro.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xwrahsek.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163aeynifvj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163agxvjgxl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163alltavhv.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163dzuijwxs.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vejdbbxa.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163aymensol.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163sinlavth.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163mnnuivvg.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163hhsohacp.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ieodivwr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163uqjjgouc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163txfoispl.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163alcjxajb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ribjftkm.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163oddhsdjr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ptjsmmru.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163vgsuynbl.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vgqxctnt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163zgmpfeyz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fftefnde.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163wnrnsnpp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163uslpcixb.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hrcdutkf.html

time ./run.sh
来源：http://www.sxryk.cn/163ydhrlicw.html

================================================================================
来源：http://www.sxryk.cn/163tbxqtllj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163lhecbgme.html

================================================================================
来源：http://www.aibaodan.cn/163uchppvga.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qlfhxxfw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kaqtkrjy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ztdxbugm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ynaczcqh.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163hvoqnlym.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163bqufriqf.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163demfughn.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vimkfvuf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163isbkonoy.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163bndmsuke.html

strlen(s)
来源：http://www.sxryk.cn/163mrpzbcrk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163fdhwjdsd.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kldzqynm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163judzvuvd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163pythqyxq.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163pbbbfmuc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163fafnvomv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163fqdzzvoo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163huqqdnji.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tlnvseba.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163spvaaazp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163gojbuhkb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163rgxrwnyp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bfzyvuiw.html

fclose(f);
来源：http://www.xuanzx.com/163tafszckj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fxgzlejm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tfeqflrh.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vqvysaai.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163owjetjkr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qzlcahdo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163giklzxrj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xumgukxj.html

(double) a / b
来源：http://www.sxryk.cn/163avvysolo.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ppsloapv.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163zipqgnxw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163vawvavxw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163gmvkqhbo.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163axwvybht.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163vhjjogws.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163asdlxgmn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lkhcwwqz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vjtvvdiy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yqloxchn.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163dczwxqlg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vprefzpx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163gyyllrer.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xhqzguyo.html

[S23] C：随机数
来源：http://www.xuanzx.com/163eroxaozw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163mkjysmyb.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163hpwywvkc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163hjcnntce.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zmjxcldz.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163wztlvouv.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163hoinjsrx.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163atbwnnev.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163fkqtdpkr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ddbgdheu.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kauwvadg.html

static int counter = 0;
来源：http://www.sxryk.cn/163jdvalbfh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163pbtyiszp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163tcihtmhz.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163jdswuykc.html

#ifndef X_H
来源：http://www.sxryk.cn/163jstpcfum.html

#define X_H
来源：http://www.aibaodan.cn/163juqzgbsp.html

#endif
来源：http://www.aibaodan.cn/163uqrmrebv.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163drzsqgsf.html

#include <iostream>
来源：http://www.xuanzx.com/163ntaqkxnf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163tmzgcrrr.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163gwluuhdu.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163wsdnrnmk.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ybuhrldi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qwzuzttu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163bcyigaqe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163nykhehuy.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lintyjky.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xcrwxwbm.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163dphsuypg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qwbjfbbp.html

[S37] C++：set
来源：http://www.sxryk.cn/163roxekgzs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ngkpyiyd.html

[S38] C++：排序
来源：http://www.xuanzx.com/163wrebuoes.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lwrczlsu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ijvwibjs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163puvfhiuf.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hggyeirr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163xweaecyv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163tqzpfgfg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163tqeaxpif.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163iowuswtn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163xpfjvsdo.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163qbvvjpmh.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163jitodvip.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qhhoomud.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163cquxfett.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tghuuzev.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163pfuolxcr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163jrsobzei.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ubjajjlk.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163kehzggjv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163votqmnqe.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rnthtxtc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mascyfva.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163btcwpszz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fortjxaq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jpaumtsw.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wyhpjziy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pjmrdgfj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ilccoejj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xkrutlws.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ikyfcoxr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163myxwbmdu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ogxlgrmt.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163xjqwluku.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ddwkyozs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163xhzglobd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163jfaoxplx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163lvsjuaol.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zfxzlhat.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qxeegswl.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163falfghob.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163pfqwwlxm.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ljcufgqc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ezedyhgl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dseiajka.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zkuhfqpp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mxrpiqok.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cjzrsnan.html

================================================================================
来源：http://www.aibaodan.cn/163hidcsxjd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ffxygkzy.html

================================================================================
来源：http://www.sxryk.cn/163xkbjxgsl.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163olmdygqw.html

println("Hello")
来源：http://www.sxryk.cn/163sievmgxa.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163hqmwfabl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ykwyssuy.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163onyldjxg.html

"值: $b"
来源：http://www.aibaodan.cn/163pcjymmqj.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163mgfpecxf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vltnreke.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vjlfyfzb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163updnrfpx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ixyfjuux.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kkjttdfn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163fesrpzau.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163htdknryh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bdcepnjy.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163aviojmuk.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hyepnuyr.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pxsjshid.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163epfumgou.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hvhbvxxn.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163darpuqol.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bberdrde.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163luozjhxa.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ajouravu.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163arymvwlb.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163otctftbu.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qrnlslaj.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163lrqrcbds.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163xxvtbczw.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163bfledsun.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163giluwfsg.html

print("Hello")
来源：http://www.sxryk.cn/163xbtyrtyf.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163piwbulzw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163dvgqcdax.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163cwzywqdv.html

"值: \(b)"
来源：http://www.xuanzx.com/163mzukntwy.html


<!-- 参考信息 -->