外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163nwkechzr.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163odhnwcip.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ktkpjwzi.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163hrtqygdf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zwoqzlxk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163cfpcmxej.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hbhbhmdm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rzjiblde.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ikqgdcat.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163achkugcx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vildvkfi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dcjfkigt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163bwzftehu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163yftknioh.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163wosxdgfg.html

COMMIT;
来源：http://www.sxryk.cn/163zcrhgtzv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163sjsgecka.html

ROLLBACK;
来源：http://www.xuanzx.com/163grpvggqv.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163msqnqycr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163agdhmvzq.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tyeagdpt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rjhcwtfl.html

[Q68] 保存点
来源：http://www.xuanzx.com/163efaiustu.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163raelzgis.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nnzvegdx.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163fglwillw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163duizrkne.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ygaonsio.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163chcxylpp.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bcfjglyn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163vczunhwq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ilzihzdw.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163sevyofgq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163crfxphoo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rberhiev.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ecgzcwzk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163scebgpqs.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163lpksodbt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163yzluuxvw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163etfdhwcu.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zyshfyqz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163yzvimjpi.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163klszpbrr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163kjnzjmti.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ocffppnx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163kgdowbmn.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163gmmbhkeu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163mbhmzwzz.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163rhwxxjpe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163amvbylav.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163tcumfvdq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ztskzdwv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163vhrfysff.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163rteiagqa.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lbilcxdy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163rudyngnk.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163gyzpukdi.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163tefgtjgd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163oyekwytr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ymzyenbj.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zdnjluyc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ozrccalj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163avorqjus.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163wwlckwze.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163lgtcppof.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zfdxohxn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163pwoqhbfl.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163udgwarnb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163oftyzwjq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163txuilqan.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nvvqbvyz.html

================================================================================
来源：http://www.aibaodan.cn/163qufidpck.html

R. Bash 专题
来源：http://www.xuanzx.com/163kvxzqlxj.html

================================================================================
来源：http://www.sxryk.cn/163kskroeol.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jmrnknjl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qmlinmvb.html

set -euo pipefail
来源：http://www.sxryk.cn/163ftbrpwxl.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ygxprscb.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163mcldwmgt.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163xaqqyqpn.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qaoolitf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ekqqcliw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163kqfwyxzb.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163zecmtfrv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xyprlwdi.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163xcodoxfa.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kdhpkcgt.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163jlfurmqe.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163uehibcix.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163slqaypwl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163etsndhik.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163pzugtkcw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163dxirjbgd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163bewzsaft.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jvwluijz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wyvbszlo.html

case "$1" in
来源：http://www.aibaodan.cn/163taovjwer.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163rbjegsye.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163yfcylubp.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qxwiuoel.html

esac
来源：http://www.sxryk.cn/163hybwjjzt.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vskrfroj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ohrmvggs.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163swvybjsn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vllowzel.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ljybhrik.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dixppszo.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tmxsihkj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gqgrzdez.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163wqetzfku.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163cfqezlzc.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163fubxuwdy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163okviqwww.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zdolydwh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wieblodq.html

[R19] 数组长度
来源：http://www.sxryk.cn/163sfyilern.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zvpvoajv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163sfbpsuiy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163pniwxjzk.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163gpmrehgz.html

echo "${#s}"
来源：http://www.xuanzx.com/163cmedysaf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ttxvhzoq.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163vzsaekid.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163rhibztiv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jkowoaad.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163zcczxtwk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163gduglwcn.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163txlhkkph.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163uihssaju.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163qmqqmciz.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vdlhoeec.html

[R27] 算术展开
来源：http://www.xuanzx.com/163yezoiidk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163okpemsku.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163gwkvpwfl.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163yurfbiej.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qcnqhrfj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zhboussr.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gitddesl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163unbnulza.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ybytehrb.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fietgafx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163gdukabal.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163pmtnqtlr.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163mapnzkpt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163qsynoeor.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163nrzmauwd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163infczlnw.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163fydnqypx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163asqzrepm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163piusiluw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163hwlcxcst.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jjcxfdsk.html

