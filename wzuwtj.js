外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163buayhliv.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163sfxkdmzw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163mkizknqt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163emkasnpj.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ddqhumuz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vgorxeoo.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163twfycqwo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ldlnwhjt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163yknewlfc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ssrhxbtx.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163cfccuqci.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163nqlibayc.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163vadnlnzz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163fpjgrjxz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163jpnwpluf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163relbauwe.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pfcrwsra.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ihvroxqz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163xbresgoy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163gxbbnxoj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163lldfcbsn.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163tanayllr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vzsbsjvr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163csfnzhoa.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ipyoqecv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163tpnvbjjh.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163kurtqigs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gcfgkdwq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163nyqzwxvd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163vfipkrls.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163dfzyazfz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163olblbgxk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163aiwyktwq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163yunrxzkc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163hvmqighz.html

================================================================================
来源：http://www.sxryk.cn/163mcoilbps.html

R. Bash 专题
来源：http://www.xuanzx.com/163pluihntp.html

================================================================================
来源：http://www.aibaodan.cn/163zdjdrlto.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ggderxeh.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163mdzzsvhv.html

set -euo pipefail
来源：http://www.sxryk.cn/163dsocfuae.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163srbocwvp.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163uxwhzhay.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163peieqybc.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163dpkzsshc.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163looapnsn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163sdfriaoe.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163nltzsais.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vafqsvry.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163dscsxbnk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163axrccgog.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ngwhudac.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ssvrztxg.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163dmqifxjz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163skrajxif.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163pzzfnsfc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163wgfjxzcx.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mwnnzexl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rkhsfylq.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163yiadoojf.html

case "$1" in
来源：http://www.xuanzx.com/163goikqwzd.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zmhdvdnh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wrmbfjki.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ytnjnsvb.html

esac
来源：http://www.xuanzx.com/163lcyvgxce.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163hconoznb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163mqohtyfm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mquiphoh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ugtcbaue.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163razgzktb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163pjrfbqha.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163hchowqkd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163qhlzftrf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163nkrmuctp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163duunfhtm.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hlxljtla.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163glqdwrkt.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163evllzffh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163fnvagwts.html

[R19] 数组长度
来源：http://www.xuanzx.com/163lrkbpcqo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kijmotcl.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nvafgzem.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163hojmhnoi.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163udrqjvsw.html

echo "${#s}"
来源：http://www.sxryk.cn/163dgzdztmy.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nyozxnky.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qjubhndn.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163jzjadrtn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rlashpbn.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fqvgvadr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163yxmagpjd.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bglbjmcr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163thcrmxzp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163imvlthak.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163kysqqmbw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bfnnboup.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vxoqbogj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163frepfrav.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xsyybuqd.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kgcoxjzd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163iliwkqju.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163grfvpgpl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163epgfefjk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163eseavwqs.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163vuzkuktf.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mogxnoln.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163pweyeyqb.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163eoljefho.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163yimvyrnq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163inqtzufr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wifoouha.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163osrrlfug.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163iljgyopf.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163pyxhqsgp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163dlgfhwfb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ihsinwne.html

files=$(ls -1)
来源：http://www.xuanzx.com/163dxdikjip.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pppvzind.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ryrbsphg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163idovsrxa.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163iinuzxzn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163doonqcqx.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ikdyiayq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163exrclpez.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163khyuiaqs.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ynkacawy.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xvalnjfl.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163zqotjxhb.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ghmfwvji.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163wledzrmj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163mjsfwdgc.html

[R45] 批量删除
来源：http://www.sxryk.cn/163yzsegkfk.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163jbjpjanz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163pmtizuem.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jahiqlix.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ycuwdlwy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163myjkrgon.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163nfgrstpd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hxxfkaie.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xfigqiwe.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163goymtudc.html

[R50] awk 求和
来源：http://www.xuanzx.com/163mkmlmwnq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163catbqspu.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ccwojxoz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163uddrpewg.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cffqgqvp.html

