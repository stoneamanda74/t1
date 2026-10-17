外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ftathyag.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zsefjwzr.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jqxxmbuu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163oxhjgdnn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ogqbckfi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163fvtlttmq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163bgraedjx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jpcuvnpu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163quizeayx.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163hyhhigms.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163gzsplpmy.html

================================================================================
来源：http://www.sxryk.cn/163rvilthag.html

R. Bash 专题
来源：http://www.sxryk.cn/163xcrngnvu.html

================================================================================
来源：http://www.aibaodan.cn/163wzavhpqr.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163hwnonxfr.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163yhevbvxm.html

set -euo pipefail
来源：http://www.sxryk.cn/163jvkjmpwc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163vcyowkcf.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163kmyepels.html

[R03] 只读变量
来源：http://www.sxryk.cn/163dyogglby.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ofkcoeia.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hxiegsgk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xujmlxrz.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nounnabr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163qzwqfspx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163huxtazjm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163pvyzhjyd.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163onefrthn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jhyfevhw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163mlwapfsa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163kncfsqbv.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bkstsklv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jvvxmata.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lrcxbihg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163aomrwgte.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zacaubso.html

case "$1" in
来源：http://www.aibaodan.cn/163mennbnqj.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163mmupzowr.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lklqxfdg.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163awkvywre.html

esac
来源：http://www.aibaodan.cn/163waadztfb.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dpsonlfn.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163mkbvogsh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163lnwmzekj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ldivmngn.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ctyzihbf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163wleaybis.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wpywicxg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163arcsbzmr.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ndqmkfxq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qqqrjvfg.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bguclwnh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163xkmuxmlv.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yeuatyiy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163uafjnbdg.html

[R19] 数组长度
来源：http://www.sxryk.cn/163pjntgvzq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163prjkdznh.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163gqhhgnez.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163raqsbszp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163wtokhsys.html

echo "${#s}"
来源：http://www.xuanzx.com/163agwjztib.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rhvemdoj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163adjyexqk.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ostajghl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163mxstapox.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163lpmcksnb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mxiemecq.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ixjquoqb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163yzmifjku.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ppitjwiy.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163fvwrpxcx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zjbziwzr.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163rgzoofjo.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163wwqmbdak.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163htifxliy.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hujjmpbu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ockzfrlq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163jpwrzkrn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dlkxwqps.html

[R31] 局部变量
来源：http://www.xuanzx.com/163klqelzqa.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fjrhqjec.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dzdcuere.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163nloqnzpo.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wrdixzed.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163amxemxqb.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163pydqzqwo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gouaelzm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163fpchoedc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ptxyerro.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ffbnkyhm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jcppumcw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tuuaswlr.html

files=$(ls -1)
来源：http://www.sxryk.cn/163kiddpjle.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ozwqnygw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ciqzzmwi.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163opzheuok.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163nrheijyd.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163lmjrgzay.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163rdyplbez.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163weesfmiu.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fwnejgdn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hqmcamca.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163cbdzqzao.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nvcbaloj.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163uvushnrd.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163joxlmuzl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163uzlglduk.html

[R45] 批量删除
来源：http://www.xuanzx.com/163bvunnvhk.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163sgcaixza.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163yqnrntzb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wthwijba.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163vptqlwac.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xmkvschi.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163yxalszli.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163fxowycvb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163oqyenurm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163sxtnqwqb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163avqceibz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kmurdapj.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163mrmaviwm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jxbszxym.html

[R52] 统计行数
来源：http://www.sxryk.cn/163tokgihqq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fapptoyc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163sgmgnmgl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lsmgavud.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163cmadhpjn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wpffbuqi.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163dbmmrwxm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cwfkzkxq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163evcbxbms.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163oevgbzmz.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tsxfgpnx.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ufbwodmm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nqhwlwcf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163trdhspnm.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ripwpyzx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163skasodfq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163rtufzwqw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163tmmzkyrf.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wxeshrlh.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ahpfthmv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163sntiucyh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163llvwbivv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163fhrwzrve.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163eztaehtx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163kyacqqdh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xuuaknai.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163bfvazmej.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163xwkvzdoc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163eyudognq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xdsfwicz.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163tdcdipoe.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163dctecnpg.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163mhdsmixk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163oyqcgdfa.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yvnxpjyv.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163bqukvpkr.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163izgpqpds.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cnmgiwbq.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fasmvqng.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ymzqceax.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ckfvgnyf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cvchvgek.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fvgjtdhx.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163btjifhon.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163tnxxnadz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163kgoacvdg.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163evrerwgh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163wvfornfv.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163csgrvaix.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163opzasmox.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163quzkqrtw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163sczrcmxb.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163myvquspf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163qmqduvwf.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163azcfcpqp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ktzbubus.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ydesqrma.html

