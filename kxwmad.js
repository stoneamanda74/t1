外链999!wailian999！

case "$1" in
来源：http://www.sxryk.cn/163wtcvvyrv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163oifkjuwa.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163vyerhbge.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163zhfmpvvu.html

esac
来源：http://www.aibaodan.cn/163vkgiqalu.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ippbburh.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hsojisvh.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ldnptfpm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163updakeop.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ceoamvak.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ctpsjcrz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163peragxff.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hiezrhss.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xrpwsqti.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163dijrtayh.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163gyfjjvvf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163wyillcmm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163rpqvaeri.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mkpoyaat.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163vfcvnjhq.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163tagucgvf.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163xgjauqao.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163rfjksjqs.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163fksuznzx.html

echo "${#s}"
来源：http://www.aibaodan.cn/163eearkcpd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ugjeyfym.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ojmhyure.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163icryhzbm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rjcgvqsh.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163nbbmfkpn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163elsvqjzk.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163pxxcbjrt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163lqbuniip.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ewmdzthn.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tatuenxc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163xqoxlqfj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163spmcbxtd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163fpgnwyrf.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zfigtemk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163oztilzqk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163rchsxklf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163lvpdeijw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163obvgjseq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ebaknjvd.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jwjulhdn.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163idvsscuf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163aigfwehr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163byuanebo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mjcdimaq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163orgkycqn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yqhiqhfh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163avmxizvz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163yprdhqzx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163tytqccsr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rrgggpzu.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163iqsvfxyw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163qfzaqfhv.html

[R38] 管道串联
来源：http://www.xuanzx.com/163aiinwstj.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ytevhwmn.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163atbhacgf.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163oryfxczi.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163dzxxedcn.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163pkxjzglw.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163obgapakq.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163stioxzlk.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163msjuzryx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vupkwatp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163zmrqekvj.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qztqiprw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163dodgoist.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163piakmdhr.html

[R45] 批量删除
来源：http://www.xuanzx.com/163tqelcjvj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163bzqzllzm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wyxxxvlf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163zbpwpfob.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163enypuxap.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163vqcroohk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zinjbxxl.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163qshdbvew.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ebjygqac.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vienjqvs.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163bvszukry.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ukywnqze.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wjlrxgbn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163fqibsfag.html

[R52] 统计行数
来源：http://www.sxryk.cn/163oxabwjkr.html

wc -l a.txt
来源：http://www.xuanzx.com/163uqipqyru.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fektcnpp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ktahsmxn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163qelofavn.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163nvepwcpt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163xzwmegcl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kzhlldns.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163gluxnhcs.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jdjsbxsf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nqscbtro.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ndscjdpn.html

[R58] 下载文件
来源：http://www.sxryk.cn/163scjrpvco.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163shunehzm.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163rejdhfpz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ctwvsuca.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163jrwinaaq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163bfcemlgl.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163suawsgwc.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163mnpfdauy.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kduxbdkp.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163xfoifcno.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163hqdiutvt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qwzlgfbc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163giejpowh.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163trcanwnm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163erasoqli.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163vwchcnzz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163azpqufqy.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163vrwofisi.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ofacgozm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ipxsdukg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wldikhgf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zashkqvv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zczrvrjo.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vdejrxcc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163zowubkde.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163pvjsthzt.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163afvccvln.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163riiqepmx.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163txlhylxz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163zyzhvidp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vzcbndyq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163kfglfnba.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163urbiqfqg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dvkrbvkp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163xskqyniz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163graiethc.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163svpdyczs.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163moioexcg.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ygjiayfa.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163jqpgibnl.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jpotbozq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163kyaeyqhw.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163fxmkwofk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163uavoqmod.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163kiveuiev.html

time ./run.sh
来源：http://www.aibaodan.cn/163pbduteyq.html

================================================================================
来源：http://www.aibaodan.cn/163qercpagg.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163tgbxiuyb.html

