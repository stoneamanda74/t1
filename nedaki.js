外链999!wailian999！

[Q61] 移动平均
来源：http://www.xuanzx.com/163kdctugme.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163cktzcyyv.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163kgopncch.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tevvmihe.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163hqhnylyu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163nkxqjxwh.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163kvseczsu.html

COMMIT;
来源：http://www.xuanzx.com/163vdwlkwej.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163kjukhshy.html

ROLLBACK;
来源：http://www.aibaodan.cn/163hyjghhjz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163rhlgthxm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163taobxmmt.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dpjgfgng.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163juutjfih.html

[Q68] 保存点
来源：http://www.xuanzx.com/163wrthsdmj.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163qshvreca.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163iptcruye.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163izwfpewh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163rcmmtwma.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ulmyfbbh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163bwdwtbji.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163qqvaizcy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163puzlzxzf.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pavnwdkd.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vtxfvzgm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163pgycducf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163atgfaumr.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163qabkpcqr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163poartqso.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qmmxcoel.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163loymxywo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163aqgmvtyv.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163roatmhib.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163cjscxuez.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pjauxhiw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163dhidrznl.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163eoruwpel.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163bkydsttl.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163gcfsmfio.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163vidltjcu.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tiwrerbv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ghqdcmym.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163pgdwtycx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163elxmsjsh.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163vytbmvnx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163lvvvldaa.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vpzguudc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vhdbedlu.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163eaqdksri.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hcqvxjcp.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qytjwjxx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163fzblwcbj.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ouufkkvs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163hbjiqptj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163rdpltesc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163oygqzmey.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rkxzkbzi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163kngfcopd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163opdqrrjf.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163swqmphnd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163xqxcglrn.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163tmuoaxqm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zevqoeuq.html

================================================================================
来源：http://www.xuanzx.com/163dcdsgego.html

R. Bash 专题
来源：http://www.aibaodan.cn/163crsyrqum.html

================================================================================
来源：http://www.sxryk.cn/163lkjqihag.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163dsodrfyf.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163cuddprhh.html

set -euo pipefail
来源：http://www.aibaodan.cn/163bdeyvzfr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163zseceeyn.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163jxivnzsa.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ifclhtxk.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ukqexfzx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163cyjdfqse.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163sivaazix.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163gndpnobk.html

name="${1:-default}"
来源：http://www.sxryk.cn/163opoijudm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163adxmaoga.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163aswxmaut.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163bjrcbabc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vdmndfhx.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lucqtcsj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163szuaseno.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163eozapfxm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163kvtgsxum.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163kqvgtduz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qnyzdyso.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163wlulwzau.html

case "$1" in
来源：http://www.aibaodan.cn/163pjpuktfd.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163qwjuhdim.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rpmdvqmf.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163alyvrott.html

esac
来源：http://www.sxryk.cn/163uwgsnybh.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163qpkdwweh.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fwgkkyba.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fxoulrff.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163nmaxbzay.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163exynmwfy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163mhfqcfkl.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163dlcedbaw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163gtjginli.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163cxzngcbz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163iguwnxbq.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163lufvcnrt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163tmordnsn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ylknzbmg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163xzxddevb.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163euijcynp.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163eosrwxxa.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163giynohvh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ibfngbjh.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mowojqxt.html

echo "${#s}"
来源：http://www.sxryk.cn/163qkzynnbf.html

[R22] 截取子串
来源：http://www.xuanzx.com/163dxlkrdrs.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163jtrzxtwk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163brhxvufc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163cdueyhow.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163guvbxqru.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163xakqlbut.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163hatkllgb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163pxslgccd.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zakqdaqw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ccpdrdyi.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163soaffgwp.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163loniihqm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163rhobfpqn.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ijfhvbrd.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vafrbaex.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163lxwywbcc.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ufbqntcs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163yxvzvgdw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163millezvu.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163kjtaoqvx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ykkprvcl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163curtlrtb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163nrksruyq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ilxagjju.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hryhochx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mjaxlpti.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163shpxawje.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nabjimqo.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163tenxgqcs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163flyjwcqi.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mtictvwc.html