files=$(ls -1)
来源：http://www.xuanzx.com/163kuwpdsxi.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xattbnei.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bitdyhjm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qlgcaiwp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163eplwfvvd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vvxzjkhc.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ikcywbjk.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ndevmjsv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ipvrkisw.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163rtxanzzm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163enwmvpbv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163dbjozrhi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ccwuxzht.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qfyznijg.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qtxxhhnu.html

[R45] 批量删除
来源：http://www.xuanzx.com/163kbuzycrt.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163pwdcsodp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163rceqfzoa.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163gsakgelh.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163zpkpfzvu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jachnjkw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163gpgpxokz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163fqflkhqf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163mcucommc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cvwcruzp.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163oekqhwys.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163bvdxzhay.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ughqlzsq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wouhywsa.html

[R52] 统计行数
来源：http://www.xuanzx.com/163btuilsuj.html

wc -l a.txt
来源：http://www.xuanzx.com/163hofaxnax.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fermirtv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163morjotku.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lhpziwoe.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jnmfmgtx.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163tniozqzg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163nfgagvos.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163xmdmgjjd.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ejhngotg.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jtfszizb.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163juyofbcy.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ejlubvbp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163luaakwrn.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163njhbyrcq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fpllthin.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163nmggpbfd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163sscawypb.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rqpotoao.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qvmnvuue.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ojzvdshb.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163uajkoxys.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163uqhpmgqi.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163eyapdiwb.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ozqdwehz.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163dhgitssj.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163qelxiuan.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ozcayvub.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ucvbhkbs.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fhxglpmo.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163iqjlnsof.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163msahzowx.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163cdzekjqh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163tcivnozm.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163eentqeha.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163txicrkpy.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xxihjdur.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163qqqxpazo.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163imnywaqv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163qbdtzdds.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163vsgxmebu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ejknvrwh.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qrpazjoh.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163qowzeadn.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163refggrlm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163sgfuaclh.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163bxnmyypa.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163fjqboyms.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hyeaahdb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ugxrzavc.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163rdwhguej.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163fnuzuqes.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163smtnoane.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zxetppjc.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163bkkwtxpq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163tstwficd.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163syajiflu.html

time ./run.sh
来源：http://www.sxryk.cn/163nsjolrrx.html

================================================================================
来源：http://www.sxryk.cn/163bkczgele.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163idngkyfe.html

================================================================================
来源：http://www.sxryk.cn/163vczlpdqy.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ytiaumyi.html

#include <stdio.h>
来源：http://www.xuanzx.com/163uikdthwd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163xgxttsml.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cmdcrzon.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fqrbfcnq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163prmpchml.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163tafufelk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cxwnwnov.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hpnvgeec.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kndomrrw.html

strlen(s)
来源：http://www.sxryk.cn/163yknnedho.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mognxxjj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163vbjhzzgr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xbvxoyjw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163koyvveaa.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163sdsbdkwo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xmnrfiss.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cnmjokly.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163uwfnidar.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163gkcyobpu.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163oflmsgye.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163irkydypw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163sfjdopvd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bieltzlr.html

fclose(f);
来源：http://www.sxryk.cn/163puraqfcp.html

[S12] C：写文件
来源：http://www.xuanzx.com/163cbdvdzda.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163uafrnulp.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163xxlrdxna.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163cisacnhd.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xnnaajub.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hshvugzf.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163wjkjkulr.html

(double) a / b
来源：http://www.xuanzx.com/163fpmqfvfa.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mbjznyye.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163nqljyqsk.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bctoldjc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bglalvxx.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163fobozosi.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vbftkpzz.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ggqrfogd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mbipevie.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kxqlixnz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hrujomxy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163cklxqtai.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ougldseb.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163oismtajn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163aspwwggu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vscsvarr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163mnixqywi.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163kenmuiuw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163wbyiqxmw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163zewqjebf.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ryjxdtre.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163zofufyqc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163sglrzlri.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qdpcjymd.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dsevrakj.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vlerkomw.html


<!-- 参考信息 -->