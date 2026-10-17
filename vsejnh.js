外链999!wailian999！

[Q61] 移动平均
来源：http://www.aibaodan.cn/163bpygbksw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163jcagihpv.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163rywgpkkw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wamkczof.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163sppohomw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fzmvhroe.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163hplilqre.html

COMMIT;
来源：http://www.xuanzx.com/163mgbqhjur.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163uoutkgwh.html

ROLLBACK;
来源：http://www.sxryk.cn/163sypvzatx.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163iyaefhio.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163byeleexz.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163tllecfre.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163abgfofzu.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tnmitwun.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163wybiffeb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163tjlikwig.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bphoadlc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163gfppeizh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ojhhybtt.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163folaxxyh.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ydpochmc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163mpxzibdg.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xsxdfvca.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163xecjrqto.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163aaqkoxoz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xzexkhkx.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163awdfbyde.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163peopqkqc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163txsalzba.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ijuapezi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163hmuywpwr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163pmwzolxt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cvtknyap.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163exivuwff.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pnaaahfi.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163dbpqyjsx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163iywpqtry.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163qvzyuthv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163jgkguvjn.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163vwflpnja.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163pewjgnjx.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163xhrrioun.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rexomoke.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163lhbqalyi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163btvluzuz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lrtmmabb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163hombluxh.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163qpjrrqae.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163qoyxhocz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fkrdvrzk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ijpzshhp.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163grigtjqv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163msfzetws.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163snedysmh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vzifffig.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163gjawjcua.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163wrzydrqo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bokttnth.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jvgnawiy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ogoavltl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163vuwdzvlp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zlrqdbdb.html

================================================================================
来源：http://www.xuanzx.com/163csadhlpa.html

R. Bash 专题
来源：http://www.xuanzx.com/163reozqewc.html

================================================================================
来源：http://www.xuanzx.com/163wdzsnhkh.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163eputsyzi.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163tbsfspiu.html

set -euo pipefail
来源：http://www.sxryk.cn/163nxjcytet.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bckssbwm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vvfdgyex.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qvyqmevp.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ujqwcgzx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163lzbmqmvz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163lidepoam.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163cumemeel.html

name="${1:-default}"
来源：http://www.sxryk.cn/163swbaxbyl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163svkazukv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ittqccik.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163avhbqvmy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163iccabhsd.html

[R08] 数值比较
来源：http://www.xuanzx.com/163jigljrvl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163axbswbms.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163wsfloqez.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163hfhbtpdu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163axgfyxel.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163lfkvovhm.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163fyiefsee.html

case "$1" in
来源：http://www.aibaodan.cn/163jefnnwhs.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ekpptnom.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163crbcjwgy.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163katxcksf.html

esac
来源：http://www.xuanzx.com/163crdilwlo.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163uaozuwvi.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hovyiytt.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163isvuxpei.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163kqxnmvcs.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163sliqtsuc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nwcrtjbk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wztfqbkp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163rmcgushp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hitfueaz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163uunmwbfv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163cflfvwhv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163horqcqwb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163dxhuxfbx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163sujuttom.html

[R19] 数组长度
来源：http://www.sxryk.cn/163lrhqtvti.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dljcqksz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ojthnhon.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qprwivgd.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163xmezxzrr.html

echo "${#s}"
来源：http://www.sxryk.cn/163xkhdtxje.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163tzttaofr.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rfeptmrv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163isjqxssq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163swhwdkhx.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163oupzjtdo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qjyazodi.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163igjmqkaz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163tgtnqsce.html

[R26] 命令替换
来源：http://www.xuanzx.com/163vmlhcbqu.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163jvawoqcp.html

[R27] 算术展开
来源：http://www.xuanzx.com/163cuxvegui.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ztbwbyel.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163xngxoywb.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163fldzldst.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ugvaptzu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163nmxvvosg.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wjtwvdqe.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zgcbatnt.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163anqduklj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163qeetkczy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163irjbukak.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wekjzwnh.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163dhrkjlzv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163owatlcah.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163nzhothop.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nwdhhqix.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163etgrsiyk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xkqkxnpq.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163sxyfqhjz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163aenduloa.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163htgbxjyd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163rfznsaqg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ckohjwjs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ihpsuong.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163twohtcsb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zdwhizkg.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163roczrhty.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163cuivitif.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jkdcdkqw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kvrykttq.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163dwzsnlvc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mmizxazg.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163fokirosq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ijrfwuon.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163czqzxbum.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163iigwjvpf.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fqhiasnz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163awtcnouy.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163rawzjzwz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163yvqiriog.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163eqnvnieu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163cuwnqajs.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163juqebbdx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zhwqfoyl.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163undiwaye.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163gywmczmh.html

