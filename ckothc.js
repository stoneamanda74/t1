外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163vgznclbz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163ptqxceok.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163awrzzavl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163dysbkgsz.html

================================================================================
来源：http://www.xuanzx.com/163mghbpxyu.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163pjecrixp.html

================================================================================
来源：http://www.sxryk.cn/163oorcmssf.html

[A01] Hello World
来源：http://www.aibaodan.cn/163qhagraaw.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163emxjmjye.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163fjsjcebu.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163efvejlwc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ejntxmzx.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163lnrsdqzv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163igksuulr.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163scuambqi.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163aeyxrjsv.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163jdnnspme.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163detfnavo.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163nnnhtscv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163uicbbwvz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163dqrlryrr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163kvgrnryo.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163eeednvmu.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163qrzmxoih.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163hfzzulax.html

[A03] 常量定义
来源：http://www.sxryk.cn/163xbausgsv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163wftscqnq.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163lgouzgve.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163bacwbxvu.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ghbvpvsa.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163wgrcllwj.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163mvqlosip.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163wnonjdlh.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163chiiuzqu.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163qzhjokbh.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163ksfdkntp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163xrfmqyfk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163enwuvcta.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163kiieobyz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163bkyedniu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163tbgmuzck.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163muecuirx.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163kbbirkla.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163rbwavoky.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163legsomnb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163uvgcbgqu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163qidympyo.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bcdajzie.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jynbxwdn.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ywincvui.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nxuohivp.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163igmpgwqw.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163uroqalwv.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163qpsmlitt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163eozeebnc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163xxkbaoyn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163sdttltlb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ymhbtbwc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163alhvkjre.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ndarzxoh.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163ifhsdowi.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163izcpftzt.html

Py:   str(42)
来源：http://www.sxryk.cn/163vjgjssbc.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163jsukfvla.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163skowkmyd.html

TS:   String(42)
来源：http://www.xuanzx.com/163unxeztih.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163hehedftu.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163gfjtljay.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163cbnbhwga.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163eydcxuqu.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163opsweqjk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163wavyjwje.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163stfeobwc.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163vwuqoxnk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163hcibvczt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163njhhfamd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163nuzqsbyb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163biceeklp.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163xvznvscm.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163qdyuzayd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163dynrkeks.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163brhgeket.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163owbsozig.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163nxqvyzwp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163muhchmtc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163xwxzymvn.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163pscqoqqh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163nqdqpsdd.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163kfthdaqz.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163dlbaakkl.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163cspnutlq.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ahrqvwdb.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163gyascapv.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163orhtbuse.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163lqzhettj.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163mdzymaiq.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163nazwxljp.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163lqwuyahp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163zdifyqrn.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cusrnvvh.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kwgsnqck.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mqrcbpzc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jkgitulz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163bphmbwer.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163udjapbfh.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rzqhhskl.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163nhtwrnns.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163pthkwrgs.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163fwjpbunk.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163plwwrpjj.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163fkgeqyvi.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163uootngcd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163midvoowt.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163auprswbg.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163fsbtpvpf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163dvwcpmiz.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163koltpidv.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163onjmwexu.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jnsviuww.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qxfmynep.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163uwgzvgle.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163apleocgh.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163zqvgbmic.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163whoncyjo.html

[A14] 注释写法
来源：http://www.xuanzx.com/163kcvtcrez.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163lfltftsa.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163illgjxxs.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vgastwqk.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wjylkfqz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163apelqujg.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163dcecuufx.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163wrykifia.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pcuqvuki.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163zepymetl.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163qltihjku.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163zaeysdbl.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jgznydvc.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163caiiclxj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163waqxphve.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163lssyazzw.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163klknwtcv.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163gueteffu.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163lcgvbycp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163esvqucnx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ctxiqbho.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163jgdhfrih.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163qwmaiait.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163mdlpewhv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163sziqfnqe.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163gaixlchg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163wdxnjlun.html

