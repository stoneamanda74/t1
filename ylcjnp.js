外链999!wailian999！

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163bqvbyvfz.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163kutgiadl.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163vqfjetwi.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ezptozjz.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163jisahvis.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163ekosdsey.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163spcigplp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163mxlywzul.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163hteiubpu.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ffcyzyfg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163fzjgwvrd.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163xuggmrbn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163azjxqgxd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163aleccgri.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163inaxvyhb.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ypkojwbh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163kwqjiftm.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163wazitguy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163raqqoaym.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163qskrktwt.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ujlegjzk.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163odvkrqjz.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163mvbzlfys.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163uvgshfle.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163udgezkkb.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163pjqfnhdn.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163shkynngd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163jjaiqnpo.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163mavwtcxe.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163imzcnbsi.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163wxzqcioy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163raozosht.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163cwddgsti.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163alclvfgt.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163owpezafo.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163uugfsxvm.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163pzvfigup.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163yiwqgyrz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163muzroavz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163dmixgxxg.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aksixflz.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zzwhnusx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zfcpbdis.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ccenxffs.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163wqqdryqd.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163uqcomjln.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163afkjuemd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163qgwftrnc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163pbyqjrfw.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163hyumfzgw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163batqdglr.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ccukpjth.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163trjxfzja.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163vgprykyd.html

Py:   str(42)
来源：http://www.sxryk.cn/163yerpcvzd.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163jcoqpgul.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163gzeravjc.html

TS:   String(42)
来源：http://www.xuanzx.com/163pgwegyzx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ptmygpcj.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163miybdnke.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163tsexqrtq.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163micwpekm.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163kotuwlyo.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163jphoxpaw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163xytthama.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163rbulfyow.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vuhrtrai.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163gmzfymix.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163zqgaxnxj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163wqnmbqde.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163qyftanpo.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163cermhbey.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163dcxbduds.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163reyorpgn.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163xtmkffhx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163uaekvhmo.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163wrhktbtj.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163wdrpmkfa.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qxsheycl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163kvtjyvpd.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163pmrjyvef.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163iieniexf.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163lmrgpbin.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163mkspzxpa.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ccfwlloa.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163rrqllcms.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163gswdhkrt.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163njteacoz.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163hlurgqjz.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163bzegwuoy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163oolsrzrg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163odyckvzs.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ruiweouw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bbkmikef.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lmgnjobx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163oqhrdlbu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pkmfayek.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yakwoozl.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163utpphycf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163isrlvhng.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163mwfanmym.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163sumrhyak.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163kqzzivud.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163culnqkfa.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163wzzawnjy.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163idaswzfn.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163fpdyecwu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163dalslfns.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rqmrglaf.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163sncwrquw.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jfcyqbdw.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uhkerlyi.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163gjguhddr.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xiaxbgik.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163yglcanbr.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163flksehly.html

[A14] 注释写法
来源：http://www.xuanzx.com/163htjazbvb.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163tgmxdzzb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163wiqoarut.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jcmlyags.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hhojkqra.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163ffygqztn.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163aexodeia.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163rwwficwe.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qpdwnsul.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ilgekile.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163deztdfgi.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163mgtqakxt.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rrpgmume.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rrlwyzgi.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163zqgyflfx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163rehkcvoy.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163qortrsuq.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163sayunknn.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163wmkeqddi.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ghjyomeu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163gahsulqp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163cnammpfj.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163vvgawsnk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163vdehqedu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163nkpwlleo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163weeamgoj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163idmgdgfn.html

[A17] 位运算
来源：http://www.sxryk.cn/163cgsvbbvi.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eehprvyr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163rjksaqcz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lzejzpuy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163theocftk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kheeuigh.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fjhugqjz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bhkckvfv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vbcyafjc.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163aqbqwbqb.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163usntlaro.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163fgcalugt.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163kaxqjhnu.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163svvwrdiv.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163rnomjupv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163qepiahzr.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163eycndcle.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163jvfmahwk.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163werzrvks.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163lzvyqjfp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163vvwosjlu.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163mwesxast.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zyscqddc.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163eypmpjqp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163oremxezr.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163sigasuvt.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163nqpsiqtu.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163obxlfndq.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163aytnbzes.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163gubcuqds.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163pdhlsemw.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163gpfxeldv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ohbwxujb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163gxwyxbfd.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163uhxhzbuz.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163lnwijcyi.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163vnzvooka.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163xqapbhmv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yyzbltit.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rfpcxdgr.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hapgcwyt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xpeagioc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vegzcmla.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vhnkufju.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163xvqlwgsp.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163npivypkh.html

Py:   len(s)
来源：http://www.sxryk.cn/163okyvsgyn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ztmatgav.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163jjloosoq.html

TS:   s.length
来源：http://www.sxryk.cn/163hmtunpxu.html

Java: s.length()
来源：http://www.aibaodan.cn/163kkfhhtxg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163zdcifcxw.html

Ruby: s.length
来源：http://www.sxryk.cn/163nizgflav.html

C#:   s.Length
来源：http://www.xuanzx.com/163rjusegoj.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163gkgcumqm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ctfpnrjo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163papnhets.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zsszqojq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gromefic.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jyxxoydb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ogbrglay.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163obdljfmg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163sijtomgh.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ppaxiuwa.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163logacnux.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163eyoxljsu.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ddytgjnz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uoastxpw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ycrpcsxp.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hoahzcao.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163fycyuoiz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163hmktrjqi.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163adzbdqkp.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163tbmtfdwz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163vntdretr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bdjwdsow.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163eonfhizx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163coqqrpoa.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163kmmnremh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163gwqlonps.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163awtengxy.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163dgiivhii.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163lbdfwhbn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163pgcajkps.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ardifihh.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163whfbpkgv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163pifqbcyv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163vvzgtyjk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163dzahzusm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163mgyphhjv.html

================================================================================
来源：http://www.aibaodan.cn/163weuuncor.html

B. 流程控制
来源：http://www.aibaodan.cn/163hbypbdzk.html

================================================================================
来源：http://www.sxryk.cn/163mwbxymro.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163fbpgahkn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163kbowrvvg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kklppcto.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oxezgwyn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163etubxsgq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gamjazxb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163uoymndok.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ewruiyhl.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lrlyzcyv.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163jzdzoeuw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ldsdxqtg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163stsryhgb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163utfkiucl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zxfjdymb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tgfjjtyh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163uqnwjqew.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163arhrjlhh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163obusfpxh.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xfhwmnmu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ewrjslnc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163nhkpdieo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mipwvewm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lpmqmhbo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163flwxlcdt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163cavlhvxz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163cactfhac.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tjustmev.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163dlrbomxa.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163qyohulct.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163bnhkjlyv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dagipadk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cdsxfarj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163svnezitf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ypgcmxnf.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163sljipwce.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163huetwvnf.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ewapriuh.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163zksikwkm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163vdchuwxk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163yvpybfxc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163amxbwhis.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ermhsprs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163pbagsszk.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ghhlnvtk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163oytsudrm.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163uqaggpns.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163dnvuqrbc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163dfyruowb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jfidlquw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gfrhqyfu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163fusblxks.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163gcxrosyw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163rcaufhha.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qzqjqprn.html

[B07] while 循环
来源：http://www.xuanzx.com/163nkpcdnvo.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163waqaxywi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163pajbsysa.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xkddvpum.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bsbqgayd.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qptbnzzl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kmyulwoi.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163axrkszfb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iyuhlesv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163hjilwphm.html


<!-- 参考信息 -->