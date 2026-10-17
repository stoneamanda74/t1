外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ifhfynwl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163iowwoymj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163dgpsgwtr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163fqtcyqvz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dreqvzdc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ewpuiyds.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163nljiburd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163czoesnng.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163kptfpzyx.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163okmzejph.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ivihflei.html

================================================================================
来源：http://www.aibaodan.cn/163emtbvssn.html

R. Bash 专题
来源：http://www.xuanzx.com/163teltaveb.html

================================================================================
来源：http://www.xuanzx.com/163rarfeajf.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xrsjewpo.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163fdrscxbd.html

set -euo pipefail
来源：http://www.xuanzx.com/163cqcxyuop.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ncjhtsux.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163hzweqvvi.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zlubhvkv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163whibrzvs.html

[R04] 位置参数
来源：http://www.sxryk.cn/163urlltams.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163bukqofoy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163unodvpap.html

name="${1:-default}"
来源：http://www.xuanzx.com/163vfeiaqmq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163mqzibpje.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163jvfiikkk.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ttivtyjg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163retcxinf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nhnxyiuz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163woixwylr.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163oellvkty.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jsrzytrl.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163hfxdfsjz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qtnkxmhr.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163itbkgvyg.html

case "$1" in
来源：http://www.xuanzx.com/163pyzkrhlp.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jwkxukee.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ertavpiu.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163amuqbxmg.html

esac
来源：http://www.xuanzx.com/163zbxuyxnh.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163jjelsmny.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163qyuezngu.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kqfezwip.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lzgqpqbl.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163besebqzb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163raqmmhxz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qcftuoxj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163tbfqskve.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163umqubfhy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gxzkofsn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163dsuztpos.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163uhfajnez.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163upjvihau.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qzwcsxsm.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hgfxdgdr.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163lmosoakg.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163dofwtjno.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163sonacrwg.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163gzxgtmhz.html

echo "${#s}"
来源：http://www.xuanzx.com/163oxqkrspn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163kraornmj.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ixfavodk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163cbtelngz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163krrtbsxy.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163witwwydv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163oiblqpda.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163zixpwjtd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wjdoeipl.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163oywylgpy.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ddmxabew.html

[R27] 算术展开
来源：http://www.sxryk.cn/163jczbcotj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163djezzmzf.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163bjesecyc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163eqoehlbn.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wgtxriuz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163hpfmjhyl.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163uxncbpbk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163sqirnure.html

[R31] 局部变量
来源：http://www.xuanzx.com/163vmjfiuaj.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163zlggaqgq.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163hefsuyhs.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163uakdufov.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163aeztgctk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163shijjtfu.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163mflqiruh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163saxtzagj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163dpkazajn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jdjwpbss.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kbpdpsjn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163qkitonik.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jivesxyz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ethqurlt.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gvvganwh.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bxuraeys.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xldlzfgg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163hctnfoks.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163nilrcjjj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163dnetkyei.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163hcyuoebc.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163tgbvrhcb.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163jbnutodb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zjlqusar.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163nodhefxc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163uwnyjwjy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163hacbgbuu.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163rbbszndf.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zcdiopbl.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163utxqsohq.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163qftmzmwm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163rzbbowgr.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ziqyxidt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163gbbtoiyj.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163rpqmcimk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163oehpwtde.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163pcgassnj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xixeorvf.html

[R50] awk 求和
来源：http://www.xuanzx.com/163umivnazo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kdkacgct.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163kvpisbdv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163avslhzim.html

[R52] 统计行数
来源：http://www.xuanzx.com/163lhnapsxf.html

