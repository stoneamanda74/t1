外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163xvgwbnmd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163jjqrfsix.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163wjrcbnng.html

[Q57] 行号
来源：http://www.xuanzx.com/163uuvyawrw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jujcwgdu.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163hboghpya.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ucfvnnsk.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163wymnmnxd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vcjwmogj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163alsqtvqz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163gepbidzf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163vpwzhhjh.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163hdrgqprn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163vouttgou.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ptnsrjmg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lnjcwuan.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ywftifuj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163eosygidp.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jgfubkop.html

COMMIT;
来源：http://www.sxryk.cn/163zniinurf.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163trrvoabc.html

ROLLBACK;
来源：http://www.sxryk.cn/163qxynookc.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163kxehwchy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ygmmptfq.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163cncazjxr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163cdmaorcl.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ncdwexbe.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163nzowonoo.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rizovlpn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bbctsyam.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163jnktuzvh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163etvvlzvx.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163dxlwxrfl.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bmjqtcwe.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163npxzvehi.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163mnrnbagq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163gxpakkzv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163uytkfxct.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ptqnwksw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zvkyxgvc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163itpgiehv.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163attcmupw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163gvinnvex.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163fvfngizr.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163qmwhjuac.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gpawvdas.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ugigzkfw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163wryakprk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163leefkigb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163uutbzvax.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163dfnmhlul.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zafoehgf.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163jemrpofs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lzliaisn.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163fanbumlu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163wihmcfaa.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rdtdixrb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163vgdbrmpn.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163nzdjzgvv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163xxytocte.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163djcevcwg.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163oqnjeakj.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163kmcylutn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163dshlcmfp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qrrjroqs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163qzghtueh.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163utugogrc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163evjhikie.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163cgfesmpq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tqwxsoom.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163peqstosj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163iutkylyo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lvrjynrg.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163bnxlmplb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163jxwlgjgt.html

================================================================================
来源：http://www.xuanzx.com/163kuwycovh.html

R. Bash 专题
来源：http://www.xuanzx.com/163gourmmbv.html

================================================================================
来源：http://www.aibaodan.cn/163fshuogqz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163sugekisk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zsnsbpvg.html

set -euo pipefail
来源：http://www.sxryk.cn/163dsyluhzl.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cedkplyw.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hyiygmjv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163hdtwvqmj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163esztqxzc.html

[R04] 位置参数
来源：http://www.xuanzx.com/163vgazciwa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163yxkbcpsi.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163hffrxohr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gpepnuka.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ryrlctef.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163yeqavcas.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163emiyqvmf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163uuryrucc.html

[R08] 数值比较
来源：http://www.sxryk.cn/163noexeugo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163yypcbovx.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gnivigab.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163flxlbaib.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163wcejtnaw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163gxlmssyi.html

[R11] case 多分支
来源：http://www.xuanzx.com/163negtrthn.html

case "$1" in
来源：http://www.sxryk.cn/163jyhjvwhi.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163tghxwcqn.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ptpwlfcz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163csezmrdz.html

esac
来源：http://www.aibaodan.cn/163okkfhubm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163soabczvc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163nvbfpuwn.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163hsrhsdnw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ppaoxghe.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jvvjqqkg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163epujpuuz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ozkponuw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wmiypjvn.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163gihwwzux.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163roeeyurn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163gglrcawc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hzhushdo.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163rmurqvgr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zirxznki.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163volwzxzj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163mmmvyjms.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163cssvgmlb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163durikoeb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ijoxlvsh.html

echo "${#s}"
来源：http://www.sxryk.cn/163jxrkqxgw.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163lffpvkgg.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163reepcyjv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163fnxvtdqy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jsikcruj.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163tefzxizg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tutnmode.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163nzlyunaq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163gnrqxczn.html

[R26] 命令替换
来源：http://www.sxryk.cn/163wfqdxbhr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163vfaovncq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163erjzyugr.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163qcacxjem.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163rkufwkda.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mnkicyiq.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ghrwymxy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163spftjstm.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163nrpefsoy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rzajarou.html

