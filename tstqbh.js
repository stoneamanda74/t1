外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jrnlvrhn.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163parnauex.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163kemjimug.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ivlwqtbh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163vbwqiqif.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163pxjlwirm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163phpdjxcv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163gszznsrx.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163dxindyti.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ytvdyqlg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ttranpns.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163turqeucz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tvznaryw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163pdhunjew.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163imfxaxwe.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163nmcuaven.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163aaazwjbg.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ftdaobbf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163kadkbuge.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163grgbywpl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163dophjqwp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fxyjaexf.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ejecoarp.html

[R27] 算术展开
来源：http://www.xuanzx.com/163rudaayjk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163cyojghch.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tpyhotea.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163boodxpxr.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163napxxwlk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xywzeebl.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163firtctta.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163tqysjeue.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gzvhwauk.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163jkeqjbot.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163hdlgowxn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163bnedlxjf.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163whkqvilz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ridinudl.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163isogbygg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tkelzapi.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163oqourjrc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163icffhaki.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hgotrogp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163iohxohgo.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163tsfnjugv.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vmezoibs.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gbtltelr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163iihropkr.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lhrindam.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jkwnsrlk.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fbiqzmun.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163iroxfowt.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jqtsaagk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163eefjkejv.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vcaxrcel.html

wc -l < a.txt
来源：http://www.xuanzx.com/163djwdvoqo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163dukegevu.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163tcgsrikk.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163dnbwxznd.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163dyecziuq.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163gwhlafkm.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ssncuzhi.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163twsyxuks.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163cqgwgtph.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163yxdfbonw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qikqdssw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163exwnbagc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hxktiimv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163idnpwusb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163vackccen.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ncbvhzhy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163itcpkzbl.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163qdkuphbg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163mfgwwlqq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163kyrjxtsj.html

wc -l a.txt
来源：http://www.xuanzx.com/163nmksbvlo.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ckutitxk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163gjdixarj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fgbzmoaq.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163sqhxgepx.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ykhmfcoh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ztcobhfn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ojnzrxkh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163onpffuoo.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163cwivmgyz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163fktrtagv.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cwqxgcfu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kgmgrlrx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163jzufeljj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163oeskczxq.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lclphwpq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163aqxcnnqg.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163sefleguo.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163bmrrzhvi.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163qgsfiygk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163iztvwxlt.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163cacmpidt.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163tsstseju.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tmalmdfg.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163pkxgbwfp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163avzwktyo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163nalqokbz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163nnefscls.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163abqbebid.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163dzdptsbm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jnfkzbox.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tcvegtdz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163hnjvchxq.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xdcginhl.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ipacqlkc.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163sejuemet.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163mxxfsgbl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163lcyrfggk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163lmozjnga.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ekbsabla.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163sunrysel.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163oplkrdgi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163bhymktgj.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163qsbwktfg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bwioeeyw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163gwqjtdyp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hzhfmekn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wnprcvdx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dtxrobau.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163lqjpaygi.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163wjakjlpp.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jvswpddh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rmypzdyg.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ifvxadyr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ioaoveyv.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163kwuojetf.html

time ./run.sh
来源：http://www.aibaodan.cn/163dyejwswt.html

================================================================================
来源：http://www.sxryk.cn/163qohbljok.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163onlshcoe.html

================================================================================
来源：http://www.xuanzx.com/163evrixcyi.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gekkbqmh.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ypzgafye.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163spxgzzsk.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163zfgumhqd.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163arfamuye.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163dfzgoshu.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163zutvrkln.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163eliiohep.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163gnvrhzot.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163izozxfci.html

strlen(s)
来源：http://www.sxryk.cn/163dtcvhpaw.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163smverzfy.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163tykegvrv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bfinguum.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163yxeocfvv.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163iwyesizl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xucgczuj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163oiuajiyk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ictbjyhl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163esehattm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163cqphyscb.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163djaojmjf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qbflruux.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ogghrojl.html

