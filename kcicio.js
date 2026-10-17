外链999!wailian999！

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jqdxxcqn.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163deozwkye.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163wosygovb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jjjpqyhl.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163llxgpzby.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xdqfbvtp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cotpofpv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163myxzlkys.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163nrxkvmwk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163vyvpazga.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163urhzpnwl.html

COMMIT;
来源：http://www.xuanzx.com/163xovfnnju.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ladsrvku.html

ROLLBACK;
来源：http://www.xuanzx.com/163wnjkzsrr.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163jkdydcac.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163omaqohlq.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163rajslgog.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163iqmcimaa.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163yhheewmm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163fkcifeup.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nlxmdnne.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163whxtqhlp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163pzasxqkg.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163nwmmnhxx.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ldcwpzuk.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ythnpxzd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163obtmkltz.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ckutuwpb.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jxcbvfzf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163buikmiro.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163etgqefze.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ltnfuggw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163bthyeamr.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163reynchcz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163mrlzazux.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163muabbjxz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zyzpcwcz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jarajdgh.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163akkvouwz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jtegxdqs.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ezegfndm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163betdkyhc.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163bjsinise.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163gjeyacrk.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163tdbwcseq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163wngxxuni.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xyflhnzm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163oqhthoog.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xshfbjal.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163dufhawhc.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163cyptnzvi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163hpvkbvxq.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163aiapsjbg.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163cagefzzl.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ssnfmdkz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163jxxdasxn.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163aduxouve.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163syszbhdu.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163cysnwgbw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ocxrjuuh.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cjegsreq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lvxmmlsd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wcooqftj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163zzjoibrg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jkglhsbf.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ekpxjepe.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tezmolec.html

================================================================================
来源：http://www.xuanzx.com/163opziderm.html

R. Bash 专题
来源：http://www.sxryk.cn/163ivmieuud.html

================================================================================
来源：http://www.aibaodan.cn/163seytccxp.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163mjlwzwiv.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163wyhvlbps.html

set -euo pipefail
来源：http://www.sxryk.cn/163thuooieu.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cwuegqdd.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163aeqninwz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163kwoufglt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gquirqoi.html

[R04] 位置参数
来源：http://www.sxryk.cn/163txjacyfc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163pdqwrzrb.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ntqxrjcw.html

name="${1:-default}"
来源：http://www.xuanzx.com/163afpzxphe.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163cbqrqzks.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vwdwevbr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163uvaotcnu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163noihszdw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163yigtbpbf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163zirsxbmp.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163qejftbea.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ayodldau.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163klwstwck.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163dlbzhzid.html

[R11] case 多分支
来源：http://www.sxryk.cn/163xrdengnl.html

case "$1" in
来源：http://www.sxryk.cn/163nqelttgt.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163oskuupzv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163bdiyirkd.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163niyrputa.html

esac
来源：http://www.sxryk.cn/163xnvdhvcq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163gnucpbhc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163aoiqverp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163txkiikeb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163zrlrfrpq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163rwqusliv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163xrdlbynu.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163cswrrosw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163cfokaexo.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163iigryqch.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163obkcvefc.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bkmnmwuy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163khgncpfv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wefczrbk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ahsxwskv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qmgileue.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163uapmfmpi.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163dzlrmkgu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ypycgmbv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163owykhqwg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ropyuwze.html

[R22] 截取子串
来源：http://www.xuanzx.com/163yttwmakk.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qpwctrkv.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ytljakuf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163gupdpwje.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163dlyeneus.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jflgcoud.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163opawovgo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hypytmyo.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163sjrnmjab.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wochwcmy.html

[R27] 算术展开
来源：http://www.xuanzx.com/163tcxtaudl.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163axyimafe.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kvbfyfcz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163udbwkwjp.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163osabauzv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163rgwvuhru.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rfbffjhv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163rpycgwtn.html

[R31] 局部变量
来源：http://www.sxryk.cn/163cjcmkfas.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ghviofif.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163gbkwqkqo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163szhclrjo.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163prqsezpi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163apzbribu.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163njkbbobq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pmkdwqda.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163abwjicjz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163erytdhex.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163nmberjaq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163exmkomeu.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163sfgbdgjs.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163hkctxwbu.html

