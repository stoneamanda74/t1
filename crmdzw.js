外链999!wailian999！

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163jmblhwhz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163btlybwik.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163qimpbisc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ulwjqguh.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163rppgyjnu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163rthzagxr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hspezabj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zanebsge.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163qsduyjwi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163maufwdbz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163eoqoacuj.html

COMMIT;
来源：http://www.aibaodan.cn/163ayvbriic.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163qvmtzyig.html

ROLLBACK;
来源：http://www.xuanzx.com/163zbgxypuc.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163tgnalpwc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ufbmrnex.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163brkrcuvl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163sqsbaqfn.html

[Q68] 保存点
来源：http://www.sxryk.cn/163zsmwbtat.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163nazmjpza.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163kfsqexpc.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163taosbuoo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163exbqyvgd.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gijkewhp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163wsiuelik.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163pominfhk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bmkgiapk.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163qqtgqylu.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163nbyvjjkb.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163rpuebbxw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163npunnhja.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163edrxznxj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163loqdudfq.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ptoycgyg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163qyxfkght.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163rodvknnz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163assdxaig.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163rnxnqdke.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nxtxnvsi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163oneyzreu.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163qrqlrjns.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fvogvqow.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163wjbjdjwl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163sdwwanie.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163nalyzmqb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163judagmip.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163gilrcsba.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163auqnxtpd.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ssdrqwbo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163drciksde.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163amgzsasw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163gsldvscz.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163jtmxssxy.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ibhjqqxu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bofxufob.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163drmtlfme.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163jomdomhi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163yvlwnwbh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163uqsgjbvj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163weacfmss.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ogrqkmiy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ahxeafpn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163rgtitzlz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163amjeptcn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163gxfdilzv.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ztdxycvg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ukzwimwd.html

================================================================================
来源：http://www.aibaodan.cn/163mdchwtws.html

R. Bash 专题
来源：http://www.sxryk.cn/163xeomchzy.html

================================================================================
来源：http://www.aibaodan.cn/163pguccccd.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163gqzybpaj.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163lmcvtsnk.html

set -euo pipefail
来源：http://www.xuanzx.com/163trpxbkcm.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ayevqnyy.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163zncvbsxp.html

[R03] 只读变量
来源：http://www.sxryk.cn/163eqsipxjg.html

readonly PI=3.14
来源：http://www.xuanzx.com/163blvyodht.html

[R04] 位置参数
来源：http://www.xuanzx.com/163yfiifrwh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163uswjaykd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163qsqalrqd.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tuigdgip.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163kbodgvgz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163nziymmcj.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163pduqrnsm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zwbnvqcb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163unsuvlcf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163lgnrqqgs.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163oygaajlo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163klzuskid.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163rjurwugj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fyktslhb.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ecsensza.html

case "$1" in
来源：http://www.xuanzx.com/163zymkesrz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163aqcacdeg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163tcyjbdxi.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163sekgxqyz.html

esac
来源：http://www.sxryk.cn/163ckgqaeeo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163nxxbnqap.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ytvpseww.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fhpkevck.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ykbnzkhv.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mflrsqpk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163cccwvuhq.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163kzehszog.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163hiuaqhme.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163wkazxtaj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163wczokaas.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163fadxtyax.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163jwogmmwy.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163dhvhkmqw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wemhxyho.html

[R19] 数组长度
来源：http://www.sxryk.cn/163aunrnxqn.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163tmforyox.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ycbdrxbe.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163kpxdsban.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ieqpkmfl.html

echo "${#s}"
来源：http://www.xuanzx.com/163ggchbddz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163tfsywgpj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163tjyowuro.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163xxkqjogx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163pevhlplk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163mostwnee.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163yipmofzl.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163jxawfaxp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wxhejavq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163gvzrbnlj.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vubctyhg.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gabyezvp.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rbffsjpy.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163jiwarthf.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163lgxitnpc.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nbnyrwqk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163mawayhpz.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gwjuczke.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163zldjilmc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163vmylrigh.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163lzwwdzww.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163yjtokhjq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163wrxpdoxk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163pjyluodr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163wcwzuznl.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163rtkmvzjf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163echvetvv.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163dswkzjox.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163eiefkbrt.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ubgynkbg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163uwhvvlfu.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jepqlrvb.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jefmyckr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163huiybmaf.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163xabwewyh.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163oyvfupqk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163sdlvuipi.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ulublgyy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ntijtlbw.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lsjfhbeq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163jgoizstm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163eckgmtry.html

