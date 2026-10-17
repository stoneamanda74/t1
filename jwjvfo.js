外链999!wailian999！

[Q76] 按天统计
来源：http://www.aibaodan.cn/163murzucop.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wzojjyqf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ezcqfcro.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163iumnbsgb.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163jrtbmdon.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163siuotmly.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163juspskuo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163fydpignv.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163bxohmhgy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ouvjthzd.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163nvsuxatu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163spfablxu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gwhyvgjt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163trfvforz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163liilxknm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163toczmpuz.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lcnzxgre.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163bmkqwezc.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163skuvvedt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163azrfypfe.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163jybplxvr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163dprbqmdz.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163favysgbm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163syotgfic.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163tgwrxlfp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163futlqfar.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163whlufeuh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163agffqfos.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163gfdytvps.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hgvxabog.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tjuzaqfj.html

================================================================================
来源：http://www.xuanzx.com/163lrbfxdmp.html

R. Bash 专题
来源：http://www.xuanzx.com/163dfvquxiv.html

================================================================================
来源：http://www.xuanzx.com/163qwkkjzxg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163lhjxoura.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ubffoezq.html

set -euo pipefail
来源：http://www.xuanzx.com/163jousmxqg.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163vgjppqru.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ytlewpyt.html

[R03] 只读变量
来源：http://www.sxryk.cn/163qflcghuc.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163uttxxgbc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163nouqtegr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ycxaazay.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jhlwsjor.html

name="${1:-default}"
来源：http://www.sxryk.cn/163akquazrf.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163febkcmfi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163nwpuxixp.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163pfncankp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163krubehye.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jzkhndrr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163feimldvy.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163llcwuziq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163zyftcddj.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163rdqftovw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163lfvujrzm.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ifmuwhsc.html

case "$1" in
来源：http://www.aibaodan.cn/163atoumkju.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fgeobwgp.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163qqigcsss.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163brjrjtrb.html

esac
来源：http://www.aibaodan.cn/163cgmjmeln.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163sdilsubp.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fbfkfhcl.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wkicqatg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rwlfalrr.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163spviffta.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163mwboaegi.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163yuyspgmx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163uhqhjhpj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163rdxaewzr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tksngehc.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163hiohqaqn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163tmtengfc.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yntweuuo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wgrzwocl.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163tdddjjtu.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163rcwkgdvj.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jvlkbiwk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rvkpxxxp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163pmxcaeec.html

echo "${#s}"
来源：http://www.sxryk.cn/163doypsfin.html

[R22] 截取子串
来源：http://www.xuanzx.com/163exgbrpky.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163kzueqkyd.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ksmkcymx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163xszcolfz.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fdqjmfpd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jmxbmqyh.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163wnpgjynj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163kxgjhgqq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163yzvjgjnm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163obcellug.html

[R27] 算术展开
来源：http://www.xuanzx.com/163zipzaqkj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zxpbzdvj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mwcjivhn.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yveivazc.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163yqmawjdw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163xxojjtbj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163pezsfwkw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163amchxajc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163fekiqbun.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163pblcmjwa.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163iiudstrw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163uapqjzyf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lhwofyix.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163nypfofmh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hutwwlor.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hqpgbekv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163cczwumto.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163pmwpqaug.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163lkaneaon.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rxxigwye.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vphltjzt.html

files=$(ls -1)
来源：http://www.sxryk.cn/163nbhhfndu.html

[R38] 管道串联
来源：http://www.sxryk.cn/163uaeuckjr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163jerlxibv.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163fnjffzgw.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163smoipcac.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163xkeaumqw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163kvocnjkd.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fznggskd.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163qxxyfhbs.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163fskzmqnd.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ywaawspv.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163htfuyqhl.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xgvbwejw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vpxhlybj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163tlvjpjvm.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ldwhqbrh.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163mzfnstbs.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163timapabl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163dmimqfso.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163yflbsvje.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163zjswcvhb.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163etqifslk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163fujapmjg.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rcgxppkm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bhzexdzo.html

