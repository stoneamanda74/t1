外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163fkbxkasd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163pmyjaedw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dxvadrhh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163chtskany.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163xycgiepc.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ipgswydt.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zddsqvzt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vwrkgoho.html

================================================================================
来源：http://www.xuanzx.com/163iynnszdj.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163wfxcolfm.html

================================================================================
来源：http://www.xuanzx.com/163mlxidfpn.html

[A01] Hello World
来源：http://www.xuanzx.com/163zhjbvauu.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163zzyhedft.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163puxorvnf.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163ixcqxtyq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163hvcsygwk.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163pgafihwm.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163xgkjyztc.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163jiqgbvbe.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163varxkipb.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163cefvwugs.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ngwjbyey.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163vbdbnxcj.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163cruhvehr.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163nmfsqsht.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163chenynjb.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163xbzvdhhj.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163aouzoqyf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ndvpnzyy.html

[A03] 常量定义
来源：http://www.xuanzx.com/163gheliemc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163gziusmmm.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163glkftrjk.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ldgnjjyu.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163rubauejy.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163birnwvsx.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163fxfilaqj.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163hymkklsy.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163qiwkdiln.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163obefnjpw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163cuhfeczz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163alizzxzr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163opqkbbpq.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163yshscqaq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163flkofsye.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163fjgoswcc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163cxanypwa.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163rrytgpuu.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163pxvfthks.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163gwpljpgw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163encsnfif.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163efiaqubz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163thkjmtci.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qkkmgxwl.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163tibbioaf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ivziytef.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zhpwzulw.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163oxynutpn.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163kmjunzlw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163iphvtndt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163dsegufrw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163twehsnww.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163okrckaxx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163tydwitgk.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163xkrfgcfe.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163vjftnkmf.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163kijhplym.html

Py:   str(42)
来源：http://www.aibaodan.cn/163aplpffiy.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163cdzajzrf.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163tmdonvfs.html

TS:   String(42)
来源：http://www.aibaodan.cn/163waugkabs.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163hyfdbrza.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163knitsaxm.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163ylumhctq.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163qaldfbbe.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163hurasqac.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163lbczyvxt.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163mbfudazf.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163hpemjksw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163jaympmxf.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163hyzddloa.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ytjiyvtv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163jkdcjrmq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ssmymynt.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163wgapkmea.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163vxtlixmw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163fteodjdg.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163zdixxckf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163kfflzaqi.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163zfnzzhdo.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163hsanoxeo.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163wkowjyel.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163cxvzhkxa.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163meknvigd.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163inyzgyrh.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163smnyvcok.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163gsacwvvd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163zwpseafl.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163hpptoikm.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163rqcdnvfv.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163axsjznmd.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163vgyodfko.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163gaxcpcdk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ckhmeqcy.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tdmgvoji.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163aggrvzdw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ghforcms.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rdisatct.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163kxgvwjte.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zxfmwrvb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mhvvuzfy.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163fmiwnrrs.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163dyfcqnxv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163hcrntyqc.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163jsywimbr.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163qklkupzy.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163ezynqatz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163dcdliubj.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163etamhoio.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163tszqfawi.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163bqufuscd.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rrzjlcfg.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163ycuheqwe.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qebhcnld.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xdsqeyra.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163zdrrjmzq.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nqklmhtb.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163jpaqejpo.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jeqnqxid.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163cwmazvnr.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163cjopriia.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163fccskphw.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163waznzuvx.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jatrhcnw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163pqrlgxqr.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ummzenmq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163vjphbxra.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ciaaoyrs.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163nbilquds.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163yvnwvmqt.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163uprrpdkv.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tmauzlqb.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rzzuwyhp.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163nqiqqpjq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163qfcvzsde.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wzjuzwhb.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163pzwvtgym.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163isdtjknl.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163dqfhrild.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163wggmwvhe.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163neltnzba.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163jjnyujnu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ohqgavxy.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163fsoowwrk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163dadnjxte.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163cyjziimd.html