wc -l < a.txt
来源：http://www.xuanzx.com/163itrxlhdm.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ixctnguu.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dmydfigh.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163mdgdkqni.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163inlzqglk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163zugpnlil.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ppbttuvc.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163tqcjilcs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163upzhwpeu.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tmdhlofd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163uaxcgpfy.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163aeggsnuh.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163sdvjiolu.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163gjzlzqfo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163hscwpuzz.html

[R50] awk 求和
来源：http://www.xuanzx.com/163cqqzkwco.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163srxhfhyy.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163jrjtptjx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163elzrgloj.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163hyrqqycg.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jcdfgcsc.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163iybqyuhf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163meialupa.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163cggmfnlc.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163iqrdecbz.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kqcryzry.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163mywafkyj.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163afctzrxp.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lseldfsk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163oycidkhn.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ztqkwmih.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163snfadaqi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163uagaivqh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mgaymwcb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jzqxyvrj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163duuozwzo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163zbykaouq.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qckicqhp.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163zatpiprm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gwvrtpkz.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163wmjppymc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163lwapzehk.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163oonrwcwz.html

[R64] 结束进程
来源：http://www.sxryk.cn/163aroekjdo.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163cbjiidqe.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163iohbfpbh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gcnaiwmd.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gssefktf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163poucwncy.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163neqdjsae.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qqxvjrnz.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163utckebce.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nyueujku.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163tqlonlca.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163jywyziad.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163wsaiihsf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163mesgdjda.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163enbmqnys.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163onbzcrod.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163lyqyoldt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bhwckqwo.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zhtgddce.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gcffozmx.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163nxwcawwn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rokfjqlu.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nwgjlgse.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163apohmcek.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ivxygwdo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qschaqyt.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163yagmcbzk.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163orsfxkpa.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163cwhytgzy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163tvyidlqd.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xurvvtwb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163sexxfpoh.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163hszniokv.html

time ./run.sh
来源：http://www.sxryk.cn/163zabgixki.html

================================================================================
来源：http://www.aibaodan.cn/163bymexcfr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163snsrkgoj.html

================================================================================
来源：http://www.sxryk.cn/163nvfyczof.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163qxwbrrij.html

#include <stdio.h>
来源：http://www.xuanzx.com/163khkxnghk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jdxwskoi.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qkhfaozp.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163slguaavs.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xnptbwbr.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163mxvzboor.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qgncsqnr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rmlsqtoz.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163sulfjmuq.html

strlen(s)
来源：http://www.sxryk.cn/163bpjdsdnx.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cetbzkdi.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ujeubkrq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163rqjwuuqf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163hvfxzkxs.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ijkgxwvc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bwosjlid.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163nssjjkuc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163utexfqfy.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ksvqhbga.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163obwyhlir.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ldawelcf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mqnqovxc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163mfzagngg.html

fclose(f);
来源：http://www.aibaodan.cn/163pdzupabi.html

[S12] C：写文件
来源：http://www.sxryk.cn/163esccmjvg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163afossgml.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jfdaytkd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163maqezghh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163dqlbozqs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qxftcmgr.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163zqppmibd.html

(double) a / b
来源：http://www.xuanzx.com/163najdiwng.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pfysmkdk.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zqdvoodw.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wmbitxns.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163zgbhgtos.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163buwyasjp.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163bcrycujd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163tevzzzzi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qkiddexa.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xqzidnlv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vlpwhjed.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163cfwfpnop.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vpfnzpdz.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dxtqguut.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163phwzjayx.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dthngbku.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163grkabadi.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163haiqyeqq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163huvenfbj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ccpcsgqt.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163irhhbivo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fiaqmpvm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hxbxziuh.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zyyxfbef.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163mfnmbogq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163whdbhxkw.html

static int counter = 0;
来源：http://www.xuanzx.com/163sebqlknn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ufecdacb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163gjikipcw.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ahrwsvuz.html


<!-- 参考信息 -->