[R50] awk 求和
来源：http://www.xuanzx.com/163fgvvqdql.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163angzkccg.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163jsgrnxnd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163gcfvfhrs.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vjdhauou.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bpimwchn.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ovwnhyqv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lcbbddas.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163pdzdufze.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163apvdsdsf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163hjsperxc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ulfeombu.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163iwsavfwn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ukvsdjei.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163isxcqudm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hzpezagf.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zoaovugz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kpcpvdtw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ghaijcbm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163byiyxwqf.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163vdqpxbky.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163iszqbaxl.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163qyunikja.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163txwfcqmp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163pzgmybxi.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nshwiqxc.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163wzghtrzd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163gmgipvfs.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ythtrdtv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ufqnswgh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163abwpdnnh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163lycrtczk.html

[R66] 定时任务
来源：http://www.sxryk.cn/163gqmjiigm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163fnyrxdde.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163fbkodsqf.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163hdqlqwsn.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hrvfepdb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wnjfoehr.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wvglcnwe.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163klihmfpm.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163vomcuezm.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lrisomvo.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163xsabnjjq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163dllbcvuu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163amyeykei.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ryyuuioa.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163cudvlqau.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ogsjyulj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163obqnsflf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163bunqpxok.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ywtgoosy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163dzoecijl.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163yyedbssh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mrryhdil.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pwhgysld.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163qpnrhdet.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163knrdlvob.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ktrmyewj.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163mwxqqmsd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163jkwbkmun.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163qzocfdnz.html

time ./run.sh
来源：http://www.xuanzx.com/163eodxretj.html

================================================================================
来源：http://www.aibaodan.cn/163hszalxxp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ikpanmib.html

================================================================================
来源：http://www.sxryk.cn/163hocnledk.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163rlpfrbum.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ghmwkuiq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163lvovlfns.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163bckentje.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jenewvcq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ejwshala.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gyazwbvm.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qjnpstdd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kuvziaaz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xxphyhrd.html

strlen(s)
来源：http://www.aibaodan.cn/163xnpiqsfn.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ggoxifse.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163dffxzlvw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163nnxnqozj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vlylneid.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jyspqlqw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163mcgbcuxw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163wuzokdov.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ugzzdcpd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163txmhspik.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mzgryxfw.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163gozypfwb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ndhadsaz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163eeunebbs.html

fclose(f);
来源：http://www.xuanzx.com/163nrwlcxyk.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163pfrsssla.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163oboowwhd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jbdwqowp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ydzilgjk.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hbxpzugi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163cwgdbnjw.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163issnnent.html

(double) a / b
来源：http://www.aibaodan.cn/163lfvvgtzg.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163kegtqppz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163qrxojbnv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dfkvcjip.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163shfqaech.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163akrfbnqd.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163alerelpy.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163oxnxtqsq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dkvapsan.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mngkjwyz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163awzszdaz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163scxlqjia.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163zuzunotq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163sapleafl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163urtnbvfm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163umgjudlj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wszdpdmx.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163umzwvnxh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hneepgag.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163smqzdquk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163mayafdlg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163udmnopbv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163odgcszgr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163tiqfnqoq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ossvxhie.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163hcrnnvwz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163omoiohod.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163yaiozxbd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pylwanqi.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163bqvxvxim.html

#ifndef X_H
来源：http://www.xuanzx.com/163bnvfhzqk.html

#define X_H
来源：http://www.aibaodan.cn/163hqigcdsf.html

#endif
来源：http://www.sxryk.cn/163mslbosik.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163iougtjfb.html

#include <iostream>
来源：http://www.aibaodan.cn/163bzjswvox.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ybtcooak.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163urhydhat.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ioiamzyd.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163nadjishm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xyycxpri.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163qseceaml.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163pmcwsvco.html

[S35] C++：map
来源：http://www.sxryk.cn/163tibmkbcn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hcotnora.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ihxliktr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rpyevros.html

[S37] C++：set
来源：http://www.sxryk.cn/163ddoyxlmc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163edievskr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163puztnrxw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163wuejmcmr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163pwugkuwr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ojuqzbof.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ifudzzqa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pfhvwbrq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163zrzzukjq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163kwgajflu.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163mtiqlyzs.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163oejyvjpi.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jghwdswy.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163diaklrel.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ewmoqteh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163xwiclbay.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163tgqkirgi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163btsuzuch.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163napttvah.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163okezvdyd.html


<!-- 参考信息 -->