files=$(ls -1)
来源：http://www.xuanzx.com/163wcpyqdpg.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ryhrfiqx.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ktvgmnks.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163srklcxry.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ptmcitxj.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163lqliccmu.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163brrnpjcs.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163yjqzwgqe.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163yxxgnblo.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163xmvceoxx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jhnyxaxz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163uuojtddx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163vzbhbqcy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ejmihavo.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163pdrofocg.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rahjdesx.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163afqgowwm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163skxboiry.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163uspoemuh.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163evmitzfx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163otrbzqhi.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163gmfjetyn.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163nqhcarvh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xnqevdmu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163xyknmnri.html

[R50] awk 求和
来源：http://www.xuanzx.com/163sskhfwsy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163vypwfwiu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163wycknyqp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163vgocejsn.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ozaurnqc.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jvafaolp.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163rcgakady.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tgahzwfj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163iheejlto.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163amdvacyo.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xdprybvg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163phyxzvqs.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163vzmloekw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163cvbqrqau.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163sbeawpxo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nsxsujio.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pimrgtoq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163xggwiubt.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ncgijqcq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163rtxmqbtx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163cbxdcrei.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dhwtiuep.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163jaztehxr.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mlxbalib.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zflshzre.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163fenuuncq.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163elvwyury.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hxmvjjqi.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163knbwxwyc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pcbrpltn.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163aggkgoxm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163cuxgndjg.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163yutjopet.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fsmuxnfd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ilonqcub.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163uhhuczdj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cuyvnjyl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163qpsdogug.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163nrlywqpu.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iyivygtg.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163gnmwweip.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163unpqrxfn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ymlqnvac.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163lowseizn.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bwlhyfas.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163aamxcrnl.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163addncviw.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163iipdrwgq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163hkqnldvv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163uduqvaow.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163aruegtdw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163fxhfljzs.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163gtaxigpa.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tejqcxzz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163kogcyrtz.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163nfvydyas.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163oqndidma.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fsqzpnhi.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163efkjboia.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qmdfcbib.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ebymsomv.html

time ./run.sh
来源：http://www.aibaodan.cn/163ctdtajzu.html

================================================================================
来源：http://www.aibaodan.cn/163kezqgzwv.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vsuzudjf.html

================================================================================
来源：http://www.aibaodan.cn/163mreinqtf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ggfxkdde.html

#include <stdio.h>
来源：http://www.sxryk.cn/163awmtrljc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ybvncjta.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ukpxjhth.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163vjmrbfxe.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163iuthtfss.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dgzylcze.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163eqjrlizk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163fbboqpwx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163bvsnjruo.html

strlen(s)
来源：http://www.xuanzx.com/163owrydvyw.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163plhjnqov.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ffzceket.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fmeuwqck.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163iwuvevos.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163tkwkhifh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163qqatolxq.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163rljbdkka.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163bumrapss.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163apxpybli.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163zdccohuj.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163aaxmlpry.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163zorgdtky.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rujgvqlb.html

fclose(f);
来源：http://www.xuanzx.com/163tenofjiw.html

[S12] C：写文件
来源：http://www.sxryk.cn/163klgsrvac.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163lcanheoh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163buocomkr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163neebmxtx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gvlirkqs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vofrzudj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163qajkeozw.html

(double) a / b
来源：http://www.aibaodan.cn/163mrizeiun.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163jnhnslsp.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163iiocghdw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163crnkfonl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163rhjryncs.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ujoviqfo.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hdnieihq.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163exwncytk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uucuhpnl.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163fhojjide.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wljssprg.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163bbhscwng.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mtmgzcve.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163iftktzxi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163srzxouvc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ibplmmsf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163euggsquh.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163nudsqaui.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163oncmniyz.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163wmrlowtc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163dlumyrbr.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cdleaxzo.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163neydkwah.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nbzarfzy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ncnncrps.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163plwbgtfb.html

static int counter = 0;
来源：http://www.xuanzx.com/163gdetrias.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xjlsbkys.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163yrgjifdp.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163beihhfry.html

#ifndef X_H
来源：http://www.aibaodan.cn/163wbukaasm.html

#define X_H
来源：http://www.aibaodan.cn/163ygfzjfdr.html

#endif
来源：http://www.aibaodan.cn/163tvtkccgl.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163smpycflc.html


<!-- 参考信息 -->