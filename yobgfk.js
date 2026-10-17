外链999!wailian999！

[Q76] 按天统计
来源：http://www.aibaodan.cn/163baxdoxvc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163uxzhfocd.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163axohbvkg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163kiseogjh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hywxvuqc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163inxdaghp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163iywrbpcc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163xhmdwgwh.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163srftxjns.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163uogogpql.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163usvezfbo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163pskanznq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qgzqmarw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163uankvzlq.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163hkqcgpfv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163kfpuojne.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163uynvrele.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163nigysuxz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163yeabamli.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163gkwrlbeq.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163opqduzug.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ixeaorjy.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163hztermaf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ftkpngui.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wwkgfibg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163rnlncvxs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163dbxjbpiq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163nnjhxvtq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163odusyxhd.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163yqitlqcb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163kobkgokl.html

================================================================================
来源：http://www.xuanzx.com/163ltyaktay.html

R. Bash 专题
来源：http://www.sxryk.cn/163ujphwckn.html

================================================================================
来源：http://www.xuanzx.com/163imrtxykr.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vsnvidwu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163jizrjywf.html

set -euo pipefail
来源：http://www.sxryk.cn/163ludgwaxm.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rgdeauom.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163efstqacv.html

[R03] 只读变量
来源：http://www.xuanzx.com/163czciqnyf.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163slljaogl.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163dskijzjk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163zfemqbzr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163tuxlyuzc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163tpfzzlfu.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hzhiseiu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dkdkbakx.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163dtmpjlct.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163jvgqkwnb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163dxevxkfn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163fivvrrgk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163djywtahh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rkxxdpcc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163vsmqixnn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xappunbo.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163mghoysup.html

case "$1" in
来源：http://www.sxryk.cn/163hdspqoyx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163pqpkjypo.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163tavjymve.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163fjezixmi.html

esac
来源：http://www.aibaodan.cn/163tfddogon.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ccqachzf.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ywnkflwi.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163paidjyve.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jvmufhdr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163bwntlsmh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163sxkibyte.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163onoctmwy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mlykpeay.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163kjebjmhr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163liofttkk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sgiuoubh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163nahrynvu.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bvrcnure.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ojbrbszq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hxbitmlg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cheezxtl.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163zlduscxv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163xzqwaltc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nktwfqey.html

echo "${#s}"
来源：http://www.xuanzx.com/163tzoxdqxr.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bbspegik.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163dqcnycag.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163mxicnxhw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163vzjnlbbq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163mkdlbhlq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163yuqacgiy.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163liiitxeg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wludmzym.html

[R26] 命令替换
来源：http://www.xuanzx.com/163trraslrr.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163zaqmxpow.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163kjwegons.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163zwhjinla.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163gxprnkiz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rnaeovcz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163zbdjemft.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163tjtmxrkn.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ppqskrvu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zaagpeba.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163invfpftr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163kmdckyet.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163sqpanesf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163jzretqyf.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163kiieidza.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163skzvoqpa.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ltqucdcn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163oeluqvvo.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163frhwogwv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jplixerg.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163xsfucate.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vikigbhj.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163okwbllmd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ncxonoii.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gddtmloo.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163hryrdfqh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163yudrftrg.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163iefkjgqa.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ajghgsom.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zypvajrm.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wbhlutzf.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163nunnikqz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163cyzxceog.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ruwlryph.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ijopskpp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163azlfaplo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163kqlukpns.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163svonyehq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163oalpngts.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163joeojqww.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163adyiheqk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163pxjhceyh.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163pqnpfzen.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163umwivtwk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vxcqxnab.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163yltvgway.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163oradgucx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hxnqbywa.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uzjwsjlz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hqylgvkw.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dpdfivzx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163fesgkywl.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mthwaikm.html