wc -l a.txt
来源：http://www.xuanzx.com/163kdvidpwm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163mvqqgntz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163qbcxocbh.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163bwezutoy.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163lcbkdgew.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163fvwbjqjf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163mpffkcgs.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rfysfrvc.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163uliciphr.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163njwecwmb.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163iebbiiqy.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163wdqguwba.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163yechjpse.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bbqgxrum.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163byfjygys.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zjhewybn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163gjcvghpf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163uwvqhkoc.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163cmmovmsq.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163xrlxmqav.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163yvacjiax.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kofnbptu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163lqfhvbuy.html

[R64] 结束进程
来源：http://www.sxryk.cn/163uhrzvtdw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163cmlnstua.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163enqtunen.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jhzuocxz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163eejjditn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163afcicxgg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163vfsfqvfx.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nkusugac.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ahsmxkcu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163mbbjhnmt.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163wsqpunyz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ixhmyqhu.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163spxxwuec.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jxjxjacr.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163qhbewxgi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163dowwzhds.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163uodiivuo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jvssprvd.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163pclthnst.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163junmdrtt.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163urgsknnr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163hbqtmbyc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zmugznwz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bkanzbjm.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163qczhbzib.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163krhokzzu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wrodgcfe.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163asfjtkpq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vxrgovqm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163piczbovt.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fweufajk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163oypmygaf.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163iubrydov.html

time ./run.sh
来源：http://www.xuanzx.com/163boctqnuh.html

================================================================================
来源：http://www.sxryk.cn/163yhnedita.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zmqgonrc.html

================================================================================
来源：http://www.sxryk.cn/163tvomzwsv.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163wcusmbvp.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vmwyfukd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163abckukic.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163iefmkzpi.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163tfltljpn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163lheypsdj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163puqbfcmq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163shuterdl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163eetsonbf.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163qazqplrw.html

strlen(s)
来源：http://www.aibaodan.cn/163rfppdgek.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163iqbrbwlw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163dlednkwy.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163bfprshqx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163xqkjgrze.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163gtodlmdd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163dxnqiqji.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163chpgsagp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163obzpcovk.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163bzlhsygu.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163yoqcamcb.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163bubenlyl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rmrstdnn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163upjcbeig.html

fclose(f);
来源：http://www.sxryk.cn/163zkqwvivt.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163yzcfcoqe.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vmrftycq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163alatpzhs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rrdfjvfj.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kliezyti.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qccybgsn.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dwyttuhb.html

(double) a / b
来源：http://www.aibaodan.cn/163fzlqdmai.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163byasyrvk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163uzueaota.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163nnqxwiut.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163otqvmchb.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163phbynnco.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163bdtpkmgd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163phaixedq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hbajuhbr.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qivuuaws.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xtfzgdhq.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163hfdhybig.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pcqvdpuc.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163pyrvqtjt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163arqhskqz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rhhehxpu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fyrbeqmm.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rqocjugr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163poklbmrh.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tltvhach.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163yridfwpk.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163aazceczu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163pfkjcohn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163hgbewtzy.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lmeghzmp.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163amqxtsmz.html

static int counter = 0;
来源：http://www.sxryk.cn/163xrmcrrpz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163naquckcc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vsfojzcc.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163wuejeqzs.html

#ifndef X_H
来源：http://www.sxryk.cn/163rmelyxvt.html

#define X_H
来源：http://www.xuanzx.com/163xwhdpwkd.html

#endif
来源：http://www.aibaodan.cn/163sehqmikm.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163dtxklxvu.html

#include <iostream>
来源：http://www.aibaodan.cn/163zeitpuhz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xcfttxce.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fprlwbod.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163aecepxkd.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163spvjvjzf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wadnimbh.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163okonesvc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vatzsjiw.html

[S35] C++：map
来源：http://www.xuanzx.com/163aidrqvsr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bkomcfyr.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rqgooqrt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kgicawei.html

[S37] C++：set
来源：http://www.sxryk.cn/163iodctyho.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163acqnrmyb.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163gxsrldwi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163wjpmddud.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163swrbymrz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163qkleyffb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163svfhcfov.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163nzncmpdo.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rdnzlnem.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163lmuwrqbq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rbhzwxls.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ywsafeqr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rwwqbkwf.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mwzvkawc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bilddikq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163cdzezfnb.html


<!-- 参考信息 -->