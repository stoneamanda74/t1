外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163gbhxaixt.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163wnfrdjbt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ydtimvci.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ygvnoadt.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jbjkozti.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jvczomoq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163eyzvcyqd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163npxbqakb.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163pnnezjpe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163syffssdp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163cqexdtbe.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zmtvjwff.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zrstvgfz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163zfnbpkdb.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163stuxlftu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163uvgaqnrp.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163rtcmzrjw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163usjpabea.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163mzpbqciz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163gmrbrfpq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163zqojosxc.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163sngymval.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xzeyxzvi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vigabyuv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ezttogsg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ctvvqavf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163bqfqtxxn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163amlpozwj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zjiixegf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163cacvndpj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163eypkeqto.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163rcvmiuco.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163cagmhpfn.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163xsjessjb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zznrxzoa.html

================================================================================
来源：http://www.sxryk.cn/163epjfxhum.html

R. Bash 专题
来源：http://www.xuanzx.com/163rezhyuuk.html

================================================================================
来源：http://www.xuanzx.com/163squwpayu.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163zvqlfvoa.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bqayagiw.html

set -euo pipefail
来源：http://www.sxryk.cn/163ykbwmudd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163agoobbps.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163kezykkuc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163nbcnkxaa.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kdmwqemu.html

[R04] 位置参数
来源：http://www.sxryk.cn/163toumayol.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163pczyytpt.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163mxvjjbqo.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163umxphweg.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163nczmkgfz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163pdsmicut.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163eeoymwaq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163qeykaccg.html

[R08] 数值比较
来源：http://www.xuanzx.com/163yyfziukb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163eijhkumj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163zapieias.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ydenoysc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yjhsjufh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163izjrqmwd.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qltlgkwt.html

case "$1" in
来源：http://www.aibaodan.cn/163wdirrugs.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163bxozmuot.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zsulrveb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163bxkzklfm.html

esac
来源：http://www.xuanzx.com/163barmwmoo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163yjkrirat.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xvdewsqj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163cezcezxv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163opdrfkou.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163kktalptb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gryntpic.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mmuzbeow.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163cypikbie.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163fdugfzqm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qycnnnhz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ozygewqf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163cpfiwuwy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163uuewcnyz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163eghpeicl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163fzajcxgd.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163enacntyv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lbqovxqn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163iyurangb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163anebfgru.html

echo "${#s}"
来源：http://www.sxryk.cn/163oedunfym.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fgfyunwv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163hehkgjcx.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163sbsysnax.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163uyevheaq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163yopqndap.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163gibaqrhu.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163rjknjvgy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bjpagwja.html

[R26] 命令替换
来源：http://www.sxryk.cn/163qmvxccee.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vusrsjrt.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163wwazhnrz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xyqsufqc.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163bcrbidco.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163hpotqywg.html

[R29] 定义函数
来源：http://www.sxryk.cn/163hvkmmdtv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163udtmljsk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163vhdcbagt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163gtwezusv.html

[R31] 局部变量
来源：http://www.xuanzx.com/163tsalyxim.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163frgyvrch.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163kbzqrytt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163waodvgse.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lzcitmjx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163gcxkisfj.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163giflfhid.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163scvcvmvh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163iofgsaye.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163luzzdhxt.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163woxowugr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163kmuimcyv.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163xlodtnug.html

files=$(ls -1)
来源：http://www.xuanzx.com/163sdakiabf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vxaoqopt.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163gkrkfgoc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163nsvgbbdf.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163eseqatlk.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xshsgjkk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163mtncdzye.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163rscyunut.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163bhltllyj.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163oykgvksr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163rvjsvklr.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ynnngmjm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xhcymagz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wborjlel.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163dyuxcvca.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163tsqnztoc.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163xtcvnjou.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163hyykhcgi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fukyudon.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163hvefobbd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163pvkpgnlv.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xyeolrjo.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mlnpremk.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bfenfopk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dntivyuc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hhfltwox.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163qyiipvnt.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163chehixsk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163lhuuqqad.html

[R52] 统计行数
来源：http://www.xuanzx.com/163bevqwuyq.html

