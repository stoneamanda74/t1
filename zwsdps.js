外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163zikldsaz.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163pcblbcal.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ucmdqgcd.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163oqxhdyuj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163jfjuygmb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163vyojenjo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163zwfvzrjs.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163eeudlkjg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163lmusnwjg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163rzehhhfj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ikhmjoxn.html

[Q57] 行号
来源：http://www.sxryk.cn/163oejqsngl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163onkwbnsv.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mcynurey.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xjyjjzai.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163oovquicr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163wbnxfkii.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163jiuigyyv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rtxynmck.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mpyizqzi.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163tppzzjju.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163myuwsvtu.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163umabrfuv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nebrvoqv.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163egcnvene.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163myrzohbm.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163hlakvtze.html

COMMIT;
来源：http://www.aibaodan.cn/163enbknaxe.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163lgklkkrp.html

ROLLBACK;
来源：http://www.sxryk.cn/163ldodmleg.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163akgbdyto.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163cejlegyd.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163yugbhvbs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163aidsjuge.html

[Q68] 保存点
来源：http://www.sxryk.cn/163exmdbhmw.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163wvizlibt.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ybteklvz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fryvivlw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ctditxtc.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163fudoectc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163lldpdsmg.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gpwnqoub.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bfjzogpa.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163cdrzrypj.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163zkdfrqeo.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163khrpdddq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163otsfnqls.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ntnbhmet.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ngadzeqz.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bnxtcpgd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163abzbtcfc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163cxldkrye.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163axzeupsz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bqkkbjkr.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163gtpqtcas.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163luoejxqz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163aimygfvy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163kdpiicvm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gmzijvmx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163gafnbcsp.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163kvqqlfop.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xpcivbig.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hifzrufa.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163bdpmerwk.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ngonyisj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zrvngdse.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163dtvnrnfp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163hoepgrsb.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163fsajmtvv.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163nmskljca.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163oglsypak.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163btturjfv.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bqqqwlbn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163odkmqobc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ozctfnov.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163yreichxe.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163keolycvy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mesdvjwn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rotmjyst.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163fiwtlrez.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163wmqvfjlm.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163xhzwpnbr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163fcvsohdm.html

================================================================================
来源：http://www.xuanzx.com/163hyrfhqcy.html

R. Bash 专题
来源：http://www.xuanzx.com/163nwxfjlpc.html

================================================================================
来源：http://www.xuanzx.com/163lzahcvze.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163coyzslhe.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ltrophvt.html

set -euo pipefail
来源：http://www.aibaodan.cn/163usshflpm.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163iskehypf.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163rlvfrcfe.html

[R03] 只读变量
来源：http://www.sxryk.cn/163njlyawtu.html

readonly PI=3.14
来源：http://www.sxryk.cn/163slosuhsg.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kuxwklrc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163llxpgnmb.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163olwmgaps.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mgrhapvz.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163rnprifhh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163noducipe.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ipmpxnnm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kepvyfdp.html

[R08] 数值比较
来源：http://www.xuanzx.com/163cscohxfs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163totbakwu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163myqqgonj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ubewhhzb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163dmozkkrw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163uvxkcfte.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ojnafssj.html

case "$1" in
来源：http://www.sxryk.cn/163yifvdywh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163slbpqylf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163iojthuks.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163pjkaiqzz.html

esac
来源：http://www.sxryk.cn/163lssjycpd.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163sddxkwzs.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gpkcmfrp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163whvbzwjz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vdxqgcxm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163dpwafnsl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ruwbbysq.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163rpkwctpy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163xqnusckw.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163abdkgrxg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163paixjhvf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163gzokcbhc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163totedkgt.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163mmjbdqtw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163itkleuus.html

[R19] 数组长度
来源：http://www.sxryk.cn/163lzsbmilf.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163wtykmzkt.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163rxwflgai.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ypdoferd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163duldldus.html

echo "${#s}"
来源：http://www.aibaodan.cn/163dsvnxqxc.html

[R22] 截取子串
来源：http://www.sxryk.cn/163skhezkhu.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ecpizubf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163qpofbvhy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hnyuyzse.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163zfiuiwcn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163toqfdait.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163karegcnf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ubdfeufu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163kmtqorzd.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ghrhbtst.html

