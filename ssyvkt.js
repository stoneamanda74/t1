外链999!wailian999！

[Q76] 按天统计
来源：http://www.sxryk.cn/163jxuitsoh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163dzcdtvxd.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163cwataowr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ousgbdhg.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qwvyhdsa.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rrudknss.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163uesewvpl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ncypgnwx.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163evchafra.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163muhzgwta.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163cdqoroys.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dnwiuiyz.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163yfwfuzga.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ixspqkei.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163kenabear.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ovrxfuyl.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xasmvtfx.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fnqngwoh.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163tpcbfwfa.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163hiavqgcv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163fnaigzlq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163pwlvtztz.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qureahub.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xwumvzce.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xhkrzhiw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163kkeudfsr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163hksktxbt.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163yqrxpyao.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163uebgdvcd.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163aqawxleo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163uzojbcqs.html

================================================================================
来源：http://www.aibaodan.cn/163zrycvime.html

R. Bash 专题
来源：http://www.aibaodan.cn/163drfcitew.html

================================================================================
来源：http://www.xuanzx.com/163lgeawfld.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jiyxaxgk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163fgzpkenn.html

set -euo pipefail
来源：http://www.xuanzx.com/163ikscliqo.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cuqcyube.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163cqoyqigj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163trkursxw.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wvmjdrqe.html

[R04] 位置参数
来源：http://www.sxryk.cn/163pyysbjpe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163kcxgtjcj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163oameattv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163uzqfhkgn.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163zmsldikf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163hghnkvxk.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kmhhmyal.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163jlllstzh.html

[R08] 数值比较
来源：http://www.xuanzx.com/163aghctirh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163gecgeehz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ynlvxyur.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163pzzyyojd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163tqvffxph.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qizvnjpu.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163sywnvnbz.html

case "$1" in
来源：http://www.xuanzx.com/163mppgjjfj.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163uqlkewqt.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163naojvkgw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163wqbjrhik.html

esac
来源：http://www.xuanzx.com/163ppzdpkzh.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163klbgozur.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163iblhzsdf.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163sfjjmfkp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163cmruyxix.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ztmrxumv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163jxrpqiyn.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163beboxnnp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163dsvzhzwe.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yychomcp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163vbmrinol.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163kaaqeecs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163octeozbu.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163cfqciwfq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163bnhalbqn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163bzxszvyw.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163sxyaqxpo.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163njoxdzyz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163awxzxrxr.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ocqgofsg.html

echo "${#s}"
来源：http://www.xuanzx.com/163arfxmjqx.html

[R22] 截取子串
来源：http://www.sxryk.cn/163jzmwuwck.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qezpicdn.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163erbrkmlb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163eezoxqzh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163qfcjpali.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163cemjiyhe.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163adiqupvc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163xnyjtdpt.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nnhqpjfe.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vuksfwtz.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zdppkaiq.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qrtvjkib.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163hinhyqdx.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163eofswofk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163gbokddqe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163cmotdfal.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163jojevclq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163trpvwwjp.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qsodtflr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163uainvdaa.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163apwjridw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163yeeqlsml.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ehmhmapj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163nglynwnv.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163vhqoximl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jtkpeuqf.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163txzzbbeg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163zornvprb.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ypoluyyt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163katusryi.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yviiwqzg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163zjizhgdt.html

[R38] 管道串联
来源：http://www.sxryk.cn/163srepktvw.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163dhrsixfn.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163tegsruia.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163txhabpkj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163dwoskknj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xqdvvljt.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163qxnbfzpo.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163uzmbqlsz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163manjgqkf.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163oqevjaiw.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163suhhwywj.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163jzzdzign.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jlpwokus.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163daxslvho.html

[R45] 批量删除
来源：http://www.xuanzx.com/163jyaawhws.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163zkebwlhp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163rjvarjpu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163hnbdvkmq.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163snsaisws.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163gprivlud.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163pufbqizx.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ehokwazo.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163jkvpcugp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ckvruvmk.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163plaoklqq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163hzsnwhjy.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vlcepjus.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163xarjqslj.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ndpqaegu.html