wc -l a.txt
来源：http://www.sxryk.cn/163bhrabkli.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163hetjcmke.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xgzfkwrk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163swbiymhi.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ckyyiunq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163wdofuwkt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gmqvsmtu.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163gwtvkbib.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163mtsyprsu.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163kcdawdby.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mziofbjz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163dmhpcusn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163vbiflkly.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yusrmsar.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163hrtfgyjb.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163qdwsnvhw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163noibyaxn.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wmzzmoqh.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ntedcnqe.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163pvzvbeju.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rafcrqpl.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kmclpbvo.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nnjntkbd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163snsgpytq.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163rrkkilqi.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ysmfeobx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163visbumdu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163nfppkhep.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163olowgprd.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gtdbrmjk.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163bxxuwzlm.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wtswjbms.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163wbxidmdh.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163bqsqkswd.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163yromkkbw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163slsxpfeg.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163zmyipypm.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163kgfgvurd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163pgdhmrlv.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cbzxgauq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jsinvypp.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163skssqjwe.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163rxgmfcve.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163viilnibo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ghnaqyax.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pbglzuks.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jgcviqbx.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163qygfqbew.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ivqoptrs.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ftueivia.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kepuiwrs.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dcyylcyl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163gvxxeebc.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163akvqfxwx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163byjcgakc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163nnpsybth.html

time ./run.sh
来源：http://www.sxryk.cn/163jnvafbxn.html

================================================================================
来源：http://www.aibaodan.cn/163oshqdnod.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163rquqjrot.html

================================================================================
来源：http://www.aibaodan.cn/163zuzenkkc.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zluxldcs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163uryaowkb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163eqmcfrxo.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163awxuppsf.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hukaeluv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163tcjwhite.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vnrjsbdu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163mkydwgbw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163fzypvrxm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ksudnvmx.html

strlen(s)
来源：http://www.sxryk.cn/163xebzxbkf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rnvafors.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163crywzgop.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163twbcpusk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163chilfwgj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nhcfirvm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ujneatnt.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dktbcomb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wyjdnwyb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163svbcnvoz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zrsfyitt.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163hsscgadm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ezeabpfa.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ocqbaqdo.html

fclose(f);
来源：http://www.sxryk.cn/163phuhhrgi.html

[S12] C：写文件
来源：http://www.sxryk.cn/163gdzoehax.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163swypzroz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bqszpulz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163hslejtpu.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kkhtitiq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163lvyqiqqy.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jvjcovsu.html

(double) a / b
来源：http://www.aibaodan.cn/163zhsyawqp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163qkvkmchp.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xfxtvznp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163elviyxlp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kqoqfhjd.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xtgpngnx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163rgrhnjla.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163toznitvi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mlengwcl.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vcwvpvhp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163haehzwdb.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163gnonhnrs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ssbdljmh.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163spiobxnp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163npbchyov.html

[S23] C：随机数
来源：http://www.sxryk.cn/163uwdkcqtb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bwwpeoqy.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163fqmemhhp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163isvhupfj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jvjrnagq.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163pydlnbrz.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163pmcvqgoo.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163urdbslud.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ygabnrhc.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dkfowsve.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163rgurngwm.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ewnqrivo.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gwtbuljb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ddhteqkr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dqhejyqy.html

#ifndef X_H
来源：http://www.xuanzx.com/163jfmjcqjr.html

#define X_H
来源：http://www.sxryk.cn/163ygskxoca.html

#endif
来源：http://www.xuanzx.com/163ofwmljiq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163yetmfuhs.html

#include <iostream>
来源：http://www.sxryk.cn/163rysvtmxy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163xqnnzzey.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vbhnpppv.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163uujsrlwc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163cmvwbcan.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jmpcapey.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pwlkfvge.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163nxqfphph.html

[S35] C++：map
来源：http://www.xuanzx.com/163twhycrqt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bprypjaf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163yqprzphv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vkwcqkrl.html

[S37] C++：set
来源：http://www.aibaodan.cn/163dcwzdlao.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mtfzujie.html

[S38] C++：排序
来源：http://www.sxryk.cn/163iboytxzk.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163wjrvmfzz.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ivdoowjh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163jpgqppqy.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163auuunuzd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qgafprap.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163zsyfsznl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163oiwormoe.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163thtfkhje.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bzccbclt.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163eapgyabe.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163cngtefzv.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163muoyhuvs.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tgkuvtgh.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pcxtxmjn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163tmtquvon.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163gtedtewu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bdmeiihb.html


<!-- 参考信息 -->