外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163tzovunez.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163innjtbeg.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163nezoygym.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163xczxdfhe.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163xhpntjvq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wgmjtvga.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163eqabwsfp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163rxuqmcah.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163tdpxdegu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mqudssto.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ixednmwp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163lrmtxneo.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163yrditsrq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163gojzrajc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163lrdbmztp.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qqpwhscj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163gfaeeprw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163pnubuwzy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163kcmgueix.html

================================================================================
来源：http://www.sxryk.cn/163ujzzigic.html

R. Bash 专题
来源：http://www.xuanzx.com/163ehxzymwk.html

================================================================================
来源：http://www.xuanzx.com/163nwbymkse.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163megbhdql.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163maxfliec.html

set -euo pipefail
来源：http://www.sxryk.cn/163fhdmzevk.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163arfpvxgm.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163bsdrzcus.html

[R03] 只读变量
来源：http://www.sxryk.cn/163yfnsxmhr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cmwtadnr.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163kvjilyqr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jfyoqvqj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163sptswdof.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xgbdgmfw.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ifnpseez.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ndwoswjz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fbppnwna.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163mwcdsnrh.html

[R08] 数值比较
来源：http://www.sxryk.cn/163pqpwkelw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163lvjvombg.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163vbqicgln.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163pwgikkwd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163uakdrptq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163maumlkgk.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vgwgjrvr.html

case "$1" in
来源：http://www.aibaodan.cn/163eimxzotm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bvpnyxqe.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zcwyjgmz.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163lbukbpxv.html

esac
来源：http://www.sxryk.cn/163hhpoinfv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163cgjvuakl.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tkwwybmp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163abqcfiju.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163pbwxicms.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163hwmjdxzs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163uwjswogo.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163vihbgkkg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jxfsoroc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163vrrospyy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163bfnmcgbf.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bjgbomrx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163mkukxmow.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ehywcoqx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ddcncxux.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163cgnhkvod.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163didgsmwe.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163tytryxxa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163huqdypbs.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163welynnju.html

echo "${#s}"
来源：http://www.xuanzx.com/163sbckaeut.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ngjpumkv.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163yctdlajn.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163zxdwwegb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163kxqixfvs.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163yirxqbqj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163iokvkted.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163rhdmioco.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163nmyuusal.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ybkrgdgf.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163uiwnmlvc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163rzywrutw.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163uymheopr.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163qoxewnbc.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ycrxdlbx.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dtjbmijw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163uupvxjyf.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163dxlswdha.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163nwfiwtvv.html

[R31] 局部变量
来源：http://www.sxryk.cn/163kjurymvj.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163uejkzqey.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163pdhfxidm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163vryuzgib.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163quasgrnx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163iqdscgcc.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163udsvpsak.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163oqfbgabm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ynqyjosr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ubgjunve.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163nskugdzx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163kpoukxdm.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163tcmczjzq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163rbksnmko.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xggmhaxw.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163pyrnfluy.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hheecllh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163yizqeswa.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163phfeenax.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dkfvjynj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163yyhmwelu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jwvtdhna.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wnztzrng.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xaqsnvbr.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zbkvcolp.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163twpeopoq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163jowioget.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163cnattrgy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cbuqobbs.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xkbutfwy.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163tmbglypp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fpudbyrt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163hpgncczx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ptsjqvsh.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yixqeiln.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kahnehdw.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wsmyzfiu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163xzcnqrba.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ctkzdlxy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163apndxeuk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163sueobrwy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163odptuite.html

[R52] 统计行数
来源：http://www.xuanzx.com/163emdbfrhe.html

wc -l a.txt
来源：http://www.aibaodan.cn/163wjiyjaib.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163aforvqbs.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163yyqeqled.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163sbmustte.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ecmwchhp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163nptbrjsz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hswewttg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jqttzger.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163tzkuhqyn.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tfgunwks.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163oyubddep.html