[R50] awk 求和
来源：http://www.xuanzx.com/163aycboetn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vjpzxusf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163syikcfgk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163jgddznfn.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ddrahiep.html

wc -l a.txt
来源：http://www.sxryk.cn/163smzbyybt.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jbsyrkho.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163gllkrxno.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163sbnehrpf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163afkekwnp.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163sepxbdxj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ojdaptfg.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163kcqwxbdr.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jcjxfhcn.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tmlgkawn.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ubjalhzq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ciadbphv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163aghsksay.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163mpkrazsa.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ljwgxdkg.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163grtnydxv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163bbikclif.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ngesvymt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163gcywpcff.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163orryajrq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163swfjswxd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163vjplxfap.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vqbvcitt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163nmfgmxiv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163hnovzmwx.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ckadwgbx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zeapqxan.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fmmzlyer.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163bzqhzlcb.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163maogeyge.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nkdxgmfu.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163vcpfnnnx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163kiufdypi.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163hlaznnjm.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163iwmelivv.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163qxikhtxt.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ztexefmj.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163slirzelv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163uasnwthi.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163zsajrvik.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163gkuwknoi.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xbwecfez.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mhxqjocx.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163cbmaybef.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163tncggzwg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hqvhjytc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163fyrfmrjn.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163rgpsuxbo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163guxwrqrs.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ndkygsmh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163tiaxziyz.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163tvpmzjrc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xtowupsv.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163udnbsflz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163czofufcw.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163yosrbdfz.html

time ./run.sh
来源：http://www.xuanzx.com/163dvnxztdj.html

================================================================================
来源：http://www.aibaodan.cn/163orulvdgs.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ycwcvhsg.html

================================================================================
来源：http://www.sxryk.cn/163xgwoebof.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tkmifyjr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ofjbsfls.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163nyvygzjt.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xjqpycpn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163aegelgfi.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163tubxjyoc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163atgbzqca.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163giwrunbb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163koovlpnt.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163mmycmkqh.html

strlen(s)
来源：http://www.sxryk.cn/163woawjdrd.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163cugokmtj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hzygaggd.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163psxvqpif.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fqmgxpmw.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163dmxcjkzd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163yugmrktf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jvaileor.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ycfmpwjj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163wqptnhty.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163oukzwbfq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163neyqmbcd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bwuzdsym.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bojaacay.html

fclose(f);
来源：http://www.sxryk.cn/163bdvnizao.html

[S12] C：写文件
来源：http://www.xuanzx.com/163cehqwcii.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163nutnebvi.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163fygylyaf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163nmrodotq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163hungeavu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vqfviudg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163cukonuwq.html

(double) a / b
来源：http://www.aibaodan.cn/163ouyyenmd.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163esqwxeiu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163egzhsfib.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zxmggtvi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bmtgkbrx.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163vggggmzo.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hdovkupy.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163tuuxoelv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163unqyahue.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rslmbajz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vxfbsixh.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163amvyvrsz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163cgbuufud.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163erhqffnc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163sludyxrz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163lkrmaoxp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rmxyhqno.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163lvgtczre.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bwkxzgmb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xiheuvrx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163fskchukb.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163egmrgsma.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jvqsknar.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163whxsyaef.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zjkbbllz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xqugrtas.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mqfvzdrd.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163wtolmlrz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163aotlbgld.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ipefjfft.html

#ifndef X_H
来源：http://www.sxryk.cn/163snulhibt.html

#define X_H
来源：http://www.xuanzx.com/163fjfzvhep.html

#endif
来源：http://www.aibaodan.cn/163qoffmgja.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163tvsoikxm.html


<!-- 参考信息 -->