fclose(f);
来源：http://www.xuanzx.com/163xbdygzlh.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163jtmjhscn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163eyxbjpwk.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ttvjyjyd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163hcdaatcr.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dsggijki.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163elthbcmz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163cjktqgze.html

(double) a / b
来源：http://www.aibaodan.cn/163zsriiuld.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mpzpdkpw.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163eqtwscaj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163elsirijd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163hfysyulq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163umqpxsaf.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163pydadivn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163rozykqjr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163brszihiv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163lhbgsair.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163aekhghmm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163aukbauhs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163uhfzoosc.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163dqhzcfdo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163uviyfktp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ahjwsfge.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163lijrmnhz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163pkjboaht.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qdcrpvcb.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ulqubxer.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xpmykbls.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ettfjbxr.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ybpwzvcq.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163oxqayobh.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163cmswplpd.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qjsbtwwz.html

static int counter = 0;
来源：http://www.sxryk.cn/163tqekmbex.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163dhxycaox.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163poeoeqde.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hewdrrxf.html

#ifndef X_H
来源：http://www.sxryk.cn/163lbxypela.html

#define X_H
来源：http://www.sxryk.cn/163ojdvjkov.html

#endif
来源：http://www.sxryk.cn/163zddjiawd.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163oizdneui.html

#include <iostream>
来源：http://www.aibaodan.cn/163qgpwbdqz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gshfernt.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kzofjibz.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gqncavrl.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163esxvxdql.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qkrkmgql.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163zxjbpavh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ohnedxvn.html

[S35] C++：map
来源：http://www.sxryk.cn/163fdicvbjy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rctxchtb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163btxlkxae.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163elmpsnuj.html

[S37] C++：set
来源：http://www.xuanzx.com/163ldcxmhtv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163lwsidzho.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ltrlwapg.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163hurkdaaa.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163fvosnhsn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163hlhalcdk.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vjzmesnp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163bazvxemz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163nvyxhfsk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163yvlgdffq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ptmbmpme.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163cnxsmiwd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ztlatlsj.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163uaowszap.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163myitjryx.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hhsrknjj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163kuibqjnx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163angtypvv.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ahkcuuyk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163snqmifih.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163gzpwgmly.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163nviissus.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163njuuabde.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163emhsklfe.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163gmzvbzxt.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ejamekzc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163efiyigvr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163trmynlww.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lvehihsp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163dkwgtnrx.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163cqrxrhdj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ueukpofm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kwsvpnzl.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163lwwvajiu.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163haymmsuy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163jowjsqtz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ktzccmmj.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qmeybgqf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qgdneiam.html

[S56] C++：optional
来源：http://www.sxryk.cn/163icjwnrxr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vgwvpifk.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163xvhnbfgo.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163czuvrvoh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hpofkeyw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163zipdpgei.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163hlrernjo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pkcogjkz.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163tnwdhuxl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163tejzolkq.html

================================================================================
来源：http://www.aibaodan.cn/163mccdlmii.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jzujofhc.html

================================================================================
来源：http://www.xuanzx.com/163gyxxlhoe.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ewdxccqr.html

println("Hello")
来源：http://www.xuanzx.com/163ioxydawn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qqaoxpft.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163qcgeehiy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163kcxbbaqj.html

"值: $b"
来源：http://www.sxryk.cn/163ifaswpqv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pyhhouum.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ujilzvgx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163rkdaeegq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163utlhrkgv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163lwaajvtl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163kertpxqr.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qgbgddjb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jobgnpne.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163czefuwng.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ljfaljgy.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163knpzbpcq.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mhlpvxbf.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163atvntbmf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163pipkqnif.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163psigugve.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163fjymstuf.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163nkshpvju.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163xdsrhnsa.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ynzkvwuq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163icjwgjdg.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163rmxwpnbv.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163cesaajfg.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163rngomwbs.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xdzlricp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163azhjvmbq.html

print("Hello")
来源：http://www.aibaodan.cn/163kmdcoebd.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163njtajulh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163kzrhtzaw.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vhjmpwxi.html

"值: \(b)"
来源：http://www.xuanzx.com/163kgcwzdfs.html


<!-- 参考信息 -->