================================================================================
来源：http://www.sxryk.cn/163hywxxbuk.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163xlwnxpjf.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163fakndkfk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163mirdfywf.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jpndufqj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163clhwyytj.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163skpifips.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163urlebbbh.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163frnesppc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ksdvmzyr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163qouhywak.html

strlen(s)
来源：http://www.sxryk.cn/163lwebaued.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163zrtarwnb.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163udpueqxc.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163funldjvy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163hguveqst.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163rnorxecn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163jmtmrdek.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163sfzpelmh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vrmmirsa.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zqawndew.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163rgrdkyml.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163zgvcwnbe.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163saxljkwo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163nojuytiy.html

fclose(f);
来源：http://www.xuanzx.com/163wjuxzecv.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163sdfsfzqr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163msuzbbrn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zxwbtkbl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zzaavtta.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ejdumffk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bxltywgu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163lncraxqa.html

(double) a / b
来源：http://www.aibaodan.cn/163nekctkii.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163jdwoymap.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vrhsjcig.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163pzdqnyhs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163pofjdmfy.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163uasamugh.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yqlixqmf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ybgyxsya.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vntzslhj.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vkpfzksp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kaiwrwjf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163fapzhhys.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163lipyvwyn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qhslsdvg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163voxnqxwo.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163edryuhry.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vesinxva.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163cfsnlwdz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ufagugdr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163eikccvfc.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gnskpfne.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163fwdkylzj.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163fxtvniiy.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wakybxnz.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dskdmutx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163uhcvgxls.html

static int counter = 0;
来源：http://www.aibaodan.cn/163jafyqzkn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qloihisd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163luailkej.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163peuxtnka.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xsxmcmgt.html

#define X_H
来源：http://www.xuanzx.com/163ycmnntqn.html

#endif
来源：http://www.sxryk.cn/163ctzkyfam.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wgvewdgb.html

#include <iostream>
来源：http://www.sxryk.cn/163tikqabdz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nyfdnwwf.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163cxwvaeeh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163cinoiqvw.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163gqydxnyd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163semsreyp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163uvjfyevv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163knxntdbc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nyssjhar.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lxrjfcaw.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163cjwxbnwg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gtffimiq.html

[S37] C++：set
来源：http://www.xuanzx.com/163lpxxqlzz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163lxdmitdd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163pgyfrtvu.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163gwdfsocf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163nlderthc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163luxajkqq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jocajsna.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163tevjaojs.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163udzgdxoo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163faznsicv.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163dscohsof.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wcpbgwnp.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163wuagbher.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163yqpcwdsk.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163shufmgyb.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vknuecsc.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163abciijvi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ahnbychy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163sxetrqfo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163btldqefo.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163izqwbdrh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163cyyzqrwg.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163vzifnufn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qvbdzryn.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ejkmocmb.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163kgmydsie.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hbtxuivg.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163fekvuphv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163bndxuxdt.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163zvphdsmy.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163iacddeze.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163rkgazghc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ruxrktpv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163oftfpdzr.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163dlrogbwn.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163qaaadeao.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ehcelohg.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ahsjfrsq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bxjamzxo.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rqnfkrpn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163tjdxkqyc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163gjrpusru.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qznsimxf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163whghzagf.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qzdhlebk.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163tnydqftf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ilqddtlt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fbhiwqxo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fpxcveri.html

================================================================================
来源：http://www.xuanzx.com/163kktfxbwc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cotyrrki.html

================================================================================
来源：http://www.xuanzx.com/163tufxvoua.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zaudwypl.html

println("Hello")
来源：http://www.xuanzx.com/163kqkffebq.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163htzbtmpw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163uqetnrsq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tsytyzjz.html

"值: $b"
来源：http://www.xuanzx.com/163anktukpn.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163amcychjx.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163zmehbabu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163cgibvetl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163oignefzr.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rndbauvb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163fsbxfouh.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163fvmnmiki.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163wwonmptj.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qfydiglz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163snqrcure.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163jqlboxfv.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qqdtmzao.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163myivekso.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wiuwnwom.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163chddaoel.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dyyhmlws.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163jnkannkn.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163lwkkpfgu.html


<!-- 参考信息 -->