[R27] 算术展开
来源：http://www.sxryk.cn/163uctvhpgj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163vwhixznm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pjbezvlo.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163geeghkfb.html

[R29] 定义函数
来源：http://www.sxryk.cn/163aqpbkbtl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163yawkjyok.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jgeytyvk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163nlkkkrzu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163axbogals.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163bqlfotrt.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163usvuwqmy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163kueoijby.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ixhopybg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163fpaaasze.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bydywuma.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163abztsbcc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163eexzscqo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163zbpsbqzr.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ixjdwxgm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vsnokxpa.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163bekmhwfe.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163rlrkeigt.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hwcberwx.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163otylvfdk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163owglymbk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163neyafjsg.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163mqxxsrvv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163dkcjqzwc.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tmznidhu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163xvzsesvv.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163nzhngsys.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zivbbksg.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163xgpzucck.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ybllsohq.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gyhbueem.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163cziwqvgy.html

[R45] 批量删除
来源：http://www.xuanzx.com/163pgjkistz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gulrpeks.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163wkcbpcew.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163owhcpikz.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jwlfufim.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jzrcpzfk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xjnnzytd.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163bynwafns.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163xdgpoyod.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163rdxcrbil.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163kcshujum.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163obuzjhki.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163mvyljnoh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163kqgjyryv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163sfbpwjbi.html

wc -l a.txt
来源：http://www.sxryk.cn/163agjizmyv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163hfaawwfy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kiwqngjr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163wrozfjcw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jsypujtm.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163fwqsmwso.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163lzezevzw.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ryxkrfll.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vckdpxnw.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ckvxycks.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163zhwouuiy.html

[R58] 下载文件
来源：http://www.sxryk.cn/163jjipamir.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wwgayjxm.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163bfosvjko.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ihjccfct.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163kqwaijuo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qvtndzqa.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163tkrruldz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vmjnhuap.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163fedvxgbu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mehsuqsf.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kevhtwky.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wvnywgrz.html

[R64] 结束进程
来源：http://www.xuanzx.com/163kydlefjt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163osiqhzev.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cvwoqumi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163svooodlz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163mqmcvakj.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163otdzwohi.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163qfumslwg.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vztdcsba.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163cgvlvtii.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163sqjolofz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163uhbhzzdt.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163fbbmijnv.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163jitrkgfa.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ibwyzomd.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163bjrjiqgc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163fpbbalqc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163vpvhcsbq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163btzpvovn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xzmjujjj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lugwrvtb.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163cpuuuchc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163iirrqxnn.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163qielmqrd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163suogqwxl.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163eqlrasme.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ooaqvhxt.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mfhuyfhj.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163qdhduqld.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ovooqvqz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163vzweaxwe.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163eunjwllo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163rvizhqay.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163gtxdgyge.html

time ./run.sh
来源：http://www.sxryk.cn/163ydocdaor.html

================================================================================
来源：http://www.aibaodan.cn/163gxvgqgqo.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pnmdwrnv.html

================================================================================
来源：http://www.aibaodan.cn/163ivcsvftw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163swdbykii.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163fguxpmdj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163yopseime.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jvtfdvxx.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163brsogbrg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163dizgckas.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xsnhuntb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163prfnozyc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163tpcdlzqs.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163dsvzmiqv.html

strlen(s)
来源：http://www.aibaodan.cn/163ixqvylja.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163sqranvpg.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163pbnbvcgm.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ldjolpwn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163qqjowqky.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163szlbxhho.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nadpioei.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163vptcryds.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163iicqsdam.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163tbavmuba.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163anhkdrps.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163wkakvqul.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ujlhtslb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163svmtvsam.html

fclose(f);
来源：http://www.sxryk.cn/163zlrjlkwf.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hggadphe.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ybgkpjna.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163uewwsqpq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ugecndvv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jmjsvtcu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fdjzkqew.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163rtnmyxcv.html

(double) a / b
来源：http://www.aibaodan.cn/163phfpxnsb.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ipxotepu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163fkpimcqf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163tkepjgsl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fibnimky.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qbluwihk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163daddpdno.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163gktyqbhs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163woctjyvl.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163phpxoxno.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163onztsvhp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163bndlntot.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163yewomced.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163plndeyjs.html


<!-- 参考信息 -->