[A17] 位运算
来源：http://www.xuanzx.com/163umpudwdq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zekpgmcz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163itsniyzf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rcuvhveh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zimxbvzt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gheuccrz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dvxposwq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qkfyrgia.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kjxkqjap.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163fsdzzvdh.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163vbsyackl.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163amqzmsaz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163xrjemcad.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163gbyxslce.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163yfzifaba.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dfxnltsn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163evqlrekd.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163gonkwthg.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ocwkwdnb.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163iyicfkjp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163jfzhmxfe.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qbhwyyjd.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163nbdnaxzw.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163difwhwko.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163kwmzuszu.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163nichpjtt.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163pvgvmkij.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163vxesftzm.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163uvlniltf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163kfddchcf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163coryqigo.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163elmchysa.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163yfahnszt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163qnnszhtk.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ugdssteg.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163drttbnfk.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163idostfwa.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163dhfbdpfs.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163abuhdcrs.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ndcrfwwy.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163xykxdhar.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jlfchtoi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sbsptufs.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ugmhwjkt.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163tecxjetz.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163khdttghv.html

Py:   len(s)
来源：http://www.xuanzx.com/163yhvpstuz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163rkocyvkw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163mioqpkvu.html

TS:   s.length
来源：http://www.xuanzx.com/163pjizgqqq.html

Java: s.length()
来源：http://www.xuanzx.com/163okryuxyk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163zydgstab.html

Ruby: s.length
来源：http://www.sxryk.cn/163suywfbem.html

C#:   s.Length
来源：http://www.sxryk.cn/163dbmfhhzh.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163mwqanprs.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163dkiduyui.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ujinphqz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yvwofezw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yhifekzb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fzgshspd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163isatjvrl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163bkbbyqrn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163olvrbhkt.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ywqvzrrx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163pnygonao.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163fqrgvsey.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yjtsmoqg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wmvnlnjr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163bpwcbfbm.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163iegcdfmc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163roxkbheg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163djjfhfxn.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163pwthtsua.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163qhdreiwa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163wjgibeao.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ejyqhylg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163rcxyntfx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xfmihtna.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163zfhvfnpv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163fidvzpuc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163vprjmwwn.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163jifaalon.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163lzxldwrv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163nvhzgebd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163jlkmugoj.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163gufgnblr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163jbevrmit.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jshnuxgj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163aqxyywlq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163iuqtjmqm.html

================================================================================
来源：http://www.xuanzx.com/163hqpjeiuj.html

B. 流程控制
来源：http://www.aibaodan.cn/163rkwbklky.html

================================================================================
来源：http://www.xuanzx.com/163frojohxm.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163wscaszwf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163httieziy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163znmbquib.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sdwnnhmr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pxlqqybb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dataifdd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163cnhccryr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163uafbkrpv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jhsvhyxm.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163fjxzaxmj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163pirhmnei.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163wtcccdvx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zuytaryc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oifpbaxa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hzrroxkv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163dohrsedd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163taeqzjzj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ewkrltmi.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163bwnejsue.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163lgoxcsex.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163sgqdjhrg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qvqzcdrh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163oaegtqpy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163teasoorb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163imirpqum.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163oqilujxa.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163wtmgwoaa.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163zrjykiwt.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163dqjmhxkt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163shcshelo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xztrcuyn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fbhgcvgr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163zllnotcp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163crfkhmqo.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163baeptpzw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163vsixlbhp.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163hpphiiex.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163urybtexs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163erwypbxl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nyghyfaq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ipeuzorr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163qtxsyugs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163mxylfczm.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163kpbihdba.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163zrhxicik.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163erkmwcry.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163dlhqfmzy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163yuqyzqev.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163cvgpydir.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zaodaqyk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ychcpasq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163yzldcxsk.html


<!-- 参考信息 -->