wc -l a.txt
来源：http://www.aibaodan.cn/163aoourert.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ekitgbhj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163nfjvmedi.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163exhwdngo.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163xcsorkdy.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gdvkqluy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163xljrcccv.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xvzbqtcv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jhoabeho.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tmdmvrzo.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163xtaazxlz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163lzbtzbua.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163vzfwpitt.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163beseacyk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163vaocurds.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163wiyhsqmi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163idtzdltx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qsipwpxr.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163wbvbohfe.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163crwoygtz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163chiczevi.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163yfsssumt.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163laewmwto.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gltuegtw.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zlubpfxb.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163qhzbsxdm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163hudjxrko.html

[R66] 定时任务
来源：http://www.sxryk.cn/163bmoiuebo.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163capnrybb.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163bfbgjejq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163iastefjw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163dqaprepx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nnuxyrft.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ocbscyxi.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ppihurxd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tiyojeze.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163zbfpwqyk.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163cxunazbd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ncvmiviu.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163gavwoimt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163tuvonegq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163uccmtdre.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ddhjpmft.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163zgjrrfey.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mfsqzied.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163bekktuyk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qjwzlbyf.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163yldgjrcf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ofrjanhy.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163nrgoedov.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xpkknwgo.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163sybeirdx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163asmupdtp.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163dtxrtrxv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163zboyiuiv.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dyrqfujl.html

time ./run.sh
来源：http://www.xuanzx.com/163vjtriunk.html

================================================================================
来源：http://www.xuanzx.com/163jncujpte.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163iqlllpun.html

================================================================================
来源：http://www.sxryk.cn/163nzbfwgdt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163dlizvlnp.html

#include <stdio.h>
来源：http://www.xuanzx.com/163xjmggnkd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163royconuc.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qdnildas.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163amwncfhz.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163bhjvyznu.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vvbimami.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163icvkaeuz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163atijxjnd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ejcjwtvq.html

strlen(s)
来源：http://www.xuanzx.com/163oxnhxlxt.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163hwhdotxr.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163lgruetbk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163tsbtgwmd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wgarxngx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163leiwudmi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tbcrddrk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163llstbhbb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163dzjehlhz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ipdqtwlw.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163toglackw.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ayymjjvb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163lslpocfc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163nmipgjuc.html

fclose(f);
来源：http://www.xuanzx.com/163mosrczht.html

[S12] C：写文件
来源：http://www.sxryk.cn/163xqvxihfn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mhiswlqf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163sdzyvzmu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rdagzcao.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bxzemtwt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163frgnteoj.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163dlxakstx.html

(double) a / b
来源：http://www.xuanzx.com/163xhsutygo.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163yzwpefum.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163rnlopgcj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163sjpmlovm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163nxvdosxt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163kqyftnjp.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163cnhnzldp.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rfheraet.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ljoqsfly.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163nneazgkm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jrvlruxk.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163taframyi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163nkhurkwm.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163iinjjkgy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163gphtnzqo.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fyccishf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163gkskcmsk.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jlgftpmz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163sskhpyoz.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qvehxcsf.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jlvzqpso.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163jdbkpyzx.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163debopjja.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nceapqci.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163liiuekpn.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dflairwz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ehnoemne.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ptknozag.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163qlpcqegt.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rfbmqeri.html

#ifndef X_H
来源：http://www.aibaodan.cn/163dxgkcfly.html

#define X_H
来源：http://www.aibaodan.cn/163gpktxiba.html

#endif
来源：http://www.aibaodan.cn/163wptluirj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cohlwmkn.html

#include <iostream>
来源：http://www.xuanzx.com/163vcjtwjfs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163evryhrra.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163uebkppau.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163yecigqhh.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mgmdmhdr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163aurfsopo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pcukugvt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kpsmdfgk.html

[S35] C++：map
来源：http://www.xuanzx.com/163kxfwnwch.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163robqojyv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163bdyxrqhl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vyjeopvn.html

[S37] C++：set
来源：http://www.xuanzx.com/163xtkhjuaz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yiyyogqv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vznilyju.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163kwatuzyl.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163smdrybti.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163fbyuwxow.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163llumzcqv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163chtlonvc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lbqbyfbq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vexwkyfe.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163hedcnftj.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kvtncvet.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163fxzfcksi.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163upforkar.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lxjcxidg.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wpdfkpvj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163tztjmwzo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163xkgckqct.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hcsscgda.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cvimmjgj.html


<!-- 参考信息 -->