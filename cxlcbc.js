外链999!wailian999！

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163gfaxffin.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bbaanvyd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ktqygcqi.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163anhksiyc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163allapygf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163icwzffwt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163hrjqnibz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163mcfkajgk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ixfqgsoe.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163tnmcpdpc.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163izzybtnw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zirwhkoe.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163qtrwgsng.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163yzclaihb.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163iyywwzga.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163rrxnwgqp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163tltpnmew.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zrwiymxx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163oaysxabo.html

[Q57] 行号
来源：http://www.sxryk.cn/163ikwisbda.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163eszogtee.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163uwnqemor.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163untbrzpl.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163uhfvuzrg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163eycsivec.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163sjllwkyi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163piowodmf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mrzumejv.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163rmspoohk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163gqnyfobm.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kqtzbrgx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wnalddid.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163abiregqd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163udsghpll.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163lixcybfx.html

COMMIT;
来源：http://www.xuanzx.com/163adimwqtm.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163hiaryhos.html

ROLLBACK;
来源：http://www.aibaodan.cn/163tqhbcdjy.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163qszsciwc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wlqabqhb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163wvpccetq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163tkdpmkdx.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cydkozcz.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163syhpbxhy.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163kraigbdg.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bgszpoug.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163fnpiyxnx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ikgjjovf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163jtoydqej.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163fsupieth.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163mainothv.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163gzjkgzgi.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ifyeviuz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163xzvzrpdc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163plwhulst.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163nfyinzvf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ranftfop.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163sphvrwmg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163kgactsau.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vrkipkzo.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163hzstnstp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163wdlbpwlg.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163nsuoksgu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163tmmzxwky.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163innpqisv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163aqwfbhmp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163inpheybx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163tvmqarlb.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ocxtmpfi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vccgsgsk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163flksuosm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163nivusqov.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163hducbdmh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163fvlhrytv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163jvlbahmk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cypnwtvq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163oxagcklh.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vxjdqhdu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hxkormik.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163sdyesoeq.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qkthpltr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jizdfuco.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163hcuaczbe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163cpskrcrz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163fhrrurya.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163uxguoeye.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163dlaeltfk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163uljdgqpg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mfyngwur.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163jtmxzytv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dhuhkfut.html

================================================================================
来源：http://www.aibaodan.cn/163tfxczurx.html

R. Bash 专题
来源：http://www.xuanzx.com/163biqagchf.html

================================================================================
来源：http://www.sxryk.cn/163usshmhrg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163crpyjmyg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163uhjvwpwh.html

set -euo pipefail
来源：http://www.xuanzx.com/163qrzrngyx.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ppurxdji.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xnpbwbzs.html

[R03] 只读变量
来源：http://www.xuanzx.com/163dhmsdeuw.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lvbiccel.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ujuachzi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163yntfuqpv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163niytbemz.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qjqanwlv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163owrxyavj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163mwqaurhm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163peysmrtf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ilmoqrvh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163atexbxjg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163iivgwckn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wgqanosa.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163iaqvsffn.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163vvxrbidk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163liczuqzd.html

[R11] case 多分支
来源：http://www.sxryk.cn/163toloelsj.html

case "$1" in
来源：http://www.sxryk.cn/163hzzvdqhf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163mzdrawfr.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163doqlcjxr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163esggzxdz.html

esac
来源：http://www.xuanzx.com/163qymvtjpy.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163hodmgonk.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163wejzfjqp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163cofmqial.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163wwghywlf.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jckjpawm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163bojwkoov.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163oummrrta.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163juxxpmhb.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vslkqyic.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163npllzrmm.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jlrfxhvo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163tjwsgkow.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163eidncvcd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ldqjfopu.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163otefitkw.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163dmviohzn.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163pxprzhmf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nedewrxr.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163uiuzbovc.html

echo "${#s}"
来源：http://www.sxryk.cn/163nzheyoxq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163moxtznbj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lkygtneb.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qvgmnqmq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163vjtarpto.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163kxfvdyyo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163kalamjtt.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163kljeeird.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qlhrypxo.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xqcpzfvd.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jbavjovo.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163mzwqwgwx.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163rhgxhros.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163njesnsea.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163fvomfugu.html