[R38] 管道串联
来源：http://www.xuanzx.com/163opkhqrti.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163tqrjtomi.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gzwbeybd.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163eivuqoei.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163hgdmxcpl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wviaknxm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ooxnrfyj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163xomtlzcm.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163leyeelvh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wakaonlj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zutheegp.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163liufzgww.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163jwsgliqy.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ihjlmbff.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163qesjlaya.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163bgmbqpjo.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163yoktjnyf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fierjdwm.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163dgetvuua.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163tvfljhiu.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163qgieugwh.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hcrkqkpr.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jktcbjbn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163usuuargl.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163osoxfimw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163yxwthrlm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163hyakxbzw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163zyceybhn.html

[R52] 统计行数
来源：http://www.sxryk.cn/163qfkwyaah.html

wc -l a.txt
来源：http://www.aibaodan.cn/163rxtstywd.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gsshemfk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hlpxxdzn.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zaanzewb.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163pthkzoki.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163igikhgvt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163kiifhfgy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163pvogntym.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163livubtkq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163pehyllxb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163uopiomqj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nqdhqvlp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ajtqbwqh.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nvvyjbvk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163eldjxfvi.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ppynxoae.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dpyuelzc.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ijbdtxqn.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163kkkhhwkl.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163dvmlrmbx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163tlkofpka.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163wprgcsfp.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ewseqwro.html

[R64] 结束进程
来源：http://www.sxryk.cn/163kinzpqhd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tbjcvlge.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dmulgntd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ssndbhlt.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gjxfkviw.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163dqicxziz.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163jpdansuf.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163swcufbsx.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hayvylco.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163cjgnplfg.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163yemhgdfu.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uqlpmtnd.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163zuofxeee.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cylbekzf.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163qrsmtjsw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163dogaugrf.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163zmrngmlz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163obphwjmn.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xdgovadi.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rxzkgnhc.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163pyfqigip.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163gvvxukbm.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163mekwfvym.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163danhxuqv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gcizhdkb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dwviabnx.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163flumvcsj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rilxocpv.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163mugyspkh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163tkirutee.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163whtqdfkz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163zdkfyzcz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163skcpecvi.html

time ./run.sh
来源：http://www.sxryk.cn/163mswihqve.html

================================================================================
来源：http://www.aibaodan.cn/163exhndcon.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ryggxxqk.html

================================================================================
来源：http://www.xuanzx.com/163zimipggq.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qpwaetgj.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163kvpxqatw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qezjjbvt.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163bhnfyrbj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jlfnxcxm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163sekbyoub.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hurpzlok.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ukdesdwn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163gvfyuuwy.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163apaqzvgx.html

strlen(s)
来源：http://www.sxryk.cn/163jpwytscm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ailybwxz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163btvmpaav.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vjqzovpt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163jgogxbyc.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kmapeydm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163antyweec.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163apxokpev.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163qkrqxlzh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hjcftpuh.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163mzjpodan.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ybiukekq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fkntblsd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xnogkxuh.html

fclose(f);
来源：http://www.aibaodan.cn/163qsakfdtg.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mkkbsvcq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vqgxtzfb.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163chwxzvvr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kbgbzvcb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ddajemvf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163awyehftb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163yenikopc.html

(double) a / b
来源：http://www.xuanzx.com/163fjivgqgb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163kbjbsfhq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163eqhijsoi.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163gswxdzxm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ztqauils.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163epnpyunf.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163onxzzzaf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163bplbtpvc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wouwtfux.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163jbicwmlz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bspakhwq.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163mlamkpda.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163fblseejw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163mejhopkv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163javgofqg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163pseokwmb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163zuahmvey.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163pkcxdcfj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163araurtil.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163myivhfsn.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163cobsiehe.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xoylgslw.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163phppfnmu.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163gtkmektc.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163dwoiggzn.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gakrrntn.html

static int counter = 0;
来源：http://www.aibaodan.cn/163djsugkrc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ewnpljog.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xpieswjy.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mmlajpil.html


<!-- 参考信息 -->