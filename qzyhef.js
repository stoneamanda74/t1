外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ehxkevvv.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163qntamwsq.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163qqjcqfsf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163hmujuvrd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163lwhvinpv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163kgatezmx.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ctvsqvzo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163rkxiouvu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xvjjcjxj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fpccomtz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zskhknlb.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qpicgjul.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163nphjoidy.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ivtgltcm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gjvbrmsi.html

================================================================================
来源：http://www.sxryk.cn/163zwagvyep.html

R. Bash 专题
来源：http://www.sxryk.cn/163ylvhyfoj.html

================================================================================
来源：http://www.sxryk.cn/163ovvdmods.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163agkifxll.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163oxdfuqzd.html

set -euo pipefail
来源：http://www.xuanzx.com/163saabzmig.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163kselwagz.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163kgohagwe.html

[R03] 只读变量
来源：http://www.xuanzx.com/163wxqsjsfz.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163sdgbfuza.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rgkdhfgo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ecybwtwh.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163svnqyqro.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zvcyarxm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163zqcaszlh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163oxaranql.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163omtnzbuo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nczueini.html

[R08] 数值比较
来源：http://www.xuanzx.com/163babbcaqo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jkufaudf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qkwdatio.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163uasjojxw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163scenwrew.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163vnktvvvz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163wbffyrpz.html

case "$1" in
来源：http://www.sxryk.cn/163hflkvvzb.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ujgfjpac.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rpodbxib.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qllwyspl.html

esac
来源：http://www.aibaodan.cn/163scapuozu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163yfilpkaq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163cagrgxow.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ngwksnqf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163sqzelyat.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fhpbcmad.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dwbvneye.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163pwhajsih.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pqbgqtlo.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163znrwckmq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163aiaxhzue.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ulwflqvg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rslcuijp.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163iqktnylk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ecfblayy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163mrfgzyus.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nqokgmql.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163bxlzzaim.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gikmezvq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163drsajfje.html

echo "${#s}"
来源：http://www.aibaodan.cn/163cjxlkuxf.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ivwnnrla.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163pxcosuej.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163bbpzgsyk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jcsvffer.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163uuerhbag.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163fqtrsboe.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gowekkbj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163otcabdqt.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hcoenkzp.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163crmsjfbz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ykmhheus.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zvomcfvf.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163waekwctg.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hjugomcc.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163vxxeuofm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zuyaxsao.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163negpttey.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hkvpsjdz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163hgoxgkkb.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wlnunqrj.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rgvlryxt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qnekrjso.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163seyjkhsm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bchcsjjl.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163cbjvutmy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lzvhldcv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163cqqglmps.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163vmsdeofz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163yrhwhfgr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163slohiubl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lacryidb.html

files=$(ls -1)
来源：http://www.xuanzx.com/163evjtujpm.html

[R38] 管道串联
来源：http://www.sxryk.cn/163qhfgafoj.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163wyrzybyq.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vrxbkker.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163movsmxyf.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163sesemajx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163cpyfvffz.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ttwprvsq.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163vjtgrtco.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163njlvnwjc.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zpogqeku.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163gwjhbdkh.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163gxzlucge.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163uxfbnzuj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163zqzsyzrg.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cmvzwumr.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163sdpbjucg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163vbaehere.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rhewhrxk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163igoybnse.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jeogwcyp.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fcxxubud.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mxubsgdn.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163lldrczjn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zaoigguj.html

[R50] awk 求和
来源：http://www.xuanzx.com/163bfjyrqrd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163jrztkgbo.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163gcrxilbu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163weovamhl.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163nhxqvcjc.html

wc -l a.txt
来源：http://www.xuanzx.com/163blmwkcon.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163yutjoktm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163odoephxc.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ndwrphda.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163afypsrbz.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163wpvuitui.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163istravxw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mkffildh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dablikeh.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163mnbbqlao.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163elaezpnu.html

