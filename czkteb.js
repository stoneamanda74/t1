外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163wwkbvxhv.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163obyfsmvy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163pqldrwoh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hkqvzzhy.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163alohvzji.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163oxwqicwo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ltvbtfxi.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163wgxrbhzs.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163wfkgyzgl.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163dscnajii.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hvkmmyqv.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163eaokpfbs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163mhgwrgue.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163weqblouz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163clnfcicg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ovbelltd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163slvqwezg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rycjdfks.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zorhevqa.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163yhmwnuul.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163gpdegcqe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hjmxvrph.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163fcsblien.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163xlelydfy.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163jyevsrft.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163yxjogvyd.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163xrvetdlb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gkooqjqf.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163yznpkajx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ckrjvjnj.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ecjhlsns.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cueoswje.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wluovzrt.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vepnnjzg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163rkwdodaj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163esdaullu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163iaujiesf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163jsmbegtt.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163gwrvryik.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163glpwqlqf.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163bnhtitbp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163nvjlinat.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bhnhfiwb.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163nmrkhhpd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xouvmbii.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tqceuuvv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163iycedoxi.html

================================================================================
来源：http://www.xuanzx.com/163kmllnrpn.html

R. Bash 专题
来源：http://www.xuanzx.com/163gtzsblya.html

================================================================================
来源：http://www.aibaodan.cn/163rhttqmpn.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163nxsextlh.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163skgbfgjk.html

set -euo pipefail
来源：http://www.xuanzx.com/163rocnveme.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163miaiyzhn.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vkysbuld.html

[R03] 只读变量
来源：http://www.sxryk.cn/163myxksise.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163thnhyxxp.html

[R04] 位置参数
来源：http://www.sxryk.cn/163rfandalq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ehzywoct.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163owymzpjb.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lunntoqa.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wktuneeu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163cvwoycip.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xrbkxabb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163dimdxaas.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163vccpzxxh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ktsgplpk.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ldfpgbmk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mrajzpab.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ozjkwswf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163hiysngwq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gxuplrba.html

case "$1" in
来源：http://www.sxryk.cn/163xaavfgvv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zqxigdcx.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163wetllrdd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qroazmou.html

esac
来源：http://www.sxryk.cn/163tppuqnwy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ujauleny.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163szvqdxbd.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jcaukilk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ttaiduje.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163zftimxlo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163cfhpwluy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xzvdgwhq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163dkgdjryx.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163apxustxx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163oyylwgsv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163bdzwurid.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vavxfmlg.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163hlnevrug.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163nrvartih.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ejodzszy.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ogeexyss.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yvzmuncg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163upbtehvp.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jvlfaljv.html

echo "${#s}"
来源：http://www.xuanzx.com/163nurysuyg.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xtemepbg.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163dieoxumi.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163cyihaqbp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163eesegnjx.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rbgagspb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wbqvmidv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163kuhuidcz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bebfisot.html

[R26] 命令替换
来源：http://www.sxryk.cn/163anwqbdna.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163towobpjr.html

[R27] 算术展开
来源：http://www.sxryk.cn/163uuusioqi.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163xoiarsij.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sredzjvx.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163pxuosekq.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ssbcucol.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vmvpbzfw.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ccdmatzp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xulgbbsq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163fgvomira.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163esfuwytt.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fpjbqwxj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163pjpvhopn.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163xxunfawy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kdrpcpzv.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163jpbezzqs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wvmihcwh.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163meriruqq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163bzyxzuje.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163swdyayqh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vnadoshv.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hderillb.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mkhnafmg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163aenilrlq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163wjelenol.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163uchzuxab.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163bkdrplbu.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qvclfxkf.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hrgrtmdj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163breqwuzj.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kvdfvtpd.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wjatkzij.html

wc -l < a.txt
来源：http://www.sxryk.cn/163yobhrwya.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ydereicm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163tftrqvgt.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163uobryhzk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163kizagmke.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nbljwpny.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163tqowxzdo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163spinghzx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qwnsiuya.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tztwcsmi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lplxmwat.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kiisoskr.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163vcxuhtzj.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163nblcpiiy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163opvycejr.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163peqzsfjb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ndorluol.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ptgfobry.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163dsnwtaax.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163pkgklzkx.html