[R29] 定义函数
来源：http://www.xuanzx.com/163hixlinhr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163oipwzhwz.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qjbyzdse.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163bwvcumrj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163uvqzesij.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163bgyxeohu.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163nhpcxkck.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163uedrtzib.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163purxffch.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163esndvhlx.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jzqaynds.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ucgvxuka.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163huvyfzoy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jshpuleb.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163avvucwrs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vmspktpn.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163osqrmncg.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ztglbeds.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163qbyqxzlb.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163cjmhfyrt.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xnlkufnq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hmiormgg.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ynwifsmh.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163imubcdpy.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ptnnnwsg.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163tnjaprpu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vuoytgpx.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mmlmxtog.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vntongnt.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163aqjpeijj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163szzorxmj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163dfppsrre.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163agrrtlqe.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xnfslioq.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163uexbwzsj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163giaoboed.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jzccgfym.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163satbnbzz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ytzjbqrh.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163qikecipm.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163irstgxwx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ornpgkjk.html

[R50] awk 求和
来源：http://www.sxryk.cn/163aiynbbdn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163aroinsgk.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163jdekfxbc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163rulsgugk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mpvyixig.html

wc -l a.txt
来源：http://www.sxryk.cn/163xvaqjkvd.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vymehdra.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163rxldcedz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ieyhlewf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163syizmtgn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pqkwmmym.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163eegzufqz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163xqzlreqr.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163kheknyjx.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163kcmyqatp.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ecfmbmkk.html

[R58] 下载文件
来源：http://www.xuanzx.com/163sdcohbjk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163urjprpdx.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163egkhsqhs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jbspbarj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163cncwzzwy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ppduxkld.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163vtdcooqv.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nmrbyjgi.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163gwwpvndz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163vnchfott.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163zzetrflr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163accqudkc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tpyrnbzf.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163drzositi.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163jckrlpau.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bdxjpolq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163rkxzeups.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jcttxgyy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163lgupsddv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163cyhxfjgb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163vomrckim.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163psmfrghk.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hkqpxday.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163qszdsevi.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163syhbzylw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163cakwjqnq.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fweseibb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ixwfhjcr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163joduelxp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163kjeyjfby.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ucpoqyzn.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163dhufapbg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163euyvcfiv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163aygfdxun.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163cmrwymni.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163efzzdbun.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163smdppslc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163lcmrukxf.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163vkhbjapv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xxaqmeei.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163fthyclne.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163revkidea.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163fufkvtwk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163oogaiqjt.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ogbtrijp.html

time ./run.sh
来源：http://www.xuanzx.com/163egqpjgao.html

================================================================================
来源：http://www.xuanzx.com/163cwrumtcj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163rvqjlvif.html

================================================================================
来源：http://www.xuanzx.com/163lglgzcqz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xatswdrm.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163oydwqhkq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163krvqqazw.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163tdyonvif.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ljncyboh.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163iznehlom.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163foveamrc.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rjiqhian.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bkpmxkve.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163zfkntxdy.html

strlen(s)
来源：http://www.xuanzx.com/163xncihjyd.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163qahzgmhq.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163juzbogtp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163dhgjzqwd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163daxdcmtx.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163xewbrzzv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nezelosy.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rrpbjvod.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163xvkciwav.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fgqjulec.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163rhkwomwn.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163bjhmusbm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xsavohib.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163cxfchkab.html

fclose(f);
来源：http://www.xuanzx.com/163qvuokmwf.html

[S12] C：写文件
来源：http://www.sxryk.cn/163mdzawajq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163iovnjrlk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163btbiocmb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ptdapfwe.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ucvfahco.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ctzvampv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ayrshbzx.html

(double) a / b
来源：http://www.aibaodan.cn/163bsfxniep.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ugprrwwg.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ntnxyufv.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ksubjyqk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vhidjfbe.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163dpwtywft.html


<!-- 参考信息 -->