wc -l a.txt
来源：http://www.xuanzx.com/163yisddnbp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163iiercvvh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163gqvcwjff.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hcwhjxyu.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163lbpqcqem.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163psyegfin.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163xmronifk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163slodzlru.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163rvnfwwdh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163whnuyasw.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163aonwkoux.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kedovjiw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163fllpjass.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163pxivjmbo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163cqllkeyd.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ynnvtfdl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xnsdlrei.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gtcnjhsk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ylsqdfuu.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163innuvvst.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163srfhtpkv.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163rwsgnmdg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163jsivbwaj.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163nscdizdl.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jmgkrtur.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163amqobzlf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hlywtvvk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163fkxsvegx.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jorrgtoq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163rjorvbnp.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ckzlysni.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163iyehxrui.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163detbpdmy.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163sbtuczoi.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163bzduwlig.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163itzywjdq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163oitnhcqw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163nslwpiuk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163uhgxnxoe.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nycadctm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163neycsqyy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rfbsgtjr.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dalakrff.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ladbuzts.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163umcjizet.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xiocnykk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qainylit.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lniaukvz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ordnrhqx.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163eerxkdkr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163jvqoqifa.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163fxpwqmgx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163avcfgjvz.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hxztqfmr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163esncskqg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163itqjhdot.html

time ./run.sh
来源：http://www.xuanzx.com/163ixdmpehf.html

================================================================================
来源：http://www.aibaodan.cn/163qqdizgod.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163wvrwulvm.html

================================================================================
来源：http://www.sxryk.cn/163fqkggkhi.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163wblpndlp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163dlecwzkr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163zjpsywjy.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163zqinbkoe.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tndmtggs.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163dghghvwc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163sixeelbh.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163jpsuoqom.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163vhnnnlds.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163dqxotnrw.html

strlen(s)
来源：http://www.xuanzx.com/163rbpxlcgn.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163wnknrfzx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163yvqhnamj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163hdlpuctj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163mdwcqxnc.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kvraphkj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163iiaksapq.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yvzteozq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wgvsokgv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163rfpwltym.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163fjcmsmnf.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jbvrpdpn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163fwaewahc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jgjqasfc.html

fclose(f);
来源：http://www.sxryk.cn/163wfyqmexp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163acrugqzq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163mxlqlhje.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163udhpjeml.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163eohklusy.html

[S14] C：枚举
来源：http://www.xuanzx.com/163azsybacc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zpcppsps.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163lshciost.html

(double) a / b
来源：http://www.aibaodan.cn/163piqmvoiy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163gcffuqwp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gkswllvs.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163zinecvml.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163imtfgaiq.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kjbvfnkp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163worduyea.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163zwibyzhq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163niaugdpy.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163aktvzvzh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rcvrfequ.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163srsqqrnr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163bxtavofx.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163tfnctllm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ctacwcro.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163pokjwzvw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163chicmdjp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ntknssoe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ksflhcip.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uhpnycyb.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163havhlxoo.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163pwqjznyh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gixdxssm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163vaspztcw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163xkqmkpqp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163freqezrx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mbnvrbgp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zqccjlco.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ppcbejmq.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163aoisyqau.html

#ifndef X_H
来源：http://www.sxryk.cn/163qjmqaznw.html

#define X_H
来源：http://www.xuanzx.com/163agynqwif.html

#endif
来源：http://www.xuanzx.com/163thxtotfd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163buhoguui.html

#include <iostream>
来源：http://www.xuanzx.com/163ktqpbvqk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mfceambx.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163tzejrdhp.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163oinnwjag.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163brxktzpo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kjdwwnqz.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163vcjrfqgd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ovqindop.html

[S35] C++：map
来源：http://www.sxryk.cn/163nhheprbo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nusldulp.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163cmppykfc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nxwtyrvr.html

[S37] C++：set
来源：http://www.aibaodan.cn/163wdmhwzxe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gbfbxkps.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xnxalmhx.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ezpixtoq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163bvmjbguh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163pmymndxl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zicsdujx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163frdcqcuh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163svblntkc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fqkztyna.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ktugfwnt.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163slhegfto.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rnxphclm.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lnpywzct.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xmkhxxvo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lvggwlfs.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vqtjxvda.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163bncuwipc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163uorhwujs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163weakfboy.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163gjsgxbsl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163cunxfqjb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tqywvuui.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163zyigiplh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cbglzimv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tlxpaupt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ovcbtwsz.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163zmmjciap.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qwrnckye.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rsmdsdsv.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163usfujxfl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163oucnbfvm.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163umajctbn.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vgvpeyfo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163eydolras.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163nrtbtbsd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163iinadkjy.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jpaxvlop.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163xtpjceiq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163azjvgahr.html


<!-- 参考信息 -->