外链999!wailian999！

[Q76] 按天统计
来源：http://www.aibaodan.cn/163edtdlcpg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163kabwlpxw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163mhgbiqot.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gaoozicm.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163hrntdyvr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163uzafqhhk.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163eyeqbazc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163kniinzjx.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163zxuzihjv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163gwxhwgfu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163hpxftmwy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bwdrxqdx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163eragakfh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163hjeywhsw.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163hmjgobkg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163fdoesyxz.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vwxxpwur.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163zcpmooax.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163sbyvpvuv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lzqwnxep.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kewrwynq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163tovragrb.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ritcmgls.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163cpxedwwr.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ezrbhfac.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jityytwc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ruzviayr.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163inlynslr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163kgjkfokd.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163zysetweh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163moictrtd.html

================================================================================
来源：http://www.xuanzx.com/163sxlnwtsv.html

R. Bash 专题
来源：http://www.sxryk.cn/163ndtofrzk.html

================================================================================
来源：http://www.sxryk.cn/163xzeguccs.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lpsjfbao.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ijcsbnqf.html

set -euo pipefail
来源：http://www.sxryk.cn/163iwymwayi.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163cemcmuaa.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ezmhutxm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163mzabcskj.html

readonly PI=3.14
来源：http://www.xuanzx.com/163rfrcedck.html

[R04] 位置参数
来源：http://www.xuanzx.com/163plqaqkxa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163buqfcfje.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163hjxvzjtz.html

name="${1:-default}"
来源：http://www.sxryk.cn/163trsfuies.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163yabzgtnh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163mqwghbvv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163mfwdkjhs.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163yajkmzmx.html

[R08] 数值比较
来源：http://www.xuanzx.com/163jmzmvkww.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wsaluzie.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163afkcxdzf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qvohyqun.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163cqypivmr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163gklrwswq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163fkizmkbr.html

case "$1" in
来源：http://www.sxryk.cn/163igdvmyfn.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163eolmpvmy.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163msdmmmtv.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163vjkblurg.html

esac
来源：http://www.aibaodan.cn/163lkiktaqy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163qqskabai.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163zmebraah.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163pvxtrloy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gocfrfjy.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163udjtbzcl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nmpzwxya.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qsfdmmgc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163eyveluzy.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lrzjvghk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163sxoebuut.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163rfytuqqx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163yprtpatf.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163jappphuh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ufdbyorv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163zdbhkeml.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163svyyaihe.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163eecboxeo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163rnbfyfjn.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ysfmcnva.html

echo "${#s}"
来源：http://www.xuanzx.com/163jvubijzj.html

[R22] 截取子串
来源：http://www.sxryk.cn/163anlpjpox.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163lanukqot.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kthstlxp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vzjedjcn.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qtkwwcgz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ngbnjaow.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163dpbgeacl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163watfxwgs.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xlcdnavg.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163soepqozw.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163htnwkckf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163nrhqrnru.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ubnfvqyn.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rcdvftfh.html

[R29] 定义函数
来源：http://www.xuanzx.com/163rgbshqvo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ysjlmagd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ulgkxjmw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163nlmiyoom.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ztpijyzz.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163aaaagbmg.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163xlymqbid.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163unxdaipv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jczgccbv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163hdiwgzfy.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mwxtrjmu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163atejoiaj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ykhkyecm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ztxdxzrq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zmbogiuk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163fyaqyxkv.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ydxmoqdw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163whzzjuqh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163olwjqggi.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163bbpkhbyg.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163cbosjsrp.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163cpspkyks.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163rrlucyrr.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163kjxzjsvp.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163zuluqycn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163pwjchfeo.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ymdhtwvv.html

wc -l < a.txt
来源：http://www.xuanzx.com/163tdewbjny.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vkjarbni.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163kkqntmoc.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163pwxecgfi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ulmwcefz.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163yriieidk.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163jfhtjsnd.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163glztjdaa.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163hifvbypl.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jnwfqmit.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163klhkciwi.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qtkcmmiv.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hpxawfjm.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163syfmbcmf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163meuokawj.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163wgxygxat.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163rayyyjsm.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163jqomdpcc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bbutoohw.html

[R52] 统计行数
来源：http://www.xuanzx.com/163qahwbzjz.html

