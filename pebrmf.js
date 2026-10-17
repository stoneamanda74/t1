外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ovhqygdj.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163bsjiiwoa.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163veomidmh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163czhleymt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163rqrotmmj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xubvgwix.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163odwddhrz.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163isqptgeo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163igvqxnet.html

[A03] 常量定义
来源：http://www.xuanzx.com/163tutclxnz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163uxngbmff.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163cohvmquy.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163okcyvsbc.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163xjvhuyai.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163osazzsgy.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163nlwskrrs.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163nmnagkzk.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163bacntitj.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163mkonuaze.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163ddtkcvxj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163kpvggpxn.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163njmgltjz.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ldkpkgrz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163snusmjou.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163xonkqbrm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163eymejzdw.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163qwrfvibx.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163nvrkbdau.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163hknluzva.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163fthjtgid.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163kdepuyeh.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163tjrwcfqh.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163iefkuxuk.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pkmanrpx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qhrtbxqj.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mxxfkxnu.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163nkgmyblv.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163tjwwhzvr.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163ypevjwkb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163hpbeouth.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163vcbqmrnl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163neuusmju.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163sxlncpaz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163cfmcmqks.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163gskqeqgi.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163wlgmheht.html

Py:   str(42)
来源：http://www.sxryk.cn/163effmkvfx.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163swetocrm.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163yflcesgl.html

TS:   String(42)
来源：http://www.aibaodan.cn/163kketdfzx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ctzgqnhf.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ltssyfly.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163bvksiyer.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ecijbgro.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163vgypjvlw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163lhgwdmpl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163kcolabar.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163oqqwwxvn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163hljgjisr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163padumkbb.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163qrugcxec.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163ynidslll.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163siufwlwv.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163hzcclbny.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163nnbdkjzz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163vzlzletp.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163mceptbvs.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163aqmdvrmv.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163nnocaivp.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163mnnibuah.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163wdrxojzc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163iqcdeslx.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163wbnihltk.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163qpupedkj.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163blxtxrks.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163eypmldrs.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163jetadzwl.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163dwclsohi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163lhqgvoou.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163sdppoxgz.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163dusigilk.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ieoomixi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163mcwkwblm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ayzynrrh.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zvivfzng.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ixpjkoii.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163socwaqqm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163yaowyayx.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vohlxppz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dwtxdhht.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163sddhzokt.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163kmdrbryg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163avtkhptm.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163lregayhy.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163wmwhisrr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163swbwjopu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163eqwqbsju.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163wuikrqcp.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163evecjogd.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163fyncrahz.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ehumtqlc.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163bsxdzmqu.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nuzufsjd.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gscglqwy.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163snrsnffn.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vmxtawpc.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163wxxndcec.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fbkhgdra.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163grptlcry.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163zfpnjikg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163caiikvbs.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gegcgtuu.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163chodlgjs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163dyzacolm.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163uiepvwlc.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mtltbfzg.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uygpsigx.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163lsoedlbs.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163mpbwmgef.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163aassynsk.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wxniffdj.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163mxteioyf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163smihizym.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163oijopxxk.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wdrlgnss.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163yjszigwl.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cokbwxgk.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163cqpdqzup.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163jgwtjong.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163bmpuxrsl.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163sursodri.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163shmueslv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163kqstcikt.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163yslvkxpb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163wisrkomf.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ydpspswr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xfbeqgkj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163ytnckruw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oxalstdu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163idyzzhtk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vmqhykev.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163aikdfddg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lwlwnpqt.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fbotulyw.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163uwxnjueb.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163txsunxss.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163gibzkiep.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163keatdtui.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163imiakqlz.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163prewklgu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163rztcmpjw.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163wxunnmqz.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163mlbnjfut.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163hiewfliy.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163wppczcgo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163melretxl.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ckcklblw.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ljtqjafx.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163gdwuevao.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ieodykkr.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163kesogjna.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ejoudnpd.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163eelfiqvw.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163hwgbyhuk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163tizousbo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163tllprxax.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163bcvymdzi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163uxdnppro.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163nslnwjat.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163rjvfcayw.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163anhlerbs.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163tupjbvoc.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163iegtjxsd.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dwwkzbaz.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163gzifdqho.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163txxqjqkh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163brzojeca.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163waxoxufp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qxbguqqb.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163rrzokrdh.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rohknctb.html

Py:   len(s)
来源：http://www.xuanzx.com/163ihdbvpjv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163rngrzdgi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163uwdhnoms.html

TS:   s.length
来源：http://www.sxryk.cn/163bhngsykp.html

Java: s.length()
来源：http://www.sxryk.cn/163eawanyri.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ynoxmize.html

Ruby: s.length
来源：http://www.sxryk.cn/163dxjittwh.html

C#:   s.Length
来源：http://www.aibaodan.cn/163gqjijhsa.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163xohhyqwg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163syirflrj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163jgdluqfx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yfnkcmuj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xsmianzk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qewmxjsb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163pszazrbs.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163hytlpxzj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163hkgpytqo.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163jyycwbvf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163mjwigegi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163jehurmnc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qrnernpn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ruzlobnn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163tngqaimw.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163dolsdxhq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163flaqjurl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163zkjhvdam.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ncftutnv.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163zmxfdfom.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163mrnjlsbi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ptabytvc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163szybuaht.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163juzmyzyx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163xwtpejpf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163prjvxzky.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lmimggjz.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163dcaoomwj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163xuhrlcop.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163rcfpbpap.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163srammgst.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163zzxbxxtu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ejoguvzz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163xqfagznf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163duvyxpjt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163zawqgxcw.html

================================================================================
来源：http://www.aibaodan.cn/163ldlgmiqs.html

B. 流程控制
来源：http://www.xuanzx.com/163htzmqzyq.html

================================================================================
来源：http://www.xuanzx.com/163sidgzflk.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163heefhhgh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fhgrylmy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163dfynqdsi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wdxtxzaw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ikcajsvl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zbpwjyds.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163oinzpakb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163bvlbcjut.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zgbvhznh.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ixtjbnzb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163qwszawfr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163kopjfqrz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cfscluey.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lcthdpvd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qytnyylw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163rfajhhrc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163nfisdjvg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hxtpuemt.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163dxgkmfiu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163agiztjll.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163quxojggz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163couvizyx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lechcero.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163sgddwfue.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163etyqijuv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163reymarba.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163hsmpndjz.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ixcygehq.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163mkxcpfca.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163lntjhteq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fnsokmxp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163utitwkyb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163pgiibbkg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163bkxqjxyq.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163hvxxguud.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ragcvbmz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ltuxgbrt.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163lwwjfble.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163uafdmbex.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163aaifnjix.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tothxfwi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163mfffnzlt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163jpzslwze.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bhzyhryy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163fdzrofby.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163laxeemmu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mtfeyehh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163lqoroztj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xjkfbfip.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hgwdqqfh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163sqgncdgu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163sewofija.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163lheureuq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163adwpfzga.html

[B07] while 循环
来源：http://www.aibaodan.cn/163yvmhuisz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163nsnkxvli.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163jyzkbceg.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wdpuvrne.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mavsnews.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mgcpxbtm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163uhvmofdu.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ewffwgkl.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sssufecd.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163qumadgku.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163unpqqmxl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163izlxkjbx.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gzithury.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163olzokxrg.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qerzbrhr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163sqsmzjyo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163eitdxbjl.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vsoltvzk.html


<!-- 参考信息 -->