[R31] 局部变量
来源：http://www.xuanzx.com/163rttimoqo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163grshxbiy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163gdslkbts.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163sjzlgqdb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163obehswef.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gwontqlg.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163gyieucxj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163iwvuaeyg.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163cwtznrlk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163bdqprzxf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163rdwzdwtl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163gdijghlm.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163bermmoke.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163bcrznjzg.html

[R38] 管道串联
来源：http://www.xuanzx.com/163iroypcki.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163emsvxfee.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zzvbzgqb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163oemcgpfk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vxmsrbba.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163cxqhabsw.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163hzkrgire.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163skolmkvd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163esghodxm.html

wc -l < a.txt
来源：http://www.xuanzx.com/163yroyoxhc.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163prscjsny.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163eghgdwoz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lefjncix.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163cqrpfjfy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163oelbajrl.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163yxiiplgy.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163slsgczun.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163tuoatgfy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vrgxdrpd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kyinsete.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ksrmriji.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163nbanqmkh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163enfdpyds.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163eaxqmgnu.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ajieljok.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163bxpgkuxh.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163bypcrglf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163dxsvkqzl.html

[R52] 统计行数
来源：http://www.sxryk.cn/163vofqzawr.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lujcvxxr.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163bdrysvec.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163wgycbnzu.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163zcvowixf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163xvxceioc.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163embmwhba.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rinxzcsl.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nbnhwjny.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163hdgplcys.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ozhjrkfn.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ffahjixt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nulmwjex.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163eqgnunkx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163knbfsiyj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163onredrnt.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163hfhskgyd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fntuqeej.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163swzxwgev.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cknkhnmm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163tzfgqkyo.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nxikpztm.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tnlpvgkx.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163crbratxf.html

[R64] 结束进程
来源：http://www.xuanzx.com/163sbwutixr.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xanbbitv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gtdycuue.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163dtbzajxx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163lssefjde.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163fqdxnlmj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bbxnmsqf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rdirhxyp.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163bwtkxjjo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163nvdirvbc.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163sjhtrxmz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163qlpetgfa.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163rjhqcxiv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163znblcuiz.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163chfubfji.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163tupnzddu.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fxiqwmbg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163miiqrnfe.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ejmmiuck.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qxwlufaa.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163giuyigcr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163zmzenqdh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163cohknirp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163vxnlrybg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hxdqzaqq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jbpwsccx.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tdnksalp.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163wwwfxmzt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163cqcrzdcl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163mqenxrvv.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xdnljeoa.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bokiczla.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wfdfsqnu.html

time ./run.sh
来源：http://www.sxryk.cn/163mptvlxqp.html

================================================================================
来源：http://www.xuanzx.com/163yeseblto.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kpvnjohp.html

================================================================================
来源：http://www.aibaodan.cn/163sfgmtszr.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163rliyolve.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ziocarar.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163kivpuqwv.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ypsyrgvh.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hownbkjo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163zwcmizhb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ecetvdsl.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163strskrkr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163fgyrulrd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163wcmimmnq.html

strlen(s)
来源：http://www.aibaodan.cn/163bsxzbbeh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163rvtuuybu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163nolcaigc.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163nbuyjabf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163bnbbrtxz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vexugiig.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163obymsylj.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163garaxlsa.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163dnnapkat.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xnzqtrjo.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163bwjroxem.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163meybnuvo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qnytlkrq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163rybedxfm.html

fclose(f);
来源：http://www.sxryk.cn/163joblxtuz.html

[S12] C：写文件
来源：http://www.xuanzx.com/163twcbkilm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163irwdsbay.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ytdqqunk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163nonuyeju.html

[S14] C：枚举
来源：http://www.sxryk.cn/163pphfgqhh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uimienmd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vodtjwks.html

(double) a / b
来源：http://www.aibaodan.cn/163jjbhbiag.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mkskazrb.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163yvbykaio.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ytxbvuox.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ygkulohs.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163kmnbodfp.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163unqjofte.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163uhiimfis.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lfbmkzxc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vtqfhsda.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163klirxmlv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ejukgkpc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163lbeekgai.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bkvsptwl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ebrhrczs.html

[S23] C：随机数
来源：http://www.sxryk.cn/163tywyyfyb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163buyzvwwm.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163sqdakahx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163qilmvnke.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163xwbiknfv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163lvkudfpa.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wnouougr.html


<!-- 参考信息 -->