wc -l a.txt
来源：http://www.xuanzx.com/163gnxccris.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zlxcjygw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163mtqmqhnt.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fbmsxeft.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ahnannpn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163rwrssqkq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mdawejky.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cbzteinp.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163pmbzkxon.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163zhvkcytq.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163cievlgiv.html

[R58] 下载文件
来源：http://www.sxryk.cn/163stbdznhj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yplsepjs.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163adfulgsf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163dqbbwvnd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163zfqpfkms.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ptsdnzdv.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wexjtvmv.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163zjvhkwwo.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163xovguvfw.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163copqlubd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mroztzle.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163fqqfrewj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vwogedgq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163gxrjonjo.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ceglulsk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163mibborhc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hjjgcnrv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xefgterk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lxzstbmr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163oldlnaku.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163wxdpnxnk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163oysnklkz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163tmdggriu.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163iwxyjgkm.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163slclzxgl.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163kplsvtsn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163naynnosg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zafpdxix.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163evwfzitv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jbnzkhlj.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163xbxpaizn.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163gxdbvjvn.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rehuacoo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qcagcsxx.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pkqijwyi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163nzbxfgmx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ukbbfjnp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wenkddtm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163kdjrjbzq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163cpoadquk.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wfdhakvh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163hvxypeir.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163tifgveww.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wnqhdqhr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163aceomyio.html

time ./run.sh
来源：http://www.sxryk.cn/163ozohqjgm.html

================================================================================
来源：http://www.sxryk.cn/163kdujfuji.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163rpyoddtb.html

================================================================================
来源：http://www.aibaodan.cn/163odaomwfw.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163lpajbcvo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163dzctcwya.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wgpnrymy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163yfxttznc.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wcvmxjjm.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163axcodrtz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163wuwvxgjf.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wsxcubtr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163srycdjvb.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163skzepvos.html

strlen(s)
来源：http://www.aibaodan.cn/163zniznpxk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163grlgubtq.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kiyhvvgc.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vuiukzxm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163aekpmpjj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hbytpbdj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163wrerrbfy.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qetjhvzr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163freegqui.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hdiayuyk.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163yzqxuhgl.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163lqhfhfey.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gvggwmcf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ccwgoeli.html

fclose(f);
来源：http://www.aibaodan.cn/163wfclqlqp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qlmlvaqz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163vqlpijzz.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163csruovud.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ayavocuj.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zdjlgjtw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uyrlrdto.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163qwucijfb.html

(double) a / b
来源：http://www.aibaodan.cn/163wblilddg.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163dngtqwkm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zlbkbajf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163mspunjrp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ydjkxvpp.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hqqkiyly.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nkxnpfig.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rswxmhpn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bbcpanff.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vjultodo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kkifrhhy.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qndcmkxl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163oluvksgz.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nzeibkyt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vzbgvbye.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ynbydvtj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163stlvhakj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ewdtaood.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163pkcdxgvj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zypqdbub.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gykjzvdd.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163kcijekwn.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ibdwpxps.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163gcoiailw.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jinvezay.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163euilfocb.html

static int counter = 0;
来源：http://www.sxryk.cn/163xhnrlkor.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163pepekfjt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163sijhwelw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163dlnqjejk.html

#ifndef X_H
来源：http://www.xuanzx.com/163vwafsljl.html

#define X_H
来源：http://www.sxryk.cn/163tcfkvbuu.html

#endif
来源：http://www.xuanzx.com/163fhpfiedk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163eskczuez.html

#include <iostream>
来源：http://www.sxryk.cn/163pusinmwc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163cagcaqbf.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163pybhprrg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ablnvdgb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163nhkrgcho.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ufyqynvf.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163biwritzz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dxhutjyv.html

[S35] C++：map
来源：http://www.xuanzx.com/163lptzideh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qlnobdlq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163nmvidpoo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cessgztd.html

[S37] C++：set
来源：http://www.aibaodan.cn/163oilydfce.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163njymrzaq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163svljehsh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hzcuavth.html


<!-- 参考信息 -->