[A17] 位运算
来源：http://www.xuanzx.com/163hjhnvpht.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zlxofqig.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163zjjotljf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hjgkxsic.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nyzgishf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vwaohtkb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cbjnkxgu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qibbgpiv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eazjgirp.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163pbfmrtvs.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163uyofnhbs.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jdyfuofp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163hkvdflgw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163neqmduod.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163qrvwtorj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163dkhyotfi.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163qtuuzryn.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163bjfutfvg.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163yzkiuqqz.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163afwtqrav.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163ezofdfoi.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163oroedlse.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zsjlpnku.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163kskhljkt.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163qvhmdzxm.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163nhwszeaf.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163exsmrdsn.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163pxtexfuk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163squwtekd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163hwtfdzla.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163hxyuwxom.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163pdeeusno.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163luztjpem.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163egpyyplc.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163bddtygfs.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163gdvqznxy.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ejoxcgbg.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163lxfoolbh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163boujpgqi.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vswaoytd.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163zqiukxnz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wmahqxsh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nnfoqnnn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pvsezsuq.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163iowwizuv.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163gbmrczui.html

Py:   len(s)
来源：http://www.xuanzx.com/163cxejuknz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ldbhgyrx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163aaavrlvl.html

TS:   s.length
来源：http://www.sxryk.cn/163tbussejm.html

Java: s.length()
来源：http://www.xuanzx.com/163usloygnp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163gmlwfjis.html

Ruby: s.length
来源：http://www.xuanzx.com/163pmotczoj.html

C#:   s.Length
来源：http://www.aibaodan.cn/163fdwchljo.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163tjgmhuam.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ysfkhgex.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163vnarwihv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163uhlzevbk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mdxirpas.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163avybjkor.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163xbhxiccb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tzhyiaos.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ozvlhjta.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ajbjbxqg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163kwwqrcqe.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163muqrzfas.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163cgriowrd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vjspwaqn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163umawayfh.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163lvqfjyms.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163zdwsblrj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163qclirfsh.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ovtibbnc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163bpygnydo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163irzkzjst.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zlhtvjge.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163pghazqbs.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163kewkltov.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163rjnidfez.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163wsaokyzm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hogmkecr.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163jhzxnqgl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163bjwielon.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163bdcxbklv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163sfjeqspt.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163lwwnxthi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163bniznkgr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163rrmelazs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163cvkjixdq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163rrgczwpr.html

================================================================================
来源：http://www.aibaodan.cn/163mewlqxjf.html

B. 流程控制
来源：http://www.aibaodan.cn/163mnajprrz.html

================================================================================
来源：http://www.xuanzx.com/163ycwcyayn.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163jldvxthw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163kxroekwe.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163dttulgkp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jzvjwwpj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kdohwbmd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mrevvnzz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163higmbexp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jiurdfcy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qdmifjnp.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163mchpkssc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163qqgwouts.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163eqcrvhep.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163luezturr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rnnjfevw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163epadohxj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qboqfftn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163qinprfvp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qkkziydg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ymonkfnz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163xvhugzkd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163lnipblme.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nmvcaotu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vimduyzy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163xifjpzdc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163sjfxbjux.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163zlwsafci.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163xdhgsfth.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163jybmkszn.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nzvitdgb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163dglxqqna.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qcppckkm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hmfruupf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163qdocbrtz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163sbinowua.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163yyyxiuok.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163eorxsalh.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163kgznghuz.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163cjzlauop.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163zhpckkxh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163lkfcglxx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zwyedhkw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163kmlygkfi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163bjvhaazc.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163jioloqts.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hflbgvce.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163iwunaqjk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pgwlsalk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163czyyhggq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163flhqiwpt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wstlueqy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163lhydztzx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163pgwvzgtt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tdhogtyt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163tdhrckve.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ugzlykyd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163dinofzhz.html


<!-- 参考信息 -->