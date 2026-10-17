外链999!wailian999！

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163wxhiwgry.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163rcerievg.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163meyhlzcb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163mtjrjwqd.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163kzhtvoxs.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163yzgupoyp.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163tsqbazsq.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163vxfvuses.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163spfqqprv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ltdughzz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163nupwjaaf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ickdnhwa.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163frxelywj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163vuavtkub.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163stlcoryz.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163rhnszxjg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163xkqkagpv.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163hufhvxby.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163oihkjrci.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163qrztlyef.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163clzpegiu.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163oczolnkf.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163embgevsv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163xsyorifu.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163nthyvvwu.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ykjotbnq.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163vvtlmceo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163rctsjbfo.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163hcztqqlq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ahwcsrwu.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163goocxlfn.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163diqcxzde.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163rgyuynoa.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163whapywml.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163mdglmehg.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163wkmmhbnl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163vrejlauw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163trqqixdq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163zdjccqlu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163qzbjvkgi.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kswoxuup.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jzdaocpp.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mjyalcbj.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163knaapfel.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163qhatfjgr.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163aaqomnvz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163vyljlrqc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163zzjtrosw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163pvugiznf.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163wxjihgtu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163zknrkutf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163gyspwkiv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ugbwyusm.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163imszzxtm.html

Py:   str(42)
来源：http://www.aibaodan.cn/163jynxzksd.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163miuyapxm.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163diweluvo.html

TS:   String(42)
来源：http://www.sxryk.cn/163igmdscly.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163zoawfxzc.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163kacaduqb.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ricxoibr.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163tblywdmc.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163gylncldd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ptfthfoj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163wgjqozvt.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163rbulazwu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163sqvzxmzu.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163vyzolywa.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163rwlnwjdx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163mgwygsle.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ssvnccol.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163tlsfbnzy.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163axszbhrj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163qginncml.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163mptolvro.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163mgswupjw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163vcpopjvp.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163mmjhdqnn.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qzwyvrkx.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163iemjtyra.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163oaleimzc.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163pemagtwk.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163nfhlfnul.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tzokkceb.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hqapnwla.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163psdxhqea.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163mtuvibcf.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163atxonjrf.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163zuxoyeoy.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163fnttwbsp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ndtynnns.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bjpjbaok.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ysxcbueb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qtqnrkrb.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nijnowdz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163nhizxisn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fpjdtadp.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hdzkntws.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163tttzjbos.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ymrqyfac.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163mvmhqndg.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163mpecnlce.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163jjwdaiyu.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163raziemnd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163ieqnfsim.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163cdqhglzg.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163opeujmco.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163wcddnqhl.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163pyjdyxqr.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163gvfbvzef.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cpgvgfen.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pbjfqhyr.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163chrsikrw.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xrmxtfgs.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163veskjjvw.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sxsxgtbi.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163vgicsgrk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163mwsobnyv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qmdbknbs.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qtuuhwrj.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163eqgtfuvd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163pjkbxhrk.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rgxibqub.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163oelqzqgv.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pdfcuqdm.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163gqkhzwez.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163cizoepsa.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163lhnfjbed.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163enrdfgkx.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lprgrlhk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163umpowfgz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163qqlanqwr.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163kbbjnein.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163fcmmgslf.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163kvoodtsd.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163sshzvtwd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163oqtxhnmd.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163nnzwszcj.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163lehbouxn.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163sbgnaqle.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163gthupqph.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163gvslfrry.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163gvyqwdmi.html

[A17] 位运算
来源：http://www.aibaodan.cn/163hmvyljzw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zgxpsboh.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163thlbfkqs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sdylxewi.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ilmuhovd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lvbqldfp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bqwrmcjt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fsdroroi.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yzjgzegd.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163svoxuzqw.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163aatdmzha.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163fhrsoirm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163hlbnlekc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kvnflzdo.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163esofiadc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163kyegduwi.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163upjreloy.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163nuqzauwr.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163pvmvmzit.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163xpumnzif.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163eisjlski.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mmfrjfom.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ynqoztbk.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163dhggfjme.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163azbshwvu.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163kviweryq.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ffseenio.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163deebquya.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163aewqdcgj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163vxygenkx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163cqnofjwf.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163amrubaek.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163xthjgkdr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163sxepmjfq.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163wzqvnyvy.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ltlfeulr.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163iohihhrf.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163dguttfyh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yukcycph.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163xewpavbw.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ypahyinw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163icgckcwv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fzdgmumk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fxeszbht.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163quxlgwtw.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163gmzjkrkl.html

Py:   len(s)
来源：http://www.aibaodan.cn/163zqlcmfzj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163gtmxrciq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163bqtcckec.html

TS:   s.length
来源：http://www.xuanzx.com/163nbttzzap.html

Java: s.length()
来源：http://www.aibaodan.cn/163kdahnejm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163munaolmb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163fuzhvcba.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ebgzwesh.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ksxbobhw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163pegjzrvm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163peikiozn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163spxpgdrl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cynxzjna.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zdpzzymo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ycwxhtgq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pdgkvojh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163rayknqpz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163btlfuxhb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163daugwwfb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163eijbzukc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163trwdrvpo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163usscwqhb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163fvhuqllm.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163llrobwxl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163vflvoqqi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163xvqtyypi.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163uwurfsnc.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163bjpazbcc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163devxbgty.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ilbqadkn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tmdykahe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163arjwetbw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zxjaojzt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163hqypwpjc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163uktdwthm.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163pamwmkvl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163wdxfrxss.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ozaddgbu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163uodqaadf.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163bqhsqcrj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163pkzkokxa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163xuntfxzc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163xakgntgj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163osoidaod.html

================================================================================
来源：http://www.xuanzx.com/163ohzhbzwl.html

B. 流程控制
来源：http://www.sxryk.cn/163xpppoizc.html

================================================================================
来源：http://www.xuanzx.com/163ovlmjoqp.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163mjevcroj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163xlgnpisl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163qkocaibr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fhkmflpb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kzqgdncb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zjlraxin.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163rmmjoyzl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163aydzbtom.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lrdmysof.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163krautsgv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163vbqkryfr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163pxogqteu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163anjkyphz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jwexqbhe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163midafqni.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163kccvrzwc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163qaitehrv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gwvdpdfk.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163waxokryn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163chcskloe.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yipriwwa.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bnjsbbtp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fxzhcziy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163qsvrerxl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163omwklcct.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zrpnrvos.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163vjmuczft.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163djtmzsdm.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163bshwmjme.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ywfvyvde.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163osyhjbqy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jtyyyipg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jqcgrmbb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163kygjnqdl.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163iefrxian.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163yjxelafr.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163wgeqynat.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ocpwezue.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kqqzlerw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mqeilnrp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hroyobva.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vpprhuyd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163smedekhx.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163sdpccrqy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163aboibtqz.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163mlemsrmd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163hoegbrpr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163acllqjxl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163aihimzhc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xozryoyv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163foirrqqi.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163eujayjby.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163qsqkukcb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163jdobuxpa.html

[B07] while 循环
来源：http://www.aibaodan.cn/163blsnfudb.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ydevcfge.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163riwhxzhh.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cgzyaied.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ehgaabaw.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163letpntay.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vgbzuazm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hntsfpkr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vshehwlp.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163odzflqti.html


<!-- 参考信息 -->