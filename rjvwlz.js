外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163pnysgbek.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163zhhvirgu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163ewaletls.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163zdwenbcr.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163btvpyvkk.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163yygrznro.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163mihymkrb.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163yvucjtri.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jkffmhac.html

[A03] 常量定义
来源：http://www.sxryk.cn/163vpnnuoki.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163iovhaxnb.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163cudkymjz.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163nezymjqv.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163njyytaoe.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163civccdvb.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163fxoobyto.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163zdxhmnnu.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bwqsdwgi.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ghxmpgsj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163vxavggka.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163bceghbjn.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163jkxewvkp.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163lqfcbfgc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163bbhqyxcl.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163gsreooum.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163fodewpvh.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163dtzckduu.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163zpucmhgz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163wixkuixk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163yzhoqksb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163rinmsrqf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tineonos.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163agtzmngw.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ocaswstw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nunafuqk.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ksjstagw.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163vxrfkplx.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163gieifsni.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163xuvitrhb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163wxyxiilj.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163tfroqhaz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163zzxjveqw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163hxnqoutx.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163mckmcyoj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163dagvrumy.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163kdbtxvas.html

Py:   str(42)
来源：http://www.aibaodan.cn/163khcriorr.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163cffxbnob.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163oulnepar.html

TS:   String(42)
来源：http://www.xuanzx.com/163fpjpyyoa.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163sbhfmcvx.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163fdnjmezx.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163opizsczt.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163tmuhvqtn.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163kwjsrcyx.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163vlcffrwf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163yrppsrvt.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163suffblqa.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163cvrllvty.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ycyqwsio.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163vjembxpj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163wnlabbmk.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163rcmulsjn.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ulzyvriw.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mpchlwdg.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163tqvtincx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163folmbrbb.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163mobguszc.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ffvhthmn.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163rvvqkpzu.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163rzgqfyhr.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163xhyuwnjx.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163cwtbyknx.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163uqkzhiww.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163mapnksqw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lbpagoyz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nthmylxv.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163cwdwskvv.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163trtjdkdd.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163tvhfpwem.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163bsgnvaiq.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163xpjvvwnq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163bzndqxzt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lixealbc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ugctbhxp.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mkuuhbsg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163aokumiig.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163jzqvvheb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rmljgppj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bsovthgf.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163kuzfgdod.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ilkmgbey.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163vuswtbin.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ntzvjixm.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qdnkgypa.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163szrftwyd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163rntyncid.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163zhkwpcxp.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163phrcamro.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ccqvihvs.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lygkwkso.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163alzkzpoy.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xzytafnm.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vibsoama.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163cdhctzwo.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rnyniger.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163trgwbxsv.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163npamsynd.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163rsgmtprj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163wissflkh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163kicagdhi.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uelhpssk.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fdbqylfq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163eridicrg.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163eopmnpap.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163osvffddq.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ibiiolmy.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ebjzlnxy.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163hokjzyqy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163dcfbaegv.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163usvsqyqi.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tqarctxh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163scdwdiqj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163zcvlenkp.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163tfhbdaen.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163wsiuixqi.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163gogofiys.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163zckygkpn.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qkkmkcfr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163bfkxqyji.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163mubrgdui.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163duxknuzu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163nprhmufx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163irrzczog.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163hacgyebp.html

[A17] 位运算
来源：http://www.xuanzx.com/163suqmjerk.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wdzqdbsu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163zxootyqk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rpvyjsdt.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163xfoyhydi.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163huffnron.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163alygbaca.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uexuphvc.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163byclyoza.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163cafcvdnf.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163kicxgnsg.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jspfcybg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163inxfrebq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zfgpvhza.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163saexsgcg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163gewdxxta.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163oqnyfzdy.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163zvmchipc.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ectiyecr.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163zljntzza.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163kfwypafl.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163djwdvall.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ehlkjxoi.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163dumjnaug.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ttlhdyzh.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163saesship.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163keyshsbo.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163mbatvfdl.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163gejluxrs.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163efcrtsnd.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163dysbfcvt.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163gkyxuaoh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163rvvtdyhr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163zrsxwuqq.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163sqqjsbds.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163sakdpfps.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163dsovxtwi.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163lpjqdlxm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hsypbzfy.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ajbcmptv.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163jutfmqmd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kuveimpy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zvdyrnoy.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bodxoffp.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163lotfaudh.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163aghpaxjg.html

Py:   len(s)
来源：http://www.xuanzx.com/163xswrmczx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163hshvpjcu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163rseoasbw.html

TS:   s.length
来源：http://www.sxryk.cn/163apchlapu.html

Java: s.length()
来源：http://www.aibaodan.cn/163ykpsseah.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163vrorjyww.html

Ruby: s.length
来源：http://www.xuanzx.com/163oznuzrny.html

C#:   s.Length
来源：http://www.aibaodan.cn/163nddpsrkm.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163acibdfdy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163dsoqvxog.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163vqrjwrsg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cdplyugf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cceitrxc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wprtkszu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163bgoqkrpq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163qbkawaum.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ctsrrqtr.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163fxcgphyg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163lagjybox.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163inkfrvyk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uwvzkhad.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163nahlssfv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163yubjriwn.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163kkkbajih.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163eqcbvhak.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163xrxgfhzg.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163bmrzojgt.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163fjuftqou.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163uvqjrpbu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163znlezurr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163wkvattiw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163wdqiwoxf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ruuvsfkh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163tkwgzvas.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163rerrxxwq.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qfhtgbgx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163mqkgeupe.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163bmvejlty.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163zapdgqgo.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163btcjbrqt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163nwqumbdk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163dagwjwtc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163whppujqq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163skyxwdvs.html

================================================================================
来源：http://www.xuanzx.com/163peranzkk.html

B. 流程控制
来源：http://www.xuanzx.com/163zbcinugz.html

================================================================================
来源：http://www.xuanzx.com/163mcjohrfl.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163cyzinmgv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163fwrtdved.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xruwbucp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mwxasyqe.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gnnysxhq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ffqsmfdi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163evqaiuog.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jfmpxrqd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163urapxulg.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qpxtpahu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163wuyhrugr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163rtajofhd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cjusoffj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wntwpfhc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vxgmmfde.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163abwdzarm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163zbkezjzs.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fpwougfu.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163weysueta.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163mzyorirx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163itehhyen.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163eeyzxqky.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mudgfncf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163qzcehpra.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163spsrgwht.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hjmxhnrs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163vulnxcle.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163pfzzkguf.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ucnmmsrp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163eupuixdh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xmmqetxx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xjreqtgf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163elwnuatw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ivrfbclu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163weonmmgz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ljygehjn.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163bxvwkasx.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163tgxmnnxz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163jhixsplq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163kzhcsldr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163aalqfexb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kmsqrkhj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nxjuzvfx.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wtbtnmbc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163meqwvsnp.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163kkuyyeih.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163shwnbizi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163gbkvsyas.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ctrsdmqy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163obriotkp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163fgfcccow.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ofheesde.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wpxphneo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163eubhtyko.html

[B07] while 循环
来源：http://www.xuanzx.com/163nntsydbu.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163dcxskirg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ehvpxvqi.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xbovqdos.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wxmmyjyy.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ppbygjpn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ftlwmkci.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163zeyobgvf.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hlmbdcab.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163rjwywdwo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163zdfydjrq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163eowygxei.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qbcwyzdl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163avqxlpbe.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jgnzzeuy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163jauyfzhq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163cmjbbfqz.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163owvopmoa.html


<!-- 参考信息 -->