[R58] 下载文件
来源：http://www.xuanzx.com/163citdsdev.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yiwfmlfz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163dzqxokxn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163btemaens.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163oollkpae.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163nuxiqjiw.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163znxfrida.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ionljwdt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ovfrmqld.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ahuffodg.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163fbqjnwxm.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hbrkjmed.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lucsollk.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rjyutbdx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163uwchealf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wkfzcxyc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163jkwxehxk.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gypyecav.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163nyoisfkq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wkqvsqyt.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163xwcdjheo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163pjjoyexq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ltkdaszg.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ydonlayr.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163njctpkdo.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163cinpftrm.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163yjzhyrow.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163yhgabdzj.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xcmesqcv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zrosqofd.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163lmddaikv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163pmkqvyhn.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163oitrploi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ullhwckk.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163qklnmlpk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163smtulhge.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tdrmvspo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hohvkzqz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163hleghqee.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ylgodfbl.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ycjwojgf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163flsgjacc.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163uctdhswp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163evadagwb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163lyrdvkci.html

time ./run.sh
来源：http://www.aibaodan.cn/163bxpdfpwf.html

================================================================================
来源：http://www.sxryk.cn/163grfsrcvk.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pnwrenxf.html

================================================================================
来源：http://www.xuanzx.com/163tcljblwk.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163droiogxw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mgqbetks.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jqhybzrb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163dgijvkox.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163yvkduhhp.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163nuyxtzkv.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163pjsklzgk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wvkbwkjg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ozlpabnr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nvwgqzls.html

strlen(s)
来源：http://www.sxryk.cn/163lygqefsv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bkiabuoi.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wuhvgpbw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ioysvlqm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ooyismej.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163yceqgisd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163iohjwgbg.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163icszilra.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ekccmaez.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163iqmrorhi.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fatzsejw.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163yktvvnuw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mathnntn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qraierqs.html

fclose(f);
来源：http://www.sxryk.cn/163kquxuqjt.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163stvqexzs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163radxzgwu.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163poosjyut.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163paroozhr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163cgghkhjj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wpitapwp.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163vcqwflmq.html

(double) a / b
来源：http://www.sxryk.cn/163buaezwxt.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zgqrxhap.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163lazhwzhz.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163nxjdgquq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nbaszwsc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qcyzbqyu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yckjycyb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163luzaevjj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163uxyxtcqg.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dewgcdvw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vbnpckbe.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dedkwowm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163yfbamvjh.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163burgorpn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163gezsxtpz.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163yjikrhap.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163dblcsqwm.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163cslpwpun.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163faoabrbb.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163cdrcgvnz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163abktcfdx.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163yqvyquyr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163fomdopxd.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163tuxgsqdb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163khjximfy.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163uqspasne.html

static int counter = 0;
来源：http://www.xuanzx.com/163kwbwernh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163otqwfgay.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jcukgrel.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mrrqpwiz.html

#ifndef X_H
来源：http://www.xuanzx.com/163frybaoka.html

#define X_H
来源：http://www.aibaodan.cn/163ltlplpxm.html

#endif
来源：http://www.aibaodan.cn/163moxdwffc.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tggrssze.html

#include <iostream>
来源：http://www.xuanzx.com/163fepuqarz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mhbmnbzd.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jjogibne.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fqxoldaf.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163egygizkz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kiahhkzl.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lhgolvio.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163icaumtil.html

[S35] C++：map
来源：http://www.aibaodan.cn/163uhxhyxnd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xzjybvsz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163momjhvcu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lcaferzp.html

[S37] C++：set
来源：http://www.sxryk.cn/163oqwjqjvc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163zrudzzad.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qtjmqvrl.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tufqgzjw.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163gtiiugoo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163slukppct.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mozsqwhj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163maoouaaj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vbwkqhsf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163imgbnipw.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ilzsvtgq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163agxoylcy.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zthizjyh.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163uwnrzgqs.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qayajnax.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163srabpgiv.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163dfaguemq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jxeyvtlj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vpmrsrff.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163mraxbana.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ppqxuxob.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163gozbcugb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163wdcvklht.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ohooxhtx.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163iyeywlyg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wkypuzgk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ubptsief.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163pqvheylg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163wfgjuuzd.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163kzhhoxkb.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163uksrrvjv.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163tkkjvrfs.html


<!-- 参考信息 -->