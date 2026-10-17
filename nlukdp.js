外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cnqktwcz.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ugzpvsal.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163phscecup.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163zzvjcbgs.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ywmvzybe.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163ymtusucc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dowzqdsd.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qeejnrpt.html

================================================================================
来源：http://www.aibaodan.cn/163wnuwhmig.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163pzfsfnlb.html

================================================================================
来源：http://www.aibaodan.cn/163mfvebbzt.html

[A01] Hello World
来源：http://www.sxryk.cn/163luslzrhp.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163feqhcfyy.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163idavjeri.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163qlnsdtfx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163uoytrnds.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163mdfjkokh.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163rpuyskzi.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163qdyzzbdc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163wghnookk.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163svachxpa.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163zztqvfgq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163vlisczgx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163yobvlgvu.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163wuyqoysy.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163kcioerld.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163zsprzulv.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ficszxfd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163qwomcrpx.html

[A03] 常量定义
来源：http://www.xuanzx.com/163zyqfacdf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163kctupnvq.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163pyrfgqlo.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163sulfnnnc.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163sxwjcfnh.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163uuxjtxwv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ahvdozjp.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163fdahyoub.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163dnnxjoge.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163fuzkpdgm.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163hmtfzzix.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163xavlsyat.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ylbzdlea.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163vjpkltjb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163zpesotro.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163oixdyefj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163huqafnqd.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163dtxbiyyf.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163kbydhjxc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163qijscsfv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163pedqyehf.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163nbqccxdv.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163eiqpcfqa.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nqffoocl.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163znivqhiz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163arswrhgc.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vdhbtfeg.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163wczsxlxw.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163tmumudhn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163atbccunj.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163wrhpbwok.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163bbrtorzu.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163qrgihmhh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163clyisbbt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163bncckktp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163bdsbyhrx.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163hdchxxsj.html

Py:   str(42)
来源：http://www.sxryk.cn/163wymgflap.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163zugvfajd.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163qlvfjlgx.html

TS:   String(42)
来源：http://www.xuanzx.com/163sctboilm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163dnqomkiw.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163rxsfqmzj.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163narvltrl.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163yfdtzypv.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163izxgzbpj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163zipvqpgr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163culrabes.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163vsiljswd.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163fiqkbvfr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163eflkkcpf.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163kyvzspjg.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163zbqmgagh.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163epqiiezx.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163sdaixkeq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mtijpmgq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163jnrhclsv.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163eauolndr.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ywcaejak.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163hkjbdssa.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ajwxcxjp.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163aglrjhgu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163rmqmwugn.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163trcjjkzv.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xnzptfoy.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163ykfsywsr.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163qdowzzqx.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163idavvoty.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163cssskpcg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163dxszpwfn.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163gamfosqx.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163fwzypmos.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163wttkdqev.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163rvgshukl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wosaenlp.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vhnjcwxx.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xyzfilkg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163snkedhjo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163yquzynwb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rzfevjyx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cbrezdur.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163licyxqem.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ajtoxscn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ygauenxa.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163jgujwcxo.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163drjbzpzy.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163smhlosyv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163yjmgqviv.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163pdrgsprh.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163xgovydfc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163vpgrkfer.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ghlloeae.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163wizfmikj.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163piicjyzd.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wtidlqhh.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163mlurgesn.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fvvldiwi.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163erwtwynj.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qahfefid.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163xwobblbo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163hzrluzrf.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163hqqelsbd.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lsqixiov.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tfqsqpzf.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163boyktpsg.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163igzsibdd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163bavnqpoc.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lmkbbqgo.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163kardsbps.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163hqubljoj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163kfyiakqe.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163exvlvxbt.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163orbdafct.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163gvxtxiah.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163vjmyamdi.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163shfxvffk.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ycyddkef.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163msmcclzi.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163aleyhbwt.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163xlcbxand.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163gshxbiqn.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163lgqbpjjg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163erjtyswj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ohqgcerz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163lhrznjlh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163zzusxeed.html