wc -l a.txt
来源：http://www.sxryk.cn/163qwxuhevi.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gcoftfuy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163bjonrfpm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163plxsqagt.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163gftygreo.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163urcdpuxq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163sqxuoflr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163fmhmibim.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pbjiclgf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vnizgcnn.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163mzakxrzj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163uqgobmtn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163taxqqflt.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163dyqxsfkt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163viaxmnoc.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bsxedzru.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163uzbhbqiz.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163oxrosoke.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163whqvcrwe.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jggqrgad.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163whnxxppl.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zakadpuz.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ejexsfjt.html

[R64] 结束进程
来源：http://www.sxryk.cn/163cfccwsjj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163sihhjhes.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cbsqozio.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cdxuklzs.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163evvrnmal.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163htcbslsd.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163kzgvrpvh.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163iliuahni.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dydxqahj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163uaptflqq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zeuyfxcv.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ntxouvuj.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163wjdbjfls.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163hinbdvoh.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163cdiremtq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163koirssgn.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163uzthjrew.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fvmitczs.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163agkwjdfx.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163shfqhzaz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163nkvedulw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ycpsoctz.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163yysnaznm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163gzccfgdp.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163muoimeyz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fjstkhof.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163sdexhrtr.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163cobdwcbp.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ibrituki.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vhpgstor.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163deffgujm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ibvevubd.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163znpjylri.html

time ./run.sh
来源：http://www.xuanzx.com/163czpevekh.html

================================================================================
来源：http://www.aibaodan.cn/163rhnztutf.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vganxblq.html

================================================================================
来源：http://www.xuanzx.com/163tnwwfccg.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vtfkccpo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tdngeknu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163uachvdzi.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lnmtjnen.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ekotioac.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163yvqfaoul.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163uvzhdmrw.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163chuonlhh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rpgasisl.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tmjvflsx.html

strlen(s)
来源：http://www.xuanzx.com/163tdfqrkzo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163somwtnaf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163cjsedolj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163oejghcwm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163pmolobkh.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163xxydgtuh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163iwfdzjip.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163buafkbyf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163yjmohonj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163zsgjuxxz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163urrwvlks.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163abnphwxa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ttclnwfw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163opkgnlpu.html

fclose(f);
来源：http://www.xuanzx.com/163pyrhdwgo.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hmlcujwi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163bxmcnunh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zemqgjga.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163pyqaxcyr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163isgonhpu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163tbgmxycf.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163rimrbfaa.html

(double) a / b
来源：http://www.sxryk.cn/163bnrtwvfm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163idzpuuac.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163qirokkny.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fqizibze.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xeimbcap.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nhivvquk.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163qshogknk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163hpuzmnnk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rvjkaicd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163liwkkghg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cgkistxf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163aykvtxrl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mqzjwuve.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dbmlnpgk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ilkdaxzk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gqztqnvs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163fdmntvdr.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jumoeelq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163npcffngu.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qgerrtdn.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wrreqvrw.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rbqygnol.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163fkojrkto.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tfallxon.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mjbytvna.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ywwdvqef.html

static int counter = 0;
来源：http://www.sxryk.cn/163saoturuk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ccgpnrtv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163lwelcpla.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163skllmfjm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hqckevzd.html

#define X_H
来源：http://www.xuanzx.com/163itodvjkn.html

#endif
来源：http://www.sxryk.cn/163mlzvochz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163dsvlbsgt.html

#include <iostream>
来源：http://www.sxryk.cn/163djuagduj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ysvpzshq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nlzhzqds.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163twfsyzhn.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163lgbtsxqa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vygvverg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163zcvylhit.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gtzcgnhl.html

[S35] C++：map
来源：http://www.sxryk.cn/163kkyuisot.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pkpgypgc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xttmryqn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ubjnyqnt.html

[S37] C++：set
来源：http://www.aibaodan.cn/163akvuelqs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kknawuxz.html

[S38] C++：排序
来源：http://www.xuanzx.com/163sjrxnfuz.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ixfbjkqq.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163jlgjqvoh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163geaxktep.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tivjabxx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fxzqgyon.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163otafywjj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163olotfdaq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163svzsjkmr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163azsxpdtt.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163yskcppqc.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163cmayxwdw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163lfxogaeh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tjlkciyk.html


<!-- 参考信息 -->