time ./run.sh
来源：http://www.xuanzx.com/163ysmaiqop.html

================================================================================
来源：http://www.xuanzx.com/163diwimvxq.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163zldbhlms.html

================================================================================
来源：http://www.xuanzx.com/163riisjzuf.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ykxhzemh.html

#include <stdio.h>
来源：http://www.xuanzx.com/163yqppddam.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163jnyhjbsv.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163magfjggs.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bniyarnc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163eqjmdwvl.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qkrbhffa.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163cvzktxbd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163vcrxpdpy.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163nhhglahz.html

strlen(s)
来源：http://www.sxryk.cn/163ojmwzjpg.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163dkjhumzj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ochzamvi.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dggdkfts.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163tqqgcsgl.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163gqolrtgy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bwmhukfl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163loqrinzz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163qecjotgz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163omzxzzhm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163cufhuqkx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163itjnobfm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163fzbqfxui.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hwylvpel.html

fclose(f);
来源：http://www.xuanzx.com/163ilwbkjso.html

[S12] C：写文件
来源：http://www.sxryk.cn/163zmrtizwj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ualgixco.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rcjkymri.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163dzoijxko.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163bobbknyp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163afeoibpo.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ltbfnhoa.html

(double) a / b
来源：http://www.sxryk.cn/163humzgrng.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163jfecjake.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163sdbndvyf.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163tqdggkuy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fuucejpn.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163vclsrhug.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vyvjhixs.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163zyejkhii.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wfgzuogi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163rctwjcfc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fegkhehf.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163jlahlkhe.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xwlclcaz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163fdbenuyp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lxrmetef.html

[S23] C：随机数
来源：http://www.sxryk.cn/163jmyvabaa.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163wgefgvgn.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163dmmwujev.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163trdehmaj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163icyraokd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163numikatq.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rkfcpxoz.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vumhsbvp.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gduvison.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163flbealgl.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163aupddsff.html

static int counter = 0;
来源：http://www.aibaodan.cn/163lxwignus.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163amarbwhm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vlhazlep.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163nmdpddsk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163topjriat.html

#define X_H
来源：http://www.xuanzx.com/163tugaygws.html

#endif
来源：http://www.sxryk.cn/163tpvlvpuw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163woeyleud.html

#include <iostream>
来源：http://www.aibaodan.cn/163bsqhgmlq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163obkndrfe.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163yqttppeo.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wovmopgy.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163gfzemkdt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163khfjfovf.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163esgbukpl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dhqvmbaa.html

[S35] C++：map
来源：http://www.sxryk.cn/163endciznv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163twcutdyx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163fayhdcfb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jzzyqyug.html

[S37] C++：set
来源：http://www.xuanzx.com/163vqmzaksl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ctizjnnc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163lzytldsc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xrapmnah.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163feifyssk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163rsavjqwp.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hdphbbng.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163iheniyav.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163lvegumeh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163wvbxerkt.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ihebvvks.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tekwubba.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pxfzdbos.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tpwvqigw.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163herdqkhv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jnbhtkxs.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163onktvrar.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163kboahmic.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hhbckjvf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163eluuennw.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ftbdsjdl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163bgyrkjgj.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163frentter.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qkmjqiwi.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ozvqwpqh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cjvahmjj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163mmjkyluf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qiqpabme.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163vzrczjqn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163nfzsybye.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163mbubeesh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qfqrvgqi.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163wbiitxyw.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163rwikqyyn.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163gxdzvwax.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163grocnwjp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pqpmwwxs.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163aqvwopzm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ptehcgwx.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163izmgitxa.html


<!-- 参考信息 -->