[A17] 位运算
来源：http://www.xuanzx.com/163qsfhnmyt.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163oxzmbysx.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163yfirxnpp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xjoqiqti.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163swiiiubt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gtssuhal.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xaikbefi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163aqulzpxv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hhfsogin.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163koxhohyt.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163zdklglzg.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163jchdfibs.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163zrudldib.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163upkjpbup.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163mbuxldsj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163bwancqba.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163fehrtzpz.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163giwoxbkb.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163hcmaftco.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163gybpsmyv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163bjcjhcxl.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163nzxjogwa.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163raqfqake.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163xrfipzme.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163fbwhuppk.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hdcaypef.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163riutcvrg.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163tqkpzeug.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163lbazewhy.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163wbxdwlsw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163jdyljatr.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163cqjlfqpx.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163dlazenyw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ialhaguk.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wcenisdp.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163myeodjaz.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163xibqirgt.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163baprjjrl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yvndkyno.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ejktyfcv.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163nlymllic.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kolvzwhc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nhwxqjlu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hpwsxvrd.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163nkuigkxx.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163wndlplpq.html

Py:   len(s)
来源：http://www.sxryk.cn/163ufwkhezt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ergrhfmw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163cnxrglta.html

TS:   s.length
来源：http://www.aibaodan.cn/163ksmmbllv.html

Java: s.length()
来源：http://www.sxryk.cn/163dgyaxfiz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163hamnxshs.html

Ruby: s.length
来源：http://www.xuanzx.com/163ditnlswx.html

C#:   s.Length
来源：http://www.xuanzx.com/163uqemrmeq.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163jxvajeux.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163qblwxcqh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163vzmtxfdc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wkgzyarq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163iyrhiyoy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163klbooxqm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ickjlfod.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163zlpbqynm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163spwvrxzg.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163cpxsbhib.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163kyozeeqa.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163jegxswcz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rbekfaaw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163enlgbnoz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ltttoodo.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163gwwqkuve.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163uxqnukmz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163rcummsgo.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163cxtuqwtq.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163vrndxonp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163xmlrnhzk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ykavjyoj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163wywkxkja.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163fukfeuob.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163xabgutyd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ydpchxxa.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163qzgiefxu.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163cshoivwx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163kknnyaic.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163autfclhh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tjwzzeyv.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163tchvzcnp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163zuotbswy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163spmvtwjq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163tetxprxj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163cluhwzov.html

================================================================================
来源：http://www.aibaodan.cn/163oqgurhyk.html

B. 流程控制
来源：http://www.xuanzx.com/163zbcwjfot.html

================================================================================
来源：http://www.sxryk.cn/163qcvtxwha.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163rhwxrmyw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hjznwpmg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163mcrxorio.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hxsfijym.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tgjmdeot.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eomlesfz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163znltllhs.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ahikjhey.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pdilxikm.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163adugyvqc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ztybdgjf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ylkcgbub.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dncwjkki.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uezbzdvc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mjdbxhze.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ijwkgvcd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163kveolngc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ircqvwnm.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163gxnchlwb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163aezunefg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163gherwmle.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163khmxefvx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vopmeayh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163otgmdxdg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163telvbyhk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163yngbxofn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163xmtrknfj.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163khmtxqge.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163uixjahxx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163psdwwqoz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jtjeungf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qmtsozwv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163xmzbpzyx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ebodqhty.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ixljvblc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163eirohnnl.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163spfxbiyx.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163lgxtmwro.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163cjrpxfym.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jzrvlyfs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ukwutrwv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163vbidrmgu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pquqyddi.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163wrstdafb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ckiuxnxb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163gdvafsrk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163yiemsrqz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163skxvmaxz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bmdqxxae.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yurahiup.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163bqunjkix.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163cifwevfz.html


<!-- 参考信息 -->