[R58] 下载文件
来源：http://www.sxryk.cn/163klbubafe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163rhcfngea.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tpysodgd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163yrdefrpf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163hrniwdkc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163uagcnvtd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ijhbnylu.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163uibybpyv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163trbgmofj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163mgeoucby.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163akxiebzs.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ymoflyhv.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gezqhsam.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163yujunkis.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wbduxxqw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xjgjsqbb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163qttfouco.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163lbxrzfgr.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163erqnkbnw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163fensblek.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163szykaczq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ovtennjp.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163sdzllxoz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163fhgggyay.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163cxazlhdk.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163maqpjxos.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163dnolguxl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163oukrfhdc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163fwhgtbxs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mjwxpvml.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mlsdwffm.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tekxjnwc.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163uraybuqv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163okkxuytw.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jnzjrbdz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163sjoconuy.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ltrrxcfn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ylumqubh.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163gfgasvma.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163lzwzydaj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xzwdkzpd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163dbffitwp.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163tonzmimp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dnkyjggn.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163hfafpnut.html

time ./run.sh
来源：http://www.sxryk.cn/163ktrnpgeh.html

================================================================================
来源：http://www.xuanzx.com/163qizllcwo.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163yebjanvs.html

================================================================================
来源：http://www.xuanzx.com/163snpntiwb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163siggdbyt.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163avfxmbrq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163iczxkjqc.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ljyhjktx.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dlbbxyax.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bqenoxbh.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163rfjxdolb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ofklbxlt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ygpmnqzx.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163wwqeddkz.html

strlen(s)
来源：http://www.sxryk.cn/163misquvmq.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xqatcnzc.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jfkuaqat.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163lyrjvmjl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163yzhqalyl.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hllukpwk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zyrqzctl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163khoryuyt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163vqcfafzj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163jewpifla.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fwplulmd.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163uqvzkqdr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163psoebhaw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163dhfzrove.html

fclose(f);
来源：http://www.aibaodan.cn/163ikukhoka.html

[S12] C：写文件
来源：http://www.xuanzx.com/163xqztdhow.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163kxjgdggt.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163uasnrune.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mfxljmnz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zlssukhh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hpyehriq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163qxcwhacm.html

(double) a / b
来源：http://www.sxryk.cn/163mkvchgce.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mngauzci.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ennkneod.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163yljcxjhq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163yfgjpwzz.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163whsjvvmc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163rpwmcoaz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163afbvhhqi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mjjctuwm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163sbueaesd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cgkyeeoh.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163kqrftztn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163rcjbcmtz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163slzyzpfq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163awozixol.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nzypmbzb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163evopcbiu.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163dlfvokqy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163lpgssyem.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163evbiwhbx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163niznbxbx.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163uwuqemvc.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tqvqozmx.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163orntapjd.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163yhjtzikp.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ongecqgf.html

static int counter = 0;
来源：http://www.sxryk.cn/163encezqoq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163noriabfw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lioofuvz.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163mqwfiijp.html

#ifndef X_H
来源：http://www.xuanzx.com/163roroviod.html

#define X_H
来源：http://www.aibaodan.cn/163fdrzlveq.html

#endif
来源：http://www.xuanzx.com/163skxsxhvz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163cloheotw.html

#include <iostream>
来源：http://www.aibaodan.cn/163bgzjbaev.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163uapxkkzt.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xkobnpjh.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fispgvjw.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163iccnflnk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ncxjwgwt.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163prambtcf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163logapmut.html

[S35] C++：map
来源：http://www.xuanzx.com/163ggsdkdqe.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zdznrabd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tokgfzzv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rzsumtjq.html

[S37] C++：set
来源：http://www.xuanzx.com/163urtsykmt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163fbpfsolp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fifjnuoh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rdtmfguf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163txpffisg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vdjnyzqt.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ahvsvuxr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fpjdsagm.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163yxsxfrgp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163wnferxav.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163okmjhwpg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gleluxzj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163dxhtgdfh.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163sycwicge.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ubleczpn.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ccsimgkd.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cktdaxdw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gyxbdkvw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ndcqvljj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ummsbcrk.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163tkmooqrr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163sqixawsz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163gqmlwmvq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ykmjdyse.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163hyylqubw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ssrblsyt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lqlvxjur.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163esglydvm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163aistgqxw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163uudbkkad.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ufsrnzqn.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ohczkfwe.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163tzkkqqas.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163tjtgabyy.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163pamybdtl.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163nokuknpk.html


<!-- 参考信息 -->