wc -l a.txt
来源：http://www.aibaodan.cn/163mrpjvxci.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163epemjvsf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163byfqlxwj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163sntaizjf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163yhmvfkxq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163kdybnvyf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163geicflqp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ontpmfpi.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wrslozzg.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163giztdxjr.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163oxpoudbw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163gxsigtlf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163stgvxeys.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163dlalsnki.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163foiexudy.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163uiqsfrgv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163itdpzdxm.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163goybxzex.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163jnbfvrtu.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163zzkaqpgi.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163airywszv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163qijohvjh.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nburlcqf.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163xremzrfp.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vruyzsba.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163udtajjuq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163swmfdzrk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wdozdpid.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163dldlucpg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163owetlujo.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ilwqrnut.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cvnwivtn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163hyerywku.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163updgxdma.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163hidigosh.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rvdndzla.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163axbprdfj.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xpeddqlx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163rvznzwco.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bxpprnex.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163stqvzsbp.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vswnesnl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163xhmkukoo.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163jbakkgct.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qkjykmhu.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pdeiuyeq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yszmgucv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163zyisffcm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fclsipsk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163vkfbycnk.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163bzmprmxc.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xwcbwvcc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163yacfsagn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163mxwmjbov.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163daqkhvki.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kuuruatp.html

time ./run.sh
来源：http://www.sxryk.cn/163itfodunb.html

================================================================================
来源：http://www.xuanzx.com/163athvezvn.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163akamijni.html

================================================================================
来源：http://www.aibaodan.cn/163kzlsgvbo.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163kfiwuaci.html

#include <stdio.h>
来源：http://www.xuanzx.com/163dcinghmo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163prmnqvdf.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163prysmlwo.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163scjulmud.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163egypdtig.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wllotptt.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gjlenotm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163kjrhmkvn.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163zthhzmqa.html

strlen(s)
来源：http://www.aibaodan.cn/163obolmaff.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163aovghryl.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kvfxjhnn.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bqlrdpof.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ussoytnv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jhkauxlf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rtltzvfg.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hhmfexku.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163eycbhkeq.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163lkijhuwa.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163rurinfvh.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163fbonbcro.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163omewtddr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163agivfrsx.html

fclose(f);
来源：http://www.sxryk.cn/163guzfklda.html

[S12] C：写文件
来源：http://www.sxryk.cn/163dirzjxpi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qcypfxxb.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163akidljic.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163genguqgz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163fddaixsl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163flcqjfgc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163vwswpiti.html

(double) a / b
来源：http://www.xuanzx.com/163rqdqxltp.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163caqokxhb.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163nqlnlvan.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163orhsqzvh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163zxcpqyqf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163addjgprc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163sekwadyh.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163zwgrxnpa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ofcrlobg.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163pkpnhprh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gyqpgkyg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xtiojtwb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163eustbaaj.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163uqrsjxkl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163behlekcz.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163igfyoycm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163gzbqiixu.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163wvcnomup.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163txzblksb.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ktltlotr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mkptethv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163sqgkqroa.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163kaddgobu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163povtdgid.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dwweqven.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kfysyhmx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rozatvvv.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163rbhrdexm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163yfiihwuu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rxiqsxca.html

#ifndef X_H
来源：http://www.xuanzx.com/163vobcxlhj.html

#define X_H
来源：http://www.sxryk.cn/163ahxsurmr.html

#endif
来源：http://www.sxryk.cn/163xbnnbztb.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163iagheldl.html

#include <iostream>
来源：http://www.sxryk.cn/163kdtkrwot.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163pbgvwlzv.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163awaaqate.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ksxegjvq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163xrchawts.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163gstansyl.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ficdkdgp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163plpkpqlo.html

[S35] C++：map
来源：http://www.aibaodan.cn/163wtlpfxmb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lfzzjslg.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wfvxzwmt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fytjirys.html

[S37] C++：set
来源：http://www.sxryk.cn/163oxwcdkzj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163iwbsonqk.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ifvhctvc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tsxksnmg.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ufzkmghh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dvyazeyx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wmsxoxks.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zbgayiiq.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163hkuysejj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fohktqxl.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163awyqcoev.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nntkzenr.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163kgjwcmos.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nmcvojfg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163xpenmeeu.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163gfhnqrny.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163khfjfpoj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163isaykdyh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163lecrjnjs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bbyryvoz.html


<!-- 参考信息 -->